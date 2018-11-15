const cacheName = '__EventMapCache__'

addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(
      [
        '/',
        '/main/bundle.js',
        '/static/bundle.js',
        '/error.html',
        '/favicon.ico',
        '/manifest.json',
        '/assets/icons/icon-48-48.png',
        '/assets/icons/icon-72-72.png',
        '/assets/icons/icon-96-96.png',
        '/assets/icons/icon-144-144.png',
        '/assets/icons/icon-168-168.png',
        '/assets/icons/icon-192-192.png',
        '/assets/icons/icon-512-512.png',
      ],
    )),
  )
})

addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (!response) {
          return fetch(event.request)
            .catch(() => caches.match('/error.html'))
        }
        return response
      }),
  )
})
