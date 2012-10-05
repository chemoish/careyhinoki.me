angular.module('CareyHinoki').
	directive('technologyUsedTooltip', function () {
		return {
			link: function (scope, element, attrs) {
				var element = $(element);

				element.tooltip();
			}
		};
	});