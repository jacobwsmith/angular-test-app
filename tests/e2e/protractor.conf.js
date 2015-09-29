/*
// *** END TO END TESTS ***
// https://angular.github.io/protractor/#/
//  webdriver-manager start
//	new tab > protractor protactor.conf.js
*/

// ============================================================
// conf.js
// ============================================================
exports.config = {
    baseUrl: 'http://localhost:8000/',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'app.spec.js'
    ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000
    }
};