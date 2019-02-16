var path = require('path');
var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync('./package.json'));
var assetsPath = path.resolve(pkg.path.assetsDir);

var gulp = require('gulp');
var path = require('path');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
const ftp = require('vinyl-ftp');
const minimist = require('minimist');

gulp.task("js", function () {
  return gulp.src([path.join(assetsPath, 'dist/js/*.js')])
    // .pipe(plumber())
    // .pipe(uglify())
    // .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(path.join(assetsPath, 'common/js/')));
});

gulp.task("sass", function () {
  return gulp.src([path.join(assetsPath, 'dist/css/*.sass')])
    .pipe(sass({
      outputStyle: 'expended'
    }))
    .pipe(gulp.dest(path.join(assetsPath, 'common/css/')))
});

gulp.task('default', function () {
  gulp.watch(path.join(assetsPath, 'dist/js/*.js'), ['js']);
});

gulp.task('ftp', function () {
  // パスワードを受け取れるようにしたい。-fコマンドが上手くいかん、、、

  // FTPアカウント
  var conn = ftp.create({
    host: 'ftp.14451a4e1a4ab9a2.lolipop.jp',
    user: 'lolipop.jp-14451a4e1a4ab9a2',
    password: '',
    parallel: 5,
  });

  // ローカルのパス
  var globs = [
    'assets/**',
    '*.css',
    '*.js',
    '*.php',
    // 「!」を付けて除外するファイルを指定
    '!gulpfile.js',
    '!*.md',
    '!*.sql',
  ];

  // ベースディレクトリを「'.'」に記述する
  return gulp.src(globs, {
      base: '.',
      buffer: false
    })
    .pipe(conn.newer('wp-content/themes/deaconblues')) // 指定のディレクトリにあるファイルより新しければアップロード
    .pipe(conn.dest('wp-content/themes/deaconblues')); // 出力するディレクトリ
});
