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
        var urlStateDemo = urlStates.demo;
        var urlStateZeroConfiguration = urlStates
        $urlRouterProvider.otherwise(urlStates.demo.url);
    });