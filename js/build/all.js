function FastClick(a){var b,c=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=a,!a||!a.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(c,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(c,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(c,arguments)},this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(c,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(c,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(c,arguments)},FastClick.notNeeded(a)||(this.deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(b=a.onclick,a.addEventListener("click",function(a){b(a)},!1),a.onclick=null))}window.matchMedia||(window.matchMedia=function(){var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(){if(window.matchMedia&&window.matchMedia("all").addListener)return!1;var a=window.matchMedia,b=a("only all").matches,c=!1,d=0,e=[],f=function(){clearTimeout(d),d=setTimeout(function(){for(var b=0,c=e.length;c>b;b++){var d=e[b].mql,f=e[b].listeners||[],g=a(d.media).matches;if(g!==d.matches){d.matches=g;for(var h=0,i=f.length;i>h;h++)f[h].call(window,d)}}},30)};window.matchMedia=function(d){var g=a(d),h=[],i=0;return g.addListener=function(a){b&&(c||(c=!0,window.addEventListener("resize",f,!0)),0===i&&(i=e.push({mql:g,listeners:h})),h.push(a))},g.removeListener=function(a){for(var b=0,c=h.length;c>b;b++)h[b]===a&&h.splice(b,1)},g}}(),!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g}),function(a,b){var c,d;if(b.getElementsByClassName)c=b.getElementsByClassName("rwdimage");else{if(!b.querySelectorAll)return;c=b.querySelectorAll(".rwdimage")}if(d=c.length,0!==d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="",t=[],u=0,v=0,w=!!a.enquire,x=function(a){return a.replace(/(^\s*)/,"").replace(/src:\s*/gi,"background-image: ").replace(/ratio\((\d+)\/(\d+)\)/gi,function(a,b,c){return parseInt(b,10)/parseInt(c,10)*100+"%"})};for(u;d>u;u++){e=c[u],e.setAttribute("data-rwdimage-id",u),f='[data-rwdimage-id="'+u+'"] ',g=e.getAttribute("data-rwdimage").split(","),h=g.length,t[u]={},t[u].breakpoints=new Array(h),"img"===e.tagName.toLowerCase()&&(e.src||(e.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEHAAAALAAAAAABAAEAAAICRAEAOw=="),w&&e.setAttribute("data-rwdimage-has-enquire",!0),t[u].isImage=!0),t[u].elem=b.querySelector(f),l="true"===e.getAttribute("data-rwdimage-em")?!0:!1,m=e.getAttribute("data-rwdimage-em-base")?parseInt(e.getAttribute("data-rwdimage-em-base"),10):16,q="";for(var y=0;h>y;y++)i=x(g[y]),t[u].breakpoints[y]={},i.match(/^\(\s*?(min|max)/)?(l&&(i=i.replace(/m(?:in|ax)-(?:width|height):\s*(\d+)px/gi,function(a,b){return a.replace(b,parseInt(b,10)/m).replace("px","em")})),q+="@media "+i.match(/.*?\{/)[0]+f+i.replace(/(\((min|max).*?\)|\s+and\s+)/g,"")+" }\n",t[u].breakpoints[y].mediaquery=i.match(/(.*?)(\{)/)[1]):(q+=f+i+"\n",t[u].breakpoints[y].mediaquery="");j="true"===e.getAttribute("data-rwdimage-retina")?!0:!1,k=e.getAttribute("data-rwdimage-retina-suffix")?e.getAttribute("data-rwdimage-retina-suffix"):"@2x",j&&(q=q.replace(/(^@media\s*?)(\(.*?)\{(.*?\[.*?)(\..*?\))(.*)/gm,"$1$2$3$4$5\n$1$2 and (min--moz-device-pixel-ratio: 1.3), $2 and (-o-min-device-pixel-ratio: 2.6/2), $2 and (-webkit-min-device-pixel-ratio: 1.3), $2 and (min-device-pixel-ratio: 1.3), $2 and (min-resolution: 1.3dppx) {$3"+k+"$4$5").replace(/(^\[.*?)(\..*?\))(.*)/gm,"$1$2$3\n@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6/2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) { $1"+k+"$2$3 }")),n=e.getAttribute("data-rwdimage-fallback"),n&&(o=e.getAttribute("data-rwdimage-fallback-class")?e.getAttribute("data-rwdimage-fallback-class"):"ltie9",q+="."+o+" "+f+x(n)+"\n",p||(p=b.documentElement.className.match(o))),"true"===e.getAttribute("data-rwdimage-lazy-load")&&(q=q.replace(/(\[data-rwdimage-id="\d+"\])/g,".lazy-loaded$1")),s+=q}s=".rwdimage { background-repeat: no-repeat; background-size: contain; height: 0; width: 100%; }\n"+s+'.rwdimage[data-rwdimage-has-enquire="true"] { height: auto; padding-bottom: 0; width: auto; }\n',r=b.createElement("style"),r.type="text/css",r.styleSheet?r.styleSheet.cssText=s:r.appendChild(b.createTextNode(s)),b.getElementsByTagName("head")[0].appendChild(r),a.rwdImageChangeSrc=function(b){if("img"===b.tagName.toLowerCase()){var c=a.getComputedStyle?a.getComputedStyle(b).getPropertyValue("background-image"):b.currentStyle.backgroundImage;c=c.replace(/url\((?:"|')?(.*?)(?:"|')?\)/,"$1"),"none"!==c&&b.src!==c&&(b.src=c)}};var z=function(a,b){t[a].breakpoints[b].mediaquery&&enquire.register(t[a].breakpoints[b].mediaquery,function(){rwdImageChangeSrc(t[a].elem)})};for(v;v<t.length;v++)if(t[v].isImage)if(!p&&w)for(var A=0;A<t[v].breakpoints.length;A++)z(v,A);else rwdImageChangeSrc(t[v].elem)}}(window,document),function(a){function b(a,b){for(var c,d=a.cssRules?a.cssRules:a.media,e=[],f=d.length,g=0;f>g;g++)c=d[g],b(c)&&e.push(c);return e}function c(a){return b(a,function(a){return a.selectorText&&0===a.selectorText.indexOf(".classquery-")?!0:!1})}function d(b){var c=window.location,d=a.createElement("a");return d.href=b,d.hostname===c.hostname&&d.protocol===c.protocol}function e(a){return a.ownerNode?a.ownerNode.constructor===HTMLStyleElement:!1}function f(a){return a.href&&d(a.href)}function g(){var b,c=a.styleSheets,d=c.length,g=0,h=[];for(g;d>g;g++)b=c[g],(f(b)||e(b))&&h.push(b);return h}if(a.querySelectorAll){var h=a.documentElement,i="classquery",j=a.querySelectorAll("[data-"+i+"]"),k=j.length;if(0!==k){for(var l=g(),m=l.length,n=[],o=0;m>o;o++)n=n.concat(c(l[o]));if(0!==n.length){h.className+=" "+i+"-init";for(var p,q,r,s,t,u,v,w,x,y,z,A,B,C=i+"-id",D=n.length,E="",F=0;k>F;F++){p=j[F],p.setAttribute("data-"+C,F),q=p.getAttribute("data-"+i).split(";"),r=q.length,s=p.getAttribute("class")?"."+p.getAttribute("class").replace(/\s+/g,"."):"",t=p.getAttribute("id")?"#"+p.getAttribute("id"):"";for(var G=0;r>G;G++){u=q[G].split(","),v=u.length;for(var H=0;D>H;H++)for(var I=0;v>I;I++)u[I]=u[I].trim(),I%2===1&&n[H].selectorText.indexOf(u[I])>-1&&(w=n[H].selectorText.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\*/g,"\\*").replace(/\+/g,"\\+").replace(/\^/g,"\\^").replace(/\$/g,"\\$")+"\\s*?{",x=new RegExp(w,"g"),y="("+u[I]+")(.*?)(,|{)",z=new RegExp(y),A="[data-"+C+'="'+F+'"]'+s+t+w.match(z)[2].replace("s*?","").replace(/\\/g,""),E+="@media "+u[I-1]+"{"+A+" {"+n[H].cssText.replace(x,"")+"}\n")}}B=a.createElement("style"),B.appendChild(a.createTextNode(E)),a.head.appendChild(B),h.className=h.className.replace(i+"-init",i+"-complete")}}}}(document),window.Swipe=function(a,b){if(!a)return null;this.options=b||{},this.index=this.options.startSlide||0,this.oldIndex=this.index,this.speed=this.options.speed||300,this.complete=this.options.complete||function(){},this.callback=this.options.callback||function(){},this.touchCallback=this.options.touchCallback||function(){},this.circular=this.options.circular||!1,this.hasEnded=!1,this.container=a,this.element=this.container.children[0],this.container.style.overflow="hidden",this.element.style.listStyle="none",this.element.style.margin=0,this.setup(),this.begin(),this.element.addEventListener&&(this.element.addEventListener("touchstart",this,!1),this.element.addEventListener("touchmove",this,!1),this.element.addEventListener("touchend",this,!1),this.element.addEventListener("touchcancel",this,!1),this.element.addEventListener("webkitTransitionEnd",this,!1),this.element.addEventListener("msTransitionEnd",this,!1),this.element.addEventListener("oTransitionEnd",this,!1),this.element.addEventListener("transitionend",this,!1),window.addEventListener("resize",this,!1))},Swipe.prototype={setup:function(){if(this.slides=this.element.children,this.length=this.slides.length,this.length<2)return null;if(this.width=Math.ceil("getBoundingClientRect"in this.container?this.container.getBoundingClientRect().width:this.container.offsetWidth),!this.width)return null;this.container.style.visibility="hidden",this.element.style.width=Math.ceil(this.slides.length*this.width)+"px";for(var a=this.slides.length;a--;){var b=this.slides[a];b.style.width=this.width+"px",b.style.display="table-cell",b.style.verticalAlign="top"}this.complete(this.index,this.slides[this.index])},slide:function(a,b){if(!this.hasEnded){if(this.oldIndex===this.length-2&&this.index===this.length-1&&0===a)return void this.slide(2);if(1===this.oldIndex&&0===this.index&&a===this.length-1)return void this.slide(this.length-3)}var c=this.element.style;void 0==b&&(b=this.speed),c.webkitTransitionDuration=c.MozTransitionDuration=c.msTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms",c.MozTransform=c.webkitTransform="translate3d("+-(a*this.width)+"px,0,0)",c.msTransform=c.OTransform="translateX("+-(a*this.width)+"px)",this.oldIndex=this.index,this.index=a,this.hasEnded=!1},getPos:function(){return this.index},prev:function(){this.index?this.slide(this.index-1,this.speed):this.slide(this.length-1,this.speed)},next:function(){this.index<this.length-1?this.slide(this.index+1,this.speed):this.slide(0,this.speed)},begin:function(){},resume:function(){this.begin()},handleEvent:function(a){switch(a.type){case"touchstart":this.onTouchStart(a);break;case"touchmove":this.onTouchMove(a);break;case"touchcancel":case"touchend":this.onTouchEnd(a);break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"transitionend":this.transitionEnd(a);break;case"resize":this.setup()}},transitionEnd:function(a){a.target.className.indexOf("slider")<0||(this.hasEnded=!0,this.circular&&(this.index===this.length-1&&this.oldIndex>0?this.slide(1,0):0===this.index&&this.slide(this.length-2,0)),this.callback(a,this.index,this.slides[this.index]))},onTouchStart:function(a){this.start={pageX:a.touches[0].pageX,pageY:a.touches[0].pageY,time:Number(new Date)},this.isScrolling=void 0,this.deltaX=0,this.element.style.MozTransitionDuration=this.element.style.webkitTransitionDuration=this.element.style.transitionDuration=0,this.element.style.MozTransitionTimingFunction=this.element.style.OTransitionTimingFunction=this.element.style.webkitTransitionTimingFunction=this.element.style.transitionTimingFunction="linear",a.stopPropagation()},onTouchMove:function(a){a.touches.length>1||a.scale&&1!==a.scale||(this.deltaX=a.touches[0].pageX-this.start.pageX,"undefined"==typeof this.isScrolling&&(this.isScrolling=!!(this.isScrolling||Math.abs(this.deltaX)<Math.abs(a.touches[0].pageY-this.start.pageY))),this.isScrolling||(a.preventDefault(),this.deltaX=this.deltaX/(!this.index&&this.deltaX>0||this.index==this.length-1&&this.deltaX<0?Math.abs(this.deltaX)/this.width+1:1),this.element.style.MozTransform=this.element.style.webkitTransform="translate3d("+(this.deltaX-this.index*this.width)+"px,0,0)",a.stopPropagation()))},onTouchEnd:function(a){var b=Number(new Date)-this.start.time<250&&Math.abs(this.deltaX)>20||Math.abs(this.deltaX)>this.width/2,c=!this.index&&this.deltaX>0||this.index==this.length-1&&this.deltaX<0;this.isScrolling||(this.slide(this.index+(b&&!c?this.deltaX<0?1:-1:0),300),this.touchCallback()),a.stopPropagation()}},function(a,b,c){function d(a){var c="hwa";a&&(c=a+c),b.documentElement.className+=" "+c}if("mozilla"===layoutEngine.vendor&&"windows"===cssua.ua.desktop){var e=b.createElement("div"),f=b.createElement("div"),g="bottom: 0; line-height: normal; position: absolute; visibility: hidden; font-family: Arial; font-size: ",h="no-";e.appendChild(b.createTextNode("1")),f.appendChild(b.createTextNode("2")),e.setAttribute("style",g+"20px"),f.setAttribute("style",g+"35px"),c.appendChild(e),c.appendChild(f);var i=parseFloat(a.getComputedStyle(e).getPropertyValue("font-size")),j=parseFloat(e.offsetHeight),k=parseFloat(f.offsetHeight);c.removeChild(e),c.removeChild(f),20===i?25===j&&41===k?d():25===j&&40===k?d(h):25===j&&42===k?d():24===j&&40===k?d(h):23===j&&40===k?d(h):24===j&&41===k?d(h):24===j&&42===k?d():d(h):16===i?20===j?d():d(h):17.9833===i?38===k?d():d(h):22===i?46===k?d():d(h):24===i?29===j?d():d(h):26.6===i&&32===j?d():d(h)}}(window,document,document.body),FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!this.deviceIsAndroid;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.determineEventType=function(a){return this.deviceIsAndroid&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(a){var b;this.deviceIsIOS&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],this.deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!this.deviceIsIOS4){if(c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<200&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},FastClick.prototype.onTouchMove=function(a){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),this.deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||this.deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.deviceIsIOS4&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(e=g.fastClickScrollParent,e&&e.fastClickLastScrollTop!==e.scrollTop)?!0:(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},FastClick.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(a){var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},FastClick.prototype.destroy=function(){var a=this.layer;this.deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){var b,c;if("undefined"==typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!FastClick.prototype.deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(c>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===a.style.msTouchAction?!0:!1},FastClick.attach=function(a){return new FastClick(a)},"undefined"!=typeof define&&define.amd?define(function(){return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick,function(a){function b(a){if(a in l.style)return a;var b=["Moz","Webkit","O","ms"],c=a.charAt(0).toUpperCase()+a.substr(1);if(a in l.style)return a;for(var d=0;d<b.length;++d){var e=b[d]+c;if(e in l.style)return e}}function c(){return l.style[m.transform]="",l.style[m.transform]="rotateY(90deg)",""!==l.style[m.transform]}function d(a){return"string"==typeof a&&this.parse(a),this}function e(a,b,c){b===!0?a.queue(c):b?a.queue(b,c):c()}function f(b){var c=[];return a.each(b,function(b){b=a.camelCase(b),b=a.transit.propertyMap[b]||a.cssProps[b]||b,b=i(b),-1===a.inArray(b,c)&&c.push(b)}),c}function g(b,c,d,e){var g=f(b);a.cssEase[d]&&(d=a.cssEase[d]);var h=""+k(c)+" "+d;parseInt(e,10)>0&&(h+=" "+k(e));var i=[];return a.each(g,function(a,b){i.push(b+" "+h)}),i.join(", ")}function h(b,c){c||(a.cssNumber[b]=!0),a.transit.propertyMap[b]=m.transform,a.cssHooks[b]={get:function(c){var d=a(c).css("transit:transform");return d.get(b)},set:function(c,d){var e=a(c).css("transit:transform");e.setFromString(b,d),a(c).css({"transit:transform":e})}}}function i(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function j(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+$/)?""+a+b:a}function k(b){var c=b;return"string"!=typeof c||c.match(/^[\-0-9\.]+/)||(c=a.fx.speeds[c]||a.fx.speeds._default),j(c,"ms")}a.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var l=document.createElement("div"),m={},n=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;m.transition=b("transition"),m.transitionDelay=b("transitionDelay"),m.transform=b("transform"),m.transformOrigin=b("transformOrigin"),m.transform3d=c();var o={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},p=m.transitionEnd=o[m.transition]||null;for(var q in m)m.hasOwnProperty(q)&&"undefined"==typeof a.support[q]&&(a.support[q]=m[q]);l=null,a.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},a.cssHooks["transit:transform"]={get:function(b){return a(b).data("transform")||new d},set:function(b,c){var e=c;e instanceof d||(e=new d(e)),b.style[m.transform]="WebkitTransform"!==m.transform||n?e.toString():e.toString(!0),a(b).data("transform",e)}},a.cssHooks.transform={set:a.cssHooks["transit:transform"].set},a.fn.jquery<"1.8"&&(a.cssHooks.transformOrigin={get:function(a){return a.style[m.transformOrigin]},set:function(a,b){a.style[m.transformOrigin]=b}},a.cssHooks.transition={get:function(a){return a.style[m.transition]},set:function(a,b){a.style[m.transition]=b}}),h("scale"),h("translate"),h("rotate"),h("rotateX"),h("rotateY"),h("rotate3d"),h("perspective"),h("skewX"),h("skewY"),h("x",!0),h("y",!0),d.prototype={setFromString:function(a,b){var c="string"==typeof b?b.split(","):b.constructor===Array?b:[b];c.unshift(a),d.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate=j(a,"deg")},rotateX:function(a){this.rotateX=j(a,"deg")},rotateY:function(a){this.rotateY=j(a,"deg")},scale:function(a,b){void 0===b&&(b=a),this.scale=a+","+b},skewX:function(a){this.skewX=j(a,"deg")},skewY:function(a){this.skewY=j(a,"deg")},perspective:function(a){this.perspective=j(a,"px")},x:function(a){this.set("translate",a,null)},y:function(a){this.set("translate",null,a)},translate:function(a,b){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!==a&&void 0!==a&&(this._translateX=j(a,"px")),null!==b&&void 0!==b&&(this._translateY=j(b,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var a=(this.scale||"1,1").split(",");return a[0]&&(a[0]=parseFloat(a[0])),a[1]&&(a[1]=parseFloat(a[1])),a[0]===a[1]?a[0]:a},rotate3d:function(){for(var a=(this.rotate3d||"0,0,0,0deg").split(","),b=0;3>=b;++b)a[b]&&(a[b]=parseFloat(a[b]));return a[3]&&(a[3]=j(a[3],"deg")),a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,c,d){b.setFromString(c,d)})},toString:function(a){var b=[];for(var c in this)if(this.hasOwnProperty(c)){if(!m.transform3d&&("rotateX"===c||"rotateY"===c||"perspective"===c||"transformOrigin"===c))continue;"_"!==c[0]&&b.push(a&&"scale"===c?c+"3d("+this[c]+",1)":a&&"translate"===c?c+"3d("+this[c]+",0)":c+"("+this[c]+")")}return b.join(" ")}},a.fn.transition=a.fn.transit=function(b,c,d,f){var h=this,i=0,j=!0,l=jQuery.extend(!0,{},b);"function"==typeof c&&(f=c,c=void 0),"object"==typeof c&&(d=c.easing,i=c.delay||0,j=c.queue||!0,f=c.complete,c=c.duration),"function"==typeof d&&(f=d,d=void 0),"undefined"!=typeof l.easing&&(d=l.easing,delete l.easing),"undefined"!=typeof l.duration&&(c=l.duration,delete l.duration),"undefined"!=typeof l.complete&&(f=l.complete,delete l.complete),"undefined"!=typeof l.queue&&(j=l.queue,delete l.queue),"undefined"!=typeof l.delay&&(i=l.delay,delete l.delay),"undefined"==typeof c&&(c=a.fx.speeds._default),"undefined"==typeof d&&(d=a.cssEase._default),c=k(c);var n=g(l,c,d,i),o=a.transit.enabled&&m.transition,q=o?parseInt(c,10)+parseInt(i,10):0;if(0===q){var r=function(a){h.css(l),f&&f.apply(h),a&&a()};return e(h,j,r),h}for(var s=0;s<this.length;s++){var t=this.eq(s);a.each(l,function(a){var b=t.css(a);t.css(a,b)})}var u={},v=function(b){var c=!1,d=function(){a.each(e,function(a){h.css(a,e[a])}),c&&h.unbind(p,d),q>0&&h.each(function(){this.style[m.transition]=u[this]||null}),"function"==typeof f&&f.apply(h),"function"==typeof b&&b()};q>0&&p&&a.transit.useTransitionEnd?(c=!0,h.bind(p,d)):window.setTimeout(d,q);var e={};h.each(function(){var b=a(this);a.each(l,function(a){var c=l[a];if(""===c||"auto"===c){e[a]=c;var d=b.css(a);b.css(a,c),l[a]=b.css(a),b.css(a,d)}}),q>0&&(this.offsetWidth,this.style[m.transition]=n),b.css(l)})},w=function(a){v(a)};return e(h,j,w),this},a.transit.getTransitionValue=g}(jQuery),function(a,b){$(b).ready(function(){d.addClass("jquery"),FastClick.attach(b.body),g.init(),h.init(),i.init(),j.init(),k.init(),m.init(),n.init()});var c=b.documentElement,d=$(c),e=function(a,b,c){var d=function(a){return a.toString().replace(/\s|'|"/g,"-")};"undefined"!=typeof _gaq&&_gaq.push(["_trackEvent",d(a),d(b),d(c)])},f={set:function(a,c,d){var e="";if(d){var f=new Date;f.setTime(f.getTime()+24*d*60*60*1e3),e="; expires="+f.toGMTString()}b.cookie=a+"="+c+e+"; path=/"},read:function(a){for(var c=a+"=",d=b.cookie.split(";"),e=0;e<d.length;e++){for(var f=d[e];" "===f.charAt(0);)f=f.substring(1,f.length);if(0===f.indexOf(c))return f.substring(c.length,f.length)}return null},erase:function(a){f.set(a,"",-1)}},g={init:function(){a.location.search.match(/suzigrid/g)&&Modernizr.load(a.suzi.jsRootPath+"suzi.grid.min.js")}},h={init:function(){if(!Modernizr.input.placeholder){var a=$("[placeholder]");a.focus(function(){var a=$(this);a.val()===a.attr("placeholder")&&a.val("").removeClass("placeholder")}).blur(function(){var a=$(this);(""===a.val()||a.val()===a.attr("placeholder"))&&a.addClass("placeholder").val(a.attr("placeholder"))}).blur(),a.parents("form").on("submit",function(){$(this).find("[placeholder]").each(function(){var a=$(this);a.val()===a.attr("placeholder")&&a.val("")})})}d.addClass("placeholder")}},i={requiredFields:[],init:function(){$("form").each(function(a){var b=$(this);i.requiredFields[a]=b.find("[required]"),b.on("submit",function(){return i.validate(b,a)})})},validate:function(a,b){var c=$(i.requiredFields[b]),d=!1;return c.removeClass("form_error").removeClass("tested"),c.each(function(){var a=$(this);if(a.is('[type="radio"], [type="checkbox"]')&&!a.hasClass("tested")){var b=a.attr("name"),e=c.filter('[name="'+b+'"]');e.is(":checked")||e.addClass("form_error"),e.addClass("tested")}0===$.trim(a.val()).length&&(a.addClass("form_error"),d=!0)}),c.filter(".form_error:first").focus(),!d}},j={swipejs:Modernizr.csstransforms3d||"opera"===layoutEngine.vendor,$imagesLazy:[],init:function(){var b=$(".carousel");0!==b.length&&b.each(function(b){var c=$(this),g=c.find(".slider"),h=g.find("> li"),i=h.length,k=0,l=!1,m=!1,n="carouselid-"+a.location.pathname+"-"+b,o=f.read(n),p=c.data("circular")===!1?!1:!0;if(j.swipejs&&p&&(h.eq(0).clone().appendTo(g),h.eq(i-1).clone().prependTo(g),h=g.find("> li"),i+=2),o&&(k=parseInt(o)),j.swipejs&&p&&0===k&&(k=1),j.$imagesLazy[b]=h.find(".rwdimage"),1===i){k=0,j.lazyLoad(j.$imagesLazy[b].eq(k));var q=c.find(".inner");h.css("visibility","visible"),q.css("visibility","visible")}else{var r="",s=!1,t=!0,u=!0,v=300,w=function(a,c,d){j.lazyLoad(j.$imagesLazy[b].eq(a)),a>c?d-1>a?(j.lazyLoad(j.$imagesLazy[b].eq(a+1)),p&&a===d-2&&1===c&&j.lazyLoad(j.$imagesLazy[b].eq(a-1))):j.lazyLoad(a===d-1&&0===c?j.$imagesLazy[b].eq(a-1):j.$imagesLazy[b].eq(0)):c>a&&j.lazyLoad(0===a?c>1?j.$imagesLazy[b].eq(a+1):j.$imagesLazy[b].eq(a-1):p&&1===a?j.$imagesLazy[b].eq(a-1):a>1?j.$imagesLazy[b].eq(a-1):j.$imagesLazy[b].eq(0))
};if(j.lazyLoad(j.$imagesLazy[b].eq(k),b,k,i),parseInt(c.data("interval"))&&(s=parseInt(1e3*c.data("interval"))),c.data("nav")===!1)t=!1;else var x=$('<a href="#previous" class="carousel_nav prev"><span>Previous</span></a>'),y=$('<a href="#next" class="carousel_nav next"><span>Next</span></a>');if(c.data("pager")===!1)u=!1;else var z=$('<ul class="carousel_nav_pager reset menu" />');if(t&&c.append(x).append(y),u&&c.append(z),parseInt(c.data("speed"))&&(v=parseInt(c.data("speed"))),c.addClass("multiple"),j.swipejs){var A=!1,B=function(){d.removeClass("resizing"),A=!1};if($(a).resize(function(){clearTimeout(a.resizeTimer),A||(d.addClass("resizing"),A=!0),a.resizeTimer=setTimeout(B,250)}),u){for(var C=1;i>=C;C++)r+='<li><a href="#slide-'+C+'">Slide '+C+"</a></li>";z.append(r);var D=z.find("li"),E=z.find("a");p&&(D.eq(0).hide(),D.eq(i-1).hide())}var q=c.find(".inner"),F=new Swipe(q[0],{circular:p,speed:v,complete:function(){this.slide(k),l=!0},touchCallback:function(){G()},callback:function(a,b){l&&!m&&(m=!0,h.css("visibility","visible"),q.css("visibility","visible")),h.attr("aria-hidden",!0).eq(b).attr("aria-hidden",!1),w(b,k,i),u&&D.removeClass("current").eq(b).addClass("current"),s||e("Website","Carousel","Slide "+(b+1)),k=b,f.set(n,k)}});c.addClass("swipejs");var G=function(){s&&(a.clearTimeout(timer),s=!1)};t&&(x.on("click",function(a){a.preventDefault(),F.prev(),G()}),y.on("click",function(a){a.preventDefault(),F.next(),G()})),u&&E.each(function(a){var c=a;$(this).on("click",function(a){a.preventDefault(),j.lazyLoad(j.$imagesLazy[b].eq(c)),F.slide(c),D.removeClass("current"),$(this).parent().addClass("current"),G()})});var H=function(){F.next()};if(s){timer=a.setInterval(H,s);var I=c.find(".tile");I.hover(function(b){b.stopPropagation(),s&&a.clearTimeout(timer)},function(b){b.stopPropagation(),s&&(timer=a.setInterval(H,s))})}}else{var q=c.find(".slider"),J="width: 100% !important",K={activePagerClass:"current",cleartypeNoBg:!0,easing:"easeInOutQuint",fx:"scrollHorz",pause:!0,speed:v,startingSlide:k,timeout:s,after:function(a,b,c){var d=c.currSlide;h.attr("aria-hidden",!0).eq(d).attr("aria-hidden",!1),w(d,k,i),k=d,f.set(n,k)}};t&&(x.attr("id","nav_prev-"+b),y.attr("id","nav_next-"+b),K.prev="#nav_prev-"+b,K.next="#nav_next-"+b),u&&(z.attr("id","nav_pager-"+b),K.pager="#nav_pager-"+b,K.pagerAnchorBuilder=function(a){return'<li><a href="#slide-'+(a+1)+'">Slide '+(a+1)+"</a></li>"}),q.attr("style",J).find("li").attr("style",J),Modernizr.load({load:[a.suzi.jsRootPath+"jquery.cycle.all.min.js",a.suzi.jsRootPath+"jquery.easing.1.3.min.js"],complete:function(){q.cycle(K).css("visibility","visible").closest(".carousel").addClass("jqcycle"),h.css("visibility","visible"),t&&(x.on("click",function(a){a.preventDefault(),q.cycle("pause")}),y.on("click",function(a){a.preventDefault(),q.cycle("pause")})),u&&z.css("z-index",i+1).find("a").each(function(a){$(this).on("click",function(){j.lazyLoad(j.$imagesLazy[b].eq(a)),q.cycle("pause")})})}})}}})},lazyLoad:function(b,c,d,e){if(0!==b.length){var f=$(b);if(!f.hasClass("lazy-loaded")){f.addClass("lazy-loaded"),a.rwdImageChangeSrc(f[0]);var g=function(){e&&(0===d?(j.lazyLoad(j.$imagesLazy[c].eq(d+1)),j.lazyLoad(j.$imagesLazy[c].eq(e-1))):d===e-1?(j.lazyLoad(j.$imagesLazy[c].eq(0)),j.lazyLoad(j.$imagesLazy[c].eq(d-1))):(j.lazyLoad(j.$imagesLazy[c].eq(d+1)),j.lazyLoad(j.$imagesLazy[c].eq(d-1))))};if(a.getComputedStyle){var h=a.getComputedStyle(f[0]).getPropertyValue("background-image").replace(/url\((?:\"?)(.*?)(?:\"?)\)/,"$1"),i=new Image;"none"!==h&&(i.onload=g,i.src=h)}else g()}}}},k={init:function(){var b=$(".tabs");b.each(function(b){var c=$(this),d=c.find("> li a"),g=c.nextAll(".panes:first").find("> .pane"),h="tabid-"+a.location.pathname+"-"+b,i=f.read(h);i?(d.eq(i).addClass("current"),g.hide().attr("aria-hidden",!0),g.eq(i).show().attr("aria-hidden",!1)):(d.eq(0).addClass("current"),g.not(":first").attr("aria-hidden",!0)),d.on("click",function(a){a.preventDefault();var b=$(this),c=b.parent().index();b.hasClass("current")||(d.removeClass("current"),b.addClass("current")),g.hide().attr("aria-hidden",!0),g.eq(c).show().attr("aria-hidden",!1),f.set(h,c),e("Website","Tabs",h+"-"+c)})})}},l={storeInitial:function(b){if(a.getComputedStyle){var c=a.getComputedStyle(b[0]).getPropertyValue("transition-duration")||a.getComputedStyle(b[0]).getPropertyValue("-webkit-transition-duration"),d=a.getComputedStyle(b[0]).getPropertyValue("transition-timing-function")||a.getComputedStyle(b[0]).getPropertyValue("-webkit-transition-timing-function");c=c.match(/\d+s$/g)?1e3*parseFloat(c):parseInt(c),b.attr("aria-hidden",!0).data("transition-duration",c).data("transition-timing-function",d)}},overrideDefault:function(c){if(a.getComputedStyle){var d=b.createElement("style");d.appendChild(b.createTextNode(".jquery "+c.replace(/,/g,",.jquery ")+"{ -moz-transition: none; -o-transition: none; -webkit-transition: none; transition: none; }")),b.head.appendChild(d)}}},m={init:function(){var b=$(".accordion");0!==b.length&&(b.each(function(b){var c=$(this),d=c.data("multiple"),g=c.find("> ul > li > .accordion_toggler"),h=c.find("> ul > li > .accordion_content"),i="accordionid-"+a.location.pathname+"-"+b,j=f.read(i);h.each(function(){l.storeInitial($(this))}),g.each(function(a){var b=$(this),c=h.eq(a);j||!d?(j||b.hasClass("open")&&(j=a),parseInt(j)===a&&(g.removeClass("open"),b.addClass("open is_open"),c.attr("aria-hidden",!1).css("height",c.height()))):b.hasClass("open")&&(b.addClass("is_open"),c.attr("aria-hidden",!1).css("height",c.height()),d||f.set(i,a)),b.on("click",function(b){b.preventDefault();var c=$(this),j=c.next(),k="auto",l=j.data("transition-duration"),m=j.data("transition-timing-function"),n=!1;d?(c.removeClass("open").toggleClass("is_open"),"false"==j.attr("aria-hidden")&&(n=!0,k=0),j.attr("aria-hidden",n).transition({height:k},l,m)):(g.removeClass("open is_open"),h.each(function(b){b===a?$(this).attr("aria-hidden",!1).transition({height:k},l,m):$(this).attr("aria-hidden",!0).transition({height:0},l,m)}),c.addClass("open is_open")),d||(f.set(i,a),e("Website","Accordions",i+"-"+a))})})}),l.overrideDefault(".accordion_content"))}},n={init:function(){"ie"===layoutEngine.vendor&&9===layoutEngine.version&&this.gridFix()},gridFix:function(){$(".data_table").each(function(){$(this).append('<tr class="ie9_grid_dummy"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>')})}}}(window,document);