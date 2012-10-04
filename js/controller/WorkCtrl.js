angular.module('CareyHinoki').
	controller('WorkCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.limit = 6;

		$http.get('data/works.json').success(function (data) {
			$scope.works = data.sort(function () { return 0.5 - Math.random()});
		});

		$scope.showAll = function () {
			$scope.limit = $scope.works.length;
		};
	}]);