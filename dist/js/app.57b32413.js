(function(){"use strict";var n={1787:function(n,t,e){var r=e(9242),o=e(3396),i=e(7139);const u=(0,o._)("h1",null,"Weather App",-1);function a(n,t,e,r,a,c){return(0,o.wg)(),(0,o.iD)(o.HY,null,[u,(0,o._)("p",null,"Your location "+(0,i.zw)(a.location),1)],64)}var c=e(6943),f={name:"App",data(){return{location:""}},mounted(){c.Z.get("https://api.geoapify.com/v1/ipinfo?apiKey=9a6caf62bd3540a882537eb4477d9381").then((n=>this.location=n))}},l=e(89);const p=(0,l.Z)(f,[["render",a]]);var s=p,d=e(6423);const h=(0,r.ri)(s);h.use(d.Z,c.Z),h.mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return n[r](i,i.exports,e),i.loaded=!0,i.exports}e.m=n,function(){e.amdO={}}(),function(){var n=[];e.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],i=n[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(l--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.hmd=function(n){return n=Object.create(n),n.children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n}}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(t){return 0!==n[t]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(c)var l=c(e)}for(t&&t(r);f<u.length;f++)i=u[f],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(l)},r=self["webpackChunkweather_app"]=self["webpackChunkweather_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(1787)}));r=e.O(r)})();
//# sourceMappingURL=app.57b32413.js.map