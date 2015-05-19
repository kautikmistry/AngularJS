var todo = angular.module('todo', ['ngStorage']);


// todo.factory('todofactory', function ($http, $q) {
	

// 	return {
// 		gettodo: function(){
// 			return $http.get('todo.json')
// 			.then( function(response) {
// 				return response.data;
// 			} else{
// 				return $q.reject(response.data);
// 			}
// 		}
// 			)
// 		}
// 	};
// });



todo.controller('todocontroller', function($scope, $localStorage, $http) {
	//$scope.saved = localStorage.getItem('todos');

	// var httpPost = function() {
 //            $http.post('save.txt', angular.toJson($scope.todos)).error(function(status){console.log(status)});
 //    };

	$scope.todos = [{
		title : 'Bulid a todo app',
		done : false
	}];
	localStorage.setItem('todos', angular.toJson($scope.todos));
	//httpPost();
	
	$scope.addtodo = function(){
		$scope.todos.push({
			title : $scope.newtodo,
			done : false	
		})
		localStorage.setItem('todos', angular.toJson($scope.todos));
		//httpPost();
	};

	 $scope.clearcompleted = function(){
	 	$scope.todos = $scope.todos.filter(function(item){
	 		return !item.done;
	 	})
	 };
});

