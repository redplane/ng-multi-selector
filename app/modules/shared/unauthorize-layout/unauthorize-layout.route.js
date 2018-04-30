'use strict';

/*
* Route declaration.
* */
var ngModule = angular.module('ngMultiSelectorSite');
ngModule.config(
    function ($stateProvider) {
        // Un-authorize layout.
        $stateProvider.state('un-authorize', {
            abstract: true,
            templateUrl: '/modules/shared/unauthorize-layout/unauthorize-layout.html'
        });

    }
);