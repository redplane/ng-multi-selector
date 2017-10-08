'use strict';

// Declare app level module which depends on views, and modules
angular.module('ngKcsp', [
    'ui.router',
    'app.shared',
    'app.kneadingCommandManagement'
])
    .config([
        '$locationProvider',
        '$stateProvider',
        function ($locationProvider, $stateProvider) {
            $locationProvider.hashPrefix('!');
        }]);
