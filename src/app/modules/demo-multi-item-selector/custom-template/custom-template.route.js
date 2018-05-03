'use strict';
module.exports = function(ngModule){

    // Import module template.
    let ngModuleHtml = require('./custom-template.html');

    ngModule.config(
        function ($stateProvider, uiStateConstant) {

            //#region Properties

            let uiStateMultiMasterLayout = uiStateConstant.demo.masterLayout;
            let uiStateMultiItemSelector = uiStateConstant.demo;
            let uiStateMultiItemCustomTemplate = uiStateMultiItemSelector.customTemplate;

            //#endregion

            //#region State registration

            // Basic initialization.
            $stateProvider.state(uiStateMultiItemCustomTemplate.name, {
                url: uiStateMultiItemCustomTemplate.url,
                template: ngModuleHtml,
                controller: 'customTemplateController',
                parent: uiStateMultiMasterLayout.name
            });

            //#endregion
        });
};
