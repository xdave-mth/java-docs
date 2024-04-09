"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8362],{32229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),i=t(3514);const a={title:"Aufz\xe4hlungen (Enumerations)",description:"",sidebar_position:100,tags:["enumerations"]},o=void 0,c={id:"exercises/enumerations/enumerations",title:"Aufz\xe4hlungen (Enumerations)",description:"",source:"@site/docs/exercises/enumerations/enumerations.mdx",sourceDirName:"exercises/enumerations",slug:"/exercises/enumerations/",permalink:"/java-docs/pr-preview/pr-161/exercises/enumerations/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/enumerations/enumerations.mdx",tags:[{label:"enumerations",permalink:"/java-docs/pr-preview/pr-161/tags/enumerations"}],version:"current",sidebarPosition:100,frontMatter:{title:"Aufz\xe4hlungen (Enumerations)",description:"",sidebar_position:100,tags:["enumerations"]},sidebar:"exercisesSidebar",previous:{title:"JavaAPI04",permalink:"/java-docs/pr-preview/pr-161/exercises/java-api/java-api04"},next:{title:"Enumerations01",permalink:"/java-docs/pr-preview/pr-161/exercises/enumerations/enumerations01"}},l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,r.jsx)(i.A,{}),"\n",(0,r.jsx)(n.h2,{id:"\xfcbungsaufgaben-von-tutegode",children:"\xdcbungsaufgaben von tutego.de"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_radio_eine_am_fm_modulation_geben",children:"I-6-1.3.1"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_g%C3%BCltige_start_und_endfrequenz_bei_modulation_setzen",children:"I-6-1.3.2"})]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3514:(e,n,t)=>{t.d(n,{A:()=>b});t(96540);var r=t(34164),s=t(84142),i=t(28774),a=t(53465),o=t(16654),c=t(21312),l=t(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=t(74848);function m(e){let{href:n,children:t}=e;return(0,d.jsx)(i.A,{href:n,className:(0,r.A)("card padding--lg",u.cardContainer),children:t})}function p(e){let{href:n,icon:t,title:s,description:i}=e;return(0,d.jsxs)(m,{href:n,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[t," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function f(e){let{item:n}=e;const t=(0,s.Nr)(n),r=function(){const{selectMessage:e}=(0,a.W)();return n=>e(n,(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,d.jsx)(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function h(e){let{item:n}=e;const t=(0,o.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(n.docId??void 0);return(0,d.jsx)(p,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function g(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(h,{item:n});case"category":return(0,d.jsx)(f,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const t=(0,s.$S)();return(0,d.jsx)(b,{items:t.items,className:n})}function b(e){const{items:n,className:t}=e;if(!n)return(0,d.jsx)(x,{...e});const i=(0,s.d1)(n);return(0,d.jsx)("section",{className:(0,r.A)("row",t),children:i.map(((e,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},n)))})}},53465:(e,n,t)=>{t.d(n,{W:()=>l});var r=t(96540),s=t(44586);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((n=>e.includes(n)))}const o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:a(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(n,t)=>function(e,n,t){const r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=t.select(n),i=t.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(t,n,e)}}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);