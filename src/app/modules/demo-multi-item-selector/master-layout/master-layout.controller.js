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
                {name: $scope.uiStateDemo.customTemplate.name, title: 'Custom template'}
            ];

            //#endregion

            //#region Methods

            /*
            * Get title base on state.
            * */
            $scope.getTitle = function () {
                let szCurrentStateName = $state.current.name;
                console.log(szCurrentStateName);
                let pFilteredItems = $scope.pStateMaps.filter(item => {
                    return szCurrentStateName === item.name;
                });

                if (!pFilteredItems)
                    return '';

                return pFilteredItems[0].title;
            };

            //#endregion
        });
};