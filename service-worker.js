"use strict";var precacheConfig=[["/surfing/index.html","86184f348c85254d1445f1f3caffa280"],["/surfing/static/css/main.e40c7be3.css","600289cf32a2273644c0c5e587d72f24"],["/surfing/static/js/main.71b38ac9.js","bfc9d44874b7995e0dac4768afee1fa2"],["/surfing/static/media/andrew1.08a66deb.jpg","08a66debe39b359a0badba6faee3dfd0"],["/surfing/static/media/andrew2.fcf49c39.jpg","fcf49c39e8fdceec2b61ad227bdf11ac"],["/surfing/static/media/andrew3.49d781ba.jpg","49d781ba19483ed548a2ba2f1b7b589e"],["/surfing/static/media/dylan.82e1c63c.jpg","82e1c63c2c12fdeaae1bd19815256ea0"],["/surfing/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/surfing/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/surfing/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/surfing/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/surfing/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/surfing/static/media/peak.14b5f71e.jpg","14b5f71ee3d30bb90174188c99d51e1e"],["/surfing/static/media/phil.a1aef866.jpg","a1aef866258d915111eb5fd5814aed1f"],["/surfing/static/media/pjimage.7684935b.jpg","7684935b8dd8c27fd599ab0e5074f051"],["/surfing/static/media/ray.d4f047ba.jpg","d4f047ba9c32f4a3a3a0ce81f5b72c8c"],["/surfing/static/media/skateboarding.de1df319.jpg","de1df319dff1e56382f8ce5c48006718"],["/surfing/static/media/surfc.bcdc4646.jpg","bcdc46467d0f53354d6ac2e20c8eb436"],["/surfing/static/media/surfer-lady.2afaa227.jpg","2afaa227218ce708084b3aa0f7d08538"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/surfing/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});