// Service Worker for offline support and caching
const CACHE_NAME = 'portfolio-v1'
const RUNTIME_CACHE = 'portfolio-runtime'
const urlsToCache = [
  '/',
  '/index.html',
  '/Image.png',
  '/about.png',
  '/logo.png',
  '/bg-img1.jpg',
  '/raj.png',
  '/talking.jpg'
]

// Install event - cache important assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).catch((err) => {
          console.log('Cache addAll error:', err)
        })
      })
      .then(() => self.skipWaiting())
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip external requests (different origin)
  if (url.origin !== location.origin) {
    return
  }

  // Stale-while-revalidate strategy
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version immediately
        if (cachedResponse) {
          // Update cache in background
          fetch(request)
            .then((response) => {
              if (response && response.status === 200 && response.type !== 'error') {
                const responseClone = response.clone()
                caches.open(RUNTIME_CACHE)
                  .then((cache) => {
                    cache.put(request, responseClone)
                  })
              }
            })
            .catch(() => {})
          
          return cachedResponse
        }

        // Try to fetch from network
        return fetch(request)
          .then((response) => {
            // Cache new responses
            if (response && response.status === 200 && response.type !== 'error') {
              const responseClone = response.clone()
              caches.open(RUNTIME_CACHE)
                .then((cache) => {
                  cache.put(request, responseClone)
                })
            }
            return response
          })
          .catch(() => {
            // Fallback for offline
            return new Response('Offline - No cached version available', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            })
          })
      })
  )
})
