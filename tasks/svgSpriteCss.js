/**
 * Build CSS
 */
const gulp = require('gulp');
const { reload } = require('browser-sync');
const path = require('path');

const config = require('./config');

gulp.task('spritecss', () =>
  gulp
    .src(path.join(config.root.dist, 'sass/parts/vendor/_sprite.scss'))
    .pipe(gulp.dest(path.join(config.root.dev, config.css.dev, 'parts/vendor/')))
    .pipe(reload({ stream: true })));
