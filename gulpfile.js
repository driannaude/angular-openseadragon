var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('serve', function() {
  gulp.src('./')
    .pipe(server({
      host: '0.0.0.0',
      port: 8080,
      livereload: true,
      open: true,
      log: 'debug',
      clientConsole:true
    }));
});
