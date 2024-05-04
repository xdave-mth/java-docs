"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4052],{86387:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var n=t(74848),s=t(28453),r=t(3514);const i={title:"Die Java Stream API",description:"",sidebar_position:200,tags:["java-stream-api"]},l=void 0,u={id:"exercises/java-stream-api/java-stream-api",title:"Die Java Stream API",description:"",source:"@site/docs/exercises/java-stream-api/java-stream-api.mdx",sourceDirName:"exercises/java-stream-api",slug:"/exercises/java-stream-api/",permalink:"/java-docs/pr-preview/pr-167/exercises/java-stream-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-stream-api/java-stream-api.mdx",tags:[{label:"java-stream-api",permalink:"/java-docs/pr-preview/pr-167/tags/java-stream-api"}],version:"current",sidebarPosition:200,frontMatter:{title:"Die Java Stream API",description:"",sidebar_position:200,tags:["java-stream-api"]},sidebar:"exercisesSidebar",previous:{title:"Optionals03",permalink:"/java-docs/pr-preview/pr-167/exercises/optionals/optionals03"},next:{title:"JavaStreamAPI01",permalink:"/java-docs/pr-preview/pr-167/exercises/java-stream-api/java-stream-api01"}},c={},o=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}];function h(e){const a={a:"a",h2:"h2",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,n.jsx)(r.A,{}),"\n",(0,n.jsx)(a.h2,{id:"\xfcbungsaufgaben-von-tutegode",children:"\xdcbungsaufgaben von tutego.de"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_heldenepos_stream_api_kennenlernen",children:"II-5-1.1.1"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_den_geliebten_captain_aus_einer_liste_ermitteln",children:"II-5-1.1.2"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_bilder_einrahmen",children:"II-5-1.1.3"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_schau_und_sag",children:"II-5-1.1.4"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_doppelte_inseln_mit_metallen_der_seltenen_erden_entfernen",children:"II-5-1.1.5"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_wo_gibt_es_die_segel",children:"II-5-1.1.6"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_das_beliebteste_auto_kaufen",children:"II-5-1.1.7"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_nan_in_einem_array_erkennen",children:"II-5-1.2.1"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_jahrzehnte_erzeugen",children:"II-5-1.2.2"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_array_mit_konstantem_inhalt_%C3%BCber_stream_erzeugen",children:"II-5-1.2.3"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_pyramiden_zeichnen",children:"II-5-1.2.4"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_buchstabenh%C3%A4ufigkeit_eines_strings_ermitteln",children:"II-5-1.2.5"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_von_1_auf_0_von_10_auf_9",children:"II-5-1.2.6"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_zwei_int_arrays_zusammenf%C3%BChren",children:"II-5-1.2.7"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_gewinnkombinationen_ermitteln",children:"II-5-1.2.8"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_die_schnellsten_und_langsamsten_paddler",children:"II-5-1.3.1"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_median_berechnen",children:"II-5-1.3.2"})]}),"\n",(0,n.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,n.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_temperaturstatistiken_berechnen_und_charts_zeichnen",children:"II-5-1.3.3"})]}),"\n"]})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3514:(e,a,t)=>{t.d(a,{A:()=>b});t(96540);var n=t(34164),s=t(84142),r=t(28774),i=t(53465),l=t(16654),u=t(21312),c=t(51107);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=t(74848);function d(e){let{href:a,children:t}=e;return(0,h.jsx)(r.A,{href:a,className:(0,n.A)("card padding--lg",o.cardContainer),children:t})}function m(e){let{href:a,icon:t,title:s,description:r}=e;return(0,h.jsxs)(d,{href:a,children:[(0,h.jsxs)(c.A,{as:"h2",className:(0,n.A)("text--truncate",o.cardTitle),title:s,children:[t," ",s]}),r&&(0,h.jsx)("p",{className:(0,n.A)("text--truncate",o.cardDescription),title:r,children:r})]})}function g(e){let{item:a}=e;const t=(0,s.Nr)(a),n=function(){const{selectMessage:e}=(0,i.W)();return a=>e(a,(0,u.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a}))}();return t?(0,h.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:a.description??n(a.items.length)}):null}function p(e){let{item:a}=e;const t=(0,l.A)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(a.docId??void 0);return(0,h.jsx)(m,{href:a.href,icon:t,title:a.label,description:a.description??n?.description})}function f(e){let{item:a}=e;switch(a.type){case"link":return(0,h.jsx)(p,{item:a});case"category":return(0,h.jsx)(g,{item:a});default:throw new Error(`unknown item type ${JSON.stringify(a)}`)}}function j(e){let{className:a}=e;const t=(0,s.$S)();return(0,h.jsx)(b,{items:t.items,className:a})}function b(e){const{items:a,className:t}=e;if(!a)return(0,h.jsx)(j,{...e});const r=(0,s.d1)(a);return(0,h.jsx)("section",{className:(0,n.A)("row",t),children:r.map(((e,a)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(f,{item:e})},a)))})}},53465:(e,a,t)=>{t.d(a,{W:()=>c});var n=t(96540),s=t(44586);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((a=>e.includes(a)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const a=new Intl.PluralRules(e);return{locale:e,pluralForms:i(a.resolvedOptions().pluralCategories),select:e=>a.select(e)}}(e)}catch(a){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${a.message}\n`),l}}),[e])}function c(){const e=u();return{selectMessage:(a,t)=>function(e,a,t){const n=e.split("|");if(1===n.length)return n[0];n.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=t.select(a),r=t.pluralForms.indexOf(s);return n[Math.min(r,n.length-1)]}(t,a,e)}}},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>l});var n=t(96540);const s={},r=n.createContext(s);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);