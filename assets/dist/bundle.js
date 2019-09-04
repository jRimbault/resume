!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function i(t){return null!=t}function r(t,e){const n=document.createElement(t);if(void 0===e)return n;if(e.id&&(n.id=e.id),e.classList&&("string"==typeof e.classList&&""!==e.classList&&n.classList.add(e.classList),e.classList instanceof Array&&n.classList.add(...e.classList.filter(Boolean))),e.textContent&&("string"==typeof e.textContent?n.textContent=e.textContent:e.textContent.html&&(n.innerHTML=e.textContent.html)),e.attributes)for(const[t,i]of Object.entries(e.attributes))n.setAttribute(t,i);return e.children&&n.append(...e.children),n}function s(t,e){const n=t+"-accordion";return r("div",{classList:"accordion",children:[r("input",{id:n,attributes:{name:n+"-checkbox",checked:"",hidden:"",type:"checkbox"}}),r("label",{textContent:t,classList:["accordion-header","c-hand"],attributes:{for:n}}),r("div",{classList:"accordion-body",children:[r("ul",{classList:["menu","menu-nav"],children:e.map(t=>r("li",{classList:"menu-item",children:[r("a",{textContent:t.text,attributes:{href:t.url}})]}))})]})]})}function c(t=!0){const e=document.querySelector("link#color-mode"),n=t=>`./assets/css/${t}.css`,i=e=>t?"dark"===e?"light":"dark":(t=>"dark"===t?"dark":"light")(e);return()=>{const t=localStorage.getItem("theme");t?e.setAttribute("href",n(i(t))):e.setAttribute("href",n("light")),localStorage.setItem("theme",i(t))}}function o(){const t=r("label",{textContent:"Theme",classList:["accordion-header","c-hand"]});return t.addEventListener("click",c()),r("div",{classList:"accordion",children:[r("input",{id:"theme-switcher-input",attributes:{name:"theme-checkbox",checked:"",hidden:"",type:"checkbox"}}),t]})}function a(t){const e=document.querySelector("#sidebar");if(e){const c=r("div",{classList:"cv-nav",children:[s("À propos",t.paragraphs?t.paragraphs.map(t=>({text:t.name,url:"#"+t.id})):[]),(i=t.sidebar,r("div",{classList:"accordion-container",children:[s("contact",i)]})),o()]});e.appendChild(r("div",{classList:"cv-brand",children:[r("a",{classList:"cv-logo",attributes:{href:"."},children:[r("h2",{textContent:(n=t.identity).shortName||n.name})]})]})),e.appendChild(c)}var n,i;return t}function l(t){return r("li",{textContent:t.description,children:t.subPoints?[r("ul",{children:t.subPoints.map(l)})]:[]})}function d(t){return r("span",{classList:"chip",textContent:t})}function u(t){const e=t.resume?t.resume.map(t=>r("p",{textContent:t})):[];return r("div",{classList:t.aside&&"date"===t.aside.kind?"cv-note":[],children:[(o=t.aside,void 0===o?null:r("div",{classList:["show-md","mb-2"],children:["date"===o.kind?r("span",{classList:["chip","p-2"],textContent:o.date}):r(o.size,{textContent:o.text})]})),t.title?r("h4",{textContent:t.title}):null,t.subTitle?r("h5",{textContent:t.subTitle}):null,...e,t.points?(c=t.points,r("ul",{children:c.map(l)})):null,t.links?(s=t.links,r("p",{children:s.map(t=>r("a",{textContent:t.text,attributes:{href:t.url}}))})):null,t.tags?(n=t.tags,r("div",{classList:"cv-taglist",children:n.map(t=>r("p",{children:t.map(d)}))})):null].filter(i)});var n,s,c,o}function h(t){return r("div",{classList:"columns",children:[(e=t.aside,void 0===e?null:r("div",{classList:["col-3","col-md-12","column","hide-md"],children:[r("div",{classList:["date"===e.kind?"cv-note":"","text-right"],children:["date"===e.kind?r("span",{classList:["chip","p-2"],textContent:e.date}):r(e.size,{textContent:e.text})]})]})),r("div",{classList:["col-9","col-md-12","column"],children:[r("div",{classList:["cv-note"],children:[u(t)]})]})].filter(i)});var e}function f(t){return r("h3",{classList:"s-title",children:[r("a",{classList:"anchor",attributes:{href:"#"+t.id,"aria-hidden":"true"},textContent:"#"}),r("span",{textContent:t.name})]})}function p(t){return r("div",{id:t.id,classList:"container",children:[f(t),...t.elements?t.elements.map(h):[]]})}function m(t){const e=document.querySelector("#content");if(e){e.appendChild((n=t.identity,r("div",{id:"introduction",classList:"container",children:[r("h3",{classList:"s-title",children:[r("a",{classList:"anchor",textContent:"#",attributes:{href:"#introduction","aria-hidden":"true"}}),r("span",{textContent:n.name})]}),r("h5",{textContent:n.description}),r("h5",{textContent:n.location})]})));for(const n of t.paragraphs)e.appendChild(p(n))}var n;return t}n.r(e);var v=function(t,e,n,i){return new(n||(n=Promise))((function(r,s){function c(t){try{a(i.next(t))}catch(t){s(t)}}function o(t){try{a(i.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,o)}a((i=i.apply(t,e||[])).next())}))};function b(t){return v(this,void 0,void 0,(function*(){const e=yield(yield fetch(t)).json();return a(e),m(e),e}))}window.onload=()=>v(void 0,void 0,void 0,(function*(){c(!1)();try{b("https://gist.githubusercontent.com/jRimbault/ddbe04c43dba075e0da9ddb9ebda6926/raw/resume.json")}catch(t){console.error(t),b("assets/data/resume.json").catch(console.log)}}))}]);
//# sourceMappingURL=bundle.js.map