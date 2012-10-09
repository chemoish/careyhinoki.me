angular.module('CareyHinoki')
    .filter('limit', function () {
        return function (input, limit) {
            if (typeof input == 'object' && input.length) {
                return input.slice(0, limit);
            }
        }
    });