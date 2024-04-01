"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3713],{59607:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=s(74848),r=s(28453),i=s(3514);const a={title:"Assoziativspeicher (Maps)",description:"",sidebar_position:190,tags:["maps"]},c=void 0,o={id:"exercises/maps/maps",title:"Assoziativspeicher (Maps)",description:"",source:"@site/docs/exercises/maps/maps.mdx",sourceDirName:"exercises/maps",slug:"/exercises/maps/",permalink:"/java-docs/pr-preview/pr-152/exercises/maps/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/maps/maps.mdx",tags:[{label:"maps",permalink:"/java-docs/pr-preview/pr-152/tags/maps"}],version:"current",sidebarPosition:190,frontMatter:{title:"Assoziativspeicher (Maps)",description:"",sidebar_position:190,tags:["maps"]},sidebar:"exercisesSidebar",previous:{title:"Generics04",permalink:"/java-docs/pr-preview/pr-152/exercises/generics/generics04"},next:{title:"Maps01",permalink:"/java-docs/pr-preview/pr-152/exercises/maps/maps01"}},l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function p(e){const t={h2:"h2",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,n.jsx)(i.A,{})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},3514:(e,t,s)=>{s.d(t,{A:()=>v});s(96540);var n=s(34164),r=s(84142),i=s(28774),a=s(53465),c=s(16654),o=s(21312),l=s(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=s(74848);function d(e){let{href:t,children:s}=e;return(0,p.jsx)(i.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:s})}function m(e){let{href:t,icon:s,title:r,description:i}=e;return(0,p.jsxs)(d,{href:t,children:[(0,p.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:r,children:[s," ",r]}),i&&(0,p.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e;const s=(0,r.Nr)(t),n=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,p.jsx)(m,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const s=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,p.jsx)(m,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,p.jsx)(h,{item:t});case"category":return(0,p.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const s=(0,r.$S)();return(0,p.jsx)(v,{items:s.items,className:t})}function v(e){const{items:t,className:s}=e;if(!t)return(0,p.jsx)(x,{...e});const i=(0,r.d1)(t);return(0,p.jsx)("section",{className:(0,n.A)("row",s),children:i.map(((e,t)=>(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(g,{item:e})},t)))})}},53465:(e,t,s)=>{s.d(t,{W:()=>l});var n=s(96540),r=s(44586);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=s.select(t),i=s.pluralForms.indexOf(r);return n[Math.min(i,n.length-1)]}(s,t,e)}}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);