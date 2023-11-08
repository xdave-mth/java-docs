"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8210],{417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=t(85893),r=t(11151);const a={title:"Objektorientierte Programmierung",description:"",sidebar_position:130,tags:["oo"]},s=void 0,d={id:"documentation/oo",title:"Objektorientierte Programmierung",description:"",source:"@site/docs/documentation/oo.md",sourceDirName:"documentation",slug:"/documentation/oo",permalink:"/java-docs/pr-preview/pr-75/documentation/oo",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/oo.md",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-75/tags/oo"}],version:"current",sidebarPosition:130,frontMatter:{title:"Objektorientierte Programmierung",description:"",sidebar_position:130,tags:["oo"]},sidebar:"documentationSidebar",previous:{title:"Feldbasierte Listen (ArrayLists)",permalink:"/java-docs/pr-preview/pr-75/documentation/array-lists"},next:{title:"Die Java API",permalink:"/java-docs/pr-preview/pr-75/documentation/java-api/"}},o={},l=[{value:"Datenkapselung",id:"datenkapselung",level:2},{value:"Sichtbarkeit von Attributen und Methoden",id:"sichtbarkeit-von-attributen-und-methoden",level:2},{value:"Definition von Klassen",id:"definition-von-klassen",level:2},{value:"Definition von Attributen",id:"definition-von-attributen",level:2},{value:"Definition und Implementierung von Methoden",id:"definition-und-implementierung-von-methoden",level:2},{value:"Deklaration von Referenzvariablen",id:"deklaration-von-referenzvariablen",level:2},{value:"Erzeugen von Objekten",id:"erzeugen-von-objekten",level:2},{value:"Zugriff auf Attribute und Aufruf von Methoden",id:"zugriff-auf-attribute-und-aufruf-von-methoden",level:2},{value:"\xdcberladene Methoden",id:"\xfcberladene-methoden",level:2},{value:"Konstruktoren",id:"konstruktoren",level:2},{value:"Statische Attribute und Methoden",id:"statische-attribute-und-methoden",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Die reale Welt besteht aus Objekten mit individuellen Eigenschaften und\nindividuellem Verhalten. F\xfcr ein einfacheres Verst\xe4ndnis werden Objekte\nkategorisiert, also zu sinnhaften Einheiten verbunden. In der objektorientierten\nProgrammierung werden Beobachtungen aus der realen Welt zum Konzept der\nObjektorientierung zusammengefasst:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Eine Kategorie von \xe4hnlichen Objekten bezeichnet man als ",(0,i.jsx)(n.em,{children:"Klasse"})]}),"\n",(0,i.jsxs)(n.li,{children:["Konkrete Auspr\xe4gungen bzw. Instanzen einer Klasse werden wiederum als\n",(0,i.jsx)(n.em,{children:"Objekte"})," bezeichnet"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Eigenschaften von Objekten werden als ",(0,i.jsx)(n.em,{children:"Attribute"})," das Verhalten als\n",(0,i.jsx)(n.em,{children:"Methoden"})," bezeichnet"]}),"\n"]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart LR\n    rectangle1(Bezeichner: rectangle1\\nDatentyp: Shape\\nWert: 13fee20c) --\x3e o1[hashCode: 13fee20c\\nareaInCM2: 12]\n    rectangle2(Bezeichner: rectangle2\\nDatentyp: Shape\\nWert: 88d45a01) --\x3e o2[hashCode: 88d45a01\\nareaInCM2: 12]\n    trapezoid(Bezeichner: trapezoid\\nDatentyp: Shape\\nWert: 915a002f) --\x3e o3[/hashCode: 915a002f\\nareaInCM2: 12\\]"}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsx)(n.p,{children:"Jedes Objekt ist eindeutig identifizierbar."})}),"\n",(0,i.jsx)(n.h2,{id:"datenkapselung",children:"Datenkapselung"}),"\n",(0,i.jsx)(n.p,{children:"Ein wesentlicher Grundsatz der Objektorientierung ist, dass Attribute durch\nMethoden gekapselt werden. Datenkapselung bedeutet, dass Attribute nicht direkt\nge\xe4ndert werden k\xf6nnen, sondern nur durch den indirekten Zugriff \xfcber Methoden.\nTypische Methoden zum Lesen und Schreiben von Attributen sind die sogenannten\nGetter bzw. Setter."}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart LR\n    write[Schreibender Zugriff] -.-> setter1\n    write -.-> setter2\n    getter1 -.-> read[Lesender Zugriff]\n    getter2 -.-> read\n    subgraph Klasse\n        subgraph privater Bereich\n            attribut1((Attribut 1))\n            attribut2((Attribut 2))\n        end\n        setter1(Setter f\xfcr Attribut 1) -.-> attribut1\n        attribut1 -.-> getter1(Getter f\xfcr Attribut 1)\n        setter2(Setter f\xfcr Attribut 2) -.-> attribut2\n        attribut2 -.-> getter2(Getter f\xfcr Attribut 2)\n    end"}),"\n",(0,i.jsx)(n.h2,{id:"sichtbarkeit-von-attributen-und-methoden",children:"Sichtbarkeit von Attributen und Methoden"}),"\n",(0,i.jsx)(n.p,{children:"Um die Sichtbarkeit von Attributen und Methoden zu definieren, existieren\nverschiedene Zugriffsrechte. Die Sichtbarkeit bestimmt, von welchem Ort aus\nAttribute und Methoden verwendet bzw. aufgerufen werden d\xfcrfen."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Zugriffsrecht"}),(0,i.jsx)(n.th,{children:"Zugriff aus gleicher Klasse"}),(0,i.jsx)(n.th,{children:"Zugriff von einer Klasse aus dem gleichen Paket"}),(0,i.jsx)(n.th,{children:"Zugriff von einer Unterklasse"}),(0,i.jsx)(n.th,{children:"Zugriff von einer beliebigen Klasse"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"public"}),(0,i.jsx)(n.td,{children:"ja"}),(0,i.jsx)(n.td,{children:"ja"}),(0,i.jsx)(n.td,{children:"ja"}),(0,i.jsx)(n.td,{children:"ja"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"protected"}),(0,i.jsx)(n.td,{children:"ja"}),(0,i.jsx)(n.td,{children:"ja"}),(0,i.jsx)(n.td,{children:"ja"}),(0,i.jsx)(n.td,{children:"nein"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"package"}),(0,i.jsx)(n.td,{children:"ja"}),(0,i.jsx)(n.td,{children:"ja"}),(0,i.jsx)(n.td,{children:"nein"}),(0,i.jsx)(n.td,{children:"nein"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"private"}),(0,i.jsx)(n.td,{children:"ja"}),(0,i.jsx)(n.td,{children:"nein"}),(0,i.jsx)(n.td,{children:"nein"}),(0,i.jsx)(n.td,{children:"nein"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"definition-von-klassen",children:"Definition von Klassen"}),"\n",(0,i.jsxs)(n.p,{children:["Klassen werden in Java mit dem Schl\xfcsselwort ",(0,i.jsx)(n.code,{children:"class"})," definiert. Die Angabe des\nZugriffsrechts legt die Sichtbarkeit der Klasse fest."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public class Foo {\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"definition-von-attributen",children:"Definition von Attributen"}),"\n",(0,i.jsx)(n.p,{children:"Die Attribute einer Klasse sind Datenobjekte und werdern daher analog zu\nVariablen und Konstanten definiert. Die Angabe des Zugriffsrechts legt die\nSichtbarkeit des Attributs fest."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public class Foo {\n\n  private String bar;\n  public int baz;\n\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"definition-und-implementierung-von-methoden",children:"Definition und Implementierung von Methoden"}),"\n",(0,i.jsx)(n.p,{children:"Methoden sind in der Programmierung eine Verallgemeinerung von mathematischen\nFunktionen. Eine Methode besteht aus einem Methodennamen, einer Liste von\nEingabeparameter (optional), einem R\xfcckgabewert (optional) sowie dem\nMethodenrumpf."}),"\n",(0,i.jsxs)(n.p,{children:["Methoden k\xf6nnen entweder genau einen R\xfcckgabewert oder keinen R\xfcckgabewert\nbesitzen. Methoden mit genau einem R\xfcckgabewert m\xfcssen vor dem Methodennamen den\nDatentyp des R\xfcckgabewerts angeben und am Ende des Methodenrumpfes immer die\nAnweisung ",(0,i.jsx)(n.code,{children:"return"})," besitzen, Methoden ohne R\xfcckgabewert m\xfcssen dies mit dem\nSchl\xfcsselwort ",(0,i.jsx)(n.code,{children:"void"})," kenntlich machen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public class Foo {\n\n  private String bar;\n  public int baz;\n\n  public void setBar(String bar) {\n    this.bar = bar;\n  }\n\n  public String getBar() {\n    return bar;\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsx)(n.p,{children:"Die Signatur einer Methode setzt sich aus Methodenname und den Datentypen der\nParameterliste zusammen."})}),"\n",(0,i.jsx)(n.h2,{id:"deklaration-von-referenzvariablen",children:"Deklaration von Referenzvariablen"}),"\n",(0,i.jsxs)(n.p,{children:["Technisch gesehen handelt es sich bei einer Klasse um einen komplexen Datentyp.\nAnalog zu den primitiven Datentypen k\xf6nnen auch f\xfcr Klassen Variablen \u2013\nsogenannte ",(0,i.jsx)(n.em,{children:"Referenzvariablen"})," \u2013 definiert werden."]}),"\n",(0,i.jsxs)(n.p,{children:['Im Gegensatz zu "normalen" Variablen werden bei Referenzvariablen nicht die\neigentlichen Werte in den Variablen gespeichert, sondern die Speicheradressen\nder erzeugten Objekte. Die Selbstreferenz ',(0,i.jsx)(n.code,{children:"this"})," verweist innerhalb einer Klasse\nauf das eigene Objekt."]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart LR\n    rectangle1(Bezeichner: rectangle1\\nDatentyp: Shape\\nWert: 13fee20c) --\x3e o1[hashCode: 13fee20c\\nareaInCM2: 12]\n    rectangle2(Bezeichner: rectangle2\\nDatentyp: Shape\\nWert: 13fee20c) --\x3e o1[hashCode: 13fee20c\\nareaInCM2: 12]\n    trapezoid(Bezeichner: trapezoid\\nDatentyp: Shape\\nWert: 915a002f) --\x3e o3[/hashCode: 915a002f\\nareaInCM2: 10\\]"}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsxs)(n.p,{children:["Der Standarwert von Referenzvariablen ist ",(0,i.jsx)(n.code,{children:"null"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"erzeugen-von-objekten",children:"Erzeugen von Objekten"}),"\n",(0,i.jsxs)(n.p,{children:["Beim Erzeugen eines Objekts mit Hilfe des Operators ",(0,i.jsx)(n.code,{children:"new"})," wird der bei der\nDeklaration reservierte Speicherplatz durch das Objekt belegt."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public class Foo {\n\n  private String bar;\n  public int baz;\n\n  public void setBar(String bar) {\n    this.bar = bar;\n  }\n\n  public String getBar() {\n    return bar;\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Foo foo = new Foo();\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,i.jsx)(n.p,{children:"Nach dem new-Operator muss immer ein Konstruktor der Klasse stehen."})}),"\n",(0,i.jsx)(n.h2,{id:"zugriff-auf-attribute-und-aufruf-von-methoden",children:"Zugriff auf Attribute und Aufruf von Methoden"}),"\n",(0,i.jsx)(n.p,{children:"Erlauben die Zugriffsrechte den Zugriff auf ein Attribut, kann \xfcber die\ndeklarierte Referenzvariable und einem nachgestellten Punkt auf das Attribut\nzugegriffen werden. Auch sichtbare Methoden werden \xfcber diese Syntax aufgerufen."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public class Foo {\n\n  private String bar;\n  public int baz;\n\n  public void setBar(String bar) {\n    this.bar = bar;\n  }\n\n  public String getBar() {\n    return bar;\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    Foo foo = new Foo();\n    foo.setBar("Winter is Coming");\n    foo.baz = 42;\n  }\n\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,i.jsxs)(n.p,{children:["Beim Aufruf einer Methode m\xfcssen alle Parameter in der richtigen Reihenfolge\nversorgt werden. Parameter, die diesem Prinzip folgen, bezeichnet man als\n",(0,i.jsx)(n.em,{children:"Positionsparameter"})]})}),"\n",(0,i.jsx)(n.h2,{id:"\xfcberladene-methoden",children:"\xdcberladene Methoden"}),"\n",(0,i.jsx)(n.p,{children:"Gleichnamige Methoden mit unterschiedlichen Parameterlisten einer Klasse werden\nals \xfcberladene Methoden bezeichnet. Man spricht in diesem Zusammenhang auch von\nstatischer Polymorphie, da der Aufruf gleichnamiger Methoden unterschiedliche\nErgebnisse liefern kann."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:'public class Foo {\n\n  private String bar;\n  public int baz;\n\n  public void setBar(String bar) {\n    this.bar = bar;\n  }\n\n  public void setBar(int bar) {\n    this.bar = bar + "";\n  }\n\n  public String getBar() {\n    return bar;\n  }\n\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    Foo foo = new Foo();\n    foo.setBar("Winter is Coming");\n    foo.setBar(42);\n  }\n\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,i.jsx)(n.p,{children:"\xdcberladene Methoden k\xf6nnen keine unterschiedlichen R\xfcckgabewerte besitzen."})}),"\n",(0,i.jsx)(n.h2,{id:"konstruktoren",children:"Konstruktoren"}),"\n",(0,i.jsx)(n.p,{children:"Bei Konstruktoren handelt es sich um spezielle Methoden, die zur Initialisierung\neines Objekts verwendet werden. Konstruktoren hei\xdfen wie ihre Klasse und k\xf6nnen\neine beliebige Anzahl an Parametern haben. Allerdings kann f\xfcr Konstruktoren\nkein R\xfcckgabewert festgelegt werden, da diese implizit die Referenz auf das\nObjekt zur\xfcckgeben."}),"\n",(0,i.jsx)(n.p,{children:"Im Gegensatz zu z.B. C++ existieren in Java keine Destruktoren, die nicht mehr\nben\xf6tigte Objekte aus dem Speicher entfernen. Stattdessen l\xe4uft im Hintergrund\nder sogenannte Garbage Collector, der nicht mehr ben\xf6tigte Objekte (also\nObjekte, die nicht mehr \xfcber eine Referenzvariable angesprochen werden k\xf6nnen)\nl\xf6scht."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:'public class Foo {\n\n  private String bar;\n  public int baz;\n\n  public Foo(String bar) {\n    this.bar = bar;\n  }\n\n  public Foo(int bar) {\n    this.bar = bar + "";\n  }\n\n  public String getBar() {\n    return bar;\n  }\n\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    Foo foo = new Foo("Winter is Coming");\n    Foo foo2 = new Foo(42);\n  }\n\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsx)(n.p,{children:"Auch Konstruktoren k\xf6nnen \xfcberladen werden."})}),"\n",(0,i.jsx)(n.h2,{id:"statische-attribute-und-methoden",children:"Statische Attribute und Methoden"}),"\n",(0,i.jsx)(n.p,{children:'Neben "normalen" Attributen und Methoden kann eine Klasse auch statische\nAttribute und statische Methoden besitzen. Im Gegensatz zu "normalen" Attributen\nexistieren statische Attribute nur einmal pro Klasse und besitzen daher f\xfcr alle\nObjekte dieser Klasse dieselben Werte. Innerhalb einer statischen Methode kann\nnur auf die statischen Attribute der Klasse zugegriffen werden.'}),"\n",(0,i.jsxs)(n.p,{children:["Bei der Deklaration von statischen Attributen und statischen Methoden kommt das\nSchl\xfcsselwort ",(0,i.jsx)(n.code,{children:"static"})," zum Einsatz. F\xfcr den Zugriff auf ein statisches Attribut\nbzw. den Aufruf einer statischen Methode wird keine Instanziierung ben\xf6tigt,\nd.h. der der Zugriff bzw. Aufruf erfolgt \xfcber den Klassennamen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:'public class Foo {\n\n  private String bar;\n  public int baz;\n\n  private static int foobar;\n\n  public Foo(String bar) {\n    this.bar = bar;\n    foobar++;\n  }\n\n  public Foo(int bar) {\n    this.bar = bar + "";\n  }\n\n  public String getBar() {\n    return bar;\n  }\n\n  public static int getFoobar() {\n    return foobar;\n  }\n\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    Foo foo = new Foo("Winter is Coming");\n    int foobar = Foo.getFoobar();\n    System.out.println(foobar);\n  }\n\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsx)(n.p,{children:'"Normale" Attribute und Methoden werden auch als Instanzattribute bzw.\nInstanzmethoden bezeichnet, statische Attribute und Methoden auch\nKlassenattribute bzw. Klassenmethoden.'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var i=t(67294);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);