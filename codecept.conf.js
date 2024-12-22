exports.config = {
  tests: './features/**/*.feature', // Path to the .feature files
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
  gherkin: {
    features: './features/example.feature', // Path to .feature files
    steps: ['./step_definitions/example_steps.js'] // Path to step definitions
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs_project_with_bdd',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
};
