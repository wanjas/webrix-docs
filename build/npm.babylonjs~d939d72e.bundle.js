(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"4HJg":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("uyO6"),n=r("WHS4"),i=function(){function e(){}return e.Instantiate=function(e){if(this.RegisteredExternalClasses&&this.RegisteredExternalClasses[e])return this.RegisteredExternalClasses[e];var t=n.a.GetClass(e);if(t)return t;o.a.Warn(e+" not found, you may have missed an import.");for(var r=e.split("."),i=window||this,a=0,s=r.length;a<s;a++)i=i[r[a]];return"function"!=typeof i?null:i},e.RegisteredExternalClasses={},e}()},Bfey:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var o=r("mrSG"),n=function(){function e(t){this.length=0,this.data=new Array(t),this._id=e._GlobalId++}return e.prototype.push=function(e){this.data[this.length++]=e,this.length>this.data.length&&(this.data.length*=2)},e.prototype.forEach=function(e){for(var t=0;t<this.length;t++)e(this.data[t])},e.prototype.sort=function(e){this.data.sort(e)},e.prototype.reset=function(){this.length=0},e.prototype.dispose=function(){this.reset(),this.data&&(this.data.length=0,this.data=[])},e.prototype.concat=function(e){if(0!==e.length){this.length+e.length>this.data.length&&(this.data.length=2*(this.length+e.length));for(var t=0;t<e.length;t++)this.data[this.length++]=(e.data||e)[t]}},e.prototype.indexOf=function(e){var t=this.data.indexOf(e);return t>=this.length?-1:t},e.prototype.contains=function(e){return-1!==this.indexOf(e)},e._GlobalId=0,e}(),i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._duplicateId=0,t}return Object(o.c)(t,e),t.prototype.push=function(t){e.prototype.push.call(this,t),t.__smartArrayFlags||(t.__smartArrayFlags={}),t.__smartArrayFlags[this._id]=this._duplicateId},t.prototype.pushNoDuplicate=function(e){return(!e.__smartArrayFlags||e.__smartArrayFlags[this._id]!==this._duplicateId)&&(this.push(e),!0)},t.prototype.reset=function(){e.prototype.reset.call(this),this._duplicateId++},t.prototype.concatWithNoDuplicate=function(e){if(0!==e.length){this.length+e.length>this.data.length&&(this.data.length=2*(this.length+e.length));for(var t=0;t<e.length;t++){var r=(e.data||e)[t];this.pushNoDuplicate(r)}}},t}(n)},Ef72:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("OJ6t"),n=r("WnUc"),i=r("ps+7"),a=(r("ryL8"),function(){function e(e){this.onAfterReductionPerformed=new i.a,this._forceFullscreenViewport=!0,this._activated=!1,this._camera=e,this._postProcessManager=new n.a(e.getScene())}return Object.defineProperty(e.prototype,"sourceTexture",{get:function(){return this._sourceTexture},enumerable:!0,configurable:!0}),e.prototype.setSourceTexture=function(e,t,r,n){var i=this;if(void 0===r&&(r=2),void 0===n&&(n=!0),e!==this._sourceTexture){this.dispose(!1),this._sourceTexture=e,this._reductionSteps=[],this._forceFullscreenViewport=n;var a=this._camera.getScene(),s=new o.a("Initial reduction phase","minmaxRedux",["texSize"],["sourceTexture"],1,null,1,a.getEngine(),!1,"#define INITIAL"+(t?"\n#define DEPTH_REDUX":""),r,void 0,void 0,void 0,7);s.autoClear=!1,s.forceFullscreenViewport=n;var u=this._sourceTexture.getRenderWidth(),c=this._sourceTexture.getRenderHeight();s.onApply=function(e,t){return function(r){r.setTexture("sourceTexture",i._sourceTexture),r.setFloatArray2("texSize",new Float32Array([e,t]))}}(u,c),this._reductionSteps.push(s);for(var l=1;u>1||c>1;){u=Math.max(Math.round(u/2),1),c=Math.max(Math.round(c/2),1);var f=new o.a("Reduction phase "+l,"minmaxRedux",["texSize"],null,{width:u,height:c},null,1,a.getEngine(),!1,"#define "+(1==u&&1==c?"LAST":1==u||1==c?"ONEBEFORELAST":"MAIN"),r,void 0,void 0,void 0,7);if(f.autoClear=!1,f.forceFullscreenViewport=n,f.onApply=function(e,t){return function(r){1==e||1==t?r.setIntArray2("texSize",new Int32Array([e,t])):r.setFloatArray2("texSize",new Float32Array([e,t]))}}(u,c),this._reductionSteps.push(f),l++,1==u&&1==c){f.onAfterRenderObservable.add(function(e,t,r){var o=new Float32Array(4*e*t),n={min:0,max:0};return function(){a.getEngine()._readTexturePixels(r.inputTexture,e,t,-1,0,o),n.min=o[0],n.max=o[1],i.onAfterReductionPerformed.notifyObservers(n)}}(u,c,f))}}}},Object.defineProperty(e.prototype,"refreshRate",{get:function(){return this._sourceTexture?this._sourceTexture.refreshRate:-1},set:function(e){this._sourceTexture&&(this._sourceTexture.refreshRate=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activated",{get:function(){return this._activated},enumerable:!0,configurable:!0}),e.prototype.activate=function(){var e=this;!this._onAfterUnbindObserver&&this._sourceTexture&&(this._onAfterUnbindObserver=this._sourceTexture.onAfterUnbindObservable.add((function(){e._reductionSteps[0].activate(e._camera),e._postProcessManager.directRender(e._reductionSteps,e._reductionSteps[0].inputTexture,e._forceFullscreenViewport),e._camera.getScene().getEngine().unBindFramebuffer(e._reductionSteps[0].inputTexture,!1)})),this._activated=!0)},e.prototype.deactivate=function(){this._onAfterUnbindObserver&&this._sourceTexture&&(this._sourceTexture.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=null,this._activated=!1)},e.prototype.dispose=function(e){if(void 0===e&&(e=!0),e&&this.onAfterReductionPerformed.clear(),this.deactivate(),this._reductionSteps){for(var t=0;t<this._reductionSteps.length;++t)this._reductionSteps[t].dispose();this._reductionSteps=null}this._postProcessManager&&e&&this._postProcessManager.dispose(),this._sourceTexture=null},e}())},J2vy:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("h87I"),n=function(){function e(){}return Object.defineProperty(e,"Now",{get:function(){return o.a.IsWindowObjectExist()&&window.performance&&window.performance.now?window.performance.now():Date.now()},enumerable:!0,configurable:!0}),e}()},SNd0:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var o=function(){function e(){}return e.ExponentialBackoff=function(e,t){return void 0===e&&(e=3),void 0===t&&(t=500),function(r,o,n){return 0!==o.status||n>=e||-1!==r.indexOf("file:")?-1:Math.pow(2,n)*t}},e}()},"W+I9":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("J2vy"),n=function(){function e(e){void 0===e&&(e=30),this._enabled=!0,this._rollingFrameTime=new i(e)}return e.prototype.sampleFrame=function(e){if(void 0===e&&(e=o.a.Now),this._enabled){if(null!=this._lastFrameTimeMs){var t=e-this._lastFrameTimeMs;this._rollingFrameTime.add(t)}this._lastFrameTimeMs=e}},Object.defineProperty(e.prototype,"averageFrameTime",{get:function(){return this._rollingFrameTime.average},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"averageFrameTimeVariance",{get:function(){return this._rollingFrameTime.variance},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"instantaneousFrameTime",{get:function(){return this._rollingFrameTime.history(0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"averageFPS",{get:function(){return 1e3/this._rollingFrameTime.average},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"instantaneousFPS",{get:function(){var e=this._rollingFrameTime.history(0);return 0===e?0:1e3/e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSaturated",{get:function(){return this._rollingFrameTime.isSaturated()},enumerable:!0,configurable:!0}),e.prototype.enable=function(){this._enabled=!0},e.prototype.disable=function(){this._enabled=!1,this._lastFrameTimeMs=null},Object.defineProperty(e.prototype,"isEnabled",{get:function(){return this._enabled},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this._lastFrameTimeMs=null,this._rollingFrameTime.reset()},e}(),i=function(){function e(e){this._samples=new Array(e),this.reset()}return e.prototype.add=function(e){var t;if(this.isSaturated()){var r=this._samples[this._pos];t=r-this.average,this.average-=t/(this._sampleCount-1),this._m2-=t*(r-this.average)}else this._sampleCount++;t=e-this.average,this.average+=t/this._sampleCount,this._m2+=t*(e-this.average),this.variance=this._m2/(this._sampleCount-1),this._samples[this._pos]=e,this._pos++,this._pos%=this._samples.length},e.prototype.history=function(e){if(e>=this._sampleCount||e>=this._samples.length)return 0;var t=this._wrapPosition(this._pos-1);return this._samples[this._wrapPosition(t-e)]},e.prototype.isSaturated=function(){return this._sampleCount>=this._samples.length},e.prototype.reset=function(){this.average=0,this.variance=0,this._sampleCount=0,this._pos=0,this._m2=0},e.prototype._wrapPosition=function(e){var t=this._samples.length;return(e%t+t)%t},e}()},WHS4:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var o=function(){function e(){}return e.GetClass=function(e){return this.RegisteredTypes&&this.RegisteredTypes[e]?this.RegisteredTypes[e]:null},e.RegisteredTypes={},e}()},X2Ve:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var o=function(){function e(){}return e.EndsWith=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},e.StartsWith=function(e,t){return 0===e.indexOf(t)},e.Decode=function(e){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(e);for(var t="",r=0;r<e.byteLength;r++)t+=String.fromCharCode(e[r]);return t},e.EncodeArrayBufferToBase64=function(e){for(var t,r,o,n,i,a,s,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="",l=0,f=ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e);l<f.length;)n=(t=f[l++])>>2,i=(3&t)<<4|(r=l<f.length?f[l++]:Number.NaN)>>4,a=(15&r)<<2|(o=l<f.length?f[l++]:Number.NaN)>>6,s=63&o,isNaN(r)?a=s=64:isNaN(o)&&(s=64),c+=u.charAt(n)+u.charAt(i)+u.charAt(a)+u.charAt(s);return c},e}()},YKqZ:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return K}));var o,n=r("ps+7"),i=r("h87I"),a=r("uyO6"),s=r("Dc3z"),u=r("J2vy"),c=r("n5HA"),l=r("Ksm9"),f=r("e2Mr"),h=r("TFEU");!function(e){e[e.Pending=0]="Pending",e[e.Fulfilled=1]="Fulfilled",e[e.Rejected=2]="Rejected"}(o||(o={}));var d=function(){this.count=0,this.target=0,this.results=[]},v=function(){function e(e){var t=this;if(this._state=o.Pending,this._children=new Array,this._rejectWasConsumed=!1,e)try{e((function(e){t._resolve(e)}),(function(e){t._reject(e)}))}catch(e){this._reject(e)}}return Object.defineProperty(e.prototype,"_result",{get:function(){return this._resultValue},set:function(e){this._resultValue=e,this._parent&&void 0===this._parent._result&&(this._parent._result=e)},enumerable:!0,configurable:!0}),e.prototype.catch=function(e){return this.then(void 0,e)},e.prototype.then=function(t,r){var n=this,i=new e;return i._onFulfilled=t,i._onRejected=r,this._children.push(i),i._parent=this,this._state!==o.Pending&&setTimeout((function(){if(n._state===o.Fulfilled||n._rejectWasConsumed){var e=i._resolve(n._result);if(null!=e)if(void 0!==e._state){var t=e;i._children.push(t),t._parent=i,i=t}else i._result=e}else i._reject(n._reason)})),i},e.prototype._moveChildren=function(e){var t,r=this;if((t=this._children).push.apply(t,e.splice(0,e.length)),this._children.forEach((function(e){e._parent=r})),this._state===o.Fulfilled)for(var n=0,i=this._children;n<i.length;n++){i[n]._resolve(this._result)}else if(this._state===o.Rejected)for(var a=0,s=this._children;a<s.length;a++){s[a]._reject(this._reason)}},e.prototype._resolve=function(e){try{this._state=o.Fulfilled;var t=null;if(this._onFulfilled&&(t=this._onFulfilled(e)),null!=t)if(void 0!==t._state){var r=t;r._parent=this,r._moveChildren(this._children),e=r._result}else e=t;this._result=e;for(var n=0,i=this._children;n<i.length;n++){i[n]._resolve(e)}this._children.length=0,delete this._onFulfilled,delete this._onRejected}catch(e){this._reject(e,!0)}},e.prototype._reject=function(e,t){if(void 0===t&&(t=!1),this._state=o.Rejected,this._reason=e,this._onRejected&&!t)try{this._onRejected(e),this._rejectWasConsumed=!0}catch(t){e=t}for(var r=0,n=this._children;r<n.length;r++){var i=n[r];this._rejectWasConsumed?i._resolve(null):i._reject(e)}this._children.length=0,delete this._onFulfilled,delete this._onRejected},e.resolve=function(t){var r=new e;return r._resolve(t),r},e._RegisterForFulfillment=function(e,t,r){e.then((function(e){return t.results[r]=e,t.count++,t.count===t.target&&t.rootPromise._resolve(t.results),null}),(function(e){t.rootPromise._state!==o.Rejected&&t.rootPromise._reject(e)}))},e.all=function(t){var r=new e,o=new d;if(o.target=t.length,o.rootPromise=r,t.length)for(var n=0;n<t.length;n++)e._RegisterForFulfillment(t[n],o,n);else r._resolve([]);return r},e.race=function(t){var r=new e;if(t.length)for(var o=0,n=t;o<n.length;o++){n[o].then((function(e){return r&&(r._resolve(e),r=null),null}),(function(e){r&&(r._reject(e),r=null)}))}return r},e}(),g=function(){function e(){}return e.Apply=function(e){(void 0===e&&(e=!1),e||"undefined"==typeof Promise)&&(window.Promise=v)},e}(),p=r("vYHP"),_=r("4HJg"),m=r("FQ8M"),b=function(){function e(){}return Object.defineProperty(e,"BaseUrl",{get:function(){return h.a.BaseUrl},set:function(e){h.a.BaseUrl=e},enumerable:!0,configurable:!0}),Object.defineProperty(e,"DefaultRetryStrategy",{get:function(){return h.a.DefaultRetryStrategy},set:function(e){h.a.DefaultRetryStrategy=e},enumerable:!0,configurable:!0}),Object.defineProperty(e,"UseFallbackTexture",{get:function(){return f.a.UseFallbackTexture},set:function(e){f.a.UseFallbackTexture=e},enumerable:!0,configurable:!0}),Object.defineProperty(e,"RegisteredExternalClasses",{get:function(){return _.a.RegisteredExternalClasses},set:function(e){_.a.RegisteredExternalClasses=e},enumerable:!0,configurable:!0}),Object.defineProperty(e,"fallbackTexture",{get:function(){return f.a.FallbackTexture},set:function(e){f.a.FallbackTexture=e},enumerable:!0,configurable:!0}),e.FetchToRef=function(e,t,r,o,n,i){var a=4*((Math.abs(e)*r%r|0)+(Math.abs(t)*o%o|0)*r);i.r=n[a]/255,i.g=n[a+1]/255,i.b=n[a+2]/255,i.a=n[a+3]/255},e.Mix=function(e,t,r){return e*(1-r)+t*r},e.Instantiate=function(e){return _.a.Instantiate(e)},e.Slice=function(e,t,r){return e.slice?e.slice(t,r):Array.prototype.slice.call(e,t,r)},e.SetImmediate=function(e){p.a.SetImmediate(e)},e.IsExponentOfTwo=function(e){var t=1;do{t*=2}while(t<e);return t===e},e.FloatRound=function(t){return Math.fround?Math.fround(t):e._tmpFloatArray[0]=t},e.GetFilename=function(e){var t=e.lastIndexOf("/");return t<0?e:e.substring(t+1)},e.GetFolderPath=function(e,t){void 0===t&&(t=!1);var r=e.lastIndexOf("/");return r<0?t?e:"":e.substring(0,r+1)},e.ToDegrees=function(e){return 180*e/Math.PI},e.ToRadians=function(e){return e*Math.PI/180},e.MakeArray=function(e,t){return!0===t||void 0!==e&&null!=e?Array.isArray(e)?e:[e]:null},e.GetPointerPrefix=function(){var e="pointer";return i.a.IsWindowObjectExist()&&!window.PointerEvent&&i.a.IsNavigatorAvailable()&&!navigator.pointerEnabled&&(e="mouse"),e},e.SetCorsBehavior=function(e,t){h.a.SetCorsBehavior(e,t)},e.CleanUrl=function(e){return e=e.replace(/#/gm,"%23")},Object.defineProperty(e,"PreprocessUrl",{get:function(){return h.a.PreprocessUrl},set:function(e){h.a.PreprocessUrl=e},enumerable:!0,configurable:!0}),e.LoadImage=function(e,t,r,o,n){return h.a.LoadImage(e,t,r,o,n)},e.LoadFile=function(e,t,r,o,n,i){return h.a.LoadFile(e,t,r,o,n,i)},e.LoadFileAsync=function(e,t){return void 0===t&&(t=!0),new Promise((function(r,o){h.a.LoadFile(e,(function(e){r(e)}),void 0,void 0,t,(function(e,t){o(t)}))}))},e.LoadScript=function(e,t,r,o){if(i.a.IsWindowObjectExist()){var n=document.getElementsByTagName("head")[0],a=document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("src",e),o&&(a.id=o),a.onload=function(){t&&t()},a.onerror=function(t){r&&r("Unable to load script '"+e+"'",t)},n.appendChild(a)}},e.LoadScriptAsync=function(e,t){var r=this;return new Promise((function(t,o){r.LoadScript(e,(function(){t()}),(function(e,t){o(t)}))}))},e.ReadFileAsDataURL=function(e,t,r){var o=new FileReader,i={onCompleteObservable:new n.a,abort:function(){return o.abort()}};return o.onloadend=function(e){i.onCompleteObservable.notifyObservers(i)},o.onload=function(e){t(e.target.result)},o.onprogress=r,o.readAsDataURL(e),i},e.ReadFile=function(e,t,r,o,n){return h.a.ReadFile(e,t,r,o,n)},e.FileAsURL=function(e){var t=new Blob([e]);return(window.URL||window.webkitURL).createObjectURL(t)},e.Format=function(e,t){return void 0===t&&(t=2),e.toFixed(t)},e.DeepCopy=function(e,t,r,o){s.a.DeepCopy(e,t,r,o)},e.IsEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},e.RegisterTopRootEvents=function(e,t){for(var r=0;r<t.length;r++){var o=t[r];e.addEventListener(o.name,o.handler,!1);try{window.parent&&window.parent.addEventListener(o.name,o.handler,!1)}catch(e){}}},e.UnregisterTopRootEvents=function(e,t){for(var r=0;r<t.length;r++){var o=t[r];e.removeEventListener(o.name,o.handler);try{e.parent&&e.parent.removeEventListener(o.name,o.handler)}catch(e){}}},e.DumpFramebuffer=function(t,r,o,n,i,a){void 0===i&&(i="image/png");for(var s=4*t,u=r/2,c=o.readPixels(0,0,t,r),l=0;l<u;l++)for(var f=0;f<s;f++){var h=f+l*s,d=f+(r-l-1)*s,v=c[h];c[h]=c[d],c[d]=v}e._ScreenshotCanvas||(e._ScreenshotCanvas=document.createElement("canvas")),e._ScreenshotCanvas.width=t,e._ScreenshotCanvas.height=r;var g=e._ScreenshotCanvas.getContext("2d");if(g){var p=g.createImageData(t,r);p.data.set(c),g.putImageData(p,0,0),e.EncodeScreenshotCanvasData(n,i,a)}},e.ToBlob=function(e,t,r){void 0===r&&(r="image/png"),e.toBlob||(e.toBlob=function(e,t,r){var o=this;setTimeout((function(){for(var n=atob(o.toDataURL(t,r).split(",")[1]),i=n.length,a=new Uint8Array(i),s=0;s<i;s++)a[s]=n.charCodeAt(s);e(new Blob([a]))}))}),e.toBlob((function(e){t(e)}),r)},e.EncodeScreenshotCanvasData=function(t,r,o){(void 0===r&&(r="image/png"),t)?t(e._ScreenshotCanvas.toDataURL(r)):this.ToBlob(e._ScreenshotCanvas,(function(t){if("download"in document.createElement("a")){if(!o){var r=new Date,n=(r.getFullYear()+"-"+(r.getMonth()+1)).slice(2)+"-"+r.getDate()+"_"+r.getHours()+"-"+("0"+r.getMinutes()).slice(-2);o="screenshot_"+n+".png"}e.Download(t,o)}else{var i=URL.createObjectURL(t),a=window.open("");if(!a)return;var s=a.document.createElement("img");s.onload=function(){URL.revokeObjectURL(i)},s.src=i,a.document.body.appendChild(s)}}),r)},e.Download=function(e,t){if(navigator&&navigator.msSaveBlob)navigator.msSaveBlob(e,t);else{var r=window.URL.createObjectURL(e),o=document.createElement("a");document.body.appendChild(o),o.style.display="none",o.href=r,o.download=t,o.addEventListener("click",(function(){o.parentElement&&o.parentElement.removeChild(o)})),o.click(),window.URL.revokeObjectURL(r)}},e.CreateScreenshot=function(e,t,r,o,n){throw void 0===n&&(n="image/png"),c.a.WarnImport("ScreenshotTools")},e.CreateScreenshotAsync=function(e,t,r,o){throw void 0===o&&(o="image/png"),c.a.WarnImport("ScreenshotTools")},e.CreateScreenshotUsingRenderTarget=function(e,t,r,o,n,i,a,s){throw void 0===n&&(n="image/png"),void 0===i&&(i=1),void 0===a&&(a=!1),c.a.WarnImport("ScreenshotTools")},e.CreateScreenshotUsingRenderTargetAsync=function(e,t,r,o,n,i,a){throw void 0===o&&(o="image/png"),void 0===n&&(n=1),void 0===i&&(i=!1),c.a.WarnImport("ScreenshotTools")},e.RandomId=function(){return m.a.RandomId()},e.IsBase64=function(e){return!(e.length<5)&&"data:"===e.substr(0,5)},e.DecodeBase64=function(e){for(var t=atob(e.split(",")[1]),r=t.length,o=new Uint8Array(new ArrayBuffer(r)),n=0;n<r;n++)o[n]=t.charCodeAt(n);return o.buffer},e.GetAbsoluteUrl=function(e){var t=document.createElement("a");return t.href=e,t.href},Object.defineProperty(e,"errorsCount",{get:function(){return a.a.errorsCount},enumerable:!0,configurable:!0}),e.Log=function(e){a.a.Log(e)},e.Warn=function(e){a.a.Warn(e)},e.Error=function(e){a.a.Error(e)},Object.defineProperty(e,"LogCache",{get:function(){return a.a.LogCache},enumerable:!0,configurable:!0}),e.ClearLogCache=function(){a.a.ClearLogCache()},Object.defineProperty(e,"LogLevels",{set:function(e){a.a.LogLevels=e},enumerable:!0,configurable:!0}),Object.defineProperty(e,"PerformanceLogLevel",{set:function(t){return(t&e.PerformanceUserMarkLogLevel)===e.PerformanceUserMarkLogLevel?(e.StartPerformanceCounter=e._StartUserMark,void(e.EndPerformanceCounter=e._EndUserMark)):(t&e.PerformanceConsoleLogLevel)===e.PerformanceConsoleLogLevel?(e.StartPerformanceCounter=e._StartPerformanceConsole,void(e.EndPerformanceCounter=e._EndPerformanceConsole)):(e.StartPerformanceCounter=e._StartPerformanceCounterDisabled,void(e.EndPerformanceCounter=e._EndPerformanceCounterDisabled))},enumerable:!0,configurable:!0}),e._StartPerformanceCounterDisabled=function(e,t){},e._EndPerformanceCounterDisabled=function(e,t){},e._StartUserMark=function(t,r){if(void 0===r&&(r=!0),!e._performance){if(!i.a.IsWindowObjectExist())return;e._performance=window.performance}r&&e._performance.mark&&e._performance.mark(t+"-Begin")},e._EndUserMark=function(t,r){void 0===r&&(r=!0),r&&e._performance.mark&&(e._performance.mark(t+"-End"),e._performance.measure(t,t+"-Begin",t+"-End"))},e._StartPerformanceConsole=function(t,r){void 0===r&&(r=!0),r&&(e._StartUserMark(t,r),console.time&&console.time(t))},e._EndPerformanceConsole=function(t,r){void 0===r&&(r=!0),r&&(e._EndUserMark(t,r),console.timeEnd(t))},Object.defineProperty(e,"Now",{get:function(){return u.a.Now},enumerable:!0,configurable:!0}),e.GetClassName=function(e,t){void 0===t&&(t=!1);var r=null;if(!t&&e.getClassName)r=e.getClassName();else{if(e instanceof Object)r=(t?e:Object.getPrototypeOf(e)).constructor.__bjsclassName__;r||(r=typeof e)}return r},e.First=function(e,t){for(var r=0,o=e;r<o.length;r++){var n=o[r];if(t(n))return n}return null},e.getFullClassName=function(e,t){void 0===t&&(t=!1);var r=null,o=null;if(!t&&e.getClassName)r=e.getClassName();else{if(e instanceof Object){var n=t?e:Object.getPrototypeOf(e);r=n.constructor.__bjsclassName__,o=n.constructor.__bjsmoduleName__}r||(r=typeof e)}return r?(null!=o?o+".":"")+r:null},e.DelayAsync=function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},e.IsSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},e.UseCustomRequestHeaders=!1,e.CustomRequestHeaders=l.a.CustomRequestHeaders,e.CorsBehavior="anonymous",e._tmpFloatArray=new Float32Array(1),e.GetDOMTextContent=i.a.GetDOMTextContent,e.NoneLogLevel=a.a.NoneLogLevel,e.MessageLogLevel=a.a.MessageLogLevel,e.WarningLogLevel=a.a.WarningLogLevel,e.ErrorLogLevel=a.a.ErrorLogLevel,e.AllLogLevel=a.a.AllLogLevel,e.IsWindowObjectExist=i.a.IsWindowObjectExist,e.PerformanceNoneLogLevel=0,e.PerformanceUserMarkLogLevel=1,e.PerformanceConsoleLogLevel=2,e.StartPerformanceCounter=e._StartPerformanceCounterDisabled,e.EndPerformanceCounter=e._EndPerformanceCounterDisabled,e}();var K=function(){function e(e,t,r,o){void 0===o&&(o=0),this.iterations=e,this.index=o-1,this._done=!1,this._fn=t,this._successCallback=r}return e.prototype.executeNext=function(){this._done||(this.index+1<this.iterations?(++this.index,this._fn(this)):this.breakLoop())},e.prototype.breakLoop=function(){this._done=!0,this._successCallback()},e.Run=function(t,r,o,n){void 0===n&&(n=0);var i=new e(t,r,o,n);return i.executeNext(),i},e.SyncAsyncForLoop=function(t,r,o,n,i,a){return void 0===a&&(a=0),e.Run(Math.ceil(t/r),(function(e){i&&i()?e.breakLoop():setTimeout((function(){for(var n=0;n<r;++n){var a=e.index*r+n;if(a>=t)break;if(o(a),i&&i()){e.breakLoop();break}}e.executeNext()}),a)}),n)},e}();f.a.FallbackTexture="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z",g.Apply()},cSa5:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("X8br"),n=function(){function e(){}return e.EnableFor=function(t){t._tags=t._tags||{},t.hasTags=function(){return e.HasTags(t)},t.addTags=function(r){return e.AddTagsTo(t,r)},t.removeTags=function(r){return e.RemoveTagsFrom(t,r)},t.matchesTagsQuery=function(r){return e.MatchesQuery(t,r)}},e.DisableFor=function(e){delete e._tags,delete e.hasTags,delete e.addTags,delete e.removeTags,delete e.matchesTagsQuery},e.HasTags=function(e){if(!e._tags)return!1;var t=e._tags;for(var r in t)if(t.hasOwnProperty(r))return!0;return!1},e.GetTags=function(e,t){if(void 0===t&&(t=!0),!e._tags)return null;if(t){var r=[];for(var o in e._tags)e._tags.hasOwnProperty(o)&&!0===e._tags[o]&&r.push(o);return r.join(" ")}return e._tags},e.AddTagsTo=function(t,r){r&&("string"==typeof r&&r.split(" ").forEach((function(r,o,n){e._AddTagTo(t,r)})))},e._AddTagTo=function(t,r){""!==(r=r.trim())&&"true"!==r&&"false"!==r&&(r.match(/[\s]/)||r.match(/^([!]|([|]|[&]){2})/)||(e.EnableFor(t),t._tags[r]=!0))},e.RemoveTagsFrom=function(t,r){if(e.HasTags(t)){var o=r.split(" ");for(var n in o)e._RemoveTagFrom(t,o[n])}},e._RemoveTagFrom=function(e,t){delete e._tags[t]},e.MatchesQuery=function(t,r){return void 0===r||(""===r?e.HasTags(t):o.a.Eval(r,(function(r){return e.HasTags(t)&&t._tags[r]})))},e}()},"ps+7":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=function(){function e(e,t,r,o){void 0===t&&(t=!1),this.initalize(e,t,r,o)}return e.prototype.initalize=function(e,t,r,o){return void 0===t&&(t=!1),this.mask=e,this.skipNextObservers=t,this.target=r,this.currentTarget=o,this},e}(),n=function(e,t,r){void 0===r&&(r=null),this.callback=e,this.mask=t,this.scope=r,this._willBeUnregistered=!1,this.unregisterOnNextCall=!1},i=(function(){function e(){}e.prototype.dispose=function(){if(this._observers&&this._observables)for(var e=0;e<this._observers.length;e++)this._observables[e].remove(this._observers[e]);this._observers=null,this._observables=null},e.Watch=function(t,r,o,n){void 0===o&&(o=-1),void 0===n&&(n=null);var i=new e;i._observers=new Array,i._observables=t;for(var a=0,s=t;a<s.length;a++){var u=s[a].add(r,o,!1,n);u&&i._observers.push(u)}return i}}(),function(){function e(e){this._observers=new Array,this._eventState=new o(0),e&&(this._onObserverAdded=e)}return Object.defineProperty(e.prototype,"observers",{get:function(){return this._observers},enumerable:!0,configurable:!0}),e.prototype.add=function(e,t,r,o,i){if(void 0===t&&(t=-1),void 0===r&&(r=!1),void 0===o&&(o=null),void 0===i&&(i=!1),!e)return null;var a=new n(e,t,o);return a.unregisterOnNextCall=i,r?this._observers.unshift(a):this._observers.push(a),this._onObserverAdded&&this._onObserverAdded(a),a},e.prototype.addOnce=function(e){return this.add(e,void 0,void 0,void 0,!0)},e.prototype.remove=function(e){return!!e&&(-1!==this._observers.indexOf(e)&&(this._deferUnregister(e),!0))},e.prototype.removeCallback=function(e,t){for(var r=0;r<this._observers.length;r++){var o=this._observers[r];if(!o._willBeUnregistered&&(o.callback===e&&(!t||t===o.scope)))return this._deferUnregister(o),!0}return!1},e.prototype._deferUnregister=function(e){var t=this;e.unregisterOnNextCall=!1,e._willBeUnregistered=!0,setTimeout((function(){t._remove(e)}),0)},e.prototype._remove=function(e){if(!e)return!1;var t=this._observers.indexOf(e);return-1!==t&&(this._observers.splice(t,1),!0)},e.prototype.makeObserverTopPriority=function(e){this._remove(e),this._observers.unshift(e)},e.prototype.makeObserverBottomPriority=function(e){this._remove(e),this._observers.push(e)},e.prototype.notifyObservers=function(e,t,r,o){if(void 0===t&&(t=-1),!this._observers.length)return!0;var n=this._eventState;n.mask=t,n.target=r,n.currentTarget=o,n.skipNextObservers=!1,n.lastReturnValue=e;for(var i=0,a=this._observers;i<a.length;i++){var s=a[i];if(!s._willBeUnregistered&&(s.mask&t&&(s.scope?n.lastReturnValue=s.callback.apply(s.scope,[e,n]):n.lastReturnValue=s.callback(e,n),s.unregisterOnNextCall&&this._deferUnregister(s)),n.skipNextObservers))return!1}return!0},e.prototype.notifyObserversWithPromise=function(e,t,r,o){var n=this;void 0===t&&(t=-1);var i=Promise.resolve(e);if(!this._observers.length)return i;var a=this._eventState;return a.mask=t,a.target=r,a.currentTarget=o,a.skipNextObservers=!1,this._observers.forEach((function(r){a.skipNextObservers||r._willBeUnregistered||r.mask&t&&(i=r.scope?i.then((function(t){return a.lastReturnValue=t,r.callback.apply(r.scope,[e,a])})):i.then((function(t){return a.lastReturnValue=t,r.callback(e,a)})),r.unregisterOnNextCall&&n._deferUnregister(r))})),i.then((function(){return e}))},e.prototype.notifyObserver=function(e,t,r){void 0===r&&(r=-1);var o=this._eventState;o.mask=r,o.skipNextObservers=!1,e.callback(t,o)},e.prototype.hasObservers=function(){return this._observers.length>0},e.prototype.clear=function(){this._observers=new Array,this._onObserverAdded=null},e.prototype.clone=function(){var t=new e;return t._observers=this._observers.slice(0),t},e.prototype.hasSpecificMask=function(e){void 0===e&&(e=-1);for(var t=0,r=this._observers;t<r.length;t++){var o=r[t];if(o.mask&e||o.mask===e)return!0}return!1},e}())},uyO6:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var o=function(){function e(){}return e._AddLogEntry=function(t){e._LogCache=t+e._LogCache,e.OnNewCacheEntry&&e.OnNewCacheEntry(t)},e._FormatMessage=function(e){var t=function(e){return e<10?"0"+e:""+e},r=new Date;return"["+t(r.getHours())+":"+t(r.getMinutes())+":"+t(r.getSeconds())+"]: "+e},e._LogDisabled=function(e){},e._LogEnabled=function(t){var r=e._FormatMessage(t);console.log("BJS - "+r);var o="<div style='color:white'>"+r+"</div><br>";e._AddLogEntry(o)},e._WarnDisabled=function(e){},e._WarnEnabled=function(t){var r=e._FormatMessage(t);console.warn("BJS - "+r);var o="<div style='color:orange'>"+r+"</div><br>";e._AddLogEntry(o)},e._ErrorDisabled=function(e){},e._ErrorEnabled=function(t){e.errorsCount++;var r=e._FormatMessage(t);console.error("BJS - "+r);var o="<div style='color:red'>"+r+"</div><br>";e._AddLogEntry(o)},Object.defineProperty(e,"LogCache",{get:function(){return e._LogCache},enumerable:!0,configurable:!0}),e.ClearLogCache=function(){e._LogCache="",e.errorsCount=0},Object.defineProperty(e,"LogLevels",{set:function(t){(t&e.MessageLogLevel)===e.MessageLogLevel?e.Log=e._LogEnabled:e.Log=e._LogDisabled,(t&e.WarningLogLevel)===e.WarningLogLevel?e.Warn=e._WarnEnabled:e.Warn=e._WarnDisabled,(t&e.ErrorLogLevel)===e.ErrorLogLevel?e.Error=e._ErrorEnabled:e.Error=e._ErrorDisabled},enumerable:!0,configurable:!0}),e.NoneLogLevel=0,e.MessageLogLevel=1,e.WarningLogLevel=2,e.ErrorLogLevel=4,e.AllLogLevel=7,e._LogCache="",e.errorsCount=0,e.Log=e._LogEnabled,e.Warn=e._WarnEnabled,e.Error=e._ErrorEnabled,e}()},vYHP:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("h87I"),n=function(){function e(){}return e.SetImmediate=function(e){o.a.IsWindowObjectExist()&&window.setImmediate?window.setImmediate(e):setTimeout(e,1)},e}()},waC4:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("J2vy"),n=function(){function e(){this._startMonitoringTime=0,this._min=0,this._max=0,this._average=0,this._lastSecAverage=0,this._current=0,this._totalValueCount=0,this._totalAccumulated=0,this._lastSecAccumulated=0,this._lastSecTime=0,this._lastSecValueCount=0}return Object.defineProperty(e.prototype,"min",{get:function(){return this._min},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this._max},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"average",{get:function(){return this._average},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lastSecAverage",{get:function(){return this._lastSecAverage},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"current",{get:function(){return this._current},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"total",{get:function(){return this._totalAccumulated},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"count",{get:function(){return this._totalValueCount},enumerable:!0,configurable:!0}),e.prototype.fetchNewFrame=function(){this._totalValueCount++,this._current=0,this._lastSecValueCount++},e.prototype.addCount=function(t,r){e.Enabled&&(this._current+=t,r&&this._fetchResult())},e.prototype.beginMonitoring=function(){e.Enabled&&(this._startMonitoringTime=o.a.Now)},e.prototype.endMonitoring=function(t){if(void 0===t&&(t=!0),e.Enabled){t&&this.fetchNewFrame();var r=o.a.Now;this._current=r-this._startMonitoringTime,t&&this._fetchResult()}},e.prototype._fetchResult=function(){this._totalAccumulated+=this._current,this._lastSecAccumulated+=this._current,this._min=Math.min(this._min,this._current),this._max=Math.max(this._max,this._current),this._average=this._totalAccumulated/this._totalValueCount;var e=o.a.Now;e-this._lastSecTime>1e3&&(this._lastSecAverage=this._lastSecAccumulated/this._lastSecValueCount,this._lastSecTime=e,this._lastSecAccumulated=0,this._lastSecValueCount=0)},e.Enabled=!0,e}()},ywfU:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var o=function(){function e(){this._count=0,this._data={}}return e.prototype.copyFrom=function(e){var t=this;this.clear(),e.forEach((function(e,r){return t.add(e,r)}))},e.prototype.get=function(e){var t=this._data[e];if(void 0!==t)return t},e.prototype.getOrAddWithFactory=function(e,t){var r=this.get(e);return void 0!==r||(r=t(e))&&this.add(e,r),r},e.prototype.getOrAdd=function(e,t){var r=this.get(e);return void 0!==r?r:(this.add(e,t),t)},e.prototype.contains=function(e){return void 0!==this._data[e]},e.prototype.add=function(e,t){return void 0===this._data[e]&&(this._data[e]=t,++this._count,!0)},e.prototype.set=function(e,t){return void 0!==this._data[e]&&(this._data[e]=t,!0)},e.prototype.getAndRemove=function(e){var t=this.get(e);return void 0!==t?(delete this._data[e],--this._count,t):null},e.prototype.remove=function(e){return!!this.contains(e)&&(delete this._data[e],--this._count,!0)},e.prototype.clear=function(){this._data={},this._count=0},Object.defineProperty(e.prototype,"count",{get:function(){return this._count},enumerable:!0,configurable:!0}),e.prototype.forEach=function(e){for(var t in this._data){e(t,this._data[t])}},e.prototype.first=function(e){for(var t in this._data){var r=e(t,this._data[t]);if(r)return r}return null},e}()}}]);