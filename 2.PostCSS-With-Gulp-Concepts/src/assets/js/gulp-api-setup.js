const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const postcssNested = require('postcss-nested')
const fs = require('fs')

fs.readFile('src/app.css', (err, css) => {
  postcss([autoprefixer, postcssNested])
    .process(css, { from: 'src/app.css', to: 'dest/app.css' })
    .then(result => {
      fs.writeFile('dest/app.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('dest/app.css.map', result.map.toString(), () => true)
      }
    })
})