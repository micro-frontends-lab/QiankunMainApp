(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22ca54"],{f3b3:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"i-table-no-border"},[r("Card",{attrs:{bordered:!1,"dis-hover":""}},[r("div",{attrs:{slot:"title"},slot:"title"},[r("Avatar",{directives:[{name:"color",rawName:"v-color",value:"#2f54eb",expression:"'#2f54eb'"},{name:"bg-color",rawName:"v-bg-color",value:"#f0f5ff",expression:"'#f0f5ff'"}],attrs:{icon:"md-locate",size:"small"}}),r("span",{staticClass:"ivu-pl-8"},[e._v("前端日志")])],1),r("div",{attrs:{slot:"extra"},slot:"extra"},[r("Tooltip",{attrs:{content:"清空日志",placement:"top"}},[r("Button",{attrs:{type:"text"},on:{click:e.clean}},[r("Icon",{attrs:{type:"md-trash",size:"16"}})],1)],1)],1),r("Table",{attrs:{columns:e.columns,data:e.log},scopedSlots:e._u([{key:"page",fn:function(t){var r=t.row;return[e._v("\n                "+e._s(e.get(r,"meta.url"))+"\n            ")]}},{key:"type",fn:function(t){var o=t.row;return["info"===o.type?r("Tag",{attrs:{color:"blue"}},[e._v("info")]):e._e(),"success"===o.type?r("Tag",{attrs:{color:"green"}},[e._v("success")]):e._e(),"warning"===o.type?r("Tag",{attrs:{color:"orange"}},[e._v("warning")]):e._e(),"error"===o.type?r("Tag",{attrs:{color:"red"}},[e._v("error")]):e._e()]}},{key:"more",fn:function(t){var o=t.row;return[r("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleMore(o)}}},[e._v("查看")])]}}])})],1)],1)},n=[],a=(r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f"),r("ac6a"),r("456d"),r("bd86")),s=r("2f62"),c=r("2ef0");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={name:"log",data:function(){return{columns:[{title:"时间",key:"time",width:180},{title:"信息",key:"message",minWidth:300},{title:"触发页面",slot:"page",minWidth:300},{title:"类型",width:100,slot:"type"},{title:"详细信息",width:100,slot:"more"}]}},computed:i({},Object(s["e"])("admin/log",["log"])),methods:i({},Object(s["d"])("admin/log",["clean"]),{get:c["get"],handleMore:function(e){this.$Notice.info({title:"提示",desc:"请在浏览器控制台查看完整日志"}),this.$log.capsule("iView Admin","完整日志内容","primary"),console.group("完整日志"),console.log("message ",e.message),console.log("time: ",e.time),console.log("type: ",e.type),console.log("meta: ",e.meta),console.groupEnd()}})},p=u,f=r("2877"),d=Object(f["a"])(p,o,n,!1,null,null,null);t["default"]=d.exports}}]);