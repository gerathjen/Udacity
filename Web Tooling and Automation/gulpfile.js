var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Gulp-Autoprefixer
var autoprefixer = require('Gulp-Autoprefixer');

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