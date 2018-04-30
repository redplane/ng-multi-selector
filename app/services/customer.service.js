'use strict';

/*
* Service declaration.
* */
var ngModule = angular.module('ngMultiSelectorSite');
ngModule.service('customerService', function ($http, storageService) {
    //#region Properties

    //#endregion

    //#region Methods

    /*
    * Get data from local data source.
    * */
    this.getLocalItems = function () {

        // Find list of stored customers.
        var customers = storageService.getCustomers();

        if (customers && customers.length > 0)
            return Promise.resolve(customers);

        return $http.get('/assets/data/customers.json')
            .then(function (x) {
                var result = x.data;
                if (!result)
                    return [];

                var customers = result.records;
                storageService.initCustomers(customers);
                return customers;
            });
    };

    //#endregion
});
