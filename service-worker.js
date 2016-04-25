/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';


importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["comingsoon.html","b36542e688bc21ffe581679a5d8f525b"],["images/Hamburger.svg","68be3a15ebb5dca8e5dba3cec824f44b"],["images/btn_close.svg","459aebaedacf6006742c493cdd27395f"],["images/calendar.svg","b96c90d859c679fe338ec1e7ce456f44"],["images/dc_logo.svg","f78ca1219395ca523a4c19786661088a"],["images/facebook.svg","8dd0e2864dfff8b136362d6e5cef34b8"],["images/fb.png","2c640ecde8f8a684f188ae053507afb0"],["images/imm2016logotype_lgbg.svg","00e90ac629a97ffbe916f41cafa41d50"],["images/imm2016logotype_small.svg","25c1818c72ee013cf63a8e99271c131a"],["images/logo.svg","e957b32827e3a3faf5866f25f2ef317b"],["images/logo_designcofounders_ph.png","4b60c1117e21599e5cfcac66b0e46bc8"],["images/pin.svg","52fbd02516852938bc4e8449c46bcc1e"],["images/portraits/alice.png","411bdbfc30f62eaafc3900f91db80032"],["images/portraits/alice_sketch.png","e1b93cf5f439e0016302607b234dd9dd"],["images/portraits/andrew.png","6847eb18d01632ab920159ff926cdc79"],["images/portraits/andrew_sketch.png","0621ecf608664d94984e2af88db8c480"],["images/portraits/becky.png","25cf574216ba2323e8ac89c7ef534337"],["images/portraits/becky_sketch.png","48ea94fa43af1c7a78db803693bb3ce0"],["images/portraits/borys.png","654dfc56ec2d698e434604c43fb36b54"],["images/portraits/borys_sketch.png","721e884c7a8d7c9996439ed211046d0f"],["images/portraits/caitlin.png","a80031282da4718b7cf32216aec22fe7"],["images/portraits/caitlin_sketch.png","2ea728a3e6e5669bcbc9c145a656b37b"],["images/portraits/carol.png","481bbec99dc94651c494a39c914b8992"],["images/portraits/carol_sketch.png","0ebb5f13c7ec37e50ba1deb1232c081d"],["images/portraits/chanelle.png","95c0bd874813a4d0194c1683b5d3e1c7"],["images/portraits/chanelle_sketch.png","97c5aeb87ceb8e7368276c805ad9e741"],["images/portraits/cornell.png","e602d6e9b419d03709cd7fe0ad3cf3ad"],["images/portraits/cornell_sketch.png","af2cbacc52324a2a4a583a398dbfd066"],["images/portraits/darren.png","9bcae716b86dfada4b09a68ede0882b8"],["images/portraits/darren_sketch.png","afd35684c91ed55d06c3fb6acc3fda9a"],["images/portraits/dillon.png","a26a571332a0e2a23c04ce5800bfcaa3"],["images/portraits/dillon_sketch.png","68a33d0ba5ff383daa6184639ddc2968"],["images/portraits/ginger.png","b64aeeb3bf3a4463db812f88b924931b"],["images/portraits/ginger_sketch.png","88451d536525a8197d3bc6017f809f33"],["images/portraits/isabella.png","275c8d7c19f7faafb5678563e18d3ae1"],["images/portraits/isabella_sketch.png","80a122f6ba6904dddf79fb581cffb8f7"],["images/portraits/ivan.png","9e1038d4b9a8af7758d284408d2db0a2"],["images/portraits/ivan_sketch.png","a84e104e7c11ca94337380beaa129564"],["images/portraits/james.png","978bde4175a4169b077f84d445376418"],["images/portraits/james_sketch.png","94a446183d6abf3b1a802a9df3794c07"],["images/portraits/jason.png","4c2f6a966041fd0790652e09ad1f1bb3"],["images/portraits/jason_sketch.png","57f4f824cbf1229cf69c0e46951ee3d7"],["images/portraits/jermain.png","201571498dd104141cd4d426a6ef08a8"],["images/portraits/jermain_sketch.png","7e33f88d5f415f9cf4d32e9e87247ba1"],["images/portraits/lauren.png","fa4e7e50aa22518af5ac137d9f22d276"],["images/portraits/lauren_sketch.png","3adab2db7444f1171cbc0227e4405a1b"],["images/portraits/lucey.png","1d89300b378651e8acd06ce276781a98"],["images/portraits/lucey_sketch.png","679ab0f6ad73a1119ba87b5729efd80c"],["images/portraits/maria.png","5c2a71bc68c95926b68ac76747566ded"],["images/portraits/maria_sketch.png","22b1535b057fa100cba6d34eeff3d3d5"],["images/portraits/marryam.png","103291ad7e3070005ba7f753a32e37c2"],["images/portraits/marryam_sketch.png","ed64f2abfa6d01b630640e96e96fd9da"],["images/portraits/max.png","34799b3d7a04a47916e7f5c656215523"],["images/portraits/max_sketch.png","f8df6479a4efcc51f1c85d9ba6c739dd"],["images/portraits/mina.png","04ac6e0dbcb21caafa07939b97917387"],["images/portraits/mina_sketch.png","66816e33eee48a66bc56e4c058285bc5"],["images/portraits/mitch.png","a8faad9d7901332aac27f2bc3866958f"],["images/portraits/mitch_sketch.png","c322211c57e242d694f7f92feacb08bd"],["images/portraits/neo.png","cb7d5b4b65b1a2d26e22bdbfa0e4cff3"],["images/portraits/neo_sketch.png","72dd2be6fdbb973f68f00427d953b7d5"],["images/portraits/paul.png","dfed7b02567344a6299e7315afb81638"],["images/portraits/paul_sketch.png","79393e9c5824240e9f1c3ee075bb917f"],["images/portraits/rachel.png","d964838d29152fbfbe7d2c36828145fa"],["images/portraits/rachel_sketch.png","02dacb4caac614b5fdbe65abeb22578f"],["images/portraits/sil.png","4a80adc8153f2d6501fa78e63c2d2b65"],["images/portraits/sil_sketch.png","47926cecd0e04191edd8bdf5a4007bc3"],["images/portraits/tilda.png","611d549910b78698a412407c5c454757"],["images/portraits/tilda_sketch.png","4f99eb9f21235cb28e14fda9ab82c582"],["images/sheridan_logo.svg","428781b504b4c0e7be74f6b7771f5f4d"],["images/sm_behance.svg","7364dd39e3feb0b329c68d846847659b"],["images/sm_github.svg","d6e010875723fbb1b336fedc9ac924fc"],["images/sm_linkedin.svg","92bca5597af5d0c4be7860d579cd174e"],["images/sm_twitter.svg","e3d3e3685e69a95a00b4587372a066a5"],["images/threejs/6-06.png","d25c4e2bc2e5c9ed2fa386ebc9086471"],["images/threejs/7-07.png","6f3219fc760198b854375b617177be1d"],["images/threejs/8-08.png","601bb39b68b381b2b254f1bf0d23180e"],["images/touch/android-chrome-144x144.png","b46e190b95c7065fb56eae70d98bb5e6"],["images/touch/android-chrome-192x192.png","7bf9a190acd2943ae513991cc771e99b"],["images/touch/android-chrome-36x36.png","590e60620fd32c531fa37a581aaa9cbf"],["images/touch/android-chrome-48x48.png","d5652c65afd7b29bd5867151760e1006"],["images/touch/android-chrome-72x72.png","552fa77b51fc23edee9577ae195bc91d"],["images/touch/android-chrome-96x96.png","356d7461cbf8b3b9fcb78cf05ddf55f3"],["images/touch/apple-touch-icon-114x114.png","dd1015a8082470a205840c76ecc02449"],["images/touch/apple-touch-icon-120x120.png","5d28600133308fb03955daf788f38e02"],["images/touch/apple-touch-icon-144x144.png","fc35c5c0f0376148494d1e09a8153832"],["images/touch/apple-touch-icon-152x152.png","45ace92c59932eea094cdd523fc6b7a7"],["images/touch/apple-touch-icon-57x57.png","5ae47a35533b32707f64378c8000be7d"],["images/touch/apple-touch-icon-60x60.png","e831ec61c8699d73b665ac7839440267"],["images/touch/apple-touch-icon-72x72.png","5f0b618ee2ff2e470e7a8f060c6ca7f4"],["images/touch/apple-touch-icon-76x76.png","0374b3965ba3d23a6e6659dcfe0413ca"],["images/touch/apple-touch-icon-precomposed.png","59a3beafc66f5398ac62d5b1a9a87ef3"],["images/touch/apple-touch-icon.png","da9ecba706273e17e8d5198532aa527f"],["images/touch/browserconfig.xml","9af3b0f8f0a7cc945459b97898f320c1"],["images/touch/favicon-16x16.png","9054bdf70f93697a4c862db52c3c643b"],["images/touch/favicon-32x32.png","cf04a67dd25d6d5ed5b31fcca493c809"],["images/touch/favicon-96x96.png","356d7461cbf8b3b9fcb78cf05ddf55f3"],["images/touch/favicon.ico","aaeec7c16a3b37bcf49a1267c339b662"],["images/touch/manifest.json","3ac772600ff29554b2e2cde75960b364"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["images/touch/mstile-144x144.png","4b8c4e021c4883a5aa6c4c4e8370671b"],["images/touch/mstile-150x150.png","758b396fc93235c8184895bea165703a"],["images/touch/mstile-310x150.png","5982c319f97ab0f3e5cc01bfa7ec464a"],["images/touch/mstile-310x310.png","b96087ece10697d69f9220db9772c08d"],["images/touch/mstile-70x70.png","9de3f23a1edbda1bc5637e52c0a2f775"],["images/twitter.png","89136626e03c58cb0ba6624fc6d3120a"],["images/twitter.svg","d074de1eec12531ed07f39b67c2d05e0"],["index.html","c0fd3c69d4606c8cc1cb3cd6feb5963f"],["scripts/main.min.js","2e107d35917fba5ba2d01be9fbeb6e6e"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","42dd9073ba0a0c8e0ae2230432870678"],["styles/main.css","a728829ad45b87dde5720428de61113e"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') + 'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html')) {
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});

