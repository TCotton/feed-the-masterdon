const path = require('path');

module.exports = {
  plugins: {
    'postcss-mixins': {
      mixinsFiles: path.join(__dirname, 'apps/masterdon/app/styles/_postcss_mixins.css'),
    },
    // 'postcss-reporter': { clearReportedMessages: true },
    'postcss-simple-vars': {
      silent: false,
      variables: function () {
        return require('./apps/masterdon/app/styles/config/vars.js');
      }
    },
    // This plugin has all the official POSTCSS plugins available to it OOTB
    'postcss-preset-env': {
      // Disable MS version of Grid spec being output
      autoprefixer: { flexbox: "no-2009" },

      // Allow experimental features
      stage: 3,
      features: {
        "custom-properties": false
      }
    },
  },
};
