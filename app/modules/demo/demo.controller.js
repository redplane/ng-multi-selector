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
            customerService.getLocalItems().then(function (x) {
                $scope.customers = x;
            });
        };

        /*
        * Event which will be emitted when keyword is entered.
        * */
        $scope.getApiItems = function(keyword){
            let szMessage = 'Key word has been emitted: ' + keyword;

            // Initiate a new message.
            $scope.messages.push(szMessage);
        };
        //#endregion
    });
};
