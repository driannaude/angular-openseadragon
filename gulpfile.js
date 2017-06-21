var gulp = require('gulp');
var server = require('gulp-server-livereload');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');

let config = {
  host: '0.0.0.0',
  port:8080
};

gulp.task('build', function() {
  gulp.src(['./src/**/*.js', './example/*'])
    .pipe(gulp.dest('./build'))
});

gulp.task('watch', function() {
  return watch(['src/**/*', 'example/**/*'], function() {
    gulp.src(['./src/**/*.js', './example/*'])
    .pipe(gulp.dest('./build'));
  });
})

gulp.task('server', function() {
  gulp.src('./build')
    .pipe(server({
      host: config.host,
      port: config.port,
      livereload: true,
      open: true,
      log: 'debug',
      clientConsole:true
    }));
});

gulp.task('serve', function(cb) {
  runSequence(
    'build',
    'server',
    'watch',
    cb
  );
});
