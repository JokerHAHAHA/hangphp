// MAIN CONTROLLER
function mainController($scope, mainService) {
	$scope.number = 0;
	$scope.good = [];
	$scope.bad = [];
	$scope.wordPb = 0;
	mainService.create('');

	$scope.add = function(data){
		debugger;
		if (!(/[^a-zA-Z]{3,}/.test(data))){
			debugger;
			mainService.create(data);
		}
		else {
			$scope.wordPb = 1;
			$scope.word = '';
			return;
		}

		$scope.numberPhp = 0;
		// $scope.word = $scope.word.toUpperCase();
		$scope.word = $scope.word.split('');
		$scope.good.push($scope.word[0]);

		for (var i=0; i<$scope.word.length-2; i++) {
			$scope.good.push("_ ");
		}

		$scope.good.push($scope.word[$scope.word.length-1]);

		$scope.word.splice(0, 1, 'checked');
		$scope.word.splice($scope.word.length-1, 1, 'checked');

		$scope.number = 1;
		debugger;
	}

	$scope.countBad = 0;
	$scope.countGood = 0;
	$scope.check = function(letter) {
		var indexLetter = $scope.word.indexOf(letter);
		if (indexLetter != -1) {
			$scope.good.splice(indexLetter, 1, letter);
			$scope.word.splice(indexLetter, 1, 'checked');

			if ($scope.word.indexOf(letter) != -1) $scope.check(letter);
			$scope.countGood++;
			if ($scope.countGood+2 == mainService.get().length){
				$scope.numberInit = 2;
			}
		}
		else {
			$scope.numberPhp++;
			$scope.bad.push(letter);
			$scope.countBad++;
			if ($scope.countBad == 8) {
				$scope.good = mainService.get();
				$scope.numberInit = 1;
			}
		}
	}
}
