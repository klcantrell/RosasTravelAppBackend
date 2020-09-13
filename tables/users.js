const table = module.exports = require('azure-mobile-apps').table();

table.read((context) => {
    return context.execute();
});

table.insert((context) => {
    return context.execute();
});

table.update((context) => {
    return context.execute();
});

table.delete((context) => {
    return context.execute();
});
