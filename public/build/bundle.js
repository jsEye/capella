var capella=function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this.uploadUrl="/upload",this.uploadFileButton=document.getElementById("uploadFileButton"),this.uploadLinkField=document.getElementById("uploadLinkField"),this.uploadFileButton&&this.uploadFileButton.addEventListener("click",this.uploadByTransport.bind(this),!1),this.uploadLinkField&&this.uploadLinkField.addEventListener("keydown",this.uploadByUrl.bind(this),!1)}return a(e,[{key:"uploadByTransport",value:function(){capella.transport.init({url:this.uploadUrl,multiple:!1,accept:"image/png, image/gif, image/jpg, image/jpeg, image/bmp",data:{},before:this.before,progress:this.progress,success:this.success,error:this.error,after:this.after})}},{key:"uploadByUrl",value:function(e){13===e.keyCode&&(e.preventDefault(),this.uploadLinkField&&this.upload({link:this.uploadLinkField.value}))}},{key:"uploadBlob",value:function(e){var t=new FormData;this.currentFileName=e.name,t.append("file",e,e.name),this.upload(t)}},{key:"upload",value:function(e){capella.ajax.call({type:"POST",url:this.uploadUrl,data:e,before:this.before.bind(this),progress:this.progress,success:this.success,error:this.error,after:this.after})}},{key:"before",value:function(e){var t=void 0;e instanceof FormData&&(t=this.currentFileName),e&&e.link&&(t=e.link),e[0]instanceof File&&(t=e[0].name),capella.uploadScreen.show(t)}},{key:"progress",value:function(e){e*=.95,capella.uploadScreen.progress(e)}},{key:"success",value:function(e){console.log(e),e.success?(capella.uploadScreen.progress(100),window.location.href="/image/"+e.id):capella.uploadScreen.hide()}},{key:"error",value:function(e){capella.notifier.show({message:"<i class='cdx-notify__warning-sign'></i>"+e.message,time:1e4}),capella.uploadScreen.hide()}},{key:"after",value:function(){}}]),e}();t.default=o},function(e,t,n){"use strict";n(2),e.exports=n(3)},function(e,t){},function(e,t,n){"use strict";var r={},a=n(0).default,o=n(4).default,i=n(5).default,u=n(6).default;r.ajax=n(7),r.transport=n(8),r.uploader=n(0),r.copyable=n(9),r.checkForSafari=n(10),r.notifier=n(11),r.uploadScreen=new u,r.uploader=new a,r.clipboard=new o,r.dnd=new i(".capella"),r.init=function(){r.copyable.init(),r.checkForSafari.init()},e.exports=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),document.body.addEventListener("paste",this.pasteFromClipboard)}return a(e,[{key:"pasteFromClipboard",value:function(e){var t=e.clipboardData||e.originalEvent.clipboardData||window.clipboardData,n=t.items,r=t.getData("Text"),a=null;if(e.stopPropagation(),e.preventDefault(),r){var o=/^((http[s]?):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;r.match(o)?capella.uploader.upload({link:r}):document.getElementById("uploadLinkField").value=r}if(n)for(var i=n.length-1;i>=0;--i)if(0===n[i].type.indexOf("image")){a=n[i].getAsFile();break}if(null!==a){var u=new FileReader;u.onload=function(){capella.uploader.uploadBlob(a)},u.readAsDataURL(a)}}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),this.wrapper=document.querySelector(t),this.wrapper.addEventListener("dragenter",this.dragover.bind(this)),this.wrapper.addEventListener("dragover",this.dragover.bind(this)),this.wrapper.addEventListener("dragleave",this.drageleave.bind(this)),this.wrapper.addEventListener("drop",this.drop.bind(this))}return a(e,[{key:"dragover",value:function(e){e.preventDefault(),this.wrapper.classList.add("capella--dark")}},{key:"drageleave",value:function(e){e.preventDefault(),this.wrapper.classList.remove("capella--dark")}},{key:"drop",value:function(e){this.wrapper.classList.remove("capella--dark");var t=e.dataTransfer.files[0];capella.uploader.uploadBlob(t),e.preventDefault()}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this.mainContainer=document.querySelector(".capella"),this.progressBar=document.querySelector(".js-capella__uploading-progress"),this.loadingClass="capella--loading"}return a(e,[{key:"show",value:function(e){this.mainContainer.querySelector(".capella__uploading-filename").textContent=e,this.mainContainer.classList.add(this.loadingClass)}},{key:"hide",value:function(){this.mainContainer.classList.remove(this.loadingClass)}},{key:"progress",value:function(e){this.progressBar.style.width=e+"%"}}]),e}();t.default=o},function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";e.exports=function(){var e=function(e){return e instanceof FormData};return{call:function(t){if(t&&t.url){var n=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP"),r=t.progress||null,a=t.success||function(){},o=t.error||function(){},i=t.before||null,u=t.after?t.after.bind(null,t.data):null;if(t.async=!0,t.type=t.type||"GET",t.data=t.data||"",t["content-type"]=t["content-type"]||"application/json; charset=utf-8","GET"===t.type&&t.data&&(t.url=/\?/.test(t.url)?t.url+"&"+t.data:t.url+"?"+t.data),t.withCredentials&&(n.withCredentials=!0),i&&"function"==typeof i&&!1===i(t.data))return;if(n.open(t.type,t.url,t.async),!e(t.data)){var c=new FormData;for(var l in t.data)c.append(l,t.data[l]);t.data=c}r&&"function"==typeof r&&n.upload.addEventListener("progress",function(e){var t=parseInt(e.loaded/e.total*100);r(t)},!1),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.onreadystatechange=function(){if(4===n.readyState){var e=n.responseText;try{e=JSON.parse(e)}catch(e){}200===n.status?a(e):o(e),u&&"function"==typeof u&&u()}},n.send(t.data)}}}}()}])})},function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(1);e.exports=function(e){var t=null;e.input=null;var n=function(){e.input.click()},o=function(){t.before(e.input.files)},i=function(){var n=t.url,i=t.data,u=o,c=t.progress,l=t.success,s=t.error,d=t.after,p=new FormData,f=e.input.files;if(f.length>1)for(var v=0;v<f.length;v++)p.append("files[]",f[v],f[v].name);else p.append("file",f[0],f[0].name);if(null!==i&&"object"===(void 0===i?"undefined":r(i)))for(var y in i)p.append(y,i[y]);a.call({type:"POST",data:p,url:n,before:u,progress:c,success:l,error:s,after:d})};return e.init=function(r){if(!r.url)return void console.log("Can't send request because `url` is missed");t=r;var a=document.createElement("INPUT");a.type="file",t&&t.multiple&&a.setAttribute("multiple","multiple"),t&&t.accept&&a.setAttribute("accept",t.accept),a.addEventListener("change",i,!1),e.input=a,n()},e}({})},function(e,t,n){!function(t,n){e.exports=function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";e.exports=function(){var e=function(e){return e instanceof FormData};return{call:function(t){if(t&&t.url){var n=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP"),r=t.progress||null,a=t.success||function(){},o=t.error||function(){},i=t.before||null,u=t.after?t.after.bind(null,t.data):null;if(t.async=!0,t.type=t.type||"GET",t.data=t.data||"",t["content-type"]=t["content-type"]||"application/json; charset=utf-8","GET"===t.type&&t.data&&(t.url=/\?/.test(t.url)?t.url+"&"+t.data:t.url+"?"+t.data),t.withCredentials&&(n.withCredentials=!0),i&&"function"==typeof i&&!1===i(t.data))return;if(n.open(t.type,t.url,t.async),!e(t.data)){var c=new FormData;for(var l in t.data)c.append(l,t.data[l]);t.data=c}r&&"function"==typeof r&&n.upload.addEventListener("progress",function(e){var t=parseInt(e.loaded/e.total*100);r(t)},!1),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.onreadystatechange=function(){if(4===n.readyState){var e=n.responseText;try{e=JSON.parse(e)}catch(e){}200===n.status?a(e):o(e),u&&"function"==typeof u&&u()}},n.send(t.data)}}}}()}])}()}()}])})},function(e,t,n){"use strict";e.exports=function(){var e={copyable:"js-copyable",authorized:"js-copyable-authorize"},t=function(e,t){e.addEventListener("click",o),e.addEventListener("copied",t)},n=function(e){e.addEventListener("click",a)},r=function(){this.innerHTML="Copied"},a=function(){this.querySelector("[name="+e.copyable+"]").click()},o=function(e){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(this),t.removeAllRanges(),t.addRange(n),document.execCommand("copy"),t.removeAllRanges();var r=new CustomEvent("copied",{bubbles:!1,cancelable:!1,detail:n.toString()});this.dispatchEvent(r),e.stopPropagation()};return{init:function(a){var o=document.getElementsByName(e.copyable);if(!o)return void console.log("There are no copyable elements");for(var i=0;i<o.length;i++)t(o[i],a);for(var u=document.getElementsByName(e.authorized),c=0;c<u.length;c++)n(u[c]);console.log("Copyable module initialized"),this.clipboardButton=document.querySelector(".js-result__copy-text"),this.clipboardButton&&this.clipboardButton.addEventListener("click",r,!1)}}}()},function(e,t,n){"use strict";e.exports=function(){return{init:function(){var e=window.navigator.userAgent;e.indexOf("Safari")>=0&&e.indexOf("Chrome")<0&&document.body.classList.add("safari")}}}()},function(e,t){var n=function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";e.exports=function(){var e={wrapper:"cdx-notifies",notification:"cdx-notify",crossBtn:"cdx-notify__cross",okBtn:"cdx-notify__button--confirm",cancelBtn:"cdx-notify__button--cancel",input:"cdx-notify__input",btn:"cdx-notify__button",btnsWrapper:"cdx-notify__btns-wrapper"},t=function(t){var n=document.createElement("DIV"),r=document.createElement("DIV"),a=t.message,o=t.style;return n.classList.add(e.notification),o&&n.classList.add(e.notification+"--"+o),n.innerHTML=a,r.classList.add(e.crossBtn),r.addEventListener("click",n.remove.bind(n)),n.appendChild(r),n};return{alert:t,confirm:function(n){var r=t(n),a=document.createElement("div"),o=document.createElement("button"),i=document.createElement("button"),u=r.querySelector(e.crossBtn),c=n.cancelHandler,l=n.okHandler;return a.classList.add(e.btnsWrapper),o.innerHTML=n.okText||"Confirm",i.innerHTML=n.cancelText||"Cancel",o.classList.add(e.btn),i.classList.add(e.btn),o.classList.add(e.okBtn),i.classList.add(e.cancelBtn),c&&"function"==typeof c&&(i.addEventListener("click",c),u.addEventListener("click",c)),l&&"function"==typeof l&&o.addEventListener("click",l),o.addEventListener("click",r.remove.bind(r)),i.addEventListener("click",r.remove.bind(r)),a.appendChild(o),a.appendChild(i),r.appendChild(a),r},prompt:function(n){var r=t(n),a=document.createElement("div"),o=document.createElement("button"),i=document.createElement("input"),u=r.querySelector(e.crossBtn),c=n.cancelHandler,l=n.okHandler;return a.classList.add(e.btnsWrapper),o.innerHTML=n.okText||"Ok",o.classList.add(e.btn),o.classList.add(e.okBtn),i.classList.add(e.input),n.placeholder&&i.setAttribute("placeholder",n.placeholder),n.default&&(i.value=n.default),n.inputType&&(i.type=n.inputType),c&&"function"==typeof c&&u.addEventListener("click",c),l&&"function"==typeof l&&o.addEventListener("click",function(){l(i.value)}),o.addEventListener("click",r.remove.bind(r)),a.appendChild(i),a.appendChild(o),r.appendChild(a),r},wrapper:function(){var t=document.createElement("DIV");return t.classList.add(e.wrapper),t}}}()},function(e,t){},function(e,t,n){"use strict";/*!
 * Codex JavaScript Notification module
 * https://github.com/codex-team/js-notifier
 *
 * Codex Team - https://ifmo.su
 *
 * MIT License | (c) Codex 2017
 */
e.exports=function(){function e(){if(o)return!0;o=r.wrapper(),document.body.appendChild(o)}function t(t){if(t.message){e();var n=null,i=t.time||8e3;switch(t.type){case"confirm":n=r.confirm(t);break;case"prompt":n=r.prompt(t);break;default:n=r.alert(t),window.setTimeout(function(){n.remove()},i)}o.appendChild(n),n.classList.add(a)}}n(1);var r=n(0),a="cdx-notify--bounce-in",o=null;return{show:t}}()}]);e.exports=n}]);
//# sourceMappingURL=bundle.js.map