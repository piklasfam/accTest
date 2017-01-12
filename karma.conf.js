//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app.js',
      'scripts/accounts/**/*.js',
      'scripts/filters/**/*.js',
      'scripts/directives/**/*.js',
      'scripts/directives/**/*.html'
    ],

    preprocessors: {
      'scripts/directives/**/*.html':['ng-html2js'],
      'scripts/directives/**/*.js':['coverage'],
      'scripts/accounts/**/*.js':['coverage'],
      'scripts/filters/**/*.js':['coverage']
    },

    ngHtml2JsPreprocessor: {
      moduleName: "my.templates"
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor',
      'karma-coverage'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
