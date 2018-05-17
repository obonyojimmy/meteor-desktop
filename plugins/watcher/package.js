/* eslint-disable prefer-arrow-callback */
Package.describe({
    name: 'omega:meteor-desktop-watcher',
    version: '0.18.1',
    summary: 'Watches .desktop dir and triggers rebuilds on file change.',
    git: 'https://github.com/wojtkowiak/meteor-desktop',
    documentation: 'README.md',
    debugOnly: true
});

Npm.depends({
    chokidar: '2.0.2'
});

Package.onUse(function onUse(api) {
    api.versionsFrom('METEOR@1.3.3');
    api.use('ecmascript');
    api.use([
        'omega:meteor-desktop-bundler@0.18.1',
    ], ['server'], {
        weak: true
    });
    api.addFiles([
        'watcher.js'
    ], 'server');
});
