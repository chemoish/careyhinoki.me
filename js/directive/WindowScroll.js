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