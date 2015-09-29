// *** END 2 END TESTS ***
// E2E should test the critical paths
describe('App', function() {

    it('should have a proper title', function() {
        browser.get(browser.baseUrl);
        browser.waitForAngular();
        expect(browser.getTitle()).toEqual('Angular Test App');
    });
    it('should toggle name enable/disable field when checkbox is clicked', function(){
        element.all(by.css('.qa-name-enabled')).first().click().then(function() {
            var e = element.all(by.css('.qa-name')).first().getAttribute('disabled');
            expect(e).toEqual('true');
            element.all(by.css('.qa-name-enabled')).first().click().then(function() {
                var e = element.all(by.css('.qa-name')).first().getAttribute('disabled');
                expect(e).toEqual(null);
            });
        });
    });

});