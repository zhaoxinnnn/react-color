"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[309],{7126:function(t,e,r){r.d(e,{Z:function(){return x}});var s=r(2951),i=r(1976),a=r(7591),n=r(3415),o=r(1473),l=r(8178),c="Markdown_markdown__pdFcg",h="Markdown_editor__ktea2",u="Markdown_warpper__j-FaN",d="Markdown_example__q3W5x",p="Markdown_footer__ShQo5",g=r(9286),f=function(t){var e=t.editorUrl;return e?(0,g.jsx)("a",{className:h,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(e),children:"Edit this page"}):null},x=function(t){(0,a.Z)(r,t);var e=(0,n.Z)(r);function r(t){var i;return(0,s.Z)(this,r),(i=e.call(this,t)).editorUrl=void 0,i.getMdStr=void 0,i.example=void 0,i.state={mdStr:""},i}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){var t=this;this.getMdStr&&this.getMdStr().then((function(e){t.setState({mdStr:e.default||e})}))}},{key:"render",value:function(){return(0,g.jsxs)("div",{className:u,children:[(0,g.jsxs)("div",{className:c,children:[(0,g.jsx)(f,{editorUrl:this.editorUrl}),this.example&&(0,g.jsx)("div",{className:d,children:this.example}),(0,g.jsx)(l.Z,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px",minHeight:120}}),(0,g.jsx)(f,{editorUrl:this.editorUrl})]}),(0,g.jsxs)("div",{className:p,children:[(0,g.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,g.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,g.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,g.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(o.Component)},9637:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var s=r(1976),i=r(2951),a=r(7591),n=r(3415),o=r(189),l=r(1473),c=r(3147),h=r(7126),u=r(7664),d=r(9286);function p(){var t=(0,l.useContext)(u._y),e=t.hsva,r=t.dispatch;return(0,d.jsx)("div",{style:{width:256},children:(0,d.jsx)(c.Z,{hsva:e,onChange:function(t){r({hsva:(0,o.Z)((0,o.Z)((0,o.Z)({},e),t),{},{a:e.a})})}})})}var g=function(t){(0,a.Z)(o,t);var e=(0,n.Z)(o);function o(){var t;(0,i.Z)(this,o);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).editorUrl="/packages/color-saturation/README.md",t.getMdStr=function(){return r.e(301).then(r.bind(r,8301))},t.example=(0,d.jsx)(p,{}),t}return(0,s.Z)(o)}(h.Z)},3147:function(t,e,r){function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},s.apply(this,arguments)}r.d(e,{Z:function(){return u}});var i=r(1473),a=r(6433),n=r(1189),o=r(9286),l=function(t){var e=t.className,r=t.color,s=t.left,a=t.top,n=t.prefixCls,l={position:"absolute",top:a,left:s};return(0,i.useMemo)((function(){return(0,o.jsx)("div",{className:n+"-pointer "+(e||""),style:l,children:(0,o.jsx)("div",{className:n+"-fill",style:{width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:r}})})}),[a,s,r,e,n])},c=["prefixCls","radius","pointer","className","style","hsva","onChange"],h=i.forwardRef((function(t,e){var r=t.prefixCls,h=void 0===r?"w-color-saturation":r,u=t.radius,d=void 0===u?0:u,p=t.pointer,g=t.className,f=t.style,x=t.hsva,m=t.onChange,v=function(t,e){if(null==t)return{};var r,s,i={},a=Object.keys(t);for(s=0;s<a.length;s++)r=a[s],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,c),j=s({width:200,height:200,borderRadius:d},f,{position:"relative"}),b=function(t,e){m&&m({h:x.h,s:100*t.left,v:100*(1-t.top),a:x.a})},w={top:100-x.v+"%",left:x.s+"%",color:(0,a.Gg)(x)};return(0,o.jsx)(n.ZP,s({className:[h,g||""].filter(Boolean).join(" ")},v,{style:s({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+x.h+", 100%, 50%))"},j),ref:e,onMove:b,onDown:b,children:i.createElement(p||l,s({prefixCls:h},w))}))}));h.displayName="Saturation";var u=h}}]);
//# sourceMappingURL=309.48b60807.chunk.js.map