(function(){
	var MainController = function($scope, UtilService) {
		UtilService.doAjax();
	}






	angular.module('GitHubViewer', [])
		.controller('MainController', ['$scope', 'UtilService',MainController]);
}());