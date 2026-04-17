import{c as k,_ as c,q as M,f as l,X as D,C as w,Z as h,D as N,e as y,E as V,K as z,x as Z,n as j,z as Q,F as X,O as q,I as v,l as d,J as u,i as K,k as Y,a as F,b as L,A as H,m as G,o as x}from"./index-c2qiNSbQ.js";import"./index-BELkox9w-BISUFNYQ.js";import"./index-BhxZMwG4-Bi-NZUwH.js";import{a as J}from"./SwapController-C7f4Tbbl-D52fAc6H.js";const ee=v`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e[5]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: ${({tokens:e})=>e.theme.textPrimary};
    margin: 0 ${({spacing:e})=>e[2]};
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: ${({fontFamily:e})=>e.regular};
    font-style: normal;
    font-size: ${({textSize:e})=>e.large};
    font-weight: ${({fontWeight:e})=>e.regular};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var E=function(e,t,n,o){var r=arguments.length,i=r<3?t:o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let $=class extends k{constructor(){super(...arguments),this.inputElementRef=F(),this.instructionElementRef=F(),this.readOnly=!1,this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=D.debounce(async e=>{if(!e.length){this.setReceiverAddress("");return}const t=w.state.activeChain;if(D.isAddress(e,t)){this.setReceiverAddress(e);return}try{const n=await j.getEnsAddress(e);if(n){l.setReceiverProfileName(e),l.setReceiverAddress(n);const o=await j.getEnsAvatar(e);l.setReceiverProfileImageUrl(o||void 0)}}catch{this.setReceiverAddress(e)}finally{l.setLoading(!1)}})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return this.readOnly?c` <wui-flex
        flexDirection="column"
        justifyContent="center"
        gap="01"
        .padding=${["8","4","5","4"]}
      >
        <textarea
          spellcheck="false"
          ?disabled=${!0}
          autocomplete="off"
          .value=${this.value??""}
        >
           ${this.value??""}</textarea
        >
      </wui-flex>`:c` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="01"
      .padding=${["8","4","5","4"]}
    >
      <wui-text
        ${L(this.instructionElementRef)}
        class="instruction"
        color="secondary"
        variant="md-medium"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral-secondary"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${L(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){var e;this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",(e=this.inputElementRef.value)==null||e.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){var e;this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",(e=this.inputElementRef.value)==null||e.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){!this.value&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.value&&this.instructionHidden&&!this.pasting&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;const e=await navigator.clipboard.readText();l.setReceiverAddress(e),this.focusInput()}onInputChange(e){var t;const n=e.target;this.pasting=!1,this.value=(t=e.target)==null?void 0:t.value,n.value&&!this.instructionHidden&&this.focusInput(),l.setLoading(!0),this.onDebouncedSearch(n.value)}setReceiverAddress(e){l.setReceiverAddress(e),l.setReceiverProfileName(void 0),l.setReceiverProfileImageUrl(void 0),l.setLoading(!1)}};$.styles=ee;E([d()],$.prototype,"value",void 0);E([d({type:Boolean})],$.prototype,"readOnly",void 0);E([u()],$.prototype,"instructionHidden",void 0);E([u()],$.prototype,"pasting",void 0);$=E([x("w3m-input-address")],$);const te=v`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e[5]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
    transition: all ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.lg};
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var P=function(e,t,n,o){var r=arguments.length,i=r<3?t:o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let A=class extends k{constructor(){super(...arguments),this.readOnly=!1,this.isInsufficientBalance=!1}render(){const e=this.readOnly||!this.token;return c` <wui-flex
      flexDirection="column"
      gap="01"
      .padding=${["5","3","4","3"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${e}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
          ?error=${!!this.isInsufficientBalance}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      ${this.bottomTemplate()}
    </wui-flex>`}buttonTemplate(){return this.token?c`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:c`<wui-button
      size="md"
      variant="neutral-secondary"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){this.readOnly||h.push("WalletSendSelectToken")}sendValueTemplate(){if(!this.readOnly&&this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return c`<wui-text class="totalValue" variant="sm-regular" color="secondary"
        >${e?`$${H.formatNumberToLocalString(e,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?c` <wui-text variant="sm-regular" color="secondary">
        ${N.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?c`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}bottomTemplate(){return this.readOnly?null:c`<wui-flex alignItems="center" justifyContent="space-between">
      ${this.sendValueTemplate()}
      <wui-flex alignItems="center" gap="01" justifyContent="flex-end">
        ${this.maxAmountTemplate()} ${this.actionTemplate()}
      </wui-flex>
    </wui-flex>`}onInputChange(e){l.setTokenAmount(e.detail)}onMaxClick(){if(this.token){const e=H.bigNumber(this.token.quantity.numeric);l.setTokenAmount(Number(e.toFixed(20)))}}};A.styles=te;P([d({type:Object})],A.prototype,"token",void 0);P([d({type:Boolean})],A.prototype,"readOnly",void 0);P([d({type:Number})],A.prototype,"sendTokenAmount",void 0);P([d({type:Boolean})],A.prototype,"isInsufficientBalance",void 0);A=P([x("w3m-input-token")],A);const ie=v`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[10]} !important;
    border: 4px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var g=function(e,t,n,o){var r=arguments.length,i=r<3?t:o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};const f={INSUFFICIENT_FUNDS:"Insufficient Funds",INCORRECT_VALUE:"Incorrect Value",INVALID_ADDRESS:"Invalid Address",ADD_ADDRESS:"Add Address",ADD_AMOUNT:"Add Amount",SELECT_TOKEN:"Select Token",PREVIEW_SEND:"Preview Send"};let p=class extends k{constructor(){var e,t;super(),this.unsubscribe=[],this.isTryingToChooseDifferentWallet=!1,this.token=l.state.token,this.sendTokenAmount=l.state.sendTokenAmount,this.receiverAddress=l.state.receiverAddress,this.receiverProfileName=l.state.receiverProfileName,this.loading=l.state.loading,this.params=(e=h.state.data)==null?void 0:e.send,this.caipAddress=(t=w.getAccountData())==null?void 0:t.caipAddress,this.message=f.PREVIEW_SEND,this.disconnecting=!1,this.token&&!this.params&&(this.fetchBalances(),this.fetchNetworkPrice());const n=w.subscribeKey("activeCaipAddress",o=>{!o&&this.isTryingToChooseDifferentWallet&&(this.isTryingToChooseDifferentWallet=!1,M.open({view:"Connect",data:{redirectView:"WalletSend"}}).catch(()=>null),n())});this.unsubscribe.push(w.subscribeAccountStateProp("caipAddress",o=>{this.caipAddress=o}),l.subscribe(o=>{this.token=o.token,this.sendTokenAmount=o.sendTokenAmount,this.receiverAddress=o.receiverAddress,this.receiverProfileName=o.receiverProfileName,this.loading=o.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}async firstUpdated(){await this.handleSendParameters()}render(){this.getMessage();const e=!!this.params;return c` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex class="inputContainer" gap="2" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          ?readOnly=${e}
          ?isInsufficientBalance=${this.message===f.INSUFFICIENT_FUNDS}
        ></w3m-input-token>
        <wui-icon-box size="md" variant="secondary" icon="arrowBottom"></wui-icon-box>
        <w3m-input-address
          ?readOnly=${e}
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      ${this.buttonTemplate()}
    </wui-flex>`}async fetchBalances(){await l.fetchTokenBalance(),l.fetchNetworkBalance()}async fetchNetworkPrice(){await J.getNetworkTokenPrice()}onButtonClick(){h.push("WalletSendPreview",{send:this.params})}onFundWalletClick(){h.push("FundWallet",{redirectView:"WalletSend"})}async onConnectDifferentWalletClick(){try{this.isTryingToChooseDifferentWallet=!0,this.disconnecting=!0,await j.disconnect()}finally{this.disconnecting=!1}}getMessage(){var e;this.message=f.PREVIEW_SEND,this.receiverAddress&&!D.isAddress(this.receiverAddress,w.state.activeChain)&&(this.message=f.INVALID_ADDRESS),this.receiverAddress||(this.message=f.ADD_ADDRESS),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message=f.INSUFFICIENT_FUNDS),this.sendTokenAmount||(this.message=f.ADD_AMOUNT),this.sendTokenAmount&&(e=this.token)!=null&&e.price&&(this.sendTokenAmount*this.token.price||(this.message=f.INCORRECT_VALUE)),this.token||(this.message=f.SELECT_TOKEN)}buttonTemplate(){const e=!this.message.startsWith(f.PREVIEW_SEND),t=this.message===f.INSUFFICIENT_FUNDS,n=!!this.params;return t&&!n?c`
        <wui-flex .margin=${["4","0","0","0"]} flexDirection="column" gap="4">
          <wui-button
            @click=${this.onFundWalletClick.bind(this)}
            size="lg"
            variant="accent-secondary"
            fullWidth
          >
            Fund Wallet
          </wui-button>

          <wui-separator data-testid="wui-separator" text="or"></wui-separator>

          <wui-button
            @click=${this.onConnectDifferentWalletClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
            fullWidth
            ?loading=${this.disconnecting}
          >
            Connect a different wallet
          </wui-button>
        </wui-flex>
      `:c`<wui-flex .margin=${["4","0","0","0"]}>
      <wui-button
        @click=${this.onButtonClick.bind(this)}
        ?disabled=${e}
        size="lg"
        variant="accent-primary"
        ?loading=${this.loading}
        fullWidth
      >
        ${this.message}
      </wui-button>
    </wui-flex>`}async handleSendParameters(){if(this.loading=!0,!this.params){this.loading=!1;return}const e=Number(this.params.amount);if(isNaN(e)){y.showError("Invalid amount"),this.loading=!1;return}const{namespace:t,chainId:n,assetAddress:o}=this.params;if(!Q.SEND_PARAMS_SUPPORTED_CHAINS.includes(t)){y.showError(`Chain "${t}" is not supported for send parameters`),this.loading=!1;return}const r=w.getCaipNetworkById(n,t);if(!r){y.showError(`Network with id "${n}" not found`),this.loading=!1;return}try{const{balance:i,name:s,symbol:a,decimals:U}=await X.fetchERC20Balance({caipAddress:this.caipAddress,assetAddress:o,caipNetwork:r});if(!s||!a||!U||!i){y.showError("Token not found");return}l.setToken({name:s,symbol:a,chainId:r.id.toString(),address:`${r.chainNamespace}:${r.id}:${o}`,value:0,price:0,quantity:{decimals:U.toString(),numeric:i.toString()},iconUrl:q.getTokenImage(a)??""}),l.setTokenAmount(e),l.setReceiverAddress(this.params.to)}catch(i){console.error("Failed to load token information:",i),y.showError("Failed to load token information")}finally{this.loading=!1}}};p.styles=ie;g([u()],p.prototype,"token",void 0);g([u()],p.prototype,"sendTokenAmount",void 0);g([u()],p.prototype,"receiverAddress",void 0);g([u()],p.prototype,"receiverProfileName",void 0);g([u()],p.prototype,"loading",void 0);g([u()],p.prototype,"params",void 0);g([u()],p.prototype,"caipAddress",void 0);g([u()],p.prototype,"message",void 0);g([u()],p.prototype,"disconnecting",void 0);p=g([x("w3m-wallet-send-view")],p);const ne=v`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }
`;var I=function(e,t,n,o){var r=arguments.length,i=r<3?t:o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let T=class extends k{constructor(){super(),this.unsubscribe=[],this.tokenBalances=l.state.tokenBalances,this.search="",this.onDebouncedSearch=D.debounce(e=>{this.search=e}),this.fetchBalancesAndNetworkPrice(),this.unsubscribe.push(l.subscribe(e=>{this.tokenBalances=e.tokenBalances}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}async fetchBalancesAndNetworkPrice(){var e;(!this.tokenBalances||((e=this.tokenBalances)==null?void 0:e.length)===0)&&(await this.fetchBalances(),await this.fetchNetworkPrice())}async fetchBalances(){await l.fetchTokenBalance(),l.fetchNetworkBalance()}async fetchNetworkPrice(){await J.getNetworkTokenPrice()}templateSearchInput(){return c`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){var e,t;return this.tokens=(e=this.tokenBalances)==null?void 0:e.filter(n=>{var o;return n.chainId===((o=w.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)}),this.search?this.filteredTokens=(t=this.tokenBalances)==null?void 0:t.filter(n=>n.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,c`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(n=>c`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,n)}
                    ?clickable=${!0}
                    tokenName=${n.name}
                    tokenImageUrl=${n.iconUrl}
                    tokenAmount=${n.quantity.numeric}
                    tokenValue=${n.value}
                    tokenCurrency=${n.symbol}
                  ></wui-list-token>`):c`<wui-flex
                .padding=${["20","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                  <wui-text variant="lg-regular" align="center" color="secondary">
                    Your tokens will appear here
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){h.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){l.setToken(e),l.setTokenAmount(void 0),h.goBack()}};T.styles=ne;I([u()],T.prototype,"tokenBalances",void 0);I([u()],T.prototype,"tokens",void 0);I([u()],T.prototype,"filteredTokens",void 0);I([u()],T.prototype,"search",void 0);T=I([x("w3m-wallet-send-select-token-view")],T);const re=v`
  :host {
    height: 32px;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[32]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[1]};
    padding-left: ${({spacing:e})=>e[2]};
  }

  wui-avatar,
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var B=function(e,t,n,o){var r=arguments.length,i=r<3?t:o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let R=class extends k{constructor(){super(...arguments),this.text=""}render(){return c`<wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.address?c`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?c`<wui-image src=${this.imageSrc}></wui-image>`:c`<wui-icon size="lg" color="inverse" name="networkPlaceholder"></wui-icon>`}};R.styles=[K,Y,re];B([d({type:String})],R.prototype,"text",void 0);B([d({type:String})],R.prototype,"address",void 0);B([d({type:String})],R.prototype,"imageSrc",void 0);R=B([x("wui-preview-item")],R);const oe=v`
  :host {
    display: flex;
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-image {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }
`;var O=function(e,t,n,o){var r=arguments.length,i=r<3?t:o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let C=class extends k{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return c`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="primary"> ${this.textTitle} </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?c`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?c` <wui-text variant="md-regular" color="secondary"> ${this.textValue} </wui-text>`:c`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};C.styles=[K,Y,oe];O([d()],C.prototype,"imageSrc",void 0);O([d()],C.prototype,"textTitle",void 0);O([d()],C.prototype,"textValue",void 0);C=O([x("wui-list-content")],C);const se=v`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[5]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
  }

  wui-list-content {
    width: -webkit-fill-available !important;
  }

  wui-text {
    padding: 0 ${({spacing:e})=>e[2]};
  }

  wui-flex {
    margin-top: ${({spacing:e})=>e[2]};
  }

  .network {
    cursor: pointer;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid ${({tokens:e})=>e.core.textAccentPrimary};
    background-color: ${({tokens:e})=>e.core.glass010};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
  }

  .network:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .network:active {
    background-color: ${({tokens:e})=>e.core.glass010};
  }
`;var _=function(e,t,n,o){var r=arguments.length,i=r<3?t:o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let S=class extends k{constructor(){var e;super(...arguments),this.params=(e=h.state.data)==null?void 0:e.send}render(){return c` <wui-text variant="sm-regular" color="secondary">Details</wui-text>
      <wui-flex flexDirection="column" gap="1">
        <wui-list-content
          textTitle="Address"
          textValue=${N.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){var e;return(e=this.caipNetwork)!=null&&e.name?c` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${G(q.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&!this.params&&h.push("Networks",{network:e})}};S.styles=se;_([d()],S.prototype,"receiverAddress",void 0);_([d({type:Object})],S.prototype,"caipNetwork",void 0);_([u()],S.prototype,"params",void 0);S=_([x("w3m-wallet-send-details")],S);const ae=v`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[20]};
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }
`;var b=function(e,t,n,o){var r=arguments.length,i=r<3?t:o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let m=class extends k{constructor(){var e;super(),this.unsubscribe=[],this.token=l.state.token,this.sendTokenAmount=l.state.sendTokenAmount,this.receiverAddress=l.state.receiverAddress,this.receiverProfileName=l.state.receiverProfileName,this.receiverProfileImageUrl=l.state.receiverProfileImageUrl,this.caipNetwork=w.state.activeCaipNetwork,this.loading=l.state.loading,this.params=(e=h.state.data)==null?void 0:e.send,this.unsubscribe.push(l.subscribe(t=>{this.token=t.token,this.sendTokenAmount=t.sendTokenAmount,this.receiverAddress=t.receiverAddress,this.receiverProfileName=t.receiverProfileName,this.receiverProfileImageUrl=t.receiverProfileImageUrl,this.loading=t.loading}),w.subscribeKey("activeCaipNetwork",t=>this.caipNetwork=t))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e,t;return c` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex gap="2" flexDirection="column" .padding=${["0","2","0","2"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="01">
            <wui-text variant="sm-regular" color="secondary">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?N.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${(e=this.token)==null?void 0:e.symbol}"
            .imageSrc=${(t=this.token)==null?void 0:t.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="default" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="sm-regular" color="secondary">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?N.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):N.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["6","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="1" .padding=${["3","0","0","0"]}>
          <wui-icon size="sm" color="default" name="warningCircle"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="3" .padding=${["4","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="accent-primary"
            .loading=${this.loading}
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(!this.params&&this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return c`<wui-text variant="md-regular" color="primary"
        >$${e.toFixed(2)}</wui-text
      >`}return null}async onSendClick(){if(!this.sendTokenAmount||!this.receiverAddress){y.showError("Please enter a valid amount and receiver address");return}try{await l.sendToken(),this.params?h.reset("WalletSendConfirmed"):(y.showSuccess("Transaction started"),h.replace("Account"))}catch(e){let t="Failed to send transaction";const n=e instanceof V&&e.originalName===z.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST,o=e instanceof V&&e.originalName===z.PROVIDER_RPC_ERROR_NAME.SEND_TRANSACTION_ERROR;(n||o)&&(t=e.message),Z.sendEvent({type:"track",event:n?"SEND_REJECTED":"SEND_ERROR",properties:l.getSdkEventProperties(e)}),y.showError(t)}}onCancelClick(){h.goBack()}};m.styles=ae;b([u()],m.prototype,"token",void 0);b([u()],m.prototype,"sendTokenAmount",void 0);b([u()],m.prototype,"receiverAddress",void 0);b([u()],m.prototype,"receiverProfileName",void 0);b([u()],m.prototype,"receiverProfileImageUrl",void 0);b([u()],m.prototype,"caipNetwork",void 0);b([u()],m.prototype,"loading",void 0);b([u()],m.prototype,"params",void 0);m=b([x("w3m-wallet-send-preview-view")],m);const le=v`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background-color: ${({spacing:e})=>e[16]};
    border: 8px solid ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e.round};
  }
`;var ce=function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let W=class extends k{constructor(){super(),this.unsubscribe=[],this.unsubscribe.push()}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="success" name="checkmark"></wui-icon>
        </wui-flex>

        <wui-text variant="h6-medium" color="primary">You successfully sent asset</wui-text>

        <wui-button
          fullWidth
          @click=${this.onCloseClick.bind(this)}
          size="lg"
          variant="neutral-secondary"
        >
          Close
        </wui-button>
      </wui-flex>
    `}onCloseClick(){M.close()}};W.styles=le;W=ce([x("w3m-send-confirmed-view")],W);export{W as W3mSendConfirmedView,T as W3mSendSelectTokenView,m as W3mWalletSendPreviewView,p as W3mWalletSendView};
