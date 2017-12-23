'use strict';

var ngModule = angular.module('ngMultiSelectorSite');
ngModule.directive('navigationBar', function () {
    return {
        restrict: 'AE',
        templateUrl: '/directives/navigation-bar/navigation-bar.html',
        replace: false,
        scope: null,
        link: function (scope, element, attrs, controller) {
        },
        controller: function ($scope) {
        }
    }
});