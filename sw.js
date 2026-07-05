const CACHE = 'daily-tracker-v2';
const ASSETS = [
  '/supergun/',
  '/supergun/index.html',
  '/supergun/manifest.json',
  '/supergun/icon-192.png',
  '/supergun/icon-512.png'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
