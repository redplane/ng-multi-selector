'use strict';

angular.module('app.shared')
    .directive('navigationBar', function () {
        return {
            restrict: 'E',
            templateUrl: 'modules/shared/navigation-bar/navigation-bar.directive.html',
            replace: true,
            scope: null,
            link: function (scope, element, attrs, controller) {
            },
            controller: function ($scope) {
            }
        };
    });