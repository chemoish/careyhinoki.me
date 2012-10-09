angular.module('CareyHinoki').
	directive('workView', function () {
		return {
			link: function (scope, element, attrs) {
				var element = $(element);

				element.delegate('.work .view', 'click', function (event) {
					var element = $(this),
						work = element.closest('.work'),
						caption = element.closest('.caption');

					var caption_content = caption.html();
					caption.html($('<div>').html(caption_content));

					caption.find('div').fadeOut(300, function () {
						work.addClass('detail');

						$(this).fadeIn(300, function () {
							caption.html($(this).html());
						});
					});

			        event.preventDefault();
				});
			}
		};
	});