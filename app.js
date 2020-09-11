const express = require('express'),
      azureMobileApps = require('azure-mobile-apps');

const app = express();

const mobile = azureMobileApps({
    homePage: true
});

mobile.tables.import('./tables');

mobile.tables.initialize()
    .then(() => {
        app.use(mobile);
        app.listen(process.env.PORT || 3000);
    });
