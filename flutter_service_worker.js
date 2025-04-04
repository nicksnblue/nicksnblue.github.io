'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1a4a097e17ceee03ae7a8df9253ac51a",
".git/config": "041dcd3da4c81a202374ee2265061fcc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "60adbf2308e8f211a6c248fde6975b8b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3743ebc07e6efda4e1fcf272d158dd05",
".git/logs/refs/heads/gh-pages": "8a974f3008c65b8bd53e8615b3fc66d8",
".git/logs/refs/heads/main": "7798fe334caec2292296ba2527b017a6",
".git/logs/refs/remotes/origin/gh-pages": "fb72b997b8319b05d688dbcf8648bf23",
".git/logs/refs/remotes/origin/main": "a970650865143e655d86efc5f60002cc",
".git/objects/01/dc66b0199a470dadc939cdd5ef3f48727d77a8": "25c7b89e0bdd32d1d655798a3e620fd6",
".git/objects/02/06a40913713ad431d66a6e5b963d7a903b0d3c": "072fa683c3bdba1c026d369e08f246ff",
".git/objects/05/0fd78c095b51c87ea26611463912851024a5e5": "d8d529a3de52b02b874298a07b8e1484",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/43e08ce7a22fd911db7cc7005f04f62e969345": "e271267c5de9e82b99915e8b31b5c3a8",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/db33fa05d9cecb580f0e4aa41f295ebba856ed": "c9dc8c70a29f488913c3db0ee5639956",
".git/objects/10/811c337ed6023fc31ab8706d3575dc87e8ad87": "5e28e918a8f3747bc45330edbae333b6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/ef7ccd55c2f967a96a79c202ca4c02399c8134": "b3312b718b5527788b81e4eee1243cd5",
".git/objects/25/d32ecacc4827867e28e62e08e5f28066a90c51": "61d500cacaaae968f222ea4ffe1d871a",
".git/objects/25/edbcdc4056244c17c69385134f90b0a1f38ca5": "352bc09196c28f57526699622f75ac45",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/7961e05205283191c9a20173320ae430c98851": "2dfd5e5f93b52983d7551822f2ac02aa",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/40444a6a3a9e6f2b8a92a9bb29d3b973b182b1": "0db23275d852ab5792ac437266c58cd7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/c2ff3dd5af8700412d68b32fa98a319490b774": "7ab712629814ce0e4429ddcdadcdb341",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/1de1e2374a0c26e8e89141f305ea4f0ad28623": "5d937cc893b4a474fe73e6fbaee90306",
".git/objects/43/0c7c37dd40d996d1c32263d3b8bbc1740d777a": "fb906e98405ef243a2f14b9429cac27b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/63/5bb0b1104ad06239d3e15c65837c9be92d66db": "7320c8e19ac7174818e7bc61321e9a66",
".git/objects/63/90973ae4af47e291cb2256e1b2be11ec129be8": "4458c81271a7fdebf5465032a1226408",
".git/objects/65/b0f09e68c27c40e20e7fde69758ff0617bd6a6": "e8df269e9ad4f087169072ad2ebb8b07",
".git/objects/6b/ccd016cee3f665db1cf1367da95607912618c0": "aa40aef6cb44cecb3fcc80f031f681a7",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/75/c209c8912a4ab6f4f182f1f1cfb5400f132251": "df95b3c33ae4a34cd6c7bfe1e9e6c718",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d8bda00e25a448ad68751d356e799e16aafe36": "0196d9dedfa3fb1328bb64450b38e6c3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/5740ee14574e0c280248f490d977e1cbca8def": "d22701c21ef94ae6ac109e07f115469f",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/bcb9f3ee81218ad667edbdd6e6967d926cf6cb": "72d7872790e3d4c4aafd86aa75715e8e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/4d4068fdc105c4fdd114d318a290264ed86be8": "12bacd37d457d2ddc60fd22f5a8bb395",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/1f75ad8c82647b7927c6d87c5a24ea743ea0b5": "c319147b1aa0a96f190c9e391edd29ce",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c1/0fed0d05a2beae93c0a44668927ec8f733abf1": "28d46ca12958c0b9603d48b32b8cc5d2",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/ce47dcc1e21ac9ca9bff9b347c70f0974fd4bd": "8d5c557f74374e11616a2d48e8a4bfe7",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/4152aabaa28647142084ac387c3deee66bfca5": "831dd6727933d4e2feb1f05868143ff4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/d84be8cc61bacb0a507d8762287e68f2c63061": "7ccbdb423ffe5b99ed67cb23fcd464e6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/36bb85bb007d4d69f66164618145044f6781d1": "4bb3e2f64fba9660a785d34aeb1b2bee",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/abd59ad03200ca81a43768e36e90b3e1123d28": "5ba92cb37d87829043613f64ae4df09d",
".git/objects/e3/00f0c828bdda1ac8214747dd9f3e6ff76d2d77": "ca92b7120d722f72ff737f8013233fc9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/88d29a6aa11cdc422304d1d1efdd8f0f9c0a93": "9b96534656f0f0216a4f263337b64572",
".git/objects/ee/9ac7b7196f884360109b23affe99b2cb40b5c4": "bf84e51424368e8a038c7021fff589d4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9efa2b4abd0b50800ceb58c210f7e1932dc199": "9a0e8bdc3c462ffcc33b96276114c405",
".git/objects/fb/4973440c26476bee69d306524c658a9d2d21c4": "edd9efe56bed7acd168f57954af71406",
".git/refs/heads/gh-pages": "a44759cd9a84af36920b4893f8989451",
".git/refs/heads/main": "2b3189ace21ed253039a8b16469c05f2",
".git/refs/remotes/origin/gh-pages": "a44759cd9a84af36920b4893f8989451",
".git/refs/remotes/origin/main": "2b3189ace21ed253039a8b16469c05f2",
"assets/AssetManifest.bin": "95ce0c20938504f9f979032d2112fc36",
"assets/AssetManifest.bin.json": "b4f421cf387c20094b8d04c3cc7f5471",
"assets/AssetManifest.json": "f73e894988e899d8d6a6ef70ddaaa579",
"assets/assets/icons/icon_Acept.png": "1d34e1ede4dd9b6b494069cc04834558",
"assets/assets/icons/icon_calender.png": "b70d975ac746921f22bc2fbcde885a13",
"assets/assets/icons/icon_ID.png": "d0690c59c39ada9570d2608fabb83389",
"assets/assets/icons/icon_left_arrow.png": "c4d5944124122232ab806f640ddc575f",
"assets/assets/icons/icon_Menu.png": "1d1a30e2c623f41d5c9b56f19301e739",
"assets/assets/icons/icon_option.png": "98da6bca88ecca861386bc12f50efa35",
"assets/assets/icons/icon_PW.png": "9e0f29986f80ddf3650f88fe2c641cab",
"assets/assets/icons/icon_right_arrow.png": "0990c4e07722ab5d9d317b19283140e4",
"assets/assets/logo/app_logo.png": "3b79c67d7f47fa6d49ee6ecb0b8f622f",
"assets/assets/logo/app_logo.svg": "9f5728f889cafb90a99c2e2d0cd5ec29",
"assets/assets/logo/app_logo4.png": "8f10f9759b135d7c85a343c38d4a404d",
"assets/assets/logo/Company_Logo.svg": "7845a7d55827cd9aabf6e7325ced1563",
"assets/assets/logo/Company_Logo2.png": "e272976d798a5e4f324ba342c1ec8967",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6b68b289b1b6198626579bd6929d5336",
"assets/NOTICES": "e0db592be720b0d79c9193086e02d3af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "aca6f0dd8376f239f4c007eee811c440",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7daf58228f309679188f6179c4f9d238",
"generateVapidKeys.js": "45f4eec5de88c76442d42fb18649f72c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "66d10871935417703e9aeafda42d37bc",
"/": "66d10871935417703e9aeafda42d37bc",
"main.dart.js": "8adc6f21916c290842cede60778a16ca",
"manifest.json": "a9df67bad4b2dd0e062f96f5e9d6e04e",
"service_worker.js": "1a59ebf456172b8e9916caa407f4e554",
"version.json": "2cfac3e08b057c16ef3aaeb78fe1a1d2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
