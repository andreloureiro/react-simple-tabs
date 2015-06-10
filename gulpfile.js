var gulp = require('gulp');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var clean  = require('gulp-clean');
var connect = require('gulp-connect');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

gulp.task('connect', function() {
	connect.server({
		root: 'src',
		livereload: true
		})
	})

gulp.task('html', function() {
	gulp.src(['./*.html'])
		.pipe(gulp.dest('./dist'))
	})

gulp.task('browserify', function() {
	browserify(['./src/js/app.jsx'])
		.transform(reactify)
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('./src/js'))
		.pipe(connect.reload());
	});

gulp.task('watch', function() {
	gulp.watch(['./src/js/**/*.jsx'], ['browserify']);
	});

gulp.task('buildClean', function() {
	gulp.src('./dist', {read : false})
		.pipe(clean());
	})

gulp.task('buildBrowserify', function() {
	browserify(['./src/js/app.jsx'])
		.transform(reactify)
		.bundle()
		.pipe(source('tabs.js'))
		.pipe(gulp.dest('./dist'));
	});

gulp.task('build', ['buildClean', 'buildBrowserify']);

gulp.task('default', ['connect', 'html', 'browserify', 'watch']);