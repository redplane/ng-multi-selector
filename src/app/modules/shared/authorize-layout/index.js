module.exports = function(ngModule){
    require('./authorize-layout.controller')(ngModule);
    require('./authorize-layout.route')(ngModule);
};