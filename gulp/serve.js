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

  p.stdout.on('data', data => {
    process.stdout.write('[Express] ');
    process.stdout.write(data.toString());
  });
  p.stderr.on('data', data => {
    process.stderr.write('[Express] ');
    process.stderr.write(data.toString());
  });

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
        if (data.toString().match(/Server started on port 5000/)) {
          bs.reload(...args);
        }
      });
    });
};

gulp.task('serve', gulp.series(serve, sync));
