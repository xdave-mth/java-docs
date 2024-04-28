"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7092],{64402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(74848),i=n(28453),a=n(3514);const s={title:"Steffen",description:"",sidebar_position:30,tags:[]},o=void 0,c={id:"additional-material/steffen/index",title:"Steffen",description:"",source:"@site/docs/additional-material/steffen/index.mdx",sourceDirName:"additional-material/steffen",slug:"/additional-material/steffen/",permalink:"/java-docs/pr-preview/pr-165/additional-material/steffen/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/steffen/index.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Steffen",description:"",sidebar_position:30,tags:[]},sidebar:"additionalMaterialSidebar",previous:{title:"Klausurergebnisse Java 2",permalink:"/java-docs/pr-preview/pr-165/additional-material/daniel/exam-results-java2"},next:{title:"Java 1",permalink:"/java-docs/pr-preview/pr-165/additional-material/steffen/java-1/"}},l={},d=[];function u(e){return(0,r.jsx)(a.A,{})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},3514:(e,t,n)=>{n.d(t,{A:()=>j});n(96540);var r=n(34164),i=n(84142),a=n(28774),s=n(53465),o=n(16654),c=n(21312),l=n(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function f(e){let{href:t,children:n}=e;return(0,u.jsx)(a.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:a}=e;return(0,u.jsxs)(f,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),a&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function p(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.$S)();return(0,u.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(g,{...e});const a=(0,i.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:a.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),i=n(44586);const a=["zero","one","two","few","many","other"];function s(e){return a.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),a=n.pluralForms.indexOf(i);return r[Math.min(a,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);