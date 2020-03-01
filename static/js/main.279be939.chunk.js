(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{13:function(e,t,n){e.exports={page:"layout_page__43maW",paddedPage:"layout_paddedPage__3RHjZ","page-enter":"layout_page-enter__27YSU","page-enter-active":"layout_page-enter-active__2aT68","page-exit":"layout_page-exit__geDha","page-exit-active":"layout_page-exit-active__nj_un",card:"layout_card__Jpkh6",cardImage:"layout_cardImage__2iCD2"}},17:function(e,t,n){e.exports={navigation:"navigation_navigation__unRcd",logo:"navigation_logo__R32-1",item:"navigation_item__3K7Tx typography_text__10NAX",itemMatched:"navigation_itemMatched__bZlsM"}},34:function(e,t,n){e.exports={page:"home_page__1DvLx"}},36:function(e,t,n){e.exports=n(55)},4:function(e,t,n){e.exports={text:"typography_text__10NAX",title:"typography_title__3kKKq typography_text__10NAX",header:"typography_header__18YFn typography_text__10NAX",subheader:"typography_subheader__3NDXW typography_header__18YFn typography_text__10NAX",body:"typography_body__1MddY typography_text__10NAX",link:"typography_link__ZwoMr typography_text__10NAX",blockQuote:"typography_blockQuote__1xowk"}},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),l=(n(43),n(15)),c=(n(44),n(45),n(16)),i=n(58),s=n(57),u=n(13),p=n.n(u),m=n(7),b=n(8),h=n(10),d=n(9),g=n(11),f=n(31),v=n(1),y=n(4),j=n.n(y),O=function(e){var t=e.children;return r.a.createElement("p",{className:j.a.body},t)},E=function(e){var t=e.children;return r.a.createElement("h1",{className:j.a.header},t)},_=function(e){var t=e.children;return r.a.createElement("h1",{className:j.a.subheader},t)},k=function(e){var t=e.children,n=e.to;return r.a.createElement("a",{className:j.a.link,href:n},t)},w=function(e){var t=e.children,n=e.to;return n.match(/^http/)?r.a.createElement(k,{to:n},t):r.a.createElement(l.b,{to:n,className:j.a.link},t)},N=function(e){var t=e.children;return r.a.createElement("h1",{className:j.a.title},t)},C={h1:N,h2:E,h3:_,p:O,a:function(e){var t=e.children,n=e.href;return r.a.createElement(w,{to:n},t)},blockquote:function(e){var t=e.children;return r.a.createElement("blockquote",{className:j.a.blockQuote},t)}},x=function(e){var t=e.children,n=e.title,a=void 0===n?"":n,o=(e.match,e.padding),l=void 0!==o&&o,c=e.className,i=void 0===c?"":c;return r.a.createElement("article",{className:[p.a.page,i,l&&p.a.paddedPage].join(" ")},r.a.createElement(f.Helmet,null,r.a.createElement("title",null,a&&"".concat(a," -")," Matt Bell")),a&&r.a.createElement(N,null,a),r.a.createElement(v.a,{components:C},t))},I=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(E,null,t))},M=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(O,null,t))},S=function(e){var t=e.img,n=e.children;return r.a.createElement("div",{className:p.a.card},r.a.createElement("div",{style:{backgroundImage:'url("'.concat(t,'")')},className:p.a.cardImage}),n)},R=n(34),A=n.n(R),D=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(x,{className:A.a.page},r.a.createElement(N,null,"Matt Bell"),r.a.createElement(O,null,"Software Engineer"),r.a.createElement(O,null,"London, UK"))}}]),t}(a.Component),L=n(20),W={},X="wrapper";function G(e){var t=e.components,n=Object(L.a)(e,["components"]);return Object(v.b)(X,Object.assign({},W,n,{components:t,mdxType:"MDXLayout"}),Object(v.b)("p",null,"I try to pay attention to as many areas of tech as possible, with particular\nexpertise in devops and backend development. Stuff I\u2019m particularly\ninterested in include the ",Object(v.b)("a",Object.assign({parentName:"p"},{href:"https://golang.org"}),"Go")," programming language, and\nthe ",Object(v.b)("a",Object.assign({parentName:"p"},{href:"https://kubernetes.io"}),"Kubernetes")," orchestration tool."),Object(v.b)("h2",{id:"experience"},"Experience"),Object(v.b)("h3",{id:"limejump-ltd"},"Limejump Ltd."),Object(v.b)("p",null,Object(v.b)("strong",{parentName:"p"},"Full Stack Developer"),", June 2019 to present"),Object(v.b)("p",null,"I\u2019m working on the energy trading and dispatching platforms for the business.\nCurrently I\u2019m also leading ongoing work to migrate team-owned services from\nAmazon ECS to Kubernetes, to align with wider business strategy and to allow\nthe team to increase release cadence and reliability."),Object(v.b)("p",null,"I set up and am running the internal ",Object(v.b)("a",Object.assign({parentName:"p"},{href:"https://golang.org"}),"Go")," Special Interest\nGroup, a slack channel and fortnightly meeting where developers working on Go\nprojects can ask questions, get advice, and show off things they have been\nworking on. It also provides us with an opportunity to standardise on libraries\nbetween teams. This was heavily inspired by the Go Working Group detailed by\nthe Sainsbury\u2019s technology team in their talk about testing at the\n",Object(v.b)("a",Object.assign({parentName:"p"},{href:"https://www.youtube.com/watch?v=zxUYSktrEXc"}),"Gophers London meetup"),"."),Object(v.b)("blockquote",null,Object(v.b)("p",{parentName:"blockquote"},"Go Working Group"),Object(v.b)("p",{parentName:"blockquote"},"A strong Go engineer ",Object(v.b)("strong",{parentName:"p"},"steers")," the group"),Object(v.b)("p",{parentName:"blockquote"},"Bring together people who work with Go ",Object(v.b)("strong",{parentName:"p"},"in the team")),Object(v.b)("p",{parentName:"blockquote"},"Discuss and decide which ",Object(v.b)("strong",{parentName:"p"},"tools to adopt")),Object(v.b)("p",{parentName:"blockquote"},Object(v.b)("strong",{parentName:"p"},"No compromise")," on Go/Engineering standards")),Object(v.b)("h3",{id:"state-street-bank"},"State Street Bank"),Object(v.b)("p",null,Object(v.b)("strong",{parentName:"p"},"Microservices Framework Engineer"),", July 2018 to May 2019"),Object(v.b)("p",null,"I joined State Street as a fresh-faced graduate in 2018. There, I worked as the\none junior in a team of highly seasoned devops engineers working to build out a\nplatform as a service offering for the company internally. I worked on the\nKubernetes team, aiming to provision ad-hoc Kubernetes clusters to developer\nteams across the business."),Object(v.b)("p",null,"I got to learn Kubernetes in instrinsic detail during my time there, as well as\nworking in an Agile softawre development team. Work I\u2019m particularly proud of\nincludes deploying two critical platform tools (a build artifact server and a\n",Object(v.b)("a",Object.assign({parentName:"p"},{href:"https://concourse-ci.org"}),"Continuous Integration")," server), and working on\neducating other teams about using the tools effectively."),Object(v.b)("h3",{id:"bell-software-development"},"Bell Software Development"),Object(v.b)("p",null,Object(v.b)("strong",{parentName:"p"},"Freelance Developer"),", May 2017 to January 2018"),Object(v.b)("p",null,"Miscellaneous freelancing work during Summer 2017, between terms at university.\nI worked with a React Native investment startup, a big data querying"),Object(v.b)("h3",{id:"netcraft-ltd"},"Netcraft Ltd."),Object(v.b)("p",null,Object(v.b)("strong",{parentName:"p"},"Internet Services Developer (intern)"),", June 2016 to September 2016"))}G.isMDXComponent=!0;var H=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_VERSION:"v0.4.2"})),r.a.createElement(x,{title:"About"},r.a.createElement(G,null),r.a.createElement(_,null,"Website"),r.a.createElement(O,null,"Version: ","v0.4.2"))}}]),t}(a.Component),q=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(x,{title:"Data"},r.a.createElement(E,null,"Music"),r.a.createElement(O,null,"What I'm listening to. ",r.a.createElement(w,{to:"/data/music"},"View")," "))}}]),t}(a.Component),Z={},B="wrapper";function K(e){var t=e.components,n=Object(L.a)(e,["components"]);return Object(v.b)(B,Object.assign({},Z,n,{components:t,mdxType:"MDXLayout"}),Object(v.b)("p",null,"Work in progress. \ud83d\udea7"),Object(v.b)("p",null,"One day this will forward you to the blog, or preview some articles!"),Object(v.b)("p",null,"For now though, there\u2019s just ",Object(v.b)("a",Object.assign({parentName:"p"},{href:"https://blog.mbell.dev"}),"this")," hyperlink."),Object(v.b)("p",null,"See you on the other side!"))}K.isMDXComponent=!0;var P=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(x,{title:"Blog"},r.a.createElement(K,null))}}]),t}(a.Component),J=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(x,{title:"Uses"},r.a.createElement(O,null,"What I'm using. Coming soon."))}}]),t}(a.Component),U=n(21),V=n.n(U),F=n(26),T=function(e){var t=e.artists,n=void 0===t?[]:t,a=e.name,o=void 0===a?"":a;return r.a.createElement(S,null,r.a.createElement(I,null,n.map((function(e){return e.name})).join(", ")),r.a.createElement(M,null,o))},Y=function(){var e=Object(c.f)(),t=Object(a.useState)([]),n=Object(F.a)(t,2),o=n[0],l=n[1],i=Object(a.useState)(!1),s=Object(F.a)(i,2),u=s[0],p=s[1];return Object(a.useEffect)((function(){!function(){var e,t;V.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),n.next=3,V.a.awrap(fetch("https://mbell-api.glitch.me/music/"));case 3:return e=n.sent,n.next=6,V.a.awrap(e.json());case 6:t=n.sent,l(t.tracks),p(!1);case 9:case"end":return n.stop()}}))}()}),[e]),r.a.createElement(x,{title:"Music"},r.a.createElement(O,null,"What I'm listening to."),r.a.createElement(O,null,"A list of songs from my ",r.a.createElement(w,{to:"https://open.spotify.com/playlist/70L5dD8ppo1xeIJoUg8Ehz?si=p2_lCxxyS86A782Uf_iFiQ"},"Daily Rotation")," ","playlist on Spotify. It's updated every few weeks."),u?r.a.createElement(O,null,"Loading..."):o.map((function(e,t){return r.a.createElement(T,Object.assign({key:t},e))})))},Q=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(x,{title:"404"},r.a.createElement(O,null,"What you're looking for, is not here."))}}]),t}(a.Component),z=[{path:"/about",component:H},{path:"/blog",component:P},{path:"/data/music",component:Y},{path:"/data",component:q},{path:"/uses",component:J},{path:"/",component:D,exact:!0}],$=function(){var e=Object(c.f)();return r.a.createElement("div",{className:"container"},r.a.createElement(i.a,null,r.a.createElement(s.a,{key:e.key,timeout:300,classNames:{enter:p.a["page-enter"],enterActive:p.a["page-enter-active"],exit:p.a["page-exit"],exitActive:p.a["page-exit-active"]}},r.a.createElement(c.c,{location:e},z.map((function(e,t){return r.a.createElement(c.a,{key:t,path:e.path,exact:e.exact,children:r.a.createElement(e.component,null)})})),r.a.createElement(c.a,{path:"*"},r.a.createElement(Q,null))))))},ee=n(17),te=n.n(ee),ne=function(e){var t=e.children,n=e.to,a=void 0===n?"#":n;return r.a.createElement(l.c,{exact:!0,to:a,className:te.a.item,activeClassName:te.a.itemMatched},t)};function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var oe=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M647.81 929.651C653.877 913.662 657.199 896.322 657.199 878.208C657.199 848.735 648.406 821.315 633.3 798.424C837.434 806.102 988 832.698 988 864.328C988 895.204 844.529 921.283 647.81 929.651ZM376.19 929.651C179.471 921.283 36 895.204 36 864.328C36 832.698 186.566 806.102 390.7 798.424C375.593 821.315 366.801 848.735 366.801 878.208C366.801 896.322 370.123 913.662 376.19 929.651Z",fill:"black"}),le=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M512 994C576.85 994 629.422 941.463 629.422 876.654C629.422 845.916 617.595 817.937 598.241 797.016C570.271 796.283 541.448 795.901 512 795.901C482.552 795.901 453.728 796.283 425.759 797.016C406.405 817.937 394.578 845.916 394.578 876.654C394.578 941.463 447.15 994 512 994ZM460.731 771.056C477.573 770.797 494.678 770.665 512 770.665C529.321 770.665 546.427 770.797 563.269 771.056C547.778 763.53 530.382 759.309 512 759.309C493.618 759.309 476.222 763.53 460.731 771.056Z",fill:"black"}),ce=r.a.createElement("path",{d:"M512 529.665C759.671 529.665 963.162 662.539 985.89 832.343C963.162 797.741 759.671 770.665 512 770.665C264.329 770.665 60.8381 797.741 38.1104 832.343C60.8381 662.539 264.329 529.665 512 529.665Z",fill:"black"}),ie=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M576.405 75.7195C555.726 69.7729 533.911 66.5916 511.369 66.5916C489.335 66.5916 467.997 69.6308 447.736 75.3207C457.125 48.9108 482.353 30 512 30C541.797 30 567.129 49.1014 576.405 75.7195Z",fill:"black"}),se=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M240.074 555.697L272.573 326.917C280.347 199.236 384.288 98.1361 511.369 98.1361C633.248 98.1361 733.843 191.129 748.732 311.377H749.22L783.864 555.261C706.868 517.647 613.307 495.597 512.415 495.597C411.133 495.597 317.239 517.817 240.074 555.697ZM512.476 371.529H510.676L463.876 263.529H425.176V389.529H451.276V288.729H453.076L496.276 389.529H526.876L570.076 288.729H571.876V389.529H597.976V263.529H559.276L512.476 371.529Z",fill:"black"}),ue=function(e){var t=e.svgRef,n=e.title,a=re(e,["svgRef","title"]);return r.a.createElement("svg",ae({width:1024,height:1024,viewBox:"0 0 1024 1024",fill:"none",ref:t},a),n?r.a.createElement("title",null,n):null,oe,le,ce,ie,se)},pe=r.a.forwardRef((function(e,t){return r.a.createElement(ue,ae({svgRef:t},e))})),me=(n.p,function(){return r.a.createElement(pe,{className:te.a.logo})}),be=function(){return r.a.createElement("nav",{className:te.a.navigation},r.a.createElement(me,null),r.a.createElement(ne,{to:"/"},"Home"),r.a.createElement(ne,{to:"/about"},"About"),r.a.createElement(ne,{to:"/data"},"Data"),r.a.createElement(ne,{to:"/blog"},"Blog"))},he=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,{basename:""},r.a.createElement($,null),r.a.createElement(be,null)))};"localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/);Object(o.render)(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.279be939.chunk.js.map