module.exports = function(ngModule){
    require('./unauthorize-layout.controller')(ngModule);
    require('./unauthorize-layout.route')(ngModule);
};