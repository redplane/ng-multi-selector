'use strict';
module.exports = function(ngModule){
  require('./appSettings.constant')(ngModule);
  require('./urlStates.constant')(ngModule);
};