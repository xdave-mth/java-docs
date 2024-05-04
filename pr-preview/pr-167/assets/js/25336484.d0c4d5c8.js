"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8080],{82732:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>o});var s=i(74848),r=i(28453);const a={title:2023,description:"",sidebar_position:100,tags:[]},l=void 0,t={id:"additional-material/steffen/java-1/exam-preparation/2023",title:"2023",description:"",source:"@site/docs/additional-material/steffen/java-1/exam-preparation/2023.mdx",sourceDirName:"additional-material/steffen/java-1/exam-preparation",slug:"/additional-material/steffen/java-1/exam-preparation/2023",permalink:"/java-docs/pr-preview/pr-167/additional-material/steffen/java-1/exam-preparation/2023",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/steffen/java-1/exam-preparation/2023.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"2023",description:"",sidebar_position:100,tags:[]},sidebar:"additionalMaterialSidebar",previous:{title:"2024",permalink:"/java-docs/pr-preview/pr-167/additional-material/steffen/java-1/exam-preparation/2024"},next:{title:"Java 2",permalink:"/java-docs/pr-preview/pr-167/additional-material/steffen/java-2/"}},d={},o=[{value:"Aufgabe 1",id:"aufgabe-1",level:2},{value:"Aufgabe 2",id:"aufgabe-2",level:2},{value:"Aufgabe 3",id:"aufgabe-3",level:2},{value:"Hinweise zur Klasse ExamTask02",id:"hinweise-zur-klasse-examtask02",level:3},{value:"Hinweise zur Klasse Present",id:"hinweise-zur-klasse-present",level:3},{value:"Hinweise zur Klasse GiftBag",id:"hinweise-zur-klasse-giftbag",level:3},{value:"Aufgabe 4",id:"aufgabe-4",level:2},{value:"Hinweise zur Klasse Circle",id:"hinweise-zur-klasse-circle",level:3},{value:"Hinweise zur Klasse ShapeReader",id:"hinweise-zur-klasse-shapereader",level:3},{value:"Aufgabe 5",id:"aufgabe-5",level:2},{value:"Hinweise zur Methode split",id:"hinweise-zur-methode-split",level:3},{value:"Hinweise zur Methode main",id:"hinweise-zur-methode-main",level:3},{value:"Aufgabe 6",id:"aufgabe-6",level:2},{value:"Hinweise zur Klasse OverflowException",id:"hinweise-zur-klasse-overflowexception",level:3},{value:"Hinweise zur Klasse Barrel",id:"hinweise-zur-klasse-barrel",level:3},{value:"Hinweise zur Klasse ExamTask06",id:"hinweise-zur-klasse-examtask06",level:3},{value:"Aufgabe 7",id:"aufgabe-7",level:2},{value:"Hinweise zur Klasse EnergySource",id:"hinweise-zur-klasse-energysource",level:3},{value:"Hinweise zur Klasse Phone",id:"hinweise-zur-klasse-phone",level:3},{value:"Hinweise zur Klasse CablePhone",id:"hinweise-zur-klasse-cablephone",level:3},{value:"Hinweise zur Klasse SmartPhone",id:"hinweise-zur-klasse-smartphone",level:3},{value:"Hinweise zur Klasse ExamTask04",id:"hinweise-zur-klasse-examtask04",level:3},{value:"Aufgabe 8",id:"aufgabe-8",level:2},{value:"Hinweise zur Klasse CarVendor",id:"hinweise-zur-klasse-carvendor",level:3},{value:"Hinweise zur Klasse ConstructionYearComparator",id:"hinweise-zur-klasse-constructionyearcomparator",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"aufgabe-1",children:"Aufgabe 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public class ExamTask01 {\n  public static void a() {\n    String s = "Programmierung";\n    char c = s.charAt(s.length() - 3);\n    int x = 0b1010010;\n    double d = 0.9;\n    int y = 2 * (int) d;\n    System.out.println("c: " + c);\n    System.out.println("x: " + x);\n    System.out.println("y: " + y);\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Welche Konsolenausgabe erzeugt die Methode ",(0,s.jsx)(n.strong,{children:"a"})," der Klasse ",(0,s.jsx)(n.strong,{children:"ExamTask01"}),"?"]}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-2",children:"Aufgabe 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public class ExamTask02 {\n  public static void b() {\n    String[] values = {"RO", "ER"};\n    boolean x = true;\n    int i = 3, j = 5, k = 4;\n    int index = ++i % 2 == 0 ? 0 : 1;\n    j -= x || ++k == 5 ? 5 : 0;\n    System.out.println(values[1] + values[index] + "R " + i + "" + j + "" + k);\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Welche Konsolenausgabe erzeugt die Methode ",(0,s.jsx)(n.strong,{children:"b"})," der Klasse ",(0,s.jsx)(n.strong,{children:"ExamTask02"}),"?"]}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-3",children:"Aufgabe 3"}),"\n",(0,s.jsxs)(n.p,{children:["Erstelle die Klassen ",(0,s.jsx)(n.strong,{children:"Present"})," (9 Punkte), ",(0,s.jsx)(n.strong,{children:"GiftBag"})," (7 Punkte) und\n",(0,s.jsx)(n.strong,{children:"ExamTask02"})," (4 Punkte) anhand des abgebildeten Klassendiagramms."]}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n  GiftBag o-- Present\n  Present o-- Person\n\n  class Person {\n    -name String\n    -age int\n    -gender char\n\n    +Person(name: String, age: int, gender: char)\n    +getName() String\n    +getAge() int\n    +getGender() char\n  }\n\n  class Present {\n    -description String &lcub; final &rcub;\n    -price double &lcub; final &rcub;\n    -sender Person &lcub; final &rcub;\n    -recipient Person &lcub; final &rcub;\n\n    +Present(description: String, price: double, sender: Person, recipient: Person)\n    +getDescription() String\n    +getPrice() double\n    +getSender() Person\n    +getRecipient() Person\n    +toString() String\n  }\n\n  class GiftBag {\n    -presents ArrayList~Present~ &lcub; final &rcub;\n\n    +GiftBag()\n    +addPresent(present: Present) void\n    +getMostExpensivePresent() Present\n  }\n\n  class ExamTask03 {\n    +main(args: String[])$ void\n  }\n"}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-examtask02",children:"Hinweise zur Klasse ExamTask02"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Erzeuge einen Geschenkesack (GiftBag) mit zwei unterschiedlichen Geschenken\n(Present) f\xfcr ein und dieselbe Person (Person)."}),"\n",(0,s.jsx)(n.li,{children:"Gib anschlie\xdfend das teuerste Geschenk des Geschenkesacks auf der Konsole aus"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Beispielhafte Konsolenausgabe:"}),"\n",(0,s.jsx)(n.code,{children:"Present[description=PS5, price=499.0, sender=Hans, recipient=Lisa]"})]}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-present",children:"Hinweise zur Klasse Present"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"toString"})," soll alle Attribute in nachfolgender Form\nzur\xfcckgeben.\n",(0,s.jsx)(n.code,{children:"Present [description=[Beschreibung], price=[Preis], sender=[Name des Senders], recipient=[Name des Empf\xe4ngers]]"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-giftbag",children:"Hinweise zur Klasse GiftBag"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"addPresent"})," soll dem Geschenkesack (Giftbag) das eingehende\nGeschenk (Present) hinzuf\xfcgen."]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"getMostExpensivePresent"})," soll das teuerste Geschenk\nzur\xfcckgeben."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-4",children:"Aufgabe 4"}),"\n",(0,s.jsxs)(n.p,{children:["Erstelle die Klassen ",(0,s.jsx)(n.strong,{children:"Circle"})," (6 Punkte) und ",(0,s.jsx)(n.strong,{children:"ShapeReader"})," (14 Punkte)\nanhand des abgebildeten Klassendiagramms."]}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n  Shape --o ShapeReader\n  Circle --|> Shape : extends\n  Rectangle --|> Shape : extends\n\n  class Shape {\n    +getArea() double\n    +getCircumference() double\n  }\n\n  class Circle {\n    -r double &lcub; final &rcub;\n\n    +Circle(r: double)\n    +getR() double\n    +getArea() double\n    +getCircumference() double\n    +toString() String\n  }\n\n  class Rectangle {\n    -a double &lcub; final &rcub;\n    -b double &lcub; final &rcub;\n\n    +Rectangle(a: double, b: double)\n    +getA() double\n    +getB() double\n    +getArea() double\n    +getCircumference() double\n    +toString() String\n  }\n\n  class ShapeReader {\n    -shapes ArrayList~Shape~ &lcub; final &rcub;\n\n    +ShapeReader(elements: String[])\n    +getCircles() ArrayList~Circle~\n    +getShapes() ArrayList~Shape~\n    +getShapes(minArea: double) ArrayList~Shape~\n  }"}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-circle",children:"Hinweise zur Klasse Circle"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"getArea"})," soll den Fl\xe4cheninhalt eines Kreises (\u03c0r\xb2) zur\xfcckgeben"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"getCircumference"})," soll den Umfang eines Kreises (2\u03c0r)\nzur\xfcckgeben"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"toString"})," soll alle Attribute in nachfolgender Form\nzur\xfcckgeben. ",(0,s.jsx)(n.code,{children:"Circle [r=[Wert von r]]"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-shapereader",children:"Hinweise zur Klasse ShapeReader"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Der Konstruktor soll f\xfcr jedes Element des eingehenden Arrays ein Objekt der\nKlasse Circle oder Rectangle erzeugen und der Formenliste (shapes) hinzugef\xfcgt\nwerden."}),"\n",(0,s.jsx)(n.p,{children:"Die Elemente des eingehenden Arrays haben folgende Struktur:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Circle;2\nRectangle;1;4\nCircle;1\nCircle;6\nRectangle;2;2\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"getCircles"})," soll alle Kreise (Circle) der Formenliste (shapes)\nals Liste zur\xfcckgeben."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"getShape"})," soll den spezifischen Konstruktor ",(0,s.jsx)(n.strong,{children:"getShape(minArea:\ndouble)"})," aufrufen und alle Formen (Shape) zur\xfcckgeben."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"getShape(minArea: double)"})," soll alle Formen mit einem\nFl\xe4cheninhalt der gr\xf6\xdfer oder gleich dem eingehenden Fl\xe4cheninhalt (minArea)\nist als Liste zur\xfcckgeben."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-5",children:"Aufgabe 5"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n  class ExamTask {\n    +main(args: String[])$ void\n    +split(numbers: int[], index: int)$ void\n  }"}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-methode-split",children:"Hinweise zur Methode split"}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"split"})," soll ein Array vom Typ int so verarbeiten, dass ein neues\nArray erstellt wird, was alle Elemente des eingehenden Arrays bis zum\nangegebenen Index enth\xe4lt. Das neu erstellte Array soll anschlie\xdfend\nzur\xfcckgegeben werden."]}),"\n",(0,s.jsx)(n.p,{children:"Verwende keine ArrayList!"}),"\n",(0,s.jsx)(n.p,{children:"Bsp.: Der Parameter numbers enth\xe4lt die Elemente 10, 8, 3, 22 & 1 der Parameter\nindex ist gleich 2. Zur\xfcckgegeben werden soll ein neues Array, das die Elemente\n10, 8 & 3 enth\xe4lt."}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-methode-main",children:"Hinweise zur Methode main"}),"\n",(0,s.jsx)(n.p,{children:"In der Methode main soll ein Arrays erstellt werden, dass die Ganzzahlen 10, 8,\n3, 22 & 1 enth\xe4lt. Erstelle mithilfe der Methode split ein neues Array, dass die\nersten drei Elemente des ersten Arrays enthalten soll. Gib mithilfe einer\nFor-Schleife alle Elemente des neu erstellten Arrays aus."}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-6",children:"Aufgabe 6"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n  direction LR\n\n  Barrel -- OverflowException\n  Barrel -- ExamTask06\n  OverflowException --|> Exception : extends\n\n  class Barrel {\n    -capacity int\n    -fluidLevel int\n    +Barrel(capacity: int)\n    +addFluid(value: int) void\n  }\n\n  class OverflowException {\n    <<Exception>>\n    -higherThanCapacity int &lcub; final &rcub;\n    +OverflowException(higherThanCapacity: int)\n    +getHigherThanCapacity() int\n  }\n\n  class ExamTask06 {\n    +main(args: String[])$ void\n  }\n\n  class Exception {\n\n  }"}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-overflowexception",children:"Hinweise zur Klasse OverflowException"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren."}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"getHigherThanCapacity"})," soll die zu viel hinzugef\xfcgte\nFl\xfcssigkeit zur\xfcckgeben."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-barrel",children:"Hinweise zur Klasse Barrel"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren. Das Fass ist Anfangs immer\nleer."}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"addFluid"})," soll die OverflowException ausl\xf6sen, wenn die Summe\nder eingehenden Fl\xfcssigkeit und der im Fass befindenden Fl\xfcssigkeit die\nKapazit\xe4t \xfcberschreitet. \xdcbergebe der Ausnahme den Wert, um wieviel die\nmaximale Kapazit\xe4t \xfcberschritten wurde. Wenn die maximale Kapazit\xe4t nicht\n\xfcberschritten wird, soll die eingehende Fl\xfcssigkeit dem Fass hinzugef\xfcgt\nwerden"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-examtask06",children:"Hinweise zur Klasse ExamTask06"}),"\n",(0,s.jsx)(n.p,{children:"Erstelle ein neues Fass, das die maximale Kapazit\xe4t von 100 hat. Versuche\nanschlie\xdfend das Fass auf 101 zu f\xfcllen und fange die Ausnahme ab. Gib in der\nKonsole aus, um wieviel die maximale Kapazit\xe4t \xfcberschritten wurde."}),"\n",(0,s.jsxs)(n.p,{children:["Bsp. Konsolenausgabe: ",(0,s.jsx)(n.code,{children:"Es w\xe4re um 1 zu viel bef\xfcllt worden."})]}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-7",children:"Aufgabe 7"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n\n  EnergySource --o Phone\n  CablePhone --\x3e Phone : extends\n  SmartPhone --\x3e Phone : extends\n\n  class EnergySource {\n    <<enumeration>>\n    BATTERY('B')\n    POWER_PLUG('P')\n    -type char\n    EnergySource(type: char)\n    +getType() char\n    +canBeUsedEverywhere() boolean\n  }\n\n  class Phone {\n    <<abstract>>\n    #energySource EnergySource &lcub; final &rcub;\n    +Phone(energySource: EnergySource)\n    +readyForUse()* boolean\n  }\n\n  class CablePhone {\n    -pluggedIn boolean\n    -poweredOn boolean\n    +CablePhone(energySource: EnergySource, pluggedIn: boolean, poweredOn: boolean)\n    +readyForUse(): boolean\n  }\n\n  class SmartPhone {\n    -MINIMUM_POWER int$\n    -power int\n    +SmartPhone(energySource: EnergySource, power: int)\n    +readyForUse(): boolean\n  }\n\n  class ExamTask04 {\n    +main(args: String[])$ void\n  }"}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-energysource",children:"Hinweise zur Klasse EnergySource"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Erstelle die zwei Konstanten Batterie und Steckdose f\xfcr die Arten einer\nEnergiequelle."}),"\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren."}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"getType"})," soll den Typ der Energiequelle zur\xfcckgeben."]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.strong,{children:"canBeUsedEverywhere"})," soll true zur\xfcckgeben, wenn die\nEnergiequelle eine Batterie ist."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-phone",children:"Hinweise zur Klasse Phone"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-cablephone",children:"Hinweise zur Klasse CablePhone"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren."}),"\n",(0,s.jsx)(n.li,{children:"Die Methode readyForUse soll true zur\xfcckgeben, wenn das Kabeltelefon\neingesteckt und eingeschalten ist."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-smartphone",children:"Hinweise zur Klasse SmartPhone"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die minimale Energie soll 200 betragen."}),"\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren."}),"\n",(0,s.jsx)(n.li,{children:"Die Methode readyForUse soll true zur\xfcckgeben, wenn die Energie des\nSmartphones die minimal erforderliche Energie \xfcberschreitet."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-examtask04",children:"Hinweise zur Klasse ExamTask04"}),"\n",(0,s.jsx)(n.p,{children:"Erzeuge ein Kabeltelefon mit Akku und eines, dass an die Steckdose angeschlossen\nist. Erzeuge ein leeres Smartphone und eines das halb voll ist. Speichere alle\nerzeugten Fahrzeuge in einer ArrayList. Ermittle mithilfe einer Schleife die\nAnzahl der betriebsbereiten Telefone. Gib die Anzahl in der Konsole aus."}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-8",children:"Aufgabe 8"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n  direction LR\n\n  Comparator~Car~ <.. ConstructionYearComparator : implements\n  CarVendor --  ConstructionYearComparator\n  CarVendor o--  Car\n\n  class Comparator~Car~ {\n    <<interface>>\n    +compare(c1: Car, c2: Car) int\n  }\n\n  class ConstructionYearComparator {\n    +compare(c1: Car, c2: Car) int\n  }\n\n  class CarVendor {\n    -cars ArrayList~Car~\n    +CarVendor()\n    +sortByConstructionYear() void\n    +print() void\n  }\n\n  class Car {\n    <<interface>>\n    +getConstructionYear() int\n  }"}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-carvendor",children:"Hinweise zur Klasse CarVendor"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren."}),"\n",(0,s.jsx)(n.li,{children:"Die Methode sortByConstructionYear soll die Autos absteigend nach Baujahr\nsortieren."}),"\n",(0,s.jsx)(n.li,{children:"Die Methode print soll das Baujahr aller Autos in der Konsole ausgeben."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"hinweise-zur-klasse-constructionyearcomparator",children:"Hinweise zur Klasse ConstructionYearComparator"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der ConstructionYearComparator soll das Comparator Interface implementieren\nund Autos absteigend nach Baujahr sortieren."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>t});var s=i(96540);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);