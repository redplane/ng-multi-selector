var ngModule = angular.module('ngMultiSelectorSite');

/*
* Controller initialization.
* */
ngModule.controller('ngMultiSelectorSiteController', function ($scope, $transitions, urlStates) {

    //#region Properties

    // For two-way model binding.
    $scope.model = {
        layoutClass: ''
    };

    //#endregion

    //#region Watchers & events

    /*
    * Called when transition from state to state is successful.
    * */
    $transitions.onSuccess({}, function ($transition) {

        // Find destination of transaction.
        var destination = $transition.$to();

        if (destination.includes[urlStates.shared.authorizeLayout.name]) {
            $scope.model.layoutClass = 'hold-transition skin-blue fixed sidebar-mini';
            $(window).resize();
            return;
        }

        $scope.model.layoutClass = 'hold-transition';
        $(window).resize();
    });

    //#endregion
});