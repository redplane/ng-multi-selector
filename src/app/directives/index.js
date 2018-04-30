module.exports = function(ngModule){
  require('./navigation-bar/navigation-bar')(ngModule);
  require('./side-bar/side-bar')(ngModule);
  require('./ng-multi-selector');
};