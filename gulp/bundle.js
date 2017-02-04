import gulp from 'gulp';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';

import {bundleRootGlob, buildDir, bundleGlob,
  testBundleRootGlob, testBundleGlob} from './globs';
import './build';

export const bundle = () => {
  return browserify(bundleRootGlob)
    .bundle()
    .pipe(source(bundleGlob))
    .pipe(buffer())
    .pipe(gulp.dest(buildDir));
};

export const testBundle = () => {
  return browserify(testBundleRootGlob)
    .bundle()
    .pipe(source(testBundleGlob))
    .pipe(buffer())
    .pipe(gulp.dest(buildDir));
};

gulp.task('bundle', gulp.series('build', bundle, testBundle));
