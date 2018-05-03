module.exports = function(ngModule){
    require('./main.controller')(ngModule);
    require('./main.route')(ngModule);
};