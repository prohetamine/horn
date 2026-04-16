import{c as k,T as A,a as h,y as $,_ as n,C as d,Y as E,v as u,X as b,W as C,r as T,n as P,b as g,f as y,q as R,p as U,s as _,k as L,P as F,J as c,t as W,i as D,w as N,x as q,F as z,o as I}from"./index-ClrMGoCy.js";const G=L`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var v=function(e,t,o,r){var s=arguments.length,i=s<3?t:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(s<3?a(i):s>3?a(t,o,i):a(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i};let p=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=E.state.connectors,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.remoteFeatures=h.state.remoteFeatures,this.isPwaLoading=!1,this.hasExceededUsageLimit=W.state.plan.hasExceededUsageLimit,this.unsubscribe.push(E.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(t=>t.type==="AUTH")}),h.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;let t=((e=this.remoteFeatures)==null?void 0:e.socials)||[];const o=!!this.authConnector,r=t?.length,s=g.state.view==="ConnectSocials";return(!o||!r)&&!s?null:(s&&!r&&(t=D.DEFAULT_SOCIALS),n` <wui-flex flexDirection="column" gap="2">
      ${t.map(i=>n`<wui-list-social
            @click=${()=>{this.onSocialClick(i)}}
            data-testid=${`social-selector-${i}`}
            name=${i}
            logo=${i}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`)}async onSocialClick(e){if(this.hasExceededUsageLimit){g.push("UsageExceeded");return}e&&await N(e)}async handlePwaFrameLoad(){var e;if(b.isPWA()){this.isPwaLoading=!0;try{((e=this.authConnector)==null?void 0:e.provider)instanceof q&&await this.authConnector.provider.init()}catch(t){z.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:t.message},"error")}finally{this.isPwaLoading=!1}}}};p.styles=G;v([F()],p.prototype,"tabIdx",void 0);v([c()],p.prototype,"connectors",void 0);v([c()],p.prototype,"authConnector",void 0);v([c()],p.prototype,"remoteFeatures",void 0);v([c()],p.prototype,"isPwaLoading",void 0);v([c()],p.prototype,"hasExceededUsageLimit",void 0);p=v([I("w3m-social-login-list")],p);const j=L`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.md}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: opacity;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var O=function(e,t,o,r){var s=arguments.length,i=s<3?t:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(s<3?a(i):s>3?a(t,o,i):a(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i};let S=class extends k{constructor(){super(),this.unsubscribe=[],this.checked=A.state.isLegalCheckboxChecked,this.unsubscribe.push(A.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:o}=h.state,r=(e=h.state.features)==null?void 0:e.legalCheckbox,s=!!(t||o)&&!!r&&!this.checked,i=s?-1:void 0;return n`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="01"
        class=${$(s?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${$(i)}></w3m-social-login-list>
      </wui-flex>
    `}};S.styles=j;O([c()],S.prototype,"checked",void 0);S=O([I("w3m-connect-socials-view")],S);const M=L`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e[8]};
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:e})=>e["ease-out-power-2"]}
      ${({durations:e})=>e.lg};
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var f=function(e,t,o,r){var s=arguments.length,i=s<3?t:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(s<3?a(i):s>3?a(t,o,i):a(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i};let m=class extends k{constructor(){var e,t,o;super(),this.unsubscribe=[],this.socialProvider=(e=d.getAccountData())==null?void 0:e.socialProvider,this.socialWindow=(t=d.getAccountData())==null?void 0:t.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.remoteFeatures=h.state.remoteFeatures,this.address=(o=d.getAccountData())==null?void 0:o.address,this.connectionsByNamespace=P.getConnections(d.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=E.getAuthConnector(),this.handleSocialConnection=async r=>{var s;if((s=r.data)!=null&&s.resultUri)if(r.origin===U.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.connecting=!0;const i=this.parseURLError(r.data.resultUri);if(i){this.handleSocialError(i);return}this.closeSocialWindow(),this.updateMessage();const a=r.data.resultUri;this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await P.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:a},this.authConnector.chain),this.socialProvider&&(T.setConnectedSocialProvider(this.socialProvider),u.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(i){this.error=!0,this.updateMessage(),this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:b.parseError(i)}})}}else g.goBack(),y.showError("Untrusted Origin"),this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:"Untrusted Origin"}})},_.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.closeSocialWindow()}),this.unsubscribe.push(d.subscribeChainProp("accountState",r=>{var s;if(r&&(this.socialProvider=r.socialProvider,r.socialWindow&&(this.socialWindow=r.socialWindow),r.address)){const i=(s=this.remoteFeatures)==null?void 0:s.multiWallet;r.address!==this.address&&(this.hasMultipleConnections&&i?(g.replace("ProfileWallets"),y.showSuccess("New Wallet Added"),this.address=r.address):(R.state.open||h.state.enableEmbedded)&&R.close())}}),h.subscribeKey("remoteFeatures",r=>{this.remoteFeatures=r})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1),!d.state.activeCaipAddress&&this.socialProvider&&!this.connecting&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),this.closeSocialWindow()}render(){return n`
      <wui-flex
        data-error=${$(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${$(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?"error":"secondary"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=C.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return n`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}parseURLError(e){try{const t="error=",o=e.indexOf(t);return o===-1?null:e.substring(o+t.length)}catch{return null}}connectSocial(){const e=setInterval(()=>{var t;(t=this.socialWindow)!=null&&t.closed&&(!this.connecting&&g.state.view==="ConnectingSocial"&&g.goBack(),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}handleSocialError(e){this.error=!0,this.updateMessage(),this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:e}}),this.closeSocialWindow()}closeSocialWindow(){this.socialWindow&&(this.socialWindow.close(),d.setAccountProp("socialWindow",void 0,d.state.activeChain))}};m.styles=M;f([c()],m.prototype,"socialProvider",void 0);f([c()],m.prototype,"socialWindow",void 0);f([c()],m.prototype,"error",void 0);f([c()],m.prototype,"connecting",void 0);f([c()],m.prototype,"message",void 0);f([c()],m.prototype,"remoteFeatures",void 0);m=f([I("w3m-connecting-social-view")],m);const V=L`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e[8]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var x=function(e,t,o,r){var s=arguments.length,i=s<3?t:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(s<3?a(i):s>3?a(t,o,i):a(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i};let w=class extends k{constructor(){var e,t;super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=(e=d.getAccountData())==null?void 0:e.socialProvider,this.uri=(t=d.getAccountData())==null?void 0:t.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=h.state.remoteFeatures,this.authConnector=E.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(d.subscribeChainProp("accountState",o=>{this.socialProvider=o?.socialProvider,this.uri=o?.farcasterUrl,this.connectFarcaster()}),h.subscribeKey("remoteFeatures",o=>{this.remoteFeatures=o})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate),!d.state.activeCaipAddress&&this.socialProvider&&(this.uri||this.loading)&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}})}render(){return this.onRenderProxy(),n`${this.platformTemplate()}`}platformTemplate(){return b.isMobile()?n`${this.mobileTemplate()}`:n`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?n`${this.loadingTemplate()}`:n`${this.qrTemplate()}`}qrTemplate(){return n` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","5","5","5"]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return n`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["5","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return n` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["10","5","5","5"]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=C.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return n`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}async connectFarcaster(){var e,t;if(this.authConnector)try{await((e=this.authConnector)==null?void 0:e.provider.connectFarcaster()),this.socialProvider&&(T.setConnectedSocialProvider(this.socialProvider),u.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0;const o=P.getConnections(this.authConnector.chain).length>0;await P.connectExternal(this.authConnector,this.authConnector.chain);const r=(t=this.remoteFeatures)==null?void 0:t.multiWallet;this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,o&&r?(g.replace("ProfileWallets"),y.showSuccess("New Wallet Added")):R.close()}catch(o){this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:b.parseError(o)}}),g.goBack(),y.showError(o)}}mobileLinkTemplate(){return n`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&b.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=C.state.themeVariables["--apkt-qr-color"]??C.state.themeVariables["--w3m-qr-color"];return n` <wui-qr-code
      size=${e}
      theme=${C.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${$(t)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return n`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(b.copyToClopboard(this.uri),y.showSuccess("Link copied"))}catch{y.showError("Failed to copy")}}};w.styles=V;x([c()],w.prototype,"socialProvider",void 0);x([c()],w.prototype,"uri",void 0);x([c()],w.prototype,"ready",void 0);x([c()],w.prototype,"loading",void 0);x([c()],w.prototype,"remoteFeatures",void 0);w=x([I("w3m-connecting-farcaster-view")],w);export{S as W3mConnectSocialsView,w as W3mConnectingFarcasterView,m as W3mConnectingSocialView};
