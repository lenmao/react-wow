webpackJsonp([3],{0:function(t,e,n){t.exports=n(49)},49:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}var o=n(2),f=u(o),a=n(20),c=u(a),i=n(46),l=n(53),r=u(l);n(67),c.default.render(f.default.createElement(i.Router,{history:i.hashHistory,routes:r.default}),document.getElementById("app"))},53:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{path:"/",getComponent:function(t,e){n.e(1,function(t){e(null,n(51).default)})}},{path:"404",getComponent:function(t,e){n.e(2,function(t){e(null,n(52).default)})}},{path:"*",indexRoute:{onEnter:function(t,e){e("/404")}}}]},67:function(t,e){}});