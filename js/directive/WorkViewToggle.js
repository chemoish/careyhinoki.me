angular.module('CareyHinoki').
	directive('workViewToggle', function () {
		return {
			link: function (scope, element, attrs) {
				var element = $(element);

				element.on('click', function (event) {
					var works = $('.works'),
			            works_summary_view = works.hasClass('summary'),
			            works_detail_view = works.hasClass('detail');

			        if (!works_summary_view && !works_detail_view) {
			            works.addClass('summary');
			        } else if (works_summary_view) {
			            works.toggleClass('summary detail');
			        } else if (works_detail_view) {
			            works.removeClass('detail');
			        }

			        works.find('.work .detail').removeClass('detail');

		        	event.preventDefault();
				})
			}
		};
	});