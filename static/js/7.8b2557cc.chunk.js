"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[7],{722:function(n,e,r){r.d(e,{Hx:function(){return m},Mc:function(){return l},wr:function(){return s},xc:function(){return h},z1:function(){return i}});var t=r(861),o=r(757),a=r.n(o),c=r(340);function s(){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/trending/movie/day");case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),console.error("Error fetching trending movies:",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"3ff3f10d4a0989a7fb08bb03d3658e9b"};var i=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/search/movie",{params:{query:e}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),console.error("Error during API call:",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();function l(n){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(e));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:throw n.prev=7,n.t0=n.catch(0),console.error("Error fetching movie by id:",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(e,"/credits"));case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 7:throw n.prev=7,n.t0=n.catch(0),console.error("Error fetching movie credits:",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(e,"/reviews"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),console.error("Error fetching movie reviews:",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},4:function(n,e,r){r.d(e,{Fg:function(){return d},Mj:function(){return g},Nr:function(){return v},QZ:function(){return w},SM:function(){return x},UI:function(){return b},_z:function(){return m}});var t,o,a,c,s,u,i,l,p=r(168),h=r(924),f=r(87),m=h.ZP.div(t||(t=(0,p.Z)(["\n  color: #ffc0cb;\n  background-color: #000;\n  padding: 20px;\n"]))),d=(0,h.ZP)(f.rU)(o||(o=(0,p.Z)(["\n  color: #ffc0cb;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),v=h.ZP.ul(a||(a=(0,p.Z)(["\nlist-style-type: none;\npadding: 20px;\ndisplay: flex;\ntext-align: center;\nflex-direction: row;\nflex-wrap: wrap;\nfont-size: 24px;\n"]))),x=h.ZP.li(c||(c=(0,p.Z)(["\npadding: 10px;\nmargin: auto;\nfont-size: 24px;\nfont-weight: 300;\nanimation: lights 5s 750ms linear infinite;\n@keyframes lights {\n  0% {\n    color: hsl(230, 40%, 80%);\n    text-shadow:\n      0 0 1em hsla(320, 100%, 50%, 0.2),\n      0 0 0.125em hsla(320, 100%, 60%, 0.3),\n      -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),\n      1em 0.125em 0.5em hsla(200, 100%, 60%, 0);\n  }\n  \n  30% { \n    color: hsl(230, 80%, 90%);\n    text-shadow:\n      0 0 1em hsla(320, 100%, 50%, 0.5),\n      0 0 0.125em hsla(320, 100%, 60%, 0.5),\n      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),\n      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);\n  }\n  \n  40% { \n    color: hsl(230, 100%, 95%);\n    text-shadow:\n      0 0 1em hsla(320, 100%, 50%, 0.5),\n      0 0 0.125em hsla(320, 100%, 90%, 0.5),\n      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),\n      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);\n  }\n  \n  70% {\n    color: hsl(230, 80%, 90%);\n    text-shadow:\n      0 0 1em hsla(320, 100%, 50%, 0.5),\n      0 0 0.125em hsla(320, 100%, 60%, 0.5),\n      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),\n      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);\n  }\n  \n  100% {\n    color: hsl(230, 40%, 80%);\n    text-shadow:\n      0 0 1em hsla(320, 100%, 50%, 0.2),\n      0 0 0.125em hsla(320, 100%, 60%, 0.3),\n      1em -0.125em 0.5em hsla(40, 100%, 60%, 0),\n      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);\n  }\n  \n}\n"]))),b=(h.ZP.button(s||(s=(0,p.Z)(["\n  background: none;\n  border: none;\n  color: #ffc0cb;\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),h.ZP.form(u||(u=(0,p.Z)(["\n  margin: 20px 0;\n"])))),g=h.ZP.input(i||(i=(0,p.Z)(["\n  padding: 5px;\n  margin-right: 10px;\n  border-radius: 5px;\n  border: 1px solid #ffc0cb;\n  color: #000;\n  background-color: #ffc0cb;\n"]))),w=h.ZP.button(l||(l=(0,p.Z)(["\n  padding: 5px 10px;\n  border-radius: 5px;\n  border: none;\n  color: #000;\n  background-color: #ffc0cb;\n  cursor: pointer;\n  &:hover {\n    background-color: #ffb6c1;\n  }\n"])))},7:function(n,e,r){r.r(e),r.d(e,{default:function(){return h}});var t=r(861),o=r(439),a=r(757),c=r.n(a),s=r(791),u=r(689),i=r(4),l=r(722),p=r(184);function h(){var n=(0,s.useState)(""),e=(0,o.Z)(n,2),r=e[0],a=e[1],h=(0,s.useState)([]),f=(0,o.Z)(h,2),m=f[0],d=f[1],v=(0,u.s0)(),x=function(){var n=(0,t.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),!r.trim()){n.next=12;break}return n.prev=2,n.next=5,(0,l.z1)(r);case 5:t=n.sent,d(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.error("Error searching movies:",n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,p.jsxs)(i._z,{children:[(0,p.jsx)("h2",{children:"Search Movies"}),(0,p.jsxs)(i.UI,{onSubmit:x,children:[(0,p.jsx)(i.Mj,{type:"text",value:r,onChange:function(n){return a(n.target.value)},placeholder:"Type to search..."}),(0,p.jsx)(i.QZ,{type:"submit",children:"Search"})]}),(0,p.jsx)("div",{children:m.map((function(n){return(0,p.jsx)("div",{onClick:function(){return v("/movies/".concat(n.id))},style:{cursor:"pointer"},children:n.title},n.id)}))})]})}}}]);
//# sourceMappingURL=7.8b2557cc.chunk.js.map