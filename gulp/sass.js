import gulp from 'gulp';
import path from 'path';
import compass from 'gulp-compass';
import sourcemaps from 'gulp-sourcemaps';

import {sassDir, cssDir, sassGlob, sassImportDir} from './globs';

export const sass = () => {
  return gulp.src(sassGlob, {
    base: process.cwd(),
    since: gulp.lastRun(sass),
  })
  .pipe(sourcemaps.init())
  .pipe(compass({
    project: path.join(__dirname, '..'),
    css: cssDir,
    sass: sassDir,
    import_path: sassImportDir,
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(cssDir));
};

gulp.task('sass', sass);
