'use strict';

module.exports = function(ngModule){
    require('./authorize-layout')(ngModule);
    require('./unauthorize-layout')(ngModule);
};