angular.module('CareyHinoki').
    directive('windowResize', function () {
        return {
            link: function (scope, element, attrs) {
                function debounce(func, threshold) {
                    var timeout;
                    
                    return function () {
                        var obj = this,
                            args = arguments;

                        $('#utility').hide();

                        if (timeout) {
                            clearTimeout(timeout);
                        }
                        
                        timeout = setTimeout(function() {
                            func.apply(obj, args);
                            
                            timeout = null;
                        }, threshold || 250);
                    };
                }

                function onResize(event) {
                    $('#utility').fadeIn(400);
                }

                $(window).on('resize', debounce(onResize, 800));
            }
        };
    });