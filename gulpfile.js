var path = require('path');
var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync('./package.json'));
var assetsPath = path.resolve(pkg.path.assetsDir);

var gulp = require('gulp');
var path = require('path')
var uglify = require('gulp-uglify')

gulp.task("js", function() {
  gulp.src([path.join(assetsPath, 'dist/js/*.js')])
  // .pipe(plumber())
  // .pipe(uglify())
  // .pipe(rename({extname: '.min.js'}))
  .pipe(gulp.dest(path.join(assetsPath, 'common/js/')));
});

gulp.task('default', function() {
  gulp.watch(path.join(assetsPath, 'dist/js/*.js'),['js']);
});