angular.module('app').service('DataService', function($rootScope, $window) {

	this.title = 'Angular Test App';
    this.data = {
        name: {
            enabled: true,
            value: 'Test Name'
        }
    };

});