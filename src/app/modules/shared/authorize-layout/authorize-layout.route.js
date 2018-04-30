module.exports = function(ngModule){

    // Templates import.
    let ngModuleHtml = require('./authorize-layout.html');

    ngModule.config(function($stateProvider){
        // Authorize layout.
        $stateProvider.state('authorize', {
            abstract: true,
            template: ngModuleHtml
        });
    })
};