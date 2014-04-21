// Watches files for changes and runs tasks based on the changed files
module.exports = function(grunt) {
  'use strict';
  return {
    js: {
      files: ['<%= config.app %>/src/**/**.js'],
      tasks: ['lint'],
      options: {
        livereload: grunt.option('livereload') || true
      }
    },
    gruntfile: {
      files: ['Gruntfile.js']
    },
    css: {
      files: ['<%= config.app %>/styles/{,*/}*.css'],
      options: {
        livereload: grunt.option('livereload') || true
      }
    },
    html: {
      files: ['<%= config.app %>/{,*/}*.html'],
      tasks: ['processhtml'],
      options: {
        livereload: grunt.option('livereload') || true
      }
    },
    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files: [
        '<%= config.app %>/content/**/**'
      ]
    }
  };
};
