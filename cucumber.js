module.exports = {
  default: {
    paths: ['tests/features/*.feature'],
    require: ['tests/support/**/*.ts', 'tests/stepDefinitions/**/*.ts'],
    requireModule: ['tsx/cjs'],
    format: ['progress-bar', 'html:cucumber-report.html'],
  },
};