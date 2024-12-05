'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');
const Compat = require('@embroider/compat');
const sideWatch = require('@embroider/broccoli-side-watch');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    trees: {
      app: sideWatch('app', {
        watching: ['watch-test'],
      }),
    },
  });

  return Compat.compatBuild(app, Webpack);
};
