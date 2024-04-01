"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6831],{63975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(74848),a=n(28453),s=n(3514);const i={title:"Abstrakte und finale Klassen und Methoden",description:"",sidebar_position:130,tags:["abstract","final"]},c=void 0,o={id:"exercises/abstract-and-final/abstract-and-final",title:"Abstrakte und finale Klassen und Methoden",description:"",source:"@site/docs/exercises/abstract-and-final/abstract-and-final.mdx",sourceDirName:"exercises/abstract-and-final",slug:"/exercises/abstract-and-final/",permalink:"/java-docs/pr-preview/pr-153/exercises/abstract-and-final/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/abstract-and-final/abstract-and-final.mdx",tags:[{label:"abstract",permalink:"/java-docs/pr-preview/pr-153/tags/abstract"},{label:"final",permalink:"/java-docs/pr-preview/pr-153/tags/final"}],version:"current",sidebarPosition:130,frontMatter:{title:"Abstrakte und finale Klassen und Methoden",description:"",sidebar_position:130,tags:["abstract","final"]},sidebar:"exercisesSidebar",previous:{title:"Polymorphy04",permalink:"/java-docs/pr-preview/pr-153/exercises/polymorphy/polymorphy04"},next:{title:"AbstractAndFinal01",permalink:"/java-docs/pr-preview/pr-153/exercises/abstract-and-final/abstract-and-final01"}},l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von ntu.edu.sg",id:"\xfcbungsaufgaben-von-ntuedusg",level:2}];function d(e){const t={a:"a",h2:"h2",li:"li",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,r.jsx)(s.A,{}),"\n",(0,r.jsx)(t.h2,{id:"\xfcbungsaufgaben-von-ntuedusg",children:"\xdcbungsaufgaben von ntu.edu.sg"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(t.a,{href:"https://www3.ntu.edu.sg/home/ehchua/programming/java/J3f_OOPExercises.html#zz-6.1",children:"OOP-6.1"})]}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>x});n(96540);var r=n(34164),a=n(84142),s=n(28774),i=n(53465),c=n(16654),o=n(21312),l=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function f(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:a,description:s}=e;return(0,d.jsxs)(f,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:a,children:[n," ",a]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const n=(0,a.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,a.$S)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(b,{...e});const s=(0,a.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),a=n(44586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),s=n.pluralForms.indexOf(a);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);