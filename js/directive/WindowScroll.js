angular.module('CareyHinoki').
    directive('windowScroll', function () {
        return {
            link: function (scope, element, attrs) {
                function debounce(func, threshold) {
                    var timeout;
                
                    return function () {
                        var context = this,
                            args = arguments;
                        
                        if (timeout) {
                            clearTimeout(timeout);
                        }
                        
                        timeout = setTimeout(function() {
                            func.apply(context, args);
                            
                            timeout = null;
                        }, threshold || 250);
                    };
                }

                function onScroll(event) {
                    var window_element = $(window),
                        scroll_top = window_element.scrollTop() + 20,
                        scroll_bottom = window_element.scrollTop() + window_element.height() - 60,
                        top_element = $('#top');

                    if (scroll_top > 20) {
                        top_element.fadeIn(400);
                    } else {
                        top_element.fadeOut(400);
                    }
                }

                $(window).on('scroll', debounce(onScroll, 100));
            }
        };
    });