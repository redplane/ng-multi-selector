// Import module html.
let ngModuleHtml = require('./ng-multi-selector.html');

// Module initialization.
let ngModule = angular.module('ngMultiSelector', []);

// Import plugin template.
ngModule
    .run(function ($templateCache) {
        $templateCache.put('ng-item-selector.html', ngModuleHtml);
    });

require('../shared/ng-inject')(ngModule);
require('./directives/ng-item-selector')(ngModule);