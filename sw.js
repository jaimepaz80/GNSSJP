const CACHE_NAME = 'gnssjp-v1';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(['/', '/index.html', '/manifest.json'])));
});
self.addEventListener('fetch', e => {
  if (e.request.url.includes('127.0.0.1')) return; // No cachear el motor matemático
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
