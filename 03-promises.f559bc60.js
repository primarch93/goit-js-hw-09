function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("7Y9D8");const l={form:document.querySelector(".form")},f={};let a=0;function u(o,t){var n,r;(n=o,r=t,new Promise(((e,o)=>{const t=Math.random()>.3;setTimeout((()=>{t?e({position:n,delay:r}):o({position:n,delay:r})}),r)}))).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}l.form.addEventListener("submit",(function(e){e.preventDefault(),function(e){new FormData(e.target).forEach(((e,o)=>{f[o]=Number(e)}))}(e),function({delay:e,step:o,amount:t}){if(a+=1,a>=t)return;let n=e;for(let e=1;e<=t;e+=1)u(e,n),n+=o}(f)}));
//# sourceMappingURL=03-promises.f559bc60.js.map
