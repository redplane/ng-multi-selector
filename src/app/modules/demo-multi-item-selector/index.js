'use strict';
module.exports = function (ngModule) {
    // // Import controller
    // require('./demo.controller')(ngModule);
    //
    // // Import route.
    // require('./demo.route')(ngModule);
    require('./master-layout')(ngModule);
    require('./data-source')(ngModule);
    require('./custom-template')(ngModule);
    require('./zero-configuration')(ngModule);
};