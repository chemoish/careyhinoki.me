angular.module('CareyHinoki')
	.filter('join', function () {
		return function (input) {
			if (typeof input == 'object' && input.length) {
				return input.join(', ');
			}

			return;
		}
	});