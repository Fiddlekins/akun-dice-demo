(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,t,a){e.exports={content:"App_content__1GsvH",title:"App_title__1uRW_",description:"App_description__U7H2X"}},,,,function(e,t,a){e.exports={history:"History_history__15f_R",roll:"History_roll__71G23"}},,function(e,t,a){e.exports={chatInput:"Input_chatInput__3uJKP",textarea:"Input_textarea__A_JCw"}},,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),i=(a(18),a(12)),l=a(5),s=a(11),u=a.n(s),m=a(2),h=a.n(m),p=a(6),f=a.n(p);function d(e){var t=e.items;return r.a.createElement("div",{className:f.a.history},null===t||void 0===t?void 0:t.map((function(e,a){return r.a.createElement("div",{key:t.length-a,className:f.a.roll,dangerouslySetInnerHTML:{__html:e}})})))}var v=a(4),_=a(7),E=a(8),y=a.n(E),b={textarea:"/dice 1d6"};function g(e,t){var a=t.field,n=t.value;return Object(_.a)(Object(_.a)({},e),{},Object(v.a)({},a,n))}function w(e){var t=e.submit,a=Object(n.useRef)(null),c=Object(n.useReducer)(g,b),o=Object(l.a)(c,2),i=o[0],s=o[1],u=function(){var e=a.current.value;e.length>0&&(s({field:"textarea"}),t(e))};return Object(n.useEffect)((function(){var e=a.current;e.style.height="inherit",e.style.height="".concat(e.scrollHeight+2,"px")})),r.a.createElement("form",{className:y.a.chatInput,onSubmit:function(e){e.preventDefault(),u()}},r.a.createElement("textarea",{ref:a,className:y.a.textarea,name:"textarea",value:i.textarea,placeholder:"/dice 1d6",rows:"1",onKeyDown:function(e){"Enter"!==e.key||e.altKey||e.shiftKey||e.ctrlKey||(e.preventDefault(),u())},onChange:function(e){s({field:e.target.name,value:e.target.value})}}))}function x(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:h.a.content},r.a.createElement("h1",{className:h.a.title},"Akun Dice Demo"),r.a.createElement("div",{className:h.a.description},r.a.createElement("span",null,"This site uses the same code to evaluate dice roll commands as "),r.a.createElement("a",{href:"https://fiction.live"},"fiction.live"),r.a.createElement("span",null," which makes it the perfect place to test your rolls out!")),r.a.createElement("div",{className:h.a.description},r.a.createElement("span",null,"Instruction on how to configure dice commands can be found "),r.a.createElement("a",{href:"https://fiction.live/stories/Dice-Documentation/22nAnHSMgSBdLYZ7G"},"here"),r.a.createElement("span",null,".")),r.a.createElement(w,{submit:function(e){if(e.startsWith("/dice ")||e.startsWith("/roll ")){var t=u()(e);c([t].concat(Object(i.a)(a)))}}}),r.a.createElement(d,{items:a}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.e19e9c59.chunk.js.map