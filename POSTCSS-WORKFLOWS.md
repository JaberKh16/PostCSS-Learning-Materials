# PostCSS Workflows & Best Practices

## 🔄 Common PostCSS Workflows

### **1. Development Workflow**

```
src/styles.css → PostCSS → dist/styles.css → Browser
     ↓               ↓           ↓
  Variables      Plugins    Optimized CSS
  Imports        Processing  Source Maps
  Nesting        Minification
```

#### **Development Setup**

```js
// postcss.config.js (Development)
module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("postcss-preset-env")({ stage: 1 }),
    require("autoprefixer"),
    require("postcss-reporter")({ clearAllMessages: true }),
  ],
};
```

#### **Watch Command**

```bash
# CLI
postcss src/styles.css -o dist/styles.css --watch

# Gulp
gulp watch

# Vite
npm run dev
```

---

### **2. Production Workflow**

```
src/styles.css → PostCSS → dist/styles.min.css
     ↓               ↓           ↓
  Variables      Plugins    Minified CSS
  Imports        Processing  Optimized
  Nesting        Prefixing   Gzipped
  Custom CSS     Linting     Source Maps
```

#### **Production Setup**

```js
// postcss.config.js (Production)
module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("postcss-preset-env")({ stage: 3 }),
    require("autoprefixer"),
    require("cssnano")({ preset: "advanced" }),
    require("postcss-purgecss")({
      content: ["src/**/*.html", "src/**/*.js"],
    }),
  ],
};
```

---

### **3. Component Library Workflow**

```
components/
  ├── Button/
  │   ├── Button.css
  │   └── Button.js
  ├── Card/
  │   ├── Card.css
  │   └── Card.js
  └── index.css
```

#### **Component Setup**

```js
// postcss.config.js
module.exports = {
  plugins: [
    require("postcss-modules")({
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    }),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer"),
  ],
};
```

---

### **4. Multi-Environment Workflow**

```js
// postcss.config.js
const env = process.env.NODE_ENV || "development";

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("postcss-preset-env")({
      stage: env === "production" ? 3 : 1,
    }),
    require("autoprefixer"),
    ...(env === "production"
      ? [
          require("cssnano")({ preset: "advanced" }),
          require("postcss-purgecss")({
            content: ["src/**/*.{html,js}"],
          }),
        ]
      : []),
    require("postcss-reporter")(),
  ],
};
```

---

## 🎯 Best Practices

### **1. Plugin Order Matters**

```js
// Correct order
module.exports = {
  plugins: [
    // 1. Import handling
    require("postcss-import"),

    // 2. Variables & mixins
    require("postcss-simple-vars"),
    require("postcss-mixins"),

    // 3. Syntax enhancement
    require("postcss-nested"),
    require("postcss-preset-env"),

    // 4. Optimization
    require("autoprefixer"),
    require("cssnano"),
  ],
};
```

### **2. Environment-Specific Configs**

```js
// postcss.dev.js
module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer"),
  ],
};

// postcss.prod.js
module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer"),
    require("cssnano")({ preset: "advanced" }),
  ],
};
```

### **3. Error Handling**

```js
module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-simple-vars"),
    require("autoprefixer"),
    require("postcss-reporter")({
      clearAllMessages: true,
      throwError: true,
    }),
  ],
};
```

---

## 📁 Project Structure Examples

### **Simple Project**

```
project/
├── src/
│   ├── styles.css
│   └── components/
│       └── button.css
├── dist/
│   └── styles.css
├── postcss.config.js
└── package.json
```

### **Component Library**

```
library/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.css
│   │   │   └── Button.js
│   │   └── Card/
│   │       ├── Card.css
│   │       └── Card.js
│   ├── styles/
│   │   ├── variables.css
│   │   ├── mixins.css
│   │   └── base.css
│   └── index.css
├── dist/
│   ├── components/
│   └── index.css
├── postcss.config.js
└── package.json
```

### **Multi-Theme Project**

```
themes/
├── src/
│   ├── themes/
│   │   ├── light.css
│   │   ├── dark.css
│   │   └── variables.css
│   ├── components/
│   │   ├── button.css
│   │   └── card.css
│   └── layouts/
│       └── grid.css
├── dist/
│   ├── light.css
│   └── dark.css
├── postcss.config.js
└── package.json
```

---

## 🚀 Advanced Workflows

### **1. Critical CSS Extraction**

```js
const postcss = require("postcss");
const fs = require("fs");

// Extract critical CSS
async function extractCritical(html, css) {
  const result = await postcss([
    require("postcss-critical-css")({
      output: "dist/critical.css",
    }),
  ]).process(css);

  return result.css;
}
```

### **2. CSS-in-JS Integration**

```js
// styled-components with PostCSS
module.exports = {
  plugins: [
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer"),
  ],
};

// styled.js
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.theme.fontSize};
`;
```

### **3. Design System Build**

```js
// Build design tokens
module.exports = {
  plugins: [
    require("postcss-simple-vars"),
    require("postcss-custom-properties"),
    require("postcss-extend"),
    require("postcss-preset-env"),
    require("autoprefixer"),
  ],
};
```

---

## 🔧 Troubleshooting

### **Common Issues**

#### **1. Plugin Conflicts**

```js
// Problem: Multiple variable plugins
// Solution: Choose one variable system
module.exports = {
  plugins: [
    // ✅ Use either simple-vars OR custom-properties
    require("postcss-simple-vars"),
    // ❌ Don't use both
    // require('postcss-custom-properties')
  ],
};
```

#### **2. Import Path Issues**

```js
// Problem: Relative imports not working
// Solution: Use absolute paths or configure base
module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["src/styles", "node_modules"],
    }),
  ],
};
```

#### **3. Source Maps Missing**

```js
// Problem: No source maps in production
// Solution: Explicitly enable source maps
// CLI: --map
// Gulp: .pipe(sourcemaps.write('.'))
// Webpack: devtool: 'source-map'
```

---

## 📊 Performance Optimization

### **1. Plugin Selection**

```js
// Development - Fast processing
module.exports = {
  plugins: [
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer"),
  ],
};

// Production - Full optimization
module.exports = {
  plugins: [
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer"),
    require("cssnano")({ preset: "advanced" }),
  ],
};
```

### **2. Caching Strategy**

```js
// gulpfile.js with caching
const cached = require("gulp-cached");
const remember = require("gulp-remember");

gulp.task("css", () => {
  return gulp
    .src("src/**/*.css")
    .pipe(cached("css"))
    .pipe(postcss(plugins))
    .pipe(remember("css"))
    .pipe(gulp.dest("dist/"));
});
```

### **3. Parallel Processing**

```js
// Parallel CSS processing
const gulp = require("gulp");
const parallel = require("gulp-parallel");

gulp.task("css", parallel(["css:components", "css:utilities", "css:themes"]));
```
