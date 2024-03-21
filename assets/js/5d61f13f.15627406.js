"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2194],{47098:(e,n,s)=>{s.d(n,{Z:()=>t});var r=s(67294),i=s(85893);function t(e){let{children:n,initSlides:s,width:t=null,height:a=null}=e;return(0,r.useEffect)((()=>{s()})),(0,i.jsx)("div",{className:"reveal reveal-viewport",style:{width:t??"100vw",height:a??"100vh"},children:(0,i.jsx)("div",{className:"slides",children:n})})}},63942:(e,n,s)=>{s.d(n,{O:()=>r});const r=()=>{const e=s(42199),n=s(87251),r=s(60977),i=s(12489);new(s(29197))({plugins:[e,n,r,i]}).initialize({hash:!0})}},89367:(e,n,s)=>{s.d(n,{K:()=>i});s(67294);var r=s(85893);const i=()=>(0,r.jsx)("p",{style:{fontSize:"8px",position:"absolute",bottom:0,right:0},children:"*NKR"})},20338:(e,n,s)=>{s.r(n),s.d(n,{default:()=>c});var r=s(33692),i=s(47098),t=s(63942),a=s(89367),l=s(85893);function c(){return(0,l.jsxs)(i.Z,{initSlides:t.O,children:[(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Algorithmen und Datenstrukturen (DSA)"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Agenda"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Intro"}),(0,l.jsx)("li",{className:"fragment",children:"Set"}),(0,l.jsx)("li",{className:"fragment",children:"Map"}),(0,l.jsx)("li",{className:"fragment",children:"Hashing"})]})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Intro"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Was ist ein Algorithmus?"}),(0,l.jsx)("p",{className:"fragment",children:"systematische Vorgehensweise zur L\xf6sung eines Problems"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Charakteristika"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Das Verfahren muss in einem endlichen Text eindeutig beschreibbar sein.",children:"Finitheit"}),(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Jeder Schritt des Verfahrens muss tats\xe4chlich ausf\xfchrbar sein.",children:"Ausf\xfchrbarkeit"}),(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Das Verfahren darf zu jedem Zeitpunkt nur endlich viel Speicherplatz ben\xf6tigen. (Space Complexity)",children:"Dynamische Finitheit"}),(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Das Verfahren darf nur endlich viele Schritte ben\xf6tigen. (Time Complexity)",children:"Terminierung"}),(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Der Algorithmus muss bei denselben Voraussetzungen das gleiche Ergebnis liefern.",children:"Determiniertheit"}),(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Die n\xe4chste anzuwendende Regel im Verfahren ist zu jedem Zeitpunkt eindeutig definiert.",children:"Determinismus"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Was ist eine Datenstruktur?"}),(0,l.jsx)("p",{className:"fragment",children:"spezifische Anordung von Daten zur effizienten Verwaltung eines Problems"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Charakteristika"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Die Gr\xf6\xdfe wird zu Beginn einmalig festgelegt.",children:"statisch"}),(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Die Gr\xf6\xdfe ist ver\xe4nderbar.",children:"dynamisch"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Kann man Datenstrukturen und Algorithmen trennen?"}),(0,l.jsx)("p",{className:"fragment",children:"Nein nur die Kombination bringt etwas."}),(0,l.jsx)("p",{className:"fragment",children:"Was bringt ein Array ohne (\xfcber)schreiben und lesen?"}),(0,l.jsx)("p",{className:"fragment",children:"Was bringt eine for-Schleife ohne Array?"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Unsere Definition von DSA"}),(0,l.jsx)("p",{className:"fragment",children:"Ein Algorithmus (A) erzeugt, manipuliert und entfernt eine oder mehrere Datenstrukturen(DS) um ein spezifisches Problem effizient zu l\xf6sen."})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Set"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Konzept"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Speichert Mengen"}),(0,l.jsx)("li",{className:"fragment",children:"Vereinigung (Union)"}),(0,l.jsx)("li",{className:"fragment",children:"Durchschnitt (Intersection)"}),(0,l.jsx)("li",{className:"fragment",children:"Differenz (Difference)"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"HashSet"}),(0,l.jsx)("p",{children:"implementiert das Set interface"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Demo - HashSet"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Mengen erstellen (1-4) und (2,3,5)"}),(0,l.jsx)("li",{className:"fragment",children:"Vereinigung (Union)"}),(0,l.jsx)("li",{className:"fragment",children:"Durchschnitt (Intersection)"}),(0,l.jsx)("li",{className:"fragment",children:"Differenz (Difference)"})]})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Map"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Konzept"}),(0,l.jsx)("ul",{children:(0,l.jsx)("li",{className:"fragment",children:"Speichert Werte nach einem Schl\xfcssel ab"})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"HashMap"}),(0,l.jsx)("p",{children:"implementiert das Map interface"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Demo - HashMap"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Map erstellen"}),(0,l.jsx)("li",{className:"fragment",children:"Hinzuf\xfcgen/L\xf6schen"}),(0,l.jsx)("li",{className:"fragment",children:"Quellcode HashSet (uses HashMap)"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Map"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Function&lt;T, R&gt; {\n  public R apply(T t);\n}\n"}})}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BiFunction&lt;T, U, R&gt; {\n  public R apply(T t, U u);\n}\n"}})}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface UnaryOperator&lt;T&gt; {\n  public T apply(T t);\n}\n"}})}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BinaryOperator&lt;T&gt; {\n  public T apply(T t1, T t2);\n}\n"}})}),(0,l.jsx)("p",{className:"fragment",children:"Code ausf\xfchren, der Daten zur\xfcckgibt."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Predicate"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Predicate&lt;T&gt; {\n  public boolean test(T t);\n}\n"}})}),(0,l.jsx)("p",{className:"fragment",children:"Code ausf\xfchren, der true oder false zur\xfcckgibt."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Supplier"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Supplier&lt;T&gt; {\n  public T get();\n}\n"}})}),(0,l.jsx)("p",{className:"fragment",children:"Code ausf\xfchren, der Daten vom Typ T zur\xfcckgibt."}),(0,l.jsx)(a.K,{})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Frag jetzt!"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Demo Lambda Funktionen Auslagern"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Attribut: minimumFirstName"}),(0,l.jsx)("li",{className:"fragment",children:"Attribut: olderThan24Years"}),(0,l.jsx)("li",{className:"fragment",children:"Attribut: toFullName"}),(0,l.jsx)("li",{className:"fragment",children:"Methode: olderThanYears"}),(0,l.jsx)("li",{className:"fragment",children:"Methode: fullNameIsLongerThan"})]})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Frag jetzt!"})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Methodenreferenzen"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Warum Methodenreferenzen?"}),(0,l.jsx)("p",{className:"fragment",children:"Mit Methodenreferenzen kann man noch weniger Code schreiben."}),(0,l.jsx)("p",{className:"fragment",children:"Hat ein Parameter die gleiche Signatur, wie eine Methode, kann diese Methode als Methodenreferenz \xfcbergeben werden."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Beispiel ArrayList"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;()\n    \n    // lambda funktion\n    names.forEach((name) -&gt System.out.println(name));\n    \n    // methodenreferenz\n    names.forEach(System.out::println);\n }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Verwenden von Methodenreferenzen?"}),(0,l.jsx)("p",{className:"fragment",children:"Anstatt die Methode \xfcber einen Punkt aufzurufen, wird ein zweifacher Doppelpunkt verwendet."}),(0,l.jsx)("p",{className:"fragment",children:'Mit dem "new" nach dem zweifachen Doppelpunkt kann auch der Konstruktor einer Klasse referenziert werden.'}),(0,l.jsx)(a.K,{})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Demo Methodenreferenzen"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Methodensignatur Sysout"}),(0,l.jsx)("li",{className:"fragment",children:"OneTimePrinter"})]})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Frag jetzt!"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Demo Composed Lambdas"}),(0,l.jsx)(a.K,{})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Java Stream API"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Was is eine Stream Pipeline"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{"data-line-numbers":"5-9|5|6-8|9",className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;()\n    \n    names.stream() // source\n      .filter(name -&gt; name.length > 4) //inter-\n      .map(name -&gt; name.toUpperCase()) //mediate\n      .limit(12)                      //operations\n      .forEach(System.out::println) // terminal operation\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h4",{children:"Charakteristika einer Stream Pipeline"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Intermediate Operations sind optional"}),(0,l.jsx)("li",{className:"fragment",children:"Terminal Operation ist erforderlich"}),(0,l.jsx)("li",{className:"fragment",children:"Terminal Operation f\xfchrt die Pipeline aus"}),(0,l.jsx)("li",{className:"fragment",children:"Pipeline kann nur einmal genutzt werden"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Demo Stream API"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Intermediate Optional"}),(0,l.jsx)("li",{className:"fragment",children:"Terminal erforderlich, sonst passiert nichts"}),(0,l.jsx)("li",{className:"fragment",children:"Pipeline nur einmal Nutzbar"}),(0,l.jsx)("li",{className:"fragment",children:"Intermediate Reihenfolge"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Aufbau einer Pipeline"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Quelle"}),(0,l.jsx)("li",{className:"fragment",children:"Intermediate Operations"}),(0,l.jsx)("li",{className:"fragment",children:"Terminal Operations"})]})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Frag jetzt!"})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Quellen"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Erzeugen von Quellen I"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    // Collection.stream(); // interface\n    // &rarr; Klassen die Collection implementieren:\n    ArrayList&lt;Student&gt; students = new ArrayList&lt;&gt;();\n    students.stream();\n    \n    HashMap&lt;String, Student&gt; map = new HashMap&lt;&gt;();\n    map.keySet().stream();\n    map.entrySet().stream();\n    map.values().stream();\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Erzeugen von Quellen II"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    // Array in ein Stream konvertieren:\n    // Arrays.stream(T[])\n    Stream&lt;Integer&gt; num1 = Arrays.stream({ 1, 2, 3, 4 });\n    \n    int[] numArray = { 1, 2, 3, 4 };\n    Stream&lt;Integer&gt; num2 = Arrays.stream(numArray);\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Erzeugen von Quellen III"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    // Gleichartige Werte in ein Stream kovertieren:\n    // Stream.of(T...);\n    Stream&lt;Integer&gt; num1 = Stream.of(1, 2, 3, 4);\n  }\n}\n"}})})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Frag jetzt!"})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Intermediate Operations"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Intermediate Operations"}),(0,l.jsx)("p",{children:"sind Methoden eines Streams, die als R\xfcckgabewert einen Stream zur\xfcckgeben."}),(0,l.jsx)(r.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/Stream.html",children:"Stream Klasse"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"filter - Methode"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; filter(Predicate&lt;? super T&gt; predicate)"}})}),(0,l.jsxs)("p",{className:"fragment",children:["Der Parameter predicate muss das"," ",(0,l.jsx)(r.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/function/Predicate.html",children:"Predicate Interface"})," ","implementieren."]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"filter - Verwendung"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 3);\n      // nur 4 bleibt \xfcbrig\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"map - Methode"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"&lt;R&gt; Stream&lt;R&gt; map(Function&lt;? super T,? extends R&gt; mapper)"}})}),(0,l.jsxs)("p",{className:"fragment",children:["Der Parameter mapper muss das"," ",(0,l.jsx)(r.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/function/Function.html",children:"Function Interface"})," ","implementieren."]}),(0,l.jsx)("p",{className:"fragment",children:"Die Eingabe vom Typ T definiert der vorherige Stream. Der R\xfcckgabetyp des mapper Parameters definiert den R\xfcckgabetyp des Streams."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"map - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .map(number -> number * 2);\n    // R\xfcckgabetyp: Stream&lt;Integer&gt;\n    Stream.of(1, 2, 3, 4)\n      .map(number -> String.valueOf(number));\n    // R\xfcckgabetyp: Stream&lt;String&gt;\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"limit - Methode"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; limit(long maxSize)"}})}),(0,l.jsx)("p",{className:"fragment",children:'Es werden maximal "maxSize" Elemente des vorherigen Streams weitergegeben.'})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"limit - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .limit(2);\n      // nur 1 & 2 werden weitergegeben\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"skip - Methode"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; skip(long n)"}})}),(0,l.jsx)("p",{className:"fragment",children:"Es werden n-Elemente \xfcbersprungen."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"skip - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .skip(2);\n      // nur 3 & 4 werden weitergegeben\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"sorted - Methode"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; sorted(Comparator&lt;? super T&gt; comparator)"}})}),(0,l.jsxs)("p",{className:"fragment",children:["Der Parameter comparator muss das"," ",(0,l.jsx)(r.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html",children:"Comparator Interface"})," ","implementieren."]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"sorted - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(4, 3, 2, 1)\n      .sorted((n1, n2) -> Integer.compare(n1, n2));\n      // 1, 2, 3, 4\n      // Sagt Bye Bye zu Collections.sort()\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"distinct - Methode"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; distinct()"}})}),(0,l.jsx)("p",{className:"fragment",children:"Es werden nur einzigartige Werte im Stream beibehalten. Diese werden Mithilfe von .equals identifiziert."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"distinct - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 1, 4)\n      .distinct();\n      // nur 1, 2 & 4 werden weitergegeben\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Review von Stream Api Examples"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Student Example ohne Auslagerung"}),(0,l.jsx)("li",{className:"fragment",children:"Number Example Limit und Reihenfolge"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Von Stream zu Stream"}),(0,l.jsx)("p",{children:"Intermediate Operations werden auf einem Stream aufgerufen und geben immer einen Stream zur\xfcck."})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Frag jetzt!"})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Terminal Operations"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Terminal Operations"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Matching und Suchen"}),(0,l.jsx)("li",{className:"fragment",children:"Transformationen"}),(0,l.jsx)("li",{className:"fragment",children:"Statistik"}),(0,l.jsx)("li",{className:"fragment",children:"Verarbeitung"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Matching"}),(0,l.jsx)("p",{children:"Mit Matching kann abgefragt werden ob bestimmte Elemente einer Bedingung entsprechen."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Matching - Methoden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"boolean  allMatch(Predicate&lt;T&gt; predicate) // alle\nboolean noneMatch(Predicate&lt;T&gt; predicate) // keiner\nboolean  anyMatch(Predicate&lt;T&gt; predicate) // mindestens einer\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Matching - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .allMatch(number -> number > 3); // false\n    \n    Stream.of(1, 2, 3, 4)\n      .noneMatch(number -> number > 4); // true\n    \n    Stream.of(1, 2, 3, 4)\n      .anyMatch(number -> number > 2); // true\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Suchen"}),(0,l.jsx)("p",{children:"Mit findAny und findFirst wird das erste Element in einem Stream zur\xfcckgegeben."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Suchen - Methoden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Optional&lt;T&gt; findAny() // nicht deterministisch\nOptional&lt;T&gt; findFirst() // deterministisch\n"}})}),(0,l.jsx)("p",{children:"Haupts\xe4chlich wichtig bei parallelen Streams"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Suchen - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .findAny() // 2, 3 oder 4\n    \n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .findFirst() // immer 2\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Transformationen"}),(0,l.jsx)("p",{children:"Die Ergebnismenge wird gesammelt."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Transformationen - Methoden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"List&lt;T&gt; toList()\nT[] toArray()\n\nT reduce(T identity, BinaryOperator&lt;T&gt; accumulator)\n\nR collect(Collector&lt;T,A,R&gt; collector)\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Transformationen - Verwendung I "}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    List&lt;Integer&gt; nums = Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .toList() // List&lt;Integer&gt;\n    \n    Object[] nums2 = Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .toArray() // Object[]\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Transformationen - Verwendung II "}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .reduce(0, (a, b) -> a + b);  // int *NKR\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Transformationen - Verwendung III "}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;Student&gt; students = getManyStudents()\n      .stream()\n      .collect(Collectors.toList());\n      // Collectors.toMap ist Klausurrelevant\n      // Collectors.groupingBy ist Klausurrelevant\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Demo"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:(0,l.jsx)(r.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/Collectors.html",children:"Collectors Klasse"})}),(0,l.jsx)("li",{className:"fragment",children:"Collectors.toMap"}),(0,l.jsx)("li",{className:"fragment",children:"Collectors.groupingBy"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik"}),(0,l.jsx)("p",{children:"Mit Statistik Operationen lassen sich Anzahl, Minimum, Maximum, Summe und Durchschnitt berechnen."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik - Methoden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"long count()\n\nOptional&lt;T&gt; min(Comparator&lt;T&gt;)\nOptional&lt;T&gt; max(Comparator&lt;T&gt;)\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik - Verwendung I"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .count(); // 4\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik - Verwendung II"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Optional&lt;Integer&gt; min = Stream.of(1, 2, 3, 4)\n      .min((n1, n2) -> Integer.compare(n1, n2));\n    \n    min.ifPresent(System.out::println); // 1\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik - Verwendung III"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Optional&lt;Integer&gt; max = Stream.of(1, 2, 3, 4)\n      .max((n1, n2) -> Integer.compare(n1, n2));\n    \n    max.ifPresent(System.out::println); // 4\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik Streams Erzeugen"}),(0,l.jsx)("p",{children:"F\xfcr die Methoden Durchschnitt und Summe werden spezifische Streams ben\xf6tigt:"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"IntStream"}),(0,l.jsx)("li",{className:"fragment",children:"LongStream"}),(0,l.jsx)("li",{className:"fragment",children:"DoubleStream"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik Streams Erzeugen - Methoden"}),(0,l.jsx)("p",{children:"Um einen Statistik Stream zu erzeugen gibt es Intermediate Operations"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"DoubleStream mapToDouble(ToDoubleFunction&lt;T&gt; mapper)\nIntStream    mapToInt(ToIntFunction&lt;T&gt; mapper)\nLongStream   mapToLong(ToLongFunction&lt;T&gt; mapper)\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik Streams Erzeugen - Verwenden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;Student&gt; students = getManyStudents();\n    IntStream studentAges = students.stream()\n      .mapToInt(student -> student.age());\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik Streams - Methoden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"long sum()\n                           \nOptionalDouble average()\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik Streams - Verwendung I"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    IntStream manyNumbers = getManyNumbers();\n    long sum = manyNumbers.sum();\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik - Verwendung II"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    IntStream manyNumbers = getManyNumbers();\n    manyNumbers.average()\n      .ifPresent(System.out::println);\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Verarbeitung"}),(0,l.jsx)("p",{children:"Mit forEach kann jedes einzelne Element nacheinander weiterverarbeitet werden."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Verarbeitung - Methoden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"void forEach(Consumer&lt;T&gt; consumer)\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Verarbeitung - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .forEach(System.out::println)\n \n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .forEach(n -> System.out.println(n));\n  }\n}\n"}})})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Rest of the Day"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Lambda Aufgaben"}),(0,l.jsx)("li",{className:"fragment",children:"Stream API Aufgaben"})]})]})]})}}}]);