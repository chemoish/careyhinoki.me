angular.module('CareyHinoki').
    directive('clouds', function () {
        return {
            link: function (scope, element, attrs) {
                var clouds = $('.clouds'),
                    duration = 1000 * 60 * 60;

                clouds.animate({
                    'background-position-x': '50000px'
                }, duration, 'linear');
            }
        };
    });