module.exports = function (grunt) {
  "use strict";

  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-casperjs');

  grunt.initConfig({
    watch: {
      files: '<config:jslint.files>',
      tasks: 'jslint casperjs'
    },
    casperjs: {
      files: ['test/**/*.js']
    },
    jslint: {
      files: [
        'grunt.js',
        'src/**/*.js',
        'test/**/*.js'
      ],
      directives: {
        nomen: true,
        regexp: true,
        plusplus: true,
        node: true,
        todo: true,
        indent: 2
      }
    }
  });

  // default task
  grunt.registerTask('default', 'jslint casperjs');
};
