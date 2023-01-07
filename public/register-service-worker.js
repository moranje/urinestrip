if ('serviceWorker' in navigator) {
  // Recommended to register onLoad
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/service-worker.js', {
        scope: '.',
      })
      .then(function (reg) {
        console.log('Service Worker registered successfully!');
      })
      .catch(function (err) {
        console.log('Service Worker failed to register', err);
      });
  });
}
