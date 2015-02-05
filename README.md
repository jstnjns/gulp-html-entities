# gulp-html-entities
For encoding or decoding HTML entities in your markup.

## Encode


```
gulp.task('encode', function() {
  return gulp.src('./input/without-entities.html')
    .pipe(entities('encode'))
    .pipe(rename('encoded.html'))
    .pipe(gulp.dest('./output/'));
});
```

## Decode

```
gulp.task('decode', function() {
  return gulp.src('./input/with-entities.html')
    .pipe(entities('decode'))
    .pipe(rename('decoded.html'))
    .pipe(gulp.dest('./output'));
});
```