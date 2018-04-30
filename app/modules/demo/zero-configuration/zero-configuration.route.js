'use strict';

/*
  * Module routing.
  * */
var ngModule = angular.module('ngMultiSelectorSite');
ngModule.config(
    function ($stateProvider, urlStates) {

        //#region Properties

        var urlStateDemo = urlStates.demo;
        var urlAuthorizeLayout = urlStates.shared.authorizeLayout;
        var urlStateZeroConfiguration = urlStateDemo.zeroConfiguration;

        //#endregion

        //#region State registration

        // Basic initialization.
        $stateProvider.state(urlStateZeroConfiguration.name, {
            url: urlStateZeroConfiguration.url,
            templateUrl: '/modules/demo/zero-configuration/zero-configuration.html',
            controller: 'zeroConfigurationController',
            parent: urlAuthorizeLayout.name
        });

        //#endregion
    });
