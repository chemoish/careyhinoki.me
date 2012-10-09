angular.module('CareyHinoki').
    directive('galleryPreview', function () {
        return {
            link: function (scope, element, attrs) {
                var element = $(element);

                function getDirection(d) {
                    var direction;

                    switch (d) {
                        case 0:
                            direction = 'top';
                            break;
                        case 1:
                            direction = 'right';
                            break;
                        case 2:
                            direction = 'bottom';
                            break;
                        case 3:
                            direction = 'left';
                            break;
                    }

                    return direction;
                }

                element.delegate('.gallery-item:not(.freeze)', 'mouseenter mouseleave', function (event) {
                    // http://tympanus.net/TipsTricks/DirectionAwareHoverEffect/index.html
                    // http://stackoverflow.com/questions/3627042
                    var element = $(this),
                        caption = element.find('.caption'),
                        event_type = event.type,
                        w = $(this).width(),
                        h = $(this).height(),
                        x = (event.pageX - this.offsetLeft - (w/2)) * ( w > h ? (h/w) : 1 ),
                        y = (event.pageY - this.offsetTop  - (h/2)) * ( h > w ? (w/h) : 1 ),
                        d = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4,
                        direction = getDirection(d);

                    if (event_type == 'mouseenter') {
                        if (caption.hasClass('over')) {
                            return false;
                        }

                        element.removeClass('detail');

                        caption.attr('class', [
                            'caption',
                            direction + '-enter',
                            'over'
                        ].join(' ')).hide();

                        caption.show(0, function () {
                            caption.addClass(direction + '-hover');
                        });
                    } else {
                        caption.attr('class', [
                            'caption',
                            direction + '-enter',
                            'out'
                        ].join(' '));

                        caption.removeClass(direction + '-hover');
                    }
                });
            }
        };
    });