const autoprefixer = require("autoprefixer"); // support vendor presets
const postcssEnv = require("postcss-preset-env"); // support custom style or grouping
const postcssImport = require("postcss-import"); // supports import files feature
const postcssAssetManage = require("postcss-assets"); // supports image files integration
const cssnano = require("cssnano"); // support minifying of css
const cssPostFailedWarn = require('postcss-fail-on-warn'); // show warning on postcss build failure
const postcssNested = require('postcss-nested'); // support nested css
const postcssSimpleVars = require('postcss-simple-vars'); // support sass-like variables
const precss = require('precss');


module.exports = {
  plugins: [
    autoprefixer,
    postcssSimpleVars,
    postcssEnv({
      stage: 1,
    }),
    postcssImport,
    postcssAssetManage({
      loadPaths: ["./src/assets/img"],
    }),
    cssnano({
      preset: "default",
    }),
    cssPostFailedWarn(),
    precss,
    postcssNested,
  ],
};
