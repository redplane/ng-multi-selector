"use strict";

// Templates import.
var ngAuthorizeLayoutTemplate = require('./authorize-layout/authorize-layout.component.html');

module.exports = function(ngModule){
    ngModule.config(
        function ($stateProvider) {

            // Authorize layout.
            $stateProvider.state('authorize', {
                abstract: true,
                template: ngAuthorizeLayoutTemplate
            });

            // Un-authorize layout.
            $stateProvider.state('un-authorize', {
                abstract: true,
                template: '<ui-view></ui-view>'
            });

        }
    );
};