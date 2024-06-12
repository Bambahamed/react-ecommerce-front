import{r as i,aY as rn,aZ as nn,ag as Hr,Z as Fr,aS as Vr,ad as Br,t as I,ah as br,a7 as an,a4 as on,_ as Oe,p as wr,aw as kr,n as P,ai as Ie,aX as Nr,y as sn,aU as un,a9 as Ct,o as Ve,af as ln,aj as cn,R as fn,ae as Ne,av as Kr,a2 as vn,a_ as dn,a$ as _r,ac as xr,b0 as Sr,ay as jr}from"./index-zqpnlBSv.js";import{i as hn}from"./isVisible-B1buT0cz.js";var Mr=i.createContext(null);function mn(e){var r=e.children,t=e.onBatchResize,n=i.useRef(0),a=i.useRef([]),o=i.useContext(Mr),s=i.useCallback(function(c,l,f){n.current+=1;var y=n.current;a.current.push({size:c,element:l,data:f}),Promise.resolve().then(function(){y===n.current&&(t==null||t(a.current),a.current=[])}),o==null||o(c,l,f)},[t,o]);return i.createElement(Mr.Provider,{value:s},r)}var Ur=function(){if(typeof Map<"u")return Map;function e(r,t){var n=-1;return r.some(function(a,o){return a[0]===t?(n=o,!0):!1}),n}return function(){function r(){this.__entries__=[]}return Object.defineProperty(r.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),r.prototype.get=function(t){var n=e(this.__entries__,t),a=this.__entries__[n];return a&&a[1]},r.prototype.set=function(t,n){var a=e(this.__entries__,t);~a?this.__entries__[a][1]=n:this.__entries__.push([t,n])},r.prototype.delete=function(t){var n=this.__entries__,a=e(n,t);~a&&n.splice(a,1)},r.prototype.has=function(t){return!!~e(this.__entries__,t)},r.prototype.clear=function(){this.__entries__.splice(0)},r.prototype.forEach=function(t,n){n===void 0&&(n=null);for(var a=0,o=this.__entries__;a<o.length;a++){var s=o[a];t.call(n,s[1],s[0])}},r}()}(),Rr=typeof window<"u"&&typeof document<"u"&&window.document===document,Jt=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),gn=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Jt):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),yn=2;function bn(e,r){var t=!1,n=!1,a=0;function o(){t&&(t=!1,e()),n&&c()}function s(){gn(o)}function c(){var l=Date.now();if(t){if(l-a<yn)return;n=!0}else t=!0,n=!1,setTimeout(s,r);a=l}return c}var wn=20,Cn=["top","right","bottom","left","width","height","size","weight"],_n=typeof MutationObserver<"u",Sn=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=bn(this.refresh.bind(this),wn)}return e.prototype.addObserver=function(r){~this.observers_.indexOf(r)||this.observers_.push(r),this.connected_||this.connect_()},e.prototype.removeObserver=function(r){var t=this.observers_,n=t.indexOf(r);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var r=this.updateObservers_();r&&this.refresh()},e.prototype.updateObservers_=function(){var r=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return r.forEach(function(t){return t.broadcastActive()}),r.length>0},e.prototype.connect_=function(){!Rr||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),_n?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Rr||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(r){var t=r.propertyName,n=t===void 0?"":t,a=Cn.some(function(o){return!!~n.indexOf(o)});a&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),qr=function(e,r){for(var t=0,n=Object.keys(r);t<n.length;t++){var a=n[t];Object.defineProperty(e,a,{value:r[a],enumerable:!1,writable:!1,configurable:!0})}return e},_t=function(e){var r=e&&e.ownerDocument&&e.ownerDocument.defaultView;return r||Jt},Gr=er(0,0,0,0);function Xt(e){return parseFloat(e)||0}function zr(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return r.reduce(function(n,a){var o=e["border-"+a+"-width"];return n+Xt(o)},0)}function Mn(e){for(var r=["top","right","bottom","left"],t={},n=0,a=r;n<a.length;n++){var o=a[n],s=e["padding-"+o];t[o]=Xt(s)}return t}function Rn(e){var r=e.getBBox();return er(0,0,r.width,r.height)}function En(e){var r=e.clientWidth,t=e.clientHeight;if(!r&&!t)return Gr;var n=_t(e).getComputedStyle(e),a=Mn(n),o=a.left+a.right,s=a.top+a.bottom,c=Xt(n.width),l=Xt(n.height);if(n.boxSizing==="border-box"&&(Math.round(c+o)!==r&&(c-=zr(n,"left","right")+o),Math.round(l+s)!==t&&(l-=zr(n,"top","bottom")+s)),!kn(e)){var f=Math.round(c+o)-r,y=Math.round(l+s)-t;Math.abs(f)!==1&&(c-=f),Math.abs(y)!==1&&(l-=y)}return er(a.left,a.top,c,l)}var Pn=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof _t(e).SVGGraphicsElement}:function(e){return e instanceof _t(e).SVGElement&&typeof e.getBBox=="function"}}();function kn(e){return e===_t(e).document.documentElement}function Nn(e){return Rr?Pn(e)?Rn(e):En(e):Gr}function xn(e){var r=e.x,t=e.y,n=e.width,a=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return qr(s,{x:r,y:t,width:n,height:a,top:t,right:r+n,bottom:a+t,left:r}),s}function er(e,r,t,n){return{x:e,y:r,width:t,height:n}}var zn=function(){function e(r){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=er(0,0,0,0),this.target=r}return e.prototype.isActive=function(){var r=Nn(this.target);return this.contentRect_=r,r.width!==this.broadcastWidth||r.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var r=this.contentRect_;return this.broadcastWidth=r.width,this.broadcastHeight=r.height,r},e}(),Dn=function(){function e(r,t){var n=xn(t);qr(this,{target:r,contentRect:n})}return e}(),$n=function(){function e(r,t,n){if(this.activeObservations_=[],this.observations_=new Ur,typeof r!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=r,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(r){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(r instanceof _t(r).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(r)||(t.set(r,new zn(r)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(r){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(r instanceof _t(r).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(r)&&(t.delete(r),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var r=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&r.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var r=this.callbackCtx_,t=this.activeObservations_.map(function(n){return new Dn(n.target,n.broadcastRect())});this.callback_.call(r,t,r),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Qr=typeof WeakMap<"u"?new WeakMap:new Ur,Zr=function(){function e(r){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=Sn.getInstance(),n=new $n(r,t,this);Qr.set(this,n)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Zr.prototype[e]=function(){var r;return(r=Qr.get(this))[e].apply(r,arguments)}});var Tn=function(){return typeof Jt.ResizeObserver<"u"?Jt.ResizeObserver:Zr}(),Je=new Map;function In(e){e.forEach(function(r){var t,n=r.target;(t=Je.get(n))===null||t===void 0||t.forEach(function(a){return a(n)})})}var Jr=new Tn(In);function On(e,r){Je.has(e)||(Je.set(e,new Set),Jr.observe(e)),Je.get(e).add(r)}function Ln(e,r){Je.has(e)&&(Je.get(e).delete(r),Je.get(e).size||(Jr.unobserve(e),Je.delete(e)))}var pn=function(e){rn(t,e);var r=nn(t);function t(){return Hr(this,t),r.apply(this,arguments)}return Fr(t,[{key:"render",value:function(){return this.props.children}}]),t}(i.Component);function Wn(e,r){var t=e.children,n=e.disabled,a=i.useRef(null),o=i.useRef(null),s=i.useContext(Mr),c=typeof t=="function",l=c?t(a):t,f=i.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),y=!c&&i.isValidElement(l)&&Vr(l),m=y?l.ref:null,$=Br(m,a),g=function(){var R;return br(a.current)||(a.current&&an(a.current)==="object"?br((R=a.current)===null||R===void 0?void 0:R.nativeElement):null)||br(o.current)};i.useImperativeHandle(r,function(){return g()});var _=i.useRef(e);_.current=e;var k=i.useCallback(function(b){var R=_.current,S=R.onResize,C=R.data,v=b.getBoundingClientRect(),O=v.width,G=v.height,W=b.offsetWidth,A=b.offsetHeight,ae=Math.floor(O),Q=Math.floor(G);if(f.current.width!==ae||f.current.height!==Q||f.current.offsetWidth!==W||f.current.offsetHeight!==A){var Y={width:ae,height:Q,offsetWidth:W,offsetHeight:A};f.current=Y;var ce=W===Math.round(O)?O:W,K=A===Math.round(G)?G:A,ee=I(I({},Y),{},{offsetWidth:ce,offsetHeight:K});s==null||s(ee,b,C),S&&Promise.resolve().then(function(){S(ee,b)})}},[]);return i.useEffect(function(){var b=g();return b&&!n&&On(b,k),function(){return Ln(b,k)}},[a.current,n]),i.createElement(pn,{ref:o},y?i.cloneElement(l,{ref:$}):l)}var An=i.forwardRef(Wn),Hn="rc-observer-key";function Fn(e,r){var t=e.children,n=typeof t=="function"?[t]:on(t);return n.map(function(a,o){var s=(a==null?void 0:a.key)||"".concat(Hn,"-").concat(o);return i.createElement(An,Oe({},e,{key:s,ref:o===0?r:void 0}),a)})}var $t=i.forwardRef(Fn);$t.Collection=mn;var Xe=function(){function e(r,t){Hr(this,e),wr(this,"name",void 0),wr(this,"style",void 0),wr(this,"_keyframe",!0),this.name=r,this.style=t}return Fr(e,[{key:"getName",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t?"".concat(t,"-").concat(this.name):this.name}}]),e}();function Cr(e){return e!==void 0}function xa(e,r){var t=r||{},n=t.defaultValue,a=t.value,o=t.onChange,s=t.postState,c=kr(function(){return Cr(a)?a:Cr(n)?typeof n=="function"?n():n:typeof e=="function"?e():e}),l=P(c,2),f=l[0],y=l[1],m=a!==void 0?a:f,$=s?s(m):m,g=Ie(o),_=kr([m]),k=P(_,2),b=k[0],R=k[1];Nr(function(){var C=b[0];f!==C&&g(f,C)},[b]),Nr(function(){Cr(a)||y(a)},[a]);var S=Ie(function(C,v){y(C,v),R([m],v)});return[$,S]}const za=e=>{const[,,,,r]=sn();return r?`${e}-css-var`:""};function Vn(){var e=I({},un);return e.useId}var Dr=0,$r=Vn();const Bn=$r?function(r){var t=$r();return r||t}:function(r){var t=i.useState("ssr-id"),n=P(t,2),a=n[0],o=n[1];return i.useEffect(function(){var s=Dr;Dr+=1,o("rc_unique_".concat(s))},[]),r||a},Kn=e=>({animationDuration:e,animationFillMode:"both"}),jn=e=>({animationDuration:e,animationFillMode:"both"}),Un=function(e,r,t,n){const o=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]:Object.assign(Object.assign({},Kn(n)),{animationPlayState:"paused"}),[`${o}${e}-leave`]:Object.assign(Object.assign({},jn(n)),{animationPlayState:"paused"}),[`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]:{animationName:r,animationPlayState:"running"},[`${o}${e}-leave${e}-leave-active`]:{animationName:t,animationPlayState:"running",pointerEvents:"none"}}},qn=new Xe("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),Gn=new Xe("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),Qn=new Xe("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),Zn=new Xe("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),Jn=new Xe("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),Xn=new Xe("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),Yn=new Xe("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),ea=new Xe("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),ta={"slide-up":{inKeyframes:qn,outKeyframes:Gn},"slide-down":{inKeyframes:Qn,outKeyframes:Zn},"slide-left":{inKeyframes:Jn,outKeyframes:Xn},"slide-right":{inKeyframes:Yn,outKeyframes:ea}},Da=(e,r)=>{const{antCls:t}=e,n=`${t}-${r}`,{inKeyframes:a,outKeyframes:o}=ta[r];return[Un(n,a,o,e.motionDurationMid),{[`
      ${n}-enter,
      ${n}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${n}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]},ra=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))};var na=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],bt=void 0;function aa(e,r){var t=e.prefixCls,n=e.invalidate,a=e.item,o=e.renderItem,s=e.responsive,c=e.responsiveDisabled,l=e.registerSize,f=e.itemKey,y=e.className,m=e.style,$=e.children,g=e.display,_=e.order,k=e.component,b=k===void 0?"div":k,R=Ct(e,na),S=s&&!g;function C(A){l(f,A)}i.useEffect(function(){return function(){C(null)}},[]);var v=o&&a!==bt?o(a):$,O;n||(O={opacity:S?0:1,height:S?0:bt,overflowY:S?"hidden":bt,order:s?_:bt,pointerEvents:S?"none":bt,position:S?"absolute":bt});var G={};S&&(G["aria-hidden"]=!0);var W=i.createElement(b,Oe({className:Ve(!n&&t,y),style:I(I({},O),m)},G,R,{ref:r}),v);return s&&(W=i.createElement($t,{onResize:function(ae){var Q=ae.offsetWidth;C(Q)},disabled:c},W)),W}var zt=i.forwardRef(aa);zt.displayName="Item";function ia(e){if(typeof MessageChannel>"u")ln(e);else{var r=new MessageChannel;r.port1.onmessage=function(){return e()},r.port2.postMessage(void 0)}}function oa(){var e=i.useRef(null),r=function(n){e.current||(e.current=[],ia(function(){cn.unstable_batchedUpdates(function(){e.current.forEach(function(a){a()}),e.current=null})})),e.current.push(n)};return r}function Nt(e,r){var t=i.useState(r),n=P(t,2),a=n[0],o=n[1],s=Ie(function(c){e(function(){o(c)})});return[a,s]}var Yt=fn.createContext(null),sa=["component"],ua=["className"],la=["className"],ca=function(r,t){var n=i.useContext(Yt);if(!n){var a=r.component,o=a===void 0?"div":a,s=Ct(r,sa);return i.createElement(o,Oe({},s,{ref:t}))}var c=n.className,l=Ct(n,ua),f=r.className,y=Ct(r,la);return i.createElement(Yt.Provider,{value:null},i.createElement(zt,Oe({ref:t,className:Ve(c,f)},l,y)))},Xr=i.forwardRef(ca);Xr.displayName="RawItem";var fa=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],Yr="responsive",en="invalidate";function va(e){return"+ ".concat(e.length," ...")}function da(e,r){var t=e.prefixCls,n=t===void 0?"rc-overflow":t,a=e.data,o=a===void 0?[]:a,s=e.renderItem,c=e.renderRawItem,l=e.itemKey,f=e.itemWidth,y=f===void 0?10:f,m=e.ssr,$=e.style,g=e.className,_=e.maxCount,k=e.renderRest,b=e.renderRawRest,R=e.suffix,S=e.component,C=S===void 0?"div":S,v=e.itemComponent,O=e.onVisibleChange,G=Ct(e,fa),W=m==="full",A=oa(),ae=Nt(A,null),Q=P(ae,2),Y=Q[0],ce=Q[1],K=Y||0,ee=Nt(A,new Map),ge=P(ee,2),H=ge[0],B=ge[1],M=Nt(A,0),te=P(M,2),x=te[0],ye=te[1],fe=Nt(A,0),Be=P(fe,2),Me=Be[0],Re=Be[1],Ke=Nt(A,0),ie=P(Ke,2),L=ie[0],oe=ie[1],be=i.useState(null),ve=P(be,2),xe=ve[0],je=ve[1],q=i.useState(null),Le=P(q,2),de=Le[0],re=Le[1],Z=i.useMemo(function(){return de===null&&W?Number.MAX_SAFE_INTEGER:de||0},[de,Y]),E=i.useState(!1),ze=P(E,2),se=ze[0],ut=ze[1],Ee="".concat(n,"-item"),De=Math.max(x,Me),Ue=_===Yr,T=o.length&&Ue,lt=_===en,Ye=T||typeof _=="number"&&o.length>_,j=i.useMemo(function(){var h=o;return T?Y===null&&W?h=o:h=o.slice(0,Math.min(o.length,K/y)):typeof _=="number"&&(h=o.slice(0,_)),h},[o,y,Y,_,T]),ne=i.useMemo(function(){return T?o.slice(Z+1):o.slice(j.length)},[o,j,T,Z]),pe=i.useCallback(function(h,w){var N;return typeof l=="function"?l(h):(N=l&&(h==null?void 0:h[l]))!==null&&N!==void 0?N:w},[l]),he=i.useCallback(s||function(h){return h},[s]);function qe(h,w,N){de===h&&(w===void 0||w===xe)||(re(h),N||(ut(h<o.length-1),O==null||O(h)),w!==void 0&&je(w))}function ct(h,w){ce(w.clientWidth)}function ft(h,w){B(function(N){var X=new Map(N);return w===null?X.delete(h):X.set(h,w),X})}function We(h,w){Re(w),ye(Me)}function ue(h,w){oe(w)}function we(h){return H.get(pe(j[h],h))}Ne(function(){if(K&&typeof De=="number"&&j){var h=L,w=j.length,N=w-1;if(!w){qe(0,null);return}for(var X=0;X<w;X+=1){var Pe=we(X);if(W&&(Pe=Pe||0),Pe===void 0){qe(X-1,void 0,!0);break}if(h+=Pe,N===0&&h<=K||X===N-1&&h+we(N)<=K){qe(N,null);break}else if(h+De>K){qe(X-1,h-Pe-L+Me);break}}R&&we(0)+L>K&&je(null)}},[K,H,Me,L,pe,j]);var Ce=se&&!!ne.length,J={};xe!==null&&T&&(J={position:"absolute",left:xe,top:0});var $e={prefixCls:Ee,responsive:T,component:v,invalidate:lt},vt=c?function(h,w){var N=pe(h,w);return i.createElement(Yt.Provider,{key:N,value:I(I({},$e),{},{order:w,item:h,itemKey:N,registerSize:ft,display:w<=Z})},c(h,w))}:function(h,w){var N=pe(h,w);return i.createElement(zt,Oe({},$e,{order:w,key:N,item:h,renderItem:he,itemKey:N,registerSize:ft,display:w<=Z}))},me,p={order:Ce?Z:Number.MAX_SAFE_INTEGER,className:"".concat(Ee,"-rest"),registerSize:We,display:Ce};if(b)b&&(me=i.createElement(Yt.Provider,{value:I(I({},$e),p)},b(ne)));else{var z=k||va;me=i.createElement(zt,Oe({},$e,p),typeof z=="function"?z(ne):z)}var D=i.createElement(C,Oe({className:Ve(!lt&&n,g),style:$,ref:r},G),j.map(vt),Ye?me:null,R&&i.createElement(zt,Oe({},$e,{responsive:Ue,responsiveDisabled:!T,order:Z,className:"".concat(Ee,"-suffix"),registerSize:ue,display:!0,style:J}),R));return Ue&&(D=i.createElement($t,{onResize:ct,disabled:!T},D)),D}var tr=i.forwardRef(da);tr.displayName="Overflow";tr.Item=Xr;tr.RESPONSIVE=Yr;tr.INVALIDATE=en;function ha(e){var r=e.prefixCls,t=e.align,n=e.arrow,a=e.arrowPos,o=n||{},s=o.className,c=o.content,l=a.x,f=l===void 0?0:l,y=a.y,m=y===void 0?0:y,$=i.useRef();if(!t||!t.points)return null;var g={position:"absolute"};if(t.autoArrow!==!1){var _=t.points[0],k=t.points[1],b=_[0],R=_[1],S=k[0],C=k[1];b===S||!["t","b"].includes(b)?g.top=m:b==="t"?g.top=0:g.bottom=0,R===C||!["l","r"].includes(R)?g.left=f:R==="l"?g.left=0:g.right=0}return i.createElement("div",{ref:$,className:Ve("".concat(r,"-arrow"),s),style:g},c)}function ma(e){var r=e.prefixCls,t=e.open,n=e.zIndex,a=e.mask,o=e.motion;return a?i.createElement(Kr,Oe({},o,{motionAppear:!0,visible:t,removeOnLeave:!0}),function(s){var c=s.className;return i.createElement("div",{style:{zIndex:n},className:Ve("".concat(r,"-mask"),c)})}):null}var ga=i.memo(function(e){var r=e.children;return r},function(e,r){return r.cache}),ya=i.forwardRef(function(e,r){var t=e.popup,n=e.className,a=e.prefixCls,o=e.style,s=e.target,c=e.onVisibleChanged,l=e.open,f=e.keepDom,y=e.fresh,m=e.onClick,$=e.mask,g=e.arrow,_=e.arrowPos,k=e.align,b=e.motion,R=e.maskMotion,S=e.forceRender,C=e.getPopupContainer,v=e.autoDestroy,O=e.portal,G=e.zIndex,W=e.onMouseEnter,A=e.onMouseLeave,ae=e.onPointerEnter,Q=e.ready,Y=e.offsetX,ce=e.offsetY,K=e.offsetR,ee=e.offsetB,ge=e.onAlign,H=e.onPrepare,B=e.stretch,M=e.targetWidth,te=e.targetHeight,x=typeof t=="function"?t():t,ye=l||f,fe=(C==null?void 0:C.length)>0,Be=i.useState(!C||!fe),Me=P(Be,2),Re=Me[0],Ke=Me[1];if(Ne(function(){!Re&&fe&&s&&Ke(!0)},[Re,fe,s]),!Re)return null;var ie="auto",L={left:"-1000vw",top:"-1000vh",right:ie,bottom:ie};if(Q||!l){var oe,be=k.points,ve=k.dynamicInset||((oe=k._experimental)===null||oe===void 0?void 0:oe.dynamicInset),xe=ve&&be[0][1]==="r",je=ve&&be[0][0]==="b";xe?(L.right=K,L.left=ie):(L.left=Y,L.right=ie),je?(L.bottom=ee,L.top=ie):(L.top=ce,L.bottom=ie)}var q={};return B&&(B.includes("height")&&te?q.height=te:B.includes("minHeight")&&te&&(q.minHeight=te),B.includes("width")&&M?q.width=M:B.includes("minWidth")&&M&&(q.minWidth=M)),l||(q.pointerEvents="none"),i.createElement(O,{open:S||ye,getContainer:C&&function(){return C(s)},autoDestroy:v},i.createElement(ma,{prefixCls:a,open:l,zIndex:G,mask:$,motion:R}),i.createElement($t,{onResize:ge,disabled:!l},function(Le){return i.createElement(Kr,Oe({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:S,leavedClassName:"".concat(a,"-hidden")},b,{onAppearPrepare:H,onEnterPrepare:H,visible:l,onVisibleChanged:function(re){var Z;b==null||(Z=b.onVisibleChanged)===null||Z===void 0||Z.call(b,re),c(re)}}),function(de,re){var Z=de.className,E=de.style,ze=Ve(a,Z,n);return i.createElement("div",{ref:vn(Le,r,re),className:ze,style:I(I(I(I({"--arrow-x":"".concat(_.x||0,"px"),"--arrow-y":"".concat(_.y||0,"px")},L),q),E),{},{boxSizing:"border-box",zIndex:G},o),onMouseEnter:W,onMouseLeave:A,onPointerEnter:ae,onClick:m},g&&i.createElement(ha,{prefixCls:a,arrow:g,arrowPos:_,align:k}),i.createElement(ga,{cache:!l&&!y},x))})}))}),ba=i.forwardRef(function(e,r){var t=e.children,n=e.getTriggerDOMNode,a=Vr(t),o=i.useCallback(function(c){dn(r,n?n(c):c)},[n]),s=Br(o,t.ref);return a?i.cloneElement(t,{ref:s}):t}),Tr=i.createContext(null);function Ir(e){return e?Array.isArray(e)?e:[e]:[]}function wa(e,r,t,n){return i.useMemo(function(){var a=Ir(t??r),o=Ir(n??r),s=new Set(a),c=new Set(o);return e&&(s.has("hover")&&(s.delete("hover"),s.add("click")),c.has("hover")&&(c.delete("hover"),c.add("click"))),[s,c]},[e,r,t,n])}function Ca(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0;return t?e[0]===r[0]:e[0]===r[0]&&e[1]===r[1]}function _a(e,r,t,n){for(var a=t.points,o=Object.keys(e),s=0;s<o.length;s+=1){var c,l=o[s];if(Ca((c=e[l])===null||c===void 0?void 0:c.points,a,n))return"".concat(r,"-placement-").concat(l)}return""}function Or(e,r,t,n){return r||(t?{motionName:"".concat(e,"-").concat(t)}:n?{motionName:n}:null)}function Tt(e){return e.ownerDocument.defaultView}function Er(e){for(var r=[],t=e==null?void 0:e.parentElement,n=["hidden","scroll","clip","auto"];t;){var a=Tt(t).getComputedStyle(t),o=a.overflowX,s=a.overflowY,c=a.overflow;[o,s,c].some(function(l){return n.includes(l)})&&r.push(t),t=t.parentElement}return r}function Dt(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(e)?r:e}function xt(e){return Dt(parseFloat(e),0)}function Lr(e,r){var t=I({},e);return(r||[]).forEach(function(n){if(!(n instanceof HTMLBodyElement||n instanceof HTMLHtmlElement)){var a=Tt(n).getComputedStyle(n),o=a.overflow,s=a.overflowClipMargin,c=a.borderTopWidth,l=a.borderBottomWidth,f=a.borderLeftWidth,y=a.borderRightWidth,m=n.getBoundingClientRect(),$=n.offsetHeight,g=n.clientHeight,_=n.offsetWidth,k=n.clientWidth,b=xt(c),R=xt(l),S=xt(f),C=xt(y),v=Dt(Math.round(m.width/_*1e3)/1e3),O=Dt(Math.round(m.height/$*1e3)/1e3),G=(_-k-S-C)*v,W=($-g-b-R)*O,A=b*O,ae=R*O,Q=S*v,Y=C*v,ce=0,K=0;if(o==="clip"){var ee=xt(s);ce=ee*v,K=ee*O}var ge=m.x+Q-ce,H=m.y+A-K,B=ge+m.width+2*ce-Q-Y-G,M=H+m.height+2*K-A-ae-W;t.left=Math.max(t.left,ge),t.top=Math.max(t.top,H),t.right=Math.min(t.right,B),t.bottom=Math.min(t.bottom,M)}}),t}function pr(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t="".concat(r),n=t.match(/^(.*)\%$/);return n?e*(parseFloat(n[1])/100):parseFloat(t)}function Wr(e,r){var t=r||[],n=P(t,2),a=n[0],o=n[1];return[pr(e.width,a),pr(e.height,o)]}function Ar(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[e[0],e[1]]}function wt(e,r){var t=r[0],n=r[1],a,o;return t==="t"?o=e.y:t==="b"?o=e.y+e.height:o=e.y+e.height/2,n==="l"?a=e.x:n==="r"?a=e.x+e.width:a=e.x+e.width/2,{x:a,y:o}}function Ze(e,r){var t={t:"b",b:"t",l:"r",r:"l"};return e.map(function(n,a){return a===r?t[n]||"c":n}).join("")}function Sa(e,r,t,n,a,o,s){var c=i.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:a[n]||{}}),l=P(c,2),f=l[0],y=l[1],m=i.useRef(0),$=i.useMemo(function(){return r?Er(r):[]},[r]),g=i.useRef({}),_=function(){g.current={}};e||_();var k=Ie(function(){if(r&&t&&e){let _e=function(jt,Se){var gt=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ze,Ut=x.x+jt,yt=x.y+Se,qt=Ut+oe,kt=yt+L,Gt=Math.max(Ut,gt.left),hr=Math.max(yt,gt.top),mr=Math.min(qt,gt.right),gr=Math.min(kt,gt.bottom);return Math.max(0,(mr-Gt)*(gr-hr))},Kt=function(){tt=x.y+z,rt=tt+L,Ae=x.x+p,nt=Ae+oe};var S,C,v=r,O=v.ownerDocument,G=Tt(v),W=G.getComputedStyle(v),A=W.width,ae=W.height,Q=W.position,Y=v.style.left,ce=v.style.top,K=v.style.right,ee=v.style.bottom,ge=v.style.overflow,H=I(I({},a[n]),o),B=O.createElement("div");(S=v.parentElement)===null||S===void 0||S.appendChild(B),B.style.left="".concat(v.offsetLeft,"px"),B.style.top="".concat(v.offsetTop,"px"),B.style.position=Q,B.style.height="".concat(v.offsetHeight,"px"),B.style.width="".concat(v.offsetWidth,"px"),v.style.left="0",v.style.top="0",v.style.right="auto",v.style.bottom="auto",v.style.overflow="hidden";var M;if(Array.isArray(t))M={x:t[0],y:t[1],width:0,height:0};else{var te=t.getBoundingClientRect();M={x:te.x,y:te.y,width:te.width,height:te.height}}var x=v.getBoundingClientRect(),ye=O.documentElement,fe=ye.clientWidth,Be=ye.clientHeight,Me=ye.scrollWidth,Re=ye.scrollHeight,Ke=ye.scrollTop,ie=ye.scrollLeft,L=x.height,oe=x.width,be=M.height,ve=M.width,xe={left:0,top:0,right:fe,bottom:Be},je={left:-ie,top:-Ke,right:Me-ie,bottom:Re-Ke},q=H.htmlRegion,Le="visible",de="visibleFirst";q!=="scroll"&&q!==de&&(q=Le);var re=q===de,Z=Lr(je,$),E=Lr(xe,$),ze=q===Le?E:Z,se=re?E:ze;v.style.left="auto",v.style.top="auto",v.style.right="0",v.style.bottom="0";var ut=v.getBoundingClientRect();v.style.left=Y,v.style.top=ce,v.style.right=K,v.style.bottom=ee,v.style.overflow=ge,(C=v.parentElement)===null||C===void 0||C.removeChild(B);var Ee=Dt(Math.round(oe/parseFloat(A)*1e3)/1e3),De=Dt(Math.round(L/parseFloat(ae)*1e3)/1e3);if(Ee===0||De===0||_r(t)&&!hn(t))return;var Ue=H.offset,T=H.targetOffset,lt=Wr(x,Ue),Ye=P(lt,2),j=Ye[0],ne=Ye[1],pe=Wr(M,T),he=P(pe,2),qe=he[0],ct=he[1];M.x-=qe,M.y-=ct;var ft=H.points||[],We=P(ft,2),ue=We[0],we=We[1],Ce=Ar(we),J=Ar(ue),$e=wt(M,Ce),vt=wt(x,J),me=I({},H),p=$e.x-vt.x+j,z=$e.y-vt.y+ne,D=_e(p,z),h=_e(p,z,E),w=wt(M,["t","l"]),N=wt(x,["t","l"]),X=wt(M,["b","r"]),Pe=wt(x,["b","r"]),et=H.overflow||{},ke=et.adjustX,rr=et.adjustY,St=et.shiftX,dt=et.shiftY,Mt=function(Se){return typeof Se=="boolean"?Se:Se>=0},tt,rt,Ae,nt;Kt();var It=Mt(rr),Rt=J[0]===Ce[0];if(It&&J[0]==="t"&&(rt>se.bottom||g.current.bt)){var Ge=z;Rt?Ge-=L-be:Ge=w.y-Pe.y-ne;var Ot=_e(p,Ge),ht=_e(p,Ge,E);Ot>D||Ot===D&&(!re||ht>=h)?(g.current.bt=!0,z=Ge,ne=-ne,me.points=[Ze(J,0),Ze(Ce,0)]):g.current.bt=!1}if(It&&J[0]==="b"&&(tt<se.top||g.current.tb)){var at=z;Rt?at+=L-be:at=X.y-N.y-ne;var le=_e(p,at),nr=_e(p,at,E);le>D||le===D&&(!re||nr>=h)?(g.current.tb=!0,z=at,ne=-ne,me.points=[Ze(J,0),Ze(Ce,0)]):g.current.tb=!1}var Lt=Mt(ke),pt=J[1]===Ce[1];if(Lt&&J[1]==="l"&&(nt>se.right||g.current.rl)){var it=p;pt?it-=oe-ve:it=w.x-Pe.x-j;var Wt=_e(it,z),ar=_e(it,z,E);Wt>D||Wt===D&&(!re||ar>=h)?(g.current.rl=!0,p=it,j=-j,me.points=[Ze(J,1),Ze(Ce,1)]):g.current.rl=!1}if(Lt&&J[1]==="r"&&(Ae<se.left||g.current.lr)){var ot=p;pt?ot+=oe-ve:ot=X.x-N.x-j;var At=_e(ot,z),ir=_e(ot,z,E);At>D||At===D&&(!re||ir>=h)?(g.current.lr=!0,p=ot,j=-j,me.points=[Ze(J,1),Ze(Ce,1)]):g.current.lr=!1}Kt();var Te=St===!0?0:St;typeof Te=="number"&&(Ae<E.left&&(p-=Ae-E.left-j,M.x+ve<E.left+Te&&(p+=M.x-E.left+ve-Te)),nt>E.right&&(p-=nt-E.right-j,M.x>E.right-Te&&(p+=M.x-E.right+Te)));var He=dt===!0?0:dt;typeof He=="number"&&(tt<E.top&&(z-=tt-E.top-ne,M.y+be<E.top+He&&(z+=M.y-E.top+be-He)),rt>E.bottom&&(z-=rt-E.bottom-ne,M.y>E.bottom-He&&(z+=M.y-E.bottom+He)));var Et=x.x+p,Ht=Et+oe,Qe=x.y+z,st=Qe+L,Pt=M.x,mt=Pt+ve,Fe=M.y,or=Fe+be,sr=Math.max(Et,Pt),ur=Math.min(Ht,mt),Ft=(sr+ur)/2,lr=Ft-Et,cr=Math.max(Qe,Fe),fr=Math.min(st,or),Vt=(cr+fr)/2,vr=Vt-Qe;s==null||s(r,me);var dr=ut.right-x.x-(p+x.width),Bt=ut.bottom-x.y-(z+x.height);y({ready:!0,offsetX:p/Ee,offsetY:z/De,offsetR:dr/Ee,offsetB:Bt/De,arrowX:lr/Ee,arrowY:vr/De,scaleX:Ee,scaleY:De,align:me})}}),b=function(){m.current+=1;var C=m.current;Promise.resolve().then(function(){m.current===C&&k()})},R=function(){y(function(C){return I(I({},C),{},{ready:!1})})};return Ne(R,[n]),Ne(function(){e||R()},[e]),[f.ready,f.offsetX,f.offsetY,f.offsetR,f.offsetB,f.arrowX,f.arrowY,f.scaleX,f.scaleY,f.align,b]}function Ma(e,r,t,n,a){Ne(function(){if(e&&r&&t){let m=function(){n(),a()};var o=r,s=t,c=Er(o),l=Er(s),f=Tt(s),y=new Set([f].concat(xr(c),xr(l)));return y.forEach(function($){$.addEventListener("scroll",m,{passive:!0})}),f.addEventListener("resize",m,{passive:!0}),n(),function(){y.forEach(function($){$.removeEventListener("scroll",m),f.removeEventListener("resize",m)})}}},[e,r,t])}function Ra(e,r,t,n,a,o,s,c){var l=i.useRef(e);l.current=e,i.useEffect(function(){if(r&&n&&(!a||o)){var f=function(g){var _=g.target;l.current&&!s(_)&&c(!1)},y=Tt(n);y.addEventListener("mousedown",f,!0),y.addEventListener("contextmenu",f,!0);var m=Sr(t);return m&&(m.addEventListener("mousedown",f,!0),m.addEventListener("contextmenu",f,!0)),function(){y.removeEventListener("mousedown",f,!0),y.removeEventListener("contextmenu",f,!0),m&&(m.removeEventListener("mousedown",f,!0),m.removeEventListener("contextmenu",f,!0))}}},[r,t,n,a,o])}var Ea=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function Pa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:jr,r=i.forwardRef(function(t,n){var a=t.prefixCls,o=a===void 0?"rc-trigger-popup":a,s=t.children,c=t.action,l=c===void 0?"hover":c,f=t.showAction,y=t.hideAction,m=t.popupVisible,$=t.defaultPopupVisible,g=t.onPopupVisibleChange,_=t.afterPopupVisibleChange,k=t.mouseEnterDelay,b=t.mouseLeaveDelay,R=b===void 0?.1:b,S=t.focusDelay,C=t.blurDelay,v=t.mask,O=t.maskClosable,G=O===void 0?!0:O,W=t.getPopupContainer,A=t.forceRender,ae=t.autoDestroy,Q=t.destroyPopupOnHide,Y=t.popup,ce=t.popupClassName,K=t.popupStyle,ee=t.popupPlacement,ge=t.builtinPlacements,H=ge===void 0?{}:ge,B=t.popupAlign,M=t.zIndex,te=t.stretch,x=t.getPopupClassNameFromAlign,ye=t.fresh,fe=t.alignPoint,Be=t.onPopupClick,Me=t.onPopupAlign,Re=t.arrow,Ke=t.popupMotion,ie=t.maskMotion,L=t.popupTransitionName,oe=t.popupAnimation,be=t.maskTransitionName,ve=t.maskAnimation,xe=t.className,je=t.getTriggerDOMNode,q=Ct(t,Ea),Le=ae||Q||!1,de=i.useState(!1),re=P(de,2),Z=re[0],E=re[1];Ne(function(){E(ra())},[]);var ze=i.useRef({}),se=i.useContext(Tr),ut=i.useMemo(function(){return{registerSubPopup:function(d,F){ze.current[d]=F,se==null||se.registerSubPopup(d,F)}}},[se]),Ee=Bn(),De=i.useState(null),Ue=P(De,2),T=Ue[0],lt=Ue[1],Ye=i.useRef(null),j=Ie(function(u){Ye.current=u,_r(u)&&T!==u&&lt(u),se==null||se.registerSubPopup(Ee,u)}),ne=i.useState(null),pe=P(ne,2),he=pe[0],qe=pe[1],ct=i.useRef(null),ft=Ie(function(u){_r(u)&&he!==u&&(qe(u),ct.current=u)}),We=i.Children.only(s),ue=(We==null?void 0:We.props)||{},we={},Ce=Ie(function(u){var d,F,U=he;return(U==null?void 0:U.contains(u))||((d=Sr(U))===null||d===void 0?void 0:d.host)===u||u===U||(T==null?void 0:T.contains(u))||((F=Sr(T))===null||F===void 0?void 0:F.host)===u||u===T||Object.values(ze.current).some(function(V){return(V==null?void 0:V.contains(u))||u===V})}),J=Or(o,Ke,oe,L),$e=Or(o,ie,ve,be),vt=i.useState($||!1),me=P(vt,2),p=me[0],z=me[1],D=m??p,h=Ie(function(u){m===void 0&&z(u)});Ne(function(){z(m||!1)},[m]);var w=i.useRef(D);w.current=D;var N=i.useRef([]);N.current=[];var X=Ie(function(u){var d;h(u),((d=N.current[N.current.length-1])!==null&&d!==void 0?d:D)!==u&&(N.current.push(u),g==null||g(u))}),Pe=i.useRef(),et=function(){clearTimeout(Pe.current)},ke=function(d){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;et(),F===0?X(d):Pe.current=setTimeout(function(){X(d)},F*1e3)};i.useEffect(function(){return et},[]);var rr=i.useState(!1),St=P(rr,2),dt=St[0],Mt=St[1];Ne(function(u){(!u||D)&&Mt(!0)},[D]);var tt=i.useState(null),rt=P(tt,2),Ae=rt[0],nt=rt[1],It=i.useState([0,0]),Rt=P(It,2),Ge=Rt[0],Ot=Rt[1],ht=function(d){Ot([d.clientX,d.clientY])},at=Sa(D,T,fe?Ge:he,ee,H,B,Me),le=P(at,11),nr=le[0],Lt=le[1],pt=le[2],it=le[3],Wt=le[4],ar=le[5],ot=le[6],At=le[7],ir=le[8],Te=le[9],He=le[10],Et=wa(Z,l,f,y),Ht=P(Et,2),Qe=Ht[0],st=Ht[1],Pt=Qe.has("click"),mt=st.has("click")||st.has("contextMenu"),Fe=Ie(function(){dt||He()}),or=function(){w.current&&fe&&mt&&ke(!1)};Ma(D,he,T,Fe,or),Ne(function(){Fe()},[Ge,ee]),Ne(function(){D&&!(H!=null&&H[ee])&&Fe()},[JSON.stringify(B)]);var sr=i.useMemo(function(){var u=_a(H,o,Te,fe);return Ve(u,x==null?void 0:x(Te))},[Te,x,H,o,fe]);i.useImperativeHandle(n,function(){return{nativeElement:ct.current,popupElement:Ye.current,forceAlign:Fe}});var ur=i.useState(0),Ft=P(ur,2),lr=Ft[0],cr=Ft[1],fr=i.useState(0),Vt=P(fr,2),vr=Vt[0],dr=Vt[1],Bt=function(){if(te&&he){var d=he.getBoundingClientRect();cr(d.width),dr(d.height)}},_e=function(){Bt(),Fe()},Kt=function(d){Mt(!1),He(),_==null||_(d)},jt=function(){return new Promise(function(d){Bt(),nt(function(){return d})})};Ne(function(){Ae&&(He(),Ae(),nt(null))},[Ae]);function Se(u,d,F,U){we[u]=function(V){var Qt;U==null||U(V),ke(d,F);for(var yr=arguments.length,Pr=new Array(yr>1?yr-1:0),Zt=1;Zt<yr;Zt++)Pr[Zt-1]=arguments[Zt];(Qt=ue[u])===null||Qt===void 0||Qt.call.apply(Qt,[ue,V].concat(Pr))}}(Pt||mt)&&(we.onClick=function(u){var d;w.current&&mt?ke(!1):!w.current&&Pt&&(ht(u),ke(!0));for(var F=arguments.length,U=new Array(F>1?F-1:0),V=1;V<F;V++)U[V-1]=arguments[V];(d=ue.onClick)===null||d===void 0||d.call.apply(d,[ue,u].concat(U))}),Ra(D,mt,he,T,v,G,Ce,ke);var gt=Qe.has("hover"),Ut=st.has("hover"),yt,qt;gt&&(Se("onMouseEnter",!0,k,function(u){ht(u)}),Se("onPointerEnter",!0,k,function(u){ht(u)}),yt=function(d){(D||dt)&&T!==null&&T!==void 0&&T.contains(d.target)&&ke(!0,k)},fe&&(we.onMouseMove=function(u){var d;(d=ue.onMouseMove)===null||d===void 0||d.call(ue,u)})),Ut&&(Se("onMouseLeave",!1,R),Se("onPointerLeave",!1,R),qt=function(){ke(!1,R)}),Qe.has("focus")&&Se("onFocus",!0,S),st.has("focus")&&Se("onBlur",!1,C),Qe.has("contextMenu")&&(we.onContextMenu=function(u){var d;w.current&&st.has("contextMenu")?ke(!1):(ht(u),ke(!0)),u.preventDefault();for(var F=arguments.length,U=new Array(F>1?F-1:0),V=1;V<F;V++)U[V-1]=arguments[V];(d=ue.onContextMenu)===null||d===void 0||d.call.apply(d,[ue,u].concat(U))}),xe&&(we.className=Ve(ue.className,xe));var kt=I(I({},ue),we),Gt={},hr=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];hr.forEach(function(u){q[u]&&(Gt[u]=function(){for(var d,F=arguments.length,U=new Array(F),V=0;V<F;V++)U[V]=arguments[V];(d=kt[u])===null||d===void 0||d.call.apply(d,[kt].concat(U)),q[u].apply(q,U)})});var mr=i.cloneElement(We,I(I({},kt),Gt)),gr={x:ar,y:ot},tn=Re?I({},Re!==!0?Re:{}):null;return i.createElement(i.Fragment,null,i.createElement($t,{disabled:!D,ref:ft,onResize:_e},i.createElement(ba,{getTriggerDOMNode:je},mr)),i.createElement(Tr.Provider,{value:ut},i.createElement(ya,{portal:e,ref:j,prefixCls:o,popup:Y,className:Ve(ce,sr),style:K,target:he,onMouseEnter:yt,onMouseLeave:qt,onPointerEnter:yt,zIndex:M,open:D,keepDom:dt,fresh:ye,onClick:Be,mask:v,motion:J,maskMotion:$e,onVisibleChanged:Kt,onPrepare:jt,forceRender:A,autoDestroy:Le,getPopupContainer:W,align:Te,arrow:tn,arrowPos:gr,ready:nr,offsetX:Lt,offsetY:pt,offsetR:it,offsetB:Wt,onAlign:Fe,stretch:te,targetWidth:lr/At,targetHeight:vr/ir})))});return r}const $a=Pa(jr);export{tr as F,Xe as K,$t as R,$a as T,za as a,ra as b,Qn as c,Gn as d,Zn as e,Da as f,Bn as g,Un as i,qn as s,xa as u};
