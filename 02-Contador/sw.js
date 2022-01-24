const CACHE_NAME ="v1_cache_contador_app_vue";
const urlsToCache = [
    './',
    './img/icono16px.png',
    './img/icono32px.png',
    './img/icono64px.png',
    './img/icono128px.png',
    './img/icono256px.png',
    './img/icono512px.png',
    './img/icono1024px.png',
    './js/main.js',
    './js/mount.js',
    './css/styles.css',
    'https://unpkg.com/vue@next',
    'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(
            cache => cache.addAll(urlsToCache).then(
                () => self.skipWaiting()
            ).catch(
                err => console.log('Error en el registro del cache', err)       
            )
        )
    )
})

self.addEventListener("activate", e => {
    const cacheWhiteList = [CACHE_NAME];
    e.waitUntil(
        caches.keys().then(
            cachesNames => {
                return Promise.all(
                    cachesNames.map(
                        cacheName => {
                            if(cacheWhiteList.indexOf(cacheName) === -1){
                                return caches.delete(cacheName);
                            }
                        }
                    )
                )
            }
        )
    )
})