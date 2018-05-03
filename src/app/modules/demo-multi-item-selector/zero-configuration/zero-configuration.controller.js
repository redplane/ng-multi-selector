"use strict";

module.exports = function (ngModule) {
    ngModule.controller('multiZeroConfigurationController',
        function ($scope, $customer) {
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
                $customer.loadCustomers()
                    .then(x => {
                        $scope.customers = x;
                    });
            };

            //#endregion
        });
};