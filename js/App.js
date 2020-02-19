!function(e){function t(t){for(var r,a,o=t[0],i=t[1],c=t[2],l=0,s=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(A,a)&&A[a]&&s.push(A[a][0]),A[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(C&&C(t);s.length;)s.shift()();return k.push.apply(k,c||[]),n()}function n(){for(var e,t=0;t<k.length;t++){for(var n=k[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==A[o]&&(r=!1)}r&&(k.splice(t--,1),e=N(N.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!E[e]||!O[e])return;for(var n in O[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--y&&0===g&&P()}(e,t),r&&r(e,t)};var a,o=!0,i="d1a80e3ea6e1f2703c2b",c={},l=[],s=[];function p(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:j,apply:S,status:function(e){if(!e)return d;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:c[e]};return a=void 0,t}var u=[],d="idle";function f(e){d=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var m,h,v,y=0,g=0,b={},O={},E={};function w(e){return+e+""===e?+e:e}function j(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=N.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;O={},b={},E=e.c,v=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in h={},A)_(n);return"prepare"===d&&0===g&&0===y&&P(),t}));var t}function _(e){E[e]?(O[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=N.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function P(){f("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then((function(){return S(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(w(n));e.resolve(t)}}function S(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,a,o,s;function p(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),i=a.id,c=a.chain;if((o=D[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var l=0;l<o.parents.length;l++){var s=o.parents[l],p=D[s];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(p.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),u(n[s],[i])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},y=[],g={},b=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var O in h)if(Object.prototype.hasOwnProperty.call(h,O)){var j;s=w(O);var _=!1,P=!1,S=!1,k="";switch((j=h[O]?p(s):{type:"disposed",moduleId:O}).chain&&(k="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+j.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(_=new Error("Aborted because "+s+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(j),P=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),S=!0;break;default:throw new Error("Unexception type "+j.type)}if(_)return f("abort"),Promise.reject(_);if(P)for(s in g[s]=h[s],u(y,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,s)&&(m[s]||(m[s]=[]),u(m[s],j.outdatedDependencies[s]));S&&(u(y,[j.moduleId]),g[s]=b)}var x,L=[];for(r=0;r<y.length;r++)s=y[r],D[s]&&D[s].hot._selfAccepted&&g[s]!==b&&L.push({module:s,errorHandler:D[s].hot._selfAccepted});f("dispose"),Object.keys(E).forEach((function(e){!1===E[e]&&function(e){delete A[e]}(e)}));for(var I,C,H=y.slice();H.length>0;)if(s=H.pop(),o=D[s]){var R={},T=o.hot._disposeHandlers;for(a=0;a<T.length;a++)(n=T[a])(R);for(c[s]=R,o.hot.active=!1,delete D[s],delete m[s],a=0;a<o.children.length;a++){var M=D[o.children[a]];M&&((x=M.parents.indexOf(s))>=0&&M.parents.splice(x,1))}}for(s in m)if(Object.prototype.hasOwnProperty.call(m,s)&&(o=D[s]))for(C=m[s],a=0;a<C.length;a++)I=C[a],(x=o.children.indexOf(I))>=0&&o.children.splice(x,1);for(s in f("apply"),i=v,g)Object.prototype.hasOwnProperty.call(g,s)&&(e[s]=g[s]);var F=null;for(s in m)if(Object.prototype.hasOwnProperty.call(m,s)&&(o=D[s])){C=m[s];var z=[];for(r=0;r<C.length;r++)if(I=C[r],n=o.hot._acceptedDependencies[I]){if(-1!==z.indexOf(n))continue;z.push(n)}for(r=0;r<z.length;r++){n=z[r];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:C[r],error:e}),t.ignoreErrored||F||(F=e)}}}for(r=0;r<L.length;r++){var U=L[r];s=U.module,l=[s];try{N(s)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||F||(F=n),F||(F=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||F||(F=e)}}return F?(f("fail"),Promise.reject(F)):(f("idle"),new Promise((function(e){e(y)})))}var D={},A={0:0},k=[];function N(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:p(t),parents:(s=l,l=[],s),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return N;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(l=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),N(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return N[e]},set:function(t){N[e]=t}}};for(var o in N)Object.prototype.hasOwnProperty.call(N,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===d&&f("prepare"),g++,N.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===d&&(b[e]||_(e),0===g&&0===y&&P())}},n.t=function(e,t){return 1&t&&(e=n(e)),N.t(e,-2&t)},n}(t)),n.l=!0,n.exports}N.m=e,N.c=D,N.d=function(e,t,n){N.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},N.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},N.t=function(e,t){if(1&t&&(e=N(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(N.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)N.d(n,r,function(t){return e[t]}.bind(null,r));return n},N.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return N.d(t,"a",t),t},N.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},N.p="/beta/apps/api-docs/",N.h=function(){return i};var x=window.webpackJsonp=window.webpackJsonp||[],L=x.push.bind(x);x.push=t,x=x.slice();for(var I=0;I<x.length;I++)t(x[I]);var C=L;k.push([1040,1]),n()}({1037:function(e,t,n){var r=n(270);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(5)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(270,(function(){var t=n(270);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1040:function(e,t,n){"use strict";n.r(t);var r,a,o=n(1),i=n.n(o),c=n(15),l=n.n(c),s=n(77),p=n(46),u=n(120),d=n.n(u),f=n(80),m=n(435),h=n(81),v=n.n(h),y=n(27),g=n.n(y);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={loaded:!1,selectedRows:{}},w=["automation-analytics","aiops-insights-clustering","openshift","ruledev","migration-analytics","subscriptions"];var j,_=Object(u.applyReducerHash)((r={},g()(r,"".concat("LOAD_ALL","_FULFILLED"),(function(e,t){var n=t.payload;return O({},e,{endpoints:n&&n.services.filter((function(e){return!w.includes(e.appName)&&(!e.api.isBeta||insights.chrome.isBeta())})).map((function(e){return O({},e,{version:e.api.versions[0],appName:e.api.alias&&e.api.alias[0]||e.appName})})),loaded:!0})})),g()(r,"".concat("LOAD_ALL","_PENDING"),(function(){return E})),g()(r,"SELECT_ROW",(function(e,t){var n=t.payload,r=n.isSelected,a=n.row,o=O({},e.selectedRows||{},{},Array.isArray(a)?a.reduce((function(e,t){return O({},e,g()({},t.cells[0].value,{isSelected:r,appName:t.cells[0].value,version:t.cells[2].value}))}),{}):g()({},a.cells[0].value,{isSelected:r,appName:a.cells[0].value,version:a.cells[2].value}));return O({},e,{selectedRows:o})})),r),E),P=Object(u.applyReducerHash)((a={},g()(a,"".concat("LOAD_ONE_API","_FULFILLED"),(function(e,t){var n=t.payload,r=n.latest;return O({},e,{spec:v()(n,["latest"]),latest:r,loaded:!0})})),g()(a,"".concat("LOAD_ONE_API","_PENDING"),(function(){return{loaded:!1}})),g()(a,"".concat("LOAD_ONE_API","_REJECTED"),(function(){return{loaded:!0,error:!0}})),a),E);var S=n(436),D=n.n(S),A=n(437),k=n.n(A),N=n(438),x=n.n(N),L=n(439),I=n.n(L),C=n(440),H=n.n(C),R=n(0),T=n.n(R),M=n(49),F=n(121),z=n.n(F),U=n(98),B=n.n(U),J=n(16),q=n(1059),G=n(33),W=n(432),V=n(431),X=n(441),K=n.n(X),$={"aiops-clustering":"v1.0","aiops-idle-cost-savings":"v1.0","aiops-instance-type-validation":"v1.0","aiops-outlier-detection":"v1.0"},Q=n(94),Y=n.n(Q),Z=n(152);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=function(e){var t,n,r=e.name,a=e.version,o=void 0===a?"v1":a,i=(t=r,n=$[r]||o,"/".concat("api","/").concat(t,"/").concat(n,"/openapi.json"));return Y.a.get(i).then((function(e){return te({},e,{latest:i,name:r,servers:[].concat(K()(e.servers||[]),[{url:"/api/".concat(r,"/").concat(o)}]).filter((function(e,t,n){return n.findIndex((function(t){var n=t.url;return 0===e.url.indexOf(n)}))===t})).map((function(e){return te({},e,{url:0===e.url.indexOf("/")?"".concat(location.origin).concat(e.url):e.url})}))})}))},re=n(277),ae=n.n(re),oe=n(442),ie=n.n(oe),ce=n(1043),le=n(1044),se=n(1046),pe=n(1047),ue=n(1048),de=n(1049),fe=n(337),me=n(338),he=n(1045),ve=n(122),ye=n.n(ve),ge=n(443),be=n.n(ge),Oe=["title","appName","version"],Ee=[{title:"Application name",transforms:[fe.a]},{title:"API endpoint",transforms:[fe.a]},{title:"API version",transforms:[fe.a,Object(me.a)(10)]},{title:"Download",transforms:[Object(me.a)(10)]}],we=[{cells:[{title:i.a.createElement(J.EmptyTable,null,i.a.createElement(se.a,null,i.a.createElement(pe.a,{variant:pe.b.full},i.a.createElement(ue.a,{headingLevel:"h5",size:"lg"},"No matching rules found"),i.a.createElement(de.a,null,"This filter criteria matches no rules. ",i.a.createElement("br",null)," Try changing your filter settings.")))),props:{colSpan:Ee.length}}]}];function je(e,t,n,r){var a=t.page,o=t.perPage;return n.length>0?n.sort((function(t,n){return function(e,t,n,r){return void 0!==n?r?e[n]<t[n]?1:t[n]<e[n]?-1:0:e[n]>t[n]?1:t[n]>e[n]?-1:0:0}(t,n,Oe[e.index],e.direction===G.a.desc)})).slice((a-1)*o,a*o).map((function(e){var t=e.frontend,n=e.title,a=e.appName,o=e.version;return function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{selected:r[t]&&r[t].isSelected,cells:[{title:e,value:t,props:{"data-position":"title"}},"/api/".concat(t),{title:i.a.createElement(ce.a,null,n),value:n},{title:i.a.createElement(le.a,{variant:"plain",onClick:function(){return _e(t,n)}}," ",i.a.createElement(he.a,null)," ")}]}}(t&&t.title||n,a,o,r)})):we}function _e(e,t){ne({name:e,version:t}).then((function(t){delete t.latest,delete t.name,ye()(JSON.stringify(t),"".concat(e,"-openapi.json"))}))}function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var De=function(e){var t=e.loadApis,n=e.services,r=e.history,a=e.selectRow,c=e.onError;Object(o.useEffect)((function(){t()}),[]);var l,s,p=Object(o.useState)({}),u=B()(p,2),d=u[0],f=u[1],m=Object(o.useState)({perPage:50,page:1}),h=B()(m,2),y=h[0],g=h[1],b=Object(o.useState)(""),O=B()(b,2),E=O[0],w=O[1],j=E&&n.endpoints.filter((function(e){return function(e,t){return Oe.some((function(n){return e[n]&&-1!==e[n].toLocaleLowerCase().indexOf(t.toLocaleLowerCase())}))}(e,E)})),_=n.loaded?je(d,y,j||n.endpoints,n.selectedRows):[];return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.PageHeader,{className:"pf-m-light"},i.a.createElement(J.PageHeaderTitle,{title:"API documentation"})),i.a.createElement(J.Main,{className:"ins-c-docs__api"},i.a.createElement(i.a.Fragment,null,i.a.createElement(J.PrimaryToolbar,z()({filterConfig:{items:[{label:"Filter by text",type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by text",value:E,onChange:function(e,t){g(Se({},y,{page:1})),w(t)},isDisabled:!n.loaded}}]},actionsConfig:{actions:[{label:"Download Selected",props:{isDisabled:(l=n,s=l.selectedRows,!s||0===Object.values(s||{}).map((function(e){return e.isSelected})).filter(Boolean).length),onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=new be.a,r=Object.values(e||{}).filter((function(e){return e.isSelected})).map(function(){var e=ie()(ae.a.mark((function e(n){var r,a;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.appName,a=n.version,e.prev=1,e.next=4,ne({name:r,version:a});case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),t(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}());Promise.all(r).then((function(e){if(e&&e.length>1)e.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=v()(e,["name"]);t&&(delete r.latest,n.file("".concat(t,"-openapi.json"),JSON.stringify(r)))})),n.generateAsync({type:"blob"}).then((function(e){return ye()(e,"cloud-services-openapi.zip")}));else if(e&&1===e.length){var t=e[0]||{},r=t.name,a=v()(t,["name"]);r&&(delete a.latest,ye()(JSON.stringify(a),"".concat(r,"-openapi.json")))}}))}(n.selectedRows,c)}}}]}},n.loaded&&{pagination:Se({},y,{itemCount:(j||n.endpoints).length,onSetPage:function(e,t){return g(Se({},y,{page:t}))},onPerPageSelect:function(e,t){return g(Se({},y,{perPage:t}))}})},E.length>0&&{activeFiltersConfig:{filters:[{name:E}],onDelete:function(){g(Se({},y,{page:1})),w("")}}})),n.loaded?i.a.createElement(G.b,z()({"aria-label":"Sortable Table",variant:G.e.compact,sortBy:d,onSort:function(e,t,n){return f({index:t,direction:n})},cells:Ee,rows:_},(j||n.endpoints).length>0&&{onSelect:function(e,t,n){a(t,-1===n?_:_[n])}}),i.a.createElement(W.a,null),i.a.createElement(V.a,{onRowClick:function(e,t){"title"===e.target.getAttribute("data-position")?r.push("/".concat(t.cells[0].value.replace("/api/",""))):e.target.matches("input")||a(!t.selected,t)}})):i.a.createElement(J.SkeletonTable,{columns:Ee,rowSize:28})),i.a.createElement(J.TableToolbar,{isFooter:!0},n.loaded?i.a.createElement(q.a,{variant:"bottom",dropDirection:"up",itemCount:(j||n.endpoints).length,perPage:y.perPage,page:y.page,onSetPage:function(e,t){return g(Se({},y,{page:t}))},onPerPageSelect:function(e,t){return g(Se({},y,{perPage:t}))}}):"loading")))};De.propTypes={loadApis:T.a.func,onError:T.a.func,services:T.a.shape({loaded:T.a.bool,selectedRows:T.a.shape({isSelected:T.a.bool}),endpoints:T.a.arrayOf(T.a.shape(g()({},T.a.string,T.a.oneOfType([T.a.string,T.a.number,T.a.bool,T.a.node]))))}),history:T.a.shape({push:T.a.func}),selectRow:T.a.func},De.defaultProps={loadApis:function(){},selectRow:function(){},onError:function(){},services:{loaded:!1,selectedRows:{}}};var Ae=Object(M.o)(Object(p.connect)((function(e){return{services:e.services}}),(function(e){return{loadApis:function(){return e({type:"LOAD_ALL",payload:Y.a.get("".concat(insights.chrome.isBeta()?"/beta":"","/config/main.yml")).then((function(e){return Object(Z.safeLoad)(e)})).then((function(e){return{services:Object.keys(e).filter((function(t){return e[t].api})).map((function(t){return te({appName:t},e[t])}))}}))})},selectRow:function(t,n){return e({type:"SELECT_ROW",payload:{isSelected:t,row:n}})},onError:function(t){return e(Object(f.addNotification)({variant:"danger",title:"Server error",description:t,dismissable:!0}))}}}))(De)),ke=n(446),Ne=n.n(ke),xe=(n(1036),n(275)),Le=n(1050),Ie=n(1051),Ce=n(1052),He=n(1053),Re=n(1054),Te=n(1055),Me=n(1057),Fe=n(1058),ze=n(1060),Ue=n(1056),Be=n(447),Je=n.n(Be),qe=function(e){var t=e.loadApi,n=e.detail,r=e.match.params;Object(o.useEffect)((function(){t(r.apiName)}),[]);var a=Object(o.useState)(!1),c=B()(a,2),l=c[0],p=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.PageHeader,{className:"pf-m-light"},i.a.createElement(J.PageHeaderTitle,{title:i.a.createElement(i.a.Fragment,null,i.a.createElement(Le.a,null,i.a.createElement(Ie.a,null,i.a.createElement(s.Link,{to:"/"},"Overview")),i.a.createElement(Ie.a,{isActive:!0},r.apiName)),i.a.createElement(i.a.Fragment,null,n.loaded&&!n.error&&i.a.createElement(Ce.a,{className:"ins-c-docs__api-detail"},i.a.createElement(He.a,{className:"ins-c-docs__api-detail-info"},n.loaded?"Detail of ".concat(n.spec.info.title):i.a.createElement(J.Skeleton,{size:J.SkeletonSize.md})),i.a.createElement(He.a,null,i.a.createElement(Re.a,{gutter:"sm"},i.a.createElement(Te.a,{className:"ins-c-docs__api-detail-info"},n.loaded&&!n.error?i.a.createElement("a",{href:"".concat(location.origin).concat(n.latest),target:"_blank",rel:"noopener noreferrer"},"Open Raw ",i.a.createElement(Ue.a,{size:"sm"})):i.a.createElement(J.Skeleton,{size:J.SkeletonSize.mdmd})),i.a.createElement(Te.a,{className:"ins-c-docs__api-detail-info"},n.loaded?i.a.createElement(le.a,{onClick:function(){return p(!0)},variant:le.b.secondary},"Show JSON"):i.a.createElement(J.Skeleton,{size:J.SkeletonSize.md})))))))})),i.a.createElement(J.Main,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(Me.a,null,i.a.createElement(Fe.a,null,n.loaded&&i.a.createElement(Ne.a,{deepLinking:!0,docExpansion:"list",spec:n.spec,onComplete:function(e){var t=e.layoutActions.show;if(e.layoutActions.show=function(e,n){history.replaceState({},"","".concat(location.pathname,"#").concat(CSS.escape(e.join("-")))),t(e,n)},location.hash&&location.hash.length>0){var n=document.querySelector("[id$='".concat(location.hash.replace("#","").replace(/\\./g,"\\\\."),"']"));n&&(n.scrollIntoView(),t(location.hash.replace("#","").replace(/\\/g,"").split("-"),!0))}}}),!n.loaded&&i.a.createElement(xe.Facebook,null))))),i.a.createElement(ze.a,{width:"50%",title:"Spec JSON",isOpen:l,onClose:function(){return p(!1)},actions:[i.a.createElement(le.a,{key:"close",variant:le.b.secondary,onClick:function(){return p(!1)}},"Close")]},i.a.createElement(Je.a,{src:n.spec})))};qe.propTypes={loadApi:T.a.func,detail:T.a.shape({loaded:T.a.bool,spec:T.a.string,error:T.a.bool,latest:T.a.string}),match:T.a.shape({params:T.a.shape({apiName:T.a.string})})},qe.defaultProps={loadApi:function(){},detail:{loaded:!1}};var Ge=Object(M.o)(Object(p.connect)((function(e){return{detail:e.detail}}),(function(e){return{loadApi:function(t){return e({type:"LOAD_ONE_API",payload:ne({name:t,version:"v1"})})}}}))(qe)),We="/",Ve="/:apiName",Xe=function(e){var t=e.component,n=e.rootClass,r=v()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.setAttribute("role","main"),i.a.createElement(M.d,z()({},r,{component:t}))};Xe.propTypes={component:T.a.func,rootClass:T.a.string};var Ke=function(){return i.a.createElement(M.g,null,i.a.createElement(Xe,{exact:!0,path:We,component:Ae,rootClass:"overview"}),i.a.createElement(Xe,{exact:!0,path:Ve,component:Ge,rootClass:"detail"}),i.a.createElement(Xe,{component:Ae,rootClass:"overview"}))};Ke.propTypes={childProps:T.a.shape({location:T.a.shape({pathname:T.a.string})})};n(1037);var $e=function(e){function t(){return D()(this,t),x()(this,I()(t).apply(this,arguments))}return H()(t,e),k()(t,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("api-docs")}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.NotificationsPortal,null),i.a.createElement(Ke,{childProps:this.props}))}}]),t}(o.Component);$e.propTypes={history:T.a.object};var Qe=Object(M.o)(Object(p.connect)()($e)),Ye=n(448);l.a.render(i.a.createElement(p.Provider,{store:function(){if(j)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(j=new d.a({},[Object(m.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))).register({services:_,detail:P,notifications:f.notifications}),j}().getStore()},i.a.createElement(s.BrowserRouter,{basename:Object(Ye.getBaseName)(window.location.pathname)},i.a.createElement(Qe,null))),document.getElementById("root"))},270:function(e,t,n){var r=n(4),a=n(1038),o=n(1039);(t=r(!1)).i(a),t.i(o),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.info__contact{display:none}.auth-wrapper{display:none !important}.ins-c-api__list-item{cursor:pointer}.ins-c-docs__api .ins-c-docs__api-overview-toolbar{width:100%}.ins-c-docs__api .pf-c-table tbody td:nth-child(2){cursor:pointer;color:var(--pf-global--link--Color)}.ins-c-docs__api-detail .ins-c-docs__api-detail-info{min-width:100px}.ins-c-docs__api-detail .ins-c-docs__api-detail-info a{vertical-align:text-top}.ins-c-api__download--selected{margin-left:var(--pf-global--spacer--md)}\n",""]),e.exports=t},559:function(e,t){},561:function(e,t){}});
//# sourceMappingURL=App.js.map