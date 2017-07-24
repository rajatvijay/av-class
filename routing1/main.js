var testApp = angular.module('testApp', ['ngRoute']);

testApp.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'pages/loginTemplate.html',
		controller: 'loginController'
	});	
	$routeProvider.when('/home', {
		templateUrl: 'pages/mainTemplate.html',
		controller: 'mainController'
	});	

});

testApp.controller('loginController', function($scope) {
	console.log('login');
});


testApp.controller('mainController', function($scope) {
	$scope.engineers = [
		{
			name: 'Rajat',
			postion: 'Fullstack Developer',
			sex: 'male',
			age: 23
		},
		{
			name: 'Ankur',
			postion: 'Backend Developer',
			sex: 'male',
			age: 24
		},
		{
			name: 'Jitesh',
			postion: 'Java Developer',
			sex: 'male',
			age: 26
		},
		{
			name: 'Varun',
			postion: 'Co-founder',
			sex: 'male',
			age: 28
		}
	]
});

testApp.controller('detailsController', function($scope) {
	console.log('');
});