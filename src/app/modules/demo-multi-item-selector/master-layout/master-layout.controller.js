module.exports = function (ngModule) {
    ngModule.controller('multiMasterLayoutController',
        function ($scope, $state,
                  uiStateConstant) {

            //#region Properties

            // Constants reflection.
            $scope.uiStateConstant = uiStateConstant;
            $scope.uiStateDemo = $scope.uiStateConstant.demo;
            $scope.uiStateDemoMasterLayout = $scope.uiStateDemo.masterLayout;

            // States map.
            $scope.pStateMaps = [
                {name: $scope.uiStateDemo.dataSource.name, title: 'Data source'},
                {name: $scope.uiStateDemo.zeroConfiguration.name, title: 'Zero configuration'},
                {name: $scope.uiStateDemo.customTemplate.name, title: 'Custom template'},
                {name: $scope.uiStateDemo.formValidation.name, title: 'Form validation'}
            ];

            //#endregion

            //#region Methods

            /*
            * Get title base on state.
            * */
            $scope.getTitle = function () {
                let szCurrentStateName = $state.current.name;
                let pFilteredItems = $scope.pStateMaps.filter(item => {
                    return szCurrentStateName === item.name;
                });

                if (!pFilteredItems || pFilteredItems.length < 1)
                    return '';

                return pFilteredItems[0].title;
            };

            //#endregion
        });
};