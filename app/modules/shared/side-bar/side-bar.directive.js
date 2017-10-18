'use strict';

angular.module('app.shared')
    .directive('sideBar', function () {
        return {
            restrict: 'AE',
            templateUrl: 'modules/shared/side-bar/side-bar.directive.html',
            replace: false,
            scope: null,
            link: function (scope, element, attrs, controller) {
            },
            controller: function ($scope) {
            }
        };
    });