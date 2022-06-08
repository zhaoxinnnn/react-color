"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[285],{7126:function(t,e,r){r.d(e,{Z:function(){return m}});var i=r(2951),s=r(1976),n=r(7591),a=r(3415),o=r(1473),l=r(8178),c="Markdown_markdown__pdFcg",h="Markdown_editor__ktea2",u="Markdown_warpper__j-FaN",d="Markdown_example__q3W5x",g="Markdown_footer__ShQo5",p=r(9286),f=function(t){var e=t.editorUrl;return e?(0,p.jsx)("a",{className:h,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(e),children:"Edit this page"}):null},m=function(t){(0,n.Z)(r,t);var e=(0,a.Z)(r);function r(t){var s;return(0,i.Z)(this,r),(s=e.call(this,t)).editorUrl=void 0,s.getMdStr=void 0,s.example=void 0,s.state={mdStr:""},s}return(0,s.Z)(r,[{key:"componentDidMount",value:function(){var t=this;this.getMdStr&&this.getMdStr().then((function(e){t.setState({mdStr:e.default||e})}))}},{key:"render",value:function(){return(0,p.jsxs)("div",{className:u,children:[(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)(f,{editorUrl:this.editorUrl}),this.example&&(0,p.jsx)("div",{className:d,children:this.example}),(0,p.jsx)(l.Z,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px",minHeight:120}}),(0,p.jsx)(f,{editorUrl:this.editorUrl})]}),(0,p.jsxs)("div",{className:g,children:[(0,p.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,p.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,p.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,p.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(o.Component)},9810:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var i=r(1976),s=r(2951),n=r(7591),a=r(3415),o=r(189),l=r(1473),c=r(317),h=r(7126),u=r(7664),d=r(9286);function g(){var t=(0,l.useContext)(u._y),e=t.hsva,r=t.dispatch;return(0,d.jsx)("div",{style:{width:256},children:(0,d.jsx)(c.Z,{hue:e.h,onChange:function(t){r({hsva:(0,o.Z)((0,o.Z)({},e),t)})}})})}var p=function(t){(0,n.Z)(o,t);var e=(0,a.Z)(o);function o(){var t;(0,s.Z)(this,o);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).editorUrl="/packages/color-hue/README.md",t.getMdStr=function(){return r.e(991).then(r.bind(r,9991))},t.example=(0,d.jsx)(g,{}),t}return(0,i.Z)(o)}(h.Z)},317:function(t,e,r){function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},i.apply(this,arguments)}r.d(e,{Z:function(){return c}});var s=r(1473),n=r(1083),a=r(9286),o=["prefixCls","className","hue","onChange","direction"],l=s.forwardRef((function(t,e){var r=t.prefixCls,s=void 0===r?"w-color-hue":r,l=t.className,c=t.hue,h=void 0===c?0:c,u=t.onChange,d=t.direction,g=void 0===d?"horizontal":d,p=function(t,e){if(null==t)return{};var r,i,s={},n=Object.keys(t);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||(s[r]=t[r]);return s}(t,o);return(0,a.jsx)(n.Z,i({ref:e,className:s+" "+(l||"")},p,{direction:g,background:"linear-gradient(to "+("horizontal"===g?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:h,s:100,v:100,a:h/360},onChange:function(t,e){u&&u({h:"horizontal"===g?360*e.left:360*e.top})}}))}));l.displayName="Hue";var c=l}}]);
//# sourceMappingURL=285.aba2587c.chunk.js.map