module.exports = function(ngModule){

    // Import module html.
    let ngModuleHtml = require('./master-layout.html');

    ngModule.config(function($stateProvider, uiStateConstant){

        let uiStateMasterLayout = uiStateConstant.masterLayout;
        let uiStateMultiMasterLayout = uiStateConstant.multi.masterLayout;
        $stateProvider.state(uiStateMultiMasterLayout.name, {
            abstract: true,
            parent: uiStateMasterLayout,
            template: ngModuleHtml
        });
    });
};