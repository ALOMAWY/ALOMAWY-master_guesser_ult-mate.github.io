/* Master Guesser — Service Worker
   Strategy:
   - App shell + assets: cache-first, refreshed in background (stale-while-revalidate)
   - Google Fonts / CDN: network-first with cache fallback
   - Sounds: cached on first use
*/
const CACHE_NAME = "master-guesser-v5";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./master.css",
  "./normalize.css",
  "./script.js",
  "./effects.js",
  "./favicon.svg",
  "./icons/master-gusser.svg",
  "./sounds/success.wav",
  "./sounds/error.wav",
  "./sounds/game-over.wav",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  // Only handle real web requests — skip chrome-extension:, blob:, data:, etc.
  const url = new URL(request.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  const isThirdParty =
    url.origin !== self.location.origin &&
    (url.hostname.includes("fonts.googleapis.com") ||
      url.hostname.includes("fonts.gstatic.com") ||
      url.hostname.includes("cdnjs.cloudflare.com"));

  // Third-party : network-first, fall back to cache when offline
  if (isThirdParty) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Same-origin app shell : stale-while-revalidate
  event.respondWith(
    caches.match(request).then((cached) => {
      const refreshed = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);

      return cached || refreshed;
    })
  );
});
