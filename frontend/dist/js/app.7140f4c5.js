(function(){"use strict";var e={5139:function(e,n,t){var r=t(9242),o=t(3396);const i={class:"navbar navbar-expand navbar-dark bg-dark"},a={class:"navbar-nav mr-auto"},u={class:"nav-item"},c={class:"nav-item"},s={class:"container"},f={class:"row"},l={class:"col mt-4"};function d(e,n,t,r,d,v){const m=(0,o.up)("router-link"),p=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",i,[(0,o.Wm)(m,{to:"/",class:"navbar-brand"},{default:(0,o.w5)((()=>[(0,o.Uk)("Automotive")])),_:1}),(0,o._)("div",a,[(0,o._)("li",u,[(0,o.Wm)(m,{to:"/customers",class:"nav-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("Customers")])),_:1})]),(0,o._)("li",c,[(0,o.Wm)(m,{to:"/add",class:"nav-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("Add")])),_:1})])])]),(0,o._)("div",s,[(0,o._)("div",f,[(0,o._)("div",l,[(0,o.Wm)(p)])])])],64)}var v={name:"app"},m=t(89);const p=(0,m.Z)(v,[["render",d]]);var h=p,b=t(2483);const g=[{path:"/",alias:"/customers",name:"customers",component:()=>Promise.all([t.e(602),t.e(650)]).then(t.bind(t,1650))},{path:"/Customers/:id",name:"Customer-details",component:()=>Promise.all([t.e(602),t.e(107)]).then(t.bind(t,9107))},{path:"/add",name:"add",component:()=>Promise.all([t.e(602),t.e(938)]).then(t.bind(t,3938))}],y=(0,b.p7)({history:(0,b.PO)(),routes:g});var k=y;(0,r.ri)(h).use(k).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{107:"0b49f457",602:"05bdfea8",650:"b5b27410",938:"b7b86df9"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".f4913390.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="automotive-vue-frontend:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={107:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var f=c(t)}for(n&&n(r);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},r=self["webpackChunkautomotive_vue_frontend"]=self["webpackChunkautomotive_vue_frontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(5139)}));r=t.O(r)})();
//# sourceMappingURL=app.7140f4c5.js.map