(function(){
	var MainController = function($scope) {
		$scope.message = 'Hello World';
	}
	angular.module('GitHubViewer', [])
		.controller('MainController', ['$scope', MainController]);
}());