if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"bccecef68c2c66dace894e6dcd3eb599"},{url:"/_next/static/chunks/4e6af11a-e3d596b0b1c2c7c4.js",revision:"s1t-hq7YGK0MsCLSIiVaz"},{url:"/_next/static/chunks/506-4b869394bf108b68.js",revision:"s1t-hq7YGK0MsCLSIiVaz"},{url:"/_next/static/chunks/596-6a8a45d9a04a3555.js",revision:"s1t-hq7YGK0MsCLSIiVaz"},{url:"/_next/static/chunks/app/layout-d8966188b8b9bd7c.js",revision:"s1t-hq7YGK0MsCLSIiVaz"},{url:"/_next/static/chunks/app/page-cf9f8c9019648fa1.js",revision:"s1t-hq7YGK0MsCLSIiVaz"},{url:"/_next/static/chunks/fd9d1056-ba7be158f616ad47.js",revision:"s1t-hq7YGK0MsCLSIiVaz"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"s1t-hq7YGK0MsCLSIiVaz"},{url:"/_next/static/chunks/main-0381f1499ef3d92d.js",revision:"s1t-hq7YGK0MsCLSIiVaz"},{url:"/_next/static/chunks/main-app-96b559d6e68ca69e.js",revision:"s1t-hq7YGK0MsCLSIiVaz"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"s1t-hq7YGK0MsCLSIiVaz"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"s1t-hq7YGK0MsCLSIiVaz"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-0e8d04cba0d672df.js",revision:"s1t-hq7YGK0MsCLSIiVaz"},{url:"/_next/static/css/5dd44d50e287e72f.css",revision:"5dd44d50e287e72f"},{url:"/_next/static/css/8c172eea08a1fdce.css",revision:"8c172eea08a1fdce"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/s1t-hq7YGK0MsCLSIiVaz/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/_next/static/s1t-hq7YGK0MsCLSIiVaz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icon-192x192.png",revision:"1374dd3b91705e7f46ad4d9993471f0c"},{url:"/icon-256x256.png",revision:"f14e93898819bb102a7cca44d93bc706"},{url:"/icon-384x384.png",revision:"833e2fe1ac29052460cc6e039631476e"},{url:"/icon-512x512.png",revision:"399671fd35e646c20d012505ccf3b138"},{url:"/images/loader.gif",revision:"1bd55abee8ea1e6cb9b8d1c6e93813e5"},{url:"/manifest.json",revision:"0dda6a3666b154446d9077148a4e6616"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/sitemap.xml",revision:"9e5a167b776a4e34be294800332e5021"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
