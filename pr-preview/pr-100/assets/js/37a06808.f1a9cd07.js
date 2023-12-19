"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6345],{69983:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var a=s(85893),i=s(11151);const l={title:"Innere Klassen (Inner Classes)",description:"",sidebar_position:260,tags:["inner-classes"]},r=void 0,t={id:"documentation/inner-classes",title:"Innere Klassen (Inner Classes)",description:"",source:"@site/docs/documentation/inner-classes.md",sourceDirName:"documentation",slug:"/documentation/inner-classes",permalink:"/java-docs/pr-preview/pr-100/documentation/inner-classes",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/inner-classes.md",tags:[{label:"inner-classes",permalink:"/java-docs/pr-preview/pr-100/tags/inner-classes"}],version:"current",sidebarPosition:260,frontMatter:{title:"Innere Klassen (Inner Classes)",description:"",sidebar_position:260,tags:["inner-classes"]},sidebar:"documentationSidebar",previous:{title:"Datenklassen (Records)",permalink:"/java-docs/pr-preview/pr-100/documentation/records"},next:{title:"Lambda-Ausdr\xfccke (Lambdas)",permalink:"/java-docs/pr-preview/pr-100/documentation/lambdas"}},d={},c=[{value:"Geschachtelte Klassen (Nested Classes)",id:"geschachtelte-klassen-nested-classes",level:2},{value:"Elementklassen (Member Classes)",id:"elementklassen-member-classes",level:2},{value:"Lokale Klassen",id:"lokale-klassen",level:2},{value:"Anonyme Klassen",id:"anonyme-klassen",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Java bietet die M\xf6glichkeit, Klassen und Schnittstellen zu verschachteln. Das\nZiel von inneren Klassen ist eine Definition von Hilfsklassen m\xf6glichst nahe an\nder Stelle, wo sie gebraucht werden. Beispiele f\xfcr Hilfsklassen sind\nAusnahmeklassen, Komparatoren und Ereignisbehandler. Alle bisherigen Klassen\nwerden auch als ",(0,a.jsx)(n.em,{children:"\xe4u\xdferer Klassen"})," bzw. ",(0,a.jsx)(n.em,{children:"Top-Level-Klassen"})," bezeichnet."]}),"\n",(0,a.jsx)(n.h2,{id:"geschachtelte-klassen-nested-classes",children:"Geschachtelte Klassen (Nested Classes)"}),"\n",(0,a.jsxs)(n.p,{children:["Geschachtelte Klassen sind Top-Level-Klassen, die zur Strukturierung des\nNamensraumes in anderen Top-Level-Klassen definiert sind. Ein Namensraum ist die\nvollst\xe4ndige Pfadangabe zur Klasse (z.B. ",(0,a.jsx)(n.code,{children:"java.lang"}),"). Geschachtelte Klassen\nm\xfcssen statisch definiert werden und sind daher im eigentlichen Sinne keine\nrichtigen inneren Klassen."]}),"\n",(0,a.jsxs)(n.p,{children:["Zun\xe4chst wird die \xe4u\xdfere Klasse ",(0,a.jsx)(n.code,{children:"OuterClass"})," samt der geschachtelten Klasse\n",(0,a.jsx)(n.code,{children:"InnerClass"})," definiert."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="OuterClass.java" showLineNumbers',children:"public class OuterClass {\n\n  public static class InnerClass {\n  }\n\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In der main-Methode der Startklasse kann die innere Klasse ",(0,a.jsx)(n.code,{children:"InnerClass"})," nur\ndurch Angabe des vollst\xe4ndigen Namensraumes verwendet werden, was die Angabe der\n\xe4u\xdferer Klasse ",(0,a.jsx)(n.code,{children:"OuterClass"})," miteinschlie\xdft."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n      OuterClass o = new OuterClass();\n      OuterClass.InnerClass i = new OuterClass.InnerClass();\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"elementklassen-member-classes",children:"Elementklassen (Member Classes)"}),"\n",(0,a.jsxs)(n.p,{children:["Objekte von Elementklassen sind immer mit einem Objekt der umgebenden Klasse\nverbunden. Dies erm\xf6glicht die Umsetzung von Kompositionen (siehe\n",(0,a.jsx)(n.a,{href:"class-diagrams#darstellung-von-assoziationen",children:"Darstellung von Assoziationen"}),").\nSie haben Zugriff auf alle Variablen und Methoden der sie umgebenden Klasse und\nd\xfcrfen keine statischen Elemente enthalten."]}),"\n",(0,a.jsxs)(n.p,{children:["Zun\xe4chst wird die \xe4u\xdfere Klasse ",(0,a.jsx)(n.code,{children:"OuterClass"})," samt der Elementklasse ",(0,a.jsx)(n.code,{children:"InnerClass"}),"\ndefiniert."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="OuterClass.java" showLineNumbers',children:"public class OuterClass {\n\n  public class InnerClass {\n  }\n\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In der main-Methode der Startklasse kann ein Objekt der Klasse ",(0,a.jsx)(n.code,{children:"InnerClass"})," nur\nauf ein bestehendes Objekt der Klasse ",(0,a.jsx)(n.code,{children:"OuterClass"})," erzeugt werden."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    OuterClass o = new OuterClass();\n    OuterClass.InnerClass i = new OuterClass.InnerClass(); // Kompilierungsfehler\n    OuterClass.InnerClass i = o.new InnerClass();\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"lokale-klassen",children:"Lokale Klassen"}),"\n",(0,a.jsxs)(n.p,{children:["Lokale Klassen werden innerhalb einer Methode definiert und k\xf6nnen auch nur dort\nverwendet werden. Sie d\xfcrfen nicht als ",(0,a.jsx)(n.code,{children:"public"}),", ",(0,a.jsx)(n.code,{children:"protected"}),", ",(0,a.jsx)(n.code,{children:"private"})," oder\n",(0,a.jsx)(n.code,{children:"static"})," definiert werden, d\xfcrfen keine statischen Elemente enthalten und k\xf6nnen\nnur die mit ",(0,a.jsx)(n.code,{children:"final"})," markierten Variablen und Parameter der umgebenden Methode\nverwenden."]}),"\n",(0,a.jsxs)(n.p,{children:["Zun\xe4chst wird die Schnittstelle ",(0,a.jsx)(n.code,{children:"Qux"})," samt der Methode\n",(0,a.jsx)(n.code,{children:"void quux(s: String)"}),"definiert."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Qux.java" showLineNumbers',children:"public interface Qux {\n\n  void quux(String s);\n\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Die Klasse ",(0,a.jsx)(n.code,{children:"Foo"})," soll die Verwenderklasse der Schnittstelle ",(0,a.jsx)(n.code,{children:"Qux"})," darstellen."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public class Foo {\n\n  public static void bar(String s, Qux q) {\n    q.quux(s);\n  }\n\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In der main-Methode der Startklasse soll die Methode\n",(0,a.jsx)(n.code,{children:"void bar(s: String, q: Qux)"})," der Klasse ",(0,a.jsx)(n.code,{children:"Foo"})," aufgerufen werden, wof\xfcr eine\nkonkrete Implementierung der Schnittstelle ",(0,a.jsx)(n.code,{children:"Qux"})," ben\xf6tigt wird. Die\nImplementierung erfolgt in Form der lokalen Klasse ",(0,a.jsx)(n.code,{children:"LocalClass"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    class LocalClass implements Qux {\n      @Override\n      public void quux(String s) {\n        System.out.println(s);\n      }\n    }\n\n    LocalClass l = new LocalClass();\n    Foo.bar("Winter is Coming", l);\n  }\n\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"anonyme-klassen",children:"Anonyme Klassen"}),"\n",(0,a.jsx)(n.p,{children:"Anonyme Klassen besitzen im Gegensatz zu lokalen Klassen keinen Namen und werden\ninnerhalb eines Ausdrucks definiert und instanziiert; Klassendeklaration und\nObjekterzeugung sind also in einem Sprachkonstrukt vereint. Wird als Datentyp\neine Schnittstelle ben\xf6tigt, implementiert die anonyme Klasse diese\nSchnittstelle, wird als Datentyp eine Klasse ben\xf6tigt, so wird die anonyme\nKlasse daraus abgeleitet."}),"\n",(0,a.jsxs)(n.p,{children:["Zun\xe4chst wird die Schnittstelle ",(0,a.jsx)(n.code,{children:"Qux"})," samt der Methode\n",(0,a.jsx)(n.code,{children:"void quux(s: String)"}),"definiert."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Qux.java" showLineNumbers',children:"public interface Qux {\n\n  void quux(String s);\n\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Die Klasse ",(0,a.jsx)(n.code,{children:"Foo"})," soll die Verwenderklasse der Schnittstelle ",(0,a.jsx)(n.code,{children:"Qux"})," darstellen."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public class Foo {\n\n  public static void bar(String s, Qux q) {\n    q.quux(s);\n  }\n\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In der main-Methode der Startklasse soll die Methode\n",(0,a.jsx)(n.code,{children:"void bar(s: String, q: Qux)"})," der Klasse ",(0,a.jsx)(n.code,{children:"Foo"})," aufgerufen werden, wof\xfcr eine\nkonkrete Implementierung der Schnittstelle ",(0,a.jsx)(n.code,{children:"Qux"})," ben\xf6tigt wird. Die\nImplementierung erfolgt in Form einer anonymen Klasse."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    Foo.bar("Winter is Coming", new Qux() {\n      @Override\n      public void quux(String s) {\n        System.out.println(s);\n      }\n    });\n  }\n\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>r});var a=s(67294);const i={},l=a.createContext(i);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);