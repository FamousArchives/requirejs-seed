// Copies remaining files to places other tasks can use
module.exports = {
  dev: {
    options: {
      style: 'expanded'
    },
    files: {
      '.tmp/styles/main.css': '<%= config.app %>/styles/main.scss'
    }
  },
  dist: {
    options: {
      style: 'expanded'
    },
    files: {
      '.<%= config.dist %>/styles/main.css': '<%= config.app %>/styles/main.scss'
    }
  }
};
