(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9418],{95677:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{noSSR:function(){return r},default:function(){return n}});let a=l(38754),s=(l(67294),a._(l(8976)));function i(e){return{default:(null==e?void 0:e.default)||e}}function r(e,t){return delete t.webpack,delete t.modules,e(t)}function n(e,t){let l=s.default,a={loading:e=>{let{error:t,isLoading:l,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e}),a={...a,...t};let n=a.loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?l({...a,loader:()=>null!=n?n().then(i):Promise.resolve(i(()=>null))}):(delete a.webpack,delete a.modules,r(l,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92254:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return i}});let a=l(38754),s=a._(l(67294)),i=s.default.createContext(null)},8976:function(e,t,l){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let a=l(38754),s=a._(l(67294)),i=l(92254),r=[],n=[],o=!1;function d(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function r(){if(!a){let t=new u(e,l);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!o){let e=l.webpack?l.webpack():l.modules;e&&n.push(t=>{for(let l of e)if(t.includes(l))return r()})}function d(e,t){!function(){r();let e=s.default.useContext(i.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let n=s.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return s.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),s.default.useMemo(()=>{var t;return n.loading||n.error?s.default.createElement(l.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:a.retry}):n.loaded?s.default.createElement((t=n.loaded)&&t.default?t.default:t,e):null},[e,n])}return d.preload=()=>r(),d.displayName="LoadableComponent",s.default.forwardRef(d)}(d,e)}function f(e,t){let l=[];for(;e.length;){let a=e.pop();l.push(a(t))}return Promise.all(l).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(r).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let l=()=>(o=!0,t());f(n,e).then(l,l)})),window.__NEXT_PRELOADREADY=c.preloadReady;let m=c},91909:function(e,t,l){"use strict";l.d(t,{Z:function(){return d}});var a=l(85893),s=l(67294),i=l(11163);l(45244);var r=l(30381),n=l.n(r),o=l(24341);function d(e){let{item:t,retrive_text:l,retrive_voxel:r,retrive_image3d:d,selectedItem:u,setSelectedItem:c}=e,[f,m]=(0,s.useState)(!1),[h,v]=(0,s.useState)(""),{push:b}=(0,i.useRouter)(),[p,x]=(0,s.useState)(""),[g,_]=(0,s.useState)("");(0,s.useEffect)(()=>{if((null==t?void 0:t.date)!=="undefined"){let e=n()().utc(),l=n()(null==t?void 0:t.date).utc(),a=e.diff(l,"minutes"),s=e.diff(l,"hours"),i=e.diff(l,"days");a<60?v("".concat(a," minute").concat(1!==a?"s":""," ago")):s<24?v("".concat(s," hour").concat(1!==s?"s":""," ago")):v("".concat(i," day").concat(1!==i?"s":""," ago"))}switch(null==t?void 0:t.type){case"text-to-3d":x("Text to 3D"),_("bg-text-to-3d");break;case"text-to-voxel":x("Text to Voxel"),_("bg-text-to-voxel");break;case"text-to-texture":x("Text to Texture"),_("bg-text-to-3d");break;case"voice-to-3d":x("Voice to 3D"),_("bg-voice-to-3d");break;default:x("Image to 3D"),_("bg-image-to-3d")}},[t]);try{if(!t)return null;return(0,a.jsx)("div",{className:"cursor-pointer",onClick:(null==t?void 0:t.detail)?()=>{!function(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}("modalbodydetail"),c(t)}:(null==t?void 0:t.type)==="text-to-3d"?()=>{l(null==t?void 0:t.retrive_id)}:(null==t?void 0:t.type)==="text-to-voxel"?()=>{r(null==t?void 0:t.retrive_id)}:()=>{d(null==t?void 0:t.retrive_id)},children:(0,a.jsxs)("div",{className:"d-flex",children:[(0,a.jsx)("div",{style:{position:"relative"},children:(0,a.jsx)("div",{className:"image-thumb-asset-list img-radius",children:(0,a.jsx)("img",{className:"img-radius",src:(null==t?void 0:t.thumbnail)?"".concat(o.bl.proxy_file).concat(null==t?void 0:t.thumbnail,"&folder=models"):"/assets/img/shape/loading-img.png",alt:"",onError:e=>{e.target.onerror=null,e.target.src="/assets/img/shape/loading-img.png"}})})}),(0,a.jsxs)("div",{className:"content-asset-list",children:[(0,a.jsx)("span",{className:"fs-11",children:p}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("h3",{className:"fs-14 fw-800 m-0 p-0",children:[" #",null==t?void 0:t.convert_id]}),(0,a.jsx)("p",{className:"m-0 p-0 fs-12",style:{color:"#aaa"},children:h})]}),(0,a.jsxs)("div",{className:"d-flex fs-12",children:[(0,a.jsxs)("div",{className:"me-2 fs-11",children:[(0,a.jsx)("i",{className:"fa-solid fa-heart me-1"}),(null==t?void 0:t.likes)?null==t?void 0:t.likes:0]}),(0,a.jsxs)("div",{className:"me-2 fs-11",children:[(0,a.jsx)("i",{className:"fa-solid fa-fire-flame-curved me-1"}),(null==t?void 0:t.goods)?null==t?void 0:t.goods:0]}),(0,a.jsxs)("div",{className:"me-2 fs-11",children:[(0,a.jsx)("i",{className:"fa-solid fa-face-grin-squint-tears me-1"}),(null==t?void 0:t.funnies)?null==t?void 0:t.funnies:0]}),(0,a.jsxs)("div",{className:"fs-11",children:[(0,a.jsx)("i",{className:"fa-solid fa-star me-1"}),(null==t?void 0:t.favorites)?null==t?void 0:t.favorites:0]})]})]})]})})}catch(e){return console.error("Error rendering CardAssetList:",e),null}}},70817:function(e,t,l){"use strict";var a=l(85893),s=l(60289),i=l(67294);t.Z=e=>{var t,r,n,o;let{badgeSelected:d}=e,u=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=l(78702);u.current&&new e.Modal(u.current)},[]),(0,a.jsx)("div",{className:"modal fade",id:"badgeModal",tabIndex:"-1","aria-labelledby":"badgeModalLabel","aria-hidden":"true",ref:u,children:(0,a.jsx)("div",{className:"modal-dialog",children:(0,a.jsx)("div",{className:"modal-content bg-dark text-white",children:(0,a.jsxs)("div",{className:"modal-body d-flex flex-column align-items-center justify-content-center px-4",children:[(0,a.jsx)("img",{className:"img-badge-modal coin-img ".concat(!(null==d?void 0:d.status)&&" inactive "),src:null===(t=s.W0[null==d?void 0:d.index])||void 0===t?void 0:t.icon,alt:""}),(0,a.jsx)("h1",{className:"h4 m-0 p-0",children:null===(r=s.W0[null==d?void 0:d.index])||void 0===r?void 0:r.title}),(0,a.jsxs)("div",{className:"".concat((null==d?void 0:d.index)<2&&"d-none "," fs-12 bg-pulse-yellow px-2 rad-8 text-dark"),children:[(0,a.jsx)("i",{className:"fa-regular fa-lightbulb me-1"}),"further updates coming"]}),(0,a.jsxs)("div",{className:"fs-14 w-100 my-2",children:[(0,a.jsx)("label",{children:"Criteria"}),(0,a.jsx)("div",{style:{color:"#aaa"},children:null===(n=s.W0[null==d?void 0:d.index])||void 0===n?void 0:n.criteria})]}),(0,a.jsxs)("div",{className:"fs-14 w-100 mb-2",children:[(0,a.jsx)("label",{children:"Description"}),(0,a.jsx)("div",{style:{color:"#aaa"},children:null===(o=s.W0[null==d?void 0:d.index])||void 0===o?void 0:o.description})]}),(0,a.jsx)("div",{className:"w-100 text-end mt-3",children:(0,a.jsx)("button",{type:"button",className:"btn btn-sm btn-custom-primary rounded-pill","data-bs-dismiss":"modal",children:"Close"})})]})})})})}},5152:function(e,t,l){e.exports=l(95677)}}]);