let I;

module.exports = {

    _init() {
        I = actor();
    },

    buttons: {
        catalogButton: '.b-main-navigation__item',
    },

    headers: {
        catalog: '.catalog-navigation__title',
    },


    openCatalogPage() {
        I.waitForVisible(this.buttons.catalogButton, 10); 
        I.click(this.buttons.catalogButton);
    },
};

