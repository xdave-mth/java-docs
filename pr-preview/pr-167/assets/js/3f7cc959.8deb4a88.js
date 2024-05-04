"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2876],{98927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=n(74848),r=n(28453),o=n(3514);const i={title:"Optionals",description:"",sidebar_position:195,tags:["optionals"]},a=void 0,c={id:"exercises/optionals/optionals",title:"Optionals",description:"",source:"@site/docs/exercises/optionals/optionals.mdx",sourceDirName:"exercises/optionals",slug:"/exercises/optionals/",permalink:"/java-docs/pr-preview/pr-167/exercises/optionals/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/optionals/optionals.mdx",tags:[{label:"optionals",permalink:"/java-docs/pr-preview/pr-167/tags/optionals"}],version:"current",sidebarPosition:195,frontMatter:{title:"Optionals",description:"",sidebar_position:195,tags:["optionals"]},sidebar:"exercisesSidebar",previous:{title:"Maps02",permalink:"/java-docs/pr-preview/pr-167/exercises/maps/maps02"},next:{title:"Optionals01",permalink:"/java-docs/pr-preview/pr-167/exercises/optionals/optionals01"}},l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function p(e){const t={h2:"h2",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,s.jsx)(o.A,{})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>j});n(96540);var s=n(34164),r=n(84142),o=n(28774),i=n(53465),a=n(16654),c=n(21312),l=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=n(74848);function d(e){let{href:t,children:n}=e;return(0,p.jsx)(o.A,{href:t,className:(0,s.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:o}=e;return(0,p.jsxs)(d,{href:t,children:[(0,p.jsxs)(l.A,{as:"h2",className:(0,s.A)("text--truncate",u.cardTitle),title:r,children:[n," ",r]}),o&&(0,p.jsx)("p",{className:(0,s.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e;const n=(0,r.Nr)(t),s=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,p.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.cC)(t.docId??void 0);return(0,p.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,p.jsx)(h,{item:t});case"category":return(0,p.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,r.$S)();return(0,p.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,p.jsx)(g,{...e});const o=(0,r.d1)(t);return(0,p.jsx)("section",{className:(0,s.A)("row",n),children:o.map(((e,t)=>(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(x,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var s=n(96540),r=n(44586);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const r=n.select(t),o=n.pluralForms.indexOf(r);return s[Math.min(o,s.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);