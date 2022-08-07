import{aq as B,aZ as F,ar as V,aC as $,r as u,aJ as j,f as h,az as J}from"./vendor.d12bc461.js";import{U as m,s as K,m as G,t as q,a as A}from"./index.3852b8e9.js";import{U as ze,g as Ie,s as Re}from"./index.3852b8e9.js";import{W as P,a as X,e as z,K as Y,b as I}from"./monaco-editor.1bd8d5b7.js";import{j as a,I as R,f as Z,o as _,aC as Q,aS as p,X as ee,a2 as ne,aT as ae,aU as te,l as le,K as oe}from"./antd.0415f21a.js";import"./basic.ac009632.js";const w=B({fullscreen:!1});F(()=>w.fullscreen,e=>{e?document.body.classList.add("fullscreen"):document.body.classList.remove("fullscreen")});const ie=e=>{w.fullscreen=e},se={state:V(w),setFullscreen:ie};self.MonacoEnvironment={getWorker(e,v){return v==="json"?new P:new X}};const re="_universalEditor_1eh0e_5",ue="_formStatus_1eh0e_5",de="_fullScreen_1eh0e_13",ce="_container_1eh0e_25",me="_toolbar_1eh0e_28",fe="_logo_1eh0e_37",Ne="_language_1eh0e_40",ve="_editor_1eh0e_50",be="_placeholder_1eh0e_54",ge="_preview_1eh0e_63",he="_markdown_1eh0e_72",s={universalEditor:re,formStatus:ue,fullScreen:de,container:ce,toolbar:me,logo:fe,language:Ne,editor:ve,placeholder:be,preview:ge,markdown:he};var t="/home/runner/work/veact-admin/veact-admin/src/components/common/UniversalEditor/index.tsx";const _e=new Map([[m.Markdown,"md"],[m.JSON,"json"]]),we=48,N=24,Se=34,Ee=40,Le=e=>{var x;const v=e.placeholder||"\u8BF7\u8F93\u5165\u5185\u5BB9...",b=e.value||"",S=e.eid||window.location.pathname,d=$(()=>se),g=u.exports.useRef(null),o=u.exports.useRef(),[f,T]=u.exports.useState(!1),[c,W]=u.exports.useState(e.defaultLanguage||m.Markdown),E=()=>{const n=q(Date.now()),l=_e.get(c),i=`${S}-${n}.${l}`;A(b,i)},y=()=>{var i,r;const n=f?.5:1,l=(i=o.current)==null?void 0:i.getLayoutInfo();(r=o.current)==null||r.layout({width:d.state.fullscreen?window.innerWidth*n:g.current.clientWidth*n,height:l.height})},C=u.exports.useCallback(()=>{var i,r,M;if(!o.current)return!1;const n=o.current.getLayoutInfo();let l=0;if(d.state.fullscreen)l=window.innerHeight-we;else{const k=((i=e.maxRows)!=null?i:Ee)*N,L=((r=e.minRows)!=null?r:Se)*N,O=o.current.getContentHeight(),D=(M=o.current.getModel())==null?void 0:M.getLineCount();if(O)if(O>k)l=k;else{const H=D*N;H<L?l=L:l=H}}n.height!==l&&o.current.layout({width:n.width,height:l})},[d.state.fullscreen,e.maxRows,e.minRows]),U=()=>{const n=z.create(g.current,{value:b,language:c,theme:"vs-dark",tabSize:2,fontSize:14,lineHeight:N,smoothScrolling:!0,readOnly:Boolean(e.disbaled),minimap:{enabled:!e.disabledMinimap},folding:!0,contextmenu:!1,roundedSelection:!1,scrollBeyondLastLine:!1,wordBasedSuggestions:!0,acceptSuggestionOnEnter:"on",scrollbar:{alwaysConsumeMouseWheel:!1}});return n.addCommand(Y.CtrlCmd|I.KeyS,E),n.addCommand(I.Escape,()=>d.setFullscreen(!1)),n};return j(()=>d.state.fullscreen,()=>C()),u.exports.useEffect(()=>{y()},[y,f]),u.exports.useEffect(()=>{var l;const n=(l=o.current)==null?void 0:l.getModel();n&&c&&z.setModelLanguage(n,c)},[c]),u.exports.useEffect(()=>{var n;(n=o.current)==null||n.updateOptions({readOnly:e.disbaled})},[e.disbaled]),u.exports.useEffect(()=>{var n,l;e.value!==((n=o.current)==null?void 0:n.getValue())&&((l=o.current)==null||l.setValue(e.value||""))},[e.value]),u.exports.useEffect(()=>{o.current=U();const n=o.current.onDidContentSizeChange(C),l=o.current.onDidChangeModelContent(()=>{var r;const i=o.current.getValue();e.disabledCacheDraft||K(S,i),i!==e.value&&((r=e.onChange)==null||r.call(e,i))});return()=>{var i,r;n.dispose(),l.dispose(),(r=(i=o.current)==null?void 0:i.dispose)==null||r.call(i)}},[]),a("div",{style:e.style,className:h(s.universalEditor,e.formStatus&&s.formStatus,d.state.fullscreen&&s.fullScreen),children:[!e.disabledToolbar&&a("div",{className:s.toolbar,children:[a(R,{className:s.left,children:[a(Z.Text,{type:"secondary",strong:!0,className:s.logo,children:"UEditor"},void 0,!1,{fileName:t,lineNumber:233,columnNumber:13},void 0),a(_,{size:"small",disabled:e.disbaled,icon:a(Q,{},void 0,!1,{fileName:t,lineNumber:239,columnNumber:21},void 0),onClick:E},void 0,!1,{fileName:t,lineNumber:236,columnNumber:13},void 0)]},void 0,!0,{fileName:t,lineNumber:232,columnNumber:11},void 0),a(R,{className:s.right,children:[(x=e.renderToolbarExtra)==null?void 0:x.call(e,c),c===m.Markdown&&a(_,{size:"small",disabled:e.disbaled,icon:f?a(p,{},void 0,!1,{fileName:t,lineNumber:249,columnNumber:35},void 0):a(ee,{},void 0,!1,{fileName:t,lineNumber:249,columnNumber:67},void 0),onClick:()=>T(!f)},void 0,!1,{fileName:t,lineNumber:246,columnNumber:15},void 0),a(ne,{size:"small",value:c,onChange:W,disabled:e.disbaled,className:s.language,options:[{label:"Markdown",value:m.Markdown},{label:"JSON",value:m.JSON}]},void 0,!1,{fileName:t,lineNumber:253,columnNumber:13},void 0),a(_,{size:"small",disabled:e.disbaled,icon:d.state.fullscreen?a(ae,{},void 0,!1,{fileName:t,lineNumber:275,columnNumber:19},void 0):a(te,{},void 0,!1,{fileName:t,lineNumber:277,columnNumber:19},void 0),onClick:()=>d.setFullscreen(!d.state.fullscreen)},void 0,!1,{fileName:t,lineNumber:270,columnNumber:13},void 0)]},void 0,!0,{fileName:t,lineNumber:243,columnNumber:11},void 0)]},void 0,!0,{fileName:t,lineNumber:231,columnNumber:9},void 0),a(le,{spinning:Boolean(e.loading),indicator:a(oe,{style:{fontSize:24},spin:!0},void 0,!1,{fileName:t,lineNumber:287,columnNumber:20},void 0),children:a("div",{className:s.container,children:[a("div",{id:"container",ref:g,className:h(s.editor,!e.value&&s.placeholder),placeholder:v},void 0,!1,{fileName:t,lineNumber:290,columnNumber:11},void 0),a(J,{in:f,timeout:200,unmountOnExit:!0,classNames:"fade-fast",children:a("div",{className:h(s.preview),children:a("div",{className:s.markdown,dangerouslySetInnerHTML:{__html:G(b)}},void 0,!1,{fileName:t,lineNumber:298,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:297,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:296,columnNumber:11},void 0)]},void 0,!0,{fileName:t,lineNumber:289,columnNumber:9},void 0)},void 0,!1,{fileName:t,lineNumber:285,columnNumber:7},void 0)]},void 0,!0,{fileName:t,lineNumber:222,columnNumber:5},void 0)};export{ze as UEditorLanguage,Le as UniversalEditor,Ie as getUEditorCache,Re as setUEditorCache};
