module.exports = function(ngModule){
  require('./navigation-bar/navigation-bar.directive')(ngModule);
  require('./side-bar/side-bar.directive')(ngModule);
  require('./ng-multi-selector');
};