module.exports = function(ngModule){
    ngModule.controller('mainController', function($scope, $state, uiStateConstant){

        //#region Properties

        // Constants reflection.
        $scope.uiStateConstant = uiStateConstant;
        $scope.uiStateMain = uiStateConstant.main;

        //#endregion
    });
};