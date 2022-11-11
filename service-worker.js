// Installing service worker
const CACHE_NAME = 'https://www.authorwave.gq/';

/* Add relative URL of all the static content you want to store in
* cache storage (this will help us use our app offline)*/
let resourcesToCache = ["./ghostm68/Parallax-RellaxJav/tree/master/Images", ".VAPORGRAM1609365711615.mp4", "./rellax.min.js", "./style.css"];

self.addEventListener("install", e=>{
e.waitUntil(
caches.open(CACHE_NAME).then(cache =>{
return cache.addAll(resourcesToCache);
})
);
});
