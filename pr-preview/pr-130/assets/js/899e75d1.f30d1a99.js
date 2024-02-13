"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5006],{95402:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=r(85893),s=r(11151);const a={title:"Kreatur",description:"",tags:["oo","enumerations","io-streams"]},t=void 0,l={id:"exam-exercises/exam-exercises-java1/creature",title:"Kreatur",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/creature.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/creature",permalink:"/java-docs/pr-preview/pr-130/exam-exercises/exam-exercises-java1/creature",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/creature.md",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-130/tags/oo"},{label:"enumerations",permalink:"/java-docs/pr-preview/pr-130/tags/enumerations"},{label:"io-streams",permalink:"/java-docs/pr-preview/pr-130/tags/io-streams"}],version:"current",frontMatter:{title:"Kreatur",description:"",tags:["oo","enumerations","io-streams"]},sidebar:"examExercisesSidebar",previous:{title:"Pl\xe4tzchendose",permalink:"/java-docs/pr-preview/pr-130/exam-exercises/exam-exercises-java1/cookie-jar"},next:{title:"W\xfcrfelspiele",permalink:"/java-docs/pr-preview/pr-130/exam-exercises/exam-exercises-java1/dice-games"}},o={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>Creature</em>",id:"hinweise-zur-klasse-creature",level:2},{value:"Hinweis zur Klasse <em>CreaturesReader</em>",id:"hinweis-zur-klasse-creaturesreader",level:2},{value:"Beispielhafter Aufbau der Kreaturendatei",id:"beispielhafter-aufbau-der-kreaturendatei",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    Creature o-- Position\n    Creature o-- Type\n\n    class Creature {\n        -name: String &#123final&#125\n        -position: Position &#123final&#125\n        -type: Type &#123final&#125\n        +Creature(name: String, position: Position, type: Type)\n        +moveUp() void\n        +moveDown() void\n        +moveLeft() void\n        +moveRight() void\n    }\n\n    class Type {\n        <<enumeration>>\n        MONSTER\n        SKELETON\n        VAMPIRE\n        ZOMBIE\n    }\n\n    class Position {\n        -x: int\n        -y: int\n        +Position(x: int, y: int)\n        +increaseY() void\n        +decreaseY() void\n        +increaseX() void\n        +decreaseX() void\n    }\n\n    class CreaturesReader {\n        +getCreatures(file: File) List~Creature~\n    }"}),"\n",(0,i.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,i.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-creature",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"Creature"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void moveUp()"})," soll den Y-Wert der Position inkrementieren"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void moveDown()"})," soll den Y-Wert der Position dekrementieren"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void moveLeft()"})," soll den X-Wert der Position dekrementieren"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void moveRigth()"})," soll den X-Wert der Position inkrementieren"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweis-zur-klasse-creaturesreader",children:["Hinweis zur Klasse ",(0,i.jsx)(n.em,{children:"CreaturesReader"})]}),"\n",(0,i.jsxs)(n.p,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"List<Creature> getCreatures(file: File)"})," soll alle Kreaturen der\neingehenden Datei zur\xfcckgeben und die Kreaturen die Bewegungen der eingehenden\nDatei ausf\xfchren lassen."]}),"\n",(0,i.jsx)(n.h2,{id:"beispielhafter-aufbau-der-kreaturendatei",children:"Beispielhafter Aufbau der Kreaturendatei"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Frankensteins Monster;MONSTER;0;5\nDOWN;DOWN;LEFT;LEFT\nDracula;VAMPIRE;3;3\nUP;RIGHT;UP\nKurt;ZOMBIE;-2;-2\nDOWN\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var i=r(67294);const s={},a=i.createContext(s);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);