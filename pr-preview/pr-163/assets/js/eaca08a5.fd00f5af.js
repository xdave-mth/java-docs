"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7435],{55923:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>l,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var s=a(74848),i=a(28453);const n={title:"Selectionsort",description:"",tags:["activity-diagrams"]},r=void 0,o={id:"exam-exercises/exam-exercises-java1/selection-sort",title:"Selectionsort",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/selection-sort.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/selection-sort",permalink:"/java-docs/pr-preview/pr-163/exam-exercises/exam-exercises-java1/selection-sort",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/selection-sort.md",tags:[{label:"activity-diagrams",permalink:"/java-docs/pr-preview/pr-163/tags/activity-diagrams"}],version:"current",frontMatter:{title:"Selectionsort",description:"",tags:["activity-diagrams"]},sidebar:"examExercisesSidebar",previous:{title:"Tiefgarage",permalink:"/java-docs/pr-preview/pr-163/exam-exercises/exam-exercises-java1/parking-garage"},next:{title:"Geometrische Form",permalink:"/java-docs/pr-preview/pr-163/exam-exercises/exam-exercises-java1/shape"}},m={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Aktivit\xe4tsdiagramm zur Methode <em>void main(args: String[])</em>",id:"aktivit\xe4tsdiagramm-zur-methode-void-mainargs-string",level:2},{value:"Aktivit\xe4tsdiagramm zur Methode <em>void sort()</em>",id:"aktivit\xe4tsdiagramm-zur-methode-void-sort",level:2}];function c(e){const t={code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Erstelle die ausf\xfchrbare Klasse ",(0,s.jsx)(t.code,{children:"SelectionSort"})," anhand des abgebildeten\nKlassendiagramms sowie anhand der abgebildeten Aktivit\xe4tsdiagramme."]}),"\n",(0,s.jsx)(t.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(t.mermaid,{value:"classDiagram\n    class SelectionSort {\n        -data: List~Integer~$\n        +main(args: String[]) void$\n        -sort() void$\n    }"}),"\n",(0,s.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-methode-void-mainargs-string",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,s.jsx)(t.em,{children:"void main(args: String[])"})]}),"\n",(0,s.jsx)(t.mermaid,{value:'stateDiagram-v2\n    state "Liste mit 1.000 Zufallszahlen zwischen 1 und 100 f\xfcllen" as state1\n    state "Liste ausgeben" as state2\n    state "Aktivit\xe4t \'Sortieren\' ausf\xfchren" as state3\n    state "Liste ausgeben" as state4\n\n    state "Selectionsort" as main {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e state3\n        state3 --\x3e state4\n        state4 --\x3e [*]\n    }'}),"\n",(0,s.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-methode-void-sort",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,s.jsx)(t.em,{children:"void sort()"})]}),"\n",(0,s.jsx)(t.mermaid,{value:'stateDiagram-v2\n    state "Z\xe4hlvariable 1 = 0" as state1\n    state "Index = Z\xe4hlvariable 1" as state2\n    state "Z\xe4hlvariable 2 = Z\xe4hlvariable 1 + 1" as state3\n    state "Index = Z\xe4hlvariable 2" as state4\n    state "Z\xe4hlvariable 2 inkrementieren" as state5\n    state "Tempor\xe4re Variable = Liste[Index]" as state6\n    state "Liste[Index] = Liste[Z\xe4hlvariable 1]" as state7\n    state "Liste[Z\xe4hlvariable 1] = Tempor\xe4re Variable" as state8\n    state "Z\xe4hlvariable 1 inkrementieren" as state9\n\n    state if1 <<choice>>\n    state if2 <<choice>>\n    state if3 <<choice>>\n    state fork1 <<fork>>\n\n    state "Sortieren" as sort {\n        [*] --\x3e state1\n        state1 --\x3e if1\n        if1 --\x3e state2: Z\xe4hlvariable 1 < L\xe4nge der Liste - 1\n        if1 --\x3e [*]: sonst\n        state2 --\x3e state3\n        state3 --\x3e if2\n        if2 --\x3e if3: Z\xe4hlvariable 2 < L\xe4nge der Liste\n        if2 --\x3e state6: sonst\n        if3 --\x3e state4: Liste[Z\xe4hlvariable 2] < Liste[Index]\n        if3 --\x3e fork1: sonst\n        state4 --\x3e fork1\n        fork1 --\x3e state5\n        state5 --\x3e if2\n        state6 --\x3e state7\n        state7 --\x3e state8\n        state8 --\x3e state9\n        state9 --\x3e if1\n    }'})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var s=a(96540);const i={},n=s.createContext(i);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);