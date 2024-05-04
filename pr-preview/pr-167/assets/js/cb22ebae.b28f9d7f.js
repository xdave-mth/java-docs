"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1763],{96007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(74848),n=r(28453),s=r(3514);const i={title:"Die Java API",description:"",sidebar_position:90,tags:["java-api","dates-and-times","files","wrappers"]},o=void 0,c={id:"exercises/java-api/java-api",title:"Die Java API",description:"",source:"@site/docs/exercises/java-api/java-api.mdx",sourceDirName:"exercises/java-api",slug:"/exercises/java-api/",permalink:"/java-docs/pr-preview/pr-167/exercises/java-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-api/java-api.mdx",tags:[{label:"java-api",permalink:"/java-docs/pr-preview/pr-167/tags/java-api"},{label:"dates-and-times",permalink:"/java-docs/pr-preview/pr-167/tags/dates-and-times"},{label:"files",permalink:"/java-docs/pr-preview/pr-167/tags/files"},{label:"wrappers",permalink:"/java-docs/pr-preview/pr-167/tags/wrappers"}],version:"current",sidebarPosition:90,frontMatter:{title:"Die Java API",description:"",sidebar_position:90,tags:["java-api","dates-and-times","files","wrappers"]},sidebar:"exercisesSidebar",previous:{title:"OO07",permalink:"/java-docs/pr-preview/pr-167/exercises/oo/oo07"},next:{title:"JavaAPI01",permalink:"/java-docs/pr-preview/pr-167/exercises/java-api/java-api01"}},l={},p=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function u(e){const t={h2:"h2",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,a.jsx)(s.A,{})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>g});r(96540);var a=r(34164),n=r(84142),s=r(28774),i=r(53465),o=r(16654),c=r(21312),l=r(51107);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(74848);function d(e){let{href:t,children:r}=e;return(0,u.jsx)(s.A,{href:t,className:(0,a.A)("card padding--lg",p.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:n,description:s}=e;return(0,u.jsxs)(d,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,a.A)("text--truncate",p.cardTitle),title:n,children:[r," ",n]}),s&&(0,u.jsx)("p",{className:(0,a.A)("text--truncate",p.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const r=(0,n.Nr)(t),a=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??a(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,n.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const r=(0,n.$S)();return(0,u.jsx)(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(j,{...e});const s=(0,n.d1)(t);return(0,u.jsx)("section",{className:(0,a.A)("row",r),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(v,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>l});var a=r(96540),n=r(44586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),s=r.pluralForms.indexOf(n);return a[Math.min(s,a.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var a=r(96540);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);