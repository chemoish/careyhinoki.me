/* Author: Carey Hinoki

*/

(function () {
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

    $(window).on('scroll', throttle(function (event) {
        var window_element = $(window),
            scroll_top = window_element.scrollTop() + 20,
            scroll_bottom = window_element.scrollTop() + window_element.height() - 100,
            social_media_element = $('#social_media'),
            utility_element = $('#utility');

        social_media_element.stop(true);
        social_media_element.animate({
            top: scroll_top + 'px'
        }, 400);

        utility_element.stop(true);
        utility_element.animate({
            opacity: scroll_top > 20 ? 1 : 0,
            top: scroll_bottom + 'px'
        }, 400);
    }, 100));

    $('#utility').delegate('#toggle_project_view', 'click', function (event) {
        var projects = $('.projects'),
            projects_summary_view = projects.hasClass('summary'),
            projects_detail_view = projects.hasClass('detail');

        if (!projects_summary_view && !projects_detail_view) {
            projects.addClass('summary');
        } else if (projects_summary_view) {
            projects.toggleClass('summary detail');
        } else if (projects_detail_view) {
            projects.removeClass('detail');
        }

        projects.find('.project .detail').removeClass('detail');

        event.preventDefault();
    });

    $('#utility').delegate('#to_top_button', 'click', function (event) {
        $('body').animate({
            scrollTop: 0
        }, 800);

        event.preventDefault();
    });

    $('.nav a').on('click', function (event) {
        var nav_element = $(this),
            to_element = $(nav_element.attr('href')),
            scroll_top = to_element.offset().top - 50; // minus menu

        $('body').animate({
            scrollTop: scroll_top
        }, 800);

        event.preventDefault();
    });

    $('#work').delegate('.project', 'mouseenter', function (event) {
        var project = $(this),
            project_mask = project.find('.mask'),
            project_caption = project.find('.caption'),
            projects = project.closest('.projects'),
            projects_view_all = projects.hasClass('summary') || projects.hasClass('detail');;

        if (projects_view_all === false) {
            project_caption.removeClass('detail');
            project_mask.css('top', 0);
        }
    });

    $('#work').delegate('.project', 'mouseleave', function (event) {
        var project = $(this),
            project_mask = project.find('.mask'),
            projects = project.closest('.projects'),
            projects_view_all = projects.hasClass('summary') || projects.hasClass('detail');

        if (projects_view_all === false) {
            project_mask.css('top', -305);
        }
    });

    $('#work').delegate('.project .view', 'click', function (event) {
        var view_link = $(this),
            caption = view_link.closest('.caption');

        caption.animate({
            left: 460
        }, 250, function () {
            caption.css('left', -460);
            caption.addClass('detail');

            caption.animate({
                left: 0
            }, 250);
        });

        event.preventDefault();
    });
}());