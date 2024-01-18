"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6144],{57794:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=o(85893),t=o(11151);const a={title:"Optionals01",description:""},i=void 0,r={id:"exercises/optionals/optionals01",title:"Optionals01",description:"",source:"@site/docs/exercises/optionals/optionals01.md",sourceDirName:"exercises/optionals",slug:"/exercises/optionals/optionals01",permalink:"/java-docs/pr-preview/pr-114/exercises/optionals/optionals01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/optionals/optionals01.md",tags:[],version:"current",frontMatter:{title:"Optionals01",description:""},sidebar:"exercisesSidebar",previous:{title:"Optionals",permalink:"/java-docs/pr-preview/pr-114/exercises/optionals/"},next:{title:"Optionals02",permalink:"/java-docs/pr-preview/pr-114/exercises/optionals/optionals02"}},l={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Passe die Klasse ",(0,s.jsx)(n.code,{children:"BookCollection"})," aus \xdcbungsaufgabe ",(0,s.jsx)(n.a,{href:"../maps/maps02",children:"Maps02"}),"\nanhand des abgebildeten Klassendiagramms an"]}),"\n",(0,s.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,s.jsx)(n.a,{href:"../maps/maps02",children:"Maps02"})," so an,\ndass entweder die gefundenen Werte oder alternativ entsprechende Meldungen\nausgegeben werden"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    BookCollection o-- Author\n    BookCollection o-- Book\n\n    class Author {\n        <<record>>\n        name: String\n    }\n\n    class Book {\n        <<record>>\n        title: String\n    }\n\n    class BookCollection {\n        <<record>>\n        collection Map~Author&sbquo; List~Book~~\n        +addAuthor(author: Author) void\n        +addBook(author: Author, book: Book) void\n        +getMostDiligentAuthor() Optional~Author~\n        +getBookByTitle(title: String) Optional~Book~\n    }"})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>i});var s=o(67294);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);