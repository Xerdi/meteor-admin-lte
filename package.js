Package.describe({
    name: 'xerdi:admin-lte',
    version: '0.0.4',
    summary: 'AdminLTE wrapped with Meteor',
    git: 'https://github.com/Xerdi/meteor-admin-lte.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('2.7.3');
    api.use([
        'ecmascript',
        'reactive-dict',
        'blaze-html-templates@1.2.1',
        'tmeasday:check-npm-versions@1.0.2'
    ]);
    api.mainModule('admin-lte.js', 'client');
    api.mainModule('server.js', 'server');
});
