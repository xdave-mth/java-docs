"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2590],{91575:(e,n,a)=>{a.d(n,{A:()=>t});var s=a(96540),r=a(74848);function t(e){let{children:n,initSlides:a,width:t=null,height:i=null}=e;return(0,s.useEffect)((()=>{a()})),(0,r.jsx)("div",{className:"reveal reveal-viewport",style:{width:t??"100vw",height:i??"100vh"},children:(0,r.jsx)("div",{className:"slides",children:n})})}},99845:(e,n,a)=>{a.d(n,{i:()=>s});const s=()=>{const e=a(38182),n=a(72186),s=a(13504),r=a(93558);new(a(89665))({plugins:[e,n,s,r]}).initialize({hash:!0})}},94252:(e,n,a)=>{a.r(n),a.d(n,{default:()=>l});var s=a(28774),r=a(91575),t=a(99845),i=a(74848);function l(){return(0,i.jsxs)(r.A,{initSlides:t.i,children:[(0,i.jsx)("section",{children:(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Agenda"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Innere Klassen"}),(0,i.jsx)("li",{className:"fragment",children:"Lambdafunktionen"})]})]})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Innere Klassen"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Innere Klassen"}),(0,i.jsxs)("p",{className:"fragment",children:["Dateien die ausschlie\xdflich eine einzige Klasse beinhalten nennt man",(0,i.jsx)("span",{children:" \xc4u\xdfere Klassen"}),"."]}),(0,i.jsxs)("p",{className:"fragment",children:["Wird eine Klasse innerhalb einer anderen Klasse definiert, nennt man diese ",(0,i.jsx)("span",{children:" Innere Klasse "}),"."]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Arten von Inneren Klassen"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Geschachtelte Klassen"}),(0,i.jsx)("li",{className:"fragment",children:"Element Klassen"}),(0,i.jsx)("li",{className:"fragment",children:"Lokale Klassen"}),(0,i.jsx)("li",{className:"fragment",children:"Anonyme Klassen"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Geschachtelte Klasse - Definition"}),(0,i.jsxs)("p",{className:"fragment",children:["Die innere Klasse wird innerhalb der Klassendefinition erstellt und mit dem Schl\xfcsselwort ",(0,i.jsx)("span",{children:" static"})," markiert."]}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class HumanComparator {\n //...\n public static class AgeDescComparator \n   implements Comparator&lt;Human&gt; {\n   //...\n }\n //...\n}\n"}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Geschachtelte Klasse - Verwendung"}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"ArrayList&lt;Human&gt; humans = new ArrayList&lt;&gt;();\n\nHumanComparator.AgeDescComparator comparator;\ncomparator = new HumanComparator.AgeDescComparator();\n\nCollections.sort(humans, comparator);\n"}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Element Klasse - Definition"}),(0,i.jsx)("p",{className:"fragment",children:"Die innere Klasse wird innerhalb der Klassendefinition erstellt."}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class HumanComparator {\n //...\n public class AgeDescComparator \n   implements Comparator&lt;Human&gt; {\n   //...\n }\n //...\n}\n"}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Element Klasse - Verwendung"}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"ArrayList&lt;Human&gt; humans = new ArrayList&lt;&gt;();\n\nHumanComparator humanComparator = new HumanComparator();\n\nCollections.sort(humans, humanComparator.new AgeDescComparator());\n"}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Lokale Klasse"}),(0,i.jsx)("p",{className:"fragment",children:"Die lokale Klasse wird innerhalb einer Methode erstellt und mit keinem Schl\xfcsselwort markiert. Sie kann nur in der erstellten Methode verwendet verwendet."}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:" //...\n public static void main(String[] args) {\n   class AgeDescComparator implements Comparator&lt;Human&gt; {\n     //...\n   }\n   AgeDescComparator comparator = new AgeDescComparator();\n }\n //...\n"}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Anonyme Klasse"}),(0,i.jsx)("p",{className:"fragment",children:"Die innere Klasse wird innerhalb des Methodenaufrufs definiert und instanziiert."}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Collections.sort(humans, new Comparator&lt;Human&gt;() {\n  public int compare(Human h1, Human h2) {\n    // Implementierung der Comparatorlogik\n  }\n});\n"}})})]}),(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Frag jetzt!"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Demo"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Geschachtelte Klassen"}),(0,i.jsx)("li",{className:"fragment",children:"Element Klassen"}),(0,i.jsx)("li",{className:"fragment",children:"Lokale Klassen"}),(0,i.jsx)("li",{className:"fragment",children:"Anonyme Klassen"}),(0,i.jsx)("li",{className:"fragment",children:"Ausblick Lambdafunktion"})]})]}),(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Frag jetzt!"})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Lambdafunktionen"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Lambdafunktion"}),(0,i.jsx)("p",{className:"fragment",children:"Eine Lambdafunktion ist eine Methode ohne Name, die wie eine Referenzvariable verwendet werden kann."}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    BinaryOperator&lt;Integer&gt; add = (x, y) -> x + y;\n  }\n}\n"}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Funktionales Interface"}),(0,i.jsx)("p",{className:"fragment",children:"Ein funktionales Interface ist ein Interface mit genau einer abstrakten Methode."}),(0,i.jsx)("p",{className:"fragment",children:"Das funkionale Interface wird f\xfcr die Typisierung einer Lambdafunktion verwendet."}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    BinaryOperator&lt;Integer&gt; add = (x, y) -> x + y;\n  }\n}\n"}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Nicht Funktionales Interface"}),(0,i.jsxs)("p",{className:"fragment",children:["Nicht jedes Interface mit einer einzigen abstrakten Methode ist funktional, z.B."," ",(0,i.jsx)(s.A,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Comparable.html",children:"Comparable"})]}),(0,i.jsxs)("p",{className:"fragment",children:["Funktionale Interfaces werden mit @FunctionalInterface markiert, z.B."," ",(0,i.jsx)(s.A,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html",children:"Comparator"})]}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"@FunctionalInterface\npublic interface NameChangesConsumer {\n  public void nameChanges(String changedName);\n}\n"}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Syntax Lambdafunktion - Kein Parameter"}),(0,i.jsx)("p",{className:"fragment",children:"Hat das funktionale Interface keinen Parameter, werden runde Klammern ben\xf6tigt."}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'shoppingList.cleared(() -&gt; {\n  System.out.println("Liste wurde geleert.");\n});\n'}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Syntax Lambdafunktion - Ein Parameter"}),(0,i.jsx)("p",{className:"fragment",children:"Hat das funktionale Interface einen Parameter, werden keine runden Klammern ben\xf6tigt."}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'shoppingList.itemAdded(item -&gt; {\n  System.out.println(item.getName() + " wurde hinzugef\xfcgt.");\n});\n'}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Syntax Lambdafunktion - Mehrere Parameter"}),(0,i.jsx)("p",{className:"fragment",children:"Hat das funktionale Interface mehrere Parameter, werden runden Klammern ben\xf6tigt."}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'shoppingList.getData((int sum, int count) -&gt; {\n  System.out.println("Warenwert: " + sum);\n  System.out.println("Artikelanzahl: " + count);\n});\n'}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Syntax Lambdafunktion - Mehrere Anweisungen"}),(0,i.jsx)("p",{className:"fragment",children:"Besteht die Lambdafunktion aus mehrern Anweisungen sind geschweifte Klammern notwendig."}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'shoppingList.getData((int sum, int count) -&gt; {\n  System.out.println("Warenwert: " + sum);\n  System.out.println("Artikelanzahl: " + count);\n});\n'}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Syntax Lambdafunktion - Eine Anweisung"}),(0,i.jsx)("p",{className:"fragment",children:"Besteht die Lambdafunktion aus einer Anweisung sind keine geschweifte Klammern notwendig."}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'shoppingList.getData((int sum, int count) -&gt; \n  System.out.println("Wert: " + sum + " Anzahl: " + count);\n);\n'}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Syntax Lambdafunktion - return-Anweisung"}),(0,i.jsx)("p",{className:"fragment",children:"Besteht die Lambdafunktion aus einer einzelnen return Anweisung, sind keine geschweifte Klammern notwendig und das return Statement kann weggelassen werden."}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"shoppingList.calculate((int a, int b) -&gt; a + b);\n"}})})]}),(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Frag jetzt!"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Demo"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Intro Shopping List Example"}),(0,i.jsx)("li",{className:"fragment",children:"After List Printed (kein Parameter)"}),(0,i.jsx)("li",{className:"fragment",children:"After Item Added (ein Parameter)"}),(0,i.jsx)("li",{className:"fragment",children:"Items Changed (mehrere Parameter)"})]})]}),(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Frag jetzt!"})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Rest of the Day"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Java I Wiederholung"}),(0,i.jsx)("li",{className:"fragment",children:"Aufgaben: Innere Klassen"})]})]})]})}}}]);