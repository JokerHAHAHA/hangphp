// MAIN CONTROLLER
function mainController($scope, $http, todoService) {
	$scope.number = 0;
	$scope.good = [];
	$scope.bad = [];
	
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

	$scope.whiteSpace = function() {

		$scope.word = $scope.word.toUpperCase();
		$scope.word = $scope.word.split('');

		$scope.good.push($scope.word[0]);
		
		for (var i=0; i<$scope.word.length-2; i++) {
			$scope.good.push("_ ");
		}
		
		$scope.good.push($scope.word[$scope.word.length-1]);
	}

	$scope.check = function(letter) {
		var indexLetter = $scope.word.indexOf(letter);
		if (indexLetter != -1) {
			$scope.good.splice(indexLetter, 1, letter);

			$scope.word.splice(indexLetter, 1, 'checked');
console.log($scope.word);
			// if (indexLetter != -1) $scope.check(letter);
		}
		else
			$scope.bad.push(letter);
	}

	load();
}
