"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5697],{54574:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=r(85893),a=r(11151),s=r(74866),i=r(85162);const l={title:"Ausnahmen (Exceptions)",description:"",sidebar_position:230,tags:["exceptions"]},u=void 0,o={id:"documentation/exceptions",title:"Ausnahmen (Exceptions)",description:"",source:"@site/docs/documentation/exceptions.mdx",sourceDirName:"documentation",slug:"/documentation/exceptions",permalink:"/java-docs/pr-preview/pr-124/documentation/exceptions",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/exceptions.mdx",tags:[{label:"exceptions",permalink:"/java-docs/pr-preview/pr-124/tags/exceptions"}],version:"current",sidebarPosition:230,frontMatter:{title:"Ausnahmen (Exceptions)",description:"",sidebar_position:230,tags:["exceptions"]},sidebar:"documentationSidebar",previous:{title:"B\xe4ume",permalink:"/java-docs/pr-preview/pr-124/documentation/trees"},next:{title:"Datenklassen (Records)",permalink:"/java-docs/pr-preview/pr-124/documentation/records"}},c={},d=[{value:"Die Klassenhierarchie der Laufzeitfehler",id:"die-klassenhierarchie-der-laufzeitfehler",level:2},{value:"Definition von Ausnahmenklassen",id:"definition-von-ausnahmenklassen",level:2},{value:"Ausl\xf6sen von Ausnahmen",id:"ausl\xf6sen-von-ausnahmen",level:2},{value:"Weiterleiten von Ausnahmen",id:"weiterleiten-von-ausnahmen",level:2},{value:"Abfangen von Ausnahmen",id:"abfangen-von-ausnahmen",level:2}];function h(e){const n={code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Programmfehler (Bugs) f\xfchren dazu, dass Programme unerwartete Ergebnisse liefern\noder abst\xfcrzen. Je komplexer das Programm, desto wichtiger wird eine durchdachte\nund konsequente Fehlerbehandlung. Man unterscheidt dabei zwischen verschiedenen\nFehlerarten: Kompilierungsfehler, Logikfehler und Laufzeitfehler."}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"a",label:"Kompilierungsfehler",default:!0,children:(0,t.jsx)(n.p,{children:"Kompilierungsfehler sind Programmfehler, die verhindern, dass das Programm\nausgef\xfchrt werden kann. Sie k\xf6nnen relativ einfach behoben werden, da sie schon\nzur Designzeit auftreten und von den meisten Entwicklungsumgebungen direkt\nangezeigt werden."})}),(0,t.jsx)(i.Z,{value:"b",label:"Logikfehler",children:(0,t.jsx)(n.p,{children:"Verh\xe4lt sich das Programm nicht wie beabsichtigt, spricht man von Logikfehlern.\nSie sind mit am schwersten zu entdecken und zu beheben. Zur Unterst\xfczung bei der\nFehlersuche und -behandlung kann unter Anderem der Debugger verwendet werden.\nDer Debugger erm\xf6glicht es, Programme zur Laufzeit zu analysieren und zu\nsteuern. Durch das Setzen von Haltepunkten (Breakpoints) kann die Ausf\xfchrung des\nProgramms an beliebiger Stelle angehalten werden. Dadurch lassen sich z.B. die\nInhalte von Datenobjekten \xfcberpr\xfcfen. Zudem bietet der Debugger die M\xf6glichkeit,\ndie weitere Ausf\xfchrung des Programms in der gew\xfcnschten Schrittweite\nforzuf\xfchren."})}),(0,t.jsx)(i.Z,{value:"c",label:"Laufzeitfehler",children:(0,t.jsxs)(n.p,{children:["Laufzeitfehler treten erst beim Ausf\xfchren des Programms auf. Sie entstehen meist\ndann, wenn das Programm versucht, eine Operation auszuf\xfchren, die nicht\nausgef\xfchrt werden kann (z.B. die Division durch Null). Diese Situationen werden\nauch als Ausnahmen (Exceptions) bezeichnet. Ausnahmen gew\xe4hrleisten eine klare\nTrennung zwischen funktionalem Code und Code zur Fehlerbehandlung. Die\nFehlerbehandlung erfolgt dabei gem\xe4\xdf dem Ausnahmenbehandlungsprozess: nachdem\neine Ausnahme ausgel\xf6st wurde, kann bzw. muss diese je nach Ausnahmenart vom\nEmpf\xe4nger der Ausnahme entweder behandelt oder weitergeleitet werden\n",(0,t.jsx)(n.em,{children:"Catch-or-Throw-Regel"})," Man unterscheidet zwischen ",(0,t.jsx)(n.em,{children:"gepr\xfcften"})," (checked) und\n",(0,t.jsx)(n.em,{children:"ungepr\xfcften"})," (unchecked) Ausnahmen. Gepr\xfcfte Ausnahmen m\xfcssen, ungepr\xfcfte\nAusnahmen k\xf6nnen behandelt bzw. weitergeleitet werden."]})})]}),"\n",(0,t.jsx)(n.h2,{id:"die-klassenhierarchie-der-laufzeitfehler",children:"Die Klassenhierarchie der Laufzeitfehler"}),"\n",(0,t.jsxs)(n.p,{children:["Die Klasse ",(0,t.jsx)(n.code,{children:"Throwable"})," stellt die Oberklasse aller Laufzeitfehler dar.\nSchwerwiegende Fehler (haupts\xe4chlich Probleme in der JVM (Java Virtual Machine))\nwerden durch Unterklassen der Klasse ",(0,t.jsx)(n.code,{children:"Error"})," abgebildet, gepr\xfcfte Ausnahmen\ndurch Unterklassen der Klasse ",(0,t.jsx)(n.code,{children:"Exception"})," und ungepr\xfcfte Ausnahmen durch\nUnterklassen der Klasse ",(0,t.jsx)(n.code,{children:"RuntimeException"}),"."]}),"\n",(0,t.jsx)(n.mermaid,{value:"classDiagram\n    Throwable <|-- Error\n    Throwable <|-- Exception\n    Exception <|-- TimeOutException\n    Exception <|-- RunTimeException\n    RunTimeException <|-- NullPointerException\n    RunTimeException <|-- ArithmeticException"}),"\n",(0,t.jsx)(n.h2,{id:"definition-von-ausnahmenklassen",children:"Definition von Ausnahmenklassen"}),"\n",(0,t.jsxs)(n.p,{children:["Eigene Ausnahmenklassen werden durch einfaches Ableiten von einer bestehenden\nAusnahmenklasse definiert. Ausnahmenklassen sollten dabei immer von der Klasse\n",(0,t.jsx)(n.code,{children:"Exception"})," oder einer ihrer Unterklassen abgeleitet werden, nicht von der\nKlasse ",(0,t.jsx)(n.code,{children:"Error"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="QuxException.java" showLineNumbers',children:"public class QuxException extends Exception {\n\n  public QuxException() {}\n\n  public QuxException(String message) {}\n\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ausl\xf6sen-von-ausnahmen",children:"Ausl\xf6sen von Ausnahmen"}),"\n",(0,t.jsxs)(n.p,{children:["Mit dem Schl\xfcsselwort ",(0,t.jsx)(n.code,{children:"throw"})," kann innerhalb einer Methode eine Ausnahme\nausgel\xf6st werden. Die Methode, in der die Ausnahme ausgel\xf6st wird, muss mit dem\nSchl\xfcsselwort ",(0,t.jsx)(n.code,{children:"throws"})," die Ausnahmenklasse angeben, die ausgel\xf6st werden kann."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public class Foo {\n\n  public void bar() throws QuxException {\n    throw new QuxException();\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"weiterleiten-von-ausnahmen",children:"Weiterleiten von Ausnahmen"}),"\n",(0,t.jsxs)(n.p,{children:["Ausnahmen k\xf6nnen weitergeleitet werden. Hierbei wird die Fehlerbehandlung an die\nn\xe4chsth\xf6here Ebene weitergegeben. Um eine Ausnahme weiterzuleiten, muss in der\nweiterleitenden Methode mit ",(0,t.jsx)(n.code,{children:"throws"})," die Ausnahme angegeben werden, die\nausgel\xf6st werden kann."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public class Foo {\n\n  public void bar() throws QuxException {\n    throw new QuxException();\n  }\n\n  public void baz() throws QuxException {\n    bar();\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"abfangen-von-ausnahmen",children:"Abfangen von Ausnahmen"}),"\n",(0,t.jsxs)(n.p,{children:["Mit Hilfe der try-catch-Anweisung k\xf6nnen Methoden, die eine Ausnahme ausl\xf6sen\nk\xf6nnen, \xfcberwacht werden; d.h. die Ausnahmen werden gegebenenfalls abgefangen.\nDer try-Block enth\xe4lt die Anweisungen, die \xfcberwacht werden sollen, der\ncatch-Block enth\xe4lt die eigentliche Fehlerbehandlung. Als Parameter von ",(0,t.jsx)(n.code,{children:"catch"}),"\nmuss angegeben werden, welche Ausnahme(n) abgefangen werden soll(en)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    try {\n      Foo foo = new Foo();\n      foo.bar();\n    } catch (QuxException e) {\n      /* Fehlerbehandlung */\n    }\n  }\n\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(90512);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>k});var t=r(67294),a=r(90512),s=r(12466),i=r(16550),l=r(20469),u=r(91980),o=r(67392),c=r(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[i,u]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,d]=p({queryString:r,groupId:a}),[b,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),f=(()=>{const e=o??b;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(85893);function x(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),c=e=>{const n=e.currentTarget,r=u.indexOf(n),a=l[r].value;a!==t&&(o(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function w(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(w,{...e,...n})]})}function k(e){const n=(0,g.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var t=r(67294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);