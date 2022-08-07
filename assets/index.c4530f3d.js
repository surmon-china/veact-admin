import{aq as B,aZ as F,ar as J,aC as V,r,aJ as $,f as v,az as j}from"./vendor.54ec2ff7.js";import{U as u,s as K,m as G,t as q,a as A}from"./index.0455cdaa.js";import{U as ze,g as Re,s as Te}from"./index.0455cdaa.js";import{W as P,a as Y,e as z,K as X,b as R}from"./monaco-editor.af0454d5.js";import{a as m,J as T,j as l,h as Z,p as S,aD as Q,aT as p,Y as ee,a3 as te,aU as ae,aV as ne,m as se,N as le}from"./antd.068db45a.js";import"./basic.e8b71bc9.js";const E=B({fullscreen:!1});F(()=>E.fullscreen,e=>{e?document.body.classList.add("fullscreen"):document.body.classList.remove("fullscreen")});const oe=e=>{E.fullscreen=e},ie={state:J(E),setFullscreen:oe};self.MonacoEnvironment={getWorker(e,h){return h==="json"?new P:new Y}};const re="_universalEditor_1eh0e_5",ce="_formStatus_1eh0e_5",de="_fullScreen_1eh0e_13",ue="_container_1eh0e_25",fe="_toolbar_1eh0e_28",me="_logo_1eh0e_37",ge="_language_1eh0e_40",he="_editor_1eh0e_50",_e="_placeholder_1eh0e_54",we="_preview_1eh0e_63",ve="_markdown_1eh0e_72",o={universalEditor:re,formStatus:ce,fullScreen:de,container:ue,toolbar:fe,logo:me,language:ge,editor:he,placeholder:_e,preview:we,markdown:ve},Se=new Map([[u.Markdown,"md"],[u.JSON,"json"]]),Ee=48,g=24,be=34,ye=40,Le=e=>{var M;const h=e.placeholder||"\u8BF7\u8F93\u5165\u5185\u5BB9...",_=e.value||"",b=e.eid||window.location.pathname,c=V(()=>ie),w=r.exports.useRef(null),n=r.exports.useRef(),[f,I]=r.exports.useState(!1),[d,W]=r.exports.useState(e.defaultLanguage||u.Markdown),y=()=>{const t=q(Date.now()),a=Se.get(d),s=`${b}-${t}.${a}`;A(_,s)},C=()=>{var s,i;const t=f?.5:1,a=(s=n.current)==null?void 0:s.getLayoutInfo();(i=n.current)==null||i.layout({width:c.state.fullscreen?window.innerWidth*t:w.current.clientWidth*t,height:a.height})},x=r.exports.useCallback(()=>{var s,i,N;if(!n.current)return!1;const t=n.current.getLayoutInfo();let a=0;if(c.state.fullscreen)a=window.innerHeight-Ee;else{const k=((s=e.maxRows)!=null?s:ye)*g,L=((i=e.minRows)!=null?i:be)*g,O=n.current.getContentHeight(),U=(N=n.current.getModel())==null?void 0:N.getLineCount();if(O)if(O>k)a=k;else{const H=U*g;H<L?a=L:a=H}}t.height!==a&&n.current.layout({width:t.width,height:a})},[c.state.fullscreen,e.maxRows,e.minRows]),D=()=>{const t=z.create(w.current,{value:_,language:d,theme:"vs-dark",tabSize:2,fontSize:14,lineHeight:g,smoothScrolling:!0,readOnly:Boolean(e.disbaled),minimap:{enabled:!e.disabledMinimap},folding:!0,contextmenu:!1,roundedSelection:!1,scrollBeyondLastLine:!1,wordBasedSuggestions:!0,acceptSuggestionOnEnter:"on",scrollbar:{alwaysConsumeMouseWheel:!1}});return t.addCommand(X.CtrlCmd|R.KeyS,y),t.addCommand(R.Escape,()=>c.setFullscreen(!1)),t};return $(()=>c.state.fullscreen,()=>x()),r.exports.useEffect(()=>{C()},[C,f]),r.exports.useEffect(()=>{var a;const t=(a=n.current)==null?void 0:a.getModel();t&&d&&z.setModelLanguage(t,d)},[d]),r.exports.useEffect(()=>{var t;(t=n.current)==null||t.updateOptions({readOnly:e.disbaled})},[e.disbaled]),r.exports.useEffect(()=>{var t,a;e.value!==((t=n.current)==null?void 0:t.getValue())&&((a=n.current)==null||a.setValue(e.value||""))},[e.value]),r.exports.useEffect(()=>{n.current=D();const t=n.current.onDidContentSizeChange(x),a=n.current.onDidChangeModelContent(()=>{var i;const s=n.current.getValue();e.disabledCacheDraft||K(b,s),s!==e.value&&((i=e.onChange)==null||i.call(e,s))});return()=>{var s,i;t.dispose(),a.dispose(),(i=(s=n.current)==null?void 0:s.dispose)==null||i.call(s)}},[]),m("div",{style:e.style,className:v(o.universalEditor,e.formStatus&&o.formStatus,c.state.fullscreen&&o.fullScreen),children:[!e.disabledToolbar&&m("div",{className:o.toolbar,children:[m(T,{className:o.left,children:[l(Z.Text,{type:"secondary",strong:!0,className:o.logo,children:"UEditor"}),l(S,{size:"small",disabled:e.disbaled,icon:l(Q,{}),onClick:y})]}),m(T,{className:o.right,children:[(M=e.renderToolbarExtra)==null?void 0:M.call(e,d),d===u.Markdown&&l(S,{size:"small",disabled:e.disbaled,icon:f?l(p,{}):l(ee,{}),onClick:()=>I(!f)}),l(te,{size:"small",value:d,onChange:W,disabled:e.disbaled,className:o.language,options:[{label:"Markdown",value:u.Markdown},{label:"JSON",value:u.JSON}]}),l(S,{size:"small",disabled:e.disbaled,icon:c.state.fullscreen?l(ae,{}):l(ne,{}),onClick:()=>c.setFullscreen(!c.state.fullscreen)})]})]}),l(se,{spinning:Boolean(e.loading),indicator:l(le,{style:{fontSize:24},spin:!0}),children:m("div",{className:o.container,children:[l("div",{id:"container",ref:w,className:v(o.editor,!e.value&&o.placeholder),placeholder:h}),l(j,{in:f,timeout:200,unmountOnExit:!0,classNames:"fade-fast",children:l("div",{className:v(o.preview),children:l("div",{className:o.markdown,dangerouslySetInnerHTML:{__html:G(_)}})})})]})})]})};export{ze as UEditorLanguage,Le as UniversalEditor,Re as getUEditorCache,Te as setUEditorCache};