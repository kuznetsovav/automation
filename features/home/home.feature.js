Feature('Home');

Before((I) => {
  I.openSite();
});

Scenario('A user can open Catalog page', (I, homePage) => {
  homePage.openCatalogPage();
  I.waitForVisible(homePage.headers.catalog, 10);
});
