"use strict";
/**
 * Created by Evgeny Barabanov on 28/06/2018.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const build_angular_1 = require("@angular-devkit/build-angular");
const custom_webpack_builder_1 = require("../custom-webpack-builder");
class CustomWebpackBrowserBuilder extends build_angular_1.BrowserBuilder {
    constructor(context) {
        super(context);
    }
    buildWebpackConfig(root, projectRoot, host, options) {
        const browserWebpackConfig = super.buildWebpackConfig(root, projectRoot, host, options);
        return custom_webpack_builder_1.CustomWebpackBuilder.buildWebpackConfig(root, options.customWebpackConfig, browserWebpackConfig);
    }
}
exports.CustomWebpackBrowserBuilder = CustomWebpackBrowserBuilder;
exports.default = CustomWebpackBrowserBuilder;
//# sourceMappingURL=index.js.map