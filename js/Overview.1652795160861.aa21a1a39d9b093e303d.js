"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[4474],{66702:(e,t,n)=>{n.d(t,{Ux:()=>s,w0:()=>p});var r=n(42982),o=n(4942),a=n(6407),i=n(33366),l=n(47180);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(){return i.ZP.get("".concat(insights.chrome.isBeta()?"/beta":"","/config/main.yml")).then((function(e){return(0,l.zD)(e)})).then((function(e){return{services:Object.keys(e).filter((function(t){return e[t].api})).map((function(t){return u({appName:t},e[t])}))}}))},p=function(e){var t,n,o=e.name,l=e.version,c=void 0===l?"v1":l,s=e.url,p=null!=s?s:(t=o,n=a.u[o]||c,"/".concat(a.K,"/").concat(t,"/").concat(n,"/openapi.json"));return i.ZP.get(p).then((function(e){return u(u({},e),{},{latest:p,name:o,servers:[].concat((0,r.Z)(e.servers||[]),[{url:"/api/".concat(o,"/").concat(a.u[o]||c)}]).filter((function(e,t,n){return n.findIndex((function(t){var n=t.url;return 0==="".concat(location.origin).concat(e.url).indexOf(n)||0===e.url.indexOf(n)}))===t})).map((function(e){return u(u({},e),{},{url:0===e.url.indexOf("/")?"".concat(location.origin).concat(e.url):e.url})}))})}))}},63947:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var r=n(87462),o=n(4942),a=n(42982),i=n(70885),l=n(46759),c=n.n(l),u=n(45697),s=n.n(u),p=n(80123),f=n(39173),d=n(14748),m=n(81739),v=n(65550),g=n(48682),b=n(81557),y=n(79863),O=n(27174),h=n(31267),w=n(86706),P=n(94778),j=n(45987),E=n(55159),S=n(58247),Z=n(1657),D=n(66702),N=n(35823),k=n.n(N),C=n(55733),I=n.n(C),x=n(85564),L=n.n(x),T=n(18959),A=["name"],_=["name"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=["","title","appName","version"],z=function(e){return[{title:"Application name",transforms:[h.sortable],cellTransforms:[(0,T.Z)(e)]},{title:"API endpoint",transforms:[h.nowrap,h.sortable,(0,h.cellWidth)(10)]},{title:"API version",transforms:[h.nowrap,h.sortable,(0,h.cellWidth)(10)]},{title:"Download",transforms:[(0,h.cellWidth)(10)]}]},W=function(e,t,n){var r,o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=arguments.length>4?arguments[4]:void 0;return{selected:null==i||null===(r=i[e])||void 0===r?void 0:r.isSelected,cells:[{title:c().createElement(l.Fragment,null,t||n?c().createElement(E.Link,{to:"/".concat(u).concat(t&&"v1"!==t[0]?"/".concat(u,"/").concat(t[0]||""):"").concat(n?"?url=".concat(n):"")},e):e),value:e,props:{value:e,"data-position":"title"}},t?"/api/".concat(u):n?{title:c().createElement("span",{className:"ins-c-docs__url"},n.replace(/openapi$/,"").replace(/^http(?:s):\/\//,"")),props:{colSpan:2},value:n}:""].concat((0,a.Z)(n?[]:[{title:c().createElement(l.Fragment,null,null==t||null===(o=t.map)||void 0===o?void 0:o.call(t,(function(e){return c().createElement(E.Link,{key:e,to:"/".concat(u,"/").concat(e)},c().createElement(O.Badge,null,e))}))),value:t}]),[{title:c().createElement(O.Button,{variant:"plain",onClick:function(){return V(u,null==t?void 0:t[0],n)}}," ",c().createElement(Z.ZP,null)," ")}])}},J=[{cells:[{title:c().createElement(S.Z,null,c().createElement(O.Bullseye,null,c().createElement(O.EmptyState,{variant:O.EmptyStateVariant.full},c().createElement(O.Title,{headingLevel:"h5",size:"lg"},"No matching rules found"),c().createElement(O.EmptyStateBody,null,"This filter criteria matches no rules. ",c().createElement("br",null)," Try changing your filter settings.")))),props:{colSpan:4}}]}];function V(e,t,n){(0,D.w0)({name:e,version:t,url:n}).then((function(t){delete t.latest,delete t.name,k()(JSON.stringify(t),"".concat(e,"-openapi.json"))}))}var H=n(83215);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K=function(e){var t=e.loadApis,n=e.services,o=e.selectRow,u=e.onError;(0,l.useEffect)((function(){t()}),[]);var s,w,P=(0,l.useState)([]),E=(0,i.Z)(P,2),S=E[0],Z=E[1],N=(0,l.useState)({}),C=(0,i.Z)(N,2),x=C[0],T=C[1],B=(0,l.useState)({perPage:50,page:1}),V=(0,i.Z)(B,2),H=V[0],U=V[1],K=(0,l.useState)(""),M=(0,i.Z)(K,2),Q=M[0],q=M[1],G=Q&&n.endpoints.filter((function(e){return function(e,t){var n,r,o,i,l,c=[null===(n=e.frontend)||void 0===n?void 0:n.title].concat((0,a.Z)((null===(r=e.frontend)||void 0===r?void 0:r.paths)||[]),(0,a.Z)((null===(o=e.frontend)||void 0===o||null===(i=o.sub_apps)||void 0===i?void 0:i.reduce((function(e,t){return[].concat((0,a.Z)(e),[t.title,t.id])}),[]))||[]),[null===(l=e.api)||void 0===l?void 0:l.apiName]).filter(Boolean);return F.some((function(n){return e[n]&&-1!==e[n].toLocaleLowerCase().indexOf(t.toLocaleLowerCase())}))||c.some((function(e){return-1!==e.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())}))}(e,Q)})),X=n.loaded?function(e,t,n,r,o){var l=t.page,c=t.perPage;return n.length>0?n.sort((function(t,n){return function(e,t){var n,r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title",a=function(e){return"appName"===o&&e.apiName?"apiName":o};return(arguments.length>3?arguments[3]:void 0)?null===(n=t[a(t)])||void 0===n?void 0:n.localeCompare(e[a(e)],"en",{sensitivity:"base"}):null===(r=e[a(e)])||void 0===r?void 0:r.localeCompare(t[a(t)],"en",{sensitivity:"base"})}(t,n,F[e.index],e.direction===h.SortByDirection.desc)})).slice((l-1)*c,l*c).map((function(e,t){var n,l=e.frontend,c=e.title,u=e.appName,s=e.version,p=e.apiName,f=e.api;return[R(R(R({},W(c,f.versions,f.url,r,p||u)),f.subItems&&{isTreeOpen:null==o||null===(n=o.includes)||void 0===n?void 0:n.call(o,l&&l.title||c),subItems:f.subItems}),{},{noDetail:!s&&!f.url})].concat((0,a.Z)(f.subItems?Object.entries(f.subItems).map((function(e){var n=(0,i.Z)(e,2),o=n[0],a=n[1],l=a.title,c=a.versions,u=a.url,s=a.apiName;return R(R({},W(l,c,u,r,s||o)),{},{treeParent:t})})):[]))})).flat():J}(x,H,G||n.endpoints,n.selectedRows,S):[];return c().createElement(c().Fragment,null,c().createElement(p.Z,{className:"pf-m-light"},c().createElement(f.Z,{title:"API documentation"})),c().createElement(d.Z,{className:"ins-c-docs__api"},c().createElement(c().Fragment,null,c().createElement(g.Z,(0,r.Z)({filterConfig:{items:[{label:"Filter by application name",type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by application name",value:Q,onChange:function(e,t){U($($({},H),{},{page:1})),q(t)},isDisabled:!n.loaded}}]},actionsConfig:{actions:[{label:"Download selected",props:{isDisabled:(s=n,w=s.selectedRows,!w||0===Object.values(w||{}).map((function(e){return e.isSelected})).filter(Boolean).length),onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=new(I()),r=Object.values(e).filter((function(e){return e.isSelected})).map((function(e){var n=e.appName,r=e.version,o=e.apiName,a=e.subItems,l=e.url;return a?Object.entries(a).map((function(e){var n=(0,i.Z)(e,2),r=n[0],o=n[1],a=o.versions,l=o.url;return(0,D.w0)({name:r,version:null==a?void 0:a[0],url:l}).catch((function(){return t("API ".concat(r," with version ").concat(a[0]," not found or broken."))}))})):(0,D.w0)({name:o||n,version:r,url:l}).catch((function(){return t("API ".concat(o||n," with version ").concat(r," not found or broken."))}))}));Promise.all(L()(r)).then((function(e){if(e&&e.length>1)e.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=(0,j.Z)(e,A);t&&(delete r.latest,n.file("".concat(t,"-openapi.json"),JSON.stringify(r)))})),n.generateAsync({type:"blob"}).then((function(e){return k()(e,"cloud-services-openapi.zip")}));else if(e&&1===e.length){var t=e[0]||{},r=t.name,o=(0,j.Z)(t,_);r&&(delete o.latest,k()(JSON.stringify(o),"".concat(r,"-openapi.json")))}}))}(n.selectedRows,u)}}}]}},n.loaded&&{pagination:$($({},H),{},{itemCount:(G||n.endpoints).length,onSetPage:function(e,t){return U($($({},H),{},{page:t}))},onPerPageSelect:function(e,t){return U($($({},H),{},{perPage:t}))}})},Q.length>0&&{activeFiltersConfig:{filters:[{name:Q}],onDelete:function(){U($($({},H),{},{page:1})),q("")}}})),n.loaded?c().createElement(h.Table,(0,r.Z)({className:"pf-m-expandable pf-c-treeview","aria-label":"Sortable Table",variant:h.TableVariant.compact,sortBy:x,onSort:function(e,t,n){return T({index:t,direction:n})},cells:z((function(e,t){var n=t.props.value;S.includes(n)?Z((function(){return S.filter((function(e){return e!==n}))})):Z((function(){return[].concat((0,a.Z)(S),[n])}))})),rows:(0,b.t)(X),rowWrapper:y.Z},(G||n.endpoints).length>0&&{onSelect:function(e,t,n){o(t,-1===n?X:X[n])}}),c().createElement(h.TableHeader,null),c().createElement(h.TableBody,null)):c().createElement(m.Z,{columns:z,rowSize:28})),c().createElement(v.Z,{isFooter:!0},n.loaded?c().createElement(O.Pagination,{variant:"bottom",dropDirection:"up",itemCount:(G||n.endpoints).length,perPage:H.perPage,page:H.page,onSetPage:function(e,t){return U($($({},H),{},{page:t}))},onPerPageSelect:function(e,t){return U($($({},H),{},{perPage:t}))}}):"loading")))};K.propTypes={loadApis:s().func,onError:s().func,services:s().shape({loaded:s().bool,selectedRows:s().shape({isSelected:s().bool}),endpoints:s().arrayOf(s().shape((0,o.Z)({},s().string,s().oneOfType([s().string,s().number,s().bool,s().node]))))}),history:s().shape({push:s().func}),selectRow:s().func},K.defaultProps={loadApis:function(){},selectRow:function(){},onError:function(){},services:{loaded:!1,selectedRows:{}}};const M=(0,w.$j)((function(e){return{services:e.services}}),(function(e){return{loadApis:function(){return e((0,P.j3)())},selectRow:function(t,n){return e((0,P.wS)({isSelected:t,row:n}))},onError:function(t){return e((0,H.wN)({variant:"danger",title:"Server error",description:t,dismissable:!0}))}}}))(K)},94778:(e,t,n)=>{n.d(t,{IQ:()=>i,j3:()=>a,wS:()=>l});var r=n(49120),o=n(66702),a=function(){return{type:r.Lh,payload:(0,o.Ux)()}},i=function(e){return{type:r.a,payload:(0,o.w0)(e)}},l=function(e){return{type:r.HM,payload:e}}}}]);