
const CACHE = "kinoukentei-machine1-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/bank_262.jpg",
  "./assets/bank_282.jpg",
  "./assets/bank_old.jpg",
  "./assets/bank262_cell1.jpg",
  "./assets/bank262_cell2.jpg",
  "./assets/bank262_cell3.jpg",
  "./assets/bank262_cell4.jpg",
  "./assets/bank262_cell5.jpg",
  "./assets/bank282_cell1.jpg",
  "./assets/bank282_cell2.jpg",
  "./assets/bank282_cell3.jpg",
  "./assets/bank282_cell4.jpg",
  "./assets/bank282_cell5.jpg",
  "./assets/bankold_cell1.jpg",
  "./assets/bankold_cell2.jpg",
  "./assets/bankold_cell3.jpg",
  "./assets/bankold_cell4.jpg",
  "./assets/bankold_cell5.jpg"
];
self.addEventListener("install", e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener("activate", e=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e=>{ e.respondWith(caches.match(e.request).then(r=>r || fetch(e.request))); });
