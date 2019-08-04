'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

/*
'use strict';

angular
    .module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', view1Config]);

function view1Config($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.template.html',
        controller: 'View1Ctrl'
    });
};
*/