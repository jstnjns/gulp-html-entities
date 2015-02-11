var through     = require('through2'),
    util        = require('gulp-util'),
    entities    = require('html-entities');

var html = new entities.AllHtmlEntities();


module.exports = function(method, options) {

  return through.obj(function(file, encoding, done) {

    var processed, buffer;

    if(file.contents instanceof Buffer) {
      processed = html[method](file.contents.toString()),
      buffer = new Buffer(processed);

      file.contents = buffer;
    }

    this.push(file);
    return done();

  });

};