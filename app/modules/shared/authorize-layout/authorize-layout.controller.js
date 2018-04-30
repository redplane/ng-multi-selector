'use strict';

/*
* Controller declaration.
* */
var ngModule = angular.module('ngMultiSelectorSite');
ngModule.controller('authorizeLayoutController', function ($state,
                                                           $scope) {

    //#region Properties

    // Services reflection.
    $scope.$state = $state;

    //#endregion

    //#region Methods

    /*
    * Get state name.
    * */
    $scope.getStateName = function(){
        return $state.current.name;
    }

    //#endregion
});