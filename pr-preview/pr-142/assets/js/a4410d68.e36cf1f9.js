"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6602],{46132:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>t});var r=s(85893),i=s(11151);const l={title:"Geometrische Form",description:"",tags:["oo","inheritance","polymorphy","io-streams"]},a=void 0,c={id:"exam-exercises/exam-exercises-java1/shape",title:"Geometrische Form",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/shape.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/shape",permalink:"/java-docs/pr-preview/pr-142/exam-exercises/exam-exercises-java1/shape",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/shape.md",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-142/tags/oo"},{label:"inheritance",permalink:"/java-docs/pr-preview/pr-142/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-142/tags/polymorphy"},{label:"io-streams",permalink:"/java-docs/pr-preview/pr-142/tags/io-streams"}],version:"current",frontMatter:{title:"Geometrische Form",description:"",tags:["oo","inheritance","polymorphy","io-streams"]},sidebar:"examExercisesSidebar",previous:{title:"Selectionsort",permalink:"/java-docs/pr-preview/pr-142/exam-exercises/exam-exercises-java1/selection-sort"},next:{title:"Kurs",permalink:"/java-docs/pr-preview/pr-142/exam-exercises/exam-exercises-java1/student-course"}},d={},t=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>Shape</em>",id:"hinweise-zur-klasse-shape",level:2},{value:"Hinweise zur Klasse <em>Circle</em>",id:"hinweise-zur-klasse-circle",level:2},{value:"Hinweise zur Klasse <em>Rectangle</em>",id:"hinweise-zur-klasse-rectangle",level:2},{value:"Hinweise zur Klasse <em>ShapeReader</em>",id:"hinweise-zur-klasse-shapereader",level:2},{value:"Beispielhafter Aufbau der Formendatei",id:"beispielhafter-aufbau-der-formendatei",level:2}];function o(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    ShapeReader o-- Shape\n    Shape <|-- Circle\n    Shape <|-- Rectangle\n    Rectangle <|-- Square\n\n    class ShapeReader {\n        -shapes: List~Shape~ &#123final&#125\n        +ShapeReader(file: File)\n        +getCircles() List~Circle~\n        +getShapesWithMinArea(minAreaInCm2: double) List~Shape~\n    }\n\n    class Shape {\n        +getAreaInCm2(): double\n        +getCircumferenceInCm() double\n    }\n\n    class Circle {\n        -rInCm: double &#123final&#125\n        +Circle(rInCm: double)\n        +getAreaInCm2() double\n        +getCircumferenceInCm() double\n    }\n\n    class Rectangle {\n        -aInCm: double &#123final&#125\n        -bInCm: double &#123final&#125\n        +Rectangle(aInCm: double, bInCm: double)\n        +getAreaInCm2() double\n        +getCircumferenceInCm() double\n    }\n\n    class Square {\n        +Square(aInCm: double)\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n",(0,r.jsxs)(n.li,{children:["Die statische Konstante ",(0,r.jsx)(n.code,{children:"PI"})," der Klasse ",(0,r.jsx)(n.code,{children:"Math"})," stellt die Kreiszahl Pi dar"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-shape",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"Shape"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"double getAreaInCm2()"})," soll den Wert ",(0,r.jsx)(n.em,{children:"0"})," zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"double getCircumferenceInCm()"})," soll den Wert ",(0,r.jsx)(n.em,{children:"0"})," zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-circle",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"Circle"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"double getAreaInCm2()"})," soll den Fl\xe4cheninhalt gem\xe4\xdf der Formel\n",(0,r.jsx)(n.code,{children:"\ud835\udc34 = \ud835\udf0b \u2217 \ud835\udc5f \u2217 \ud835\udc5f"})," berechnen und zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"double getCircumferenceInCm()"})," soll den Umfang gem\xe4\xdf der Formel\n",(0,r.jsx)(n.code,{children:"U = 2 \u2217 \ud835\udf0b \u2217 \ud835\udc5f"})," berechnen und zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-rectangle",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"Rectangle"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"double getAreaInCm2()"})," soll den Fl\xe4cheninhalt gem\xe4\xdf der Formel\n",(0,r.jsx)(n.code,{children:"\ud835\udc34 = \ud835\udc4e \u2217 \ud835\udc4f"})," berechnen und zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"double getCircumferenceInCm()"})," soll den Umfang gem\xe4\xdf der Formel\n",(0,r.jsx)(n.code,{children:"U = 2 \u2217 \ud835\udc4e + 2 \u2217 \ud835\udc4f"})," berechnen und zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-shapereader",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"ShapeReader"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Der Konstruktor soll der Formenliste (",(0,r.jsx)(n.code,{children:"shapes"}),") alle Formen der eingehenden\nDatei hinzuf\xfcgen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"List<Circle> getCircles()"})," soll alle Kreise der Formenliste\n(",(0,r.jsx)(n.code,{children:"shapes"}),") zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"List<Shape> getShapesWithMinArea(minAreaInCm2: double)"})," soll alle\nFormen der Formenliste (",(0,r.jsx)(n.code,{children:"shapes"}),") zur\xfcckgeben, die mindestens den eingehenden\nFl\xe4cheninhalt aufweisen"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"beispielhafter-aufbau-der-formendatei",children:"Beispielhafter Aufbau der Formendatei"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Circle;4\nSquare;5\nRectangle;3;4\nRectangle;1;7\nCircle;2\nCircle;3\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var r=s(67294);const i={},l=r.createContext(i);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);