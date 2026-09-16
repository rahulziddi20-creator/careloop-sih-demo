var pt=()=>({checkValidity(e){let t=e.input,o={message:"",isValid:!0,invalidKeys:[]};if(!t)return o;let a=!0;if("checkValidity"in t&&(a=t.checkValidity()),a)return o;if(o.isValid=!1,"validationMessage"in t&&(o.message=t.validationMessage),!("validity"in t))return o.invalidKeys.push("customError"),o;for(let r in t.validity){if(r==="valid")continue;let s=r;t.validity[s]&&o.invalidKeys.push(s)}return o}});var mt=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};var Jr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,ea=e=>{throw TypeError(e)},l=(e,t,o,a)=>{for(var r=a>1?void 0:a?Qr(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&Jr(t,o,r),r},ta=(e,t,o)=>t.has(e)||ea("Cannot "+o),oa=(e,t,o)=>(ta(e,t,"read from private field"),o?o.call(e):t.get(e)),aa=(e,t,o)=>t.has(e)?ea("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),ra=(e,t,o,a)=>(ta(e,t,"write to private field"),a?a.call(e,o):t.set(e,o),o);var ht=globalThis,wt=ht.ShadowRoot&&(ht.ShadyCSS===void 0||ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zt=Symbol(),sa=new WeakMap,je=class{constructor(t,o,a){if(this._$cssResult$=!0,a!==Zt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let t=this.o,o=this.t;if(wt&&t===void 0){let a=o!==void 0&&o.length===1;a&&(t=sa.get(o)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&sa.set(o,t))}return t}toString(){return this.cssText}},ia=e=>new je(typeof e=="string"?e:e+"",void 0,Zt),k=(e,...t)=>{let o=e.length===1?e[0]:t.reduce((a,r,s)=>a+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new je(o,e,Zt)},la=(e,t)=>{if(wt)e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(let o of t){let a=document.createElement("style"),r=ht.litNonce;r!==void 0&&a.setAttribute("nonce",r),a.textContent=o.cssText,e.appendChild(a)}},Jt=wt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(let a of t.cssRules)o+=a.cssText;return ia(o)})(e):e;var{is:es,defineProperty:ts,getOwnPropertyDescriptor:os,getOwnPropertyNames:as,getOwnPropertySymbols:rs,getPrototypeOf:ss}=Object,gt=globalThis,na=gt.trustedTypes,is=na?na.emptyScript:"",ls=gt.reactiveElementPolyfillSupport,Ge=(e,t)=>e,Ke={toAttribute(e,t){switch(t){case Boolean:e=e?is:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},xt=(e,t)=>!es(e,t),fa={attribute:!0,type:String,converter:Ke,reflect:!1,useDefault:!1,hasChanged:xt};Symbol.metadata??=Symbol("metadata"),gt.litPropertyMetadata??=new WeakMap;var fe=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,o=fa){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(t,o),!o.noAccessor){let a=Symbol(),r=this.getPropertyDescriptor(t,a,o);r!==void 0&&ts(this.prototype,t,r)}}static getPropertyDescriptor(t,o,a){let{get:r,set:s}=os(this.prototype,t)??{get(){return this[o]},set(i){this[o]=i}};return{get:r,set(i){let n=r?.call(this);s?.call(this,i),this.requestUpdate(t,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??fa}static _$Ei(){if(this.hasOwnProperty(Ge("elementProperties")))return;let t=ss(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ge("properties"))){let o=this.properties,a=[...as(o),...rs(o)];for(let r of a)this.createProperty(r,o[r])}let t=this[Symbol.metadata];if(t!==null){let o=litPropertyMetadata.get(t);if(o!==void 0)for(let[a,r]of o)this.elementProperties.set(a,r)}this._$Eh=new Map;for(let[o,a]of this.elementProperties){let r=this._$Eu(o,a);r!==void 0&&this._$Eh.set(r,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let o=[];if(Array.isArray(t)){let a=new Set(t.flat(1/0).reverse());for(let r of a)o.unshift(Jt(r))}else t!==void 0&&o.push(Jt(t));return o}static _$Eu(t,o){let a=o.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,o=this.constructor.elementProperties;for(let a of o.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return la(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,o,a){this._$AK(t,a)}_$ET(t,o){let a=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,a);if(r!==void 0&&a.reflect===!0){let s=(a.converter?.toAttribute!==void 0?a.converter:Ke).toAttribute(o,a.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,o){let a=this.constructor,r=a._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let s=a.getPropertyOptions(r),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ke;this._$Em=r;let n=i.fromAttribute(o,s.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(t,o,a,r=!1,s){if(t!==void 0){let i=this.constructor;if(r===!1&&(s=this[t]),a??=i.getPropertyOptions(t),!((a.hasChanged??xt)(s,o)||a.useDefault&&a.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,a))))return;this.C(t,o,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,o,{useDefault:a,reflect:r,wrapped:s},i){a&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??o??this[t]),s!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(o=void 0),this._$AL.set(t,o)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[r,s]of a){let{wrapped:i}=s,n=this[r];i!==!0||this._$AL.has(r)||n===void 0||this.C(r,void 0,s,n)}}let t=!1,o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),this._$EO?.forEach(a=>a.hostUpdate?.()),this.update(o)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(o)}willUpdate(t){}_$AE(t){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(o=>this._$ET(o,this[o])),this._$EM()}updated(t){}firstUpdated(t){}};fe.elementStyles=[],fe.shadowRootOptions={mode:"open"},fe[Ge("elementProperties")]=new Map,fe[Ge("finalized")]=new Map,ls?.({ReactiveElement:fe}),(gt.reactiveElementVersions??=[]).push("2.1.2");var eo=globalThis,da=e=>e,vt=eo.trustedTypes,ua=vt?vt.createPolicy("lit-html",{createHTML:e=>e}):void 0,to="$lit$",de=`lit$${Math.random().toFixed(9).slice(2)}$`,oo="?"+de,ns=`<${oo}>`,ze=document,Ze=()=>ze.createComment(""),Je=e=>e===null||typeof e!="object"&&typeof e!="function",ao=Array.isArray,ga=e=>ao(e)||typeof e?.[Symbol.iterator]=="function",Qt=`[ 	
\f\r]`,Ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ca=/-->/g,pa=/>/g,ke=RegExp(`>|${Qt}(?:([^\\s"'>=/]+)(${Qt}*=${Qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ma=/'/g,ha=/"/g,xa=/^(?:script|style|textarea|title)$/i,ro=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),S=ro(1),va=ro(2),ba=ro(3),T=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),wa=new WeakMap,Pe=ze.createTreeWalker(ze,129);function ya(e,t){if(!ao(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ua!==void 0?ua.createHTML(t):t}var Ca=(e,t)=>{let o=e.length-1,a=[],r,s=t===2?"<svg>":t===3?"<math>":"",i=Ye;for(let n=0;n<o;n++){let f=e[n],u,c,p=-1,h=0;for(;h<f.length&&(i.lastIndex=h,c=i.exec(f),c!==null);)h=i.lastIndex,i===Ye?c[1]==="!--"?i=ca:c[1]!==void 0?i=pa:c[2]!==void 0?(xa.test(c[2])&&(r=RegExp("</"+c[2],"g")),i=ke):c[3]!==void 0&&(i=ke):i===ke?c[0]===">"?(i=r??Ye,p=-1):c[1]===void 0?p=-2:(p=i.lastIndex-c[2].length,u=c[1],i=c[3]===void 0?ke:c[3]==='"'?ha:ma):i===ha||i===ma?i=ke:i===ca||i===pa?i=Ye:(i=ke,r=void 0);let m=i===ke&&e[n+1].startsWith("/>")?" ":"";s+=i===Ye?f+ns:p>=0?(a.push(u),f.slice(0,p)+to+f.slice(p)+de+m):f+de+(p===-2?n:m)}return[ya(e,s+(e[o]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]},Qe=class e{constructor({strings:t,_$litType$:o},a){let r;this.parts=[];let s=0,i=0,n=t.length-1,f=this.parts,[u,c]=Ca(t,o);if(this.el=e.createElement(u,a),Pe.currentNode=this.el.content,o===2||o===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=Pe.nextNode())!==null&&f.length<n;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(to)){let h=c[i++],m=r.getAttribute(p).split(de),w=/([.?@])?(.*)/.exec(h);f.push({type:1,index:s,name:w[2],strings:m,ctor:w[1]==="."?yt:w[1]==="?"?Ct:w[1]==="@"?St:Me}),r.removeAttribute(p)}else p.startsWith(de)&&(f.push({type:6,index:s}),r.removeAttribute(p));if(xa.test(r.tagName)){let p=r.textContent.split(de),h=p.length-1;if(h>0){r.textContent=vt?vt.emptyScript:"";for(let m=0;m<h;m++)r.append(p[m],Ze()),Pe.nextNode(),f.push({type:2,index:++s});r.append(p[h],Ze())}}}else if(r.nodeType===8)if(r.data===oo)f.push({type:2,index:s});else{let p=-1;for(;(p=r.data.indexOf(de,p+1))!==-1;)f.push({type:7,index:s}),p+=de.length-1}s++}}static createElement(t,o){let a=ze.createElement("template");return a.innerHTML=t,a}};function Ee(e,t,o=e,a){if(t===T)return t;let r=a!==void 0?o._$Co?.[a]:o._$Cl,s=Je(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(e),r._$AT(e,o,a)),a!==void 0?(o._$Co??=[])[a]=r:o._$Cl=r),r!==void 0&&(t=Ee(e,r._$AS(e,t.values),r,a)),t}var bt=class{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:o},parts:a}=this._$AD,r=(t?.creationScope??ze).importNode(o,!0);Pe.currentNode=r;let s=Pe.nextNode(),i=0,n=0,f=a[0];for(;f!==void 0;){if(i===f.index){let u;f.type===2?u=new qe(s,s.nextSibling,this,t):f.type===1?u=new f.ctor(s,f.name,f.strings,this,t):f.type===6&&(u=new Lt(s,this,t)),this._$AV.push(u),f=a[++n]}i!==f?.index&&(s=Pe.nextNode(),i++)}return Pe.currentNode=ze,r}p(t){let o=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,o),o+=a.strings.length-2):a._$AI(t[o])),o++}},qe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,o,a,r){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=a,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,o=this._$AM;return o!==void 0&&t?.nodeType===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=Ee(this,t,o),Je(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ga(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==P&&Je(this._$AH)?this._$AA.nextSibling.data=t:this.T(ze.createTextNode(t)),this._$AH=t}$(t){let{values:o,_$litType$:a}=t,r=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=Qe.createElement(ya(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===r)this._$AH.p(o);else{let s=new bt(r,this),i=s.u(this.options);s.p(o),this.T(i),this._$AH=s}}_$AC(t){let o=wa.get(t.strings);return o===void 0&&wa.set(t.strings,o=new Qe(t)),o}k(t){ao(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,a,r=0;for(let s of t)r===o.length?o.push(a=new e(this.O(Ze()),this.O(Ze()),this,this.options)):a=o[r],a._$AI(s),r++;r<o.length&&(this._$AR(a&&a._$AB.nextSibling,r),o.length=r)}_$AR(t=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);t!==this._$AB;){let a=da(t).nextSibling;da(t).remove(),t=a}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Me=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,a,r,s){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=o,this._$AM=r,this.options=s,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=P}_$AI(t,o=this,a,r){let s=this.strings,i=!1;if(s===void 0)t=Ee(this,t,o,0),i=!Je(t)||t!==this._$AH&&t!==T,i&&(this._$AH=t);else{let n=t,f,u;for(t=s[0],f=0;f<s.length-1;f++)u=Ee(this,n[a+f],o,f),u===T&&(u=this._$AH[f]),i||=!Je(u)||u!==this._$AH[f],u===P?t=P:t!==P&&(t+=(u??"")+s[f+1]),this._$AH[f]=u}i&&!r&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},yt=class extends Me{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}},Ct=class extends Me{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==P)}},St=class extends Me{constructor(t,o,a,r,s){super(t,o,a,r,s),this.type=5}_$AI(t,o=this){if((t=Ee(this,t,o,0)??P)===T)return;let a=this._$AH,r=t===P&&a!==P||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,s=t!==P&&(a===P||r);r&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Lt=class{constructor(t,o,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){Ee(this,t)}},Sa={M:to,P:de,A:oo,C:1,L:Ca,R:bt,D:ga,V:Ee,I:qe,H:Me,N:Ct,U:St,B:yt,F:Lt},fs=eo.litHtmlPolyfillSupport;fs?.(Qe,qe),(eo.litHtmlVersions??=[]).push("3.3.3");var La=(e,t,o)=>{let a=o?.renderBefore??t,r=a._$litPart$;if(r===void 0){let s=o?.renderBefore??null;a._$litPart$=r=new qe(t.insertBefore(Ze(),s),s,void 0,o??{})}return r._$AI(e),r};var so=globalThis,we=class extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=La(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};we._$litElement$=!0,we.finalized=!0,so.litElementHydrateSupport?.({LitElement:we});var ds=so.litElementPolyfillSupport;ds?.({LitElement:we});(so.litElementVersions??=[]).push("4.2.2");var R=e=>(t,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var us={attribute:!0,type:String,converter:Ke,reflect:!1,hasChanged:xt},cs=(e=us,t,o)=>{let{kind:a,metadata:r}=o,s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),a==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(o.name,e),a==="accessor"){let{name:i}=o;return{set(n){let f=t.get.call(this);t.set.call(this,n),this.requestUpdate(i,f,e,!0,n)},init(n){return n!==void 0&&this.C(i,void 0,e,n),n}}}if(a==="setter"){let{name:i}=o;return function(n){let f=this[i];t.call(this,n),this.requestUpdate(i,f,e,!0,n)}}throw Error("Unsupported decorator location: "+a)};function d(e){return(t,o)=>typeof o=="object"?cs(e,t,o):((a,r,s)=>{let i=r.hasOwnProperty(s);return r.constructor.createProperty(s,a),i?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,o)}function X(e){return d({...e,state:!0,attribute:!1})}var Fe=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);function O(e,t){return(o,a,r)=>{let s=i=>i.renderRoot?.querySelector(e)??null;if(t){let{get:i,set:n}=typeof a=="object"?o:r??(()=>{let f=Symbol();return{get(){return this[f]},set(u){this[f]=u}}})();return Fe(o,a,{get(){let f=i.call(this);return f===void 0&&(f=s(this),(f!==null||this.hasUpdated)&&n.call(this,f)),f}})}return Fe(o,a,{get(){return s(this)}})}}var ps=k`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden],
  :host([hidden]) {
    display: none !important;
  }
`,ms=/;\s+$/;function hs(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}function Aa(e){let{property:t,value:o,element:a}=e;if(o){let r=a.getAttribute("style")||"";r&&(r.match(ms)||(r+=";"),r+=" ");let s=`${t}: ${o}`;return r.includes(s)?void 0:`${r}${s};`}return null}var At,_=class extends we{constructor(){super(),aa(this,At,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,o)=>{if(this.internals?.states)try{o?this.internals.states.add(t):this.internals.states.delete(t)}catch(a){if(String(a).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw a}},has:t=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let e=this.constructor;for(let[t,o]of e.elementProperties)o.default==="inherit"&&o.initial!==void 0&&typeof t=="string"&&this.customStates.set(`initial-${t}-${o.initial}`,!0)}static get styles(){let e=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[ps,...e]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))})}attributeChangedCallback(e,t,o){oa(this,At)||(this.constructor.elementProperties.forEach((a,r)=>{a.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),ra(this,At,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&this[o]==null&&(this[o]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(t=>{t.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(t){if(this.didSSR&&!this.hasUpdated){let o=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});o.error=t,this.dispatchEvent(o)}throw t}}setStyle(e,t){if(!this.style){let o=Aa({property:hs(e),value:t,element:this});o&&this.setAttribute("style",o);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let o=Aa({property:e,value:t,element:this});o&&this.setAttribute("style",o);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};At=new WeakMap;l([d()],_.prototype,"dir",2);l([d()],_.prototype,"lang",2);l([d({type:Boolean,reflect:!0,attribute:"did-ssr"})],_.prototype,"didSSR",2);var ws=()=>({observedAttributes:["custom-error"],checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}}),U=class extends _{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new mt))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},"addEventListener"in this&&this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[ws()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let o of t.observedAttributes)e.add(o);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(!!1&&e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")||e.has("defaultValue")){let t=this.value;this.updateFormValue(t)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!!1&&!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let o of e)t.append(this.name,o);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute("form",e):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],o=e[1],a=e[2];a||(a=this.validationTarget),this.internals.setValidity(t,o,a||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,o=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!t),this.customStates.set("valid",t),this.customStates.set("user-invalid",!t&&o),this.customStates.set("user-valid",t&&o)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t==="restore"&&this.resetValidity(),this.updateValidity()}):(this.value=e,t==="restore"&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,o]=e;this.internals.setFormValue(t,o)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},o=this.validationTarget||this.input||void 0,a="";for(let r of e){let{isValid:s,message:i,invalidKeys:n}=r.checkValidity(this);s||(a||(a=i),n?.length>=0&&n.forEach(f=>t[f]=!0))}a||(a=this.validationMessage),this.setValidity(t,a,o)}};U.formAssociated=!0;l([d({reflect:!0})],U.prototype,"name",2);l([d({type:Boolean})],U.prototype,"disabled",2);l([d({state:!0,attribute:!1})],U.prototype,"valueHasChanged",2);l([d({state:!0,attribute:!1})],U.prototype,"hasInteracted",2);l([d({attribute:"custom-error",reflect:!0})],U.prototype,"customError",2);l([d({attribute:!1,state:!0,type:Object})],U.prototype,"validity",1);var ka={small:"s",medium:"m",large:"l"},Pa=new Set;function ge(e,t){t in ka&&!Pa.has(`${e}:${t}`)&&(Pa.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${ka[t]}" instead. The long-form value will be removed in the next major version.`))}var xe=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=o=>{let a=o.target;(this.slotNames.includes("[default]")&&!a.name||a.name&&this.slotNames.includes(a.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&"addEventListener"in e&&e.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&"removeEventListener"in e&&e.removeEventListener("slotchange",this.handleSlotChange)}};var ve=k`
  :host([size='xs']) {
    font-size: var(--wa-font-size-xs);
  }

  :host([size='s']),
  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='m']),
  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='l']),
  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  :host([size='xl']) {
    font-size: var(--wa-font-size-xl);
  }
`;var za=k`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity, transform;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    transform-origin: center;
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));

    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Hover and active transforms */
  .button:not(.disabled):not(.loading) {
    @media (hover: hover) {
      &:hover {
        transform: var(--wa-button-transform-hover);
      }
    }
    &:active {
      transform: var(--wa-button-transform-active);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover,
      &:active {
        transform: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  /* Icon buttons with a caret need to grow to fit both the icon and the caret */
  .button.is-icon-button.caret {
    width: auto;
    aspect-ratio: auto;
    min-width: var(--wa-form-control-height);
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
    justify-content: center;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      /* Hidden with opacity, not visibility, so the label stays in the accessibility tree */
      opacity: 0;

      /* Unlike visibility: hidden, opacity leaves the content clickable */
      pointer-events: none;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`;var kt=k`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;function $(e,t){let o={waitUntilFirstUpdate:!1,...t};return(a,r)=>{let{update:s}=a,i=Array.isArray(e)?e:[e];a.update=function(n){i.forEach(f=>{let u=f;if(n.has(u)){let c=n.get(u),p=this[u];c!==p&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](c,p)}}),s.call(this,n)}}}var io=new Set,Ue=new Map,ue,lo="ltr",no="en",Ea=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Ea){let e=new MutationObserver(Ma);lo=document.documentElement.dir||"ltr",no=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function et(...e){e.map(t=>{let o=t.$code.toLowerCase();Ue.has(o)?Ue.set(o,Object.assign(Object.assign({},Ue.get(o)),t)):Ue.set(o,t),ue||(ue=t)}),Ma()}function Ma(){Ea&&(lo=document.documentElement.dir||"ltr",no=document.documentElement.lang||navigator.language),[...io.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Pt=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){io.add(this.host)}hostDisconnected(){io.delete(this.host)}dir(){return`${this.host.dir||lo}`.toLowerCase()}lang(){let t=`${this.host.lang||no}`.toLowerCase().replace(/_/g,"-");try{return new Intl.Locale(t),t}catch{return ue?ue.$code.toLowerCase():"en"}}getTranslationData(t){var o,a;let r;try{r=new Intl.Locale(t.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let s=r.language.toLowerCase(),i=(a=(o=r.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&a!==void 0?a:"",n=Ue.get(`${s}-${i}`),f=Ue.get(s);return{locale:r,language:s,region:i,primary:n,secondary:f}}exists(t,o){var a;let{primary:r,secondary:s}=this.getTranslationData((a=o.lang)!==null&&a!==void 0?a:this.lang());return o=Object.assign({includeFallback:!1},o),!!(r&&r[t]||s&&s[t]||o.includeFallback&&ue&&ue[t])}term(t,...o){let{primary:a,secondary:r}=this.getTranslationData(this.lang()),s;if(a&&a[t])s=a[t];else if(r&&r[t])s=r[t];else if(ue&&ue[t])s=ue[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...o):s}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,a){return new Intl.RelativeTimeFormat(this.lang(),a).format(t,o)}};var Fa={$code:"en",$name:"English",$dir:"ltr",am:"AM",autosizeColumn:"Autosize column",captions:"Captions",carousel:"Carousel",chooseDate:"Choose date",chooseDecade:"Choose decade",chooseMonth:"Choose month",chooseTime:"Choose time",chooseYear:"Choose year",clearEntry:"Clear entry",clearFilter:"Clear filter",clearSort:"Clear sort",close:"Close",closeCalendar:"Close calendar",closeTimeInput:"Close time picker",collapseRow:"Collapse row",columnMenu:"Column options",columnMovedToPosition:(e,t,o)=>`${e} moved to position ${t} of ${o}`,columns:"Columns",compactPageXOfY:(e,t)=>`${e} of ${t}`,copied:"Copied",copy:"Copy",createOption:e=>`Create "${e}"`,currentlyPlaying:"currently playing",currentValue:"Current value",date:"Date",datePickerKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the calendar.",day:"Day",dayPeriod:"AM/PM",decrement:"Decrement",deselectAllRows:"Deselect all rows",dropFileHere:"Drop file here or click to browse",dropFilesHere:"Drop files here or click to browse",empty:"Empty",endDate:"End date",enterFullscreen:"Enter fullscreen",error:"Error",exitFullscreen:"Exit fullscreen",expandRow:"Expand row",filterByColumn:e=>`Filter by ${e}`,filterFrom:"From",filterMax:"Max",filterMin:"Min",filterTo:"To",firstPage:"First page",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:"Hide column",hidePassword:"Hide password",hour:"Hour",incompleteDate:"Enter a valid date.",increment:"Increment",jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:"Last page",loading:"Loading",minute:"Minute",month:"Month",moreOptions:"More Options",mute:"Mute",nextDecade:"Next decade",nextMonth:"Next month",nextPage:"Next page",nextSlide:"Next slide",nextVideo:"Next Video",nextYear:"Next year",noData:"No data",noResults:"No matching results",now:"Now",numCharacters:e=>e===1?"1 character":`${e} characters`,numCharactersRemaining:e=>e===1?"1 character remaining":`${e} characters remaining`,numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,numRowsCopied:e=>e===1?"1 row copied":`${e} rows copied`,numRowsSelected:e=>e===1?"1 row selected":`${e} rows selected`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:"Pagination",pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",pinLeft:"Pin left",pinRight:"Pin right",play:"Play",playAnimation:"Play animation",playbackSpeed:"Playback speed",playlist:"Playlist",pm:"PM",previousDecade:"Previous decade",previousMonth:"Previous month",previousPage:"Previous page",previousSlide:"Previous slide",previousVideo:"Previous video",previousYear:"Previous year",progress:"Progress",rangeTooLong:e=>e===1?"Select a range no longer than 1 day":`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?"Select a range at least 1 day long":`Select a range at least ${e} days long`,readonly:"Read-only",remove:"Remove",resetColumns:"Reset columns",resize:"Resize",resizeColumn:"Resize column",rowsPerPage:"Rows per page",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",search:"Search",second:"Second",seek:"Seek",seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:"Select a color from the screen",selectAllRows:"Select all rows",selected:"Selected",selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:"Select group",selectionCleared:"Selection cleared",selectRow:"Select row",showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,o)=>`${e}\u2013${t} of ${o}`,showPassword:"Show password",slideNum:e=>`Slide ${e}`,sortAscending:"Sort ascending",sortColumn:"Sort column",sortDescending:"Sort descending",startDate:"Start date",time:"Time",timeInputKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the time picker.",today:"Today",toggleColorFormat:"Toggle color format",unmute:"Unmute",unpin:"Unpin",unpinColumn:"Unpin column",videoPlayer:"Video player",volume:"Volume",year:"Year",zoomIn:"Zoom in",zoomOut:"Zoom out"};et(Fa);var $a=Fa;var q=class extends Pt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||"en":super.lang()}};et($a);var Y={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ie=e=>(...t)=>({_$litDirective$:e,values:t}),be=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,a){this._$Ct=t,this._$AM=o,this._$Ci=a}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};var I=Ie(class extends be{constructor(e){if(super(e),e.type!==Y.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in t)t[a]&&!this.nt?.has(a)&&this.st.add(a);return this.render(t)}let o=e.element.classList;for(let a of this.st)a in t||(o.remove(a),this.st.delete(a));for(let a in t){let r=!!t[a];r===this.st.has(a)||this.nt?.has(a)||(r?(o.add(a),this.st.add(a)):(o.remove(a),this.st.delete(a)))}return T}});var M=e=>e??P;var Oa=Symbol.for(""),gs=e=>{if(e?.r===Oa)return e?._$litStatic$};var fo=(e,...t)=>({_$litStatic$:t.reduce((o,a,r)=>o+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(a)+e[r+1],e[0]),r:Oa}),Ra=new Map,uo=e=>(t,...o)=>{let a=o.length,r,s,i=[],n=[],f,u=0,c=!1;for(;u<a;){for(f=t[u];u<a&&(s=o[u],(r=gs(s))!==void 0);)f+=r+t[++u],c=!0;u!==a&&n.push(s),i.push(f),u++}if(u===a&&i.push(t[a]),c){let p=i.join("$$lit$$");(t=Ra.get(p))===void 0&&(i.raw=i,Ra.set(p,t=i)),o=n}return e(t,...o)},zt=uo(S),Hl=uo(va),Vl=uo(ba);var b=class extends U{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new xe(this,"[default]","start","end"),this.localize=new q(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="m",this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,pt()]}handleSizeChange(){ge(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement("button");for(let t of this.attributes)t.name!=="style"&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position="absolute !important",e.style.width="0 !important",e.style.height="0 !important",e.style.clipPath="inset(50%) !important",e.style.overflow="hidden !important",e.style.whiteSpace="nowrap !important",this.name&&(e.name=this.name),e.value=this.value||"",e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;let o=this.constructLightDOMButton();this.parentElement?.append(o),o.click(),o.remove()}handleInvalid(){this.dispatchEvent(new mt)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,o=!1,a=!1,r=!1;[...e].forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){let i=s;i.localName==="wa-icon"?(o=!0,t||(t=i.label!==void 0)):r=!0}else s.nodeType===Node.TEXT_NODE&&(s.textContent?.trim()||"").length>0&&(a=!0)}),this.isIconButton=o&&!a&&!r,this.customStates.set("icon-button",this.isIconButton),this.isIconButton&&!t&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set("link",this.isLink())}handleLoadingChange(){this.customStates.set("loading",this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?fo`a`:fo`button`;return zt`
      <${t}
        part="base button"
        class=${I({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start","withStart"),"has-end":this.hasSlotController.test("end","withEnd"),"is-icon-button":this.isIconButton})}
        ?disabled=${M(e?void 0:this.disabled)}
        type=${M(e?void 0:this.type)}
        title=${this.title}
        name=${M(e?void 0:this.name)}
        value=${M(e?void 0:this.value)}
        href=${M(e?this.href:void 0)}
        target=${M(e?this.target:void 0)}
        download=${M(e?this.download:void 0)}
        rel=${M(e&&this.rel?this.rel:void 0)}
        role=${M(e?void 0:"button")}
        aria-disabled=${M(e&&this.disabled?"true":void 0)}
        aria-busy=${this.loading?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?zt`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?zt`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${t}>
    `}};b.shadowRootOptions={...U.shadowRootOptions,delegatesFocus:!0};b.css=[za,kt,ve];l([O(".button")],b.prototype,"button",2);l([O("slot:not([name])")],b.prototype,"labelSlot",2);l([X()],b.prototype,"invalid",2);l([X()],b.prototype,"isIconButton",2);l([d()],b.prototype,"title",2);l([d({reflect:!0})],b.prototype,"variant",2);l([d({reflect:!0})],b.prototype,"appearance",2);l([d({reflect:!0})],b.prototype,"size",2);l([$("size")],b.prototype,"handleSizeChange",1);l([d({attribute:"with-caret",type:Boolean,reflect:!0})],b.prototype,"withCaret",2);l([d({attribute:"with-start",type:Boolean})],b.prototype,"withStart",2);l([d({attribute:"with-end",type:Boolean})],b.prototype,"withEnd",2);l([d({type:Boolean})],b.prototype,"disabled",2);l([d({type:Boolean,reflect:!0})],b.prototype,"loading",2);l([d({type:Boolean,reflect:!0})],b.prototype,"pill",2);l([d()],b.prototype,"type",2);l([d({reflect:!0})],b.prototype,"name",2);l([d({reflect:!0})],b.prototype,"value",2);l([d({reflect:!0})],b.prototype,"href",2);l([d()],b.prototype,"target",2);l([d()],b.prototype,"rel",2);l([d()],b.prototype,"download",2);l([d({attribute:"formaction"})],b.prototype,"formAction",2);l([d({attribute:"formenctype"})],b.prototype,"formEnctype",2);l([d({attribute:"formmethod"})],b.prototype,"formMethod",2);l([d({attribute:"formnovalidate",type:Boolean})],b.prototype,"formNoValidate",2);l([d({attribute:"formtarget"})],b.prototype,"formTarget",2);l([$("disabled",{waitUntilFirstUpdate:!0})],b.prototype,"handleDisabledChange",1);l([$("href")],b.prototype,"handleHrefChange",1);l([$("loading",{waitUntilFirstUpdate:!0})],b.prototype,"handleLoadingChange",1);b=l([R("wa-button")],b);b.disableWarning?.("change-in-update");var Da=k`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;
    --size: 1em;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) / 2);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    r: var(--radius);
    fill: none;
    stroke-width: var(--track-width);
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: calc(0.597 * var(--circumference)), calc(0.796 * var(--circumference));
    stroke-dashoffset: calc(-0.04 * var(--circumference));
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: calc(0.008 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.278 * var(--circumference));
    }
    100% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.987 * var(--circumference));
    }
  }
`;var co=class extends _{constructor(){super(...arguments),this.localize=new q(this)}render(){return S`
      <svg
        part="base spinner"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}};co.css=Da;co=l([R("wa-spinner")],co);var _a=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};var Ba=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var Ta=k`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* #region Canvas — the box the icon is centered within (mirrors Font Awesome's icon canvas). Orthogonal to font-size. */

  /* Fixed width (default): 1.25em × 1em (20 × 16px) */
  :host(:not([canvas])),
  :host([canvas='fixed']) {
    width: 1.25em;
    height: 1em;
    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Auto: hug the icon's width. \`auto-width\` is the deprecated alias for canvas="auto". */
  :host([canvas='auto']),
  :host([auto-width]:not([canvas])) {
    width: auto;
    height: 1em;
  }

  /* Square: 1.25em × 1.25em (20 × 20px) */
  :host([canvas='square']) {
    width: 1.25em;
    height: 1.25em;
    min-width: 1.25em;
    min-height: 1.25em;
  }

  /* Roomy: 1.5em × 1.5em (24 × 24px) */
  :host([canvas='roomy']) {
    width: 1.5em;
    height: 1.5em;
    min-width: 1.5em;
    min-height: 1.5em;
  }

  /* #endregion */

  svg {
    /* NOTE: Avoid setting fill here. A stylesheet rule beats SVG presentation attributes, breaking stroke-based
       libraries like Lucide (fill="none" stroke="currentColor") and attribute-based mutators (issue #1733). The default
       library applies fill="currentColor" in its mutator instead. */
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* #region Animations — ported from Font Awesome 7.3 (--fa-* props mapped to wa-icon's --* names) */

  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.5s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip-360']) {
    animation-name: flip-360;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.75s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  /* spin-reverse is FA's reverse modifier expressed as a standalone value; reverse any spin via --animation-direction: reverse */
  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap']) {
    animation-name: spin-snap;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-4']) {
    animation-name: spin-snap-4;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2.4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-8']) {
    animation-name: spin-snap-8;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='buzz']) {
    animation-name: buzz;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.6s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='wag']) {
    animation-name: wag;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: bottom center;
  }

  :host([animation='float']) {
    animation-name: float;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
    will-change: transform;
  }

  :host([animation='swing']) {
    animation-name: swing;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: top center;
  }

  :host([animation='jello']) {
    animation-name: jello;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='flip-360']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']),
    :host([animation='spin-snap']),
    :host([animation='spin-snap-4']),
    :host([animation='spin-snap-8']),
    :host([animation='buzz']),
    :host([animation='wag']),
    :host([animation='float']),
    :host([animation='swing']),
    :host([animation='jello']) {
      animation: none !important;
      transition: none !important;
    }
  }

  /* #endregion */

  /* #region Keyframes — ported verbatim from Font Awesome 7.3 */

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    45% {
      transform: scale(calc(1.22 * var(--beat-scale, 1.22)));
    }
    65% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    90% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
      /* No fallback by design (ported from FA 7.3): the first segment uses the user's --animation-timing or the CSS
         initial ease, while the explicit cubic-beziers on later stops drive the bounce physics. */
      animation-timing-function: var(--animation-timing);
    }
    14% {
      transform: scale(var(--bounce-start-scale-x, 1.06), var(--bounce-start-scale-y, 0.94))
        translateY(var(--bounce-anticipation, 3px));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    32% {
      transform: scale(var(--bounce-jump-scale-x, 0.94), var(--bounce-jump-scale-y, 1.12))
        translateY(calc(-1 * var(--bounce-height, 0.5em)));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    52% {
      transform: scale(1, 1) translateY(calc(-1 * var(--bounce-height, 0.5em) * 1.1));
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    70% {
      transform: scale(var(--bounce-land-scale-x, 1.06), var(--bounce-land-scale-y, 0.92)) translateY(0);
      animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
    }
    85% {
      transform: scale(0.98, 1.04) translateY(calc(-2px * var(--bounce-rebound, 1)));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    40% {
      opacity: var(--fade-opacity, 0.4);
      transform: scale(0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes beat-fade {
    0% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    25% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    45% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    65% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
  }

  @keyframes flip {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    35% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: linear;
    }
    65% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.5));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    92% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes flip-360 {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    50% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    80% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(35deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    20% {
      transform: rotate(-22deg) translateX(-1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    35% {
      transform: rotate(15deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    50% {
      transform: rotate(-9deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    65% {
      transform: rotate(5deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    78% {
      transform: rotate(-3deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    90% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    12% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    16.67% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    28.67% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    33.33% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    45.33% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    62% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    66.67% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    78.67% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    83.33% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    95.33% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-4 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    15% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    40% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    65% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    90% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-8 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    9% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    12.5% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    21.5% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    34% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    37.5% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    46.5% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    59% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    62.5% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    71.5% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    84% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    87.5% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    96.5% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes buzz {
    0% {
      transform: translateX(0) rotate(0deg);
      animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
    }
    5% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.5deg);
    }
    10% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.5deg);
    }
    15% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.3deg);
    }
    20% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.3deg);
    }
    25% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.7)) rotate(0.2deg);
    }
    30% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
    }
    35% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.4)) rotate(0.1deg);
    }
    40% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

  @keyframes wag {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    12% {
      transform: rotate(var(--wag-angle, 12deg));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    24% {
      transform: rotate(2deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    36% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.85));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    48% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    58% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.6));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    15% {
      transform: translateY(calc(-0.4 * var(--float-height, 6px))) translateX(var(--float-drift, 1px))
        rotate(var(--float-tilt, 1deg)) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    35% {
      transform: translateY(calc(-1 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-stretch-x, 0.98), var(--float-stretch-y, 1.03));
      animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
    }
    50% {
      transform: translateY(calc(-0.92 * var(--float-height, 6px))) translateX(calc(-0.5 * var(--float-drift, 1px)))
        rotate(calc(-0.5 * var(--float-tilt, 1deg))) scale(0.995, 1.01);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    70% {
      transform: translateY(calc(-0.3 * var(--float-height, 6px))) translateX(calc(-1 * var(--float-drift, 1px)))
        rotate(calc(-1 * var(--float-tilt, 1deg))) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    90% {
      transform: translateY(calc(0.05 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
    }
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(var(--swing-angle, 22deg));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    18% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.85));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    28% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.65));
      animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
    }
    38% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.45));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    56% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.1));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    64% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes jello {
    0% {
      transform: scale(1, 1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    12% {
      transform: scale(var(--jello-scale-x, 1.15), calc(2 - var(--jello-scale-x, 1.15)));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    24% {
      transform: scale(calc(2 - var(--jello-scale-y, 1.12)), var(--jello-scale-y, 1.12));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    36% {
      transform: scale(
        calc(1 + (var(--jello-scale-x, 1.15) - 1) * 0.5),
        calc(2 - (1 + (var(--jello-scale-x, 1.15) - 1) * 0.5))
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: scale(
        calc(2 - (1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)),
        calc(1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    58% {
      transform: scale(1.02, 0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  /* #endregion */
`;var xs="",po="";function qa(){return xs.replace(/\/$/,"")}function vs(e){po=e}function Ua(){if(!po){let e=document.querySelector("[data-fa-kit-code]");e&&vs(e.getAttribute("data-fa-kit-code")||"")}return po}var Ia="7.3.0";function bs(e,t,o){let a="solid";return t==="chisel"&&(a="chisel-regular"),t==="etch"&&(a="etch-solid"),t==="graphite"&&(a="graphite-thin"),t==="jelly"&&(a="jelly-regular",o==="duo-regular"&&(a="jelly-duo-regular"),o==="fill-regular"&&(a="jelly-fill-regular")),t==="jelly-duo"&&(a="jelly-duo-regular"),t==="jelly-fill"&&(a="jelly-fill-regular"),t==="notdog"&&(o==="solid"&&(a="notdog-solid"),o==="duo-solid"&&(a="notdog-duo-solid")),t==="notdog-duo"&&(a="notdog-duo-solid"),t==="slab"&&((o==="solid"||o==="regular")&&(a="slab-regular"),o==="press-regular"&&(a="slab-press-regular")),t==="slab-press"&&(a="slab-press-regular"),t==="slab-duo"&&(a="slab-duo-regular"),t==="slab-press-duo"&&(a="slab-press-duo-regular"),t==="thumbprint"&&(a="thumbprint-light"),t==="utility"&&(a="utility-semibold"),t==="utility-duo"&&(a="utility-duo-semibold"),t==="utility-fill"&&(a="utility-fill-semibold"),t==="whiteboard"&&(a="whiteboard-semibold"),t==="mosaic"&&(a="mosaic-solid"),t==="pixel"&&(a="pixel-regular"),t==="vellum"&&(a="vellum-solid"),t==="classic"&&(o==="thin"&&(a="thin"),o==="light"&&(a="light"),o==="regular"&&(a="regular"),o==="solid"&&(a="solid")),t==="duotone"&&(o==="thin"&&(a="duotone-thin"),o==="light"&&(a="duotone-light"),o==="regular"&&(a="duotone-regular"),o==="solid"&&(a="duotone")),t==="sharp"&&(o==="thin"&&(a="sharp-thin"),o==="light"&&(a="sharp-light"),o==="regular"&&(a="sharp-regular"),o==="solid"&&(a="sharp-solid")),t==="sharp-duotone"&&(o==="thin"&&(a="sharp-duotone-thin"),o==="light"&&(a="sharp-duotone-light"),o==="regular"&&(a="sharp-duotone-regular"),o==="solid"&&(a="sharp-duotone-solid")),t==="brands"&&(a="brands"),a}function ys(e,t,o){let a=bs(e,t,o),r=qa();if(r)return`${r}/${a}/${e}.svg`;let s=Ua();return s.length>0?`https://ka-p.fontawesome.com/releases/v${Ia}/svgs/${a}/${e}.svg?token=${encodeURIComponent(s)}`:`https://ka-f.fontawesome.com/releases/v${Ia}/svgs/${a}/${e}.svg`}var Cs={name:"default",resolver:(e,t="classic",o="solid")=>ys(e,t,o),mutator:(e,t)=>{if(e.hasAttribute("fill")||e.setAttribute("fill","currentColor"),t?.family&&!e.hasAttribute("data-duotone-initialized")){let{family:o,variant:a}=t;if(o==="duotone"||o==="sharp-duotone"||o==="notdog-duo"||o==="notdog"&&a==="duo-solid"||o==="jelly-duo"||o==="jelly"&&a==="duo-regular"||o==="utility-duo"||o==="slab-duo"||o==="slab-press-duo"||o==="thumbprint"){let r=[...e.querySelectorAll("path")],s=r.find(n=>!n.hasAttribute("opacity")),i=r.find(n=>n.hasAttribute("opacity"));if(!s||!i)return;if(s.setAttribute("data-duotone-primary",""),i.setAttribute("data-duotone-secondary",""),t.swapOpacity&&s&&i){let n=i.getAttribute("opacity")||"0.4";s.style.setProperty("--path-opacity",n),i.style.setProperty("--path-opacity","1")}e.setAttribute("data-duotone-initialized","")}}}},Ha=Cs;function Ss(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var mo={solid:{backward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>',"backward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>',"angles-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>',"angles-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',"closed-captioning":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>',"closed-captioning-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>',compress:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',ellipsis:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>',"ellipsis-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"forward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>',gauge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',"picture-in-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>',"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},Ls={name:"system",resolver:(e,t="classic",o="solid")=>{let r=mo[o][e]??mo.regular[e]??mo.regular["circle-question"];return r?Ss(r):""},mutator:e=>{e.hasAttribute("fill")||e.setAttribute("fill","currentColor")}},Va=Ls;var As="classic",ks=[Ha,Va],Na=new Set;function Wa(e){Na.add(e)}function Xa(e){Na.delete(e)}function Et(e){return ks.find(t=>t.name===e)}function ja(){return As}var{I:Dn}=Sa;var Ga=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;var Ka=e=>e.strings===void 0;var Ps={},Ya=(e,t=Ps)=>e._$AH=t;var tt=Symbol(),Mt=Symbol(),ho,wo=new Map,D=class extends _{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(e,t)=>{let o;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=S`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let a=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(a,this),this.svg}try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?tt:Mt}catch{return Mt}try{let a=document.createElement("div");a.innerHTML=await o.text();let r=a.firstElementChild;if(r?.tagName?.toLowerCase()!=="svg")return tt;ho||(ho=new DOMParser);let i=ho.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return i?(i.part.add("svg"),document.adoptNode(i)):tt}catch{return tt}}}connectedCallback(){super.connectedCallback(),Wa(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Xa(this)}async getIconSource(){let e=Et(this.library),t=this.family||ja();if(this.name&&e){let o=this.canvas==="auto"||this.autoWidth,a;try{a=await e.resolver(this.name,t,this.variant,o)}catch{a=void 0}return{url:a,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),o=t?Et(this.library):void 0;if(!e){this.svg=null;return}let a=wo.get(e);a||(a=this.resolveIcon(e,o),wo.set(e,a));let r=await a;r===Mt&&wo.delete(e);let s=await this.getIconSource();if(e===s.url){if(Ga(r)){this.svg=r;return}switch(r){case Mt:case tt:this.svg=null,this.dispatchEvent(new _a);break;default:this.svg=r.cloneNode(!0),o?.mutator?.(this.svg,this),this.dispatchEvent(new Ba)}}}willUpdate(e){return this.style||this.setStyleProperty("--rotate-angle",`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Et(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);let o=this.shadowRoot?.querySelector("svg");o&&t?.mutator?.(o,this)}render(){return this.hasUpdated?this.svg:S`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};D.css=Ta;l([X()],D.prototype,"svg",2);l([d({reflect:!0})],D.prototype,"name",2);l([d({reflect:!0})],D.prototype,"family",2);l([d({reflect:!0})],D.prototype,"variant",2);l([d({reflect:!0})],D.prototype,"canvas",2);l([d({attribute:"auto-width",type:Boolean,reflect:!0})],D.prototype,"autoWidth",2);l([d({attribute:"swap-opacity",type:Boolean,reflect:!0})],D.prototype,"swapOpacity",2);l([d()],D.prototype,"src",2);l([d()],D.prototype,"label",2);l([d({reflect:!0})],D.prototype,"library",2);l([d({type:Number,reflect:!0})],D.prototype,"rotate",2);l([d({type:String,reflect:!0})],D.prototype,"flip",2);l([d({type:String,reflect:!0})],D.prototype,"animation",2);l([$("label")],D.prototype,"handleLabelChange",1);l([$(["family","name","library","variant","src","autoWidth","canvas","swapOpacity"],{waitUntilFirstUpdate:!0})],D.prototype,"setIcon",1);D=l([R("wa-icon")],D);var Ft=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function Za(e,t){let o=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!o&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&zs(t)})}function zs(e){let t=null;if("form"in e&&(t=e.form),!t&&"getForm"in e&&(t=e.getForm()),!t)return;let o=[...t.elements];if(o.length===1){t.requestSubmit(null);return}let a=o.find(r=>r.type==="submit"&&!r.matches(":disabled"));a&&(["input","button"].includes(a.localName)?t.requestSubmit(a):a.click())}var Ja=k`
  :host {
    border-width: 0;
  }

  :host(:focus) {
    outline: none;
  }

  .text-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    transition: inherit;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: var(--wa-form-control-value-font-size);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    box-shadow: var(--box-shadow);
    padding: 0 var(--wa-form-control-padding-inline);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    /* Only ring the field when the text input has focus, not inner buttons */
    &:has(input:focus, textarea:focus) {
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled inputs */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .text-field {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) .text-field {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  .text-field {
    /* Show autofill styles over the entire text field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input,
    textarea {
      /*
      Fixes an alignment issue with placeholders.
      https://github.com/shoelace-style/webawesome/issues/342
    */
      height: 100%;

      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
      font: inherit;

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    transition: inherit;

    /* prettier-ignore */
    background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
    height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    padding-block: 0;
    color: inherit;

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  /*
   * Clearable + Password Toggle
   */

  .clear,
  .password-toggle {
    position: relative;
    display: inline-flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    height: 1.5em;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    border-radius: var(--wa-border-radius-s);
    background: none;
    padding: 0;
    transition: var(--wa-transition-normal) color;
    cursor: pointer;
    /* The box is wider than the glyph, so overhang half of that growth on each side. Keeps the
       glyph flush with the field's trailing padding edge, like every other form control. */
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.125em);
    margin-inline-end: -0.125em;

    &::after {
      content: '';
      position: absolute;
      inset-inline: 0;
      height: var(--wa-form-control-height);
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  :host([without-spin-buttons]) input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`;var $t=k`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint, .has-count) {
      display: none;
    }
  }
`;var Qa=Ie(class extends be{constructor(e){if(super(e),e.type!==Y.PROPERTY&&e.type!==Y.ATTRIBUTE&&e.type!==Y.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ka(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===T||t===P)return t;let o=e.element,a=e.name;if(e.type===Y.PROPERTY){if(t===o[a])return T}else if(e.type===Y.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(a))return T}else if(e.type===Y.ATTRIBUTE&&o.getAttribute(a)===t+"")return T;return Ya(e),t}});var x=class extends U{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new xe(this,"hint","label"),this.localize=new q(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,pt()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){if(e==null){this.setValue("",null);return}super.updateFormValue(e)}handleSizeChange(){ge(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new Ft),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){Za(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){if(super.updated(e),e.has("value")||e.has("defaultValue")||e.has("type")){let t=["number","date","time","datetime-local"];this.input&&t.includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set("blank",!this.value),this.updateValidity()}}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,o="none"){this.input.setSelectionRange(e,t,o)}setRangeText(e,t,o,a="preserve"){let r=t??this.input.selectionStart,s=o??this.input.selectionEnd;this.input.setRangeText(e,r,s,a),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test("label","withLabel"),t=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!e,a=this.hint?!0:!!t,r=this.withClear&&!this.disabled&&!this.readonly,s=(!this.didSSR||this.hasUpdated)&&r&&(typeof this.value=="number"||this.value&&this.value.length>0);return S`
      <label
        part="form-control-label label"
        class=${I({label:!0,"has-label":o})}
        for="input"
        aria-hidden=${o?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base input-wrapper" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${M(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${M(this.placeholder)}
          minlength=${M(this.minlength)}
          maxlength=${M(this.maxlength)}
          min=${M(this.min)}
          max=${M(this.max)}
          step=${M(this.step)}
          .value=${Qa(this.value??"")}
          autocapitalize=${M(this.autocapitalize)}
          autocomplete=${M(this.autocomplete)}
          autocorrect=${this.autocorrect?"on":"off"}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${M(this.pattern)}
          enterkeyhint=${M(this.enterkeyhint)}
          inputmode=${M(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${s?S`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?S`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?S`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:S`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${I({"has-slotted":a})}
        aria-hidden=${a?"false":"true"}
        >${this.hint}</slot
      >
    `}};x.css=[ve,$t,Ja];x.shadowRootOptions={...U.shadowRootOptions,delegatesFocus:!0};l([O("input")],x.prototype,"input",2);l([d()],x.prototype,"title",2);l([d({reflect:!0})],x.prototype,"type",2);l([X()],x.prototype,"value",1);l([d({attribute:"value",reflect:!0})],x.prototype,"defaultValue",2);l([d({reflect:!0})],x.prototype,"size",2);l([$("size")],x.prototype,"handleSizeChange",1);l([d({reflect:!0})],x.prototype,"appearance",2);l([d({type:Boolean,reflect:!0})],x.prototype,"pill",2);l([d()],x.prototype,"label",2);l([d({attribute:"hint"})],x.prototype,"hint",2);l([d({attribute:"with-clear",type:Boolean})],x.prototype,"withClear",2);l([d()],x.prototype,"placeholder",2);l([d({type:Boolean,reflect:!0})],x.prototype,"readonly",2);l([d({attribute:"password-toggle",type:Boolean})],x.prototype,"passwordToggle",2);l([d({attribute:"password-visible",type:Boolean})],x.prototype,"passwordVisible",2);l([d({attribute:"without-spin-buttons",type:Boolean,reflect:!0})],x.prototype,"withoutSpinButtons",2);l([d({type:Boolean,reflect:!0})],x.prototype,"required",2);l([d()],x.prototype,"pattern",2);l([d({type:Number})],x.prototype,"minlength",2);l([d({type:Number})],x.prototype,"maxlength",2);l([d()],x.prototype,"min",2);l([d()],x.prototype,"max",2);l([d()],x.prototype,"step",2);l([d()],x.prototype,"autocapitalize",2);l([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="off"),toAttribute:e=>e?"on":"off"}})],x.prototype,"autocorrect",2);l([d()],x.prototype,"autocomplete",2);l([d({type:Boolean})],x.prototype,"autofocus",2);l([d()],x.prototype,"enterkeyhint",2);l([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],x.prototype,"spellcheck",2);l([d()],x.prototype,"inputmode",2);l([d({attribute:"with-label",type:Boolean})],x.prototype,"withLabel",2);l([d({attribute:"with-hint",type:Boolean})],x.prototype,"withHint",2);l([$("step",{waitUntilFirstUpdate:!0})],x.prototype,"handleStepChange",1);x=l([R("wa-input")],x);x.disableWarning?.("change-in-update");var er=k`
  :host {
    --tag-max-size: 10ch;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
  }

  /* Add ellipses to multi select options */
  :host wa-tag::part(content) {
    display: initial;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: var(--tag-max-size);
  }

  :host .disabled [part~='combobox'] {
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  :host .enabled:is(.open, :focus-within) [part~='combobox'] {
    outline-color: var(--wa-color-focus);
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;

    /* Pass through from select to the popup */
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Combobox */
  .combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    justify-content: start;

    min-height: var(--wa-form-control-height);

    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: pointer;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    overflow: hidden;
    padding: 0 var(--wa-form-control-padding-inline);
    position: relative;
    vertical-align: middle;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    /* Pills */
    :host([pill]) & {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .combobox {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  .display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    line-height: var(--wa-form-control-value-line-height);
    color: var(--wa-form-control-value-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
    }
  }

  /* Manage spacing when tags are present */
  :host([multiple]) {
    --_padding-with-tags: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));

    & .combobox:has(.tags wa-tag) {
      padding-block: var(--_padding-with-tags);
      padding-inline-start: var(--_padding-with-tags);
    }
  }

  /* Visually hide the display input when multiple is enabled */
  :host([multiple]) .combobox:has(.tags wa-tag) .display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .value-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    padding: 0;
    margin: 0;
  }

  .tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25em;

    &::slotted(wa-tag) {
      cursor: pointer !important;
    }

    .disabled &,
    .disabled &::slotted(wa-tag) {
      cursor: not-allowed !important;
    }
  }

  /* Start and End */

  .start,
  .end {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  :host([multiple]) .combobox:has(.tags wa-tag) .start::slotted(*) {
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - var(--_padding-with-tags));
  }

  /* Clear button */
  [part~='clear-button'] {
    flex: 0 0 auto;
    display: inline-flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    inline-size: 1.5em;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: color var(--wa-transition-normal);
    cursor: pointer;
    /* The box is wider than the glyph, so overhang half that growth on each side. Keeps the glyph
       on the same trailing axis as the segmented-field pickers' clear buttons. */
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.125em);
    margin-inline-end: -0.125em;

    &:focus {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }
  }

  /* Expand icon */
  .expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
    transition: rotate var(--wa-transition-slow) var(--wa-transition-easing);
    rotate: 0deg;
    margin-inline-start: var(--wa-form-control-padding-inline);

    .open & {
      rotate: -180deg;
    }
  }

  /* Listbox */
  .listbox {
    display: block;
    position: relative;
    font: inherit;
    box-shadow: var(--wa-shadow-m);
    background: var(--wa-color-surface-raised);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    padding: 0.25em;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);

    &::slotted(wa-divider) {
      --spacing: 0.5em;
    }
  }

  /* Space options with half the listbox's padding */
  .listbox slot:not([name]) {
    display: flex;
    flex-direction: column;
    gap: 0.125em;
  }

  slot:not([name])::slotted(small) {
    display: block;
    font-size: var(--wa-font-size-smaller);
    font-weight: var(--wa-font-weight-semibold);
    color: var(--wa-color-text-quiet);
    padding-block: 0.5em;
    padding-inline: 2.25em;
  }
`;function Es(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var go=new Set;function Ms(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Fs(){let e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Rt(e){if(go.add(e),!document.documentElement.classList.contains("wa-scroll-lock")){let t=Ms()+Fs(),o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),t<2&&(o=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",o),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${t}px`)}}function Ot(e){go.delete(e),go.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function xo(e,t,o="vertical",a="smooth"){let r=Es(e,t),s=r.top+t.scrollTop,i=r.left+t.scrollLeft,n=t.scrollLeft,f=t.scrollLeft+t.offsetWidth,u=t.scrollTop,c=t.scrollTop+t.offsetHeight;(o==="horizontal"||o==="both")&&(i<n?t.scrollTo({left:i,behavior:a}):i+e.clientWidth>f&&t.scrollTo({left:i-t.offsetWidth+e.clientWidth,behavior:a})),(o==="vertical"||o==="both")&&(s<u?t.scrollTo({top:s,behavior:a}):s+e.clientHeight>c&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:a}))}var Dt=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var _t=class extends Event{constructor(e){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};var Bt=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};var Tt=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};var $e=[];function qt(e){ot(e),$e.push(e)}function ot(e){for(let t=$e.length-1;t>=0;t--)if($e[t]===e){$e.splice(t,1);break}}function at(e){return $e.length>0&&$e[$e.length-1]===e}var tr=(e={})=>{let{validationElement:t,validationProperty:o}=e;t||typeof document<"u"&&"createElement"in document&&(t=Object.assign(document.createElement("input"),{required:!0})),o||(o="value");let a={observedAttributes:["required"],message:t?.validationMessage,checkValidity(r){let s={message:"",isValid:!0,invalidKeys:[]};return(r.required??r.hasAttribute("required"))&&!r[o]&&(s.message=typeof a.message=="function"?a.message(r):a.message||"",s.isValid=!1,s.invalidKeys.push("valueMissing")),s}};return a};function vo(e,t){return new Promise(o=>{function a(r){r.target===e&&(e.removeEventListener(t,a),o())}e.addEventListener(t,a)})}function ye(e,t){return new Promise(o=>{let a=new AbortController,{signal:r}=a;if(e.classList.contains(t))return;e.classList.add(t);let s=!1,i=()=>{s||(s=!0,e.classList.remove(t),o(),a.abort())};e.addEventListener("animationend",i,{once:!0,signal:r}),e.addEventListener("animationcancel",i,{once:!0,signal:r}),requestAnimationFrame(()=>{!s&&e.getAnimations().length===0&&i()})})}var rt=class extends be{constructor(t){if(super(t),this.it=P,t.type!==Y.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===P||t==null)return this._t=void 0,this.it=t;if(t===T)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let o=[t];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}};rt.directiveName="unsafeHTML",rt.resultType=1;var or=Ie(rt);var y=class extends U{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.cachedOptions=null,this.hasSlotController=new xe(this,"hint","label"),this.localize=new q(this),this.selectionOrder=new Map,this.typeToSelectString="",this.slotChangePending=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="m",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=e=>S`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
          data-value=${e.value}
          @wa-remove=${t=>this.handleTagRemove(t,e)}
        >
          ${e.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,o=t.closest('[part~="clear-button"]')!==null,a=t.closest("wa-button")!==null;if(!(o||a)){if(e.key==="Escape"&&this.open&&at(this)&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let r=this.getAllOptions(),s=r.indexOf(this.currentOption),i=Math.max(0,s);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(i=s+1,i>r.length-1&&(i=0)):e.key==="ArrowUp"?(i=s-1,i<0&&(i=r.length-1)):e.key==="Home"?i=0:e.key==="End"&&(i=r.length-1),this.setCurrentOption(r[i])}if(e.key?.length===1||e.key==="Backspace"){let r=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let s of r)if(s.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){let e=[tr({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(e,t){return e==null&&t==null?!0:e==null||t==null||e.length!==t.length?!1:e.every((o,a)=>o===t[a])}convertDefaultValue(e){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]);let o=this._value;this._value=e??null,this.rawValuesEqual(o,this._value)||(this.valueHasChanged=!0,this.requestUpdate("value",t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),this.optionValues=new Set(this.getAllOptions().filter(o=>!o.disabled).map(o=>o.value));let t=e;return e!=null&&(t=e.filter(o=>this.optionValues.has(o)),t=this.multiple?t:t[0],t=t??null),t}handleSizeChange(){ge(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){let t=this.getAllOptions().filter(o=>o.hasAttribute("selected")||o.defaultSelected);if(t.length>0){let o=t.map(a=>a.value);this._defaultValue=this.multiple?o:o[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),qt(this),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),ot(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){let o=e.composedPath().some(a=>a instanceof Element&&a.tagName.toLowerCase()==="wa-button");this.disabled||o||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,this.value!==null&&(this.displayLabel="",this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new Ft),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let o=e.target.closest("wa-option");o&&!o.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){this.slotChangePending||(this.slotChangePending=!0,queueMicrotask(()=>{this.slotChangePending=!1,this.processSlotChange()}))}processSlotChange(){if(customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange()),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultSlotChange()});return}this.cachedOptions=null;let e=this.getAllOptions();this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);let o=e.filter(a=>t.includes(a.value));this.setSelectedOptions(o)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let o=t;if(!o){let a=e.target.closest("wa-tag[data-value]");if(a){let r=a.dataset.value;o=this.selectedOptions.find(s=>s.value===r)}}o&&(this.toggleOptionSelection(o,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this.cachedOptions?this.cachedOptions:this?.querySelectorAll?(this.cachedOptions=[...this.querySelectorAll("wa-option")],this.cachedOptions):[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(e){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus({preventScroll:!0}),this.open&&!this.listbox.hidden&&xo(e,this.listbox,"vertical","auto"))}setSelectedOptions(e){let t=this.getAllOptions(),o=Array.isArray(e)?e:[e];t.forEach(a=>{o.includes(a)||(a.selected=!1)}),o.length&&o.forEach(a=>a.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){let t=this.getAllOptions().filter(i=>{if(!this.hasInteracted&&!this.valueHasChanged){let n=this.defaultValue,f=Array.isArray(n)?n:[n];return i.hasAttribute("selected")||i.defaultSelected||i.selected||f?.includes(i.value)}return i.selected}),o=new Set(t.map(i=>i.value));for(let i of this.selectionOrder.keys())o.has(i)||this.selectionOrder.delete(i);let r=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(let i of t)this.selectionOrder.has(i.value)||this.selectionOrder.set(i.value,r++);this.selectedOptions=t.sort((i,n)=>{let f=this.selectionOrder.get(i.value)??0,u=this.selectionOrder.get(n.value)??0;return f-u});let s=new Set(this.selectedOptions.map(i=>i.value));if(s.size>0||this._value){let i=this._value;if(this._value==null){let n=this.defaultValue??[];this._value=Array.isArray(n)?n:[n]}this._value=this._value?.filter(n=>!this.optionValues?.has(n))??null,this._value?.unshift(...s),this.requestUpdate("value",i)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let i=this.selectedOptions[0];this.displayLabel=i?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let o=this.getTag(e,t);return o?typeof o=="string"?or(o):o:null}else if(t===this.maxOptionsVisible)return S`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-t}</wa-tag
          >
        `;return null})}updated(e){super.updated(e),(e.has("value")||e.has("displayLabel"))&&this.customStates.set("blank",!this.value&&!this.displayLabel)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],o=e.filter(a=>t.includes(a.value));this.setSelectedOptions(o),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let e=new Dt;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await ye(this.popup.popup,"show"),this.currentOption&&xo(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new Bt)}else{let e=new _t;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await ye(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Tt)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,vo(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,vo(this,"wa-after-hide")}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){let e=this.hasSlotController.test("label","withLabel"),t=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!e,a=this.hint?!0:!!t,r=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return S`
      <div
        part="form-control"
        class=${I({"form-control":!0,"form-control-has-label":o})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${I({label:!0,"has-label":o})}
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${I({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?S`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${r?S`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${I({"has-slotted":a})}
          aria-hidden=${a?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};y.css=[er,$t,ve];l([O(".select")],y.prototype,"popup",2);l([O(".combobox")],y.prototype,"combobox",2);l([O(".display-input")],y.prototype,"displayInput",2);l([O(".value-input")],y.prototype,"valueInput",2);l([O(".listbox")],y.prototype,"listbox",2);l([X()],y.prototype,"displayLabel",2);l([X()],y.prototype,"currentOption",2);l([X()],y.prototype,"selectedOptions",2);l([d({reflect:!0})],y.prototype,"name",2);l([d({attribute:!1})],y.prototype,"defaultValue",1);l([d({attribute:"value",reflect:!1})],y.prototype,"value",1);l([d({reflect:!0})],y.prototype,"size",2);l([$("size")],y.prototype,"handleSizeChange",1);l([d()],y.prototype,"placeholder",2);l([d({type:Boolean,reflect:!0})],y.prototype,"multiple",2);l([d({attribute:"max-options-visible",type:Number})],y.prototype,"maxOptionsVisible",2);l([d({type:Boolean})],y.prototype,"disabled",2);l([d({attribute:"with-clear",type:Boolean})],y.prototype,"withClear",2);l([d({type:Boolean,reflect:!0})],y.prototype,"open",2);l([d({reflect:!0})],y.prototype,"appearance",2);l([d({type:Boolean,reflect:!0})],y.prototype,"pill",2);l([d()],y.prototype,"label",2);l([d({reflect:!0})],y.prototype,"placement",2);l([d({attribute:"hint"})],y.prototype,"hint",2);l([d({attribute:"with-label",type:Boolean})],y.prototype,"withLabel",2);l([d({attribute:"with-hint",type:Boolean})],y.prototype,"withHint",2);l([d({type:Boolean,reflect:!0})],y.prototype,"required",2);l([d({attribute:!1})],y.prototype,"getTag",2);l([$("disabled",{waitUntilFirstUpdate:!0})],y.prototype,"handleDisabledChange",1);l([$("value",{waitUntilFirstUpdate:!0})],y.prototype,"handleValueChange",1);l([$("open",{waitUntilFirstUpdate:!0})],y.prototype,"handleOpenChange",1);y=l([R("wa-select")],y);y.disableWarning?.("change-in-update");var ar=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}};var rr=k`
  @layer wa-component {
    :host {
      display: inline-flex;
      gap: 0.5em;
      border-radius: var(--wa-border-radius-m);
      align-items: center;
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
      border-style: var(--wa-border-style);
      border-width: var(--wa-border-width-s);
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      font-size: inherit;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      -webkit-user-select: none;
      height: calc(var(--wa-form-control-height) * 0.8);
      line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      padding: 0 0.75em;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }

    :host([appearance='filled']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }

    :host([appearance='accent']) {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
  }

  .content {
    font-size: var(--wa-font-size-smaller);
  }

  [part='remove-button'] {
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      background-color: transparent;
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    background-color: transparent;
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`;var ce=class extends _{constructor(){super(...arguments),this.localize=new q(this),this.variant="neutral",this.appearance="filled-outlined",this.size="m",this.pill=!1,this.withRemove=!1}handleSizeChange(){ge(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new ar)}render(){return S`
      <slot part="content" class="content"></slot>

      ${this.withRemove?S`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              size=${this.size}
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          `:""}
    `}};ce.css=[rr,kt,ve];l([d({reflect:!0})],ce.prototype,"variant",2);l([d({reflect:!0})],ce.prototype,"appearance",2);l([d({reflect:!0})],ce.prototype,"size",2);l([$("size")],ce.prototype,"handleSizeChange",1);l([d({type:Boolean,reflect:!0})],ce.prototype,"pill",2);l([d({attribute:"with-remove",type:Boolean})],ce.prototype,"withRemove",2);ce=l([R("wa-tag")],ce);var sr=k`
  :host {
    --current-text-color: var(--wa-color-brand-on-loud);

    display: block;
    color: var(--wa-color-text-normal);
    -webkit-user-select: none;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    padding: 0.5em 1em 0.5em 0.25em;
    border-radius: var(--wa-border-radius-s);
    line-height: var(--wa-line-height-condensed);
    transition: var(--wa-transition-fast) background-color var(--wa-transition-easing);
    cursor: pointer;
  }

  :host(:focus) {
    outline: none;
  }

  @media (hover: hover) {
    :host(:not(:state(disabled), :state(current)):is(:state(hover), :hover)) {
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-on-normal);
    }
  }

  :host(:state(current)),
  :host(:state(disabled):state(current)) {
    background-color: var(--wa-form-control-activated-color);
    color: var(--current-text-color);
    opacity: 1;
  }

  :host(:state(disabled)) {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wa-font-size-smaller);
    visibility: hidden;
    width: 2em;
  }

  :host(:state(selected)) .check {
    visibility: visible;
  }

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start::slotted(*) {
    margin-inline-end: 0.5em;
  }

  .end::slotted(*) {
    margin-inline-start: 0.5em;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;function st(e,t=0){if(!e||!globalThis.Node)return"";if(typeof e[Symbol.iterator]=="function")return(Array.isArray(e)?e:[...e]).map(r=>st(r,--t)).join("");let o=e;if(o.nodeType===Node.TEXT_NODE)return o.textContent??"";if(o.nodeType===Node.ELEMENT_NODE){let a=o;if(a.hasAttribute("slot")||a.matches("style, script"))return"";if(a instanceof HTMLSlotElement){let r=a.assignedNodes({flatten:!0});if(r.length>0)return st(r,--t)}return t>-1?st(a,--t):a.textContent??""}return o.hasChildNodes()?st(o.childNodes,--t):""}var Z=class extends _{constructor(){super(...arguments),this.localize=new q(this),this.cachedDefaultLabel="",this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.handleHover=e=>{e.type==="mouseenter"?this.customStates.set("hover",!0):e.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(e){let t=this._label;this._label=e||"",this._label!==t&&this.requestUpdate("label",t)}get label(){return this._label?this._label:this.defaultLabel}get defaultLabel(){return(this.isDefaultLabelDirty||!this.cachedDefaultLabel)&&this.updateDefaultLabel(),this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.isDefaultLabelDirty=!0,this.isInitialized?(customElements.whenDefined("wa-select").then(()=>{let e=this.closest("wa-select");e&&e.handleDefaultSlotChange?.()}),customElements.whenDefined("wa-combobox").then(()=>{let e=this.closest("wa-combobox");e&&e.handleDefaultSlotChange?.()})):this.isInitialized=!0}willUpdate(e){e.has("defaultSelected")&&(this.didSSR&&this.hasUpdated||!this.didSSR)&&this.syncDefaultSelected(),super.willUpdate(e)}syncDefaultSelected(){if("closest"in this&&!this.closest("wa-combobox, wa-select")?.hasInteracted&&this.defaultSelected){let e=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",e)}}updated(e){e.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),e.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected)),e.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has("current")&&this.customStates.set("current",this.current),super.updated(e)}async firstUpdated(e){if(super.firstUpdated(e),this.didSSR&&!this.hasUpdated?(await this.updateComplete,this.syncDefaultSelected()):this.syncDefaultSelected(),this.selected&&!this.defaultSelected){let t=this.closest("wa-select, wa-combobox");t&&!t.hasInteracted&&(await customElements.whenDefined(t?.localName),await t.updateComplete,t.selectionChanged?.())}}updateDefaultLabel(){let e=this.cachedDefaultLabel;this.cachedDefaultLabel=st(this).trim(),this.isDefaultLabelDirty=!1;let t=this.cachedDefaultLabel!==e;return!this._label&&t&&this.requestUpdate("label",e),t}render(){let e=this.selected;return this.didSSR&&!this.hasUpdated?(this.updateComplete.then(()=>{this.requestUpdate()}),P):S`
      ${e?S`<wa-icon
            part="checked-icon"
            class="check"
            name="check"
            library="system"
            variant="solid"
            aria-hidden="true"
          ></wa-icon>`:S`<span part="checked-icon" class="check" aria-hidden="true"></span>`}
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};Z.css=sr;l([O(".label")],Z.prototype,"defaultSlot",2);l([X()],Z.prototype,"current",2);l([d({reflect:!0})],Z.prototype,"value",2);l([d({type:Boolean})],Z.prototype,"disabled",2);l([d({type:Boolean,attribute:!1})],Z.prototype,"selected",2);l([d({type:Boolean,attribute:"selected"})],Z.prototype,"defaultSelected",2);l([d()],Z.prototype,"label",1);Z=l([R("wa-option")],Z);var ir=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var lr=k`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;var re=Math.min,J=Math.max,lt=Math.round,nt=Math.floor,se=e=>({x:e,y:e}),$s={left:"right",right:"left",bottom:"top",top:"bottom"};function bo(e,t,o){return J(e,re(t,o))}function Re(e,t){return typeof e=="function"?e(t):e}function Ce(e){return e.split("-")[0]}function Oe(e){return e.split("-")[1]}function yo(e){return e==="x"?"y":"x"}function It(e){return e==="y"?"height":"width"}function ie(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function Ht(e){return yo(ie(e))}function dr(e,t,o){o===void 0&&(o=!1);let a=Oe(e),r=Ht(e),s=It(r),i=r==="x"?a===(o?"end":"start")?"right":"left":a==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(i=it(i)),[i,it(i)]}function ur(e){let t=it(e);return[Ut(e),t,Ut(t)]}function Ut(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var nr=["left","right"],fr=["right","left"],Rs=["top","bottom"],Os=["bottom","top"];function Ds(e,t,o){switch(e){case"top":case"bottom":return o?t?fr:nr:t?nr:fr;case"left":case"right":return t?Rs:Os;default:return[]}}function cr(e,t,o,a){let r=Oe(e),s=Ds(Ce(e),o==="start",a);return r&&(s=s.map(i=>i+"-"+r),t&&(s=s.concat(s.map(Ut)))),s}function it(e){let t=Ce(e);return $s[t]+e.slice(t.length)}function _s(e){var t,o,a,r;return{top:(t=e.top)!=null?t:0,right:(o=e.right)!=null?o:0,bottom:(a=e.bottom)!=null?a:0,left:(r=e.left)!=null?r:0}}function Co(e){return typeof e!="number"?_s(e):{top:e,right:e,bottom:e,left:e}}function De(e){let{x:t,y:o,width:a,height:r}=e;return{width:a,height:r,top:o,left:t,right:t+a,bottom:o+r,x:t,y:o}}function pr(e,t,o){let{reference:a,floating:r}=e,s=ie(t),i=Ht(t),n=It(i),f=Ce(t),u=s==="y",c=a.x+a.width/2-r.width/2,p=a.y+a.height/2-r.height/2,h=a[n]/2-r[n]/2,m;switch(f){case"top":m={x:c,y:a.y-r.height};break;case"bottom":m={x:c,y:a.y+a.height};break;case"right":m={x:a.x+a.width,y:p};break;case"left":m={x:a.x-r.width,y:p};break;default:m={x:a.x,y:a.y}}let w=Oe(t);return w&&(m[i]+=h*(w==="end"?1:-1)*(o&&u?-1:1)),m}async function mr(e,t){var o;t===void 0&&(t={});let{x:a,y:r,platform:s,rects:i,elements:n,strategy:f}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:p="floating",altBoundary:h=!1,padding:m=0}=Re(t,e),w=Co(m),C=n[h?p==="floating"?"reference":"floating":p],v=De(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(C)))==null||o?C:C.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(n.floating)),boundary:u,rootBoundary:c,strategy:f})),L=p==="floating"?{x:a,y:r,width:i.floating.width,height:i.floating.height}:i.reference,z=await(s.getOffsetParent==null?void 0:s.getOffsetParent(n.floating)),E=await(s.isElement==null?void 0:s.isElement(z))&&await(s.getScale==null?void 0:s.getScale(z))||{x:1,y:1},V=De(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:L,offsetParent:z,strategy:f}):L);return{top:(v.top-V.top+w.top)/E.y,bottom:(V.bottom-v.bottom+w.bottom)/E.y,left:(v.left-V.left+w.left)/E.x,right:(V.right-v.right+w.right)/E.x}}var Bs=50,hr=async(e,t,o)=>{let{placement:a="bottom",strategy:r="absolute",middleware:s=[],platform:i}=o,n=i.detectOverflow?i:{...i,detectOverflow:mr},f=await(i.isRTL==null?void 0:i.isRTL(t)),u=await i.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:p}=pr(u,a,f),h=a,m=0,w={};for(let g=0;g<s.length;g++){let C=s[g];if(!C)continue;let{name:v,fn:L}=C,{x:z,y:E,data:V,reset:F}=await L({x:c,y:p,initialPlacement:a,placement:h,strategy:r,middlewareData:w,rects:u,platform:n,elements:{reference:e,floating:t}});c=z??c,p=E??p,w[v]={...w[v],...V},F&&m<Bs&&(m++,typeof F=="object"&&(F.placement&&(h=F.placement),F.rects&&(u=F.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:r}):F.rects),{x:c,y:p}=pr(u,h,f)),g=-1)}return{x:c,y:p,placement:h,strategy:r,middlewareData:w}},wr=e=>({name:"arrow",options:e,async fn(t){let{x:o,y:a,placement:r,rects:s,platform:i,elements:n,middlewareData:f}=t,{element:u,padding:c=0}=Re(e,t)||{};if(u==null)return{};let p=Co(c),h={x:o,y:a},m=Ht(r),w=It(m),g=await i.getDimensions(u),C=m==="y",v=C?"top":"left",L=C?"bottom":"right",z=C?"clientHeight":"clientWidth",E=s.reference[w]+s.reference[m]-h[m]-s.floating[w],V=h[m]-s.reference[m],F=await(i.getOffsetParent==null?void 0:i.getOffsetParent(u)),N=F?F[z]:0;(!N||!await(i.isElement==null?void 0:i.isElement(F)))&&(N=n.floating[z]||s.floating[w]);let j=E/2-V/2,oe=N/2-g[w]/2-1,B=re(p[v],oe),We=re(p[L],oe),Xe=N-g[w]-We,ae=N/2-g[w]/2+j,G=bo(B,ae,Xe),Le=!f.arrow&&Oe(r)!=null&&ae!==G&&s.reference[w]/2-(ae<B?B:We)-g[w]/2<0,ne=Le?ae<B?ae-B:ae-Xe:0;return{[m]:h[m]+ne,data:{[m]:G,centerOffset:ae-G-ne,...Le&&{alignmentOffset:ne}},reset:Le}}});var gr=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,a;let{placement:r,middlewareData:s,rects:i,initialPlacement:n,platform:f,elements:u}=t,{mainAxis:c=!0,crossAxis:p=!0,fallbackPlacements:h,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:g=!0,...C}=Re(e,t);if((o=s.arrow)!=null&&o.alignmentOffset)return{};let v=Ce(r),L=ie(n),z=Ce(n)===n,E=await(f.isRTL==null?void 0:f.isRTL(u.floating)),V=h||(z||!g?[it(n)]:ur(n)),F=w!=="none";!h&&F&&V.push(...cr(n,g,w,E));let N=[n,...V],j=await f.detectOverflow(t,C),oe=[],B=((a=s.flip)==null?void 0:a.overflows)||[];if(c&&oe.push(j[v]),p){let G=dr(r,i,E);oe.push(j[G[0]],j[G[1]])}if(B=[...B,{placement:r,overflows:oe}],!oe.every(G=>G<=0)){var We,Xe;let G=(((We=s.flip)==null?void 0:We.index)||0)+1,Le=N[G];if(Le&&(!(p==="alignment"?L!==ie(Le):!1)||B.every(K=>ie(K.placement)===L?K.overflows[0]>0:!0)))return{data:{index:G,overflows:B},reset:{placement:Le}};let ne=(Xe=B.filter(Ae=>Ae.overflows[0]<=0).sort((Ae,K)=>Ae.overflows[1]-K.overflows[1])[0])==null?void 0:Xe.placement;if(!ne)switch(m){case"bestFit":{var ae;let Ae=(ae=B.filter(K=>{if(F){let he=ie(K.placement);return he===L||he==="y"}return!0}).map(K=>[K.placement,K.overflows.filter(he=>he>0).reduce((he,Zr)=>he+Zr,0)]).sort((K,he)=>K[1]-he[1])[0])==null?void 0:ae[0];Ae&&(ne=Ae);break}case"initialPlacement":ne=n;break}if(r!==ne)return{reset:{placement:ne}}}return{}}}};var Ts=new Set(["left","top"]);async function qs(e,t){let{placement:o,platform:a,elements:r}=e,s=await(a.isRTL==null?void 0:a.isRTL(r.floating)),i=Ce(o),n=Oe(o),f=ie(o)==="y",u=Ts.has(i)?-1:1,c=s&&f?-1:1,p=Re(t,e),{mainAxis:h,crossAxis:m,alignmentAxis:w}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return n&&typeof w=="number"&&(m=n==="end"?w*-1:w),f?{x:m*c,y:h*u}:{x:h*u,y:m*c}}var xr=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,a;let{x:r,y:s,placement:i,middlewareData:n}=t,f=await qs(t,e);return i===((o=n.offset)==null?void 0:o.placement)&&(a=n.arrow)!=null&&a.alignmentOffset?{}:{x:r+f.x,y:s+f.y,data:{...f,placement:i}}}}},vr=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:o,y:a,placement:r,platform:s}=t,{mainAxis:i=!0,crossAxis:n=!1,limiter:f={fn:L=>{let{x:z,y:E}=L;return{x:z,y:E}}},...u}=Re(e,t),c={x:o,y:a},p=await s.detectOverflow(t,u),h=ie(r),m=yo(h),w=c[m],g=c[h],C=(L,z)=>bo(z+p[L==="y"?"top":"left"],z,z-p[L==="y"?"bottom":"right"]);i&&(w=C(m,w)),n&&(g=C(h,g));let v=f.fn({...t,[m]:w,[h]:g});return{...v,data:{x:v.x-o,y:v.y-a,enabled:{[m]:i,[h]:n}}}}}};var br=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:o,rects:a,platform:r,elements:s}=t,{apply:i=()=>{},...n}=Re(e,t),f=await r.detectOverflow(t,n),u=Ce(o),c=Oe(o),p=ie(o)==="y",{width:h,height:m}=a.floating,w,g;u==="top"||u==="bottom"?(w=u,g=c===(await(r.isRTL==null?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(g=u,w=c==="end"?"top":"bottom");let C=m-f.top-f.bottom,v=h-f.left-f.right,L=re(m-f[w],C),z=re(h-f[g],v),E=t.middlewareData.shift,V=!E,F=L,N=z;E!=null&&E.enabled.x&&(N=v),E!=null&&E.enabled.y&&(F=C),V&&!c&&(p?N=h-2*J(f.left,f.right):F=m-2*J(f.top,f.bottom)),await i({...t,availableWidth:N,availableHeight:F});let j=await r.getDimensions(s.floating);return h!==j.width||m!==j.height?{reset:{rects:!0}}:{}}}};function Vt(){return typeof window<"u"}function Be(e){return Cr(e)?(e.nodeName||"").toLowerCase():"#document"}function H(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function le(e){var t;return(t=(Cr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Cr(e){return Vt()?e instanceof Node||e instanceof H(e).Node:!1}function Q(e){return Vt()?e instanceof Element||e instanceof H(e).Element:!1}function me(e){return Vt()?e instanceof HTMLElement||e instanceof H(e).HTMLElement:!1}function yr(e){return!Vt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof H(e).ShadowRoot}function ft(e){let{overflow:t,overflowX:o,overflowY:a,display:r}=ee(e);return/auto|scroll|overlay|hidden|clip/.test(t+a+o)&&r!=="inline"&&r!=="contents"}function Sr(e){return/^(table|td|th)$/.test(Be(e))}function dt(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var Us=/transform|translate|scale|rotate|perspective|filter/,Is=/paint|layout|strict|content/,_e=e=>!!e&&e!=="none",So;function He(e){let t=Q(e)?ee(e):e;return _e(t.transform)||_e(t.translate)||_e(t.scale)||_e(t.rotate)||_e(t.perspective)||!Nt()&&(_e(t.backdropFilter)||_e(t.filter))||Us.test(t.willChange||"")||Is.test(t.contain||"")}function Lr(e){let t=Se(e);for(;me(t)&&!Ve(t);){if(He(t))return t;if(dt(t))return null;t=Se(t)}return null}function Nt(){return So==null&&(So=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),So}function Ve(e){return/^(html|body|#document)$/.test(Be(e))}function ee(e){return H(e).getComputedStyle(e)}function ut(e){return Q(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Se(e){if(Be(e)==="html")return e;let t=e.assignedSlot||e.parentNode||yr(e)&&e.host||le(e);return yr(t)?t.host:t}function Ar(e){let t=Se(e);return Ve(t)?(e.ownerDocument||e).body:me(t)&&ft(t)?t:Ar(t)}function pe(e,t,o){var a;t===void 0&&(t=[]),o===void 0&&(o=!0);let r=Ar(e),s=r===((a=e.ownerDocument)==null?void 0:a.body),i=H(r);if(s){let n=Wt(i);return t.concat(i,i.visualViewport||[],ft(r)?r:[],n&&o?pe(n):[])}else return t.concat(r,pe(r,[],o))}function Wt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function zr(e){let t=ee(e),o=parseFloat(t.width)||0,a=parseFloat(t.height)||0,r=me(e),s=r?e.offsetWidth:o,i=r?e.offsetHeight:a,n=lt(o)!==s||lt(a)!==i;return n&&(o=s,a=i),{width:o,height:a,$:n}}function Ao(e){return Q(e)?e:e.contextElement}function Ne(e){let t=Ao(e);if(!me(t))return se(1);let o=t.getBoundingClientRect(),{width:a,height:r,$:s}=zr(t),i=(s?lt(o.width):o.width)/a,n=(s?lt(o.height):o.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!n||!Number.isFinite(n))&&(n=1),{x:i,y:n}}var Hs=se(0);function Er(e){let t=H(e);return!Nt()||!t.visualViewport?Hs:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Vs(e,t,o){return t===void 0&&(t=!1),!!o&&t&&o===H(e)}function Te(e,t,o,a){t===void 0&&(t=!1),o===void 0&&(o=!1);let r=e.getBoundingClientRect(),s=Ao(e),i=se(1);t&&(a?Q(a)&&(i=Ne(a)):i=Ne(e));let n=Vs(s,o,a)?Er(s):se(0),f=(r.left+n.x)/i.x,u=(r.top+n.y)/i.y,c=r.width/i.x,p=r.height/i.y;if(s&&a){let h=H(s),m=Q(a)?H(a):a,w=h,g=Wt(w);for(;g&&m!==w;){let C=Ne(g),v=g.getBoundingClientRect(),L=ee(g),z=v.left+(g.clientLeft+parseFloat(L.paddingLeft))*C.x,E=v.top+(g.clientTop+parseFloat(L.paddingTop))*C.y;f*=C.x,u*=C.y,c*=C.x,p*=C.y,f+=z,u+=E,w=H(g),g=Wt(w)}}return De({width:c,height:p,x:f,y:u})}function Xt(e,t){let o=ut(e).scrollLeft;return t?t.left+o:Te(le(e)).left+o}function Mr(e,t){let o=e.getBoundingClientRect(),a=o.left+t.scrollLeft-Xt(e,o),r=o.top+t.scrollTop;return{x:a,y:r}}function Ns(e){let{elements:t,rect:o,offsetParent:a,strategy:r}=e,s=r==="fixed",i=le(a),n=t?dt(t.floating):!1;if(a===i||n&&s)return o;let f={scrollLeft:0,scrollTop:0},u=se(1),c=se(0),p=me(a);if((p||!s)&&((Be(a)!=="body"||ft(i))&&(f=ut(a)),p)){let m=Te(a);u=Ne(a),c.x=m.x+a.clientLeft,c.y=m.y+a.clientTop}let h=i&&!p&&!s?Mr(i,f):se(0);return{width:o.width*u.x,height:o.height*u.y,x:o.x*u.x-f.scrollLeft*u.x+c.x+h.x,y:o.y*u.y-f.scrollTop*u.y+c.y+h.y}}function Ws(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Xs(e){let t=ut(e),o=e.ownerDocument.body,a=J(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=J(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight),s=-t.scrollLeft+Xt(e),i=-t.scrollTop;return ee(o).direction==="rtl"&&(s+=J(e.clientWidth,o.clientWidth)-a),{width:a,height:r,x:s,y:i}}var js=25;function Gs(e,t,o){o===void 0&&(o="viewport");let a=o==="layoutViewport",r=H(e),s=le(e),i=r.visualViewport,n=s.clientWidth,f=s.clientHeight,u=0,c=0;if(i){let h=!Nt()||t==="fixed";a?h||(u=-i.offsetLeft,c=-i.offsetTop):(n=i.width,f=i.height,h&&(u=i.offsetLeft,c=i.offsetTop))}if(Xt(s)<=0){let h=s.ownerDocument,m=h.body,w=getComputedStyle(m),g=h.compatMode==="CSS1Compat"&&parseFloat(w.marginLeft)+parseFloat(w.marginRight)||0,C=Math.abs(s.clientWidth-m.clientWidth-g),v=getComputedStyle(s).scrollbarGutter==="stable both-edges"?C/2:C;v<=js&&(n-=v)}return{width:n,height:f,x:u,y:c}}function Ks(e,t){let o=Te(e,!0,t==="fixed"),a=o.top+e.clientTop,r=o.left+e.clientLeft,s=Ne(e),i=e.clientWidth*s.x,n=e.clientHeight*s.y,f=r*s.x,u=a*s.y;return{width:i,height:n,x:f,y:u}}function kr(e,t,o){let a;if(t==="viewport"||t==="layoutViewport")a=Gs(e,o,t);else if(t==="document")a=Xs(le(e));else if(Q(t))a=Ks(t,o);else{let r=Er(e);a={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return De(a)}function Ys(e,t){let o=t.get(e);if(o)return o;let a=pe(e,[],!1).filter(n=>Q(n)&&Be(n)!=="body"),r=null,s=ee(e).position==="fixed",i=s?Se(e):e;for(;Q(i)&&!Ve(i);){let n=ee(i),f=He(i),u=r?r.position:s?"fixed":"";!f&&(u==="fixed"||u==="absolute"&&n.position==="static")?a=a.filter(p=>p!==i):r=n,i=Se(i)}return t.set(e,a),a}function Zs(e){let{element:t,boundary:o,rootBoundary:a,strategy:r}=e,i=[...o==="clippingAncestors"?dt(t)?[]:Ys(t,this._c):[].concat(o),a],n=kr(t,i[0],r),f=n.top,u=n.right,c=n.bottom,p=n.left;for(let h=1;h<i.length;h++){let m=kr(t,i[h],r);f=J(m.top,f),u=re(m.right,u),c=re(m.bottom,c),p=J(m.left,p)}return{width:u-p,height:c-f,x:p,y:f}}function Js(e){let{width:t,height:o}=zr(e);return{width:t,height:o}}function Qs(e,t,o){let a=me(t),r=le(t),s=o==="fixed",i=Te(e,!0,s,t),n={scrollLeft:0,scrollTop:0},f=se(0);if((a||!s)&&((Be(t)!=="body"||ft(r))&&(n=ut(t)),a)){let h=Te(t,!0,s,t);f.x=h.x+t.clientLeft,f.y=h.y+t.clientTop}!a&&r&&(f.x=Xt(r));let u=r&&!a&&!s?Mr(r,n):se(0),c=i.left+n.scrollLeft-f.x-u.x,p=i.top+n.scrollTop-f.y-u.y;return{x:c,y:p,width:i.width,height:i.height}}function Lo(e){return ee(e).position==="static"}function Pr(e,t){if(!me(e)||ee(e).position==="fixed")return null;if(t)return t(e);let o=e.offsetParent;return le(e)===o&&(o=o.ownerDocument.body),o}function Fr(e,t){let o=H(e);if(dt(e))return o;if(!me(e)){let r=Se(e);for(;r&&!Ve(r);){if(Q(r)&&!Lo(r))return r;r=Se(r)}return o}let a=Pr(e,t);for(;a&&Sr(a)&&Lo(a);)a=Pr(a,t);return a&&Ve(a)&&Lo(a)&&!He(a)?o:a||Lr(e)||o}var ei=async function(e){let t=this.getOffsetParent||Fr,o=this.getDimensions,a=await o(e.floating);return{reference:Qs(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function ti(e){return ee(e).direction==="rtl"}var ct={convertOffsetParentRelativeRectToViewportRelativeRect:Ns,getDocumentElement:le,getClippingRect:Zs,getOffsetParent:Fr,getElementRects:ei,getClientRects:Ws,getDimensions:Js,getScale:Ne,isElement:Q,isRTL:ti};function $r(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function oi(e,t,o){let a=null,r,s=le(e);function i(){var c;clearTimeout(r),(c=a)==null||c.disconnect(),a=null}function n(c,p){c===void 0&&(c=!1),p===void 0&&(p=1),i();let h=e.getBoundingClientRect(),{left:m,top:w,width:g,height:C}=h;if(c||t(),!g||!C)return;let v=nt(w),L=nt(s.clientWidth-(m+g)),z=nt(s.clientHeight-(w+C)),E=nt(m),F={rootMargin:-v+"px "+-L+"px "+-z+"px "+-E+"px",threshold:J(0,re(1,p))||1},N=!0;function j(oe){let B=oe[0].intersectionRatio;if(!$r(h,e.getBoundingClientRect()))return n();if(B!==p){if(!N)return n();B?n(!1,B):r=setTimeout(()=>{n(!1,1e-7)},1e3)}N=!1}try{a=new IntersectionObserver(j,{...F,root:s.ownerDocument})}catch{a=new IntersectionObserver(j,F)}a.observe(e)}let f=H(e),u=()=>n(o);return f.addEventListener("resize",u),n(!0),()=>{f.removeEventListener("resize",u),i()}}function Rr(e,t,o,a){a===void 0&&(a={});let{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:n=typeof IntersectionObserver=="function",animationFrame:f=!1}=a,u=Ao(e),c=r||s?[...u?pe(u):[],...t?pe(t):[]]:[];c.forEach(v=>{r&&v.addEventListener("scroll",o),s&&v.addEventListener("resize",o)});let p=u&&n?oi(u,o,s):null,h=-1,m=null;i&&(m=new ResizeObserver(v=>{let[L]=v;L&&L.target===u&&m&&t&&(m.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var z;(z=m)==null||z.observe(t)})),o()}),u&&!f&&m.observe(u),t&&m.observe(t));let w,g=f?Te(e):null;f&&C();function C(){let v=Te(e);g&&!$r(g,v)&&o(),g=v,w=requestAnimationFrame(C)}return o(),()=>{var v;c.forEach(L=>{r&&L.removeEventListener("scroll",o),s&&L.removeEventListener("resize",o)}),p?.(),(v=m)==null||v.disconnect(),m=null,f&&cancelAnimationFrame(w)}}var Or=xr;var Dr=vr,_r=gr,ko=br;var Br=wr;var Tr=(e,t,o)=>{let a=new Map,r=o??{},s={...ct,...r.platform,_c:a};return hr(e,t,{...r,platform:s})};function qr(e){return ai(e)}function Po(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function ai(e){for(let t=e;t;t=Po(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Po(e);t;t=Po(t)){if(!(t instanceof Element))continue;let o=getComputedStyle(t);if(o.display!=="contents"&&(o.position!=="static"||He(o)||t.tagName==="BODY"))return t}return null}function Ur(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var ri=!!globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),A=class extends _{constructor(){super(...arguments),this.localize=new q(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),a=0,r=0,s=0,i=0,n=0,f=0,u=0,c=0;o?e.top<t.top?(a=e.left,r=e.bottom,s=e.right,i=e.bottom,n=t.left,f=t.top,u=t.right,c=t.top):(a=t.left,r=t.bottom,s=t.right,i=t.bottom,n=e.left,f=e.top,u=e.right,c=e.top):e.left<t.left?(a=e.right,r=e.top,s=t.left,i=t.top,n=e.right,f=e.bottom,u=t.left,c=t.bottom):(a=t.right,r=t.top,s=e.left,i=e.top,n=t.right,f=t.bottom,u=e.left,c=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${a}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${i}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${f}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=ri,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Ur(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Rr(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[Or({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(ko({apply:({rects:a})=>{let r=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${a.reference.width}px`:"",this.popup.style.height=s?`${a.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let t;this.SUPPORTS_POPOVER&&!Ur(this.anchor)&&this.boundary==="scroll"&&(t=pe(this.anchorEl).filter(a=>a instanceof Element)),this.flip&&e.push(_r({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Dr({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(ko({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:a,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${a}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Br({element:this.arrowEl,padding:this.arrowPadding}));let o=this.SUPPORTS_POPOVER?a=>ct.getOffsetParent(a,qr):ct.getOffsetParent;Tr(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?"absolute":"fixed",platform:{...ct,getOffsetParent:o}}).then(({x:a,y:r,middlewareData:s,placement:i})=>{let n=this.localize.dir()==="rtl",f={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${a}px`,top:`${r}px`}),this.arrow){let u=s.arrow.x,c=s.arrow.y,p="",h="",m="",w="";if(this.arrowPlacement==="start"){let g=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=n?g:"",w=n?"":g}else if(this.arrowPlacement==="end"){let g=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=n?"":g,w=n?g:"",m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(w=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(w=typeof u=="number"?`${u}px`:"",p=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:p,right:h,bottom:m,left:w,[f]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new ir)}render(){return S`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${I({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${I({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?S`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};A.css=lr;l([O(".popup")],A.prototype,"popup",2);l([O(".arrow")],A.prototype,"arrowEl",2);l([d({attribute:!1,type:Boolean})],A.prototype,"SUPPORTS_POPOVER",2);l([d()],A.prototype,"anchor",2);l([d({type:Boolean,reflect:!0})],A.prototype,"active",2);l([d({reflect:!0})],A.prototype,"placement",2);l([d()],A.prototype,"boundary",2);l([d({type:Number})],A.prototype,"distance",2);l([d({type:Number})],A.prototype,"skidding",2);l([d({type:Boolean})],A.prototype,"arrow",2);l([d({attribute:"arrow-placement"})],A.prototype,"arrowPlacement",2);l([d({attribute:"arrow-padding",type:Number})],A.prototype,"arrowPadding",2);l([d({type:Boolean})],A.prototype,"flip",2);l([d({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],A.prototype,"flipFallbackPlacements",2);l([d({attribute:"flip-fallback-strategy"})],A.prototype,"flipFallbackStrategy",2);l([d({type:Object})],A.prototype,"flipBoundary",2);l([d({attribute:"flip-padding",type:Number})],A.prototype,"flipPadding",2);l([d({type:Boolean})],A.prototype,"shift",2);l([d({type:Object})],A.prototype,"shiftBoundary",2);l([d({attribute:"shift-padding",type:Number})],A.prototype,"shiftPadding",2);l([d({attribute:"auto-size"})],A.prototype,"autoSize",2);l([d()],A.prototype,"sync",2);l([d({type:Object})],A.prototype,"autoSizeBoundary",2);l([d({attribute:"auto-size-padding",type:Number})],A.prototype,"autoSizePadding",2);l([d({attribute:"hover-bridge",type:Boolean})],A.prototype,"hoverBridge",2);A=l([R("wa-popup")],A);var Ir=class{constructor(e,t){this.element=e,this.callback=t}start(...e){if(!!1){this.observer??(this.observer=new ResizeObserver(()=>this.check())),this.observer.observe(this.element);for(let t of e)this.observer.observe(t);this.initialCheckHandle??(this.initialCheckHandle=requestAnimationFrame(()=>{this.initialCheckHandle=void 0,this.check()}))}}stop(){this.initialCheckHandle!==void 0&&(cancelAnimationFrame(this.initialCheckHandle),this.initialCheckHandle=void 0),this.observer?.disconnect()}check(){this.callback(this.element.getClientRects().length>0)}};function Hr(e){return e.split(" ").map(t=>t.trim()).filter(t=>t!=="")}var Vr=k`
  :host {
    --width: 31rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: var(--width);
    max-width: calc(100% - var(--wa-space-2xl));
    max-height: calc(100% - var(--wa-space-2xl));
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-panel-border-radius);
    border: none;
    box-shadow: var(--wa-shadow-l);
    padding: 0;
    margin: auto;

    &.show {
      animation: show-dialog var(--show-duration) ease;

      &::backdrop {
        animation: show-backdrop var(--show-duration, 200ms) ease;
      }
    }

    &.hide {
      animation: show-dialog var(--hide-duration) ease reverse;

      &::backdrop {
        animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .dialog:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog {
      max-height: 80vh;
    }
  }

  .open {
    display: flex;
    opacity: 1;
  }

  .header {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;

    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:first-of-type)) {
    margin-inline-start: var(--wa-spacing-xs);
  }

  .dialog::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-dialog {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .dialog {
      border: solid 1px white;
    }
  }
`;var te=class extends _{constructor(){super(...arguments),this.localize=new q(this),this.hasSlotController=new xe(this,"footer","header-actions","label"),this.renderedWatcher=new Ir(this,e=>this.handleRenderedChange(e)),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&at(this)&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(e){super.firstUpdated(e),this.open&&(this.addOpenListeners(),this.dialog.showModal(),Rt(this),this.renderedWatcher.start(this.dialog))}disconnectedCallback(){super.disconnectedCallback(),this.renderedWatcher.stop(),Ot(this),this.removeOpenListeners()}async requestClose(e){let t=new _t({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,ye(this.dialog,"pulse");return}this.removeOpenListeners(),await ye(this.dialog,"hide"),this.open=!1,this.dialog.close(),Ot(this),this.renderedWatcher.stop();let o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.dispatchEvent(new Tt)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),qt(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),ot(this)}handleDialogCancel(e){e.preventDefault(),!this.dialog.classList.contains("hide")&&e.target===this.dialog&&at(this)&&this.requestClose(this.dialog)}handleDialogClick(e){let o=e.target.closest('[data-dialog="close"]');o&&(e.stopPropagation(),this.requestClose(o))}async handleDialogPointerDown(e){e.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await ye(this.dialog,"pulse"))}handleRenderedChange(e){if(!this.open){this.renderedWatcher.stop();return}!e&&this.dialog.open?(this.removeOpenListeners(),this.dialog.close(),Ot(this)):e&&!this.dialog.open&&(this.addOpenListeners(),this.dialog.showModal(),Rt(this))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open?(this.open=!0,this.requestClose(this.dialog)):this.open||this.renderedWatcher.stop()}async show(){let e=new Dt;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Rt(this),this.renderedWatcher.start(this.dialog),requestAnimationFrame(()=>{let t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.dialog.focus()}),await ye(this.dialog,"show"),this.dispatchEvent(new Bt)}render(){let e=!this.withoutHeader,t=this.hasSlotController.test("footer","withFooter");return S`
      <dialog
        part="dialog"
        class=${I({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?S`
              <div part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"\u200B"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${o=>this.requestClose(o.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </div>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        <!-- Use a hidden element so we still get "slotchange" events. -->
        <div part="footer" class="footer" ?hidden=${!t}>
          <slot name="footer"></slot>
        </div>
      </dialog>
    `}};te.css=Vr;l([O(".dialog")],te.prototype,"dialog",2);l([d({type:Boolean,reflect:!0})],te.prototype,"open",2);l([d({reflect:!0})],te.prototype,"label",2);l([d({attribute:"without-header",type:Boolean,reflect:!0})],te.prototype,"withoutHeader",2);l([d({attribute:"light-dismiss",type:Boolean})],te.prototype,"lightDismiss",2);l([d({attribute:"with-footer",type:Boolean})],te.prototype,"withFooter",2);l([$("open",{waitUntilFirstUpdate:!0})],te.prototype,"handleOpenChange",1);te=l([R("wa-dialog")],te);document.addEventListener("click",e=>{let t=e.target.closest("[data-dialog]");if(t instanceof Element){let[o,a]=Hr(t.getAttribute("data-dialog")||"");if(o==="open"&&a?.length){let s=t.getRootNode().getElementById(a);s?.localName==="wa-dialog"?s.open=!0:console.warn(`A dialog with an ID of "${a}" could not be found in this document.`)}}}),document.addEventListener("pointerdown",()=>{});var jt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Nr=([e,t,o])=>{let a=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(r=>{a.setAttribute(r,String(t[r]))}),o?.length&&o.forEach(r=>{let s=Nr(r);a.appendChild(s)}),a},Wr=(e,t={})=>{let a={...jt,...t};return Nr(["svg",a,e])};var Xr=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var jr=(...e)=>e.filter((t,o,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===o).join(" ").trim();var Gr=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,a)=>a?a.toUpperCase():o.toLowerCase());var Kr=e=>{let t=Gr(e);return t.charAt(0).toUpperCase()+t.slice(1)};var si=e=>Array.from(e.attributes).reduce((t,o)=>(t[o.name]=o.value,t),{}),Yr=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",zo=(e,{nameAttr:t,icons:o,attrs:a})=>{let r=e.getAttribute(t);if(r==null)return;let s=Kr(r),i=o[s];if(!i)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let n=si(e),f=Xr(n)?{}:{"aria-hidden":"true"},u={...jt,"data-lucide":r,...f,...a,...n},c=Yr(n),p=Yr(a),h=jr("lucide",`lucide-${r}`,...c,...p);h&&Object.assign(u,{class:h});let m=Wr(i,u);return e.parentNode?.replaceChild(m,e)};var Eo=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];var Mo=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];var Fo=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]];var $o=[["path",{d:"M12 18V5"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77"}]];var Ro=[["path",{d:"M10 12h4"}],["path",{d:"M10 8h4"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}]];var Oo=[["path",{d:"M8 2v3"}],["path",{d:"M16 2v3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M8 13h.01"}],["path",{d:"M12 13h.01"}],["path",{d:"M16 13h.01"}],["path",{d:"M8 17h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M16 17h.01"}]];var Do=[["path",{d:"M20 6 9 17l-5-5"}]];var _o=[["path",{d:"m9 18 6-6-6-6"}]];var Bo=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}],["path",{d:"M12 17v-6"}]];var To=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]];var qo=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];var Uo=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"}]];var Gt=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];var Io=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];var Ho=[["path",{d:"m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"}],["path",{d:"M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"}],["circle",{cx:"13",cy:"7",r:"1",fill:"currentColor"}],["rect",{x:"8",y:"2",width:"14",height:"14",rx:"2"}]];var Vo=[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]];var No=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]];var Wo=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];var Xo=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];var jo=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];var Go=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]];var Ko=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];var Yo=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];var Zo=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];var Kt=[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]];var Yt=[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]];var Jo=({icons:e={},nameAttr:t="data-lucide",attrs:o={},root:a=document,inTemplates:r}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof a>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(a.querySelectorAll(`[${t}]`)).forEach(i=>zo(i,{nameAttr:t,icons:e,attrs:o})),r&&Array.from(a.querySelectorAll("template")).forEach(n=>Jo({icons:e,nameAttr:t,attrs:o,root:n.content,inTemplates:r})),t==="data-lucide"){let i=a.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(n=>zo(n,{nameAttr:"icon-name",icons:e,attrs:o})))}};function Qo(){Jo({icons:{CreditCard:To,Building2:Ro,ClipboardPlus:Bo,Gamepad2:qo,UsersRound:Yt,Image:Io,Pill:Go,Brain:$o,Phone:jo,Images:Ho,Mic:Wo,ChevronRight:_o,House:Gt,HeartHandshake:Uo,CalendarDays:Oo,Settings:Ko,LayoutDashboard:No,Bell:Fo,ShieldCheck:Yo,ArrowLeft:Eo,UserRound:Kt,Check:Do,Sun:Zo,Moon:Xo,Languages:Vo,ArrowUpRight:Mo},attrs:{"stroke-width":1.8,"aria-hidden":"true"}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Qo):Qo();document.addEventListener("careloop-icons",Qo);
/*! Bundled license information:

@awesome.me/webawesome/dist/chunks/chunk.R7QX4M6R.js:
@awesome.me/webawesome/dist/chunks/chunk.VC3BPUZJ.js:
@awesome.me/webawesome/dist/chunks/chunk.7VGCIHDG.js:
@awesome.me/webawesome/dist/chunks/chunk.AOKMSJXD.js:
@awesome.me/webawesome/dist/chunks/chunk.KBXNFZQL.js:
@awesome.me/webawesome/dist/chunks/chunk.RPQJAXXR.js:
@awesome.me/webawesome/dist/chunks/chunk.RWNXKUCF.js:
@awesome.me/webawesome/dist/chunks/chunk.G5ZZIGWB.js:
@awesome.me/webawesome/dist/chunks/chunk.S35PLDPD.js:
@awesome.me/webawesome/dist/chunks/chunk.XNTP7DEQ.js:
@awesome.me/webawesome/dist/chunks/chunk.PZAN6FPN.js:
@awesome.me/webawesome/dist/chunks/chunk.KQHZRDPB.js:
@awesome.me/webawesome/dist/chunks/chunk.56IHH3HP.js:
@awesome.me/webawesome/dist/chunks/chunk.5PQVPZTW.js:
@awesome.me/webawesome/dist/chunks/chunk.W7A2VLCT.js:
@awesome.me/webawesome/dist/chunks/chunk.DVA7QY5T.js:
@awesome.me/webawesome/dist/chunks/chunk.YDQCS2HK.js:
@awesome.me/webawesome/dist/chunks/chunk.WDIIGUNP.js:
@awesome.me/webawesome/dist/chunks/chunk.O74G5RVH.js:
@awesome.me/webawesome/dist/chunks/chunk.HGBRCPUS.js:
@awesome.me/webawesome/dist/chunks/chunk.KKI7M5DP.js:
@awesome.me/webawesome/dist/chunks/chunk.44TPNLVU.js:
@awesome.me/webawesome/dist/chunks/chunk.ZRLTNBWF.js:
@awesome.me/webawesome/dist/chunks/chunk.AL6UNYSC.js:
@awesome.me/webawesome/dist/components/button/button.js:
@awesome.me/webawesome/dist/chunks/chunk.JTOY5KP3.js:
@awesome.me/webawesome/dist/chunks/chunk.NUVDWQN5.js:
@awesome.me/webawesome/dist/chunks/chunk.3ZKPD2O5.js:
@awesome.me/webawesome/dist/chunks/chunk.JPBXG7RE.js:
@awesome.me/webawesome/dist/chunks/chunk.EL5UNQU3.js:
@awesome.me/webawesome/dist/components/input/input.js:
@awesome.me/webawesome/dist/chunks/chunk.7KLMRZOI.js:
@awesome.me/webawesome/dist/chunks/chunk.VQZ46MYI.js:
@awesome.me/webawesome/dist/chunks/chunk.4ZAKP7NY.js:
@awesome.me/webawesome/dist/chunks/chunk.MQODJ75V.js:
@awesome.me/webawesome/dist/chunks/chunk.PX3HMKF7.js:
@awesome.me/webawesome/dist/chunks/chunk.3NKIHICW.js:
@awesome.me/webawesome/dist/chunks/chunk.3H2FQERJ.js:
@awesome.me/webawesome/dist/chunks/chunk.GWSUX3V5.js:
@awesome.me/webawesome/dist/chunks/chunk.F25QOBDY.js:
@awesome.me/webawesome/dist/chunks/chunk.L6CIKOFQ.js:
@awesome.me/webawesome/dist/chunks/chunk.CWBSN34U.js:
@awesome.me/webawesome/dist/chunks/chunk.HPULLNVR.js:
@awesome.me/webawesome/dist/chunks/chunk.4AHPL3WP.js:
@awesome.me/webawesome/dist/chunks/chunk.37OOIOGE.js:
@awesome.me/webawesome/dist/chunks/chunk.C3KOHXUM.js:
@awesome.me/webawesome/dist/chunks/chunk.B632VLM3.js:
@awesome.me/webawesome/dist/chunks/chunk.ZWQCGLB5.js:
@awesome.me/webawesome/dist/chunks/chunk.HS5AYC6E.js:
@awesome.me/webawesome/dist/chunks/chunk.64OG2H45.js:
@awesome.me/webawesome/dist/components/select/select.js:
@awesome.me/webawesome/dist/components/option/option.js:
@awesome.me/webawesome/dist/chunks/chunk.HKHINDC2.js:
@awesome.me/webawesome/dist/chunks/chunk.RMZ7BVDM.js:
@awesome.me/webawesome/dist/chunks/chunk.XTG2LNFG.js:
@awesome.me/webawesome/dist/chunks/chunk.WNMOBTJK.js:
@awesome.me/webawesome/dist/components/dialog/dialog.js:
  (*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
lit-html/directive-helpers.js:
lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lucide/dist/esm/defaultAttributes.mjs:
lucide/dist/esm/createElement.mjs:
lucide/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide/dist/esm/replaceElement.mjs:
lucide/dist/esm/icons/arrow-left.mjs:
lucide/dist/esm/icons/arrow-up-right.mjs:
lucide/dist/esm/icons/bell.mjs:
lucide/dist/esm/icons/brain.mjs:
lucide/dist/esm/icons/building-2.mjs:
lucide/dist/esm/icons/calendar-days.mjs:
lucide/dist/esm/icons/check.mjs:
lucide/dist/esm/icons/chevron-right.mjs:
lucide/dist/esm/icons/clipboard-plus.mjs:
lucide/dist/esm/icons/credit-card.mjs:
lucide/dist/esm/icons/gamepad-2.mjs:
lucide/dist/esm/icons/heart-handshake.mjs:
lucide/dist/esm/icons/house.mjs:
lucide/dist/esm/icons/image.mjs:
lucide/dist/esm/icons/images.mjs:
lucide/dist/esm/icons/languages.mjs:
lucide/dist/esm/icons/layout-dashboard.mjs:
lucide/dist/esm/icons/mic.mjs:
lucide/dist/esm/icons/moon.mjs:
lucide/dist/esm/icons/phone.mjs:
lucide/dist/esm/icons/pill.mjs:
lucide/dist/esm/icons/settings.mjs:
lucide/dist/esm/icons/shield-check.mjs:
lucide/dist/esm/icons/sun.mjs:
lucide/dist/esm/icons/user-round.mjs:
lucide/dist/esm/icons/users-round.mjs:
lucide/dist/esm/lucide.mjs:
  (**
   * @license lucide v1.41.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
