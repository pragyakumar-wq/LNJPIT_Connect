const CACHE = "lnjpit-timetable-v3";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./firebase-messaging-sw.js", "./icons/icon-192.png", "./icons/icon-512.png"];

// Register this before loading FCM so the SDK cannot replace the app's click
// behavior. Resolve relative paths from the worker scope to support GitHub
// Pages project URLs such as https://user.github.io/repository/.
self.addEventListener("notificationclick", event => {
  event.notification.close();
  const targetUrl = new URL(event.notification.data?.url || "./", self.registration.scope).href;
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(windows => {
      for (const client of windows) {
        if (client.url.startsWith(self.registration.scope) && "focus" in client) {
          return client.navigate(targetUrl).then(() => client.focus());
        }
      }
      return clients.openWindow(targetUrl);
    })
  );
});

// The no-build service-worker path uses Firebase's compat libraries. The page
// uses the modular SDK; both scripts deliberately pin the same version.
importScripts("https://www.gstatic.com/firebasejs/13.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/13.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyD1VQ6LxMrKaMl0AuxEA9mRc1SpdDopck4",
  authDomain: "lnjpit-timetable.firebaseapp.com",
  projectId: "lnjpit-timetable",
  storageBucket: "lnjpit-timetable.firebasestorage.app",
  messagingSenderId: "983687695923",
  appId: "1:983687695923:web:de769b16368a1a34d51d46"
});

const messaging = firebase.messaging();

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

// Network first (so updates show up), cache fallback (offline).
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || !event.request.url.startsWith(self.location.origin)) return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then(response => response || caches.match("./index.html")))
  );
});

// Notification payloads are shown by FCM automatically in the background.
// This handler supplies a visible notification for data-only messages instead.
messaging.onBackgroundMessage(payload => {
  if (payload.notification?.title) return;
  const data = payload.data || {};
  return self.registration.showNotification(data.title || "LNJPIT Timetable", {
    body: data.body || "You have a new timetable notification.",
    icon: "./icons/icon-192.png",
    badge: "./icons/icon-192.png",
    tag: "lnjpit-timetable",
    data: { url: data.url || "./" }
  });
});
