module.exports = function(ngModule){
    require('./customer.service')(ngModule);
    require('./storage.service')(ngModule);
};