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
                              $scope, urlStates) {

            //#region Properties

            // Url state constant reflection.
            $scope.urlStates = urlStates;

            //#endregion

            //#region Methods

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
