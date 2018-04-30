module.exports = function (ngModule) {
    ngModule.config(function ($stateProvider) {

        //#region States configuration.

        // Un-authorize layout.
        $stateProvider.state('un-authorize', {
            abstract: true,
            template: '<ui-view></ui-view>'
        });

        //#endregion
    });
};