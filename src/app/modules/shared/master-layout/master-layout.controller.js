module.exports = function(ngModule){
    ngModule.controller('appMasterLayout', function($scope, $state, uiStateConstant){

        //#region Properties

        $scope.uiStateConstant = uiStateConstant;
        $scope.uiStateMain = uiStateConstant.main;
        $scope.uiStateDemo = uiStateConstant.demo;
        $scope.uiStateDemoMasterLayout = $scope.uiStateDemo.masterLayout;

        //#endregion

        //#region Methods

        /*
        * Check whether state is in used.
        * */
        $scope.bIsInState = function(name){
            return $state.includes(name);

        };

        //#endregion
    });
};