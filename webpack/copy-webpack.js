// Import libraries.
const path = require('path');

// Import settings.
const settings = require('./webpack-setting');

exports = module.exports = {

    /*
    * Get copy-webpack-plugin configuration.
    * */
    get: function (paths) {
        // Items to be copied.
        let items = ['assets', 'index.html'];

        // Copy options.
        let options = [];

        for (let index = 0; index < items.length; index++){
            let option = {
                from: path.resolve(paths.app, items[index]),
                to: path.resolve(paths.dist, items[index])
            };

            options.push(option);
        }
        return options;
    }
};

return module.exports;