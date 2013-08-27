angular.module('CareyHinoki').
    directive('skillChart', function () {
        return {
            link: function (scope, element, attrs) {
            	var ctx = element[0].getContext('2d'),
                	skill_chart = new Chart(ctx).Doughnut([{
					value: 9,
					color:"#F7464A"
				}, {
					value : 9,
					color : "#E2EAE9"
				}, {
					value : 6,
					color : "#D4CCC5"
				}, {
					value : 4,
					color : "#949FB1"
				}, {
					value : 7.5,
					color : "#4D5360"
				}, {
					value : 10,
					color : "#a55"
				}], {
					percentageInnerCutout: 65,
					segmentStrokeColor: '#0093b0',
					segmentStrokeWidth: 3
				});
            }
        };
    });