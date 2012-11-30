angular.module('CareyHinoki').
    directive('clouds', function () {
        return {
            link: function (scope, element, attrs) {
                var clouds = $('.clouds');

                clouds.animate({
                    'background-position-x': '10000px'
                }, 300000, 'linear');
            }
        };
    });