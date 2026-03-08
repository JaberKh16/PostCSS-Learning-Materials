var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// build setup
gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers: ['last 1 version']}), // with option last 1 version browser
        cssnano()
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('../dist/css'));
});

// watch setup
gulp.task('watch', function(){
	gulp.watch('../src/**/*.css', ['css']);
})