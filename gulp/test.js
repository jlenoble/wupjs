import gulp from 'gulp';
import mocha from 'gulp-mocha-phantomjs';
import cucumber from 'gulp-cucumber';

import './bundle';
import './sass';

import {featuresGlob, stepsBuildGlob, stepSupportBuildGlob,
  stepHooksBuildGlob} from './globs';

export const test = done => {
  return gulp.src('test/runner.html')
    .pipe(mocha())
    .on('end', () => {
      done();
    });
};

export const testFeatures = () => {
  return gulp.src(featuresGlob)
    .pipe(cucumber({
      'steps': stepsBuildGlob,
      'support': [stepSupportBuildGlob, stepHooksBuildGlob],
      'format': 'summary',
    }));
};

gulp.task('test', gulp.series(gulp.parallel('sass', 'bundle'), gulp.parallel(
  test, testFeatures)));
