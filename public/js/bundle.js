"use strict";function createCommonjsModule(t,e){return e={exports:{}},t(e,e.exports),e.exports}var commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},mithril=createCommonjsModule(function(t){!function(){function e(t,e,n,r,i,o){return{tag:t,key:e,attrs:n,children:r,text:i,dom:o,domSize:void 0,state:void 0,_state:void 0,events:void 0,instance:void 0,skip:!1}}function n(t){for(var e,n="div",r=[],i={};e=l.exec(t);){var o=e[1],s=e[2];if(""===o&&""!==s)n=s;else if("#"===o)i.id=s;else if("."===o)r.push(s);else if("["===e[3][0]){var u=e[6];u&&(u=u.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===e[4]?r.push(u):i[e[4]]=u||!0}}return r.length>0&&(i.className=r.join(" ")),a[t]={tag:n,attrs:i}}function r(t,n,r){var i,o,l=!1,a=n.className||n.class;for(var u in t.attrs)s.call(t.attrs,u)&&(n[u]=t.attrs[u]);void 0!==a&&(void 0!==n.class&&(n.class=void 0,n.className=a),null!=t.attrs.className&&(n.className=t.attrs.className+" "+a));for(var u in n)if(s.call(n,u)&&"key"!==u){l=!0;break}return Array.isArray(r)&&1===r.length&&null!=r[0]&&"#"===r[0].tag?o=r[0].children:i=r,e(t.tag,n.key,l?n:void 0,i,o)}function i(t){var i,o=arguments,l=arguments[1],s=2;if(null==t||"string"!=typeof t&&"function"!=typeof t&&"function"!=typeof t.view)throw Error("The selector must be either a string or a component.");if("string"==typeof t)var u=a[t]||n(t);if(null==l?l={}:("object"!=typeof l||null!=l.tag||Array.isArray(l))&&(l={},s=1),arguments.length===s+1)i=arguments[s],Array.isArray(i)||(i=[i]);else for(i=[];s<arguments.length;)i.push(o[s++]);var c=e.normalizeChildren(i);return"string"==typeof t?r(u,l,c):e(t,l.key,l,c)}function o(t){var e=0,n=null,r="function"==typeof requestAnimationFrame?requestAnimationFrame:setTimeout;return function(){var i=Date.now();0===e||i-e>=16?(e=i,t()):null===n&&(n=r(function(){n=null,t(),e=Date.now()},16-(i-e)))}}e.normalize=function(t){return Array.isArray(t)?e("[",void 0,void 0,e.normalizeChildren(t),void 0,void 0):null!=t&&"object"!=typeof t?e("#",void 0,void 0,!1===t?"":t,void 0,void 0):t},e.normalizeChildren=function(t){for(var n=0;n<t.length;n++)t[n]=e.normalize(t[n]);return t};var l=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,a={},s={}.hasOwnProperty;i.trust=function(t){return null==t&&(t=""),e("<",void 0,void 0,t,void 0,void 0)},i.fragment=function(t,n){return e("[",t.key,t,e.normalizeChildren(n),void 0,void 0)};var u=i;if((c=function(t){function e(t,e){return function l(c){var f;try{if(!e||null==c||"object"!=typeof c&&"function"!=typeof c||"function"!=typeof(f=c.then))u(function(){e||0!==t.length||console.error("Possible unhandled promise rejection:",c);for(var n=0;n<t.length;n++)t[n](c);i.length=0,o.length=0,s.state=e,s.retry=function(){l(c)}});else{if(c===r)throw new TypeError("Promise can't be resolved w/ itself");n(f.bind(c))}}catch(t){a(t)}}}function n(t){function e(t){return function(e){n++>0||t(e)}}var n=0,r=e(a);try{t(e(l),r)}catch(t){r(t)}}if(!(this instanceof c))throw new Error("Promise must be called with `new`");if("function"!=typeof t)throw new TypeError("executor must be a function");var r=this,i=[],o=[],l=e(i,!0),a=e(o,!1),s=r._instance={resolvers:i,rejectors:o},u="function"==typeof setImmediate?setImmediate:setTimeout;n(t)}).prototype.then=function(t,e){function n(t,e,n,l){e.push(function(e){if("function"!=typeof t)n(e);else try{r(t(e))}catch(t){i&&i(t)}}),"function"==typeof o.retry&&l===o.state&&o.retry()}var r,i,o=this._instance,l=new c(function(t,e){r=t,i=e});return n(t,o.resolvers,r,!0),n(e,o.rejectors,i,!1),l},c.prototype.catch=function(t){return this.then(null,t)},c.resolve=function(t){return t instanceof c?t:new c(function(e){e(t)})},c.reject=function(t){return new c(function(e,n){n(t)})},c.all=function(t){return new c(function(e,n){var r=t.length,i=0,o=[];if(0===t.length)e([]);else for(var l=0;l<t.length;l++)!function(l){function a(t){i++,o[l]=t,i===r&&e(o)}null==t[l]||"object"!=typeof t[l]&&"function"!=typeof t[l]||"function"!=typeof t[l].then?a(t[l]):t[l].then(a,n)}(l)})},c.race=function(t){return new c(function(e,n){for(var r=0;r<t.length;r++)t[r].then(e,n)})},"undefined"!=typeof window){void 0===window.Promise&&(window.Promise=c);c=window.Promise}else if(void 0!==commonjsGlobal){void 0===commonjsGlobal.Promise&&(commonjsGlobal.Promise=c);var c=commonjsGlobal.Promise}var f=function(t){function e(t,r){if(Array.isArray(r))for(i=0;i<r.length;i++)e(t+"["+i+"]",r[i]);else if("[object Object]"===Object.prototype.toString.call(r))for(var i in r)e(t+"["+i+"]",r[i]);else n.push(encodeURIComponent(t)+(null!=r&&""!==r?"="+encodeURIComponent(r):""))}if("[object Object]"!==Object.prototype.toString.call(t))return"";var n=[];for(var r in t)e(r,t[r]);return n.join("&")},d=new RegExp("^file://","i"),m=function(t,e){function n(t){h=t}function r(){function t(){0==--e&&"function"==typeof h&&h()}var e=0;return function n(r){var i=r.then;return r.then=function(){e++;var o=i.apply(r,arguments);return o.then(t,function(n){if(t(),0===e)throw n}),n(o)},r}}function i(t,e){if("string"==typeof t){var n=t;null==(t=e||{}).url&&(t.url=n)}return t}function o(n,o){var l=r();n=i(n,o);var f=new e(function(e,r){null==n.method&&(n.method="GET"),n.method=n.method.toUpperCase();var i="GET"!==n.method&&"TRACE"!==n.method&&("boolean"!=typeof n.useBody||n.useBody);"function"!=typeof n.serialize&&(n.serialize="undefined"!=typeof FormData&&n.data instanceof FormData?function(t){return t}:JSON.stringify),"function"!=typeof n.deserialize&&(n.deserialize=u),"function"!=typeof n.extract&&(n.extract=c),n.url=a(n.url,n.data),i?n.data=n.serialize(n.data):n.url=s(n.url,n.data);var o=new t.XMLHttpRequest,l=!1,f=o.abort;o.abort=function(){l=!0,f.call(o)},o.open(n.method,n.url,"boolean"!=typeof n.async||n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),n.serialize===JSON.stringify&&i&&o.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.deserialize===u&&o.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(o.withCredentials=n.withCredentials);for(var h in n.headers)({}).hasOwnProperty.call(n.headers,h)&&o.setRequestHeader(h,n.headers[h]);"function"==typeof n.config&&(o=n.config(o,n)||o),o.onreadystatechange=function(){if(!l&&4===o.readyState)try{var t=n.extract!==c?n.extract(o,n):n.deserialize(n.extract(o,n));if(o.status>=200&&o.status<300||304===o.status||d.test(n.url))e(m(n.type,t));else{var i=new Error(o.responseText);for(var a in t)i[a]=t[a];r(i)}}catch(t){r(t)}},i&&null!=n.data?o.send(n.data):o.send()});return!0===n.background?f:l(f)}function l(n,o){var l=r();n=i(n,o);var u=new e(function(e,r){var i=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+v++,o=t.document.createElement("script");t[i]=function(r){o.parentNode.removeChild(o),e(m(n.type,r)),delete t[i]},o.onerror=function(){o.parentNode.removeChild(o),r(new Error("JSONP request failed")),delete t[i]},null==n.data&&(n.data={}),n.url=a(n.url,n.data),n.data[n.callbackKey||"callback"]=i,o.src=s(n.url,n.data),t.document.documentElement.appendChild(o)});return!0===n.background?u:l(u)}function a(t,e){if(null==e)return t;for(var n=t.match(/:[^\/]+/gi)||[],r=0;r<n.length;r++){var i=n[r].slice(1);null!=e[i]&&(t=t.replace(n[r],e[i]))}return t}function s(t,e){var n=f(e);return""!==n&&(t+=(t.indexOf("?")<0?"?":"&")+n),t}function u(t){try{return""!==t?JSON.parse(t):null}catch(e){throw new Error(t)}}function c(t){return t.responseText}function m(t,e){if("function"==typeof t){if(!Array.isArray(e))return new t(e);for(var n=0;n<e.length;n++)e[n]=new t(e[n])}return e}var h,v=0;return{request:o,jsonp:l,setCompletionCallback:n}}(window,c),h=function(t){function n(t){return G=t}function r(t,e,n,r,o,l,a){for(var s=n;s<r;s++){var u=e[s];null!=u&&i(t,u,o,a,l)}}function i(t,e,n,r,i){var u=e.tag;if("string"!=typeof u)return c(t,e,n,r,i);switch(e.state={},null!=e.attrs&&R(e.attrs,e,n),u){case"#":return o(t,e,i);case"<":return l(t,e,i);case"[":return a(t,e,n,r,i);default:return s(t,e,n,r,i)}}function o(t,e,n){return e.dom=H.createTextNode(e.children),k(t,e.dom,n),e.dom}function l(t,e,n){var r={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}[(e.children.match(/^\s*?<(\w+)/im)||[])[1]]||"div",i=H.createElement(r);i.innerHTML=e.children,e.dom=i.firstChild,e.domSize=i.childNodes.length;for(var o,l=H.createDocumentFragment();o=i.firstChild;)l.appendChild(o);return k(t,l,n),l}function a(t,e,n,i,o){var l=H.createDocumentFragment();if(null!=e.children){var a=e.children;r(l,a,0,a.length,n,null,i)}return e.dom=l.firstChild,e.domSize=l.childNodes.length,k(t,l,o),l}function s(t,n,i,o,l){var a=n.tag;switch(n.tag){case"svg":o="http://www.w3.org/2000/svg";break;case"math":o="http://www.w3.org/1998/Math/MathML"}var s=n.attrs,u=s&&s.is,c=o?u?H.createElementNS(o,a,{is:u}):H.createElementNS(o,a):u?H.createElement(a,{is:u}):H.createElement(a);if(n.dom=c,null!=s&&j(n,s,o),k(t,c,l),null!=n.attrs&&null!=n.attrs.contenteditable)C(n);else if(null!=n.text&&(""!==n.text?c.textContent=n.text:n.children=[e("#",void 0,void 0,n.text,void 0,void 0)]),null!=n.children){var f=n.children;r(c,f,0,f.length,i,null,o),M(n)}return c}function u(t,n){var r;if("function"==typeof t.tag.view){if(t.state=Object.create(t.tag),null!=(r=t.state.view).$$reentrantLock$$)return F;r.$$reentrantLock$$=!0}else{if(t.state=void 0,null!=(r=t.tag).$$reentrantLock$$)return F;r.$$reentrantLock$$=!0,t.state=null!=t.tag.prototype&&"function"==typeof t.tag.prototype.view?new t.tag(t):t.tag(t)}if(t._state=t.state,null!=t.attrs&&R(t.attrs,t,n),R(t._state,t,n),t.instance=e.normalize(t._state.view.call(t.state,t)),t.instance===t)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null}function c(t,e,n,r,o){if(u(e,n),null!=e.instance){var l=i(t,e.instance,n,r,o);return e.dom=e.instance.dom,e.domSize=null!=e.dom?e.instance.domSize:0,k(t,l,o),l}return e.domSize=0,F}function f(t,e,n,o,l,a,s){if(e!==n&&(null!=e||null!=n))if(null==e)r(t,n,0,n.length,l,a,void 0);else if(null==n)N(e,0,e.length,n);else{if(e.length===n.length){for(var u=!1,c=0;c<n.length;c++)if(null!=n[c]&&null!=e[c]){u=null==n[c].key&&null==e[c].key;break}if(u){for(c=0;c<e.length;c++)e[c]!==n[c]&&(null==e[c]&&null!=n[c]?i(t,n[c],l,s,x(e,c+1,a)):null==n[c]?N(e,c,c+1,n):d(t,e[c],n[c],l,x(e,c+1,a),o,s));return}}if(o=o||w(e,n)){var f=e.pool;e=e.concat(e.pool)}for(var m,h=0,v=0,p=e.length-1,g=n.length-1;p>=h&&g>=v;)if((C=e[h])!==(S=n[v])||o)if(null==C)h++;else if(null==S)v++;else if(C.key===S.key){j=null!=f&&h>=e.length-f.length||null==f&&o;v++,d(t,C,S,l,x(e,++h,a),j,s),o&&C.tag===S.tag&&k(t,b(C),a)}else if((C=e[p])!==S||o)if(null==C)p--;else if(null==S)v++;else{if(C.key!==S.key)break;j=null!=f&&p>=e.length-f.length||null==f&&o;d(t,C,S,l,x(e,p+1,a),j,s),(o||v<g)&&k(t,b(C),x(e,h,a)),p--,v++}else p--,v++;else h++,v++;for(;p>=h&&g>=v;){var C=e[p],S=n[g];if(C!==S||o)if(null==C)p--;else if(null==S)g--;else if(C.key===S.key){j=null!=f&&p>=e.length-f.length||null==f&&o;d(t,C,S,l,x(e,p+1,a),j,s),o&&C.tag===S.tag&&k(t,b(C),a),null!=C.dom&&(a=C.dom),p--,g--}else{if(m||(m=y(e,p)),null!=S){var E=m[S.key];if(null!=E){var z=e[E],j=null!=f&&E>=e.length-f.length||null==f&&o;d(t,z,S,l,x(e,p+1,a),o,s),k(t,b(z),a),e[E].skip=!0,null!=z.dom&&(a=z.dom)}else a=i(t,S,l,void 0,a)}g--}else p--,g--;if(g<v)break}r(t,n,v,g+1,l,a,s),N(e,h,p+1,n)}}function d(t,e,n,r,o,l,a){var s=e.tag;if(s===n.tag){if(n.state=e.state,n._state=e._state,n.events=e.events,!l&&V(n,e))return;if("string"==typeof s)switch(null!=n.attrs&&(l?(n.state={},R(n.attrs,n,r)):q(n.attrs,n,r)),s){case"#":m(e,n);break;case"<":h(t,e,n,o);break;case"[":v(t,e,n,l,r,o,a);break;default:p(e,n,l,r,a)}else g(t,e,n,r,o,l,a)}else S(e,null),i(t,n,r,a,o)}function m(t,e){t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children),e.dom=t.dom}function h(t,e,n,r){e.children!==n.children?(b(e),l(t,n,r)):(n.dom=e.dom,n.domSize=e.domSize)}function v(t,e,n,r,i,o,l){f(t,e.children,n.children,r,i,o,l);var a=0,s=n.children;if(n.dom=null,null!=s){for(var u=0;u<s.length;u++){var c=s[u];null!=c&&null!=c.dom&&(null==n.dom&&(n.dom=c.dom),a+=c.domSize||1)}1!==a&&(n.domSize=a)}}function p(t,n,r,i,o){var l=n.dom=t.dom;switch(n.tag){case"svg":o="http://www.w3.org/2000/svg";break;case"math":o="http://www.w3.org/1998/Math/MathML"}"textarea"===n.tag&&(null==n.attrs&&(n.attrs={}),null!=n.text&&(n.attrs.value=n.text,n.text=void 0)),T(n,t.attrs,n.attrs,o),null!=n.attrs&&null!=n.attrs.contenteditable?C(n):null!=t.text&&null!=n.text&&""!==n.text?t.text.toString()!==n.text.toString()&&(t.dom.firstChild.nodeValue=n.text):(null!=t.text&&(t.children=[e("#",void 0,void 0,t.text,void 0,t.dom.firstChild)]),null!=n.text&&(n.children=[e("#",void 0,void 0,n.text,void 0,void 0)]),f(l,t.children,n.children,r,i,null,o))}function g(t,n,r,o,l,a,s){if(a)u(r,o);else{if(r.instance=e.normalize(r._state.view.call(r.state,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");null!=r.attrs&&q(r.attrs,r,o),q(r._state,r,o)}null!=r.instance?(null==n.instance?i(t,r.instance,o,s,l):d(t,n.instance,r.instance,o,l,a,s),r.dom=r.instance.dom,r.domSize=r.instance.domSize):null!=n.instance?(S(n.instance,null),r.dom=void 0,r.domSize=0):(r.dom=n.dom,r.domSize=n.domSize)}function w(t,e){if(null!=t.pool&&Math.abs(t.pool.length-e.length)<=Math.abs(t.length-e.length)){var n=t[0]&&t[0].children&&t[0].children.length||0,r=t.pool[0]&&t.pool[0].children&&t.pool[0].children.length||0,i=e[0]&&e[0].children&&e[0].children.length||0;if(Math.abs(r-i)<=Math.abs(n-i))return!0}return!1}function y(t,e){for(var n={},r=0,r=0;r<e;r++){var i=t[r];if(null!=i){var o=i.key;null!=o&&(n[o]=r)}}return n}function b(t){var e=t.domSize;if(null!=e||null==t.dom){var n=H.createDocumentFragment();if(e>0){for(var r=t.dom;--e;)n.appendChild(r.nextSibling);n.insertBefore(r,n.firstChild)}return n}return t.dom}function x(t,e,n){for(;e<t.length;e++)if(null!=t[e]&&null!=t[e].dom)return t[e].dom;return n}function k(t,e,n){n&&n.parentNode?t.insertBefore(e,n):t.appendChild(e)}function C(t){var e=t.children;if(null!=e&&1===e.length&&"<"===e[0].tag){var n=e[0].children;t.dom.innerHTML!==n&&(t.dom.innerHTML=n)}else if(null!=t.text||null!=e&&0!==e.length)throw new Error("Child node of a contenteditable must be trusted")}function N(t,e,n,r){for(var i=e;i<n;i++){var o=t[i];null!=o&&(o.skip?o.skip=!1:S(o,r))}}function S(t,e){function n(){if(++i===r&&(z(t),t.dom)){var n=t.domSize||1;if(n>1)for(var o=t.dom;--n;)E(o.nextSibling);E(t.dom),null==e||null!=t.domSize||O(t.attrs)||"string"!=typeof t.tag||(e.pool?e.pool.push(t):e.pool=[t])}}var r=1,i=0;if(t.attrs&&"function"==typeof t.attrs.onbeforeremove&&null!=(o=t.attrs.onbeforeremove.call(t.state,t))&&"function"==typeof o.then&&(r++,o.then(n,n)),"string"!=typeof t.tag&&"function"==typeof t._state.onbeforeremove){var o=t._state.onbeforeremove.call(t.state,t);null!=o&&"function"==typeof o.then&&(r++,o.then(n,n))}n()}function E(t){var e=t.parentNode;null!=e&&e.removeChild(t)}function z(t){if(t.attrs&&"function"==typeof t.attrs.onremove&&t.attrs.onremove.call(t.state,t),"string"!=typeof t.tag&&"function"==typeof t._state.onremove&&t._state.onremove.call(t.state,t),null!=t.instance)z(t.instance);else{var e=t.children;if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];null!=r&&z(r)}}}function j(t,e,n){for(var r in e)A(t,r,null,e[r],n)}function A(t,e,n,r,i){var o=t.dom;if("key"!==e&&"is"!==e&&(n!==r||L(t,e)||"object"==typeof r)&&void 0!==r&&!I(e)){var l=e.indexOf(":");if(l>-1&&"xlink"===e.substr(0,l))o.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(l+1),r);else if("o"===e[0]&&"n"===e[1]&&"function"==typeof r)P(t,e,r);else if("style"===e)U(o,n,r);else if(e in o&&!_(e)&&void 0===i&&!$(t)){if("input"===t.tag&&"value"===e&&t.dom.value==r&&t.dom===H.activeElement)return;if("select"===t.tag&&"value"===e&&t.dom.value==r&&t.dom===H.activeElement)return;if("option"===t.tag&&"value"===e&&t.dom.value==r)return;if("input"===t.tag&&"type"===e)return void o.setAttribute(e,r);o[e]=r}else"boolean"==typeof r?r?o.setAttribute(e,""):o.removeAttribute(e):o.setAttribute("className"===e?"class":e,r)}}function M(t){var e=t.attrs;"select"===t.tag&&null!=e&&("value"in e&&A(t,"value",null,e.value,void 0),"selectedIndex"in e&&A(t,"selectedIndex",null,e.selectedIndex,void 0))}function T(t,e,n,r){if(null!=n)for(var i in n)A(t,i,e&&e[i],n[i],r);if(null!=e)for(var i in e)null!=n&&i in n||("className"===i&&(i="class"),"o"!==i[0]||"n"!==i[1]||I(i)?"key"!==i&&t.dom.removeAttribute(i):P(t,i,void 0))}function L(t,e){return"value"===e||"checked"===e||"selectedIndex"===e||"selected"===e&&t.dom===H.activeElement}function I(t){return"oninit"===t||"oncreate"===t||"onupdate"===t||"onremove"===t||"onbeforeremove"===t||"onbeforeupdate"===t}function _(t){return"href"===t||"list"===t||"form"===t||"width"===t||"height"===t}function $(t){return t.attrs.is||t.tag.indexOf("-")>-1}function O(t){return null!=t&&(t.oncreate||t.onupdate||t.onbeforeremove||t.onremove)}function U(t,e,n){if(e===n&&(t.style.cssText="",e=null),null==n)t.style.cssText="";else if("string"==typeof n)t.style.cssText=n;else{"string"==typeof e&&(t.style.cssText="");for(var r in n)t.style[r]=n[r];if(null!=e&&"string"!=typeof e)for(var r in e)r in n||(t.style[r]="")}}function P(t,e,n){var r=t.dom,i="function"!=typeof G?n:function(t){var e=n.call(r,t);return G.call(r,t),e};if(e in r)r[e]="function"==typeof n?i:null;else{var o=e.slice(2);if(void 0===t.events&&(t.events={}),t.events[e]===i)return;null!=t.events[e]&&r.removeEventListener(o,t.events[e],!1),"function"==typeof n&&(t.events[e]=i,r.addEventListener(o,t.events[e],!1))}}function R(t,e,n){"function"==typeof t.oninit&&t.oninit.call(e.state,e),"function"==typeof t.oncreate&&n.push(t.oncreate.bind(e.state,e))}function q(t,e,n){"function"==typeof t.onupdate&&n.push(t.onupdate.bind(e.state,e))}function V(t,e){var n,r;return null!=t.attrs&&"function"==typeof t.attrs.onbeforeupdate&&(n=t.attrs.onbeforeupdate.call(t.state,t,e)),"string"!=typeof t.tag&&"function"==typeof t._state.onbeforeupdate&&(r=t._state.onbeforeupdate.call(t.state,t,e)),!(void 0===n&&void 0===r||n||r)&&(t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,!0)}function D(t,n){if(!t)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var r=[],i=H.activeElement;null==t.vnodes&&(t.textContent=""),Array.isArray(n)||(n=[n]),f(t,t.vnodes,e.normalizeChildren(n),!1,r,null,void 0),t.vnodes=n;for(var o=0;o<r.length;o++)r[o]();H.activeElement!==i&&i.focus()}var G,H=t.document,F=H.createDocumentFragment();return{render:D,setEventCallback:n}},v=function(t){function e(t,e){n(t),l.push(t,o(e))}function n(t){var e=l.indexOf(t);e>-1&&l.splice(e,2)}function r(){for(var t=1;t<l.length;t+=2)l[t]()}var i=h(t);i.setEventCallback(function(t){!1!==t.redraw&&r()});var l=[];return{subscribe:e,unsubscribe:n,redraw:r,render:i.render}}(window);m.setCompletionCallback(v.redraw);u.mount=function(t){return function(n,r){if(null===r)return t.render(n,[]),void t.unsubscribe(n);if(null==r.view&&"function"!=typeof r)throw new Error("m.mount(element, component) expects a component, not a vnode");var i=function(){t.render(n,e(r))};t.subscribe(n,i),t.redraw()}}(v);var p=c,g=function(t){if(""===t||null==t)return{};"?"===t.charAt(0)&&(t=t.slice(1));for(var e=t.split("&"),n={},r={},i=0;i<e.length;i++){var o=e[i].split("="),l=decodeURIComponent(o[0]),a=2===o.length?decodeURIComponent(o[1]):"";"true"===a?a=!0:"false"===a&&(a=!1);var s=l.split(/\]\[?|\[/),u=n;l.indexOf("[")>-1&&s.pop();for(var c=0;c<s.length;c++){var f=s[c],d=s[c+1],m=""==d||!isNaN(parseInt(d,10)),h=c===s.length-1;""===f&&(null==r[l=s.slice(0,c).join()]&&(r[l]=0),f=r[l]++),null==u[f]&&(u[f]=h?a:m?[]:{}),u=u[f]}}return n},w=function(t){function e(e){var n=t.location[e].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);return"pathname"===e&&"/"!==n[0]&&(n="/"+n),n}function n(t){return function(){null==i&&(i=l(function(){i=null,t()}))}}function r(t,e,n){var r=t.indexOf("?"),i=t.indexOf("#"),o=r>-1?r:i>-1?i:t.length;if(r>-1){var l=i>-1?i:t.length,a=g(t.slice(r+1,l));for(var s in a)e[s]=a[s]}if(i>-1){var u=g(t.slice(i+1));for(var s in u)n[s]=u[s]}return t.slice(0,o)}var i,o="function"==typeof t.history.pushState,l="function"==typeof setImmediate?setImmediate:setTimeout,a={prefix:"#!"};return a.getPath=function(){switch(a.prefix.charAt(0)){case"#":return e("hash").slice(a.prefix.length);case"?":return e("search").slice(a.prefix.length)+e("hash");default:return e("pathname").slice(a.prefix.length)+e("search")+e("hash")}},a.setPath=function(e,n,i){var l={},s={};if(e=r(e,l,s),null!=n){for(var u in n)l[u]=n[u];e=e.replace(/:([^\/]+)/g,function(t,e){return delete l[e],n[e]})}var c=f(l);c&&(e+="?"+c);var d=f(s);if(d&&(e+="#"+d),o){var m=i?i.state:null,h=i?i.title:null;t.onpopstate(),i&&i.replace?t.history.replaceState(m,h,a.prefix+e):t.history.pushState(m,h,a.prefix+e)}else t.location.href=a.prefix+e},a.defineRoutes=function(e,i,l){function s(){var n=a.getPath(),o={},s=r(n,o,o),u=t.history.state;if(null!=u)for(var c in u)o[c]=u[c];for(var f in e){var d=new RegExp("^"+f.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(d.test(s))return void s.replace(d,function(){for(var t=f.match(/:[^\/]+/g)||[],r=[].slice.call(arguments,1,-2),l=0;l<t.length;l++)o[t[l].replace(/:|\./g,"")]=decodeURIComponent(r[l]);i(e[f],o,n,f)})}l(n,o)}o?t.onpopstate=n(s):"#"===a.prefix.charAt(0)&&(t.onhashchange=s),s()},a};u.route=function(t,n){var r,i,o,l,a,s=w(t),u=function(t){return t},c=function(t,c,f){if(null==t)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var d=function(){null!=r&&n.render(t,r(e(i,o.key,o)))},m=function(t){if(t===c)throw new Error("Could not resolve default route "+c);s.setPath(c,null,{replace:!0})};s.defineRoutes(f,function(t,e,n){var s=a=function(t,c){s===a&&(i=null==c||"function"!=typeof c.view&&"function"!=typeof c?"div":c,o=e,l=n,a=null,r=(t.render||u).bind(t),d())};t.view||"function"==typeof t?s({},t):t.onmatch?p.resolve(t.onmatch(e,n)).then(function(e){s(t,e)},m):s(t,"div")},m),n.subscribe(t,d)};return c.set=function(t,e,n){null!=a&&(n={replace:!0}),a=null,s.setPath(t,e,n)},c.get=function(){return l},c.prefix=function(t){s.prefix=t},c.link=function(t){t.dom.setAttribute("href",s.prefix+t.attrs.href),t.dom.onclick=function(t){if(!(t.ctrlKey||t.metaKey||t.shiftKey||2===t.which)){t.preventDefault(),t.redraw=!1;var e=this.getAttribute("href");0===e.indexOf(s.prefix)&&(e=e.slice(s.prefix.length)),c.set(e,void 0,void 0)}}},c.param=function(t){return void 0!==o&&void 0!==t?o[t]:o},c}(window,v),u.withAttr=function(t,e,n){return function(r){e.call(n||this,t in r.currentTarget?r.currentTarget[t]:r.currentTarget.getAttribute(t))}};var y=h(window);u.render=y.render,u.redraw=v.redraw,u.request=m.request,u.jsonp=m.jsonp,u.parseQueryString=g,u.buildQueryString=f,u.version="1.1.1",u.vnode=e,t.exports=u}()}),Nav=[{name:"Top",route:"/top/1"},{name:"New",route:"/new/1"},{name:"Show",route:"/show/1"},{name:"Ask",route:"/ask/1"},{name:"Jobs",route:"/jobs/1"}],Header={view:function(t){return[mithril("nav.nav.has-shadow",[mithril(".nav-left",[mithril("a.nav-item",{href:"/top/1",oncreate:mithril.route.link},[mithril("img.logo",{src:"./images/logo.svg",alt:"Mithril Logo"})])]),mithril(".nav-toggle",[mithril("span",""),mithril("span",""),mithril("span","")]),mithril(".nav-right.nav-menu",[Nav.map(function(t){return mithril("a.nav-item.is-tab",{href:t.route,class:mithril.route.get()===t.route?"is-active":"",oncreate:mithril.route.link},t.name)})])])]}},Layout={view:function(t){return mithril(".layout",[mithril(Header),mithril("section.section",t.children)])}},apiUrl="https://node-hnapi.herokuapp.com",NewsModel={loading:{list:!0,current:!0},list:[],current:{},load:function(t){var e=this,n=t.key||1,r=t.listType||"news",i=t.id||void 0;i?(this.loading.current=!0,mithril.request({method:"GET",url:apiUrl+"/item/"+i}).then(function(t){e.current=t,e.loading.current=!1})):(this.loading.list=!0,mithril.request({method:"GET",url:apiUrl+"/"+r+"?page="+n}).then(function(t){e.list=t,e.loading.list=!1}))}},NewsItem={view:function(t){var e=t.attrs.story,n=t.attrs.idx;return mithril("div.box",[mithril(".media",[mithril(".media-left",[mithril(".index",n+1)]),mithril(".media-content",[mithril(".story",{story:e},[mithril("a[href="+e.url+"]",e.title),mithril(".detail",[mithril("span",e.points+" points by "),mithril("a",{href:"/user/"+e.user,oncreate:mithril.route.link},e.user),mithril("span"," "+e.time_ago+" | "),mithril("a",{href:"/item/"+e.id,oncreate:mithril.route.link},e.comments_count+" comments")])])])])])}},getIndex=function(t,e){return e+30+(t-1)},NewsList={view:function(t){var e=t.attrs.start,n=NewsModel.list;return mithril(".news-list",[n.map(function(t,n){return mithril(NewsItem,{story:t,idx:getIndex(e,n)})})])}},LoadingIcon={view:function(t){return mithril(".loading-icon.has-text-centered",[mithril("img.loading",{src:"/images/loading.svg"})])}},pageToListType={top:"news",new:"newest",jobs:"jobs",ask:"ask",show:"show"},NewsView={oninit:function(t){var e=t.attrs,n=e.key,r=e.name;t.state.page=n,t.state.name=r;var i=pageToListType[r];NewsModel.load({listType:i,key:n})},view:function(t){var e=NewsModel.loading.list,n=t.state,r=n.name,i=n.page;return e?mithril(LoadingIcon):mithril("div.news",[mithril(NewsList,{start:i}),mithril("div.pager",[mithril("a",{href:"/"+r+"/"+ ++i,oncreate:mithril.route.link},"More...")])])}},childComments=function(t,e){if(t.length>0)return mithril("div.hide",[mithril("span.hide",{onclick:e},"[-]"),mithril("ul.comment-list",[t.map(function(t){return mithril(CommentItem,{comment:t,isChild:!0})})])])},showMore=function(t,e){return mithril("span.show-more",{onclick:e},"[+] "+t.comments.length+" replies")},CommentItem={showComments:!0,toggleShowComments:function(){this.showComments=!this.showComments},view:function(t){var e=this,n=t.attrs.comment;t.attrs.isChild;return mithril("section.section",[mithril("header",[mithril("a",{href:"/user/"+n.user,oncreate:mithril.route.link},n.user),mithril("span"," "+n.time_ago)]),mithril("div.content",mithril.trust(n.content)),this.showComments?childComments(n.comments,function(){return e.toggleShowComments()}):showMore(n,function(){return e.toggleShowComments()})])}},comments=function(t){return t.length>0?t.map(function(t){return mithril(CommentItem,{comment:t})}):mithril("div.no-comments","No comments yet")},ItemView={oninit:function(t){NewsModel.load({id:t.attrs.id})},view:function(t){var e=NewsModel.current;return NewsModel.loading.current?mithril(LoadingIcon):mithril("article.article",[mithril("a",{href:e.url},e.title),mithril("div.detail",[mithril("span",e.points+" point by "),mithril("a",{href:"/user/"+e.user,oncreate:mithril.route.link},e.user),mithril("span"," "+e.time_ago+" | "),mithril("span",e.comments_count+" comments")]),mithril("div.comment",e.comments&&comments(e.comments))])}},UserModel={loading:{current:!0},current:{},load:function(t){var e=this;this.loading.current=!0,console.log(t),mithril.request({method:"GET",url:apiUrl+"/user/"+t}).then(function(t){e.current=t,e.loading.current=!1})}},UserView={oninit:function(t){UserModel.load(t.attrs.name)},view:function(t){var e=UserModel.current||void 0,n=UserModel.loading.current;return e?n?mithril(LoadingIcon):[mithril("section.user",[mithril("h2","User: "+e.id),mithril("div","Created: "+e.created),mithril("div","Karma: "+e.karma),mithril("div",mithril.trust(e.about)),mithril("div",[mithril("a",{href:"https://news.ycombinator.com/submitted?id="+e.id},"submissions"),mithril("span"," | "),mithril("a",{href:"https://news.ycombinator.com/threads?id="+e.id},"comments"),mithril("span"," | "),mithril("a",{href:"https://news.ycombinator.com/favorites?id="+e.id},"favorites")])])]:"No user"}},routes={"/top/:key":{view:function(t){return t.attrs.name="top",mithril(Layout,mithril(NewsView,t.attrs))}},"/new/:key":{view:function(t){return t.attrs.name="new",mithril(Layout,mithril(NewsView,t.attrs))}},"/show/:key":{view:function(t){return t.attrs.name="show",mithril(Layout,mithril(NewsView,t.attrs))}},"/ask/:key":{view:function(t){return t.attrs.name="ask",mithril(Layout,mithril(NewsView,t.attrs))}},"/jobs/:key":{view:function(t){return t.attrs.name="jobs",mithril(Layout,mithril(NewsView,t.attrs))}},"/item/:id":{view:function(t){return mithril(Layout,mithril(ItemView,t.attrs))}},"/user/:name":{view:function(t){return mithril(Layout,mithril(UserView,t.attrs))}}},root=document.body;mithril.route(root,"/top/1",routes);
//# sourceMappingURL=bundle.js.map