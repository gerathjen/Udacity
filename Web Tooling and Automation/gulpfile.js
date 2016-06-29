/* eslint-env node */

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Gulp-Autoprefixer
var autoprefixer = require('gulp-autoprefixer');
// BrowserSync
var browserSync = require('browser-sync').create();
// es6-promise
require('es6-promise').polyfill();
// gulp-eslint
var eslint = require('gulp-eslint')
// PhantomJS
var jasmine = require('gulp-jasmine-phantom');

gulp.task('default', ['styles', 'lint'], function() {
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('js/**/*.js', ['lint']);

    browserSync.init({
        server: './'
    });
});

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('lint', function () {
    return gulp.src(['js/**/*.js'])
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(eslint.failOnError());
});

gulp.task('tests', function() {
  return gulp.src('tests/test.js')
          .pipe(jasmine({
            integration: true
          }));
});