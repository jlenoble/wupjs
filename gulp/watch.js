import gulp from 'gulp';

import {srcBuildGlob, allSrcGlob, allBuildGlob, featuresGlob,
  testBundleBuildGlob, allSassGlob, allCucumberBuildGlob} from './globs';
import {build} from './build';
import {copy} from './copy';
import {bundle, testBundle} from './bundle';
import {test, testFeatures} from './test';
import {sass} from './sass';

export const watch = done => {
  gulp.watch(allSrcGlob, build);
  gulp.watch(srcBuildGlob, bundle);
  // gulp.watch(allBuildGlob, testBundle);
  // gulp.watch(testBundleBuildGlob, test);
  gulp.watch(allSassGlob, sass);
  gulp.watch(allCucumberBuildGlob, testFeatures);
  gulp.watch(featuresGlob, gulp.series(copy, testFeatures));
  done();
};

gulp.task('watch', watch);
