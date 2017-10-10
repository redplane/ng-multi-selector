'use strict';

// Declare app level module which depends on views, and modules
angular.module('ngAppRoot',
    [
        'ui.router',
        'app.constant',
        'app.shared',
        'app.module.demo',
        'ng-multi-selector'
    ])
    .config(
        function ($locationProvider) {
            $locationProvider.hashPrefix('!');
        });
