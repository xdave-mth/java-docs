"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[93],{20777:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>l});var n=i(85893),a=i(11151);const s={title:"Lego-Baustein",description:"",tags:["inheritance","polymorphy","interfaces","comparators"]},o=void 0,t={id:"exam-exercises/exam-exercises-java2/lego-brick",title:"Lego-Baustein",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/lego-brick.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/lego-brick",permalink:"/java-docs/pr-preview/pr-130/exam-exercises/exam-exercises-java2/lego-brick",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/lego-brick.md",tags:[{label:"inheritance",permalink:"/java-docs/pr-preview/pr-130/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-130/tags/polymorphy"},{label:"interfaces",permalink:"/java-docs/pr-preview/pr-130/tags/interfaces"},{label:"comparators",permalink:"/java-docs/pr-preview/pr-130/tags/comparators"}],version:"current",frontMatter:{title:"Lego-Baustein",description:"",tags:["inheritance","polymorphy","interfaces","comparators"]},sidebar:"examExercisesSidebar",previous:{title:"Stellenangebot",permalink:"/java-docs/pr-preview/pr-130/exam-exercises/exam-exercises-java2/job-offer"},next:{title:"Bibliothek",permalink:"/java-docs/pr-preview/pr-130/exam-exercises/exam-exercises-java2/library"}},c={},l=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>LegoBrickVolumeComparator</em>",id:"hinweis-zur-klasse-legobrickvolumecomparator",level:2}];function m(e){const r={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,n.jsx)(r.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,n.jsx)(r.mermaid,{value:"classDiagram\n    Lego <|-- LegoBrick\n    LegoBrick <|-- LegoBrick2x2x2\n    LegoBrick <|-- LegoBrick4x2x1\n    Comparator~LegoBrick~ <|.. LegoBrickVolumeComparator\n\n    class Lego {\n        <<abstract>>\n        -id: int &#123final&#125\n        +Lego(id: int)\n    }\n\n    class LegoBrick {\n        <<abstract>>\n        -dimensions: int[3] &#123final&#125\n        -color: String &#123final&#125\n        +LegoBrick(id: int, dimensions: int[3], color: String)\n    }\n\n    class LegoBrick2x2x2 {\n        +LegoBrick2x2x2(id: int, color: String)\n    }\n\n    class LegoBrick4x2x1 {\n        +LegoBrick4x2x1(id: int, color: String)\n    }\n\n    class Comparator~LegoBrick~ {\n        <<interface>>\n        +compare(o1: LegoBrick, o2: LegoBrick) int\n    }\n\n    class LegoBrickVolumeComparator {\n        +compare(legoBrick1: LegoBrick, legoBrick2: LegoBrick) int\n    }"}),"\n",(0,n.jsx)(r.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,n.jsx)(r.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"hinweis-zur-klasse-legobrickvolumecomparator",children:["Hinweis zur Klasse ",(0,n.jsx)(r.em,{children:"LegoBrickVolumeComparator"})]}),"\n",(0,n.jsxs)(r.p,{children:["Die Methode ",(0,n.jsx)(r.code,{children:"int compare(legoBrick1: LegoBrick, legoBrick2: LegoBrick)"})," soll so\nimplementiert werden, dass damit Lego-Bausteine aufsteigend nach ihrem Volumen\nsortiert werden k\xf6nnen."]})]})}function d(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11151:(e,r,i)=>{i.d(r,{Z:()=>t,a:()=>o});var n=i(67294);const a={},s=n.createContext(a);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);