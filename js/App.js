!function(e){function t(t){for(var r,a,o=t[0],i=t[1],c=t[2],l=0,s=[];l<o.length;l++)a=o[l],D[a]&&s.push(D[a][0]),D[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(C&&C(t);s.length;)s.shift()();return N.push.apply(N,c||[]),n()}function n(){for(var e,t=0;t<N.length;t++){for(var n=N[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==D[o]&&(r=!1)}r&&(N.splice(t--,1),e=k(k.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--g&&0===y&&j()}(e,t),r&&r(e,t)};var a,o=!0,i="8eaf57311ae89f6ff195",c=1e4,l={},s=[],u=[];var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,h,v,g=0,y=0,b={},E={},w={};function O(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=k.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;E={},b={},w=e.c,v=e.h,f("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var n in h={},D)S(n);return"prepare"===p&&0===y&&0===g&&j(),t})}function S(e){w[e]?(E[e]=!0,g++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=k.p+""+e+"."+i+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function j(){f("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then(function(){return P(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(O(n));e.resolve(t)}}function P(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,a,o,c;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,c=a.chain;if((o=A[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var l=0;l<o.parents.length;l++){var s=o.parents[l],u=A[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),d(n[s],[i])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},g=[],y={},b=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var _;c=O(E);var S=!1,j=!1,P=!1,N="";switch((_=h[E]?u(c):{type:"disposed",moduleId:E}).chain&&(N="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(S=new Error("Aborted because of self decline: "+_.moduleId+N));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+N));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(S=new Error("Aborted because "+c+" is not accepted"+N));break;case"accepted":t.onAccepted&&t.onAccepted(_),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),P=!0;break;default:throw new Error("Unexception type "+_.type)}if(S)return f("abort"),Promise.reject(S);if(j)for(c in y[c]=h[c],d(g,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,c)&&(m[c]||(m[c]=[]),d(m[c],_.outdatedDependencies[c]));P&&(d(g,[_.moduleId]),y[c]=b)}var x,L=[];for(r=0;r<g.length;r++)c=g[r],A[c]&&A[c].hot._selfAccepted&&L.push({module:c,errorHandler:A[c].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete D[e]}(e)});for(var I,C,H=g.slice();H.length>0;)if(c=H.pop(),o=A[c]){var R={},T=o.hot._disposeHandlers;for(a=0;a<T.length;a++)(n=T[a])(R);for(l[c]=R,o.hot.active=!1,delete A[c],delete m[c],a=0;a<o.children.length;a++){var M=A[o.children[a]];M&&((x=M.parents.indexOf(c))>=0&&M.parents.splice(x,1))}}for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(o=A[c]))for(C=m[c],a=0;a<C.length;a++)I=C[a],(x=o.children.indexOf(I))>=0&&o.children.splice(x,1);for(c in f("apply"),i=v,y)Object.prototype.hasOwnProperty.call(y,c)&&(e[c]=y[c]);var F=null;for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(o=A[c])){C=m[c];var z=[];for(r=0;r<C.length;r++)if(I=C[r],n=o.hot._acceptedDependencies[I]){if(-1!==z.indexOf(n))continue;z.push(n)}for(r=0;r<z.length;r++){n=z[r];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:C[r],error:e}),t.ignoreErrored||F||(F=e)}}}for(r=0;r<L.length;r++){var B=L[r];c=B.module,s=[c];try{k(c)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||F||(F=n),F||(F=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||F||(F=e)}}return F?(f("fail"),Promise.reject(F)):(f("idle"),new Promise(function(e){e(g)}))}var A={},D={0:0},N=[];function k(t){if(A[t])return A[t].exports;var n=A[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:_,apply:P,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:l[e]};return a=void 0,t}(t),parents:(u=s,s=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=A[e];if(!t)return k;var n=function(n){return t.hot.active?(A[n]?-1===A[n].parents.indexOf(e)&&A[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),k(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(t){k[e]=t}}};for(var o in k)Object.prototype.hasOwnProperty.call(k,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&f("prepare"),y++,k.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===p&&(b[e]||S(e),0===y&&0===g&&j())}},n.t=function(e,t){return 1&t&&(e=n(e)),k.t(e,-2&t)},n}(t)),n.l=!0,n.exports}k.m=e,k.c=A,k.d=function(e,t,n){k.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,t){if(1&t&&(e=k(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(k.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)k.d(n,r,function(t){return e[t]}.bind(null,r));return n},k.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(t,"a",t),t},k.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},k.p="/beta/apps/api-docs/",k.h=function(){return i};var x=window.webpackJsonp=window.webpackJsonp||[],L=x.push.bind(x);x.push=t,x=x.slice();for(var I=0;I<x.length;I++)t(x[I]);var C=L;N.push([1014,1]),n()}({1011:function(e,t,n){var r=n(281);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(5)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(281,function(){var t=n(281);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},1014:function(e,t,n){"use strict";n.r(t);var r,a,o=n(2),i=n.n(o),c=n(28),l=n.n(c),s=n(87),u=n(66),d=n(324),p=n.n(d),f=n(89),m=n(494),h=n(309),v=n.n(h),g=n(90),y=n.n(g),b=n(36),E=n.n(b),w={loaded:!1,selectedRows:{}},O=["automation-analytics","aiops-insights-clustering","openshift","ruledev","migration-analytics","subscriptions"];var _,S=Object(d.applyReducerHash)((r={},v()(r,"".concat("LOAD_ALL","_FULFILLED"),function(e,t){var n=t.payload;return E()({},e,{endpoints:n&&n.services.filter(function(e){return!O.includes(e.appName)&&(!e.api.isBeta||insights.chrome.isBeta())}).map(function(e){return E()({},e,{version:e.api.versions[0],appName:e.api.alias&&e.api.alias[0]||e.appName})}),loaded:!0})}),v()(r,"".concat("LOAD_ALL","_PENDING"),function(){return w}),v()(r,"SELECT_ROW",function(e,t){var n=t.payload,r=n.isSelected,a=n.row,o=E()({},e.selectedRows||{},Array.isArray(a)?a.reduce(function(e,t){return E()({},e,v()({},t.cells[0].value,{isSelected:r,appName:t.cells[0].value,version:t.cells[2].value}))},{}):v()({},a.cells[0].value,{isSelected:r,appName:a.cells[0].value,version:a.cells[2].value}));return E()({},e,{selectedRows:o})}),r),w),j=Object(d.applyReducerHash)((a={},v()(a,"".concat("LOAD_ONE_API","_FULFILLED"),function(e,t){var n=t.payload,r=n.latest,a=y()(n,["latest"]);return E()({},e,{spec:a,latest:r,loaded:!0})}),v()(a,"".concat("LOAD_ONE_API","_PENDING"),function(){return{loaded:!1}}),v()(a,"".concat("LOAD_ONE_API","_REJECTED"),function(){return{loaded:!0,error:!0}}),a),w);var P=n(478),A=n.n(P),D=n(479),N=n.n(D),k=n(480),x=n.n(k),L=n(481),I=n.n(L),C=n(482),H=n.n(C),R=n(1),T=n.n(R),M=n(156),F=n(325),z=n.n(F),B=n(320),U=n.n(B),J=n(35),q=n(468),G=n(155),W=n(1025),V=n(1024),X=n(483),K=n.n(X),$={"aiops-clustering":"v1.0","aiops-idle-cost-savings":"v1.0","aiops-instance-type-validation":"v1.0","aiops-outlier-detection":"v1.0"},Q=n(112),Y=n.n(Q),Z=n(484),ee=function(e){var t=e.name,n=e.version,r=void 0===n?"v1":n,a=function(e,t){return"/".concat("api","/").concat(e,"/").concat(t,"/openapi.json")}(t,$[t]||r);return Y.a.get(a).then(function(e){return E()({},e,{latest:a,name:t,servers:[].concat(K()(e.servers||[]),[{url:"/api/".concat(t,"/").concat(r)}]).filter(function(e,t,n){return n.findIndex(function(t){var n=t.url;return 0===e.url.indexOf(n)})===t}).map(function(e){return E()({},e,{url:0===e.url.indexOf("/")?"".concat(location.origin).concat(e.url):e.url})})})})},te=function(){return{type:"LOAD_ALL",payload:Y.a.get("".concat(insights.chrome.isBeta()?"/beta":"","/config/main.yml")).then(function(e){return Object(Z.safeLoad)(e)}).then(function(e){return{services:Object.keys(e).filter(function(t){return e[t].api}).map(function(t){return E()({appName:t},e[t])})}})}},ne=n(345),re=n.n(ne),ae=n(485),oe=n.n(ae),ie=n(289),ce=n(283),le=n(298),se=n(295),ue=n(284),de=n(296),pe=n(471),fe=n(334),me=n(229),he=n(326),ve=n.n(he),ge=n(486),ye=n.n(ge),be=["title","appName","version"],Ee=[{title:"Application name",transforms:[pe.a]},{title:"API endpoint",transforms:[pe.a]},{title:"API version",transforms:[pe.a,Object(fe.a)(10)]},{title:"Download",transforms:[Object(fe.a)(10)]}],we=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{selected:r[t]&&r[t].isSelected,cells:[{title:e,value:t,props:{"data-position":"title"}},"/api/".concat(t),{title:i.a.createElement(ie.a,null,n),value:n},{title:i.a.createElement(ce.a,{variant:"plain",onClick:function(){return function(e,t){ee({name:e,version:t}).then(function(t){delete t.latest,delete t.name,ve()(JSON.stringify(t),"".concat(e,"-openapi.json"))})}(t,n)}}," ",i.a.createElement(me.b,null)," ")}]}},Oe=[{cells:[{title:i.a.createElement(J.EmptyTable,null,i.a.createElement(le.a,null,i.a.createElement(se.a,{variant:se.b.full},i.a.createElement(ue.a,{headingLevel:"h5",size:"lg"},"No matching rules found"),i.a.createElement(de.a,null,"This filter criteria matches no rules. ",i.a.createElement("br",null)," Try changing your filter settings.")))),props:{colSpan:Ee.length}}]}];var _e=function(e){var t=e.loadApis,n=e.services,r=e.history,a=e.selectRow,c=e.onError;Object(o.useEffect)(function(){t()},[]);var l=Object(o.useState)({}),s=U()(l,2),u=s[0],d=s[1],p=Object(o.useState)({perPage:50,page:1}),f=U()(p,2),m=f[0],h=f[1],v=Object(o.useState)(""),g=U()(v,2),b=g[0],w=g[1],O=b&&n.endpoints.filter(function(e){return function(e,t){return be.some(function(n){return e[n]&&-1!==e[n].toLocaleLowerCase().indexOf(t.toLocaleLowerCase())})}(e,b)}),_=n.loaded?function(e,t,n,r){var a=t.page,o=t.perPage;return n.length>0?n.sort(function(t,n){return function(e,t,n,r){return void 0!==n?r?e[n]<t[n]?1:t[n]<e[n]?-1:0:e[n]>t[n]?1:t[n]>e[n]?-1:0:0}(t,n,be[e.index],e.direction===G.a.desc)}).slice((a-1)*o,a*o).map(function(e){var t=e.frontend,n=e.title,a=e.appName,o=e.version;return we(t&&t.title||n,a,o,r)}):Oe}(u,m,O||n.endpoints,n.selectedRows):[];return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.PageHeader,{className:"pf-m-light"},i.a.createElement(J.PageHeaderTitle,{title:"API documentation"})),i.a.createElement(J.Main,{className:"ins-c-docs__api"},i.a.createElement(i.a.Fragment,null,i.a.createElement(J.PrimaryToolbar,z()({filterConfig:{items:[{label:"Filter by text",type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by text",value:b,onChange:function(e,t){h(E()({},m,{page:1})),w(t)},isDisabled:!n.loaded}}]},actionsConfig:{actions:[{label:"Download Selected",props:{isDisabled:function(e){var t=e.selectedRows;return!t||0===Object.values(t||{}).map(function(e){return e.isSelected}).filter(Boolean).length}(n),onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=new ye.a,r=Object.values(e||{}).filter(function(e){return e.isSelected}).map(function(){var e=oe()(re.a.mark(function e(n){var r,a;return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.appName,a=n.version,e.prev=1,e.next=4,ee({name:r,version:a});case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),t(e.t0);case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(t){return e.apply(this,arguments)}}());Promise.all(r).then(function(e){if(e&&e.length>1)e.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=y()(e,["name"]);t&&(delete r.latest,n.file("".concat(t,"-openapi.json"),JSON.stringify(r)))}),n.generateAsync({type:"blob"}).then(function(e){return ve()(e,"cloud-services-openapi.zip")});else if(e&&1===e.length){var t=e[0]||{},r=t.name,a=y()(t,["name"]);r&&(delete a.latest,ve()(JSON.stringify(a),"".concat(r,"-openapi.json")))}})}(n.selectedRows,c)}}}]}},n.loaded&&{pagination:E()({},m,{itemCount:(O||n.endpoints).length,onSetPage:function(e,t){return h(E()({},m,{page:t}))},onPerPageSelect:function(e,t){return h(E()({},m,{perPage:t}))}})},b.length>0&&{activeFiltersConfig:{filters:[{name:b}],onDelete:function(){h(E()({},m,{page:1})),w("")}}})),n.loaded?i.a.createElement(G.b,z()({"aria-label":"Sortable Table",variant:G.d.compact,sortBy:u,onSort:function(e,t,n){return d({index:t,direction:n})},cells:Ee,rows:_},(O||n.endpoints).length>0&&{onSelect:function(e,t,n){a(t,-1===n?_:_[n])}}),i.a.createElement(W.a,null),i.a.createElement(V.a,{onRowClick:function(e,t){"title"===e.target.getAttribute("data-position")?r.push("/".concat(t.cells[0].value.replace("/api/",""))):e.target.matches("input")||a(!t.selected,t)}})):i.a.createElement(J.SkeletonTable,{columns:Ee,rowSize:28})),i.a.createElement(J.TableToolbar,{isFooter:!0},n.loaded?i.a.createElement(q.a,{variant:"bottom",dropDirection:"up",itemCount:(O||n.endpoints).length,perPage:m.perPage,page:m.page,onSetPage:function(e,t){return h(E()({},m,{page:t}))},onPerPageSelect:function(e,t){return h(E()({},m,{perPage:t}))}}):"loading")))};_e.propTypes={loadApis:T.a.func,onError:T.a.func,services:T.a.shape({loaded:T.a.bool,selectedRows:T.a.shape({isSelected:T.a.bool})}),history:T.a.shape({push:T.a.func}),selectRow:T.a.func},_e.defaultProps={loadApis:function(){},selectRow:function(){},onError:function(){},services:{loaded:!1,selectedRows:{}}};var Se=Object(M.k)(Object(u.connect)(function(e){return{services:e.services}},function(e){return{loadApis:function(){return e(te())},selectRow:function(t,n){return e(function(e){return{type:"SELECT_ROW",payload:e}}({isSelected:t,row:n}))},onError:function(t){return e(Object(f.addNotification)({variant:"danger",title:"Server error",description:t,dismissable:!0}))}}})(_e)),je=n(490),Pe=n.n(je),Ae=(n(1010),n(339)),De=n(290),Ne=n(291),ke=n(299),xe=n(300),Le=n(301),Ie=n(333),Ce=n(292),He=n(293),Re=n(297),Te=n(226),Me=n(491),Fe=n.n(Me),ze=function(e){var t=e.loadApi,n=e.detail,r=e.match.params;Object(o.useEffect)(function(){t(r.apiName)},[]);var a=Object(o.useState)(!1),c=U()(a,2),l=c[0],u=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.PageHeader,{className:"pf-m-light"},i.a.createElement(J.PageHeaderTitle,{title:i.a.createElement(i.a.Fragment,null,i.a.createElement(De.a,null,i.a.createElement(Ne.a,null,i.a.createElement(s.Link,{to:"/"},"Overview")),i.a.createElement(Ne.a,{isActive:!0},r.apiName)),i.a.createElement(i.a.Fragment,null,n.loaded&&!n.error&&i.a.createElement(ke.a,{className:"ins-c-docs__api-detail"},i.a.createElement(xe.a,{className:"ins-c-docs__api-detail-info"},n.loaded?"Detail of ".concat(n.spec.info.title):i.a.createElement(J.Skeleton,{size:J.SkeletonSize.md})),i.a.createElement(xe.a,null,i.a.createElement(Le.a,{gutter:"sm"},i.a.createElement(Ie.a,{className:"ins-c-docs__api-detail-info"},n.loaded&&!n.error?i.a.createElement("a",{href:"".concat(location.origin).concat(n.latest),target:"_blank",rel:"noopener noreferrer"},"Open Raw ",i.a.createElement(Te.b,{size:"sm"})):i.a.createElement(J.Skeleton,{size:J.SkeletonSize.mdmd})),i.a.createElement(Ie.a,{className:"ins-c-docs__api-detail-info"},n.loaded?i.a.createElement(ce.a,{onClick:function(){return u(!0)},variant:ce.c.secondary},"Show JSON"):i.a.createElement(J.Skeleton,{size:J.SkeletonSize.md})))))))})),i.a.createElement(J.Main,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(Ce.a,null,i.a.createElement(He.a,null,n.loaded&&i.a.createElement(Pe.a,{deepLinking:!0,docExpansion:"list",spec:n.spec,onComplete:function(e){var t=e.layoutActions.show;if(e.layoutActions.show=function(e,n){history.replaceState({},"","".concat(location.pathname,"#").concat(CSS.escape(e.join("-")))),t(e,n)},location.hash&&location.hash.length>0){var n=document.querySelector("[id$='".concat(location.hash.replace("#","").replace(/\\./g,"\\\\."),"']"));n&&(n.scrollIntoView(),t(location.hash.replace("#","").replace(/\\/g,"").split("-"),!0))}}}),!n.loaded&&i.a.createElement(Ae.Facebook,null))))),i.a.createElement(Re.a,{width:"50%",title:"Spec JSON",isOpen:l,onClose:function(){return u(!1)},actions:[i.a.createElement(ce.a,{key:"close",variant:ce.c.secondary,onClick:function(){return u(!1)}},"Close")]},i.a.createElement(Fe.a,{src:n.spec})))};ze.propTypes={loadApi:T.a.func,detail:T.a.shape({loaded:T.a.bool}),match:T.a.shape({params:T.a.shape({apiName:T.a.string})})},ze.defaultProps={loadApi:function(){},detail:{loaded:!1}};var Be=Object(M.k)(Object(u.connect)(function(e){return{detail:e.detail}},function(e){return{loadApi:function(t){return e(function(e){return{type:"LOAD_ONE_API",payload:ee(e)}}({name:t,version:"v1"}))}}})(ze)),Ue="/",Je="/:apiName",qe=function(e){var t=e.component,n=e.rootClass,r=y()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.setAttribute("role","main"),i.a.createElement(M.d,z()({},r,{component:t}))};qe.propTypes={component:T.a.func,rootClass:T.a.string};var Ge=function(){return i.a.createElement(M.g,null,i.a.createElement(qe,{exact:!0,path:Ue,component:Se,rootClass:"overview"}),i.a.createElement(qe,{exact:!0,path:Je,component:Be,rootClass:"detail"}),i.a.createElement(qe,{component:Se,rootClass:"overview"}))};Ge.propTypes={childProps:T.a.shape({location:T.a.shape({pathname:T.a.string})})};n(1011);var We=function(e){function t(){return A()(this,t),x()(this,I()(t).apply(this,arguments))}return H()(t,e),N()(t,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("api-docs")}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.NotificationsPortal,null),i.a.createElement(Ge,{childProps:this.props}))}}]),t}(o.Component);We.propTypes={history:T.a.object};var Ve=Object(M.k)(Object(u.connect)()(We)),Xe=n(492);l.a.render(i.a.createElement(u.Provider,{store:function(){if(_)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(_=new p.a({},[Object(m.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))).register({services:S,detail:j,notifications:f.notifications}),_}().getStore()},i.a.createElement(s.BrowserRouter,{basename:Object(Xe.getBaseName)(window.location.pathname)},i.a.createElement(Ve,null))),document.getElementById("root"))},281:function(e,t,n){(t=e.exports=n(4)(!1)).i(n(1012),""),t.i(n(1013),""),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.info__contact{display:none}.auth-wrapper{display:none !important}.ins-c-api__list-item{cursor:pointer}.ins-c-docs__api .ins-c-docs__api-overview-toolbar{width:100%}.ins-c-docs__api .pf-c-table tbody td:nth-child(2){cursor:pointer;color:var(--pf-global--link--Color)}.ins-c-docs__api-detail .ins-c-docs__api-detail-info{min-width:100px}.ins-c-docs__api-detail .ins-c-docs__api-detail-info a{vertical-align:text-top}.ins-c-api__download--selected{margin-left:var(--pf-global--spacer--md)}\n",""])},635:function(e,t){},637:function(e,t){}});
//# sourceMappingURL=App.js.map