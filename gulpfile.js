var gulp = require('gulp'),
    entities = require('./index'),
    rename = require('gulp-rename');

gulp.task('encode', function() {
  return gulp.src('./input/without-entities.html')
    .pipe(entities('encode'))
    .pipe(rename('encoded.html'))
    .pipe(gulp.dest('./output/'));
});

gulp.task('decode', function() {
  return gulp.src('./input/with-entities.html')
    .pipe(entities('decode'))
    .pipe(rename('decoded.html'))
    .pipe(gulp.dest('./output'));
});

gulp.task('default', ['encode', 'decode']);