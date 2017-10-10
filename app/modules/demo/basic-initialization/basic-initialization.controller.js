"use strict";

angular.module('app.module.demo')
    .controller('basicInitializationController',
        function ($scope, customerService) {

            //#region Properties

            $scope.options = {
                isSearchBoxAvailable: false
            };

            /*
            * List of chosen items.
            * */
            $scope.chosenItems = null;

            /*
            * List of items to be displayed in multi selector control.
            * */
            $scope.items = [];

            //#endregion

            //#region Methods

            /*
            * Callback which is raised when component has been initiated successfully.
            * */
            $scope.init = function () {
                customerService.getLocalItems()
                    .then(function (x) {
                        $scope.items = x;
                    });
            };

            /*
            * Callback which is fired when component starts searching for a keyword.
            * */
            $scope.search = function(keyword){
                console.log(keyword);
            };
            //#endregion
        }
    );