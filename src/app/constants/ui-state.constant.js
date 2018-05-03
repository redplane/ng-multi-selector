'use strict';

module.exports = function(ngModule){
    ngModule.constant('uiStateConstant', {

        main: {
            name: 'main',
            url: '/main'
        },

        demo: {

            masterLayout: {
                name: 'multi-master-layout',
                url: '/multi-master-layout'
            },

            dataSource:{
                name: 'data-source',
                url: '/data-source'
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
            },

            formValidation:{
                name: 'form-validation',
                url: '/form-validation'
            }
        },

        masterLayout:{
            name: 'master-layout',
            url: '/master-layout'
        }
    });
};