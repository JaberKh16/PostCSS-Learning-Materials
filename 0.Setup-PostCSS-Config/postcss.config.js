const autoprefixer = require("autoprefixer");
const postcssEnv = require("postcss-preset-env");
module.exports = {
  plugins: [
    autoprefixer,
    postcssEnv({
      stage: 1,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
