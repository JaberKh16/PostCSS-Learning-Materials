// setup of gulp to work with postcss build and watches
const gulp = require('gulp');
const gulpPostCSS = require('gulp-postcss'); // package to run postcss on gulp config
const postcssImport = require('postcss-import'); // inline @import rules
const postcssPresetEnv = require('postcss-preset-env'); // modern CSS features (includes autoprefixer)
const cssnano = require('cssnano'); // minification

// PostCSS plugins pipeline
const postcssPlugins = [
	postcssImport(),
	postcssPresetEnv({ stage: 1 }),
	cssnano()
];

// build general setup without plugins
function buildWithoutPluginStyles() {
	return gulp.src('./src/assets/css/styles.css')
		.pipe(gulp.dest('./dist/css'));
}

// build task
function buildStyles() {
	return gulp.src('./src/assets/css/styles.css')
		.pipe(gulpPostCSS(postcssPlugins))
		.pipe(gulp.dest('./dist/css'));
}

// watch task
function watchStyles() {
	gulp.watch('./src/assets/css/**/*.css', buildStyles);
	// gulp.watch('./src/assets/css/**/*.css', buildWithoutPluginStyles);
}

exports['build:styles'] = buildStyles;
exports['build:withoutstyles'] = buildWithoutPluginStyles;
exports['watch:styles'] = gulp.series(buildStyles, watchStyles);
