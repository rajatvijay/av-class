// Initialization of Angualr app
var testApp = angular.module('testApp', []);

// Head of department
testApp.controller('mainController', function($scope) {
	$scope.engineers = ["Rajat", "Jitesh", "Varun", "Ankur"];

	$scope.addEngineer = function(name) {
		$scope.engineers.push(name);
	}

	$scope.deleteEngineer = function(index) {
		$scope.engineers.splice(index, 1);
	}

});