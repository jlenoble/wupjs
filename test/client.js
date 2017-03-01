import {remote} from 'webdriverio';

const options = {
  desiredCapabilities: {
    browserName: 'firefox',
  },
  host: 'debian',
};

export default remote(options);
