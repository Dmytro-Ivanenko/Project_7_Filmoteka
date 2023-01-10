function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},n.parcelRequired7c6=s),s.register("1dRoz",(function(e,t){const n=document.querySelector("body"),i=document.querySelector(".mode-checkbox"),r=()=>{"dark"===localStorage.getItem("mode")?(n.classList.add("night"),i.classList.add("mode-checkbox_sun")):(n.classList.remove("night"),i.classList.remove("mode-checkbox_sun"))};i.addEventListener("click",(()=>{"dark"===localStorage.getItem("mode")?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark"),r()})),r()})),s.register("jw9fa",(function(e,t){const n=document.querySelector(".forms"),i=document.querySelectorAll(".eye-icon"),r=document.querySelectorAll(".link"),s=document.querySelector(".site-nav__link[data-auth-open]"),o=document.querySelector("[data-action]"),a=document.querySelector(".modal-close-btn"),l=document.querySelector("[data-close-btn]");function c(){o.classList.toggle("visually-hidden")}i.forEach((e=>{e.addEventListener("click",(()=>{e.parentElement.parentElement.querySelectorAll(".password").forEach((t=>{if("password"===t.type)return t.type="text",void e.classList.replace("bx-hide","bx-show");t.type="password",e.classList.replace("bx-show","bx-hide")}))}))})),r.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),n.classList.toggle("show-signup")}))})),s.addEventListener("click",c),document.addEventListener("keydown",(function(e){"Escape"===e.key&&o.classList.add("visually-hidden")})),a.addEventListener("click",c),l.addEventListener("click",c)})),s.register("bMZn5",(function(n,i){t(n.exports,"db",(function(){return u})),t(n.exports,"auth",(function(){return h})),t(n.exports,"authFormOpen",(function(){return f})),t(n.exports,"authSignOut",(function(){return p})),s("gKkQl");var r=s("ix4Jr");s("ftYLF");var o=s("3PjDZ");s("eyjy7");var a=s("2YDLC"),l=s("eWCmQ");const c=(0,r.initializeApp)({apiKey:"AIzaSyAEEIQrC1FklTDIB6wSl3Lj1Ay7wmlBG7E",authDomain:"filmoteka-df132.firebaseapp.com",projectId:"filmoteka-df132",storageBucket:"filmoteka-df132.appspot.com",messagingSenderId:"615822401764",appId:"1:615822401764:web:92347d76b8e407932b8cf1",measurementId:"G-CW2YT3SCBD"}),u=(0,o.getFirestore)(c),h=(0,a.n)(c);h.useDeviceLanguage();const d=new(0,a.Q),f=document.querySelector("[data-auth-open]"),p=document.querySelector("[data-auth-sign-out]"),m=document.querySelector(".btn-google"),g=document.querySelector(".login__form"),y=document.querySelector(".signup__form"),v=document.querySelector(".backdrop-login");p.addEventListener("click",(function(e){e.preventDefault(),(0,a.y)(h).then(location.reload())})),m.addEventListener("click",(async function(){try{(0,a.f)(h,d)}catch(t){e(l).Notify.failure(t.message)}})),g.addEventListener("submit",(async function(t){t.preventDefault();const n=g.elements.email.value,i=g.elements.password.value;if(!n||!i)return void("#ua"===window.location.hash?e(l).Notify.failure("Введіть адресу електронної пошти та пароль"):e(l).Notify.failure("Enter email and password"));try{await(0,a.a6)(h,n,i).then((()=>{const t=n.split("@").shift();"#ua"===window.location.hash?e(l).Notify.success(`Вітаємо, ${t}`):e(l).Notify.success(`Welcome, ${t}`),v.classList.add("is-hidden"),g.reset()}))}catch(t){e(l).Notify.failure(t.message)}})),y.addEventListener("submit",(async function(t){t.preventDefault();const n=y.elements.email.value,i=y.elements.password.value,r=y.elements.confirm.value;if(!n||!i)return void("#ua"===window.location.hash?e(l).Notify.failure("Введіть адресу електронної пошти та пароль"):e(l).Notify.failure("Enter email and password"));if(i!==r)return void("#ua"===window.location.hash?e(l).Notify.failure("Введені паролі не співпадають"):e(l).Notify.failure("Passwords do not match"));try{await(0,a.a5)(h,n,i).then((async t=>{await(0,o.setDoc)((0,o.doc)(u,"users",`${t.user.uid}`),{userId:t.user.uid,userEmail:t.user.email,watchedMovies:{en:[],ua:[]},queuedMovies:{en:[],ua:[]}});const i=n.split("@").shift();"#ua"===window.location.hash?e(l).Notify.success(`Вітаємо, ${i}`):e(l).Notify.success(`Welcome, ${i}`),v.classList.add("is-hidden"),y.reset()}))}catch(t){e(l).Notify.failure(t.message)}})),async function(){await(0,a.j)(h).then((async t=>{if(t){const n=t.user.email.split("@").shift();"#ua"===window.location.hash?e(l).Notify.success(`Вітаємо, ${n}`):e(l).Notify.success(`Welcome, ${n}`);await(0,o.getDoc)((0,o.doc)(u,"users",t.user.uid)).then((e=>e.data()))||(0,o.setDoc)((0,o.doc)(u,"users",`${t.user.uid}`),{userId:t.user.uid,userEmail:t.user.email,watchedMovies:{en:[],ua:[]},queuedMovies:{en:[],ua:[]}})}}))}()})),s.register("gKkQl",(function(e,n){t(e.exports,"initializeApp",(function(){return s("ix4Jr").initializeApp})),t(e.exports,"registerVersion",(function(){return s("ix4Jr").registerVersion}));s("ix4Jr");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s("ix4Jr").registerVersion)("firebase","9.15.0","app")})),s.register("ix4Jr",(function(e,n){t(e.exports,"_registerComponent",(function(){return y})),t(e.exports,"_getProvider",(function(){return v})),t(e.exports,"_removeServiceInstance",(function(){return w})),t(e.exports,"SDK_VERSION",(function(){return E})),t(e.exports,"initializeApp",(function(){return T})),t(e.exports,"getApp",(function(){return S})),t(e.exports,"registerVersion",(function(){return C}));var i=s("4a6xH"),r=s("7vF8m"),o=s("ffjl9"),a=s("cCiiD");o=s("ffjl9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const c="@firebase/app",u="0.9.0",h=new(0,r.Logger)("@firebase/app"),d="[DEFAULT]",f={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function y(e){const t=e.name;if(m.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;m.set(t,e);for(const t of p.values())g(t,e);return!0}function v(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function w(e,t,n="[DEFAULT]"){v(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},x=new(0,o.ErrorFactory)("app","Firebase",b);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E="9.15.0";function T(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!=typeof s||!s)throw x.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw x.create("no-options");const a=p.get(s);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(r,a.config))return a;throw x.create("duplicate-app",{appName:s})}const l=new(0,i.ComponentContainer)(s);for(const e of m.values())l.addComponent(e);const c=new k(n,r,l);return p.set(s,c),c}function S(e="[DEFAULT]"){const t=p.get(e);if(!t&&e===d)return T();if(!t)throw x.create("no-app",{appName:e});return t}function C(e,t,n){var r;let s=null!==(r=f[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}y(new(0,i.Component)(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="firebase-heartbeat-store";let N=null;function _(){return N||(N=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(I)}}).catch((e=>{throw x.create("idb-open",{originalErrorMessage:e.message})}))),N}async function A(e,t){try{const n=(await _()).transaction(I,"readwrite"),i=n.objectStore(I);return await i.put(t,L(e)),n.done}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{const t=x.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}function L(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=R();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=R(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),M(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),M(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new D(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function R(){return(new Date).toISOString().substring(0,10)}class D{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await _()).transaction(I).objectStore(I).get(L(e))}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{const t=x.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function M(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;P="",y(new(0,i.Component)("platform-logger",(e=>new l(e)),"PRIVATE")),y(new(0,i.Component)("heartbeat",(e=>new O(e)),"PRIVATE")),C(c,u,P),C(c,u,"esm2017"),C("fire-js","")})),s.register("4a6xH",(function(e,n){t(e.exports,"Component",(function(){return r})),t(e.exports,"ComponentContainer",(function(){return l}));var i=s("ffjl9");class r{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,i.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===o?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class l{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}})),s.register("ffjl9",(function(e,i){t(e.exports,"base64urlEncodeWithoutPadding",(function(){return l})),t(e.exports,"base64Decode",(function(){return c})),t(e.exports,"getUA",(function(){return u})),t(e.exports,"isMobileCordova",(function(){return h})),t(e.exports,"isBrowserExtension",(function(){return d})),t(e.exports,"isReactNative",(function(){return f})),t(e.exports,"isIE",(function(){return p})),t(e.exports,"isSafari",(function(){return m})),t(e.exports,"isIndexedDBAvailable",(function(){return g})),t(e.exports,"validateIndexedDBOpenable",(function(){return y})),t(e.exports,"getDefaultEmulatorHost",(function(){return b})),t(e.exports,"getDefaultEmulatorHostnameAndPort",(function(){return x})),t(e.exports,"getDefaultAppConfig",(function(){return k})),t(e.exports,"getExperimentalSetting",(function(){return E})),t(e.exports,"Deferred",(function(){return T})),t(e.exports,"createMockUserToken",(function(){return S})),t(e.exports,"FirebaseError",(function(){return C})),t(e.exports,"ErrorFactory",(function(){return I})),t(e.exports,"isEmpty",(function(){return _})),t(e.exports,"deepEqual",(function(){return A})),t(e.exports,"querystring",(function(){return O})),t(e.exports,"querystringDecode",(function(){return R})),t(e.exports,"extractQuerystring",(function(){return D})),t(e.exports,"createSubscribe",(function(){return M})),t(e.exports,"getModularInstance",(function(){return F}));var r=s("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const l=r<<2|s>>4;if(i.push(l),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l=function(e){return function(e){const t=o(e);return a.encodeByteArray(t,!0)}(e).replace(/\./g,"")},c=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){return!function(){try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function g(){try{return"object"==typeof indexedDB}catch(e){return!1}}function y(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,w=()=>{try{return v()||(()=>{if(void 0===r||void 0===r.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&c(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},x=e=>{const t=b(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},k=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},E=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[l(JSON.stringify({alg:"none",type:"JWT"})),l(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(N,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new C(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function A(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(L(n)&&L(s)){if(!A(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function L(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function R(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function D(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){const n=new P(e,t);return n.subscribe.bind(n)}class P{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=B),void 0===i.error&&(i.error=B),void 0===i.complete&&(i.complete=B);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){return e&&e._delegate?e._delegate:e}})),s.register("4TNnu",(function(e,t){var n,i,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,c=[],u=!1,h=-1;function d(){u&&l&&(u=!1,l.length?c=l.concat(c):h=-1,c.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=c.length;t;){for(l=c,c=[];++h<t;)l&&l[h].run();h=-1,t=c.length}l=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),s.register("7vF8m",(function(e,n){t(e.exports,"LogLevel",(function(){return r})),t(e.exports,"Logger",(function(){return u})),t(e.exports,"setLogLevel",(function(){return h})),t(e.exports,"setUserLogHandler",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r,s;(s=r||(r={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=l[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class u{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,i.push(this)}}function h(e){i.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of i){let i=null;t&&t.level&&(i=o[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}})),s.register("cCiiD",(function(e,n){t(e.exports,"openDB",(function(){return r}));var i=s("ekHjI");i=s("ekHjI");function r(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),l=(0,i.w)(a);return r&&a.addEventListener("upgradeneeded",(e=>{r((0,i.w)(a.result),e.oldVersion,e.newVersion,(0,i.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),l.then((e=>{o&&e.addEventListener("close",(()=>o())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),l}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function c(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(l.get(t))return l.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!o.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return l.set(t,s),s}(0,i.r)((e=>({...e,get:(t,n,i)=>c(t,n)||e.get(t,n,i),has:(t,n)=>!!c(t,n)||e.has(t,n)})))})),s.register("ekHjI",(function(e,n){t(e.exports,"w",(function(){return p})),t(e.exports,"r",(function(){return h}));let i,r;const s=new WeakMap,o=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap;let u={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function h(e){u=e(u)}function d(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(m(this),t),p(s.get(this))}:function(...t){return p(e.apply(m(this),t))}:function(t,...n){const i=e.call(m(this),t,...n);return a.set(i,t.sort?t.sort():[t]),p(i)}}function f(e){return"function"==typeof e?d(e):(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));o.set(e,t)}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,u):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(p(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&s.set(t,e)})).catch((()=>{})),c.set(t,e),t}(e);if(l.has(e))return l.get(e);const t=f(e);return t!==e&&(l.set(e,t),c.set(t,e)),t}const m=e=>c.get(e)})),s.register("ftYLF",(function(e,n){t(e.exports,"getDoc",(function(){return s("3PjDZ").getDoc})),t(e.exports,"doc",(function(){return s("3PjDZ").doc})),t(e.exports,"getFirestore",(function(){return s("3PjDZ").getFirestore})),t(e.exports,"setDoc",(function(){return s("3PjDZ").setDoc})),t(e.exports,"updateDoc",(function(){return s("3PjDZ").updateDoc})),t(e.exports,"onSnapshot",(function(){return s("3PjDZ").onSnapshot})),s("3PjDZ")})),s.register("3PjDZ",(function(e,n){t(e.exports,"doc",(function(){return Fs})),t(e.exports,"getFirestore",(function(){return Ys})),t(e.exports,"getDoc",(function(){return Po})),t(e.exports,"setDoc",(function(){return Fo})),t(e.exports,"updateDoc",(function(){return Uo})),t(e.exports,"onSnapshot",(function(){return zo}));var i=s("ix4Jr"),r=s("4a6xH"),o=s("7vF8m"),a=s("ffjl9"),l=s("lW9Fu");s("4TNnu");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=new(0,o.Logger)("@firebase/firestore");function f(){return d.logLevel}function p(e,...t){if(d.logLevel<=o.LogLevel.DEBUG){const n=t.map(y);d.debug(`Firestore (${h}): ${e}`,...n)}}function m(e,...t){if(d.logLevel<=o.LogLevel.ERROR){const n=t.map(y);d.error(`Firestore (${h}): ${e}`,...n)}}function g(e,...t){if(d.logLevel<=o.LogLevel.WARN){const n=t.map(y);d.warn(`Firestore (${h}): ${e}`,...n)}}function y(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function w(e,t){e||v()}function b(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends a.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(u.UNAUTHENTICATED)))}shutdown(){}}class C{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class I{start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new E;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new E,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new E)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(w("string"==typeof t.accessToken),new T(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return w(null===e||"string"==typeof e),new u(e)}constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class N{I(){return this.g?this.g():(w(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i,this.type="FirstParty",this.user=u.FIRST_PARTY,this.p=new Map}}class _{getToken(){return Promise.resolve(new N(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(u.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i}}class A{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L{start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?i(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(w("string"==typeof e.token),this.A=e.token,new A(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=O(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function D(e,t){return e<t?-1:e>t?1:0}function M(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{static now(){return P.fromMillis(Date.now())}static fromDate(e){return P.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new P(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new k(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new k(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new k(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new P(0,0))}static max(){return new B(new P(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{get length(){return this.len}isEqual(e){return 0===F.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof F?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}}class U extends F{construct(e,t,n){return new U(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new k(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new U(t)}static emptyPath(){return new U([])}}const z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends F{construct(e,t,n){return new j(e,t,n)}static isValidIdentifier(e){return z.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new j(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new k(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new k(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new k(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new k(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new j(t)}static emptyPath(){return new j([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{static fromPath(e){return new V(U.fromString(e))}static fromName(e){return new V(U.fromString(e).popFirst(5))}static empty(){return new V(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===U.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return U.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new U(e.slice()))}constructor(e){this.path=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}$.UNKNOWN_ID=-1;function W(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=B.fromTimestamp(1e9===i?new P(n+1,0):new P(n,i));return new H(r,V.empty(),t)}function q(e){return new H(e.readTime,e.key,-1)}class H{static min(){return new H(B.min(),V.empty(),-1)}static max(){return new H(B.max(),V.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function G(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=V.comparator(e.documentKey,t.documentKey),0!==n?n:D(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class X{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){if(e.code!==x.FAILED_PRECONDITION||e.message!==K)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Y(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Y?t:Y.resolve(t)}catch(e){return Y.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.reject(t)}static resolve(e){return new Y(((t,n)=>{t(e)}))}static reject(e){return new Y(((t,n)=>{n(e)}))}static waitFor(e){return new Y(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=Y.resolve(!1);for(const n of e)t=t.next((e=>e?Y.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new Y(((n,i)=>{const r=e.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;t(e[l]).next((e=>{s[l]=e,++o,o===r&&n(s)}),(e=>i(e)))}}))}static doWhile(e,t){return new Y(((n,i)=>{const r=()=>{!0===e()?t().next((()=>{r()}),i):n()};r()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}}Z.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class te{static empty(){return new te("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof te&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ie(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function re(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){return null==e}function oe(e){return 0===e&&1/e==-1/0}function ae(e){return"number"==typeof e&&Number.isInteger(e)&&!oe(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let le=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static fromBase64String(e){const t=atob(e);return new ce(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ce(t)}[le](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}ce.EMPTY_BYTE_STRING=new ce("");const ue=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function he(e){if(w(!!e),"string"==typeof e){let t=0;const n=ue.exec(e);if(w(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:de(e.seconds),nanos:de(e.nanos)}}function de(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function fe(e){return"string"==typeof e?ce.fromBase64String(e):ce.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function me(e){const t=e.mapValue.fields.__previous_value__;return pe(t)?me(t):t}function ge(e){const t=he(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ve(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?pe(e)?4:Le(e)?9007199254740991:10:v()}function we(e,t){if(e===t)return!0;const n=ve(e);if(n!==ve(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ge(e).isEqual(ge(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=he(e.timestampValue),i=he(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,fe(e.bytesValue).isEqual(fe(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return de(e.geoPointValue.latitude)===de(t.geoPointValue.latitude)&&de(e.geoPointValue.longitude)===de(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return de(e.integerValue)===de(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=de(e.doubleValue),i=de(t.doubleValue);return n===i?oe(n)===oe(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return M(e.arrayValue.values||[],t.arrayValue.values||[],we);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(ne(n)!==ne(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!we(n[e],i[e])))return!1;return!0}(e,t);default:return v()}var i}function be(e,t){return void 0!==(e.values||[]).find((e=>we(e,t)))}function xe(e,t){if(e===t)return 0;const n=ve(e),i=ve(t);if(n!==i)return D(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=de(e.integerValue||e.doubleValue),i=de(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return ke(e.timestampValue,t.timestampValue);case 4:return ke(ge(e),ge(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(e,t){const n=fe(e),i=fe(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=D(n[e],i[e]);if(0!==t)return t}return D(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=D(de(e.latitude),de(t.latitude));return 0!==n?n:D(de(e.longitude),de(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=xe(n[e],i[e]);if(t)return t}return D(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ye.mapValue&&t===ye.mapValue)return 0;if(e===ye.mapValue)return 1;if(t===ye.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){const t=D(i[e],s[e]);if(0!==t)return t;const o=xe(n[i[e]],r[s[e]]);if(0!==o)return o}return D(i.length,s.length)}(e.mapValue,t.mapValue);default:throw v()}}function ke(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return D(e,t);const n=he(e),i=he(t),r=D(n.seconds,i.seconds);return 0!==r?r:D(n.nanos,i.nanos)}function Ee(e){return Te(e)}function Te(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=he(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?fe(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,V.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Te(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${Te(e.fields[r])}`;return n+"}"}(e.mapValue):v()}function Se(e){return!!e&&"integerValue"in e}function Ce(e){return!!e&&"arrayValue"in e}function Ie(e){return!!e&&"nullValue"in e}function Ne(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function _e(e){return!!e&&"mapValue"in e}function Ae(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ie(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ae(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ae(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Le(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{constructor(e,t){this.position=e,this.inclusive=t}}function Re(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?V.comparator(V.fromName(o.referenceValue),n.key):xe(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function De(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!we(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{}class Pe extends Me{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new We(e,t,n):"array-contains"===t?new Ke(e,n):"in"===t?new Xe(e,n):"not-in"===t?new Qe(e,n):"array-contains-any"===t?new Ye(e,n):new Pe(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new qe(e,n):new He(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(xe(t,this.value)):null!==t&&ve(this.value)===ve(t)&&this.matchesComparison(xe(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class Be extends Me{static create(e,t){return new Be(e,t)}matches(e){return Fe(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}}function Fe(e){return"and"===e.op}function Ue(e){return ze(e)&&Fe(e)}function ze(e){for(const t of e.filters)if(t instanceof Be)return!1;return!0}function je(e){if(e instanceof Pe)return e.field.canonicalString()+e.op.toString()+Ee(e.value);{const t=e.filters.map((e=>je(e))).join(",");return`${e.op}(${t})`}}function Ve(e,t){return e instanceof Pe?(n=e,(i=t)instanceof Pe&&n.op===i.op&&n.field.isEqual(i.field)&&we(n.value,i.value)):e instanceof Be?function(e,t){return t instanceof Be&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&Ve(n,t.filters[i])),!0)}(e,t):void v();var n,i}function $e(e){return e instanceof Pe?`${(t=e).field.canonicalString()} ${t.op} ${Ee(t.value)}`:e instanceof Be?function(e){return e.op.toString()+" {"+e.getFilters().map($e).join(" ,")+"}"}(e):"Filter";var t}class We extends Pe{matches(e){const t=V.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=V.fromName(n.referenceValue)}}class qe extends Pe{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=Ge("in",t)}}class He extends Pe{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=Ge("not-in",t)}}function Ge(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>V.fromName(e.referenceValue)))}class Ke extends Pe{matches(e){const t=e.data.field(this.field);return Ce(t)&&be(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class Xe extends Pe{matches(e){const t=e.data.field(this.field);return null!==t&&be(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class Qe extends Pe{matches(e){if(be(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!be(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class Ye extends Pe{matches(e){const t=e.data.field(this.field);return!(!Ce(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>be(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ze(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tt(this.root,e,this.comparator,!1)}getReverseIterator(){return new tt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tt(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||nt.EMPTY}}class tt{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class nt{copy(e,t,n,i,r){return new nt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return nt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:nt.RED,this.left=null!=i?i:nt.EMPTY,this.right=null!=r?r:nt.EMPTY,this.size=this.left.size+1+this.right.size}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1,nt.EMPTY=new class{get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,i,r){return this}insert(e,t,n){return new nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rt(this.data.getIterator())}getIteratorFrom(e){return new rt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof it))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new it(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new et(this.comparator)}}class rt{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{static empty(){return new st([])}unionWith(e){let t=new it(j.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new st(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return M(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(j.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!_e(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ae(t)}setAll(e){let t=j.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=Ae(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());_e(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return we(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];_e(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){ie(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new ot(Ae(this.value))}constructor(e){this.value=e}}function at(e){const t=[];return ie(e.fields,((e,n)=>{const i=new j([e]);if(_e(n)){const e=at(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new st(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class lt{static newInvalidDocument(e){return new lt(e,0,B.min(),B.min(),B.min(),ot.empty(),0)}static newFoundDocument(e,t,n,i){return new lt(e,1,t,B.min(),n,i,0)}static newNoDocument(e,t){return new lt(e,2,t,B.min(),B.min(),ot.empty(),0)}static newUnknownDocument(e,t){return new lt(e,3,t,B.min(),B.min(),ot.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,i,r,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ft=null}}function ut(e,t=null,n=[],i=[],r=null,s=null,o=null){return new ct(e,t,n,i,r,s,o)}function ht(e){const t=b(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>je(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),se(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Ee(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Ee(e))).join(",")),t.ft=e}return t.ft}function dt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ze(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ve(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!De(e.startAt,t.startAt)&&De(e.endAt,t.endAt)}function ft(e){return V.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function mt(e,t,n,i,r,s,o,a){return new pt(e,t,n,i,r,s,o,a)}function gt(e){return new pt(e)}function yt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function vt(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function wt(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function bt(e){return null!==e.collectionGroup}function xt(e){const t=b(e);if(null===t.dt){t.dt=[];const e=wt(t),n=vt(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new Je(e)),t.dt.push(new Je(j.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Je(j.keyField(),e))}}}return t.dt}function kt(e){const t=b(e);if(!t._t)if("F"===t.limitType)t._t=ut(t.path,t.collectionGroup,xt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of xt(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Je(n.field,t))}const n=t.endAt?new Oe(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Oe(t.startAt.position,t.startAt.inclusive):null;t._t=ut(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t._t}function Et(e,t,n){return new pt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Tt(e,t){return dt(kt(e),kt(t))&&e.limitType===t.limitType}function St(e){return`${ht(kt(e))}|lt:${e.limitType}`}function Ct(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>$e(e))).join(", ")}]`),se(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ee(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ee(e))).join(",")),`Target(${t})`}(kt(e))}; limitType=${e.limitType})`}function It(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):V.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of xt(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(i=t,!((n=e).startAt&&!function(e,t,n){const i=Re(e,t,n);return e.inclusive?i<=0:i<0}(n.startAt,xt(n),i)||n.endAt&&!function(e,t,n){const i=Re(e,t,n);return e.inclusive?i>=0:i>0}(n.endAt,xt(n),i)));var n,i}function Nt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function _t(e){return(t,n)=>{let i=!1;for(const r of xt(e)){const e=At(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function At(e,t,n){const i=e.field.isKeyField()?V.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?xe(i,r):v()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oe(t)?"-0":t}}function Ot(e){return{integerValue:""+e}}function Rt(e,t){return ae(t)?Ot(t):Lt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this._=void 0}}function Mt(e,t,n){return e instanceof Ft?Ut(e,t):e instanceof zt?jt(e,t):n}function Pt(e,t){var n,i;return e instanceof Vt?Se(n=t)||(i=n)&&"doubleValue"in i?t:{integerValue:0}:null}class Bt extends Dt{}class Ft extends Dt{constructor(e){super(),this.elements=e}}function Ut(e,t){const n=Wt(t);for(const t of e.elements)n.some((e=>we(e,t)))||n.push(t);return{arrayValue:{values:n}}}class zt extends Dt{constructor(e){super(),this.elements=e}}function jt(e,t){let n=Wt(t);for(const t of e.elements)n=n.filter((e=>!we(e,t)));return{arrayValue:{values:n}}}class Vt extends Dt{constructor(e,t){super(),this.yt=e,this.gt=t}}function $t(e){return de(e.integerValue||e.doubleValue)}function Wt(e){return Ce(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){this.version=e,this.transformResults=t}}class Ht{static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function Gt(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Kt{}function Xt(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new on(e.key,Ht.none()):new en(e.key,e.data,Ht.none());{const n=e.data,i=ot.empty();let r=new it(j.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new tn(e.key,i,new st(r.toArray()),Ht.none())}}function Qt(e,t,n){var i;e instanceof en?function(e,t,n){const i=e.value.clone(),r=rn(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof tn?function(e,t,n){if(!Gt(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=rn(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(nn(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):(i=n,t.convertToNoDocument(i.version).setHasCommittedMutations())}function Yt(e,t,n,i){return e instanceof en?function(e,t,n,i){if(!Gt(e.precondition,t))return n;const r=e.value.clone(),s=sn(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof tn?function(e,t,n,i){if(!Gt(e.precondition,t))return n;const r=sn(e.fieldTransforms,i,t),s=t.data;return s.setAll(nn(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):(r=t,s=n,Gt(e.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):s);var r,s}function Jt(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=Pt(i.transform,e||null);null!=r&&(null===n&&(n=ot.empty()),n.set(i.field,r))}return n||null}function Zt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&M(n,i,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof Ft&&i instanceof Ft||n instanceof zt&&i instanceof zt?M(n.elements,i.elements,we):n instanceof Vt&&i instanceof Vt?we(n.gt,i.gt):n instanceof Bt&&i instanceof Bt);var n,i}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,i}class en extends Kt{getFieldMask(){return null}constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class tn extends Kt{getFieldMask(){return this.fieldMask}constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function nn(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function rn(e,t,n){const i=new Map;w(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,Mt(o,a,n[r]))}return i}function sn(e,t,n){const i=new Map;for(const a of e){const e=a.transform,l=n.data.field(a.field);i.set(a.field,(s=l,o=t,(r=e)instanceof Bt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,s):r instanceof Ft?Ut(r,s):r instanceof zt?jt(r,s):function(e,t){const n=Pt(e,t),i=$t(n)+$t(e.gt);return Se(n)&&Se(e.gt)?Ot(i):Lt(e.yt,i)}(r,s)))}var r,s,o;return i}class on extends Kt{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class an extends Kt{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn,un;function hn(e){switch(e){default:return v();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function dn(e){if(void 0===e)return m("GRPC error has no .code"),x.UNKNOWN;switch(e){case cn.OK:return x.OK;case cn.CANCELLED:return x.CANCELLED;case cn.UNKNOWN:return x.UNKNOWN;case cn.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case cn.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case cn.INTERNAL:return x.INTERNAL;case cn.UNAVAILABLE:return x.UNAVAILABLE;case cn.UNAUTHENTICATED:return x.UNAUTHENTICATED;case cn.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case cn.NOT_FOUND:return x.NOT_FOUND;case cn.ALREADY_EXISTS:return x.ALREADY_EXISTS;case cn.PERMISSION_DENIED:return x.PERMISSION_DENIED;case cn.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case cn.ABORTED:return x.ABORTED;case cn.OUT_OF_RANGE:return x.OUT_OF_RANGE;case cn.UNIMPLEMENTED:return x.UNIMPLEMENTED;case cn.DATA_LOSS:return x.DATA_LOSS;default:return v()}}(un=cn||(cn={}))[un.OK=0]="OK",un[un.CANCELLED=1]="CANCELLED",un[un.UNKNOWN=2]="UNKNOWN",un[un.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",un[un.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",un[un.NOT_FOUND=5]="NOT_FOUND",un[un.ALREADY_EXISTS=6]="ALREADY_EXISTS",un[un.PERMISSION_DENIED=7]="PERMISSION_DENIED",un[un.UNAUTHENTICATED=16]="UNAUTHENTICATED",un[un.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",un[un.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",un[un.ABORTED=10]="ABORTED",un[un.OUT_OF_RANGE=11]="OUT_OF_RANGE",un[un.UNIMPLEMENTED=12]="UNIMPLEMENTED",un[un.INTERNAL=13]="INTERNAL",un[un.UNAVAILABLE=14]="UNAVAILABLE",un[un.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fn{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ie(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return re(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new et(V.comparator);function mn(){return pn}const gn=new et(V.comparator);function yn(...e){let t=gn;for(const n of e)t=t.insert(n.key,n);return t}function vn(e){let t=gn;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function wn(){return xn()}function bn(){return xn()}function xn(){return new fn((e=>e.toString()),((e,t)=>e.isEqual(t)))}const kn=new et(V.comparator),En=new it(V.comparator);function Tn(...e){let t=En;for(const n of e)t=t.add(n);return t}const Sn=new it(D);function Cn(){return Sn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Nn.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new In(B.min(),i,Cn(),mn(),Tn())}constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}}class Nn{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Nn(n,t,Tn(),Tn(),Tn())}constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,n,i){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=i}}class An{constructor(e,t){this.targetId=e,this.Et=t}}class Ln{constructor(e,t,n=ce.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class On{get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Tn(),t=Tn(),n=Tn();return this.Rt.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:v()}})),new Nn(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=Mn()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}constructor(){this.At=0,this.Rt=Mn(),this.bt=ce.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}}class Rn{Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,(t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:v()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.zt(n)&&t(n)}))}Jt(e){const t=e.targetId,n=e.Et.count,i=this.Yt(t);if(i){const e=i.target;if(ft(e))if(0===n){const n=new V(e.path);this.Qt(t,n,lt.newNoDocument(n,B.min()))}else w(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach(((n,i)=>{const r=this.Yt(i);if(r){if(n.current&&ft(r.target)){const t=new V(r.target.path);null!==this.Lt.get(t)||this.te(i,t)||this.Qt(i,t,lt.newNoDocument(t,e))}n.St&&(t.set(i,n.Ct()),n.xt())}}));let n=Tn();this.qt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const i=new In(e,t,this.Ut,this.Lt,n);return this.Lt=mn(),this.qt=Dn(),this.Ut=new it(D),i}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new On,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new it(D),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new On),this.$t.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}constructor(e){this.$t=e,this.Bt=new Map,this.Lt=mn(),this.qt=Dn(),this.Ut=new it(D)}}function Dn(){return new et(V.comparator)}function Mn(){return new et(V.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={asc:"ASCENDING",desc:"DESCENDING"},Bn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fn={and:"AND",or:"OR"};class Un{constructor(e,t){this.databaseId=e,this.wt=t}}function zn(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function jn(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Vn(e,t){return zn(e,t.toTimestamp())}function $n(e){return w(!!e),B.fromTimestamp(function(e){const t=he(e);return new P(t.seconds,t.nanos)}(e))}function Wn(e,t){return(n=e,new U(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function qn(e){const t=U.fromString(e);return w(ui(t)),t}function Hn(e,t){return Wn(e.databaseId,t.path)}function Gn(e,t){const n=qn(t);if(n.get(1)!==e.databaseId.projectId)throw new k(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new k(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new V(Yn(n))}function Kn(e,t){return Wn(e.databaseId,t)}function Xn(e){const t=qn(e);return 4===t.length?U.emptyPath():Yn(t)}function Qn(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Yn(e){return w(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Jn(e,t,n){return{name:Hn(e,t),fields:n.value.mapValue.fields}}function Zn(e,t){let n;if(t instanceof en)n={update:Jn(e,t.key,t.value)};else if(t instanceof on)n={delete:Hn(e,t.key)};else if(t instanceof tn)n={update:Jn(e,t.key,t.data),updateMask:ci(t.fieldMask)};else{if(!(t instanceof an))return v();n={verify:Hn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Bt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ft)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof zt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Vt)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw v()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(r=t.precondition).updateTime?{updateTime:Vn(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:v())),n;var i,r}function ei(e,t){return{documents:[Kn(e,t.path)]}}function ti(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=Kn(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Kn(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0!==e.length)return li(Be.create(e,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:oi((t=e).field),direction:ri(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=e,l=t.limit,a.wt||se(l)?l:{value:l});var a,l,c;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(c=t.startAt).inclusive,values:c.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ni(e){let t=Xn(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){w(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=ii(e);return t instanceof Be&&Ue(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Je(ai((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,se(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Oe(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Oe(n,t)}(n.endAt)),mt(t,r,o,s,a,"F",l,c)}function ii(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ai(e.unaryFilter.field);return Pe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ai(e.unaryFilter.field);return Pe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ai(e.unaryFilter.field);return Pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ai(e.unaryFilter.field);return Pe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(e):void 0!==e.fieldFilter?(n=e,Pe.create(ai(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,Be.create(t.compositeFilter.filters.map((e=>ii(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return v()}}(t.compositeFilter.op))):v();var t,n}function ri(e){return Pn[e]}function si(e){return Bn[e]}function oi(e){return{fieldPath:e.canonicalString()}}function ai(e){return j.fromServerFormat(e.fieldPath)}function li(e){return e instanceof Pe?function(e){if("=="===e.op){if(Ne(e.value))return{unaryFilter:{field:oi(e.field),op:"IS_NAN"}};if(Ie(e.value))return{unaryFilter:{field:oi(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ne(e.value))return{unaryFilter:{field:oi(e.field),op:"IS_NOT_NAN"}};if(Ie(e.value))return{unaryFilter:{field:oi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oi(e.field),op:si(e.op),value:e.value}}}(e):e instanceof Be?function(e){const t=e.getFilters().map((e=>li(e)));return 1===t.length?t[0]:{compositeFilter:{op:(n=e.op,Fn[n]),filters:t}};var n}(e):v()}function ci(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function ui(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],di=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],fi=di;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pi{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&Qt(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Yt(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Yt(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=bn();return this.mutations.forEach((i=>{const r=e.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=t.has(i.key)?null:o;const a=Xt(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(B.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Tn())}isEqual(e){return this.batchId===e.batchId&&M(this.mutations,e.mutations,((e,t)=>Zt(e,t)))&&M(this.baseMutations,e.baseMutations,((e,t)=>Zt(e,t)))}constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}}class mi{static from(e,t,n){w(e.mutations.length===n.length);let i=kn;const r=e.mutations;for(let e=0;e<r.length;e++)i=i.insert(r[e].key,n[e].version);return new mi(e,t,n,i)}constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}constructor(e,t,n,i,r=B.min(),s=B.min(),o=ce.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.ie=e}}function wi(e){const t=ni({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Et(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(de(e.integerValue));else if("doubleValue"in e){const n=de(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),oe(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(fe(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?Le(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):v()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const e of Object.keys(n))this.de(e,t),this.ce(n[e],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const e of n)this.ce(e,t)}me(e,t){this.he(t,37),V.fromName(e).path.forEach((e=>{this.he(t,60),this.pe(e,t)}))}he(e,t){e.le(t)}_e(e){e.le(2)}constructor(){}}bi.Ie=new bi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{addToCollectionParentIndex(e,t){return this.Je.add(t),Y.resolve()}getCollectionParents(e,t){return Y.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return Y.resolve()}deleteFieldIndex(e,t){return Y.resolve()}getDocumentsMatchingTarget(e,t){return Y.resolve(null)}getIndexType(e,t){return Y.resolve(0)}getFieldIndexes(e,t){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,t){return Y.resolve(H.min())}getMinOffsetFromCollectionGroup(e,t){return Y.resolve(H.min())}updateCollectionGroup(e,t,n){return Y.resolve()}updateIndexEntries(e,t){return Y.resolve()}constructor(){this.Je=new ki}}class ki{add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new it(U.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new it(U.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ei{static withCacheSize(e){return new Ei(e,Ei.DEFAULT_COLLECTION_PERCENTILE,Ei.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ei.DEFAULT_COLLECTION_PERCENTILE=10,Ei.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ei.DEFAULT=new Ei(41943040,Ei.DEFAULT_COLLECTION_PERCENTILE,Ei.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ei.DISABLED=new Ei(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ti{next(){return this.bn+=2,this.bn}static Pn(){return new Ti(0)}static vn(){return new Ti(-1)}constructor(e){this.bn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Y.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new fn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ci{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Yt(n.mutation,e,st.empty(),P.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Tn()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Tn()){const i=wn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=yn();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=wn();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Tn())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let r=mn();const s=xn(),o=xn();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof tn)?r=r.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),Yt(o.mutation,t,o.mutation.getFieldMask(),P.now()))})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ci(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=xn();let i=new et(((e,t)=>e-t)),r=Tn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||st.empty();o=r.applyToLocalView(s,o),n.set(e,o);const a=(i.get(r.batchId)||Tn()).add(e);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=bn();l.forEach((e=>{if(!r.has(e)){const i=Xt(t.get(e),n.get(e));null!==i&&c.set(e,i),r=r.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,c))}return Y.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return i=t,V.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):bt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var i}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):Y.resolve(wn());let o=-1,a=r;return s.next((t=>Y.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?Y.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,a,t,Tn()))).next((e=>({batchId:o,changes:vn(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new V(t)).next((e=>{let t=yn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let r=yn();return this.indexManager.getCollectionParents(e,i).next((s=>Y.forEach(s,(s=>{const o=(a=t,l=s.child(i),new pt(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===i.get(n)&&(i=i.insert(n,lt.newInvalidDocument(n)))}));let n=yn();return i.forEach(((i,r)=>{const s=e.get(i);void 0!==s&&Yt(s.mutation,r,st.empty(),P.now()),It(t,r)&&(n=n.insert(i,r))})),n}))}constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{getBundleMetadata(e,t){return Y.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:$n(n.createTime)}),Y.resolve()}getNamedQuery(e,t){return Y.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,{name:(n=t).name,query:wi(n.bundledQuery),readTime:$n(n.readTime)}),Y.resolve();var n}constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{getOverlay(e,t){return Y.resolve(this.overlays.get(t))}getOverlays(e,t){const n=wn();return Y.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.oe(e,t,i)})),Y.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.es.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),Y.resolve()}getOverlaysForCollection(e,t,n){const i=wn(),r=t.length+1,s=new V(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return Y.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new et(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=wn(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=wn(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return Y.resolve(o)}oe(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new gi(t,n));let r=this.es.get(t);void 0===r&&(r=Tn(),this.es.set(t,r)),this.es.set(t,r.add(n.key))}constructor(){this.overlays=new et(V.comparator),this.es=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new Li(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new Li(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new V(new U([])),n=new Li(t,e),i=new Li(t,e+1),r=[];return this.rs.forEachInRange([n,i],(e=>{this.cs(e),r.push(e.key)})),r}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new V(new U([])),n=new Li(t,e),i=new Li(t,e+1);let r=Tn();return this.rs.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new Li(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.ns=new it(Li.ss),this.rs=new it(Li.os)}}class Li{static ss(e,t){return V.comparator(e.key,t.key)||D(e._s,t._s)}static os(e,t){return D(e._s,t._s)||V.comparator(e.key,t.key)}constructor(e,t){this.key=e,this._s=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{checkEmpty(e){return Y.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new pi(r,t,n,i);this.mutationQueue.push(s);for(const t of i)this.gs=this.gs.add(new Li(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Y.resolve(s)}lookupMutationBatch(e,t){return Y.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ps(n),r=i<0?0:i;return Y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Li(t,0),i=new Li(t,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,i],(e=>{const t=this.ys(e._s);r.push(t)})),Y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new it(D);return t.forEach((e=>{const t=new Li(e,0),i=new Li(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,i],(e=>{n=n.add(e._s)}))})),Y.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;V.isDocumentKey(r)||(r=r.child(""));const s=new Li(new V(r),0);let o=new it(D);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e._s)),!0)}),s),Y.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){w(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Y.forEach(t.mutations,(i=>{const r=new Li(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new Li(t,0),i=this.gs.firstAfterOrEqual(n);return Y.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new it(Li.ss)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Y.resolve(n?n.document.mutableCopy():lt.newInvalidDocument(t))}getEntries(e,t){let n=mn();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():lt.newInvalidDocument(e))})),Y.resolve(n)}getAllFromCollection(e,t,n){let i=mn();const r=new V(t.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:e,value:{document:r}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||G(q(r),n)<=0||(i=i.insert(r.key,r.mutableCopy()))}return Y.resolve(i)}getAllFromCollectionGroup(e,t,n,i){v()}As(e,t){return Y.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Di(this)}getSize(e){return Y.resolve(this.size)}constructor(e){this.Es=e,this.docs=new et(V.comparator),this.size=0}}class Di extends Si{applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(n)})),Y.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}constructor(e){super(),this.Yn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),Y.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Ti(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,Y.resolve()}updateTargetData(e,t){return this.Dn(t),Y.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),Y.waitFor(r).next((()=>i))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return Y.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),Y.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),Y.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),Y.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return Y.resolve(n)}containsKey(e,t){return Y.resolve(this.Ps.containsKey(t))}constructor(e){this.persistence=e,this.Rs=new fn((e=>ht(e)),dt),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ai,this.targetCount=0,this.vs=Ti.Pn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _i,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Oi(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const i=new Bi(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((e=>this.referenceDelegate.Os(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Ms(e,t){return Y.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Z(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Mi(this),this.indexManager=new xi,this.remoteDocumentCache=new Ri((e=>this.referenceDelegate.xs(e))),this.yt=new vi(t),this.Ns=new Ni(this.yt)}}class Bi extends X{constructor(e){super(),this.currentSequenceNumber=e}}class Fi{static Bs(e){return new Fi(e)}get Ls(){if(this.$s)return this.$s;throw v()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),Y.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),Y.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),Y.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.Ls,(n=>{const i=V.fromPath(n);return this.qs(e,i).next((e=>{e||t.removeEntry(i,B.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.qs(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}qs(e,t){return Y.or([()=>Y.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}constructor(e){this.persistence=e,this.Fs=new Ai,this.$s=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{static Ci(e,t){let n=Tn(),i=Tn();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new Ui(e,t.fromCache,n,i)}constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.ki(e,t).next((r=>r||this.Oi(e,t,i,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(yt(t))return Y.resolve(null);let n=kt(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=Et(t,null,"F"),n=kt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const r=Tn(...i);return this.Ni.getDocuments(e,r).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Fi(t,i);return this.$i(t,s,r,n.readTime)?this.ki(e,Et(t,null,"F")):this.Bi(e,s,t,n)}))))})))))}Oi(e,t,n,i){return yt(t)||i.isEqual(B.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((r=>{const s=this.Fi(t,r);return this.$i(t,s,n,i)?this.Mi(e,t):(f()<=o.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ct(t)),this.Bi(e,s,t,W(i,-1)))}))}Fi(e,t){let n=new it(_t(e));return t.forEach(((t,i)=>{It(e,i)&&(n=n.add(i))})),n}$i(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,t){return f()<=o.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Ct(t)),this.Ni.getDocumentsMatchingQuery(e,t,H.min())}Bi(e,t,n,i){return this.Ni.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.xi=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ii(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qi)))}constructor(e,t,n,i){this.persistence=e,this.Li=t,this.yt=i,this.qi=new et(D),this.Ui=new fn((e=>ht(e)),dt),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}}function Vi(e,t,n,i){return new ji(e,t,n,i)}async function $i(e,t){const n=b(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((r=>(i=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],s=[];let o=Tn();for(const e of i){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:r,addedBatchIds:s})))}))}))}function Wi(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function qi(e,t,n){let i=Tn(),r=Tn();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=mn();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(B.min())?(t.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),i=i.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:i,zi:r}}))}function Hi(e,t){const n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Gi(e,t){const n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Cs.getTargetData(e,t).next((r=>r?(i=r,Y.resolve(i)):n.Cs.allocateTargetId(e).next((r=>(i=new yi(t,r,0,e.currentSequenceNumber),n.Cs.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.qi.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}async function Ki(e,t,n){const i=b(e),r=i.qi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(e=>i.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!J(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.qi=i.qi.remove(t),i.Ui.delete(r.target)}function Xi(e,t,n){const i=b(e);let r=B.min(),s=Tn();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=b(e),r=i.Ui.get(n);return void 0!==r?Y.resolve(i.qi.get(r)):i.Cs.getTargetData(t,n)}(i,e,kt(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>i.Li.getDocumentsMatchingQuery(e,t,n?r:B.min(),n?s:Tn()))).next((e=>(Qi(i,Nt(t),e),{documents:e,Hi:s})))))}function Qi(e,t,n){let i=e.Ki.get(t)||B.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Ki.set(t,i)}class Yi{er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=Cn()}}class Ji{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Yi,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Lr=new Yi,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{Ur(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends class{get co(){return!1}ao(e,t,n,i,r){const s=this.ho(e,t);p("RestConnection","Sending: ",s,n);const o={};return this.lo(o,i,r),this.fo(e,s,o,n).then((e=>(p("RestConnection","Received: ",e),e)),(t=>{throw g("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}_o(e,t,n,i,r,s){return this.ao(e,t,n,i,r)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+h,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=tr[e];return`${this.oo}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{fo(e,t,n,i){return new Promise(((r,s)=>{const o=new(0,l.XhrIo);o.setWithCredentials(!0),o.listenOnce(l.EventType.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case l.ErrorCode.NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),r(t);break;case l.ErrorCode.TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),s(new k(x.DEADLINE_EXCEEDED,"Request time out"));break;case l.ErrorCode.HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(t)>=0?t:x.UNKNOWN}(t.status);s(new k(e,t.message))}else s(new k(x.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new k(x.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(i);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=(0,l.createWebChannelTransport)(),s=(0,l.getStatEventTarget)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new(0,l.FetchXmlHttpFactory)({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=i.join("");p("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let u=!1,h=!1;const d=new nr({Hr:e=>{h?p("Connection","Not sending because WebChannel is closed:",e):(u||(p("Connection","Opening WebChannel transport."),c.open(),u=!0),p("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(c,l.WebChannel.EventType.OPEN,(()=>{h||p("Connection","WebChannel transport opened.")})),f(c,l.WebChannel.EventType.CLOSE,(()=>{h||(h=!0,p("Connection","WebChannel transport closed"),d.io())})),f(c,l.WebChannel.EventType.ERROR,(e=>{h||(h=!0,g("Connection","WebChannel transport errored:",e),d.io(new k(x.UNAVAILABLE,"The operation could not be completed")))})),f(c,l.WebChannel.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];w(!!n);const i=n,r=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(r){p("Connection","WebChannel received error:",r);const e=r.status;let t=function(e){const t=cn[e];if(void 0!==t)return dn(t)}(e),n=r.message;void 0===t&&(t=x.INTERNAL,n="Unknown error status: "+e+" with message "+r.message),h=!0,d.io(new k(t,n)),c.close()}else p("Connection","WebChannel received:",n),d.ro(n)}})),f(s,l.Event.STAT_EVENT,(e=>{e.stat===l.Stat.PROXY?p("Connection","Detected buffering proxy"):e.stat===l.Stat.NOPROXY&&p("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.so()}),0),d}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e){return new Un(e,!0)}class or{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,t-n);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(e,t,n=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===x.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new k(x.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return p("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,i,r,s,o,a){this.Hs=e,this.vo=n,this.Vo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new or(e,t)}}class lr extends ar{jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:v(),s=t.targetChange.targetIds||[],o=function(e,t){return e.wt?(w(void 0===t||"string"==typeof t),ce.fromBase64String(t||"")):(w(void 0===t||t instanceof Uint8Array),ce.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(e){const t=void 0===e.code?x.UNKNOWN:dn(e.code);return new k(t,e.message||"")}(a);n=new Ln(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Gn(e,i.document.name),s=$n(i.document.updateTime),o=i.document.createTime?$n(i.document.createTime):B.min(),a=new ot({mapValue:{fields:i.document.fields}}),l=lt.newFoundDocument(r,s,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new _n(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Gn(e,i.document),s=i.readTime?$n(i.readTime):B.min(),o=lt.newNoDocument(r,s),a=i.removedTargetIds||[];n=new _n([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Gn(e,i.document),s=i.removedTargetIds||[];n=new _n([],s,r,null)}else{if(!("filter"in t))return v();{t.filter;const e=t.filter;e.targetId;const i=e.count||0,r=new ln(i),s=e.targetId;n=new An(s,r)}}var i;return n}(this.yt,e),n=function(e){if(!("targetChange"in e))return B.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?B.min():t.readTime?$n(t.readTime):B.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=Qn(this.yt),t.addTarget=function(e,t){let n;const i=t.target;return n=ft(i)?{documents:ei(e,i)}:{query:ti(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=jn(e,t.resumeToken):t.snapshotVersion.compareTo(B.min())>0&&(n.readTime=zn(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=Qn(this.yt),t.removeTarget=e,this.Bo(t)}constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.yt=r}}class cr extends ar{get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(w(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(w(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?$n(e.updateTime):$n(t);return n.isEqual(B.min())&&(n=$n(t)),new qt(n,e.transformResults||[])}(e,n)))):[]),r=$n(e.commitTime);return this.listener.Zo(r,i)}var t,n;return w(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Qn(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Zn(this.yt,e)))};this.Bo(t)}constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.yt=r,this.Jo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends class{}{su(){if(this.nu)throw new k(x.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.ao(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new k(x.UNKNOWN,e.toString())}))}_o(e,t,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection._o(e,t,n,r,s,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new k(x.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=i,this.nu=!1}}class hr{uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(m(t),this.ou=!1):p("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur((e=>{n.enqueueAndForget((async()=>{xr(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=b(e);t._u.add(4),await pr(t),t.gu.set("Unknown"),t._u.delete(4),await fr(t)}(this))}))})),this.gu=new hr(n,i)}}async function fr(e){if(xr(e))for(const t of e.wu)await t(!0)}async function pr(e){for(const t of e.wu)await t(!1)}function mr(e,t){const n=b(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),br(n)?wr(n):Ur(n).ko()&&yr(n,t))}function gr(e,t){const n=b(e),i=Ur(n);n.du.delete(t),i.ko()&&vr(n,t),0===n.du.size&&(i.ko()?i.Fo():xr(n)&&n.gu.set("Unknown"))}function yr(e,t){e.yu.Ot(t.targetId),Ur(e).zo(t)}function vr(e,t){e.yu.Ot(t),Ur(e).Ho(t)}function wr(e){e.yu=new Rn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),Ur(e).start(),e.gu.uu()}function br(e){return xr(e)&&!Ur(e).No()&&e.du.size>0}function xr(e){return 0===b(e)._u.size}function kr(e){e.yu=void 0}async function Er(e){e.du.forEach(((t,n)=>{yr(e,t)}))}async function Tr(e,t){kr(e),br(e)?(e.gu.hu(t),wr(e)):e.gu.set("Unknown")}async function Sr(e,t,n){if(e.gu.set("Online"),t instanceof Ln&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.du.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.du.delete(i),e.yu.removeTarget(i))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Cr(e,n)}else if(t instanceof _n?e.yu.Kt(t):t instanceof An?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(B.min()))try{const t=await Wi(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.du.get(i);r&&e.du.set(i,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(ce.EMPTY_BYTE_STRING,n.snapshotVersion)),vr(e,t);const i=new yi(n.target,t,1,n.sequenceNumber);yr(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await Cr(e,t)}}async function Cr(e,t,n){if(!J(t))throw t;e._u.add(1),await pr(e),e.gu.set("Offline"),n||(n=()=>Wi(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await fr(e)}))}function Ir(e,t){return t().catch((n=>Cr(e,n,t)))}async function Nr(e){const t=b(e),n=zr(t);let i=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;_r(t);)try{const e=await Hi(t.localStore,i);if(null===e){0===t.fu.length&&n.Fo();break}i=e.batchId,Ar(t,e)}catch(e){await Cr(t,e)}Lr(t)&&Or(t)}function _r(e){return xr(e)&&e.fu.length<10}function Ar(e,t){e.fu.push(t);const n=zr(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Lr(e){return xr(e)&&!zr(e).No()&&e.fu.length>0}function Or(e){zr(e).start()}async function Rr(e){zr(e).eu()}async function Dr(e){const t=zr(e);for(const n of e.fu)t.Xo(n.mutations)}async function Mr(e,t,n){const i=e.fu.shift(),r=mi.from(i,t,n);await Ir(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await Nr(e)}async function Pr(e,t){t&&zr(e).Yo&&await async function(e,t){if(hn(n=t.code)&&n!==x.ABORTED){const n=e.fu.shift();zr(e).Mo(),await Ir(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Nr(e)}var n}(e,t),Lr(e)&&Or(e)}async function Br(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const i=xr(n);n._u.add(3),await pr(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await fr(n)}async function Fr(e,t){const n=b(e);t?(n._u.delete(2),await fr(n)):t||(n._u.add(2),await pr(n),n.gu.set("Unknown"))}function Ur(e){return e.pu||(e.pu=function(e,t,n){const i=b(e);return i.su(),new lr(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(e.datastore,e.asyncQueue,{Yr:Er.bind(null,e),Zr:Tr.bind(null,e),Wo:Sr.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),br(e)?wr(e):e.gu.set("Unknown")):(await e.pu.stop(),kr(e))}))),e.pu}function zr(e){return e.Iu||(e.Iu=function(e,t,n){const i=b(e);return i.su(),new cr(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(e.datastore,e.asyncQueue,{Yr:Rr.bind(null,e),Zr:Pr.bind(null,e),tu:Dr.bind(null,e),Zo:Mr.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await Nr(e)):(await e.Iu.stop(),e.fu.length>0&&(p("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class jr{static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new jr(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new k(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function Vr(e,t){if(m("AsyncQueue",`${t}: ${e}`),J(e))return new k(x.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{static emptySet(e){return new $r(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $r))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new $r;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||V.comparator(t.key,n.key):(e,t)=>V.comparator(e.key,t.key),this.keyedMap=yn(),this.sortedSet=new et(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):v():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Tu=new et(V.comparator)}}class qr{static fromInitialDocuments(e,t,n,i,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new qr(e,t,$r.emptySet(t),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,i,r,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.Au=void 0,this.listeners=[]}}class Gr{constructor(){this.queries=new fn((e=>St(e)),Tt),this.onlineState="Unknown",this.Ru=new Set}}async function Kr(e,t){const n=b(e),i=t.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new Hr),r)try{s.Au=await n.onListen(i)}catch(e){const n=Vr(e,`Initialization of query '${Ct(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&Jr(n)}async function Xr(e,t){const n=b(e),i=t.query;let r=!1;const s=n.queries.get(i);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Qr(e,t){const n=b(e);let i=!1;for(const e of t){const t=e.query,r=n.queries.get(t);if(r){for(const t of r.listeners)t.Pu(e)&&(i=!0);r.Au=e}}i&&Jr(n)}function Yr(e,t,n){const i=b(e),r=i.queries.get(t);if(r)for(const e of r.listeners)e.onError(n);i.queries.delete(t)}function Jr(e){e.Ru.forEach((e=>{e.next()}))}class Zr{Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new qr(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(e){this.key=e}}class ts{constructor(e){this.key=e}}class ns{get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new Wr,i=t?t.Qu:this.Qu;let r=t?t.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const c=i.get(e),u=It(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Hu(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Gu(u,a)>0||l&&this.Gu(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:o,mutatedKeys:r}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)}(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==r.length||a?{snapshot:new qr(this.query,e.Qu,i,r,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Wr,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.qu=this.qu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.qu=this.qu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Tn(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new ts(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new es(n))})),t}tc(e){this.qu=e.Hi,this.Ku=Tn();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return qr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Tn(),this.mutatedKeys=Tn(),this.Gu=_t(e),this.Qu=new $r(this.Gu)}}class is{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class rs{constructor(e){this.key=e,this.nc=!1}}class ss{get isPrimaryClient(){return!0===this.dc}constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new fn((e=>St(e)),Tt),this.rc=new Map,this.oc=new Set,this.uc=new et(V.comparator),this.cc=new Map,this.ac=new Ai,this.hc={},this.lc=new Map,this.fc=Ti.vn(),this.onlineState="Unknown",this.dc=void 0}}async function os(e,t){const n=Ts(e);let i,r;const s=n.ic.get(t);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.ec();else{const e=await Gi(n.localStore,kt(t));n.isPrimaryClient&&mr(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,r=await as(n,t,i,"current"===s,e.resumeToken)}return r}async function as(e,t,n,i,r){e._c=(t,n,i)=>async function(e,t,n,i){let r=t.view.Wu(n);r.$i&&(r=await Xi(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,r))));const s=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s);return vs(e,t.targetId,o.Xu),o.snapshot}(e,t,n,i);const s=await Xi(e.localStore,t,!0),o=new ns(t,s.Hi),a=o.Wu(s.documents),l=Nn.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),c=o.applyChanges(a,e.isPrimaryClient,l);vs(e,n,c.Xu);const u=new is(t,n,o);return e.ic.set(t,u),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),c.snapshot}async function ls(e,t){const n=b(e),i=n.ic.get(t),r=n.rc.get(i.targetId);if(r.length>1)return n.rc.set(i.targetId,r.filter((e=>!Tt(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ki(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),gr(n.remoteStore,i.targetId),gs(n,i.targetId)})).catch(Q)):(gs(n,i.targetId),await Ki(n.localStore,i.targetId,!0))}async function cs(e,t){const n=b(e);try{const e=await function(e,t){const n=b(e),i=t.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const o=[];t.targetChanges.forEach(((s,a)=>{const l=r.get(a);if(!l)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);var u,h,d;t.targetMismatches.has(a)?c=c.withResumeToken(ce.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,i)),r=r.insert(a,c),h=c,d=s,(0===(u=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Cs.updateTargetData(e,c))}));let a=mn(),l=Tn();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(qi(e,s,t.documentUpdates).next((e=>{a=e.Wi,l=e.zi}))),!i.isEqual(B.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return Y.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.qi=r,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.cc.get(t);i&&(w(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.nc=!0:e.modifiedDocuments.size>0?w(i.nc):e.removedDocuments.size>0&&(w(i.nc),i.nc=!1))})),await xs(n,e,t)}catch(e){await Q(e)}}function us(e,t,n){const i=b(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.ic.forEach(((n,i)=>{const r=i.view.bu(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=b(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.bu(t)&&(i=!0)})),i&&Jr(n)}(i.eventManager,t),e.length&&i.sc.Wo(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function hs(e,t,n){const i=b(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.cc.get(t),s=r&&r.key;if(s){let e=new et(V.comparator);e=e.insert(s,lt.newNoDocument(s,B.min()));const n=Tn().add(s),r=new In(B.min(),new Map,new it(D),e,n);await cs(i,r),i.uc=i.uc.remove(s),i.cc.delete(t),bs(i)}else await Ki(i.localStore,t,!1).then((()=>gs(i,t,n))).catch(Q)}async function ds(e,t){const n=b(e),i=t.batch.batchId;try{const e=await function(e,t){const n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=Y.resolve();return s.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);w(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Tn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);ms(n,i,null),ps(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await xs(n,e)}catch(e){await Q(e)}}async function fs(e,t,n){const i=b(e);try{const e=await function(e,t){const n=b(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(w(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);ms(i,t,n),ps(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await xs(i,e)}catch(e){await Q(e)}}function ps(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function ms(e,t,n){const i=b(e);let r=i.hc[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.hc[i.currentUser.toKey()]=r}}function gs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.rc.get(t))e.ic.delete(i),n&&e.sc.wc(i,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||ys(e,t)}))}function ys(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(gr(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),bs(e))}function vs(e,t,n){for(const i of n)i instanceof es?(e.ac.addReference(i.key,t),ws(e,i)):i instanceof ts?(p("SyncEngine","Document no longer in limbo: "+i.key),e.ac.removeReference(i.key,t),e.ac.containsKey(i.key)||ys(e,i.key)):v()}function ws(e,t){const n=t.key,i=n.path.canonicalString();e.uc.get(n)||e.oc.has(i)||(p("SyncEngine","New document in limbo: "+n),e.oc.add(i),bs(e))}function bs(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new V(U.fromString(t)),i=e.fc.next();e.cc.set(i,new rs(n)),e.uc=e.uc.insert(n,i),mr(e.remoteStore,new yi(kt(gt(n.path)),i,2,Z.at))}}async function xs(e,t,n){const i=b(e),r=[],s=[],o=[];i.ic.isEmpty()||(i.ic.forEach(((e,a)=>{o.push(i._c(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){r.push(e);const t=Ui.Ci(a.targetId,e);s.push(t)}})))})),await Promise.all(o),i.sc.Wo(r),await async function(e,t){const n=b(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Y.forEach(t,(t=>Y.forEach(t.Si,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>Y.forEach(t.Di,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!J(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qi.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.qi=n.qi.insert(t,r)}}}(i.localStore,s))}async function ks(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await $i(n.localStore,t);n.currentUser=t,(i=n).lc.forEach((e=>{e.forEach((e=>{e.reject(new k(x.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.lc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await xs(n,e.ji)}var i}function Es(e,t){const n=b(e),i=n.cc.get(t);if(i&&i.nc)return Tn().add(i.key);{let e=Tn();const i=n.rc.get(t);if(!i)return e;for(const t of i){const i=n.ic.get(t);e=e.unionWith(i.view.ju)}return e}}function Ts(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=cs.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Es.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hs.bind(null,t),t.sc.Wo=Qr.bind(null,t.eventManager),t.sc.wc=Yr.bind(null,t.eventManager),t}function Ss(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ds.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fs.bind(null,t),t}class Cs{async initialize(e){this.yt=sr(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return Vi(this.persistence,new zi,e.initialUser,this.yt)}yc(e){return new Pi(Fi.Bs,this.yt)}gc(e){return new Ji}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Is{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>us(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ks.bind(null,this.syncEngine),await Fr(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Gr}createDatastore(e){const t=sr(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new ir(i));var i,r,s;return r=e.authCredentials,s=e.appCheckCredentials,new ur(r,s,n,t)}createRemoteStore(e){var t,n,i,r,s;return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>us(this.syncEngine,e,0),s=er.C()?new er:new Zi,new dr(t,n,i,r,s)}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new ss(e,t,n,i,r,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=b(e);p("RemoteStore","RemoteStore shutting down."),t._u.add(5),await pr(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e,t,n){if(!n)throw new k(x.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function _s(e){if(!V.isDocumentKey(e))throw new k(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function As(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":v()}function Ls(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new k(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=As(e);throw new k(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Os=new Map;class Rs{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new k(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new k(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new k(x.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{get app(){if(!this._app)throw new k(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new k(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rs(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"gapi":const t=e.client;return new _(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new k(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Os.get(e);t&&(p("ComponentProvider","Removing Datastore"),Os.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rs({}),this._settingsFrozen=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ms(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class Ps{withConverter(e){return new Ps(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class Bs extends Ps{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ms(this.firestore,null,new V(e))}withConverter(e){return new Bs(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,gt(n)),this._path=n,this.type="collection"}}function Fs(e,t,...n){if(e=(0,a.getModularInstance)(e),1===arguments.length&&(t=R.R()),Ns("doc","path",t),e instanceof Ds){const i=U.fromString(t,...n);return _s(i),new Ms(e,null,new V(i))}{if(!(e instanceof Ms||e instanceof Bs))throw new k(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(U.fromString(t,...n));return _s(i),new Ms(e.firestore,e instanceof Bs?e.converter:null,new V(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):m("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zs{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Vr(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=u.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function js(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await $i(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Vs(e,t){e.asyncQueue.verifyOperationInProgress();const n=await $s(e);p("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>Br(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Br(t.remoteStore,n))),e.onlineComponents=t}async function $s(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await js(e,new Cs)),e.offlineComponents}async function Ws(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Vs(e,new Is)),e.onlineComponents}function qs(e){return Ws(e).then((e=>e.syncEngine))}async function Hs(e){const t=await Ws(e),n=t.eventManager;return n.onListen=os.bind(null,t.syncEngine),n.onUnlisten=ls.bind(null,t.syncEngine),n}function Gs(e,t,n={}){const i=new E;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const s=new Us({next:s=>{t.enqueueAndForget((()=>Xr(e,o)));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new k(x.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new k(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:e=>r.reject(e)}),o=new Zr(gt(n.path),s,{includeMetadataChanges:!0,Nu:!0});return Kr(e,o)}(await Hs(e),e.asyncQueue,t,n,i))),i.promise}class Ks{get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=rr();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise((()=>{}));const t=new E;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!J(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;throw m("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const i=jr.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.Uc.push(i),i}zc(){this.Kc&&v()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new or(this,"async_queue_retry"),this.Wc=()=>{const e=rr();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=rr();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}}function Xs(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}(e)}class Qs extends Ds{_terminate(){return this._firestoreClient||Zs(this),this._firestoreClient.terminate()}constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Ks,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function Ys(e,t){const n="object"==typeof e?e:(0,i.getApp)(),r="string"==typeof e?e:t||"(default)",s=(0,i._getProvider)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.getDefaultEmulatorHostnameAndPort)("firestore");e&&function(e,t,n,i={}){var r;const s=(e=Ls(e,Ds))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=u.MOCK_USER;else{t=(0,a.createMockUserToken)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new k(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}e._authCredentials=new C(new T(t,n))}}(s,...e)}return s}function Js(e){return e._firestoreClient||Zs(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Zs(e){var t;const n=e._freezeSettings(),i=(r=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new ee(r,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var r,s,o,a;e._firestoreClient=new zs(e._authCredentials,e._appCheckCredentials,e._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{static fromBase64String(e){try{return new eo(ce.fromBase64String(e))}catch(e){throw new k(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new eo(ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new k(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=/^__.*__$/;class so{toMutation(e,t){return null!==this.fieldMask?new tn(e,this.data,this.fieldMask,t,this.fieldTransforms):new en(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}class oo{toMutation(e,t){return new tn(e,this.data,this.fieldMask,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function ao(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class lo{get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new lo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.ia({path:n,oa:!1});return i.ua(e),i}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.ia({path:n,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Eo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(ao(this.sa)&&ro.test(e))throw this.ha('Document fields cannot begin and end with "__"')}constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=i,void 0===r&&this.na(),this.fieldTransforms=r||[],this.fieldMask=s||[]}}class co{da(e,t,n,i=!1){return new lo({sa:e,methodName:t,fa:n,path:j.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||sr(e)}}function uo(e){const t=e._freezeSettings(),n=sr(e._databaseId);return new co(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ho(e,t,n,i,r,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,r);wo("Data must be an object, but it was:",o,i);const a=yo(i,o);let l,c;if(s.merge)l=new st(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=bo(t,i,n);if(!o.contains(r))throw new k(x.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);To(e,r)||e.push(r)}l=new st(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new so(new ot(a),l,c)}class fo extends no{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fo}}function po(e,t,n,i){const r=e.da(1,t,n);wo("Data must be an object, but it was:",r,i);const s=[],o=ot.empty();ie(i,((e,i)=>{const l=ko(t,e,n);i=(0,a.getModularInstance)(i);const c=r.ca(l);if(i instanceof fo)s.push(l);else{const e=go(i,c);null!=e&&(s.push(l),o.set(l,e))}}));const l=new st(s);return new oo(o,l,r.fieldTransforms)}function mo(e,t,n,i,r,s){const o=e.da(1,t,n),l=[bo(t,i,n)],c=[r];if(s.length%2!=0)throw new k(x.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)l.push(bo(t,s[e])),c.push(s[e+1]);const u=[],h=ot.empty();for(let e=l.length-1;e>=0;--e)if(!To(u,l[e])){const t=l[e];let n=c[e];n=(0,a.getModularInstance)(n);const i=o.ca(t);if(n instanceof fo)u.push(t);else{const e=go(n,i);null!=e&&(u.push(t),h.set(t,e))}}const d=new st(u);return new oo(h,d,o.fieldTransforms)}function go(e,t){if(vo(e=(0,a.getModularInstance)(e)))return wo("Unsupported field value:",t,e),yo(e,t);if(e instanceof no)return function(e,t){if(!ao(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=go(r,t.aa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Rt(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=P.fromDate(e);return{timestampValue:zn(t.yt,n)}}if(e instanceof P){const n=new P(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:zn(t.yt,n)}}if(e instanceof io)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof eo)return{bytesValue:jn(t.yt,e._byteString)};if(e instanceof Ms){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Wn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${As(e)}`)}(e,t)}function yo(e,t){const n={};return re(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ie(e,((e,i)=>{const r=go(i,t.ra(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function vo(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof P||e instanceof io||e instanceof eo||e instanceof Ms||e instanceof no)}function wo(e,t,n){if(!vo(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=As(n);throw"an object"===i?t.ha(e+" a custom object"):t.ha(e+" "+i)}var i}function bo(e,t,n){if((t=(0,a.getModularInstance)(t))instanceof to)return t._internalPath;if("string"==typeof t)return ko(e,t);throw Eo("Field path arguments must be of type string or ",e,!1,void 0,n)}const xo=new RegExp("[~\\*/\\[\\]]");function ko(e,t,n){if(t.search(xo)>=0)throw Eo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new to(...t.split("."))._internalPath}catch(i){throw Eo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Eo(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new k(x.INVALID_ARGUMENT,a+e+l)}function To(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{get id(){return this._key.path.lastSegment()}get ref(){return new Ms(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Co(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Io("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}}class Co extends So{data(){return super.data()}}function Io(e,t){return"string"==typeof t?ko(e,t):t instanceof to?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new k(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _o{convertValue(e,t="none"){switch(ve(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fe(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){const n={};return ie(e.fields,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new io(de(e.latitude),de(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=me(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ge(e));default:return null}}convertTimestamp(e){const t=he(e);return new P(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=U.fromString(e);w(ui(n));const i=new te(n.get(1),n.get(3)),r=new V(n.popFirst(5));return i.isEqual(t)||m(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lo{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class Oo extends So{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Io("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}}class Ro extends Oo{data(e={}){return super.data(e)}}class Do{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ro(this._firestore,this._userDataWriter,n.key,n,new Lo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new k(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new Ro(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Lo(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new Ro(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Lo(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Mo(t.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Lo(i.hasPendingWrites,i.fromCache),this.query=n}}function Mo(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Po(e){e=Ls(e,Ms);const t=Ls(e.firestore,Qs);return Gs(Js(t),e._key).then((n=>Vo(t,e,n)))}class Bo extends _o{convertBytes(e){return new eo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ms(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function Fo(e,t,n){e=Ls(e,Ms);const i=Ls(e.firestore,Qs),r=Ao(e.converter,t,n);return jo(i,[ho(uo(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,Ht.none())])}function Uo(e,t,n,...i){e=Ls(e,Ms);const r=Ls(e.firestore,Qs),s=uo(r);let o;return o="string"==typeof(t=(0,a.getModularInstance)(t))||t instanceof to?mo(s,"updateDoc",e._key,t,n,i):po(s,"updateDoc",e._key,t),jo(r,[o.toMutation(e._key,Ht.exists(!0))])}function zo(e,...t){var n,i,r;e=(0,a.getModularInstance)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Xs(t[o])||(s=t[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges};if(Xs(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(i=e.error)||void 0===i?void 0:i.bind(e),t[o+2]=null===(r=e.complete)||void 0===r?void 0:r.bind(e)}let c,u,h;if(e instanceof Ms)u=Ls(e.firestore,Qs),h=gt(e._key.path),c={next:n=>{t[o]&&t[o](Vo(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Ls(e,Ps);u=Ls(n.firestore,Qs),h=n._query;const i=new Bo(u);c={next:e=>{t[o]&&t[o](new Do(u,i,n,e))},error:t[o+1],complete:t[o+2]},No(e._query)}return function(e,t,n,i){const r=new Us(i),s=new Zr(t,r,n);return e.asyncQueue.enqueueAndForget((async()=>Kr(await Hs(e),s))),()=>{r.bc(),e.asyncQueue.enqueueAndForget((async()=>Xr(await Hs(e),s)))}}(Js(u),h,l,c)}function jo(e,t){return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=Ss(e);try{const e=await function(e,t){const n=b(e),i=P.now(),r=t.reduce(((e,t)=>e.add(t.key)),Tn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=mn(),l=Tn();return n.Gi.getEntries(e,r).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((r=>{s=r;const o=[];for(const e of t){const t=Jt(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new tn(e.key,t,at(t.value.mapValue),Ht.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:vn(s)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.hc[e.currentUser.toKey()];i||(i=new et(D)),i=i.insert(t,n),e.hc[e.currentUser.toKey()]=i}(i,e.batchId,n),await xs(i,e.changes),await Nr(i.remoteStore)}catch(e){const t=Vr(e,"Failed to persist write");n.reject(t)}}(await qs(e),t,n))),n.promise}(Js(e),t)}function Vo(e,t,n){const i=n.docs.get(t._key),r=new Bo(e);return new Oo(e,r,t._key,i,new Lo(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){var n;n=i.SDK_VERSION,h=n,(0,i._registerComponent)(new(0,r.Component)("firestore",((e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new Qs(new I(e.getProvider("auth-internal")),new L(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new k(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new te(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(c,"3.8.0",e),(0,i.registerVersion)(c,"3.8.0","esm2017")}()})),s.register("lW9Fu",(function(e,i){t(e.exports,"createWebChannelTransport",(function(){return Jn})),t(e.exports,"getStatEventTarget",(function(){return Zn})),t(e.exports,"ErrorCode",(function(){return ei})),t(e.exports,"EventType",(function(){return ti})),t(e.exports,"Event",(function(){return ni})),t(e.exports,"Stat",(function(){return ii})),t(e.exports,"FetchXmlHttpFactory",(function(){return ri})),t(e.exports,"WebChannel",(function(){return si})),t(e.exports,"XhrIo",(function(){return oi}));var r,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},o={},a=a||{},l=s||self;function c(){}function u(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function h(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m).apply(null,arguments)}function y(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function w(){this.s=this.s,this.o=this.o}w.prototype.s=!1,w.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f))},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function x(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function k(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(u(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let r=0;r<i;r++)e[t+r]=n[r]}else e.push(n)}}function E(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{l.addEventListener("test",c,t),l.removeEventListener("test",c,t)}catch(e){}return e}();function S(e){return/^[\s\xa0]*$/.test(e)}var C=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function I(e,t){return e<t?-1:e>t?1:0}function N(){var e=l.navigator;return e&&(e=e.userAgent)?e:""}function _(e){return-1!=N().indexOf(e)}function A(e){return A[" "](e),e}A[" "]=c;var L,O,R=_("Opera"),D=_("Trident")||_("MSIE"),M=_("Edge"),P=M||D,B=_("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!_("Edge"))&&!(_("Trident")||_("MSIE"))&&!_("Edge"),F=-1!=N().toLowerCase().indexOf("webkit")&&!_("Edge");function U(){var e=l.document;return e?e.documentMode:void 0}e:{var z="",j=(O=N(),B?/rv:([^\);]+)(\)|;)/.exec(O):M?/Edge\/([\d\.]+)/.exec(O):D?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(O):F?/WebKit\/(\S+)/.exec(O):R?/(?:Version)[ \/]?(\S+)/.exec(O):void 0);if(j&&(z=j?j[1]:""),D){var V=U();if(null!=V&&V>parseFloat(z)){L=String(V);break e}}L=z}var $,W={};function q(){return function(e){var t=W;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=C(String(L)).split("."),n=C("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=I(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||I(0==r[2].length,0==s[2].length)||I(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}if(l.document&&D){var H=U();$=H||(parseInt(L,10)||void 0)}else $=void 0;var G=$;function K(e,t){if(E.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{A(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:X[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&K.X.h.call(this)}}v(K,E);var X={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=r,this.key=++Y,this.ba=this.ea=!1}function Z(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ee(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function te(e){const t={};for(const n in e)t[n]=e[n];return t}const ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<ne.length;t++)n=ne[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function re(e){this.src=e,this.g={},this.h=0}function se(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=b(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function oe(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==i)return r}return-1}re.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=oe(e,t,i,r);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new J(t,this.src,s,!!i,r)).ea=n,e.push(t)),t};var ae="closure_lm_"+(1e6*Math.random()|0),le={};function ce(e,t,n,i,r){if(i&&i.once)return he(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ce(e,t[s],n,i,r);return null}return n=ve(n),e&&e[Q]?e.N(t,n,h(i)?!!i.capture:!!i,r):ue(e,t,n,!1,i,r)}function ue(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=h(r)?!!r.capture:!!r,a=ge(e);if(a||(e[ae]=a=new re(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=me;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)T||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(pe(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function he(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)he(e,t[s],n,i,r);return null}return n=ve(n),e&&e[Q]?e.O(t,n,h(i)?!!i.capture:!!i,r):ue(e,t,n,!0,i,r)}function de(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)de(e,t[s],n,i,r);else i=h(i)?!!i.capture:!!i,n=ve(n),e&&e[Q]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=oe(s=e.g[t],n,i,r))&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ge(e))&&(t=e.g[t.toString()],e=-1,t&&(e=oe(t,n,i,r)),(n=-1<e?t[e]:null)&&fe(n))}function fe(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Q])se(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(pe(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ge(t))?(se(n,e),0==n.h&&(n.src=null,t[ae]=null)):Z(e)}}}function pe(e){return e in le?le[e]:le[e]="on"+e}function me(e,t){if(e.ba)e=!0;else{t=new K(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&fe(e),e=n.call(i,t)}return e}function ge(e){return(e=e[ae])instanceof re?e:null}var ye="__closure_events_fn_"+(1e9*Math.random()>>>0);function ve(e){return"function"==typeof e?e:(e[ye]||(e[ye]=function(t){return e.handleEvent(t)}),e[ye])}function we(){w.call(this),this.i=new re(this),this.P=this,this.I=null}function be(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new E(t,e);else if(t instanceof E)t.target=t.target||e;else{var r=t;ie(t=new E(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=xe(o,i,!0,t)&&r}if(r=xe(o=t.g=e,i,!0,t)&&r,r=xe(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=xe(o=t.g=n[s],i,!1,t)&&r}function xe(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&se(e.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}v(we,w),we.prototype[Q]=!0,we.prototype.removeEventListener=function(e,t,n,i){de(this,e,t,n,i)},we.prototype.M=function(){if(we.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Z(n[i]);delete t.g[e],t.h--}}this.I=null},we.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},we.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var ke=l.JSON.stringify;function Ee(){var e=Ae;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Te,Se=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new Ce),(e=>e.reset()));class Ce{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Ie(e){l.setTimeout((()=>{throw e}),0)}function Ne(e,t){Te||function(){var e=l.Promise.resolve(void 0);Te=function(){e.then(Le)}}(),_e||(Te(),_e=!0),Ae.add(e,t)}var _e=!1,Ae=new class{add(e,t){const n=Se.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Le(){for(var e;e=Ee();){try{e.h.call(e.g)}catch(e){Ie(e)}var t=Se;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}_e=!1}function Oe(e,t){we.call(this),this.h=e||1,this.g=t||l,this.j=g(this.lb,this),this.l=Date.now()}function Re(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function De(e,t,n){if("function"==typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:l.setTimeout(e,t||0)}function Me(e){e.g=De((()=>{e.g=null,e.i&&(e.i=!1,Me(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}v(Oe,we),(r=Oe.prototype).ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),be(this,"tick"),this.ca&&(Re(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Oe.X.M.call(this),Re(this),delete this.g};class Pe extends w{l(e){this.h=arguments,this.g?this.i=!0:Me(this)}M(){super.M(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Be(e){w.call(this),this.h=e,this.g={}}v(Be,w);var Fe=[];function Ue(e,t,n,i){Array.isArray(n)||(n&&(Fe[0]=n.toString()),n=Fe);for(var r=0;r<n.length;r++){var s=ce(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ze(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&fe(e)}),e),e.g={}}function je(){this.g=!0}function Ve(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return ke(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Be.prototype.M=function(){Be.X.M.call(this),ze(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},je.prototype.Aa=function(){this.g=!1},je.prototype.info=function(){};var $e={},We=null;function qe(){return We=We||new we}function He(e){E.call(this,$e.Pa,e)}function Ge(e){const t=qe();be(t,new He(t))}function Ke(e,t){E.call(this,$e.STAT_EVENT,e),this.stat=t}function Xe(e){const t=qe();be(t,new Ke(t,e))}function Qe(e,t){E.call(this,$e.Qa,e),this.size=t}function Ye(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){e()}),t)}$e.Pa="serverreachability",v(He,E),$e.STAT_EVENT="statevent",v(Ke,E),$e.Qa="timingevent",v(Qe,E);var Je={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ze={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function et(){}function tt(e){return e.h||(e.h=e.i())}function nt(){}et.prototype.h=null;var it,rt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function st(){E.call(this,"d")}function ot(){E.call(this,"c")}function at(){}function lt(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new Be(this),this.O=ut,e=P?125:void 0,this.T=new Oe(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ct}function ct(){this.i=null,this.g="",this.h=!1}v(st,E),v(ot,E),v(at,et),at.prototype.g=function(){return new XMLHttpRequest},at.prototype.i=function(){return{}},it=new at;var ut=45e3,ht={},dt={};function ft(e,t,n){e.K=1,e.v=Ot(It(t)),e.s=n,e.P=!0,pt(e,null)}function pt(e,t){e.F=Date.now(),vt(e),e.A=It(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),qt(n.i,"t",i),e.C=0,n=e.l.H,e.h=new ct,e.g=qn(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Pe(g(e.La,e,e.g),e.N)),Ue(e.S,e.g,"readystatechange",e.ib),t=e.H?te(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ge(),function(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function mt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function gt(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=yt(e,n),i==dt){4==t&&(e.o=4,Xe(14),r=!1),Ve(e.j,e.m,null,"[Incomplete Response]");break}if(i==ht){e.o=4,Xe(15),Ve(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}Ve(e.j,e.m,i,null),Et(e,i)}mt(e)&&i!=dt&&i!=ht&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Xe(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bn(t),t.K=!0,Xe(11))):(Ve(e.j,e.m,n,"[Invalid Chunked Response]"),kt(e),xt(e))}function yt(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?dt:(n=Number(t.substring(n,i)),isNaN(n)?ht:(i+=1)+n>t.length?dt:(t=t.substr(i,n),e.C=i+n,t))}function vt(e){e.V=Date.now()+e.O,wt(e,e.O)}function wt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ye(g(e.gb,e),t)}function bt(e){e.B&&(l.clearTimeout(e.B),e.B=null)}function xt(e){0==e.l.G||e.I||zn(e.l,e)}function kt(e){bt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Re(e.T),ze(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Et(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Yt(n.h,e)))if(!e.J&&Yt(n.h,e)&&3==n.G){try{var i=n.Fa.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Un(n),_n(n)}Pn(n),Xe(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=Ye(g(n.cb,n),6e3));if(1>=Qt(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Vn(n,11)}else if((e.J||n.g==e)&&Un(n),!S(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const t=c[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const r=c[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Jt(s,s.h),s.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.za=e,Lt(i.F,i.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((i=n).sa=Wn(i,i.H?i.ka:null,i.V),o.J){Zt(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(bt(a),vt(a)),i.g=o}else Mn(i);0<n.i.length&&Ln(n)}else"stop"!=c[0]&&"close"!=c[0]||Vn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Vn(n,7):Nn(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}Ge()}catch(e){}}function Tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(u(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}(r=lt.prototype).setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==kn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const h=kn(this.g);var t=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||P||this.g&&(this.h.h||this.g.fa()||En(this.g)))){this.I||4!=h||7==t||Ge(),bt(this);var n=this.g.aa();this.Y=n;t:if(mt(this)){var i=En(this.g);e="";var r=i.length,s=4==kn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){kt(this),xt(this);var o="";break t}this.h.i=new l.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Xe(12),kt(this),xt(this);break e}Ve(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Et(this,n)}this.P?(gt(this,h,o),P&&this.i&&3==h&&(Ue(this.S,this.T,"tick",this.hb),this.T.start())):(Ve(this.j,this.m,o,null),Et(this,o)),4==h&&kt(this),this.i&&!this.I&&(4==h?zn(this.l,this):(this.i=!1,vt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Xe(12)):(this.o=0,Xe(13)),kt(this),xt(this)}}}catch(e){}},r.hb=function(){if(this.g){var e=kn(this.g),t=this.g.fa();this.C<t.length&&(bt(this),gt(this,e,t),this.i&&4!=e&&vt(this))}},r.cancel=function(){this.I=!0,kt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Ge(),Xe(17)),kt(this),this.o=2,xt(this)):wt(this,this.V-e)};var St=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ct(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ct){this.h=void 0!==t?t:e.h,Nt(this,e.j),this.s=e.s,this.g=e.g,_t(this,e.m),this.l=e.l,t=e.i;var n=new jt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),At(this,n),this.o=e.o}else e&&(n=String(e).match(St))?(this.h=!!t,Nt(this,n[1]||"",!0),this.s=Rt(n[2]||""),this.g=Rt(n[3]||"",!0),_t(this,n[4]),this.l=Rt(n[5]||"",!0),At(this,n[6]||"",!0),this.o=Rt(n[7]||"")):(this.h=!!t,this.i=new jt(null,this.h))}function It(e){return new Ct(e)}function Nt(e,t,n){e.j=n?Rt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function _t(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function At(e,t,n){t instanceof jt?(e.i=t,function(e,t){t&&!e.j&&(Vt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&($t(this,t),qt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Dt(t,Ut)),e.i=new jt(t,e.h))}function Lt(e,t,n){e.i.set(t,n)}function Ot(e){return Lt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Rt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Dt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Mt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Mt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ct.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Dt(t,Pt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Dt(t,Pt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Dt(n,"/"==n.charAt(0)?Ft:Bt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Dt(n,zt)),e.join("")};var Pt=/[#\/\?@]/g,Bt=/[#\?:]/g,Ft=/[#\?]/g,Ut=/[#\?@]/g,zt=/#/g;function jt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Vt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function $t(e,t){Vt(e),t=Ht(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Wt(e,t){return Vt(e),t=Ht(e,t),e.g.has(t)}function qt(e,t,n){$t(e,t),0<n.length&&(e.i=null,e.g.set(Ht(e,t),x(n)),e.h+=n.length)}function Ht(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(r=jt.prototype).add=function(e,t){Vt(this),this.i=null,e=Ht(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){Vt(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},r.oa=function(){Vt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},r.W=function(e){Vt(this);let t=[];if("string"==typeof e)Wt(this,e)&&(t=t.concat(this.g.get(Ht(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return Vt(this),this.i=null,Wt(this,e=Ht(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};function Gt(e){this.l=e||Kt,l.PerformanceNavigationTiming?e=0<(e=l.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(l.g&&l.g.Ga&&l.g.Ga()&&l.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Kt=10;function Xt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Qt(e){return e.h?1:e.g?e.g.size:0}function Yt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Jt(e,t){e.g?e.g.add(t):e.h=t}function Zt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function en(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return x(e.i)}function tn(){}function nn(){this.g=new tn}function rn(e,t,n){const i=n||"";try{Tt(e,(function(e,n){let r=e;h(e)&&(r=ke(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function sn(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function on(e){this.l=e.ac||null,this.j=e.jb||!1}function an(e,t){we.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Gt.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},tn.prototype.stringify=function(e){return l.JSON.stringify(e,void 0)},tn.prototype.parse=function(e){return l.JSON.parse(e,void 0)},v(on,et),on.prototype.g=function(){return new an(this.l,this.j)},on.prototype.i=function(e){return function(){return e}}({}),v(an,we);var ln=0;function cn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function un(e){e.readyState=4,e.l=null,e.j=null,e.A=null,hn(e)}function hn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(r=an.prototype).open=function(e,t){if(this.readyState!=ln)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,hn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||l).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,un(this)),this.readyState=ln},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==l.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?un(this):hn(this),3==this.readyState&&cn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,un(this))},r.Ua=function(e){this.g&&(this.response=e,un(this))},r.ga=function(){this.g&&un(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(an.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var dn=l.JSON.parse;function fn(e){we.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pn,this.K=this.L=!1}v(fn,we);var pn="",mn=/^https?$/i,gn=["POST","PUT"];function yn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,vn(e),bn(e)}function vn(e){e.D||(e.D=!0,be(e,"complete"),be(e,"error"))}function wn(e){if(e.h&&void 0!==a&&(!e.C[1]||4!=kn(e)||2!=e.aa()))if(e.v&&4==kn(e))De(e.Ha,0,e);else if(be(e,"readystatechange"),4==kn(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var r=String(e.H).match(St)[1]||null;if(!r&&l.self&&l.self.location){var s=l.self.location.protocol;r=s.substr(0,s.length-1)}i=!mn.test(r?r.toLowerCase():"")}n=i}if(n)be(e,"complete"),be(e,"success");else{e.m=6;try{var o=2<kn(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",vn(e)}}finally{bn(e)}}}function bn(e,t){if(e.g){xn(e);const n=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||be(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function xn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(l.clearTimeout(e.A),e.A=null)}function kn(e){return e.g?e.g.readyState:0}function En(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case pn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Tn(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Sn(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Tn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Lt(e,t,n))}function Cn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function In(e){this.Ca=0,this.i=[],this.j=new je,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Cn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Cn("baseRetryDelayMs",5e3,e),this.bb=Cn("retryDelaySeedMs",1e4,e),this.$a=Cn("forwardChannelMaxRetries",2,e),this.ta=Cn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Gt(e&&e.concurrentRequestLimit),this.Fa=new nn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Nn(e){if(An(e),3==e.G){var t=e.U++,n=It(e.F);Lt(n,"SID",e.I),Lt(n,"RID",t),Lt(n,"TYPE","terminate"),Rn(e,n),(t=new lt(e,e.j,t,void 0)).K=2,t.v=Ot(It(n)),n=!1,l.navigator&&l.navigator.sendBeacon&&(n=l.navigator.sendBeacon(t.v.toString(),"")),!n&&l.Image&&((new Image).src=t.v,n=!0),n||(t.g=qn(t.l,null),t.g.da(t.v)),t.F=Date.now(),vt(t)}$n(e)}function _n(e){e.g&&(Bn(e),e.g.cancel(),e.g=null)}function An(e){_n(e),e.u&&(l.clearTimeout(e.u),e.u=null),Un(e),e.h.cancel(),e.m&&("number"==typeof e.m&&l.clearTimeout(e.m),e.m=null)}function Ln(e){Xt(e.h)||e.m||(e.m=!0,Ne(e.Ja,e),e.C=0)}function On(e,t){var n;n=t?t.m:e.U++;const i=It(e.F);Lt(i,"SID",e.I),Lt(i,"RID",n),Lt(i,"AID",e.T),Rn(e,i),e.o&&e.s&&Sn(i,e.o,e.s),n=new lt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Dn(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Jt(e.h,n),ft(n,i,t)}function Rn(e,t){e.ia&&ee(e.ia,(function(e,n){Lt(t,n,e)})),e.l&&Tt({},(function(e,n){Lt(t,n,e)}))}function Dn(e,t,n){n=Math.min(e.i.length,n);var i=e.l?g(e.l.Ra,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=t,0>n)t=Math.max(0,r[o].h-100),s=!1;else try{rn(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function Mn(e){e.g||e.u||(e.Z=1,Ne(e.Ia,e),e.A=0)}function Pn(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=Ye(g(e.Ia,e),jn(e,e.A)),e.A++,!0)}function Bn(e){null!=e.B&&(l.clearTimeout(e.B),e.B=null)}function Fn(e){e.g=new lt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=It(e.sa);Lt(t,"RID","rpc"),Lt(t,"SID",e.I),Lt(t,"CI",e.L?"0":"1"),Lt(t,"AID",e.T),Lt(t,"TYPE","xmlhttp"),Rn(e,t),e.o&&e.s&&Sn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Ot(It(t)),n.s=null,n.P=!0,pt(n,e)}function Un(e){null!=e.v&&(l.clearTimeout(e.v),e.v=null)}function zn(e,t){var n=null;if(e.g==t){Un(e),Bn(e),e.g=null;var i=2}else{if(!Yt(e.h,t))return;n=t.D,Zt(e.h,t),i=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;be(i=qe(),new Qe(i,n)),Ln(e)}else Mn(e);else if(3==(r=t.o)||0==r&&0<e.pa||!(1==i&&function(e,t){return!(Qt(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=Ye(g(e.Ja,e,t),jn(e,e.C)),e.C++,0)))}(e,t)||2==i&&Pn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Vn(e,5);break;case 4:Vn(e,10);break;case 3:Vn(e,6);break;default:Vn(e,2)}}function jn(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Vn(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=g(e.kb,e);n||(n=new Ct("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||Nt(n,"https"),Ot(n)),function(e,t){const n=new je;if(l.Image){const i=new Image;i.onload=y(sn,n,i,"TestLoadImage: loaded",!0,t),i.onerror=y(sn,n,i,"TestLoadImage: error",!1,t),i.onabort=y(sn,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=y(sn,n,i,"TestLoadImage: timeout",!1,t),l.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Xe(2);e.G=0,e.l&&e.l.va(t),$n(e),An(e)}function $n(e){if(e.G=0,e.la=[],e.l){const t=en(e.h);0==t.length&&0==e.i.length||(k(e.la,t),k(e.la,e.i),e.h.i.length=0,x(e.i),e.i.length=0),e.l.ua()}}function Wn(e,t,n){var i=n instanceof Ct?It(n):new Ct(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),_t(i,i.m);else{var r=l.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new Ct(null,void 0);i&&Nt(s,i),t&&(s.g=t),r&&_t(s,r),n&&(s.l=n),i=s}return n=e.D,t=e.za,n&&t&&Lt(i,n,t),Lt(i,"VER",e.ma),Rn(e,i),i}function qn(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new fn(new on({jb:!0})):new fn(e.ra)).Ka(e.H),t}function Hn(){}function Gn(){if(D&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function Kn(e,t){we.call(this),this.g=new In(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!S(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Yn(this)}function Xn(e){st.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Qn(){ot.call(this),this.status=1}function Yn(e){this.g=e}(r=fn.prototype).Ka=function(e){this.L=e},r.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():it.g(),this.C=this.u?tt(this.u):tt(it),this.g.onreadystatechange=g(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void yn(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),r=l.FormData&&e instanceof l.FormData,!(0<=b(gn,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xn(this),0<this.B&&((this.K=function(e){return D&&q()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.qa,this)):this.A=De(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){yn(this,e)}},r.qa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,be(this,"complete"),be(this,"abort"),bn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bn(this,!0)),fn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?wn(this):this.fb())},r.fb=function(){wn(this)},r.aa=function(){try{return 2<kn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),dn(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=In.prototype).ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new lt(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=te(s),ie(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Dn(this,r,t),Lt(n=It(this.F),"RID",e),Lt(n,"CVER",22),this.D&&Lt(n,"X-HTTP-Session-Id",this.D),Rn(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(Tn(s)))+"&"+t:this.o&&Sn(n,this.o,s)),Jt(this.h,r),this.Ya&&Lt(n,"TYPE","init"),this.O?(Lt(n,"$req",t),Lt(n,"SID","null"),r.Z=!0,ft(r,n,null)):ft(r,n,t),this.G=2}}else 3==this.G&&(e?On(this,e):0==this.i.length||Xt(this.h)||On(this))},r.Ia=function(){if(this.u=null,Fn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ye(g(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Xe(10),_n(this),Fn(this))},r.cb=function(){null!=this.v&&(this.v=null,_n(this),Pn(this),Xe(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))},(r=Hn.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},Gn.prototype.g=function(e,t){return new Kn(e,t)},v(Kn,we),Kn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Xe(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Wn(e,null,e.V),Ln(e)},Kn.prototype.close=function(){Nn(this.g)},Kn.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ke(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&Ln(t)},Kn.prototype.M=function(){this.g.l=null,delete this.j,Nn(this.g),delete this.g,Kn.X.M.call(this)},v(Xn,st),v(Qn,ot),v(Yn,Hn),Yn.prototype.xa=function(){be(this.g,"a")},Yn.prototype.wa=function(e){be(this.g,new Xn(e))},Yn.prototype.va=function(e){be(this.g,new Qn)},Yn.prototype.ua=function(){be(this.g,"b")},Gn.prototype.createWebChannel=Gn.prototype.g,Kn.prototype.send=Kn.prototype.u,Kn.prototype.open=Kn.prototype.m,Kn.prototype.close=Kn.prototype.close,Je.NO_ERROR=0,Je.TIMEOUT=8,Je.HTTP_ERROR=6,Ze.COMPLETE="complete",nt.EventType=rt,rt.OPEN="a",rt.CLOSE="b",rt.ERROR="c",rt.MESSAGE="d",we.prototype.listen=we.prototype.N,fn.prototype.listenOnce=fn.prototype.O,fn.prototype.getLastError=fn.prototype.Oa,fn.prototype.getLastErrorCode=fn.prototype.Ea,fn.prototype.getStatus=fn.prototype.aa,fn.prototype.getResponseJson=fn.prototype.Sa,fn.prototype.getResponseText=fn.prototype.fa,fn.prototype.send=fn.prototype.da,fn.prototype.setWithCredentials=fn.prototype.Ka;var Jn=o.createWebChannelTransport=function(){return new Gn},Zn=o.getStatEventTarget=function(){return qe()},ei=o.ErrorCode=Je,ti=o.EventType=Ze,ni=o.Event=$e,ii=o.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ri=o.FetchXmlHttpFactory=on,si=o.WebChannel=nt,oi=o.XhrIo=fn})),s.register("eyjy7",(function(e,n){t(e.exports,"onAuthStateChanged",(function(){return s("2YDLC").v})),t(e.exports,"getAuth",(function(){return s("2YDLC").n})),t(e.exports,"GoogleAuthProvider",(function(){return s("2YDLC").Q})),t(e.exports,"signInWithRedirect",(function(){return s("2YDLC").f})),t(e.exports,"signInWithEmailAndPassword",(function(){return s("2YDLC").a6})),t(e.exports,"createUserWithEmailAndPassword",(function(){return s("2YDLC").a5})),t(e.exports,"signOut",(function(){return s("2YDLC").y})),t(e.exports,"getRedirectResult",(function(){return s("2YDLC").j})),s("1iO0g")})),s.register("1iO0g",(function(e,n){t(e.exports,"GoogleAuthProvider",(function(){return s("2YDLC").Q})),t(e.exports,"createUserWithEmailAndPassword",(function(){return s("2YDLC").a5})),t(e.exports,"getAuth",(function(){return s("2YDLC").n})),t(e.exports,"getRedirectResult",(function(){return s("2YDLC").j})),t(e.exports,"onAuthStateChanged",(function(){return s("2YDLC").v})),t(e.exports,"signInWithEmailAndPassword",(function(){return s("2YDLC").a6})),t(e.exports,"signInWithRedirect",(function(){return s("2YDLC").f})),t(e.exports,"signOut",(function(){return s("2YDLC").y})),s("ffjl9"),s("ix4Jr"),s("7vF8m"),s("4a6xH");s("2YDLC")})),s.register("2YDLC",(function(e,n){t(e.exports,"Q",(function(){return _e})),t(e.exports,"a5",(function(){return je})),t(e.exports,"a6",(function(){return Ve})),t(e.exports,"v",(function(){return $e})),t(e.exports,"y",(function(){return We})),t(e.exports,"f",(function(){return Lt})),t(e.exports,"j",(function(){return Ot})),t(e.exports,"n",(function(){return ln}));var i=s("ffjl9"),r=s("ix4Jr"),o=s("7vF8m"),a=s("l73V3"),l=s("4a6xH");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,h=new(0,i.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new(0,o.Logger)("@firebase/auth");function f(e,...t){d.logLevel<=o.LogLevel.ERROR&&d.error(`Auth (${r.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw v(e,...t)}function m(e,...t){return v(e,...t)}function g(e,t,n){const r=Object.assign(Object.assign({},u()),{[t]:n});return new(0,i.ErrorFactory)("auth","Firebase",r).create(t,{appName:e.name})}function y(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&p(e,"argument-error"),g(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return h.create(e,...t)}function w(e,t,...n){if(!e)throw v(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function x(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Map;function E(e){x(e instanceof Function,"Expected a class definition");let t=k.get(e);return t?(x(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,k.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(S()||(0,i.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,x(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.isMobileCordova)()||(0,i.isReactNative)()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){x(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},L=new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function R(e,t,n,r,s={}){return D(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.querystring)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),_.fetch()(P(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))}))}async function D(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},A),t);try{const t=new B(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw F(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);p(e,a)}}catch(t){if(t instanceof i.FirebaseError)throw t;p(e,"network-request-failed")}}async function M(e,t,n,i,r={}){const s=await R(e,t,n,i,r);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function P(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?N(e.config,r):`${e.config.apiScheme}://${r}`}class B{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),L.get())}))}}function F(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=m(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){return 1e3*Number(e)}function j(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.base64Decode)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(e){return f("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function V(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ${_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e){var t;const n=e.auth,i=await e.getIdToken(),r=await V(e,async function(e,t){return R(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));w(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,a.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const l=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const h=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==l?void 0:l.length)),f=!!h&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new W(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(void 0!==e.idToken,"internal-error"),w(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=j(e);return w(t,"internal-error"),w(void 0!==t.exp,"internal-error"),w(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await D(e,{},(async()=>{const n=(0,i.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=P(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new H;return n&&(w("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(w("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(w("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new H,this.toJSON())}_performRefresh(){return b("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){w("string"==typeof e||void 0===e,"internal-error",{appName:t})}class K{async getIdToken(e){const t=await V(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,i.getModularInstance)(e),r=await n.getIdToken(t),s=j(r);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:U(z(s.auth_time)),issuedAtTime:U(z(s.iat)),expirationTime:U(z(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,i.getModularInstance)(e);await q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new K(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await V(this,async function(e,t){return R(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:x,providerData:k,stsTokenManager:E}=t;w(v&&E,e,"internal-error");const T=H.fromJSON(this.name,E);w("string"==typeof v,e,"internal-error"),G(u,e.name),G(h,e.name),w("boolean"==typeof b,e,"internal-error"),w("boolean"==typeof x,e,"internal-error"),G(d,e.name),G(f,e.name),G(p,e.name),G(m,e.name),G(g,e.name),G(y,e.name);const S=new K({uid:v,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:x,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return k&&Array.isArray(k)&&(S.providerData=k.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const i=new H;i.updateFromServerResponse(t);const r=new K({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await q(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=(0,a.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new W(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}X.type="NONE";const Q=X;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,t,n){return`firebase:${e}:${t}:${n}`}class J{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?K._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new J(E(Q),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||E(Q);const s=Y(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=K._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new J(r,e,n)):new J(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Y(this.userKey,i.apiKey,r),this.fullPersistenceKey=Y("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ie(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(se(t))return"Blackberry";if(oe(t))return"Webos";if(te(t))return"Safari";if((t.includes("chrome/")||ne(t))&&!t.includes("edge/"))return"Chrome";if(re(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ee(e=(0,i.getUA)()){return/firefox\//i.test(e)}function te(e=(0,i.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ne(e=(0,i.getUA)()){return/crios\//i.test(e)}function ie(e=(0,i.getUA)()){return/iemobile/i.test(e)}function re(e=(0,i.getUA)()){return/android/i.test(e)}function se(e=(0,i.getUA)()){return/blackberry/i.test(e)}function oe(e=(0,i.getUA)()){return/webos/i.test(e)}function ae(e=(0,i.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function le(e=(0,i.getUA)()){return ae(e)||re(e)||oe(e)||se(e)||/windows phone/i.test(e)||ie(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(e,t=[]){let n;switch(e){case"Browser":n=Z((0,i.getUA)());break;case"Worker":n=`${Z((0,i.getUA)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=E(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await J.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await q(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.getModularInstance)(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(E(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,i.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&E(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await J.create(this,[E(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return w(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fe(this),this.idTokenSubscription=new fe(this),this.beforeStateQueue=new ue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function de(e){return(0,i.getModularInstance)(e)}class fe{get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.createSubscribe)((e=>this.observer=e))}}function pe(e,t,n){const i=de(e);w(i._canInitEmulator,i,"emulator-config-failed"),w(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=me(t),{host:o,port:a}=function(e){const t=me(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:ge(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:ge(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function me(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ge(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ye{toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e,t){return R(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we extends ye{static _fromEmailAndPassword(e,t){return new we(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new we(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",O(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ve(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends ye{static _fromParams(e){const t=new xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=(0,a.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new xe(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return be(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,be(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,be(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.querystring)(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee extends ye{static _fromVerification(e,t){return new Ee({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ee({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ke)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Ee({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static parseLink(e){const t=function(e){const t=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).link,n=t?(0,i.querystringDecode)((0,i.extractQuerystring)(t)).deep_link_id:null,r=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).deep_link_id;return(r?(0,i.querystringDecode)((0,i.extractQuerystring)(r)).link:null)||r||n||t||e}(e);try{return new Te(t)}catch(e){return null}}constructor(e){var t,n,r,s,o,a;const l=(0,i.querystringDecode)((0,i.extractQuerystring)(e)),c=null!==(t=l.apiKey)&&void 0!==t?t:null,u=null!==(n=l.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=l.mode)&&void 0!==r?r:null);w(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se{static credential(e,t){return we._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Te.parseLink(t);return w(n,"argument-error"),we._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Se.PROVIDER_ID}}Se.PROVIDER_ID="password",Se.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Se.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends Ce{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne extends Ie{static credential(e){return xe._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Ne.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ne.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e extends Ie{static credential(e,t){return xe._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return _e.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}_e.GOOGLE_SIGN_IN_METHOD="google.com",_e.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae extends Ie{static credential(e){return xe._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Ae.GITHUB_SIGN_IN_METHOD="github.com",Ae.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le extends Ie{static credential(e,t){return xe._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Le.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Oe(e,t){return M(e,"POST","/v1/accounts:signUp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.TWITTER_SIGN_IN_METHOD="twitter.com",Le.PROVIDER_ID="twitter.com";class Re{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await K._fromIdTokenResponse(e,n,i),s=De(n);return new Re({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=De(n);return new Re({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function De(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me extends i.FirebaseError{static _fromErrorAndOperation(e,t,n,i){return new Me(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Me.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Pe(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Me._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t,n=!1){const i=await V(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Re._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Fe(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await V(e,Pe(i,r,t,e),n);w(s.idToken,i,"internal-error");const o=j(s.idToken);w(o,i,"internal-error");const{sub:a}=o;return w(e.uid===a,i,"user-mismatch"),Re._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&p(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(e,t,n=!1){const i="signIn",r=await Pe(e,i,t),s=await Re._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function ze(e,t){return Ue(de(e),t)}async function je(e,t,n){const i=de(e),r=await Oe(i,{returnSecureToken:!0,email:t,password:n}),s=await Re._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Ve(e,t,n){return ze((0,i.getModularInstance)(e),Se.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e,t,n,r){return(0,i.getModularInstance)(e).onAuthStateChanged(t,n,r)}function We(e){return(0,i.getModularInstance)(e).signOut()}new WeakMap;const qe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{_isAvailable(){try{return this.storage?(this.storage.setItem(qe,"1"),this.storage.removeItem(qe),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends He{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,i.isIE)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,i.getUA)();return te(e)||ae(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=le(),this._shouldAllowMigration=!0}}Ge.type="LOCAL";const Ke=Ge;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends He{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Xe.type="SESSION";const Qe=Xe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ye(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Je(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.receivers=[];class Ze{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=Je("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tt(){return void 0!==et().WorkerGlobalScope&&"function"==typeof et().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nt="firebaseLocalStorageDb",it="firebaseLocalStorage",rt="fbase_key";class st{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function ot(e,t){return e.transaction([it],t?"readwrite":"readonly").objectStore(it)}function at(){const e=indexedDB.open(nt,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(it,{keyPath:rt})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(it)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(nt);return new st(e).toPromise()}(),t(await at()))}))}))}async function lt(e,t,n){const i=ot(e,!0).put({[rt]:t,value:n});return new st(i).toPromise()}function ct(e,t){const n=ot(e,!0).delete(t);return new st(n).toPromise()}class ut{async _openDb(){return this.db||(this.db=await at()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ye._getInstance(tt()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Ze(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await at();return await lt(e,qe,"1"),await ct(e,qe),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>lt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ot(e,!1).get(t),i=await new st(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ct(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ot(e,!1).getAll();return new st(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}ut.type="LOCAL";const ht=ut;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function ft(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ft("rcb"),new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pt="recaptcha";async function mt(e,t,n){var i;const r=await n.verify();try{let s;if(w("string"==typeof r,e,"argument-error"),w(n.type===pt,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){w("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{w("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;w(n,e,"missing-multi-factor-info");const o=await function(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:start",O(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return R(e,"POST","/v1/accounts:sendVerificationCode",O(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{verifyPhoneNumber(e,t){return mt(this.auth,e,(0,i.getModularInstance)(t))}static credential(e,t){return Ee._fromVerification(e,t)}static credentialFromResult(e){const t=e;return gt.credentialFromTaggedObject(t)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ee._fromTokenResponse(t,n):null}constructor(e){this.providerId=gt.PROVIDER_ID,this.auth=de(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yt(e,t){return t?E(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gt.PROVIDER_ID="phone",gt.PHONE_SIGN_IN_METHOD="phone";class vt extends ye{_getIdTokenResponse(e){return be(e,this._buildIdpRequest())}_linkToIdToken(e,t){return be(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return be(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function wt(e){return Ue(e.auth,new vt(e),e.bypassAuthState)}function bt(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Fe(n,new vt(e),e.bypassAuthState)}async function xt(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Be(n,new vt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wt;case"linkViaPopup":case"linkViaRedirect":return xt;case"reauthViaPopup":case"reauthViaRedirect":return bt;default:p(this.auth,"internal-error")}}resolve(e){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new I(2e3,1e4);class Tt extends kt{async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){x(1===this.filter.length,"Popup operations only handle one event");const e=Je();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Et.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}}Tt.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const St=new Map;class Ct extends kt{async execute(){let e=St.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=At(t),i=_t(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}St.set(this.auth._key(),e)}return this.bypassAuthState||St.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function It(e,t){return _t(e)._set(At(t),"true")}function Nt(e,t){St.set(e._key(),t)}function _t(e){return E(e._redirectPersistence)}function At(e){return Y("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e,t,n){return async function(e,t,n){const i=de(e);y(e,t,Ce);const r=yt(i,n);return await It(r,i),r._openRedirect(i,t,"signInViaRedirect")}(e,t,n)}async function Ot(e,t){return await de(e)._initializationPromise,Rt(e,t,!1)}async function Rt(e,t,n=!1){const i=de(e),r=yt(i,t),s=new Ct(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Dt{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Pt(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mt(e))}saveEventToCache(e){this.cachedEventUids.add(Mt(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Mt(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Pt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ft=/^https?/;async function Ut(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return R(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(zt(e))return}catch(e){}p(e,"unauthorized-domain")}function zt(e){const t=T(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Ft.test(n))return!1;if(Bt.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new I(3e4,6e4);function Vt(){const e=et().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let $t=null;function Wt(e){return $t=$t||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){Vt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Vt(),n(m(e,"network-request-failed"))},timeout:jt.get()})}if(null===(r=null===(i=et().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=et().gapi)||void 0===s?void 0:s.load)){const t=ft("iframefcb");return et()[t]=()=>{gapi.load?o():n(m(e,"network-request-failed"))},dt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw $t=null,e}))}(e),$t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new I(5e3,15e3),Ht={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kt(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?N(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:r.SDK_VERSION},o=Gt.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.querystring)(s).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Qt{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Yt(e,t,n,r=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Xt),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.getUA)().toLowerCase();n&&(l=ne(u)?"_blank":n),ee(u)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,i.getUA)()){var t;return ae(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==l)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",l),new Qt(null);const d=window.open(t||"",l,h);w(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Qt(d)}const Jt="emulator/auth/handler";function Zt(e,t,n,s,o,a){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.SDK_VERSION,eventId:o};if(t instanceof Ce){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.isEmpty)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof Ie){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];return`${function({config:e}){return e.emulator?N(e,Jt):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${(0,i.querystring)(c).slice(1)}`}const en="webStorageSupport";const tn=class{async _openPopup(e,t,n,i){var r;x(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Yt(e,Zt(e,t,n,T(),i),Je())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Zt(e,t,n,T(),i),et().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(x(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Wt(e),n=et().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:Kt(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ht,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=m(e,"network-request-failed"),s=et().setTimeout((()=>{i(r)}),qt.get());function o(){et().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new Dt(e);return t.register("authEvent",(t=>{w(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(en,{type:en},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ut(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return le()||te()||ae()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qe,this._completeRedirectFn=Rt,this._overrideRedirectResult=Nt}};var nn="@firebase/auth",rn="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const on=(0,i.getExperimentalSetting)("authIdTokenMaxAge")||300;let an=null;function ln(e=(0,r.getApp)()){const t=(0,r._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,r._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.deepEqual)(r,null!=t?t:{}))return e;p(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:tn,persistence:[ht,Ke,Qe]}),s=(0,i.getExperimentalSetting)("authTokenSyncURL");if(s){const e=(o=s,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>on)return;const i=null==t?void 0:t.token;an!==i&&(an=i,await fetch(o,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){(0,i.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){(0,i.getModularInstance)(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var o;const a=(0,i.getDefaultEmulatorHost)("auth");return a&&pe(n,`http://${a}`),n}var cn;cn="Browser",(0,r._registerComponent)(new(0,l.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{w(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),w(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:cn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ce(cn)},o=new he(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(E);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,r._registerComponent)(new(0,l.Component)("auth-internal",(e=>{const t=de(e.getProvider("auth").getImmediate());return new sn(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.registerVersion)(nn,rn,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(cn)),(0,r.registerVersion)(nn,rn,"esm2017")})),s.register("l73V3",(function(e,n){t(e.exports,"__rest",(function(){return i}));function i(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create})),s.register("eWCmQ",(function(e,t){var i,r;i=void 0===n?"undefined"==typeof window?e.exports:window:n,r=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n,i,r,s,o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",w="Ask",b="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",E="Hourglass",T="Circle",S="Arrows",C="Dots",I="Pulse",N="Custom",_="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},L="Standard",O="Hourglass",R="Circle",D="Arrows",M="Dots",P="Pulse",B={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},F=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+o)},U=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+o)},z=function(t){return t||(t="head"),null!==e.document[t]||(F('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},j=function(t,n){if(!z("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}},V=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=t&&"[object Object]"===Object.prototype.toString.call(n[i])?V(e[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return e},$=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},W=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},q=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Q=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,J=function(n,i,r,s){if(!z("body"))return!1;t||le.Notify.init({});var o=V(!0,t,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var f={};"object"==typeof r?f=r:"object"==typeof s&&(f=s),t=V(!0,t,f)}var p=t[n.toLocaleLowerCase("en")];Y++,"string"!=typeof i&&(i="Notiflix "+n),t.plainText&&(i=$(i)),!t.plainText&&i.length>t.messageMaxLength&&(t=V(!0,t,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>t.messageMaxLength&&(i=i.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(d.wrapID)||e.document.createElement("div");if(m.id=d.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(d.overlayID)||e.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(d.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(d.wrapID)||e.document.body.appendChild(m);var y=e.document.createElement("div");y.id=t.ID+"-"+Y,y.className=t.className+" "+p.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=t.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=t.borderRadius,y.style.pointerEvents="all",t.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+t.fontFamily+'", '+a,t.cssAnimation&&(y.style.animationDuration=t.cssAnimationDuration+"ms");var v="";if(t.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?v:"");else{var w="";n===l?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=w+'<span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(t.closeButton?v:"");if("left-bottom"===t.position||"right-bottom"===t.position){var b=e.document.getElementById(d.wrapID);b.insertBefore(y,b.firstChild)}else e.document.getElementById(d.wrapID).appendChild(y);var x=e.document.getElementById(y.id);if(x){var k,E,T=function(){x.classList.add("nx-remove");var t=e.document.getElementById(d.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(k)},S=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(d.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(E)};if(t.closeButton&&"function"!=typeof r&&e.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){T();var e=setTimeout((function(){S(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof r||t.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),T();var e=setTimeout((function(){S(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof r){var C=function(){k=setTimeout((function(){T()}),t.timeout),E=setTimeout((function(){S()}),t.timeout+t.cssAnimationDuration)};C(),t.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(E)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),C()})))}}if(t.showOnlyTheLastOne&&0<Y)for(var I,N=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+Y+"])"),_=0;_<N.length;_++)null!==(I=N[_]).parentNode&&I.parentNode.removeChild(I);t=V(!0,t,o)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,i,r,s,o,l){if(!z("body"))return!1;n||le.Report.init({});var c={};if("object"==typeof o&&!Array.isArray(o)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof o?u=o:"object"==typeof l&&(u=l),c=V(!0,n,{}),n=V(!0,n,u)}var h=n[t.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+t),"string"!=typeof r&&(t===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof s&&(s="Okay"),n.plainText&&(i=$(i),r=$(r),s=$(s)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',s="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',s="Okay"),s.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',s="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),s.length>n.buttonMaxLength&&(s=s.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=e.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",w=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(w?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var b,x,k="";if(t===f?(b=n.svgSize,x=h.svgColor,b||(b="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+b+'" height="'+b+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===p?k=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===m?k=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===g&&(k=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+k+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+s+"</a></div>",!e.document.getElementById(d.id)){e.document.body.appendChild(d);var E=function(){var t=e.document.getElementById(d.id);t.classList.add("nx-remove");var i=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(i)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof o&&o(),E()})),v&&w&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){E()}))}n=V(!0,n,c)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,r,s,o,l,c,u,h){if(!z("body"))return!1;i||le.Confirm.init({});var d=V(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=V(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof o&&(o="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=$(n),r=$(r),o=$(o),l=$(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',o="Okay",l="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',o="Okay",l="..."),(o.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',o="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonsMaxLength&&(o=o.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=e.document.createElement("div");f.id=x.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var y="",v=null,k=void 0;if(t===w||t===b){v=s||"";var E=t===w||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(t===b?'value="'+v+'"':"")+' maxlength="'+E+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+o+"</a>"+g+"</div></div>",!e.document.getElementById(f.id)){e.document.body.appendChild(f);var T=e.document.getElementById(f.id),S=e.document.getElementById("NXConfirmButtonOk"),C=e.document.getElementById("NXConfirmValidationInput");C&&(C.focus(),C.setSelectionRange(0,(C.value||"").length),C.addEventListener("keyup",(function(e){var n=e.target.value;t===w&&n!==v?(e.preventDefault(),C.classList.add("nx-validation-failure"),C.classList.remove("nx-validation-success")):(t===w&&(C.classList.remove("nx-validation-failure"),C.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&S.dispatchEvent(new Event("click")))}))),S.addEventListener("click",(function(e){if(t===w&&v&&C){if((C.value||"").toString()!==v)return C.focus(),C.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;C.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===b&&C&&(k=C.value||""),c(k)),T.classList.add("nx-remove");var n=setTimeout((function(){null!==T.parentNode&&(T.parentNode.removeChild(T),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(t===b&&C&&(k=C.value||""),u(k)),T.classList.add("nx-remove");var e=setTimeout((function(){null!==T.parentNode&&(T.parentNode.removeChild(T),clearTimeout(e))}),i.cssAnimationDuration)}))}i=V(!0,i,d)},ie=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},re=function(t,n,i,s,o){if(!z("body"))return!1;r||le.Loading.init({});var l=V(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),r=V(!0,r,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),s){var h="";0<(u=u.length>r.messageMaxLength?$(u).toString().substring(0,r.messageMaxLength)+"...":$(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(t===k)d=W(r.svgSize,r.svgColor);else if(t===E)d=q(r.svgSize,r.svgColor);else if(t===T)d=H(r.svgSize,r.svgColor);else if(t===S)d=G(r.svgSize,r.svgColor);else if(t===C)d=K(r.svgSize,r.svgColor);else if(t===I)d=X(r.svgSize,r.svgColor);else if(t===N&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(t===N&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(t===N&&(null===r.customSvgUrl||null===r.customSvgCode))return F('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=e.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=e.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!e.document.getElementById(y.id)&&(e.document.body.appendChild(y),r.clickToClose)&&e.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),r.cssAnimationDuration)}))}else if(e.document.getElementById(A.ID))var v=e.document.getElementById(A.ID),w=setTimeout((function(){v.classList.add("nx-remove");var e=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(e))}),r.cssAnimationDuration);clearTimeout(w)}),o);r=V(!0,r,l)},se=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},oe=0,ae=function(t,n,i,r,o,l){var c;if(Array.isArray(i)){if(1>i.length)return F("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return F("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return F("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=e.document.querySelectorAll(i);if(1>u.length)return F('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}s||le.Block.init({});var h=V(!0,s,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var d={};"object"==typeof r?d=r:"object"==typeof o&&(d=o),s=V(!0,s,d)}var f="";"string"==typeof r&&0<r.length&&(f=r),s.cssAnimation||(s.cssAnimationDuration=0);var p=B.className;"string"==typeof s.className&&(p=s.className.trim());var m="number"==typeof s.querySelectorLimit?s.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(t){for(var v,w=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],b=0;b<g;b++)if(v=c[b]){if(-1<w.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+B.ID+"]");if(1>x.length){var k="";n&&(k=n===O?q(s.svgSize,s.svgColor):n===R?H(s.svgSize,s.svgColor):n===D?G(s.svgSize,s.svgColor):n===M?K(s.svgSize,s.svgColor):n===P?X(s.svgSize,s.svgColor):W(s.svgSize,s.svgColor));var E='<span class="'+p+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+k+"</span>",T="";0<f.length&&(f=f.length>s.messageMaxLength?$(f).substring(0,s.messageMaxLength)+"...":$(f),T='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+p+'-message">'+f+"</span>"),oe++;var S=e.document.createElement("div");S.id=B.ID+"-"+oe,S.className=p+(s.cssAnimation?" nx-with-animation":""),S.style.position=s.position,S.style.zIndex=s.zindex,S.style.background=s.backgroundColor,S.style.animationDuration=s.cssAnimationDuration+"ms",S.style.fontFamily='"'+s.fontFamily+'", '+a,S.style.display="flex",S.style.flexWrap="wrap",S.style.flexDirection="column",S.style.alignItems="center",S.style.justifyContent="center",s.rtl&&(S.setAttribute("dir","rtl"),S.classList.add("nx-rtl-on")),S.innerHTML=E+T;var C,I=e.getComputedStyle(v).getPropertyValue("position"),N="string"==typeof I?I.toLocaleLowerCase("en"):"relative",_=Math.round(1.25*parseInt(s.svgSize))+40,A="";_>(v.offsetHeight||0)&&(A="min-height:"+_+"px;"),C=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var L="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(N);if(j||0<A.length){if(!z("head"))return!1;j&&(L="position:relative!important;");var Q='<style id="Style-'+B.ID+"-"+oe+'">'+C+"."+y+"{"+L+A+"}</style>",Y=e.document.createRange();Y.selectNode(e.document.head);var J=Y.createContextualFragment(Q);e.document.head.appendChild(J),v.classList.add(y)}v.appendChild(S)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var i=t.getAttribute("id"),r=e.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),s.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else U("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(y),clearTimeout(t)}),s.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<g;t++)(e=c[t])&&(te(e),x=e.querySelectorAll("[id^="+B.ID+"]"),ee(x));clearTimeout(ne)}),l);s=V(!0,s,h)},le={Notify:{init:function(e){t=V(!0,d,e),j(Q,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=V(!0,t,e)):(F("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){J(l,e,t,n)},failure:function(e,t,n){J(c,e,t,n)},warning:function(e,t,n){J(u,e,t,n)},info:function(e,t,n){J(h,e,t,n)}},Report:{init:function(e){n=V(!0,y,e),j(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=V(!0,n,e)):(F("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,i,r){ee(f,e,t,n,i,r)},failure:function(e,t,n,i,r){ee(p,e,t,n,i,r)},warning:function(e,t,n,i,r){ee(m,e,t,n,i,r)},info:function(e,t,n,i,r){ee(g,e,t,n,i,r)}},Confirm:{init:function(e){i=V(!0,x,e),j(te,"NotiflixConfirmInternalCSS")},merge:function(e){return i?void(i=V(!0,i,e)):(F("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,i,r,s,o){ne(v,e,t,null,n,i,r,s,o)},ask:function(e,t,n,i,r,s,o,a){ne(w,e,t,n,i,r,s,o,a)},prompt:function(e,t,n,i,r,s,o,a){ne(b,e,t,n,i,r,s,o,a)}},Loading:{init:function(e){r=V(!0,A,e),j(ie,"NotiflixLoadingInternalCSS")},merge:function(e){return r?void(r=V(!0,r,e)):(F("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){re(k,e,t,!0,0)},hourglass:function(e,t){re(E,e,t,!0,0)},circle:function(e,t){re(T,e,t,!0,0)},arrows:function(e,t){re(S,e,t,!0,0)},dots:function(e,t){re(C,e,t,!0,0)},pulse:function(e,t){re(I,e,t,!0,0)},custom:function(e,t){re(N,e,t,!0,0)},notiflix:function(e,t){re(_,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),re(null,null,null,!1,e)},change:function(t){!function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(A.ID);if(n)if(0<t.length){t=t.length>r.messageMaxLength?$(t).substring(0,r.messageMaxLength)+"...":$(t);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=t;else{var s=e.document.createElement("p");s.id=r.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=r.messageColor,s.style.fontSize=r.messageFontSize,s.innerHTML=t,n.appendChild(s)}}else F("Where is the new message?")}(t)}},Block:{init:function(e){s=V(!0,B,e),j(se,"NotiflixBlockInternalCSS")},merge:function(e){return s?void(s=V(!0,s,e)):(F('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){ae(!0,L,e,t,n)},hourglass:function(e,t,n){ae(!0,O,e,t,n)},circle:function(e,t,n){ae(!0,R,e,t,n)},arrows:function(e,t,n){ae(!0,D,e,t,n)},dots:function(e,t,n){ae(!0,M,e,t,n)},pulse:function(e,t,n){ae(!0,P,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),ae(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?V(!0,e.Notiflix,{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}):{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}},"function"==typeof define&&define.amd?define([],(function(){return r(i)})):"object"==typeof e.exports?e.exports=r(i):i.Notiflix=r(i)})),s.register("k601f",(function(e,t){const n={home:{ua:"ДОДОМУ",en:"HOME"},library:{ua:"МОЯ БІБЛІОТЕКА",en:"MY LIBRARY"},logo:{ua:"Фільмотека",en:"Filmoteka"},login:{ua:"логін",en:"login"},input:{ua:"пошук фільму",en:"movie search"},footer:{ua:"Усі права захищено",en:"All Rights Reserved"},developer:{ua:"Розроблено спільно",en:"Developed with"},students:{ua:"GoIT Студенти",en:"GoIT Students"},genre:{ua:"ОБЕРІТЬ ЖАНР",en:" CHOOSE GENRE"},choose:{ua:"ВИБЕРІТЬ",en:"CHOOSE"},trailer:{ua:"Дивитися трейлер",en:"Watch the trailer"},about:{ua:"приблизно",en:"about"},watched:{ua:"додати в Переглянуті",en:"add to Watched"},queued:{ua:"додати в чергу",en:"add to queue"},sing:{ua:"вийти",en:"sign out"},watch:{ua:"ДИВИЛИСЯ",en:"WATCHED"},queue:{ua:"в черзі",en:"QUEUE"},account:{ua:"Немає облікового запису?",en:"Don't have an account?"},singup:{ua:"Реєстрація",en:"Signup"},google:{ua:"Увійдіть за допомогою Google",en:"Sign in with Google"},already:{ua:"Вже є аккаунт?",en:"Already have an account?"},popular:{ua:"Популярні",en:"Popular"},load:{ua:"Завантажити ще",en:"Load more"},new:{ua:"Новинки",en:"Novelty"},lo:{ua:"Вхід",en:"Login"},log:{ua:"Увійти",en:"Login"},si:{ua:"Реєстрація",en:"Signup"},sig:{ua:"Реєстрація",en:"Signup"},logi:{ua:"Увійти",en:"Login"}},i=document.querySelector("select"),r=["en","ua"];i.addEventListener("change",(function(){let e=i.value;localStorage.setItem("language",e),location.href=window.location.pathname+"#"+e,location.reload()})),function(){localStorage.getItem("language")||(window.location.hash="en");let e=window.location.hash;e=e.substr(1),r.includes(e)||(location.href=window.location.pathname+"#"+localStorage.getItem("language"),location.reload()),i.value=e;for(let t in n){let i=document.querySelector(".lng-"+t);i&&(i.innerHTML=n[t][e])}}(),function(){const e=document.querySelector(".search-form-input");e&&("#ua"===window.location.hash?e.placeholder="Пошук фільму":e.placeholder="Movie search")}(),document.querySelector(".login-title"),window.location.hash,function(){const e=document.querySelector(".gallery");"#ua"===window.location.hash?e.classList.remove("eng-gallery"):e.classList.add("eng-gallery")}(),function(){const e=document.querySelector(".input-form"),t=document.querySelector(".password"),n=document.querySelector(".input-form-singup"),i=document.querySelector(".input-email"),r=document.querySelector(".form-conf-pass");e&&("#ua"===window.location.hash?(e.placeholder="Електронна пошта",t.placeholder="Пароль",n.placeholder="Пароль",i.placeholder="Електронна пошта",r.placeholder="Підтвердьте пароль"):(e.placeholder="Email",t.placeholder="Password",n.placeholder="password",i.placeholder="Email",r.placeholder="Confirm password"))}()})),s.register("4iZdw",(function(e,n){function i({id:e,title:t,poster_path:n,release_date:i,genre_ids:r,vote_average:s,genres:o},a){const l=new Date(i).getFullYear();let c,u="";return r&&(c=function(e,t){if(e.length>2)return"#ua"===window.location.hash?e.slice(0,2).map((e=>t.getGenreById(e))).join(", ")+", Інші":e.slice(0,2).map((e=>t.getGenreById(e))).join(", ")+", Other";return e.map((e=>t.getGenreById(e))).join(", ")}(r,a)),o&&(c=o.map((e=>e.name)),c.length>2&&(c="#ua"===window.location.hash?c.slice(0,2).join(", ")+", Інші":c.slice(0,2).join(", ")+", Other")),u=n?`https://image.tmdb.org/t/p/w500${n}`:"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",`<div class="photo-card"\n  data-id=${e}\n  >\n  <a class="gallery__item">\n    <img\n      class="gallery__image"\n      loading="lazy"\n      src="${u}"\n      alt="${t}"\n    />\n  </a>\n  <button class="gallery-item-trailer" aria-label="trailer">\n  <svg class="gallery-item-trailer-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n  class="modal__icon-close"\n  viewBox="0 0 32 32">\n  <path d="M23.796 14.282l-9.309-6.761c-0.646-0.469-1.501-0.536-2.212-0.174s-1.159 1.094-1.159 1.892v13.523c0 0.799 0.448 1.529 1.159 1.892 0.304 0.155 0.635 0.232 0.964 0.232 0.44 0 0.878-0.137 1.248-0.405l9.309-6.761c0.55-0.399 0.875-1.038 0.875-1.718s-0.325-1.319-0.875-1.718z"></path>\n  <path d="M16 0c-8.823 0-16 7.178-16 16s7.177 16 16 16c8.822 0 16-7.178 16-16s-7.177-16-16-16zM16 28.068c-6.654 0-12.068-5.414-12.068-12.068s5.414-12.068 12.068-12.068 12.068 5.414 12.068 12.068c-0 6.654-5.414 12.068-12.068 12.068z"></path>\n </svg>\n</symbol>\n  </button>\n\n  <div class="info">\n    <p class="info-title">${t}</p>\n    <div class="info-other">\n      <span class="info-vote-average">${s.toFixed(1)}</span>\n      <p class="info-item">${c}</p>\n      <p class="info-item">${l}</p>\n    </div>\n  </div>\n</div>`}t(e.exports,"createMarkupElemetsGallery",(function(){return i}))})),s.register("krGWQ",(function(e,n){t(e.exports,"refs",(function(){return r}));var i=s("7rYDH");const r={searchForm:document.querySelector(".search-form-input"),galleryList:document.querySelector(".gallery"),searchResult:document.querySelector(".search-result"),fetchApi:new(0,i.FetchAPI),upcomingList:document.querySelector(".glide__slides"),siteNav:document.querySelector(".site-nav"),loadMoreTrend:document.querySelector(".loadMoreBtn"),loadMoreSearchBtn:document.querySelector(".loadMoreSearchBtn"),loadMoreGenreBtn:document.querySelector(".loadMoreGenreBtn")}})),s.register("7rYDH",(function(e,n){t(e.exports,"FetchAPI",(function(){return c})),s("2shzp");var i=s("bRlFp");s("k601f"),s("k601f");const r="https://api.themoviedb.org/3/trending/movie/week",o="https://api.themoviedb.org/3/search/movie",a="https://api.themoviedb.org/3/discover/movie?api_key=53f2c47317a563cd2628c68ceb6a6673",l="https://api.themoviedb.org/3/movie/";class c{async fetchTrendingFilms(e=1){return"#ua"===window.location.hash?await i.default.get(`${r}?api_key=53f2c47317a563cd2628c68ceb6a6673&page=${e}&language=uk-UA`):await i.default.get(`${r}?api_key=53f2c47317a563cd2628c68ceb6a6673&page=${e}&language=en-US`)}async fetchSearchFilms(e,t=1){return"#ua"===window.location.hash?await i.default.get(`${o}?api_key=53f2c47317a563cd2628c68ceb6a6673&query=${e}&page=${t}&language=uk-UA`):await i.default.get(`${o}?api_key=53f2c47317a563cd2628c68ceb6a6673&query=${e}&page=${t}&language=en-US`)}async fetchFilmsWithGenres(e,t=1){return"#ua"===window.location.hash?await i.default.get(`${a}&with_genres=${e}&page=${t}&language=uk-UA`):await i.default.get(`${a}&with_genres=${e}&page=${t}&language=en-US`)}async getFilmToId(e){return"#ua"===window.location.hash?await i.default.get(`${l}${e}?api_key=53f2c47317a563cd2628c68ceb6a6673&language=uk-UA`):await i.default.get(`${l}${e}?api_key=53f2c47317a563cd2628c68ceb6a6673&language=en-US`)}async getFilmToIdSecondLang(e){return"#ua"===window.location.hash?await i.default.get(`${l}${e}?api_key=53f2c47317a563cd2628c68ceb6a6673&language=en-US`):await i.default.get(`${l}${e}?api_key=53f2c47317a563cd2628c68ceb6a6673&language=uk-UA`)}async getTrailer(e){return"#ua"===window.location.hash?await i.default.get(`${l}/${e}/videos?api_key=53f2c47317a563cd2628c68ceb6a6673&language=uk-UA`):await i.default.get(`${l}/${e}/videos?api_key=53f2c47317a563cd2628c68ceb6a6673&language=en-US`)}async fetchUpcoming(){return await i.default.get(`${l}upcoming?api_key=53f2c47317a563cd2628c68ceb6a6673`)}async fillGenreList(){if("#ua"===window.location.hash){const e=await i.default.get("https://api.themoviedb.org/3/genre/movie/list?api_key=53f2c47317a563cd2628c68ceb6a6673&language=uk-UA");this.genreList=e.data.genres}else{const e=await i.default.get("https://api.themoviedb.org/3/genre/movie/list?api_key=53f2c47317a563cd2628c68ceb6a6673&language=en-US");this.genreList=e.data.genres}return this.genreList}getGenreById(e){return this.genreList.filter((({id:t})=>{if(t===e)return!0}))[0].name}numberOfPage(){return this.page+=1}curPage(){return this.page}updateCurPage(e){this.page=e}}})),s.register("2shzp",(function(e,n){t(e.exports,"default",(function(){return s("bRlFp").default}));var i=s("bRlFp");const{Axios:r,AxiosError:o,CanceledError:a,isCancel:l,CancelToken:c,VERSION:u,all:h,Cancel:d,isAxiosError:f,spread:p,toFormData:m,AxiosHeaders:g,formToJSON:y,mergeConfig:v}=i.default})),s.register("bRlFp",(function(e,n){t(e.exports,"default",(function(){return b}));var i=s("2bBga"),r=s("djt5d"),o=s("6zSb1"),a=s("d0EKm"),l=s("hqlPG"),c=s("4bmvb"),u=s("83xK9"),h=s("2sjhC"),d=s("ksuZT"),f=s("50GW0"),p=s("aewVa"),m=s("121rJ"),g=s("av9gA"),y=s("gNhGc"),v=s("gbTL1");const w=function e(t){const n=new(0,o.default)(t),s=(0,r.default)(o.default.prototype.request,n);return i.default.extend(s,o.default.prototype,n,{allOwnKeys:!0}),i.default.extend(s,n,null,{allOwnKeys:!0}),s.create=function(n){return e((0,a.default)(t,n))},s}(l.default);w.Axios=o.default,w.CanceledError=u.default,w.CancelToken=h.default,w.isCancel=d.default,w.VERSION=f.VERSION,w.toFormData=p.default,w.AxiosError=m.default,w.Cancel=w.CanceledError,w.all=function(e){return Promise.all(e)},w.spread=g.default,w.isAxiosError=y.default,w.mergeConfig=a.default,w.AxiosHeaders=v.default,w.formToJSON=e=>(0,c.default)(i.default.isHTMLForm(e)?new FormData(e):e),w.default=w;var b=w})),s.register("2bBga",(function(e,i){t(e.exports,"default",(function(){return M}),(function(e){return M=e}));var r=s("djt5d");const{toString:o}=Object.prototype,{getPrototypeOf:a}=Object,l=(c=Object.create(null),e=>{const t=o.call(e);return c[t]||(c[t]=t.slice(8,-1).toLowerCase())});var c;const u=e=>(e=e.toLowerCase(),t=>l(t)===e),h=e=>t=>typeof t===e,{isArray:d}=Array,f=h("undefined");const p=u("ArrayBuffer");const m=h("string"),g=h("function"),y=h("number"),v=e=>null!==e&&"object"==typeof e,w=e=>{if("object"!==l(e))return!1;const t=a(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=u("Date"),x=u("File"),k=u("Blob"),E=u("FileList"),T=u("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),d(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),s=r.length;let o;for(i=0;i<s;i++)o=r[i],t.call(null,e[o],o,e)}}function C(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const I="undefined"==typeof self?void 0===n?void 0:n:self,N=e=>!f(e)&&e!==I;const _=(A="undefined"!=typeof Uint8Array&&a(Uint8Array),e=>A&&e instanceof A);var A;const L=u("HTMLFormElement"),O=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),R=u("RegExp"),D=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};S(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)};var M={isArray:d,isArrayBuffer:p,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||o.call(e)===t||g(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t},isString:m,isNumber:y,isBoolean:e=>!0===e||!1===e,isObject:v,isPlainObject:w,isUndefined:f,isDate:b,isFile:x,isBlob:k,isRegExp:R,isFunction:g,isStream:e=>v(e)&&g(e.pipe),isURLSearchParams:T,isTypedArray:_,isFileList:E,forEach:S,merge:function e(){const{caseless:t}=N(this)&&this||{},n={},i=(i,r)=>{const s=t&&C(n,r)||r;w(n[s])&&w(i)?n[s]=e(n[s],i):w(i)?n[s]=e({},i):d(i)?n[s]=i.slice():n[s]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(S(t,((t,i)=>{n&&g(t)?e[i]=(0,r.default)(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,s,o;const l={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)o=r[s],i&&!i(o,e,t)||l[o]||(t[o]=e[o],l[o]=!0);e=!1!==n&&a(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:l,kindOfTest:u,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(d(e))return e;let t=e.length;if(!y(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:L,hasOwnProperty:O,hasOwnProp:O,reduceDescriptors:D,freezeMethods:e=>{D(e,((t,n)=>{if(g(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];g(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return d(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:C,global:I,isContextDefined:N,toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=d(e)?[]:{};return S(e,((e,t)=>{const s=n(e,i+1);!f(s)&&(r[t]=s)})),t[i]=void 0,r}}return e};return n(e,0)}}})),s.register("djt5d",(function(e,n){function i(e,t){return function(){return e.apply(t,arguments)}}t(e.exports,"default",(function(){return i}))})),s.register("6zSb1",(function(e,n){t(e.exports,"default",(function(){return p}));var i=s("2bBga"),r=s("2RNjJ"),o=s("5Dm7L"),a=s("eQ5d8"),l=s("d0EKm"),c=s("1ZTQa"),u=s("6zj0X"),h=s("gbTL1");const d=u.default.validators;class f{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=(0,l.default)(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:s}=t;let o;void 0!==n&&u.default.assertOptions(n,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1),void 0!==r&&u.default.assertOptions(r,{encode:d.function,serialize:d.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),o=s&&i.default.merge(s.common,s[t.method]),o&&i.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete s[e]})),t.headers=h.default.concat(o,s);const c=[];let f=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(f=f&&e.synchronous,c.unshift(e.fulfilled,e.rejected))}));const p=[];let m;this.interceptors.response.forEach((function(e){p.push(e.fulfilled,e.rejected)}));let g,y=0;if(!f){const e=[a.default.bind(this),void 0];for(e.unshift.apply(e,c),e.push.apply(e,p),g=e.length,m=Promise.resolve(t);y<g;)m=m.then(e[y++],e[y++]);return m}g=c.length;let v=t;for(y=0;y<g;){const e=c[y++],t=c[y++];try{v=e(v)}catch(e){t.call(this,e);break}}try{m=a.default.call(this,v)}catch(e){return Promise.reject(e)}for(y=0,g=p.length;y<g;)m=m.then(p[y++],p[y++]);return m}getUri(e){e=(0,l.default)(this.defaults,e);const t=(0,c.default)(e.baseURL,e.url);return(0,r.default)(t,e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new(0,o.default),response:new(0,o.default)}}}i.default.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request((0,l.default)(n||{},{method:e,url:t,data:(n||{}).data}))}})),i.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request((0,l.default)(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)}));var p=f})),s.register("2RNjJ",(function(e,n){t(e.exports,"default",(function(){return a}));var i=s("2bBga"),r=s("hz3Ym");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a(e,t,n){if(!t)return e;const s=n&&n.encode||o,a=n&&n.serialize;let l;if(l=a?a(t,n):i.default.isURLSearchParams(t)?t.toString():new(0,r.default)(t,n).toString(s),l){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+l}return e}})),s.register("hz3Ym",(function(e,n){t(e.exports,"default",(function(){return l}));var i=s("aewVa");function r(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function o(e,t){this._pairs=[],e&&(0,i.default)(e,this,t)}const a=o.prototype;a.append=function(e,t){this._pairs.push([e,t])},a.toString=function(e){const t=e?function(t){return e.call(this,t,r)}:r;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var l=o})),s.register("aewVa",(function(e,n){t(e.exports,"default",(function(){return d}));var i=s("2bBga"),r=s("121rJ"),o=s("cHBTa"),a=s("ihoyg").Buffer;function l(e){return i.default.isPlainObject(e)||i.default.isArray(e)}function c(e){return i.default.endsWith(e,"[]")?e.slice(0,-2):e}function u(e,t,n){return e?e.concat(t).map((function(e,t){return e=c(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const h=i.default.toFlatObject(i.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var d=function(e,t,n){if(!i.default.isObject(e))throw new TypeError("target must be an object");t=t||new(o.default||FormData);const s=(n=i.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!i.default.isUndefined(t[e])}))).metaTokens,d=n.visitor||v,f=n.dots,p=n.indexes,m=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((g=t)&&i.default.isFunction(g.append)&&"FormData"===g[Symbol.toStringTag]&&g[Symbol.iterator]);var g;if(!i.default.isFunction(d))throw new TypeError("visitor must be a function");function y(e){if(null===e)return"";if(i.default.isDate(e))return e.toISOString();if(!m&&i.default.isBlob(e))throw new(0,r.default)("Blob is not supported. Use a Buffer instead.");return i.default.isArrayBuffer(e)||i.default.isTypedArray(e)?m&&"function"==typeof Blob?new Blob([e]):a.from(e):e}function v(e,n,r){let o=e;if(e&&!r&&"object"==typeof e)if(i.default.endsWith(n,"{}"))n=s?n:n.slice(0,-2),e=JSON.stringify(e);else if(i.default.isArray(e)&&function(e){return i.default.isArray(e)&&!e.some(l)}(e)||i.default.isFileList(e)||i.default.endsWith(n,"[]")&&(o=i.default.toArray(e)))return n=c(n),o.forEach((function(e,r){!i.default.isUndefined(e)&&null!==e&&t.append(!0===p?u([n],r,f):null===p?n:n+"[]",y(e))})),!1;return!!l(e)||(t.append(u(r,n,f),y(e)),!1)}const w=[],b=Object.assign(h,{defaultVisitor:v,convertValue:y,isVisitable:l});if(!i.default.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!i.default.isUndefined(n)){if(-1!==w.indexOf(n))throw Error("Circular reference detected in "+r.join("."));w.push(n),i.default.forEach(n,(function(n,s){!0===(!(i.default.isUndefined(n)||null===n)&&d.call(t,n,i.default.isString(s)?s.trim():s,r,b))&&e(n,r?r.concat(s):[s])})),w.pop()}}(e),t}})),s.register("121rJ",(function(e,n){t(e.exports,"default",(function(){return l}));var i=s("2bBga");function r(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}i.default.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const o=r.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{a[e]={value:e}})),Object.defineProperties(r,a),Object.defineProperty(o,"isAxiosError",{value:!0}),r.from=(e,t,n,s,a,l)=>{const c=Object.create(o);return i.default.toFlatObject(e,c,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),r.call(c,e.message,t,n,s,a),c.cause=e,c.name=e.name,l&&Object.assign(c,l),c};var l=r})),s.register("cHBTa",(function(n,i){t(n.exports,"default",(function(){return r}));var r=e(s("FHeSn"))})),s.register("FHeSn",(function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData})),s.register("ihoyg",(function(e,n){var i,r;t(e.exports,"Buffer",(function(){return i}),(function(e){return i=e})),t(e.exports,"INSPECT_MAX_BYTES",(function(){return r}),(function(e){return r=e}));var o=s("hqZtu"),a=s("5WQj6");const l="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=h,r=50;const c=2147483647;function u(e){if(e>c)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,h.prototype),t}function h(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return d(e,t,n)}function d(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!h.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|v(e,t);let i=u(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(J(e,Uint8Array)){const t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return m(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(J(e,ArrayBuffer)||e&&J(e.buffer,ArrayBuffer))return g(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(J(e,SharedArrayBuffer)||e&&J(e.buffer,SharedArrayBuffer)))return g(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return h.from(i,t,n);const r=function(e){if(h.isBuffer(e)){const t=0|y(e.length),n=u(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?u(0):m(e);if("Buffer"===e.type&&Array.isArray(e.data))return m(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return h.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return f(e),u(e<0?0:0|y(e))}function m(e){const t=e.length<0?0:0|y(e.length),n=u(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function g(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,h.prototype),i}function y(e){if(e>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|e}function v(e,t){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||J(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return X(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Q(e).length;default:if(r)return i?-1:X(e).length;t=(""+t).toLowerCase(),r=!0}}function w(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return R(this,t,n);case"utf8":case"utf-8":return _(this,t,n);case"ascii":return L(this,t,n);case"latin1":case"binary":return O(this,t,n);case"base64":return N(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return D(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function b(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function x(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=h.from(t,i)),h.isBuffer(t))return 0===t.length?-1:k(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):k(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function k(e,t,n,i,r){let s,o=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(s=n;s<a;s++)if(c(e,s)===c(t,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===l)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let i=0;i<l;i++)if(c(e,s+i)!==c(t,i)){n=!1;break}if(n)return s}return-1}function E(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=t.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if(Z(i))return o;e[n+o]=i}return o}function T(e,t,n,i){return Y(X(t,e.length-n),e,n,i)}function S(e,t,n,i){return Y(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function C(e,t,n,i){return Y(Q(t),e,n,i)}function I(e,t,n,i){return Y(function(e,t){let n,i,r;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function N(e,t,n){return 0===t&&n===e.length?o.fromByteArray(e):o.fromByteArray(e.slice(t,n))}function _(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[r+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(s=l));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(l=(15&t)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(e){const t=e.length;if(t<=A)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=A));return n}(i)}h.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(e,t,n){return d(e,t,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(e,t,n){return function(e,t,n){return f(e),e<=0?u(e):void 0!==t?"string"==typeof n?u(e).fill(t,n):u(e).fill(t):u(e)}(e,t,n)},h.allocUnsafe=function(e){return p(e)},h.allocUnsafeSlow=function(e){return p(e)},h.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==h.prototype},h.compare=function(e,t){if(J(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),J(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return h.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=h.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(J(t,Uint8Array))r+t.length>i.length?(h.isBuffer(t)||(t=h.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!h.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},h.byteLength=v,h.prototype._isBuffer=!0,h.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},h.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},h.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},h.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?_(this,0,e):w.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===h.compare(this,e)},h.prototype.inspect=function(){let e="";const t=r;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},l&&(h.prototype[l]=h.prototype.inspect),h.prototype.compare=function(e,t,n,i,r){if(J(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),l=this.slice(i,r),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){s=l[e],o=c[e];break}return s<o?-1:o<s?1:0},h.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},h.prototype.indexOf=function(e,t,n){return x(this,e,t,n,!0)},h.prototype.lastIndexOf=function(e,t,n){return x(this,e,t,n,!1)},h.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return E(this,e,t,n);case"utf8":case"utf-8":return T(this,e,t,n);case"ascii":case"latin1":case"binary":return S(this,e,t,n);case"base64":return C(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const A=4096;function L(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function O(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function R(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=ee[e[i]];return r}function D(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function M(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function P(e,t,n,i,r,s){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function B(e,t,n,i,r){q(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function F(e,t,n,i,r){q(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function U(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function z(e,t,n,i,r){return t=+t,n>>>=0,r||U(e,0,n,4),a.write(e,t,n,i,23,4),n+4}function j(e,t,n,i,r){return t=+t,n>>>=0,r||U(e,0,n,8),a.write(e,t,n,i,52,8),n+8}h.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,h.prototype),i},h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i},h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e>>>=0,t||M(e,1,this.length),this[e]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e>>>=0,t||M(e,2,this.length),this[e]|this[e+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e>>>=0,t||M(e,2,this.length),this[e]<<8|this[e+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e>>>=0,t||M(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e>>>=0,t||M(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},h.prototype.readBigUInt64LE=te((function(e){H(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),h.prototype.readBigUInt64BE=te((function(e){H(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),h.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},h.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let i=t,r=1,s=this[e+--i];for(;i>0&&(r*=256);)s+=this[e+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*t)),s},h.prototype.readInt8=function(e,t){return e>>>=0,t||M(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},h.prototype.readInt16LE=function(e,t){e>>>=0,t||M(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(e,t){e>>>=0,t||M(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(e,t){return e>>>=0,t||M(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},h.prototype.readInt32BE=function(e,t){return e>>>=0,t||M(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},h.prototype.readBigInt64LE=te((function(e){H(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),h.prototype.readBigInt64BE=te((function(e){H(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),h.prototype.readFloatLE=function(e,t){return e>>>=0,t||M(e,4,this.length),a.read(this,e,!0,23,4)},h.prototype.readFloatBE=function(e,t){return e>>>=0,t||M(e,4,this.length),a.read(this,e,!1,23,4)},h.prototype.readDoubleLE=function(e,t){return e>>>=0,t||M(e,8,this.length),a.read(this,e,!0,52,8)},h.prototype.readDoubleBE=function(e,t){return e>>>=0,t||M(e,8,this.length),a.read(this,e,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){P(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){P(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,1,255,0),this[t]=255&e,t+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigUInt64LE=te((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeBigUInt64BE=te((function(e,t=0){return F(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);P(this,e,t,n,i-1,-i)}let r=0,s=1,o=0;for(this[t]=255&e;++r<n&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},h.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);P(this,e,t,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},h.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},h.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},h.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||P(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigInt64LE=te((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeBigInt64BE=te((function(e,t=0){return F(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeFloatLE=function(e,t,n){return z(this,e,t,!0,n)},h.prototype.writeFloatBE=function(e,t,n){return z(this,e,t,!1,n)},h.prototype.writeDoubleLE=function(e,t,n){return j(this,e,t,!0,n)},h.prototype.writeDoubleBE=function(e,t,n){return j(this,e,t,!1,n)},h.prototype.copy=function(e,t,n,i){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},h.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!h.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const s=h.isBuffer(e)?e:h.from(e,i),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=s[r%o]}return this};const V={};function $(e,t,n){V[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function W(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function q(e,t,n,i,r,s){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new V.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){H(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||G(t,e.length-(n+1))}(i,r,s)}function H(e,t){if("number"!=typeof e)throw new V.ERR_INVALID_ARG_TYPE(t,"number",e)}function G(e,t,n){if(Math.floor(e)!==e)throw H(e,n),new V.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new V.ERR_BUFFER_OUT_OF_BOUNDS;throw new V.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}$("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),$("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),$("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=W(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=W(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const K=/[^+/0-9A-Za-z-_]/g;function X(e,t){let n;t=t||1/0;const i=e.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Q(e){return o.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(K,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Y(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function J(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}})),s.register("hqZtu",(function(e,n){var i,r;t(e.exports,"toByteArray",(function(){return i}),(function(e){return i=e})),t(e.exports,"fromByteArray",(function(){return r}),(function(e){return r=e})),i=function(e){var t,n,i=h(e),r=i[0],s=i[1],l=new a(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),c=0,u=s>0?r-4:r;for(n=0;n<u;n+=4)t=o[e.charCodeAt(n)]<<18|o[e.charCodeAt(n+1)]<<12|o[e.charCodeAt(n+2)]<<6|o[e.charCodeAt(n+3)],l[c++]=t>>16&255,l[c++]=t>>8&255,l[c++]=255&t;2===s&&(t=o[e.charCodeAt(n)]<<2|o[e.charCodeAt(n+1)]>>4,l[c++]=255&t);1===s&&(t=o[e.charCodeAt(n)]<<10|o[e.charCodeAt(n+1)]<<4|o[e.charCodeAt(n+2)]>>2,l[c++]=t>>8&255,l[c++]=255&t);return l},r=function(e){for(var t,n=e.length,i=n%3,r=[],o=16383,a=0,l=n-i;a<l;a+=o)r.push(d(e,a,a+o>l?l:a+o));1===i?(t=e[n-1],r.push(s[t>>2]+s[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(s[t>>10]+s[t>>4&63]+s[t<<2&63]+"="));return r.join("")};for(var s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,u=l.length;c<u;++c)s[c]=l[c],o[l.charCodeAt(c)]=c;function h(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function d(e,t,n){for(var i,r,o=[],a=t;a<n;a+=3)i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),o.push(s[(r=i)>>18&63]+s[r>>12&63]+s[r>>6&63]+s[63&r]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),s.register("5WQj6",(function(e,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var i,r;t(e.exports,"read",(function(){return i}),(function(e){return i=e})),t(e.exports,"write",(function(){return r}),(function(e){return r=e})),i=function(e,t,n,i,r){var s,o,a=8*r-i-1,l=(1<<a)-1,c=l>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=i;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=c}return(f?-1:1)*o*Math.pow(2,s-i)},r=function(e,t,n,i,r,s){var o,a,l,c=8*s-r-1,u=(1<<c)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+h>=1?d/l:d*Math.pow(2,1-h))*l>=2&&(o++,l/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(t*l-1)*Math.pow(2,r),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,r),o=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;e[n+f]=255&o,f+=p,o/=256,c-=8);e[n+f-p]|=128*m}})),s.register("5Dm7L",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("2bBga");var r=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){i.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}}})),s.register("eQ5d8",(function(e,n){t(e.exports,"default",(function(){return h}));var i=s("bhEpd"),r=s("ksuZT"),o=s("hqlPG"),a=s("83xK9"),l=s("gbTL1"),c=s("enpjQ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new(0,a.default)(null,e)}function h(e){u(e),e.headers=l.default.from(e.headers),e.data=i.default.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return c.default.getAdapter(e.adapter||o.default.adapter)(e).then((function(t){return u(e),t.data=i.default.call(e,e.transformResponse,t),t.headers=l.default.from(t.headers),t}),(function(t){return(0,r.default)(t)||(u(e),t&&t.response&&(t.response.data=i.default.call(e,e.transformResponse,t.response),t.response.headers=l.default.from(t.response.headers))),Promise.reject(t)}))}})),s.register("bhEpd",(function(e,n){t(e.exports,"default",(function(){return a}));var i=s("2bBga"),r=s("hqlPG"),o=s("gbTL1");function a(e,t){const n=this||r.default,s=t||n,a=o.default.from(s.headers);let l=s.data;return i.default.forEach(e,(function(e){l=e.call(n,l,a.normalize(),t?t.status:void 0)})),a.normalize(),l}})),s.register("hqlPG",(function(e,n){t(e.exports,"default",(function(){return f}));var i=s("2bBga"),r=s("121rJ"),o=s("2wfLM"),a=s("aewVa"),l=s("5tcKT"),c=s("hdo0R"),u=s("4bmvb");const h={"Content-Type":void 0};const d={transitional:o.default,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,s=i.default.isObject(e);s&&i.default.isHTMLForm(e)&&(e=new FormData(e));if(i.default.isFormData(e))return r&&r?JSON.stringify((0,u.default)(e)):e;if(i.default.isArrayBuffer(e)||i.default.isBuffer(e)||i.default.isStream(e)||i.default.isFile(e)||i.default.isBlob(e))return e;if(i.default.isArrayBufferView(e))return e.buffer;if(i.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return(0,l.default)(e,this.formSerializer).toString();if((o=i.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return(0,a.default)(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),function(e,t,n){if(i.default.isString(e))try{return(t||JSON.parse)(e),i.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||d.transitional,n=t&&t.forcedJSONParsing,s="json"===this.responseType;if(e&&i.default.isString(e)&&(n&&!this.responseType||s)){const n=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw r.default.from(e,r.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c.default.classes.FormData,Blob:c.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.default.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),i.default.forEach(["post","put","patch"],(function(e){d.headers[e]=i.default.merge(h)}));var f=d})),s.register("2wfLM",(function(e,n){t(e.exports,"default",(function(){return i}));var i={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),s.register("5tcKT",(function(e,n){t(e.exports,"default",(function(){return a}));var i=s("2bBga"),r=s("aewVa"),o=s("hdo0R");function a(e,t){return(0,r.default)(e,new o.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return o.default.isNode&&i.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}})),s.register("hdo0R",(function(e,n){t(e.exports,"default",(function(){return l}));var i=s("9matH"),r=s("eN04z");const o=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),a="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var l={isBrowser:!0,classes:{URLSearchParams:i.default,FormData:r.default,Blob:Blob},isStandardBrowserEnv:o,isStandardBrowserWebWorkerEnv:a,protocols:["http","https","file","blob","url","data"]}})),s.register("9matH",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("hz3Ym"),r="undefined"!=typeof URLSearchParams?URLSearchParams:i.default})),s.register("eN04z",(function(e,n){t(e.exports,"default",(function(){return i}));var i=FormData})),s.register("4bmvb",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("2bBga");var r=function(e){function t(e,n,r,s){let o=e[s++];const a=Number.isFinite(+o),l=s>=e.length;if(o=!o&&i.default.isArray(r)?r.length:o,l)return i.default.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!a;r[o]&&i.default.isObject(r[o])||(r[o]=[]);return t(e,n,r[o],s)&&i.default.isArray(r[o])&&(r[o]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],t[s]=e[s];return t}(r[o])),!a}if(i.default.isFormData(e)&&i.default.isFunction(e.entries)){const n={};return i.default.forEachEntry(e,((e,r)=>{t(function(e){return i.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}})),s.register("gbTL1",(function(e,n){t(e.exports,"default",(function(){return f}));var i=s("2bBga"),r=s("9cPEm");const o=Symbol("internals");function a(e){return e&&String(e).trim().toLowerCase()}function l(e){return!1===e||null==e?e:i.default.isArray(e)?e.map(l):String(e)}function c(e,t,n,r){return i.default.isFunction(r)?r.call(this,t,n):i.default.isString(t)?i.default.isString(r)?-1!==t.indexOf(r):i.default.isRegExp(r)?r.test(t):void 0:void 0}let u=Symbol.iterator,h=Symbol.toStringTag;class d{set(e,t,n){const s=this;function o(e,t,n){const r=a(t);if(!r)throw new Error("header name must be a non-empty string");const o=i.default.findKey(s,r);(!o||void 0===s[o]||!0===n||void 0===n&&!1!==s[o])&&(s[o||t]=l(e))}const c=(e,t)=>i.default.forEach(e,((e,n)=>o(e,n,t)));return i.default.isPlainObject(e)||e instanceof this.constructor?c(e,t):i.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?c((0,r.default)(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=a(e)){const n=i.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(i.default.isFunction(t))return t.call(this,e,n);if(i.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=a(e)){const n=i.default.findKey(this,e);return!(!n||t&&!c(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function s(e){if(e=a(e)){const s=i.default.findKey(n,e);!s||t&&!c(0,n[s],s,t)||(delete n[s],r=!0)}}return i.default.isArray(e)?e.forEach(s):s(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return i.default.forEach(this,((r,s)=>{const o=i.default.findKey(n,s);if(o)return t[o]=l(r),void delete t[s];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(s):String(s).trim();a!==s&&delete t[s],t[a]=l(r),n[a]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return i.default.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&i.default.isArray(n)?n.join(", "):n)})),t}[u](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[h](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[o]=this[o]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=a(e);t[r]||(!function(e,t){const n=i.default.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[r]=!0)}return i.default.isArray(e)?e.forEach(r):r(e),this}constructor(e){e&&this.set(e)}}d.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),i.default.freezeMethods(d.prototype),i.default.freezeMethods(d);var f=d})),s.register("9cPEm",(function(e,n){t(e.exports,"default",(function(){return r}));const i=s("2bBga").default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var r=e=>{const t={};let n,r,s;return e&&e.split("\n").forEach((function(e){s=e.indexOf(":"),n=e.substring(0,s).trim().toLowerCase(),r=e.substring(s+1).trim(),!n||t[n]&&i[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t}})),s.register("ksuZT",(function(e,n){function i(e){return!(!e||!e.__CANCEL__)}t(e.exports,"default",(function(){return i}))})),s.register("83xK9",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("121rJ");function r(e,t,n){i.default.call(this,null==e?"canceled":e,i.default.ERR_CANCELED,t,n),this.name="CanceledError"}s("2bBga").default.inherits(r,i.default,{__CANCEL__:!0});var o=r})),s.register("enpjQ",(function(e,n){t(e.exports,"default",(function(){return c}));var i=s("2bBga"),r=s("1gvAv"),o=s("9VVcb"),a=s("121rJ");const l={http:r.default,xhr:o.default};i.default.forEach(l,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var c={getAdapter:e=>{e=i.default.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=i.default.isString(n)?l[n.toLowerCase()]:n));s++);if(!r){if(!1===r)throw new(0,a.default)(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(i.default.hasOwnProp(l,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!i.default.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:l}})),s.register("1gvAv",(function(e,n){t(e.exports,"default",(function(){return i}));var i=null})),s.register("9VVcb",(function(e,n){t(e.exports,"default",(function(){return v}));var i=s("2bBga"),r=s("1TQad"),o=s("kTwUV"),a=s("2RNjJ"),l=s("1ZTQa"),c=s("g3yOT"),u=s("2wfLM"),h=s("121rJ"),d=s("83xK9"),f=s("8wMQb"),p=s("hdo0R"),m=s("gbTL1"),g=s("5OiBb");function y(e,t){let n=0;const i=(0,g.default)(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:r};c[t?"download":"upload"]=!0,e(c)}}var v="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let s=e.data;const g=m.default.from(e.headers).normalize(),v=e.responseType;let w;function b(){e.cancelToken&&e.cancelToken.unsubscribe(w),e.signal&&e.signal.removeEventListener("abort",w)}i.default.isFormData(s)&&(p.default.isStandardBrowserEnv||p.default.isStandardBrowserWebWorkerEnv)&&g.setContentType(!1);let x=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.set("Authorization","Basic "+btoa(t+":"+n))}const k=(0,l.default)(e.baseURL,e.url);function E(){if(!x)return;const i=m.default.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),s={data:v&&"text"!==v&&"json"!==v?x.response:x.responseText,status:x.status,statusText:x.statusText,headers:i,config:e,request:x};(0,r.default)((function(e){t(e),b()}),(function(e){n(e),b()}),s),x=null}if(x.open(e.method.toUpperCase(),(0,a.default)(k,e.params,e.paramsSerializer),!0),x.timeout=e.timeout,"onloadend"in x?x.onloadend=E:x.onreadystatechange=function(){x&&4===x.readyState&&(0!==x.status||x.responseURL&&0===x.responseURL.indexOf("file:"))&&setTimeout(E)},x.onabort=function(){x&&(n(new(0,h.default)("Request aborted",h.default.ECONNABORTED,e,x)),x=null)},x.onerror=function(){n(new(0,h.default)("Network Error",h.default.ERR_NETWORK,e,x)),x=null},x.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||u.default;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new(0,h.default)(t,i.clarifyTimeoutError?h.default.ETIMEDOUT:h.default.ECONNABORTED,e,x)),x=null},p.default.isStandardBrowserEnv){const t=(e.withCredentials||(0,c.default)(k))&&e.xsrfCookieName&&o.default.read(e.xsrfCookieName);t&&g.set(e.xsrfHeaderName,t)}void 0===s&&g.setContentType(null),"setRequestHeader"in x&&i.default.forEach(g.toJSON(),(function(e,t){x.setRequestHeader(t,e)})),i.default.isUndefined(e.withCredentials)||(x.withCredentials=!!e.withCredentials),v&&"json"!==v&&(x.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&x.addEventListener("progress",y(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&x.upload&&x.upload.addEventListener("progress",y(e.onUploadProgress)),(e.cancelToken||e.signal)&&(w=t=>{x&&(n(!t||t.type?new(0,d.default)(null,e,x):t),x.abort(),x=null)},e.cancelToken&&e.cancelToken.subscribe(w),e.signal&&(e.signal.aborted?w():e.signal.addEventListener("abort",w)));const T=(0,f.default)(k);T&&-1===p.default.protocols.indexOf(T)?n(new(0,h.default)("Unsupported protocol "+T+":",h.default.ERR_BAD_REQUEST,e)):x.send(s||null)}))}})),s.register("1TQad",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("121rJ");function r(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new(0,i.default)("Request failed with status code "+n.status,[i.default.ERR_BAD_REQUEST,i.default.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}})),s.register("kTwUV",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("2bBga"),r=s("hdo0R").default.isStandardBrowserEnv?{write:function(e,t,n,r,s,o){const a=[];a.push(e+"="+encodeURIComponent(t)),i.default.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),i.default.isString(r)&&a.push("path="+r),i.default.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),s.register("1ZTQa",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("iUwU6"),r=s("91vFE");function o(e,t){return e&&!(0,i.default)(t)?(0,r.default)(e,t):t}})),s.register("iUwU6",(function(e,n){function i(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}t(e.exports,"default",(function(){return i}))})),s.register("91vFE",(function(e,n){function i(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}t(e.exports,"default",(function(){return i}))})),s.register("g3yOT",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("2bBga"),r=s("hdo0R").default.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=i.default.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}})),s.register("8wMQb",(function(e,n){function i(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}t(e.exports,"default",(function(){return i}))})),s.register("5OiBb",(function(e,n){t(e.exports,"default",(function(){return i}));var i=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=i[o];r||(r=l),n[s]=a,i[s]=l;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-r<t)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}}})),s.register("d0EKm",(function(e,n){t(e.exports,"default",(function(){return a}));var i=s("2bBga"),r=s("gbTL1");const o=e=>e instanceof r.default?e.toJSON():e;function a(e,t){t=t||{};const n={};function r(e,t,n){return i.default.isPlainObject(e)&&i.default.isPlainObject(t)?i.default.merge.call({caseless:n},e,t):i.default.isPlainObject(t)?i.default.merge({},t):i.default.isArray(t)?t.slice():t}function s(e,t,n){return i.default.isUndefined(t)?i.default.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function a(e,t){if(!i.default.isUndefined(t))return r(void 0,t)}function l(e,t){return i.default.isUndefined(t)?i.default.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function c(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const u={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:c,headers:(e,t)=>s(o(e),o(t),!0)};return i.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const o=u[r]||s,a=o(e[r],t[r],r);i.default.isUndefined(a)&&o!==c||(n[r]=a)})),n}})),s.register("6zj0X",(function(e,n){t(e.exports,"default",(function(){return l}));var i=s("50GW0"),r=s("121rJ");const o={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const a={};o.transitional=function(e,t,n){function s(e,t){return"[Axios v"+i.VERSION+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,o)=>{if(!1===e)throw new(0,r.default)(s(i," has been removed"+(t?" in "+t:"")),r.default.ERR_DEPRECATED);return t&&!a[i]&&(a[i]=!0,console.warn(s(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,o)}};var l={assertOptions:function(e,t,n){if("object"!=typeof e)throw new(0,r.default)("options must be an object",r.default.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let s=i.length;for(;s-- >0;){const o=i[s],a=t[o];if(a){const t=e[o],n=void 0===t||a(t,o,e);if(!0!==n)throw new(0,r.default)("option "+o+" must be "+n,r.default.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new(0,r.default)("Unknown option "+o,r.default.ERR_BAD_OPTION)}},validators:o}})),s.register("50GW0",(function(e,n){t(e.exports,"VERSION",(function(){return i}));const i="1.2.1"})),s.register("2sjhC",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("83xK9");class r{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new r((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,r,s){n.reason||(n.reason=new(0,i.default)(e,r,s),t(n.reason))}))}}var o=r})),s.register("av9gA",(function(e,n){function i(e){return function(t){return e.apply(null,t)}}t(e.exports,"default",(function(){return i}))})),s.register("gNhGc",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("2bBga");function r(e){return i.default.isObject(e)&&!0===e.isAxiosError}})),s.register("kZikY",(function(e,t){const n=document.querySelector(".fullscreen-btn"),i=()=>document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement||document.mozFullscreenElement;document.addEventListener("fullscreenchange",(()=>{n.classList.toggle("fullscreen-exit-btn")}));n.addEventListener("click",(()=>{i()||document.documentElement.requestFullscreen(),i()&&document.exitFullscreen()}))})),s.register("llO5F",(function(e,t){s("iB56l");var n=s("iaGrY"),i=s("iSRJB"),r=s("62uwT");const o=document.querySelector("body"),a=document.querySelector(".students-backdrop"),l=document.querySelector(".students-button"),c=document.querySelector(".close-button"),u=new(0,n.default)(".swiper",{modules:[i.default,r.default],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},speed:1e3,breakpoints:{767:{slidesPerView:1},1023:{slidesPerView:2},1300:{slidesPerView:3}},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,dynamicBullets:!0}});function h(){a.classList.toggle("is-hidden"),a.classList.contains("is-hidden")?o.classList.remove("scroll-ban"):(u.update(),o.classList.add("scroll-ban"))}l.addEventListener("click",h),c.addEventListener("click",h)})),s.register("iB56l",(function(e,n){t(e.exports,"default",(function(){return s("iaGrY").default})),t(e.exports,"Navigation",(function(){return s("iSRJB").default})),t(e.exports,"Pagination",(function(){return s("62uwT").default}));s("iaGrY"),s("790ii"),s("fajkZ"),s("1sSHk"),s("iSRJB"),s("62uwT"),s("hKwG4"),s("ePkwZ"),s("lrfdb"),s("hRfJF"),s("kjN5y"),s("eVziZ"),s("9azrO"),s("3oxNJ"),s("gs7Pm"),s("jBPWu"),s("ci9Ge"),s("eVDS1"),s("53omQ"),s("4LjcT"),s("zm2LU"),s("86nzb"),s("ajPpq"),s("5T183"),s("1w9pC")})),s.register("iaGrY",(function(e,n){t(e.exports,"default",(function(){return _}));var i=s("7xxPi"),r=s("3ORMQ"),o=s("dNWnP"),a=s("1gHsq"),l=s("agupX"),c=s("kMnIR"),u=s("kdpim"),h=s("c4Sz9"),d=s("mPJF1"),f=s("jEOyI"),p=s("4HaqR"),m=s("b4Co2"),g=s("jtnqo"),y=s("7Q6KL"),v=s("lt8Bz"),w=s("i1StC"),b=s("6Vw97"),x=s("5IPB6"),k=s("cbWiI"),E=s("5rbog"),T=s("1AMhv"),S=s("kmZuC");const C={eventsEmitter:d.default,update:f.default,translate:p.default,transition:m.default,slide:g.default,loop:y.default,grabCursor:v.default,events:w.default,breakpoints:b.default,checkOverflow:E.default,classes:x.default,images:k.default},I={};class N{enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),r=(n.maxTranslate()-i)*e+i;n.translateTo(r,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:n,slides:i,slidesGrid:r,slidesSizesGrid:s,size:o,activeIndex:a}=this;let l=1;if(n.centeredSlides){let e,t=i[a].swiperSlideSize;for(let n=a+1;n<i.length;n+=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0));for(let n=a-1;n>=0;n-=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let e=a+1;e<i.length;e+=1){(t?r[e]+s[e]-r[a]<o:r[e]-r[a]<o)&&(l+=1)}else for(let e=a-1;e>=0;e-=1){r[a]-r[e]<o&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function i(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let r;n.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(i(),e.params.autoHeight&&e.updateAutoHeight()):(r=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),r||i()),n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,i=n.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(n.$el.removeClass(`${n.params.containerModifierClass}${i}`).addClass(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.$el.addClass(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.$el.removeClass(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;const n=(0,r.default)(e||t.params.el);if(!(e=n[0]))return!1;e.swiper=t;const s=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=(0,r.default)(e.shadowRoot.querySelector(s()));return t.children=e=>n.children(e),t}return n.children?n.children(s()):(0,r.default)(n).children(s())})();if(0===o.length&&t.params.createElements){const e=(0,i.getDocument)().createElement("div");o=(0,r.default)(e),e.className=t.params.wrapperClass,n.append(e),n.children(`.${t.params.slideClass}`).each((e=>{o.append(e)}))}return Object.assign(t,{$el:n,el:e,$wrapperEl:o,wrapperEl:o[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===n.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===n.css("direction")),wrongRTL:"-webkit-box"===o.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:i,$el:r,$wrapperEl:s,slides:a}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),r.removeAttr("style"),s.removeAttr("style"),a&&a.length&&a.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.$el[0].swiper=null,(0,o.deleteProps)(n)),n.destroyed=!0),null}static extendDefaults(e){(0,o.extend)(I,e)}static get extendedDefaults(){return I}static get defaults(){return T.default}static installModule(e){N.prototype.__modules__||(N.prototype.__modules__=[]);const t=N.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>N.installModule(e))),N):(N.installModule(e),N)}constructor(...e){let t,n;if(1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?n=e[0]:[t,n]=e,n||(n={}),n=(0,o.extend)({},n),t&&!n.el&&(n.el=t),n.el&&(0,r.default)(n.el).length>1){const e=[];return(0,r.default)(n.el).each((t=>{const i=(0,o.extend)({},n,{el:t});e.push(new N(i))})),e}const i=this;i.__swiper__=!0,i.support=(0,a.getSupport)(),i.device=(0,l.getDevice)({userAgent:n.userAgent}),i.browser=(0,c.getBrowser)(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],n.modules&&Array.isArray(n.modules)&&i.modules.push(...n.modules);const s={};i.modules.forEach((e=>{e({swiper:i,extendParams:(0,S.default)(n,s),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})}));const u=(0,o.extend)({},T.default,s);return i.params=(0,o.extend)({},u,I,n),i.originalParams=(0,o.extend)({},i.params),i.passedParams=(0,o.extend)({},n),i.params&&i.params.on&&Object.keys(i.params.on).forEach((e=>{i.on(e,i.params.on[e])})),i.params&&i.params.onAny&&i.onAny(i.params.onAny),i.$=r.default,Object.assign(i,{enabled:i.params.enabled,el:t,classNames:[],slides:(0,r.default)(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===i.params.direction,isVertical:()=>"vertical"===i.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return i.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},i.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},i.support.touch||!i.params.simulateTouch?i.touchEventsTouch:i.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:(0,o.now)(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}}Object.keys(C).forEach((e=>{Object.keys(C[e]).forEach((t=>{N.prototype[t]=C[e][t]}))})),N.use([u.default,h.default]);var _=N})),s.register("7xxPi",(function(e,n){function i(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function r(e={},t={}){Object.keys(t).forEach((n=>{void 0===e[n]?e[n]=t[n]:i(t[n])&&i(e[n])&&Object.keys(t[n]).length>0&&r(e[n],t[n])}))}t(e.exports,"getDocument",(function(){return o})),t(e.exports,"getWindow",(function(){return l}));const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function o(){const e="undefined"!=typeof document?document:{};return r(e,s),e}const a={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function l(){const e="undefined"!=typeof window?window:{};return r(e,a),e}})),s.register("3ORMQ",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("47KZ9");const r={addClass:i.addClass,removeClass:i.removeClass,hasClass:i.hasClass,toggleClass:i.toggleClass,attr:i.attr,removeAttr:i.removeAttr,transform:i.transform,transition:i.transition,on:i.on,off:i.off,trigger:i.trigger,transitionEnd:i.transitionEnd,outerWidth:i.outerWidth,outerHeight:i.outerHeight,styles:i.styles,offset:i.offset,css:i.css,each:i.each,html:i.html,text:i.text,is:i.is,index:i.index,eq:i.eq,append:i.append,prepend:i.prepend,next:i.next,nextAll:i.nextAll,prev:i.prev,prevAll:i.prevAll,parent:i.parent,parents:i.parents,closest:i.closest,find:i.find,children:i.children,filter:i.filter,remove:i.remove};Object.keys(r).forEach((e=>{Object.defineProperty(i.$.fn,e,{value:r[e],writable:!0})}));var o=i.$})),s.register("47KZ9",(function(e,n){t(e.exports,"$",(function(){return l})),t(e.exports,"addClass",(function(){return c})),t(e.exports,"removeClass",(function(){return u})),t(e.exports,"toggleClass",(function(){return h})),t(e.exports,"hasClass",(function(){return d})),t(e.exports,"attr",(function(){return f})),t(e.exports,"removeAttr",(function(){return p})),t(e.exports,"transform",(function(){return m})),t(e.exports,"transition",(function(){return g})),t(e.exports,"on",(function(){return y})),t(e.exports,"off",(function(){return v})),t(e.exports,"trigger",(function(){return w})),t(e.exports,"transitionEnd",(function(){return b})),t(e.exports,"outerWidth",(function(){return x})),t(e.exports,"outerHeight",(function(){return k})),t(e.exports,"offset",(function(){return E})),t(e.exports,"styles",(function(){return T})),t(e.exports,"css",(function(){return S})),t(e.exports,"each",(function(){return C})),t(e.exports,"filter",(function(){return I})),t(e.exports,"html",(function(){return N})),t(e.exports,"text",(function(){return _})),t(e.exports,"is",(function(){return A})),t(e.exports,"index",(function(){return L})),t(e.exports,"eq",(function(){return O})),t(e.exports,"append",(function(){return R})),t(e.exports,"prepend",(function(){return D})),t(e.exports,"next",(function(){return M})),t(e.exports,"nextAll",(function(){return P})),t(e.exports,"prev",(function(){return B})),t(e.exports,"prevAll",(function(){return F})),t(e.exports,"parent",(function(){return U})),t(e.exports,"parents",(function(){return z})),t(e.exports,"closest",(function(){return j})),t(e.exports,"find",(function(){return V})),t(e.exports,"children",(function(){return $})),t(e.exports,"remove",(function(){return W}));var i=s("7xxPi");class r extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function o(e=[]){const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...o(e)):t.push(e)})),t}function a(e,t){return Array.prototype.filter.call(e,t)}function l(e,t){const n=(0,i.getWindow)(),s=(0,i.getDocument)();let o=[];if(!t&&e instanceof r)return e;if(!e)return new r(o);if("string"==typeof e){const n=e.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){let e="div";0===n.indexOf("<li")&&(e="ul"),0===n.indexOf("<tr")&&(e="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(e="tr"),0===n.indexOf("<tbody")&&(e="table"),0===n.indexOf("<option")&&(e="select");const t=s.createElement(e);t.innerHTML=n;for(let e=0;e<t.childNodes.length;e+=1)o.push(t.childNodes[e])}else o=function(e,t){if("string"!=typeof e)return[e];const n=[],i=t.querySelectorAll(e);for(let e=0;e<i.length;e+=1)n.push(i[e]);return n}(e.trim(),t||s)}else if(e.nodeType||e===n||e===s)o.push(e);else if(Array.isArray(e)){if(e instanceof r)return e;o=e}return new r(function(e){const t=[];for(let n=0;n<e.length;n+=1)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(o))}function c(...e){const t=o(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...t)})),this}function u(...e){const t=o(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...t)})),this}function h(...e){const t=o(e.map((e=>e.split(" "))));this.forEach((e=>{t.forEach((t=>{e.classList.toggle(t)}))}))}function d(...e){const t=o(e.map((e=>e.split(" "))));return a(this,(e=>t.filter((t=>e.classList.contains(t))).length>0)).length>0}function f(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let n=0;n<this.length;n+=1)if(2===arguments.length)this[n].setAttribute(e,t);else for(const t in e)this[n][t]=e[t],this[n].setAttribute(t,e[t]);return this}function p(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function m(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this}function g(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this}function y(...e){let[t,n,i,r]=e;function s(e){const t=e.target;if(!t)return;const r=e.target.dom7EventData||[];if(r.indexOf(e)<0&&r.unshift(e),l(t).is(n))i.apply(t,r);else{const e=l(t).parents();for(let t=0;t<e.length;t+=1)l(e[t]).is(n)&&i.apply(e[t],r)}}function o(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),i.apply(this,t)}"function"==typeof e[1]&&([t,i,r]=e,n=void 0),r||(r=!1);const a=t.split(" ");let c;for(let e=0;e<this.length;e+=1){const t=this[e];if(n)for(c=0;c<a.length;c+=1){const e=a[c];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:i,proxyListener:s}),t.addEventListener(e,s,r)}else for(c=0;c<a.length;c+=1){const e=a[c];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:i,proxyListener:o}),t.addEventListener(e,o,r)}}return this}function v(...e){let[t,n,i,r]=e;"function"==typeof e[1]&&([t,i,r]=e,n=void 0),r||(r=!1);const s=t.split(" ");for(let e=0;e<s.length;e+=1){const t=s[e];for(let e=0;e<this.length;e+=1){const s=this[e];let o;if(!n&&s.dom7Listeners?o=s.dom7Listeners[t]:n&&s.dom7LiveListeners&&(o=s.dom7LiveListeners[t]),o&&o.length)for(let e=o.length-1;e>=0;e-=1){const n=o[e];i&&n.listener===i||i&&n.listener&&n.listener.dom7proxy&&n.listener.dom7proxy===i?(s.removeEventListener(t,n.proxyListener,r),o.splice(e,1)):i||(s.removeEventListener(t,n.proxyListener,r),o.splice(e,1))}}}return this}function w(...e){const t=(0,i.getWindow)(),n=e[0].split(" "),r=e[1];for(let i=0;i<n.length;i+=1){const s=n[i];for(let n=0;n<this.length;n+=1){const i=this[n];if(t.CustomEvent){const n=new t.CustomEvent(s,{detail:r,bubbles:!0,cancelable:!0});i.dom7EventData=e.filter(((e,t)=>t>0)),i.dispatchEvent(n),i.dom7EventData=[],delete i.dom7EventData}}}return this}function b(e){const t=this;return e&&t.on("transitionend",(function n(i){i.target===this&&(e.call(this,i),t.off("transitionend",n))})),this}function x(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function k(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function E(){if(this.length>0){const e=(0,i.getWindow)(),t=(0,i.getDocument)(),n=this[0],r=n.getBoundingClientRect(),s=t.body,o=n.clientTop||s.clientTop||0,a=n.clientLeft||s.clientLeft||0,l=n===e?e.scrollY:n.scrollTop,c=n===e?e.scrollX:n.scrollLeft;return{top:r.top+l-o,left:r.left+c-a}}return null}function T(){const e=(0,i.getWindow)();return this[0]?e.getComputedStyle(this[0],null):{}}function S(e,t){const n=(0,i.getWindow)();let r;if(1===arguments.length){if("string"!=typeof e){for(r=0;r<this.length;r+=1)for(const t in e)this[r].style[t]=e[t];return this}if(this[0])return n.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(r=0;r<this.length;r+=1)this[r].style[e]=t;return this}return this}function C(e){return e?(this.forEach(((t,n)=>{e.apply(t,[t,n])})),this):this}function I(e){return l(a(this,e))}function N(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function _(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function A(e){const t=(0,i.getWindow)(),n=(0,i.getDocument)(),s=this[0];let o,a;if(!s||void 0===e)return!1;if("string"==typeof e){if(s.matches)return s.matches(e);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(e);if(s.msMatchesSelector)return s.msMatchesSelector(e);for(o=l(e),a=0;a<o.length;a+=1)if(o[a]===s)return!0;return!1}if(e===n)return s===n;if(e===t)return s===t;if(e.nodeType||e instanceof r){for(o=e.nodeType?[e]:e,a=0;a<o.length;a+=1)if(o[a]===s)return!0;return!1}return!1}function L(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}}function O(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return l([]);if(e<0){const n=t+e;return l(n<0?[]:[this[n]])}return l([this[e]])}function R(...e){let t;const n=(0,i.getDocument)();for(let i=0;i<e.length;i+=1){t=e[i];for(let e=0;e<this.length;e+=1)if("string"==typeof t){const i=n.createElement("div");for(i.innerHTML=t;i.firstChild;)this[e].appendChild(i.firstChild)}else if(t instanceof r)for(let n=0;n<t.length;n+=1)this[e].appendChild(t[n]);else this[e].appendChild(t)}return this}function D(e){const t=(0,i.getDocument)();let n,s;for(n=0;n<this.length;n+=1)if("string"==typeof e){const i=t.createElement("div");for(i.innerHTML=e,s=i.childNodes.length-1;s>=0;s-=1)this[n].insertBefore(i.childNodes[s],this[n].childNodes[0])}else if(e instanceof r)for(s=0;s<e.length;s+=1)this[n].insertBefore(e[s],this[n].childNodes[0]);else this[n].insertBefore(e,this[n].childNodes[0]);return this}function M(e){return this.length>0?e?this[0].nextElementSibling&&l(this[0].nextElementSibling).is(e)?l([this[0].nextElementSibling]):l([]):this[0].nextElementSibling?l([this[0].nextElementSibling]):l([]):l([])}function P(e){const t=[];let n=this[0];if(!n)return l([]);for(;n.nextElementSibling;){const i=n.nextElementSibling;e?l(i).is(e)&&t.push(i):t.push(i),n=i}return l(t)}function B(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&l(t.previousElementSibling).is(e)?l([t.previousElementSibling]):l([]):t.previousElementSibling?l([t.previousElementSibling]):l([])}return l([])}function F(e){const t=[];let n=this[0];if(!n)return l([]);for(;n.previousElementSibling;){const i=n.previousElementSibling;e?l(i).is(e)&&t.push(i):t.push(i),n=i}return l(t)}function U(e){const t=[];for(let n=0;n<this.length;n+=1)null!==this[n].parentNode&&(e?l(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return l(t)}function z(e){const t=[];for(let n=0;n<this.length;n+=1){let i=this[n].parentNode;for(;i;)e?l(i).is(e)&&t.push(i):t.push(i),i=i.parentNode}return l(t)}function j(e){let t=this;return void 0===e?l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function V(e){const t=[];for(let n=0;n<this.length;n+=1){const i=this[n].querySelectorAll(e);for(let e=0;e<i.length;e+=1)t.push(i[e])}return l(t)}function $(e){const t=[];for(let n=0;n<this.length;n+=1){const i=this[n].children;for(let n=0;n<i.length;n+=1)e&&!l(i[n]).is(e)||t.push(i[n])}return l(t)}function W(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}l.fn=r.prototype;const q="resize scroll".split(" ");function H(e){return function(...t){if(void 0===t[0]){for(let t=0;t<this.length;t+=1)q.indexOf(e)<0&&(e in this[t]?this[t][e]():l(this[t]).trigger(e));return this}return this.on(e,...t)}}H("click"),H("blur"),H("focus"),H("focusin"),H("focusout"),H("keyup"),H("keydown"),H("keypress"),H("submit"),H("change"),H("mousedown"),H("mousemove"),H("mouseup"),H("mouseenter"),H("mouseleave"),H("mouseout"),H("mouseover"),H("touchstart"),H("touchend"),H("touchmove"),H("resize"),H("scroll")})),s.register("dNWnP",(function(e,n){t(e.exports,"deleteProps",(function(){return r})),t(e.exports,"nextTick",(function(){return o})),t(e.exports,"now",(function(){return a})),t(e.exports,"getTranslate",(function(){return l})),t(e.exports,"isObject",(function(){return c})),t(e.exports,"extend",(function(){return u})),t(e.exports,"setCSSProperty",(function(){return h})),t(e.exports,"animateCSSModeScroll",(function(){return d}));var i=s("7xxPi");function r(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function o(e,t=0){return setTimeout(e,t)}function a(){return Date.now()}function l(e,t="x"){const n=(0,i.getWindow)();let r,s,o;const a=function(e){const t=(0,i.getWindow)();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(s=a.transform||a.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map((e=>e.replace(",","."))).join(", ")),o=new n.WebKitCSSMatrix("none"===s?"":s)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),"x"===t&&(s=n.WebKitCSSMatrix?o.m41:16===r.length?parseFloat(r[12]):parseFloat(r[4])),"y"===t&&(s=n.WebKitCSSMatrix?o.m42:16===r.length?parseFloat(r[13]):parseFloat(r[5])),s||0}function c(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function u(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<e.length;r+=1){const s=e[r];if(null!=s&&(i=s,!("undefined"!=typeof window&&void 0!==window.HTMLElement?i instanceof HTMLElement:i&&(1===i.nodeType||11===i.nodeType)))){const e=Object.keys(Object(s)).filter((e=>n.indexOf(e)<0));for(let n=0,i=e.length;n<i;n+=1){const i=e[n],r=Object.getOwnPropertyDescriptor(s,i);void 0!==r&&r.enumerable&&(c(t[i])&&c(s[i])?s[i].__swiper__?t[i]=s[i]:u(t[i],s[i]):!c(t[i])&&c(s[i])?(t[i]={},s[i].__swiper__?t[i]=s[i]:u(t[i],s[i])):t[i]=s[i])}}}var i;return t}function h(e,t,n){e.style.setProperty(t,n)}function d({swiper:e,targetPosition:t,side:n}){const r=(0,i.getWindow)(),s=-e.translate;let o,a=null;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const c=t>s?"next":"prev",u=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,h=()=>{o=(new Date).getTime(),null===a&&(a=o);const i=Math.max(Math.min((o-a)/l,1),0),c=.5-Math.cos(i*Math.PI)/2;let d=s+c*(t-s);if(u(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),u(d,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:d})})),void r.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=r.requestAnimationFrame(h)};h()}})),s.register("1gHsq",(function(e,n){t(e.exports,"getSupport",(function(){return o}));var i=s("7xxPi");let r;function o(){return r||(r=function(){const e=(0,i.getWindow)(),t=(0,i.getDocument)();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const n=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,n)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),r}})),s.register("agupX",(function(e,n){t(e.exports,"getDevice",(function(){return a}));var i=s("7xxPi"),r=s("1gHsq");let o;function a(e={}){return o||(o=function({userAgent:e}={}){const t=(0,r.getSupport)(),n=(0,i.getWindow)(),s=n.navigator.platform,o=e||n.navigator.userAgent,a={ios:!1,android:!1},l=n.screen.width,c=n.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let h=o.match(/(iPad).*OS\s([\d_]+)/);const d=o.match(/(iPod)(.*OS\s([\d_]+))?/),f=!h&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p="Win32"===s;let m="MacIntel"===s;return!h&&m&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${l}x${c}`)>=0&&(h=o.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),m=!1),u&&!p&&(a.os="android",a.android=!0),(h||f||d)&&(a.os="ios",a.ios=!0),a}(e)),o}})),s.register("kMnIR",(function(e,n){t(e.exports,"getBrowser",(function(){return o}));var i=s("7xxPi");let r;function o(){return r||(r=function(){const e=(0,i.getWindow)();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),r}})),s.register("kdpim",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("7xxPi");function r({swiper:e,on:t,emit:n}){const r=(0,i.getWindow)();let s=null,o=null;const a=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},l=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==r.ResizeObserver?e&&!e.destroyed&&e.initialized&&(s=new ResizeObserver((t=>{o=r.requestAnimationFrame((()=>{const{width:n,height:i}=e;let r=n,s=i;t.forEach((({contentBoxSize:t,contentRect:n,target:i})=>{i&&i!==e.el||(r=n?n.width:(t[0]||t).inlineSize,s=n?n.height:(t[0]||t).blockSize)})),r===n&&s===i||a()}))})),s.observe(e.el)):(r.addEventListener("resize",a),r.addEventListener("orientationchange",l))})),t("destroy",(()=>{o&&r.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",l)}))}})),s.register("c4Sz9",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("7xxPi");function r({swiper:e,extendParams:t,on:n,emit:r}){const s=[],o=(0,i.getWindow)(),a=(e,t={})=>{const n=new(o.MutationObserver||o.WebkitMutationObserver)((e=>{if(1===e.length)return void r("observerUpdate",e[0]);const t=function(){r("observerUpdate",e[0])};o.requestAnimationFrame?o.requestAnimationFrame(t):o.setTimeout(t,0)}));n.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),s.push(n)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=e.$el.parents();for(let e=0;e<t.length;e+=1)a(t[e])}a(e.$el[0],{childList:e.params.observeSlideChildren}),a(e.$wrapperEl[0],{attributes:!1})}})),n("destroy",(()=>{s.forEach((e=>{e.disconnect()})),s.splice(0,s.length)}))}})),s.register("mPJF1",(function(e,n){t(e.exports,"default",(function(){return i}));var i={on(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;const r=n?"unshift":"push";return e.split(" ").forEach((e=>{i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][r](t)})),i},once(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;function r(...n){i.off(e,r),r.__emitterProxy&&delete r.__emitterProxy,t.apply(i,n)}return r.__emitterProxy=t,i.on(e,r,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const i=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[i](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((i,r)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[e].splice(r,1)}))})),n):n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let n,i,r;"string"==typeof e[0]||Array.isArray(e[0])?(n=e[0],i=e.slice(1,e.length),r=t):(n=e[0].events,i=e[0].data,r=e[0].context||t),i.unshift(r);return(Array.isArray(n)?n:n.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(r,[e,...i])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(r,i)}))})),t}}})),s.register("jEOyI",(function(e,n){t(e.exports,"default",(function(){return f}));var i=s("2nlfG"),r=s("aafDk"),o=s("jMtU7"),a=s("kPOBn"),l=s("8OSjY"),c=s("hBtS3"),u=s("29hok"),h=s("lCVGa"),d=s("3EEt9"),f={updateSize:i.default,updateSlides:r.default,updateAutoHeight:o.default,updateSlidesOffset:a.default,updateSlidesProgress:l.default,updateProgress:c.default,updateSlidesClasses:u.default,updateActiveIndex:h.default,updateClickedSlide:d.default}})),s.register("2nlfG",(function(e,n){function i(){const e=this;let t,n;const i=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:i[0].clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:i[0].clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),n=n-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}t(e.exports,"default",(function(){return i}))})),s.register("aafDk",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const r=e.params,{$wrapperEl:s,size:o,rtlTranslate:a,wrongRTL:l}=e,c=e.virtual&&r.virtual.enabled,u=c?e.virtual.slides.length:e.slides.length,h=s.children(`.${e.params.slideClass}`),d=c?e.virtual.slides.length:h.length;let f=[];const p=[],m=[];let g=r.slidesOffsetBefore;"function"==typeof g&&(g=r.slidesOffsetBefore.call(e));let y=r.slidesOffsetAfter;"function"==typeof y&&(y=r.slidesOffsetAfter.call(e));const v=e.snapGrid.length,w=e.slidesGrid.length;let b=r.spaceBetween,x=-g,k=0,E=0;if(void 0===o)return;"string"==typeof b&&b.indexOf("%")>=0&&(b=parseFloat(b.replace("%",""))/100*o),e.virtualSize=-b,a?h.css({marginLeft:"",marginBottom:"",marginTop:""}):h.css({marginRight:"",marginBottom:"",marginTop:""}),r.centeredSlides&&r.cssMode&&((0,i.setCSSProperty)(e.wrapperEl,"--swiper-centered-offset-before",""),(0,i.setCSSProperty)(e.wrapperEl,"--swiper-centered-offset-after",""));const T=r.grid&&r.grid.rows>1&&e.grid;let S;T&&e.grid.initSlides(d);const C="auto"===r.slidesPerView&&r.breakpoints&&Object.keys(r.breakpoints).filter((e=>void 0!==r.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<d;i+=1){S=0;const s=h.eq(i);if(T&&e.grid.updateSlide(i,s,d,t),"none"!==s.css("display")){if("auto"===r.slidesPerView){C&&(h[i].style[t("width")]="");const o=getComputedStyle(s[0]),a=s[0].style.transform,l=s[0].style.webkitTransform;if(a&&(s[0].style.transform="none"),l&&(s[0].style.webkitTransform="none"),r.roundLengths)S=e.isHorizontal()?s.outerWidth(!0):s.outerHeight(!0);else{const e=n(o,"width"),t=n(o,"padding-left"),i=n(o,"padding-right"),r=n(o,"margin-left"),a=n(o,"margin-right"),l=o.getPropertyValue("box-sizing");if(l&&"border-box"===l)S=e+r+a;else{const{clientWidth:n,offsetWidth:o}=s[0];S=e+t+i+r+a+(o-n)}}a&&(s[0].style.transform=a),l&&(s[0].style.webkitTransform=l),r.roundLengths&&(S=Math.floor(S))}else S=(o-(r.slidesPerView-1)*b)/r.slidesPerView,r.roundLengths&&(S=Math.floor(S)),h[i]&&(h[i].style[t("width")]=`${S}px`);h[i]&&(h[i].swiperSlideSize=S),m.push(S),r.centeredSlides?(x=x+S/2+k/2+b,0===k&&0!==i&&(x=x-o/2-b),0===i&&(x=x-o/2-b),Math.abs(x)<.001&&(x=0),r.roundLengths&&(x=Math.floor(x)),E%r.slidesPerGroup==0&&f.push(x),p.push(x)):(r.roundLengths&&(x=Math.floor(x)),(E-Math.min(e.params.slidesPerGroupSkip,E))%e.params.slidesPerGroup==0&&f.push(x),p.push(x),x=x+S+b),e.virtualSize+=S+b,k=S,E+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+y,a&&l&&("slide"===r.effect||"coverflow"===r.effect)&&s.css({width:`${e.virtualSize+r.spaceBetween}px`}),r.setWrapperSize&&s.css({[t("width")]:`${e.virtualSize+r.spaceBetween}px`}),T&&e.grid.updateWrapperSize(S,f,t),!r.centeredSlides){const t=[];for(let n=0;n<f.length;n+=1){let i=f[n];r.roundLengths&&(i=Math.floor(i)),f[n]<=e.virtualSize-o&&t.push(i)}f=t,Math.floor(e.virtualSize-o)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-o)}if(0===f.length&&(f=[0]),0!==r.spaceBetween){const n=e.isHorizontal()&&a?"marginLeft":t("marginRight");h.filter(((e,t)=>!r.cssMode||t!==h.length-1)).css({[n]:`${b}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(r.spaceBetween?r.spaceBetween:0)})),e-=r.spaceBetween;const t=e-o;f=f.map((e=>e<0?-g:e>t?t+y:e))}if(r.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(r.spaceBetween?r.spaceBetween:0)})),e-=r.spaceBetween,e<o){const t=(o-e)/2;f.forEach(((e,n)=>{f[n]=e-t})),p.forEach(((e,n)=>{p[n]=e+t}))}}if(Object.assign(e,{slides:h,snapGrid:f,slidesGrid:p,slidesSizesGrid:m}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){(0,i.setCSSProperty)(e.wrapperEl,"--swiper-centered-offset-before",-f[0]+"px"),(0,i.setCSSProperty)(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(d!==u&&e.emit("slidesLengthChange"),f.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==w&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!(c||r.cssMode||"slide"!==r.effect&&"fade"!==r.effect)){const t=`${r.containerModifierClass}backface-hidden`,n=e.$el.hasClass(t);d<=r.maxBackfaceHiddenSlides?n||e.$el.addClass(t):n&&e.$el.removeClass(t)}}})),s.register("jMtU7",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("3ORMQ");function r(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let s,o=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const a=e=>r?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||(0,i.default)([])).each((e=>{n.push(e)}));else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const e=t.activeIndex+s;if(e>t.slides.length&&!r)break;n.push(a(e))}else n.push(a(t.activeIndex));for(s=0;s<n.length;s+=1)if(void 0!==n[s]){const e=n[s].offsetHeight;o=e>o?e:o}(o||0===o)&&t.$wrapperEl.css("height",`${o}px`)}})),s.register("kPOBn",(function(e,n){function i(){const e=this,t=e.slides;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop}t(e.exports,"default",(function(){return i}))})),s.register("8OSjY",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("3ORMQ");function r(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:s,snapGrid:o}=t;if(0===r.length)return;void 0===r[0].swiperSlideOffset&&t.updateSlidesOffset();let a=-e;s&&(a=e),r.removeClass(n.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<r.length;e+=1){const i=r[e];let l=i.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(l-=r[0].swiperSlideOffset);const c=(a+(n.centeredSlides?t.minTranslate():0)-l)/(i.swiperSlideSize+n.spaceBetween),u=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-l)/(i.swiperSlideSize+n.spaceBetween),h=-(a-l),d=h+t.slidesSizesGrid[e];(h>=0&&h<t.size-1||d>1&&d<=t.size||h<=0&&d>=t.size)&&(t.visibleSlides.push(i),t.visibleSlidesIndexes.push(e),r.eq(e).addClass(n.slideVisibleClass)),i.progress=s?-c:c,i.originalProgress=s?-u:u}t.visibleSlides=(0,i.default)(t.visibleSlides)}})),s.register("hBtS3",(function(e,n){function i(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:r,isBeginning:s,isEnd:o}=t;const a=s,l=o;0===i?(r=0,s=!0,o=!0):(r=(e-t.minTranslate())/i,s=r<=0,o=r>=1),Object.assign(t,{progress:r,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!a&&t.emit("reachBeginning toEdge"),o&&!l&&t.emit("reachEnd toEdge"),(a&&!s||l&&!o)&&t.emit("fromEdge"),t.emit("progress",r)}t(e.exports,"default",(function(){return i}))})),s.register("29hok",(function(e,n){function i(){const e=this,{slides:t,params:n,$wrapperEl:i,activeIndex:r,realIndex:s}=e,o=e.virtual&&n.virtual.enabled;let a;t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`),a=o?e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${r}"]`):t.eq(r),a.addClass(n.slideActiveClass),n.loop&&(a.hasClass(n.slideDuplicateClass)?i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass):i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass));let l=a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);n.loop&&0===l.length&&(l=t.eq(0),l.addClass(n.slideNextClass));let c=a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);n.loop&&0===c.length&&(c=t.eq(-1),c.addClass(n.slidePrevClass)),n.loop&&(l.hasClass(n.slideDuplicateClass)?i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass):i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),c.hasClass(n.slideDuplicateClass)?i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass):i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),e.emitSlidesClasses()}t(e.exports,"default",(function(){return i}))})),s.register("lCVGa",(function(e,n){function i(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:i,snapGrid:r,params:s,activeIndex:o,realIndex:a,snapIndex:l}=t;let c,u=e;if(void 0===u){for(let e=0;e<i.length;e+=1)void 0!==i[e+1]?n>=i[e]&&n<i[e+1]-(i[e+1]-i[e])/2?u=e:n>=i[e]&&n<i[e+1]&&(u=e+1):n>=i[e]&&(u=e);s.normalizeSlideIndex&&(u<0||void 0===u)&&(u=0)}if(r.indexOf(n)>=0)c=r.indexOf(n);else{const e=Math.min(s.slidesPerGroupSkip,u);c=e+Math.floor((u-e)/s.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),u===o)return void(c!==l&&(t.snapIndex=c,t.emit("snapIndexChange")));const h=parseInt(t.slides.eq(u).attr("data-swiper-slide-index")||u,10);Object.assign(t,{snapIndex:c,realIndex:h,previousIndex:o,activeIndex:u}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),a!==h&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}t(e.exports,"default",(function(){return i}))})),s.register("3EEt9",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("3ORMQ");function r(e){const t=this,n=t.params,r=(0,i.default)(e).closest(`.${n.slideClass}`)[0];let s,o=!1;if(r)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===r){o=!0,s=e;break}if(!r||!o)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt((0,i.default)(r).attr("data-swiper-slide-index"),10):t.clickedIndex=s,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}})),s.register("4HaqR",(function(e,n){t(e.exports,"default",(function(){return c}));var i=s("1umi3"),r=s("1vvVW"),o=s("jVKXc"),a=s("a9I2T"),l=s("fzQVA"),c={getTranslate:i.default,setTranslate:r.default,minTranslate:o.default,maxTranslate:a.default,translateTo:l.default}})),s.register("1umi3",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:n,translate:r,$wrapperEl:s}=this;if(t.virtualTranslate)return n?-r:r;if(t.cssMode)return r;let o=(0,i.getTranslate)(s[0],e);return n&&(o=-o),o||0}})),s.register("1vvVW",(function(e,n){function i(e,t){const n=this,{rtlTranslate:i,params:r,$wrapperEl:s,wrapperEl:o,progress:a}=n;let l=0,c=0;let u;n.isHorizontal()?l=i?-e:e:c=e,r.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),r.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:r.virtualTranslate||s.transform(`translate3d(${l}px, ${c}px, 0px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c;const h=n.maxTranslate()-n.minTranslate();u=0===h?0:(e-n.minTranslate())/h,u!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}t(e.exports,"default",(function(){return i}))})),s.register("jVKXc",(function(e,n){function i(){return-this.snapGrid[0]}t(e.exports,"default",(function(){return i}))})),s.register("a9I2T",(function(e,n){function i(){return-this.snapGrid[this.snapGrid.length-1]}t(e.exports,"default",(function(){return i}))})),s.register("fzQVA",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e=0,t=this.params.speed,n=!0,r=!0,s){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const c=o.minTranslate(),u=o.maxTranslate();let h;if(h=r&&e>c?c:r&&e<u?u:e,o.updateProgress(h),a.cssMode){const e=o.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-h;else{if(!o.support.smoothScroll)return(0,i.animateCSSModeScroll)({swiper:o,targetPosition:-h,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-h,behavior:"smooth"})}return!0}return 0===t?(o.setTransition(0),o.setTranslate(h),n&&(o.emit("beforeTransitionStart",t,s),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(h),n&&(o.emit("beforeTransitionStart",t,s),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(e){o&&!o.destroyed&&e.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.$wrapperEl[0].addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd))),!0}})),s.register("b4Co2",(function(e,n){t(e.exports,"default",(function(){return a}));var i=s("e2mnO"),r=s("C1QMZ"),o=s("3QxHx"),a={setTransition:i.default,transitionStart:r.default,transitionEnd:o.default}})),s.register("e2mnO",(function(e,n){function i(e,t){const n=this;n.params.cssMode||n.$wrapperEl.transition(e),n.emit("setTransition",e,t)}t(e.exports,"default",(function(){return i}))})),s.register("C1QMZ",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("g81jD");function r(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),(0,i.default)({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}})),s.register("g81jD",(function(e,n){function i({swiper:e,runCallbacks:t,direction:n,step:i}){const{activeIndex:r,previousIndex:s}=e;let o=n;if(o||(o=r>s?"next":r<s?"prev":"reset"),e.emit(`transition${i}`),t&&r!==s){if("reset"===o)return void e.emit(`slideResetTransition${i}`);e.emit(`slideChangeTransition${i}`),"next"===o?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}t(e.exports,"default",(function(){return i}))})),s.register("3QxHx",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("g81jD");function r(e=!0,t){const n=this,{params:r}=n;n.animating=!1,r.cssMode||(n.setTransition(0),(0,i.default)({swiper:n,runCallbacks:e,direction:t,step:"End"}))}})),s.register("jtnqo",(function(e,n){t(e.exports,"default",(function(){return h}));var i=s("VoUIG"),r=s("hma03"),o=s("cNUv0"),a=s("73yc0"),l=s("30lE7"),c=s("6K2nc"),u=s("k6ufv"),h={slideTo:i.default,slideToLoop:r.default,slideNext:o.default,slidePrev:a.default,slideReset:l.default,slideToClosest:c.default,slideToClickedSlide:u.default}})),s.register("VoUIG",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e=0,t=this.params.speed,n=!0,r,s){if("number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:c,slidesGrid:u,previousIndex:h,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:m}=o;if(o.animating&&l.preventInteractionOnTransition||!m&&!r&&!s)return!1;const g=Math.min(o.params.slidesPerGroupSkip,a);let y=g+Math.floor((a-g)/o.params.slidesPerGroup);y>=c.length&&(y=c.length-1);const v=-c[y];if(l.normalizeSlideIndex)for(let e=0;e<u.length;e+=1){const t=-Math.floor(100*v),n=Math.floor(100*u[e]),i=Math.floor(100*u[e+1]);void 0!==u[e+1]?t>=n&&t<i-(i-n)/2?a=e:t>=n&&t<i&&(a=e+1):t>=n&&(a=e)}if(o.initialized&&a!==d){if(!o.allowSlideNext&&v<o.translate&&v<o.minTranslate())return!1;if(!o.allowSlidePrev&&v>o.translate&&v>o.maxTranslate()&&(d||0)!==a)return!1}let w;if(a!==(h||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(v),w=a>d?"next":a<d?"prev":"reset",f&&-v===o.translate||!f&&v===o.translate)return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),"slide"!==l.effect&&o.setTranslate(v),"reset"!==w&&(o.transitionStart(n,w),o.transitionEnd(n,w)),!1;if(l.cssMode){const e=o.isHorizontal(),n=f?v:-v;if(0===t){const t=o.virtual&&o.params.virtual.enabled;t&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),p[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{o.wrapperEl.style.scrollSnapType="",o._swiperImmediateVirtual=!1}))}else{if(!o.support.smoothScroll)return(0,i.animateCSSModeScroll)({swiper:o,targetPosition:n,side:e?"left":"top"}),!0;p.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(v),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,w),0===t?o.transitionEnd(n,w):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(e){o&&!o.destroyed&&e.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,w))}),o.$wrapperEl[0].addEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd)),!0}})),s.register("hma03",(function(e,n){function i(e=0,t=this.params.speed,n=!0,i){if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let s=e;return r.params.loop&&(s+=r.loopedSlides),r.slideTo(s,t,n,i)}t(e.exports,"default",(function(){return i}))})),s.register("cNUv0",(function(e,n){function i(e=this.params.speed,t=!0,n){const i=this,{animating:r,enabled:s,params:o}=i;if(!s)return i;let a=o.slidesPerGroup;"auto"===o.slidesPerView&&1===o.slidesPerGroup&&o.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<o.slidesPerGroupSkip?1:a;if(o.loop){if(r&&o.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return o.rewind&&i.isEnd?i.slideTo(0,e,t,n):i.slideTo(i.activeIndex+l,e,t,n)}t(e.exports,"default",(function(){return i}))})),s.register("73yc0",(function(e,n){function i(e=this.params.speed,t=!0,n){const i=this,{params:r,animating:s,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:c}=i;if(!c)return i;if(r.loop){if(s&&r.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function u(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const h=u(l?i.translate:-i.translate),d=o.map((e=>u(e)));let f=o[d.indexOf(h)-1];if(void 0===f&&r.cssMode){let e;o.forEach(((t,n)=>{h>=t&&(e=n)})),void 0!==e&&(f=o[e>0?e-1:e])}let p=0;if(void 0!==f&&(p=a.indexOf(f),p<0&&(p=i.activeIndex-1),"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(p=p-i.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),r.rewind&&i.isBeginning){const r=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(r,e,t,n)}return i.slideTo(p,e,t,n)}t(e.exports,"default",(function(){return i}))})),s.register("30lE7",(function(e,n){function i(e=this.params.speed,t=!0,n){return this.slideTo(this.activeIndex,e,t,n)}t(e.exports,"default",(function(){return i}))})),s.register("6K2nc",(function(e,n){function i(e=this.params.speed,t=!0,n,i=.5){const r=this;let s=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[a]){const e=r.snapGrid[a];l-e>(r.snapGrid[a+1]-e)*i&&(s+=r.params.slidesPerGroup)}else{const e=r.snapGrid[a-1];l-e<=(r.snapGrid[a]-e)*i&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,e,t,n)}t(e.exports,"default",(function(){return i}))})),s.register("k6ufv",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("3ORMQ"),r=s("dNWnP");function o(){const e=this,{params:t,$wrapperEl:n}=e,s="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let o,a=e.clickedIndex;if(t.loop){if(e.animating)return;o=parseInt((0,i.default)(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?a<e.loopedSlides-s/2||a>e.slides.length-e.loopedSlides+s/2?(e.loopFix(),a=n.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),(0,r.nextTick)((()=>{e.slideTo(a)}))):e.slideTo(a):a>e.slides.length-s?(e.loopFix(),a=n.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),(0,r.nextTick)((()=>{e.slideTo(a)}))):e.slideTo(a)}else e.slideTo(a)}})),s.register("7Q6KL",(function(e,n){t(e.exports,"default",(function(){return a}));var i=s("jAQHU"),r=s("iefk9"),o=s("8TQCt"),a={loopCreate:i.default,loopFix:r.default,loopDestroy:o.default}})),s.register("jAQHU",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("7xxPi"),r=s("3ORMQ");function o(){const e=this,t=(0,i.getDocument)(),{params:n,$wrapperEl:s}=e,o=s.children().length>0?(0,r.default)(s.children()[0].parentNode):s;o.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();let a=o.children(`.${n.slideClass}`);if(n.loopFillGroupWithBlank){const e=n.slidesPerGroup-a.length%n.slidesPerGroup;if(e!==n.slidesPerGroup){for(let i=0;i<e;i+=1){const e=(0,r.default)(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);o.append(e)}a=o.children(`.${n.slideClass}`)}}"auto"!==n.slidesPerView||n.loopedSlides||(n.loopedSlides=a.length),e.loopedSlides=Math.ceil(parseFloat(n.loopedSlides||n.slidesPerView,10)),e.loopedSlides+=n.loopAdditionalSlides,e.loopedSlides>a.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=a.length);const l=[],c=[];a.each(((e,t)=>{(0,r.default)(e).attr("data-swiper-slide-index",t)}));for(let t=0;t<e.loopedSlides;t+=1){const e=t-Math.floor(t/a.length)*a.length;c.push(a.eq(e)[0]),l.unshift(a.eq(a.length-e-1)[0])}for(let e=0;e<c.length;e+=1)o.append((0,r.default)(c[e].cloneNode(!0)).addClass(n.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)o.prepend((0,r.default)(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass))}})),s.register("iefk9",(function(e,n){function i(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:n,loopedSlides:i,allowSlidePrev:r,allowSlideNext:s,snapGrid:o,rtlTranslate:a}=e;let l;e.allowSlidePrev=!0,e.allowSlideNext=!0;const c=-o[t]-e.getTranslate();if(t<i){l=n.length-3*i+t,l+=i;e.slideTo(l,0,!1,!0)&&0!==c&&e.setTranslate((a?-e.translate:e.translate)-c)}else if(t>=n.length-i){l=-n.length+t+i,l+=i;e.slideTo(l,0,!1,!0)&&0!==c&&e.setTranslate((a?-e.translate:e.translate)-c)}e.allowSlidePrev=r,e.allowSlideNext=s,e.emit("loopFix")}t(e.exports,"default",(function(){return i}))})),s.register("8TQCt",(function(e,n){function i(){const{$wrapperEl:e,params:t,slides:n}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),n.removeAttr("data-swiper-slide-index")}t(e.exports,"default",(function(){return i}))})),s.register("lt8Bz",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("8kBkW"),r=s("lGUvJ"),o={setGrabCursor:i.default,unsetGrabCursor:r.default}})),s.register("8kBkW",(function(e,n){function i(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;n.style.cursor="move",n.style.cursor=e?"grabbing":"grab"}t(e.exports,"default",(function(){return i}))})),s.register("lGUvJ",(function(e,n){function i(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}t(e.exports,"default",(function(){return i}))})),s.register("i1StC",(function(e,n){t(e.exports,"default",(function(){return p}));var i=s("7xxPi"),r=s("iDuHK"),o=s("hwZYB"),a=s("7UVOE"),l=s("i41Or"),c=s("9A257"),u=s("lI65j");let h=!1;function d(){}const f=(e,t)=>{const n=(0,i.getDocument)(),{params:r,touchEvents:s,el:o,wrapperEl:a,device:c,support:u}=e,h=!!r.nested,d="on"===t?"addEventListener":"removeEventListener",f=t;if(u.touch){const t=!("touchstart"!==s.start||!u.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};o[d](s.start,e.onTouchStart,t),o[d](s.move,e.onTouchMove,u.passiveListener?{passive:!1,capture:h}:h),o[d](s.end,e.onTouchEnd,t),s.cancel&&o[d](s.cancel,e.onTouchEnd,t)}else o[d](s.start,e.onTouchStart,!1),n[d](s.move,e.onTouchMove,h),n[d](s.end,e.onTouchEnd,!1);(r.preventClicks||r.preventClicksPropagation)&&o[d]("click",e.onClick,!0),r.cssMode&&a[d]("scroll",e.onScroll),r.updateOnWindowResize?e[f](c.ios||c.android?"resize orientationchange observerUpdate":"resize observerUpdate",l.default,!0):e[f]("observerUpdate",l.default,!0)};var p={attachEvents:function(){const e=this,t=(0,i.getDocument)(),{params:n,support:s}=e;e.onTouchStart=r.default.bind(e),e.onTouchMove=o.default.bind(e),e.onTouchEnd=a.default.bind(e),n.cssMode&&(e.onScroll=u.default.bind(e)),e.onClick=c.default.bind(e),s.touch&&!h&&(t.addEventListener("touchstart",d),h=!0),f(e,"on")},detachEvents:function(){f(this,"off")}}})),s.register("iDuHK",(function(e,n){t(e.exports,"default",(function(){return a}));var i=s("7xxPi"),r=s("3ORMQ"),o=s("dNWnP");function a(e){const t=this,n=(0,i.getDocument)(),s=(0,i.getWindow)(),a=t.touchEventsData,{params:l,touches:c,enabled:u}=t;if(!u)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let h=e;h.originalEvent&&(h=h.originalEvent);let d=(0,r.default)(h.target);if("wrapper"===l.touchEventsTarget&&!d.closest(t.wrapperEl).length)return;if(a.isTouchEvent="touchstart"===h.type,!a.isTouchEvent&&"which"in h&&3===h.which)return;if(!a.isTouchEvent&&"button"in h&&h.button>0)return;if(a.isTouched&&a.isMoved)return;const f=!!l.noSwipingClass&&""!==l.noSwipingClass,p=e.composedPath?e.composedPath():e.path;f&&h.target&&h.target.shadowRoot&&p&&(d=(0,r.default)(p[0]));const m=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,g=!(!h.target||!h.target.shadowRoot);if(l.noSwiping&&(g?function(e,t=this){return function t(n){if(!n||n===(0,i.getDocument)()||n===(0,i.getWindow)())return null;n.assignedSlot&&(n=n.assignedSlot);const r=n.closest(e);return r||n.getRootNode?r||t(n.getRootNode().host):null}(t)}(m,d[0]):d.closest(m)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!d.closest(l.swipeHandler)[0])return;c.currentX="touchstart"===h.type?h.targetTouches[0].pageX:h.pageX,c.currentY="touchstart"===h.type?h.targetTouches[0].pageY:h.pageY;const y=c.currentX,v=c.currentY,w=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,b=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(w&&(y<=b||y>=s.innerWidth-b)){if("prevent"!==w)return;e.preventDefault()}if(Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),c.startX=y,c.startY=v,a.touchStartTime=(0,o.now)(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==h.type){let e=!0;d.is(a.focusableElements)&&(e=!1,"SELECT"===d[0].nodeName&&(a.isTouched=!1)),n.activeElement&&(0,r.default)(n.activeElement).is(a.focusableElements)&&n.activeElement!==d[0]&&n.activeElement.blur();const i=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!i||d[0].isContentEditable||h.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",h)}})),s.register("hwZYB",(function(e,n){t(e.exports,"default",(function(){return a}));var i=s("7xxPi"),r=s("3ORMQ"),o=s("dNWnP");function a(e){const t=(0,i.getDocument)(),n=this,s=n.touchEventsData,{params:a,touches:l,rtlTranslate:c,enabled:u}=n;if(!u)return;let h=e;if(h.originalEvent&&(h=h.originalEvent),!s.isTouched)return void(s.startMoving&&s.isScrolling&&n.emit("touchMoveOpposite",h));if(s.isTouchEvent&&"touchmove"!==h.type)return;const d="touchmove"===h.type&&h.targetTouches&&(h.targetTouches[0]||h.changedTouches[0]),f="touchmove"===h.type?d.pageX:h.pageX,p="touchmove"===h.type?d.pageY:h.pageY;if(h.preventedByNestedSwiper)return l.startX=f,void(l.startY=p);if(!n.allowTouchMove)return(0,r.default)(h.target).is(s.focusableElements)||(n.allowClick=!1),void(s.isTouched&&(Object.assign(l,{startX:f,startY:p,currentX:f,currentY:p}),s.touchStartTime=(0,o.now)()));if(s.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(n.isVertical()){if(p<l.startY&&n.translate<=n.maxTranslate()||p>l.startY&&n.translate>=n.minTranslate())return s.isTouched=!1,void(s.isMoved=!1)}else if(f<l.startX&&n.translate<=n.maxTranslate()||f>l.startX&&n.translate>=n.minTranslate())return;if(s.isTouchEvent&&t.activeElement&&h.target===t.activeElement&&(0,r.default)(h.target).is(s.focusableElements))return s.isMoved=!0,void(n.allowClick=!1);if(s.allowTouchCallbacks&&n.emit("touchMove",h),h.targetTouches&&h.targetTouches.length>1)return;l.currentX=f,l.currentY=p;const m=l.currentX-l.startX,g=l.currentY-l.startY;if(n.params.threshold&&Math.sqrt(m**2+g**2)<n.params.threshold)return;if(void 0===s.isScrolling){let e;n.isHorizontal()&&l.currentY===l.startY||n.isVertical()&&l.currentX===l.startX?s.isScrolling=!1:m*m+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(m))/Math.PI,s.isScrolling=n.isHorizontal()?e>a.touchAngle:90-e>a.touchAngle)}if(s.isScrolling&&n.emit("touchMoveOpposite",h),void 0===s.startMoving&&(l.currentX===l.startX&&l.currentY===l.startY||(s.startMoving=!0)),s.isScrolling)return void(s.isTouched=!1);if(!s.startMoving)return;n.allowClick=!1,!a.cssMode&&h.cancelable&&h.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&h.stopPropagation(),s.isMoved||(a.loop&&!a.cssMode&&n.loopFix(),s.startTranslate=n.getTranslate(),n.setTransition(0),n.animating&&n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),s.allowMomentumBounce=!1,!a.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",h)),n.emit("sliderMove",h),s.isMoved=!0;let y=n.isHorizontal()?m:g;l.diff=y,y*=a.touchRatio,c&&(y=-y),n.swipeDirection=y>0?"prev":"next",s.currentTranslate=y+s.startTranslate;let v=!0,w=a.resistanceRatio;if(a.touchReleaseOnEdges&&(w=0),y>0&&s.currentTranslate>n.minTranslate()?(v=!1,a.resistance&&(s.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+s.startTranslate+y)**w)):y<0&&s.currentTranslate<n.maxTranslate()&&(v=!1,a.resistance&&(s.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-s.startTranslate-y)**w)),v&&(h.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),n.allowSlidePrev||n.allowSlideNext||(s.currentTranslate=s.startTranslate),a.threshold>0){if(!(Math.abs(y)>a.threshold||s.allowThresholdMove))return void(s.currentTranslate=s.startTranslate);if(!s.allowThresholdMove)return s.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,s.currentTranslate=s.startTranslate,void(l.diff=n.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY)}a.followFinger&&!a.cssMode&&((a.freeMode&&a.freeMode.enabled&&n.freeMode||a.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&a.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(s.currentTranslate),n.setTranslate(s.currentTranslate))}})),s.register("7UVOE",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e){const t=this,n=t.touchEventsData,{params:r,touches:s,rtlTranslate:o,slidesGrid:a,enabled:l}=t;if(!l)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",c),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&r.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);r.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=(0,i.now)(),h=u-n.touchStartTime;if(t.allowClick){const e=c.path||c.composedPath&&c.composedPath();t.updateClickedSlide(e&&e[0]||c.target),t.emit("tap click",c),h<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",c)}if(n.lastClickTime=(0,i.now)(),(0,i.nextTick)((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===s.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let d;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,d=r.followFinger?o?t.translate:-t.translate:-n.currentTranslate,r.cssMode)return;if(t.params.freeMode&&r.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:d});let f=0,p=t.slidesSizesGrid[0];for(let e=0;e<a.length;e+=e<r.slidesPerGroupSkip?1:r.slidesPerGroup){const t=e<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;void 0!==a[e+t]?d>=a[e]&&d<a[e+t]&&(f=e,p=a[e+t]-a[e]):d>=a[e]&&(f=e,p=a[a.length-1]-a[a.length-2])}let m=null,g=null;r.rewind&&(t.isBeginning?g=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const y=(d-a[f])/p,v=f<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(h>r.longSwipesMs){if(!r.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(y>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?m:f+v):t.slideTo(f)),"prev"===t.swipeDirection&&(y>1-r.longSwipesRatio?t.slideTo(f+v):null!==g&&y<0&&Math.abs(y)>r.longSwipesRatio?t.slideTo(g):t.slideTo(f))}else{if(!r.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(f+v):t.slideTo(f):("next"===t.swipeDirection&&t.slideTo(null!==m?m:f+v),"prev"===t.swipeDirection&&t.slideTo(null!==g?g:f))}}})),s.register("i41Or",(function(e,n){function i(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:s}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=r,e.allowSlideNext=i,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}t(e.exports,"default",(function(){return i}))})),s.register("9A257",(function(e,n){function i(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}t(e.exports,"default",(function(){return i}))})),s.register("lI65j",(function(e,n){function i(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:i}=e;if(!i)return;let r;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const s=e.maxTranslate()-e.minTranslate();r=0===s?0:(e.translate-e.minTranslate())/s,r!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}t(e.exports,"default",(function(){return i}))})),s.register("6Vw97",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("6iUdR"),r=s("kp9jL"),o={setBreakpoint:i.default,getBreakpoint:r.default}})),s.register("6iUdR",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("dNWnP");const r=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function o(){const e=this,{activeIndex:t,initialized:n,loopedSlides:s=0,params:o,$el:a}=e,l=o.breakpoints;if(!l||l&&0===Object.keys(l).length)return;const c=e.getBreakpoint(l,e.params.breakpointsBase,e.el);if(!c||e.currentBreakpoint===c)return;const u=(c in l?l[c]:void 0)||e.originalParams,h=r(e,o),d=r(e,u),f=o.enabled;h&&!d?(a.removeClass(`${o.containerModifierClass}grid ${o.containerModifierClass}grid-column`),e.emitContainerClasses()):!h&&d&&(a.addClass(`${o.containerModifierClass}grid`),(u.grid.fill&&"column"===u.grid.fill||!u.grid.fill&&"column"===o.grid.fill)&&a.addClass(`${o.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=o[t]&&o[t].enabled,i=u[t]&&u[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()}));const p=u.direction&&u.direction!==o.direction,m=o.loop&&(u.slidesPerView!==o.slidesPerView||p);p&&n&&e.changeDirection(),(0,i.extend)(e.params,u);const g=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),f&&!g?e.disable():!f&&g&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),m&&n&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-s+e.loopedSlides,0,!1)),e.emit("breakpoint",u)}})),s.register("kp9jL",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("7xxPi");function r(e,t="window",n){if(!e||"container"===t&&!n)return;let r=!1;const s=(0,i.getWindow)(),o="window"===t?s.innerHeight:n.clientHeight,a=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:o*t,point:e}}return{value:e,point:e}}));a.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<a.length;e+=1){const{point:i,value:o}=a[e];"window"===t?s.matchMedia(`(min-width: ${o}px)`).matches&&(r=i):o<=n.clientWidth&&(r=i)}return r||"max"}})),s.register("5IPB6",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("lHwXw"),r=s("e5Gui"),o={addClasses:i.default,removeClasses:r.default}})),s.register("lHwXw",(function(e,n){function i(){const e=this,{classNames:t,params:n,rtl:i,$el:r,device:s,support:o}=e,a=function(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((i=>{e[i]&&n.push(t+i)})):"string"==typeof e&&n.push(t+e)})),n}(["initialized",n.direction,{"pointer-events":!o.touch},{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),r.addClass([...t].join(" ")),e.emitContainerClasses()}t(e.exports,"default",(function(){return i}))})),s.register("e5Gui",(function(e,n){function i(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}t(e.exports,"default",(function(){return i}))})),s.register("cbWiI",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("3ljlJ"),r=s("7fdZ5"),o={loadImage:i.default,preloadImages:r.default}})),s.register("3ljlJ",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("7xxPi"),r=s("3ORMQ");function o(e,t,n,s,o,a){const l=(0,i.getWindow)();let c;function u(){a&&a()}(0,r.default)(e).parent("picture")[0]||e.complete&&o?u():t?(c=new l.Image,c.onload=u,c.onerror=u,s&&(c.sizes=s),n&&(c.srcset=n),t&&(c.src=t)):u()}})),s.register("7fdZ5",(function(e,n){function i(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let n=0;n<e.imagesToLoad.length;n+=1){const i=e.imagesToLoad[n];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}t(e.exports,"default",(function(){return i}))})),s.register("5rbog",(function(e,n){t(e.exports,"default",(function(){return i}));var i={checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:i}=n;if(i){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*i;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}}})),s.register("1AMhv",(function(e,n){t(e.exports,"default",(function(){return i}));var i={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1}})),s.register("kmZuC",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e,t){return function(n={}){const r=Object.keys(n)[0],s=n[r];"object"==typeof s&&null!==s?(["navigation","pagination","scrollbar"].indexOf(r)>=0&&!0===e[r]&&(e[r]={auto:!0}),r in e&&"enabled"in s?(!0===e[r]&&(e[r]={enabled:!0}),"object"!=typeof e[r]||"enabled"in e[r]||(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),(0,i.extend)(t,n)):(0,i.extend)(t,n)):(0,i.extend)(t,n)}}})),s.register("790ii",(function(e,t){s("3ORMQ"),s("dNWnP")})),s.register("fajkZ",(function(e,t){s("7xxPi"),s("3ORMQ")})),s.register("1sSHk",(function(e,t){s("7xxPi"),s("3ORMQ"),s("dNWnP")})),s.register("iSRJB",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("e2yAf"),r=s("3ORMQ");function o({swiper:e,extendParams:t,on:n,emit:s}){function o(t){let n;return t&&(n=(0,r.default)(t),e.params.uniqueNavElements&&"string"==typeof t&&n.length>1&&1===e.$el.find(t).length&&(n=e.$el.find(t))),n}function a(t,n){const i=e.params.navigation;t&&t.length>0&&(t[n?"addClass":"removeClass"](i.disabledClass),t[0]&&"BUTTON"===t[0].tagName&&(t[0].disabled=n),e.params.watchOverflow&&e.enabled&&t[e.isLocked?"addClass":"removeClass"](i.lockClass))}function l(){if(e.params.loop)return;const{$nextEl:t,$prevEl:n}=e.navigation;a(n,e.isBeginning&&!e.params.rewind),a(t,e.isEnd&&!e.params.rewind)}function c(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),s("navigationPrev"))}function u(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),s("navigationNext"))}function h(){const t=e.params.navigation;if(e.params.navigation=(0,i.default)(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;const n=o(t.nextEl),r=o(t.prevEl);n&&n.length>0&&n.on("click",u),r&&r.length>0&&r.on("click",c),Object.assign(e.navigation,{$nextEl:n,nextEl:n&&n[0],$prevEl:r,prevEl:r&&r[0]}),e.enabled||(n&&n.addClass(t.lockClass),r&&r.addClass(t.lockClass))}function d(){const{$nextEl:t,$prevEl:n}=e.navigation;t&&t.length&&(t.off("click",u),t.removeClass(e.params.navigation.disabledClass)),n&&n.length&&(n.off("click",c),n.removeClass(e.params.navigation.disabledClass))}t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},n("init",(()=>{!1===e.params.navigation.enabled?f():(h(),l())})),n("toEdge fromEdge lock unlock",(()=>{l()})),n("destroy",(()=>{d()})),n("enable disable",(()=>{const{$nextEl:t,$prevEl:n}=e.navigation;t&&t[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),n&&n[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)})),n("click",((t,n)=>{const{$nextEl:i,$prevEl:o}=e.navigation,a=n.target;if(e.params.navigation.hideOnClick&&!(0,r.default)(a).is(o)&&!(0,r.default)(a).is(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let t;i?t=i.hasClass(e.params.navigation.hiddenClass):o&&(t=o.hasClass(e.params.navigation.hiddenClass)),s(!0===t?"navigationShow":"navigationHide"),i&&i.toggleClass(e.params.navigation.hiddenClass),o&&o.toggleClass(e.params.navigation.hiddenClass)}}));const f=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),d()};Object.assign(e.navigation,{enable:()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),h(),l()},disable:f,update:l,init:h,destroy:d})}})),s.register("e2yAf",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("7xxPi");function r(e,t,n,r){const s=(0,i.getDocument)();return e.params.createElements&&Object.keys(r).forEach((i=>{if(!n[i]&&!0===n.auto){let o=e.$el.children(`.${r[i]}`)[0];o||(o=s.createElement("div"),o.className=r[i],e.$el.append(o)),n[i]=o,t[i]=o}})),n}})),s.register("62uwT",(function(e,n){t(e.exports,"default",(function(){return a}));var i=s("3ORMQ"),r=s("edm4W"),o=s("e2yAf");function a({swiper:e,extendParams:t,on:n,emit:s}){const a="swiper-pagination";let l;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),e.pagination={el:null,$el:null,bullets:[]};let c=0;function u(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||0===e.pagination.$el.length}function h(t,n){const{bulletActiveClass:i}=e.params.pagination;t[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`)}function d(){const t=e.rtl,n=e.params.pagination;if(u())return;const o=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,a=e.pagination.$el;let d;const f=e.params.loop?Math.ceil((o-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(d=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),d>o-1-2*e.loopedSlides&&(d-=o-2*e.loopedSlides),d>f-1&&(d-=f),d<0&&"bullets"!==e.params.paginationType&&(d=f+d)):d=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===n.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const r=e.pagination.bullets;let s,o,u;if(n.dynamicBullets&&(l=r.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),a.css(e.isHorizontal()?"width":"height",l*(n.dynamicMainBullets+4)+"px"),n.dynamicMainBullets>1&&void 0!==e.previousIndex&&(c+=d-(e.previousIndex-e.loopedSlides||0),c>n.dynamicMainBullets-1?c=n.dynamicMainBullets-1:c<0&&(c=0)),s=Math.max(d-c,0),o=s+(Math.min(r.length,n.dynamicMainBullets)-1),u=(o+s)/2),r.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${n.bulletActiveClass}${e}`)).join(" ")),a.length>1)r.each((e=>{const t=(0,i.default)(e),r=t.index();r===d&&t.addClass(n.bulletActiveClass),n.dynamicBullets&&(r>=s&&r<=o&&t.addClass(`${n.bulletActiveClass}-main`),r===s&&h(t,"prev"),r===o&&h(t,"next"))}));else{const t=r.eq(d),i=t.index();if(t.addClass(n.bulletActiveClass),n.dynamicBullets){const t=r.eq(s),a=r.eq(o);for(let e=s;e<=o;e+=1)r.eq(e).addClass(`${n.bulletActiveClass}-main`);if(e.params.loop)if(i>=r.length){for(let e=n.dynamicMainBullets;e>=0;e-=1)r.eq(r.length-e).addClass(`${n.bulletActiveClass}-main`);r.eq(r.length-n.dynamicMainBullets-1).addClass(`${n.bulletActiveClass}-prev`)}else h(t,"prev"),h(a,"next");else h(t,"prev"),h(a,"next")}}if(n.dynamicBullets){const i=Math.min(r.length,n.dynamicMainBullets+4),s=(l*i-l)/2-u*l,o=t?"right":"left";r.css(e.isHorizontal()?o:"top",`${s}px`)}}if("fraction"===n.type&&(a.find((0,r.default)(n.currentClass)).text(n.formatFractionCurrent(d+1)),a.find((0,r.default)(n.totalClass)).text(n.formatFractionTotal(f))),"progressbar"===n.type){let t;t=n.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const i=(d+1)/f;let s=1,o=1;"horizontal"===t?s=i:o=i,a.find((0,r.default)(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${o})`).transition(e.params.speed)}"custom"===n.type&&n.renderCustom?(a.html(n.renderCustom(e,d+1,f)),s("paginationRender",a[0])):s("paginationUpdate",a[0]),e.params.watchOverflow&&e.enabled&&a[e.isLocked?"addClass":"removeClass"](n.lockClass)}function f(){const t=e.params.pagination;if(u())return;const n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el;let o="";if("bullets"===t.type){let s=e.params.loop?Math.ceil((n-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&s>n&&(s=n);for(let n=0;n<s;n+=1)t.renderBullet?o+=t.renderBullet.call(e,n,t.bulletClass):o+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;i.html(o),e.pagination.bullets=i.find((0,r.default)(t.bulletClass))}"fraction"===t.type&&(o=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,i.html(o)),"progressbar"===t.type&&(o=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`,i.html(o)),"custom"!==t.type&&s("paginationRender",e.pagination.$el[0])}function p(){e.params.pagination=(0,o.default)(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let n=(0,i.default)(t.el);0!==n.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&n.length>1&&(n=e.$el.find(t.el),n.length>1&&(n=n.filter((t=>(0,i.default)(t).parents(".swiper")[0]===e.el)))),"bullets"===t.type&&t.clickable&&n.addClass(t.clickableClass),n.addClass(t.modifierClass+t.type),n.addClass(e.isHorizontal()?t.horizontalClass:t.verticalClass),"bullets"===t.type&&t.dynamicBullets&&(n.addClass(`${t.modifierClass}${t.type}-dynamic`),c=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&n.addClass(t.progressbarOppositeClass),t.clickable&&n.on("click",(0,r.default)(t.bulletClass),(function(t){t.preventDefault();let n=(0,i.default)(this).index()*e.params.slidesPerGroup;e.params.loop&&(n+=e.loopedSlides),e.slideTo(n)})),Object.assign(e.pagination,{$el:n,el:n[0]}),e.enabled||n.addClass(t.lockClass))}function m(){const t=e.params.pagination;if(u())return;const n=e.pagination.$el;n.removeClass(t.hiddenClass),n.removeClass(t.modifierClass+t.type),n.removeClass(e.isHorizontal()?t.horizontalClass:t.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&n.off("click",(0,r.default)(t.bulletClass))}n("init",(()=>{!1===e.params.pagination.enabled?g():(p(),f(),d())})),n("activeIndexChange",(()=>{(e.params.loop||void 0===e.snapIndex)&&d()})),n("snapIndexChange",(()=>{e.params.loop||d()})),n("slidesLengthChange",(()=>{e.params.loop&&(f(),d())})),n("snapGridLengthChange",(()=>{e.params.loop||(f(),d())})),n("destroy",(()=>{m()})),n("enable disable",(()=>{const{$el:t}=e.pagination;t&&t[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)})),n("lock unlock",(()=>{d()})),n("click",((t,n)=>{const r=n.target,{$el:o}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&o&&o.length>0&&!(0,i.default)(r).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&r===e.navigation.nextEl||e.navigation.prevEl&&r===e.navigation.prevEl))return;const t=o.hasClass(e.params.pagination.hiddenClass);s(!0===t?"paginationShow":"paginationHide"),o.toggleClass(e.params.pagination.hiddenClass)}}));const g=()=>{e.$el.addClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),m()};Object.assign(e.pagination,{enable:()=>{e.$el.removeClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),p(),f(),d()},disable:g,render:f,update:d,init:p,destroy:m})}})),s.register("edm4W",(function(e,n){function i(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}t(e.exports,"default",(function(){return i}))})),s.register("hKwG4",(function(e,t){s("7xxPi"),s("3ORMQ"),s("dNWnP"),s("e2yAf")})),s.register("ePkwZ",(function(e,t){s("3ORMQ")})),s.register("lrfdb",(function(e,t){s("7xxPi"),s("3ORMQ"),s("dNWnP")})),s.register("hRfJF",(function(e,t){s("7xxPi"),s("3ORMQ")})),s.register("kjN5y",(function(e,t){s("dNWnP")})),s.register("eVziZ",(function(e,t){s("edm4W"),s("3ORMQ")})),s.register("9azrO",(function(e,t){s("7xxPi")})),s.register("3oxNJ",(function(e,t){s("7xxPi"),s("3ORMQ")})),s.register("gs7Pm",(function(e,t){s("7xxPi"),s("dNWnP")})),s.register("jBPWu",(function(e,t){s("dNWnP"),s("3ORMQ")})),s.register("ci9Ge",(function(e,t){s("dNWnP")})),s.register("eVDS1",(function(e,t){})),s.register("53omQ",(function(e,t){s("frRZG"),s("YUBdp"),s("86k5H"),s("83a8T"),s("dIPpB")})),s.register("frRZG",(function(e,n){function i(e){const t=this,{$wrapperEl:n,params:i}=t;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&n.append(e[t]);else n.append(e);i.loop&&t.loopCreate(),i.observer||t.update()}t(e.exports,"default",(function(){return i}))})),s.register("YUBdp",(function(e,n){function i(e){const t=this,{params:n,$wrapperEl:i,activeIndex:r}=t;n.loop&&t.loopDestroy();let s=r+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&i.prepend(e[t]);s=r+e.length}else i.prepend(e);n.loop&&t.loopCreate(),n.observer||t.update(),t.slideTo(s,0,!1)}t(e.exports,"default",(function(){return i}))})),s.register("86k5H",(function(e,n){function i(e,t){const n=this,{$wrapperEl:i,params:r,activeIndex:s}=n;let o=s;r.loop&&(o-=n.loopedSlides,n.loopDestroy(),n.slides=i.children(`.${r.slideClass}`));const a=n.slides.length;if(e<=0)return void n.prependSlide(t);if(e>=a)return void n.appendSlide(t);let l=o>e?o+1:o;const c=[];for(let t=a-1;t>=e;t-=1){const e=n.slides.eq(t);e.remove(),c.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&i.append(t[e]);l=o>e?o+t.length:o}else i.append(t);for(let e=0;e<c.length;e+=1)i.append(c[e]);r.loop&&n.loopCreate(),r.observer||n.update(),r.loop?n.slideTo(l+n.loopedSlides,0,!1):n.slideTo(l,0,!1)}t(e.exports,"default",(function(){return i}))})),s.register("83a8T",(function(e,n){function i(e){const t=this,{params:n,$wrapperEl:i,activeIndex:r}=t;let s=r;n.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children(`.${n.slideClass}`));let o,a=s;if("object"==typeof e&&"length"in e){for(let n=0;n<e.length;n+=1)o=e[n],t.slides[o]&&t.slides.eq(o).remove(),o<a&&(a-=1);a=Math.max(a,0)}else o=e,t.slides[o]&&t.slides.eq(o).remove(),o<a&&(a-=1),a=Math.max(a,0);n.loop&&t.loopCreate(),n.observer||t.update(),n.loop?t.slideTo(a+t.loopedSlides,0,!1):t.slideTo(a,0,!1)}t(e.exports,"default",(function(){return i}))})),s.register("dIPpB",(function(e,n){function i(){const e=this,t=[];for(let n=0;n<e.slides.length;n+=1)t.push(n);e.removeSlide(t)}t(e.exports,"default",(function(){return i}))})),s.register("4LjcT",(function(e,t){s("lPi1I"),s("lwSOa"),s("5KAGo")})),s.register("lPi1I",(function(e,n){function i(e){const{effect:t,swiper:n,on:i,setTranslate:r,setTransition:s,overwriteParams:o,perspective:a,recreateShadows:l,getEffectParams:c}=e;let u;i("beforeInit",(()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),a&&a()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const e=o?o():{};Object.assign(n.params,e),Object.assign(n.originalParams,e)})),i("setTranslate",(()=>{n.params.effect===t&&r()})),i("setTransition",((e,i)=>{n.params.effect===t&&s(i)})),i("transitionEnd",(()=>{if(n.params.effect===t&&l){if(!c||!c().slideShadows)return;n.slides.each((e=>{n.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()})),l()}})),i("virtualUpdate",(()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame((()=>{u&&n.slides&&n.slides.length&&(r(),u=!1)})))}))}t(e.exports,"default",(function(){return i}))})),s.register("lwSOa",(function(e,n){function i(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}t(e.exports,"default",(function(){return i}))})),s.register("5KAGo",(function(e,n){function i({swiper:e,duration:t,transformEl:n,allSlides:i}){const{slides:r,activeIndex:s,$wrapperEl:o}=e;if(e.params.virtualTranslate&&0!==t){let t,a=!1;t=i?n?r.find(n):r:n?r.eq(s).find(n):r.eq(s),t.transitionEnd((()=>{if(a)return;if(!e||e.destroyed)return;a=!0,e.animating=!1;const t=["webkitTransitionEnd","transitionend"];for(let e=0;e<t.length;e+=1)o.trigger(t[e])}))}}t(e.exports,"default",(function(){return i}))})),s.register("zm2LU",(function(e,t){s("3ORMQ"),s("lPi1I")})),s.register("86nzb",(function(e,t){s("3ORMQ"),s("50QNq"),s("lPi1I"),s("lwSOa"),s("5KAGo")})),s.register("50QNq",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("3ORMQ");function r(e,t,n){const r="swiper-slide-shadow"+(n?`-${n}`:""),s=e.transformEl?t.find(e.transformEl):t;let o=s.children(`.${r}`);return o.length||(o=(0,i.default)(`<div class="swiper-slide-shadow${n?`-${n}`:""}"></div>`),s.append(o)),o}})),s.register("ajPpq",(function(e,t){s("50QNq"),s("lPi1I"),s("lwSOa")})),s.register("5T183",(function(e,t){s("50QNq"),s("lPi1I"),s("lwSOa"),s("5KAGo")})),s.register("1w9pC",(function(e,t){s("50QNq"),s("lPi1I"),s("lwSOa"),s("5KAGo")})),s.register("k8BWR",(function(e,t){var n=s("9B8F0"),i=s("krGWQ");let r,o;function a(){document.querySelector(".basicLightbox--iframe").insertAdjacentHTML("afterbegin",c),o=document.querySelector('[data-action="close-lightbox"]'),o.addEventListener("click",l)}function l(){r.close(),o.removeEventListener("click",l)}i.refs.galleryList.addEventListener("click",(async function(e){if(e.target===e.currentTarget)return;if(e.target.closest(".gallery-item-trailer")){!function(e){if("#ua"===window.location.hash){fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=53f2c47317a563cd2628c68ceb6a6673&language=uk-UA`).then((e=>e.json())).then((e=>{const t=e.results[0].key;r=n.create(`\n  <iframe width="560" height="315" src='https://www.youtube.com/embed/${t}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n`),r.show(),a()}))}else{fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=53f2c47317a563cd2628c68ceb6a6673&language=en-Us`).then((e=>e.json())).then((e=>{const t=e.results[0].key;r=n.create(`\n  <iframe width="560" height="315" src='https://www.youtube.com/embed/${t}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n`),r.show(),a()}))}}(e.target.closest(".photo-card").dataset.id)}}));const c='<button\n        type="button"\n        class="lightbox__button"\n        data-action="close-lightbox"\n        ></button>\n    '})),s.register("9B8F0",(function(e,t){e.exports=function e(t,n,i){function r(o,a){if(!n[o]){if(!t[o]){var l=void 0;if(!a&&l)return l(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[o]={exports:{}};t[o][0].call(u.exports,(function(e){return r(t[o][1][e]||e)}),u,u.exports,e,t,n,i)}return n[o].exports}for(var s=void 0,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},s=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=s,n.create=function(e,t){var n=function(e,t){var n=i('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),s=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return s.appendChild(e)}));var o=r(s,"IMG"),a=r(s,"VIDEO"),l=r(s,"IFRAME");return!0===o&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(i(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),o=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===s(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&o()}));var a={element:function(){return n},visible:function(){return s(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:o};return a}},{}]},{},[1])(1)}));
//# sourceMappingURL=library.e9d0904a.js.map
