'use strict';
var ngSideBarTemplate = require('./side-bar.directive.html');

module.exports = function(ngModule){
    ngModule.directive('sideBar', function () {
        return {
            restrict: 'AE',
            template: ngSideBarTemplate,
            replace: false,
            scope: null,
            link: function (scope, element, attrs, controller) {
            },
            controller: function ($scope) {
            }
        };
    });
};
