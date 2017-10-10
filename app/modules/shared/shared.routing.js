"use strict";

angular.module('app.shared')
    .config(
        function ($stateProvider) {

            // Authorize layout.
            $stateProvider.state('authorize', {
                abstract: true,
                template: '<ui-view></ui-view>'
            });

            // Unauthorize layout.
            $stateProvider.state('unauthorize', {
                abstract: true,
                template: '<ui-view></ui-view>'
            });

        }
    );