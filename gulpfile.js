// 'use strict';
 
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    // .pipe(autoprefixer())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('serve', function(){

	browserSync.init({
		server: {
			baseDir: './'
		}
	})

	gulp.watch('./scss/**/*.scss', ['sass']);
	gulp.watch('./**/*.html').on('change', browserSync.reload())


});

gulp.task('default',['sass','serve']);
 
// gulp.task('sass:watch', function () {
//   gulp.watch('./scss/**/*.scss', ['sass']);
// });