angular.module('CareyHinoki').
    directive('navigateToSection', function () {
        return {
            link: function (scope, element, attrs) {
                var element = $(element);

                element.delegate('a', 'click', function (event) {
                    var nav_element = $(this),
                        to_element = $(nav_element.attr('href')),
                        scroll_top = to_element.offset().top; // minus menu

                    $('body').animate({
                        // vcard indicates screen size max-width: 767px
                        scrollTop: scroll_top + ($('#vcard').is(':visible') ? 0 : -50)
                    }, 800);

                    event.preventDefault();
                });
            }
        };
    });