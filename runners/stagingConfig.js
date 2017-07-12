const siteUrl = "https://www.onliner.by/";
let config = require('./../globalConfig.js').config;

config.helpers.WebDriverIO.restart = true;
config.helpers.WebDriverIO.url = "https://www.onliner.by/";
config.helpers.OpenSite.siteUrl = siteUrl;

exports.config = config;
