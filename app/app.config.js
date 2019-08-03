'use strict';

// Declare app level module which depends on views, and core components
angular
	.module('myApp')
	.config(['$locationProvider', '$routeProvider', config ]);

function config($locationProvider, $routeProvider) {
  	$locationProvider.hashPrefix('!');

  	$routeProvider
  		//.when('/something', ) // do this later https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#manually-identify-route-resolver-dependencies
  		.otherwise({redirectTo: '/view1'});
}
