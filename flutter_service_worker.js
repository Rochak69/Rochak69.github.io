'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cbfe3cec8d2c7272aeb7dab665a3cdcb",
"index.html": "9390baf231a4320b50028b212f581339",
"/": "9390baf231a4320b50028b212f581339",
"main.dart.js": "18993d34ead2a82a3d6fd4f7903ffc4f",
"profille.jpg": "3e2e9a82accd8045cf09980356bf6c2c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f134a0d9a1f451a99a37f7597fd1cf9f",
".git/config": "6ea6d14721587461047a4f321467e6fa",
".git/objects/6a/1abb59412de1f9a046f6c6316e6d8b3bfa30b6": "8563d2bb11e0f6c633cb783b1954157f",
".git/objects/df/90e3b3bc34bec7024f698728df5ec42a5b911a": "10e4073aeb587fb35c49adc3b3afe9bf",
".git/objects/c8/3b0bc110cd3ded46a22bf3911e6282cb918c48": "ef70daf7e5e344c00720e21c209351c8",
".git/objects/ed/d069141a783a8ce3d5f04404690f25ef3d756d": "6e21a49d250fc96ab44a3e46465123ec",
".git/objects/ec/8942e902f3057dcbd3656df1da5d08ea3f33b7": "44c3e7c7793240b5c06a4ec00db49ff7",
".git/objects/pack/pack-f028049bcba36a016b6d94e08f45e3d22830bbbf.idx": "e05da6966d185e5b9fbffd73a0685347",
".git/objects/pack/pack-f028049bcba36a016b6d94e08f45e3d22830bbbf.pack": "1c1a0ef36b5c655abab762f58c6ce61f",
".git/objects/45/ce0e6db41185b41430756daba3b5ca2af12978": "63fa304791afb576bc12284a50b68fd8",
".git/objects/80/64878170aa293e123e8fd08a57b9e89e86c11d": "1b053ce79560aeea315ca2c61409cff7",
".git/objects/8f/85bdabe31e6ca7c4d075ea3e8af9598f41e2a0": "050a901e62c43141315cf744b7beab68",
".git/objects/39/7f83335121f1ad1e2204c3ce5f41dfef077a72": "5ab500d9d1d35800296848371115b1d0",
".git/objects/b1/865f7615477f9fe90ea9b4adc96d210f7f4145": "6d1987056dd389c0451f68ea07466867",
".git/objects/f8/1fa4ba574933889358a50b435ea868a891bb4a": "f9174c4d83ecc2cd8203d8cb348041a7",
".git/objects/46/90b0a5a69cb983aac1bc0e226832a66d13848e": "a2cd19b0ea6b2e487dd65b4357dddfbe",
".git/objects/77/bc30ec0a5163668f53376e8ca7635f45689adf": "74474544bacadd3948fc95324e10e087",
".git/objects/22/a72910bf4c121e5732058626788740d973a9cc": "f816753d26a3e4f0255595ea1419e377",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "99afad2c5593a900aacde7ccf97db57f",
".git/logs/refs/heads/main": "99afad2c5593a900aacde7ccf97db57f",
".git/logs/refs/remotes/origin/main": "56e87cd776c91fe9bc6c21f9bf25a156",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "173ee084e663972a9660da7758295333",
".git/refs/remotes/origin/main": "173ee084e663972a9660da7758295333",
".git/index": "184c15ed58a92822dd4144d1a731102e",
".git/COMMIT_EDITMSG": "e64e7ecce3d76a8a3534b05c9baa6be1",
".git/FETCH_HEAD": "22e300f6afe00cfbe794890cb63ddde2",
"assets/AssetManifest.json": "2e844bd23b420cc947e359dc04f1a2e8",
"assets/NOTICES": "707af8d7f6582e3ba72d4fbd60ea715c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "6b17ae91f35993e8168fc6709b6514b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "888fa07af5cd67669cdf4edf98b01528",
"assets/fonts/MaterialIcons-Regular.otf": "50e20c45a201852769388898f4b01bc0",
"assets/assets/images/profille.jpg": "3e2e9a82accd8045cf09980356bf6c2c",
"assets/assets/images/cloudyBlue.svg": "e9d5e246793cd42bc01f6809d826583d",
"assets/assets/images/cloudRed.svg": "bda20cdd4888404719f432377a3665f9",
"assets/assets/images/profile_pic.jpeg": "ab7288f639b798d1154fd62552eda393",
"assets/assets/rive/rain.riv": "91a917f7343f7ac4523955e4ac8ca7f6",
"assets/assets/icons/firebase.svg": "029fd3c092480d94d80837b5fc4d2744",
"assets/assets/icons/github.svg": "76d344f08412543c74ccd1fb2493d607",
"assets/assets/icons/calilio.png": "ca92a34678facf775cab3e35c33473e7",
"assets/assets/icons/flutter.svg": "356b8423fb4c37e3babe292a9e03c975",
"assets/assets/icons/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/icons/fish-buyer.png": "d46be48bc4cb397c62be44c8639735bd",
"assets/assets/icons/gmail.png": "ca3abdd31ecc662cccc05a49ead6b18b",
"assets/assets/icons/matrix.png": "9127a90a234090cbf8815bb0502fd873",
"assets/assets/icons/nodejs.svg": "b337a2fb0b1289e6757e632dc766ff6b",
"assets/assets/icons/ecn.png": "e16a22a86fcd741a3e9f6ca4a3afb88e",
"assets/assets/icons/fish-producer.jpg": "73fad0fd5ec15a05db7dfdfec46adf4e",
"assets/assets/icons/mongodb.svg": "ebf723d47dc4203868088d005452543b",
"assets/assets/icons/dart.svg": "20d7b82998ddc6f73a4310bf58e609df",
"assets/assets/icons/linkedin.png": "b3eba12407542f8e50f3645422a54314",
"assets/assets/icons/playstore.svg": "dafbbd5f4a256bb2bcf37f16f3ceff1b",
"assets/assets/icons/youtube.svg": "3eb182663fd1181f048705dedec45580",
"assets/assets/icons/mume.png": "66592c4222a201901abf9121e88520ca",
"assets/assets/icons/clock.svg": "b9ff6dd2862543c3b9743a455bbffd82",
"assets/assets/icons/linkedin.svg": "3332e5306c890dfe6c9549c849124e19",
"assets/assets/icons/twitter.svg": "8f662cde3e6a9aca24b77c1639d9423e",
"assets/assets/icons/baideshik.png": "8f208470eb20b1179db05445f2f19be9",
"assets/assets/icons/graphql.svg": "eee02c0fbffe772f0479477a94cdc9e1",
"assets/assets/icons/postgresql.svg": "e174a612426fe15806fecd6673708c06",
"assets/assets/icons/ci-cd.svg": "b94710080f8a10e7a65efaa6c32ffaca",
"assets/assets/icons/topMate.png": "8f85d44acfac5e1e6f6e43f1ae2f88aa",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
