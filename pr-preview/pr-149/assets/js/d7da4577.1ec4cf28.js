"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4578],{87086:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=a(85893),r=a(11151);const i={title:"Planeten",description:"",tags:["records","maps","optionals","java-stream-api"]},t=void 0,l={id:"exam-exercises/exam-exercises-java2/planets",title:"Planeten",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/planets.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/planets",permalink:"/java-docs/pr-preview/pr-149/exam-exercises/exam-exercises-java2/planets",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/planets.md",tags:[{label:"records",permalink:"/java-docs/pr-preview/pr-149/tags/records"},{label:"maps",permalink:"/java-docs/pr-preview/pr-149/tags/maps"},{label:"optionals",permalink:"/java-docs/pr-preview/pr-149/tags/optionals"},{label:"java-stream-api",permalink:"/java-docs/pr-preview/pr-149/tags/java-stream-api"}],version:"current",frontMatter:{title:"Planeten",description:"",tags:["records","maps","optionals","java-stream-api"]},sidebar:"examExercisesSidebar",previous:{title:"Smartphone-Shop",permalink:"/java-docs/pr-preview/pr-149/exam-exercises/exam-exercises-java2/phone-store"},next:{title:"Einkaufsportal",permalink:"/java-docs/pr-preview/pr-149/exam-exercises/exam-exercises-java2/shopping-portal"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2}];function d(e){const n={h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um"}),"\n",(0,s.jsxs)(n.li,{children:["Erstelle eine ausf\xfchrbare Klasse, welche mit Hilfe der Java Stream API\nfolgende Informationen auf der Konsole ausgibt:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"alle Planeten mit mehr als 5 Monden"}),"\n",(0,s.jsx)(n.li,{children:"den durchschnittlichen Durchmesser aller Gasplaneten"}),"\n",(0,s.jsx)(n.li,{children:"alle Planeten absteigend sortiert nach der Masse"}),"\n",(0,s.jsx)(n.li,{children:"die Antwort auf die Frage, ob alle Planeten mindestens einen Mond besitzen"}),"\n",(0,s.jsx)(n.li,{children:"alle Planeten gruppiert nach ihrem Typ"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Planet o-- Type\n\n    class Planet {\n        <<record>>\n        name: String\n        diameterInKm: double\n        massInE24Kg: double\n        moons: int\n        type: Type\n    }\n\n    class Type {\n        <<enumeration>>\n        GAS_PLANET\n        TERRESTRIAL_PLANET\n        DWARF_PLANET\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>t});var s=a(67294);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);