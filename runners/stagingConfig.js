const siteUrl = "https://qa-testtask.herokuapp.com/todo/";
let config = require('./../globalConfig.js').config;

config.helpers.WebDriverIO.restart = true;
config.helpers.WebDriverIO.url = "https://qa-testtask.herokuapp.com/todo/";
config.helpers.OpenSite.siteUrl = siteUrl;

exports.config = config;
