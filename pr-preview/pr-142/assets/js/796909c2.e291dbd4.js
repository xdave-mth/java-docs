"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7630],{31132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=t(85893),s=t(11151);const r={title:"Kurs",description:"",tags:["oo","enumerations"]},a=void 0,o={id:"exam-exercises/exam-exercises-java1/student-course",title:"Kurs",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/student-course.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/student-course",permalink:"/java-docs/pr-preview/pr-142/exam-exercises/exam-exercises-java1/student-course",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/student-course.md",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-142/tags/oo"},{label:"enumerations",permalink:"/java-docs/pr-preview/pr-142/tags/enumerations"}],version:"current",frontMatter:{title:"Kurs",description:"",tags:["oo","enumerations"]},sidebar:"examExercisesSidebar",previous:{title:"Geometrische Form",permalink:"/java-docs/pr-preview/pr-142/exam-exercises/exam-exercises-java1/shape"},next:{title:"Zoo",permalink:"/java-docs/pr-preview/pr-142/exam-exercises/exam-exercises-java1/zoo"}},d={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>StudentCourse</em>",id:"hinweis-zur-klasse-studentcourse",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    StudyCourse o-- Student\n    StudyCourse o-- Lecture\n    StudyCourse o-- CourseOfStudies\n    Student o-- MatriculationNumber\n\n    class MatriculationNumber {\n        -digits: int[] &#123final&#125\n        +MatriculationNumber(digit1: int, digit2: int, digit3: int, digit4: int, digit5: int, digit6: int, digit7: int)\n    }\n\n    class Student {\n        -matriculationNumber: MatriculationNumber &#123final&#125\n        -name: String &#123final&#125\n        +Student(matriculationNumber: int[7], name: String)\n    }\n\n    class Lecture {\n        -code: String &#123final&#125\n        -description: String &#123final&#125\n        -creditPoints: int &#123final&#125\n        +Lecture(code: String, description: String, creditPoints: int)\n    }\n\n    class StudyCourse {\n        -description: String &#123final&#125\n        -courseOfStudies: CourseOfStudies &#123final&#125\n        -lectures: List~Lecture~ &#123final&#125\n        -students: List~Student~ &#123final&#125\n        +StudyCourse(description: String, courseOfStudies: CourseOfStudies)\n        +addStudent(student: Student) void\n        +addLecture(lecture: Lecture) void\n        +getLectureWithMostCreditPoints() Lecture\n    }\n\n    class CourseOfStudies {\n        <<enumeration>>\n        WI = Wirtschaftsinformatik\n        INF = Informatik\n        BWL = BWL\n        -description: String &#123final&#125\n    }"}),"\n",(0,i.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,i.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweis-zur-klasse-studentcourse",children:["Hinweis zur Klasse ",(0,i.jsx)(n.em,{children:"StudentCourse"})]}),"\n",(0,i.jsxs)(n.p,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"Lecture getLectureWithMostCreditPoints()"})," soll die Vorlesung mit\nden meisten ECTS-Punkten zur\xfcckgeben."]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);