(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[139],{363:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=363,e.exports=t},2664:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(2951),a=r(1976),i=r(7591),s=r(3415),o=r(1473),l=(r(6991),{markdown:"Markdown_markdown__pdFcg",editor:"Markdown_editor__ktea2",warpper:"Markdown_warpper__j-FaN",example:"Markdown_example__q3W5x",footer:"Markdown_footer__ShQo5"}),c=r(189),u=r(3782),d=r(1843),h=r(7963),p=r(2094),f=r(5142),g=r(9286),v=["inline","node"],m=["data-meta"];function x(e){return(0,g.jsx)(d.Z,{disableCopy:!0,source:e.source,style:{padding:"20px 26px",minHeight:120},components:{code:function(t){var r,n=t.inline,a=t.node,i=(0,u.Z)(t,v),s=i,o=s["data-meta"],l=(0,u.Z)(s,m);if(n||!(0,f.pN)(o))return(0,g.jsx)("code",(0,c.Z)({},i));var d=null===(r=a.position)||void 0===r?void 0:r.start.line,x=(0,f.Mx)(o)||String(d),b=e.components["".concat(x)];if(x&&"function"===typeof b){var j=(0,p.U)(a.children),y=(0,f.aE)(o);return(0,g.jsx)(h.Z,{toolbar:y.title||"Example Display",code:(0,g.jsx)("code",(0,c.Z)({},l)),text:j,children:(0,g.jsx)(b,{})})}return(0,g.jsx)("code",(0,c.Z)({},l))}}})}var b=function(e){var t=e.editorUrl;return t?(0,g.jsx)("a",{className:l.editor,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(t),children:"Edit this page"}):null},j=function(e){(0,i.Z)(r,e);var t=(0,s.Z)(r);function r(e){var a;return(0,n.Z)(this,r),(a=t.call(this,e)).editorUrl=void 0,a.getMdStr=void 0,a.example=void 0,a.state={mdStr:""},a}return(0,a.Z)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default.source,mdObj:t.default})}))}},{key:"render",value:function(){var e=this.state.mdObj||{},t=e.source,r=e.components,n=e.data;return(0,g.jsxs)("div",{className:[l.warpper,"wmde-markdown-var"].join(" "),children:[(0,g.jsx)("dark-mode",{permanent:!0,light:"Dark",dark:"Light"}),(0,g.jsxs)("div",{className:l.markdown,children:[(0,g.jsx)(b,{editorUrl:this.editorUrl}),this.example&&(0,g.jsx)("div",{className:l.example,children:this.example}),(0,g.jsx)(x,{source:t||"",components:r||{},data:n||{}}),(0,g.jsx)(b,{editorUrl:this.editorUrl})]}),(0,g.jsxs)("div",{className:l.footer,children:[(0,g.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,g.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,g.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,g.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(o.Component)},4631:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(1976),a=r(2951),i=r(7591),s=r(3415),o=r(189),l=r(1473),c=r(3145),u=r(2664),d=r(7664),h=r(9286);function p(){var e=(0,l.useContext)(d._y),t=e.hsva,r=e.dispatch;return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"10px 0 10px 0"},children:[(0,h.jsx)(c.Z,{style:{maxWidth:180,marginRight:15},hsva:t,onChange:function(e){r({hsva:(0,o.Z)((0,o.Z)({},t),e.hsva)})}}),(0,h.jsx)(c.Z,{style:{maxWidth:180},hsva:t,placement:"top",onChange:function(e){r({hsva:(0,o.Z)((0,o.Z)({},t),e.hsva)})}})]}),(0,h.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center"},children:[(0,h.jsx)(c.Z,{style:{maxWidth:180,marginRight:15},hsva:t,placement:"left",onChange:function(e){r({hsva:(0,o.Z)((0,o.Z)({},t),e.hsva)})}}),(0,h.jsx)(c.Z,{style:{maxWidth:180},hsva:t,placement:"right",onChange:function(e){r({hsva:(0,o.Z)((0,o.Z)({},t),e.hsva)})}})]})]})}var f=function(e){(0,i.Z)(o,e);var t=(0,s.Z)(o);function o(){var e;(0,a.Z)(this,o);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).editorUrl="/packages/color-editable-input-rgba/README.md",e.getMdStr=function(){return r.e(430).then(r.bind(r,7430))},e.example=(0,h.jsx)(p,{}),e}return(0,n.Z)(o)}(u.Z)},3145:function(e,t,r){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return u}});var a=r(1473),i=r(6629),s=r(6433),o=r(9286),l=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],c=a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-editable-input-rgba":r,c=e.hsva,u=e.placement,d=void 0===u?"bottom":u,h=e.rProps,p=void 0===h?{}:h,f=e.gProps,g=void 0===f?{}:f,v=e.bProps,m=void 0===v?{}:v,x=e.aProps,b=void 0===x?{}:x,j=e.className,y=e.style,w=e.onChange,k=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,l),Z=c?(0,s.hsvaToRgba)(c):{};function _(e){var t=Number(e.target.value);t&&t>255&&(e.target.value="255"),t&&t<0&&(e.target.value="0")}var C=function(e,t,r){"number"===typeof e&&("a"===t&&(e<0&&(e=0),e>100&&(e=100),w&&w((0,s.color)((0,s.rgbaToHsva)(n({},Z,{a:e/100}))))),e>255&&(e=255,r.target.value="255"),e<0&&(e=0,r.target.value="0"),"r"===t&&w&&w((0,s.color)((0,s.rgbaToHsva)(n({},Z,{r:e})))),"g"===t&&w&&w((0,s.color)((0,s.rgbaToHsva)(n({},Z,{g:e})))),"b"===t&&w&&w((0,s.color)((0,s.rgbaToHsva)(n({},Z,{b:e})))))};return(0,o.jsxs)("div",n({ref:t,className:[a,j||""].filter(Boolean).join(" ")},k,{style:n({fontSize:11,display:"flex"},y),children:[(0,o.jsx)(i.Z,n({label:"R",value:Z.r||0,onBlur:_,placement:d,onChange:function(e,t){return C(t,"r",e)}},p,{style:n({},p.style)})),(0,o.jsx)(i.Z,n({label:"G",value:Z.g||0,onBlur:_,placement:d,onChange:function(e,t){return C(t,"g",e)}},g,{style:n({marginLeft:5},p.style)})),(0,o.jsx)(i.Z,n({label:"B",value:Z.b||0,onBlur:_,placement:d,onChange:function(e,t){return C(t,"b",e)}},m,{style:n({marginLeft:5},m.style)})),b&&(0,o.jsx)(i.Z,n({label:"A",value:Z.a?parseInt(String(100*Z.a),10):0,onBlur:_,placement:d,onChange:function(e,t){return C(t,"a",e)}},b,{style:n({marginLeft:5},b.style)}))]}))}));c.displayName="EditableInputRGBA";var u=c},6629:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(1026);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var i=r(1473),s=r(9286),o=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],l=i.forwardRef((function(e,t){var r=e.prefixCls,l=void 0===r?"w-color-editable-input":r,c=e.placement,u=void 0===c?"bottom":c,d=e.label,h=e.value,p=e.className,f=e.style,g=e.labelStyle,v=e.inputStyle,m=e.onChange,x=e.onBlur,b=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o),j=(0,i.useState)(h),y=(0,n.Z)(j,2),w=y[0],k=y[1],Z=(0,i.useRef)(!1);(0,i.useEffect)((function(){e.value!==w&&(Z.current||k(e.value))}),[e.value]);var _={};return"bottom"===u&&(_.flexDirection="column"),"top"===u&&(_.flexDirection="column-reverse"),"left"===u&&(_.flexDirection="row-reverse"),(0,s.jsxs)("div",{className:[l,p||""].filter(Boolean).join(" "),style:a({position:"relative",alignItems:"center",display:"flex",fontSize:11},_,f),children:[(0,s.jsx)("input",a({ref:t,value:w,onChange:function(e,t){var r=t||e.target.value;/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&m&&m(e,r);var n=function(e){return Number(String(e).replace(/%/g,""))}(r);isNaN(n)||m&&m(e,n),k(r)},onBlur:function(t){Z.current=!1,k(e.value),x&&x(t)},autoComplete:"off",onFocus:function(){return Z.current=!0}},b,{style:a({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,boxSizing:"border-box",border:"none",boxShadow:"rgb(204 204 204) 0px 0px 0px 1px inset"},v)})),d&&(0,s.jsx)("span",{style:a({color:"rgb(153, 153, 153)",textTransform:"capitalize"},g),children:d})]})}));l.displayName="EditableInput";var c=l}}]);
//# sourceMappingURL=139.7f41e9d4.chunk.js.map