"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[585],{67527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(74848),s=r(28453),a=r(3514);const o={title:"Komparatoren",description:"",sidebar_position:150,tags:["comparators"]},c=void 0,i={id:"exercises/comparators/comparators",title:"Komparatoren",description:"",source:"@site/docs/exercises/comparators/comparators.mdx",sourceDirName:"exercises/comparators",slug:"/exercises/comparators/",permalink:"/java-docs/pr-preview/pr-167/exercises/comparators/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/comparators/comparators.mdx",tags:[{label:"comparators",permalink:"/java-docs/pr-preview/pr-167/tags/comparators"}],version:"current",sidebarPosition:150,frontMatter:{title:"Komparatoren",description:"",sidebar_position:150,tags:["comparators"]},sidebar:"exercisesSidebar",previous:{title:"Interfaces01",permalink:"/java-docs/pr-preview/pr-167/exercises/interfaces/interfaces01"},next:{title:"Comparators01",permalink:"/java-docs/pr-preview/pr-167/exercises/comparators/comparators01"}},l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}];function d(e){const t={a:"a",h2:"h2",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,n.jsx)(a.A,{}),"\n",(0,n.jsx)(t.h2,{id:"\xfcbungsaufgaben-von-tutegode",children:"\xdcbungsaufgaben von tutego.de"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(t.a,{href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_verbrauch_von_elektroger%C3%A4ten_vergleichen",children:"I-8-1.1.1"})]}),"\n",(0,n.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(t.a,{href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_elektroger%C3%A4te_mit_dem_h%C3%B6chsten_verbrauch_finden",children:"I-8-1.1.2"})]}),"\n",(0,n.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(t.a,{href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_schnittstelle_comparator_zum_sortieren_einsetzen",children:"I-8-1.1.3"})]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>b});r(96540);var n=r(34164),s=r(84142),a=r(28774),o=r(53465),c=r(16654),i=r(21312),l=r(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function m(e){let{href:t,children:r}=e;return(0,d.jsx)(a.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:s,description:a}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),a&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function h(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,i.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,s.$S)();return(0,d.jsx)(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const a=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:a.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(96540),s=r(44586);const a=["zero","one","two","few","many","other"];function o(e){return a.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=i();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),a=r.pluralForms.indexOf(s);return n[Math.min(a,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);