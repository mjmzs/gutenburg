"use strict";var precacheConfig=[["/gutenburg/index.html","f2d98b47788a39ea6c604d376298bbe1"],["/gutenburg/static/css/main.7e6e6c32.css","19a58915bd09fa0d121dd734f195ab2d"],["/gutenburg/static/js/main.5f33f011.js","50ffb1bc55591773a46ad9316fa59d0e"],["/gutenburg/static/media/Yekan.ee7d8189.woff","ee7d818972d4a92450292e22495e21de"],["/gutenburg/static/media/footerimg1.f85b1152.jpg","f85b115279a11085d8018cfcf89174d8"],["/gutenburg/static/media/footerimg2.f68458da.jpg","f68458da9bb94925d0635580e984f6d3"],["/gutenburg/static/media/footerimg3.8b4d6b7c.jpg","8b4d6b7cc6a65bd7b19804b4903a3d86"],["/gutenburg/static/media/footerimg4.2f3d86f2.jpg","2f3d86f22aee2322475f50e3a4cf8524"],["/gutenburg/static/media/imgslide1.93f0d70b.jpg","93f0d70bad84afb362afbf8f159fd9de"],["/gutenburg/static/media/imgslide2.962f493e.jpg","962f493e130d2db77df59d52ee6ea22a"],["/gutenburg/static/media/imgslide3.cd1317b4.jpg","cd1317b4f7748da02abcb2630bdb943e"],["/gutenburg/static/media/navbgimage.4eda6db1.jpg","4eda6db1707611023931beef93de3d1d"],["/gutenburg/static/media/titlebar.0399afd4.png","0399afd4c70d024338567c0707b48db3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));var a="/gutenburg/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});