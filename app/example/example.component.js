'use strict';

// Register `example` component, along with its associated controller and template
angular.
    module('example').
    component('example', {
        templateUrl: 'example/example.template.html',
        controller: exampleController  
    });

function exampleController() {
    this.message = 'Hello World';
}