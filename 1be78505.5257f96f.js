(window.webpackJsonp=window.webpackJsonp||[]).push([[7,37],{192:function(e,t,a){"use strict";a.r(t);a(25),a(19),a(20),a(59),a(286),a(56);var n=a(0),r=a.n(n),c=a(196),i=a(197),o=a(70),l=a(204),s=a(203).DocSidebar,u=a(220),f=a(239),m=a(227),d=a(235),p=a(215),v=a(236),h=a(167),b=a.n(h),E=function(e){var t=e.children;return r.a.createElement("div",{className:b.a.root},t,r.a.createElement("span",{className:b.a.community},r.a.createElement("a",{href:"https://community.libra.org/"},"Ask the community")," for support"),r.a.createElement("hr",null))},y={Icon:d.b,LIPTable:p.a,LIPProcessInfographic:v.a,Section:E},O=a(168),g=a.n(O),j=Object.assign(u.a,y);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,u=t.routes.find((function(e){return Object(m.b)(n.pathname,e)}))||{},d=a.permalinkToSidebar,p=a.docsSidebars,v=a.version,h=d[u.path]||"main",b=Object(i.a)(),E=b.siteConfig,y=(E=void 0===E?{}:E).themeConfig,O=void 0===y?{}:y,N=b.isClient,P=O.sidebarCollapsible,A=void 0===P||P;return 0===Object.keys(u).length?r.a.createElement(f.default,e):r.a.createElement(l.b,{version:v,key:N},r.a.createElement("div",{className:g.a.docPage},h&&r.a.createElement("div",{className:g.a.docSidebarContainer},r.a.createElement(s,{docsSidebars:p,path:u.path,sidebar:h,sidebarCollapsible:A})),r.a.createElement("main",{className:g.a.docMainContainer},r.a.createElement(c.a,{components:j},Object(o.a)(t.routes)))))}},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},f=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(a),d=n,p=f["".concat(i,".").concat(d)]||f[d]||m[d]||c;return a?r.a.createElement(p,o({ref:t},s,{components:a})):r.a.createElement(p,o({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(0);var n=a(203),r=a.n(n),c=r.a.OVERFLOW_CONTAINER_CLASS;t.b=r.a.Layout},206:function(e,t){t.LIP_STATUS={DRAFT:"draft",LAST_CALL:"last call",ACCEPTED:"accepted",FINAL:"final",REJECTED:"rejected"},t.LIP_TYPE={CORE:"core",NETWORKING:"networking",INTERFACE:"interface",APPLICATION:"application",INFORMATIONAL:"informational",META:"meta"}},210:function(e,t,a){"use strict";var n=a(12),r=a(28),c=a(27),i=a(14),o=[].sort,l=[1,2,3];n(n.P+n.F*(i((function(){l.sort(void 0)}))||!i((function(){l.sort(null)}))||!a(211)(o)),"Array",{sort:function(e){return void 0===e?o.call(c(this)):o.call(c(this),r(e))}})},211:function(e,t,a){"use strict";var n=a(14);e.exports=function(e,t){return!!e&&n((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},212:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.index,a=e.title,n=e.username,c=(t>0?", ":"")+a;return n?r.a.createElement("a",{href:"https://github.com/"+n,target:"_blank"},c):c}},213:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c}));a(207),a(208),a(209),a(77);var n=/@\w+/g,r=function(e){return e.split(",").map((function(e){var t;return e.match(n)?t=e.match(n)[0].substring(1):e.trim().includes(" ")||(t=e),{title:e,username:t}}))},c=function(e){return e.split(" ").map((function(e){return""+e[0].toUpperCase()+e.substring(1)})).join("")}},214:function(e,t,a){"use strict";var n=a(9),r=a(0),c=a.n(r),i=a(199),o=a.n(i),l=a(197),s=(a(131),a(132)),u=a.n(s);t.a=function(e){return function(t){var a,r=t.id,i=Object(n.a)(t,["id"]),s=Object(l.a)().siteConfig,f=(s=void 0===s?{}:s).themeConfig,m=(f=void 0===f?{}:f).navbar,d=(m=void 0===m?{}:m).hideOnScroll,p=void 0!==d&&d;return r?c.a.createElement(e,i,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:o()("anchor",(a={},a[u.a.enhancedAnchor]=!p,a)),id:r}),c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#"),i.children):c.a.createElement(e,i)}}},215:function(e,t,a){"use strict";a(25),a(19),a(20),a(80),a(210);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),o=a(197),l=a(198),s=a(212),u=a(216),f=a(206),m=a(213),d=a(133),p=a.n(d),v=function(e){var t=e.authors,a=e.num,n=e.title,c=(Object(o.a)().siteConfig.themeConfig,Object(m.a)(t));return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:Object(l.a)("/lip-"+a)},a)),r.a.createElement("td",null,n),r.a.createElement("td",null,c.map((function(e,t){var a=e.title,n=e.username;return r.a.createElement(s.a,{index:t,title:a,username:n})}))))},h=function(e){var t=e.status,a=(e.title,function(e,t){return t.reduce((function(t,a){return t.concat(u[a][e])}),[]).sort((function(e,t){return e.lip<t.lip?1:-1}))}(t,e.types));return r.a.createElement("table",{className:p.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Number"),r.a.createElement("th",{className:p.a.title},"Title"),r.a.createElement("th",null,"Author(s)"))),r.a.createElement("tbody",null,a.map((function(e){var t=e.lip,a=e.authors,n=e.title;return r.a.createElement(v,{authors:a,key:t,num:t,title:n})}))))};h.propTypes={status:i.a.oneOf(Object.values(f.LIP_STATUS)).isRequired,types:i.a.arrayOf(i.a.oneOf(Object.values(f.LIP_TYPE)))},h.defaultProps={types:Object.values(f.LIP_TYPE)},t.a=h},216:function(e){e.exports=JSON.parse('{"core":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"networking":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"interface":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"application":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"informational":{"draft":[{"lip":1,"title":"Off-chain API","authors":"Kevin Hurley (@kphfb), Dmitry Pimenov, George Danezis","status":"draft","type":"informational","created":"05/29/2020"},{"lip":2,"title":"Libra Roles and Permissions","authors":"Sam Blackshear, Tim Zakian","status":"draft","type":"informational","created":"06/26/2020"},{"lip":3,"title":"Libra Upgrade Management","authors":"Zekun Li (@zekun000)","status":"draft","type":"informational","created":"06/09/2020"},{"lip":4,"title":"Transaction Metadata Specification","authors":"Kevin Hurley (@kphfb)","status":"draft","type":"informational","created":"06/26/2020"},{"lip":5,"title":"Address formatting","authors":"Dmitry Pimenov (@dpim)","status":"draft","type":"informational","created":"07/08/2020"}],"last call":[],"accepted":[],"final":[{"lip":0,"title":"Libra Improvement Proposals","authors":"libra","status":"final","type":"informational","created":"2/26/20"}],"rejected":[]},"meta":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]}}')},218:function(e,t,a){"use strict";var n=a(0);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=n.createElement("path",{d:"M314.82 292.65a192 192 0 0023.31-32.92l-39.45-19.64A120.78 120.78 0 01278 266c-11 10.21-22.7 16.16-34.61 17.68-23 2.94-39.07-4.17-62.51-19.21-24.63-15.8-52.54-33.71-92.15-28.65-24 3.08-46.06 15.66-65.44 37.39A191.89 191.89 0 000 306.13l39.44 19.64a121.7 121.7 0 0120.64-25.93c10.88-10.07 22.52-16 34.62-17.51a79.51 79.51 0 0110-.66c18.14 0 32.71 7 52.52 19.71 23 14.77 51.66 33.15 92.17 28 24.48-3.16 46.5-15.51 65.43-36.73zm0-117.48a192 192 0 0023.31-32.92l-39.45-19.64A121 121 0 01278 148.53c-11 10.21-22.7 16.16-34.61 17.68-23 2.93-39.07-4.17-62.51-19.21-24.63-15.8-52.54-33.71-92.15-28.65-24 3.08-46.06 15.65-65.44 37.39A191.5 191.5 0 000 188.65l39.44 19.64a122 122 0 0120.64-25.94C71 172.29 82.6 166.4 94.7 164.85a79.51 79.51 0 0110-.66c18.14 0 32.71 7 52.52 19.71 23 14.77 51.66 33.15 92.17 28 24.48-3.16 46.5-15.51 65.43-36.73zm0-117.48a192 192 0 0023.31-32.92L298.68 5.13A121 121 0 01278 31.05c-11 10.21-22.7 16.16-34.61 17.68-23 2.93-39.07-4.17-62.51-19.21-24.6-15.8-52.51-33.71-92.12-28.65C64.72 4 42.7 16.52 23.32 38.26A191.5 191.5 0 000 71.17l39.44 19.64a122 122 0 0120.64-25.94C71 54.81 82.6 48.92 94.7 47.37a79.51 79.51 0 0110-.66c18.14 0 32.71 7 52.52 19.71 23 14.77 51.64 33.14 92.17 28 24.48-3.16 46.5-15.51 65.43-36.73zM452.56 5.45v321.16H407V5.45zm48.09 92.44v228.72h45.6V97.89zM929.5 150.7c18.77-12.62 40.86-16.24 63-12.71v-39.8a125.23 125.23 0 00-15.42-1c-31.27 0-56.07 9.56-68 26.22l-5.6 7.78V97.63h-45.64v229h45.37v-79.58c0-14.57-.16-26.82 0-41.39.29-24.04 8.39-42.91 26.29-54.96zm300.28 175.91v-229h-42.41v25.15l-5.1-4.39c-19.87-17.1-43.94-25.77-71.54-25.77-20.55 0-39.9 5-56 14.58-37 21.87-59 61.09-59 104.92s21.88 82.74 58.53 104.42c15.9 9.44 37.38 15.08 57.46 15.08 26.92 0 52-9.14 70.49-25.73l5.15-4.61v25.33zm-60.51-57.25a73.75 73.75 0 01-51.27 23.35c-.92 0-1.82.05-2.71.05-45.5 0-81.14-35.42-81.14-80.64 0-21.28 7.64-41.26 21.52-56.26 14.55-15.72 34.84-24.38 57.12-24.38 1 0 2.1 0 3.16.05a75.59 75.59 0 0152.75 23.78 78.06 78.06 0 0121.52 54v7.44a76.41 76.41 0 01-20.95 52.61zm-455.89 62.26c20.55 0 39.9-5 56-14.58 37-21.87 59-61.09 59-104.92s-21.88-82.74-58.53-104.42c-15.9-9.44-37.39-15.08-57.47-15.08-26.91 0-51.94 9.14-70.49 25.74l-5.15 4.6V5.45h-42.4v321.16h42.4v-25.15l5.11 4.39c19.87 17.15 43.94 25.77 71.53 25.77zM633.94 215v-7.44a76.46 76.46 0 0120.9-52.64 73.78 73.78 0 0151.33-23.35c.91 0 1.81-.05 2.71-.05 45.5 0 81.14 35.42 81.14 80.64 0 21.28-7.65 41.26-21.53 56.26-14.55 15.72-34.83 24.38-57.11 24.38-1 0-2.11 0-3.16-.05a75.61 75.61 0 01-52.76-23.78A78.11 78.11 0 01633.94 215zM546.25 5.45h-45.6V51h45.6z"});t.a=function(e){return n.createElement("svg",r({fill:"#42318C",className:"logo_svg__Logo",viewBox:"0 0 1229.78 330.24"},e),c)}},220:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),i=a(205),o=a(203).CodeBlock,l=a(214),s=a(134),u=a.n(s);t.a={code:function(e){var t=e.children;return"string"==typeof t?c.a.createElement(o,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?c.a.createElement("a",e):c.a.createElement(i.a,e)},pre:function(e){return c.a.createElement("div",Object(n.a)({className:u.a.mdxCodeBlock},e))},h1:Object(l.a)("h1"),h2:Object(l.a)("h2"),h3:Object(l.a)("h3"),h4:Object(l.a)("h4"),h5:Object(l.a)("h5"),h6:Object(l.a)("h6")}},235:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(25),a(19),a(20),a(80);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),o=a(137),l=a.n(o),s={INLINE_START:"inline-start",DEFAULT:"defalt"},u=function(e){var t=e.src,a=e.type;return r.a.createElement("img",{className:l.a[a],src:t})};u.propTypes={type:i.a.oneOf(Object.values(s)),src:i.a.string.isRequired},u.defaultProps={type:s.DEFAULT},t.b=u},236:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(138),i=a.n(c);t.a=function(e){var t=e.stages;return r.a.createElement("div",{className:i.a.root},r.a.createElement("div",{className:i.a.stagesContainer},t.map((function(e,a){return r.a.createElement(r.a.Fragment,{key:e},r.a.createElement("div",{className:i.a.stage},r.a.createElement("span",{className:i.a.counter},"0",a+1),r.a.createElement("span",{className:i.a.stageName},e)),a+1!==t.length&&r.a.createElement("hr",{className:i.a.divider}))}))))}},239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(204);t.default=function(){return r.a.createElement(c.b,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},286:function(e,t,a){"use strict";var n=a(12),r=a(287)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),n(n.P+n.F*c,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(81)("find")},287:function(e,t,a){var n=a(32),r=a(62),c=a(27),i=a(24),o=a(288);e.exports=function(e,t){var a=1==e,l=2==e,s=3==e,u=4==e,f=6==e,m=5==e||f,d=t||o;return function(t,o,p){for(var v,h,b=c(t),E=r(b),y=n(o,p,3),O=i(E.length),g=0,j=a?d(t,O):l?d(t,0):void 0;O>g;g++)if((m||g in E)&&(h=y(v=E[g],g,b),e))if(a)j[g]=h;else if(h)switch(e){case 3:return!0;case 5:return v;case 6:return g;case 2:j.push(v)}else if(u)return!1;return f?-1:s||u?u:j}}},288:function(e,t,a){var n=a(289);e.exports=function(e,t){return new(n(e))(t)}},289:function(e,t,a){var n=a(15),r=a(243),c=a(2)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),n(t)&&null===(t=t[c])&&(t=void 0)),void 0===t?Array:t}}}]);