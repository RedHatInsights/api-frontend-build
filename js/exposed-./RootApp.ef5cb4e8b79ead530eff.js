"use strict";(self.webpackChunkapiDocs=self.webpackChunkapiDocs||[]).push([[178],{48187:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(92950),a=n.n(r),l=n(35160),c=n(60076),o=n(55140);const i=function(){var e=(0,o.Z)().updateDocumentTitle;return(0,r.useEffect)((function(){e("API Documentation")}),[e]),a().createElement(a().Fragment,null,a().createElement(l.ZP,null),a().createElement(c.Z,null))}},28412:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(92950),a=n.n(r),l=n(86706),c=n(30319),o=n(48187),i=n(45697),u=n.n(i),s=n(49661),p=n.n(s),v=function(e){var t=e.isDev,n=(0,r.useRef)(t?(0,c.S)(p()):(0,c.S)());return a().createElement(c.g.Provider,{value:{getRegistry:function(){return n.current}}},a().createElement(l.zt,{store:n.current.getStore()},a().createElement(o.Z,null)))};v.propTypes={isDev:u().bool};const m=v},60076:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(83044),a=n(92950),l=n.n(a),c=(0,a.lazy)((function(){return Promise.all([n.e(939),n.e(263),n.e(328),n.e(474)]).then(n.bind(n,63947))})),o=(0,a.lazy)((function(){return Promise.all([n.e(939),n.e(263),n.e(159),n.e(887)]).then(n.bind(n,80371))})),i=function(){return l().createElement(a.Suspense,{fallback:l().createElement(a.Fragment,null)},l().createElement(r.Routes,null,l().createElement(r.Route,{path:":apiName/*",element:l().createElement(o,null)}),l().createElement(r.Route,{path:":apiName/:version/*",element:l().createElement(o,null)}),l().createElement(r.Route,{path:"*",element:l().createElement(c,null)})))}},6407:(e,t,n)=>{n.d(t,{K:()=>r,u:()=>a});var r="api",a={"aiops-clustering":"v1.0","aiops-idle-cost-savings":"v1.0","aiops-instance-type-validation":"v1.0","aiops-outlier-detection":"v1.0",xavier:"v1.0"}},49120:(e,t,n)=>{n.d(t,{HM:()=>l,Lh:()=>r,a:()=>a});var r="LOAD_ALL",a="LOAD_ONE_API",l="SELECT_ROW"},30319:(e,t,n)=>{n.d(t,{S:()=>v,g:()=>p});var r=n(42982),a=n(92950),l=n(18546),c=n(83215),o=n(84885),i=n(54157),u=n.n(i),s=n(81730),p=(0,a.createContext)({getRegistry:function(){}});function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=new l.ZP({},[u(),(0,o.ZP)({errorDescriptionKey:["detail","stack"]})].concat((0,r.Z)(t.filter((function(e){return void 0!==e})))));return a.register({services:s.u,detail:s.l,notifications:c.ee}),a}},81730:(e,t,n)=>{n.d(t,{l:()=>E,u:()=>b});var r,a,l=n(45987),c=n(4942),o=n(18546),i=n(49120),u=n(6407),s=["latest"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={loaded:!1,selectedRows:{}},d=["automation-analytics","openshift","ruledev"],f=function(e){return e.api.alias&&e.api.alias[0]||e.appName},b=(0,o.Gg)((r={},(0,c.Z)(r,"".concat(i.Lh,"_FULFILLED"),(function(e,t){var n=t.payload;return v(v({},e),{},{endpoints:n&&n.services.filter((function(e){return!d.includes(e.appName)&&(!e.api.isBeta||insights.chrome.isBeta())})).map((function(e){var t,n;return v(v({},e),{},{version:u.u[f(e)]||(null==e||null===(t=e.api)||void 0===t||null===(n=t.versions)||void 0===n?void 0:n[0]),appName:f(e),apiName:e.api.apiName})})),loaded:!0})})),(0,c.Z)(r,"".concat(i.Lh,"_PENDING"),(function(){return m})),(0,c.Z)(r,i.HM,(function(e,t){var n=t.payload,r=n.isSelected,a=n.row,l=v(v({},e.selectedRows||{}),Array.isArray(a)?a.reduce((function(e,t){return v(v({},e),{},(0,c.Z)({},"".concat(a.subItems?"parent-":"").concat(t.cells[0].value),v({isSelected:r,appName:t.cells[0].value,url:t.cells[1].value,version:t.cells[2].value},t.subItems&&{subItems:t.subItems})))}),{}):(0,c.Z)({},"".concat(a.subItems?"parent-":"").concat(a.cells[0].value),v({isSelected:r,appName:a.cells[0].value,url:a.cells[1].value,version:a.cells[2].value},a.subItems&&{subItems:a.subItems})));return v(v({},e),{},{selectedRows:l})})),r),m),E=(0,o.Gg)((a={},(0,c.Z)(a,"".concat(i.a,"_FULFILLED"),(function(e,t){var n=t.payload,r=n.latest,a=(0,l.Z)(n,s);return v(v({},e),{},{spec:a,latest:r,loaded:!0})})),(0,c.Z)(a,"".concat(i.a,"_PENDING"),(function(){return{loaded:!1}})),(0,c.Z)(a,"".concat(i.a,"_REJECTED"),(function(){return{loaded:!0,error:!0}})),a),m)}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./RootApp.fe352a42226d2db3cfad5c3563812a1b.js.map