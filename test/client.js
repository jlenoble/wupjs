import 'babel-polyfill';
import {remote} from 'webdriverio';

const options = {
  desiredCapabilities: {
    browserName: 'chrome',
  },
  host: 'localhost',
  baseUrl: 'http://192.168.1.32:3000',
};

export default remote(options);
export const timeout = {timeout: 1000 * 60};
