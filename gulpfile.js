'use strict';

const path = require('path');

// Gulp.js
const gulp = require('gulp');
// Browserify.js
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
// Uglify.js
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');

function compile() {
    return browserify({
        basedir: '.',
        debug: true,
        entries: [path.join('ts', 'lorem.ts')],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('lorem.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.join('js')));
}

gulp.task('ts', compile);
gulp.task('default', compile);
