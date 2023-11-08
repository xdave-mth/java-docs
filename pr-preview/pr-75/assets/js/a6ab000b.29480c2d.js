"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9302],{99376:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(85893),a=n(11151);const s={title:"W\xf6rterbuch",description:"",tags:["interfaces","comparators","exceptions","records","maps","optionals","io-streams"]},t=void 0,o={id:"exam-exercises/exam-exercises-java2/dictionary",title:"W\xf6rterbuch",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/dictionary.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/dictionary",permalink:"/java-docs/pr-preview/pr-75/exam-exercises/exam-exercises-java2/dictionary",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/dictionary.md",tags:[{label:"interfaces",permalink:"/java-docs/pr-preview/pr-75/tags/interfaces"},{label:"comparators",permalink:"/java-docs/pr-preview/pr-75/tags/comparators"},{label:"exceptions",permalink:"/java-docs/pr-preview/pr-75/tags/exceptions"},{label:"records",permalink:"/java-docs/pr-preview/pr-75/tags/records"},{label:"maps",permalink:"/java-docs/pr-preview/pr-75/tags/maps"},{label:"optionals",permalink:"/java-docs/pr-preview/pr-75/tags/optionals"},{label:"io-streams",permalink:"/java-docs/pr-preview/pr-75/tags/io-streams"}],version:"current",frontMatter:{title:"W\xf6rterbuch",description:"",tags:["interfaces","comparators","exceptions","records","maps","optionals","io-streams"]},sidebar:"examExercisesSidebar",previous:{title:"Tante-Emma-Laden",permalink:"/java-docs/pr-preview/pr-75/exam-exercises/exam-exercises-java2/corner-shop"},next:{title:"Personalverwaltung",permalink:"/java-docs/pr-preview/pr-75/exam-exercises/exam-exercises-java2/human-resources"}},d={},l=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse Word",id:"hinweis-zur-klasse-word",level:2},{value:"Hinweise zur Klasse Dictionary",id:"hinweise-zur-klasse-dictionary",level:2},{value:"Beispielhafter Aufbau der W\xf6rterdatei",id:"beispielhafter-aufbau-der-w\xf6rterdatei",level:2}];function c(e){const r={code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,i.jsx)(r.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(r.mermaid,{value:"classDiagram\n    Comparable~Word~ <|.. Word\n    Word o-- Language\n    Dictionary o-- Word\n    Dictionary o-- Language\n\n    class Word {\n        <<record>>\n        -value String\n        -language Language\n        +compareTo(other Word) int\n    }\n\n    class Comparable~Word~ {\n        <<interface>>\n        +compareTo(o Word) int\n    }\n\n    class Language {\n        <<enumeration>>\n        DE = DE, Deutsch\n        EN = EN, Englisch\n        -code String\n        -description String\n    }\n\n    class Dictionary {\n        <<record>>\n        -sourceLanguage Language\n        -targetLanguage Language\n        -entries Map~Word&#44&#160Word~\n        +addEntry(sourceWord Word, targetWord Word) void\n        +importEntries(file File) void\n        +getTranslation(word String) Optional~String~\n    }"}),"\n",(0,i.jsx)(r.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,i.jsx)(r.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"hinweis-zur-klasse-word",children:"Hinweis zur Klasse Word"}),"\n",(0,i.jsxs)(r.p,{children:["Die Methode ",(0,i.jsx)(r.code,{children:"int compareTo(other: Word)"})," soll so implementiert werden, dass\ndamit W\xf6rter aufsteigend nach ihrem Wert sortiert werden k\xf6nnen."]}),"\n",(0,i.jsx)(r.h2,{id:"hinweise-zur-klasse-dictionary",children:"Hinweise zur Klasse Dictionary"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Die Methode ",(0,i.jsx)(r.code,{children:"void addEntry(sourceWord: Word, targetWord: Word)"})," soll den\nEintr\xe4gen des W\xf6rterbuches (",(0,i.jsx)(r.code,{children:"entries"}),") die eingehenden W\xf6rter als Eintrag\nhinzuf\xfcgen. F\xfcr den Fall, dass die Sprache des ersten eingehenden Wortes nicht\nder Quellsprache (",(0,i.jsx)(r.code,{children:"sourceLanguage"}),") entspricht, oder die Sprache des zweiten\neingehenden Wortes nicht der Zielsprache (",(0,i.jsx)(r.code,{children:"targetLanguage"}),") entspricht, soll\ndie Ausnahme ",(0,i.jsx)(r.code,{children:"InvalidLanguageException"})," ausgel\xf6st werden"]}),"\n",(0,i.jsxs)(r.li,{children:["Die Methode ",(0,i.jsx)(r.code,{children:"void importEntries(file: File)"})," soll den Eintr\xe4gen des\nW\xf6rterbuches (",(0,i.jsx)(r.code,{children:"entries"}),") die W\xf6rter der eingehenden Datei als Eintr\xe4ge\nhinzuf\xfcgen. Die Ausnahme ",(0,i.jsx)(r.code,{children:"FileNotFoundException"})," soll dabei weitergeleitet\nwerden"]}),"\n",(0,i.jsxs)(r.li,{children:["Die Methode ",(0,i.jsx)(r.code,{children:"Optional<String> getTranslation(word: String)"})," soll die\n\xdcbersetzung zur eingehenden Zeichenkette als Optional zur\xfcckgeben"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"beispielhafter-aufbau-der-w\xf6rterdatei",children:"Beispielhafter Aufbau der W\xf6rterdatei"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"DE;Haus;EN;House\nDE;Maus;EN;Mouse\nDE;Baum;EN;Tree\n"})})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>t});var i=n(67294);const a={},s=i.createContext(a);function t(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);