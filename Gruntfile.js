module.exports = function(grunt){
  // load all tasks 
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);

  // Project Configureation
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"), 
    
    coffee: {
      compile: {
        files: {
          'build/src/preloadit.js': 'src/preloadit.js.coffee',
          'build/test/preloadit_spec.js': 'test/preloadit_spec.js.coffee'
        }
      }
    },
    jasmine: {
      pivotal: {
        src: ['build/src/**/*.js'],
        options: {
          vendor: "node_modules/jquery/dist/jquery.min.js",
          specs: 'build/test/*_spec.js',
          outfile: '_SpecRunner.html'
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    }
  });


  // register test
  grunt.registerTask('test', ['coffee', 'jasmine']);
  grunt.registerTask('test-build', ['coffee', 'jasmine:pivotal:build']);

};
