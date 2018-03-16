import {remote} from 'webdriverio';

const options = {
  desiredCapabilities: {
    browserName: 'chrome',
  },
  host: 'localhost',
};

export default remote(options);
