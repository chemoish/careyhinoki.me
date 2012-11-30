angular.module('CareyHinoki').
    directive('navigateToSection', function () {
        return {
            link: function (scope, element, attrs) {
                var element = $(element);

                element.delegate('a', 'click', function (event) {
                    var nav_element = $(this),
                        nav_href = nav_element.attr('href'),
                        hash_index = nav_href.lastIndexOf('#');

                    if (hash_index == -1) {
                        return false;
                    }

                    var hash = nav_href.substring(hash_index, nav_href.length),
                        to_element = $(hash),
                        scroll_top = to_element.offset().top; // minus menu

                    $('html, body').animate({
                        // vcard indicates screen size max-width: 767px
                        scrollTop: scroll_top + ($('#vcard').is(':visible') ? 0 : -50)
                    }, 800);

                    event.preventDefault();
                });
            }
        };
    });