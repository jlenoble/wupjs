import gulp from 'gulp';
import path from 'path';
import browserSync from 'browser-sync';

import {buildDir, srcDir, bundleBuildGlob} from './globs';
import './bundle';

export const serve = done => {
  var bs = browserSync.create('server');

  bs.init({
    ui: false,
    port: 3000,
    server: {
      baseDir: [buildDir, srcDir,'node_modules']
    }
  }, done);

  gulp.watch([path.join(srcDir, 'index.html'),
    bundleBuildGlob]).on('change', (...args) => {
      bs.reload(...args);
    });
};

gulp.task('serve', serve);
