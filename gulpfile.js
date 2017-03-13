var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var buildProduction = utilities.env.production;

gulp.task('jsBrowserify', function(){
  return browserify({ entries: ['./js/card-interface.js']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});

gulp.task("minifyScrpts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app/js")
  .pipe(uglify())
  .pipe(gulp.dest("./build/js"));
});

gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
.pipe(jshint())
.pipe(jshint.reporter('default'));
});

gulp.task("build",["clean"], function(){
  if (buildProduction){
    gulp.start('minifyScrpts');
  }else{
    gulp.start('jsBrowserify');
  }
});
