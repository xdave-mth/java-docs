"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5840],{70169:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var s=i(85893),r=i(11151);const l={title:"Weihnachtsbaum",description:"",tags:["oo","inheritance","polymorphy"]},a=void 0,t={id:"exam-exercises/exam-exercises-java1/christmas-tree",title:"Weihnachtsbaum",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/christmas-tree.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/christmas-tree",permalink:"/java-docs/pr-preview/pr-123/exam-exercises/exam-exercises-java1/christmas-tree",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/christmas-tree.md",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-123/tags/oo"},{label:"inheritance",permalink:"/java-docs/pr-preview/pr-123/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-123/tags/polymorphy"}],version:"current",frontMatter:{title:"Weihnachtsbaum",description:"",tags:["oo","inheritance","polymorphy"]},sidebar:"examExercisesSidebar",previous:{title:"Kassensystem",permalink:"/java-docs/pr-preview/pr-123/exam-exercises/exam-exercises-java1/cashier-system"},next:{title:"Pl\xe4tzchendose",permalink:"/java-docs/pr-preview/pr-123/exam-exercises/exam-exercises-java1/cookie-jar"}},d={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>ChristmasTree</em>",id:"hinweise-zur-klasse-christmastree",level:2},{value:"Hinweise zur Klasse <em>Candle</em>",id:"hinweise-zur-klasse-candle",level:2},{value:"Hinweise zur Klasse <em>ElectricCandle</em>",id:"hinweise-zur-klasse-electriccandle",level:2}];function o(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Candle <|-- ElectricCandle\n    ChristmasTree o-- Candle\n\n    class ChristmasTree {\n        -type: String &#123final&#125\n        -sizeInM: double &#123final&#125\n        -candles: List~Candle~ &#123final&#125\n        +ChristmasTree(type: String, sizeInM: double)\n        +addCandle(candle: Candle) void\n        +lightChristmasTree() void\n        +getNumberOfElectricCandles() int\n\n    }\n\n    class Candle {\n        #isBurning: boolean\n        -colour: String &#123final&#125\n        +Candle(colour: String)\n        +lightACandle() void\n        +turnOffACandle() void\n    }\n\n    class ElectricCandle {\n        -powerInPercent: int\n        +ElectricCandle(colour: String)\n        +lightACandle() void\n        +recharge() void\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-christmastree",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"ChristmasTree"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addCandle(candle: Candle)"})," soll der Kerzenliste (",(0,s.jsx)(n.code,{children:"candles"}),")\ndie eingehende Kerze hinzuf\xfcgen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void lightChristmasTree()"}),' soll alle Kerzen "entz\xfcnden"']}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"int getNumberOfElectricCandles()"})," soll die Anzahl elektrischer\nKerzen zur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-candle",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Candle"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void lightACandle()"}),' soll die Kerze "entz\xfcnden"']}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void turnOffACandle()"}),' soll die Kerze "ausmachen"']}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-electriccandle",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"ElectricCandle"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Der Konstruktor soll die Energie (",(0,s.jsx)(n.code,{children:"powerInPercent"}),") auf den Wert ",(0,s.jsx)(n.em,{children:"100"})," setzen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void lightACandle()"}),' soll die elektrische Kerze "entz\xfcnden", wenn\ndiese noch \xfcber Energie verf\xfcgt und die Energie um den Wert ',(0,s.jsx)(n.em,{children:"10"})," reduzieren"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void recharge()"})," soll die Energie der elektrische Kerze wieder\nauf den Wert ",(0,s.jsx)(n.em,{children:"100"})," setzen"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>a});var s=i(67294);const r={},l=s.createContext(r);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);