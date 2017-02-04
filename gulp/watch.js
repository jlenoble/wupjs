import gulp from 'gulp';

import {srcBuildGlob, allSrcGlob, allBuildGlob,
  testBundleBuildGlob} from './globs';
import {build} from './build';
import {bundle, testBundle} from './bundle';
import {test} from './test';

export const watch = done => {
  gulp.watch(allSrcGlob, build);
  gulp.watch(srcBuildGlob, bundle);
  gulp.watch(allBuildGlob, testBundle);
  gulp.watch(testBundleBuildGlob, test);
  done();
};

gulp.task('watch', watch);
