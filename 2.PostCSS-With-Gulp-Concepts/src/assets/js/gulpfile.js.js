// setup of gulp to work with postcss build and watches
const gulp = require('gulp');
const precss = require('precss');	// sass like syntax support processor plugin
const cssnext = require('cssnext');
const gulpPostCSS = require('gulp-postcss'); // package to run postcss on gulp config
const gulpSass = require('gulp-sass');
const autoprefixer = require('autoprefixer'); // vendor presets processor plugin
const csswring = require('csswring');  // warning css plugin
const mqpacker = require('css-mqpacker');

// setup builds
gulp.task('build:styles', function(){
	const processTools = [
		csswring,
		mqpacker,
		autoprefixer({ browsers: ['last 2 version']})
	];
	return gulp.src('./src/css/input.css').pipe(processTools).pipe(gulp.dest('./dist/css/styles.css'))
	// return gulp.src('./src/css/input.css').pipe(gulp.dest('./dist/css/styles.css'))
});

// setup watch builds
gulp.task('watch:styles', function(){
	gulp.watch('**/*.css', ['styles']);
});