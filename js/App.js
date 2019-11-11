!function(e){function t(t){for(var r,a,o=t[0],i=t[1],c=t[2],l=0,s=[];l<o.length;l++)a=o[l],D[a]&&s.push(D[a][0]),D[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(C&&C(t);s.length;)s.shift()();return N.push.apply(N,c||[]),n()}function n(){for(var e,t=0;t<N.length;t++){for(var n=N[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==D[o]&&(r=!1)}r&&(N.splice(t--,1),e=k(k.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--g&&0===y&&P()}(e,t),r&&r(e,t)};var a,o=!0,i="67c05ff52ce232faad55",c=1e4,l={},s=[],d=[];var u=[],p="idle";function f(e){p=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var m,h,v,g=0,y=0,b={},E={},w={};function _(e){return+e+""===e?+e:e}function O(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=k.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;E={},b={},w=e.c,v=e.h,f("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var n in h={},D)j(n);return"prepare"===p&&0===y&&0===g&&P(),t})}function j(e){w[e]?(E[e]=!0,g++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=k.p+""+e+"."+i+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function P(){f("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then(function(){return S(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(_(n));e.resolve(t)}}function S(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,a,o,c;function d(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,c=a.chain;if((o=A[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var l=0;l<o.parents.length;l++){var s=o.parents[l],d=A[s];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(d.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),u(n[s],[i])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},g=[],y={},b=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var O;c=_(E);var j=!1,P=!1,S=!1,N="";switch((O=h[E]?d(c):{type:"disposed",moduleId:E}).chain&&(N="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+N));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+N));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(j=new Error("Aborted because "+c+" is not accepted"+N));break;case"accepted":t.onAccepted&&t.onAccepted(O),P=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),S=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return f("abort"),Promise.reject(j);if(P)for(c in y[c]=h[c],u(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,c)&&(m[c]||(m[c]=[]),u(m[c],O.outdatedDependencies[c]));S&&(u(g,[O.moduleId]),y[c]=b)}var x,L=[];for(r=0;r<g.length;r++)c=g[r],A[c]&&A[c].hot._selfAccepted&&L.push({module:c,errorHandler:A[c].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete D[e]}(e)});for(var I,C,H=g.slice();H.length>0;)if(c=H.pop(),o=A[c]){var R={},T=o.hot._disposeHandlers;for(a=0;a<T.length;a++)(n=T[a])(R);for(l[c]=R,o.hot.active=!1,delete A[c],delete m[c],a=0;a<o.children.length;a++){var M=A[o.children[a]];M&&((x=M.parents.indexOf(c))>=0&&M.parents.splice(x,1))}}for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(o=A[c]))for(C=m[c],a=0;a<C.length;a++)I=C[a],(x=o.children.indexOf(I))>=0&&o.children.splice(x,1);for(c in f("apply"),i=v,y)Object.prototype.hasOwnProperty.call(y,c)&&(e[c]=y[c]);var F=null;for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(o=A[c])){C=m[c];var z=[];for(r=0;r<C.length;r++)if(I=C[r],n=o.hot._acceptedDependencies[I]){if(-1!==z.indexOf(n))continue;z.push(n)}for(r=0;r<z.length;r++){n=z[r];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:C[r],error:e}),t.ignoreErrored||F||(F=e)}}}for(r=0;r<L.length;r++){var B=L[r];c=B.module,s=[c];try{k(c)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||F||(F=n),F||(F=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||F||(F=e)}}return F?(f("fail"),Promise.reject(F)):(f("idle"),new Promise(function(e){e(g)}))}var A={},D={0:0},N=[];function k(t){if(A[t])return A[t].exports;var n=A[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:S,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:l[e]};return a=void 0,t}(t),parents:(d=s,s=[],d),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=A[e];if(!t)return k;var n=function(n){return t.hot.active?(A[n]?-1===A[n].parents.indexOf(e)&&A[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),k(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(t){k[e]=t}}};for(var o in k)Object.prototype.hasOwnProperty.call(k,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&f("prepare"),y++,k.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===p&&(b[e]||j(e),0===y&&0===g&&P())}},n.t=function(e,t){return 1&t&&(e=n(e)),k.t(e,-2&t)},n}(t)),n.l=!0,n.exports}k.m=e,k.c=A,k.d=function(e,t,n){k.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,t){if(1&t&&(e=k(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(k.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)k.d(n,r,function(t){return e[t]}.bind(null,r));return n},k.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(t,"a",t),t},k.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},k.p="/beta/apps/api-docs/",k.h=function(){return i};var x=window.webpackJsonp=window.webpackJsonp||[],L=x.push.bind(x);x.push=t,x=x.slice();for(var I=0;I<x.length;I++)t(x[I]);var C=L;N.push([1009,1]),n()}({1006:function(e,t,n){var r=n(281);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(5)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(281,function(){var t=n(281);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},1009:function(e,t,n){"use strict";n.r(t);var r,a,o=n(2),i=n.n(o),c=n(26),l=n.n(c),s=n(87),d=n(66),u=n(325),p=n.n(u),f=n(89),m=n(514),h=n(311),v=n.n(h),g=n(90),y=n.n(g),b=n(36),E=n.n(b),w={loaded:!1,selectedRows:{}},_=["automation-analytics","aiops-insights-clustering","openshift","ruledev","migration-analytics","subscriptions"];var O,j=Object(u.applyReducerHash)((r={},v()(r,"".concat("LOAD_ALL","_FULFILLED"),function(e,t){var n=t.payload;return E()({},e,{endpoints:n&&n.services.filter(function(e){return!_.includes(e.appName)&&(!e.api.isBeta||insights.chrome.isBeta())}).map(function(e){return E()({},e,{version:e.api.versions[0],appName:e.api.alias&&e.api.alias[0]||e.appName})}),loaded:!0})}),v()(r,"".concat("LOAD_ALL","_PENDING"),function(){return w}),v()(r,"SELECT_ROW",function(e,t){var n=t.payload,r=n.isSelected,a=n.row,o=E()({},e.selectedRows||{},Array.isArray(a)?a.reduce(function(e,t){return E()({},e,v()({},t.cells[0].value,{isSelected:r,appName:t.cells[0].value,version:t.cells[2].value}))},{}):v()({},a.cells[0].value,{isSelected:r,appName:a.cells[0].value,version:a.cells[2].value}));return E()({},e,{selectedRows:o})}),r),w),P=Object(u.applyReducerHash)((a={},v()(a,"".concat("LOAD_ONE_API","_FULFILLED"),function(e,t){var n=t.payload,r=n.latest,a=y()(n,["latest"]);return E()({},e,{spec:a,latest:r,loaded:!0})}),v()(a,"".concat("LOAD_ONE_API","_PENDING"),function(){return{loaded:!1}}),v()(a,"".concat("LOAD_ONE_API","_REJECTED"),function(){return{loaded:!0,error:!0}}),a),w);var S=n(499),A=n.n(S),D=n(500),N=n.n(D),k=n(501),x=n.n(k),L=n(502),I=n.n(L),C=n(503),H=n.n(C),R=n(1),T=n.n(R),M=n(156),F=n(327),z=n.n(F),B=n(322),U=n.n(B),J=n(33),q=n(468),G=n(155),W=n(1020),X=n(1019),K={"aiops-clustering":"v1.0","aiops-idle-cost-savings":"v1.0","aiops-instance-type-validation":"v1.0","aiops-outlier-detection":"v1.0"},V=n(112),Q=n.n(V),Y=n(506),Z=function(e){var t=e.name,n=e.version,r=function(e,t){return"/".concat("api","/").concat(e,"/").concat(t,"/openapi.json")}(t,K[t]||(void 0===n?"v1":n));return Q.a.get(r).then(function(e){return E()({},e,{latest:r,name:t})})},$=function(){return{type:"LOAD_ALL",payload:Q.a.get("".concat(insights.chrome.isBeta()?"/beta":"","/config/main.yml")).then(function(e){return Object(Y.safeLoad)(e)}).then(function(e){return{services:Object.keys(e).filter(function(t){return e[t].api}).map(function(t){return E()({appName:t},e[t])})}})}},ee=n(347),te=n.n(ee),ne=n(507),re=n.n(ne),ae=n(289),oe=n(283),ie=n(298),ce=n(295),le=n(284),se=n(296),de=n(469),ue=n(303),pe=n(229),fe=n(328),me=n.n(fe),he=n(508),ve=n.n(he),ge=["title","appName","version"],ye=[{title:"Application name",transforms:[de.a]},{title:"API endpoint",transforms:[de.a]},{title:"API version",transforms:[de.a,Object(ue.a)(10)]},{title:"Download",transforms:[Object(ue.a)(10)]}],be=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{selected:r[t]&&r[t].isSelected,cells:[{title:e,value:t,props:{"data-position":"title"}},"/api/".concat(t),{title:i.a.createElement(ae.a,null,n),value:n},{title:i.a.createElement(oe.a,{variant:"plain",onClick:function(){return function(e,t){Z({name:e,version:t}).then(function(t){delete t.latest,delete t.name,me()(JSON.stringify(t),"".concat(e,"-openapi.json"))})}(t,n)}}," ",i.a.createElement(pe.b,null)," ")}]}},Ee=[{cells:[{title:i.a.createElement(J.EmptyTable,null,i.a.createElement(ie.a,null,i.a.createElement(ce.a,{variant:ce.b.full},i.a.createElement(le.a,{headingLevel:"h5",size:"lg"},"No matching rules found"),i.a.createElement(se.a,null,"This filter criteria matches no rules. ",i.a.createElement("br",null)," Try changing your filter settings.")))),props:{colSpan:ye.length}}]}];var we=function(e){var t=e.loadApis,n=e.services,r=e.history,a=e.selectRow,c=e.onError;Object(o.useEffect)(function(){t()},[]);var l=Object(o.useState)({}),s=U()(l,2),d=s[0],u=s[1],p=Object(o.useState)({perPage:50,page:1}),f=U()(p,2),m=f[0],h=f[1],v=Object(o.useState)(""),g=U()(v,2),b=g[0],w=g[1],_=b&&n.endpoints.filter(function(e){return function(e,t){return ge.some(function(n){return e[n]&&-1!==e[n].toLocaleLowerCase().indexOf(t.toLocaleLowerCase())})}(e,b)}),O=n.loaded?function(e,t,n,r){var a=t.page,o=t.perPage;return n.length>0?n.sort(function(t,n){return function(e,t,n,r){return void 0!==n?r?e[n]<t[n]?1:t[n]<e[n]?-1:0:e[n]>t[n]?1:t[n]>e[n]?-1:0:0}(t,n,ge[e.index],e.direction===G.a.desc)}).slice((a-1)*o,a*o).map(function(e){var t=e.frontend,n=e.title,a=e.appName,o=e.version;return be(t&&t.title||n,a,o,r)}):Ee}(d,m,_||n.endpoints,n.selectedRows):[];return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.PageHeader,{className:"pf-m-light"},i.a.createElement(J.PageHeaderTitle,{title:"API documentation"})),i.a.createElement(J.Main,{className:"ins-c-docs__api"},i.a.createElement(i.a.Fragment,null,i.a.createElement(J.PrimaryToolbar,z()({filterConfig:{items:[{label:"Filter by text",type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by text",value:b,onChange:function(e,t){h(E()({},m,{page:1})),w(t)},isDisabled:!n.loaded}}]},actionsConfig:{actions:[{label:"Download Selected",props:{isDisabled:function(e){var t=e.selectedRows;return!t||0===Object.values(t||{}).map(function(e){return e.isSelected}).filter(Boolean).length}(n),onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=new ve.a,r=Object.values(e||{}).filter(function(e){return e.isSelected}).map(function(){var e=re()(te.a.mark(function e(n){var r,a;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.appName,a=n.version,e.prev=1,e.next=4,Z({name:r,version:a});case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),t(e.t0);case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(t){return e.apply(this,arguments)}}());Promise.all(r).then(function(e){if(e&&e.length>1)e.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=y()(e,["name"]);t&&(delete r.latest,n.file("".concat(t,"-openapi.json"),JSON.stringify(r)))}),n.generateAsync({type:"blob"}).then(function(e){return me()(e,"cloud-services-openapi.zip")});else if(e&&1===e.length){var t=e[0]||{},r=t.name,a=y()(t,["name"]);r&&(delete a.latest,me()(JSON.stringify(a),"".concat(r,"-openapi.json")))}})}(n.selectedRows,c)}}}]}},n.loaded&&{pagination:E()({},m,{itemCount:(_||n.endpoints).length,onSetPage:function(e,t){return h(E()({},m,{page:t}))},onPerPageSelect:function(e,t){return h(E()({},m,{perPage:t}))}})},b.length>0&&{activeFiltersConfig:{filters:[{name:b}],onDelete:function(){h(E()({},m,{page:1})),w("")}}})),n.loaded?i.a.createElement(G.b,z()({"aria-label":"Sortable Table",variant:G.d.compact,sortBy:d,onSort:function(e,t,n){return u({index:t,direction:n})},cells:ye,rows:O},(_||n.endpoints).length>0&&{onSelect:function(e,t,n){a(t,-1===n?O:O[n])}}),i.a.createElement(W.a,null),i.a.createElement(X.a,{onRowClick:function(e,t){"title"===e.target.getAttribute("data-position")?r.push("/".concat(t.cells[0].value.replace("/api/",""))):e.target.matches("input")||a(!t.selected,t)}})):i.a.createElement(J.SkeletonTable,{columns:ye,rowSize:28})),i.a.createElement(J.TableToolbar,{isFooter:!0},n.loaded?i.a.createElement(q.a,{variant:"bottom",dropDirection:"up",itemCount:(_||n.endpoints).length,perPage:m.perPage,page:m.page,onSetPage:function(e,t){return h(E()({},m,{page:t}))},onPerPageSelect:function(e,t){return h(E()({},m,{perPage:t}))}}):"loading")))};we.propTypes={loadApis:T.a.func,onError:T.a.func,services:T.a.shape({loaded:T.a.bool,selectedRows:T.a.shape({isSelected:T.a.bool})}),history:T.a.shape({push:T.a.func}),selectRow:T.a.func},we.defaultProps={loadApis:function(){},selectRow:function(){},onError:function(){},services:{loaded:!1,selectedRows:{}}};var _e=Object(M.k)(Object(d.connect)(function(e){return{services:e.services}},function(e){return{loadApis:function(){return e($())},selectRow:function(t,n){return e(function(e){return{type:"SELECT_ROW",payload:e}}({isSelected:t,row:n}))},onError:function(t){return e(Object(f.addNotification)({variant:"danger",title:"Server error",description:t,dismissable:!0}))}}})(we)),Oe=n(510),je=n.n(Oe),Pe=(n(1005),n(339)),Se=n(290),Ae=n(291),De=n(299),Ne=n(300),ke=n(301),xe=n(302),Le=n(292),Ie=n(293),Ce=n(297),He=n(226),Re=n(511),Te=n.n(Re),Me=function(e){var t=e.loadApi,n=e.detail,r=e.match.params;Object(o.useEffect)(function(){t(r.apiName)},[]);var a=Object(o.useState)(!1),c=U()(a,2),l=c[0],d=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.PageHeader,{className:"pf-m-light"},i.a.createElement(J.PageHeaderTitle,{title:i.a.createElement(i.a.Fragment,null,i.a.createElement(Se.a,null,i.a.createElement(Ae.a,null,i.a.createElement(s.Link,{to:"/"},"Overview")),i.a.createElement(Ae.a,{isActive:!0},r.apiName)),i.a.createElement(i.a.Fragment,null,n.loaded&&!n.error&&i.a.createElement(De.a,{className:"ins-c-docs__api-detail"},i.a.createElement(Ne.a,{className:"ins-c-docs__api-detail-info"},n.loaded?"Detail of ".concat(n.spec.info.title):i.a.createElement(J.Skeleton,{size:J.SkeletonSize.md})),i.a.createElement(Ne.a,null,i.a.createElement(ke.a,{gutter:"sm"},i.a.createElement(xe.a,{className:"ins-c-docs__api-detail-info"},n.loaded&&!n.error?i.a.createElement("a",{href:"".concat(location.origin).concat(n.latest),target:"_blank",rel:"noopener noreferrer"},"Open Raw ",i.a.createElement(He.b,{size:"sm"})):i.a.createElement(J.Skeleton,{size:J.SkeletonSize.mdmd})),i.a.createElement(xe.a,{className:"ins-c-docs__api-detail-info"},n.loaded?i.a.createElement(oe.a,{onClick:function(){return d(!0)},variant:oe.c.secondary},"Show JSON"):i.a.createElement(J.Skeleton,{size:J.SkeletonSize.md})))))))})),i.a.createElement(J.Main,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(Le.a,null,i.a.createElement(Ie.a,null,n.loaded&&i.a.createElement(je.a,{spec:n.spec}),!n.loaded&&i.a.createElement(Pe.Facebook,null))))),i.a.createElement(Ce.a,{width:"50%",title:"Modal Header",isOpen:l,onClose:function(){return d(!1)},actions:[i.a.createElement(oe.a,{key:"close",variant:oe.c.secondary,onClick:function(){return d(!1)}},"Close")]},i.a.createElement(Te.a,{src:n.spec})))};Me.propTypes={loadApi:T.a.func,detail:T.a.shape({loaded:T.a.bool}),match:T.a.shape({params:T.a.shape({apiName:T.a.string})})},Me.defaultProps={loadApi:function(){},detail:{loaded:!1}};var Fe=Object(M.k)(Object(d.connect)(function(e){return{detail:e.detail}},function(e){return{loadApi:function(t){return e(function(e){return{type:"LOAD_ONE_API",payload:Z(e)}}({name:t,version:"v1"}))}}})(Me)),ze="/",Be="/:apiName",Ue=function(e){var t=e.component,n=e.rootClass,r=y()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.setAttribute("role","main"),i.a.createElement(M.d,z()({},r,{component:t}))};Ue.propTypes={component:T.a.func,rootClass:T.a.string};var Je=function(){return i.a.createElement(M.g,null,i.a.createElement(Ue,{exact:!0,path:ze,component:_e,rootClass:"overview"}),i.a.createElement(Ue,{exact:!0,path:Be,component:Fe,rootClass:"detail"}),i.a.createElement(Ue,{component:_e,rootClass:"overview"}))};Je.propTypes={childProps:T.a.shape({location:T.a.shape({pathname:T.a.string})})};n(1006);var qe=function(e){function t(){return A()(this,t),x()(this,I()(t).apply(this,arguments))}return H()(t,e),N()(t,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("api-docs")}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.NotificationsPortal,null),i.a.createElement(Je,{childProps:this.props}))}}]),t}(o.Component);qe.propTypes={history:T.a.object};var Ge=Object(M.k)(Object(d.connect)()(qe)),We=n(512);l.a.render(i.a.createElement(d.Provider,{store:function(){if(O)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(O=new p.a({},[Object(m.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))).register({services:j,detail:P,notifications:f.notifications}),O}().getStore()},i.a.createElement(s.BrowserRouter,{basename:Object(We.getBaseName)(window.location.pathname)},i.a.createElement(Ge,null))),document.getElementById("root"))},281:function(e,t,n){(t=e.exports=n(4)(!1)).i(n(1007),""),t.i(n(1008),""),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.info__contact{display:none}.auth-wrapper{display:none !important}.ins-c-api__list-item{cursor:pointer}.ins-c-docs__api .ins-c-docs__api-overview-toolbar{width:100%}.ins-c-docs__api .pf-c-table tbody td:nth-child(2){cursor:pointer;color:var(--pf-global--link--Color)}.ins-c-docs__api-detail .ins-c-docs__api-detail-info{min-width:100px}.ins-c-docs__api-detail .ins-c-docs__api-detail-info a{vertical-align:text-top}.ins-c-api__download--selected{margin-left:var(--pf-global--spacer--md)}\n",""])},632:function(e,t){},634:function(e,t){}});
//# sourceMappingURL=App.js.map