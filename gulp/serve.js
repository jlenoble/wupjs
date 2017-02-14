import gulp from 'gulp';
import path from 'path';
import browserSync from 'browser-sync';
import {spawn} from 'child_process';

import {srcDir, bundleBuildGlob} from './globs';
import './bundle';

let p;

export const serve = done => {
  if (p) {
    p.kill('SIGINT');
  }

  p = spawn('node', ['build/src/server.js'], {stdio: 'pipe'});

  if (done) {
    done();
  }
};

export const sync = done => {
  let bs = browserSync.create('server');

  bs.init({
    ui: false,
    port: 3000,
    proxy: {
      target: 'localhost:5000',
    },
  }, done);

  gulp.watch([path.join(srcDir, 'index.html'),
    bundleBuildGlob]).on('change', (...args) => {
      serve();

      p.stdout.on('data', data => {
        if (data.toString().match(/[Ss]tart/)) {
          bs.reload(...args);
        }
      });
    });
};

gulp.task('serve', gulp.series(serve, sync));
