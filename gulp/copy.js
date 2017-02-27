import gulp from 'gulp';

import {buildDir, featuresGlob} from './globs';

export const copy = () => {
  return gulp.src(featuresGlob, {
    base: process.cwd(),
    since: gulp.lastRun(copy),
  })
    .pipe(gulp.dest(buildDir));
};

gulp.task('copy', copy);
