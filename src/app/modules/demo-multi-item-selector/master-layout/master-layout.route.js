module.exports = function(ngModule){

    // Import module html.
    let ngModuleHtml = require('./master-layout.html');

    ngModule.config(function($stateProvider, uiStateConstant){

        let uiStateMasterLayout = uiStateConstant.masterLayout;
        let uiStateDemo = uiStateConstant.demo;
        let uiStateDemoMasterLayout = uiStateDemo.masterLayout;
        let uiStateDemoZeroConfiguration = uiStateDemo.zeroConfiguration;

        $stateProvider.state(uiStateDemoMasterLayout.name, {
            parent: uiStateMasterLayout.name,
            template: ngModuleHtml,
            redirectTo: uiStateDemoZeroConfiguration.name,
            controller: 'multiMasterLayoutController'
        });
    });
};