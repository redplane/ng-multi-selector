'use strict';

// Templates import.
let ngModuleHtml = require('./demo.html');

module.exports = function(ngModule){
    /*
      * Module routing.
      * */
    ngModule.config(
        function ($stateProvider, urlStates) {

            //#region Methods

            // Basic initialization.
            $stateProvider.state(urlStates.demo.name, {
                url: urlStates.demo.url,
                template: ngModuleHtml,
                controller: 'demoController',
                parent: 'authorize'
            });

            //#endregion
        });
};