"use strict";
/**
 * Created by Evgeny Barabanov on 28/06/2018.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const build_angular_1 = require("@angular-devkit/build-angular");
const custom_webpack_builder_1 = require("../custom-webpack-builder");
class CustomWebpackServerBuilder extends build_angular_1.ServerBuilder {
    constructor(context) {
        super(context);
        this.context = context;
    }
    buildWebpackConfig(root, projectRoot, host, options) {
        const serverWebpackConfig = super.buildWebpackConfig(root, projectRoot, host, options);
        const opt = options;
        return custom_webpack_builder_1.CustomWebpackBuilder.buildWebpackConfig(root, opt.customWebpackConfig, serverWebpackConfig);
    }
}
exports.CustomWebpackServerBuilder = CustomWebpackServerBuilder;
exports.default = CustomWebpackServerBuilder;
//# sourceMappingURL=index.js.map