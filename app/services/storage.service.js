'use strict';

/*
* Service declaration.
* */
var ngModule = angular.module('ngMultiSelectorSite');
ngModule.service('storageService', function () {
    //#region Constructors

    /*
    * List of customers.
    * */
    this.customers = [];

    //#endregion

    //#region Methods

    /*
    * Get list of customers.
    * */
    this.getCustomers = function () {
        return this.customers;
    };

    /*
    * Initiate a list of customers.
    * */
    this.initCustomers = function (customers) {
        this.customers = customers;
    };

    //#endregion
});