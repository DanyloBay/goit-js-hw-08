!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=c||d||Function("return this")(),s=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var r,i,u,a,f,l,c=0,d=!1,m=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),d?b(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=u}function h(){var e=y();if(S(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-l);return m?p(n,u-(e-c)):n}(e))}function O(e){return f=void 0,s&&r?b(e):(r=i=void 0,a)}function w(){var e=y(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(h,t),b(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=E(t)||0,g(n)&&(d=!!n.leading,u=(m="maxWait"in n)?v(E(n.maxWait)||0,t):u,s="trailing"in n?!!n.trailing:s),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?a:O(y())},w}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j={formEl:document.querySelector("form"),emailEl:document.querySelector("input"),nameEl:document.querySelector("textarea")},S="feedback-form-state";j.formEl.addEventListener("input",e(t)((function(){var e={email:j.emailEl.value,name:j.nameEl.value};localStorage.setItem(S,JSON.stringify(e))}),500)),j.formEl.addEventListener("submit",(function(e){e.preventDefault(),j.formEl.reset(),localStorage.removeItem(S)}));var h=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(S);h&&(j.emailEl.value=h.email,j.nameEl.value=h.name)}();
//# sourceMappingURL=03-feedback.7a654ae3.js.map
