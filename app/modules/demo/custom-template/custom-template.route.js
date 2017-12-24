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
        var urlStateCustomTemplate = urlStateDemo.customTemplate;

        //#endregion

        //#region State registration

        // Basic initialization.
        $stateProvider.state(urlStateCustomTemplate.name, {
            url: urlStateCustomTemplate.url,
            templateUrl: '/modules/demo/custom-template/custom-template.html',
            controller: 'customTemplateController',
            parent: urlAuthorizeLayout.name
        });

        //#endregion
    });
