'use strict';

/*
  * Module routing.
  * */
module.exports = function (ngModule) {

    // Import module template.
    let ngModuleHtml = require('./with-key-property.html');

    ngModule.config(
        function ($stateProvider, uiStateConstant) {

            // //#region Properties
            //
            // let uiStateMultiMasterLayout = uiStateConstant.multi.masterLayout;
            // let uiStateWithKeyProperty = uiStateConstant.multi
            //
            // //#endregion
            //
            // //#region State registration
            //
            // // Basic initialization.
            // $stateProvider.state(urlStateWithKeyProperty.name, {
            //     url: urlStateWithKeyProperty.url,
            //     template: ngModuleHtml,
            //     controller: 'withKeyPropertyController',
            //     parent: urlAuthorizeLayout.name
            // });
            //
            // //#endregion
        });
};