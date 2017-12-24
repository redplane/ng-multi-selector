'use strict';

/*
* Application declaration.
* */
var ngModule = angular.module('ngMultiSelectorSite', [
    'ui.router',
    'ngMultiSelector'
]);

/*
* Application configuration.
* */
ngModule.config(
    function ($locationProvider, $stateProvider, $urlRouterProvider, urlStates) {
        $locationProvider.hashPrefix('!');

        // Get demo page.
        var urlStateZeroConfiguration = urlStates.demo.zeroConfiguration;
        $urlRouterProvider.otherwise(urlStateZeroConfiguration.url);
    });