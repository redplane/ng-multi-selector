'use strict';

/*
  * Module routing.
  * */
module.exports = function (ngModule) {

    // Import module template.
    let ngModuleHtml = require('./form-validation.html');

    ngModule.config(
        function ($stateProvider, uiStateConstant) {

            //#region Properties

            let uiStateMultiMasterLayout = uiStateConstant.demo.masterLayout;
            let uiStateDemoFormValidation = uiStateConstant.demo.formValidation;

            //#endregion

            //#region State registration

            // Basic initialization.
            $stateProvider.state(uiStateDemoFormValidation.name, {
                url: uiStateDemoFormValidation.url,
                template: ngModuleHtml,
                controller: 'formValidationController',
                parent: uiStateMultiMasterLayout.name
            });

            //#endregion
        });
};