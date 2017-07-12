var path = require('path');

const basePath = path.resolve(__dirname);

exports.config = {
    "tests": './../features/**/*.feature.js',
    "helpers": {
    "WebDriverIO": {
       "browser": "chrome",
       "windowSize": 'maximize',
    },
    "OpenSite": {
      "require": "./../helpers/openSite.js",
    },
  },
  "include": {
      homePage: path.resolve(basePath, './features/home/homePageObject.js'),
  },
  "bootstrap": false,
  "name": "test",
};
