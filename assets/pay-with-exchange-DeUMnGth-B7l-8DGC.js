import{c as v,Q as a,X as D,_ as r,Z as w,C as f,m as I,O as S,e as b,n as z,I as P,i as L,k as R,l as p,J as d,o as $}from"./index-C-5XRWwr.js";import"./index-BELkox9w-CFhHCQUL.js";const T=P`
  button {
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
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, box-shadow;
  }

  /* -- Variants --------------------------------------------------------------- */
  button[data-type='accent'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-type='neutral'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  /* -- Sizes --------------------------------------------------------------- */
  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='sm'] > wui-image,
  button[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image,
  button[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-image,
  button[data-size='lg'] > wui-icon {
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
    button[data-type='accent']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.core.foregroundAccent060};
    }

    button[data-type='neutral']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  button[data-type='accent']:not(:disabled):focus-visible,
  button[data-type='accent']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-type='neutral']:not(:disabled):focus-visible,
  button[data-type='neutral']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var g=function(e,n,t,c){var o=arguments.length,i=o<3?n:c,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,n,t,c);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(i=(o<3?s(i):o>3?s(n,t,i):s(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i};const j={sm:"sm-regular",md:"md-regular",lg:"lg-regular"};let m=class extends v{constructor(){super(...arguments),this.type="accent",this.size="md",this.imageSrc="",this.disabled=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.text=""}render(){return r`
      <button ?disabled=${this.disabled} data-type=${this.type} data-size=${this.size}>
        ${this.imageSrc?r`<wui-image src=${this.imageSrc}></wui-image>`:null}
        ${this.leftIcon?r`<wui-icon name=${this.leftIcon} color="inherit" size="inherit"></wui-icon>`:null}
        <wui-text variant=${j[this.size]} color="inherit">${this.text}</wui-text>
        ${this.rightIcon?r`<wui-icon name=${this.rightIcon} color="inherit" size="inherit"></wui-icon>`:null}
      </button>
    `}};m.styles=[L,R,T];g([p()],m.prototype,"type",void 0);g([p()],m.prototype,"size",void 0);g([p()],m.prototype,"imageSrc",void 0);g([p({type:Boolean})],m.prototype,"disabled",void 0);g([p()],m.prototype,"leftIcon",void 0);g([p()],m.prototype,"rightIcon",void 0);g([p()],m.prototype,"text",void 0);m=g([$("wui-chip-button")],m);var k=function(e,n,t,c){var o=arguments.length,i=o<3?n:c,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,n,t,c);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(i=(o<3?s(i):o>3?s(n,t,i):s(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i};let x=class extends v{constructor(){super(...arguments),this.maxDecimals=void 0,this.maxIntegers=void 0}render(){return r`
      <wui-flex alignItems="center" gap="1">
        <wui-input-amount
          widthVariant="fit"
          fontSize="h2"
          .maxDecimals=${I(this.maxDecimals)}
          .maxIntegers=${I(this.maxIntegers)}
          .value=${this.amount?String(this.amount):""}
        ></wui-input-amount>
        <wui-text variant="md-regular" color="secondary">USD</wui-text>
      </wui-flex>
    `}};k([p({type:Number})],x.prototype,"amount",void 0);k([p({type:Number})],x.prototype,"maxDecimals",void 0);k([p({type:Number})],x.prototype,"maxIntegers",void 0);x=k([$("w3m-fund-input")],x);const N=P`
  .amount-input-container {
    border-radius: ${({borderRadius:e})=>e[6]};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[1]};
  }

  .container {
    border-radius: 30px;
  }
`;var h=function(e,n,t,c){var o=arguments.length,i=o<3?n:c,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,n,t,c);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(i=(o<3?s(i):o>3?s(n,t,i):s(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i};const C=[10,50,100],E=6,O=10;let l=class extends v{constructor(){super(),this.unsubscribe=[],this.network=f.state.activeCaipNetwork,this.exchanges=a.state.exchanges,this.isLoading=a.state.isLoading,this.amount=a.state.amount,this.tokenAmount=a.state.tokenAmount,this.priceLoading=a.state.priceLoading,this.isPaymentInProgress=a.state.isPaymentInProgress,this.currentPayment=a.state.currentPayment,this.paymentId=a.state.paymentId,this.paymentAsset=a.state.paymentAsset,this.unsubscribe.push(f.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.setDefaultPaymentAsset()}),a.subscribe(e=>{var n,t;this.exchanges=e.exchanges,this.isLoading=e.isLoading,this.amount=e.amount,this.tokenAmount=e.tokenAmount,this.priceLoading=e.priceLoading,this.paymentId=e.paymentId,this.isPaymentInProgress=e.isPaymentInProgress,this.currentPayment=e.currentPayment,this.paymentAsset=e.paymentAsset,e.isPaymentInProgress&&((n=e.currentPayment)!=null&&n.exchangeId)&&((t=e.currentPayment)!=null&&t.sessionId)&&e.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),a.state.isPaymentInProgress||a.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),a.setAmount(C[0]),await a.fetchExchanges()}render(){return r`
      <wui-flex flexDirection="column" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map(()=>r`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`)}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map(e=>r`<wui-list-item
              @click=${()=>this.onExchangeClick(e)}
              chevron
              variant="image"
              imageSrc=${e.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="primary">
                Deposit from ${e.name}
              </wui-text>
            </wui-list-item>`):r`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return r`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){var e,n;return r`
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        class="amount-input-container"
      >
        <wui-flex
          justifyContent="space-between"
          alignItems="center"
          .margin=${["0","0","6","0"]}
        >
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>
          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${((e=this.paymentAsset)==null?void 0:e.metadata.symbol)||""}
            imageSrc=${((n=this.paymentAsset)==null?void 0:n.metadata.iconUrl)||""}
            @click=${()=>w.push("PayWithExchangeSelectAsset")}
            size="lg"
            .chainImageSrc=${I(S.getNetworkImage(this.network))}
          >
          </wui-token-button>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          .margin=${["0","0","4","0"]}
        >
          <w3m-fund-input
            @inputChange=${this.onAmountChange.bind(this)}
            .amount=${this.amount}
            .maxDecimals=${E}
            .maxIntegers=${O}
          >
          </w3m-fund-input>
          ${this.tokenAmountTemplate()}
        </wui-flex>
        <wui-flex justifyContent="center" gap="2">
          ${C.map(t=>r`<wui-chip-button
                @click=${()=>a.setAmount(t)}
                type="neutral"
                size="lg"
                text=${`$${t}`}
              ></wui-chip-button>`)}
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){var e;return this.priceLoading?r`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:r`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${(e=this.paymentAsset)==null?void 0:e.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(e){if(!this.amount){b.showError("Please enter an amount");return}await a.handlePayWithExchange(e.id)}handlePaymentInProgress(){var e,n;const t=f.state.activeChain,{redirectView:c="Account"}=w.state.data??{};this.isPaymentInProgress&&(e=this.currentPayment)!=null&&e.exchangeId&&(n=this.currentPayment)!=null&&n.sessionId&&this.paymentId&&(a.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(o=>{o.status==="SUCCESS"?(b.showSuccess("Deposit completed"),a.reset(),t&&(f.fetchTokenBalance(),z.updateBalance(t)),w.replace("Transactions")):o.status==="FAILED"&&b.showError("Deposit failed")}),b.showLoading("Deposit in progress..."),w.replace(c))}onAmountChange({detail:e}){a.setAmount(e?Number(e):null)}async getPaymentAssets(){this.network&&await a.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){const e=await a.getAssetsForNetwork(this.network.caipNetworkId);e[0]&&a.setPaymentAsset(e[0])}}};l.styles=N;h([d()],l.prototype,"network",void 0);h([d()],l.prototype,"exchanges",void 0);h([d()],l.prototype,"isLoading",void 0);h([d()],l.prototype,"amount",void 0);h([d()],l.prototype,"tokenAmount",void 0);h([d()],l.prototype,"priceLoading",void 0);h([d()],l.prototype,"isPaymentInProgress",void 0);h([d()],l.prototype,"currentPayment",void 0);h([d()],l.prototype,"paymentId",void 0);h([d()],l.prototype,"paymentAsset",void 0);l=h([$("w3m-deposit-from-exchange-view")],l);const B=P`
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
`;var A=function(e,n,t,c){var o=arguments.length,i=o<3?n:c,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,n,t,c);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(i=(o<3?s(i):o>3?s(n,t,i):s(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i};let y=class extends v{constructor(){super(),this.unsubscribe=[],this.assets=a.state.assets,this.search="",this.onDebouncedSearch=D.debounce(e=>{this.search=e}),this.unsubscribe.push(a.subscribe(e=>{this.assets=e.assets}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return r`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.assets.filter(t=>t.metadata.name.toLowerCase().includes(this.search.toLowerCase())),n=e.length>0;return r`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${n?e.map(t=>r`<wui-list-item
                    .imageSrc=${t.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,t)}
                  >
                    <wui-text variant="md-medium" color="primary">${t.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${t.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`):r`<wui-flex
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
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){w.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){a.setPaymentAsset(e),w.goBack()}};y.styles=B;A([d()],y.prototype,"assets",void 0);A([d()],y.prototype,"search",void 0);y=A([$("w3m-deposit-from-exchange-select-asset-view")],y);export{y as W3mDepositFromExchangeSelectAssetView,l as W3mDepositFromExchangeView};
