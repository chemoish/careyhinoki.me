angular.module('CareyHinoki').
    directive('galleryView', function () {
        return {
            link: function (scope, element, attrs) {
                var element = $(element);

                element.delegate('.gallery-item .view', 'click', function (event) {
                    var element = $(this),
                        gallery_item = element.closest('.gallery-item'),
                        caption = element.closest('.caption');

                    var caption_content = caption.html();
                    caption.html($('<div>').html(caption_content));

                    caption.find('div').fadeOut(300, function () {
                        gallery_item.addClass('detail');

                        $(this).fadeIn(300, function () {
                            caption.html($(this).html());
                        });
                    });

                    event.preventDefault();
                });
            }
        };
    });