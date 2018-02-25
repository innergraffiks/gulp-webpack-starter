/**
 * Cleaner
 */
const gulp = require('gulp');
const del = require('del');
const path = require('path');
const config = require('./config');

gulp.task('svgspriteclean', () => {
  del(path.join(config.root.dist, config.css.dev), '!tmp/unicorn.js');
});
