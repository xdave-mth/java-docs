"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8205],{70127:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=s(74848),o=s(28453),r=s(3514);const a={title:"Konsolenanwendungen",description:"",sidebar_position:50,tags:["console-applications"]},c=void 0,i={id:"exercises/console-applications/console-applications",title:"Konsolenanwendungen",description:"",source:"@site/docs/exercises/console-applications/console-applications.mdx",sourceDirName:"exercises/console-applications",slug:"/exercises/console-applications/",permalink:"/java-docs/pr-preview/pr-165/exercises/console-applications/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/console-applications/console-applications.mdx",tags:[{label:"console-applications",permalink:"/java-docs/pr-preview/pr-165/tags/console-applications"}],version:"current",sidebarPosition:50,frontMatter:{title:"Konsolenanwendungen",description:"",sidebar_position:50,tags:["console-applications"]},sidebar:"exercisesSidebar",previous:{title:"Operators03",permalink:"/java-docs/pr-preview/pr-165/exercises/operators/operators03"},next:{title:"ConsoleApplications01",permalink:"/java-docs/pr-preview/pr-165/exercises/console-applications/console-applications01"}},l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben der Uni Koblenz-Landau",id:"\xfcbungsaufgaben-der-uni-koblenz-landau",level:2},{value:"\xdcbungsaufgaben der Technischen Hochschule Ulm",id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,t.jsx)(r.A,{}),"\n",(0,t.jsx)(n.h2,{id:"\xfcbungsaufgaben-der-uni-koblenz-landau",children:"\xdcbungsaufgaben der Uni Koblenz-Landau"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(3918).A+"",children:"A4"})," (ohne JConsole)"]}),"\n",(0,t.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(3918).A+"",children:"A5"})," (ohne JConsole)"]}),"\n",(0,t.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(3918).A+"",children:"A6"})," (ohne JConsole)"]}),"\n",(0,t.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(3918).A+"",children:"A7"})," (ohne JConsole)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm",children:"\xdcbungsaufgaben der Technischen Hochschule Ulm"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(34475).A+"",children:"Variablen07"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3514:(e,n,s)=>{s.d(n,{A:()=>x});s(96540);var t=s(34164),o=s(84142),r=s(28774),a=s(53465),c=s(16654),i=s(21312),l=s(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=s(74848);function p(e){let{href:n,children:s}=e;return(0,d.jsx)(r.A,{href:n,className:(0,t.A)("card padding--lg",u.cardContainer),children:s})}function h(e){let{href:n,icon:s,title:o,description:r}=e;return(0,d.jsxs)(p,{href:n,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,t.A)("text--truncate",u.cardTitle),title:o,children:[s," ",o]}),r&&(0,d.jsx)("p",{className:(0,t.A)("text--truncate",u.cardDescription),title:r,children:r})]})}function f(e){let{item:n}=e;const s=(0,o.Nr)(n),t=function(){const{selectMessage:e}=(0,a.W)();return n=>e(n,(0,i.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return s?(0,d.jsx)(h,{href:s,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??t(n.items.length)}):null}function g(e){let{item:n}=e;const s=(0,c.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,o.cC)(n.docId??void 0);return(0,d.jsx)(h,{href:n.href,icon:s,title:n.label,description:n.description??t?.description})}function m(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(g,{item:n});case"category":return(0,d.jsx)(f,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function b(e){let{className:n}=e;const s=(0,o.$S)();return(0,d.jsx)(x,{items:s.items,className:n})}function x(e){const{items:n,className:s}=e;if(!n)return(0,d.jsx)(b,{...e});const r=(0,o.d1)(n);return(0,d.jsx)("section",{className:(0,t.A)("row",s),children:r.map(((e,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(m,{item:e})},n)))})}},53465:(e,n,s)=>{s.d(n,{W:()=>l});var t=s(96540),o=s(44586);const r=["zero","one","two","few","many","other"];function a(e){return r.filter((n=>e.includes(n)))}const c={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:a(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),c}}),[e])}function l(){const e=i();return{selectMessage:(n,s)=>function(e,n,s){const t=e.split("|");if(1===t.length)return t[0];t.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const o=s.select(n),r=s.pluralForms.indexOf(o);return t[Math.min(r,t.length-1)]}(s,n,e)}}},3918:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/exercises-koblenz-5125438b36e15ed612db6d300cc5935b.pdf"},34475:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/exercises-ulm-cf2cc33b9ccdae3a1c0746c07fc951bd.pdf"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(96540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);