
// setup considering gulp and gulp-sourcemaps
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

// setup build task 
gulp.task('build:css', function(){
    return gulp.src('../src/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('../dist/css'));
});

// setup watch task
gulp.task('watch:css', function(){
    gulp.watch('../src/css/*.css', gulp.series('build:css'));
});