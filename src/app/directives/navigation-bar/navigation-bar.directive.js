'use strict';
var ngNavigationBarTemplate = require('./navigation-bar.directive.html');

module.exports = function(ngModule){
  ngModule.directive('navigationBar', function(){
      return {
          restrict: 'AE',
          template: ngNavigationBarTemplate,
          replace: false,
          scope: null,
          link: function (scope, element, attrs, controller) {
          },
          controller: function ($scope) {
          }
      };
  });
};