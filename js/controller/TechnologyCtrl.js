angular.module('CareyHinoki').
    controller('TechnologyCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('data/technologies.json').success(function (data) {
            $scope.technologies = data;
        });
    }]);