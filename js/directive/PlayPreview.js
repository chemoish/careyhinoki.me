angular.module('CareyHinoki').
	directive('playPreview', function () {
		return {
			link: function (scope, element, attrs) {
				var element = $(element);

				element.delegate('.play', 'mouseenter', function (event) {
					var play = $(this),
			            play_mask = play.find('.mask'),
			            play_caption = play.find('.caption'),
			            plays = play.closest('.plays'),
			            plays_view_all = plays.hasClass('summary') || plays.hasClass('detail');;

			        if (plays_view_all === false) {
			            play_caption.removeClass('detail');
			            play_mask.css('top', 0);
			        }
				});

				element.delegate('.play', 'mouseleave', function (event) {
					var play = $(this),
			            play_mask = play.find('.mask'),
			            plays = play.closest('.plays'),
			            plays_view_all = plays.hasClass('summary') || plays.hasClass('detail');

			        if (plays_view_all === false) {
			            play_mask.css('top', -305);
			        }
				});
			}
		};
	});