function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("eWCmQ");const u={form:document.querySelector(".form"),inputStep:document.querySelector('input[name = "step"]'),inputDelay:document.querySelector('input[name = "delay"]'),inputAmount:document.querySelector('input[name = "amount"]')};u.form.addEventListener("submit",(function(n){n.preventDefault(),delay=Number(u.inputDelay.value),position=0;for(let n=0;n<=u.inputAmount.value-1;n+=1)position+=1,t(position,delay).then((({position:n,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(r).Notify.warning(`❌ Rejected promise ${n} in ${t}ms`)})),delay+=Number(u.inputStep.value);function t(e,n){return new Promise(((t,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}}));
//# sourceMappingURL=03-promises.a52d1a05.js.map