// Import module html.
let ngModuleHtml = require('./ng-multi-selector.html');

// Module initialization.
let ngModule = angular.module('ngMultiSelector', []);

// Import plugin template.
ngModule
    .run(function ($templateCache) {
        $templateCache.put('ng-multi-selector.html', ngModuleHtml);
    });

require('./directives/ng-inject')(ngModule);
require('./directives/ng-multi-selector')(ngModule);


