self.addEventListener('install', () => {
    console.log('[service worker] installed');
});

self.addEventListener('activate', () => {
    console.log('[service worker] actived');
});

self.addEventListener('fetch', () => {
    console.log('[service worker] fetched');
});
