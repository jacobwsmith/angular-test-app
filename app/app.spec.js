describe("AppCtrl Tests", function() {

    var $scope,
        $compile,
        appTemplate;

    // Load up the app
    beforeEach(module('app'));

    // Load the templates which is the templateUrls that is defined in the karma.conf.js
    beforeEach(module('templates'));

    // Overrides/Mocks the DataService
    beforeEach(module("app", function($provide) {
        $provide.value("DataService", {
            data: {
                name: {
                    enabled: true,
                    value: 'Larry'
                }
            }
        });
    }));

    console.log('NOTE: you may need to change the location of appTemplate');
        
    // The injector unwraps the underscores (_) from around the parameter names when matching
    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_, _$templateCache_, _$compile_) {
        
        // TODO: why is this absolute?
        appTemplate = _$templateCache_.get('/Users/jacobwsmith/Workspaces/git-hub/angular-test-app/app/app.htm');

        $scope = _$rootScope_.$new();
        $compile = _$compile_;
        _$controller_("AppCtrl as appVm", {
            $scope: $scope
        });

    }));

    it('should pass the sanity test cuz true equal to true', function(){
        expect(true).toEqual(true);
    });
    it("should contain a name", function() {
        var element = $compile('<div>' + appTemplate + '</div>')($scope);
        $scope.$digest();
        expect($scope.appVm.data.name).toBeDefined();
    });
    it("should disable the name field when disabled", function(){
        var element = $compile('<div>' + appTemplate + '</div>')($scope);
        $scope.$digest();
        $scope.appVm.data.name.enabled = false;
        $scope.$digest();
        var result = element[0].querySelectorAll('.qa-name');
        expect($(result).prop('disabled')).toEqual(true);
    });
    
});

