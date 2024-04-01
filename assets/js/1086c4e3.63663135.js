"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[807],{862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=t(74848),i=t(28453);const r={title:"Softwaretests",description:"",sidebar_position:310,tags:["tests"]},d=void 0,l={id:"documentation/tests",title:"Softwaretests",description:"",source:"@site/docs/documentation/tests.md",sourceDirName:"documentation",slug:"/documentation/tests",permalink:"/java-docs/documentation/tests",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/tests.md",tags:[{label:"tests",permalink:"/java-docs/tags/tests"}],version:"current",sidebarPosition:310,frontMatter:{title:"Softwaretests",description:"",sidebar_position:310,tags:["tests"]},sidebar:"documentationSidebar",previous:{title:"Die Java Stream API",permalink:"/java-docs/documentation/java-stream-api"},next:{title:"Komponententests (Unit Tests)",permalink:"/java-docs/documentation/unit-tests"}},o={},a=[{value:"Testarten",id:"testarten",level:2},{value:"Testgetriebe Entwicklung (Test Driven Development)",id:"testgetriebe-entwicklung-test-driven-development",level:2},{value:"Test Doubles",id:"test-doubles",level:2}];function c(e){const n={admonition:"admonition",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Softwaretests sollen sicherstellen, dass bei der Entwicklung oder \xc4nderung einer\nSoftware der Quellcode in allen festgelegten Anwendungsf\xe4llen korrekt\nfunktioniert. Mit Hilfe von Softwaretests k\xf6nnen Softwareentwickler im Idealfall\nschon w\xe4hrend des Entwicklungsprozesses m\xf6gliche Fehler identifizieren und\nbeheben."}),"\n",(0,s.jsx)(n.h2,{id:"testarten",children:"Testarten"}),"\n",(0,s.jsx)(n.p,{children:"Man unterscheidet bei Softwaretests zwischen verschiedenen Testarten, die in der\nTestpyramide dargestellt werden:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Akzeptanztests: Testen des gesamten Systems unter realit\xe4tsgetreuen\nBedingungen"}),"\n",(0,s.jsx)(n.li,{children:"Systemtests: Testen des gesamten Systems"}),"\n",(0,s.jsx)(n.li,{children:"Integrationstests: Testen mehrerer, voneinander abh\xe4ngiger Komponenten"}),"\n",(0,s.jsx)(n.li,{children:"Komponententests: Testen einzelner, abgeschlossener Softwarebausteine"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"testgetriebe-entwicklung-test-driven-development",children:"Testgetriebe Entwicklung (Test Driven Development)"}),"\n",(0,s.jsx)(n.p,{children:"Komponententests (Unit Tests) spielen vor allem bei der Testgetriebenen\nEntwicklung (Test Driven Development) eine gro\xdfe Rolle. Hierbei werden\nAnwendungen Schritt f\xfcr Schritt (also inkrementell) um neue Funktionen erweitert\n(Red-Green-Refactor-Methode):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Red: Einen Test schreiben, der zun\xe4chst fehlschl\xe4gt"}),"\n",(0,s.jsx)(n.li,{children:"Green: Genau soviel Produktivcode schreiben, damit der Test erfolgreich\ndurchl\xe4uft"}),"\n",(0,s.jsx)(n.li,{children:"Refactor: Testcode und Produktivcode aufr\xe4umen (vereinfachen und verbessern)"}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"flowchart LR\n    Red --\x3e Green --\x3e Refactor --\x3e Red"}),"\n",(0,s.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,s.jsx)(n.p,{children:"Da durch die vorangestellten Tests eine kontinuierliche Designverbesserung\nstattfindet, wird die Testgetriebene Entwicklung zu den Designstrategien\ngez\xe4hlt."})}),"\n",(0,s.jsx)(n.h2,{id:"test-doubles",children:"Test Doubles"}),"\n",(0,s.jsxs)(n.p,{children:["Oftmals werden zum Testen einer Methode andere Objekte bzw. Komponenten\nben\xf6tigt, die vom Test bereitgestellt werden m\xfcssen. Zum Testen k\xf6nnen entweder\ndie realen Komponenten, oder aber sogenannte ",(0,s.jsx)(n.em,{children:"Test Doubles"})," verwendet werden:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Eine ",(0,s.jsx)(n.em,{children:"F\xe4lschung"})," (Fake) imitiert eine reale Komponente"]}),"\n",(0,s.jsxs)(n.li,{children:["Eine ",(0,s.jsx)(n.em,{children:"Attrappe"})," (Dummy) ist ein Platzhalter f\xfcr ein Objekt, welches im Test\nnicht ben\xf6tigt wird"]}),"\n",(0,s.jsxs)(n.li,{children:["Ein ",(0,s.jsx)(n.em,{children:"Stummel"})," (Stub) gibt bei Aufruf einen festen Wert zur\xfcck; wird also f\xfcr\neingehende Aufrufe verwendet"]}),"\n",(0,s.jsxs)(n.li,{children:["Eine ",(0,s.jsx)(n.em,{children:"Nachahmung"})," (Mock) zeichnet die Methodenaufrufe an ihr auf und kann\nzur\xfcckgeben, welche Methode wie oft mit welchen Parametern aufgerufen wurde;\nwird also f\xfcr ausgehende Aufrufe verwendet"]}),"\n",(0,s.jsxs)(n.li,{children:["Ein ",(0,s.jsx)(n.em,{children:"Spion"})," (Spy) kann \xe4hnlich wie eine Nachahmung Methodenaufrufe\naufzeichnen, kann diese aber auch die reale Komponente weiterleiten"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Test Doubles sollen die Abh\xe4ngigkeiten des SUT (System under Test) minimieren\nund f\xfcr vorhersagbare Ergebnisse sorgen."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);