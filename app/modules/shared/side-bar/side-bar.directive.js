'use strict';

angular.module('app.shared')
    .directive('sideBar', function () {
        return {
            restrict: 'E',
            templateUrl: 'modules/shared/side-bar/side-bar.directive.html',
            replace: true,
            scope: null,
            link: function (scope, element, attrs, controller) {
            },
            controller: ['$scope', function ($scope) {
            }]
        };
    });