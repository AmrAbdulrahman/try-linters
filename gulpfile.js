var gulp = require('gulp');
var csslint = require('gulp-csslint');
var csslintReporter = require('csslint-stylish');
var jslint = require('gulp-jslint');

gulp.task('lint:css', function() {
  gulp.src('./src/*.css')
      .pipe(csslint('./.csslintrc')) // rules: https://github.com/CSSLint/csslint/tree/master/src/rules
      .pipe(csslint.formatter(csslintReporter));
});

gulp.task('lint:js', function() {
  gulp.src('./src/*.js')
        .pipe(jslint())
        .pipe(jslint.reporter('stylish'));
});

// rules of lesshint:
// https://github.com/lesshint/lesshint/blob/master/lib/linters/README.md

gulp.task('lint', [
  //'lint:css',
  'lint:js'
]);
