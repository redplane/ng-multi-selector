module.exports = function(ngModule){

    // Import module template.
    let ngModuleHtml = require('./main.html');

    ngModule.config(function($stateProvider, uiStateConstant){
        let uiStateMain = uiStateConstant.main;
        let uiStateMasterLayout = uiStateConstant.masterLayout;

        $stateProvider.state(uiStateMain.name,{
            url: uiStateMain.url,
            controller: 'mainController',
            template: ngModuleHtml,
            parent: uiStateMasterLayout.name
        })
    });
};