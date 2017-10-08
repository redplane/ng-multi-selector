"use strict";

angular.module('app.kneadingCommandManagement')
    .controller('inputKneadingCommandController',
        function ($scope, kneadingCommandService) {

            //#region Properties

            // List of commands.
            $scope.kneadingCommands = [];

            // Kneading commands data source.
            $scope.kneadingCommandDataSource = new kendo.data.DataSource({
                data: [{
                    id: 1,
                    command: 'Command #01'
                },{
                    id: 2,
                    command: 'Command #02'
                }],
                pageSize: 5
            });

            $scope.mainGridOptions = {
                dataSource: $scope.kneadingCommandDataSource,
                sortable: true,
                pageable: {
                    pageSize: 2
                },
                columns: [{
                    field: 'id',
                    title: 'Id'
                },{
                    field: 'command',
                    title: 'Command name'
                },{
                    field: 'status',
                    title: 'Status'
                }]
            };

            //#endregion

            //#region Methods

            $scope.init = function () {

            };

            $scope.loadCommands = function(){
                kneadingCommandService.getKneadingCommands().then(function(x){
                    $scope.mainGridOptions.dataSource = x.data;
                });
            };

            //#endregion
        }
    );