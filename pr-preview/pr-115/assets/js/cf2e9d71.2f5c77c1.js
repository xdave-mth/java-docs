"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8635],{36036:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(85893),a=t(11151);const r={title:"Datenobjekte",description:"",sidebar_position:40,tags:["data-objects"]},s=void 0,o={id:"documentation/data-objects",title:"Datenobjekte",description:"",source:"@site/docs/documentation/data-objects.md",sourceDirName:"documentation",slug:"/documentation/data-objects",permalink:"/java-docs/pr-preview/pr-115/documentation/data-objects",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/data-objects.md",tags:[{label:"data-objects",permalink:"/java-docs/pr-preview/pr-115/tags/data-objects"}],version:"current",sidebarPosition:40,frontMatter:{title:"Datenobjekte",description:"",sidebar_position:40,tags:["data-objects"]},sidebar:"documentationSidebar",previous:{title:"Datentypen",permalink:"/java-docs/pr-preview/pr-115/documentation/data-types"},next:{title:"Zeichenketten (Strings)",permalink:"/java-docs/pr-preview/pr-115/documentation/strings"}},l={},d=[{value:"Deklaration von Datenobjekten",id:"deklaration-von-datenobjekten",level:2},{value:"Initialisierung von Datenobjekten",id:"initialisierung-von-datenobjekten",level:2},{value:"Typinferenz bei Datenobjekten",id:"typinferenz-bei-datenobjekten",level:2},{value:"G\xfcltigkeitsbereiche von Datenobjekten",id:"g\xfcltigkeitsbereiche-von-datenobjekten",level:2},{value:"Typumwandlung (Type Casting)",id:"typumwandlung-type-casting",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Ein Datenobjekt ist ein Platzhalter, der zur Laufzeit eine bestimmte Stelle des\nArbeitsspeichers belegt. Die Gr\xf6\xdfe des reservierten Speichers ist abh\xe4ngig vom\ngew\xe4hlten ",(0,i.jsx)(n.a,{href:"data-types",children:"Datentyp"}),"). Datenobjekte k\xf6nnen mit Werten belegt werden,\nBezeichner erm\xf6glichen das Ansprechen im Programmablauf. Man unterscheidet\nzwischen variablen Datenobjekten (",(0,i.jsx)(n.em,{children:"Variablen"}),") und fixen Datenobjekten\n(",(0,i.jsx)(n.em,{children:"Konstanten"})," und ",(0,i.jsx)(n.em,{children:"Literale"}),"). Konstanten sind fixe Datenobjekte, die \xfcber einen\nBezeichner angesprochen werden k\xf6nnen. Sie werden mit dem Schl\xfcsselwort ",(0,i.jsx)(n.code,{children:"final"}),"\ndeklariert. Literale sind sogenannte w\xf6rtliche Konstanten, d.h. fixe\nDatenobjekte ohne Bezeichner. Da Literale \xfcber keinen Bezeichner verf\xfcgen,\nk\xf6nnen Sie im Programm nicht angesprochen werden."]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart\n    hans(Bezeichner: hans\\nDatentyp: String\\nWert: Hans)\n    i(Bezeichner: i\\nDatentyp: int\\nWert: 5)\n    isAvailable(Bezeichner: isAvailable\\nDatentyp: boolean\\nWert: true)"}),"\n",(0,i.jsx)(n.h2,{id:"deklaration-von-datenobjekten",children:"Deklaration von Datenobjekten"}),"\n",(0,i.jsx)(n.p,{children:"Durch Angabe von Datentyp und Bezeichner wird ein Datenobjekt deklariert, d.h.\ndem Compiler bekannt gegeben. Deklarationen werden wie jede Anweisung mit einem\nSemikolon abgeschlossen. Datenobjekte gleichen Datentyps k\xf6nnen mit Komma\ngetrennt aufgef\xfchrt werden."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    int a, b;\n    boolean error;\n    char char1;\n    String text;\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,i.jsx)(n.p,{children:"Java ist case-sensitiv, unterscheidet also zwischen Gro\xdf- und Kleinschreibung.\nUm die Lesbarkeit zu erh\xf6hen, sollten Variablen mit einem Kleinbuchstaben\nbeginnen, wohingegen Konstanten immer in Gro\xdfbuchstaben geschrieben werden\nsollten."})}),"\n",(0,i.jsx)(n.h2,{id:"initialisierung-von-datenobjekten",children:"Initialisierung von Datenobjekten"}),"\n",(0,i.jsxs)(n.p,{children:["In Java m\xfcssen Datenobjekte vor der ersten Verwendung explizit initialisiert\nwerden, d.h. mit einem Wert belegt werden. Der Zuweisungsoperator ",(0,i.jsx)(n.code,{children:"="})," weist dem\nDatenobjekt auf der linken Seite den Wert des Ausdrucks auf der rechten Seite\nzu."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    int a = 42, b = a;\n    boolean error = true;\n    char char1;\n    String text;\n\n    char1 = 'M';\n    text = \"Winter is Coming\";\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"typinferenz-bei-datenobjekten",children:"Typinferenz bei Datenobjekten"}),"\n",(0,i.jsxs)(n.p,{children:["Unter Typinferenz versteht man, dass bei der Deklaration eines Datenobjekts auf\ndie Angabe eine Datentyps verzichtet werden kann, wenn der Compiler aufgrund der\nrestlichen Angaben den Typ selbstst\xe4ndig ermitteln kann. F\xfcr die Typinferenz\nwird das Schl\xfcsselwort ",(0,i.jsx)(n.code,{children:"var"})," verwendet."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    int i = 5;\n    i = "Text"; // Kompilierungsfehler\n\n    var j = 5;\n    j = "Text"; // Kompilierungsfehler\n  }\n\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,i.jsxs)(n.p,{children:["Mit ",(0,i.jsx)(n.code,{children:"var"})," deklarierte Datenobjekte sind weiterhin statisch typisiert."]})}),"\n",(0,i.jsx)(n.h2,{id:"g\xfcltigkeitsbereiche-von-datenobjekten",children:"G\xfcltigkeitsbereiche von Datenobjekten"}),"\n",(0,i.jsx)(n.p,{children:"Datenobjekte sind nur innerhalb eines Anweisungsblocks g\xfcltig, d.h. man kann nur\ninnerhalb dieses Programmabschnitts auf das Datenobjekt zugreifen."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    int a = 1, b;\n    b = foo(a);\n  }\n\n  public static int foo(int c) {\n    int d;\n    d = a++; // Kompilierungsfehler\n    d = c++;\n    return d;\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"typumwandlung-type-casting",children:"Typumwandlung (Type Casting)"}),"\n",(0,i.jsxs)(n.p,{children:["Der Cast-Operator ",(0,i.jsx)(n.code,{children:"()"})," erlaubt die explizite Umwandlung eines Datentyps in einen\nanderen. Bei Wertzuweisungen findet eine implizite Typumwandlung vom\nniederwertigen zum h\xf6herwertigen Datentyp statt. Zu beachten ist, dass bei einer\nTypumwandlung ein Genauigkeitsverlust stattfinden kann."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    int a = 14;\n    int b = 3;\n    double result;\n\n    // implizite Typumwandlung\n    result = a / b;\n    System.out.println(result);\n\n    // explizite Typumwandlung\n    result = (double) a / b;\n    System.out.println(result);\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Die Wertigkeit von Datentypen entscheidet dar\xfcber, welche Typumwandlungen\nm\xf6glich sind."}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart\n    byte(byte) -.-> short(short)\n    short -.-> int(int)\n    char(char) -.-> int\n    int -.-> long(long)\n    long -.-> float(float)\n    float -.-> double(double)"}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsxs)(n.p,{children:["F\xfcr den Datentyp ",(0,i.jsx)(n.code,{children:"boolean"})," ist keine Typumwandlung m\xf6glich."]})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(67294);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);