"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2544],{47098:(e,s,n)=>{n.d(s,{Z:()=>r});var i=n(67294),l=n(85893);function r(e){let{children:s,initSlides:n,width:r=null,height:a=null}=e;return(0,i.useEffect)((()=>{n()})),(0,l.jsx)("div",{className:"reveal reveal-viewport",style:{width:r??"100vw",height:a??"100vh"},children:(0,l.jsx)("div",{className:"slides",children:s})})}},63942:(e,s,n)=>{n.d(s,{O:()=>i});const i=()=>{const e=n(42199),s=n(87251),i=n(60977),l=n(12489);new(n(29197))({plugins:[e,s,i,l]}).initialize({hash:!0})}},89367:(e,s,n)=>{n.d(s,{K:()=>l});n(67294);var i=n(85893);const l=()=>(0,i.jsx)("p",{style:{fontSize:"8px",position:"absolute",bottom:0,right:0},children:"*NKR"})},62461:(e,s,n)=>{n.r(s),n.d(s,{default:()=>c});var i=n(47098),l=n(89367),r=n(63942),a=n(85893);function c(){return(0,a.jsxs)(i.Z,{initSlides:r.O,children:[(0,a.jsx)("section",{children:(0,a.jsx)("section",{children:"Fragen oder Probleme?"})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Wiederholung"})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Klasse"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Abstraktion von Objekten"}),(0,a.jsx)("li",{className:"fragment",children:"definiert durch Methoden und Attribute"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Objekt"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Instanz einer Klasse"}),(0,a.jsx)("li",{className:"fragment",children:"Verhalten abh\xe4ngig von der Instanz"}),(0,a.jsx)("li",{className:"fragment",children:"ist eine Referenzvariable"}),(0,a.jsx)("li",{className:"fragment",children:"hat den default Wert null"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Modifiers"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"public/private"}),(0,a.jsx)("li",{className:"fragment",children:"Getter- und Settermethoden"}),(0,a.jsx)("li",{className:"fragment",children:"this"}),(0,a.jsx)("li",{className:"fragment",children:"\xdcberladen von Methoden"})]})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Java API"})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Wrapper Klassen"}),(0,a.jsx)("pre",{className:"fragment",children:(0,a.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public static void main(String[] args) {\n  Integer i = Integer.valueOf(\"631\");\n  System.out.println(i) // 631;\n  Boolean b = Boolean.logicalXor(true, false);\n  System.out.println(b) // true\n  Character c = Character.toUpperCase('m');\n  System.out.println(c) // 'M'\n}"}})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Datums- und Zeitangaben"}),(0,a.jsx)("pre",{className:"fragment",children:(0,a.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'public static void main(String[] args) {\n  LocalDateTime now = LocalDateTime.now();\n  System.out.println("Jahr: " + now.getYear());\n  System.out.println("Monat: " + now.getMonth());\n  System.out.println("Tag: " + now.getDayOfMonth());\n}'}})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Dateien lesen*"}),(0,a.jsx)("pre",{className:"fragment",children:(0,a.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'public static void main(String[] args) {\n  File file = new File("text.txt");\n  Scanner scanner = new Scanner(file);\n  while(scanner.hasNextLine()) {\n    String currentLine = scanner.nextLine();\n    System.out.println(currentLine);\n  }\n  scanner.close();\n}'}})}),(0,a.jsx)(l.K,{})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Was ist der final Modifier?"})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Kann angewendet werden auf"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"(Referenz)variablen"}),(0,a.jsx)("li",{className:"fragment",children:"Attribute"}),(0,a.jsx)("li",{className:"fragment",children:"Klassen(wird sp\xe4ter behandelt)"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Was bewirkt der final modifier?"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"initialisierung nur einmal m\xf6glich"}),(0,a.jsx)("li",{className:"fragment",children:"bei Klassen auch im Konstruktor"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Demo"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"char gender"}),(0,a.jsx)("li",{className:"fragment",children:"String firstName"})]})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Enumerations"})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Was sind Enumerations?"}),(0,a.jsx)("p",{className:"fragement",children:"Gruppe von Konstanten"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Geschlecht (Male, Female, Divers)"}),(0,a.jsx)("li",{className:"fragment",children:"Motorart (Benzin, Diesel, Elektro)"}),(0,a.jsx)("li",{className:"fragment",children:"Genre (Action, Horror, Romanze)"}),(0,a.jsx)("li",{className:"fragment",children:"USK (0, 6, 12, 16, 18)"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Wie kann man das realisieren? (Gender)"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Anzahl an Gender?"}),(0,a.jsx)("li",{className:"fragment",children:"Attribute?"}),(0,a.jsx)("li",{className:"fragment",children:"Gender verf\xfcgbar machen?"}),(0,a.jsx)("li",{className:"fragment",children:"keine weiteren Gender zulassen?"}),(0,a.jsx)("li",{className:"fragment",children:"manipulation innerhalb der Klasse verhindern?"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Geht das nicht einfacher?"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"enum anstatt class"}),(0,a.jsx)("li",{className:"fragment",children:"Konstanten kommagetrennt festlegen"}),(0,a.jsx)("li",{className:"fragment",children:"Konstruktor access modifier optional"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Was macht man mit Enums?"}),(0,a.jsx)("p",{children:"Demo"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"switch"}),(0,a.jsx)("li",{className:"fragment",children:"isBinary"}),(0,a.jsx)("li",{className:"fragment",children:"values & ordinal"})]})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Klassendiagramme"})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Was sind Klassendiagramme?"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Diagrammtyp der UML"}),(0,a.jsx)("li",{className:"fragment",children:"visualisiert Klassen"}),(0,a.jsx)("li",{className:"fragment",children:"und deren Beziehungen"})]})]}),(0,a.jsx)("section",{children:(0,a.jsx)("img",{height:"400px",src:n(80874)})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Bereiche"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Klassenname"}),(0,a.jsx)("li",{className:"fragment",children:"Attribute"}),(0,a.jsx)("li",{className:"fragment",children:"Methoden"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Access Modifier"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{className:"fragment",children:[(0,a.jsx)("strong",{children:"+"})," entspricht public"]}),(0,a.jsxs)("li",{className:"fragment",children:[(0,a.jsx)("strong",{children:"-"})," entspricht private"]}),(0,a.jsxs)("li",{className:"fragment",children:[(0,a.jsx)("strong",{children:"#"})," entspricht protected"]}),(0,a.jsxs)("li",{className:"fragment",children:[(0,a.jsx)("strong",{children:"~"})," entspricht packaged *"]})]}),(0,a.jsx)("div",{className:"fragment",children:(0,a.jsx)(l.K,{})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"andere Modifier"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"unterstrichene Attribute und Methoden sind static"}),(0,a.jsxs)("li",{className:"fragment",children:["weitere Merkmale durch geschweifte Klammern"," "]})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Methoden"}),(0,a.jsx)("ul",{children:(0,a.jsx)("li",{className:"fragment",children:"Modifier - Bezeichner - Parameter - R\xfcckgabetyp"})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Attribute"}),(0,a.jsx)("ul",{children:(0,a.jsx)("li",{className:"fragment",children:"Modifier - Bezeichner - R\xfcckgabetyp - Anfangswert"})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Stereotypen"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:" << enum >>"}),(0,a.jsx)("li",{className:"fragment",children:" << interface >>"}),(0,a.jsx)("li",{className:"fragment",children:" << exception >>"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Beziehungen zwischen Klassen"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Assoziation"}),(0,a.jsx)("li",{className:"fragment",children:"Aggregation"}),(0,a.jsx)("li",{className:"fragment",children:"Kompositon*"})]}),(0,a.jsx)("div",{className:"fragment",children:(0,a.jsx)(l.K,{})})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Aktivit\xe4tsdiagramme"})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Was sind Aktivit\xe4tsdiagramme?"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Diagrammtyp der UML"}),(0,a.jsx)("li",{className:"fragment",children:"visualisiert Verhalten"})]})]}),(0,a.jsx)("section",{children:(0,a.jsx)("img",{height:"400px",src:n(56028)})}),(0,a.jsx)("section",{children:"In der Klausur ist nur das Lesen von Aktivit\xe4tsdiagrammen relevant."})]}),(0,a.jsxs)("section",{children:[(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Zusammenfassung"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Java API"}),(0,a.jsx)("li",{className:"fragment",children:"final modifier"}),(0,a.jsx)("li",{className:"fragment",children:"Enumerations"}),(0,a.jsx)("li",{className:"fragment",children:"Klassendiagramme"}),(0,a.jsx)("li",{className:"fragment",children:"Aktivit\xe4tsdiagramme"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Rest of the day"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Java API"}),(0,a.jsx)("li",{className:"fragment",children:"Enumerations"}),(0,a.jsx)("li",{className:"fragment",children:"Activity Diagrams"}),(0,a.jsx)("li",{className:"fragment",children:"Class Diagrams"})]})]})]})]})}},56028:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/activity-diagram-example-e5b23e859f3d9726d968128b8bfaa144.png"},80874:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/class-diagram-example-72bfae0ca79b41c963cd69b7df1e766d.png"}}]);