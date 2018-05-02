'use strict';

// Style import.
require('bootstrap/dist/css/bootstrap.min.css');

// Import plugin css.
require('./plugins/ng-multi-selector/ng-multi-selector.css');

// Import jquery plugins.
require('jquery');

// Declare src level module which depends on views, and modules
let angular = require('angular');
require('@uirouter/angularjs');
require('./plugins/ng-multi-selector');

// Initialize module.
let ngModule = angular.module('ngApp',
    [
        'ui.router',
        'ngMultiSelector'
    ])
    .config(
        function ($locationProvider, $urlRouterProvider, $stateProvider, urlStates) {
            $locationProvider.hashPrefix('!');
            $urlRouterProvider.otherwise(function($injector, $location){
               let $state = $injector.get('$state');
               if (!$state)
                   return;

               $state.go(urlStates.demo.name);
            });
        });

// Import constants.
require('./constants')(ngModule);

// Import services.
require('./services')(ngModule);

// Import sub-modules.
require('./modules')(ngModule);