(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"20a2":function(e,t,n){e.exports=n("nOHt")},CafY:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r,c,a,s=n("nKUr"),i=n("ODXe"),o=n("YFqc"),l=n.n(o),u=[{subject:"OS",items:["Operation System","OOP","\ud504\ub85c\uc138\uc2a4&\uc2a4\ub808\ub4dc","\uba40\ud2f0\ud504\ub85c\uc138\uc2a4&\uc2a4\ub808\ub4dc","HTTP","Protocol"]},{subject:"JS",items:["\uae30\ubcf8","\uba85\ub839\ud615\uacfc \uc120\uc5b8\ud615","React Hook \uad6c\ud604","\ub3d9\uae30&\ube44\ub3d9\uae30","\ube44\ub3d9\uae30\ucc98\ub9ac"]},{subject:"HTML",items:["\ube0c\ub77c\uc6b0\uc800 \ub80c\ub354\ub9c1","Reflow & Repaint"]},{subject:"etc",items:["git","\uc785\ucd9c\ub825","DataBase","DeadLock"]}],f=["loading","loading2","modal","slide","throttle & debounce","Infinite Scroll - 1","Infinite Scroll - 2"],d=n("20a2"),h=n("q1tI"),j=function(e){var t=e.item,n=e.path,r=e.match;return Object(s.jsx)(l.a,{href:n,children:Object(s.jsx)("div",{className:"nav-item "+(r?"active":""),children:Object(s.jsx)("span",{children:t})})})},p=function(e){var t=e.paths,n=e.subject,r=e.items,c=e.basePath,a=t[0]===n,i=function(e){return t[1]===e};return Object(s.jsxs)("div",{className:"nav-sub",children:[Object(s.jsx)("span",{className:a?"active":"",children:n}),Object(s.jsx)("div",{className:"nav-items-wrap",children:Object(s.jsx)("div",{className:"nav-item-list",children:r.map((function(e,t){return Object(s.jsx)(j,{path:c+n+"/"+e,item:e,match:a&i(e)},t)}))})})]})},b=function(e){var t=Object(i.a)(e,2),n=t[0],r=t[1];return n&&r?"[ ".concat(n," ] ").concat(r):"[ Ssong10 ]"};function v(){var e=Object(d.useRouter)().asPath,t=Object(h.useState)(!1),n=t[0],r=t[1];Object(h.useEffect)((function(){r(!1)}),[e]);var c=decodeURI(e).trim("/").split("/"),a=function(){r(!n)};return Object(s.jsxs)("header",{id:"nav",children:[Object(s.jsx)("div",{onClick:a,className:"side-button",children:Object(s.jsxs)("svg",{viewBox:"0 0 100 80",width:"20",height:"20",children:[Object(s.jsx)("rect",{width:"100",height:"18"}),Object(s.jsx)("rect",{y:"35",width:"100",height:"18"}),Object(s.jsx)("rect",{y:"70",width:"100",height:"18"})]})}),Object(s.jsx)("i",{onClick:a,className:"side-button fas fa-bars","aria-hidden":"true"}),Object(s.jsx)(l.a,{href:"/",children:Object(s.jsx)("span",{className:"main-title",children:"Ssong10"})}),Object(s.jsx)("span",{className:"mobile-title",children:b(c.slice(-2))}),Object(s.jsxs)("div",{className:n?"nav-links show":"nav-links",children:[Object(s.jsx)(l.a,{href:"/",children:Object(s.jsx)("div",{className:"nav-sub mobile-home",children:Object(s.jsx)("span",{children:"Ssong10"})})}),u.map((function(e,t){return Object(s.jsx)(p,{paths:c.slice(-2),subject:e.subject,items:e.items,basePath:"/posts/"},t)})),Object(s.jsx)(p,{paths:c.slice(-2),subject:"component",items:f,basePath:"/"})]})]})}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O,x=function(e){return h.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),r||(r=h.createElement("path",{d:"M256 49.471c67.266 0 75.233.257 101.8 1.469 24.562 1.121 37.9 5.224 46.778 8.674a78.052 78.052 0 0128.966 18.845 78.052 78.052 0 0118.845 28.966c3.45 8.877 7.554 22.216 8.674 46.778 1.212 26.565 1.469 34.532 1.469 101.8s-.257 75.233-1.469 101.8c-1.121 24.562-5.225 37.9-8.674 46.778a83.427 83.427 0 01-47.811 47.811c-8.877 3.45-22.216 7.554-46.778 8.674-26.56 1.212-34.527 1.469-101.8 1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051 78.051 0 01-28.966-18.845 78.053 78.053 0 01-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s.257-75.233 1.469-101.8c1.121-24.562 5.224-37.9 8.674-46.778a78.052 78.052 0 0118.847-28.967 78.053 78.053 0 0128.966-18.845c8.877-3.45 22.216-7.554 46.778-8.674 26.565-1.212 34.532-1.469 101.8-1.469m0-45.391c-68.418 0-77 .29-103.866 1.516-26.815 1.224-45.127 5.482-61.151 11.71a123.488 123.488 0 00-44.62 29.057A123.488 123.488 0 0017.3 90.982c-6.223 16.025-10.481 34.337-11.7 61.152C4.369 179 4.079 187.582 4.079 256s.29 77 1.521 103.866c1.224 26.815 5.482 45.127 11.71 61.151a123.489 123.489 0 0029.057 44.62 123.486 123.486 0 0044.62 29.057c16.025 6.228 34.337 10.486 61.151 11.71 26.87 1.226 35.449 1.516 103.866 1.516s77-.29 103.866-1.516c26.815-1.224 45.127-5.482 61.151-11.71a128.817 128.817 0 0073.677-73.677c6.228-16.025 10.486-34.337 11.71-61.151 1.226-26.87 1.516-35.449 1.516-103.866s-.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486 123.486 0 00-29.057-44.62A123.487 123.487 0 00421.018 17.3c-16.025-6.223-34.337-10.481-61.152-11.7C333 4.369 324.418 4.079 256 4.079z"})),c||(c=h.createElement("path",{d:"M256 126.635A129.365 129.365 0 10385.365 256 129.365 129.365 0 00256 126.635zm0 213.338A83.973 83.973 0 11339.974 256 83.974 83.974 0 01256 339.973z"})),a||(a=h.createElement("circle",{cx:390.476,cy:121.524,r:30.23})))};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e){return h.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},e),O||(O=h.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})))};function w(e){var t=e.children;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(v,{}),Object(s.jsx)("div",{className:"container",children:t}),Object(s.jsxs)("footer",{children:[Object(s.jsxs)("div",{className:"links",children:[Object(s.jsx)("a",{target:"_blank",href:"https://github.com/ssong10",children:Object(s.jsx)(g,{})}),Object(s.jsx)("a",{target:"_blank",href:"https://www.instagram.com/2_seung10/",children:Object(s.jsx)(x,{})})]}),Object(s.jsx)("div",{children:Object(s.jsx)("small",{children:"Ssong10"})}),Object(s.jsx)("div",{children:Object(s.jsx)("small",{children:"leesy1403@naver.com"})})]})]})}},ODXe:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(o){c=!0,a=o}finally{try{r||null==i.return||i.return()}finally{if(c)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return c}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a=c(n("q1tI")),s=n("elyg"),i=n("nOHt"),o=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),c=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,s.resolveHref)(c,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,s.resolveHref)(c,e.as):i||a}}),[c,e.href,e.as]),d=f.href,h=f.as,j=e.children,p=e.replace,b=e.shallow,v=e.scroll,m=e.locale;"string"===typeof j&&(j=a.default.createElement("a",null,j));var O=a.Children.only(j),x=O&&"object"===typeof O&&O.ref,y=(0,o.useIntersection)({rootMargin:"200px"}),g=r(y,2),w=g[0],E=g[1],N=a.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,a.useEffect)((function(){var e=E&&t&&(0,s.isLocalURL)(d),r="undefined"!==typeof m?m:n&&n.locale,c=l[d+"%"+h+(r?"%"+r:"")];e&&!c&&u(n,d,h,{locale:r})}),[h,d,E,m,t,n]);var M={ref:N,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,a,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:a,locale:o,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,h,p,b,v,m)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),u(n,d,h,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var S="undefined"!==typeof m?m:n&&n.locale,k=(0,s.getDomainLocale)(h,S,n&&n.locales,n&&n.domainLocales);M.href=k||(0,s.addBasePath)((0,s.addLocale)(h,S,n&&n.defaultLocale))}return a.default.cloneElement(O,M)};t.default=f},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}e.exports=t}},n={};function r(t){if(n[t])return n[t].exports;var c=n[t]={exports:{}},a=!0;try{e[t](c,c.exports,r),a=!1}finally{a&&delete n[t]}return c.exports}return r.ab=t+"/",r(149)}()}).call(this,"/")},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],d=u[1],h=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),o.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){i||f||(0,s.default)((function(){return d(!0)}))}),[f]),[h,f]};var a=n("q1tI"),s=c(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var o=new Map}}]);