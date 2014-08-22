Package.describe({
    summary: 'GreenSock Animation Platform : Professional-Grade HTML5 Animation.',
  version: "1.13.2-beta2",
  git: "https://github.com/infinitedg/meteor-gsap/"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");

    api.add_files([
        'header.js',
    ], 'server');
   api.add_files([
        'vendor/Draggable.min.js'
    ], 'client');
    api.add_files([
        'vendor/TweenMax_client.js'
    ], 'client');

    api.add_files([
        'vendor/TweenMax_server.js'
    ], 'server');

    // api.add_files([
    //     'exports.js',
    // ], 'server');

    // api.export('TweenLite', ['client', 'server']);
    // api.export('TweenMax', ['client', 'server']);
});
