/* Author: Carey Hinoki

*/

(function () {
    $.ajax({
        url: 'data/projects.json',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            var source = [
                '{{#projects}}',
                    '<li>',
                        '<figure class="project">',
                            '<div class="frame">',
                                '<a href="#" alt="{{name}}" title="{{name}}">',
                                    '<img src="{{img}}">',
                                '</a>',
                            '</div>',

                            '<div class="mask">',
                                '<figcaption class="caption">',
                                    '<h3>{{name}}</h3>',
                                    '<h4>{{tagify tags}}</h4>',
                                    '<p title="{{alt}}">{{description}}</p>',
                                    
                                    '<a href="#" class="view"><i class="icon-search"></i></a>',

                                    '{{#if website}}',
                                        '<a href="{{website}}" class="website" target="_blank">',
                                            '<i class="icon-link"></i> <span>Visit Website</span>',
                                        '</a>',
                                    '{{/if}}',
                                '</figcaption>',
                            '</div>',
                        '</figure>',
                    '</li>',
                '{{/projects}}',
            ].join('');

            Handlebars.registerHelper('tagify', function (context, options) {
                return this.tags.join(', ');
            });

            //data.projects = data.projects.splice(0, 6);

            var template = Handlebars.compile(source);
            var html = template(data);

            $('#work .projects').html(html);

            var projects_element = $('.projects');

            projects_element.find('li:nth-child(3n)').addClass('last');
        }
    });

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
            scroll_bottom = window_element.scrollTop() + window_element.height() - 50,
            social_media_element = $('#social_media'),
            to_top_button_element = $('#to_top_button');

        social_media_element.stop(true);
        social_media_element.animate({
            top: scroll_top + 'px'
        }, 400);

        to_top_button_element.stop(true);
        to_top_button_element.animate({
            opacity: scroll_top > 20 ? 1 : 0,
            top: scroll_bottom + 'px'
        }, 400);
    }, 100));

    $('#to_top_button').on('click', function (event) {
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

    $('.projects').delegate('.project', 'mouseenter', function (event) {
        var project = $(this),
            mask = project.find('.mask'),
            caption = project.find('.caption');

        caption.removeClass('detail');

        mask.css('top', 0);
    });

    $('.projects').delegate('.project', 'mouseleave', function (event) {
        var project = $(this),
            projects = project.closest('.projects'),
            mask = project.find('.mask'),
            view_all_mode = projects.hasClass('summary') || projects.hasClass('detail');

        if (view_all_mode === false) {
            mask.css('top', -305);
        }
    });

    $('.projects').delegate('.project .view', 'click', function (event) {
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

    /*$.ajax({
    	url: 'data/projects.json',
    	dataType: 'json',
    	success: function (data, textStatus, jqXHR) {
            var template = [
                '<div class="work clearfix">',
                    '<div class="frame">',
                        '<img src="{{project.img}}">',

                        '<a href="#"><i class="icon-chevron-left"></i></a>',
                        '<a href="#"><i class="icon-chevron-right"></i></a>',
                    '</div>',
                    '<div class="content">',
                        '<h3>{{name}}</h3>',
                        '<a href="{{website}}"><i class="icon-link"></i></a>',
                        '<a href="#"><i class="icon-minus-sign"></i></a>',

                        '<section>',
                            '<h1>{{project.title}}</h1>',
                            '<p>{{project.description}}</p>',
                        '</section>',
                    '</div>',
                '</div>'
            ].join('');

            var project = data.projects[2];

    		var json = {
    			name: project.name,
    			website: project.website,
    			project: project.projects.length ? project.projects[0] : {}
    		};

    		var template = Handlebars.compile(template);
            var html = template(json);

    		$('#work').html(html);
    	},
    	error: function (jqXHR, textStatus, errorThrown) {
    		console.log(errorThrown);
    	}
    });*/

    $.ajax({
        url: 'data/skills.json',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            var template = [
                '{{#skills}}',
                    '<li>',
                        '<div class="progress progress-striped">',
                            '<div class="{{id}} {{focus}} bar" style="width: {{level}};">{{name}}</div>',
                        '</div>',
                    '</li>',
                '{{/skills}}',
            ].join('');

            var template = Handlebars.compile(template);
            var html = template(data);

            $('#skills .skills').html(html);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}());