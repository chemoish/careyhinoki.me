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

    },
    
    qunit: {

    },
    
    concat: {
        'js/app.js': [
            '<banner:meta.banner>',
            'js/plugins.js'
        ],
    },
    
    min: {
        'js/app.min.js': [
            '<banner:meta.banner>',
            'js/plugins.js'
        ]
    },
    
    recess: {
        debug: {
            src: [
                'css/vendor/bootstrap.css',
                'css/vendor/bootstrap-responsive.css',
                'css/vendor/font-awesome.css',
                'css/vendor/google-font-open-sans.css',
                'less/style.less'
            ],
            dest: 'css/app.css',
            options: {
                compile: true
            }
        },
        dist: {
            src: [
                'css/vendor/bootstrap.css',
                'css/vendor/bootstrap-responsive.css',
                'css/vendor/font-awesome.css',
                'css/vendor/google-font-open-sans.css',
                'less/style.less'
            ],
            dest: 'css/app.min.css',
            options: {
                compile: true,
                compress: true
            }
        }
    },

    watch: {
        files: [
            'js/controller/*.js',
            'js/directive/*.js',
            'js/filter/*.js',
            'js/plugins.js',
            'less/**/*.less'
        ],
        tasks: 'concat min recess:debug recess:dist'
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
};
