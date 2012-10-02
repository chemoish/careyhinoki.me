/*! Carey Hinoki Portfolio - v0.1.0 - 2012-10-01
* http://www.careyhinoki.me/
* Copyright (c) 2012 Carey Hinoki; Licensed MIT */

// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.

'use strict';

angular.module('CareyHinoki', []);
angular.module('CareyHinoki').
	controller('CuriosityCtrl', ['$scope', function ($scope) {
		$scope.curiosities = [
			'I am 5th generation Chinese, 3rd generation Japanese.',
	        'Ran the LA Marathon at the age of 12.',
	        'At 16 I was drinking 72oz of 7-11 coffee by 3rd period.',
	        'My favorite beer is a Anaheim Hefeweizen from <a href="//www.anaheimbrew.com">Anaheim Brewery</a>.',
	        'I am no longer a Qwerty user. I use the Dvorak Simplified Keyboard!',
	        'Won the Future Insights Live 2012 Hackathon in Las Vegas.'
		];
	}]);
angular.module('CareyHinoki').
	controller('PlayCtrl', ['$scope', function ($scope, $http) {
		$http.get('data/plays.json').success(function (data) {
			$scope.plays = data;
		});
	}]);
angular.module('CareyHinoki').
	controller('TechnologyCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('data/technologies.json').success(function (data) {
			$scope.technologies = data;
		});
	}]);
angular.module('CareyHinoki').
	controller('WorkCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.limit = 6;

		$http.get('data/projects.json').success(function (data) {
			$scope.projects = data.sort(function () { return 0.5 - Math.random()});
		});

		$scope.showAll = function () {
			$scope.limit = $scope.projects.length;
		};
	}]);
angular.module('CareyHinoki')
	.filter('join', function () {
		return function (input) {
			if (typeof input == 'object' && input.length) {
				return input.join(', ');
			}

			return;
		}
	});
angular.module('CareyHinoki')
	.filter('limit', function () {
		return function (input, limit) {
			if (typeof input == 'object' && input.length) {
				return input.slice(0, limit);
			}
		}
	});