'use strict';

/*
* Service declaration.
* */
module.exports = function(ngModule){
    ngModule.service('$customer', function ($http, storageService) {
        //#region Properties

        //#endregion

        //#region Methods

        /*
        * Get data from local data source.
        * */
        this.loadCustomers = function () {

            // Find list of stored customers.
            let customers = storageService.getCustomers();

            if (customers && customers.length > 0)
                return Promise.resolve(customers);

            return $http.get('/assets/data/customers.json')
                .then(function (x) {
                    let result = x.data;
                    if (!result)
                        return [];

                    let customers = result.records;
                    storageService.initCustomers(customers);
                    return customers;
                });
        };

        //#endregion
    });
};

