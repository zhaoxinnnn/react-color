"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[497],{7126:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(2951),o=r(1976),a=r(7591),i=r(3415),l=r(1473),s=r(8178),c="Markdown_markdown__pdFcg",u="Markdown_editor__ktea2",p="Markdown_warpper__j-FaN",d="Markdown_example__q3W5x",f="Markdown_footer__ShQo5",h=r(9286),g=function(e){var t=e.editorUrl;return t?(0,h.jsx)("a",{className:u,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(t),children:"Edit this page"}):null},v=function(e){(0,a.Z)(r,e);var t=(0,i.Z)(r);function r(e){var o;return(0,n.Z)(this,r),(o=t.call(this,e)).editorUrl=void 0,o.getMdStr=void 0,o.example=void 0,o.state={mdStr:""},o}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default||t})}))}},{key:"render",value:function(){return(0,h.jsxs)("div",{className:p,children:[(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)(g,{editorUrl:this.editorUrl}),this.example&&(0,h.jsx)("div",{className:d,children:this.example}),(0,h.jsx)(s.Z,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px",minHeight:120}}),(0,h.jsx)(g,{editorUrl:this.editorUrl})]}),(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,h.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,h.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,h.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,h.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,h.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,h.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,h.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,h.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,h.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,h.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,h.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,h.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,h.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(l.Component)},1800:function(e,t,r){r.d(t,{Z:function(){return C}});var n=r(1026);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var i=r(1473),l=r(6433),s=r(6651),c=r(5073),u=r(3147),p=r(317),d=r(1083),f=r(6629),h=r(5737),g=r(1134),v=r(9286),b=["style"];function x(e){var t=e.style,r=a(e,b),n=(0,i.useRef)(null),l=(0,i.useCallback)((function(e){n.current.style.backgroundColor="#e8e8e8"}),[]),s=(0,i.useCallback)((function(e){n.current.style.backgroundColor="transparent"}),[]);return(0,v.jsx)("div",o({ref:n,style:o({marginLeft:5,cursor:"pointer",transition:"background-color .3s",borderRadius:2},t)},r,{onMouseEnter:l,onMouseLeave:s,children:(0,v.jsx)("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24",style:{display:"block"},children:(0,v.jsx)("path",{d:"M373.888 576h276.224c9.322667 0 14.293333 11.178667 9.173333 18.773333l-1.258666 1.557334-138.112 146.858666a10.709333 10.709333 0 0 1-14.293334 1.365334l-1.536-1.365334-138.112-146.858666c-6.592-6.997333-2.666667-18.645333 5.973334-20.16l1.941333-0.170667h276.224-276.224z m146.026667-295.189333l138.112 146.858666c7.04 7.509333 2.069333 20.330667-7.914667 20.330667H373.888c-9.984 0-14.976-12.821333-7.914667-20.330667l138.112-146.858666a10.730667 10.730667 0 0 1 15.829334 0z",fill:"#333"})})}))}var y,m=["prefixCls","className","style","color","inputType","rectProps","onChange"];!function(e){e.HEXA="hexa",e.RGBA="rgba",e.HSLA="hsla"}(y||(y={}));var j=i.forwardRef((function(e,t){var r=e.prefixCls,b=void 0===r?"w-color-chrome":r,j=e.className,C=e.color,w=e.inputType,k=void 0===w?y.RGBA:w,B=(e.rectProps,e.onChange),S=a(e,m),R="string"===typeof C&&(0,s.Ff)(C)?(0,l.HW)(C):C||{h:0,s:0,l:0,a:0},P=function(e){return B&&B((0,l.$_)(e))},N=(0,i.useState)(k),L=(0,n.Z)(N,2),O=L[0],_=L[1],T={paddingTop:6},Z={textAlign:"center",paddingTop:4,paddingBottom:4};return(0,v.jsx)(c.Z,o({ref:t,color:R,style:{borderRadius:0,flexDirection:"column",width:230,padding:0},colors:void 0,className:[b,j].filter(Boolean).join(" "),placement:c.v.TopLeft},S,{addonAfter:(0,v.jsxs)(i.Fragment,{children:[(0,v.jsx)(u.Z,{hsva:R,style:{width:"100%",height:130},onChange:function(e){P(o({},R,e,{a:R.a}))}}),(0,v.jsxs)("div",{style:{padding:15,display:"flex",alignItems:"center"},children:[(0,v.jsx)(d.Z,{width:24,height:24,hsva:R,radius:2,style:{marginRight:15,borderRadius:"50%"},bgProps:{style:{background:"transparent"}},innerProps:{style:{borderRadius:"50%",background:(0,l.XL)(R),boxShadow:"rgb(0 0 0 / 25%) 0px 0px 1px inset"}},pointer:function(){return(0,v.jsx)(i.Fragment,{})}}),(0,v.jsxs)("div",{style:{flex:1},children:[(0,v.jsx)(p.Z,{hue:R.h,style:{width:"100%"},bgProps:{style:{borderRadius:2}},onChange:function(e){P(o({},R,e))}}),(0,v.jsx)(d.Z,{hsva:R,style:{marginTop:10},bgProps:{style:{borderRadius:2}},onChange:function(e){P(o({},R,e))}})]})]}),(0,v.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",padding:"0 15px 15px 15px",userSelect:"none"},children:[(0,v.jsxs)("div",{style:{flex:1},children:[O==y.RGBA&&(0,v.jsx)(h.Z,{hsva:R,rProps:{labelStyle:T,inputStyle:Z},gProps:{labelStyle:T,inputStyle:Z},bProps:{labelStyle:T,inputStyle:Z},aProps:{labelStyle:T,inputStyle:Z},onChange:function(e){return P(e.hsva)}}),O===y.HEXA&&(0,v.jsx)(f.Z,{label:"HEX",labelStyle:T,inputStyle:Z,value:R.a>0&&R.a<1?(0,l.IV)(R).toLocaleUpperCase():(0,l.A)(R).toLocaleUpperCase(),onChange:function(e,t){"string"===typeof t&&P((0,l.HW)(/^#/.test(t)?t:"#"+t))}}),O===y.HSLA&&(0,v.jsx)(g.Z,{hsva:R,hProps:{labelStyle:T,inputStyle:Z},sProps:{labelStyle:T,inputStyle:Z},lProps:{labelStyle:T,inputStyle:Z},aProps:{labelStyle:T,inputStyle:Z},onChange:function(e){return P(e.hsva)}})]}),(0,v.jsx)(x,{onClick:function(){O===y.RGBA&&_(y.HSLA),O===y.HSLA&&_(y.HEXA),O===y.HEXA&&_(y.RGBA)}})]})]}),rectRender:function(e){var t=e.key;return(0,v.jsx)(i.Fragment,{},t)}}))}));j.displayName="Chrome";var C=j},1134:function(e,t,r){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return u}});var o=r(1473),a=r(5737),i=r(6433),l=r(9286),s=["prefixCls","hsva","hProps","sProps","lProps","aProps","className","onChange"],c=o.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-editable-input-hsla":r,c=e.hsva,u=e.hProps,p=void 0===u?{}:u,d=e.sProps,f=void 0===d?{}:d,h=e.lProps,g=void 0===h?{}:h,v=e.aProps,b=void 0===v?{}:v,x=e.className,y=e.onChange,m=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,s),j=c?(0,i.BC)(c):{h:0,s:0,l:0,a:0},C=function(e,t,r){"number"===typeof e&&("h"===t&&(e<0&&(e=0),e>360&&(e=360),y&&y((0,i.$_)((0,i.Fi)(n({},j,{h:e}))))),"s"===t&&(e<0&&(e=0),e>100&&(e=100),y&&y((0,i.$_)((0,i.Fi)(n({},j,{s:e}))))),"l"===t&&(e<0&&(e=0),e>100&&(e=100),y&&y((0,i.$_)((0,i.Fi)(n({},j,{l:e}))))),"a"===t&&(e<0&&(e=0),e>1&&(e=1),y&&y((0,i.$_)((0,i.Fi)(n({},j,{a:e}))))))};return(0,l.jsx)(a.Z,n({ref:t,hsva:c,rProps:n({label:"H",value:Math.round(j.h)},p,{onChange:function(e,t){return C(t,"h")}}),gProps:n({label:"S",value:Math.round(j.s)+"%"},f,{onChange:function(e,t){return C(t,"s")}}),bProps:n({label:"L",value:Math.round(j.l)+"%"},g,{onChange:function(e,t){return C(t,"l")}}),aProps:n({label:"A",value:Math.round(100*j.a)/100},b,{onChange:function(e,t){return C(t,"a")}}),className:[o,x||""].filter(Boolean).join(" ")},m))}));c.displayName="EditableInputHSLA";var u=c},5737:function(e,t,r){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return u}});var o=r(1473),a=r(6629),i=r(6433),l=r(9286),s=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],c=o.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-editable-input-rgba":r,c=e.hsva,u=e.placement,p=void 0===u?"bottom":u,d=e.rProps,f=void 0===d?{}:d,h=e.gProps,g=void 0===h?{}:h,v=e.bProps,b=void 0===v?{}:v,x=e.aProps,y=void 0===x?{}:x,m=e.className,j=e.style,C=e.onChange,w=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,s),k=c?(0,i.MA)(c):{};function B(e){var t=Number(e.target.value);t&&t>255&&(e.target.value="255"),t&&t<0&&(e.target.value="0")}var S=function(e,t,r){"number"===typeof e&&("a"===t&&(e<0&&(e=0),e>100&&(e=100),C&&C((0,i.$_)((0,i.S7)(n({},k,{a:e/100}))))),e>255&&(e=255,r.target.value="255"),e<0&&(e=0,r.target.value="0"),"r"===t&&C&&C((0,i.$_)((0,i.S7)(n({},k,{r:e})))),"g"===t&&C&&C((0,i.$_)((0,i.S7)(n({},k,{g:e})))),"b"===t&&C&&C((0,i.$_)((0,i.S7)(n({},k,{b:e})))))};return(0,l.jsxs)("div",n({ref:t,className:[o,m||""].filter(Boolean).join(" ")},w,{style:n({fontSize:11,display:"flex"},j),children:[(0,l.jsx)(a.Z,n({label:"R",value:k.r||0,onBlur:B,placement:p,onChange:function(e,t){return S(t,"r",e)}},f,{style:n({},f.style)})),(0,l.jsx)(a.Z,n({label:"G",value:k.g||0,onBlur:B,placement:p,onChange:function(e,t){return S(t,"g",e)}},g,{style:n({marginLeft:5},f.style)})),(0,l.jsx)(a.Z,n({label:"B",value:k.b||0,onBlur:B,placement:p,onChange:function(e,t){return S(t,"b",e)}},b,{style:n({marginLeft:5},b.style)})),y&&(0,l.jsx)(a.Z,n({label:"A",value:k.a?parseInt(String(100*k.a),10):0,onBlur:B,placement:p,onChange:function(e,t){return S(t,"a",e)}},y,{style:n({marginLeft:5},y.style)}))]}))}));c.displayName="EditableInputRGBA";var u=c},6629:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(1026);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var a=r(1473),i=r(9286),l=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],s=a.forwardRef((function(e,t){var r=e.prefixCls,s=void 0===r?"w-color-editable-input":r,c=e.placement,u=void 0===c?"bottom":c,p=e.label,d=e.value,f=e.className,h=e.style,g=e.labelStyle,v=e.inputStyle,b=e.onChange,x=e.onBlur,y=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,l),m=(0,a.useState)(d),j=(0,n.Z)(m,2),C=j[0],w=j[1],k=(0,a.useRef)(!1);(0,a.useEffect)((function(){e.value!==C&&(k.current||w(e.value))}),[e.value]);var B={};return"bottom"===u&&(B.flexDirection="column"),"top"===u&&(B.flexDirection="column-reverse"),"left"===u&&(B.flexDirection="row-reverse"),(0,i.jsxs)("div",{className:[s,f||""].filter(Boolean).join(" "),style:o({position:"relative",alignItems:"center",display:"flex",fontSize:11},B,h),children:[(0,i.jsx)("input",o({ref:t,value:C,onChange:function(e,t){var r=t||e.target.value;/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&b&&b(e,r);var n=function(e){return Number(String(e).replace(/%/g,""))}(r);isNaN(n)||b&&b(e,n),w(r)},onBlur:function(t){k.current=!1,w(e.value),x&&x(t)},autoComplete:"off",onFocus:function(){return k.current=!0}},y,{style:o({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,boxSizing:"border-box",border:"none",boxShadow:"rgb(204 204 204) 0px 0px 0px 1px inset"},v)})),p&&(0,i.jsx)("span",{style:o({color:"rgb(153, 153, 153)",textTransform:"capitalize"},g),children:p})]})}));s.displayName="EditableInput";var c=s},5073:function(e,t,r){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{v:function(){return p},Z:function(){return v}});var a=r(1473),i=r(6433),l=r(6651),s=r(4571),c=r(9286);function u(e){var t=e.style,r=e.title,o=e.checked,i=(e.color,e.onClick),l=e.rectProps,s=(0,a.useRef)(null),u=(0,a.useCallback)((function(){s.current.style.zIndex="2",s.current.style.outline="#fff solid 2px",s.current.style.boxShadow="rgb(0 0 0 / 25%) 0 0 5px 2px"}),[]),p=(0,a.useCallback)((function(){o||(s.current.style.zIndex="0",s.current.style.outline="initial",s.current.style.boxShadow="initial")}),[o]);return(0,c.jsx)("div",n({ref:s,title:r},l,{onClick:i,onMouseEnter:u,onMouseLeave:p,style:n({},t,{marginRight:0,marginBottom:0,borderRadius:0,boxSizing:"border-box",height:25,width:25},o?{zIndex:1,outline:"#fff solid 2px",boxShadow:"rgb(0 0 0 / 25%) 0 0 5px 2px"}:{zIndex:0},l.style)}))}var p,d=["prefixCls","placement","className","style","color","colors","rectProps","onChange"],f=["key"],h=["#B80000","#DB3E00","#FCCB00","#008B02","#006B76","#1273DE","#004DCF","#5300EB","#EB9694","#FAD0C3","#FEF3BD","#C1E1C5","#BEDADC","#C4DEF6","#BED3F3","#D4C4FB"];!function(e){e.Left="L",e.LeftTop="LT",e.LeftBotton="LB",e.Right="R",e.RightTop="RT",e.RightBotton="RB",e.Top="T",e.TopRight="TR",e.TopLeft="TL",e.Botton="B",e.BottonLeft="BL",e.BottonRight="BR"}(p||(p={}));var g=a.forwardRef((function(e,t){var r=e.prefixCls,g=void 0===r?"w-color-github":r,v=e.placement,b=void 0===v?p.TopRight:v,x=e.className,y=e.style,m=e.color,j=e.colors,C=void 0===j?h:j,w=e.rectProps,k=void 0===w?{}:w,B=e.onChange,S=o(e,d),R="string"===typeof m&&(0,l.Ff)(m)?(0,i.HW)(m):m,P=m?(0,i.A)(R):"",N={borderStyle:"solid",position:"absolute"},L=n({},N),O=n({},N);return/^T/.test(b)&&(L.borderWidth="0 8px 8px",L.borderColor="transparent transparent rgba(0, 0, 0, 0.15)",O.borderWidth="0 7px 7px",O.borderColor="transparent transparent #fff"),b===p.TopRight&&(L.top=-8,O.top=-7),b===p.Top&&(L.top=-8,O.top=-7),b===p.TopLeft&&(L.top=-8,O.top=-7),/^B/.test(b)&&(L.borderWidth="8px 8px 0 ",L.borderColor="rgba(0, 0, 0, 0.15) transparent transparent",O.borderWidth="7px 7px 0px",O.borderColor="#fff transparent transparent",b===p.BottonRight&&(L.top="100%",O.top="100%"),b===p.Botton&&(L.top="100%",O.top="100%"),b===p.BottonLeft&&(L.top="100%",O.top="100%")),/^(B|T)/.test(b)&&(b!==p.Top&&b!==p.Botton||(L.left="50%",L.marginLeft=-8,O.left="50%",O.marginLeft=-7),b!==p.TopRight&&b!==p.BottonRight||(L.right=10,O.right=11),b!==p.TopLeft&&b!==p.BottonLeft||(L.left=7,O.left=8)),/^L/.test(b)&&(L.borderWidth="8px 8px 8px 0px",L.borderColor="transparent rgba(0, 0, 0, 0.15) transparent transparent",O.borderWidth="7px 7px 7px 0px",O.borderColor="transparent #fff transparent transparent",L.left=-8,O.left=-7),/^R/.test(b)&&(L.borderWidth="8px 0px 8px 8px",L.borderColor="transparent transparent transparent rgba(0, 0, 0, 0.15)",O.borderWidth="7px 0px 7px 7px",O.borderColor="transparent transparent transparent #fff",L.right=-8,O.right=-7),/^(L|R)/.test(b)&&(b!==p.RightTop&&b!==p.LeftTop||(L.top=5,O.top=6),b!==p.Left&&b!==p.Right||(L.top="50%",O.top="50%",L.marginTop=-8,O.marginTop=-7),b!==p.LeftBotton&&b!==p.RightBotton||(L.top="100%",O.top="100%",L.marginTop=-21,O.marginTop=-20)),(0,c.jsx)(s.Z,n({ref:t,className:[g,x].filter(Boolean).join(" "),colors:C,color:P,rectRender:function(e){var t=e.key,r=o(e,f);return(0,c.jsx)(u,n({},r,{rectProps:k}),t)}},S,{onChange:function(e){return B&&B((0,i.$_)(e))},style:n({width:200,borderRadius:4,background:"#fff",boxShadow:"rgb(0 0 0 / 15%) 0px 3px 12px",border:"1px solid rgba(0, 0, 0, 0.2)",position:"relative",padding:5},y),rectProps:{style:{marginRight:0,marginBottom:0,borderRadius:0,height:25,width:25}},addonBefore:(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)("div",{style:L}),(0,c.jsx)("div",{style:O})]})}))}));g.displayName="Github";var v=g},317:function(e,t,r){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return c}});var o=r(1473),a=r(1083),i=r(9286),l=["prefixCls","className","hue","onChange","direction"],s=o.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-hue":r,s=e.className,c=e.hue,u=void 0===c?0:c,p=e.onChange,d=e.direction,f=void 0===d?"horizontal":d,h=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,l);return(0,i.jsx)(a.Z,n({ref:t,className:o+" "+(s||"")},h,{direction:f,background:"linear-gradient(to "+("horizontal"===f?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:u,s:100,v:100,a:u/360},onChange:function(e,t){p&&p({h:"horizontal"===f?360*t.left:360*t.top})}}))}));s.displayName="Hue";var c=s},3147:function(e,t,r){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return p}});var o=r(1473),a=r(6433),i=r(1189),l=r(9286),s=function(e){var t=e.className,r=e.color,n=e.left,a=e.top,i=e.prefixCls,s={position:"absolute",top:a,left:n};return(0,o.useMemo)((function(){return(0,l.jsx)("div",{className:i+"-pointer "+(t||""),style:s,children:(0,l.jsx)("div",{className:i+"-fill",style:{width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:r}})})}),[a,n,r,t,i])},c=["prefixCls","radius","pointer","className","style","hsva","onChange"],u=o.forwardRef((function(e,t){var r=e.prefixCls,u=void 0===r?"w-color-saturation":r,p=e.radius,d=void 0===p?0:p,f=e.pointer,h=e.className,g=e.style,v=e.hsva,b=e.onChange,x=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,c),y=n({width:200,height:200,borderRadius:d},g,{position:"relative"}),m=function(e,t){b&&b({h:v.h,s:100*e.left,v:100*(1-e.top),a:v.a})},j={top:100-v.v+"%",left:v.s+"%",color:(0,a.Gg)(v)};return(0,l.jsx)(i.ZP,n({className:[u,h||""].filter(Boolean).join(" ")},x,{style:n({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+v.h+", 100%, 50%))"},y),ref:t,onMove:m,onDown:m,children:o.createElement(f||s,n({prefixCls:u},j))}))}));u.displayName="Saturation";var p=u},4571:function(e,t,r){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return c}});var o=r(1473),a=r(6433),i=r(9286),l=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],s=o.forwardRef((function(e,t){var r=e.prefixCls,s=void 0===r?"w-color-swatch":r,c=e.className,u=e.color,p=e.colors,d=void 0===p?[]:p,f=e.style,h=e.rectProps,g=void 0===h?{}:h,v=e.onChange,b=e.addonAfter,x=e.addonBefore,y=e.rectRender,m=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,l),j=n({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},g.style),C=function(e){v&&v((0,a.HW)(e))};return(0,i.jsxs)("div",n({ref:t},m,{className:[s,c||""].filter(Boolean).join(" "),style:n({display:"flex",flexWrap:"wrap",position:"relative"},f),children:[x&&o.isValidElement(x)&&x,d&&Array.isArray(d)&&d.map((function(e,t){var r="",a="";"string"===typeof e&&(r=e,a=e),"object"===typeof e&&e.color&&(r=e.title||e.color,a=e.color);var l=u&&u.toLocaleLowerCase()===a.toLocaleLowerCase();if(y)return y({key:t,title:r,color:a,checked:!!l,style:n({},j,{background:a}),onClick:function(){return C(a)}});var s=g.children&&o.isValidElement(g.children)?o.cloneElement(g.children,{color:a,checked:l}):null;return(0,i.jsx)("div",n({tabIndex:0,title:r,onClick:function(){return C(a)}},g,{children:s,style:n({},j,{background:a})}),t)})),b&&o.isValidElement(b)&&b]}))}));s.displayName="Swatch";var c=s}}]);
//# sourceMappingURL=497.15b88059.chunk.js.map