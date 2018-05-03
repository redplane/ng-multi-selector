module.exports = function(ngModule){
    require('./form-validation.controller')(ngModule);
    require('./form-validation.route')(ngModule);
};