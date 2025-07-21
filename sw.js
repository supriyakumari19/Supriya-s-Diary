self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('diary-cache').then(function(cache) {
      return cache.addAll([
        'diary.html',
        'manifest.json',
        'icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
