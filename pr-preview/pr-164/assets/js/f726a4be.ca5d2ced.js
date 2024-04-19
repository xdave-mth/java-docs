"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[82],{67813:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=i(74848),t=i(28453);const a={title:"Objektorientierte Programmierung",description:"",sidebar_position:130,tags:["oo"]},s=void 0,d={id:"documentation/oo",title:"Objektorientierte Programmierung",description:"",source:"@site/docs/documentation/oo.md",sourceDirName:"documentation",slug:"/documentation/oo",permalink:"/java-docs/pr-preview/pr-164/documentation/oo",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/oo.md",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-164/tags/oo"}],version:"current",sidebarPosition:130,frontMatter:{title:"Objektorientierte Programmierung",description:"",sidebar_position:130,tags:["oo"]},sidebar:"documentationSidebar",previous:{title:"Feldbasierte Listen (ArrayLists)",permalink:"/java-docs/pr-preview/pr-164/documentation/array-lists"},next:{title:"Die Java API",permalink:"/java-docs/pr-preview/pr-164/documentation/java-api"}},c={},l=[{value:"Datenkapselung",id:"datenkapselung",level:2},{value:"Sichtbarkeit von Klassen, Attributen und Methoden",id:"sichtbarkeit-von-klassen-attributen-und-methoden",level:2},{value:"Definition von Klassen",id:"definition-von-klassen",level:2},{value:"Definition von Attributen",id:"definition-von-attributen",level:2},{value:"Definition und Implementierung von Methoden",id:"definition-und-implementierung-von-methoden",level:2},{value:"Deklaration von Referenzvariablen",id:"deklaration-von-referenzvariablen",level:2},{value:"Erzeugen von Objekten",id:"erzeugen-von-objekten",level:2},{value:"Zugriff auf Attribute und Aufruf von Methoden",id:"zugriff-auf-attribute-und-aufruf-von-methoden",level:2},{value:"\xdcberladene Methoden",id:"\xfcberladene-methoden",level:2},{value:"Konstruktoren",id:"konstruktoren",level:2},{value:"Statische Attribute und Methoden",id:"statische-attribute-und-methoden",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Die reale Welt besteht aus Objekten mit individuellen Eigenschaften und\nindividuellem Verhalten. F\xfcr ein einfacheres Verst\xe4ndnis werden Objekte\nkategorisiert, also zu sinnhaften Einheiten verbunden. In der objektorientierten\nProgrammierung werden Beobachtungen aus der realen Welt zum Konzept der\nObjektorientierung zusammengefasst:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Eine Kategorie von \xe4hnlichen Objekten bezeichnet man als ",(0,r.jsx)(n.em,{children:"Klasse"})]}),"\n",(0,r.jsxs)(n.li,{children:["Konkrete Auspr\xe4gungen bzw. Instanzen einer Klasse werden wiederum als\n",(0,r.jsx)(n.em,{children:"Objekte"})," bezeichnet"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Eigenschaften von Objekten werden als ",(0,r.jsx)(n.em,{children:"Attribute"})," das Verhalten als\n",(0,r.jsx)(n.em,{children:"Methoden"})," bezeichnet"]}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n    rectangle1(Bezeichner: rectangle1\\nDatentyp: Shape\\nWert: 13fee20c) --\x3e o1[hashCode: 13fee20c\\nareaInCm2: 12]\n    rectangle2(Bezeichner: rectangle2\\nDatentyp: Shape\\nWert: 88d45a01) --\x3e o2[hashCode: 88d45a01\\nareaInCm2: 12]\n    trapezoid(Bezeichner: trapezoid\\nDatentyp: Shape\\nWert: 915a002f) --\x3e o3[/hashCode: 915a002f\\nareaInCm2: 12\\]"}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsx)(n.p,{children:"Jedes Objekt ist eindeutig identifizierbar."})}),"\n",(0,r.jsx)(n.h2,{id:"datenkapselung",children:"Datenkapselung"}),"\n",(0,r.jsx)(n.p,{children:"Ein wesentlicher Grundsatz der Objektorientierung ist, dass Attribute durch\nMethoden gekapselt werden. Datenkapselung bedeutet, dass auf Attribute nicht\ndirekt zugegriffen werden kann, sondern nur indirekt \xfcber Methoden. Typische\nMethoden zum Lesen und Schreiben von Attributen sind die sogenannten Getter bzw.\nSetter (auch Set- und Get-Methoden bzw. Accessors genannt)."}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n    write[Schreibender Zugriff] -.-> setter1\n    write -.-> setter2\n    getter1 -.-> read[Lesender Zugriff]\n    getter2 -.-> read\n    subgraph Klasse\n        subgraph privater Bereich\n            attribut1((Attribut 1))\n            attribut2((Attribut 2))\n        end\n        setter1(Setter f\xfcr Attribut 1) -.-> attribut1\n        attribut1 -.-> getter1(Getter f\xfcr Attribut 1)\n        setter2(Setter f\xfcr Attribut 2) -.-> attribut2\n        attribut2 -.-> getter2(Getter f\xfcr Attribut 2)\n    end"}),"\n",(0,r.jsx)(n.h2,{id:"sichtbarkeit-von-klassen-attributen-und-methoden",children:"Sichtbarkeit von Klassen, Attributen und Methoden"}),"\n",(0,r.jsx)(n.p,{children:"Um die Sichtbarkeit von Klassen, Attributen und Methoden zu definieren,\nexistieren verschiedene Zugriffsrechte. Die Sichtbarkeit bestimmt, von welchem\nOrt aus Klassen, Attribute und Methoden verwendet bzw. aufgerufen werden d\xfcrfen."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Zugriffsrecht"}),(0,r.jsx)(n.th,{children:"Zugriff aus gleicher Klasse"}),(0,r.jsx)(n.th,{children:"Zugriff von einer Klasse aus dem gleichen Paket"}),(0,r.jsx)(n.th,{children:"Zugriff von einer Unterklasse"}),(0,r.jsx)(n.th,{children:"Zugriff von einer beliebigen Klasse"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"public"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"ja"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"protected"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"nein"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"package"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"nein"}),(0,r.jsx)(n.td,{children:"nein"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"private"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"nein"}),(0,r.jsx)(n.td,{children:"nein"}),(0,r.jsx)(n.td,{children:"nein"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"definition-von-klassen",children:"Definition von Klassen"}),"\n",(0,r.jsxs)(n.p,{children:["Klassen werden in Java mit dem Schl\xfcsselwort ",(0,r.jsx)(n.code,{children:"class"})," definiert. Die Angabe des\nZugriffsrechts legt die Sichtbarkeit der Klasse fest."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java" showLineNumbers',children:"public class Computer {\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="CPU.java" showLineNumbers',children:"public class CPU {\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="GraphicCard.java" showLineNumbers',children:"public class GraphicCard {\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"definition-von-attributen",children:"Definition von Attributen"}),"\n",(0,r.jsxs)(n.p,{children:["Die Attribute einer Klasse sind Datenobjekte und werdern daher analog zu\nVariablen und Konstanten definiert. Das Schl\xfcsselwort ",(0,r.jsx)(n.code,{children:"final"})," erlaubt die\nDefinition von unver\xe4nderlichen Attributen, also Attributen, deren Wert nicht\nge\xe4ndert werden kann. Die Initialisierung dieser unver\xe4nderlichen Attribute\nerfolgt durch ",(0,r.jsx)(n.a,{href:"oo#konstruktoren",children:"Konstruktoren"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java" showLineNumbers',children:"public class Computer {\n\n  private CPU cpu;\n  private int mainMemoryInGB;\n  private GraphicCard graphicCard;\n\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="CPU.java" showLineNumbers',children:"public class CPU {\n\n  private final double powerInGHz;\n  private final int numberOfCores;\n\n  public CPU(double powerInGHz, int numberOfCores) {\n    this.powerInGHz = powerInGHz;\n    this.numberOfCores = numberOfCores;\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="GraphicCard.java" showLineNumbers',children:"public class GraphicCard {\n\n  private final String description;\n  private final String graphicsChip;\n\n  public GraphicCard(String description, String graphicsChip) {\n    this.description = description;\n    this.graphicsChip = graphicsChip;\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Die Selbstreferenz ",(0,r.jsx)(n.code,{children:"this"})," verweist innerhalb einer Klasse auf das eigene Objekt\n(siehe auch\n",(0,r.jsx)(n.a,{href:"oo#deklaration-von-referenzvariablen",children:"Deklaration von Referenzvariablen"}),")."]})}),"\n",(0,r.jsx)(n.h2,{id:"definition-und-implementierung-von-methoden",children:"Definition und Implementierung von Methoden"}),"\n",(0,r.jsxs)(n.p,{children:["Methoden sind in der Programmierung eine Verallgemeinerung von mathematischen\nFunktionen. Eine Methode besteht aus einem Methodennamen, einer Liste von\nEingabeparameter (optional), einem R\xfcckgabewert (optional) sowie dem\nMethodenrumpf. Die Kombination aus Methodenname und den Datentypen der\nParameterliste bezeichent man als ",(0,r.jsx)(n.em,{children:"Signatur einer Methode"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Methoden k\xf6nnen entweder genau einen R\xfcckgabewert oder keinen R\xfcckgabewert\nbesitzen. Methoden mit genau einem R\xfcckgabewert m\xfcssen vor dem Methodennamen den\nDatentyp des R\xfcckgabewerts angeben und am Ende des Methodenrumpfes immer die\nAnweisung ",(0,r.jsx)(n.code,{children:"return"})," besitzen, Methoden ohne R\xfcckgabewert m\xfcssen dies mit dem\nSchl\xfcsselwort ",(0,r.jsx)(n.code,{children:"void"})," kenntlich machen."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java" showLineNumbers',children:"public class Computer {\n\n  private CPU cpu;\n  private int mainMemoryInGB;\n  private GraphicCard graphicCard;\n\n  public void setCPU(){\n    this.cpu = cpu;\n  }\n\n  public CPU getCPU(){\n    return cpu;\n  }\n\n  public void setMainMemoryInGB(int mainMemoryInGB) {\n    this.mainMemoryInGB = mainMemoryInGB;\n  }\n\n  public int getMainMemoryInGB() {\n    return= mainMemoryInGB;\n  }\n\n  public void setGraphicCard(GraphicCard graphicCard) {\n    this.graphicCard = graphicCard;\n  }\n\n  public GraphicCard getGraphicCard() {\n    return graphicCard;\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"deklaration-von-referenzvariablen",children:"Deklaration von Referenzvariablen"}),"\n",(0,r.jsxs)(n.p,{children:["Technisch gesehen handelt es sich bei einer Klasse um einen komplexen Datentyp.\nAnalog zu den primitiven Datentypen k\xf6nnen auch f\xfcr Klassen Variablen \u2013\nsogenannte ",(0,r.jsx)(n.em,{children:"Referenzvariablen"})," \u2013 definiert werden."]}),"\n",(0,r.jsxs)(n.p,{children:['Im Gegensatz zu "normalen" Variablen werden bei Referenzvariablen nicht die\neigentlichen Werte in den Variablen gespeichert, sondern die Speicheradressen\nder erzeugten Objekte. Die Selbstreferenz ',(0,r.jsx)(n.code,{children:"this"})," verweist innerhalb einer Klasse\nauf das eigene Objekt."]}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n    rectangle1(Bezeichner: rectangle1\\nDatentyp: Shape\\nWert: 13fee20c) --\x3e o1[hashCode: 13fee20c\\nareaInCm2: 12]\n    rectangle2(Bezeichner: rectangle2\\nDatentyp: Shape\\nWert: 13fee20c) --\x3e o1[hashCode: 13fee20c\\nareaInCm2: 12]\n    trapezoid(Bezeichner: trapezoid\\nDatentyp: Shape\\nWert: 915a002f) --\x3e o3[/hashCode: 915a002f\\nareaInCm2: 10\\]"}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Der Standarwert von Referenzvariablen ist ",(0,r.jsx)(n.code,{children:"null"})," (auch Nullreferenz genannt)."]})}),"\n",(0,r.jsx)(n.h2,{id:"erzeugen-von-objekten",children:"Erzeugen von Objekten"}),"\n",(0,r.jsxs)(n.p,{children:["Beim Erzeugen eines Objekts mit Hilfe des Operators ",(0,r.jsx)(n.code,{children:"new"})," wird der bei der\nDeklaration reservierte Speicherplatz durch das Objekt belegt."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    CPU myCPU = new CPU(3.5, 8);\n    GraphicCard myGraphicCard = new GraphicCard("Gigabyte RTX 4090 Gaming", "GeForce RTX 4090");\n    Computer myComputer = new Computer();\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,r.jsxs)(n.p,{children:["Nach dem new-Operator muss immer ein ",(0,r.jsx)(n.a,{href:"oo#konstruktoren",children:"Konstruktor"})," der Klasse\nstehen."]})}),"\n",(0,r.jsx)(n.h2,{id:"zugriff-auf-attribute-und-aufruf-von-methoden",children:"Zugriff auf Attribute und Aufruf von Methoden"}),"\n",(0,r.jsx)(n.p,{children:"Erlauben die Zugriffsrechte den Zugriff auf ein Attribut, kann \xfcber die\ndeklarierte Referenzvariable und einem nachgestellten Punkt auf das Attribut\nzugegriffen werden. Auch sichtbare Methoden werden \xfcber diese Syntax aufgerufen."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    CPU myCPU = new CPU(3.5, 8);\n    GraphicCard myGraphicCard = new GraphicCard("Gigabyte RTX 4090 Gaming", "GeForce RTX 4090");\n    Computer myComputer = new Computer();\n    myComputer.setCPU(myCPU);\n    myComputer.setMainMemoryInGB(32);\n    myComputer.setGraphicCard(myGraphicCard);\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,r.jsxs)(n.p,{children:["Beim Aufruf einer Methode m\xfcssen alle Parameter in der richtigen Reihenfolge\nversorgt werden. Parameter, die diesem Prinzip folgen, bezeichnet man als\n",(0,r.jsx)(n.em,{children:"Positionsparameter"})]})}),"\n",(0,r.jsx)(n.h2,{id:"\xfcberladene-methoden",children:"\xdcberladene Methoden"}),"\n",(0,r.jsx)(n.p,{children:"Gleichnamige Methoden mit unterschiedlichen Parameterlisten einer Klasse werden\nals \xfcberladene Methoden bezeichnet. Man spricht in diesem Zusammenhang auch von\nstatischer Polymorphie, da der Aufruf gleichnamiger Methoden unterschiedliche\nErgebnisse liefern kann."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java" showLineNumbers',children:"public class Computer {\n\n  private CPU cpu;\n  private int mainMemoryInGB;\n  private GraphicCard graphicCard;\n\n  public void setCPU(){\n    this.cpu = cpu;\n  }\n\n  public void getCPU(){\n    return cpu;\n  }\n\n  public void setMainMemoryInGB(int mainMemoryInGB) {\n    this.mainMemoryInGB = mainMemoryInGB;\n  }\n\n  public int getMainMemoryInGB() {\n    return= mainMemoryInGB;\n  }\n\n  public void setGraphicCard(GraphicCard graphicCard) {\n    this.graphicCard = graphicCard;\n  }\n\n  public void setGraphicCard(String description, String graphicsChip) {\n    graphicCard = new GraphicCard(description, graphicsChip);\n  }\n\n  public GraphicCard getGraphicCard() {\n    return graphicCard;\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    GraphicCard myGraphicCard = new GraphicCard("Gigabyte RTX 4090 Gaming", "GeForce RTX 4090");\n    Computer myComputer1 = new Computer();\n    myComputer1.setGraphicCard(myGraphicCard);\n\n    Computer myComputer2 = new Computer();\n    myComputer2.setGraphicCard("ASUS ATI Radeon RX 6800", "ATI Radeon RX 6800");\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,r.jsx)(n.p,{children:"\xdcberladene Methoden k\xf6nnen keine unterschiedlichen R\xfcckgabewerte besitzen."})}),"\n",(0,r.jsx)(n.h2,{id:"konstruktoren",children:"Konstruktoren"}),"\n",(0,r.jsx)(n.p,{children:"Bei Konstruktoren handelt es sich um spezielle Methoden, die zur Initialisierung\neines Objekts verwendet werden. Konstruktoren hei\xdfen wie ihre Klasse und k\xf6nnen\neine beliebige Anzahl an Parametern haben. Allerdings kann f\xfcr Konstruktoren\nkein R\xfcckgabewert festgelegt werden, da diese implizit die Referenz auf das\nObjekt zur\xfcckgeben."}),"\n",(0,r.jsx)(n.p,{children:"Im Gegensatz zu z.B. C++ existieren in Java keine Destruktoren, die nicht mehr\nben\xf6tigte Objekte aus dem Speicher entfernen. Stattdessen l\xe4uft im Hintergrund\nder sogenannte Garbage Collector, der nicht mehr ben\xf6tigte Objekte (also\nObjekte, die nicht mehr \xfcber eine Referenzvariable angesprochen werden k\xf6nnen)\nl\xf6scht."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java" showLineNumbers',children:"public class Computer {\n\n  private CPU cpu;\n  private int mainMemoryInGB;\n  private GraphicCard graphicCard;\n\n  public Computer() {\n  }\n\n  public Computer(CPU cpu, int mainMemoryInGB) {\n    this.cpu = cpu;\n    this.mainMemoryInGB = mainMermoryInGB;\n  }\n\n  public Computer(CPU cpu, int mainMemoryInGB, GraphicCard graphicCard) {\n    this(cpu, mainMermoryInGB);\n    this.graphicCard = graphicCard;\n  }\n\n  public void setCPU(){\n    this.cpu = cpu;\n  }\n\n  public void getCPU(){\n    return cpu;\n  }\n\n  public void setMainMemoryInGB(int mainMemoryInGB) {\n    this.mainMemoryInGB = mainMemoryInGB;\n  }\n\n  public int getMainMemoryInGB() {\n    return= mainMemoryInGB;\n  }\n\n  public void setGraphicCard(GraphicCard graphicCard) {\n    this.graphicCard = graphicCard;\n  }\n\n  public void setGraphicCard(String description, String graphicsChip) {\n    graphicCard = new GraphicCard(description, graphicsChip);\n  }\n\n  public GraphicCard getGraphicCard() {\n    return graphicCard;\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    GraphicCard myGraphicCard = new GraphicCard("Gigabyte RTX 4090 Gaming", "GeForce RTX 4090");\n    CPU myCPU = new CPU(3.5, 8);\n    Computer myComputer1 = new Computer(myCPU, 32, myGraphicCard);\n\n    Computer myComputer2 = new Computer();\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Auch Konstruktoren k\xf6nnen \xfcberladen werden, dass hei\xdft eine Klasse kann \xfcber\nmehrere Konstruktoren verf\xfcgen. Der Aufruf eines Konstruktors innerhalb eines\nanderen Konstruktors erfolgt dabei \xfcber die Selbstreferenz ",(0,r.jsx)(n.code,{children:"this"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"statische-attribute-und-methoden",children:"Statische Attribute und Methoden"}),"\n",(0,r.jsx)(n.p,{children:'Neben "normalen" Attributen und Methoden kann eine Klasse auch statische\nAttribute und statische Methoden besitzen. Im Gegensatz zu "normalen" Attributen\nexistieren statische Attribute nur einmal pro Klasse und besitzen daher f\xfcr alle\nObjekte dieser Klasse dieselben Werte. Innerhalb einer statischen Methode kann\nnur auf die statischen Attribute der Klasse zugegriffen werden.'}),"\n",(0,r.jsxs)(n.p,{children:["Bei der Deklaration von statischen Attributen und statischen Methoden kommt das\nSchl\xfcsselwort ",(0,r.jsx)(n.code,{children:"static"})," zum Einsatz. F\xfcr den Zugriff auf ein statisches Attribut\nbzw. den Aufruf einer statischen Methode wird keine Instanziierung ben\xf6tigt,\nd.h. der der Zugriff bzw. Aufruf erfolgt \xfcber den Klassennamen."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="CPU.java" showLineNumbers',children:"public class CPU {\n\n  private final double powerInGHz;\n  private final int numberOfCores;\n\n  private static int numberOfCPUs;\n\n  public CPU(double powerInGHz, int numberOfCores) {\n    this.powerInGHz = powerInGHz;\n    this.numberOfCores = numberOfCores;\n    numberOfCPUs++;\n  }\n\n  public static int getNumberOfCPUs() {\n    return numberOfCPUs;\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    System.out.println(CPU.getNumberOfCPUs());\n    CPU myCPU = new CPU(3.5, 8);\n    System.out.println(CPU.getNumberOfCPUs());\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsx)(n.p,{children:'"Normale" Attribute und Methoden werden auch als Instanzattribute bzw.\nInstanzmethoden bezeichnet, statische Attribute und Methoden auch\nKlassenattribute bzw. Klassenmethoden.'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var r=i(96540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);