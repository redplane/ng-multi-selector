module.exports = function (ngModule) {
    require('./custom-template.controller')(ngModule);
    require('./custom-template.route')(ngModule);
};