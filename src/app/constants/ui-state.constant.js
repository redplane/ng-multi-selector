'use strict';

module.exports = function(ngModule){
    ngModule.constant('uiStateConstant', {

        main: {
            name: 'main',
            url: '/main'
        },

        multi: {

            masterLayout: {
                name: 'multi-master-layout',
                url: '/multi-master-layout'
            },

            // Zero configuration.
            zeroConfiguration: {
                name: 'multi-zero-configuration',
                url: '/multi-zero-configuration'
            },

            // Custom template.
            customTemplate:{
                name: 'multi-custom-template',
                url: '/multi-custom-template'
            }
        },

        masterLayout:{
            name: 'master-layout',
            url: '/master-layout'
        }
    });
};