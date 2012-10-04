angular.module('CareyHinoki').
	directive('workPreview', function () {
		return {
			link: function (scope, element, attrs) {
				var element = $(element);

				element.delegate('.work', 'mouseenter', function (event) {
					var work = $(this),
			            work_mask = work.find('.mask'),
			            work_caption = work.find('.caption'),
			            works = work.closest('.works'),
			            works_view_all = works.hasClass('summary') || works.hasClass('detail');;

			        if (works_view_all === false) {
			            work_caption.removeClass('detail');
			            work_mask.css('top', 0);
			        }
				});

				element.delegate('.work', 'mouseleave', function (event) {
					var work = $(this),
			            work_mask = work.find('.mask'),
			            works = work.closest('.works'),
			            works_view_all = works.hasClass('summary') || works.hasClass('detail');

			        if (works_view_all === false) {
			            work_mask.css('top', -305);
			        }
				});
			}
		};
	});