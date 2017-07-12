'use strict';

let Helper = codecept_helper;

class OpenSite extends Helper {
    constructor(config) {
        super(config);
        this._config = config;
    }

    openSite() {
        let client = this.helpers['WebDriverIO'].browser;
        const siteUrl = this._config.siteUrl;
        return client.url(siteUrl);
    }
}

module.exports = OpenSite;
