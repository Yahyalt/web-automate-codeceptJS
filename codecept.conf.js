
const { setHeadlessWhen } = require('@codeceptjs/configure');

// Enable headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npm run codeceptjs
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/**/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://zxing.appspot.com/',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs_project',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
};
