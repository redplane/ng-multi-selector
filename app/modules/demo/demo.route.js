'use strict';

/*
  * Module routing.
  * */
var ngModule = angular.module('ngMultiSelectorSite');
ngModule.config(
    function ($stateProvider, urlStates) {

        //#region Methods

        // Basic initialization.
        $stateProvider.state(urlStates.demo.name, {
            url: urlStates.demo.url,
            templateUrl: '/modules/demo/demo.html',
            controller: 'demoController',
            parent: urlStates.shared.authorizeLayout.name
        });

        //#endregion
    });
