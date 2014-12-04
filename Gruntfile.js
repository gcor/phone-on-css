module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'build/index.html': 'index.html',
					'build/page.html': 'page.html'
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'build/stylesheets/style.css': 'sass/style.scss'
				}
			}
		},
		csso: {
			dynamic_mappings: {
				expand: true,
				cwd: 'build/stylesheets/',
				src: ['*.css', '!*.min.css'],
				dest: 'build/stylesheets/',
				ext: '.css'
			}
		},
		watch: {
			css: {
				files: ['sass/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['htmlmin', 'sass', 'csso', 'watch']);
};