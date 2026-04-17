import{c as g,Y as d,V as p,_ as h,p as S,W as D,Z as s,x as c,e as w,C as k,n as I,q as O,X as y,a as $,b as T,I as F,J as v,g as N,o as u}from"./index-1QNvrEaM.js";import{u as b}from"./index-pWpJ3MmM-DMCmIyJg.js";var P=function(t,e,a,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,a):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(r<3?o(i):r>3?o(e,a,i):o(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};let A=class extends b{constructor(){super(...arguments),this.onOtpSubmit=async t=>{var e,a;try{if(this.authConnector){const n=k.state.activeChain,r=I.getConnections(n),i=(e=p.state.remoteFeatures)==null?void 0:e.multiWallet,o=r.length>0;if(await this.authConnector.provider.connectOtp({otp:t}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),n)await I.connectExternal(this.authConnector,n);else throw new Error("Active chain is not set on ChainController");if((a=p.state.remoteFeatures)!=null&&a.emailCapture)return;if(p.state.siwx){O.close();return}if(o&&i){s.replace("ProfileWallets"),w.showSuccess("New Wallet Added");return}O.close()}}catch(n){throw c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:y.parseError(n)}}),n}},this.onOtpResend=async t=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:t}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};A=P([u("w3m-email-verify-otp-view")],A);const W=F`
  wui-icon-box {
    height: ${({spacing:t})=>t[16]};
    width: ${({spacing:t})=>t[16]};
  }
`;var _=function(t,e,a,n){var r=arguments.length,i=r<3?e:n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(r<3?o(i):r>3?o(e,a,i):o(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};let f=class extends g{constructor(){var t;super(),this.email=(t=s.state.data)==null?void 0:t.email,this.authConnector=d.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return h`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["6","3","6","3"]}
        gap="4"
      >
        <wui-icon-box size="xl" color="accent-primary" icon="sealCheck"></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="3">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="md-regular" color="primary">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="md-regular" color="primary"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="sm-regular" color="secondary" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="2">
            <wui-text variant="sm-regular" color="primary" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),c.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),s.replace("EmailVerifyOtp",{email:this.email})}catch{s.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),w.showSuccess("Code email resent")}}catch(t){w.showError(t)}finally{this.loading=!1}}};f.styles=W;_([v()],f.prototype,"loading",void 0);f=_([u("w3m-email-verify-device-view")],f);const j=N`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var C=function(t,e,a,n){var r=arguments.length,i=r<3?e:n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(r<3?o(i):r>3?o(e,a,i):o(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};let m=class extends g{constructor(){var t,e;super(...arguments),this.formRef=$(),this.initialEmail=((t=s.state.data)==null?void 0:t.email)??"",this.redirectView=(e=s.state.data)==null?void 0:e.redirectView,this.email="",this.loading=!1}firstUpdated(){var t;(t=this.formRef.value)==null||t.addEventListener("keydown",e=>{e.key==="Enter"&&this.onSubmitEmail(e)})}render(){return h`
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${T(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(t){this.email=t.detail}async onSubmitEmail(t){try{if(this.loading)return;this.loading=!0,t.preventDefault();const e=d.getAuthConnector();if(!e)throw new Error("w3m-update-email-wallet: Auth connector not found");const a=await e.provider.updateEmail({email:this.email});c.sendEvent({type:"track",event:"EMAIL_EDIT"}),a.action==="VERIFY_SECONDARY_OTP"?s.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):s.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(e){w.showError(e),this.loading=!1}}buttonsTemplate(){const t=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?h`
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${s.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!t}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:h`
        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!t}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};m.styles=j;C([v()],m.prototype,"email",void 0);C([v()],m.prototype,"loading",void 0);m=C([u("w3m-update-email-wallet-view")],m);var L=function(t,e,a,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,a):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(r<3?o(i):r>3?o(e,a,i):o(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};let x=class extends b{constructor(){var t;super(),this.email=(t=s.state.data)==null?void 0:t.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),s.replace("UpdateEmailSecondaryOtp",s.state.data))}catch(a){throw c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:y.parseError(a)}}),a}},this.onStartOver=()=>{s.replace("UpdateEmailWallet",s.state.data)}}};x=L([u("w3m-update-email-primary-otp-view")],x);var U=function(t,e,a,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,a):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(r<3?o(i):r>3?o(e,a,i):o(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};let R=class extends b{constructor(){var t,e;super(),this.email=(t=s.state.data)==null?void 0:t.newEmail,this.redirectView=(e=s.state.data)==null?void 0:e.redirectView,this.onOtpSubmit=async a=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:a}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&s.reset(this.redirectView))}catch(n){throw c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:y.parseError(n)}}),n}},this.onStartOver=()=>{s.replace("UpdateEmailWallet",s.state.data)}}};R=U([u("w3m-update-email-secondary-otp-view")],R);var V=function(t,e,a,n){var r=arguments.length,i=r<3?e:n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(r<3?o(i):r>3?o(e,a,i):o(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};let E=class extends g{constructor(){var t;super(),this.authConnector=d.getAuthConnector(),this.isEmailEnabled=(t=p.state.remoteFeatures)==null?void 0:t.email,this.isAuthEnabled=this.checkIfAuthEnabled(d.state.connectors),this.connectors=d.state.connectors,d.subscribeKey("connectors",e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw new Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw new Error("w3m-email-login-view: No auth connector provided");return h`<wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(t){const e=t.filter(a=>a.type===S.CONNECTOR_TYPE_AUTH).map(a=>a.chain);return D.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(a=>e.includes(a))}};V([v()],E.prototype,"connectors",void 0);E=V([u("w3m-email-login-view")],E);export{E as W3mEmailLoginView,b as W3mEmailOtpWidget,f as W3mEmailVerifyDeviceView,A as W3mEmailVerifyOtpView,x as W3mUpdateEmailPrimaryOtpView,R as W3mUpdateEmailSecondaryOtpView,m as W3mUpdateEmailWalletView};
