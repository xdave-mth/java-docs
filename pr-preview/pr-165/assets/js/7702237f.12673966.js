"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4213],{26387:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=s(74848),r=s(28453),a=s(3514);const i={title:"Lambda-Ausdr\xfccke (Lambdas)",description:"",sidebar_position:175,tags:["inner-classes","lambdas"]},c=void 0,o={id:"exercises/lambdas/lambdas",title:"Lambda-Ausdr\xfccke (Lambdas)",description:"",source:"@site/docs/exercises/lambdas/lambdas.mdx",sourceDirName:"exercises/lambdas",slug:"/exercises/lambdas/",permalink:"/java-docs/pr-preview/pr-165/exercises/lambdas/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/lambdas/lambdas.mdx",tags:[{label:"inner-classes",permalink:"/java-docs/pr-preview/pr-165/tags/inner-classes"},{label:"lambdas",permalink:"/java-docs/pr-preview/pr-165/tags/lambdas"}],version:"current",sidebarPosition:175,frontMatter:{title:"Lambda-Ausdr\xfccke (Lambdas)",description:"",sidebar_position:175,tags:["inner-classes","lambdas"]},sidebar:"exercisesSidebar",previous:{title:"InnerClasses04",permalink:"/java-docs/pr-preview/pr-165/exercises/inner-classes/inner-classes04"},next:{title:"Lambdas01",permalink:"/java-docs/pr-preview/pr-165/exercises/lambdas/lambdas01"}},l={},d=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function u(e){const t={h2:"h2",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,n.jsx)(a.A,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3514:(e,t,s)=>{s.d(t,{A:()=>x});s(96540);var n=s(34164),r=s(84142),a=s(28774),i=s(53465),c=s(16654),o=s(21312),l=s(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=s(74848);function m(e){let{href:t,children:s}=e;return(0,u.jsx)(a.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:s})}function p(e){let{href:t,icon:s,title:r,description:a}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:r,children:[s," ",r]}),a&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function f(e){let{item:t}=e;const s=(0,r.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,u.jsx)(p,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const s=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const s=(0,r.$S)();return(0,u.jsx)(x,{items:s.items,className:t})}function x(e){const{items:t,className:s}=e;if(!t)return(0,u.jsx)(g,{...e});const a=(0,r.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",s),children:a.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(b,{item:e})},t)))})}},53465:(e,t,s)=>{s.d(t,{W:()=>l});var n=s(96540),r=s(44586);const a=["zero","one","two","few","many","other"];function i(e){return a.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=s.select(t),a=s.pluralForms.indexOf(r);return n[Math.min(a,n.length-1)]}(s,t,e)}}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var n=s(96540);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);