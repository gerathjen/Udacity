var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Gulp-Autoprefixer
var autoprefixer = require('gulp-autoprefixer');
// es6-promise
require('es6-promise').polyfill();

gulp.task('default', function() {
  console.log('Hallo Welt');
});


gulp.task('styles', function(){
  return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
    .pipe(autoprefixer({
    	browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('css'))
});