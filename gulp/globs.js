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

export const apps = ['wupjs'];
export const bundleGlob = 'bundle.js';
export const testBundleGlob = 'test_bundle.js';

export const srcGlob = join(srcDir, ['**/*.js', '**/*.jsx']);
export const testGlob = join(testDir, ['**/*.test.js', '**/*.test.jsx']);
export const allTestGlob = join(testDir, ['**/*.js', '**/*.jsx']);
export const sassGlob = join(sassDir, ['*.scss']);
export const allSassGlob = join(sassDir, ['**/*.scss']);

export const srcBuildGlob = join(buildDir, srcGlob);
export const testBuildGlob = join(buildDir, testGlob);
export const cssBuildGlob = join(buildDir, sassGlob).map(str => {
  return str.replace(/scss/g, 'css');
});

export const allSrcGlob = srcGlob.concat(allTestGlob);
export const allBuildGlob = srcBuildGlob.concat(testBuildGlob);

export const bundleRootGlob = join(buildDir, srcDir, 'index.js');
export const testBundleRootGlob = join(buildDir, testDir, 'wupjs.test.js');
export const bundleBuildGlob = join(buildDir, bundleGlob);
export const testBundleBuildGlob = join(buildDir, testBundleGlob);
