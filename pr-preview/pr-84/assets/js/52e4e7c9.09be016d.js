"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[332],{31427:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=n(85893),r=n(11151);const s={title:"Messdaten",description:"",tags:["records","maps","optionals","java-stream-api"]},i=void 0,c={id:"exam-exercises/exam-exercises-java2/measurement-data",title:"Messdaten",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/measurement-data.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/measurement-data",permalink:"/java-docs/pr-preview/pr-84/exam-exercises/exam-exercises-java2/measurement-data",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/measurement-data.md",tags:[{label:"records",permalink:"/java-docs/pr-preview/pr-84/tags/records"},{label:"maps",permalink:"/java-docs/pr-preview/pr-84/tags/maps"},{label:"optionals",permalink:"/java-docs/pr-preview/pr-84/tags/optionals"},{label:"java-stream-api",permalink:"/java-docs/pr-preview/pr-84/tags/java-stream-api"}],version:"current",frontMatter:{title:"Messdaten",description:"",tags:["records","maps","optionals","java-stream-api"]},sidebar:"examExercisesSidebar",previous:{title:"Bibliothek",permalink:"/java-docs/pr-preview/pr-84/exam-exercises/exam-exercises-java2/library"},next:{title:"Smartphone-Shop",permalink:"/java-docs/pr-preview/pr-84/exam-exercises/exam-exercises-java2/phone-store"}},l={},o=[{value:"Quellcode",id:"quellcode",level:2}];function d(e){const a={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Erstelle die Klasse ",(0,t.jsx)(a.code,{children:"MeasurementData"})," anhand des abgebildeten Quellcodes"]}),"\n",(0,t.jsxs)(a.li,{children:["Erstelle eine ausf\xfchrbare Klasse, welche mit Hilfe der Java Stream API\nfolgende Informationen auf der Konsole ausgibt:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"alle Messdaten aus einem bestimmtem Jahr der Kategorie F absteigend sortiert\nnach dem Prozentsatz"}),"\n",(0,t.jsx)(a.li,{children:"der Durchschnitts-Prozentsatz aller Messdaten der Kategorie X"}),"\n",(0,t.jsx)(a.li,{children:"alle Messdaten, bei denen die Temperatur im Sommer (Juni - August) bei\nmindestens 30\xb0 lag"}),"\n",(0,t.jsx)(a.li,{children:"die Antwort auf die Frage, ob es einen Messdatensatz aus Deutschland,\ndatiert nach dem 1. Januar eines bestimmten Jahres, mit einem Prozentsatz\nvon mindestens 50% gibt"}),"\n",(0,t.jsx)(a.li,{children:"die durchschnittliche Temperatur gruppiert nach L\xe4ndern"}),"\n",(0,t.jsx)(a.li,{children:"die Anzahl aller Messdaten gruppiert nach den Prozentsatzbereichen (0-10,\n10-20,\u2026)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"quellcode",children:"Quellcode"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'public record MeasurementData(String country, LocalDate date, double temperatureInC, int percentage,\n    char category) {\n\n  private final static int NUMBER_OF_ENTRIES = 100;\n  private final static int MAX_DAYS = 2000;\n  private final static int MAX_TEMPERATURE_IN_CELCIUS = 40;\n  private final static int MAX_PERCENTAGE = 101;\n  private final static List<String> COUNTRIES =\n      List.of("USA", "Brasilien", "Deutschland", "Japan", "Indien");\n  private final static List<Character> CATEGORIES = List.of(\'D\', \'X\', \'F\');\n\n  public static List<MeasurementData> getMeasurementData() {\n    List<MeasurementData> measurementData = new ArrayList<>();\n\n    Random rnd = new Random();\n    LocalDate now = LocalDate.now();\n\n    for (int i = 0; i < NUMBER_OF_ENTRIES; i++) {\n      LocalDate date = now.minusDays(rnd.nextInt(MAX_DAYS));\n      double temperatureInC = rnd.nextDouble(MAX_TEMPERATURE_IN_CELCIUS);\n      int percentage = rnd.nextInt(MAX_PERCENTAGE);\n      String country = COUNTRIES.get(rnd.nextInt(COUNTRIES.size()));\n      char category = CATEGORIES.get(rnd.nextInt(CATEGORIES.size()));\n      measurementData.add(new MeasurementData(country, date, temperatureInC, percentage, category));\n    }\n\n    return measurementData;\n  }\n\n}\n'})})]})}function m(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>c,a:()=>i});var t=n(67294);const r={},s=t.createContext(r);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);