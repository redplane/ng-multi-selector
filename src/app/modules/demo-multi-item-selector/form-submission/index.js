module.exports = function(ngModule){
    require('./form-submission.controller')(ngModule);
    require('./form-submission.route')(ngModule);
};