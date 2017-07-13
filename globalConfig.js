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
      toDoList: path.resolve(basePath, './features/toDoList/toDoListPageObject.js'),
  },
  "bootstrap": false,
  "name": "ToDo List",
};
