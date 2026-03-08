# PostCSS Plugins Guide

## 🚀 Essential PostCSS Plugins

### **Core Processing Plugins**

#### 1. **postcss-preset-env** ⭐

- **Purpose**: Future CSS features today
- **Features**: Custom selectors, custom media queries, nesting
- **Use Case**: Modern CSS syntax support

```js
// postcss.config.js
module.exports = {
  plugins: [
    require("postcss-preset-env")({
      stage: 1, // Use stage 1-4 features
      features: {
        "nesting-rules": true,
        "custom-properties": true,
      },
    }),
  ],
};
```

#### 2. **postcss-simple-vars** ⭐

- **Purpose**: Sass-like variables
- **Syntax**: `$variable: value;`
- **Use Case**: Variable management

```css
$primary-color: #667eea;
$font-size: 16px;

.button {
  color: $primary-color;
  font-size: $font-size;
}
```

#### 3. **postcss-import** ⭐

- **Purpose**: CSS imports
- **Syntax**: `@import "./file.css";`
- **Use Case**: Modular CSS

#### 4. **autoprefixer** ⭐

- **Purpose**: Vendor prefixes
- **Features**: Automatic prefixing
- **Use Case**: Browser compatibility

### **Optimization Plugins**

#### 5. **cssnano** ⭐

- **Purpose**: CSS minification
- **Features**: Remove whitespace, optimize code
- **Use Case**: Production builds

#### 6. **postcss-uncss**

- **Purpose**: Remove unused CSS
- **Features**: HTML-based CSS purging
- **Use Case**: Bundle size optimization

### **Development Plugins**

#### 7. **postcss-nested** ⭐

- **Purpose**: Nested CSS syntax
- **Syntax**: Sass-like nesting
- **Use Case**: Better organization

```css
.container {
  .header {
    color: blue;

    &:hover {
      color: red;
    }
  }
}
```

#### 8. **postcss-extend**

- **Purpose**: Placeholder selectors
- **Syntax**: `@extend .class;`
- **Use Case**: Code reuse

### **Linting & Quality**

#### 9. **stylelint** ⭐

- **Purpose**: CSS linting
- **Features**: Code quality checks
- **Use Case**: Code consistency

#### 10. **postcss-bem-linter**

- **Purpose**: BEM methodology
- **Features**: Naming convention checks
- **Use Case**: BEM compliance

## 📋 Plugin Categories

### **Syntax Enhancement**

- `postcss-preset-env` - Future CSS
- `postcss-simple-vars` - Variables
- `postcss-nested` - Nesting
- `postcss-mixins` - Mixins

### **Import/Modularity**

- `postcss-import` - CSS imports
- `postcss-modules` - CSS modules
- `postcss-extend` - Extends

### **Optimization**

- `cssnano` - Minification
- `postcss-uncss` - Unused CSS removal
- `postcss-purgecss` - CSS purging

### **Browser Support**

- `autoprefixer` - Vendor prefixes
- `postcss-normalize` - CSS normalization
- `postcss-flexbugs-fixes` - Flexbox fixes

### **Development Tools**

- `postcss-reporter` - Error reporting
- `postcss-browser-reporter` - Browser errors
- `postcss-inline-svg` - SVG inline

## 🎯 Use Case Examples

### **Modern Web App**

```js
plugins: [
  require("postcss-preset-env")({ stage: 1 }),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
  require("cssnano"),
];
```

### **Legacy Browser Support**

```js
plugins: [
  require("postcss-preset-env")({
    stage: 3, // More stable features
    browsers: ["> 1%", "IE 11"],
  }),
  require("autoprefixer"),
  require("postcss-flexbugs-fixes"),
];
```

### **Performance Optimization**

```js
plugins: [
  require("postcss-import"),
  require("postcss-uncss")({
    html: ["src/**/*.html"],
  }),
  require("cssnano")({ preset: "advanced" }),
];
```

### **Component Libraries**

```js
plugins: [
  require("postcss-modules"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("postcss-extend"),
  require("stylelint")(),
];
```
