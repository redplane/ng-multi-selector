'use strict';

module.exports = function(ngModule){

    // Import module html template.
    let ngModuleHtml = require('./zero-configuration.html');

    ngModule.config(
        function ($stateProvider, uiStateConstant) {

            //#region Properties

            let uiStateDemo = uiStateConstant.demo;
            let uiStateMultiMasterLayout = uiStateDemo.masterLayout;
            let urlStateZeroConfiguration = uiStateDemo.zeroConfiguration;

            //#endregion

            //#region State registration

            // Basic initialization.
            $stateProvider.state(urlStateZeroConfiguration.name, {
                url: urlStateZeroConfiguration.url,
                template: ngModuleHtml,
                controller: 'multiZeroConfigurationController',
                parent: uiStateMultiMasterLayout.name
            });

            //#endregion
        });
};