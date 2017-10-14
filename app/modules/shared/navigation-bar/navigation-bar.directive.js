'use strict';

angular.module('app.shared')
    .directive('navigationBar', function () {
        return {
            restrict: 'AE',
            templateUrl: '/modules/shared/navigation-bar/navigation-bar.directive.html',
            replace: false,
            scope: null,
            link: function (scope, element, attrs, controller) {
            },
            controller: function ($scope) {
            }
        };
    });