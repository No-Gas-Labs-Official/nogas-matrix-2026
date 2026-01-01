const CACHE_NAME = 'ngl-matrix-v2026-scout-01';
const CACHE_VERSION = '2026.01.01';
const CACHE_ASSETS = ['/', '/index.html', '/manifest.webmanifest', '/matrix-preview.png'];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith(caches.match('/index.html').then(cached => cached || fetch(event.request)));
    } else if (event.request.method === 'GET') {
        event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => { if(response.ok) { const clone = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone)); } return response; })));
    }
});
