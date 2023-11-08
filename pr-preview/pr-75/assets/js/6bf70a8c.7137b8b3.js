"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5917],{10160:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var i=r(85893),a=r(11151),t=r(74866),s=r(85162);const l={title:"Programmieren",description:"",sidebar_position:10,tags:["programming"]},o=void 0,c={id:"documentation/programming",title:"Programmieren",description:"",source:"@site/docs/documentation/programming.mdx",sourceDirName:"documentation",slug:"/documentation/programming",permalink:"/java-docs/pr-preview/pr-75/documentation/programming",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/programming.mdx",tags:[{label:"programming",permalink:"/java-docs/pr-preview/pr-75/tags/programming"}],version:"current",sidebarPosition:10,frontMatter:{title:"Programmieren",description:"",sidebar_position:10,tags:["programming"]},sidebar:"documentationSidebar",previous:{title:"Einf\xfchrung",permalink:"/java-docs/pr-preview/pr-75/"},next:{title:"Softwaredesign",permalink:"/java-docs/pr-preview/pr-75/documentation/design"}},d={},u=[{value:"Programmierparadigmen",id:"programmierparadigmen",level:2},{value:"Imperative Programmierung",id:"imperative-programmierung",level:3},{value:"Deklarative Programmierung",id:"deklarative-programmierung",level:3},{value:"Objektorientierte Programmierung",id:"objektorientierte-programmierung",level:3},{value:"Programmausf\xfchrung",id:"programmausf\xfchrung",level:2},{value:"Programmiersprachen",id:"programmiersprachen",level:2},{value:"Die Programmiersprache Java",id:"die-programmiersprache-java",level:2},{value:"Die Geschichte von Java",id:"die-geschichte-von-java",level:3},{value:"JDK und JRE",id:"jdk-und-jre",level:3}];function m(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Als ein Teilbereich der Softwareentwicklung umfasst das Programmieren vor allem\ndie Umsetzung eines Softwareentwurfes in Quellcode. Generell versteht man unter\nProgrammieren die Umsetzung von Algorithmen in lauff\xe4hige Computer-Programme."}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart LR\n    Analyse --\x3e Entwurf --\x3e Umsetzung --\x3e Auslieferung --\x3e Wartung --\x3e Analyse"}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsx)(n.p,{children:"Ein Algorithmus ist eine Handlungsvorschrift zur L\xf6sung eines Problems."})}),"\n",(0,i.jsx)(n.h2,{id:"programmierparadigmen",children:"Programmierparadigmen"}),"\n",(0,i.jsx)(n.p,{children:"Unter einem Programmierparadigma versteht man die grundlegende Herangehensweise,\nProbleme mit Hilfe einer Programmiersprache zu l\xf6sen:"}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsx)(n.p,{children:"Auch wenn Programmiersprachen oft anhand ihrer grundlegenden Merkmale genau\neinem Programmierparadigma zugeordnet werden, unterst\xfctzen viele\nProgrammiersprachen mehrere Programmierparadigmen."})}),"\n",(0,i.jsx)(n.h3,{id:"imperative-programmierung",children:"Imperative Programmierung"}),"\n",(0,i.jsx)(n.p,{children:"Bei der imperativen Programmierung bestehen Programme aus verzweigten und sich\nwiederholenden Folgen von Anweisungen, die den Programmablauf steuern."}),"\n",(0,i.jsx)(n.mermaid,{value:'stateDiagram-v2\n    state "Ausgabe: Zahl gr\xf6\xdfer Null eingeben" as activity1\n    state "Eingabe: Zahl" as activity2\n    state "Ausgabe: Zahl ist nicht gr\xf6\xdfer Null" as activity3\n    state "Ausgabe: Zahl ist gr\xf6\xdfer Null" as activity4\n    state if <<choice>>\n\n    [*] --\x3e activity1\n    activity1--\x3e activity2\n    activity2 --\x3e if\n    if --\x3e activity3 : Zahl kleiner gleich Null\n    if --\x3e activity4 : Zahl gr\xf6\xdfer Null\n    activity3 --\x3e activity1\n    activity4 --\x3e [*]'}),"\n",(0,i.jsx)(n.h3,{id:"deklarative-programmierung",children:"Deklarative Programmierung"}),"\n",(0,i.jsx)(n.p,{children:'Die deklarative Programmierung stellt einen Gegenentwurf zur imperativen\nProgrammierung dar, bei der nicht das "Wie", sondern das "Was" im Vordergrund\nsteht.'}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart TD\n    subgraph Ausgangsmenge\n        direction LR\n        p1 -.- p2 -.- p3 -.- p4\n        p1(Hans, 42, m, Stuttgart)\n        p2(Peter, 17, m, Freiburg)\n        p3(Lisa, 19, w, Berlin)\n        p4(Maria, 33, w, Freiburg)\n    end\n    subgraph Ergebnismenge\n        direction LR\n        p5 -.- p6\n        p5(Maria, 33)\n        p6(Peter, 17)\n    end\n    Ausgangsmenge --\x3e|\"SELECT Name, Age FROM Person WHERE City = 'Freiburg' ORDER BY Name\"| Ergebnismenge"}),"\n",(0,i.jsx)(n.h3,{id:"objektorientierte-programmierung",children:"Objektorientierte Programmierung"}),"\n",(0,i.jsx)(n.p,{children:"Die ojektorientierte Programmierung baut auf der imperativen Programmierung auf,\nsetzt den Fokus aber auf abstrakte Datentypen und die Verbindung von Daten und\nRoutinen."}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    Person --o Team\n    class Person {\n        -name String\n        +Person(name String)\n        +name() String\n    }\n    class Team {\n        -members List~Person~\n        +addMember(person Person) void\n        +members() List~Person~\n    }"}),"\n",(0,i.jsx)(n.h2,{id:"programmausf\xfchrung",children:"Programmausf\xfchrung"}),"\n",(0,i.jsx)(n.p,{children:"Programme auf einem Computer k\xf6nnen auf unterschiedliche Arten ausgef\xfchrt\nwerden: Compilersprachen \xfcbersetzen den Quellcode in eine Datei, die vom\njeweiligen Betriebssystem ausgef\xfchrt werden kann, Interpretersprachen \xfcbersetzen\nden Quellcode direkt in den Arbeitsspeicher und f\xfchren das Programm sofort aus\nund Just-In-Time Compilersprachen (JIT) \xfcbersetzen den Quellcode mit Hilfe eines\nCompilers zun\xe4chst in den sogenannten Bytecode und \xfcbersetzen diesen bei der\nAusf\xfchrung in den Arbeitsspeicher. Compilersprachen wie z.B. C++ sind dabei\ndeutlich performanter und erm\xf6glichen eine sicherere Entwicklung,\nInterpretersprachen wie z.B. PHP sind dagegen plattformunabh\xe4ngig und\nJust-In-Time Compliersprachen vereinen die Vorteile von beiden."}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsxs)(n.p,{children:["In Java wird der Interpreter als ",(0,i.jsx)(n.em,{children:"Java Virtual Machine"})," bezeichnet."]})}),"\n",(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(s.Z,{value:"compiler",label:"Compilersprachen",default:!0,children:(0,i.jsx)(n.mermaid,{value:"flowchart LR\n    sourcecode[/Quellcode/]\n    machinecode[/Maschinencode/]\n    compiler(Compiler)\n    cpu(CPU)\n    subgraph Entwicklungszeit\n        sourcecode -.-> compiler -.-> machinecode\n    end\n    subgraph Laufzeit\n        cpu\n    end\n    machinecode -.-> cpu"})}),(0,i.jsx)(s.Z,{value:"interpreter",label:"Interpretersprachen",default:!0,children:(0,i.jsx)(n.mermaid,{value:"flowchart LR\n    sourcecode[/Quellcode/]\n    interpreter(Interpreter)\n    cpu(CPU)\n    subgraph Entwicklungszeit\n        sourcecode\n    end\n    subgraph Laufzeit\n        interpreter -.-> cpu\n    end\n    sourcecode -.-> interpreter"})}),(0,i.jsx)(s.Z,{value:"jit",label:"Just-In-Time Compilersprachen",default:!0,children:(0,i.jsx)(n.mermaid,{value:"flowchart LR\n    sourcecode[/Quellcode/]\n    bytecode[/Bytecode/]\n    compiler(Compiler)\n    interpreter(Interpreter)\n    cpu(CPU)\n    subgraph Entwicklungszeit\n        sourcecode -.-> compiler -.-> bytecode\n    end\n    subgraph Laufzeit\n        interpreter -.-> cpu\n    end\n    bytecode -.-> interpreter"})})]}),"\n",(0,i.jsx)(n.h2,{id:"programmiersprachen",children:"Programmiersprachen"}),"\n",(0,i.jsxs)(n.p,{children:["Maschinen sind im Vergleich zu menschlichen Gehirnen sehr primitive Gebilde. Die\nDiskrepanz zwischen der menschlichen Denkweise und der Arbeitsweise von\nMaschinen bezeichnet mal als ",(0,i.jsx)(n.em,{children:"Semantische L\xfccke"}),". Programmiersprachen\nerm\xf6glichen es, Problemstellungen der realen Welt abstrahiert und\nmaschinengerecht abzubilden und damit die Semantische L\xfccke zu verringern. Je\nh\xf6her die Abstraktion einer Programmiersprache dabei ist, desto mehr kann die\nSemantische L\xfccke verringert werden: Maschinenorientierte Programmiersprachen\n(wie z.B. Assembler) abstrahieren kaum und sind daher f\xfcr den Menschen schwerer\nverst\xe4ndlich, problemorientierte Programmiersprachen (wie z.B. Java)\nabstrahieren stark und sind daher f\xfcr den Menschen leichter verst\xe4ndlich."]}),"\n",(0,i.jsx)(n.p,{children:"Die Programmiersprachen Java, Python und JavaScript geh\xf6ren zu den am weitesten\nverbreiteten bzw. beliebtesten Programmiersprachen."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"TIOBE"}),(0,i.jsx)(n.th,{children:"RedMonk"}),(0,i.jsx)(n.th,{children:"PYPL"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Python"}),(0,i.jsx)(n.td,{children:"JavaScript"}),(0,i.jsx)(n.td,{children:"Python"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"C"}),(0,i.jsx)(n.td,{children:"Python"}),(0,i.jsx)(n.td,{children:"Java"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Java"}),(0,i.jsx)(n.td,{children:"Java"}),(0,i.jsx)(n.td,{children:"JavaScript"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"C++"}),(0,i.jsx)(n.td,{children:"PHP"}),(0,i.jsx)(n.td,{children:"C#"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"C#"}),(0,i.jsx)(n.td,{children:"C++"}),(0,i.jsx)(n.td,{children:"C/C++"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"Quellen",type:"note",children:(0,i.jsx)(n.p,{children:"Tiobe Programming Community Index November 2021, RedMonk Programming Language\nRankings Juni 2021, PopularitY of Programming Language November 2021"})}),"\n",(0,i.jsx)(n.h2,{id:"die-programmiersprache-java",children:"Die Programmiersprache Java"}),"\n",(0,i.jsx)(n.p,{children:"Die Programmiersprache Java geh\xf6rt zu den problemorientierten\nProgrammiersprachen und ist daher einfacher zu erlernen und einfacher zu\nverstehen als maschinenorientierte Programmiersprachen. Bei der Entwicklung von\nJava verfolgte man das Ziel, eine einfache, objektorientierte, robuste,\narchitekturneutrale und parallelisierbare Programmiersprache zu entwickeln. Java\nwurde haupts\xe4chlich von C und C++ beeinflusst, ist allerdings im Gegensatz zu C\nund C++ nicht darauf ausgelegt, m\xf6glichst leistungsf\xe4hige Programme zu erzeugen,\nsondern m\xf6glichst sichere und fehlerfreie Programme."}),"\n",(0,i.jsx)(n.h3,{id:"die-geschichte-von-java",children:"Die Geschichte von Java"}),"\n",(0,i.jsxs)(n.p,{children:["Anfang der 90er begannen bei der Firma Sun Microsystems unter Federf\xfchrung des\nChefentwicklers James Gosling die Arbeiten an einem Projekt mit dem Codenamen\n",(0,i.jsx)(n.em,{children:"The Green Project"})," mit dem Ziel, eine vollst\xe4ndige Betriebssystemumgebung f\xfcr\nunterschiedliche Zwecke (interaktives Kabelfernsehen, intelligente\nKaffeemaschinen etc.) zu entwickeln. Die daraus entstehende Programmiersprache\nsollte urspr\xfcnglich den Namen ",(0,i.jsx)(n.em,{children:"Oak"})," (Object Application Kernel) tragen, wurde\naber schlie\xdflich im Mai 1995 unter dem Namen ",(0,i.jsx)(n.em,{children:"Java"})," ver\xf6ffentlicht. Der gro\xdfe\nDurchbruch von Java kam 1996 durch eine Kooperation mit der Firma Netscape\nzustande, die eine Integration von Java-Applets mit Hilfe von JavaScript in den\nBrowser Netscape Navigator 2.0 erm\xf6glichte. Weitere wichtige Meilensteine in der\nGeschichte von Java waren die Ver\xf6ffentlichungen der Google-Entwicklungsumgebung\nAndroid 2008 sowie des Computerspiels Minecraft 2009."]}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsx)(n.p,{children:"Java war der Name der beliebtesten Kaffeesorte der Entwickler."})}),"\n",(0,i.jsx)(n.h3,{id:"jdk-und-jre",children:"JDK und JRE"}),"\n",(0,i.jsxs)(n.p,{children:["Das JDK (Java Development Kit) stellt die wichtigste Komponente zum\nProgrammieren von Java-Programmen dar. Es enth\xe4lt neben dem Compiler und\nDebugger weitere wichtige Werkzeuge sowie umfangreiche Bibliotheken (siehe\n",(0,i.jsx)(n.a,{href:"java-api",children:"Die Java API"}),"). Die JRE (Java Runtime Environment) enth\xe4lt den\nInterpreter (die ",(0,i.jsx)(n.em,{children:"Java Virtual Machine"}),") und wird zum Ausf\xfchren von\nJava-Applikationen ben\xf6tigt."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>s});r(67294);var i=r(34334);const a={tabItem:"tabItem_Ymn6"};var t=r(85893);function s(e){let{children:n,hidden:r,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,s),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>P});var i=r(67294),a=r(34334),t=r(12466),s=r(16550),l=r(20469),o=r(91980),c=r(67392),d=r(50012);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:i,default:a}}=e;return{value:n,label:r,attributes:i,default:a}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.k6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(t),(0,i.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(a.location.search);n.set(t,e),a.replace({...a.location,search:n.toString()})}),[t,a])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,t=m(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:t}))),[c,u]=g({queryString:r,groupId:a}),[p,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,t]=(0,d.Nk)(r);return[a,(0,i.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:a}),b=(()=>{const e=c??p;return h({value:e,tabValues:t})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),v(e)}),[u,v,t]),tabValues:t}}var v=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(85893);function j(e){let{className:n,block:r,selectedValue:i,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==i&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...t,className:(0,a.Z)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":i===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:a}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(j,{...e,...n}),(0,f.jsx)(x,{...e,...n})]})}function P(e){const n=(0,v.Z)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var i=r(67294);const a={},t=i.createContext(a);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);