module.exports = function (ngModule) {
    require('./master-layout.controller')(ngModule);
    require('./master-layout.route')(ngModule);
};