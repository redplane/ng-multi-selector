"use strict";

var ngModule = angular.module('ngMultiSelectorSite');
ngModule.controller('zeroConfigurationController',
    function ($scope, customerService) {
        //#region Methods

        /*
        * List of items
        * */
        $scope.customers = null;

        /*
        * List of chosen customers.
        * */
        $scope.chosenCustomers = null;

        //#endregion

        //#region Methods

        /*
        * Called when component has been initiated successfully.
        * */
        $scope.init = function () {

            // Get customers list.
            customerService.getLocalItems().then(function (x) {
                $scope.customers = x;
            });
        };

        //#endregion
    });