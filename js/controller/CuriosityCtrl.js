angular.module('CareyHinoki').
    controller('CuriosityCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('data/curiosities.json').success(function (data) {
            $scope.curiosities = data;
        });
    }]);