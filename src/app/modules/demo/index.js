'use strict';
module.exports = function (ngModule) {
    // Import controller
    require('./demo.controller')(ngModule);

    // Import route.
    require('./demo.route')(ngModule);
};