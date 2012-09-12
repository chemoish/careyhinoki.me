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

            var template = Handlebars.compile(source);
            var html = template(data);

            $('#featured_work .stage').html(html);

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

    $(window).resize(throttle(resizeProjects, 100));

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