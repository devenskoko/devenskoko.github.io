System.register(["./index-legacy-f6c2a54a.js"],(function(o){"use strict";var r,e,t,n,l,i,s,a,d,c,u,b,x,p,h,v,f,g,C,y,m,P,S,$,T,w,z,H,D,F,E,B,G,W,I,k,R;return{setters:[function(o){r=o.n,e=o.C,t=o.F,n=o.q,l=o.p,i=o.r,s=o.k,a=o.s,d=o.t,c=o.f,u=o.d,b=o.v,x=o.x,p=o.y,h=o.z,v=o.h,f=o.A,g=o.B,C=o.D,y=o.G,m=o.H,P=o.J,S=o.K,$=o.e,T=o.L,w=o.g,z=o.M,H=o.O,D=o.j,F=o.P,E=o.i,B=o.l,G=o.Q,W=o.m,I=o.R,k=o.T,R=o.U}],execute:function(){function O(o,...r){if(!Array.isArray(o))return o(...r);o.forEach((o=>O(o,...r)))}function M(o){return o.some((o=>!r(o)||o.type!==e&&!(o.type===t&&!M(o.children))))?o:null}function j(o,r){return r(o&&M(o())||null)}function L(o){return o.replace(/#|\(|\)|,|\s/g,"_")}const _=d("n-form-item");var Q=c("base-wave","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n"),K=u({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){b("-base-wave",Q,x(o,"clsPrefix"));const r=p(null),e=p(!1);let t=null;return a((()=>{null!==t&&window.clearTimeout(t)})),{active:e,selfRef:r,play(){null!==t&&(window.clearTimeout(t),e.value=!1,t=null),h((()=>{var o;null===(o=r.value)||void 0===o||o.offsetHeight,e.value=!0,t=window.setTimeout((()=>{e.value=!1,t=null}),1e3)}))}}},render(){const{clsPrefix:o}=this;return v("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}});function V(o,r,e){if(!r)return;const t=f(),l=s((()=>{const{value:e}=r;if(!e)return;const t=e[o];return t||void 0})),i=()=>{C((()=>{const{value:r}=e,i=`${r}${o}Rtl`;if(function(o,r){if(void 0===o)return!1;if(r){const{context:{ids:e}}=r;return e.has(o)}return null!==n(o)}(i,t))return;const{value:s}=l;s&&s.style.mount({id:i,head:!0,anchorMetaName:y,props:{bPrefix:r?`.${r}-`:void 0},ssr:t})}))};return t?i():g(i),l}const{cubicBezierEaseInOut:q}=P;function N(o){return S(o,[255,255,255,.16])}function A(o){return S(o,[0,0,0,.12])}var Y={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},J={name:"Button",common:$,self:o=>{const{heightTiny:r,heightSmall:e,heightMedium:t,heightLarge:n,borderRadius:l,fontSizeTiny:i,fontSizeSmall:s,fontSizeMedium:a,fontSizeLarge:d,opacityDisabled:c,textColor2:u,textColor3:b,primaryColorHover:x,primaryColorPressed:p,borderColor:h,primaryColor:v,baseColor:f,infoColor:g,infoColorHover:C,infoColorPressed:y,successColor:m,successColorHover:P,successColorPressed:S,warningColor:$,warningColorHover:T,warningColorPressed:w,errorColor:z,errorColorHover:H,errorColorPressed:D,fontWeight:F,buttonColor2:E,buttonColor2Hover:B,buttonColor2Pressed:G,fontWeightStrong:W}=o;return Object.assign(Object.assign({},Y),{heightTiny:r,heightSmall:e,heightMedium:t,heightLarge:n,borderRadiusTiny:l,borderRadiusSmall:l,borderRadiusMedium:l,borderRadiusLarge:l,fontSizeTiny:i,fontSizeSmall:s,fontSizeMedium:a,fontSizeLarge:d,opacityDisabled:c,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:E,colorSecondaryHover:B,colorSecondaryPressed:G,colorTertiary:E,colorTertiaryHover:B,colorTertiaryPressed:G,colorQuaternary:"#0000",colorQuaternaryHover:B,colorQuaternaryPressed:G,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:u,textColorTertiary:b,textColorHover:x,textColorPressed:p,textColorFocus:x,textColorDisabled:u,textColorText:u,textColorTextHover:x,textColorTextPressed:p,textColorTextFocus:x,textColorTextDisabled:u,textColorGhost:u,textColorGhostHover:x,textColorGhostPressed:p,textColorGhostFocus:x,textColorGhostDisabled:u,border:`1px solid ${h}`,borderHover:`1px solid ${x}`,borderPressed:`1px solid ${p}`,borderFocus:`1px solid ${x}`,borderDisabled:`1px solid ${h}`,rippleColor:v,colorPrimary:v,colorHoverPrimary:x,colorPressedPrimary:p,colorFocusPrimary:x,colorDisabledPrimary:v,textColorPrimary:f,textColorHoverPrimary:f,textColorPressedPrimary:f,textColorFocusPrimary:f,textColorDisabledPrimary:f,textColorTextPrimary:v,textColorTextHoverPrimary:x,textColorTextPressedPrimary:p,textColorTextFocusPrimary:x,textColorTextDisabledPrimary:u,textColorGhostPrimary:v,textColorGhostHoverPrimary:x,textColorGhostPressedPrimary:p,textColorGhostFocusPrimary:x,textColorGhostDisabledPrimary:v,borderPrimary:`1px solid ${v}`,borderHoverPrimary:`1px solid ${x}`,borderPressedPrimary:`1px solid ${p}`,borderFocusPrimary:`1px solid ${x}`,borderDisabledPrimary:`1px solid ${v}`,rippleColorPrimary:v,colorInfo:g,colorHoverInfo:C,colorPressedInfo:y,colorFocusInfo:C,colorDisabledInfo:g,textColorInfo:f,textColorHoverInfo:f,textColorPressedInfo:f,textColorFocusInfo:f,textColorDisabledInfo:f,textColorTextInfo:g,textColorTextHoverInfo:C,textColorTextPressedInfo:y,textColorTextFocusInfo:C,textColorTextDisabledInfo:u,textColorGhostInfo:g,textColorGhostHoverInfo:C,textColorGhostPressedInfo:y,textColorGhostFocusInfo:C,textColorGhostDisabledInfo:g,borderInfo:`1px solid ${g}`,borderHoverInfo:`1px solid ${C}`,borderPressedInfo:`1px solid ${y}`,borderFocusInfo:`1px solid ${C}`,borderDisabledInfo:`1px solid ${g}`,rippleColorInfo:g,colorSuccess:m,colorHoverSuccess:P,colorPressedSuccess:S,colorFocusSuccess:P,colorDisabledSuccess:m,textColorSuccess:f,textColorHoverSuccess:f,textColorPressedSuccess:f,textColorFocusSuccess:f,textColorDisabledSuccess:f,textColorTextSuccess:m,textColorTextHoverSuccess:P,textColorTextPressedSuccess:S,textColorTextFocusSuccess:P,textColorTextDisabledSuccess:u,textColorGhostSuccess:m,textColorGhostHoverSuccess:P,textColorGhostPressedSuccess:S,textColorGhostFocusSuccess:P,textColorGhostDisabledSuccess:m,borderSuccess:`1px solid ${m}`,borderHoverSuccess:`1px solid ${P}`,borderPressedSuccess:`1px solid ${S}`,borderFocusSuccess:`1px solid ${P}`,borderDisabledSuccess:`1px solid ${m}`,rippleColorSuccess:m,colorWarning:$,colorHoverWarning:T,colorPressedWarning:w,colorFocusWarning:T,colorDisabledWarning:$,textColorWarning:f,textColorHoverWarning:f,textColorPressedWarning:f,textColorFocusWarning:f,textColorDisabledWarning:f,textColorTextWarning:$,textColorTextHoverWarning:T,textColorTextPressedWarning:w,textColorTextFocusWarning:T,textColorTextDisabledWarning:u,textColorGhostWarning:$,textColorGhostHoverWarning:T,textColorGhostPressedWarning:w,textColorGhostFocusWarning:T,textColorGhostDisabledWarning:$,borderWarning:`1px solid ${$}`,borderHoverWarning:`1px solid ${T}`,borderPressedWarning:`1px solid ${w}`,borderFocusWarning:`1px solid ${T}`,borderDisabledWarning:`1px solid ${$}`,rippleColorWarning:$,colorError:z,colorHoverError:H,colorPressedError:D,colorFocusError:H,colorDisabledError:z,textColorError:f,textColorHoverError:f,textColorPressedError:f,textColorFocusError:f,textColorDisabledError:f,textColorTextError:z,textColorTextHoverError:H,textColorTextPressedError:D,textColorTextFocusError:H,textColorTextDisabledError:u,textColorGhostError:z,textColorGhostHoverError:H,textColorGhostPressedError:D,textColorGhostFocusError:H,textColorGhostDisabledError:z,borderError:`1px solid ${z}`,borderHoverError:`1px solid ${H}`,borderPressedError:`1px solid ${D}`,borderFocusError:`1px solid ${H}`,borderDisabledError:`1px solid ${z}`,rippleColorError:z,waveOpacity:"0.6",fontWeight:F,fontWeightStrong:W})}};const U=d("n-button-group");var X=m([c("button","\n margin: 0;\n font-weight: var(--n-font-weight);\n line-height: 1;\n font-family: inherit;\n padding: var(--n-padding);\n height: var(--n-height);\n font-size: var(--n-font-size);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n width: var(--n-width);\n white-space: nowrap;\n outline: none;\n position: relative;\n z-index: auto;\n border: none;\n display: inline-flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n align-items: center;\n justify-content: center;\n user-select: none;\n text-align: center;\n cursor: pointer;\n text-decoration: none;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",[T("color",[w("border",{borderColor:"var(--n-border-color)"}),T("disabled",[w("border",{borderColor:"var(--n-border-color-disabled)"})]),z("disabled",[m("&:focus",[w("state-border",{borderColor:"var(--n-border-color-focus)"})]),m("&:hover",[w("state-border",{borderColor:"var(--n-border-color-hover)"})]),m("&:active",[w("state-border",{borderColor:"var(--n-border-color-pressed)"})]),T("pressed",[w("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),T("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[w("border",{border:"var(--n-border-disabled)"})]),z("disabled",[m("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[w("state-border",{border:"var(--n-border-focus)"})]),m("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[w("state-border",{border:"var(--n-border-hover)"})]),m("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[w("state-border",{border:"var(--n-border-pressed)"})]),T("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[w("state-border",{border:"var(--n-border-pressed)"})])]),T("loading","cursor: wait;"),c("base-wave","\n pointer-events: none;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n animation-iteration-count: 1;\n animation-duration: var(--n-ripple-duration);\n animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);\n ",[T("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),"undefined"!=typeof window&&"MozBoxSizing"in document.createElement("div").style?m("&::moz-focus-inner",{border:0}):null,w("border, state-border","\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n border-radius: inherit;\n transition: border-color .3s var(--n-bezier);\n pointer-events: none;\n "),w("border",{border:"var(--n-border)"}),w("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),w("icon","\n margin: var(--n-icon-margin);\n margin-left: 0;\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n max-width: var(--n-icon-size);\n font-size: var(--n-icon-size);\n position: relative;\n flex-shrink: 0;\n ",[c("icon-slot","\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n position: absolute;\n left: 0;\n top: 50%;\n transform: translateY(-50%);\n display: flex;\n ",[H({top:"50%",originalTransform:"translateY(-50%)"})]),function({duration:o=".2s",delay:r=".1s"}={}){return[m("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),m("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from","\n opacity: 0!important;\n margin-left: 0!important;\n margin-right: 0!important;\n "),m("&.fade-in-width-expand-transition-leave-active",`\n overflow: hidden;\n transition:\n opacity ${o} ${q},\n max-width ${o} ${q} ${r},\n margin-left ${o} ${q} ${r},\n margin-right ${o} ${q} ${r};\n `),m("&.fade-in-width-expand-transition-enter-active",`\n overflow: hidden;\n transition:\n opacity ${o} ${q} ${r},\n max-width ${o} ${q},\n margin-left ${o} ${q},\n margin-right ${o} ${q};\n `)]}()]),w("content","\n display: flex;\n align-items: center;\n flex-wrap: nowrap;\n ",[m("~",[w("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),T("block","\n display: flex;\n width: 100%;\n "),T("dashed",[w("border, state-border",{borderStyle:"dashed !important"})]),T("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),m("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),m("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]);const Z=Object.assign(Object.assign({},D.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:Boolean}),oo=u({name:"Button",props:Z,setup(o){const r=p(null),e=p(null),t=p(!1),n=F((()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered)),d=l(U,{}),{mergedSizeRef:c}=function(o,{defaultSize:r="medium",mergedSize:e,mergedDisabled:t}={}){const n=l(_,null);i(_,null);const d=s(e?()=>e(n):()=>{const{size:e}=o;if(e)return e;if(n){const{mergedSize:o}=n;if(void 0!==o.value)return o.value}return r}),c=s(t?()=>t(n):()=>{const{disabled:r}=o;return void 0!==r?r:!!n&&n.disabled.value}),u=s((()=>{const{status:r}=o;return r||(null==n?void 0:n.mergedValidationStatus.value)}));return a((()=>{n&&n.restoreValidation()})),{mergedSizeRef:d,mergedDisabledRef:c,mergedStatusRef:u,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}({},{defaultSize:"medium",mergedSize:r=>{const{size:e}=o;if(e)return e;const{size:t}=d;if(t)return t;const{mergedSize:n}=r||{};return n?n.value:"medium"}}),u=s((()=>o.focusable&&!o.disabled)),{inlineThemeDisabled:b,mergedClsPrefixRef:x,mergedRtlRef:h}=E(o),v=D("Button","-button",X,J,o,x),f=V("Button",h,x),g=s((()=>{const r=v.value,{common:{cubicBezierEaseInOut:e,cubicBezierEaseOut:t},self:n}=r,{rippleDuration:l,opacityDisabled:i,fontWeight:s,fontWeightStrong:a}=n,d=c.value,{dashed:u,type:b,ghost:x,text:p,color:h,round:f,circle:g,textColor:C,secondary:y,tertiary:m,quaternary:P,strong:S}=o,$={"font-weight":S?a:s};let T={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const w="tertiary"===b,z="default"===b,H=w?"default":b;if(p){const o=C||h;T={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":o||n[B("textColorText",H)],"--n-text-color-hover":o?N(o):n[B("textColorTextHover",H)],"--n-text-color-pressed":o?A(o):n[B("textColorTextPressed",H)],"--n-text-color-focus":o?N(o):n[B("textColorTextHover",H)],"--n-text-color-disabled":o||n[B("textColorTextDisabled",H)]}}else if(x||u){const o=C||h;T={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":h||n[B("rippleColor",H)],"--n-text-color":o||n[B("textColorGhost",H)],"--n-text-color-hover":o?N(o):n[B("textColorGhostHover",H)],"--n-text-color-pressed":o?A(o):n[B("textColorGhostPressed",H)],"--n-text-color-focus":o?N(o):n[B("textColorGhostHover",H)],"--n-text-color-disabled":o||n[B("textColorGhostDisabled",H)]}}else if(y){const o=z?n.textColor:w?n.textColorTertiary:n[B("color",H)],r=h||o,e="default"!==b&&"tertiary"!==b;T={"--n-color":e?G(r,{alpha:Number(n.colorOpacitySecondary)}):n.colorSecondary,"--n-color-hover":e?G(r,{alpha:Number(n.colorOpacitySecondaryHover)}):n.colorSecondaryHover,"--n-color-pressed":e?G(r,{alpha:Number(n.colorOpacitySecondaryPressed)}):n.colorSecondaryPressed,"--n-color-focus":e?G(r,{alpha:Number(n.colorOpacitySecondaryHover)}):n.colorSecondaryHover,"--n-color-disabled":n.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":r,"--n-text-color-hover":r,"--n-text-color-pressed":r,"--n-text-color-focus":r,"--n-text-color-disabled":r}}else if(m||P){const o=z?n.textColor:w?n.textColorTertiary:n[B("color",H)],r=h||o;m?(T["--n-color"]=n.colorTertiary,T["--n-color-hover"]=n.colorTertiaryHover,T["--n-color-pressed"]=n.colorTertiaryPressed,T["--n-color-focus"]=n.colorSecondaryHover,T["--n-color-disabled"]=n.colorTertiary):(T["--n-color"]=n.colorQuaternary,T["--n-color-hover"]=n.colorQuaternaryHover,T["--n-color-pressed"]=n.colorQuaternaryPressed,T["--n-color-focus"]=n.colorQuaternaryHover,T["--n-color-disabled"]=n.colorQuaternary),T["--n-ripple-color"]="#0000",T["--n-text-color"]=r,T["--n-text-color-hover"]=r,T["--n-text-color-pressed"]=r,T["--n-text-color-focus"]=r,T["--n-text-color-disabled"]=r}else T={"--n-color":h||n[B("color",H)],"--n-color-hover":h?N(h):n[B("colorHover",H)],"--n-color-pressed":h?A(h):n[B("colorPressed",H)],"--n-color-focus":h?N(h):n[B("colorFocus",H)],"--n-color-disabled":h||n[B("colorDisabled",H)],"--n-ripple-color":h||n[B("rippleColor",H)],"--n-text-color":C||(h?n.textColorPrimary:w?n.textColorTertiary:n[B("textColor",H)]),"--n-text-color-hover":C||(h?n.textColorHoverPrimary:n[B("textColorHover",H)]),"--n-text-color-pressed":C||(h?n.textColorPressedPrimary:n[B("textColorPressed",H)]),"--n-text-color-focus":C||(h?n.textColorFocusPrimary:n[B("textColorFocus",H)]),"--n-text-color-disabled":C||(h?n.textColorDisabledPrimary:n[B("textColorDisabled",H)])};let D={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};D=p?{"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:{"--n-border":n[B("border",H)],"--n-border-hover":n[B("borderHover",H)],"--n-border-pressed":n[B("borderPressed",H)],"--n-border-focus":n[B("borderFocus",H)],"--n-border-disabled":n[B("borderDisabled",H)]};const{[B("height",d)]:F,[B("fontSize",d)]:E,[B("padding",d)]:W,[B("paddingRound",d)]:I,[B("iconSize",d)]:k,[B("borderRadius",d)]:R,[B("iconMargin",d)]:O,waveOpacity:M}=n,j={"--n-width":g&&!p?F:"initial","--n-height":p?"initial":F,"--n-font-size":E,"--n-padding":g||p?"initial":f?I:W,"--n-icon-size":k,"--n-icon-margin":O,"--n-border-radius":p?"initial":g||f?F:R};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":e,"--n-bezier-ease-out":t,"--n-ripple-duration":l,"--n-opacity-disabled":i,"--n-wave-opacity":M},$),T),D),j)})),C=b?W("button",s((()=>{let r="";const{dashed:e,type:t,ghost:n,text:l,color:i,round:s,circle:a,textColor:d,secondary:u,tertiary:b,quaternary:x,strong:p}=o;e&&(r+="a"),n&&(r+="b"),l&&(r+="c"),s&&(r+="d"),a&&(r+="e"),u&&(r+="f"),b&&(r+="g"),x&&(r+="h"),p&&(r+="i"),i&&(r+="j"+L(i)),d&&(r+="k"+L(d));const{value:h}=c;return r+="l"+h[0],r+="m"+t[0],r})),g,o):void 0;return{selfElRef:r,waveElRef:e,mergedClsPrefix:x,mergedFocusable:u,mergedSize:c,showBorder:n,enterPressed:t,rtlEnabled:f,handleMousedown:e=>{var t;o.disabled||o.nativeFocusBehavior||u.value&&(e.preventDefault(),null===(t=r.value)||void 0===t||t.focus({preventScroll:!0}))},handleKeydown:r=>{if("Enter"===r.key){if(!o.keyboard||o.loading)return void r.preventDefault();t.value=!0}},handleBlur:()=>{t.value=!1},handleKeyup:r=>{if("Enter"===r.key){if(!o.keyboard)return;t.value=!1}},handleClick:r=>{var t;if(!o.disabled&&!o.loading){const{onClick:n}=o;n&&O(n,r),o.text||null===(t=e.value)||void 0===t||t.play()}},customColorCssVars:s((()=>{const{color:r}=o;if(!r)return null;const e=N(r);return{"--n-border-color":r,"--n-border-color-hover":e,"--n-border-color-pressed":A(r),"--n-border-color-focus":e,"--n-border-color-disabled":r}})),cssVars:b?void 0:g,themeClass:null==C?void 0:C.themeClass,onRender:null==C?void 0:C.onRender}},render(){const{mergedClsPrefix:o,tag:r,onRender:e}=this;null==e||e();const t=j(this.$slots.default,(r=>r&&v("span",{class:`${o}-button__content`},r)));return v(r,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},"right"===this.iconPlacement&&t,v(I,{width:!0},{default:()=>j(this.$slots.icon,(r=>{return(this.loading||r)&&v("span",{class:`${o}-button__icon`,style:{margin:(e=this.$slots.default,e&&M(e())?"":"0")}},v(k,null,{default:()=>this.loading?v(R,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):v("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},r)}));var e}))}),"left"===this.iconPlacement&&t,this.text?null:v(K,{ref:"waveElRef",clsPrefix:o}),this.showBorder?v("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?v("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}});o("_",oo)}}}));