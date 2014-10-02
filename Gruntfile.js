/**
 * Created by KP_TerminalUser2 on 23/09/2014.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        jshint:{
            files:['gruntfile.js', 'dto/**/*.js', 'models/**/*.js', 'read.services/**/*.js', 'write.services/**/*.js'],
            options: {
                jshintrc: true
            }
        },

        watch:{
            files:['<%= jshint.files %>'],
                tasks:['jshint']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);
};