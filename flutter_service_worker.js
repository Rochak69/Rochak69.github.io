'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cbfe3cec8d2c7272aeb7dab665a3cdcb",
"index.html": "98cf3472983e63bd57bd70dd91232932",
"/": "98cf3472983e63bd57bd70dd91232932",
"main.dart.js": "74873f30d6f29416acd5019793eac9e2",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f134a0d9a1f451a99a37f7597fd1cf9f",
".git/config": "21e8cdc277c883ef4c9545994c2cf3ec",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "19a7e64a70345c07e96a2734b9db6150",
".git/objects/68/70514dfe050ef915c12f937d705c87a1d2bae0": "805e85473f03c99fa211e0e955944bbe",
".git/objects/6f/e6aa0aef6d3964044986aae1c78a4db337ac0a": "22f11199dc5563fbfccd5c9d7c894f29",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "d591a779859e5269a502d81064617f75",
".git/objects/35/51a2ca8adc3a197c76cad9fbdd2ac601c19945": "07d6bed5117c30ab1270625f065b9253",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "501d5ab5716c2ed4f4e1e47221629c14",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "1ce53d30c4d37d8927662a0d4bad4fa4",
".git/objects/5a/15362f31c76c6664e7e382a1288f50c91c4e81": "306b5fcb4310d63555f1d66be1a9ebb7",
".git/objects/5f/1dae97258a5ec45d03c798a0456744ad29c90f": "8665710d06f93545620d33b3807ca430",
".git/objects/9d/eb13156efb238988bd48f5c3d009069ab76190": "90f1f6ef678f48c8759a467ef94c7466",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "3d929b619b43ce0cdaec16ed67513540",
".git/objects/ac/168df93de16954efedba9f215bbe1e2647d8fa": "3bd3945f0cc3b4f36e531dca90072252",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "1020ea7c17300eba0f2921dfe6fff24e",
".git/objects/d0/a35e995f85e5dfc5ed9eb496942260fc2554b6": "9e72567dcef660a5f3c4948329084532",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d6/d1be1195aeef8d64374e961f29ac26b7da2c75": "a73f0ab07f83354ed103ab8a39765e57",
".git/objects/d6/952bf1918fc726b20fb1f32458f1fc035e741c": "965fbbdd23df41a5928790171f9ddebc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/eb/25e926fc75f9f8ebe93f79f776d0e7fa54c385": "72e66519c2d15ae956d72d940c343394",
".git/objects/ee/2f86b9e1c83a1bc8be4f7c43ab4338a69932fe": "4a5bbf5e55ec109cb67a7088235f5893",
".git/objects/c9/00450868c314ecbce191c464eaf843e5d0eed2": "8394dd928c5f258d3720a193a9f14a0f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/6e3c00b7ae1b48c9d2cca2d7e5d4bd4d45be51": "bab24e49cc0e3ae544206df300927332",
".git/objects/e3/3a588920dcfcea4d47fc363bd865aa36c48c48": "02b997a85d3e24a4cd8e75305f18dbfe",
".git/objects/cf/5796208069fe6039b701426eac34d4256a7029": "523209e1c7433e441a45639e9a44f77b",
".git/objects/fe/eed254fa8a6e4fba06b866a9245fa6ebc022f2": "3445b29a6549e427dea3e2d12d78665b",
".git/objects/fb/f1eec9d1de4a7e5986ff7beea14913f6fe236a": "53ad1fc7f15433d6ee0442163ac2021a",
".git/objects/20/e5ad49b1ff58e4d5be3266b54356ae4784320e": "521588fb397d6a3162561d9ce3e3fea5",
".git/objects/20/1cc58b85387a7c15ca41662393dbd53e9c600f": "29387984b7d8da0974b268d925f54acc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/4b/cc4b5d5cf8c395376ca7ecc20c6caaa21c5f42": "6d8e9f2be748743bc39bea328eb2273c",
".git/objects/29/f294c6a871833cc6521b1e8fbe3115e5434cff": "94c8920e9bf5c6c63bb45e2607858c10",
".git/objects/7c/7d3f4c649620b4db7169807b0a44fc7466567c": "38c7474b9910adab46592167ae7d4e2a",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "970c7b604262ccb20ec82f39104e9cfb",
".git/objects/1f/776f1709b7a39d411eafed1bcd8d97cbbb5db1": "f22d957bfc6554a0e6f146c493a2e8be",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/19/20af1e526a255ee2c70c5c4fe6eca54e768f0e": "1e6c3e912aed9e8b4c1e5b6a39dc60fa",
".git/objects/26/cab3693ddb555b0a56bdf0703401104a985068": "5a94fcd69ea97010447432d4e62afc75",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/88/64f6f8adae170a33572cc5041e76b6664f2123": "b16f4b56c463918c9080d80aee5257fa",
".git/objects/9f/46bb964af7d8c41a134391edb52ffe8753b078": "78e16871aa736dda6f5751520239fd81",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "bd6f798fe3e3942c14dc558521f59ca4",
".git/objects/38/dc445c243adc11db03c0fe46cf6d097033273e": "d1c5f52daa4cbcd88b2b229e3182e93c",
".git/objects/6e/5d9269de51f7f8e6656cafac56a4aec3c2706e": "dad3aab00777a3b595942bdd2c95031e",
".git/objects/6e/221f73644938e3add9d258194b46dcfe2e8349": "566800a104d052f22e7b8845602991fa",
".git/objects/5d/cd87b2fc92fde303e1896b74d18b94fe6d13e2": "25ff24434bb61fd22c94aaff5039c9c5",
".git/objects/65/c4a12504dacb5fdd70242147a1e08758231fc6": "6e3c9e548a6bc98be3ed787df4174c38",
".git/objects/96/563ef639fb9000f8d237b61933723339e12eed": "4e81fd102911dd477fc95db8848b0408",
".git/objects/98/9f323b1e32b3522c404c91818fb9b67a5e76c0": "a453826436ac09985e026b5ce5885ad3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "98dc92399f0c19aa26b49bce570be57e",
".git/objects/30/a18ad9e9cc780a129e409e16e2056abfe8e4a9": "0e03c0e2ebc15baf0ecfbadb2a1f9ea9",
".git/objects/5e/1671c7440199431412101bdfcb213cd1c63090": "7cd335b88c1dcdeb1daf96c50a3d88c2",
".git/objects/5e/323f3367ae6ee9ab234db228bbb5a1b2173256": "8589e52ab88b2562b862def107ea00e5",
".git/objects/55/099e822b86c848fc2f9ebf038e88c37f240fc5": "ddfcdd1526575346004b2468e5a87256",
".git/objects/97/7cf9d7e59d99946025906c104f12b529907345": "e26a0ac2cce9b268e5aa0922fabba487",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/2395b5dc91420e9203ee13a96a13cab690e746": "33d366562246f3a7da7d5eb5e9be5a3d",
".git/objects/a0/055faf7120a96b505c2814a1e65420bd3fe6df": "8303ce2b8788bdde00037c73297b9b7a",
".git/objects/a0/7afbf468b0fdb84ee91bb0c1be29df2170384c": "351fea87dbc9bf421f6819b1df80db1d",
".git/objects/b8/95c74c8f34b5c21f62465a963b509c35929c40": "880ca9d6d23094b0e1613de12f933556",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "0b78a2619a6aaf413ef84aef7ca14492",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/de/4ee13377a6616e0c39900bad4b7d8327d0090a": "1845a1e383da70c35aadfeb3b11c1e24",
".git/objects/b0/3a55f195fc6dab4e75dc5d9793b45fc520fb52": "b1a47564f3b6a68bd7f609a86799a50a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/c3/51f7deeda468257dfdb45ae308726dcbc28042": "a5442438abd21cfd92becb2501cace0f",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "4c96cc50b9aeb60a827c9dd2f34cdcbe",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "6078dfba0d9dfa654b1e692f5dc30d82",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d13d543bd63eb7dc360abee9ae50c375",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "f2069cc735619c31824182a9254d47e5",
".git/objects/e7/6e9849c65f47a76b60ed042e8d24ee0037e7b7": "36d46d2103f12814cdfd2e9c04009f45",
".git/objects/f8/d3b626db6019c80115759d95bec5c1180a0435": "86866463be27813c72e70404cf323f82",
".git/objects/79/7fc1e03fe1a38b760c77d1851f1f35b3dddce4": "c2ea9f5f4e842f495a6a4078e0c628e9",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "9fb736ffb37b61e228f0403ed08e43ba",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "fe2d8e778b22f092b9152a9ff9b15c75",
".git/objects/8d/f14c93f7b473a9f6208ed324be30dbb0d2f384": "987162f1cbafb6e1d69234cbfea599a1",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "26aff0b4be772e8bf4e3aa148cef22bc",
".git/objects/71/d1ee71cedc311459f3234ab6f68910f7211898": "7680ddab974f114ff38f1f3aa2f9cefa",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "b1d0c708122e6715c7b8283c8a00db11",
".git/objects/40/192da43bf841e53eee677d07fa863d719c95e9": "c1b98b5dc90f14a7f7e3b258d4399b4f",
".git/objects/47/86d02d59c4a4e9ab3ec18c0bdaa86444dcb477": "da393a32976f94b74223960ad929571e",
".git/objects/47/ffb2878565550a5f022aa3a12dbed9c155f455": "38118fa959194087c714521d5d76ad9f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "47ef375d0cfb83792d177c04590c1aae",
".git/logs/refs/heads/main": "47ef375d0cfb83792d177c04590c1aae",
".git/logs/refs/remotes/origin/main": "2364844bc1b466f64b763bf618a0d65a",
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
".git/refs/heads/main": "81c86fddb915543772a941d1f38505fc",
".git/refs/remotes/origin/main": "81c86fddb915543772a941d1f38505fc",
".git/index": "4d7d4d55fc5841a62bfb67d5158e8941",
".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
"assets/AssetManifest.json": "69b0b29ab9e46dcbb73a9f09b35ee829",
"assets/NOTICES": "707af8d7f6582e3ba72d4fbd60ea715c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "410c52f0f7a26d1ab7da475e22d6dd90",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "38753d5823ca329d2d8bc3dfc7ecbd4f",
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
