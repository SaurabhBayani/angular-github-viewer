(function(){
	angular.module('MyApp', [])
		.factory('FirstFactory', function(){
			return {
				empCount: 0,
				empArray: []
			}
		})

		.controller('FirstController', ['$scope','$compile', 'FirstFactory', function($scope, $compile, FirstFactory){
			$scope.employeeList = FirstFactory.empArray;
			$scope.addEmployee = function($element){
				var el = $('.emp-form-container');
				var newFormRow = $compile("<employee-form-row></employee-form-row>")($scope);
				el.append(newFormRow);
				FirstFactory.empCount ++;
			}			
			$scope.submitEmployee = function (){
				var formEl = $('.emp-form-container'),
					formRows = formEl.find('.emp-row')
					innerInput = [],
					currentObj = {};
				angular.forEach(formRows, function(currentRow, value){
					innerInput = $(currentRow).find('input');
					currentObj = {};
					angular.forEach(innerInput, function(currentInput, value){
						var val = $(currentInput).val();
						currentObj[$(currentInput)[0].name] = val;
					});
					FirstFactory.empArray.push(currentObj);	
				})
			}

		}])

		.directive('employeeFormRow', function(FirstFactory){
			return {
				template: '<div class="emp-row"><input type="text" name="name" value="A"/><input type="text" name="age" value="B" /><button>Remove</button></div><br>',
				link: function(scope,element,attrs){
					element.find('button').bind('click', function(){
						if(FirstFactory.empCount > 0) {
							FirstFactory.empCount--;
							element.remove();
						} else {
							alert('Cannot remove last');
						}
					})
				}
				
			}
		})





}());
// var myApp  =  angular.module('KidsApp', []);
// myApp.directive('kid', function(){
// 	return {
// 		restrict: 'E',
// 		scope:{
// 			done: '&'
// 		},
// 		template: '<input type="text" ng-model="message" /> {{message}}<div class="button" ng-click="done({message:message})">Done !</div>'
// 	}
// });
// myApp.controller('FirstController', function($scope) {
// 	$scope.log = function(message) {
// 		alert(message + ' is done !');
// 	}
// })

