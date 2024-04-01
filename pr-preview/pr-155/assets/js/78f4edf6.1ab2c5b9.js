"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4280],{26955:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var i=r(74848),s=r(28453),a=r(3514);const n={title:"Aktivit\xe4tsdiagramme",description:"",sidebar_position:115,tags:["uml","activity-diagrams"]},c=void 0,o={id:"exercises/activity-diagrams/activity-diagrams",title:"Aktivit\xe4tsdiagramme",description:"",source:"@site/docs/exercises/activity-diagrams/activity-diagrams.mdx",sourceDirName:"exercises/activity-diagrams",slug:"/exercises/activity-diagrams/",permalink:"/java-docs/pr-preview/pr-155/exercises/activity-diagrams/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/activity-diagrams/activity-diagrams.mdx",tags:[{label:"uml",permalink:"/java-docs/pr-preview/pr-155/tags/uml"},{label:"activity-diagrams",permalink:"/java-docs/pr-preview/pr-155/tags/activity-diagrams"}],version:"current",sidebarPosition:115,frontMatter:{title:"Aktivit\xe4tsdiagramme",description:"",sidebar_position:115,tags:["uml","activity-diagrams"]},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams05",permalink:"/java-docs/pr-preview/pr-155/exercises/class-diagrams/class-diagrams05"},next:{title:"ActivityDiagrams01",permalink:"/java-docs/pr-preview/pr-155/exercises/activity-diagrams/activity-diagrams01"}},l={},d=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function u(e){const t={h2:"h2",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,i.jsx)(a.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>x});r(96540);var i=r(34164),s=r(84142),a=r(28774),n=r(53465),c=r(16654),o=r(21312),l=r(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(74848);function m(e){let{href:t,children:r}=e;return(0,u.jsx)(a.A,{href:t,className:(0,i.A)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:s,description:a}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),a&&(0,u.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function g(e){let{item:t}=e;const r=(0,s.Nr)(t),i=function(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,s.$S)();return(0,u.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(v,{...e});const a=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,i.A)("row",r),children:a.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(h,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>l});var i=r(96540),s=r(44586);const a=["zero","one","two","few","many","other"];function n(e){return a.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:n(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:n(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const i=e.split("|");if(1===i.length)return i[0];i.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const s=r.select(t),a=r.pluralForms.indexOf(s);return i[Math.min(a,i.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>c});var i=r(96540);const s={},a=i.createContext(s);function n(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);