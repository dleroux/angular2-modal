"use strict";
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var outside_event_plugin_1 = require('./outside-event-plugin');
var outside_event_plugin_2 = require('./outside-event-plugin');
exports.DOMOutsideEventPlugin = outside_event_plugin_2.DOMOutsideEventPlugin;
exports.MODAL_BROWSER_PROVIDERS = [
    core_1.provide(platform_browser_1.EVENT_MANAGER_PLUGINS, { multi: true, useClass: outside_event_plugin_1.DOMOutsideEventPlugin })
];
//# sourceMappingURL=index.js.map