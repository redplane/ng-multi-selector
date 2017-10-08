"use strict";

angular.module('app.kneadingCommandManagement')
    .config(
        function ($stateProvider) {

            //#region Methods

            // Input kneading command.
            $stateProvider.state('input-kneading-command', {
                url: '/input',
                templateUrl: 'modules/kneading-command-management/input-kneading-command/input-kneading-command.component.html',
                resolve: {
                    // kneadingCommands: function (kneadingCommandService) {
                    //     return kneadingCommandService.getKneadingCommands().then(function (x) {
                    //         return x.data.commands;
                    //     });
                    // }
                },
                controller: 'inputKneadingCommandController'
            });

            // Start stop kneading command.
            $stateProvider.state('start-stop-kneading-command', {
                url: '/start-stop',
                templateUrl: 'modules/kneading-command-management/start-stop-kneading-command/start-stop-kneading-command.component.html'
            });

            //#endregion
        });