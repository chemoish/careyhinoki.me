angular.module('CareyHinoki').
    controller('CuriosityCtrl', ['$scope', function ($scope) {
        $scope.curiosities = [
            'I am 5th generation Chinese, 3rd generation Japanese.',
            'Ran the LA Marathon at the age of 12.',
            'At 16 I was drinking 72oz of coffee by 3rd period.',
            'My favorite beer is a Anaheim Hefeweizen from <a href="//www.anaheimbrew.com">Anaheim Brewery</a>.',
            'I use the Dvorak Simplified Keyboard!',
            'Won the Future Insights Live 2012 Hackathon in Las Vegas.'
        ];
    }]);