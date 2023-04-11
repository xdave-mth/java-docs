"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5139],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(a),b=r,p=m["".concat(o,".").concat(b)]||m[b]||d[b]||c;return a?n.createElement(p,s(s({ref:t},u),{},{components:a})):n.createElement(p,s({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,s=new Array(c);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<c;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2991:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7294),r=a(6010),c=a(3438),s=a(9960),i=a(3919),o=a(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:a}=e;return n.createElement(s.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},a)}function b(e){let{href:t,icon:a,title:c,description:s}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",u),title:c},a," ",c),s&&n.createElement("p",{className:(0,r.Z)("text--truncate",d),title:s},s))}function p(e){let{item:t}=e;const a=(0,c.Wl)(t);return a?n.createElement(b,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const a=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(t.docId??void 0);return n.createElement(b,{href:t.href,icon:a,title:t.label,description:t.description??(null==r?void 0:r.description)})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const a=(0,c.jA)();return n.createElement(v,{items:a.items,className:t})}function v(e){const{items:t,className:a}=e;if(!t)return n.createElement(h,e);const s=(0,c.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",a)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},8133:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),c=a(2991);const s={title:"Datenobjekte",description:"",sidebar_position:30,tags:["data-objects"]},i=void 0,o={unversionedId:"exercises/data-objects/data-objects",id:"exercises/data-objects/data-objects",title:"Datenobjekte",description:"",source:"@site/docs/exercises/data-objects/data-objects.md",sourceDirName:"exercises/data-objects",slug:"/exercises/data-objects/",permalink:"/java-docs/exercises/data-objects/",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/data-objects/data-objects.md",tags:[{label:"data-objects",permalink:"/java-docs/tags/data-objects"}],version:"current",sidebarPosition:30,frontMatter:{title:"Datenobjekte",description:"",sidebar_position:30,tags:["data-objects"]},sidebar:"exercisesSidebar",previous:{title:"ClassStructure01",permalink:"/java-docs/exercises/class-structure/class-structure01"},next:{title:"DataObjects01",permalink:"/java-docs/exercises/data-objects/data-objects01"}},l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben der Uni Koblenz-Landau",id:"\xfcbungsaufgaben-der-uni-koblenz-landau",level:2},{value:"\xdcbungsaufgaben der Technischen Hochschule Ulm",id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm",level:2}],d={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,r.kt)(c.Z,{mdxType:"DocCardList"}),(0,r.kt)("h2",{id:"\xfcbungsaufgaben-der-uni-koblenz-landau"},"\xdcbungsaufgaben der Uni Koblenz-Landau"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"A1"))),(0,r.kt)("h2",{id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm"},"\xdcbungsaufgaben der Technischen Hochschule Ulm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Variablen04")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Variablen05")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Variablen02")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Variablen03"))))}m.isMDXComponent=!0}}]);