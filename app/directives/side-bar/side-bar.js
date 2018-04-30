'use strict';

var ngModule = angular.module('ngMultiSelectorSite');
ngModule.directive('sideBar', function () {
    return {
        restrict: 'AE',
        templateUrl: '/directives/side-bar/side-bar.html',
        replace: false,
        scope: null,
        link: function (scope, element, attrs, controller) {
        },
        controller: function ($timeout,
                              $state,
                              $scope, urlStates) {

            //#region Properties

            // Url state constant reflection.
            $scope.urlStates = urlStates;

            // State service reflection.
            $scope.$state = $state;

            //#endregion

            //#region Methods

            /*
            * Check whether user is in demo page or not.
            * */
            $scope.bIsInDemoPage = function(){
                var urlStateDemos = [urlStates.demo.zeroConfiguration.name, urlStates.demo.customTemplate.name, urlStates.demo.withKeyProperty.name];
                var items = urlStateDemos.filter(function(x){
                    return $state.includes(x);
                });

                if (items == null || items.length < 1)
                    return false;

                return true;
            };

            /*
            * Initiate treeview.
            * */
            $timeout(function(){
                $('ul[data-widget="tree"]').tree();
            }, 0);

            //#endregion
        }
    };
});
