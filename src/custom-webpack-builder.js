"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const webpack_config_merger_1 = require("./webpack-config-merger");
exports.defaultWebpackConfigPath = 'webpack.config.js';
class CustomWebpackBuilder {
    static buildWebpackConfig(root, config, baseWebpackConfig) {
        const webpackConfigPath = config.path || exports.defaultWebpackConfigPath;
        const customWebpackConfig = require(`${core_1.getSystemPath(root)}/${webpackConfigPath}`);
        return webpack_config_merger_1.WebpackConfigMerger.merge(baseWebpackConfig, customWebpackConfig, config.mergeStrategies, config.replaceDuplicatePlugins, config.replaceDuplicateMinimizers);
    }
}
exports.CustomWebpackBuilder = CustomWebpackBuilder;
//# sourceMappingURL=custom-webpack-builder.js.map