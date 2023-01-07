self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('message', (event) => {
  console.log('[WORKER] worker with data: ', event.data);
});
