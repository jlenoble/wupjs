import path from 'path';

function join (...args) {
  const len = args.length;
  let glob = args[len - 1];

  if (!Array.isArray(glob)) {
    glob = [glob];
  }

  args.pop();

  return glob.map(str => path.join(...args, str));
}

export const srcDir = 'src';
export const testDir = 'test';
export const buildDir = 'build';
export const distDir = 'lib';

export const staticDir = path.join(srcDir, 'static');
export const sassDir = path.join(staticDir, 'scss');
export const cssDir = path.join(buildDir, staticDir, 'css');

export const featuresDir = path.join(testDir, 'features');
export const stepsDir = path.join(featuresDir, 'steps');
export const stepSupportDir = path.join(featuresDir, 'support');
export const stepHooksDir = path.join(featuresDir, 'hooks');

export const apps = ['wupjs'];
export const bundleGlob = 'bundle.js';
export const testBundleGlob = 'test_bundle.js';

export const srcGlob = join(srcDir, ['**/*.js', '**/*.jsx']);
export const testGlob = join(testDir, ['**/*.test.js', '**/*.test.jsx']);
export const allTestGlob = join(testDir, ['**/*.js', '**/*.jsx']);
export const sassGlob = join(sassDir, ['*.scss']);
export const allSassGlob = join(sassDir, ['**/*.scss']);

export const featuresGlob = join(featuresDir, ['**/*.feature']);
export const stepsGlob = join(stepsDir, ['**/*.steps.js',
  '**/*.steps.jsx']);
export const stepSupportGlob = join(stepSupportDir, ['**/*.support.js',
  '**/*.support.jsx']);
export const stepHooksGlob = join(stepHooksDir, ['**/*.hooks.js',
  '**/*.hooks.jsx']);
export const allCucumberJsGlob = [].concat(stepsGlob, stepSupportGlob,
  stepHooksGlob);

export const srcBuildGlob = join(buildDir, srcGlob);
export const testBuildGlob = join(buildDir, testGlob);
export const cssBuildGlob = join(buildDir, sassGlob).map(str => {
  return str.replace(/scss/g, 'css');
});

export const stepsBuildGlob = join(buildDir, stepsGlob);
export const stepSupportBuildGlob = join(buildDir, stepSupportGlob);
export const stepHooksBuildGlob = join(buildDir, stepHooksGlob);
export const allCucumberJsBuildGlob = [].concat(stepsBuildGlob,
  stepSupportBuildGlob, stepHooksBuildGlob);

export const allSrcGlob = srcGlob.concat(allTestGlob);
export const allBuildGlob = srcBuildGlob.concat(testBuildGlob,
  allCucumberJsBuildGlob);
export const allCucumberBuildGlob = featuresGlob.concat(srcBuildGlob,
  allCucumberJsBuildGlob);

export const bundleRootGlob = join(buildDir, srcDir, 'index.js');
export const testBundleRootGlob = join(buildDir, testDir, 'wupjs.test.js');
export const bundleBuildGlob = join(buildDir, bundleGlob);
export const testBundleBuildGlob = join(buildDir, testBundleGlob);
