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
####Methods
+ *encode* — encodes, replacing characters to its entity representations. Ignores UTF characters with no entity representation.
+ *encodeNonUTF* — encodes, replacing characters to its entity representations. Inserts numeric entities for UTF characters.
+ *encodeNonASCII* — encodes, replacing only non-ASCII characters to its numeric entity representations.

## Decode

```
gulp.task('decode', function() {
  return gulp.src('./input/with-entities.html')
    .pipe(entities('decode'))
    .pipe(rename('decoded.html'))
    .pipe(gulp.dest('./output'));
});
```
#### Methods
+ *decode* — decodes, replacing entities to characters. Unknown entities are left as is.
