const CACHE_NAME = 'timer-v1';
const ASSETS = [
  './',
  './VisualTimer.html',
  './manifest.json',
  './icon-256.png',
  './icon-512.png'
];

// インストール時にファイルを保存
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// オフライン時はキャッシュから読み込む
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});