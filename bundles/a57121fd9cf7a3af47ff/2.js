(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{441:function(t,e,i){"use strict";i.r(e),i.d(e,"DefaultOptions",(function(){return c})),i.d(e,"default",(function(){return h}));var n=i(6),o=i.n(n),s=i(125);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){o()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}const c={maxCount:120,gravity:3.2,maxDrift:5,maxRot:5};class h{constructor(t){var e=this;o()(this,"options",void 0),o()(this,"context",null),o()(this,"particles",[]),o()(this,"lastAnimationTime",void 0),o()(this,"colours",["rgba(194,210,224,1)","rgba(235,214,219,1)","rgba(255,211,45,1)","rgba(255,190,174,1)","rgba(255,173,226,1)","rgba(242,114,171,1)","rgba(228,55,116,1)","rgba(255,86,130,1)","rgba(244,36,57,1)","rgba(247,126,157,1)","rgba(243,142,140,1)","rgba(252,116,183,1)"]),o()(this,"isRunning",void 0),o()(this,"start",(async function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;if(!t)return;e.context=t.getContext("2d"),e.particles=[];const n=e.options.maxCount;for(;e.particles.length<n;)e.particles.push(e.resetParticle({},t.width,t.height));e.isRunning=!0,requestAnimationFrame(e.renderLoop),i&&window.setTimeout(e.stop,i)})),o()(this,"stop",async()=>{this.isRunning=!1}),o()(this,"resetParticle",(t,e,i)=>(t.color=this.colours[Math.random()*this.colours.length|0],t.x=Math.random()*e,t.y=Math.random()*i+i,t.xCol=t.x,t.scale=.07*Math.random()+.04,t.maximumDrift=Math.random()*this.options.maxDrift+3.5,t.maximumRot=Math.random()*this.options.maxRot+3.5,t.gravity=this.options.gravity+4.8*Math.random(),t)),o()(this,"renderLoop",()=>{if(this.context&&this.context.canvas)if(0===this.particles.length)this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);else{(Date.now()-this.lastAnimationTime>=15||!this.lastAnimationTime)&&(this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.lastAnimationTime=Date.now(),this.animateAndRenderHearts()),requestAnimationFrame(this.renderLoop)}}),this.options=a(a({},c),t)}animateAndRenderHearts(){if(this.context&&this.context.canvas)for(const t of Object(s.b)(this.particles)){t.y-=t.gravity;const e=75*t.maximumDrift,i=2*Math.PI;t.x=6*t.maximumDrift*Math.sin(i/e*.7*t.y),t.x+=t.xCol;const n=1/t.scale,o=t.x*n,s=t.y*n;if(this.context.save(),this.context.scale(t.scale,t.scale),this.context.beginPath(),this.context.translate(248+o,215+s),this.context.rotate(.1*t.maximumRot*Math.sin(i/e*t.y*.8)),this.context.translate(-248-o,-215-s),this.context.moveTo(140+o,20+s),this.context.bezierCurveTo(73+o,20+s,20+o,74+s,20+o,140+s),this.context.bezierCurveTo(20+o,275+s,156+o,310+s,248+o,443+s),this.context.bezierCurveTo(336+o,311+s,477+o,270+s,477+o,140+s),this.context.bezierCurveTo(477+o,74+s,423+o,20+s,357+o,20+s),this.context.bezierCurveTo(309+o,20+s,267+o,48+s,248+o,89+s),this.context.bezierCurveTo(229+o,48+s,188+o,20+s,140+o,20+s),this.context.closePath(),this.context.fillStyle=t.color,this.context.fill(),this.context.restore(),t.y<-100){const e=this.particles.indexOf(t);this.particles.splice(e,1)}}}}}}]);
//# sourceMappingURL=2.js.map