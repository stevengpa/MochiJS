module.exports = function(grunt)
{
	var dev = '/statics/';
	var dist = '/dist/';
	
	grunt.initConfig({

		concat: {
			options: {
				separator: ";",
				banner: "/* >> Steven Pérez Alfaro << */\n"
			},
			target: {
				src: [
					"statics/jquery/jquery-1.11.1.min.js",
					"statics/moment/moment-2.8.4.min.js",
					"statics/modulejs/modulejs-1.5.0.min.js",
					"statics/linqjs/jquery.linq.min.js",
					"statics/linqjs/linq.min.js",
					"statics/array-prototype.js",
					"statics/date-prototype.js",
					"statics/format-prototype.js",
					"statics/is-prototype.js",
					"statics/time-prototype.js",
					"statics/functions.js"
				],
				dest: "dist/mochijs.js"
				
			},

			target2: {
				src: [
					"statics/array-prototype.js",
					"statics/date-prototype.js",
					"statics/format-prototype.js",
					"statics/is-prototype.js",
					"statics/time-prototype.js",
					"statics/functions.js"
				],
				dest: "dist/Documentation/libs/mochijs/mochijs.js"
				
			}
			
		},

		min: {
			target: {
				src: ["dist/mochijs.js"],
				dest: "dist/mochijs.min.js"
			},
			target2: {
				src: ["dist/Documentation/libs/mochijs/mochijs.js"],
				dest: "dist/Documentation/libs/mochijs/mochijs.min.js"
			}
		},

		watch: {
			scripts: {
				files: ["statics/*.js"],
				task: ["reboot"]
			}
		},

		clean: {
			target: [
				"dist/mochijs.js", 
				"dist/mochijs.min.js"
			],
			target2: [
				"dist/Documentation/libs/mochijs.js",
				"dist/Documentation/libs/mochijs.min.js"
			],
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-yui-compressor');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask("default", ['clean', 'concat', 'min']);
};