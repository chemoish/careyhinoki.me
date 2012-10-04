angular.module('CareyHinoki').
	directive('workView', function () {
		return {
			link: function (scope, element, attrs) {
				var element = $(element);

				element.delegate('.work .view', 'click', function (event) {
					var view_link = $(this),
			            caption = view_link.closest('.caption');

			        caption.animate({
			            left: 460
			        }, 250, function () {
			            caption.css('left', -460);
			            caption.addClass('detail');

			            caption.animate({
			                left: 0
			            }, 250);
			        });

			        event.preventDefault();
				});
			}
		};
	});