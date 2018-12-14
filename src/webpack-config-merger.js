"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webpackMerge = require("webpack-merge");
const lodash_1 = require("lodash");
class WebpackConfigMerger {
    static merge(webpackConfig1, webpackConfig2, mergeStrategies = {}, replacePlugins = false, replaceMinimizers = false) {
        const mergedConfig = webpackMerge.smartStrategy(mergeStrategies)(webpackConfig1, webpackConfig2);
        if (webpackConfig1.plugins && webpackConfig2.plugins) {
            const conf1ExceptConf2 = lodash_1.differenceWith(webpackConfig1.plugins, webpackConfig2.plugins, (item1, item2) => item1.constructor.name === item2.constructor.name);
            if (!replacePlugins) {
                const conf1ByName = lodash_1.keyBy(webpackConfig1.plugins, 'constructor.name');
                webpackConfig2.plugins = webpackConfig2.plugins.map(p => conf1ByName[p.constructor.name] ? lodash_1.merge(conf1ByName[p.constructor.name], p) : p);
            }
            mergedConfig.plugins = [...conf1ExceptConf2, ...webpackConfig2.plugins];
        }

        if (webpackConfig1.optimization.minimizer && webpackConfig2.optimization.minimizer) {
            const conf1ExceptConf2 = lodash_1.differenceWith(webpackConfig1.optimization.minimizer, webpackConfig2.optimization.minimizer, (item1, item2) => item1.constructor.name === item2.constructor.name);
            if (!replaceMinimizers) {
                const conf1ByName = lodash_1.keyBy(webpackConfig1.optimization.minimizer, 'constructor.name');
                webpackConfig2.optimization.minimizer = webpackConfig2.optimization.minimizer.map(p => conf1ByName[p.constructor.name] ? lodash_1.merge(conf1ByName[p.constructor.name], p) : p);
            }
            mergedConfig.optimization.minimizer = [...conf1ExceptConf2, ...webpackConfig2.optimization.minimizer];
        }

        console.log(mergedConfig);

        return mergedConfig;
    }
}
exports.WebpackConfigMerger = WebpackConfigMerger;
//# sourceMappingURL=webpack-config-merger.js.map