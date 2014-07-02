/**
 * Created with JetBrains WebStorm.
 * User: Mohamed Ahamada
 * Date: 28/06/14
 * Time: 19:34
 * To change this template use File | Settings | File Templates.
 */

module.exports = function(grunt) {

    grunt.initConfig({

        concat: {
            options: {
                separator: ';' // permet d'ajouter un point-virgule entre chaque fichier concaténé.
            },
            dist: {
                src: ['emberjs/js/app.js', 'emberjs/js/myapp.js'], // la source
                dest: 'emberjs/js/built.js' // la destination finale
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat:dist']);
}