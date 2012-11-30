angular.module('CareyHinoki').
    directive('navigateToTop', function () {
        return {
            link: function (scope, element, attrs) {
                var element = $(element);

                element.on('click', function (event) {
                    $('html, body').animate({
                        scrollTop: 0
                    }, 800);

                    return false;
                });
            }
        }
    });