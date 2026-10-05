// PWA Service Worker — لا يتم تخزين نسخة من index.html أو ملفات التطبيق.
const VERSION = 'pwa-network-only-v1';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // لا Cache Storage: كل طلب يذهب مباشرة إلى الشبكة.
  event.respondWith(
    fetch(event.request, { cache: 'no-store' })
  );
});
