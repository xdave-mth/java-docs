"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3131],{47098:(e,n,s)=>{s.d(n,{Z:()=>t});var r=s(67294),a=s(85893);function t(e){let{children:n,initSlides:s,width:t=null,height:i=null}=e;return(0,r.useEffect)((()=>{s()})),(0,a.jsx)("div",{className:"reveal reveal-viewport",style:{width:t??"100vw",height:i??"100vh"},children:(0,a.jsx)("div",{className:"slides",children:n})})}},63942:(e,n,s)=>{s.d(n,{O:()=>r});const r=()=>{const e=s(42199),n=s(87251),r=s(60977),a=s(12489);new(s(29197))({plugins:[e,n,r,a]}).initialize({hash:!0})}},89367:(e,n,s)=>{s.d(n,{K:()=>a});s(67294);var r=s(85893);const a=()=>(0,r.jsx)("p",{style:{fontSize:"8px",position:"absolute",bottom:0,right:0},children:"*NKR"})},22510:(e,n,s)=>{s.r(n),s.d(n,{default:()=>c});var r=s(33692),a=s(47098),t=s(63942),i=s(89367),l=s(85893);function c(){return(0,l.jsxs)(a.Z,{initSlides:t.O,children:[(0,l.jsx)("section",{children:(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Agenda"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Intro Java Stream API"}),(0,l.jsx)("li",{className:"fragment",children:"Allgemeine Funktionale Interfaces"}),(0,l.jsx)("li",{className:"fragment",children:"Methodenreferenzen"}),(0,l.jsx)("li",{className:"fragment",children:"Java Stream API Aufbau"}),(0,l.jsx)("li",{className:"fragment",children:"Quellen"}),(0,l.jsx)("li",{className:"fragment",children:"Intermediate Operations"}),(0,l.jsx)("li",{className:"fragment",children:"Terminal Operations"})]})]})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Intro Java Stream API"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Collection"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"ArrayList<Student>"}),(0,l.jsx)("li",{className:"fragment",children:"ArrayList<Car>"}),(0,l.jsx)("li",{className:"fragment",children:"ArrayList<Animal>"})]}),(0,l.jsx)("p",{className:"fragment",children:"Collections bieten einen direkten Zugriff auf die Elemente um Sie zu verwalten."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Collection II"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Daten abfragen -> Name des \xe4ltesten Studenten"}),(0,l.jsx)("li",{children:"Daten \xe4ndern -> Preis eines Produkts erh\xf6hen"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Was ist ein Java Stream?"}),(0,l.jsx)("p",{className:"fragment",children:"Eine Sequenz (Abfolge) von Elementen, die funktionale Operationen (Funktionale Interfaces) unterst\xfctzt, um Daten zu verarbeiten, transformieren und aggregieren"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Streams vs Collection"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Streams k\xf6nnen Daten nicht direkt bearbeiten"}),(0,l.jsx)("li",{className:"fragment",children:"Streams verarbeiten Daten verz\xf6gert (lazy)"}),(0,l.jsx)("li",{className:"fragment",children:"Streams verarbeiten Daten parallel"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Demo"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Anzahl Studenten"}),(0,l.jsx)("li",{className:"fragment",children:"\xc4lter als 24"}),(0,l.jsx)("li",{className:"fragment",children:"Vorname mindestens 4 Zeichen"}),(0,l.jsx)("li",{className:"fragment",children:"Fullname mehr als 10 Zeichen"}),(0,l.jsx)("li",{className:"fragment",children:"Jetzt mit Streams"})]})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Allgemeine Funktionale Interfaces"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Grundkategorien von Funktionalen Interfaces"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Consumer"}),(0,l.jsx)("li",{className:"fragment",children:"Function"}),(0,l.jsx)("li",{className:"fragment",children:"Predicate"}),(0,l.jsx)("li",{className:"fragment",children:"Supplier"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Consumer"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Consumer&lt;T&gt; {\n  public void accept(T t);\n}\n"}})}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BiConsumer&lt;T, U&gt; {\n  public void accept(T t, U u);\n}\n"}})}),(0,l.jsx)("p",{className:"fragment",children:"Code ausf\xfchren ohne Daten weiterzugeben."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Function"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Function&lt;T, R&gt; {\n  public R apply(T t);\n}\n"}})}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BiFunction&lt;T, U, R&gt; {\n  public R apply(T t, U u);\n}\n"}})}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface UnaryOperator&lt;T&gt; {\n  public T apply(T t);\n}\n"}})}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BinaryOperator&lt;T&gt; {\n  public T apply(T t1, T t2);\n}\n"}})}),(0,l.jsx)("p",{className:"fragment",children:"Code ausf\xfchren, der Daten zur\xfcckgibt."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Predicate"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Predicate&lt;T&gt; {\n  public boolean test(T t);\n}\n"}})}),(0,l.jsx)("p",{className:"fragment",children:"Code ausf\xfchren, der true oder false zur\xfcckgibt."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Supplier"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Supplier&lt;T&gt; {\n  public T get();\n}\n"}})}),(0,l.jsx)("p",{className:"fragment",children:"Code ausf\xfchren, der Daten vom Typ T zur\xfcckgibt."}),(0,l.jsx)(i.K,{})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Frag jetzt!"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Demo Lambda Funktionen Auslagern"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Attribut: minimumFirstName"}),(0,l.jsx)("li",{className:"fragment",children:"Attribut: olderThan24Years"}),(0,l.jsx)("li",{className:"fragment",children:"Attribut: toFullName"}),(0,l.jsx)("li",{className:"fragment",children:"Methode: olderThanYears"}),(0,l.jsx)("li",{className:"fragment",children:"Methode: fullNameIsLongerThan"})]})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Frag jetzt!"})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Methodenreferenzen"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Warum Methodenreferenzen?"}),(0,l.jsx)("p",{className:"fragment",children:"Mit Methodenreferenzen kann man noch weniger Code schreiben."}),(0,l.jsx)("p",{className:"fragment",children:"Hat ein Parameter die gleiche Signatur, wie eine Methode, kann diese Methode als Methodenreferenz \xfcbergeben werden."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Beispiel ArrayList"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;()\n    \n    // lambda funktion\n    names.forEach((name) -&gt System.out.println(name));\n    \n    // methodenreferenz\n    names.forEach(System.out::println);\n }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Verwenden von Methodenreferenzen?"}),(0,l.jsx)("p",{className:"fragment",children:"Anstatt die Methode \xfcber einen Punkt aufzurufen, wird ein zweifacher Doppelpunkt verwendet."}),(0,l.jsx)("p",{className:"fragment",children:'Mit dem "new" nach dem zweifachen Doppelpunkt kann auch der Konstruktor einer Klasse referenziert werden.'}),(0,l.jsx)(i.K,{})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Demo Methodenreferenzen"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Methodensignatur Sysout"}),(0,l.jsx)("li",{className:"fragment",children:"OneTimePrinter"})]})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Frag jetzt!"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Demo Composed Lambdas"}),(0,l.jsx)(i.K,{})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Java Stream API"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Was is eine Stream Pipeline"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{"data-line-numbers":"5-9|5|6-8|9",className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;()\n    \n    names.stream() // source\n      .filter(name -&gt; name.length > 4) //inter-\n      .map(name -&gt; name.toUpperCase()) //mediate\n      .limit(12)                      //operations\n      .forEach(System.out::println) // terminal operation\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h4",{children:"Charakteristika einer Stream Pipeline"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Intermediate Operations sind optional"}),(0,l.jsx)("li",{className:"fragment",children:"Terminal Operation ist erforderlich"}),(0,l.jsx)("li",{className:"fragment",children:"Terminal Operation f\xfchrt die Pipeline aus"}),(0,l.jsx)("li",{className:"fragment",children:"Pipeline kann nur einmal genutzt werden"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Demo Stream API"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Intermediate Optional"}),(0,l.jsx)("li",{className:"fragment",children:"Terminal erforderlich, sonst passiert nichts"}),(0,l.jsx)("li",{className:"fragment",children:"Pipeline nur einmal Nutzbar"}),(0,l.jsx)("li",{className:"fragment",children:"Intermediate Reihenfolge"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Aufbau einer Pipeline"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Quelle"}),(0,l.jsx)("li",{className:"fragment",children:"Intermediate Operations"}),(0,l.jsx)("li",{className:"fragment",children:"Terminal Operations"})]})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Frag jetzt!"})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Quellen"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Erzeugen von Quellen I"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    // Collection.stream(); // interface\n    // &rarr; Klassen die Collection implementieren:\n    ArrayList&lt;Student&gt; students = new ArrayList&lt;&gt;();\n    students.stream();\n    \n    HashMap&lt;String, Student&gt; map = new HashMap&lt;&gt;();\n    map.keySet().stream();\n    map.entrySet().stream();\n    map.values().stream();\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Erzeugen von Quellen II"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    // Array in ein Stream konvertieren:\n    // Arrays.stream(T[])\n    Stream&lt;Integer&gt; num1 = Arrays.stream({ 1, 2, 3, 4 });\n    \n    int[] numArray = { 1, 2, 3, 4 };\n    Stream&lt;Integer&gt; num2 = Arrays.stream(numArray);\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Erzeugen von Quellen III"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    // Gleichartige Werte in ein Stream kovertieren:\n    // Stream.of(T...);\n    Stream&lt;Integer&gt; num1 = Stream.of(1, 2, 3, 4);\n  }\n}\n"}})})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Frag jetzt!"})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Intermediate Operations"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Intermediate Operations"}),(0,l.jsx)("p",{children:"sind Methoden eines Streams, die als R\xfcckgabewert einen Stream zur\xfcckgeben."}),(0,l.jsx)(r.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/Stream.html",children:"Stream Klasse"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"filter - Methode"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; filter(Predicate&lt;? super T&gt; predicate)"}})}),(0,l.jsxs)("p",{className:"fragment",children:["Der Parameter predicate muss das"," ",(0,l.jsx)(r.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/function/Predicate.html",children:"Predicate Interface"})," ","implementieren."]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"filter - Verwendung"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 3);\n      // nur 4 bleibt \xfcbrig\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"map - Methode"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"&lt;R&gt; Stream&lt;R&gt; map(Function&lt;? super T,? extends R&gt; mapper)"}})}),(0,l.jsxs)("p",{className:"fragment",children:["Der Parameter mapper muss das"," ",(0,l.jsx)(r.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/function/Function.html",children:"Function Interface"})," ","implementieren."]}),(0,l.jsx)("p",{className:"fragment",children:"Die Eingabe vom Typ T definiert der vorherige Stream. Der R\xfcckgabetyp des mapper Parameters definiert den R\xfcckgabetyp des Streams."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"map - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .map(number -> number * 2);\n    // R\xfcckgabetyp: Stream&lt;Integer&gt;\n    Stream.of(1, 2, 3, 4)\n      .map(number -> String.valueOf(number));\n    // R\xfcckgabetyp: Stream&lt;String&gt;\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"limit - Methode"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; limit(long maxSize)"}})}),(0,l.jsx)("p",{className:"fragment",children:'Es werden maximal "maxSize" Elemente des vorherigen Streams weitergegeben.'})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"limit - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .limit(2);\n      // nur 1 & 2 werden weitergegeben\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"skip - Methode"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; skip(long n)"}})}),(0,l.jsx)("p",{className:"fragment",children:"Es werden n-Elemente \xfcbersprungen."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"skip - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .skip(2);\n      // nur 3 & 4 werden weitergegeben\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"sorted - Methode"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; sorted(Comparator&lt;? super T&gt; comparator)"}})}),(0,l.jsxs)("p",{className:"fragment",children:["Der Parameter comparator muss das"," ",(0,l.jsx)(r.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html",children:"Comparator Interface"})," ","implementieren."]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"sorted - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(4, 3, 2, 1)\n      .sorted((n1, n2) -> Integer.compare(n1, n2));\n      // 1, 2, 3, 4\n      // Sagt Bye Bye zu Collections.sort()\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"distinct - Methode"}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Stream&lt;T&gt; distinct()"}})}),(0,l.jsx)("p",{className:"fragment",children:"Es werden nur einzigartige Werte im Stream beibehalten. Diese werden Mithilfe von .equals identifiziert."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"distinct - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 1, 4)\n      .distinct();\n      // nur 1, 2 & 4 werden weitergegeben\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Review von Stream Api Examples"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Student Example ohne Auslagerung"}),(0,l.jsx)("li",{className:"fragment",children:"Number Example Limit und Reihenfolge"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Von Stream zu Stream"}),(0,l.jsx)("p",{children:"Intermediate Operations werden auf einem Stream aufgerufen und geben immer einen Stream zur\xfcck."})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Frag jetzt!"})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Terminal Operations"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Terminal Operations"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Matching und Suchen"}),(0,l.jsx)("li",{className:"fragment",children:"Transformationen"}),(0,l.jsx)("li",{className:"fragment",children:"Statistik"}),(0,l.jsx)("li",{className:"fragment",children:"Verarbeitung"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Matching"}),(0,l.jsx)("p",{children:"Mit Matching kann abgefragt werden ob bestimmte Elemente einer Bedingung entsprechen."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Matching - Methoden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"boolean  allMatch(Predicate&lt;T&gt; predicate) // alle\nboolean noneMatch(Predicate&lt;T&gt; predicate) // keiner\nboolean  anyMatch(Predicate&lt;T&gt; predicate) // mindestens einer\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Matching - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .allMatch(number -> number > 3); // false\n    \n    Stream.of(1, 2, 3, 4)\n      .noneMatch(number -> number > 4); // true\n    \n    Stream.of(1, 2, 3, 4)\n      .anyMatch(number -> number > 2); // true\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Suchen"}),(0,l.jsx)("p",{children:"Mit findAny und findFirst wird das erste Element in einem Stream zur\xfcckgegeben."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Suchen - Methoden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Optional&lt;T&gt; findAny() // nicht deterministisch\nOptional&lt;T&gt; findFirst() // deterministisch\n"}})}),(0,l.jsx)("p",{children:"Haupts\xe4chlich wichtig bei parallelen Streams"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Suchen - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .findAny() // 2, 3 oder 4\n    \n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .findFirst() // immer 2\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Transformationen"}),(0,l.jsx)("p",{children:"Die Ergebnismenge wird gesammelt."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Transformationen - Methoden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"List&lt;T&gt; toList()\nT[] toArray()\n\nT reduce(T identity, BinaryOperator&lt;T&gt; accumulator)\n\nR collect(Collector&lt;T,A,R&gt; collector)\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Transformationen - Verwendung I "}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    List&lt;Integer&gt; nums = Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .toList() // List&lt;Integer&gt;\n    \n    Object[] nums2 = Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .toArray() // Object[]\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Transformationen - Verwendung II "}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .reduce(0, (a, b) -> a + b);  // int *NKR\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Transformationen - Verwendung III "}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;Student&gt; students = getManyStudents()\n      .stream()\n      .collect(Collectors.toList());\n      // Collectors.toMap ist Klausurrelevant\n      // Collectors.groupingBy ist Klausurrelevant\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Demo"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:(0,l.jsx)(r.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/Collectors.html",children:"Collectors Klasse"})}),(0,l.jsx)("li",{className:"fragment",children:"Collectors.toMap"}),(0,l.jsx)("li",{className:"fragment",children:"Collectors.groupingBy"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik"}),(0,l.jsx)("p",{children:"Mit Statistik Operationen lassen sich Anzahl, Minimum, Maximum, Summe und Durchschnitt berechnen."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik - Methoden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"long count()\n\nOptional&lt;T&gt; min(Comparator&lt;T&gt;)\nOptional&lt;T&gt; max(Comparator&lt;T&gt;)\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik - Verwendung I"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .count(); // 4\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik - Verwendung II"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Optional&lt;Integer&gt; min = Stream.of(1, 2, 3, 4)\n      .min((n1, n2) -> Integer.compare(n1, n2));\n    \n    min.ifPresent(System.out::println); // 1\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik - Verwendung III"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Optional&lt;Integer&gt; max = Stream.of(1, 2, 3, 4)\n      .max((n1, n2) -> Integer.compare(n1, n2));\n    \n    max.ifPresent(System.out::println); // 4\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik Streams Erzeugen"}),(0,l.jsx)("p",{children:"F\xfcr die Methoden Durchschnitt und Summe werden spezifische Streams ben\xf6tigt:"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"IntStream"}),(0,l.jsx)("li",{className:"fragment",children:"LongStream"}),(0,l.jsx)("li",{className:"fragment",children:"DoubleStream"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik Streams Erzeugen - Methoden"}),(0,l.jsx)("p",{children:"Um einen Statistik Stream zu erzeugen gibt es Intermediate Operations"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"DoubleStream mapToDouble(ToDoubleFunction&lt;T&gt; mapper)\nIntStream    mapToInt(ToIntFunction&lt;T&gt; mapper)\nLongStream   mapToLong(ToLongFunction&lt;T&gt; mapper)\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik Streams Erzeugen - Verwenden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;Student&gt; students = getManyStudents();\n    IntStream studentAges = students.stream()\n      .mapToInt(student -> student.age());\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik Streams - Methoden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"long sum()\n                           \nOptionalDouble average()\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik Streams - Verwendung I"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    IntStream manyNumbers = getManyNumbers();\n    long sum = manyNumbers.sum();\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Statistik - Verwendung II"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    IntStream manyNumbers = getManyNumbers();\n    manyNumbers.average()\n      .ifPresent(System.out::println);\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Verarbeitung"}),(0,l.jsx)("p",{children:"Mit forEach kann jedes einzelne Element nacheinander weiterverarbeitet werden."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Verarbeitung - Methoden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"void forEach(Consumer&lt;T&gt; consumer)\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Verarbeitung - Verwendung"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .forEach(System.out::println)\n \n    Stream.of(1, 2, 3, 4)\n      .filter(number -> number > 1)\n      .forEach(n -> System.out.println(n));\n  }\n}\n"}})})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Rest of the Day"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Lambda Aufgaben"}),(0,l.jsx)("li",{className:"fragment",children:"Stream API Aufgaben"})]})]})]})}}}]);