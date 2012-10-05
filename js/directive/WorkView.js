angular.module('CareyHinoki').
	directive('workView', function () {
		return {
			link: function (scope, element, attrs) {
				var element = $(element);

				element.delegate('.work .view', 'click', function (event) {
					var view_link = $(this),
			            caption = view_link.closest('.caption');

			        caption.animate({
			            top: 305
			        }, 250, function () {
			            caption.css('top', -305);
			            caption.addClass('detail');

			            caption.animate({
			                top: 0
			            }, 250);
			        });

			        event.preventDefault();
				});
			}
		};
	});