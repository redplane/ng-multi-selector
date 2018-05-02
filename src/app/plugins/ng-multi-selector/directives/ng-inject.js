module.exports = function (ngModule) {
    ngModule.directive('ngInject', function () {
        return {
            restrict: 'A',
            scope: false,
            link: function ($scope, $element, $attrs, controller, $transclude) {

                $scope.$watch($attrs.ngInject, function(value){

                    if (!value)
                        return;

                    if (!$transclude) {
                        throw minErr('ngTransclude')('orphan',
                            'Illegal use of ngTransclude directive in the template! ' +
                            'No parent directive that requires a transclusion found. ' +
                            'Element: {0}',
                            startingTag($element));
                    }

                    let innerScope = $scope.$new();
                    $transclude(innerScope, function (clone) {
                        $element.empty();
                        $element.append(clone);
                        $element.on('$destroy', function () {
                            innerScope.$destroy();
                        });
                    });
                });
            }
        };
    });
};