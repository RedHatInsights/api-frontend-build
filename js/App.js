!function(e){function n(n){for(var r,a,o=n[0],i=n[1],c=n[2],l=0,s=[];l<o.length;l++)a=o[l],D[a]&&s.push(D[a][0]),D[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(H&&H(n);s.length;)s.shift()();return k.push.apply(k,c||[]),t()}function t(){for(var e,n=0;n<k.length;n++){for(var t=k[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==D[o]&&(r=!1)}r&&(k.splice(n--,1),e=N(N.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!w[e]||!y[e])return;for(var t in y[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--g&&0===b&&P()}(e,n),r&&r(e,n)};var a,o=!0,i="1221db806a8bd3c86bbe",c=1e4,l={},s=[],u=[];var d=[],p="idle";function f(e){p=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var m,h,v,g=0,b=0,E={},y={},w={};function _(e){return+e+""===e?+e:e}function O(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,a=N.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+a+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;y={},E={},w=e.c,v=e.h,f("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var t in h={},D)j(t);return"prepare"===p&&0===b&&0===g&&P(),n})}function j(e){w[e]?(y[e]=!0,g++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=N.p+""+e+"."+i+".hot-update.js",n.appendChild(t)}(e)):E[e]=!0}function P(){f("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then(function(){return S(o)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(_(t));e.resolve(n)}}function S(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,r,a,o,c;function u(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,c=a.chain;if((o=A[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var l=0;l<o.parents.length;l++){var s=o.parents[l],u=A[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(u.hot._acceptedDependencies[i]?(t[s]||(t[s]=[]),d(t[s],[i])):(delete t[s],n.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var m={},g=[],b={},E=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var y in h)if(Object.prototype.hasOwnProperty.call(h,y)){var O;c=_(y);var j=!1,P=!1,S=!1,k="";switch((O=h[y]?u(c):{type:"disposed",moduleId:y}).chain&&(k="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+k));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+k));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(j=new Error("Aborted because "+c+" is not accepted"+k));break;case"accepted":n.onAccepted&&n.onAccepted(O),P=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),S=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return f("abort"),Promise.reject(j);if(P)for(c in b[c]=h[c],d(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,c)&&(m[c]||(m[c]=[]),d(m[c],O.outdatedDependencies[c]));S&&(d(g,[O.moduleId]),b[c]=E)}var L,x=[];for(r=0;r<g.length;r++)c=g[r],A[c]&&A[c].hot._selfAccepted&&x.push({module:c,errorHandler:A[c].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete D[e]}(e)});for(var I,H,T=g.slice();T.length>0;)if(c=T.pop(),o=A[c]){var C={},R=o.hot._disposeHandlers;for(a=0;a<R.length;a++)(t=R[a])(C);for(l[c]=C,o.hot.active=!1,delete A[c],delete m[c],a=0;a<o.children.length;a++){var M=A[o.children[a]];M&&((L=M.parents.indexOf(c))>=0&&M.parents.splice(L,1))}}for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(o=A[c]))for(H=m[c],a=0;a<H.length;a++)I=H[a],(L=o.children.indexOf(I))>=0&&o.children.splice(L,1);for(c in f("apply"),i=v,b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);var F=null;for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(o=A[c])){H=m[c];var z=[];for(r=0;r<H.length;r++)if(I=H[r],t=o.hot._acceptedDependencies[I]){if(-1!==z.indexOf(t))continue;z.push(t)}for(r=0;r<z.length;r++){t=z[r];try{t(H)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:c,dependencyId:H[r],error:e}),n.ignoreErrored||F||(F=e)}}}for(r=0;r<x.length;r++){var U=x[r];c=U.module,s=[c];try{N(c)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:e}),n.ignoreErrored||F||(F=t),F||(F=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:c,error:e}),n.ignoreErrored||F||(F=e)}}return F?(f("fail"),Promise.reject(F)):(f("idle"),new Promise(function(e){e(g)}))}var A={},D={0:0},k=[];function N(n){if(A[n])return A[n].exports;var t=A[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:O,apply:S,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:l[e]};return a=void 0,n}(n),parents:(u=s,s=[],u),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=A[e];if(!n)return N;var t=function(t){return n.hot.active?(A[t]?-1===A[t].parents.indexOf(e)&&A[t].parents.push(e):(s=[e],a=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),s=[]),N(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return N[e]},set:function(n){N[e]=n}}};for(var o in N)Object.prototype.hasOwnProperty.call(N,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(t,o,r(o));return t.e=function(e){return"ready"===p&&f("prepare"),b++,N.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===p&&(E[e]||j(e),0===b&&0===g&&P())}},t.t=function(e,n){return 1&n&&(e=t(e)),N.t(e,-2&n)},t}(n)),t.l=!0,t.exports}N.m=e,N.c=A,N.d=function(e,n,t){N.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},N.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},N.t=function(e,n){if(1&n&&(e=N(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(N.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)N.d(t,r,function(n){return e[n]}.bind(null,r));return t},N.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return N.d(n,"a",n),n},N.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},N.p="/beta/apps/api/",N.h=function(){return i};var L=window.webpackJsonp=window.webpackJsonp||[],x=L.push.bind(L);L.push=n,L=L.slice();for(var I=0;I<L.length;I++)n(L[I]);var H=x;k.push([951,1]),t()}({272:function(e,n,t){(n=e.exports=t(4)(!1)).i(t(949),""),n.i(t(950),""),n.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.info__contact {\n  display: none; }\n\n.auth-wrapper {\n  display: none !important; }\n\n.ins-c-api__list-item {\n  cursor: pointer; }\n\n.ins-c-docs__api .ins-c-docs__api-overview-toolbar {\n  width: 100%; }\n\n.ins-c-docs__api .pf-c-table tbody td:nth-child(2) {\n  cursor: pointer;\n  color: var(--pf-global--link--Color); }\n\n.ins-c-docs__api-detail .ins-c-docs__api-detail-info {\n  min-width: 100px; }\n  .ins-c-docs__api-detail .ins-c-docs__api-detail-info a {\n    vertical-align: text-top; }\n",""])},584:function(e,n){},586:function(e,n){},948:function(e,n,t){var r=t(272);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=t(5)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(272,function(){var n=t(272);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(n)}),e.hot.dispose(function(){o()})},951:function(e,n,t){"use strict";t.r(n);var r,a,o=t(2),i=t.n(o),c=t(15),l=t.n(c),s=t(77),u=t(48),d=t(129),p=t.n(d),f=t(80),m=t(450),h=t(52),v=t.n(h),g=t(81),b=t.n(g),E=t(31),y=t.n(E),w={loaded:!1,selectedRows:{}},_=["/api/webhooks","/api/aiops-insights-clustering"];var O,j=Object(d.applyReducerHash)((r={},v()(r,"".concat("LOAD_ALL","_FULFILLED"),function(e,n){var t=n.payload;return y()({},e,{endpoints:t&&t.services.filter(function(e){return!_.includes(e)}).map(function(e){return y()({},e,{version:e.api.versions[0]})}),loaded:!0})}),v()(r,"".concat("LOAD_ALL","_PENDING"),function(){return w}),v()(r,"SELECT_ROW",function(e,n){var t=n.payload,r=t.isSelected,a=t.row,o=y()({},e.selectedRows||{},Array.isArray(a)?a.reduce(function(e,n){return y()({},e,v()({},n.cells[0].value,{isSelected:r,appName:n.cells[0].value,version:n.cells[2].value}))},{}):v()({},a.cells[0].value,{isSelected:r,appName:a.cells[0].value,version:a.cells[2].value}));return y()({},e,{selectedRows:o})}),r),w),P=Object(d.applyReducerHash)((a={},v()(a,"".concat("LOAD_ONE_API","_FULFILLED"),function(e,n){var t=n.payload,r=t.latest,a=b()(t,["latest"]);return y()({},e,{spec:a,latest:r,loaded:!0})}),v()(a,"".concat("LOAD_ONE_API","_PENDING"),function(){return{loaded:!1}}),v()(a,"".concat("LOAD_ONE_API","_REJECTED"),function(){return{loaded:!0,error:!0}}),a),w);var S=t(432),A=t.n(S),D=t(433),k=t.n(D),N=t(434),L=t.n(N),x=t(435),I=t.n(x),H=t(436),T=t.n(H),C=t(1),R=t.n(C),M=t(152),F=t(437),z=t.n(F),U=t(84),J=t.n(U),B=t(27),q=t(422),G=t(308),W=t(421),X=t(299),K=t(300),Q=t(273),V=t(418),Y=t(957),Z=t(956),$={"aiops-clustering":"v1.0","aiops-idle-cost-savings":"v1.0","aiops-instance-type-validation":"v1.0","aiops-outlier-detection":"v1.0"},ee=t(100),ne=t.n(ee),te=t(440),re=function(e,n){return"/".concat("api","/").concat(e,"/").concat(n,"/openapi.json")},ae=function(e){var n=e.name,t=e.version,r=re(n,$[n]||(void 0===t?"v1":t));return ne.a.get(r).then(function(e){return y()({},e,{latest:r,name:n})})},oe=function(){return{type:"LOAD_ALL",payload:ne.a.get("".concat(insights.chrome.isBeta()?"/beta":"","/config/main.yml")).then(function(e){return Object(te.safeLoad)(e)}).then(function(e){return{services:Object.keys(e).filter(function(n){return e[n].api}).map(function(n){return y()({appName:n},e[n])})}})}},ie=t(425),ce=t.n(ie),le=t(441),se=t.n(le),ue=t(290),de=t(153),pe=t(154),fe=t(283),me=t(301),he=t(347),ve=t(348),ge=t(420),be=t(130),Ee=t.n(be),ye=t(442),we=t.n(ye),_e=["title","appName","version"],Oe=[{title:"Application name",transforms:[he.a]},{title:"API endpoint",transforms:[he.a]},{title:"API version",transforms:[he.a,Object(ve.a)(10)]}],je=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{selected:r[n]&&r[n].isSelected,cells:[{title:e,value:n,props:{"data-position":"title"}},"/api/".concat(n),{title:i.a.createElement(ue.a,null,t),value:t}]}},Pe=[{cells:[{title:i.a.createElement(B.EmptyTable,null,i.a.createElement(de.a,null,i.a.createElement(pe.b,{variant:pe.a.full},i.a.createElement(fe.a,{headingLevel:"h5",size:"lg"},"No matching rules found"),i.a.createElement(me.a,null,"This filter criteria matches no rules. ",i.a.createElement("br",null)," Try changing your filter settings.")))),props:{colSpan:Oe.length}}]}];var Se=[{title:"Download JSON",onClick:function(e,n,t){!function(e,n){ae({name:e,version:n}).then(function(n){delete n.latest,delete n.name,Ee()(n,"".concat(e,"-openapi.json"))})}(t.cells[0].value,t.cells[2].value)}},{title:"Show raw JSON",onClick:function(e,n,t){var r=t.cells[0].value,a=t.cells[2].value;window.open(re(r,a),"_blank")}}];var Ae=function(e){var n=e.loadApis,t=e.services,r=e.history,a=e.selectRow,c=e.onError;Object(o.useEffect)(function(){n()},[]);var l=Object(o.useState)({}),s=J()(l,2),u=s[0],d=s[1],p=Object(o.useState)({perPage:50,page:1}),f=J()(p,2),m=f[0],h=f[1],v=Object(o.useState)(""),g=J()(v,2),E=g[0],w=g[1],_=Object(o.useState)(!1),O=J()(_,2),j=O[0],P=O[1],S=E&&t.endpoints.filter(function(e){return function(e,n){return _e.some(function(t){return e[t]&&-1!==e[t].toLocaleLowerCase().indexOf(n.toLocaleLowerCase())})}(e,E)}),A=t.loaded?function(e,n,t,r){var a=n.page,o=n.perPage;return t.length>0?t.sort(function(n,t){return function(e,n,t,r){return void 0!==t?r?e[t]<n[t]?1:n[t]<e[t]?-1:0:e[t]>n[t]?1:n[t]>e[t]?-1:0:0}(n,t,_e[e.index],e.direction===ge.a.desc)}).slice((a-1)*o,a*o).map(function(e){var n=e.title,t=e.appName,a=e.version;return je(n,t,a,r)}):Pe}(u,m,S||t.endpoints,t.selectedRows):[];return i.a.createElement(i.a.Fragment,null,i.a.createElement(B.PageHeader,{className:"pf-m-light"},i.a.createElement(B.PageHeaderTitle,{title:"Api documentation"})),i.a.createElement(B.Main,{className:"ins-c-docs__api"},i.a.createElement(i.a.Fragment,null,i.a.createElement(B.TableToolbar,null,t.loaded?i.a.createElement(q.a,{className:"ins-c-docs__api-overview-toolbar"},i.a.createElement(G.a,null,i.a.createElement(q.a,null,i.a.createElement(G.a,null,i.a.createElement(B.SimpleTableFilter,{onFilterChange:function(e){h(y()({},m,{page:1})),w(e)},buttonTitle:null})),i.a.createElement(G.a,null,i.a.createElement(W.a,{dropdownItems:[i.a.createElement(X.a,{key:"download",component:"button",onClick:function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,t=new we.a,r=Object.values(e||{}).filter(function(e){return e.isSelected}).map(function(){var e=se()(ce.a.mark(function e(t){var r,a;return ce.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.appName,a=t.version,e.prev=1,e.next=4,ae({name:r,version:a});case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),n(e.t0);case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(n){return e.apply(this,arguments)}}());Promise.all(r).then(function(e){if(e&&e.length>1)e.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.name,r=b()(e,["name"]);n&&(delete r.latest,t.file("".concat(n,"-openapi.json"),JSON.stringify(r)))}),t.generateAsync({type:"blob"}).then(function(e){return Ee()(e,"cloud-services-openapi.zip")});else if(e&&1===e.length){var n=e[0]||{},r=n.name,a=b()(n,["name"]);r&&(delete a.latest,Ee()(a,"".concat(r,"-openapi.json")))}})}(t.selectedRows,c)}},"Download selected")],isOpen:j,onSelect:function(){return P(!j)},toggle:i.a.createElement(K.a,{onToggle:function(e){return P(e)},isDisabled:!t.selectedRows||0===Object.values(t.selectedRows||{}).map(function(e){return e.isSelected}).filter(Boolean).length}),isPlain:!0})))),i.a.createElement(G.a,null,i.a.createElement(Q.b,{itemCount:(S||t.endpoints).length,perPage:m.perPage,page:m.page,onSetPage:function(e,n){return h(y()({},m,{page:n}))},onPerPageSelect:function(e,n){return h(y()({},m,{perPage:n}))}}))):"loading"),t.loaded?i.a.createElement(V.c,{"aria-label":"Sortable Table",variant:V.b.compact,sortBy:u,onSort:function(e,n,t){return d({index:n,direction:t})},cells:Oe,rows:A,actions:Se,onSelect:function(e,n,t){a(n,-1===t?A:A[t])}},i.a.createElement(Y.a,null),i.a.createElement(Z.a,{onRowClick:function(e,n){"title"===e.target.getAttribute("data-position")?r.push("/".concat(n.cells[0].value.replace("/api/",""))):e.target.matches("input")||a(!n.selected,n)}})):i.a.createElement(B.SkeletonTable,{columns:Oe,rowSize:28})),i.a.createElement(B.TableToolbar,{isFooter:!0},t.loaded?i.a.createElement(Q.b,{variant:"bottom",dropDirection:"up",itemCount:(S||t.endpoints).length,perPage:m.perPage,page:m.page,onSetPage:function(e,n){return h(y()({},m,{page:n}))},onPerPageSelect:function(e,n){return h(y()({},m,{perPage:n}))}}):"loading")))};Ae.propTypes={loadApis:R.a.func,onError:R.a.func,services:R.a.shape({loaded:R.a.bool,selectedRows:R.a.shape({isSelected:R.a.bool})}),history:R.a.shape({push:R.a.func}),selectRow:R.a.func},Ae.defaultProps={loadApis:function(){},selectRow:function(){},onError:function(){},services:{loaded:!1,selectedRows:{}}};var De=Object(M.k)(Object(u.connect)(function(e){return{services:e.services}},function(e){return{loadApis:function(){return e(oe())},selectRow:function(n,t){return e(function(e){return{type:"SELECT_ROW",payload:e}}({isSelected:n,row:t}))},onError:function(n){return e(Object(f.addNotification)({variant:"danger",title:"Server error",description:n,dismissable:!0}))}}})(Ae)),ke=t(446),Ne=t.n(ke),Le=(t(947),t(448)),xe=t(291),Ie=t(292),He=t(309),Te=t(310),Ce=t(127),Re=t(293),Me=t(294),Fe=t(302),ze=t(312),Ue=t(447),Je=t.n(Ue),Be=function(e){var n=e.loadApi,t=e.detail,r=e.match.params;Object(o.useEffect)(function(){n(r.apiName)},[]);var a=Object(o.useState)(!1),c=J()(a,2),l=c[0],u=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(B.PageHeader,{className:"pf-m-light"},i.a.createElement(B.PageHeaderTitle,{title:i.a.createElement(i.a.Fragment,null,i.a.createElement(xe.a,null,i.a.createElement(Ie.a,null,i.a.createElement(s.Link,{to:"/"},"Overview")),i.a.createElement(Ie.a,{isActive:!0},r.apiName)),i.a.createElement(i.a.Fragment,null,t.loaded&&!t.error&&i.a.createElement(q.a,{className:"ins-c-docs__api-detail"},i.a.createElement(G.a,{className:"ins-c-docs__api-detail-info"},t.loaded?"Detail of ".concat(t.spec.info.title):i.a.createElement(B.Skeleton,{size:B.SkeletonSize.md})),i.a.createElement(G.a,null,i.a.createElement(He.a,{gutter:"sm"},i.a.createElement(Te.a,{className:"ins-c-docs__api-detail-info"},t.loaded&&!t.error?i.a.createElement("a",{href:"".concat(location.origin).concat(t.latest),target:"_blank",rel:"noopener noreferrer"},"Open Raw ",i.a.createElement(ze.a,{size:"sm"})):i.a.createElement(B.Skeleton,{size:B.SkeletonSize.mdmd})),i.a.createElement(Te.a,{className:"ins-c-docs__api-detail-info"},t.loaded?i.a.createElement(Ce.c,{onClick:function(){return u(!0)},variant:Ce.b.secondary},"Show JSON"):i.a.createElement(B.Skeleton,{size:B.SkeletonSize.md})))))))})),i.a.createElement(B.Main,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(Re.a,null,i.a.createElement(Me.a,null,t.loaded&&i.a.createElement(Ne.a,{spec:t.spec}),!t.loaded&&i.a.createElement(Le.a,null))))),i.a.createElement(Fe.a,{width:"50%",title:"Modal Header",isOpen:l,onClose:function(){return u(!1)},actions:[i.a.createElement(Ce.c,{key:"close",variant:Ce.b.secondary,onClick:function(){return u(!1)}},"Close")]},i.a.createElement(Je.a,{src:t.spec})))};Be.propTypes={loadApi:R.a.func,detail:R.a.shape({loaded:R.a.bool}),match:R.a.shape({params:R.a.shape({apiName:R.a.string})})},Be.defaultProps={loadApi:function(){},detail:{loaded:!1}};var qe=Object(M.k)(Object(u.connect)(function(e){return{detail:e.detail}},function(e){return{loadApi:function(n){return e(function(e){return{type:"LOAD_ONE_API",payload:ae(e)}}({name:n,version:"v1"}))}}})(Be)),Ge="/",We="/:apiName",Xe=function(e){var n=e.component,t=e.rootClass,r=b()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(t),"pf-c-page__main"),a.setAttribute("role","main"),i.a.createElement(M.d,z()({},r,{component:n}))};Xe.propTypes={component:R.a.func,rootClass:R.a.string};var Ke=function(){return i.a.createElement(M.g,null,i.a.createElement(Xe,{exact:!0,path:Ge,component:De,rootClass:"overview"}),i.a.createElement(Xe,{exact:!0,path:We,component:qe,rootClass:"detail"}),i.a.createElement(Xe,{component:De,rootClass:"overview"}))};Ke.propTypes={childProps:R.a.shape({location:R.a.shape({pathname:R.a.string})})};t(948);var Qe=function(e){function n(){return A()(this,n),L()(this,I()(n).apply(this,arguments))}return T()(n,e),k()(n,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("api")}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.NotificationsPortal,null),i.a.createElement(Ke,{childProps:this.props}))}}]),n}(o.Component);Qe.propTypes={history:R.a.object};var Ve=Object(M.k)(Object(u.connect)()(Qe));var Ye=function(e){var n="/",t=e.split("/");return t.shift(),"beta"===t[0]&&(t.shift(),n="/beta/"),"".concat(n).concat(t[0],"/").concat(t[1])};l.a.render(i.a.createElement(u.Provider,{store:function(){if(O)throw new Error("store already initialized");for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(O=new p.a({},[Object(m.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(n))).register({services:j,detail:P,notifications:f.notifications}),O}().getStore()},i.a.createElement(s.BrowserRouter,{basename:Ye(window.location.pathname)},i.a.createElement(Ve,null))),document.getElementById("root"))}});