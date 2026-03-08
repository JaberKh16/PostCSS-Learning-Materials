# PostCSS Runners Setup Guide

## 🏃‍♂️ PostCSS Runners Comparison

### **1. PostCSS CLI** ⭐ Simple & Direct

#### **Setup**

```bash
npm install --save-dev postcss-cli
```

#### **Configuration**

```json
// package.json
{
  "scripts": {
    "build:css": "postcss src/styles.css -o dist/styles.css",
    "watch:css": "postcss src/styles.css -o dist/styles.css --watch"
  }
}
```

#### **postcss.config.js**

```js
module.exports = {
  plugins: [require("autoprefixer"), require("cssnano")],
};
```

#### **Pros**

- ✅ Simple setup
- ✅ No additional build tools
- ✅ Great for small projects
- ✅ Direct file processing

#### **Cons**

- ❌ No file watching (without --watch)
- ❌ Limited automation
- ❌ Manual file management

---

### **2. Gulp** ⭐ Task Automation

#### **Setup**

```bash
npm install --save-dev gulp gulp-postcss gulp-sourcemaps
```

#### **gulpfile.js**

```js
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("css", () => {
  return gulp
    .src("src/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(postcss([require("autoprefixer"), require("cssnano")]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/"));
});

gulp.task("watch", () => {
  gulp.watch("src/**/*.css", gulp.series("css"));
});
```

#### **Pros**

- ✅ Powerful task automation
- ✅ Excellent file watching
- ✅ Plugin ecosystem
- ✅ Source maps support

#### **Cons**

- ❌ Steeper learning curve
- ❌ More configuration
- ❌ Gulp-specific syntax

---

### **3. Webpack** ⭐ Module Bundling

#### **Setup**

```bash
npm install --save-dev webpack webpack-cli postcss postcss-loader
```

#### **webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer"), require("cssnano")],
              },
            },
          },
        ],
      },
    ],
  },
};
```

#### **Pros**

- ✅ Module bundling
- ✅ Code splitting
- ✅ Hot module replacement
- ✅ Extensive ecosystem

#### **Cons**

- ❌ Complex configuration
- ❌ Overkill for simple projects
- ❌ Steeper learning curve

---

### **4. Vite** ⭐ Modern Build Tool

#### **Setup**

```bash
npm install --save-dev vite
```

#### **postcss.config.js**

```js
module.exports = {
  plugins: [require("autoprefixer"), require("cssnano")],
};
```

#### **vite.config.js**

```js
export default {
  css: {
    postcss: {
      plugins: [require("autoprefixer"), require("cssnano")],
    },
  },
};
```

#### **Pros**

- ✅ Fast development server
- ✅ Zero config by default
- ✅ Modern tooling
- ✅ HMR support

#### **Cons**

- ❌ Newer technology
- ❌ Less mature ecosystem
- ❌ Opinionated defaults

---

### **5. Rollup** ⭐ Library Bundling

#### **Setup**

```bash
npm install --save-dev rollup rollup-plugin-postcss
```

#### **rollup.config.js**

```js
import postcss from "rollup-plugin-postcss";

export default {
  plugins: [
    postcss({
      plugins: [require("autoprefixer"), require("cssnano")],
      extract: true,
      minimize: true,
    }),
  ],
};
```

#### **Pros**

- ✅ Tree shaking
- ✅ Library-focused
- ✅ Clean output
- ✅ Plugin system

#### **Cons**

- ❌ Limited CSS features
- ❌ Complex setup
- ❌ Not for all projects

---

### **6. Parcel** ⭐ Zero Config

#### **Setup**

```bash
npm install --save-dev parcel
```

#### **postcss.config.js**

```js
module.exports = {
  plugins: [require("autoprefixer"), require("cssnano")],
};
```

#### **Pros**

- ✅ Zero configuration
- ✅ Automatic bundling
- ✅ Fast development
- ✅ Multi-format support

#### **Cons**

- ❌ Less control
- ❌ Opinionated
- ❌ Plugin limitations

---

## 🎯 Runner Selection Guide

### **Choose PostCSS CLI for:**

- Simple projects
- Learning PostCSS
- Direct CSS processing
- Minimal setup

### **Choose Gulp for:**

- Complex build processes
- Multiple file types
- Custom workflows
- Task automation

### **Choose Webpack for:**

- Large applications
- Module bundling
- Code splitting
- JavaScript-heavy projects

### **Choose Vite for:**

- Modern development
- Fast builds
- Vue/React projects
- HMR requirements

### **Choose Rollup for:**

- Library development
- Package publishing
- Tree shaking needs
- Clean bundles

### **Choose Parcel for:**

- Rapid prototyping
- Zero-config preference
- Multi-language projects
- Simple deployment

## 📊 Performance Comparison

| Runner  | Build Speed | Bundle Size | Config Complexity | Learning Curve |
| ------- | ----------- | ----------- | ----------------- | -------------- |
| CLI     | ⚡ Fast     | Small       | Low               | Easy           |
| Gulp    | 🐢 Medium   | Small       | Medium            | Medium         |
| Webpack | 🐌 Slow     | Small       | High              | Hard           |
| Vite    | ⚡ Fast     | Small       | Low               | Easy           |
| Rollup  | ⚡ Fast     | Very Small  | Medium            | Medium         |
| Parcel  | ⚡ Fast     | Medium      | Very Low          | Very Easy      |

## 🔧 Migration Examples

### **From CLI to Gulp**

```js
// Before: CLI command
"build:css": "postcss src/*.css -o dist/"

// After: Gulp task
gulp.task('css', () => {
  return gulp.src('src/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('dist/'));
});
```

### **From Gulp to Webpack**

```js
// Before: Gulp task
gulp.task('css', () => {
  // Gulp processing
});

// After: Webpack rule
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader', 'postcss-loader']
}
```

### **From Webpack to Vite**

```js
// Before: Webpack config
module.exports = {
  module: { rules: [...] }
}

// After: Vite config
export default {
  css: { postcss: { plugins: [...] } }
}
```
