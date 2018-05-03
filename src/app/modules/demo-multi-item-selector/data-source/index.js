module.exports = function(ngModule){
    require('./data-source.controller')(ngModule);
    require('./data-source.route')(ngModule);
};