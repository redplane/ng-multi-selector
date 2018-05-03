"use strict";

module.exports = function (ngModule) {
    ngModule.controller('demoController',
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

            /*
            * List of messages which should be displayed.
            * */
            $scope.messages = [];

            //#endregion

            //#region Methods

            /*
            * Called when component has been initiated successfully.
            * */
            $scope.init = function () {

                // Get customers list.
                customerService.getLocalItems()
                    .then(function (x) {
                        $scope.customers = x;
                        return x;
                    })
                    .then(function(x){
                        // $scope.chosenCustomers = [x[0]];
                    });

            };

            /*
            * Event which will be emitted when keyword is entered.
            * */
            $scope.getApiItems = function (keyword) {
                let szMessage = 'Key word has been emitted: ' + keyword;

                // Initiate a new message.
                $scope.messages.push(szMessage);
            };

            /*
            * Get random item.
            * */
            $scope.fnGetRandomItem = function(){
                let iItemIndex = $scope.fnGetRandomNumberInRange(0, $scope.customers.length);
                $scope.chosenCustomers = [$scope.customers[iItemIndex]];
            };

            /*
            * Reset model.
            * */
            $scope.fnResetModel = function(){
                let itemForm = $scope.itemForm;
                if (!itemForm)
                    return;

                // Reset model.
                $scope.chosenCustomers = null;

                // Get controls.
                let controls = itemForm.$$controls;
                if (!controls || controls.length < 1)
                    return;

                for (let index = 0; index < controls.length; index++){
                    let control = controls[index];
                    control.$setPristine(true);
                }

                itemForm.$setPristine(true);
            };

            /*
            * Get random number in range.
            * */
            $scope.fnGetRandomNumberInRange = function(min, max){
                return Math.floor((Math.random() * max) + min);
            }
            //#endregion
        });
};
