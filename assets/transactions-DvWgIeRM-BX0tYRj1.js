import{c as s,_ as f,g as w,o as d}from"./index-C-5XRWwr.js";const p=w`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(a,t,r,o){var i=arguments.length,e=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(a,t,r,o);else for(var l=a.length-1;l>=0;l--)(c=a[l])&&(e=(i<3?c(e):i>3?c(t,r,e):c(t,r))||e);return i>3&&e&&Object.defineProperty(t,r,e),e};let n=class extends s{render(){return f`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};n.styles=p;n=u([d("w3m-transactions-view")],n);export{n as W3mTransactionsView};
