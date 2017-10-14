"use strict";

angular.module('app.shared')
    .config(
        function ($stateProvider) {

            // Authorize layout.
            $stateProvider.state('authorize', {
                abstract: true,
                templateUrl: 'modules/shared/authorize-layout/authorize-layout.component.html'
            });

            // Unauthorize layout.
            $stateProvider.state('unauthorize', {
                abstract: true,
                template: '<ui-view></ui-view>'
            });

        }
    );