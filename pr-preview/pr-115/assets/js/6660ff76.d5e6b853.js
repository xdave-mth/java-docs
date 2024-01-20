"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7235],{74969:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=s(85893),a=s(11151);const i={title:"Optionals03",description:""},o=void 0,r={id:"exercises/optionals/optionals03",title:"Optionals03",description:"",source:"@site/docs/exercises/optionals/optionals03.md",sourceDirName:"exercises/optionals",slug:"/exercises/optionals/optionals03",permalink:"/java-docs/pr-preview/pr-115/exercises/optionals/optionals03",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/optionals/optionals03.md",tags:[],version:"current",frontMatter:{title:"Optionals03",description:""},sidebar:"exercisesSidebar",previous:{title:"Optionals02",permalink:"/java-docs/pr-preview/pr-115/exercises/optionals/optionals02"},next:{title:"Die Java Stream API",permalink:"/java-docs/pr-preview/pr-115/exercises/java-stream-api/"}},l={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Passe die Klasse ",(0,t.jsx)(n.code,{children:"Crate"})," aus \xdcbungsaufgabe\n",(0,t.jsx)(n.a,{href:"../generics/generics02",children:"Generics02"})," anhand des abgebildeten Klassendiagramms\nan"]}),"\n",(0,t.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,t.jsx)(n.a,{href:"../generics/generics02",children:"Generics02"})," so an, dass entweder die gefundenen Werte\noder alternativ entsprechende Meldungen ausgegeben werden"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,t.jsx)(n.mermaid,{value:"classDiagram\n    Bottle <|-- BeerBottle\n    Bottle <|-- WineBottle\n\n    class Crate~T extends Bottle~ {\n        -box1: T\n        -box2: T\n        -box3: T\n        -box4: T\n        -box5: T\n        -box6: T\n        +insertBottle(bottle: T, box: int) void\n        +takeBottle(box: int) Optional~T~\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class Bottle {\n        <<abstract>>\n    }\n\n    class BeerBottle {\n        +chugALug() void\n    }\n\n    class WineBottle {\n\n    }"})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var t=s(67294);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);