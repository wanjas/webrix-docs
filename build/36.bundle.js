(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"4dGD":function(n,e,t){"use strict";t.r(e),t.d(e,"Camera",(function(){return a})),t.d(e,"Light",(function(){return u})),t.d(e,"Pipeline",(function(){return s})),t.d(e,"Shadows",(function(){return p})),t.d(e,"Ground",(function(){return g})),t.d(e,"createScene",(function(){return F})),t.d(e,"Engine",(function(){return P})),t.d(e,"Brick",(function(){return x}));var r=t("/SR9"),o=t("wN8c"),a=function(n){var e=new o.a("Camera",new r.e(10,30,0),n);return e.checkCollisions=!0,e.applyGravity=!0,e.setTarget(new r.e(0,-10,0)),e},i=t("lFBE"),c=t("zZL8"),u=function(n){var e=new i.a("dir02",new r.e(15,-15,15),n);return new c.a("pointLight",new r.e(-20,100,0),n).intensity=.1,e},f=t("Z6LB"),l=t("skBc"),s=(t("9p5v"),function(n){var e=new f.a("default",!0,n,[n.activeCamera]);return e.depthOfFieldBlurLevel=l.b.Medium,e.depthOfFieldEnabled=!0,e.depthOfField.focalLength=500,e.depthOfField.fStop=1,e.depthOfField.focusDistance=35e3,e.samples=3,e}),d=t("itUE"),p=function(n,e){var t=new d.a(2048,e);return t.useBlurExponentialShadowMap=!0,t.useKernelBlur=!0,t.blurKernel=2,t},w=t("Xeau"),h=t("kdvT"),v=t("LVN+"),m=t("wAMR"),b=function(n){var e=new h.a("groundMat",n);return e.diffuseColor=new w.a.FromHexString("#162447"),e.emissiveColor=new w.a.FromHexString("#162447"),e.backFaceCulling=!1,e},g=function(n){var e=new b(n),t=m.a.CreateBox("Ground",1,n);return t.scaling=new r.e(100,1,100),t.position.y=-5,t.checkCollisions=!0,t.material=e,t.receiveShadows=!0,t.physicsImpostor=new v.a(t,v.a.BoxImpostor,{mass:0,friction:.5,restitution:.7},n),t},y=t("tVVT"),O=t("R0D4"),M=t("s26k"),C=t("iD+g"),k=t.p+"3f7cbea806eb0eef76a575b6004a337e.obj",B=(t("xnlA"),t("e/hQ"),t("PjzG"),t("Ndcg"),function(n){var e=new y.a(n);return e.clearColor=w.a.Black(),e.enablePhysics(null,new C.a(void 0,M)),e}),F=function(n){var e=new B(n),r=(new a(e),new u(e)),o=new p(e,r),i=(new s(e),new g(e),Date.now()),c=[],f=location.pathname.match(t.p)?k.replace(t.p,""):k;return O.a.ImportMesh("",f,"",e,(function(n){n.forEach((function(n){return n.setEnabled(!1)})),e.onBeforeRenderObservable.add((function(){if(Date.now()-i>500){i=Date.now();var t=new x(e,n[Math.floor(Math.random()*n.length)]);o.addShadowCaster(t),c.push(t),c.length>30&&c.shift().dispose()}}))})),e},S=t("qUIE"),P=function(n){var e=new S.a(n,!0),t=F(e);return e.runRenderLoop((function(){t.render()})),e},j=function(n){var e=new h.a("brick",n),t=new w.a.FromHexString(["#e43f5a","#162447"][Math.floor(2*Math.random())]);return e.diffuseColor=t,e.specularColor=t,e.backFaceCulling=!1,e},x=function(n,e){var t=new j(n),o=e.clone("brick");return o.position=new r.e(5*Math.random()-2,23,10*Math.random()-5),o.rotation.y=Math.PI/(2*Math.random()),o.rotation.x=Math.PI/Math.random(),o.physicsImpostor=new v.a(o,v.a.BoxImpostor,{mass:20,friction:.4,restitution:.05},n),o.material=t,o}},mrSG:function(n,e,t){"use strict";t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return i}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)};function o(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var a=function(){return(a=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)};function i(n,e,t,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(n,e,t,r);else for(var c=n.length-1;c>=0;c--)(o=n[c])&&(i=(a<3?o(i):a>3?o(e,t,i):o(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i}}}]);