import gulp from 'gulp';

import './build';
import './sass';
import {bundle} from './bundle';
import {testFeatures} from './test';
import './serve';
import './watch';

gulp.task('tdd', gulp.series('copy', 'build', 'sass', bundle, 'serve',
  testFeatures, 'watch'));
