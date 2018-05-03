module.exports = function(ngModule){

    // Import module html.
    let ngModuleHtml = require('./master-layout.html');

    ngModule.config(function($stateProvider, uiStateConstant){

        //#region State registration

        let uiStateMasterLayout = uiStateConstant.masterLayout;
        let uiStateMain = uiStateConstant.main;

        $stateProvider.state(uiStateMasterLayout.name, {
            abstract: true,
            controller: 'appMasterLayout',
            template: ngModuleHtml,
            redirectTo: uiStateMain.name
        });

        //#endregion
    });
};