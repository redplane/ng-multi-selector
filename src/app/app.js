'use strict';

// Style import.
require('bootstrap/dist/css/bootstrap.min.css');

// Declare src level module which depends on views, and modules
var angular = require('angular');
require('@uirouter/angularjs');
require('./directives/ng-multi-selector/index');

// Initialize module.
var ngModule = angular.module('ngApp',
    [
        'ngRoute',
        'ui.router',
        'ng-multi-selector'
    ])
    .config(
        function ($locationProvider, $stateProvider, $routeProvider, urlStates) {
            $locationProvider.hashPrefix('!');
            $routeProvider.otherwise({redirectTo: urlStates.demo.url});
        });

// Import constants.
require('./constants/index')(ngModule);

// Import services.
require('./services/storage.service')(ngModule);
require('./services/customer.service')(ngModule);

// Import sub-modules.
require('./modules/demo/index')(ngModule);
require('./modules/shared/index')(ngModule);

// Import route configs.
require('./modules/demo/routes')(ngModule);
require('./modules/shared/routes')(ngModule);