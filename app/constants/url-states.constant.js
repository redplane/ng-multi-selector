'use strict';

/*
* Constants declaration.
* */
var ngModule = angular.module('ngMultiSelectorSite');
ngModule.constant('urlStates', {
    demo: {

        // Zero configuration.
        zeroConfiguration:{
            name: 'demo-zero-configuration',
            url: '/zero-configuration'
        },

        // With key property
        withKeyProperty:{
            name: 'demo-with-key-property',
            url: '/with-key-property'
        },

        name: 'module-demo',
        url: '/demo'
    },

    shared:{
        authorizeLayout:{
            name: 'authorize'
        }
    }
});