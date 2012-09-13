/* Author: Carey Hinoki

*/

(function () {
    $.ajax({
        url: 'data/projects.json',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            var source = [
                '<ul class="projects clearfix">',
                    '{{#projects}}',
                        '<li>',
                            '<figure class="project">',
                                '<div class="frame">',
                                    '<a href="#" alt="{{name}}" title="{{name}}">',
                                        '<img src="{{img}}">',
                                    '</a>',
                                '</div>',

                                '<figcaption class="caption">',
                                    '<h3>{{name}}</h3>',
                                    '<p title="{{alt}}">{{description}}</p>',
                                    
                                    '{{#if website}}',
                                        '<a href="{{website}}" class="website" target="_blank">Visit Website</a>',
                                    '{{/if}}',
                                '</figcaption>',
                            '</figure>',
                        '</li>',
                    '{{/projects}}',
                '</ul>',
            ].join('');

            data.projects = data.projects.splice(0, 6);

            var template = Handlebars.compile(source);
            var html = template(data);

            $('#work .stage').html(html);

            resizeProjects()
        }
    });

    function resizeProjects(event) {
        var projects_element = $('.projects');

        projects_element.find('li').removeClass('last');

        if (projects_element.width() > 724) {
            projects_element.find('li:nth-child(3n)').addClass('last');
        } else {
            projects_element.find('li:nth-child(2n)').addClass('last');
        }
    }

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

    $(window).on('resize', throttle(resizeProjects, 100));
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