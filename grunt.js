/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
        version: '0.1.0',
        banner: '/*! Carey Hinoki Portfolio - v<%= meta.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* http://www.careyhinoki.me/\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
            'Carey Hinoki; Licensed MIT */'
    },
    
    lint: {
        files: [
            'js/vendor/bootstrap.js',
            'js/plugins.js',
            'js/app.js',
            'js/controller/*.js',
            'js/directive/*.js',
            'js/filter/*.js'
        ]
    },
    
    qunit: {

    },
    
    concat: {
        dist: {
            src: [
                '<banner:meta.banner>',
                '<config:lint.files>'
            ],
            dest: 'js/script.js'
        }
    },
    
    min: {
        dist: {
            src: ['<config:concat.dist.dest>'],
            dest: 'js/script.min.js'
        }
    },

    recess: {
        debug: {
            src: [
                'css/vendor/bootstrap.css',
                'css/vendor/bootstrap-responsive.css',
                'css/vendor/font-awesome.css',
                'css/vendor/google-font-julee.css',
                'css/vendor/google-font-open-sans.css',
                'less/style.less'
            ],
            dest: 'css/style.css',
            options: {
                compile: true
            }
        },
        dist: {
            src: [
                '<config:recess.debug.dest>'
            ],
            dest: 'css/style.min.css',
            options: {
                compress: true
            }
        }
    },

    watch: {
        all: {
            files: [
                '<config:lint.files>',
                '<config:watch.less.files>'
            ],
            tasks: 'concat min recess:debug recess:dist'
        },

        js: {
            files: [
                '<config:lint.files>'
            ],
            tasks: 'concat min'
        },

        less: {
            files: [
                'less/**/*.less'
            ],
            tasks: 'recess:debug recess:dist'
        }
    },

    jshint: {
        options: {
            curly: true,
            eqeqeq: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            sub: true,
            undef: true,
            boss: true,
            eqnull: true,
            browser: true
        },
        globals: {
            jQuery: true
        }
    },

    uglify: {}
  });

  grunt.loadNpmTasks('grunt-recess');

  // Default task.
  grunt.registerTask('default', 'concat min recess:debug recess:dist');

  grunt.registerTask('watch-all', 'watch:all');

  grunt.registerTask('watch-js', 'watch:js');

  grunt.registerTask('watch-less', 'watch:less');
};
