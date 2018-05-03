module.exports = function(ngModule){
    ngModule.controller('dataSourceController', function(
        $scope,
        $customer){

        //#region Properties

        // List of customers to be displayed.
        $scope.customers = [];

        //#endregion

        //#region Methods

        /*
        * Callback which is fired when component is initialized.
        * */
        $scope.init = function(){
            $customer.loadCustomers()
                .then(customers => {
                    $scope.customers = customers;
                })
        };

        //#endregion
    });
};