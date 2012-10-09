angular.module('CareyHinoki').
    controller('PlayCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('data/plays.json').success(function (data) {
            $scope.plays = data;
        });
    }]);