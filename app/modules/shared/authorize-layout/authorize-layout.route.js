'use strict';

/*
* Route declaration.
* */
var ngModule = angular.module('ngMultiSelectorSite');
ngModule.config(
    function ($stateProvider, urlStates) {
        // Authorize layout.
        $stateProvider.state(urlStates.shared.authorizeLayout.name, {
            abstract: true,
            templateUrl: '/modules/shared/authorize-layout/authorize-layout.html',
            controller: 'authorizeLayoutController'
        });
    }
);