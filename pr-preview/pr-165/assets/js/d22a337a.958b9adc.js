"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4984],{30817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(74848),s=r(28453),a=r(3514);const i={title:"Programmierung 2",description:"",sidebar_position:40},c=void 0,o={id:"exam-exercises/exam-exercises-java2/exam-exercises-java2",title:"Programmierung 2",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/exam-exercises-java2.mdx",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/",permalink:"/java-docs/pr-preview/pr-165/exam-exercises/exam-exercises-java2/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/exam-exercises-java2.mdx",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Programmierung 2",description:"",sidebar_position:40},sidebar:"examExercisesSidebar",previous:{title:"Zoo",permalink:"/java-docs/pr-preview/pr-165/exam-exercises/exam-exercises-java1/zoo"},next:{title:"Tante-Emma-Laden",permalink:"/java-docs/pr-preview/pr-165/exam-exercises/exam-exercises-java2/corner-shop"}},l={},u=[];function m(e){return(0,n.jsx)(a.A,{})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},3514:(e,t,r)=>{r.d(t,{A:()=>g});r(96540);var n=r(34164),s=r(84142),a=r(28774),i=r(53465),c=r(16654),o=r(21312),l=r(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=r(74848);function d(e){let{href:t,children:r}=e;return(0,m.jsx)(a.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function x(e){let{href:t,icon:r,title:s,description:a}=e;return(0,m.jsxs)(d,{href:t,children:[(0,m.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),a&&(0,m.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function p(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,m.jsx)(x,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,m.jsx)(x,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(f,{item:t});case"category":return(0,m.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const r=(0,s.$S)();return(0,m.jsx)(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return(0,m.jsx)(j,{...e});const a=(0,s.d1)(t);return(0,m.jsx)("section",{className:(0,n.A)("row",r),children:a.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(h,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(96540),s=r(44586);const a=["zero","one","two","few","many","other"];function i(e){return a.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),a=r.pluralForms.indexOf(s);return n[Math.min(a,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(96540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);