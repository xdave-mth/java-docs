"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6303],{33539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(74848),s=n(28453),i=n(3514);const o={title:"Git",description:"",sidebar_position:15,tags:["git"]},c=void 0,a={id:"exercises/git/git",title:"Git",description:"",source:"@site/docs/exercises/git/git.mdx",sourceDirName:"exercises/git",slug:"/exercises/git/",permalink:"/java-docs/pr-preview/pr-152/exercises/git/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/git/git.mdx",tags:[{label:"git",permalink:"/java-docs/pr-preview/pr-152/tags/git"}],version:"current",sidebarPosition:15,frontMatter:{title:"Git",description:"",sidebar_position:15,tags:["git"]},sidebar:"exercisesSidebar",previous:{title:"Programmieren",permalink:"/java-docs/pr-preview/pr-152/exercises/coding/"},next:{title:"Git01",permalink:"/java-docs/pr-preview/pr-152/exercises/git/git01"}},l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function d(e){const t={h2:"h2",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,r.jsx)(i.A,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>j});n(96540);var r=n(34164),s=n(84142),i=n(28774),o=n(53465),c=n(16654),a=n(21312),l=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:i}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function g(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const i=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),s=n(44586);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);