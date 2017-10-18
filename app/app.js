'use strict';

// Declare app level module which depends on views, and modules
angular.module('ngAppRoot',
    [
        'ngRoute',
        'ui.router',
        'app.constant',
        'app.shared',
        'app.module.demo',
        'ng-multi-selector'
    ])
    .config(
        function ($locationProvider, $stateProvider, $routeProvider, urlStates) {
            $locationProvider.hashPrefix('!');
            $routeProvider.otherwise({redirectTo: urlStates.demo.url});
        });
