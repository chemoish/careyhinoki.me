angular.module('CareyHinoki').
	directive('navigateToSection', function () {
		return {
			link: function (scope, element, attrs) {
				var element = $(element);

				element.delegate('a', 'click', function (event) {
			        var nav_element = $(this),
			            to_element = $(nav_element.attr('href')),
			            scroll_top = to_element.offset().top - 50; // minus menu

			        $('body').animate({
			            scrollTop: scroll_top
			        }, 800);

			        event.preventDefault();
			    });
			}
		};
	});