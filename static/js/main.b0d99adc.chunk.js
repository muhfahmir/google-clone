(this["webpackJsonpgoogle-clone"]=this["webpackJsonpgoogle-clone"]||[]).push([[0],{56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(0),n=c.n(a),i=c(20),r=c.n(i),o=(c(56),c(57),c(58),c(6)),l=c(46),j=c.n(l),d=c(90),h=c(41),b=c(19),u=(c(59),c(45)),m=c.n(u),O=c(30),g=c.n(O),x=c(89),_=c(4),v=Object(a.createContext)(),p=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(s.jsx)(v.Provider,{value:Object(a.useReducer)(t,c),children:n})},f=function(){return Object(a.useContext)(v)},N=c(39),P="SET_SEARCH_TERM",S=function(e,t){switch(console.log(t),t.type){case P:return Object(N.a)(Object(N.a)({},e),{},{term:t.term});default:return e}};var k=function(e){var t=e.hideButtons,c=void 0!==t&&t,n=f(),i=Object(b.a)(n,2);Object(h.a)(i[0]);var r=i[1],o=Object(a.useState)(""),l=Object(b.a)(o,2),j=l[0],d=l[1],u=Object(_.f)(),O=function(e){e.preventDefault(),console.log("You hit this button",j),r({type:P,term:j}),u.push("/search")};return Object(s.jsxs)("form",{className:"search",children:[Object(s.jsxs)("div",{className:"search__input",children:[Object(s.jsx)(g.a,{className:"search__inputIcon"}),Object(s.jsx)("input",{type:"text",value:j,onChange:function(e){return d(e.target.value)}}),Object(s.jsx)(m.a,{})]}),c?Object(s.jsxs)("div",{className:"search__buttons",children:[Object(s.jsx)(x.a,{type:"submit",onClick:O,variant:"outlined",className:"search__buttonsHidden",children:"Google Search"}),Object(s.jsx)(x.a,{variant:"outlined",className:"search__buttonsHidden",children:"I'm Feeling Lucky"})]}):Object(s.jsxs)("div",{className:"search__buttons",children:[Object(s.jsx)(x.a,{type:"submit",onClick:O,variant:"outlined",children:"Google Search"}),Object(s.jsx)(x.a,{variant:"outlined",children:"I'm Feeling Lucky"})]})]})};var w=function(){return Object(s.jsxs)("div",{className:"home",children:[Object(s.jsxs)("div",{className:"home__header",children:[Object(s.jsxs)("div",{className:"home__headerLeft",children:[Object(s.jsx)(o.b,{to:"/about",children:"About"}),Object(s.jsx)(o.b,{to:"/store",children:"Store"})]}),Object(s.jsxs)("div",{className:"home__headerRight",children:[Object(s.jsx)(o.b,{to:"/gmail",children:"Gmail"}),Object(s.jsx)(o.b,{to:"/images",children:"Images"}),Object(s.jsx)(j.a,{}),Object(s.jsx)(d.a,{})]})]}),Object(s.jsxs)("div",{className:"home__body",children:[Object(s.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png",alt:""}),Object(s.jsx)("div",{className:"home__inputContainer",children:Object(s.jsx)(k,{})})]})]})},y=c(38),C=c.n(y),I=c(47),L=function(e){var t=Object(a.useState)(null),c=Object(b.a)(t,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){(function(){var t=Object(I.a)(C.a.mark((function t(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyBmpSCRuDL5SgiVD1cP3-CicmNgrxgMc8E","&cx=").concat("cd87d75690dd187f7","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){n(e)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),{data:s}},T=(c(67),c(84)),G=c(85),R=c(86),A=c(87),B=c(88);var E=function(){var e=f(),t=Object(b.a)(e,2),c=t[0].term,a=(t[1],L(c).data);return Object(s.jsxs)("div",{className:"searchPage",children:[Object(s.jsxs)("div",{className:"searchPage__header",children:[Object(s.jsx)(o.b,{to:"/",children:Object(s.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png",alt:"",className:"searchPage__logo"})}),Object(s.jsxs)("div",{className:"searchPage__headerBody",children:[Object(s.jsx)(k,{hideButtons:!0}),Object(s.jsxs)("div",{className:"searchPage__options",children:[Object(s.jsxs)("div",{className:"searchPage__optionsLeft",children:[Object(s.jsxs)("div",{className:"searchPage__option",children:[Object(s.jsx)(g.a,{}),Object(s.jsx)(o.b,{to:"/all",children:"All"})]}),Object(s.jsxs)("div",{className:"searchPage__option",children:[Object(s.jsx)(T.a,{}),Object(s.jsx)(o.b,{to:"/news",children:"News"})]}),Object(s.jsxs)("div",{className:"searchPage__option",children:[Object(s.jsx)(G.a,{}),Object(s.jsx)(o.b,{to:"/images",children:"Images"})]}),Object(s.jsxs)("div",{className:"searchPage__option",children:[Object(s.jsx)(R.a,{}),Object(s.jsx)(o.b,{to:"/shopping",children:"Shopping"})]}),Object(s.jsxs)("div",{className:"searchPage__option",children:[Object(s.jsx)(A.a,{}),Object(s.jsx)(o.b,{to:"/maps",children:"Maps"})]}),Object(s.jsxs)("div",{className:"searchPage__option",children:[Object(s.jsx)(B.a,{}),Object(s.jsx)(o.b,{to:"/more",children:"More"})]})]}),Object(s.jsxs)("div",{className:"searchPage__optionsRight",children:[Object(s.jsx)("div",{className:"searchPage__option",children:Object(s.jsx)(o.b,{to:"/settings",children:"Settings"})}),Object(s.jsx)("div",{className:"searchPage__option",children:Object(s.jsx)(o.b,{to:"/tools",children:"Tools"})})]})]})]})]}),c&&Object(s.jsxs)("div",{className:"searchPage__results",children:[Object(s.jsx)("p",{children:Object(s.jsxs)("div",{className:"searchPage__resultCount",children:["About ",null===a||void 0===a?void 0:a.searchInformation.formattedTotalResults," results (",null===a||void 0===a?void 0:a.searchInformation.formattedSearchTime,"second) for ",c]})}),null===a||void 0===a?void 0:a.items.map((function(e){var t,c,a,n,i,r,o,l;return Object(s.jsxs)("div",{className:"searchPage__result",children:[Object(s.jsxs)("a",{href:e.link,className:"searchPage__resultLink",children:[(null===(t=e.pagemap)||void 0===t||null===(c=t.cse_image)||void 0===c?void 0:c.length)>0&&(null===(a=e.pagemap)||void 0===a||null===(n=a.cse_image[0])||void 0===n?void 0:n.src)&&Object(s.jsx)("img",{src:(null===(i=e.pagemap)||void 0===i||null===(r=i.cse_image)||void 0===r?void 0:r.length)>0&&(null===(o=e.pagemap)||void 0===o||null===(l=o.cse_image[0])||void 0===l?void 0:l.src),alt:"",className:"searchPage__resultImage"}),e.displayLink]}),Object(s.jsx)("a",{href:e.link,className:"searchPage__resultTitle",children:Object(s.jsx)("h2",{children:e.title})}),Object(s.jsx)("p",{className:"searchPage__resultSnippet",children:e.snippet})]})}))]})]})};var F=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(o.a,{children:Object(s.jsxs)(_.c,{children:[Object(s.jsx)(_.a,{path:"/search",children:Object(s.jsx)(E,{})}),Object(s.jsx)(_.a,{path:"/",children:Object(s.jsx)(w,{})})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(p,{initialState:{term:null},reducer:S,children:Object(s.jsx)(F,{})})}),document.getElementById("root")),M()}},[[68,1,2]]]);
//# sourceMappingURL=main.b0d99adc.chunk.js.map