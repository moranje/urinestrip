self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
});

// Offline
self.addEventListener('fetch', () =>
  console.log('[ServiceWorker] fetch for offline')
);

self.addEventListener('message', (event) => {
  console.log('[ServiceWorker] worker with data: ', event.data);
});
