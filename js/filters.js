angular.module('Portfolio', [])
	.filter('join', function () {
		return function (input) {
			if (typeof input == 'object' && input.length) {
				return input.join(', ');
			}

			return;
		}
	})
	.filter('limit', function () {
		return function (input, limit) {
			if (typeof input == 'object' && input.length) {
				return input.slice(0, limit);
			}
		}
	});