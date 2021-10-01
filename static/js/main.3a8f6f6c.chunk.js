(this["webpackJsonpreact-crypto-tracker"]=this["webpackJsonpreact-crypto-tracker"]||[]).push([[0],{42:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(31),s=c.n(r),i=(c(42),c(10)),j=c(3),l=c(11),o=c.n(l),b=c(14),d=c(5),h=c(32),u=c.n(h).a.create({baseURL:"https://api.coingecko.com/api/v3"}),O=c(1),x=function(e){for(var t=e.totalPost,c=e.postPerPage,n=e.paginate,a=[],r=1;r<=Math.ceil(t/c);r++)a.push(r);return Object(O.jsx)("ul",{className:"pagination",children:a.map((function(e){return Object(O.jsx)("li",{className:"pageNum",onClick:function(){return n(e)},children:e},e)}))})},m=function(e){var t=e.coinList;return Object(O.jsx)(O.Fragment,{children:t.map((function(e){return null===e.price_change_percentage_1h_in_currency?Object(O.jsx)("td",{children:"Currenty NULL"}):Object(O.jsxs)("tr",{children:[Object(O.jsxs)("th",{scope:"row",children:["#",e.market_cap_rank]}),Object(O.jsx)("td",{children:Object(O.jsx)(i.b,{to:"/react-crypto-tracker/coinDetails/".concat(e.id),children:Object(O.jsxs)("div",{className:"namePictureAlign",children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{className:"imageSize",alt:e.symbol,src:e.image})}),e.name,Object(O.jsx)("div",{className:"symbol",children:e.symbol.toUpperCase()})]})})}),Object(O.jsxs)("td",{children:["$",e.current_price]}),e.price_change_percentage_1h_in_currency<0?Object(O.jsxs)("td",{className:"redPrecentage",children:[e.price_change_percentage_1h_in_currency.toFixed(2),"%"]}):Object(O.jsxs)("td",{className:"greenPrecentage",children:[e.price_change_percentage_1h_in_currency.toFixed(2),"%"]}),e.price_change_percentage_24h<0?Object(O.jsxs)("td",{className:"redPrecentage",children:[e.price_change_percentage_24h.toFixed(2),"%"]}):Object(O.jsxs)("td",{className:"greenPrecentage",children:[e.price_change_percentage_24h.toFixed(2),"%"]}),Object(O.jsxs)("td",{children:["$",e.market_cap.toLocaleString()]})]},e.id)}))})},p=function(){return Object(O.jsxs)("div",{className:"double",children:[Object(O.jsx)("div",{className:"double-bounce1"}),Object(O.jsx)("div",{className:"double-bounce2"})]})},f=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(1),s=Object(d.a)(r,2),i=s[0],j=s[1],l=Object(n.useState)(20),h=Object(d.a)(l,1)[0],f=Object(n.useState)(!0),g=Object(d.a)(f,2),N=g[0],v=g[1],_=i*h,k=_-h,y=c.slice(k,_);return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/coins/markets",{params:{vs_currency:"usd",per_page:250,page:i,price_change_percentage:"1h, 24h"}});case 2:t=e.sent,a(t.data),v(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsx)(O.Fragment,{children:N?Object(O.jsx)(p,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("table",{children:[Object(O.jsxs)("thead",{children:[Object(O.jsx)("th",{children:"Rank"}),Object(O.jsx)("th",{children:"Coin"}),Object(O.jsx)("th",{children:"Price"}),Object(O.jsx)("th",{children:"1h"}),Object(O.jsx)("th",{children:"24h"}),Object(O.jsx)("th",{children:"Mkt Cap"})]}),Object(O.jsx)("tbody",{children:Object(O.jsx)(m,{coinList:y})})]}),Object(O.jsx)(x,{postPerPage:h,paginate:function(e){return j(e)},totalPost:c.length})]})})},g=c(35),N=c.n(g),v=function(e){var t=e.id,c=Object(n.useState)([{data:[]}]),a=Object(d.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)("1"),j=Object(d.a)(i,2),l=j[0],h=j[1],x=Object(n.useState)(!0),m=Object(d.a)(x,2),f=m[0],g=m[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(o.a.mark((function e(){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/coins/".concat(t,"/ohlc?"),{params:{vs_currency:"usd",days:l}});case 2:return c=e.sent,e.next=5,c.data.map((function(e){return{x:e[0],y:[e[1],e[2],e[3],e[4]]}}));case 5:n=e.sent,g(!1),s([{data:n}]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),Object(O.jsxs)("div",{children:[f?Object(O.jsx)(p,{}):Object(O.jsx)(N.a,{options:{chart:{type:"candlestick"},xaxis:{type:"datetime",labels:{style:{colors:"#fff"}}},yaxis:{tooltip:{enabled:!0},labels:{style:{colors:"#fff"}}}},series:r,type:"candlestick",width:"80%",height:420,align:"center"}),Object(O.jsxs)("div",{className:"btns",children:[Object(O.jsx)("button",{className:"btn",onClick:function(){return h("1")},children:"24h"}),Object(O.jsx)("button",{className:"btn",onClick:function(){return h("7")},children:"7d"}),Object(O.jsx)("button",{className:"btn",onClick:function(){return h("14")},children:"14d"}),Object(O.jsx)("button",{className:"btn",onClick:function(){return h("30")},children:"30d"}),Object(O.jsx)("button",{className:"btn",onClick:function(){return h("90")},children:"90d"}),Object(O.jsx)("button",{className:"btn",onClick:function(){return h("180")},children:"180d"}),Object(O.jsx)("button",{className:"btn",onClick:function(){return h("365")},children:"365d"})]})]})},_=function(e){var t=e.id,c=Object(n.useState)([]),a=Object(d.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/coins/markets",{params:{vs_currency:"usd",ids:t}});case 2:c=e.sent,s(c.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h2",{className:"header",children:[t.toUpperCase()," Price and Market Status"]}),Object(O.jsx)("table",{children:Object(O.jsx)("tbody",{children:r.map((function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"thName",children:"Name:"}),Object(O.jsx)("td",{children:e.name})]}),Object(O.jsxs)("tr",{children:[Object(O.jsxs)("th",{className:"thName",children:[e.symbol.toUpperCase()," Price:"]}),Object(O.jsxs)("td",{children:["$",e.current_price]})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"thName",children:"Market Cap Rank:"}),Object(O.jsx)("td",{children:e.market_cap_rank})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"thName",children:"Market Cap:"}),Object(O.jsxs)("td",{children:["$",e.market_cap.toLocaleString()]})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"thName",children:"Market Cap Change 24h"}),Object(O.jsx)("td",{children:e.market_cap_change_24h})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"thName",children:"24h Low/24h High:"}),Object(O.jsxs)("td",{children:["$",e.low_24h.toLocaleString(),Object(O.jsx)("span",{className:"lowHighLine",children:"/"}),"$",e.high_24h.toLocaleString()]})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"thName",children:"Circulating Supply:"}),Object(O.jsx)("td",{children:e.circulating_supply.toLocaleString()})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"thName",children:"Total Volume:"}),Object(O.jsx)("td",{children:e.total_volume.toLocaleString()})]})]})}))})})]})},k=function(){var e=Object(j.f)().id;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{id:e}),Object(O.jsx)(_,{id:e})]})},y=c(36),S=c(37),C=function(){return Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{className:"ul",children:[Object(O.jsx)("li",{className:"li",children:Object(O.jsxs)(i.b,{className:"link",to:"/react-crypto-tracker/",children:["Home ",Object(O.jsx)(y.a,{className:"icon"})]})}),Object(O.jsx)("li",{className:"li",children:Object(O.jsxs)(i.b,{className:"link",to:"/Notes",children:["Notes ",Object(O.jsx)(S.a,{className:"icon"})]})})]})})},w=c(21),L=c(71),F=c(20),P=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(d.a)(r,2),i=s[0],j=s[1],l=Object(n.useState)(!1),o=Object(d.a)(l,2),b=o[0],h=o[1],u=Object(n.useState)(""),x=Object(d.a)(u,2),m=x[0],p=x[1],f=Object(n.useState)(null),g=Object(d.a)(f,2),N=g[0],v=g[1],_=Object(n.useState)([]),k=Object(d.a)(_,2),y=k[0],S=k[1];Object(n.useEffect)((function(){var e=localStorage.getItem("notes")||"[]";e&&S(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(y))}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t={id:Object(L.a)(),date:(new Date).toLocaleDateString(),title:c,text:i};""!==i&&""!==c&&(j(""),a(""),y.push(t),h(!1))},children:[Object(O.jsx)("input",{className:"input",type:"text",placeholder:"Title...",onChange:function(e){return a(e.target.value)},onFocus:function(){return h(!0)},value:c}),b?Object(O.jsx)("textarea",{className:"textArea",placeholder:"Text here...",maxLength:"200",value:i,onChange:function(e){return j(e.target.value)}}):"",Object(O.jsx)("button",{className:"noteBtn",type:"submit",children:"+"})]}),Object(O.jsx)("div",{className:"grid",children:y.map((function(e){return Object(O.jsxs)("div",{className:"note",children:[N===e.id?Object(O.jsx)("input",{className:"editInput",type:"text",placeholder:"Edit note...",value:m,onChange:function(e){return p(e.target.value)}}):Object(O.jsxs)("div",{className:"noteInfo",children:[Object(O.jsxs)("div",{style:{wordWrap:"anywhere"},children:[Object(O.jsx)("h3",{children:e.title}),Object(O.jsx)("p",{children:e.text})]}),Object(O.jsx)("p",{className:"date",children:e.date})]}),Object(O.jsxs)("div",{className:"noteBtns",children:[Object(O.jsxs)("button",{onClick:function(){return function(e){var t=Object(w.a)(y).filter((function(t){return t.id!==e}));S(t)}(e.id)},className:"del",children:["Delete ",Object(O.jsx)(F.b,{})]}),e.id===N?Object(O.jsx)("button",{className:"del",onClick:function(){return function(e){var t=Object(w.a)(y).map((function(t){return t.id===e&&(t.text=m),t}));S(t),v(null),p("")}(e.id)},children:"Submit Edit"}):Object(O.jsxs)("button",{className:"del",onClick:function(){return v(e.id)},children:["Edit ",Object(O.jsx)(F.a,{})]})]})]},e.id)}))})]})},E=function(){return Object(O.jsx)("div",{className:"notFound",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"404... Something went wrong :("}),Object(O.jsxs)("p",{children:["Go back ",Object(O.jsx)(i.b,{to:"/react-crypto-tracker/",children:"here"})]})]})})};var M=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(C,{}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/react-crypto-tracker",component:f}),Object(O.jsx)(j.a,{path:"/react-crypto-tracker/coinDetails/:id",component:k}),Object(O.jsx)(j.a,{path:"/Notes",component:P}),Object(O.jsx)(j.a,{path:"*",component:E})]})]})})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(M,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.3a8f6f6c.chunk.js.map