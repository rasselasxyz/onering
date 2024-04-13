(()=>{var Ee=[{name:"siqu",url:"https://siqu.neocities.org/",description:"how useful it is to be useless"},{name:"oiwa",url:"https://oiwa.neocities.org/",description:"tramontane"},{name:"suboptimalism",url:"https://suboptimalism.neocities.org/",description:"incomplete perfection; complete imperfection"}];var ue=globalThis,Y=ue.trustedTypes,Pe=Y?Y.createPolicy("lit-html",{createHTML:t=>t}):void 0,pe="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,ge="?"+w,St=`<${ge}>`,z=document,D=()=>z.createComment(""),H=t=>t===null||typeof t!="object"&&typeof t!="function",Re=Array.isArray,Ie=t=>Re(t)||typeof t?.[Symbol.iterator]=="function",de=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ze=/-->/g,ke=/>/g,E=RegExp(`>|${de}(?:([^\\s"'>=/]+)(${de}*=${de}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Le=/'/g,Te=/"/g,Ue=/^(?:script|style|textarea|title)$/i,Oe=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),f=Oe(1),Jt=Oe(2),$=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Me=new WeakMap,P=z.createTreeWalker(z,129);function Ne(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pe!==void 0?Pe.createHTML(e):e}var De=(t,e)=>{let s=t.length-1,o=[],r,l=e===2?"<svg>":"",i=N;for(let a=0;a<s;a++){let n=t[a],d,g,h=-1,_=0;for(;_<n.length&&(i.lastIndex=_,g=i.exec(n),g!==null);)_=i.lastIndex,i===N?g[1]==="!--"?i=ze:g[1]!==void 0?i=ke:g[2]!==void 0?(Ue.test(g[2])&&(r=RegExp("</"+g[2],"g")),i=E):g[3]!==void 0&&(i=E):i===E?g[0]===">"?(i=r??N,h=-1):g[1]===void 0?h=-2:(h=i.lastIndex-g[2].length,d=g[1],i=g[3]===void 0?E:g[3]==='"'?Te:Le):i===Te||i===Le?i=E:i===ze||i===ke?i=N:(i=E,r=void 0);let A=i===E&&t[a+1].startsWith("/>")?" ":"";l+=i===N?n+St:h>=0?(o.push(d),n.slice(0,h)+pe+n.slice(h)+w+A):n+w+(h===-2?a:A)}return[Ne(t,l+(t[s]||"<?>")+(e===2?"</svg>":"")),o]},B=class t{constructor({strings:e,_$litType$:s},o){let r;this.parts=[];let l=0,i=0,a=e.length-1,n=this.parts,[d,g]=De(e,s);if(this.el=t.createElement(d,o),P.currentNode=this.el.content,s===2){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=P.nextNode())!==null&&n.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let h of r.getAttributeNames())if(h.endsWith(pe)){let _=g[i++],A=r.getAttribute(h).split(w),J=/([.?@])?(.*)/.exec(_);n.push({type:1,index:l,name:J[2],strings:A,ctor:J[1]==="."?X:J[1]==="?"?ee:J[1]==="@"?te:L}),r.removeAttribute(h)}else h.startsWith(w)&&(n.push({type:6,index:l}),r.removeAttribute(h));if(Ue.test(r.tagName)){let h=r.textContent.split(w),_=h.length-1;if(_>0){r.textContent=Y?Y.emptyScript:"";for(let A=0;A<_;A++)r.append(h[A],D()),P.nextNode(),n.push({type:2,index:++l});r.append(h[_],D())}}}else if(r.nodeType===8)if(r.data===ge)n.push({type:2,index:l});else{let h=-1;for(;(h=r.data.indexOf(w,h+1))!==-1;)n.push({type:7,index:l}),h+=w.length-1}l++}}static createElement(e,s){let o=z.createElement("template");return o.innerHTML=e,o}};function k(t,e,s=t,o){if(e===$)return e;let r=o!==void 0?s._$Co?.[o]:s._$Cl,l=H(e)?void 0:e._$litDirective$;return r?.constructor!==l&&(r?._$AO?.(!1),l===void 0?r=void 0:(r=new l(t),r._$AT(t,s,o)),o!==void 0?(s._$Co??=[])[o]=r:s._$Cl=r),r!==void 0&&(e=k(t,r._$AS(t,e.values),r,o)),e}var Q=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:s},parts:o}=this._$AD,r=(e?.creationScope??z).importNode(s,!0);P.currentNode=r;let l=P.nextNode(),i=0,a=0,n=o[0];for(;n!==void 0;){if(i===n.index){let d;n.type===2?d=new R(l,l.nextSibling,this,e):n.type===1?d=new n.ctor(l,n.name,n.strings,this,e):n.type===6&&(d=new se(l,this,e)),this._$AV.push(d),n=o[++a]}i!==n?.index&&(l=P.nextNode(),i++)}return P.currentNode=z,r}p(e){let s=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,s),s+=o.strings.length-2):o._$AI(e[s])),s++}},R=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,o,r){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=k(this,e,s),H(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==$&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ie(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==m&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=B.createElement(Ne(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(s);else{let l=new Q(r,this),i=l.u(this.options);l.p(s),this.T(i),this._$AH=l}}_$AC(e){let s=Me.get(e.strings);return s===void 0&&Me.set(e.strings,s=new B(e)),s}k(e){Re(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,o,r=0;for(let l of e)r===s.length?s.push(o=new t(this.S(D()),this.S(D()),this,this.options)):o=s[r],o._$AI(l),r++;r<s.length&&(this._$AR(o&&o._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e&&e!==this._$AB;){let o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},L=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,o,r,l){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=l,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=m}_$AI(e,s=this,o,r){let l=this.strings,i=!1;if(l===void 0)e=k(this,e,s,0),i=!H(e)||e!==this._$AH&&e!==$,i&&(this._$AH=e);else{let a=e,n,d;for(e=l[0],n=0;n<l.length-1;n++)d=k(this,a[o+n],s,n),d===$&&(d=this._$AH[n]),i||=!H(d)||d!==this._$AH[n],d===m?e=m:e!==m&&(e+=(d??"")+l[n+1]),this._$AH[n]=d}i&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},X=class extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},ee=class extends L{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},te=class extends L{constructor(e,s,o,r,l){super(e,s,o,r,l),this.type=5}_$AI(e,s=this){if((e=k(this,e,s,0)??m)===$)return;let o=this._$AH,r=e===m&&o!==m||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,l=e!==m&&(o===m||r);r&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},se=class{constructor(e,s,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}},He={P:pe,A:w,C:ge,M:1,L:De,R:Q,D:Ie,V:k,I:R,H:L,N:ee,U:te,B:X,F:se},At=ue.litHtmlPolyfillSupport;At?.(B,R),(ue.litHtmlVersions??=[]).push("3.1.2");var j=(t,e,s)=>{let o=s?.renderBefore??e,r=o._$litPart$;if(r===void 0){let l=s?.renderBefore??null;o._$litPart$=r=new R(e.insertBefore(D(),l),l,void 0,s??{})}return r._$AI(t),r};function me(t,e,s){let o=r=>Object.is(r,-0)?0:r;return t<e?o(e):t>s?o(s):o(t)}var Be=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};var oe=globalThis,re=oe.ShadowRoot&&(oe.ShadyCSS===void 0||oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),je=new WeakMap,q=class{constructor(e,s,o){if(this._$cssResult$=!0,o!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o,s=this.t;if(re&&e===void 0){let o=s!==void 0&&s.length===1;o&&(e=je.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&je.set(s,e))}return e}toString(){return this.cssText}},qe=t=>new q(typeof t=="string"?t:t+"",void 0,fe),v=(t,...e)=>{let s=t.length===1?t[0]:e.reduce((o,r,l)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[l+1],t[0]);return new q(s,t,fe)},ve=(t,e)=>{if(re)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let o=document.createElement("style"),r=oe.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=s.cssText,t.appendChild(o)}},le=re?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let o of e.cssRules)s+=o.cssText;return qe(s)})(t):t;var{is:Ct,defineProperty:Et,getOwnPropertyDescriptor:Pt,getOwnPropertyNames:zt,getOwnPropertySymbols:kt,getPrototypeOf:Lt}=Object,ie=globalThis,Ve=ie.trustedTypes,Tt=Ve?Ve.emptyScript:"",Mt=ie.reactiveElementPolyfillSupport,V=(t,e)=>t,F={toAttribute(t,e){switch(e){case Boolean:t=t?Tt:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ne=(t,e)=>!Ct(t,e),Fe={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:ne};Symbol.metadata??=Symbol("metadata"),ie.litPropertyMetadata??=new WeakMap;var x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Fe){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(e,s),!s.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(e,o,s);r!==void 0&&Et(this.prototype,e,r)}}static getPropertyDescriptor(e,s,o){let{get:r,set:l}=Pt(this.prototype,e)??{get(){return this[s]},set(i){this[s]=i}};return{get(){return r?.call(this)},set(i){let a=r?.call(this);l.call(this,i),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Fe}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;let e=Lt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){let s=this.properties,o=[...zt(s),...kt(s)];for(let r of o)this.createProperty(r,s[r])}let e=this[Symbol.metadata];if(e!==null){let s=litPropertyMetadata.get(e);if(s!==void 0)for(let[o,r]of s)this.elementProperties.set(o,r)}this._$Eh=new Map;for(let[s,o]of this.elementProperties){let r=this._$Eu(s,o);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let s=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let r of o)s.unshift(le(r))}else e!==void 0&&s.push(le(e));return s}static _$Eu(e,s){let o=s.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,s=this.constructor.elementProperties;for(let o of s.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ve(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,o){this._$AK(e,o)}_$EC(e,s){let o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(r!==void 0&&o.reflect===!0){let l=(o.converter?.toAttribute!==void 0?o.converter:F).toAttribute(s,o.type);this._$Em=e,l==null?this.removeAttribute(r):this.setAttribute(r,l),this._$Em=null}}_$AK(e,s){let o=this.constructor,r=o._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let l=o.getPropertyOptions(r),i=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:F;this._$Em=r,this[r]=i.fromAttribute(s,l.type),this._$Em=null}}requestUpdate(e,s,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??ne)(this[e],s))return;this.P(e,s,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,s,o){this._$AL.has(e)||this._$AL.set(e,s),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,l]of this._$Ep)this[r]=l;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[r,l]of o)l.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],l)}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(s)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(s=>this._$EC(s,this[s])),this._$EU()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[V("elementProperties")]=new Map,x[V("finalized")]=new Map,Mt?.({ReactiveElement:x}),(ie.reactiveElementVersions??=[]).push("2.0.4");var C=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=j(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $}};C._$litElement$=!0,C.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:C});var Rt=globalThis.litElementPolyfillSupport;Rt?.({LitElement:C});(globalThis.litElementVersions??=[]).push("4.0.4");var We=v`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;function Ke(t,e){return new Promise(s=>{function o(r){r.target===t&&(t.removeEventListener(e,o),s())}t.addEventListener(e,o)})}var Je=Object.defineProperty;var It=Object.getOwnPropertyDescriptor;var Ze=Object.getOwnPropertySymbols,Ut=Object.prototype.hasOwnProperty,Ot=Object.prototype.propertyIsEnumerable;var Ge=(t,e,s)=>e in t?Je(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,W=(t,e)=>{for(var s in e||(e={}))Ut.call(e,s)&&Ge(t,s,e[s]);if(Ze)for(var s of Ze(e))Ot.call(e,s)&&Ge(t,s,e[s]);return t};var c=(t,e,s,o)=>{for(var r=o>1?void 0:o?It(e,s):e,l=t.length-1,i;l>=0;l--)(i=t[l])&&(r=(o?i(e,s,r):i(r))||r);return o&&r&&Je(e,s,r),r};function ye(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}var be=new Set,Nt=new MutationObserver(Xe),I=new Map,Ye=document.documentElement.dir||"ltr",Qe=document.documentElement.lang||navigator.language,T;Nt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function K(...t){t.map(e=>{let s=e.$code.toLowerCase();I.has(s)?I.set(s,Object.assign(Object.assign({},I.get(s)),e)):I.set(s,e),T||(T=e)}),Xe()}function Xe(){Ye=document.documentElement.dir||"ltr",Qe=document.documentElement.lang||navigator.language,[...be.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var ae=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){be.add(this.host)}hostDisconnected(){be.delete(this.host)}dir(){return`${this.host.dir||Ye}`.toLowerCase()}lang(){return`${this.host.lang||Qe}`.toLowerCase()}getTranslationData(e){var s,o;let r=new Intl.Locale(e.replace(/_/g,"-")),l=r?.language.toLowerCase(),i=(o=(s=r?.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&o!==void 0?o:"",a=I.get(`${l}-${i}`),n=I.get(l);return{locale:r,language:l,region:i,primary:a,secondary:n}}exists(e,s){var o;let{primary:r,secondary:l}=this.getTranslationData((o=s.lang)!==null&&o!==void 0?o:this.lang());return s=Object.assign({includeFallback:!1},s),!!(r&&r[e]||l&&l[e]||s.includeFallback&&T&&T[e])}term(e,...s){let{primary:o,secondary:r}=this.getTranslationData(this.lang()),l;if(o&&o[e])l=o[e];else if(r&&r[e])l=r[e];else if(T&&T[e])l=T[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof l=="function"?l(...s):l}date(e,s){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),s).format(e)}number(e,s){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),s).format(e)}relativeTime(e,s,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,s)}};var et={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};K(et);var tt=et;var st=class extends ae{};K(tt);var _e="";function ot(t){_e=t}function rt(t=""){if(!_e){let e=[...document.getElementsByTagName("script")],s=e.find(o=>o.hasAttribute("data-shoelace"));if(s)ot(s.getAttribute("data-shoelace"));else{let o=e.find(l=>/shoelace(\.min)?\.js($|\?)/.test(l.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(l.src)),r="";o&&(r=o.getAttribute("src")),ot(r.split("/").slice(0,-1).join("/"))}}return _e.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Dt={name:"default",resolver:t=>rt(`assets/icons/${t}.svg`)},lt=Dt;var it={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ht={name:"system",resolver:t=>t in it?`data:image/svg+xml,${encodeURIComponent(it[t])}`:""},nt=Ht;var Bt=[lt,nt],we=[];function at(t){we.push(t)}function ct(t){we=we.filter(e=>e!==t)}function $e(t){return Bt.find(e=>e.name===t)}var ht=v`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function S(t,e){let s=W({waitUntilFirstUpdate:!1},e);return(o,r)=>{let{update:l}=o,i=Array.isArray(t)?t:[t];o.update=function(a){i.forEach(n=>{let d=n;if(a.has(d)){let g=a.get(d),h=this[d];g!==h&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[r](g,h)}}),l.call(this,a)}}}var U=v`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var jt={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:ne},qt=(t=jt,e,s)=>{let{kind:o,metadata:r}=s,l=globalThis.litPropertyMetadata.get(r);if(l===void 0&&globalThis.litPropertyMetadata.set(r,l=new Map),l.set(s.name,t),o==="accessor"){let{name:i}=s;return{set(a){let n=e.get.call(this);e.set.call(this,a),this.requestUpdate(i,n,t)},init(a){return a!==void 0&&this.P(i,void 0,t),a}}}if(o==="setter"){let{name:i}=s;return function(a){let n=this[i];e.call(this,a),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+o)};function p(t){return(e,s)=>typeof s=="object"?qt(t,e,s):((o,r,l)=>{let i=r.hasOwnProperty(l);return r.constructor.createProperty(l,i?{...o,wrapped:!0}:o),i?Object.getOwnPropertyDescriptor(r,l):void 0})(t,e,s)}function O(t){return p({...t,state:!0,attribute:!1})}function dt(t){return(e,s)=>{let o=typeof e=="function"?e:e[s];Object.assign(o,t)}}var M=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);function xe(t,e){return(s,o,r)=>{let l=i=>i.renderRoot?.querySelector(t)??null;if(e){let{get:i,set:a}=typeof o=="object"?s:r??(()=>{let n=Symbol();return{get(){return this[n]},set(d){this[n]=d}}})();return M(s,o,{get(){let n=i.call(this);return n===void 0&&(n=l(this),(n!==null||this.hasUpdated)&&a.call(this,n)),n}})}return M(s,o,{get(){return l(this)}})}}var y=class extends C{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let s=new CustomEvent(t,W({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(s),s}static define(t,e=this,s={}){let o=customElements.get(t);if(!o){customElements.define(t,class extends e{},s);return}let r=" (unknown version)",l=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(l=" v"+o.version),!(r&&l&&r===l)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${l} has already been registered.`)}};y.version="2.15.0";y.dependencies={};c([p()],y.prototype,"dir",2);c([p()],y.prototype,"lang",2);var{I:Ao}=He;var ut=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var Z=Symbol(),ce=Symbol(),Se,Ae=new Map,b=class extends y{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var s;let o;if(e?.spriteSheet){this.svg=f`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;let r=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(r),this.svg}try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?Z:ce}catch{return ce}try{let r=document.createElement("div");r.innerHTML=await o.text();let l=r.firstElementChild;if(((s=l?.tagName)==null?void 0:s.toLowerCase())!=="svg")return Z;Se||(Se=new DOMParser);let a=Se.parseFromString(l.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Z}catch{return Z}}connectedCallback(){super.connectedCallback(),at(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ct(this)}getIconSource(){let t=$e(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:s}=this.getIconSource(),o=s?$e(this.library):void 0;if(!e){this.svg=null;return}let r=Ae.get(e);if(r||(r=this.resolveIcon(e,o),Ae.set(e,r)),!this.initialRender)return;let l=await r;if(l===ce&&Ae.delete(e),e===this.getIconSource().url){if(ut(l)){this.svg=l;return}switch(l){case ce:case Z:this.svg=null,this.emit("sl-error");break;default:this.svg=l.cloneNode(!0),(t=o?.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};b.styles=[U,ht];c([O()],b.prototype,"svg",2);c([p({reflect:!0})],b.prototype,"name",2);c([p()],b.prototype,"src",2);c([p()],b.prototype,"label",2);c([p({reflect:!0})],b.prototype,"library",2);c([S("label")],b.prototype,"handleLabelChange",1);c([S(["name","src","library"])],b.prototype,"setIcon",1);var pt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},gt=t=>(...e)=>({_$litDirective$:t,values:e}),he=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,o){this._$Ct=e,this._$AM=s,this._$Ci=o}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};var G=gt(class extends he{constructor(t){if(super(t),t.type!==pt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}let s=t.element.classList;for(let o of this.st)o in e||(s.remove(o),this.st.delete(o));for(let o in e){let r=!!e[o];r===this.st.has(o)||this.nt?.has(o)||(r?(s.add(o),this.st.add(o)):(s.remove(o),this.st.delete(o)))}return $}});function*mt(t,e){if(t!==void 0){let s=0;for(let o of t)yield e(o,s++)}}function*ft(t,e,s=1){let o=e===void 0?0:t;e??=t;for(let r=o;s>0?r<e:e<r;r+=s)yield r}var Vt=(t,e)=>{let s=0;return function(...o){window.clearTimeout(s),s=window.setTimeout(()=>{t.call(this,...o)},e)}},vt=(t,e,s)=>{let o=t[e];t[e]=function(...r){o.call(this,...r),s.call(this,o,...r)}},Ft="onscrollend"in window;if(!Ft){let t=new Set,e=new WeakMap,s=r=>{for(let l of r.changedTouches)t.add(l.identifier)},o=r=>{for(let l of r.changedTouches)t.delete(l.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),vt(EventTarget.prototype,"addEventListener",function(r,l){if(l!=="scrollend")return;let i=Vt(()=>{t.size?i():this.dispatchEvent(new Event("scrollend"))},100);r.call(this,"scroll",i,{passive:!0}),e.set(this,i)}),vt(EventTarget.prototype,"removeEventListener",function(r,l){if(l!=="scrollend")return;let i=e.get(this);i&&r.call(this,"scroll",i,{passive:!0})})}var u=class extends y{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Be(this,()=>this.next()),this.localize=new st(this),this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{let t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});let e=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");let o=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:s,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==o||s!==r)&&(t.scrollTo({left:o,top:r,behavior:ye()?"auto":"smooth"}),await Ke(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(s=>[...s.addedNodes,...s.removedNodes].some(o=>this.isCarouselItem(o)&&!o.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){let t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:s,loop:o}=this,r=o?t/s:(t-e)/s+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=t.target,s=this.localize.dir()==="rtl",o=e.closest('[part~="pagination-item"]')!==null,r=t.key==="ArrowDown"||!s&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft",l=t.key==="ArrowUp"||!s&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight";t.preventDefault(),l&&this.previous(),r&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{var i;let a=(i=this.shadowRoot)==null?void 0:i.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0}synchronizeSlides(){let t=new IntersectionObserver(e=>{t.disconnect();for(let o of e){let r=o.target;r.toggleAttribute("inert",!o.isIntersecting),r.classList.toggle("--in-view",o.isIntersecting),r.setAttribute("aria-hidden",o.isIntersecting?"false":"true")}let s=e.find(o=>o.isIntersecting);if(s)if(this.loop&&s.target.hasAttribute("data-clone")){let o=Number(s.target.getAttribute("data-clone"));this.goToSlide(o,"instant")}else{let r=this.getSlides().indexOf(s.target);this.activeSlide=Math.ceil(r/this.slidesPerMove)*this.slidesPerMove}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1)}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.synchronizeSlides(),this.goToSlide(this.activeSlide,"auto")}createClones(){let t=this.getSlides(),e=this.slidesPerPage,s=t.slice(-e),o=t.slice(0,e);s.reverse().forEach((r,l)=>{let i=r.cloneNode(!0);i.setAttribute("data-clone",String(t.length-l-1)),this.prepend(i)}),o.forEach((r,l)=>{let i=r.cloneNode(!0);i.setAttribute("data-clone",String(l)),this.append(i)})}handelSlideChange(){let t=this.getSlides();t.forEach((e,s)=>{e.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){let t=this.getSlides(),e=this.slidesPerMove;t.forEach((s,o)=>{(o+e)%e===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){let{slidesPerPage:s,loop:o}=this,r=this.getSlides(),l=this.getSlides({excludeClones:!1});if(!r.length)return;let i=o?(t+r.length)%r.length:me(t,0,r.length-1);this.activeSlide=i;let a=me(t+(o?s:0),0,l.length-1),n=l[a];this.scrollToSlide(n,ye()?"auto":e)}scrollToSlide(t,e="smooth"){let s=this.scrollContainer,o=s.getBoundingClientRect(),r=t.getBoundingClientRect(),l=r.left-o.left,i=r.top-o.top;s.scrollTo({left:l+s.scrollLeft,top:i+s.scrollTop,behavior:e})}render(){let{slidesPerMove:t,scrolling:e}=this,s=this.getPageCount(),o=this.getCurrentPage(),r=this.canScrollPrev(),l=this.canScrollNext(),i=this.localize.dir()==="ltr";return f`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${G({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?f`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${G({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${i?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${G({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!l})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${l?"false":"true"}"
                  @click=${l?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${i?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?f`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${mt(ft(s),a=>{let n=a===o;return f`
                    <button
                      part="pagination-item ${n?"pagination-item--active":""}"
                      class="${G({"carousel__pagination-item":!0,"carousel__pagination-item--active":n})}"
                      role="tab"
                      aria-selected="${n?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",a+1,s)}"
                      tabindex=${n?"0":"-1"}
                      @click=${()=>this.goToSlide(a*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};u.styles=[U,We];u.dependencies={"sl-icon":b};c([p({type:Boolean,reflect:!0})],u.prototype,"loop",2);c([p({type:Boolean,reflect:!0})],u.prototype,"navigation",2);c([p({type:Boolean,reflect:!0})],u.prototype,"pagination",2);c([p({type:Boolean,reflect:!0})],u.prototype,"autoplay",2);c([p({type:Number,attribute:"autoplay-interval"})],u.prototype,"autoplayInterval",2);c([p({type:Number,attribute:"slides-per-page"})],u.prototype,"slidesPerPage",2);c([p({type:Number,attribute:"slides-per-move"})],u.prototype,"slidesPerMove",2);c([p()],u.prototype,"orientation",2);c([p({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],u.prototype,"mouseDragging",2);c([xe(".carousel__slides")],u.prototype,"scrollContainer",2);c([xe(".carousel__pagination")],u.prototype,"paginationContainer",2);c([O()],u.prototype,"activeSlide",2);c([O()],u.prototype,"scrolling",2);c([O()],u.prototype,"dragging",2);c([dt({passive:!0})],u.prototype,"handleScroll",1);c([S("loop",{waitUntilFirstUpdate:!0}),S("slidesPerPage",{waitUntilFirstUpdate:!0})],u.prototype,"initializeSlides",1);c([S("activeSlide")],u.prototype,"handelSlideChange",1);c([S("slidesPerMove")],u.prototype,"updateSlidesSnap",1);c([S("autoplay")],u.prototype,"handleAutoplayChange",1);u.define("sl-carousel");var yt=v`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;var Ce=class extends y{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return f` <slot></slot> `}};Ce.styles=[U,yt];Ce.define("sl-carousel-item");var bt=v`
  :host,
  .sl-theme-dark {
    color-scheme: dark;

    --sl-color-gray-50: hsl(240 5.1% 15%);
    --sl-color-gray-100: hsl(240 5.7% 18.2%);
    --sl-color-gray-200: hsl(240 4.6% 22%);
    --sl-color-gray-300: hsl(240 5% 27.6%);
    --sl-color-gray-400: hsl(240 5% 35.5%);
    --sl-color-gray-500: hsl(240 3.7% 44%);
    --sl-color-gray-600: hsl(240 5.3% 58%);
    --sl-color-gray-700: hsl(240 5.6% 73%);
    --sl-color-gray-800: hsl(240 7.3% 84%);
    --sl-color-gray-900: hsl(240 9.1% 91.8%);
    --sl-color-gray-950: hsl(0 0% 95%);

    --sl-color-red-50: hsl(0 56% 23.9%);
    --sl-color-red-100: hsl(0.6 60% 33.9%);
    --sl-color-red-200: hsl(0.9 67.2% 37.1%);
    --sl-color-red-300: hsl(1.1 71.3% 43.7%);
    --sl-color-red-400: hsl(1 76% 52.5%);
    --sl-color-red-500: hsl(0.7 89.6% 57.2%);
    --sl-color-red-600: hsl(0 98.6% 67.9%);
    --sl-color-red-700: hsl(0 100% 72.3%);
    --sl-color-red-800: hsl(0 100% 85.6%);
    --sl-color-red-900: hsl(0 100% 90.3%);
    --sl-color-red-950: hsl(0 100% 95.9%);

    --sl-color-orange-50: hsl(15 64.2% 23.3%);
    --sl-color-orange-100: hsl(15.1 70.9% 31.1%);
    --sl-color-orange-200: hsl(15.3 75.7% 35.5%);
    --sl-color-orange-300: hsl(17.1 83.5% 42.7%);
    --sl-color-orange-400: hsl(20.1 88% 50.8%);
    --sl-color-orange-500: hsl(24.3 100% 50.5%);
    --sl-color-orange-600: hsl(27.2 100% 57.7%);
    --sl-color-orange-700: hsl(31.3 100% 68.7%);
    --sl-color-orange-800: hsl(33.8 100% 79.3%);
    --sl-color-orange-900: hsl(38.9 100% 87.7%);
    --sl-color-orange-950: hsl(46.2 100% 95%);

    --sl-color-amber-50: hsl(21.9 66.3% 21.1%);
    --sl-color-amber-100: hsl(21.5 73.6% 29.7%);
    --sl-color-amber-200: hsl(22.3 77.6% 33.3%);
    --sl-color-amber-300: hsl(25.4 84.2% 39.6%);
    --sl-color-amber-400: hsl(31.4 87.4% 46.7%);
    --sl-color-amber-500: hsl(37 96.6% 48.3%);
    --sl-color-amber-600: hsl(43.3 100% 53.4%);
    --sl-color-amber-700: hsl(46.5 100% 61.1%);
    --sl-color-amber-800: hsl(49.3 100% 73%);
    --sl-color-amber-900: hsl(51.8 100% 85%);
    --sl-color-amber-950: hsl(60 100% 94.6%);

    --sl-color-yellow-50: hsl(32.5 60% 18.2%);
    --sl-color-yellow-100: hsl(28.1 68.6% 29%);
    --sl-color-yellow-200: hsl(31.3 75.8% 30.8%);
    --sl-color-yellow-300: hsl(34.7 84.4% 35.3%);
    --sl-color-yellow-400: hsl(40.1 87.3% 43.3%);
    --sl-color-yellow-500: hsl(44.7 88% 46%);
    --sl-color-yellow-600: hsl(47.7 100% 50.9%);
    --sl-color-yellow-700: hsl(51.3 100% 59.9%);
    --sl-color-yellow-800: hsl(54.6 100% 73%);
    --sl-color-yellow-900: hsl(58.9 100% 84.2%);
    --sl-color-yellow-950: hsl(60 100% 94%);

    --sl-color-lime-50: hsl(86.5 54.4% 18%);
    --sl-color-lime-100: hsl(87.6 56.8% 23.3%);
    --sl-color-lime-200: hsl(85.8 63.2% 24.5%);
    --sl-color-lime-300: hsl(86.1 72% 29.4%);
    --sl-color-lime-400: hsl(85.5 76.8% 37.3%);
    --sl-color-lime-500: hsl(84.3 74.2% 42.1%);
    --sl-color-lime-600: hsl(82.8 81.5% 52.6%);
    --sl-color-lime-700: hsl(82 89.9% 64%);
    --sl-color-lime-800: hsl(80.9 97.9% 76.6%);
    --sl-color-lime-900: hsl(77.9 100% 85.8%);
    --sl-color-lime-950: hsl(69.5 100% 93.8%);

    --sl-color-green-50: hsl(144.3 53.6% 16%);
    --sl-color-green-100: hsl(143.2 55.4% 23.5%);
    --sl-color-green-200: hsl(141.5 58.2% 26.3%);
    --sl-color-green-300: hsl(140.8 64.2% 31.8%);
    --sl-color-green-400: hsl(140.3 68% 39.2%);
    --sl-color-green-500: hsl(141.1 64.9% 43%);
    --sl-color-green-600: hsl(141.6 72.4% 55.2%);
    --sl-color-green-700: hsl(141.7 82.7% 70.1%);
    --sl-color-green-800: hsl(141 90.9% 82.1%);
    --sl-color-green-900: hsl(142 100% 89.1%);
    --sl-color-green-950: hsl(144 100% 95.5%);

    --sl-color-emerald-50: hsl(164.3 75% 13.5%);
    --sl-color-emerald-100: hsl(163.5 72.6% 20.1%);
    --sl-color-emerald-200: hsl(162.1 73.7% 22.4%);
    --sl-color-emerald-300: hsl(161.3 77.3% 27.6%);
    --sl-color-emerald-400: hsl(159.6 77.1% 34.3%);
    --sl-color-emerald-500: hsl(159.1 73.5% 37.9%);
    --sl-color-emerald-600: hsl(157.8 66.8% 48.9%);
    --sl-color-emerald-700: hsl(156.2 76.1% 63.8%);
    --sl-color-emerald-800: hsl(152.4 84.4% 77.4%);
    --sl-color-emerald-900: hsl(149.3 100% 87%);
    --sl-color-emerald-950: hsl(158.6 100% 94.8%);

    --sl-color-teal-50: hsl(176.5 51.5% 15.4%);
    --sl-color-teal-100: hsl(175.9 54.7% 22.3%);
    --sl-color-teal-200: hsl(175.9 60.7% 23.9%);
    --sl-color-teal-300: hsl(174.5 67.3% 28.8%);
    --sl-color-teal-400: hsl(174.4 71.9% 34.9%);
    --sl-color-teal-500: hsl(173.1 71% 38.3%);
    --sl-color-teal-600: hsl(172.3 68.2% 48.1%);
    --sl-color-teal-700: hsl(170.5 81.3% 61.5%);
    --sl-color-teal-800: hsl(168.4 92.1% 75.2%);
    --sl-color-teal-900: hsl(168.3 100% 86%);
    --sl-color-teal-950: hsl(180 100% 95.5%);

    --sl-color-cyan-50: hsl(197.1 53.8% 20.3%);
    --sl-color-cyan-100: hsl(196.8 57.3% 27.2%);
    --sl-color-cyan-200: hsl(195.3 62.7% 29.4%);
    --sl-color-cyan-300: hsl(193.5 71.3% 34.1%);
    --sl-color-cyan-400: hsl(192.5 76.8% 40.6%);
    --sl-color-cyan-500: hsl(189.4 78.6% 42.6%);
    --sl-color-cyan-600: hsl(188.2 89.1% 51.7%);
    --sl-color-cyan-700: hsl(187 98.6% 66.2%);
    --sl-color-cyan-800: hsl(184.9 100% 78.3%);
    --sl-color-cyan-900: hsl(180 100% 86.6%);
    --sl-color-cyan-950: hsl(180 100% 94.8%);

    --sl-color-sky-50: hsl(203 63.8% 20.9%);
    --sl-color-sky-100: hsl(203.4 70.4% 28%);
    --sl-color-sky-200: hsl(202.7 75.8% 30.8%);
    --sl-color-sky-300: hsl(203.1 80.4% 36.1%);
    --sl-color-sky-400: hsl(202.1 80.5% 44.3%);
    --sl-color-sky-500: hsl(199.7 85.9% 47.7%);
    --sl-color-sky-600: hsl(198.7 97.9% 57.2%);
    --sl-color-sky-700: hsl(198.7 100% 70.5%);
    --sl-color-sky-800: hsl(198.8 100% 82.5%);
    --sl-color-sky-900: hsl(198.5 100% 89.9%);
    --sl-color-sky-950: hsl(186 100% 95.5%);

    --sl-color-blue-50: hsl(227.1 49.5% 22.7%);
    --sl-color-blue-100: hsl(225.8 58.9% 36.8%);
    --sl-color-blue-200: hsl(227.7 64.4% 42.9%);
    --sl-color-blue-300: hsl(226.1 72.7% 51.2%);
    --sl-color-blue-400: hsl(222.6 86.5% 56.3%);
    --sl-color-blue-500: hsl(217.8 95.8% 57.4%);
    --sl-color-blue-600: hsl(213.3 100% 65%);
    --sl-color-blue-700: hsl(210.9 100% 74.8%);
    --sl-color-blue-800: hsl(211.5 100% 83.4%);
    --sl-color-blue-900: hsl(211 100% 88.9%);
    --sl-color-blue-950: hsl(201.8 100% 95.3%);

    --sl-color-indigo-50: hsl(243.5 40.8% 27%);
    --sl-color-indigo-100: hsl(242.9 45.7% 37.6%);
    --sl-color-indigo-200: hsl(244.7 52.7% 43.1%);
    --sl-color-indigo-300: hsl(245.3 60.5% 52.4%);
    --sl-color-indigo-400: hsl(244.1 79.2% 60.4%);
    --sl-color-indigo-500: hsl(239.6 88.7% 63.8%);
    --sl-color-indigo-600: hsl(234.5 96.7% 70.9%);
    --sl-color-indigo-700: hsl(229.4 100% 78.3%);
    --sl-color-indigo-800: hsl(227.1 100% 85%);
    --sl-color-indigo-900: hsl(223.8 100% 89.9%);
    --sl-color-indigo-950: hsl(220 100% 95.1%);

    --sl-color-violet-50: hsl(265.1 57.3% 25.4%);
    --sl-color-violet-100: hsl(263.5 63.8% 39.4%);
    --sl-color-violet-200: hsl(263.4 66.2% 44.1%);
    --sl-color-violet-300: hsl(263.7 72.8% 52.4%);
    --sl-color-violet-400: hsl(262.5 87.3% 59.8%);
    --sl-color-violet-500: hsl(258.3 95.1% 63.2%);
    --sl-color-violet-600: hsl(255.1 100% 67.2%);
    --sl-color-violet-700: hsl(253 100% 81.5%);
    --sl-color-violet-800: hsl(251.7 100% 87.9%);
    --sl-color-violet-900: hsl(254.1 100% 91.7%);
    --sl-color-violet-950: hsl(257.1 100% 96.1%);

    --sl-color-purple-50: hsl(276 54.3% 20.5%);
    --sl-color-purple-100: hsl(273.6 61.8% 35.4%);
    --sl-color-purple-200: hsl(272.9 64% 41.4%);
    --sl-color-purple-300: hsl(271.9 68.1% 49.2%);
    --sl-color-purple-400: hsl(271.5 85.1% 57.8%);
    --sl-color-purple-500: hsl(270.7 96.4% 62.1%);
    --sl-color-purple-600: hsl(270.5 100% 71.9%);
    --sl-color-purple-700: hsl(270.9 100% 81.3%);
    --sl-color-purple-800: hsl(272.4 100% 87.7%);
    --sl-color-purple-900: hsl(276.7 100% 91.5%);
    --sl-color-purple-950: hsl(300 100% 96.5%);

    --sl-color-fuchsia-50: hsl(297.1 51.2% 18.6%);
    --sl-color-fuchsia-100: hsl(296.7 59.5% 31.5%);
    --sl-color-fuchsia-200: hsl(295.4 65.4% 35.1%);
    --sl-color-fuchsia-300: hsl(294.6 67.4% 42.2%);
    --sl-color-fuchsia-400: hsl(293.3 68.7% 51.2%);
    --sl-color-fuchsia-500: hsl(292.1 88.4% 57.7%);
    --sl-color-fuchsia-600: hsl(292 98.5% 59.5%);
    --sl-color-fuchsia-700: hsl(292.4 100% 79.5%);
    --sl-color-fuchsia-800: hsl(292.9 100% 86.8%);
    --sl-color-fuchsia-900: hsl(300 100% 91.5%);
    --sl-color-fuchsia-950: hsl(300 100% 96.3%);

    --sl-color-pink-50: hsl(336.2 59.6% 20%);
    --sl-color-pink-100: hsl(336.8 63.9% 34%);
    --sl-color-pink-200: hsl(336.8 68.7% 37.6%);
    --sl-color-pink-300: hsl(336.1 71.8% 44.5%);
    --sl-color-pink-400: hsl(333.9 74.9% 53.1%);
    --sl-color-pink-500: hsl(330.7 86.3% 57.7%);
    --sl-color-pink-600: hsl(328.6 91.5% 67.2%);
    --sl-color-pink-700: hsl(327.4 97.6% 78.7%);
    --sl-color-pink-800: hsl(325.1 100% 86.6%);
    --sl-color-pink-900: hsl(322.1 100% 91.3%);
    --sl-color-pink-950: hsl(315 100% 95.9%);

    --sl-color-rose-50: hsl(342.3 62.9% 21.5%);
    --sl-color-rose-100: hsl(342.8 68.9% 34.2%);
    --sl-color-rose-200: hsl(344.8 72.6% 37.3%);
    --sl-color-rose-300: hsl(346.9 75.8% 43.7%);
    --sl-color-rose-400: hsl(348.2 80.1% 52.7%);
    --sl-color-rose-500: hsl(350.4 94.8% 57.5%);
    --sl-color-rose-600: hsl(351.2 100% 58.1%);
    --sl-color-rose-700: hsl(352.3 100% 78.1%);
    --sl-color-rose-800: hsl(352 100% 86.2%);
    --sl-color-rose-900: hsl(354.5 100% 90.7%);
    --sl-color-rose-950: hsl(353.3 100% 95.7%);

    --sl-color-primary-50: var(--sl-color-sky-50);
    --sl-color-primary-100: var(--sl-color-sky-100);
    --sl-color-primary-200: var(--sl-color-sky-200);
    --sl-color-primary-300: var(--sl-color-sky-300);
    --sl-color-primary-400: var(--sl-color-sky-400);
    --sl-color-primary-500: var(--sl-color-sky-500);
    --sl-color-primary-600: var(--sl-color-sky-600);
    --sl-color-primary-700: var(--sl-color-sky-700);
    --sl-color-primary-800: var(--sl-color-sky-800);
    --sl-color-primary-900: var(--sl-color-sky-900);
    --sl-color-primary-950: var(--sl-color-sky-950);

    --sl-color-success-50: var(--sl-color-green-50);
    --sl-color-success-100: var(--sl-color-green-100);
    --sl-color-success-200: var(--sl-color-green-200);
    --sl-color-success-300: var(--sl-color-green-300);
    --sl-color-success-400: var(--sl-color-green-400);
    --sl-color-success-500: var(--sl-color-green-500);
    --sl-color-success-600: var(--sl-color-green-600);
    --sl-color-success-700: var(--sl-color-green-700);
    --sl-color-success-800: var(--sl-color-green-800);
    --sl-color-success-900: var(--sl-color-green-900);
    --sl-color-success-950: var(--sl-color-green-950);

    --sl-color-warning-50: var(--sl-color-amber-50);
    --sl-color-warning-100: var(--sl-color-amber-100);
    --sl-color-warning-200: var(--sl-color-amber-200);
    --sl-color-warning-300: var(--sl-color-amber-300);
    --sl-color-warning-400: var(--sl-color-amber-400);
    --sl-color-warning-500: var(--sl-color-amber-500);
    --sl-color-warning-600: var(--sl-color-amber-600);
    --sl-color-warning-700: var(--sl-color-amber-700);
    --sl-color-warning-800: var(--sl-color-amber-800);
    --sl-color-warning-900: var(--sl-color-amber-900);
    --sl-color-warning-950: var(--sl-color-amber-950);

    --sl-color-danger-50: var(--sl-color-red-50);
    --sl-color-danger-100: var(--sl-color-red-100);
    --sl-color-danger-200: var(--sl-color-red-200);
    --sl-color-danger-300: var(--sl-color-red-300);
    --sl-color-danger-400: var(--sl-color-red-400);
    --sl-color-danger-500: var(--sl-color-red-500);
    --sl-color-danger-600: var(--sl-color-red-600);
    --sl-color-danger-700: var(--sl-color-red-700);
    --sl-color-danger-800: var(--sl-color-red-800);
    --sl-color-danger-900: var(--sl-color-red-900);
    --sl-color-danger-950: var(--sl-color-red-950);

    --sl-color-neutral-50: var(--sl-color-gray-50);
    --sl-color-neutral-100: var(--sl-color-gray-100);
    --sl-color-neutral-200: var(--sl-color-gray-200);
    --sl-color-neutral-300: var(--sl-color-gray-300);
    --sl-color-neutral-400: var(--sl-color-gray-400);
    --sl-color-neutral-500: var(--sl-color-gray-500);
    --sl-color-neutral-600: var(--sl-color-gray-600);
    --sl-color-neutral-700: var(--sl-color-gray-700);
    --sl-color-neutral-800: var(--sl-color-gray-800);
    --sl-color-neutral-900: var(--sl-color-gray-900);
    --sl-color-neutral-950: var(--sl-color-gray-950);

    --sl-color-neutral-0: hsl(240, 5.9%, 11%);
    --sl-color-neutral-1000: hsl(0, 0%, 100%);

    --sl-border-radius-small: 0.1875rem;
    --sl-border-radius-medium: 0.25rem;
    --sl-border-radius-large: 0.5rem;
    --sl-border-radius-x-large: 1rem;

    --sl-border-radius-circle: 50%;
    --sl-border-radius-pill: 9999px;

    --sl-shadow-x-small: 0 1px 2px rgb(0 0 0 / 18%);
    --sl-shadow-small: 0 1px 2px rgb(0 0 0 / 24%);
    --sl-shadow-medium: 0 2px 4px rgb(0 0 0 / 24%);
    --sl-shadow-large: 0 2px 8px rgb(0 0 0 / 24%);
    --sl-shadow-x-large: 0 4px 16px rgb(0 0 0 / 24%);

    --sl-spacing-3x-small: 0.125rem;
    --sl-spacing-2x-small: 0.25rem;
    --sl-spacing-x-small: 0.5rem;
    --sl-spacing-small: 0.75rem;
    --sl-spacing-medium: 1rem;
    --sl-spacing-large: 1.25rem;
    --sl-spacing-x-large: 1.75rem;
    --sl-spacing-2x-large: 2.25rem;
    --sl-spacing-3x-large: 3rem;
    --sl-spacing-4x-large: 4.5rem;

    --sl-transition-x-slow: 1000ms;
    --sl-transition-slow: 500ms;
    --sl-transition-medium: 250ms;
    --sl-transition-fast: 150ms;
    --sl-transition-x-fast: 50ms;

    --sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo,
      monospace;
    --sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    --sl-font-serif: Georgia, "Times New Roman", serif;

    --sl-font-size-2x-small: 0.625rem;
    --sl-font-size-x-small: 0.75rem;
    --sl-font-size-small: 0.875rem;
    --sl-font-size-medium: 1rem;
    --sl-font-size-large: 1.25rem;
    --sl-font-size-x-large: 1.5rem;
    --sl-font-size-2x-large: 2.25rem;
    --sl-font-size-3x-large: 3rem;
    --sl-font-size-4x-large: 4.5rem;

    --sl-font-weight-light: 300;
    --sl-font-weight-normal: 400;
    --sl-font-weight-semibold: 500;
    --sl-font-weight-bold: 700;

    --sl-letter-spacing-denser: -0.03em;
    --sl-letter-spacing-dense: -0.015em;
    --sl-letter-spacing-normal: normal;
    --sl-letter-spacing-loose: 0.075em;
    --sl-letter-spacing-looser: 0.15em;

    --sl-line-height-denser: 1;
    --sl-line-height-dense: 1.4;
    --sl-line-height-normal: 1.8;
    --sl-line-height-loose: 2.2;
    --sl-line-height-looser: 2.6;

    --sl-focus-ring-color: var(--sl-color-primary-700);
    --sl-focus-ring-style: solid;
    --sl-focus-ring-width: 3px;
    --sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width)
      var(--sl-focus-ring-color);
    --sl-focus-ring-offset: 1px;

    --sl-button-font-size-small: var(--sl-font-size-x-small);
    --sl-button-font-size-medium: var(--sl-font-size-small);
    --sl-button-font-size-large: var(--sl-font-size-medium);

    --sl-input-height-small: 1.875rem;
    --sl-input-height-medium: 2.5rem;
    --sl-input-height-large: 3.125rem;

    --sl-input-background-color: var(--sl-color-neutral-0);
    --sl-input-background-color-hover: var(--sl-input-background-color);
    --sl-input-background-color-focus: var(--sl-input-background-color);
    --sl-input-background-color-disabled: var(--sl-color-neutral-100);
    --sl-input-border-color: var(--sl-color-neutral-300);
    --sl-input-border-color-hover: var(--sl-color-neutral-400);
    --sl-input-border-color-focus: var(--sl-color-primary-500);
    --sl-input-border-color-disabled: var(--sl-color-neutral-300);
    --sl-input-border-width: 1px;
    --sl-input-required-content: "*";
    --sl-input-required-content-offset: -2px;
    --sl-input-required-content-color: var(--sl-input-label-color);

    --sl-input-border-radius-small: var(--sl-border-radius-medium);
    --sl-input-border-radius-medium: var(--sl-border-radius-medium);
    --sl-input-border-radius-large: var(--sl-border-radius-medium);

    --sl-input-font-family: var(--sl-font-sans);
    --sl-input-font-weight: var(--sl-font-weight-normal);
    --sl-input-font-size-small: var(--sl-font-size-small);
    --sl-input-font-size-medium: var(--sl-font-size-medium);
    --sl-input-font-size-large: var(--sl-font-size-large);
    --sl-input-letter-spacing: var(--sl-letter-spacing-normal);

    --sl-input-color: var(--sl-color-neutral-700);
    --sl-input-color-hover: var(--sl-color-neutral-700);
    --sl-input-color-focus: var(--sl-color-neutral-700);
    --sl-input-color-disabled: var(--sl-color-neutral-900);
    --sl-input-icon-color: var(--sl-color-neutral-500);
    --sl-input-icon-color-hover: var(--sl-color-neutral-600);
    --sl-input-icon-color-focus: var(--sl-color-neutral-600);
    --sl-input-placeholder-color: var(--sl-color-neutral-500);
    --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);
    --sl-input-spacing-small: var(--sl-spacing-small);
    --sl-input-spacing-medium: var(--sl-spacing-medium);
    --sl-input-spacing-large: var(--sl-spacing-large);

    --sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
    --sl-input-focus-ring-offset: 0;

    --sl-input-filled-background-color: var(--sl-color-neutral-100);
    --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);
    --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);
    --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);
    --sl-input-filled-color: var(--sl-color-neutral-800);
    --sl-input-filled-color-hover: var(--sl-color-neutral-800);
    --sl-input-filled-color-focus: var(--sl-color-neutral-700);
    --sl-input-filled-color-disabled: var(--sl-color-neutral-800);

    --sl-input-label-font-size-small: var(--sl-font-size-small);
    --sl-input-label-font-size-medium: var(--sl-font-size-medium);
    --sl-input-label-font-size-large: var(--sl-font-size-large);
    --sl-input-label-color: inherit;

    --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);
    --sl-input-help-text-font-size-medium: var(--sl-font-size-small);
    --sl-input-help-text-font-size-large: var(--sl-font-size-medium);
    --sl-input-help-text-color: var(--sl-color-neutral-500);

    --sl-toggle-size-small: 0.875rem;
    --sl-toggle-size-medium: 1.125rem;
    --sl-toggle-size-large: 1.375rem;

    --sl-overlay-background-color: hsl(0 0% 0% / 43%);

    --sl-panel-background-color: var(--sl-color-neutral-50);
    --sl-panel-border-color: var(--sl-color-neutral-200);
    --sl-panel-border-width: 1px;

    --sl-tooltip-border-radius: var(--sl-border-radius-medium);
    --sl-tooltip-background-color: var(--sl-color-neutral-800);
    --sl-tooltip-color: var(--sl-color-neutral-0);
    --sl-tooltip-font-family: var(--sl-font-sans);
    --sl-tooltip-font-weight: var(--sl-font-weight-normal);
    --sl-tooltip-font-size: var(--sl-font-size-small);
    --sl-tooltip-line-height: var(--sl-line-height-dense);
    --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);
    --sl-tooltip-arrow-size: 6px;

    --sl-z-index-drawer: 700;
    --sl-z-index-dialog: 800;
    --sl-z-index-dropdown: 900;
    --sl-z-index-toast: 950;
    --sl-z-index-tooltip: 1000;
  }

  @supports (scrollbar-gutter: stable) {
    .sl-scroll-lock {
      scrollbar-gutter: stable !important;
      overflow: hidden !important;
    }
  }

  @supports not (scrollbar-gutter: stable) {
    .sl-scroll-lock body {
      padding-right: var(--sl-scroll-lock-size) !important;
      overflow: hidden !important;
    }
  }

  .sl-toast-stack {
    position: fixed;
    top: 0;
    inset-inline-end: 0;
    z-index: var(--sl-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .sl-toast-stack sl-alert {
    margin: var(--sl-spacing-medium);
  }

  .sl-toast-stack sl-alert::part(base) {
    box-shadow: var(--sl-shadow-large);
  }
`;var $t=new CSSStyleSheet;$t.replaceSync(bt);window.members=Ee;var _t="https://cdn.jsdelivr.net/gh/rasselasxyz/onering",Wt=()=>f`<b>You aren't a part of the One Ring (yet).</b>`,Kt=(t,e)=>f`<div class="one-ring">
  <a class="title" href="https://siqu.neocities.org/onering.html">
    <img src=${_t+"/assets/ring.png"} />
    <h2>The One Ring</h2>
  </a>
  <sl-carousel class="carousel" pagination navigation loop>
    ${t.map(s=>f`<sl-carousel-item>
          <figure style="padding: 0;">
            <a href=${s.url}>
              <img
                style="object-fit: fill;  height: 150px; object-fit: contain; aspect-ratio: 16 / 9;"
                alt=${s.name}
                src=${_t+`/assets/screenshots/${s.name}.jpg`}
              />
            </a>

            <figcaption>${s.description}</figcaption>
          </figure>
        </sl-carousel-item>`)}
  </sl-carousel>
</div>`,Zt=()=>f`<style>
  .one-ring {
    font-family: "Jersey 10", system-ui;
    font-weight: 400;
    font-style: normal;
    color: inherit;
    display: block;
    text-align: center;
  }

  .one-ring {
    max-width: 450px;
  }

  .one-ring h2 {
    font-size: 40px;
  }

  .one-ring .title {
    display: flex;
    text-decoration: none;
    color: inherit;
    gap: 0 10px;
    align-items: center;
    justify-content: center;
    height: 32px;
  }

  .one-ring .title img {
    height: 32px;
    width: 32px;
    display: block;
  }
</style>`,xt="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap",wt=f`<link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href=${xt} rel="stylesheet" />`;customElements.define("one-ring",class extends HTMLElement{constructor(){document.querySelector(`link[href="${xt}"]`)||j(wt,document.head),super().attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[$t]}connectedCallback(){let t=window.members,e=t.findIndex(r=>window.location.href.includes(r.url)),s=e===-1?Wt():Kt(t,e),o=f`${wt}${Zt()}${s}`;j(o,this.shadowRoot)}});})();
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
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

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/range.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
