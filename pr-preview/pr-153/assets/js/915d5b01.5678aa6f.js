"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9418],{87283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(74848),s=t(28453),a=t(3514);const o={title:"Operatoren",description:"",sidebar_position:40,tags:["operators"]},c=void 0,i={id:"exercises/operators/operators",title:"Operatoren",description:"",source:"@site/docs/exercises/operators/operators.mdx",sourceDirName:"exercises/operators",slug:"/exercises/operators/",permalink:"/java-docs/pr-preview/pr-153/exercises/operators/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/operators/operators.mdx",tags:[{label:"operators",permalink:"/java-docs/pr-preview/pr-153/tags/operators"}],version:"current",sidebarPosition:40,frontMatter:{title:"Operatoren",description:"",sidebar_position:40,tags:["operators"]},sidebar:"exercisesSidebar",previous:{title:"DataObjects02",permalink:"/java-docs/pr-preview/pr-153/exercises/data-objects/data-objects02"},next:{title:"Operators01",permalink:"/java-docs/pr-preview/pr-153/exercises/operators/operators01"}},l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben der Uni Koblenz-Landau",id:"\xfcbungsaufgaben-der-uni-koblenz-landau",level:2},{value:"\xdcbungsaufgaben der Technischen Hochschule Ulm",id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,r.jsx)(a.A,{}),"\n",(0,r.jsx)(n.h2,{id:"\xfcbungsaufgaben-der-uni-koblenz-landau",children:"\xdcbungsaufgaben der Uni Koblenz-Landau"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(3918).A+"",children:"A2"})," (ohne JConsole)"]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(3918).A+"",children:"A3"})," (ohne JConsole)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm",children:"\xdcbungsaufgaben der Technischen Hochschule Ulm"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(34475).A+"",children:"Variablen06"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3514:(e,n,t)=>{t.d(n,{A:()=>x});t(96540);var r=t(34164),s=t(84142),a=t(28774),o=t(53465),c=t(16654),i=t(21312),l=t(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=t(74848);function p(e){let{href:n,children:t}=e;return(0,d.jsx)(a.A,{href:n,className:(0,r.A)("card padding--lg",u.cardContainer),children:t})}function h(e){let{href:n,icon:t,title:s,description:a}=e;return(0,d.jsxs)(p,{href:n,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[t," ",s]}),a&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function f(e){let{item:n}=e;const t=(0,s.Nr)(n),r=function(){const{selectMessage:e}=(0,o.W)();return n=>e(n,(0,i.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,d.jsx)(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function m(e){let{item:n}=e;const t=(0,c.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(n.docId??void 0);return(0,d.jsx)(h,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function g(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(m,{item:n});case"category":return(0,d.jsx)(f,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function b(e){let{className:n}=e;const t=(0,s.$S)();return(0,d.jsx)(x,{items:t.items,className:n})}function x(e){const{items:n,className:t}=e;if(!n)return(0,d.jsx)(b,{...e});const a=(0,s.d1)(n);return(0,d.jsx)("section",{className:(0,r.A)("row",t),children:a.map(((e,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},n)))})}},53465:(e,n,t)=>{t.d(n,{W:()=>l});var r=t(96540),s=t(44586);const a=["zero","one","two","few","many","other"];function o(e){return a.filter((n=>e.includes(n)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:o(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),c}}),[e])}function l(){const e=i();return{selectMessage:(n,t)=>function(e,n,t){const r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=t.select(n),a=t.pluralForms.indexOf(s);return r[Math.min(a,r.length-1)]}(t,n,e)}}},3918:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/exercises-koblenz-5125438b36e15ed612db6d300cc5935b.pdf"},34475:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/exercises-ulm-cf2cc33b9ccdae3a1c0746c07fc951bd.pdf"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);