angular.module('app').controller('AppCtrl', function($scope, DataService) {

    var appVm = this;
    appVm.title = DataService.title;
    appVm.data = DataService.data;
    
    ///////

});