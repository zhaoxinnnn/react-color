(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[924],{363:function(t){function r(t){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=function(){return[]},r.resolve=r,r.id=363,t.exports=r},2664:function(t,r,e){"use strict";e.d(r,{Z:function(){return j}});var o=e(2951),n=e(1976),i=e(7591),a=e(3415),s=e(1473),l=(e(6991),{markdown:"Markdown_markdown__pdFcg",editor:"Markdown_editor__ktea2",warpper:"Markdown_warpper__j-FaN",example:"Markdown_example__q3W5x",footer:"Markdown_footer__ShQo5"}),c=e(189),d=e(3782),p=e(1843),u=e(7963),h=e(2094),f=e(5142),g=e(9286),x=["inline","node"],b=["data-meta"];function m(t){return(0,g.jsx)(p.Z,{disableCopy:!0,source:t.source,style:{padding:"20px 26px",minHeight:120},components:{code:function(r){var e,o=r.inline,n=r.node,i=(0,d.Z)(r,x),a=i,s=a["data-meta"],l=(0,d.Z)(a,b);if(o||!(0,f.pN)(s))return(0,g.jsx)("code",(0,c.Z)({},i));var p=null===(e=n.position)||void 0===e?void 0:e.start.line,m=(0,f.Mx)(s)||String(p),v=t.components["".concat(m)];if(m&&"function"===typeof v){var j=(0,h.U)(n.children),w=(0,f.aE)(s);return(0,g.jsx)(u.Z,{toolbar:w.title||"Example Display",code:(0,g.jsx)("code",(0,c.Z)({},l)),text:j,children:(0,g.jsx)(v,{})})}return(0,g.jsx)("code",(0,c.Z)({},l))}}})}var v=function(t){var r=t.editorUrl;return r?(0,g.jsx)("a",{className:l.editor,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(r),children:"Edit this page"}):null},j=function(t){(0,i.Z)(e,t);var r=(0,a.Z)(e);function e(t){var n;return(0,o.Z)(this,e),(n=r.call(this,t)).editorUrl=void 0,n.getMdStr=void 0,n.example=void 0,n.state={mdStr:""},n}return(0,n.Z)(e,[{key:"componentDidMount",value:function(){var t=this;this.getMdStr&&this.getMdStr().then((function(r){t.setState({mdStr:r.default.source,mdObj:r.default})}))}},{key:"render",value:function(){var t=this.state.mdObj||{},r=t.source,e=t.components,o=t.data;return(0,g.jsxs)("div",{className:[l.warpper,"wmde-markdown-var"].join(" "),children:[(0,g.jsx)("dark-mode",{permanent:!0,light:"Dark",dark:"Light"}),(0,g.jsxs)("div",{className:l.markdown,children:[(0,g.jsx)(v,{editorUrl:this.editorUrl}),this.example&&(0,g.jsx)("div",{className:l.example,children:this.example}),(0,g.jsx)(m,{source:r||"",components:e||{},data:o||{}}),(0,g.jsx)(v,{editorUrl:this.editorUrl})]}),(0,g.jsxs)("div",{className:l.footer,children:[(0,g.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,g.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,g.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,g.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),e}(s.Component)},2529:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return f}});var o=e(1976),n=e(2951),i=e(7591),a=e(3415),s=e(189),l=e(1473),c=e(5073),d=e(2664),p=e(7664),u=e(9286);function h(){var t=(0,l.useContext)(p._y),r=t.hsva,e=t.dispatch;return(0,u.jsx)("div",{style:{width:256},children:(0,u.jsx)(c.default,{color:r,onChange:function(t){e({hsva:(0,s.Z)((0,s.Z)({},r),t.hsva)})}})})}var f=function(t){(0,i.Z)(s,t);var r=(0,a.Z)(s);function s(){var t;(0,n.Z)(this,s);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(t=r.call.apply(r,[this].concat(i))).editorUrl="/packages/color-github/README.md",t.getMdStr=function(){return e.e(533).then(e.bind(e,9533))},t.example=(0,u.jsx)(h,{}),t}return(0,o.Z)(s)}(d.Z)},5073:function(t,r,e){"use strict";function o(){return o=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},o.apply(this,arguments)}function n(t,r){if(null==t)return{};var e,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],r.indexOf(e)>=0||(n[e]=t[e]);return n}e.r(r),e.d(r,{GithubPlacement:function(){return p},default:function(){return x}});var i=e(1473),a=e(6651),s=e(6433),l=e(4571),c=e(9286);function d(t){var r=t.style,e=t.title,n=t.checked,a=(t.color,t.onClick),s=t.rectProps,l=(0,i.useRef)(null),d=(0,i.useCallback)((function(){l.current.style.zIndex="2",l.current.style.outline="#fff solid 2px",l.current.style.boxShadow="rgb(0 0 0 / 25%) 0 0 5px 2px"}),[]),p=(0,i.useCallback)((function(){n||(l.current.style.zIndex="0",l.current.style.outline="initial",l.current.style.boxShadow="initial")}),[n]);return(0,c.jsx)("div",o({ref:l,title:e},s,{onClick:a,onMouseEnter:d,onMouseLeave:p,style:o({},r,{marginRight:0,marginBottom:0,borderRadius:0,boxSizing:"border-box",height:25,width:25},n?{zIndex:1,outline:"#fff solid 2px",boxShadow:"rgb(0 0 0 / 25%) 0 0 5px 2px"}:{zIndex:0},s.style)}))}var p,u=["prefixCls","placement","className","style","color","colors","rectProps","onChange"],h=["key"],f=["#B80000","#DB3E00","#FCCB00","#008B02","#006B76","#1273DE","#004DCF","#5300EB","#EB9694","#FAD0C3","#FEF3BD","#C1E1C5","#BEDADC","#C4DEF6","#BED3F3","#D4C4FB"];!function(t){t.Left="L",t.LeftTop="LT",t.LeftBotton="LB",t.Right="R",t.RightTop="RT",t.RightBotton="RB",t.Top="T",t.TopRight="TR",t.TopLeft="TL",t.Botton="B",t.BottonLeft="BL",t.BottonRight="BR"}(p||(p={}));var g=i.forwardRef((function(t,r){var e=t.prefixCls,g=void 0===e?"w-color-github":e,x=t.placement,b=void 0===x?p.TopRight:x,m=t.className,v=t.style,j=t.color,w=t.colors,y=void 0===w?f:w,k=t.rectProps,C=void 0===k?{}:k,B=t.onChange,R=n(t,u),_="string"===typeof j&&(0,a.Ff)(j)?(0,s.hexToHsva)(j):j,T=j?(0,s.hsvaToHex)(_):"",L={borderStyle:"solid",position:"absolute"},E=o({},L),Z=o({},L);return/^T/.test(b)&&(E.borderWidth="0 8px 8px",E.borderColor="transparent transparent rgba(0, 0, 0, 0.15)",Z.borderWidth="0 7px 7px",Z.borderColor="transparent transparent #fff"),b===p.TopRight&&(E.top=-8,Z.top=-7),b===p.Top&&(E.top=-8,Z.top=-7),b===p.TopLeft&&(E.top=-8,Z.top=-7),/^B/.test(b)&&(E.borderWidth="8px 8px 0 ",E.borderColor="rgba(0, 0, 0, 0.15) transparent transparent",Z.borderWidth="7px 7px 0px",Z.borderColor="#fff transparent transparent",b===p.BottonRight&&(E.top="100%",Z.top="100%"),b===p.Botton&&(E.top="100%",Z.top="100%"),b===p.BottonLeft&&(E.top="100%",Z.top="100%")),/^(B|T)/.test(b)&&(b!==p.Top&&b!==p.Botton||(E.left="50%",E.marginLeft=-8,Z.left="50%",Z.marginLeft=-7),b!==p.TopRight&&b!==p.BottonRight||(E.right=10,Z.right=11),b!==p.TopLeft&&b!==p.BottonLeft||(E.left=7,Z.left=8)),/^L/.test(b)&&(E.borderWidth="8px 8px 8px 0px",E.borderColor="transparent rgba(0, 0, 0, 0.15) transparent transparent",Z.borderWidth="7px 7px 7px 0px",Z.borderColor="transparent #fff transparent transparent",E.left=-8,Z.left=-7),/^R/.test(b)&&(E.borderWidth="8px 0px 8px 8px",E.borderColor="transparent transparent transparent rgba(0, 0, 0, 0.15)",Z.borderWidth="7px 0px 7px 7px",Z.borderColor="transparent transparent transparent #fff",E.right=-8,Z.right=-7),/^(L|R)/.test(b)&&(b!==p.RightTop&&b!==p.LeftTop||(E.top=5,Z.top=6),b!==p.Left&&b!==p.Right||(E.top="50%",Z.top="50%",E.marginTop=-8,Z.marginTop=-7),b!==p.LeftBotton&&b!==p.RightBotton||(E.top="100%",Z.top="100%",E.marginTop=-21,Z.marginTop=-20)),(0,c.jsx)(l.Z,o({ref:r,className:[g,m].filter(Boolean).join(" "),colors:y,color:T,rectRender:function(t){var r=t.key,e=n(t,h);return(0,c.jsx)(d,o({},e,{rectProps:C}),r)}},R,{onChange:function(t){return B&&B((0,s.color)(t))},style:o({width:200,borderRadius:4,background:"#fff",boxShadow:"rgb(0 0 0 / 15%) 0px 3px 12px",border:"1px solid rgba(0, 0, 0, 0.2)",position:"relative",padding:5},v),rectProps:{style:{marginRight:0,marginBottom:0,borderRadius:0,height:25,width:25}},addonBefore:(0,c.jsxs)(i.Fragment,{children:[(0,c.jsx)("div",{style:E}),(0,c.jsx)("div",{style:Z})]})}))}));g.displayName="Github";var x=g},4571:function(t,r,e){"use strict";function o(){return o=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},o.apply(this,arguments)}e.d(r,{Z:function(){return c}});var n=e(1473),i=e(6433),a=e(9286),s=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],l=n.forwardRef((function(t,r){var e=t.prefixCls,l=void 0===e?"w-color-swatch":e,c=t.className,d=t.color,p=t.colors,u=void 0===p?[]:p,h=t.style,f=t.rectProps,g=void 0===f?{}:f,x=t.onChange,b=t.addonAfter,m=t.addonBefore,v=t.rectRender,j=function(t,r){if(null==t)return{};var e,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],r.indexOf(e)>=0||(n[e]=t[e]);return n}(t,s),w=o({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},g.style),y=function(t){x&&x((0,i.hexToHsva)(t))};return(0,a.jsxs)("div",o({ref:r},j,{className:[l,c||""].filter(Boolean).join(" "),style:o({display:"flex",flexWrap:"wrap",position:"relative"},h),children:[m&&n.isValidElement(m)&&m,u&&Array.isArray(u)&&u.map((function(t,r){var e="",i="";"string"===typeof t&&(e=t,i=t),"object"===typeof t&&t.color&&(e=t.title||t.color,i=t.color);var s=d&&d.toLocaleLowerCase()===i.toLocaleLowerCase();if(v)return v({key:r,title:e,color:i,checked:!!s,style:o({},w,{background:i}),onClick:function(){return y(i)}});var l=g.children&&n.isValidElement(g.children)?n.cloneElement(g.children,{color:i,checked:s}):null;return(0,a.jsx)("div",o({tabIndex:0,title:e,onClick:function(){return y(i)}},g,{children:l,style:o({},w,{background:i})}),r)})),b&&n.isValidElement(b)&&b]}))}));l.displayName="Swatch";var c=l}}]);
//# sourceMappingURL=924.7b8c47a8.chunk.js.map