module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // load plugins
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Project configuration.
    pkg: grunt.file.readJSON('package.json'),

    // Compiles our LESS
    less: {
      options: {
        compress: true
      },
      dist: {
        files: {
          'dist/css/active.css': 'less/active.less'
        }
      },
      docs: {
        files: {
          'docs/docs.css': 'docs/docs.less'
        }
      }
    },

    // Handle vendor prefixing
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
          })
        ]
      },
      dist: {
        src: 'dist/css/*.css'
      },
      docs: {
        src: '_site/*.css'
      }
    },

    // Runs CSS reporting
    parker: {
      options: {
        metrics: [
          'TotalStylesheets',
          'TotalStylesheetSize',
          'TotalRules',
          'TotalSelectors',
          'TotalIdentifiers',
          'TotalDeclarations',
          'SelectorsPerRule',
          'IdentifiersPerSelector',
          'SpecificityPerSelector',
          'TopSelectorSpecificity',
          'TopSelectorSpecificitySelector',
          'TotalIdSelectors',
          'TotalUniqueColours',
          'TotalImportantKeywords',
          'TotalMediaQueries'
        ],
        file: "dist/.css-stats.md",
        usePackage: true
      },
      src: [
        'dist/css/*.css'
      ]
    },

    // Build tooling
    watch: {
      less: {
        files: ['less/**/*.less', 'docs/docs.less'],
        tasks: ['less', 'postcss', 'parker']
      }
    },

    jekyll: {
      options: {
        src: 'docs',
        dest: '_site',
        config: '_config.yml',
        raw: "version: <%= pkg.version %>",
        incremental: true
      },
      dist: {
        options: {
          serve: false
        }
      },
      serve: {
        options: {
          serve: true,
          drafts: true,
          future: true
        }
      }
    },

    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:starandtina/active-share-styles.git',
          branch: 'gh-pages'
        }
      }
    }
  });

  // Generate and format the CSS
  grunt.registerTask('default', ['less', 'jekyll:dist', 'postcss', 'parker']);

  // Publish to GitHub
  grunt.registerTask('publish', ['jekyll:dist', 'postcss:docs', 'buildcontrol:pages']);
};
