"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[818],{689:function(e,t,r){r.d(t,{JN:function(){return i},M1:function(){return m},TP:function(){return h},cx:function(){return l},tx:function(){return _}});var n=r(861),a=r(757),c=r.n(a),u=r(44),s="d2588012985fa449416b0dc96cb20979",o="https://api.themoviedb.org/3/";function i(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},673:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(731),a=r(739),c="MovieList_title__QyMtJ",u="MovieList_link__+cn-g",s=r(184),o=function(e){var t=e.movies,r=(0,a.TH)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.title;return(0,s.jsx)("li",{className:u,children:(0,s.jsx)(n.rU,{to:"/movies/".concat(t,"/"),state:{from:r},className:u,children:(0,s.jsx)("p",{className:c,children:a})})},t)}))})})}},818:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(885),a=r(673),c=r(791),u="SearchForm_form__o80os",s="SearchForm_input__HOxJo",o="SearchForm_button__UXY06",i=r(184),p=function(e){var t=e.setSearchParams,r=(0,c.useState)(""),a=(0,n.Z)(r,2),p=a[0],l=a[1];return(0,i.jsxs)("form",{className:u,onSubmit:function(e){(e.preventDefault(),""!==p.trim())&&(t({query:p}),l(""))},children:[(0,i.jsx)("label",{children:(0,i.jsx)("input",{className:s,type:"text",name:"search",onChange:function(e){l(e.currentTarget.value.toLowerCase())},value:p})}),(0,i.jsx)("button",{className:o,type:"submit",children:"Search"})]})},l=r(689),f=r(731),h=function(){var e=(0,c.useState)([]),t=(0,n.Z)(e,2),r=t[0],u=t[1],s=(0,f.lr)(),o=(0,n.Z)(s,2),h=o[0],v=o[1];return(0,c.useEffect)((function(){var e=h.get("query");e&&(0,l.cx)(e).then(u)}),[h]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{setSearchParams:v}),h&&(0,i.jsx)(a.Z,{movies:r})]})}}}]);
//# sourceMappingURL=818.b93ca13f.chunk.js.map