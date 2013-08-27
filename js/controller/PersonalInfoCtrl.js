angular.module('CareyHinoki').
    controller('PersonalInfoCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('data/personal-infos.json').success(function (data) {
            $scope.personal_infos = data;
        });
    }]);