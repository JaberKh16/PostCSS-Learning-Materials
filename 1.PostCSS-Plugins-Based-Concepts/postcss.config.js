const autoprefixer = require("autoprefixer");
const postcssEnv = require("postcss-preset-env"); // support custom style or grouping
const postcssImport = require("postcss-import"); // supports import files feature
const postcssAssetManage = require("postcss-assets"); // supports image files integration
const cssnano = require("cssnano"); // support minifying of css
module.exports = {
  plugins: [
    autoprefixer,
    postcssEnv({
      stage: 1,
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
