# PostCSS Authentication Portal - Modular Structure

This project demonstrates a modular approach to building an authentication portal using PostCSS plugins and partial components.

## 📁 Project Structure

### CSS Partials (`src/assets/css/partials/`)

- **`_variables.css`** - Contains all CSS custom properties and Sass variables
- **`_navigation.css`** - Navigation header and responsive menu styles
- **`_auth-layout.css`** - Main layout, auth cards, and footer styles
- **`_forms.css`** - Form elements, inputs, buttons, and social login styles

### HTML Partials (`src/partials/`)

- **`navigation.html`** - Navigation header component
- **`login-form.html`** - Login form component
- **`register-form.html`** - Registration form component
- **`footer.html`** - Footer component

## 🎨 PostCSS Features Used

### 1. **Sass Variables** (`postcss-simple-vars`)

```css
$defaultBorder: 2px;
$defaultBorderColor: #ccc;
$defaultPadding: 10px;
```

### 2. **Custom Selectors** (`postcss-preset-env`)

```css
@custom-selector :--heading h1, h2, h3;
:--heading {
  font-weight: bold;
}
```

### 3. **Custom Media Queries** (`postcss-preset-env`)

```css
@custom-media --small-viewport (width <= 600px);
@media --small-viewport {
  /* Responsive styles */
}
```

### 4. **CSS Imports** (`postcss-import`)

```css
@import "./assets/css/partials/_variables.css";
@import "./assets/css/partials/_navigation.css";
```

### 5. **Nested CSS** (`postcss-nested`)

```css
.auth-card {
  background: white;
  &:hover {
    transform: translateY(-2px);
  }
}
```

### 6. **Autoprefixer** (`autoprefixer`)

Automatically adds vendor prefixes for better browser compatibility.

### 7. **Minification** (`cssnano`)

Optimizes and minifies the final CSS output.

## 🚀 Build Process

```bash
# Build CSS from partials
npm run build:css

# Watch for changes and auto-build
npm run watch:css

# Start development server (requires live-server)
npm run live:serve
```

## 🎯 Component Benefits

### CSS Partials:

- **Modularity**: Each component has its own stylesheet
- **Maintainability**: Easy to update specific components
- **Reusability**: Styles can be reused across projects
- **Organization**: Clear separation of concerns

### HTML Partials:

- **Component-based**: Each form is a self-contained component
- **Reusable**: Can be used in different pages
- **Maintainable**: Easy to update individual components
- **Clean Structure**: Main HTML stays clean and readable

## 📱 Responsive Design

The design uses custom media queries for responsive breakpoints:

- **Desktop**: Full navigation and side-by-side layouts
- **Mobile**: Hamburger menu, stacked layouts, optimized spacing

## 🎨 Design System

### Color Palette:

- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Success: `#28a745` (Green)
- Text: `#333`, `#666`, `#999`
- Background: `#f0f0f0`, `#f8f9fa`

### Typography:

- System fonts for optimal performance
- Clear hierarchy with proper sizing
- Accessible contrast ratios

### Spacing:

- Consistent spacing scale using CSS variables
- Responsive adjustments for mobile devices

## 🔧 Customization

### Adding New Components:

1. Create CSS partial in `src/assets/css/partials/`
2. Import in main `styles.css`
3. Create HTML partial in `src/partials/`
4. Include in main HTML file

### Modifying Variables:

Update `_variables.css` to change colors, spacing, or other design tokens globally.

### Adding New PostCSS Plugins:

1. Install plugin: `npm install --save-dev plugin-name`
2. Require in `postcss.config.js`
3. Add to plugins array

## 🌟 Features Demonstrated

- ✅ Modern authentication forms
- ✅ Responsive navigation
- ✅ Social login integration
- ✅ Form validation
- ✅ Component-based architecture
- ✅ PostCSS plugin integration
- ✅ CSS variables and theming
- ✅ Mobile-first responsive design
- ✅ Accessibility considerations
- ✅ Performance optimization
