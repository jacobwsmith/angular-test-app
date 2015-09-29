/*
// *** UNIT TESTS ***
// npm install -g karma -g karma-junit-reporter karma-chrome-launcher karma-firefox-launcher karma-jasmine karma-phantomjs-launcher karma-ng-html2js-preprocessor
// karma start karma.conf.js
*/
module.exports = function(config) {
    config.set({
        basePath: '../',
        files: [
            
            // angular dependencies
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-beta.0/angular.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-beta.0/angular-mocks.js',
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js',

            // app dependencies
            '../app/main.js',
            '../app/app.js',
            '../app/app.htm',
            '../app/app.spec.js'

        ],
        exclude: [
            
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Firefox'],
        plugins: [
            'karma-coverage',
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-ng-html2js-preprocessor'
        ],
        junitReporter: {
            outputFile: 'test-out/unit.xml',
            suite: 'unit'
        },
        // Adding for template testing
        preprocessors: {
            '../app/**/*.htm': ['ng-html2js'],
            '../app/**/*.js': 'coverage'
        },
        reporters: ['progress', 'coverage'],
        // optionally, configure the reporter
        coverageReporter: {
          type : 'html',
          dir : 'unit/coverage/'
        },
        ngHtml2JsPreprocessor: {
            /*
            
            // strip this from the file path
            stripPrefix: 'public/',
            stripSuffix: '.ext',
            
            // prepend this to the
            prependPrefix: 'served/',

            // or define a custom transform function
            // - cacheId returned is used to load template
            //   module(cacheId) will return template at filepath
            cacheIdFromPath: function(filepath) {
            
                // example strips 'public/' from anywhere in the path
                // module(app/templates/template.html) => app/public/templates/template.html
                var cacheId = filepath.strip('public/', '');
                return cacheId;
            },

            // - setting this option will create only a single module that contains templates
            //   from all the files, so you can load them all with module('foo')
            // - you may provide a function(htmlPath, originalPath) instead of a string
            //   if you'd like to generate modules dynamically
            //   htmlPath is a originalPath stripped and/or prepended
            //   with all provided suffixes and prefixes
            moduleName: 'foo'

            */
            moduleName: 'templates'
        }

    });
};