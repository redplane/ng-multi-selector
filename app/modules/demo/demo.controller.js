"use strict";

angular.module('app.module.demo')
    .controller('demoController',
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
            $scope.init = function(){

                // Get customers list.
                customerService.getLocalItems().then(x => {
                   $scope.customers = x;
                });
            };

            //#endregion
        });