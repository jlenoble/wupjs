import path from 'path';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import compass from 'gulp-compass';

import {distGlob, distDir, sassDir, sassGlob, sassImportDir} from './globs';

export const dist = () => {
  return gulp.src(distGlob)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel())
    .pipe(gulp.dest(distDir));
};

export const distSass = () => {
  return gulp.src(sassGlob, {
    base: process.cwd(),
    since: gulp.lastRun(distSass),
  })
  .pipe(compass({
    project: path.join(__dirname, '..'),
    css: distDir,
    sass: sassDir,
    import_path: sassImportDir,
  }))
  .pipe(gulp.dest(distDir));
};

gulp.task('dist', gulp.parallel(dist, distSass));
