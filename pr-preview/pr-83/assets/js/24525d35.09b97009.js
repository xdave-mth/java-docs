"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6872],{48073:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=i(85893),s=i(11151);const a={title:"Ausnahmen (Exceptions)",description:"",sidebar_position:230,tags:["exceptions"]},t=void 0,l={id:"documentation/exceptions",title:"Ausnahmen (Exceptions)",description:"",source:"@site/docs/documentation/exceptions.md",sourceDirName:"documentation",slug:"/documentation/exceptions",permalink:"/java-docs/pr-preview/pr-83/documentation/exceptions",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/exceptions.md",tags:[{label:"exceptions",permalink:"/java-docs/pr-preview/pr-83/tags/exceptions"}],version:"current",sidebarPosition:230,frontMatter:{title:"Ausnahmen (Exceptions)",description:"",sidebar_position:230,tags:["exceptions"]},sidebar:"documentationSidebar",previous:{title:"Komparatoren",permalink:"/java-docs/pr-preview/pr-83/documentation/comparators"},next:{title:"Datenklassen (Records)",permalink:"/java-docs/pr-preview/pr-83/documentation/records"}},d={},o=[{value:"Kompilierungsfehler",id:"kompilierungsfehler",level:2},{value:"Logikfehler",id:"logikfehler",level:2},{value:"Laufzeitfehler",id:"laufzeitfehler",level:2},{value:"Die Klassenhierarchie der Laufzeitfehler",id:"die-klassenhierarchie-der-laufzeitfehler",level:3},{value:"Definition von Ausnahmenklassen",id:"definition-von-ausnahmenklassen",level:3},{value:"Ausl\xf6sen von Ausnahmen",id:"ausl\xf6sen-von-ausnahmen",level:3},{value:"Weiterleiten von Ausnahmen",id:"weiterleiten-von-ausnahmen",level:3},{value:"Abfangen von Ausnahmen",id:"abfangen-von-ausnahmen",level:3}];function h(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Programmfehler (Bugs) f\xfchren dazu, dass Programme unerwartete Ergebnisse liefern\noder abst\xfcrzen. Je komplexer das Programm, desto wichtiger wird eine durchdachte\nund konsequente Fehlerbehandlung. Man unterscheidt dabei zwischen verschiedenen\nFehlerarten: Kompilierungsfehler, Logikfehler und Laufzeitfehler."}),"\n",(0,r.jsx)(n.h2,{id:"kompilierungsfehler",children:"Kompilierungsfehler"}),"\n",(0,r.jsx)(n.p,{children:"Kompilierungsfehler sind Programmfehler, die verhindern, dass das Programm\nausgef\xfchrt werden kann. Sie k\xf6nnen relativ einfach behoben werden, da sie schon\nzur Designzeit auftreten und von den meisten Entwicklungsumgebungen direkt\nangezeigt werden."}),"\n",(0,r.jsx)(n.h2,{id:"logikfehler",children:"Logikfehler"}),"\n",(0,r.jsx)(n.p,{children:"Verh\xe4lt sich das Programm nicht wie beabsichtigt, spricht man von Logikfehlern.\nSie sind mit am schwersten zu entdecken und zu beheben. Zur Unterst\xfczung bei der\nFehlersuche und -behandlung kann unter Anderem der Debugger verwendet werden.\nDer Debugger erm\xf6glicht es, Programme zur Laufzeit zu analysieren und zu\nsteuern. Durch das Setzen von Haltepunkten (Breakpoints) kann die Ausf\xfchrung des\nProgramms an beliebiger Stelle angehalten werden. Dadurch lassen sich z.B. die\nInhalte von Datenobjekten \xfcberpr\xfcfen. Zudem bietet der Debugger die M\xf6glichkeit,\ndie weitere Ausf\xfchrung des Programms in der gew\xfcnschten Schrittweite\nforzuf\xfchren."}),"\n",(0,r.jsx)(n.h2,{id:"laufzeitfehler",children:"Laufzeitfehler"}),"\n",(0,r.jsxs)(n.p,{children:["Laufzeitfehler treten erst beim Ausf\xfchren des Programms auf. Sie entstehen meist\ndann, wenn das Programm versucht, eine Operation auszuf\xfchren, die nicht\nausgef\xfchrt werden kann (z.B. die Division durch Null). Diese Situationen werden\nauch als Ausnahmen (Exceptions) bezeichnet. Ausnahmen gew\xe4hrleisten eine klare\nTrennung zwischen funktionalem Code und Code zur Fehlerbehandlung. Die\nFehlerbehandlung erfolgt dabei gem\xe4\xdf dem Ausnahmenbehandlungsprozess: nachdem\neine Ausnahme ausgel\xf6st wurde, kann bzw. muss diese je nach Ausnahmenart vom\nEmpf\xe4nger der Ausnahme entweder behandelt oder weitergeleitet werden\n",(0,r.jsx)(n.em,{children:"Catch-or-Throw-Regel"})," Man unterscheidet zwischen ",(0,r.jsx)(n.em,{children:"gepr\xfcften"})," (checked) und\n",(0,r.jsx)(n.em,{children:"ungepr\xfcften"})," (unchecked) Ausnahmen. Gepr\xfcfte Ausnahmen m\xfcssen, ungepr\xfcfte\nAusnahmen k\xf6nnen behandelt bzw. weitergeleitet werden."]}),"\n",(0,r.jsx)(n.h3,{id:"die-klassenhierarchie-der-laufzeitfehler",children:"Die Klassenhierarchie der Laufzeitfehler"}),"\n",(0,r.jsxs)(n.p,{children:["Die Klasse ",(0,r.jsx)(n.code,{children:"Throwable"})," stellt die Oberklasse aller Laufzeitfehler dar.\nSchwerwiegende Fehler (haupts\xe4chlich Probleme in der JVM (Java Virtual Machine))\nwerden durch Unterklassen der Klasse ",(0,r.jsx)(n.code,{children:"Error"})," abgebildet, gepr\xfcfte Ausnahmen\ndurch Unterklassen der Klasse ",(0,r.jsx)(n.code,{children:"Exception"})," und ungepr\xfcfte Ausnahmen durch\nUnterklassen der Klasse ",(0,r.jsx)(n.code,{children:"RuntimeException"}),"."]}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Throwable <|-- Error\n    Throwable <|-- Exception\n    Exception <|-- TimeOutException\n    Exception <|-- RunTimeException\n    RunTimeException <|-- NullPointerException\n    RunTimeException <|-- ArithmeticException"}),"\n",(0,r.jsx)(n.h3,{id:"definition-von-ausnahmenklassen",children:"Definition von Ausnahmenklassen"}),"\n",(0,r.jsxs)(n.p,{children:["Eigene Ausnahmenklassen werden durch einfaches Ableiten von einer bestehenden\nAusnahmenklasse definiert. Ausnahmenklassen sollten dabei immer von der Klasse\n",(0,r.jsx)(n.code,{children:"Exception"})," oder einer ihrer Unterklassen abgeleitet werden, nicht von der\nKlasse ",(0,r.jsx)(n.code,{children:"Error"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="QuxException.java" showLineNumbers',children:"public class QuxException extends Exception {\n\n  public QuxException() {}\n\n  public QuxException(String message) {}\n\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"ausl\xf6sen-von-ausnahmen",children:"Ausl\xf6sen von Ausnahmen"}),"\n",(0,r.jsxs)(n.p,{children:["Mit dem Schl\xfcsselwort ",(0,r.jsx)(n.code,{children:"throw"})," kann innerhalb einer Methode eine Ausnahme\nausgel\xf6st werden. Die Methode, in der die Ausnahme ausgel\xf6st wird, muss mit dem\nSchl\xfcsselwort ",(0,r.jsx)(n.code,{children:"throws"})," die Ausnahmenklasse angeben, die ausgel\xf6st werden kann."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public class Foo {\n\n  public void bar() throws QuxException {\n    throw new QuxException();\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"weiterleiten-von-ausnahmen",children:"Weiterleiten von Ausnahmen"}),"\n",(0,r.jsxs)(n.p,{children:["Ausnahmen k\xf6nnen weitergeleitet werden. Hierbei wird die Fehlerbehandlung an die\nn\xe4chsth\xf6here Ebene weitergegeben. Um eine Ausnahme weiterzuleiten, muss in der\nweiterleitenden Methode mit ",(0,r.jsx)(n.code,{children:"throws"})," die Ausnahme angegeben werden, die\nausgel\xf6st werden kann."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public class Foo {\n\n  public void bar() throws QuxException {\n    throw new QuxException();\n  }\n\n  public void baz() throws QuxException {\n    bar();\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"abfangen-von-ausnahmen",children:"Abfangen von Ausnahmen"}),"\n",(0,r.jsxs)(n.p,{children:["Mit Hilfe der try-catch-Anweisung k\xf6nnen Methoden, die eine Ausnahme ausl\xf6sen\nk\xf6nnen, \xfcberwacht werden; d.h. die Ausnahmen werden gegebenenfalls abgefangen.\nDer try-Block enth\xe4lt die Anweisungen, die \xfcberwacht werden sollen, der\ncatch-Block enth\xe4lt die eigentliche Fehlerbehandlung. Als Parameter von ",(0,r.jsx)(n.code,{children:"catch"}),"\nmuss angegeben werden, welche Ausnahme(n) abgefangen werden soll(en)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    try {\n      Foo foo = new Foo();\n      foo.bar();\n    } catch (QuxException e) {\n      /* Fehlerbehandlung */\n    }\n  }\n\n}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>t});var r=i(67294);const s={},a=r.createContext(s);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);