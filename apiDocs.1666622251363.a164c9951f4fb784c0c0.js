var apiDocs;(()=>{"use strict";var e,r,t,n,o,a,i,l,s,u,d,f,c,p,h,m,v,g,y,b,w,O={70839:(e,r,t)=>{var n={"./RootApp":()=>Promise.all([t.e(939),t.e(342),t.e(324),t.e(416),t.e(51),t.e(242),t.e(485),t.e(528)]).then((()=>()=>t(28412)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},P={};function j(e){var r=P[e];if(void 0!==r)return r.exports;var t=P[e]={id:e,loaded:!1,exports:{}};return O[e].call(t.exports,t,t.exports,j),t.loaded=!0,t.exports}j.m=O,j.c=P,j.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return j.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,j.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);j.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,j.d(o,a),o},j.d=(e,r)=>{for(var t in r)j.o(r,t)&&!j.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},j.f={},j.e=e=>Promise.all(Object.keys(j.f).reduce(((r,t)=>(j.f[t](e,r),r)),[])),j.u=e=>"js/"+({474:"Overview",887:"Detail"}[e]||e)+".1666622251388."+j.h()+".js",j.miniCssF=e=>"css/"+(474===e?"Overview":e)+"."+{316:"9c4068692df12e9c20a6",474:"c598fd3d0fe1438d84db",528:"e038051d33f47b7f1a81"}[e]+".css",j.h=()=>"a164c9951f4fb784c0c0",j.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),j.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),j.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="insights-frontend-starter-app:",j.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,j.nc&&i.setAttribute("nonce",j.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},j.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{j.S={};var e={},r={};j.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];j.o(j.S,t)||(j.S[t]={});var a=j.S[t],i="insights-frontend-starter-app",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},s=[];return"default"===t&&(l("@patternfly/react-core","4.250.1",(()=>Promise.all([j.e(12),j.e(32),j.e(416),j.e(51),j.e(335)]).then((()=>()=>j(6032))))),l("@patternfly/react-table","4.111.4",(()=>Promise.all([j.e(12),j.e(939),j.e(342),j.e(554),j.e(416),j.e(51),j.e(242),j.e(199)]).then((()=>()=>j(15554))))),l("@scalprum/react-core","0.2.8",(()=>Promise.all([j.e(939),j.e(185),j.e(416)]).then((()=>()=>j(32185))))),l("react-dom","18.2.0",(()=>Promise.all([j.e(935),j.e(416)]).then((()=>()=>j(73935))))),l("react-router-dom","6.4.2",(()=>Promise.all([j.e(818),j.e(416)]).then((()=>()=>j(49818))))),l("react","18.2.0",(()=>j.e(294).then((()=>()=>j(67294))))),l("redux-promise-middleware","6.1.3",(()=>j.e(68).then((()=>()=>j(5068)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),j.p="/apps/api-docs/",o=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},a=(e,r)=>{e=o(e),r=o(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],a=(typeof n)[0];if(t>=r.length)return"u"==a;var i=r[t],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;t++}},i=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var a=[];for(o=1;o<e.length;o++){var l=e[o];a.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?a.pop()+" "+a.pop():i(l))}return s();function s(){return a.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,r)=>{if(0 in e){r=o(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var a=0,i=1,s=!0;;i++,a++){var u,d,f=i<e.length?(typeof e[i])[0]:"";if(a>=r.length||"o"==(d=(typeof(u=r[a]))[0]))return!s||("u"==f?i>t&&!n:""==f!=n);if("u"==d){if(!s||"u"!=f)return!1}else if(s)if(f==d)if(i<=t){if(u!=e[i])return!1}else{if(n?u>e[i]:u<e[i])return!1;u!=e[i]&&(s=!1)}else if("s"!=f&&"n"!=f){if(n||i<=t)return!1;s=!1,i--}else{if(i<=t||d<f!=n)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,i--)}}var c=[],p=c.pop.bind(c);for(a=1;a<e.length;a++){var h=e[a];c.push(1==h?p()|p():2==h?p()&p():h?l(h,r):!p())}return!!p()},s=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},u=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+i(n)+")",d=(e,r,t,n)=>{var o=s(e,t);return l(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(u(e,t,o,n)),c(e[t][o])},f=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!l(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},c=e=>(e.loaded=1,e.get()),h=(p=e=>function(r,t,n,o){var a=j.I(r);return a&&a.then?a.then(e.bind(e,r,j.S[r],t,n,o)):e(r,j.S[r],t,n,o)})(((e,r,t,n,o)=>r&&j.o(r,t)?d(r,0,t,n):o())),m=p(((e,r,t,n,o)=>{var a=r&&j.o(r,t)&&f(r,t,n);return a?c(a):o()})),v={},g={28416:()=>h("default","react",[1,18,2,0],(()=>j.e(294).then((()=>()=>j(67294))))),31051:()=>h("default","react-dom",[1,18,2,0],(()=>j.e(935).then((()=>()=>j(73935))))),21242:()=>m("default","@patternfly/react-core",[4,4,250,1],(()=>Promise.all([j.e(12),j.e(32),j.e(745)]).then((()=>()=>j(6032))))),54025:()=>h("default","@scalprum/react-core",[0],(()=>j.e(185).then((()=>()=>j(32185))))),52846:()=>m("default","react-router-dom",[1,6,4,2],(()=>j.e(818).then((()=>()=>j(49818))))),54157:()=>m("default","redux-promise-middleware",[1,6,1,3],(()=>j.e(68).then((()=>()=>j(5068))))),13678:()=>m("default","@patternfly/react-table",[1,4,111,4],(()=>Promise.all([j.e(12),j.e(554),j.e(7)]).then((()=>()=>j(15554)))))},y={51:[31051],242:[21242],416:[28416],474:[13678],485:[54025,52846,54157]},j.f.consumes=(e,r)=>{j.o(y,e)&&y[e].forEach((e=>{if(j.o(v,e))return r.push(v[e]);var t=r=>{v[e]=0,j.m[e]=t=>{delete j.c[e],t.exports=r()}},n=r=>{delete v[e],j.m[e]=t=>{throw delete j.c[e],r}};try{var o=g[e]();o.then?r.push(v[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},b=e=>new Promise(((r,t)=>{var n=j.miniCssF(e),o=j.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),w={812:0},j.f.miniCss=(e,r)=>{w[e]?r.push(w[e]):0!==w[e]&&{316:1,474:1,528:1}[e]&&r.push(w[e]=b(e).then((()=>{w[e]=0}),(r=>{throw delete w[e],r})))},(()=>{var e={812:0};j.f.j=(r,t)=>{var n=j.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(242|416|485|51)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=j.p+j.u(r),i=new Error;j.l(a,(t=>{if(j.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in i)j.o(i,n)&&(j.m[n]=i[n]);l&&l(j)}for(r&&r(t);s<a.length;s++)o=a[s],j.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var S=j(70839);apiDocs=S})();