var gulp = require('gulp');
var sass = require('gulp-sass')

gulp.task("sass", function() {
  return gulp.src("./dist/css/*.css")
    .pipe(sass())
    .pipe(gulp.dest("./common/css"));
});
