// MAIN CONTROLLER
function mainController($scope, $http, todoService) {
	$scope.number = 0;
	$scope.good = [];
	$scope.white = "";
	
	function load(){
		todoService.get().then(function(res){
			$scope.todos = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		todoService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(todo){
		todoService.update(todo._id, todo).then(function(res){
			load();
		});
	}
	$scope.delete = function(todo){
		todoService.delete(todo._id).then(function(res){
			load();
		});
	}

	$scope.whiteSpace = function(word) {
		for (var i=0; i<word.length-2; i++) {
			$scope.white += "_ ";
		}
		$scope.good.push(word[0]);
		$scope.good.push(word[word.length-1]);
	}

	$scope.check = function(letter) {
		console.log($scope.word.indexOf(letter));
		console.log($scope.word);
		if ($scope.word.indexOf('z') != -1) {
			
		}
	}

	load();
}
