"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3846],{30789:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var t=r(74848),i=r(28453);const d={title:"Die Java Stream API",description:"",sidebar_position:300,tags:["java-stream-api"]},a=void 0,s={id:"documentation/java-stream-api",title:"Die Java Stream API",description:"",source:"@site/docs/documentation/java-stream-api.md",sourceDirName:"documentation",slug:"/documentation/java-stream-api",permalink:"/java-docs/pr-preview/pr-164/documentation/java-stream-api",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/java-stream-api.md",tags:[{label:"java-stream-api",permalink:"/java-docs/pr-preview/pr-164/tags/java-stream-api"}],version:"current",sidebarPosition:300,frontMatter:{title:"Die Java Stream API",description:"",sidebar_position:300,tags:["java-stream-api"]},sidebar:"documentationSidebar",previous:{title:"Optionals",permalink:"/java-docs/pr-preview/pr-164/documentation/optionals"},next:{title:"Softwaretests",permalink:"/java-docs/pr-preview/pr-164/documentation/tests"}},l={},c=[{value:"Erzeugen von Str\xf6men",id:"erzeugen-von-str\xf6men",level:2},{value:"Intermedi\xe4re Operationen",id:"intermedi\xe4re-operationen",level:2},{value:"Terminale Operationen",id:"terminale-operationen",level:2},{value:"Bedarfsauswertung (Lazy Evaluation)",id:"bedarfsauswertung-lazy-evaluation",level:2},{value:"Unendliche Str\xf6me",id:"unendliche-str\xf6me",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Die Java Stream API stellt Klassen zum Erzeugen von und Arbeiten mit Str\xf6men\n(Streams) bereit. Ein Strom stellt eine Folge von Elementen dar, die das\nAusf\xfchren verketteter, intermedi\xe4rer und terminaler Operationen auf diesen\nElementen nacheinander oder parallel erm\xf6glicht. Die Daten, die durch die\nElemente des Stromes repr\xe4sentiert werden, werden dabei durch den Strom selbst\nnicht ver\xe4ndert. Die Verarbeitung der Elemente erfolgt nach dem Prinzip der\nBedarfsauswertung (Lazy Evaluation). Neben endlichen Str\xf6men stellt die Java\nStream API auch Methoden zum Erzeugen unendlicher Str\xf6me bereit."}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart TD\n    Strom1 --\x3e|Filtern| Strom2\n    Strom2 --\x3e|Abbilden| Strom3\n    Strom3 --\x3e|Sortieren| Strom4\n\n    subgraph Strom1\n        hans[Hans, 18, m]\n        peter[Peter, 27, m]\n        lisa[Lisa, 43, w]\n        max[Max, 19, d]\n        heidi[Heidi, 19, w]\n        philipp[Philipp, 22, m]\n        maria[Maria, 17, w]\n    end\n    subgraph Strom2\n        peter2[Peter, 27, m]\n        heidi2[Heidi, 19, w]\n        maria2[Maria, 17, w]\n    end\n    subgraph Strom3\n        peter3[PETER]\n        heidi3[HEIDI]\n        maria3[MARIA]\n    end\n    subgraph Strom4\n        heidi4[HEIDI]\n        maria4[MARIA]\n        peter4[PETER]\n    end"}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsxs)(n.p,{children:["Str\xf6me (Paket ",(0,t.jsx)(n.code,{children:"java.util.stream"}),") haben nichts mit\n",(0,t.jsx)(n.a,{href:"io-streams",children:"Datenstr\xf6men (IO-Streams)"})," (Paket ",(0,t.jsx)(n.code,{children:"java.io"}),") zu tun."]})}),"\n",(0,t.jsx)(n.h2,{id:"erzeugen-von-str\xf6men",children:"Erzeugen von Str\xf6men"}),"\n",(0,t.jsx)(n.p,{children:"Str\xf6me k\xf6nnen unter anderem aus Feldern, Datensammlungen wie z.B. Listen und\nMengen sowie Einzelobjekten erzeugt werden."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    int[] array = {4, 8, 15, 16, 23, 42};\n    IntStream integerStream = Arrays.stream(array);\n\n    List<Integer> list = List.of(4, 8, 15, 16, 23, 42);\n    Stream<Integer> integerStream2 = list.stream();\n\n    Stream<Integer> integerStream3 = Stream.of(4, 8, 15, 16, 23, 42);\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsxs)(n.p,{children:["Die Zahlenfolge 4-8-15-16-23-42 spielt eine gro\xdfe Rolle in der Fernsehserie\n",(0,t.jsx)(n.em,{children:"Lost"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:['Im Gegensatz zu "normalen" Str\xf6men besitzen Objekte der Klassen ',(0,t.jsx)(n.code,{children:"IntStreams"}),",\n",(0,t.jsx)(n.code,{children:"DoubleStreams"})," und ",(0,t.jsx)(n.code,{children:"LongStreams"})," Methoden zur Weiterverarbeitung ihrer\nprimitiver Werte."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    int[] array = {4, 8, 15, 16, 23, 42};\n    IntStream integerStream = Arrays.stream(array);\n    int sum = integerStream.sum();\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"intermedi\xe4re-operationen",children:"Intermedi\xe4re Operationen"}),"\n",(0,t.jsx)(n.p,{children:"Intermedi\xe4re Operationen erm\xf6glichen unter anderem das Filtern, Abbilden sowie\ndas Sortieren von Str\xf6men und liefern als Ergebnis wiederum einen Strom."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operation"}),(0,t.jsx)(n.th,{children:"Methode"}),(0,t.jsx)(n.th,{children:"Schnittstellen-Methode"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Filtern"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Stream<T> filter(predicate: Predicate<T>)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean test(t: T)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Abbilden"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Stream<T> map(mapper: Function<T, R>)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"R apply(t: T)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Abbilden"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DoubleStream mapToDouble(mapper: ToDoubleFunction<T, R>)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"double applyAsDouble(value: T)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Abbilden"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"IntStream mapToInt(mapper: ToIntFunction<T, R>)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int applyAsInt(vaue: T)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Abbilden"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"LongStream mapToLong(mapper: ToLongFunction<T, R>)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"long applyAsLong(value: T)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sp\xe4hen"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Stream<T> peek(consumer: Consumer<T>)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"void accept(t: T)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sortieren"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Stream<T> sorted(comparator: Comparator<T>)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int compare(o1: T, o2: T)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Unterscheiden"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Stream<T> distinct()"})}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Begrenzen"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Stream<T> limit(maxSize: long)"})}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xdcberspringen"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Stream<T> skip(n: long)"})}),(0,t.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"terminale-operationen",children:"Terminale Operationen"}),"\n",(0,t.jsx)(n.p,{children:"Terminale Operationen werden z.B. zum Pr\xfcfen, zum Aggregieren oder zum Sammeln\nverwendet. Da terminale Operationen den Strom schlie\xdfen, k\xf6nnen auf ihnen keine\nweiteren Operationen mehr ausgef\xfchrt werden."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operation"}),(0,t.jsx)(n.th,{children:"Methode"}),(0,t.jsx)(n.th,{children:"Schnittstellen-Methode"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Finden"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Optional<T> findAny()"})}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Finden"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Optional<T> findFirst()"})}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pr\xfcfen"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean allMatch(predicate: Predicate<T>)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean test(t: T)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pr\xfcfen"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean anyMatch(predicate: Predicate<T>)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean test(t: T)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pr\xfcfen"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean noneMatch(predicate: Predicate<T>)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean test(t: T)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Aggregieren"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Optional<T> min(comparator: Comparator<T>)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int compare(o1: T, o2: T)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Aggregieren"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Optional<T> max(comparator: Comparator<T>)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int compare(o1: T, o2: T)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Aggregieren"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"long count()"})}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sammeln"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"R collect(collector: Collector<T, A, R>)"})}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Ausf\xfchren"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"void forEach(action: Consumer<T>)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"void accept(t: T)"})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Zahlenstr\xf6me (",(0,t.jsx)(n.code,{children:"IntStream"}),", ",(0,t.jsx)(n.code,{children:"DoubleStream"}),", ",(0,t.jsx)(n.code,{children:"LongStream"}),") besitzen die\nzus\xe4tzlichen terminale Operationen ",(0,t.jsx)(n.code,{children:"int|double|long sum()"})," und\n",(0,t.jsx)(n.code,{children:"OptionalDouble average()"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"bedarfsauswertung-lazy-evaluation",children:"Bedarfsauswertung (Lazy Evaluation)"}),"\n",(0,t.jsx)(n.p,{children:"Die Elemente in Str\xf6men werden nur bei Bedarf ausgewertet. Intermedi\xe4re\nOperationen werden also nur dann ausgef\xfchrt, wenn eine terminale Operation\nvorhanden ist und bei verketteten Operationen werden f\xfcr jedes Element die\neinzelnen Operationen nacheinander ausgef\xfchrt."}),"\n",(0,t.jsxs)(n.p,{children:["In der main-Methode der Startklasse wird auf den Zahlenstrom 4-8-15-16-23-42\nzun\xe4chst der Filter ",(0,t.jsx)(n.em,{children:"Zahl > 15"})," angewendet, anschlie\xdfend der Filter ",(0,t.jsx)(n.em,{children:"Zahl =\nganze Zahl"})," und abschlie\xdfend werden die verbliebenen Zahlen auf der Konsole\nausgegeben. Zum Nachvollziehen werden die Zahlen auch bei den beiden Filtern auf\nder Konsole ausgegeben."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    Stream.of(4, 8, 15, 16, 23, 42).filter(i -> {\n      System.out.println(i + ": filter 1");\n      return i % 2 == 0;\n    }).filter(i -> {\n      System.out.println(i + ": filter 2");\n      return i > 15;\n    }).forEach(i -> System.out.println(i + ": forEach"));\n  }\n\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Ohne Bedarfsauswertung w\xfcrden die verschiedenen Operationen f\xfcr die jeweils\nverbliebenen Elemente ausgef\xfchrt nacheinander werden. Die Ausgabe s\xe4he wie folgt\naus:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:" 4: filter 1\n 8: filter 1\n 15: filter 1\n 16: filter 1\n 23: filter 1\n 42: filter 1\n 4: filter 2\n 8: filter 2\n 16: filter 2\n 42: filter 2\n 16: forEach\n 42: forEach\n"})}),"\n",(0,t.jsx)(n.p,{children:"Aufgrund der Bedarfsauswertung werden die verschiedenen Operationen aber f\xfcr\njedes Element einzeln nacheinander ausgef\xfchrt. Dadurch ergibt sich folgende\nAusgabe:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"4: filter 1\n4: filter 2\n8: filter 1\n8: filter 2\n15: filter 1\n16: filter 1\n16: filter 2\n16: forEach\n23: filter 1\n42: filter 1\n42: filter 2\n42: forEach\n"})}),"\n",(0,t.jsx)(n.h2,{id:"unendliche-str\xf6me",children:"Unendliche Str\xf6me"}),"\n",(0,t.jsx)(n.p,{children:"Die Java Stream API stellt drei Methoden zur Verf\xfcgung, mit deren Hilfe\n(un)endliche Str\xf6me erzeugt werden k\xf6nnen:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"Stream<T> iterate(seed: T, f: UnaryOperator<T>)"})," generiert einen\nunendlichen Strom aus einem Startwert und einer Funktion, welche das n\xe4chste\nElement erstellt"]}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode\n",(0,t.jsx)(n.code,{children:"Stream<T> iterate(seed: T, hasNext: Predicat <T>, next: UnaryOperator<T>)"}),'\nerweitert die "normale" iterate-Methode um eine Pr\xe4dikatsfunktion zum Beenden\ndes Stroms']}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"Stream<T> generate(s: Supplier<T>)"})," kann zum Beispiel zum\nErzeugen unendlich vieler zuf\xe4lliger Elemente genutzt werden"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In der main-Methode der Startklasse werden drei (un)endliche Zahlenstr\xf6me\nerzeugt."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Stream.iterate(0, i -> ++i).limit(100).forEach(System.out::println);\n    Stream.iterate(0, i -> i < 100, i -> ++i).forEach(System.out::println);\n    Stream.generate(() -> new Random().nextInt(100)).limit(100).forEach(System.out::println);\n  }\n\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Die ersten beiden Zahlenstr\xf6me geben die Zahlen von 0 bis 99 aus, der dritte\nZahlenstrom 100 Pseudozufallszahlen von 0 bis 99. Der erste und dritte\nZahlenstrom w\xfcrden eigentlich unendliche viele (Pseudozufalls-)Zahlen erzeugen,\nwerden aber durch die Methode ",(0,t.jsx)(n.code,{children:"Stream<T> limit(maxSize: long)"})," auf 100\n(Pseudozufalls-)Zahlen begrenzt."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(96540);const i={},d=t.createContext(i);function a(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);