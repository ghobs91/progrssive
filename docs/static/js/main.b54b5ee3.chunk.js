(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e){e.exports={userId:"a61e0052-5b65-4fea-8e41-f27d96e1c79c",accessToken:"A12n7t3OcKo_oz-et0rId-78j-yCuaoU7gW-jypfxBmcwkPXCFgzPPyTFIzjtLRCldiqfF4T1PmkLr6xVGDFsrBPLI7LtSYea2dUhkDN5wsXvR3NxY_9nVGuqz_H1GV1kYqUbwIcw-NJt4blzEE0m7_oZPBfKwq2HIyL2Ux11fSN7eQvvx3aaou30bfnkq3LNvheCGNBzfWYyRR9XmpEiTK2DqjHQ-DrFGoWFRryG9n1T4XQaqkRFZHMtNBlZQ:feedlydev",feedlyUrl:"https://cloud.feedly.com/v3"}},5460:function(e,t,n){e.exports=n(5667)},5645:function(e,t){},5667:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),i=n.n(c),o=n(22),u=n(14),s=n(63),l=n(5672),f=n(3),d=n.n(f),p=n(15),m=n(6),v=n(158),h=n.n(v),b=n(50),g=function(e){var t={};for(var n in e||{})t[n]=e[n];return h.a.stringify(t)},y=function(){var e=Object(m.a)(d.a.mark(function e(t,n){var r,a,c,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=g(n),a=0===r.length?"":t.includes("?")?"&":"?",c="".concat(b.feedlyUrl).concat(t).concat(a).concat(r),e.next=5,fetch("".concat("https://cors-anywhere.herokuapp.com/").concat(c),{method:"GET",headers:{Authorization:"OAuth ".concat(b.accessToken)}});case 5:if((i=e.sent).ok){e.next=8;break}throw i;case 8:return e.abrupt("return",i.json());case 9:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),x={unreadOnly:!0},E=function(){var e=Object(m.a)(d.a.mark(function e(t){var n,r,a=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"contents",r=a.length>2?a[2]:void 0,e.abrupt("return",y("".concat("/streams","/").concat(n,"?streamId=").concat(t),Object(p.a)({},x,r)));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),O=function(e){return"user/".concat(e,"/category/global.all")},k=function(e){return"user/".concat(e,"/category/global.uncategorized")},w=function(e){return"user/".concat(e,"/tag/global.saved")},j=n(4),S=n(23),C=n(13),A=Object(u.a)({"@global":{".nested-list *":{paddingLeft:"40px"}}}),I=function(e){A();var t=Object(r.useState)(e.defaultOpen),n=Object(C.a)(t,2),a=n[0],c=n[1];return r.createElement(r.Fragment,null,e.header({open:a,toggle:function(){return c(!a)}}),r.createElement(j.g,{in:a,timeout:"auto",unmountOnExit:!0},r.createElement(j.n,{disablePadding:!0,className:"nested-list"},e.children)))},T=n(5671),N=Object(T.a)(function(e){return r.createElement(j.o,{button:!0,onClick:function(){return e.history.push("/stream/".concat(e.feed.feedId))}},r.createElement(j.r,null,e.feed.title))}),F=Object(T.a)(function(e){return r.createElement(I,{defaultOpen:!0,header:function(t){return r.createElement(j.o,{button:!0,onClick:function(){return e.history.push("/stream/".concat(e.collection.id))}},r.createElement(j.p,null,r.createElement(S.g,null)),r.createElement(j.r,null,e.collection.label),r.createElement("div",{onClick:function(e){t.toggle(),e.stopPropagation()}},t.open?r.createElement(S.a,null):r.createElement(S.b,null)))}},e.collection.feeds.map(function(e){return r.createElement(N,{key:e.id,feed:e})}))}),R=n(44),L=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];Object(r.useEffect)(function(){e.apply(void 0,n)},[].concat(n))},z=[],P=R.store,B=function(){return P};window.getStore=B,Object(R.afterChange)(function(e){e.store!==e.prevStore&&(P=e.store,z.forEach(function(t){return t(e.store)}))});var U=function(){var e=Object(r.useState)(R.store),t=Object(C.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)(function(){var e=function(e){return z.push(e),e}(a);return function(){!function(e){var t=z.indexOf(e);z.splice(t,1)}(e)}}),n},q=n(27),M=n(34),H=n(51),W=n.n(H);window.localForage=W.a;var _,J,D=function(e,t){return W.a.setItem(e,JSON.stringify(t))},G=function(e){return D("".concat("entries",".").concat(e.id),e)},Y=function(e,t){return W.a.getItem(e).then(function(){var t=Object(m.a)(d.a.mark(function t(n){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Set,t.next=3,X(e);case 3:return t.t1=t.sent,t.abrupt("return",new t.t0(t.t1));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).then(function(n){return[].concat(Object(M.a)(Object.keys(t).map(function(r){return n.add(r),D("".concat(e,".").concat(r),t[r])})),[D(e,Array.from(n))])})},Q=function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,W.a.getItem(t);case 3:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(m.a)(d.a.mark(function e(t){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:return n=e.sent,e.abrupt("return",Array.isArray(n)?n:[]);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(m.a)(d.a.mark(function e(t){var n,r,a,c,i=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:20,e.next=3,X(t);case 3:r=e.sent,a=0;case 5:if(!(a<r.length)){e.next=13;break}return e.next=8,Promise.all(r.slice(a,Math.min(a+n,r.length)).map(function(e){return Q("".concat(t,".").concat(e))}));case 8:c=e.sent,B()[t]=Object(p.a)({},B()[t],c.reduce(function(e,t){return Object(p.a)({},e,Object(q.a)({},t.id,t))},{}));case 10:a+=n,e.next=5;break;case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(m.a)(d.a.mark(function e(t){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:return n=e.sent,B[t]=n,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([V("entries"),V("streams")]);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("".concat("/collections","/")));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(m.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!B().updating.collections){e.next=2;break}return e.abrupt("return");case 2:return B().updating.collections=!0,t=!B().collections,e.next=6,K("collections");case 6:if((n=e.sent)&&(B().collections=n),!t){e.next=22;break}return e.prev=9,e.next=12,$();case 12:return n=e.sent,B().collections=n,e.next=16,D("collections",n);case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(9),window.snackHelper.enqueueSnackbar("Unable to fetch collections. You appear to be offline."),B().collections=[];case 22:delete B().updating.collections;case 23:case"end":return e.stop()}},e,this,[[9,18]])}));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(m.a)(d.a.mark(function e(){var t,n=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.length>0&&void 0!==n[0]&&n[0],!B().updating.profile){e.next=3;break}return e.abrupt("return");case 3:return _=ne(t),B().updating.profile=!0,e.next=7,_;case 7:B().profile=e.sent,B().updating.profile=!1;case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(m.a)(d.a.mark(function e(){var t,n=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=n.length>0&&void 0!==n[0]&&n[0])||!_){e.next=3;break}return e.abrupt("return",_);case 3:return _=re(t),e.abrupt("return",_);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(m.a)(d.a.mark(function e(t){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return e.next=3,K("profile");case 3:n=e.sent;case 4:if(n){e.next=10;break}return e.next=7,y("/profile");case 7:return n=e.sent,e.next=10,D("profile",n);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=U();return Object(r.useEffect)(function(){e.profile||te()},[]),e.profile},ce=Object(T.a)(function(e){return r.createElement(j.o,{onClick:function(){return e.history.push("/stream/".concat(e.categoryId))},button:!0},r.createElement(j.p,null,r.createElement(S.g,null)),r.createElement(j.r,null,e.text))}),ie=function(e){var t=ae(),n=function(){var e=U();return L(ee),e.collections?Object.values(e.collections):[]}();return r.createElement(r.Fragment,null,r.createElement(ce,{text:"All",categoryId:O(t&&t.id)}),r.createElement(ce,{text:"Saved",categoryId:w(t&&t.id)}),n.map(function(e){return r.createElement(F,{collection:e,key:e.id})}))},oe=function(e){var t=Object(r.useState)(!1),n=Object(C.a)(t,2),c=n[0],i=n[1];return a.a.createElement("div",null,a.a.cloneElement(e.trigger,{onClick:function(){return i(!0)}}),a.a.createElement(j.i,{open:c,onClose:function(){return i(!1)}},a.a.createElement("div",{style:{width:"250px",margin:"10px"}},a.a.createElement(j.w,{variant:"h5"},"Progrssive Reader"),a.a.createElement(j.n,null,a.a.createElement(j.o,{button:!0},a.a.createElement(j.p,null,a.a.createElement(S.d,null)),a.a.createElement(j.r,{primary:"Login"}))),a.a.createElement(ie,null))))},ue=(a.a.createContext(void 0),Object(u.a)({pageActions:{flex:1,display:"flex",flexDirection:"row-reverse",width:"100%"}})),se=function(e){var t=ue();return a.a.createElement(j.a,{position:"static",color:"primary"},a.a.createElement(j.v,null,a.a.createElement(oe,{trigger:a.a.createElement(j.l,null,a.a.createElement(S.c,null))}),a.a.createElement(j.w,{variant:"title"},"Progrssive"),a.a.createElement("div",{className:t.pageActions,id:"app-bar-button-container"})))},le=(n(5645),Object(s.withSnackbar)(function(e){return window.snackHelper=e,null})),fe=n(161),de=n(165),pe=function(e){return"".concat(e.engagement?e.engagement+" ":"").concat(e.origin&&e.origin.title," / ").concat(Object(de.a)(new Date(e.published)))},me=function(){var e=Object(m.a)(d.a.mark(function e(t){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("/entries/".concat(encodeURIComponent(t)));case 2:return n=e.sent,e.abrupt("return",n[0]);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(m.a)(d.a.mark(function e(t){var n,r,a,c=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.length>1&&void 0!==c[1]&&c[1],!B().updating[t]){e.next=3;break}return e.abrupt("return");case 3:if(B().updating[t]=!1,e.t1=!n,!e.t1){e.next=9;break}return e.next=8,i=t,Q("".concat("entries",".").concat(i));case 8:e.t1=e.sent;case 9:if(e.t0=e.t1,e.t0){e.next=14;break}return e.next=13,me(t);case 13:e.t0=e.sent;case 14:r=e.t0,(a=B()).entries=Object(p.a)({},a.entries,Object(q.a)({},t,r)),delete a.updating[t];case 18:case"end":return e.stop()}var i},e,this)}));return function(t){return e.apply(this,arguments)}}(),he=function(e){var t=Object(r.useState)(void 0),n=Object(C.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)(function(){c(document.getElementById("app-bar-button-container"))},[]),a?i.a.createPortal(e.children,a):null},be=function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n="/markers",r=t,fetch("".concat("https://cors-anywhere.herokuapp.com/").concat(b.feedlyUrl).concat(n),{method:"POST",headers:{Authorization:"OAuth ".concat(b.accessToken),"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Ee(t);case 9:case"end":return e.stop()}var n,r},e,this,[[0,5]])}));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=Object(m.a)(d.a.mark(function e(t){var n,r,a=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(a.length>1&&void 0!==a[1])||a[1],t=Array.isArray(t)?t:[t],r={type:"entries",action:n?"keepUnread":"markAsRead",entryIds:t.map(function(e){return e.id})},e.next=5,be(r);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=Object(m.a)(d.a.mark(function e(t){var n,r,a=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(a.length>1&&void 0!==a[1])||a[1],r={type:"entries",action:n?"markAsSaved":"markAsUnsaved",entryIds:[t.id]},e.next=4,be(r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("markers-for-online",J);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(J){e.next=4;break}return e.next=3,Oe();case 3:J=e.sent;case 4:return J.push(t),e.next=7,xe();case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q("markers-for-online");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();Object(m.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){var e=Object(m.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=J.map(be),J.length=0,e.next=4,xe();case 4:return e.next=6,Promise.all(t);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),e.next=3,Oe();case 3:if(J=e.sent,!navigator.onLine){e.next=7;break}return e.next=7,t();case 7:window.addEventListener("online",t);case 8:case"end":return e.stop()}},e,this)}))();var ke=function(){var e=Object(m.a)(d.a.mark(function e(t,n){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.unread=n,e.next=3,ge(t,t.unread);case 3:return e.next=5,G(t);case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),we=function(){var e=Object(m.a)(d.a.mark(function e(t,n,r){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=w(r),t.tags=n?[].concat(Object(M.a)(t.tags||[]),[{id:a,label:"Saved For Later"}]):t.tags.filter(function(e){return e.id!==a}),e.next=4,ye(t,n);case 4:return e.next=6,G(t);case 6:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}(),je=Object(u.a)({on:{color:"white !important"},off:{color:"gray !important"}}),Se=function(e){var t=je(),n=Object(r.useCallback)(function(){ke(e.entry,!e.entry.unread)},[e.entry,e.entry.unread]);return r.createElement(j.l,{className:e.entry.unread?t.on:t.off,onClick:n},r.createElement(S.f,null))},Ce=function(e){var t,n=je(),a=ae(),c=(t=e.entry).tags&&t.tags.some(function(e){return e.id.endsWith("global.saved")}),i=Object(r.useCallback)(function(){we(e.entry,!c,a.id)},[e.entry,c]);return r.createElement(j.l,{className:n.on,onClick:i},c?r.createElement(S.h,null):r.createElement(S.i,null))},Ae=function(e,t){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200,c=0;return Object(r.useCallback)(function(){c++,setTimeout(function(){return c--},a),c>=n&&e.apply(void 0,arguments)},[].concat(Object(M.a)(t),[n,a]))}(e,t,2,arguments.length>2&&void 0!==arguments[2]?arguments[2]:200)},Ie=function(e){return function(e){var t=Object(r.useState)(!1),n=Object(C.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(void 0),o=Object(C.a)(i,2),u=o[0],s=o[1];return Object(r.useCallback)(function(t){clearTimeout(u),a||(c(!0),e.onStart&&e.onStart()),e.onScroll&&e.onScroll();var n=setTimeout(function(){c(!1),e.onEnd&&e.onEnd()},100);s(n)},[e,a,u])}({onEnd:e})},Te=Object(u.a)({root:{maxWidth:"1000px",marginLeft:"auto",marginRight:"auto"},"@global":{"article img":{width:"100%"},"article figure":{margin:0}}}),Ne=Object(T.a)(function(e){var t=U(),n=Te(),a=function(){var e=Object(u.b)();return!!e&&!Object(fe.unstable_useMediaQuery)(e.breakpoints.up("md")).valueOf()}(),c=Object(r.useRef)(null),i=t.entries[e.id];Object(r.useEffect)(function(){!i&&e.id&&ve(e.id)},[e.id]),function(e){var t=U().settings.markOpenedAsRead;Object(r.useEffect)(function(){e&&e.unread&&t&&ke(e,!1)},[e&&e.id,t])}(i),function(e,t){Object(r.useEffect)(function(){e&&t&&t.current&&t.current.parentElement.scrollTo(0,0)},[e&&e.id])}(i,c);var o=Ae(function(n){t.settings.doubleTapToCloseArticles&&(e.history.goBack(),n.stopPropagation(),document.getSelection().removeAllRanges())},[]);if(!i)return r.createElement(j.f,null);var s=function(e){var t=e.content||e.summary;return t&&t.content}(i),l=r.createElement(r.Fragment,null,r.createElement(j.d,{title:i.title,subheader:pe(i)}),s&&r.createElement(j.c,null,r.createElement(j.w,{component:"small"},r.createElement("div",{dangerouslySetInnerHTML:{__html:s}}))));return r.createElement("article",{className:n.root,ref:c,onClick:o},a?l:r.createElement(j.b,null,l),e.active&&r.createElement(r.Fragment,null,r.createElement(he,null,r.createElement(Se,{entry:i})),r.createElement(he,null,r.createElement(Ce,{entry:i}))))}),Fe=n(5669),Re=function(e){var t=Array.isArray(e.children)?e.children:[e.children],n=Object(r.useRef)(null),a=Object(r.useState)(e.activeIndex||0),c=Object(C.a)(a,2),i=c[0],o=c[1];Object(r.useEffect)(function(){if(!isNaN(e.activeIndex)&&i!==e.activeIndex&&n.current){if(e.activeIndex<0||n.current&&e.activeIndex>n.current.children.length)throw new Error("Index ".concat(e.activeIndex," out of range!"));var t=n.current.children[e.activeIndex];n.current.scrollTo(t.offsetLeft,0),o(e.activeIndex)}},[e.activeIndex]);var u=Ie(function(){for(var t,r=n.current,a=1/0,c=0;c<r.children.length;++c){var u=r.children[c],s=Math.abs(r.scrollLeft-u.offsetLeft);s<a&&(a=s,t=c)}void 0!==t&&t!==i&&(o(t),e.onSwiped&&e.onSwiped(t))});return r.createElement("div",{style:{scrollSnapType:"x mandatory",overflowX:"scroll",display:"flex",scrollbarWidth:"none"},onScroll:u,ref:n},t.map(function(e,t){return r.createElement("div",{key:t,style:{flexShrink:0,scrollSnapAlign:"start",scrollSnapStop:"always"}},e)}))},Le=function(e){return r.createElement(Fe.a,{path:"".concat(e.prefix,":id*"),component:function(t){var n=t.location.pathname.substr(e.prefix.length);return e.setActive(e.prefix,n),null}})},ze=Object(T.a)(function(e){var t=U(),n=Object(r.useState)(0),a=Object(C.a)(n,2),c=a[0],i=a[1],o=Object(r.useCallback)(function(n,r){t.current[n]=r;var a=e.routes.findIndex(function(e){return e.prefix===n});i(a)},[e.routes,i]);return r.createElement(r.Fragment,null,r.createElement(Re,{activeIndex:c,onSwiped:function(n){if(n!==c){var r=e.routes[n].prefix,a=t.current[r];i((n+1)%2),e.history.push("".concat(r).concat(a||""))}}},e.routes.map(function(e,n){return r.createElement("div",{style:{width:"100vw",height:"90vh",overflow:"hidden auto",paddingTop:"10px"},key:e.prefix},e.render(t.current[e.prefix],c===n))})),e.routes.map(function(e){return r.createElement(Le,{key:e.prefix,prefix:e.prefix,setActive:o})}),r.createElement(Fe.a,{path:"/",exact:!0,component:function(){return i(1),null}}))}),Pe=n(163),Be=function(e,t){var n;return function(){for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];clearTimeout(n),n=setTimeout(function(){return e.apply(void 0,a)},t)}},Ue={markOpenedAsRead:!0,markScrolledAsRead:!0,doubleTapToCloseArticles:!0,unreadOnly:!0,fontSize:3,darkMode:!1},qe=Be(function(e){window.localStorage.setItem("settings",JSON.stringify(e)),console.log("saved settings!")},1e3),Me=function(e,t){B().settings[e]=t,qe(B().settings)},He=Object(u.a)({slider:{width:"48px !important"}}),We=function(e){var t=He(),n=U(),a=r.useCallback(function(e,t){var n=e.target.name;Me(n,t)},[]),c=Object(r.useCallback)(function(e,t){Me("fontSize",t)},[]);return r.createElement("div",null,r.createElement(j.n,null,r.createElement(j.o,null,r.createElement(j.r,{primary:"Read opened articles",secondary:"Marks articles as read when you open them."}),r.createElement(j.q,null,r.createElement(j.u,{checked:n.settings.markOpenedAsRead,name:"markOpenedAsRead",onChange:a}))),r.createElement(j.o,null,r.createElement(j.r,{primary:"Auto mark as read",secondary:"Marks articles as read when you scoll past them."}),r.createElement(j.q,null,r.createElement(j.u,{checked:n.settings.markScrolledAsRead,name:"markScrolledAsRead",onChange:a}))),r.createElement(j.o,null,r.createElement(j.r,{primary:"Double tap to close articles",secondary:"Whether articles can be closed by double tapping them."}),r.createElement(j.q,null,r.createElement(j.u,{checked:n.settings.doubleTapToCloseArticles,name:"doubleTapToCloseArticles",onChange:a}))),r.createElement(j.h,null),r.createElement(j.o,null,r.createElement(j.r,{primary:"Article Text Size",secondary:"Controls the size of the article text"}),r.createElement(j.q,null,r.createElement(Pe.a,{className:t.slider,min:1,max:5,step:1,onChange:c,value:n.settings.fontSize})))))},_e=Object(u.a)({paper:{cursor:"pointer",position:"relative"},card:{maxHeight:"500px"},read:{color:"#F0F0F0 !important"},unread:{},tint:{background:"#FFFFFF",opacity:.6,top:"0",left:"0",bottom:"0",right:"0",position:"absolute"}}),Je=function(e){var t,n=_e(),r=(t=e.entry).visual&&t.visual.url,c=pe(e.entry),i=function(e){return e.summary&&e.summary.content}(e.entry),o=!e.entry.unread&&e.showingUnreadOnly;return a.a.createElement(j.s,{className:n.paper},a.a.createElement(j.b,{className:n.card},a.a.createElement(j.d,{title:e.entry.title,subheader:c}),r&&a.a.createElement(j.e,{src:r,component:"img",title:"Visual"}),i&&a.a.createElement(j.c,null,a.a.createElement(j.w,{component:"small"},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}})))),o&&a.a.createElement("div",{className:n.tint}))},De=R.store,Ge=function(e,t,n){n[e]||(n[e]={id:e,title:t,items:[],lastFetched:0})},Ye=function(){var e=Object(m.a)(d.a.mark(function e(t){var n,r,a,c,i,o,u,s,l,f,m,v,h,b,g,y,x,E,j,S,C,A,I,T,N;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne();case 2:for(n=e.sent,r=B(),a=O(n.id),c=w(n.id),i=k(n.id),o={},u=Object.values(r.streams),s=0;s<u.length;s++)l=u[s],o[l.id]=Object(p.a)({},l,{items:Object(M.a)(l.items)});f={},Ge(a,"All",o),Ge(c,"Saved for later",o),Ge(i,"Uncategorized",o),m=!0,v=!1,h=void 0,e.prev=17,b=t.items[Symbol.iterator]();case 19:if(m=(g=b.next()).done){e.next=48;break}if(y=g.value,f[y.id]=y,o[a].items.push(y.id),y.categories&&0!==y.categories.length){e.next=26;break}return o[i].items.push(y.id),e.abrupt("continue",45);case 26:for(x=!0,E=!1,j=void 0,e.prev=29,S=y.categories[Symbol.iterator]();!(x=(C=S.next()).done);x=!0)A=C.value,Ge(A.id,A.label,o),o[A.id].items.push(y.id);e.next=37;break;case 33:e.prev=33,e.t0=e.catch(29),E=!0,j=e.t0;case 37:e.prev=37,e.prev=38,x||null==S.return||S.return();case 40:if(e.prev=40,!E){e.next=43;break}throw j;case 43:return e.finish(40);case 44:return e.finish(37);case 45:m=!0,e.next=19;break;case 48:e.next=54;break;case 50:e.prev=50,e.t1=e.catch(17),v=!0,h=e.t1;case 54:e.prev=54,e.prev=55,m||null==b.return||b.return();case 57:if(e.prev=57,!v){e.next=60;break}throw h;case 60:return e.finish(57);case 61:return e.finish(54);case 62:for(I=Object.values(o),T=0;T<I.length;T++)(N=I[T]).items=Array.from(new Set(N.items));B().entries=Object(p.a)({},B().entries,f),B().streams=o,Promise.all([Y("streams",B().streams),Y("entries",B().entries)]);case 67:case"end":return e.stop()}},e,this,[[17,50,54,62],[29,33,37,45],[38,,40,44],[55,,57,61]])}));return function(t){return e.apply(this,arguments)}}(),Qe=function(){var e=Object(m.a)(d.a.mark(function e(t){var n,r,a,c=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.length>1&&void 0!==c[1]&&c[1],r=c.length>2&&void 0!==c[2]&&c[2],B().profile){e.next=5;break}return e.next=5,te();case 5:if(t=t||O(B().profile.id),!B().updating[t]){e.next=8;break}return e.abrupt("return");case 8:return B().updating[t]=!0,e.prev=9,e.next=12,E(t,"contents",{unreadOnly:n});case 12:a=e.sent,Ye(a),r&&Xe(),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),window.snackHelper.enqueueSnackbar("Unable to update stream. You appear to be offline.");case 20:B().updating[t]=!1;case 21:case"end":return e.stop()}},e,this,[[9,17]])}));return function(t){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(m.a)(d.a.mark(function e(){var t,n,r,a,c,i=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:void 0,e.next=3,ne();case 3:n=e.sent,r=O(n.id),e.prev=5;case 6:return a={unreadOnly:!0},t&&(a.continuation=t),e.next=10,E(r,"contents",a);case 10:c=e.sent,t=c.continuation,Ye(c);case 13:if(t){e.next=6;break}case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),window.snackHelper.enqueueSnackbar("Background update failed.");case 19:window.snackHelper.enqueueSnackbar("Background sync complete.");case 20:case"end":return e.stop()}},e,this,[[5,16]])}));return function(){return e.apply(this,arguments)}}(),Ve=Object(u.a)({root:{display:"flex",justifyContent:"center"}}),Ke=function(e){var t=Ve();return r.createElement("div",{className:t.root},e.children)},Ze=function(e){var t=Object(r.useRef)(null),n=Object(r.useState)(null),a=Object(C.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(null),u=Object(C.a)(o,2),s=u[0],l=u[1],f=Object(r.useState)(!1),d=Object(C.a)(f,2),p=d[0],m=d[1];return r.useEffect(function(){if(t&&t.current){c&&s&&c.removeEventListener("scroll",s);var n=Be(function(e){var n=function(e,t){if(!e||!t)return!1;var n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return n.bottom<r.top}(c,t.current);n!==p&&m(n)},1e3),r=e.getContainer(t.current);return i(r),l(n),r.addEventListener("scroll",n,{passive:!0}),function(){c&&s&&c.removeEventListener("scroll",s)}}},[e.getContainer,t]),r.createElement(j.t,{rootRef:t},e.children(!p))},$e=n(164),et=Object(u.a)({stickyHeader:{position:"sticky",top:0}}),tt=function(e){var t=et(),n=e.children,a=e.className,c=Object($e.a)(e,["children","className"]);return r.createElement("div",Object.assign({className:"".concat(a," ").concat(t.stickyHeader)},c),n)},nt=Object(u.a)({root:{},loadingButton:{color:"white !important"},loader:{marginBottom:"10px"},header:{top:"-10px",zIndex:1e3,margin:"-10px -10px 10px -10px"}}),rt=function(e){return Object(r.useEffect)(function(){e.entry&&e.entry.unread&&ke(e.entry,!1)},[e.entry&&e.entry.id]),null},at=Object(T.a)(function(e){var t=e.id,n=function(e){var t=U();if(e){var n=t.streams;if(e.startsWith("feed/"))return{id:e,items:Object.values(t.entries).filter(function(t){return t.origin.streamId===e}),title:"Feed"};if(e.includes("/tag/"))return{id:e,items:Object.values(t.entries).filter(function(t){return t.tags&&t.tags.some(function(t){return t.id===e})}),title:"Tag"};var r=n[e];return r?Object(p.a)({},r,{items:r.items.map(function(e){return t.entries[e]})}):void 0}}(t);return Object(r.useEffect)(function(){!t||n&&n.id!==t||Qe(t)},[t]),a.a.createElement(ct,{entries:n&&n.items,id:t,history:e.history,active:e.active})}),ct=function(e){var t,n=U(),c=nt(),i=n.settings.markScrolledAsRead,o=!e.entries||(t=e.id,P.updating[t]),u=Object(r.useState)({}),s=Object(C.a)(u,2),l=s[0],f=s[1],d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.entries)return[];var r=e.entries.filter(function(e){return e&&(e.unread||!n.settings.unreadOnly||t[e.id])});return r.sort(function(e,t){return t.published-e.published}),r};Object(r.useEffect)(function(){f(d().reduce(function(e,t){return e[t.id]=!0,e},{}))},[e.id,n.settings.unreadOnly]);var p=Object(r.useMemo)(function(){return d(l)},[e.entries&&e.entries.length,e.id,n.settings.unreadOnly,n.updating[e.id],l]),m=100*(1-Object(r.useMemo)(function(){return p.filter(function(e){return e.unread}).length},[e.entries])/p.length);return a.a.createElement("div",{className:c.root},n.settings.unreadOnly&&!!p.length&&a.a.createElement(tt,{className:c.header},a.a.createElement(j.m,{variant:"determinate",value:m,color:"secondary"})),o&&a.a.createElement(Ke,null,a.a.createElement(j.f,{className:c.loader})),a.a.createElement(j.k,{spacing:24,container:!0,justify:"center",wrap:"wrap"},p.map(function(t){return a.a.createElement(Ze,{key:t.id,getContainer:function(e){return e.parentElement.parentElement.parentElement}},function(r){return a.a.createElement(j.k,{item:!0,lg:3,md:6,sm:6,xs:12,onClick:function(){return e.history.push("/entries/".concat(t.id))}},a.a.createElement(Je,{entry:t,showingUnreadOnly:n.settings.unreadOnly}),!r&&i&&a.a.createElement(rt,{entry:t}))})})),e.active&&a.a.createElement(a.a.Fragment,null,a.a.createElement(he,null,a.a.createElement(j.l,{disabled:o,onClick:function(){return Qe(e.id,!1,!0)}},a.a.createElement(S.e,null))),a.a.createElement(he,null,a.a.createElement(j.j,{control:a.a.createElement(j.u,{checked:n.settings.unreadOnly,onClick:function(){return n.settings.unreadOnly=!n.settings.unreadOnly}}),label:"Unread"}))))},it=Object(u.a)({root:{width:"100vw",height:"100vw"}}),ot=[{prefix:"/settings/",render:function(){return a.a.createElement(We,null)}},{prefix:"/stream/",render:function(e,t){return a.a.createElement(at,{id:e,active:t})}},{prefix:"/entries/",render:function(e,t){return a.a.createElement(Ne,{id:e,active:t})}}];Xe();var ut=function(e){var t=it(),n=U(),c=ae(),i=Object(r.useMemo)(function(){return e=n.settings,Object(o.createMuiTheme)({palette:{type:e.darkMode?"dark":"light",primary:{main:"#2BB24C"}},typography:{fontSize:8+2*e.fontSize}});var e},[n.settings.fontSize]);return Object(r.useEffect)(function(){!n.current["/stream/"]&&c&&(n.current["/stream/"]=O(c.id))},[n.current,c]),a.a.createElement(l.a,null,a.a.createElement(o.MuiThemeProvider,{theme:i},a.a.createElement(s.SnackbarProvider,null,a.a.createElement(le,null),a.a.createElement("div",{className:t.root},a.a.createElement(se,null),a.a.createElement(ze,{routes:ot})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));De.streams={},De.entries={},De.updating={categories:!1,profile:!1},De.settings=function(){var e=window.localStorage.getItem("settings");return e?JSON.parse(e):Ue}(),De.current={},Z(),i.a.render(a.a.createElement(ut,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5460,2,1]]]);
//# sourceMappingURL=main.b54b5ee3.chunk.js.map