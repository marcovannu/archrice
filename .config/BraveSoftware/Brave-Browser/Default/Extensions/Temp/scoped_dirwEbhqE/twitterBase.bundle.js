!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return a}));let r=null;const s=()=>{r||(r=chrome.runtime.connect("jidkidbbcafjabdphckchenhfomhnfma",{name:"Greaselion"}))},a=(e,t)=>{e&&r&&r.postMessage({type:"GreaselionError",mediaType:e,data:{errorMessage:t}})}},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));const r=(e,t,n)=>{if(e.length<t.length)return"";const r=e.indexOf(t);if(-1===r)return"";const s=r+t.length,a=e.indexOf(n,s);let o="";return a!==s?o=-1!==a&&a>s||-1!==a?e.substring(s,a):e.substring(s):""===n&&(o=e.substring(s)),o},s=(e,t)=>{const n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==t[s])return!1}return!0}},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o}));const r="twitter",s="twitter.com",a=["https://api.twitter.com/1.1/*"],o=["requestHeaders","extraHeaders"]},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);let s=!1;const a=(e,t)=>{e&&!s&&(s=!0,r.b&&(r.b.postMessage({type:"RegisterOnUpdatedTab",mediaType:e}),r.b.onMessage.addListener((function(e){if(e.data)switch(e.type){case"OnUpdatedTab":t(e.data.changeInfo)}}))))}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(0);let s=!1,a=!1;const o=(e,t,n)=>{e&&!s&&(s=!0,r.b&&(r.b.postMessage({type:"RegisterOnCompletedWebRequest",mediaType:e,data:{urlPatterns:[t]}}),r.b.onMessage.addListener(e=>{switch(e.type){case"OnCompletedWebRequest":n(e.mediaType,e.details)}})))},i=(e,t,n,s)=>{e&&!a&&(a=!0,r.b&&(r.b.postMessage({type:"RegisterOnSendHeadersWebRequest",mediaType:e,data:{urlPatterns:t,extra:n}}),r.b.onMessage.addListener((function(e){if(e.data)switch(e.type){case"OnSendHeadersWebRequest":s(e.mediaType,e.data.details)}}))))}},function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return u}));var r=n(2);const s=e=>e?`${r.b}#channel:${e}`:"",a=(e,t)=>e?t?`https://twitter.com/intent/user?user_id=${t}&screen_name=${e}`:`https://twitter.com/${e}/`:"",o=(e,t)=>{if(!e)return null;if(!t)return e.getAttribute("data-tweet-id");const n=e.querySelector("a[href*='/status/']");if(!n||!n.href)return null;const r=n.href.match(/status\/(\d+)/);return!r||r.length<2?null:r[1]},i=e=>{const t=new URLSearchParams(e.search);if(!t)return"";const n=t.get("screen_name");if(n)return unescape(n);if(!e.pathname)return"";const r=e.pathname.split("/").filter(e=>e);return r&&0!==r.length?r[0]:""},u=e=>{if(["/","/about","/home","/login","/logout","/messages","/privacy","/search","/settings","/tos"].includes(e))return!0;const t=["/account/","/compose/","/explore","/hashtag/","/i/","/messages/","/notifications","/settings/","/who_to_follow/","/?login","/?logout"];for(const n of t)if(e.startsWith(n))return!0;return!1}},function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(1);const s=["authorization","x-csrf-token","x-guest-token"],a=/[; ]_twitter_sess=([^\s;]*)/;let o=null,i={};const u=e=>{if(!e)return null;const t=e.match(a);return t?unescape(t[1]):null},c=()=>i,d=e=>{if(!e)return!1;let t={};for(const n of e)if("Cookie"===n.name){const e=u(n.value);e!==o&&(o=e,t={})}else(s.includes(n.name)||n.name.startsWith("x-twitter-"))&&(t[n.name]=n.value);return!r.a(i,t)&&(i=t,!0)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n(0),s=n(11),a=n(2);const o=(e,t)=>new Promise((n,o)=>{if(!e||!t)return void o(new Error("Invalid parameters"));const i=Object(s.a)();0!==Object.keys(i).length?r.b?(r.b.postMessage({type:"OnAPIRequest",mediaType:a.b,data:{name:e,url:t,init:{credentials:"include",headers:{...i},referrerPolicy:"no-referrer-when-downgrade",method:"GET",redirect:"follow"}}}),r.b.onMessage.addListener((function t(s){if(r.b){if(!s||!s.data)return r.b.onMessage.removeListener(t),void o(new Error("Invalid message"));if("OnAPIResponse"===s.type){if(!s.data.name||!s.data.response&&!s.data.error)return r.b.onMessage.removeListener(t),void o(new Error("Invalid message"));if(s.data.name===e)return r.b.onMessage.removeListener(t),s.data.error?void o(new Error(s.data.error)):void n(s.data.response)}}else o(new Error("Invalid port"))}))):o(new Error("Invalid port")):o(new Error("Missing auth headers"))}),i=async e=>{if(!e)return Promise.reject(new Error("Invalid parameters"));return o("GetTweetDetails","https://api.twitter.com/1.1/statuses/show.json?id="+e)},u=async e=>{if(!e)return Promise.reject(new Error("Invalid parameters"));return o("GetUserDetails","https://api.twitter.com/1.1/users/show.json?screen_name="+e)}},,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(6),a=n(9),o=n(11),i=n(12),u=n(2),c=n(10);const d=()=>{const e=new URL(location.href);c.e(e.pathname)?(()=>{const e="https://"+u.a,t=u.a,n=u.a;r.b&&r.b.postMessage({type:"SavePublisherVisit",mediaType:"",data:{url:e,publisherKey:t,publisherName:n,mediaKey:"",favIconUrl:""}})})():(e=>{const t=c.c(e);t&&i.b(t).then(e=>{const n=e.id_str,s=c.b(n),a=t,o=e.profile_image_url_https.replace("_normal",""),i=c.a(t,n);r.b&&r.b.postMessage({type:"SavePublisherVisit",mediaType:u.b,data:{url:i,publisherKey:s,publisherName:a,mediaKey:"",favIconUrl:o}})}).catch(e=>{console.error(`Failed to fetch user details for ${t}: ${e.message}`)})})(e)},l=(e,t)=>{e===u.b&&t&&t.requestHeaders&&o.b(t.requestHeaders)&&d()},f=e=>{e&&e.url&&d()};chrome.extension.inIncognitoContext||(Object(r.a)(),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&d()})),a.b(u.b,u.d,u.c,l),s.a(u.b,f),console.info("Greaselion script loaded: twitterBase.ts"))}]);