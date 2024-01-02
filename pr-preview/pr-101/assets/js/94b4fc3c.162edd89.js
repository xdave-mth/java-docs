"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5066],{29228:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var i=s(85893),r=s(11151);const a={title:"Musterklausur",description:"",sidebar_position:20,tags:[]},l=void 0,t={id:"additional-material/daniel-java2/sample-exam",title:"Musterklausur",description:"",source:"@site/docs/additional-material/daniel-java2/sample-exam.md",sourceDirName:"additional-material/daniel-java2",slug:"/additional-material/daniel-java2/sample-exam",permalink:"/java-docs/pr-preview/pr-101/additional-material/daniel-java2/sample-exam",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/daniel-java2/sample-exam.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Musterklausur",description:"",sidebar_position:20,tags:[]},sidebar:"additionalMaterialSidebar",previous:{title:"Daniel (Programmierung 2)",permalink:"/java-docs/pr-preview/pr-101/additional-material/daniel-java2/"},next:{title:"Cheatsheet",permalink:"/java-docs/pr-preview/pr-101/additional-material/daniel-java2/cheatsheet"}},u={},d=[{value:"Hinweise zur Klausur",id:"hinweise-zur-klausur",level:2},{value:"Aufgabe 1 (14 Punkte)",id:"aufgabe-1-14-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm",level:3},{value:"Hinweise zur Klasse <em>SuperLeagueTest</em>",id:"hinweise-zur-klasse-superleaguetest",level:3},{value:"Hinweis zur Klasse <em>SuperLeague</em>",id:"hinweis-zur-klasse-superleague",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:3},{value:"Aufgabe 2 (16 Punkte)",id:"aufgabe-2-16-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm-1",level:3},{value:"Hinweise zur Klasse <em>SuperLeague</em>",id:"hinweise-zur-klasse-superleague",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung-1",level:3},{value:"Aufgabe 3 (22 Punkte)",id:"aufgabe-3-22-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm-2",level:3},{value:"Hinweise zur Klasse <em>SingleQueries</em>",id:"hinweise-zur-klasse-singlequeries",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung-2",level:3}];function o(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"hinweise-zur-klausur",children:"Hinweise zur Klausur"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Die in dieser Klausur verwendeten Personenbezeichnungen beziehen sich \u2013 sofern\nnicht anders kenntlich gemacht \u2013 auf alle Geschlechter"}),"\n",(0,i.jsx)(n.li,{children:"Es kann davon ausgegangen werden, dass s\xe4mtliche Klassen entsprechende\nImplementierungen der Object-Methoden besitzen"}),"\n",(0,i.jsxs)(n.li,{children:["Der Stereotyp ",(0,i.jsx)(n.code,{children:"<<record>>"})," impliziert, dass die Datenklasse einen\nentsprechenden Konstruktor, Getter zu allen Attributen sowie entsprechende\nImplementierungen der Object-Methoden besitzt"]}),"\n",(0,i.jsxs)(n.li,{children:["Der Stereotyp ",(0,i.jsx)(n.code,{children:"<<enumeration>>"})," impliziert, dass die Aufz\xe4hlung einen\npassenden, privaten Konstruktor sowie gegebenenfalls passende Getter f\xfcr alle\nAttribute besitzt"]}),"\n",(0,i.jsx)(n.li,{children:"Pakete und Klassenimporte m\xfcssen nicht angegeben werden"}),"\n",(0,i.jsxs)(n.li,{children:["F\xfcr die Konsolenausgabe kann das K\xfcrzel ",(0,i.jsx)(n.em,{children:"sysout"})," verwendet werden"]}),"\n",(0,i.jsxs)(n.li,{children:["Methoden- und Attributsbezeichner d\xfcrfen sinnvoll gek\xfcrzt geschrieben werden\n(Beispiel ",(0,i.jsx)(n.em,{children:"testGMPSH()"})," statt ",(0,i.jsx)(n.em,{children:"testGetMostPowerfulSuperHuman()"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"aufgabe-1-14-punkte",children:"Aufgabe 1 (14 Punkte)"}),"\n",(0,i.jsxs)(n.p,{children:["Erstelle die JUnit-5-Testklasse ",(0,i.jsx)(n.code,{children:"SuperLeagueTest"})," anhand des abgebildeten\nKlassendiagramms."]}),"\n",(0,i.jsx)(n.h3,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    SuperHuman <|-- Villain\n    SuperHuman <|-- Hero\n    SuperHuman o-- Universe\n    SuperLeague~T extends SuperHuman~ o-- Universe\n    SuperLeagueTest o-- Hero\n    SuperLeagueTest o-- SuperLeague\n\n    class SuperHuman {\n        <<abstract>>\n        -name: String &#123final&#125\n        -universe: Universe &#123final&#125\n        -power: int &#123final&#125\n        +SuperHuman(name: String, universe: Universe, power: int)\n        +name() String\n        +universe() Universe\n        +power() int\n    }\n\n    class Villain {\n        +Villain(name: String, universe: Universe, power: int)\n    }\n\n    class Hero {\n        +Hero(name: String, universe: Universe, power: int)\n    }\n\n    class Universe {\n        <<enumeration>>\n        MARVEL\n        DC\n    }\n\n    class SuperLeague~T extends SuperHuman~ {\n        <<record>>\n        name: String\n        universe: Universe\n        members: Map~T, Boolean~\n        +addSuperHuman(t: T) void\n        +getMostPowerfulSuperHuman() Optional~T~\n        +getAllAvailableSuperHumans() List~T~\n        +sendSuperHumanOnMission(t: T) void\n    }\n\n    class SuperLeagueTest {\n        -avengers: SuperLeague~Hero~\n        -superman: Hero\n        -ironman: Hero\n        -spiderman: Hero\n        +setUp() void\n        +testAddSuperHuman() void\n        +testGetAllAvailableSuperHumans() void\n        +testGetMostPowerfulSuperHuman() void\n    }"}),"\n",(0,i.jsxs)(n.h3,{id:"hinweise-zur-klasse-superleaguetest",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"SuperLeagueTest"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Lebenszyklus-Methode ",(0,i.jsx)(n.code,{children:"void setUp()"})," soll das nachfolgende Testszenario\naufbauen:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Es sollen die Superhelden Superman (DC, St\xe4rke 10), Iron Man (MARVEL, 7) und\nSpider-Man (MARVEL, 8) erstellt und den entsprechenden Attributen zugewiesen\nwerden"}),"\n",(0,i.jsxs)(n.li,{children:["Es soll eine MARVEL-Superheldenliga mit dem Namen ",(0,i.jsx)(n.em,{children:"Avengers"})," erstellt und\ndem entsprechenden Attribut zugewiesen werden"]}),"\n",(0,i.jsx)(n.li,{children:"Die Superhelden Iron Man und Spider-Man sollen den Avengers als verf\xfcgbaren\nSuperhelden hinzugef\xfcgt werden"}),"\n",(0,i.jsx)(n.li,{children:"Der Superheld mit dem Namen Spider-Man soll auf eine Mission geschickt\nwerden"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Testmethode ",(0,i.jsx)(n.code,{children:"void testAddSuperHuman()"})," soll pr\xfcfen, ob beim Aufruf der\nMethode ",(0,i.jsx)(n.code,{children:"void addSuperHuman(t: T)"})," auf das Attribut ",(0,i.jsx)(n.code,{children:"avengers"})," mit dem Wert\n",(0,i.jsx)(n.code,{children:"superman"})," die Ausnahme ",(0,i.jsx)(n.code,{children:"WrongUniverseException"})," ausgel\xf6st wird"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Testmethode ",(0,i.jsx)(n.code,{children:"void testGetAllAvailableSuperHumans()"})," soll pr\xfcfen, ob beim\nAufruf der Methode ",(0,i.jsx)(n.code,{children:"List<T> getAllAvailableSuperHumans()"})," auf das Attribut\n",(0,i.jsx)(n.code,{children:"avengers"})," eine Liste der Gr\xf6\xdfe 1 zur\xfcckgegeben wird"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Testmethode ",(0,i.jsx)(n.code,{children:"void testGetMostPowerfulSuperHuman()"})," soll pr\xfcfen, ob beim\nAufruf der Methode ",(0,i.jsx)(n.code,{children:"Optional<T> getMostPowerfulSuperHuman()"})," auf das Attribut\n",(0,i.jsx)(n.code,{children:"avengers"})," der Superheld Spider-Man als Optional zur\xfcckgegeben wird"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"hinweis-zur-klasse-superleague",children:["Hinweis zur Klasse ",(0,i.jsx)(n.em,{children:"SuperLeague"})]}),"\n",(0,i.jsxs)(n.p,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void addSuperHuman(t: T)"})," kann die Ausnahme\n",(0,i.jsx)(n.code,{children:"WrongUniverseException"})," ausl\xf6sen."]}),"\n",(0,i.jsx)(n.h3,{id:"musterl\xf6sung",children:"Musterl\xf6sung"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="SuperLeagueTest.java" showLineNumbers',children:'public class SuperLeagueTest { // 0,5\n\n  private SuperLeague<Hero> avengers; // 0,25\n  private Hero superman; // 0,25\n  private Hero ironman; // 0,25\n  private Hero spiderman; // 0,25\n\n  @BeforeEach // 0,25\n  void setUp() throws WrongUniverseException { // 0,75\n    superman = new Hero("Superman", Universe.DC, 10); // 1\n    ironman = new Hero("Iron Man", Universe.MARVEL, 7); // 1\n    spiderman = new Hero("Spider-Man", Universe.MARVEL, 8); // 1\n    avengers = new SuperLeague<>("Avengers", Universe.MARVEL, new HashMap<>()); // 1\n    avengers.addSuperHuman(ironman); // 1\n    avengers.addSuperHuman(spiderman); // 1\n    avengers.sendSuperHumanOnMission(spiderman); // 0,5\n  }\n\n  @Test // 0,25\n  void testAddSuperHuman() { // 0,25\n    assertThrows(WrongUniverseException.class, () -> avengers.addSuperHuman(superman)); // 1\n  }\n\n  @Test // 0,25\n  void testGetAllAvailableSuperHumans() { // 0,25\n    assertEquals(1, avengers.getAllAvailableSuperHumans().size()); // 1\n  }\n\n  @Test // 0,25\n  void testGetMostPowerfulSuperHuman() { // 0,25\n    assertEquals(spiderman, avengers.getMostPowerfulSuperHuman().get()); // 1,5\n  }\n\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"aufgabe-2-16-punkte",children:"Aufgabe 2 (16 Punkte)"}),"\n",(0,i.jsxs)(n.p,{children:["Erstelle die Klasse ",(0,i.jsx)(n.code,{children:"SuperLeague<T extends SuperHuman>"})," anhand des abgebildeten\nKlassendiagrams."]}),"\n",(0,i.jsx)(n.h3,{id:"klassendiagramm-1",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    SuperHuman <|-- Villain\n    SuperHuman <|-- Hero\n    SuperHuman o-- Universe\n    SuperLeague~T extends SuperHuman~ o-- Universe\n\n    class SuperHuman {\n        <<abstract>>\n        -name: String &#123final&#125\n        -universe: Universe &#123final&#125\n        -power: int &#123final&#125\n        +SuperHuman(name: String, universe: Universe, power: int)\n        +name() String\n        +universe() Universe\n        +power() int\n    }\n\n    class Villain {\n        +Villain(name: String, universe: Universe, power: int)\n    }\n\n    class Hero {\n        +Hero(name: String, universe: Universe, power: int)\n    }\n\n    class Universe {\n        <<enumeration>>\n        MARVEL\n        DC\n    }\n\n    class SuperLeague~T extends SuperHuman~ {\n        <<record>>\n        name: String\n        universe: Universe\n        members: Map~T, Boolean~\n        +addSuperHuman(t: T) void\n        +getMostPowerfulSuperHuman() Optional~T~\n        +getAllAvailableSuperHumans() List~T~\n        +sendSuperHumanOnMission(t: T) void\n    }"}),"\n",(0,i.jsxs)(n.h3,{id:"hinweise-zur-klasse-superleague",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"SuperLeague"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Der Assoziativspeicher ",(0,i.jsx)(n.code,{children:"members"})," beinhaltet als Schl\xfcssel alle \xdcbermenschen\nder Liga sowie als Wert deren Verf\xfcgbarkeit (verf\xfcgbar: ",(0,i.jsx)(n.code,{children:"true"}),", nicht\nverf\xfcgbar: ",(0,i.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"Optional<T> getMostPowerfulSuperHuman()"})," soll den st\xe4rksten\n\xdcbermenschen der Liga als Optional zur\xfcckgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void addSuperHuman(t: T)"})," soll der Liga den eingehenden\n\xdcbermenschen als verf\xfcgbares Mitglied hinzuf\xfcgen. F\xfcr den Fall, dass das\nUniversum des eingehenden \xdcbermenschen nicht dem Universum der Liga\nentspricht, soll die Ausnahme ",(0,i.jsx)(n.code,{children:"WrongUniverseException"})," ausgel\xf6st werden"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"List<T> getAllAvailableSuperHumans()"})," soll alle verf\xfcgbaren\n\xdcbermenschen der Liga als Liste zur\xfcckgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void sendSuperHumanOnMission(t: T)"})," soll die Verf\xfcgbarkeit des\neingehenden \xdcbermenschen auf nicht verf\xfcgbar setzen"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"musterl\xf6sung-1",children:"Musterl\xf6sung"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="SuperLeage.java" showLineNumbers',children:"public record SuperLeague<T extends SuperHuman>\n  (String name, Universe universe, Map<T, Boolean> members) { // 1\n\n  public Optional<T> getMostPowerfulSuperHuman() { // 0,5\n    T mostPowerfulSuperHuman = null; // 0,5\n    int power = 0; // 0,5\n    for (T t : members.keySet()) { // 1\n      if (t.power() > power) { // 0,5\n        power = t.power(); // 0,5\n        mostPowerfulSuperHuman = t; // 0,5\n      }\n    }\n    return Optional.ofNullable(mostPowerfulSuperHuman); // 1\n  }\n\n  public void addSuperHuman(T t) throws WrongUniverseException { // 1\n    if (!t.universe().equals(universe)) { // 1\n      throw new WrongUniverseException(); // 1\n    }\n\n    members.put(t, true); // 1\n  }\n\n  public List<T> getAllAvailableSuperHumans() { // 0,5\n    List<T> allAvailableSuperHumans = new ArrayList<>(); // 0,5\n    for (Entry<T, Boolean> entry : members.entrySet()) { // 1\n      if (entry.getValue().equals(true)) { // 1\n        allAvailableSuperHumans.add(entry.getKey()); // 1\n      }\n    }\n    return allAvailableSuperHumans; // 0,5\n  }\n\n  public void sendSuperHumanOnMission(T t) { // 0,5\n    members.put(t, false); // 1\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"aufgabe-3-22-punkte",children:"Aufgabe 3 (22 Punkte)"}),"\n",(0,i.jsxs)(n.p,{children:["Erstelle die Klasse ",(0,i.jsx)(n.code,{children:"SingleQueries"})," anhand des abgebildeten Klassendiagramms."]}),"\n",(0,i.jsx)(n.h3,{id:"klassendiagramm-2",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    Single o-- Artist\n    Artist o-- Country\n    SingleQueries o-- Single\n\n    class Single {\n        <<record>>\n        name: String\n        artist: Artist\n        salesInMillions: int\n        publishingYear: String\n    }\n\n    class Artist {\n        <<record>>\n        name: String\n        country: Country\n        birthdate: LocalDate\n        isAlive: boolean\n    }\n\n    class Country {\n        <<enumeration>>\n        BRB\n        CHN\n        FRA\n        GBR\n        ITA\n        PRI\n        USA\n    }\n\n    class SingleQueries {\n        <<record>>\n        singles: List~Single~\n        +printAllSinglesWithMoreThan25MillionSalesPerCountry() void\n        +printAverageBirthYearOfAllDeceasedArtists() void\n        +isAnySingleFromChinaWithMoreThan10MillionSales() boolean\n        +getTop3SinglesOfThisCenturyBySalesInMillions() List~String~\n        +getAllSinglesFromEdSheeran() List~Single~\n    }"}),"\n",(0,i.jsxs)(n.h3,{id:"hinweise-zur-klasse-singlequeries",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"SingleQueries"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void printAllSinglesWithMoreThan25MillionSalesPerCountry()"})," soll\nalle Singles, die sich mehr als 25 Millionen mal verkauft haben, gruppiert\nnach dem Land in der Form ",(0,i.jsx)(n.em,{children:"Artist.country: [Single, Single,...]"})," ausgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void printAverageBirthYearOfAllDeceasedArtists()"})," soll das\ndurchschnittliche Geburtsjahr aller verstorbenen K\xfcnstler bzw. aller\nverstorbenen K\xfcnstlerinnen ausgeben. F\xfcr den Fall, dass es keinen verstorbenen\nK\xfcnstler bzw. keine verstorbene K\xfcnstlerin gibt, soll der Wert -1 ausgegeben\nwerden"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"boolean isAnySingleFromChinaWithMoreThan10MillionSales()"})," soll\nzur\xfcckgeben, ob es eine Single eines K\xfcnstlers bzw. einer K\xfcnstlerin aus China\ngibt, welches sich mehr als 10 Millionen Mal verkauft hat"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"List<String> getTop3SinglesOfThisCenturyBySalesInMillions()"})," soll\ndie 3 am h\xe4ufigsten verkauften Singles des jetzigen Jahrtausends sortiert nach\nder Anzahl Verk\xe4ufe in Millionen in der Form ",(0,i.jsx)(n.em,{children:"Single.name: Artist.name,\nSingle.salesInMillions Millionen"})," zur\xfcckgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"List<Single> getAllSinglesFromEdSheeran()"})," soll alle Singles des\nK\xfcnstlers Ed Sheeran (Land: Gro\xdfbritannien, Geburtstag: 17.02.1991, Status:\nlebendig) zur\xfcckgeben"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"musterl\xf6sung-2",children:"Musterl\xf6sung"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="SingleQueries" showLineNumbers',children:'public record SingleQueries(List<Single> singles) { // 1\n\n  public void a() { // 0,5\n    Map<Country, List<Single>> tmp = singles.stream() // 1\n      .filter(a -> a.salesInMillions() > 25) // 0,5\n      .collect(Collectors.groupingBy(a -> a.artist().country())); // 1\n\n    tmp.forEach((c, sl) -> System.out.println(c + ": " + sl); // 1\n    }\n  }\n\n  public void b() { // 0,5\n    OptionalDouble tmp = singles.stream() // 1\n      .map(a -> a.artist()) // 0,5\n      .distinct() // 0,5\n      .filter(a -> !a.isAlive()) // 0,5\n      .mapToInt(a -> a.birthdate().getYear()) // 1\n      .average(); // 0,5\n\n    tmp.ifPresentOrElse(System.out::println, () -> System.out.println(-1)); // 1\n  }\n\n  public boolean c() { // 0,5\n    return singles.stream() // 1\n      .anyMatch(a -> a.salesInMillions() > 10 // 0,5\n        && a.artist().country().equals(Country.CHN)); // 1\n  }\n\n  public List<String> d() { // 0,5\n    return singles.stream() // 1\n      .filter(a -> a.publishingYear().compareTo("2000") > 0) // 1\n      .sorted((a1, a2) -> Integer.valueOf(a2.salesInMillions()).compareTo(a1.salesInMillions())) // 1\n      .map(a -> a.name() + ": " + a.artist().name() + ", " + a.salesInMillions() + " Millionen") // 1\n      .limit(3) // 0,5\n      .toList(); // 0,5\n  }\n\n  public List<Single> e() { // 0,5\n    return singles.stream() // 1\n      .filter(a -> a.artist().equals(\n        new Artist("Ed Sheeran", Country.GBR, LocalDate.of(1991, 2, 17), true))) // 1\n      .toList(); // 0,5\n  }\n\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>l});var i=s(67294);const r={},a=i.createContext(r);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);