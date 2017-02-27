import gulp from 'gulp';
import {spawn} from 'child_process';

import {seleniumPath, seleniumGeckoDriverPath} from './globs';

let p;

export const startSelenium = done => {
  if (p) {
    p.kill('SIGINT');
  }

  p = spawn('java', ['-jar', '-Dwebdriver.gecko.driver=' +
    seleniumGeckoDriverPath, seleniumPath], {stdio: 'pipe'});

  p.stdout.on('data', data => {
    const str = data.toString();
    process.stdout.write('[Selenium] ');
    process.stdout.write(str);
  });
  p.stderr.on('data', data => {
    const str = data.toString();
    if ((!str.includes('INFO') && !str.includes('DEBUG')) || str.includes(
      'Selenium Server is up and running')) {
      process.stdout.write('[Selenium] ');
      process.stdout.write(str);
    }
  });

  if (done) {
    done();
  }
};

gulp.task('selenium', startSelenium);
