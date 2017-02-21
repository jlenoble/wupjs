import gulp from 'gulp';

import {srcBuildGlob, allSrcGlob, allBuildGlob,
  testBundleBuildGlob, allSassGlob} from './globs';
import {build} from './build';
import {bundle, testBundle} from './bundle';
import {test} from './test';
import {sass} from './sass';

export const watch = done => {
  gulp.watch(allSrcGlob, build);
  gulp.watch(srcBuildGlob, bundle);
  gulp.watch(allBuildGlob, testBundle);
  gulp.watch(testBundleBuildGlob, test);
  gulp.watch(allSassGlob, sass);
  done();
};

gulp.task('watch', watch);
