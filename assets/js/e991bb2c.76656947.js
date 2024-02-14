"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2053],{85660:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=r(85893),a=r(11151),i=r(74866),s=r(85162);const l={title:"Programmieren",description:"",sidebar_position:10,tags:["coding"]},o=void 0,c={id:"documentation/coding",title:"Programmieren",description:"",source:"@site/docs/documentation/coding.mdx",sourceDirName:"documentation",slug:"/documentation/coding",permalink:"/java-docs/documentation/coding",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/coding.mdx",tags:[{label:"coding",permalink:"/java-docs/tags/coding"}],version:"current",sidebarPosition:10,frontMatter:{title:"Programmieren",description:"",sidebar_position:10,tags:["coding"]},sidebar:"documentationSidebar",previous:{title:"Einf\xfchrung",permalink:"/java-docs/"},next:{title:"Git",permalink:"/java-docs/documentation/git"}},u={},d=[{value:"Programmierparadigmen",id:"programmierparadigmen",level:2},{value:"Programmausf\xfchrung",id:"programmausf\xfchrung",level:2},{value:"Programmiersprachen",id:"programmiersprachen",level:2}];function m(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Als ein Teilbereich der Softwareentwicklung umfasst das Programmieren vor allem\ndie Umsetzung eines Softwareentwurfes in Quellcode. Generell versteht man unter\nProgrammieren die Umsetzung von ",(0,t.jsx)(n.a,{href:"algorithms",children:"Algorithmen"})," in lauff\xe4hige\nComputer-Programme."]}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart LR\n    Analyse --\x3e Entwurf --\x3e Umsetzung --\x3e Auslieferung --\x3e Wartung --\x3e Analyse"}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsx)(n.p,{children:"Ein Algorithmus ist eine Handlungsvorschrift zur L\xf6sung eines Problems."})}),"\n",(0,t.jsx)(n.h2,{id:"programmierparadigmen",children:"Programmierparadigmen"}),"\n",(0,t.jsx)(n.p,{children:"Unter einem Programmierparadigma versteht man die grundlegende Herangehensweise,\nProbleme mit Hilfe einer Programmiersprache zu l\xf6sen. Aber auuch wenn\nProgrammiersprachen oft anhand ihrer grundlegenden Merkmale genau einem\nProgrammierparadigma zugeordnet werden, unterst\xfctzen viele Programmiersprachen\nmehrere Programmierparadigmen."}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(s.Z,{value:"a",label:"Imperative Programmierung",default:!0,children:[(0,t.jsx)(n.p,{children:"Bei der imperativen Programmierung bestehen Programme aus verzweigten und sich\nwiederholenden Folgen von Anweisungen, die den Programmablauf steuern."}),(0,t.jsx)(n.mermaid,{value:'stateDiagram-v2\n    state "Ausgabe: Zahl gr\xf6\xdfer Null eingeben" as activity1\n    state "Eingabe: Zahl" as activity2\n    state "Ausgabe: Zahl ist nicht gr\xf6\xdfer Null" as activity3\n    state "Ausgabe: Zahl ist gr\xf6\xdfer Null" as activity4\n    state if <<choice>>\n\n    [*] --\x3e activity1\n    activity1--\x3e activity2\n    activity2 --\x3e if\n    if --\x3e activity3 : Zahl kleiner gleich Null\n    if --\x3e activity4 : Zahl gr\xf6\xdfer Null\n    activity3 --\x3e activity1\n    activity4 --\x3e [*]'})]}),(0,t.jsxs)(s.Z,{value:"b",label:"Deklarative Programmierung",children:[(0,t.jsx)(n.p,{children:'Die deklarative Programmierung stellt einen Gegenentwurf zur imperativen\nProgrammierung dar, bei der nicht das "Wie", sondern das "Was" im Vordergrund\nsteht.'}),(0,t.jsx)(n.mermaid,{value:"flowchart TD\n    subgraph Ausgangsmenge\n        direction LR\n        p1 -.- p2 -.- p3 -.- p4\n        p1(Hans, 42, m, Stuttgart)\n        p2(Peter, 17, m, Freiburg)\n        p3(Lisa, 19, w, Berlin)\n        p4(Maria, 33, w, Freiburg)\n    end\n    subgraph Ergebnismenge\n        direction LR\n        p5 -.- p6\n        p5(Maria, 33)\n        p6(Peter, 17)\n    end\n    Ausgangsmenge --\x3e|\"SELECT Name, Age FROM Person WHERE City = 'Freiburg' ORDER BY Name\"| Ergebnismenge"})]}),(0,t.jsxs)(s.Z,{value:"c",label:"Objektorientierte Programmierung",children:[(0,t.jsx)(n.p,{children:"Die ojektorientierte Programmierung baut auf der imperativen Programmierung auf,\nsetzt den Fokus aber auf abstrakte Datentypen und die Verbindung von Daten und\nRoutinen."}),(0,t.jsx)(n.mermaid,{value:"classDiagram\n    Person --o Team\n    class Person {\n        -name String\n        +Person(name String)\n        +name() String\n    }\n    class Team {\n        -members List~Person~\n        +addMember(person Person) void\n        +members() List~Person~\n    }"})]})]}),"\n",(0,t.jsx)(n.h2,{id:"programmausf\xfchrung",children:"Programmausf\xfchrung"}),"\n",(0,t.jsx)(n.p,{children:"Programme auf einem Computer k\xf6nnen auf unterschiedliche Arten ausgef\xfchrt\nwerden: Compilersprachen \xfcbersetzen den Quellcode in eine Datei, die vom\njeweiligen Betriebssystem ausgef\xfchrt werden kann, Interpretersprachen \xfcbersetzen\nden Quellcode direkt in den Arbeitsspeicher und f\xfchren das Programm sofort aus\nund Just-In-Time Compilersprachen (JIT) \xfcbersetzen den Quellcode mit Hilfe eines\nCompilers zun\xe4chst in den sogenannten Bytecode und \xfcbersetzen diesen bei der\nAusf\xfchrung in den Arbeitsspeicher. Compilersprachen wie z.B. C++ sind dabei\ndeutlich performanter und erm\xf6glichen eine sicherere Entwicklung,\nInterpretersprachen wie z.B. PHP sind dagegen plattformunabh\xe4ngig und\nJust-In-Time Compliersprachen vereinen die Vorteile von beiden."}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsxs)(n.p,{children:["In Java wird der Interpreter als ",(0,t.jsx)(n.em,{children:"Java Virtual Machine"})," bezeichnet."]})}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(s.Z,{value:"a",label:"Compilersprachen",default:!0,children:(0,t.jsx)(n.mermaid,{value:"flowchart LR\n    sourcecode[/Quellcode/]\n    machinecode[/Maschinencode/]\n    compiler(Compiler)\n    cpu(CPU)\n    subgraph Entwicklungszeit\n        sourcecode -.-> compiler -.-> machinecode\n    end\n    subgraph Laufzeit\n        cpu\n    end\n    machinecode -.-> cpu"})}),(0,t.jsx)(s.Z,{value:"b",label:"Interpretersprachen",children:(0,t.jsx)(n.mermaid,{value:"flowchart LR\n    sourcecode[/Quellcode/]\n    interpreter(Interpreter)\n    cpu(CPU)\n    subgraph Entwicklungszeit\n        sourcecode\n    end\n    subgraph Laufzeit\n        interpreter -.-> cpu\n    end\n    sourcecode -.-> interpreter"})}),(0,t.jsx)(s.Z,{value:"c",label:"Just-In-Time Compilersprachen",children:(0,t.jsx)(n.mermaid,{value:"flowchart LR\n    sourcecode[/Quellcode/]\n    bytecode[/Bytecode/]\n    compiler(Compiler)\n    interpreter(Interpreter)\n    cpu(CPU)\n    subgraph Entwicklungszeit\n        sourcecode -.-> compiler -.-> bytecode\n    end\n    subgraph Laufzeit\n        interpreter -.-> cpu\n    end\n    bytecode -.-> interpreter"})})]}),"\n",(0,t.jsx)(n.h2,{id:"programmiersprachen",children:"Programmiersprachen"}),"\n",(0,t.jsxs)(n.p,{children:["Maschinen sind im Vergleich zu menschlichen Gehirnen sehr primitive Gebilde. Die\nDiskrepanz zwischen der menschlichen Denkweise und der Arbeitsweise von\nMaschinen bezeichnet mal als ",(0,t.jsx)(n.em,{children:"Semantische L\xfccke"}),". Programmiersprachen\nerm\xf6glichen es, Problemstellungen der realen Welt abstrahiert und\nmaschinengerecht abzubilden und damit die Semantische L\xfccke zu verringern. Je\nh\xf6her die Abstraktion einer Programmiersprache dabei ist, desto mehr kann die\nSemantische L\xfccke verringert werden: Maschinenorientierte Programmiersprachen\n(wie z.B. Assembler) abstrahieren kaum und sind daher f\xfcr den Menschen schwerer\nverst\xe4ndlich, problemorientierte Programmiersprachen (wie z.B. Java)\nabstrahieren stark und sind daher f\xfcr den Menschen leichter verst\xe4ndlich."]}),"\n",(0,t.jsx)(n.p,{children:"Die Programmiersprachen Java, Python und JavaScript geh\xf6ren zu den am weitesten\nverbreiteten bzw. beliebtesten Programmiersprachen."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"TIOBE"}),(0,t.jsx)(n.th,{children:"RedMonk"}),(0,t.jsx)(n.th,{children:"PYPL"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Python"}),(0,t.jsx)(n.td,{children:"JavaScript"}),(0,t.jsx)(n.td,{children:"Python"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"C"}),(0,t.jsx)(n.td,{children:"Python"}),(0,t.jsx)(n.td,{children:"Java"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"C++"}),(0,t.jsx)(n.td,{children:"Java"}),(0,t.jsx)(n.td,{children:"JavaScript"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Java"}),(0,t.jsx)(n.td,{children:"PHP"}),(0,t.jsx)(n.td,{children:"C/C++"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"C#"}),(0,t.jsx)(n.td,{children:"C++"}),(0,t.jsx)(n.td,{children:"C#"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Quellen",type:"note",children:(0,t.jsx)(n.p,{children:"Tiobe Programming Community Index Januar 2024, RedMonk Programming Language\nRankings Januar 2023, PopularitY of Programming Language Januar 2024"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>s});r(67294);var t=r(90512);const a={tabItem:"tabItem_Ymn6"};var i=r(85893);function s(e){let{children:n,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,s),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(67294),a=r(90512),i=r(12466),s=r(16550),l=r(20469),o=r(91980),c=r(67392),u=r(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,i=m(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,d]=g({queryString:r,groupId:a}),[p,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),v=(()=>{const e=c??p;return h({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(85893);function x(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function P(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(x,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,f.jsx)(P,{...e,children:d(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var t=r(67294);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);