module.exports = function(ngModule){
    require('./main')(ngModule);
    require('./demo-multi-item-selector')(ngModule);
    require('./shared')(ngModule);

};