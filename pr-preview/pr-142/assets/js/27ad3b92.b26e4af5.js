"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8125],{19494:(e,d,c)=>{c.r(d),c.d(d,{assets:()=>t,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>l,toc:()=>j});var s=c(85893),r=c(11151);const n={title:"Cheatsheet Java 2",description:"",sidebar_position:40,tags:[]},i=void 0,l={id:"additional-material/daniel/cheatsheet-java2",title:"Cheatsheet Java 2",description:"",source:"@site/docs/additional-material/daniel/cheatsheet-java2.md",sourceDirName:"additional-material/daniel",slug:"/additional-material/daniel/cheatsheet-java2",permalink:"/java-docs/pr-preview/pr-142/additional-material/daniel/cheatsheet-java2",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/daniel/cheatsheet-java2.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Cheatsheet Java 2",description:"",sidebar_position:40,tags:[]},sidebar:"additionalMaterialSidebar",previous:{title:"Cheatsheet Java 1",permalink:"/java-docs/pr-preview/pr-142/additional-material/daniel/cheatsheet-java1"},next:{title:"Klausurergebnisse Java 1",permalink:"/java-docs/pr-preview/pr-142/additional-material/daniel/exam-results-java1"}},t={},j=[{value:"Java API",id:"java-api",level:2},{value:"Java Collections Framework",id:"java-collections-framework",level:2},{value:"Funktionale Schnittstellen",id:"funktionale-schnittstellen",level:2},{value:"Java Stream API",id:"java-stream-api",level:2},{value:"JUnit 5",id:"junit-5",level:2}];function h(e){const d={code:"code",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h2,{id:"java-api",children:"Java API"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Klasse"}),(0,s.jsx)(d.th,{children:"Methode"}),(0,s.jsx)(d.th,{children:"Statisch"}),(0,s.jsx)(d.th,{children:"R\xfcckgabetyp"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Aufz\xe4hlung"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"valueOf(arg0: String)"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"Aufz\xe4hlung"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Aufz\xe4hlung"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"values()"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"Aufz\xe4hlung[]"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Boolean"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"valueOf(s: String)"}),", ",(0,s.jsx)(d.code,{children:"valueOf(b: boolean)"})]}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Boolean"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Double"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"valueOf(s: String)"}),", ",(0,s.jsx)(d.code,{children:"valueOf(d: double)"})]}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Double"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Integer"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"valueOf(s: String)"}),", ",(0,s.jsx)(d.code,{children:"valueOf(i: int)"})]}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Integer"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"LocalDate"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"getDayOfMonth()"}),", ",(0,s.jsx)(d.code,{children:"getDayOfYear()"}),", ",(0,s.jsx)(d.code,{children:"getMonthValue()"}),", ",(0,s.jsx)(d.code,{children:"getYear()"})]}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"LocalDate"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"now()"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"LocalDate"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"LocalDate"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"of(year: int, month: int, dayOfMonth: int)"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"LocalDate"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"LocalTime"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"getHour()"}),", ",(0,s.jsx)(d.code,{children:"getMinute()"}),", ",(0,s.jsx)(d.code,{children:"getSecond()"})]}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"LocalTime"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"now()"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"LocalTime"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"LocalTime"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"of(hour: int, minute: int, second: int)"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"LocalTime"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Object"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"equals(object: Object)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Object"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"hashCode()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Object"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"toString()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"String"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Optional<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"empty()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Optional<T>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Optional<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"get()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"T"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Optional<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ifPresent(action: Consumer<T>)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Optional<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ifPresentOrElse(action: Consumer<T>, emptyAction: Runnable)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Optional<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"isPresent()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Optional<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"of(t: T), ofNullable(t: T)"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Optional<T>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Optional<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"orElse(other: T)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"T"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"OptionalDouble"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"empty()"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"OptionalDouble"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"OptionalDouble"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"getAsDouble()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"double"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"OptionalDouble"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ifPresent(action: DoubleConsumer)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"OptionalDouble"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ifPresentOrElse(action: DoubleConsumer, emptyAction: Runnable)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"OptionalDouble"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"isPresent()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"OptionalDouble"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"of(value: double)"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"OptionalDouble"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"OptionalDouble"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"orElse(other: double)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"double"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"PrintStream"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"print(obj: Object)"}),", ",(0,s.jsx)(d.code,{children:"println()"}),", ",(0,s.jsx)(d.code,{children:"println(x: Object)"})]}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Random"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"nextInt(bound: int)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Scanner"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"hasNextLine()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Scanner"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"next()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"String"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Scanner"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"nextBoolean()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Scanner"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"nextDouble()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"double"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Scanner"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"nextInt()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Scanner"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"nextLine()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"String"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"String"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"charAt(index: int)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"char"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"String"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"length()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"String"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"split(regex: String)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"String[]"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"String"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"toLowerCase()"}),", ",(0,s.jsx)(d.code,{children:"toUpperCase()"})]}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"String"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"System"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"currentTimeMillis()"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"long"})})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"java-collections-framework",children:"Java Collections Framework"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Klasse"}),(0,s.jsx)(d.th,{children:"Methode"}),(0,s.jsx)(d.th,{children:"Statisch"}),(0,s.jsx)(d.th,{children:"R\xfcckgabetyp"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ArrayList<E>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"add(e: E)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ArrayList<E>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"add(index: int, element: E)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ArrayList<E>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"contains(o: Object)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ArrayList<E>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"forEach(action: Consumer<T>)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ArrayList<E>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"get(index: int)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"E"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ArrayList<E>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"remove(index: int)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"E"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ArrayList<E>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"remove(o: Object)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ArrayList<E>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"size()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Collections"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"sort(list: List<T>)"}),", ",(0,s.jsx)(d.code,{children:"sort(list: List<T>, c: Comparator<T>)"})]}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Entry<K, V>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"getKey()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"K"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Entry<K, V>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"getValue()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"V"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"HashMap<K, V>"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"containsKey(key: Object)"}),", ",(0,s.jsx)(d.code,{children:"containsValue(value: Object)"})]}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"HashMap<K, V>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"entrySet()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Set<Entry<K, V>>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"HashMap<K, V>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"forEach(action: BiConsumer<K, V>)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"HashMap<K, V>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"get(key: Object)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"V"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"HashMap<K, V>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"keySet()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Set<K>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"HashMap<K, V>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"put(key: K, value: V)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"V"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"HashMap<K, V>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"values()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Collection<V>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"List<E>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"of(elements: E...)"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"List<E>"})})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"funktionale-schnittstellen",children:"Funktionale Schnittstellen"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Klasse"}),(0,s.jsx)(d.th,{children:"Methode"}),(0,s.jsx)(d.th,{children:"Statisch"}),(0,s.jsx)(d.th,{children:"R\xfcckgabetyp"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"BiConsumer"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"accept(t: T, u: U)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Comparable<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"compareTo(o: T)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Comparator<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"compare(o1: T, o2: T)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Consumer<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"accept(t: T)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"DoubleConsumer"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"accept(value: double)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Executable"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"execute()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Function<T, R>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"apply(t: T)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"R"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Predicate<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"test(t: T)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ToDoubleFunction<T, R>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"applyAsDouble(value: T)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"double"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ToIntFunction<T, R>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"applyAsInt(value: T)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int"})})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"java-stream-api",children:"Java Stream API"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Klasse"}),(0,s.jsx)(d.th,{children:"Methode"}),(0,s.jsx)(d.th,{children:"Statisch"}),(0,s.jsx)(d.th,{children:"R\xfcckgabetyp"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Collectors"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"groupingBy(classifier: Function<T, K>)"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Collector<T, ?, Map<K, List<T>>>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Collectors"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"toMap(keyMapper: Function<T, K>, valueMapper: Function<T, U>)"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Collector<T, ?, Map<K, U>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"DoubleStream"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"average()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"OptionalDouble"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"DoubleStream"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"sum()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"double"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"IntStream"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"average()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"OptionalDouble"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"IntStream"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"sum()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"allMatch(predicate: Predicate<T>)"}),", ",(0,s.jsx)(d.code,{children:"anyMatch(predicate: Predicate<T>)"}),", ",(0,s.jsx)(d.code,{children:"noneMatch(predicate: Predicate<T>)"})]}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"collect(collector: Collector<T, A, R>)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"R"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"count()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"long"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"distinct()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"filter(predicate: Predicate<T>)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"findAny()"}),", ",(0,s.jsx)(d.code,{children:"findFirst()"})]}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Optional<T>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"forEach(action: Consumer<T>)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"limit(maxSize: long)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"map(mapper: Function<T, R>)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<R>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"mapToDouble(mapper: ToDoubleFunction<T, R>)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"DoubleStream"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"mapToInt(mapper: ToIntFunction<T, R>)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"IntStream"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"max(comparator: Comparator<T>)"}),", ",(0,s.jsx)(d.code,{children:"min(comparator: Comparator<T>)"})]}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Optional<T>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"skip(n: long)"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"sorted()"}),", ",(0,s.jsx)(d.code,{children:"sorted(comparator: Comparator<T>)"})]}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Stream<T>"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"toList()"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"List<T>"})})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"junit-5",children:"JUnit 5"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Klasse"}),(0,s.jsx)(d.th,{children:"Methode"}),(0,s.jsx)(d.th,{children:"Statisch"}),(0,s.jsx)(d.th,{children:"R\xfcckgabetyp"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Assertions"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"assertEquals(expected: Object, actual: Object)"}),", ",(0,s.jsx)(d.code,{children:"assertNotEquals(expected: Object, actual: Object)"})]}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Assertions"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"assertNull(actual: Object)"}),", ",(0,s.jsx)(d.code,{children:"assertNotNull(actual: Object)"})]}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Assertions"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"assertSame(expected: Object, actual: Object)"}),", ",(0,s.jsx)(d.code,{children:"assertNotSame(expected: Object, actual: Object)"})]}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Assertions"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"assertThrows(expectedType: Class<T>, executable: Executable)"})}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"T"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Assertions"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"assertTrue(condition: boolean)"}),", ",(0,s.jsx)(d.code,{children:"assertFalse(condition: boolean)"})]}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"void"})})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,r.a)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,d,c)=>{c.d(d,{Z:()=>l,a:()=>i});var s=c(67294);const r={},n=s.createContext(r);function i(e){const d=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:d},e.children)}}}]);