module.exports = function(ngModule){

    // Import module template.
    let ngModuleHtml = require('./form-submission.html');

    ngModule.config(function($stateProvider, uiStateConstant){
        //#region States registration

        let uiStateDemo = uiStateConstant.demo;
        let uiStateDemoMasterLayout = uiStateDemo.masterLayout;
        let uiStateDemoFormSubmission = uiStateDemo.formSubmission;

        $stateProvider.state(uiStateDemoFormSubmission.name, {
            url: uiStateDemoFormSubmission.url,
            controller: 'formSubmissionController',
            template: ngModuleHtml,
            parent: uiStateDemoMasterLayout.name
        });

        //#endregion
    });
};