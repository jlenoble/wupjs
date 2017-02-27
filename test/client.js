import {remote} from 'webdriverio';

const options = {
  desiredCapabilities: {
    browserName: 'firefox',
  },
};

export default remote(options);
