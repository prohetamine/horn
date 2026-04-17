import{c as f,q as j,V as L,_ as c,Y as T,j as V,G as H,X as z,h as G,Z as q,a as X,L as x,C as h,R as N,b as Z,W as P,x as _,d as S,U as g,e as J,N as M,n as Q,f as ee,z as O,g as W,J as l,I as E,i as D,k as F,l as d,m as te,o as w}from"./index-Bi7oTyW1.js";const oe=W`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var K=function(e,t,i,s){var r=arguments.length,o=r<3?t:s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const I=600,Y=360,ie=64;let C=class extends f{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(j.subscribeKey("open",e=>{e||this.onHideIframe()}),j.subscribeKey("shake",e=>{e?this.iframe.style.animation="w3m-shake 500ms var(--apkt-easings-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach(t=>t()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){var e;await this.syncTheme(),this.iframe.style.display="block";const t=(e=this==null?void 0:this.renderRoot)==null?void 0:e.querySelector("div");this.bodyObserver=new ResizeObserver(i=>{var s,r;const o=(s=i?.[0])==null?void 0:s.contentBoxSize,n=(r=o?.[0])==null?void 0:r.inlineSize;this.iframe.style.height=`${I}px`,t.style.height=`${I}px`,L.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():n&&n<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset",this.onShowIframe()):(this.iframe.style.width=`${Y}px`,this.iframe.style.left=`calc(50% - ${Y/2}px)`,this.iframe.style.top=`calc(50% - ${I/2}px + ${ie/2}px)`,this.iframe.style.bottom="unset",this.onShowIframe())}),this.bodyObserver.observe(window.document.body)}render(){return c`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){const e=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)"}async syncTheme(){const e=T.getAuthConnector();if(e){const t=V.getSnapshot().themeMode,i=V.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:i,w3mThemeVariables:H(i,t)})}}async updateFrameSizeForEmbeddedMode(){var e;const t=(e=this==null?void 0:this.renderRoot)==null?void 0:e.querySelector("div");await new Promise(s=>{setTimeout(s,300)});const i=this.getBoundingClientRect();t.style.width="100%",this.iframe.style.left=`${i.left}px`,this.iframe.style.top=`${i.top}px`,this.iframe.style.width=`${i.width}px`,this.iframe.style.height=`${i.height}px`,this.onShowIframe()}};C.styles=oe;K([l()],C.prototype,"ready",void 0);C=K([w("w3m-approve-transaction-view")],C);const re=E`
  a {
    border: none;
    border-radius: ${({borderRadius:e})=>e[20]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  a[data-type='error'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  a[data-type='warning'] {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    a[data-type='success']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderSuccess};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderError};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderWarning};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a:disabled {
    opacity: 0.5;
  }
`;var y=function(e,t,i,s){var r=arguments.length,o=r<3?t:s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const ne={sm:"md-regular",md:"lg-regular",lg:"lg-regular"},se={success:"sealCheck",error:"warning",warning:"exclamationCircle"};let u=class extends f{constructor(){super(...arguments),this.type="success",this.size="md",this.imageSrc=void 0,this.disabled=!1,this.href="",this.text=void 0}render(){return c`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${ne[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `}imageTemplate(){return this.imageSrc?c`<wui-image src=${this.imageSrc} size="inherit"></wui-image>`:c`<wui-icon
      name=${se[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`}};u.styles=[D,F,re];y([d()],u.prototype,"type",void 0);y([d()],u.prototype,"size",void 0);y([d()],u.prototype,"imageSrc",void 0);y([d({type:Boolean})],u.prototype,"disabled",void 0);y([d()],u.prototype,"href",void 0);y([d()],u.prototype,"text",void 0);u=y([w("wui-semantic-chip")],u);var ae=function(e,t,i,s){var r=arguments.length,o=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let B=class extends f{render(){return c`
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${O.SECURE_SITE_DASHBOARD}
          href=${O.SECURE_SITE_DASHBOARD}
          imageSrc=${O.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};B=ae([w("w3m-upgrade-wallet-view")],B);var A=function(e,t,i,s){var r=arguments.length,o=r<3?t:s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let $=class extends f{constructor(){super(...arguments),this.loading=!1,this.switched=!1,this.text="",this.network=h.state.activeCaipNetwork}render(){return c`
      <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
        ${this.togglePreferredAccountTypeTemplate()} ${this.toggleSmartAccountVersionTemplate()}
      </wui-flex>
    `}toggleSmartAccountVersionTemplate(){return c`
      <w3m-tooltip-trigger text="Changing the smart account version will reload the page">
        <wui-list-item
          icon=${this.isV6()?"arrowTop":"arrowBottom"}
          ?rounded=${!0}
          ?chevron=${!0}
          data-testid="account-toggle-smart-account-version"
          @click=${this.toggleSmartAccountVersion.bind(this)}
        >
          <wui-text variant="lg-regular" color="primary"
            >Force Smart Account Version ${this.isV6()?"7":"6"}</wui-text
          >
        </wui-list-item>
      </w3m-tooltip-trigger>
    `}isV6(){return(M.get("dapp_smart_account_version")||"v6")==="v6"}toggleSmartAccountVersion(){var e;M.set("dapp_smart_account_version",this.isV6()?"v7":"v6"),typeof window<"u"&&((e=window?.location)==null||e.reload())}togglePreferredAccountTypeTemplate(){var e;const t=(e=this.network)==null?void 0:e.chainNamespace,i=h.checkIfSmartAccountEnabled(),s=T.getConnectorId(t);return!T.getAuthConnector()||s!==P.CONNECTOR_ID.AUTH||!i?null:(this.switched||(this.text=S(t)===g.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),c`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `)}async changePreferredAccountType(){var e;const t=(e=this.network)==null?void 0:e.chainNamespace,i=h.checkIfSmartAccountEnabled(),s=S(t)===g.ACCOUNT_TYPES.SMART_ACCOUNT||!i?g.ACCOUNT_TYPES.EOA:g.ACCOUNT_TYPES.SMART_ACCOUNT;T.getAuthConnector()&&(this.loading=!0,await Q.setPreferredAccountType(s,t),this.text=s===g.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,ee.resetSend(),this.loading=!1,this.requestUpdate())}};A([l()],$.prototype,"loading",void 0);A([l()],$.prototype,"switched",void 0);A([l()],$.prototype,"text",void 0);A([l()],$.prototype,"network",void 0);$=A([w("w3m-smart-account-settings-view")],$);const ce=E`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
      border-radius: ${({borderRadius:e})=>e[6]};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`;var R=function(e,t,i,s){var r=arguments.length,o=r<3?t:s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let b=class extends f{constructor(){super(...arguments),this.name="",this.registered=!1,this.loading=!1,this.disabled=!1}render(){return c`
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `}templateRightContent(){return this.loading?c`<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`:this.registered?c`<wui-tag variant="info" size="sm">Registered</wui-tag>`:c`<wui-tag variant="success" size="sm">Available</wui-tag>`}};b.styles=[D,F,ce];R([d()],b.prototype,"name",void 0);R([d({type:Boolean})],b.prototype,"registered",void 0);R([d({type:Boolean})],b.prototype,"loading",void 0);R([d({type:Boolean})],b.prototype,"disabled",void 0);b=R([w("wui-account-name-suggestion-item")],b);const de=E`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${({spacing:e})=>e[4]};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var k=function(e,t,i,s){var r=arguments.length,o=r<3?t:s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let m=class extends f{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return c`
      <wui-input-text
        value=${te(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `}};m.styles=[D,de];k([d()],m.prototype,"errorMessage",void 0);k([d({type:Boolean})],m.prototype,"disabled",void 0);k([d()],m.prototype,"value",void 0);k([d({type:Boolean})],m.prototype,"loading",void 0);k([d({attribute:!1})],m.prototype,"onKeyDown",void 0);m=k([w("wui-ens-input")],m);const le=E`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[6]};
    padding: ${({spacing:e})=>e[4]};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var v=function(e,t,i,s){var r=arguments.length,o=r<3?t:s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let p=class extends f{constructor(){var e;super(),this.formRef=X(),this.usubscribe=[],this.name="",this.error="",this.loading=x.state.loading,this.suggestions=x.state.suggestions,this.profileName=(e=h.getAccountData())==null?void 0:e.profileName,this.onDebouncedNameInputChange=z.debounce(t=>{t.length<4?this.error="Name must be at least 4 characters long":N.isValidReownName(t)?(this.error="",x.getSuggestions(t)):this.error="The value is not a valid username"}),this.usubscribe.push(x.subscribe(t=>{this.suggestions=t.suggestions,this.loading=t.loading}),h.subscribeChainProp("accountState",t=>{this.profileName=t?.profileName,t!=null&&t.profileName&&(this.error="You already own a name")}))}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.usubscribe.forEach(t=>t()),(e=this.formRef.value)==null||e.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["1","3","4","3"]}
      >
        <form ${Z(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){const e=this.suggestions.find(i=>{var s,r;return((r=(s=i.name)==null?void 0:s.split("."))==null?void 0:r[0])===this.name&&i.registered});if(this.loading)return c`<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;const t=`${this.name}${P.WC_NAME_SUFFIX}`;return c`
      <wui-icon-link
        ?disabled=${!!e}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${e?"default":"accent-primary"}
        @click=${()=>this.onSubmitName(t)}
      >
      </wui-icon-link>
    `}onNameInputChange(e){const t=N.validateReownName(e.detail||"");this.name=t,this.onDebouncedNameInputChange(t)}onKeyDown(e){e.key.length===1&&!N.isValidReownName(e.key)&&e.preventDefault()}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:c`<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map(e=>c`<wui-account-name-suggestion-item
            name=${e.name}
            ?registered=${e.registered}
            ?loading=${this.loading}
            ?disabled=${e.registered||this.loading}
            data-testid="account-name-suggestion"
            @click=${()=>this.onSubmitName(e.name)}
          ></wui-account-name-suggestion-item>`)}
    </wui-flex>`}isAllowedToSubmit(e){var t;const i=(t=e.split("."))==null?void 0:t[0],s=this.suggestions.find(r=>{var o,n;return((n=(o=r.name)==null?void 0:o.split("."))==null?void 0:n[0])===i&&r.registered});return!this.loading&&!this.error&&!this.profileName&&i&&x.validateName(i)&&!s}async onSubmitName(e){try{if(!this.isAllowedToSubmit(e))return;_.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:S(h.state.activeChain)===g.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await x.registerName(e),_.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:S(h.state.activeChain)===g.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(t){J.showError(t.message),_.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:S(h.state.activeChain)===g.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e,error:z.parseError(t)}})}}onEnterKey(e){if(e.key==="Enter"&&this.name&&this.isAllowedToSubmit(this.name)){const t=`${this.name}${P.WC_NAME_SUFFIX}`;this.onSubmitName(t)}}};p.styles=le;v([d()],p.prototype,"errorMessage",void 0);v([l()],p.prototype,"name",void 0);v([l()],p.prototype,"error",void 0);v([l()],p.prototype,"loading",void 0);v([l()],p.prototype,"suggestions",void 0);v([l()],p.prototype,"profileName",void 0);p=v([w("w3m-register-account-name-view")],p);const ue=W`
  .continue-button-container {
    width: 100%;
  }
`;var pe=function(e,t,i,s){var r=arguments.length,o=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let U=class extends f{render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{z.openHref(G.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return c` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return c`<wui-flex
      .padding=${["0","4","0","4"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){q.replace("Account")}};U.styles=ue;U=pe([w("w3m-register-account-name-success-view")],U);export{C as W3mApproveTransactionView,U as W3mRegisterAccountNameSuccess,p as W3mRegisterAccountNameView,$ as W3mSmartAccountSettingsView,B as W3mUpgradeWalletView};
