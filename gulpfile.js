var gulp        = require('gulp');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');
var browserSync = require('browser-sync').create();

var sourcePath  = "src/";
var distPath    = "dist/";
var localServer = 'http://localhost:7717';

// create minified and non minified files
gulp.task('js', function() {
    return gulp.src([
            sourcePath + 'js/bootstrap-breakpoint.js'
        ])
        .pipe(gulp.dest(distPath + 'js/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(distPath + 'js/'));
});

// create minified and non minified files
gulp.task('js-jquery', function() {
    return gulp.src([
            sourcePath + 'js/jquery.bootstrap-breakpoint.js'
        ])
        .pipe(gulp.dest(distPath + 'js/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(distPath + 'js/'));
});

// add the watcher
gulp.task('watch', function() {
    // watch js files
    gulp.watch(sourcePath + 'js/**', ['js', 'js-jquery']);
});

// production
gulp.task('prod', ['js', 'js-jquery']);

// default task if just called gulp (incl. Watch)
gulp.task('default', ['js', 'js-jquery', 'watch'], function() {
    // start browsersync
    browserSync.init({
        proxy: localServer
    });

    gulp.watch(distPath + '**/*.js').on('change', browserSync.reload);
});