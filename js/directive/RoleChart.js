angular.module('CareyHinoki').
    directive('roleChart', function () {
        return {
            link: function (scope, element, attrs) {
            	var ctx = element[0].getContext('2d'),
                	role_chart = new Chart(ctx).Doughnut([{
					value: 8,
					color:"#F7464A"
				}, {
					value : 3,
					color : "#4D5360"
				}], {
					segmentStrokeColor: '#0093b0',
					segmentStrokeWidth: 3
				});
            }
        };
    });