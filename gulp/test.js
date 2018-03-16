import gulp from 'gulp';
import mocha from 'gulp-mocha-phantomjs';
import cucumber from 'gulp-cucumber';

import './copy';
import './bundle';
import './sass';

import {featuresBuildGlob, stepsBuildGlob, stepSupportBuildGlob,
  stepHooksBuildGlob} from './globs';

export const test = done => {
  return gulp.src('test/runner.html')
    .pipe(mocha())
    .on('end', () => {
      done();
    });
};

export const testFeatures = () => {
  return gulp.src(featuresBuildGlob)
    .pipe(cucumber({
      'steps': stepsBuildGlob,
      'support': stepSupportBuildGlob.concat(stepHooksBuildGlob),
      'format': 'summary',
    }));
};

gulp.task('test', gulp.series(gulp.parallel('copy', 'sass', 'bundle'),
  testFeatures));
// gulp.parallel(test, testFeatures)));
