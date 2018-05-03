module.exports = function(ngModule){
    require('./zero-configuration.controller')(ngModule);
    require('./zero-configuration.route')(ngModule);
};