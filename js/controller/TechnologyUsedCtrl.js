angular.module('CareyHinoki').
	controller('TechnologyUsedCtrl', ['$scope', function ($scope) {
		$scope.technologies = [{
		    name: 'HTML5 Boilerplate',
	        url: '//html5boilerplate.com/'
		}, {
		    name: 'Bootstrap',
	        url: '//twitter.github.com/bootstrap/'
		}, {
		    name: 'Font Awesome',
	        url: '//fortawesome.github.com/Font-Awesome/'
		}, {
		    name: 'handlebars',
	        url: '//handlebarsjs.com/'
		}, {
		    name: 'jQuery',
	        url: '//jquery.com/'
		}];
	}]);