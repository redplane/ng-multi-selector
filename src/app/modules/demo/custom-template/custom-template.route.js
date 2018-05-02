'use strict';
module.exports = function(ngModule){

    // Import module template.
    let ngModuleHtml = require('./custom-template.html');

    ngModule.config(
        function ($stateProvider, urlStates) {

            //#region Properties

            let urlStateDemo = urlStates.demo;
            let urlAuthorizeLayout = urlStates.shared.authorizeLayout;
            let urlStateCustomTemplate = urlStateDemo.customTemplate;

            //#endregion

            //#region State registration

            // Basic initialization.
            $stateProvider.state(urlStateCustomTemplate.name, {
                url: urlStateCustomTemplate.url,
                template: ngModuleHtml,
                controller: 'customTemplateController',
                parent: urlAuthorizeLayout.name
            });

            //#endregion
        });
};
