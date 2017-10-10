"use strict";

angular.module('app.module.demo')
    .config(
        function ($stateProvider) {

            //#region Methods

            // Basic initialization.
            $stateProvider.state('basic-initialization', {
                url: '/basic-initialization',
                templateUrl: 'modules/demo/basic-initialization/basic-initialization.html',
                controller: 'basicInitializationController'
            });

            //#endregion
        });