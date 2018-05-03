'use strict';

// Style import.
require('bootstrap/dist/css/bootstrap.min.css');

// Import font awesome.
require('../../node_modules/font-awesome/css/font-awesome.css');

// Import plugin css.
require('./plugins/ng-multi-selector/ng-multi-selector.css');

// Import app style.
require('./app.scss');

// Import jquery plugins.
require('jquery');

// Declare src level module which depends on views, and modules
let angular = require('angular');
require('@uirouter/angularjs');
require('./plugins/ng-multi-selector');
require('angular-messages');

// Initialize module.
let ngModule = angular.module('ngApp',
    [
        'ui.router',
        'ngMultiSelector',
        'ngMessages'
    ])
    .config(
        function ($locationProvider, $urlRouterProvider, $stateProvider, uiStateConstant) {

            // Redirect to master layout.
            let uiStateMain = uiStateConstant.main;

            $locationProvider.hashPrefix('!');
            $urlRouterProvider.otherwise(function($injector, $location){
               let $state = $injector.get('$state');
               if (!$state)
                   return;

               $state.go(uiStateMain.name);
            });
        });

// Import constants.
require('./constants')(ngModule);

// Import services.
require('./services')(ngModule);

// Import sub-modules.
require('./modules')(ngModule);