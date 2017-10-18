"use strict";

angular.module('app.module.demo')
    .config(
        function ($stateProvider, urlStates) {

            //#region Methods

            // Basic initialization.
            $stateProvider.state(urlStates.demo.name, {
                url: urlStates.demo.url,
                templateUrl: 'modules/demo/demo.html',
                controller: 'demoController',
                parent: 'authorize'
            });

            //#endregion
        });