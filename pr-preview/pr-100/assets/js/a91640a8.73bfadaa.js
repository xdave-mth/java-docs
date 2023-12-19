"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2219],{37537:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=s(85893),i=s(11151);const a={title:"Personalverwaltung",description:"",tags:["exceptions","records","maps"]},o=void 0,l={id:"exam-exercises/exam-exercises-java2/human-resources",title:"Personalverwaltung",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/human-resources.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/human-resources",permalink:"/java-docs/pr-preview/pr-100/exam-exercises/exam-exercises-java2/human-resources",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/human-resources.md",tags:[{label:"exceptions",permalink:"/java-docs/pr-preview/pr-100/tags/exceptions"},{label:"records",permalink:"/java-docs/pr-preview/pr-100/tags/records"},{label:"maps",permalink:"/java-docs/pr-preview/pr-100/tags/maps"}],version:"current",frontMatter:{title:"Personalverwaltung",description:"",tags:["exceptions","records","maps"]},sidebar:"examExercisesSidebar",previous:{title:"W\xf6rterbuch",permalink:"/java-docs/pr-preview/pr-100/exam-exercises/exam-exercises-java2/dictionary"},next:{title:"Stellenangebot",permalink:"/java-docs/pr-preview/pr-100/exam-exercises/exam-exercises-java2/job-offer"}},t={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>HumanResources</em>",id:"hinweise-zur-klasse-humanresources",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    HumanResources o-- Person\n    HumanResources o-- TelephoneNumber\n\n    class HumanResources {\n        <<record>>\n        telephoneBook: Map~TelephoneNumber, Person~\n        staff: List~Person~\n        +addTelephoneNumber(telephoneNumber: TelephoneNumber, person: Person) void\n        +addStaff(person: Person) void\n        +getTelephoneNumbersByPersonId(id: int) List~TelephoneNumber~\n    }\n\n    class Person {\n        <<record>>\n        id: int\n        name: String\n    }\n\n    class TelephoneNumber {\n        <<record>>\n        digits: int[*]\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-humanresources",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"HumanResources"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode\n",(0,r.jsx)(n.code,{children:"void addTelephoneNumber(telephoneNumber: TelephoneNumber, person: Person)"}),"\nsoll dem Telefonbuch (",(0,r.jsx)(n.code,{children:"telephoneBook"}),") die eingehende Telefonnummer als\nSchl\xfcssel sowie die eingehende Person als Wert hinzuf\xfcgen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void addStaff(person: Person)"})," soll der Personalliste (",(0,r.jsx)(n.code,{children:"staff"}),")\ndie eingehende Person hinzuf\xfcgen. F\xfcr den Fall, dass diese Person bereits in\nder Personalliste vorhanden ist, soll die Ausnahme ",(0,r.jsx)(n.code,{children:"DuplicateException"}),"\nausgel\xf6st werden"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"List<TelephoneNumber> getTelephoneNumbersByPersonId(id: int)"}),"\nsoll alle Telefonnummern zur eingehenden Personennummer zur\xfcckgeben"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var r=s(67294);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);