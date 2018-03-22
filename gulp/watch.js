import gulp from 'gulp';
import touchMs from 'touch-ms';

import {srcBuildGlob, srcGlob, allBuildGlob, allTestGlob, featuresGlob,
  testBundleBuildGlob, allSassGlob, allCucumberJsBuildGlob} from './globs';
import {build} from './build';
import {copy} from './copy';
import {bundle, testBundle} from './bundle';
import {test, testFeatures} from './test';
import {sass} from './sass';

export const watch = done => {
  gulp.watch(allTestGlob, build);
  gulp.watch(srcBuildGlob, bundle);
  gulp.watch(srcGlob, () => {
    return touchMs('gulp/build.js'); // Make sure server is restarted
  });
  // gulp.watch(allBuildGlob, testBundle);
  // gulp.watch(testBundleBuildGlob, test);
  gulp.watch(allSassGlob, sass);
  gulp.watch(allCucumberJsBuildGlob, testFeatures);
  gulp.watch(featuresGlob, gulp.series(copy, testFeatures));
  done();
};

gulp.task('watch', watch);
