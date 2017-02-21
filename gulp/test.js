import gulp from 'gulp';
import mocha from 'gulp-mocha-phantomjs';

import './bundle';
import './sass';

export const test = done => {
  return gulp.src('test/runner.html')
    .pipe(mocha())
    .on('end', () => {
      done();
    });
};

gulp.task('test', gulp.series(gulp.parallel('sass', 'bundle'), test));
