(function(){
	var UtilService = function($http) {
		var doAjax = function(requestObj) {
			debugger;

		}
		return {
			doAjax: doAjax
		}
	}
	angular.module('GitHubViewer')
		.factory('UtilService', ['$http', UtilService]);
}());