const app = require('express')();

const mobileApp = require('azure-mobile-apps')();

mobileApp.tables.add('Post');
mobileApp.tables.add('Users');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
