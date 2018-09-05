const gulp = require('gulp');
const min = require('gulp-uglify-es').default;
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const replace = require('gulp-html-replace');

const version = '1.0.0';


//Copies html to dist folder and changes the the css/js references to minified versions
gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(replace({
      'css': 'css/' + version + '.min.css',
      'js': 'js/' + version + '.min.js'
    }))
    .pipe(gulp.dest('dist'));
});

//copy, concat and minify js
gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat(version + '.min.js'))
    .pipe(min())
    .pipe(gulp.dest('dist/js'))
});

//copy, concat, minify css
gulp.task('css', function() {
  return gulp.src('src/css/*.css')
    .pipe(concat(version + '.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css'))
});

//copy images and subfolders to dist
gulp.task('img', function() {
  return gulp.src('src/img/*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('imgPpl', function() {
  return gulp.src('src/img/people/*')
    .pipe(gulp.dest('dist/img/people'));
});

//runs all deployment tasks, dist folder becomes production ready code
gulp.task('default', ['html', 'js', 'css', 'img', 'imgPpl']);