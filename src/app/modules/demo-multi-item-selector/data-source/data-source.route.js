module.exports = function(ngModule){

    // Import module template.
    let ngModuleHtml = require('./data-source.html');

    ngModule.config(function($stateProvider, uiStateConstant){
        //#region States registration

        let uiStateDemo = uiStateConstant.demo;
        let uiStateDemoMasterLayout = uiStateDemo.masterLayout;
        let uiStateDemoDataSource = uiStateDemo.dataSource;

        $stateProvider.state(uiStateDemoDataSource.name, {
            url: uiStateDemoDataSource.url,
            controller: 'dataSourceController',
            template: ngModuleHtml,
            parent: uiStateDemoMasterLayout.name
        });
        
        //#endregion
    });
};