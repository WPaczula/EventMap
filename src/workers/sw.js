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
