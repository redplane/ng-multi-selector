'use strict';

/*
  * Module routing.
  * */
module.exports = function (ngModule) {

    // Import module template.
    let ngModuleHtml = require('./with-key-property.html');

    ngModule.config(
        function ($stateProvider, urlStates) {

            //#region Properties

            let urlStateDemo = urlStates.demo;
            let urlAuthorizeLayout = urlStates.shared.authorizeLayout;
            let urlStateWithKeyProperty = urlStateDemo.withKeyProperty;

            //#endregion

            //#region State registration

            // Basic initialization.
            $stateProvider.state(urlStateWithKeyProperty.name, {
                url: urlStateWithKeyProperty.url,
                template: ngModuleHtml,
                controller: 'withKeyPropertyController',
                parent: urlAuthorizeLayout.name
            });

            //#endregion
        });
};