const swCache = 'simonJS-cache';
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(swCache)
            .then(cache => cache.addAll([
                '/SimonGameJS/',
                'index.html',
                'app.js',
                'manifest.webmanifest',
                'css/style.css',
                'webcomponents/simon.css',
                'webcomponents/simon.html',
                'webcomponents/simon.js',
                'icons/icon512.png',
                'icons/icon16.png',
                'favicon.ico',
            ]))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.open(swCache)
            .then(cache => cache.match(event.request.url))
    );
});