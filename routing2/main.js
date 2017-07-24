var testApp = angular.module('testApp', ['ngRoute']);

testApp.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'pages/loginTemplate.html',
	});	
	$routeProvider.when('/home', {
		templateUrl: 'pages/mainTemplate.html',
	});
	$routeProvider.when('/engineer/:engineerIndex', {
		templateUrl: 'pages/detailsTemplate.html'
	});

});

testApp.controller('loginController', function($scope, $location) {
	function goToHome(email, password) {
		if (email && password) {
			$location.url('home');
		} else {
			console.log('not validated');
		}
	}

	$scope.goToHome = goToHome;
});


testApp.service('engineersService', function() {
	this.engineers = [
		{
			name: 'Rajat',
			postion: 'Fullstack Developer',
			sex: 'male',
			age: 23,
			favouriteDish: {
				name: 'Bean Salad',
				url: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
			}
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


testApp.controller('mainController', function($scope, engineersService) {
	$scope.engineers = engineersService.engineers;
});

testApp.controller('detailsController', function($scope, 
	$routeParams, engineersService, $http){
	var engineers = engineersService.engineers;
	$scope.showDetails = false;


	console.log($routeParams.engineerIndex);

	$scope.engineer = engineers[$routeParams.engineerIndex];

	console.log($scope.engineer);

	$scope.showDishDetails = function(url) {

		/*var dataObj = {
			inputs: [{
				data: {
					image: {
						url: url
					}
				}
			}]
		}*/

		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}';
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key b0da72a74c9743bcb90b9177240ac328',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function(response) {
			console.log(response);
		});




		// .then(function(response) {
		// 	$scope.ingredients = response.data.outputs[0].data.concepts;
		// })
		// $scope.showDetails = !$scope.showDetails;
	};
});



/*testApp.controller('detailsController', function($scope, $routeParams, $http) {
	$scope.engineers = [
		{
			name: 'Rajat',
			position: 'Fullstack Developer',
			sex: 'male',
			age: 23,
			favouriteDish: {
				name: 'Bean Salad',
				url: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
			}
		},
		{
			name: 'Ankur',
			position: 'Backend Developer',
			sex: 'male',
			age: 24
		},
		{
			name: 'Jitesh',
			position: 'Java Developer',
			sex: 'male',
			age: 26
		},
		{
			name: 'Varun',
			position: 'Co-founder',
			sex: 'male',
			age: 28
		}
	]

	console.log($routeParams.engineerIndex);

	$scope.engineer = $scope.engineers[$routeParams.engineerIndex];

	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}';
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key b0da72a74c9743bcb90b9177240ac328',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function(response) {
			$scope.ingredients = response.data.outputs[0].data.concepts;
		})
	}
});*/