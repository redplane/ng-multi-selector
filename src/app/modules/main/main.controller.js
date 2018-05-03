module.exports = function(ngModule){
    ngModule.controller('mainController', function($scope, uiStateConstant){

        //#region Properties

        // Constants reflection.
        $scope.uiStateConstant = uiStateConstant;
        $scope.uiStateMain = uiStateConstant.main;

        //#endregion
    });
};