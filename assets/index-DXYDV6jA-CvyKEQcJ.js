import{ab as y,O as k,x as z,X as R,A as x,e as _,F as ke,C as m,ac as I,W as A,n as N,q as G,a8 as Ne,a9 as Te,aa as Se,c as P,Y as E,_ as l,m as g,D as Pe,ad as xe,Z as M,ae as Ce,af as $e,ag as _e,V as re,ah as de,I as O,i as ve,k as Re,l as b,J as h,S as Oe,g as Ue,B as pe,o as C}from"./index-C-5XRWwr.js";const qe=O`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var D=function(e,t,i,s){var a=arguments.length,n=a<3?t:s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let T=class extends P{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return l`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${g(this.iconSize)}></wui-icon>
    </button>`}};T.styles=[ve,Re,qe];D([b()],T.prototype,"icon",void 0);D([b()],T.prototype,"variant",void 0);D([b()],T.prototype,"type",void 0);D([b()],T.prototype,"size",void 0);D([b()],T.prototype,"iconSize",void 0);D([b({type:Boolean})],T.prototype,"fullWidth",void 0);D([b({type:Boolean})],T.prototype,"disabled",void 0);T=D([C("wui-icon-button")],T);const d={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS",UNABLE_TO_GET_TOKEN_BALANCES:"UNABLE_TO_GET_TOKEN_BALANCES",UNABLE_TO_GET_QUOTE:"UNABLE_TO_GET_QUOTE",UNABLE_TO_GET_QUOTE_STATUS:"UNABLE_TO_GET_QUOTE_STATUS",INVALID_RECIPIENT_ADDRESS_FOR_ASSET:"INVALID_RECIPIENT_ADDRESS_FOR_ASSET"},q={[d.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[d.INVALID_RECIPIENT]:"Invalid recipient address",[d.INVALID_ASSET]:"Invalid asset specified",[d.INVALID_AMOUNT]:"Invalid payment amount",[d.INVALID_RECIPIENT_ADDRESS_FOR_ASSET]:"Invalid recipient address for the asset selected",[d.UNKNOWN_ERROR]:"Unknown payment error occurred",[d.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[d.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[d.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[d.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[d.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[d.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[d.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status",[d.UNABLE_TO_GET_TOKEN_BALANCES]:"Unable to get token balances",[d.UNABLE_TO_GET_QUOTE]:"Unable to get quote. Please choose a different token",[d.UNABLE_TO_GET_QUOTE_STATUS]:"Unable to get quote status"};class p extends Error{get message(){return q[this.code]}constructor(t,i){super(q[t]),this.name="AppKitPayError",this.code=t,this.details=i,Error.captureStackTrace&&Error.captureStackTrace(this,p)}}const Le="https://rpc.walletconnect.org/v1/json-rpc",he="reown_test";function De(){const{chainNamespace:e}=y.parseCaipNetworkId(c.state.paymentAsset.network);if(!R.isAddress(c.state.recipient,e))throw new p(d.INVALID_RECIPIENT_ADDRESS_FOR_ASSET,`Provide valid recipient address for namespace "${e}"`)}async function Be(e,t,i){var s;if(t!==A.CHAIN.EVM)throw new p(d.INVALID_CHAIN_NAMESPACE);if(!i.fromAddress)throw new p(d.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.");const a=typeof i.amount=="string"?parseFloat(i.amount):i.amount;if(isNaN(a))throw new p(d.INVALID_PAYMENT_CONFIG);const n=((s=e.metadata)==null?void 0:s.decimals)??18,o=N.parseUnits(a.toString(),n);if(typeof o!="bigint")throw new p(d.GENERIC_PAYMENT_ERROR);return await N.sendTransaction({chainNamespace:t,to:i.recipient,address:i.fromAddress,value:o,data:"0x"})??void 0}async function Fe(e,t){if(!t.fromAddress)throw new p(d.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.");const i=e.asset,s=t.recipient,a=Number(e.metadata.decimals),n=N.parseUnits(t.amount.toString(),a);if(n===void 0)throw new p(d.GENERIC_PAYMENT_ERROR);return await N.writeContract({fromAddress:t.fromAddress,tokenAddress:i,args:[s,n],method:"transfer",abi:_e.getERC20Abi(i),chainNamespace:A.CHAIN.EVM})??void 0}async function je(e,t){if(e!==A.CHAIN.SOLANA)throw new p(d.INVALID_CHAIN_NAMESPACE);if(!t.fromAddress)throw new p(d.INVALID_PAYMENT_CONFIG,"fromAddress is required for Solana payments.");const i=typeof t.amount=="string"?parseFloat(t.amount):t.amount;if(isNaN(i)||i<=0)throw new p(d.INVALID_PAYMENT_CONFIG,"Invalid payment amount.");try{if(!$e.getProvider(e))throw new p(d.GENERIC_PAYMENT_ERROR,"No Solana provider available.");const s=await N.sendTransaction({chainNamespace:A.CHAIN.SOLANA,to:t.recipient,value:i,tokenMint:t.tokenMint});if(!s)throw new p(d.GENERIC_PAYMENT_ERROR,"Transaction failed.");return s}catch(s){throw s instanceof p?s:new p(d.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${s}`)}}async function ze({sourceToken:e,toToken:t,amount:i,recipient:s}){const a=N.parseUnits(i,e.metadata.decimals),n=N.parseUnits(i,t.metadata.decimals);return Promise.resolve({type:se,origin:{amount:a?.toString()??"0",currency:e},destination:{amount:n?.toString()??"0",currency:t},fees:[{id:"service",label:"Service Fee",amount:"0",currency:t}],steps:[{requestId:se,type:"deposit",deposit:{amount:a?.toString()??"0",currency:e.asset,receiver:s}}],timeInSeconds:6})}function ie(e){if(!e)return null;const t=e.steps[0];return!t||t.type!==it?null:t}function J(e,t=0){if(!e)return[];const i=e.steps.filter(a=>a.type===st),s=i.filter((a,n)=>n+1>t);return i.length>0&&i.length<3?s:[]}const oe=new Ce({baseUrl:R.getApiUrl(),clientId:null});class Me extends Error{}function Ge(){const e=re.getSnapshot().projectId;return`${Le}?projectId=${e}`}function ce(){const{projectId:e,sdkType:t,sdkVersion:i}=re.state;return{projectId:e,st:t||"appkit",sv:i||"html-wagmi-4.2.2"}}async function ue(e,t){const i=Ge(),{sdkType:s,sdkVersion:a,projectId:n}=re.getSnapshot(),o={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:s,sv:a,projectId:n}},u=await(await fetch(i,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}})).json();if(u.error)throw new Me(u.error.message);return u}async function me(e){return(await ue("reown_getExchanges",e)).result}async function ge(e){return(await ue("reown_getExchangePayUrl",e)).result}async function Qe(e){return(await ue("reown_getExchangeBuyStatus",e)).result}async function We(e){const t=x.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:i,chainNamespace:s}=y.parseCaipNetworkId(e.sourceToken.network),{chainId:a,chainNamespace:n}=y.parseCaipNetworkId(e.toToken.network),o=e.sourceToken.asset==="native"?de(s):e.sourceToken.asset,u=e.toToken.asset==="native"?de(n):e.toToken.asset;return await oe.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:i.toString(),originCurrency:o,destinationChainId:a.toString(),destinationCurrency:u,recipient:e.recipient,amount:t},params:ce()})}async function Ve(e){const t=I.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),i=I.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&i?ze(e):We(e)}async function Ye(e){return await oe.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,...ce()}})}async function Ke(e){return await oe.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:ce()})}const He=["eip155","solana"],Xe={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},we={56:"714",204:"714"};function ee(e,t){const{chainNamespace:i,chainId:s}=y.parseCaipNetworkId(e),a=Xe[i];if(!a)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${i}`);let n=a.native.assetNamespace,o=a.native.assetReference;return t!=="native"?(n=a.defaultTokenNamespace,o=t):i==="eip155"&&we[s]&&(o=we[s]),`${`${i}:${s}`}/${n}:${o}`}function Ze(e){const{chainNamespace:t}=y.parseCaipNetworkId(e);return He.includes(t)}function Je(e){const t=m.getAllRequestedCaipNetworks().find(s=>s.caipNetworkId===e.chainId);let i=e.address;if(!t)throw new Error(`Target network not found for balance chainId "${e.chainId}"`);if(I.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))i="native";else if(R.isCaipAddress(i)){const{address:s}=y.parseCaipAddress(i);i=s}else if(!i)throw new Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:i,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}function et(e){return{chainId:e.network,address:`${e.network}:${e.asset}`,symbol:e.metadata.symbol,name:e.metadata.name,iconUrl:e.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:e.metadata.decimals.toString()}}}function Y(e){const t=x.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}function tt(e){const t=m.getAllRequestedCaipNetworks().find(i=>i.caipNetworkId===e.network);return t?!!t.testnet:!1}const ye=0,te="unknown",se="direct-transfer",it="deposit",st="transaction",r=Se({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[A.CHAIN.EVM]:[],[A.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),c={state:r,subscribe(e){return Te(r,()=>e(r))},subscribeKey(e,t){return Ne(r,e,t)},async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),De(),await this.prepareTokenLogo(),r.isConfigured=!0,z.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:r.exchanges,configuration:{network:r.paymentAsset.network,asset:r.paymentAsset.asset,recipient:r.recipient,amount:r.amount}}}),await G.open({view:"Pay"})},resetState(){r.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},r.recipient="0x0",r.amount=0,r.isConfigured=!1,r.error=null,r.isPaymentInProgress=!1,r.isLoading=!1,r.currentPayment=void 0,r.selectedExchange=void 0,r.exchangeUrlForQuote=void 0,r.requestId=void 0},resetQuoteState(){r.quote=void 0,r.quoteStatus="waiting",r.quoteError=null,r.isFetchingQuote=!1,r.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new p(d.INVALID_PAYMENT_CONFIG);try{r.choice=e.choice??"pay",r.paymentAsset=e.paymentAsset,r.recipient=e.recipient,r.amount=e.amount,r.openInNewTab=e.openInNewTab??!0,r.redirectUrl=e.redirectUrl,r.payWithExchange=e.payWithExchange,r.error=null}catch(t){throw new p(d.INVALID_PAYMENT_CONFIG,t.message)}},setSelectedPaymentAsset(e){r.selectedPaymentAsset=e},setSelectedExchange(e){r.selectedExchange=e},setRequestId(e){r.requestId=e},setPaymentInProgress(e){r.isPaymentInProgress=e},getPaymentAsset(){return r.paymentAsset},getExchanges(){return r.exchanges},async fetchExchanges(){try{r.isLoading=!0;const e=await me({page:ye});r.exchanges=e.exchanges.slice(0,2)}catch{throw _.showError(q.UNABLE_TO_GET_EXCHANGES),new p(d.UNABLE_TO_GET_EXCHANGES)}finally{r.isLoading=!1}},async getAvailableExchanges(e){var t;try{const i=e!=null&&e.asset&&e!=null&&e.network?ee(e.network,e.asset):void 0;return await me({page:e?.page??ye,asset:i,amount:(t=e?.amount)==null?void 0:t.toString()})}catch{throw new p(d.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(e,t,i=!1){try{const s=Number(t.amount),a=await ge({exchangeId:e,asset:ee(t.network,t.asset),amount:s.toString(),recipient:`${t.network}:${t.recipient}`});return z.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:s},currentPayment:{type:"exchange",exchangeId:e},headless:i}}),i&&(this.initiatePayment(),z.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:r.paymentId||te,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:s},currentPayment:{type:"exchange",exchangeId:e}}})),a}catch(s){throw s instanceof Error&&s.message.includes("is not supported")?new p(d.ASSET_NOT_SUPPORTED):new Error(s.message)}},async generateExchangeUrlForQuote({exchangeId:e,paymentAsset:t,amount:i,recipient:s}){const a=await ge({exchangeId:e,asset:ee(t.network,t.asset),amount:i.toString(),recipient:s});r.exchangeSessionId=a.sessionId,r.exchangeUrlForQuote=a.url},async openPayUrl(e,t,i=!1){try{const s=await this.getPayUrl(e.exchangeId,t,i);if(!s)throw new p(d.UNABLE_TO_GET_PAY_URL);const a=e.openInNewTab??!0?"_blank":"_self";return R.openHref(s.url,a),s}catch(s){throw s instanceof p?r.error=s.message:r.error=q.GENERIC_PAYMENT_ERROR,new p(d.UNABLE_TO_GET_PAY_URL)}},async onTransfer({chainNamespace:e,fromAddress:t,toAddress:i,amount:s,paymentAsset:a}){if(r.currentPayment={type:"wallet",status:"IN_PROGRESS"},!r.isPaymentInProgress)try{this.initiatePayment();const n=m.getAllRequestedCaipNetworks().find(u=>u.caipNetworkId===a.network);if(!n)throw new Error("Target network not found");const o=m.state.activeCaipNetwork;switch(I.isLowerCaseMatch(o?.caipNetworkId,n.caipNetworkId)||await m.switchActiveNetwork(n),e){case A.CHAIN.EVM:a.asset==="native"&&(r.currentPayment.result=await Be(a,e,{recipient:i,amount:s,fromAddress:t})),a.asset.startsWith("0x")&&(r.currentPayment.result=await Fe(a,{recipient:i,amount:s,fromAddress:t})),r.currentPayment.status="SUCCESS";break;case A.CHAIN.SOLANA:r.currentPayment.result=await je(e,{recipient:i,amount:s,fromAddress:t,tokenMint:a.asset==="native"?void 0:a.asset}),r.currentPayment.status="SUCCESS";break;default:throw new p(d.INVALID_CHAIN_NAMESPACE)}}catch(n){throw n instanceof p?r.error=n.message:r.error=q.GENERIC_PAYMENT_ERROR,r.currentPayment.status="FAILED",_.showError(r.error),n}finally{r.isPaymentInProgress=!1}},async onSendTransaction(e){try{const{namespace:t,transactionStep:i}=e;c.initiatePayment();const s=m.getAllRequestedCaipNetworks().find(n=>{var o;return n.caipNetworkId===((o=r.paymentAsset)==null?void 0:o.network)});if(!s)throw new Error("Target network not found");const a=m.state.activeCaipNetwork;if(I.isLowerCaseMatch(a?.caipNetworkId,s.caipNetworkId)||await m.switchActiveNetwork(s),t===A.CHAIN.EVM){const{from:n,to:o,data:u,value:U}=i.transaction;await N.sendTransaction({address:n,to:o,data:u,value:BigInt(U),chainNamespace:t})}else if(t===A.CHAIN.SOLANA){const{instructions:n}=i.transaction;await N.writeSolanaTransaction({instructions:n})}}catch(t){throw t instanceof p?r.error=t.message:r.error=q.GENERIC_PAYMENT_ERROR,_.showError(r.error),t}finally{r.isPaymentInProgress=!1}},getExchangeById(e){return r.exchanges.find(t=>t.id===e)},validatePayConfig(e){const{paymentAsset:t,recipient:i,amount:s}=e;if(!t)throw new p(d.INVALID_PAYMENT_CONFIG);if(!i)throw new p(d.INVALID_RECIPIENT);if(!t.asset)throw new p(d.INVALID_ASSET);if(s==null||s<=0)throw new p(d.INVALID_AMOUNT)},async handlePayWithExchange(e){try{r.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:i}=r.paymentAsset,s={network:t,asset:i,amount:r.amount,recipient:r.recipient},a=await this.getPayUrl(e,s);if(!a)throw new p(d.UNABLE_TO_INITIATE_PAYMENT);return r.currentPayment.sessionId=a.sessionId,r.currentPayment.status="IN_PROGRESS",r.currentPayment.exchangeId=e,this.initiatePayment(),{url:a.url,openInNewTab:r.openInNewTab}}catch(t){return t instanceof p?r.error=t.message:r.error=q.GENERIC_PAYMENT_ERROR,r.isPaymentInProgress=!1,_.showError(r.error),null}},async getBuyStatus(e,t){var i,s;try{const a=await Qe({sessionId:t,exchangeId:e});return(a.status==="SUCCESS"||a.status==="FAILED")&&z.sendEvent({type:"track",event:a.status==="SUCCESS"?"PAY_SUCCESS":"PAY_ERROR",properties:{message:a.status==="FAILED"?R.parseError(r.error):void 0,source:"pay",paymentId:r.paymentId||te,configuration:{network:r.paymentAsset.network,asset:r.paymentAsset.asset,recipient:r.recipient,amount:r.amount},currentPayment:{type:"exchange",exchangeId:(i=r.currentPayment)==null?void 0:i.exchangeId,sessionId:(s=r.currentPayment)==null?void 0:s.sessionId,result:a.txHash}}}),a}catch{throw new p(d.UNABLE_TO_GET_BUY_STATUS)}},async fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}){if(!e)return[];const{address:s}=y.parseCaipAddress(e);let a=t;return i===A.CHAIN.EVM&&(a=void 0),await ke.getMyTokensWithBalance({address:s,caipNetwork:a})},async fetchTokensFromExchange(){if(!r.selectedExchange)return[];const e=await Ke(r.selectedExchange.id),t=Object.values(e.assets).flat();return await Promise.all(t.map(async i=>{const s=et(i),{chainNamespace:a}=y.parseCaipNetworkId(s.chainId);let n=s.address;if(R.isCaipAddress(n)){const{address:u}=y.parseCaipAddress(n);n=u}const o=await k.getImageByToken(n??"",a).catch(()=>{});return s.iconUrl=o??"",s}))},async fetchTokens({caipAddress:e,caipNetwork:t,namespace:i}){try{r.isFetchingTokenBalances=!0;const s=await(r.selectedExchange?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}));r.tokenBalances={...r.tokenBalances,[i]:s}}catch(s){const a=s instanceof Error?s.message:"Unable to get token balances";_.showError(a)}finally{r.isFetchingTokenBalances=!1}},async fetchQuote({amount:e,address:t,sourceToken:i,toToken:s,recipient:a}){try{c.resetQuoteState(),r.isFetchingQuote=!0;const n=await Ve({amount:e,address:r.selectedExchange?void 0:t,sourceToken:i,toToken:s,recipient:a});if(r.selectedExchange){const o=ie(n);if(o){const u=`${i.network}:${o.deposit.receiver}`,U=x.formatNumber(o.deposit.amount,{decimals:i.metadata.decimals??0,round:8});await c.generateExchangeUrlForQuote({exchangeId:r.selectedExchange.id,paymentAsset:i,amount:U.toString(),recipient:u})}}r.quote=n}catch(n){let o=q.UNABLE_TO_GET_QUOTE;if(n instanceof Error&&n.cause&&n.cause instanceof Response)try{const u=await n.cause.json();u.error&&typeof u.error=="string"&&(o=u.error)}catch{}throw r.quoteError=o,_.showError(o),new p(d.UNABLE_TO_GET_QUOTE)}finally{r.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:e}){try{if(e===se){const i=r.selectedExchange,s=r.exchangeSessionId;if(i&&s){switch((await this.getBuyStatus(i.id,s)).status){case"IN_PROGRESS":r.quoteStatus="waiting";break;case"SUCCESS":r.quoteStatus="success",r.isPaymentInProgress=!1;break;case"FAILED":r.quoteStatus="failure",r.isPaymentInProgress=!1;break;case"UNKNOWN":r.quoteStatus="waiting";break;default:r.quoteStatus="waiting";break}return}r.quoteStatus="success";return}const{status:t}=await Ye({requestId:e});r.quoteStatus=t}catch{throw r.quoteStatus="failure",new p(d.UNABLE_TO_GET_QUOTE_STATUS)}},initiatePayment(){r.isPaymentInProgress=!0,r.paymentId=crypto.randomUUID()},initializeAnalytics(){r.analyticsSet||(r.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{var t;if((t=r.currentPayment)!=null&&t.status&&r.currentPayment.status!=="UNKNOWN"){const i={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[r.currentPayment.status];z.sendEvent({type:"track",event:i,properties:{message:r.currentPayment.status==="FAILED"?R.parseError(r.error):void 0,source:"pay",paymentId:r.paymentId||te,configuration:{network:r.paymentAsset.network,asset:r.paymentAsset.asset,recipient:r.recipient,amount:r.amount},currentPayment:{type:r.currentPayment.type,exchangeId:r.currentPayment.exchangeId,sessionId:r.currentPayment.sessionId,result:r.currentPayment.result}}})}}))},async prepareTokenLogo(){if(!r.paymentAsset.metadata.logoURI)try{const{chainNamespace:e}=y.parseCaipNetworkId(r.paymentAsset.network),t=await k.getImageByToken(r.paymentAsset.asset,e);r.paymentAsset.metadata.logoURI=t}catch{}}},nt=O`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[8]};
    border-top-left-radius: ${({borderRadius:e})=>e[8]};
  }
`;var B=function(e,t,i,s){var a=arguments.length,n=a<3?t:s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let S=class extends P{constructor(){super(),this.unsubscribe=[],this.amount=c.state.amount,this.namespace=void 0,this.paymentAsset=c.state.paymentAsset,this.activeConnectorIds=E.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=c.state.exchanges,this.isLoading=c.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(c.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(E.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(c.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(c.subscribeKey("isLoading",e=>this.isLoading=e)),c.fetchExchanges(),c.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return l`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){var e;const t=m.state.activeChain;this.namespace=t,this.caipAddress=(e=m.getAccountData(t))==null?void 0:e.caipAddress,this.unsubscribe.push(m.subscribeChainProp("accountState",i=>{this.caipAddress=i?.caipAddress},t))}paymentDetailsTemplate(){const e=m.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===this.paymentAsset.network);return l`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${Y(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${e?.name||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${g(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${g(k.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return Ze(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():l``}connectedWalletTemplate(){const{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return l`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${g(t)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return l`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return l`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;const e=this.exchanges.filter(t=>tt(this.paymentAsset)?t.id===he:t.id!==he);return e.length===0?l`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map(t=>l`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(t)}
          data-testid="exchange-option-${t.id}"
          ?chevron=${!0}
          imageSrc=${g(t.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${t.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return l`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw new Error("Namespace not found");this.caipAddress?M.push("PayQuote"):(await E.connect(),await G.open({view:"PayQuote"}))}onExchangePayment(e){c.setSelectedExchange(e),M.push("PayQuote")}async onDisconnect(){try{await N.disconnect(),await G.open({view:"Pay"})}catch{console.error("Failed to disconnect"),_.showError("Failed to disconnect")}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};const i=E.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};const s=k.getConnectorImage(i);return{name:i.name,image:s}}};S.styles=nt;B([h()],S.prototype,"amount",void 0);B([h()],S.prototype,"namespace",void 0);B([h()],S.prototype,"paymentAsset",void 0);B([h()],S.prototype,"activeConnectorIds",void 0);B([h()],S.prototype,"caipAddress",void 0);B([h()],S.prototype,"exchanges",void 0);B([h()],S.prototype,"isLoading",void 0);S=B([C("w3m-pay-view")],S);const at=O`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;var j=function(e,t,i,s){var a=arguments.length,n=a<3?t:s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const rt=3,ot=2,ct=.3,ut="200px",lt={"accent-primary":Oe.tokens.core.backgroundAccentPrimary};let L=class extends P{constructor(){super(...arguments),this.rings=rt,this.duration=ot,this.opacity=ct,this.size=ut,this.variant="accent-primary"}render(){const e=lt[this.variant];this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${e};
      --pulse-opacity: ${this.opacity};
    `;const t=Array.from({length:this.rings},(i,s)=>this.renderRing(s,this.rings));return l`
      <div class="pulse-container">
        <div class="pulse-rings">${t}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){const i=`animation-delay: ${e/t*this.duration}s;`;return l`<div class="pulse-ring" style=${i}></div>`}};L.styles=[ve,at];j([b({type:Number})],L.prototype,"rings",void 0);j([b({type:Number})],L.prototype,"duration",void 0);j([b({type:Number})],L.prototype,"opacity",void 0);j([b()],L.prototype,"size",void 0);j([b()],L.prototype,"variant",void 0);L=j([C("wui-pulse")],L);const fe=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],be=["success","submitted","failure","timeout","refund"],dt=O`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:e})=>e[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:e})=>e.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[6]};
    border-top-left-radius: ${({borderRadius:e})=>e[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }
`;var $=function(e,t,i,s){var a=arguments.length,n=a<3?t:s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const pt={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]},ht=3e3;let v=class extends P{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=c.state.paymentAsset,this.quoteStatus=c.state.quoteStatus,this.quote=c.state.quote,this.amount=c.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=E.state.activeConnectorIds,this.selectedExchange=c.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(c.subscribeKey("quoteStatus",e=>this.quoteStatus=e),c.subscribeKey("quote",e=>this.quote=e),E.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e),c.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){const e=Y(this.amount||"0"),t=this.paymentAsset.metadata.symbol??"Unknown",i=m.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===this.paymentAsset.network),s=this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund";return this.quoteStatus==="success"||this.quoteStatus==="submitted"?l`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:s?l`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:l`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${g(k.getNetworkImage(i))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${t}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return l`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){const e=this.getStepsWithStatus();return l`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map(t=>this.renderStep(t))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){var e;const t=this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund",i=this.quoteStatus==="success"||this.quoteStatus==="submitted";if(t)return l`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(i)return l`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;const s=((e=this.quote)==null?void 0:e.timeInSeconds)??0;return l`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${s} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){var e,t,i;const s=m.getAllRequestedCaipNetworks().find(u=>{var U;const Q=(U=this.quote)==null?void 0:U.origin.currency.network;if(!Q)return!1;const{chainId:Z}=y.parseCaipNetworkId(Q);return I.isLowerCaseMatch(u.id.toString(),Z.toString())}),a=x.formatNumber(((e=this.quote)==null?void 0:e.origin.amount)||"0",{decimals:((t=this.quote)==null?void 0:t.origin.currency.metadata.decimals)??0}).toString(),n=Y(a),o=((i=this.quote)==null?void 0:i.origin.currency.metadata.symbol)??"Unknown";return l`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${n}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${o}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${g(k.getNetworkImage(s))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${s?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return l`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Wallet</wui-text>

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){var e;const{image:t}=this.getWalletProperties({namespace:this.namespace}),{address:i}=this.caipAddress?y.parseCaipAddress(this.caipAddress):{},s=(e=this.selectedExchange)==null?void 0:e.name;return this.selectedExchange?l`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${s}</wui-text>
          <wui-image src=${g(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:l`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${Pe.getTruncateString({string:this.profileName||i||s||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${g(t)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund"?fe.map(e=>({...e,status:"failed"})):fe.map(e=>{const t=(pt[e.id]??[]).includes(this.quoteStatus)?"completed":"pending";return{...e,status:t}})}renderStep({title:e,icon:t,status:i}){return l`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${t} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${xe({"step-icon-box":!0,success:i==="completed"})}>
            ${this.renderStatusIndicator(i)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${e}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return e==="completed"?l`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:e==="failed"?l`<wui-icon size="sm" color="error" name="close"></wui-icon>`:e==="pending"?l`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval(()=>{this.fetchQuoteStatus()},ht))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){const e=c.state.requestId;if(!e||be.includes(this.quoteStatus))this.stopPolling();else try{await c.fetchQuoteStatus({requestId:e}),be.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){var e,t;const i=m.state.activeChain;this.namespace=i,this.caipAddress=(e=m.getAccountData(i))==null?void 0:e.caipAddress,this.profileName=((t=m.getAccountData(i))==null?void 0:t.profileName)??null,this.unsubscribe.push(m.subscribeChainProp("accountState",s=>{this.caipAddress=s?.caipAddress,this.profileName=s?.profileName??null},i))}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};const i=E.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};const s=k.getConnectorImage(i);return{name:i.name,image:s}}};v.styles=dt;$([h()],v.prototype,"paymentAsset",void 0);$([h()],v.prototype,"quoteStatus",void 0);$([h()],v.prototype,"quote",void 0);$([h()],v.prototype,"amount",void 0);$([h()],v.prototype,"namespace",void 0);$([h()],v.prototype,"caipAddress",void 0);$([h()],v.prototype,"profileName",void 0);$([h()],v.prototype,"activeConnectorIds",void 0);$([h()],v.prototype,"selectedExchange",void 0);v=$([C("w3m-pay-loading-view")],v);const mt=Ue`
  :host {
    display: block;
  }
`;var gt=function(e,t,i,s){var a=arguments.length,n=a<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ne=class extends P{render(){return l`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};ne.styles=[mt];ne=gt([C("w3m-pay-fees-skeleton")],ne);const wt=O`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }
`;var Ae=function(e,t,i,s){var a=arguments.length,n=a<3?t:s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let K=class extends P{constructor(){super(),this.unsubscribe=[],this.quote=c.state.quote,this.unsubscribe.push(c.subscribeKey("quote",e=>this.quote=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e,t,i;const s=x.formatNumber(((e=this.quote)==null?void 0:e.origin.amount)||"0",{decimals:((t=this.quote)==null?void 0:t.origin.currency.metadata.decimals)??0,round:6}).toString();return l`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${s} ${((i=this.quote)==null?void 0:i.origin.currency.metadata.symbol)||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(a=>this.renderFee(a)):null}
      </wui-flex>
    `}renderFee(e){const t=e.id==="network",i=x.formatNumber(e.amount||"0",{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(t){const s=m.getAllRequestedCaipNetworks().find(a=>I.isLowerCaseMatch(a.caipNetworkId,e.currency.network));return l`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${i} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${g(k.getNetworkImage(s))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${s?.name||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return l`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${i} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};K.styles=[wt];Ae([h()],K.prototype,"quote",void 0);K=Ae([C("w3m-pay-fees")],K);const yt=O`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:e})=>e[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:e})=>e[8]};
    height: ${({spacing:e})=>e[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var Ie=function(e,t,i,s){var a=arguments.length,n=a<3?t:s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let H=class extends P{constructor(){super(),this.unsubscribe=[],this.selectedExchange=c.state.selectedExchange,this.unsubscribe.push(c.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=!!this.selectedExchange;return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${e?null:l`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};H.styles=[yt];Ie([b({type:Array})],H.prototype,"selectedExchange",void 0);H=Ie([C("w3m-pay-options-empty")],H);const ft=O`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`;var bt=function(e,t,i,s){var a=arguments.length,n=a<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ae=class extends P{render(){return l`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return l`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};ae.styles=[ft];ae=bt([C("w3m-pay-options-skeleton")],ae);const xt=O`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var X=function(e,t,i,s){var a=arguments.length,n=a<3?t:s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const vt=300;let F=class extends P{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){var e,t;this.unsubscribe.forEach(s=>s()),(e=this.resizeObserver)==null||e.disconnect();const i=(t=this.shadowRoot)==null?void 0:t.querySelector(".pay-options-container");i?.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){var e,t;const i=(e=this.shadowRoot)==null?void 0:e.querySelector(".pay-options-container");i&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),i?.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),(t=this.resizeObserver)==null||t.observe(i),this.handleOptionsListScroll())}render(){return l`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(e=>this.payOptionTemplate(e))}
      </wui-flex>
    `}payOptionTemplate(e){var t,i;const{network:s,metadata:a,asset:n,amount:o="0"}=e,u=m.getAllRequestedCaipNetworks().find(W=>W.caipNetworkId===s),U=`${s}:${n}`,Q=`${(t=this.selectedPaymentAsset)==null?void 0:t.network}:${(i=this.selectedPaymentAsset)==null?void 0:i.asset}`,Z=U===Q,le=x.bigNumber(o,{safe:!0}),Ee=le.gt(0);return l`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>{var W;return(W=this.onSelect)==null?void 0:W.call(this,e)}}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${g(a.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${g(k.getNetworkImage(u))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${a.symbol}</wui-text>
            ${Ee?l`<wui-text variant="sm-regular" color="secondary">
                  ${le.round(6).toString()} ${a.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${Z?l`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".pay-options-container");t&&(t.scrollHeight>vt?(t.style.setProperty("--options-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`),t.style.setProperty("--options-scroll--top-opacity",pe.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--options-scroll--bottom-opacity",pe.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--options-mask-image","none"),t.style.setProperty("--options-scroll--top-opacity","0"),t.style.setProperty("--options-scroll--bottom-opacity","0")))}};F.styles=[xt];X([b({type:Array})],F.prototype,"options",void 0);X([b()],F.prototype,"selectedPaymentAsset",void 0);X([b()],F.prototype,"onSelect",void 0);F=X([C("w3m-pay-options")],F);const At=O`
  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[5]};
    border-top-left-radius: ${({borderRadius:e})=>e[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var f=function(e,t,i,s){var a=arguments.length,n=a<3?t:s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const V={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton"},It={eip155:{icon:V.eip155,label:"EVM"},solana:{icon:V.solana,label:"Solana"},bip122:{icon:V.bip122,label:"Bitcoin"},ton:{icon:V.ton,label:"Ton"}};let w=class extends P{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=c.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=c.state.amount,this.recipient=c.state.recipient,this.activeConnectorIds=E.state.activeConnectorIds,this.selectedPaymentAsset=c.state.selectedPaymentAsset,this.selectedExchange=c.state.selectedExchange,this.isFetchingQuote=c.state.isFetchingQuote,this.quoteError=c.state.quoteError,this.quote=c.state.quote,this.isFetchingTokenBalances=c.state.isFetchingTokenBalances,this.tokenBalances=c.state.tokenBalances,this.isPaymentInProgress=c.state.isPaymentInProgress,this.exchangeUrlForQuote=c.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(c.subscribeKey("paymentAsset",e=>this.paymentAsset=e)),this.unsubscribe.push(c.subscribeKey("tokenBalances",e=>this.onTokenBalancesChanged(e))),this.unsubscribe.push(c.subscribeKey("isFetchingTokenBalances",e=>this.isFetchingTokenBalances=e)),this.unsubscribe.push(E.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(c.subscribeKey("selectedPaymentAsset",e=>this.selectedPaymentAsset=e)),this.unsubscribe.push(c.subscribeKey("isFetchingQuote",e=>this.isFetchingQuote=e)),this.unsubscribe.push(c.subscribeKey("quoteError",e=>this.quoteError=e)),this.unsubscribe.push(c.subscribeKey("quote",e=>this.quote=e)),this.unsubscribe.push(c.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(c.subscribeKey("recipient",e=>this.recipient=e)),this.unsubscribe.push(c.subscribeKey("isPaymentInProgress",e=>this.isPaymentInProgress=e)),this.unsubscribe.push(c.subscribeKey("selectedExchange",e=>this.selectedExchange=e)),this.unsubscribe.push(c.subscribeKey("exchangeUrlForQuote",e=>this.exchangeUrlForQuote=e)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(e=>e())}updated(e){super.updated(e),e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return l`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){var e,t;if(this.selectedExchange){const u=x.formatNumber((e=this.quote)==null?void 0:e.origin.amount,{decimals:((t=this.quote)==null?void 0:t.origin.currency.metadata.decimals)??0}).toString();return l`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?l`<wui-text variant="lg-regular" color="primary">
                ${x.bigNumber(u,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:l`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}const i=R.getPlainAddress(this.caipAddress)??"",{name:s,image:a}=this.getWalletProperties({namespace:this.namespace}),{icon:n,label:o}=It[this.namespace]??{};return l`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${g(this.profileName)}
          address=${g(i)}
          imageSrc=${g(a)}
          alt=${g(s)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${g(o)}
          address=${g(i)}
          icon=${g(n)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${g(o)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){var e,t;const i=m.state.activeChain;this.namespace=i,this.caipAddress=(e=m.getAccountData(i))==null?void 0:e.caipAddress,this.profileName=((t=m.getAccountData(i))==null?void 0:t.profileName)??null,this.unsubscribe.push(m.subscribeChainProp("accountState",s=>this.onAccountStateChanged(s),i))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){const{chainId:t,chainNamespace:i}=y.parseCaipAddress(this.caipAddress),s=`${i}:${t}`;e=m.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===s)}await c.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){const{address:e}=this.caipAddress?y.parseCaipAddress(this.caipAddress):{};c.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};const i=E.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};const s=k.getConnectorImage(i);return{name:i.name,image:s}}paymentOptionsViewTemplate(){return l`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){const e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return l`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(e.length===0)return l`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;const t={disabled:this.isFetchingQuote};return l`<w3m-pay-options
      class=${xe(t)}
      .options=${e}
      .selectedPaymentAsset=${g(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?l`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:l`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){var e,t,i;const s=this.isFetchingQuote||this.isFetchingTokenBalances,a=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||!!this.quoteError,n=x.formatNumber(((e=this.quote)==null?void 0:e.origin.amount)??0,{decimals:((t=this.quote)==null?void 0:t.origin.currency.metadata.decimals)??0}).toString();return this.selectedExchange?s||a?l`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:l`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:l`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${s||a?l`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:l`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${Y(n)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${((i=this.quote)==null?void 0:i.origin.currency.metadata.symbol)||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:s,isDisabled:a})}
      </wui-flex>
    `}actionButtonTemplate(e){const t=J(this.quote),{isLoading:i,isDisabled:s}=e;let a="Pay";return t.length>1&&this.completedTransactionsCount===0&&(a="Approve"),l`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${i||this.isPaymentInProgress}
        ?disabled=${s||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${a}
        ${i?null:l`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(e=>{try{return Je(e)}catch{return null}}).filter(e=>!!e).filter(e=>{const{chainId:t}=y.parseCaipNetworkId(e.network),{chainId:i}=y.parseCaipNetworkId(this.paymentAsset.network);return I.isLowerCaseMatch(e.asset,this.paymentAsset.asset)?!0:this.selectedExchange?!I.isLowerCaseMatch(t.toString(),i.toString()):!0}):[]}onTokenBalancesChanged(e){this.tokenBalances=e;const[t]=this.getPaymentAssetFromTokenBalances();t&&c.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await E.connect(),await G.open({view:"PayQuote"})}onAccountStateChanged(e){const{address:t}=this.caipAddress?y.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null,t){const{address:i}=this.caipAddress?y.parseCaipAddress(this.caipAddress):{};i?I.isLowerCaseMatch(i,t)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):G.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||c.setSelectedPaymentAsset(e)}async onTransfer(){var e,t,i;const s=ie(this.quote);if(s){if(!I.isLowerCaseMatch((e=this.selectedPaymentAsset)==null?void 0:e.asset,s.deposit.currency))throw new Error("Quote asset is not the same as the selected payment asset");const a=((t=this.selectedPaymentAsset)==null?void 0:t.amount)??"0",n=x.formatNumber(s.deposit.amount,{decimals:((i=this.selectedPaymentAsset)==null?void 0:i.metadata.decimals)??0}).toString();if(!x.bigNumber(a).gte(n)){_.showError("Insufficient funds");return}if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){const{address:o}=y.parseCaipAddress(this.caipAddress);await c.onTransfer({chainNamespace:this.namespace,fromAddress:o,toAddress:s.deposit.receiver,amount:n,paymentAsset:this.selectedPaymentAsset}),c.setRequestId(s.requestId),M.push("PayLoading")}}}async onSendTransactions(){var e,t,i;const s=((e=this.selectedPaymentAsset)==null?void 0:e.amount)??"0",a=x.formatNumber(((t=this.quote)==null?void 0:t.origin.amount)??0,{decimals:((i=this.selectedPaymentAsset)==null?void 0:i.metadata.decimals)??0}).toString();if(!x.bigNumber(s).gte(a)){_.showError("Insufficient funds");return}const n=J(this.quote),[o]=J(this.quote,this.completedTransactionsCount);o&&this.namespace&&(await c.onSendTransaction({namespace:this.namespace,transactionStep:o}),this.completedTransactionsCount+=1,this.completedTransactionsCount===n.length&&(c.setRequestId(o.requestId),M.push("PayLoading")))}onPayWithExchange(){if(this.exchangeUrlForQuote){const e=R.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw new Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;const t=ie(this.quote);t&&c.setRequestId(t.requestId),c.initiatePayment(),M.push("PayLoading")}}resetAssetsState(){c.setSelectedPaymentAsset(null)}resetQuoteState(){c.resetQuoteState()}};w.styles=At;f([h()],w.prototype,"profileName",void 0);f([h()],w.prototype,"paymentAsset",void 0);f([h()],w.prototype,"namespace",void 0);f([h()],w.prototype,"caipAddress",void 0);f([h()],w.prototype,"amount",void 0);f([h()],w.prototype,"recipient",void 0);f([h()],w.prototype,"activeConnectorIds",void 0);f([h()],w.prototype,"selectedPaymentAsset",void 0);f([h()],w.prototype,"selectedExchange",void 0);f([h()],w.prototype,"isFetchingQuote",void 0);f([h()],w.prototype,"quoteError",void 0);f([h()],w.prototype,"quote",void 0);f([h()],w.prototype,"isFetchingTokenBalances",void 0);f([h()],w.prototype,"tokenBalances",void 0);f([h()],w.prototype,"isPaymentInProgress",void 0);f([h()],w.prototype,"exchangeUrlForQuote",void 0);f([h()],w.prototype,"completedTransactionsCount",void 0);w=f([C("w3m-pay-quote-view")],w);export{v as E,d,S as k,p,c as u,w};
