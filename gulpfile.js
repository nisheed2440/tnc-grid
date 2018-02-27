'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('sass', function () {
    var plugins = [
        autoprefixer({
            browsers: ['last 1 version']
        }),
        cssnano()
    ];
    return gulp.src('./grid.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./grid.scss', ['sass']);
});