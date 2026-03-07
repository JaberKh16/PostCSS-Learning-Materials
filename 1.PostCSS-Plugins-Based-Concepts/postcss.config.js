const autoprefixer = require("autoprefixer"); // support vendor presets
const postcssEnv = require("postcss-preset-env"); // support custom style or grouping
const postcssImport = require("postcss-import"); // supports import files feature
const postcssAssetManage = require("postcss-assets"); // supports image files integration
const cssnano = require("cssnano"); // support minifying of css
module.exports = {
  plugins: [
    autoprefixer,
    postcssEnv({
      stage: 1, /* default is 2(general support), 1=> support nesting(experimental), 0=>
      features: {
        "nesting-rules": true,
      },
    }),
    postcssImport,
    postcssAssetManage({
      loadPaths: ["./src/assets/img"],
    }),
    cssnano({
      preset: "default",
    }),
  ],
};
