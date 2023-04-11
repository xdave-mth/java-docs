"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=i,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||c;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294),i=r(6010),c=r(3438),a=r(9960),s=r(3919),o=r(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},r)}function d(e){let{href:t,icon:r,title:c,description:a}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:c},r," ",c),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:a},a))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??(null==i?void 0:i.description)})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},9160:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(7462),i=(r(7294),r(3905)),c=r(2991);const a={title:"Generische Programmierung",description:"",sidebar_position:170,tags:["generics"]},s=void 0,o={unversionedId:"exercises/generics/generics",id:"exercises/generics/generics",title:"Generische Programmierung",description:"",source:"@site/docs/exercises/generics/generics.md",sourceDirName:"exercises/generics",slug:"/exercises/generics/",permalink:"/java-docs/exercises/generics/",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics.md",tags:[{label:"generics",permalink:"/java-docs/tags/generics"}],version:"current",sidebarPosition:170,frontMatter:{title:"Generische Programmierung",description:"",sidebar_position:170,tags:["generics"]},sidebar:"exercisesSidebar",previous:{title:"Exceptions03",permalink:"/java-docs/exercises/exceptions/exceptions03"},next:{title:"Generics01",permalink:"/java-docs/exercises/generics/generics01"}},l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);