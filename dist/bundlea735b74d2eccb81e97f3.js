(()=>{"use strict";var t={424:(t,n,e)=>{e.d(n,{Z:()=>i});var s=e(81),a=e.n(s),r=e(645),o=e.n(r)()(a());o.push([t.id,"body {\n  font-family: 'poppins', sans-serif;\n  background-color: #fff;\n}\n\n.main-heading {\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n.todo-container {\n  width: 600px;\n  min-height: 150px;\n  margin: 0 auto;\n  margin-top: 50px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0 30px 60px -12px, rgba(0, 0, 0, 0.3) 0 18px 36px -18px;\n}\n\n.todo-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  height: 50px;\n}\n\n.title {\n  margin: 0;\n  font-size: 20px;\n  color: gray;\n}\n\n.refresh {\n  margin-right: 15px;\n  color: gray;\n}\n\nhr {\n  margin: 0;\n  color: gray;\n}\n\n.add-task-container {\n  height: 50px;\n  padding: 5px;\n}\n\n.add-task-input {\n  border: 0;\n  border-radius: 0;\n  width: 90%;\n  height: inherit;\n  padding-left: 10px;\n  outline: none;\n}\n\n.add-task-input::placeholder {\n  font-style: italic;\n  font-size: 15px;\n  font-weight: 200;\n  color: gray;\n}\n\n.add-task-btn {\n  display: inline;\n  border: 0;\n  border-radius: 0;\n  background-color: #fff;\n  height: inherit;\n  color: gray;\n}\n\n.add-task-btn:hover {\n  cursor: pointer;\n}\n\n.tasks-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  height: 50px;\n  padding: 5px;\n}\n\n.check {\n  margin: 0 8px;\n  color: gray;\n}\n\n.check:hover {\n  cursor: pointer;\n}\n\n.description {\n  width: 85%;\n  margin: 0 2px;\n  border: 0;\n  height: inherit;\n  outline: none;\n}\n\n.completed {\n  text-decoration: line-through;\n}\n\n.edit-icon {\n  margin: 0 8px;\n  color: gray;\n}\n\n.edit-icon:hover {\n  cursor: move;\n}\n\n.clear {\n  height: 50px;\n  padding: 0;\n  position: relative;\n  bottom: 0;\n  text-align: center;\n}\n\n.clear-btn {\n  height: inherit;\n  width: 100%;\n  border: 0;\n  background-color: #eee;\n  color: gray;\n  font-size: 15px;\n}\n\n.clear-btn:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n",""]);const i=o},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",s=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),s&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),s&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,s,a,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(s)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);s&&o[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,s=0;s<n.length;s++)if(n[s].identifier===t){e=s;break}return e}function s(t,s){for(var r={},o=[],i=0;i<t.length;i++){var c=t[i],d=s.base?c[0]+s.base:c[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=e(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=a(h,s);s.byIndex=i,n.splice(i,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function a(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,a){var r=s(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var i=e(r[o]);n[i].references--}for(var c=s(t,a),d=0;d<r.length;d++){var l=e(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=c}}},569:t=>{var n={};t.exports=function(t,e){var s=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var s="";e.supports&&(s+="@supports (".concat(e.supports,") {")),e.media&&(s+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(s+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),s+=e.css,a&&(s+="}"),e.media&&(s+="}"),e.supports&&(s+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(s,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(s){var a=n[s];if(void 0!==a)return a.exports;var r=n[s]={id:s,exports:{}};return t[s](r,r.exports,e),r.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{var t=e(379),n=e.n(t),s=e(795),a=e.n(s),r=e(569),o=e.n(r),i=e(565),c=e.n(i),d=e(216),l=e.n(d),p=e(589),u=e.n(p),h=e(424),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const{taskForm:g}=document.forms,{description:m}=g,k=document.querySelector(".add-task-input"),v=document.querySelector(".add-task-btn"),x=document.querySelector(".main-tasks"),y=document.querySelector(".clear-btn"),b=new class{showTasks=()=>{const t=document.querySelector(".main-tasks");this.tasks=[],this.tasks=null!==JSON.parse(localStorage.getItem("tasks"))?this.tasks=JSON.parse(localStorage.getItem("tasks")):[],t.innerHTML="",this.tasks.forEach((n=>{let e=`<div class="tasks-container" id="${n.index}">`;n.completed?e+=`\n                  <span class="material-icons check">\n                    done\n                  </span>\n                  <input type="text" class="description completed" value="${n.description}">\n                  <span class="edit-icon material-icons id="del">delete<span>\n                  </div>\n                  <hr>\n                  `:e+=`\n                  <span class="material-icons check">\n                    check_box_outline_blank\n                  </span>\n                  <input type="text" class="description" value="${n.description}">\n                  <span class="edit-icon material-icons" id="del">delete<span>\n                  </div>\n                  <hr>\n                  `,t.innerHTML+=e})),this.actions()};addTask=t=>{this.tasks=[],this.tasks=null!==JSON.parse(localStorage.getItem("tasks"))?this.tasks=JSON.parse(localStorage.getItem("tasks")):[];const n={description:"",completed:!1,index:0};return""!==t&&(n.description=t,n.index=this.tasks.length+1,this.tasks.push(n),localStorage.setItem("tasks",JSON.stringify(this.tasks)),this.showTasks(),!0)};deleteTask=t=>{this.tasks=[],this.tasks=null!==JSON.parse(localStorage.getItem("tasks"))?this.tasks=JSON.parse(localStorage.getItem("tasks")):[],this.tasks.splice(t-1,1),this.tasks.forEach(((t,n)=>{t.index=n+1})),this.tasks.sort(((t,n)=>t.index-n.index)),localStorage.setItem("tasks",JSON.stringify(this.tasks)),this.showTasks()};editTask=(t,n)=>{this.tasks[t-1].description=n,localStorage.setItem("tasks",JSON.stringify(this.tasks)),this.showTasks()};updateStatus(t){void 0!==t&&(!0===this.tasks[t-1].completed?(this.tasks[t-1].completed=!1,localStorage.setItem("tasks",JSON.stringify(this.tasks))):(this.tasks[t-1].completed=!0,localStorage.setItem("tasks",JSON.stringify(this.tasks)))),this.showTasks()}clearComplete=()=>{this.tasks=this.tasks.filter((t=>!0!==t.completed)),this.tasks.forEach(((t,n)=>{t.index=n+1})),this.tasks.sort(((t,n)=>t.index-n.index)),localStorage.setItem("tasks",JSON.stringify(this.tasks)),this.showTasks()};actions=()=>{const t=document.querySelectorAll(".tasks-container");t&&t.forEach((t=>{t.addEventListener("change",(n=>{const e=t.id,s=n.target.value;this.editTask(e,s),this.showTasks()}))}));const n=document.querySelectorAll(".check");null!==n&&n.forEach((t=>{t.addEventListener("click",(()=>{const n=t.parentNode.id;this.updateStatus(n)}))}))}};v.addEventListener("click",(()=>{b.addTask(m.value),m.value=""})),k.addEventListener("keydown",(t=>{"Enter"===t.key&&b.addTask(m.value)})),x.addEventListener("click",(t=>{if("del"===t.target.id){const n=t.target.value;b.deleteTask(n)}})),y.addEventListener("click",(()=>{b.clearComplete()})),document.addEventListener("DOMContentLoaded",(()=>{b.showTasks()})),document.addEventListener("DOMContentLoaded",(()=>{b.actions()}))})()})();