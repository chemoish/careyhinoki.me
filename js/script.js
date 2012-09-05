/* Author: Carey Hinoki

*/

(function () {
    $.ajax({
        url: 'data/projects.json',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            Handlebars.registerHelper('gallery', function (projects, options) {
                var num_projects = projects.length;
                var output = '';

                while (projects.length) {
                    var project_group = projects.splice(0, 6),
                        html = options.fn({
                            projects: project_group
                        });

                    output += '<li class="slide">' + html + '</li>';
                }

                return output;
            });

            var source = [
                '{{#gallery projects}}',
                    '<ul class="gallery clearfix">',
                        '{{#projects}}',
                            '<li>',
                                '<figure>',
                                    '<div class="frame">',
                                        '<img src="{{img}}">',
                                    '</div>',

                                    '<figcaption class="caption">',
                                        '<h3>{{name}} {{index}}</h3>',
                                        '<p>{{description}}</p>',
                                        '<a href="#"><i class="icon-eye-open"></i></a>',
                                        
                                        '{{#website}}',
                                            '<a href="{{website}}"><i class="icon-link"></i></a>',
                                        '{{/website}}',
                                    '</figcaption>',
                                '</figure>',
                            '</li>',
                        '{{/projects}}',
                    '</ul>',
                '{{/gallery}}'
            ].join('');

            var template = Handlebars.compile(source);
            var html = template(data);

            $('#featured_work .slides').html(html);

            $('.gallery li:nth-child(3n) figure').addClass('last');
        }
    });

    $.ajax({
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
    });

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