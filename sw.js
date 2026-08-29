// Service worker ขั้นต่ำ แค่เพื่อให้เบราว์เซอร์อนุญาตติดตั้งเป็นแอปได้
// ไม่ได้ทำ offline caching เพราะระบบต้องใช้อินเทอร์เน็ตเชื่อม Firebase ตลอดเวลาอยู่แล้ว

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // ปล่อยผ่านตามปกติ ไม่แคชอะไร (ต้องออนไลน์เพื่อใช้งานระบบ)
  event.respondWith(fetch(event.request));
});
