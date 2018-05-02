'use strict';

module.exports = function(ngModule){

    // Import module html template.
    let ngModuleHtml = require('./zero-configuration.html');

    ngModule.config(
        function ($stateProvider, urlStates) {

            //#region Properties

            let urlStateDemo = urlStates.demo;
            let urlAuthorizeLayout = urlStates.shared.authorizeLayout;
            let urlStateZeroConfiguration = urlStateDemo.zeroConfiguration;

            //#endregion

            //#region State registration

            // Basic initialization.
            $stateProvider.state(urlStateZeroConfiguration.name, {
                url: urlStateZeroConfiguration.url,
                template: ngModuleHtml,
                controller: 'zeroConfigurationController',
                parent: urlAuthorizeLayout.name
            });

            //#endregion
        });
};