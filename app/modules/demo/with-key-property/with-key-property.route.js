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
        var urlStateWithKeyProperty = urlStateDemo.withKeyProperty;

        //#endregion

        //#region State registration

        // Basic initialization.
        $stateProvider.state(urlStateWithKeyProperty.name, {
            url: urlStateWithKeyProperty.url,
            templateUrl: '/modules/demo/with-key-property/with-key-property.html',
            controller: 'withKeyPropertyController',
            parent: urlAuthorizeLayout.name
        });

        //#endregion
    });
