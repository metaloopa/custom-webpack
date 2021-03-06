"use strict";
/**
 * Created by Evgeny Barabanov on 05/10/2018.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const build_angular_1 = require("@angular-devkit/build-angular");
const custom_webpack_builder_1 = require("../custom-webpack-builder");
class CustomWebpackKarmaBuilder extends build_angular_1.KarmaBuilder {
    constructor(context) {
        super(context);
    }
    buildWebpackConfig(root, projectRoot, sourceRoot, host, options) {
        const karmaConfig = super.buildWebpackConfig(root, projectRoot, sourceRoot, host, options);
        return custom_webpack_builder_1.CustomWebpackBuilder.buildWebpackConfig(root, options.customWebpackConfig, karmaConfig);
    }
}
exports.CustomWebpackKarmaBuilder = CustomWebpackKarmaBuilder;
exports.default = CustomWebpackKarmaBuilder;
//# sourceMappingURL=index.js.map