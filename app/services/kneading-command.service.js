"use strict";

angular.module('app.service')
    .service('kneadingCommandService', [
        '$http',
        function ($http) {

            //#region Methods

            /**
             * Get kneading commands list.
             */
            this.getKneadingCommands = function(){
                return $http.get('/assets/data/kneading-commands.json');
            };

            //#endregion

        }]);