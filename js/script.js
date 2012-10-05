/*! Carey Hinoki Portfolio - v0.1.0 - 2012-10-04
* http://www.careyhinoki.me/
* Copyright (c) 2012 Carey Hinoki; Licensed MIT */

// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.

'use strict';

angular.module('CareyHinoki', []);
angular.module('CareyHinoki').
	controller('CuriosityCtrl', ['$scope', function ($scope) {
		$scope.curiosities = [
			'I am 5th generation Chinese, 3rd generation Japanese.',
	        'Ran the LA Marathon at the age of 12.',
	        'At 16 I was drinking 72oz of 7-11 coffee by 3rd period.',
	        'My favorite beer is a Anaheim Hefeweizen from <a href="//www.anaheimbrew.com">Anaheim Brewery</a>.',
	        'I am no longer a Qwerty user. I use the Dvorak Simplified Keyboard!',
	        'Won the Future Insights Live 2012 Hackathon in Las Vegas.'
		];
	}]);
angular.module('CareyHinoki').
	controller('PlayCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('data/plays.json').success(function (data) {
			$scope.plays = data;
		});
	}]);
angular.module('CareyHinoki').
	controller('SocialMediaListCtrl', ['$scope', function ($scope) {
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
	}]);
angular.module('CareyHinoki').
	controller('TechnologyCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('data/technologies.json').success(function (data) {
			$scope.technologies = data;
		});
	}]);
angular.module('CareyHinoki').
	controller('WorkCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.limit = 6;

		$http.get('data/works.json').success(function (data) {
			$scope.works = data.sort(function () { return 0.5 - Math.random()});
		});

		$scope.showAll = function () {
			$scope.limit = $scope.works.length;
		};
	}]);
angular.module('CareyHinoki').
	directive('navigateToSection', function () {
		return {
			link: function (scope, element, attrs) {
				var element = $(element);

				element.delegate('a', 'click', function (event) {
			        var nav_element = $(this),
			            to_element = $(nav_element.attr('href')),
			            scroll_top = to_element.offset().top - 50; // minus menu

			        $('body').animate({
			            scrollTop: scroll_top
			        }, 800);

			        event.preventDefault();
			    });
			}
		};
	});
angular.module('CareyHinoki').
	directive('navigateToTop', function () {
		return {
			link: function (scope, element, attrs) {
				var element = $(element);

				element.on('click', function (event) {
					$('body').animate({
			            scrollTop: 0
			        }, 800);

			        event.preventDefault();
				});
			}
		}
	});
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
angular.module('CareyHinoki').
	directive('windowScroll', function () {
		return {
			link: function (scope, element, attrs) {
				function throttle(fn, delay) {
			        var timer;

			        return function () {
			            if (!timer) {
			                timer = setTimeout(function () {
			                    fn.apply(this, arguments);

			                    timer = null;
			                }, delay);
			            }
			        };
			    }

			    function onScroll(event) {
			        var window_element = $(window),
			            scroll_top = window_element.scrollTop() + 20,
			            scroll_bottom = window_element.scrollTop() + window_element.height() - 100,
			            utility_element = $('#utility');

			        utility_element.stop(true);
			        utility_element.animate({
			            opacity: scroll_top > 20 ? 1 : 0,
			            top: scroll_bottom + 'px'
			        }, 400);
			    }

				$(window).on('scroll', throttle(onScroll, 100));
			}
		};
	});
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
angular.module('CareyHinoki')
	.filter('join', function () {
		return function (input) {
			if (typeof input == 'object' && input.length) {
				return input.join(', ');
			}

			return;
		}
	});
angular.module('CareyHinoki')
	.filter('limit', function () {
		return function (input, limit) {
			if (typeof input == 'object' && input.length) {
				return input.slice(0, limit);
			}
		}
	});