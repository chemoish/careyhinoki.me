'use strict';

function SocialMediaCtrl($scope) {
	$scope.social_medias = [{
		icon: 'icon-twitter',
		name: 'twitter',
		url: '//www.twitter.com/chemoish'
	}, {
		icon: 'icon-facebook',
		name: 'facebook',
		url: '//www.facebook.com/carey.hinoki'
	}, {
		icon: 'icon-linkedin',
		name: 'linkedin',
		url: '//www.linkedin.com/pub/carey-hinoki/8/396/345'
	}];
}

function UtilityCtrl($scope) {
	$scope.utilities = [{
		icon: 'icon-adjust',
		id: 'toggle_project_view',
		url: '#'
	}, {
		icon: 'icon-arrow-up',
		id: 'to_top_button',
		url: '#introduction'
	}];
}

function ProjectsCtrl($scope, $http) {
	$scope.limit = 6;

	$http.get('data/projects.json').success(function (data) {
		$scope.projects = data.sort(function () { return 0.5 - Math.random()});
	});

	$scope.showAll = function () {
		$scope.limit = $scope.projects.length;
	};
}

function TechnologyCtrl($scope, $http) {
	$http.get('data/technologies.json').success(function (data) {
		$scope.technologies = data;
	});
}

function CuriosityCtrl($scope) {
	$scope.curiosities = [
		'I am 5th generation Chinese, 3rd generation Japanese.',
        'Ran the LA Marathon at the age of 12.',
        'At 16 I was drinking 72oz of 7-11 coffee by 3rd period.',
        'My favorite beer is a Anaheim Hefeweizen from <a href="//www.anaheimbrew.com">Anaheim Brewery</a>.',
        'I am no longer a Qwerty user. I use the Dvorak Simplified Keyboard!',
        'Won the Future Insights Live 2012 Hackathon in Las Vegas.'
	];
}

function SocialMediaListCtrl($scope) {
	$scope.social_medias = [{
		name: 'Twitter',
		url: '//www.twitter.com/chemoish'
	}, {
		name: 'Facebook',
        url: '//www.facebook.com/carey.hinoki'
	}, {
        name: 'Google',
        url: '//plus.google.com/118175933175383798803'
	}, {
        name: 'LinkedIn',
        url: '//www.linkedin.com/pub/carey-hinoki/8/396/345'
	}, {
        name: 'GitHub',
        url: '//www.github.com/chemoish'
	}, {
        name: 'Treehouse',
        url: '//www.teamtreehouse.com/chemoish'
	}, {
        name: 'Stackoverflow',
        url: '//www.stackoverflow.com/users/1438446/chemoish'
	}, {
        name: 'Code Academy',
        url: '//www.codecademy.com/users/chemoish'
	}, {
        name: 'Yelp',
        url: '//hinoki.yelp.com'
	}];
}

function TechnologyUsedCtrl($scope) {
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
}

function PlayCtrl($scope, $http) {
	$http.get('data/plays.json').success(function (data) {
		$scope.plays = data;
	});
}