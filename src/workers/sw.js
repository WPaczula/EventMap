const cacheName = '__NewEventMapCache__'
const offlineUrl = './error.html'


const createCacheBustedRequest = (url) => {
  const request = new Request(url, { cache: 'reload' })
  if ('cache' in request) {
    return request
  }

  const bustedUrl = new URL(url, self.location.href)
  bustedUrl.search += `${bustedUrl.search ? '&' : ''}cachebust=${Date.now()}`
  return new Request(bustedUrl)
}

addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install')

  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(
      [
        '/',
        '/main/bundle.js',
        '/static/bundle.js',
        '/favicon.ico',
        '/manifest.json',
        '/assets/icons/icon-48-48.png',
        '/assets/icons/icon-72-72.png',
        '/assets/icons/icon-96-96.png',
        '/assets/icons/icon-144-144.png',
        '/assets/icons/icon-168-168.png',
        '/assets/icons/icon-192-192.png',
        '/assets/icons/icon-512-512.png',
        'https://963219a5.ngrok.io/EventBackend/api/events/categories',
      ],
    )),
  )

  event.waitUntil(
    fetch(createCacheBustedRequest(offlineUrl))
      .then(response => caches.open(cacheName)
        .then(cache => cache.put(offlineUrl, response))),
  )
})


addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activate')

  e.waitUntil(
    caches.keys().then(keyList => Promise.all(keyList.map((key) => {
      if (key !== cacheName) {
        console.log('[ServiceWorker] Removing old cache', key)

        return caches.delete(key)
      }
      return null
    }))),
  )

  return self.clients.claim()
})

addEventListener('fetch', (event) => {
  if (event.request.method === 'GET') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          console.log('Syncing cache with network')

          return caches.open(cacheName)
            .then((cache) => {
              cache.put(event.request, networkResponse.clone())
              return networkResponse
            })
        })
        .catch((error) => {
          console.log(`Cant fetch request ${event.request.url} due to ${error}`)

          return caches.open(cacheName)
            .then(cache => cache.match(event.request)
              .then((response) => {
                if (response) {
                  console.log(`Response to ${event.request.url} from cache`)

                  return response
                }

                console.log(`Cant find response to ${event.request.url} in cache`)

                if (event.request.mode === 'navigate'
          || (event.request.method === 'GET'
          && event.request.headers.get('accept').includes('text/html'))) {
                  return cache.match('/')
                    .then((navigateResponse) => {
                      if (navigateResponse) { return navigateResponse }
                      return cache.match('/error.html')
                        .then(noConnectionResponse => noConnectionResponse)
                    })
                }

                return new Response(JSON.stringify({ offline: true }), {
                  headers: { 'Content-Type': 'application/json' },
                })
              }))
        }),
    )
  }
})
