"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8703],{34883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(85893),a=t(11151);const r={title:"Aktivit\xe4tsdiagramme",description:"",sidebar_position:165,tags:["uml","activity-diagrams"]},s=void 0,o={id:"documentation/activity-diagrams",title:"Aktivit\xe4tsdiagramme",description:"",source:"@site/docs/documentation/activity-diagrams.md",sourceDirName:"documentation",slug:"/documentation/activity-diagrams",permalink:"/java-docs/pr-preview/pr-114/documentation/activity-diagrams",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/activity-diagrams.md",tags:[{label:"uml",permalink:"/java-docs/pr-preview/pr-114/tags/uml"},{label:"activity-diagrams",permalink:"/java-docs/pr-preview/pr-114/tags/activity-diagrams"}],version:"current",sidebarPosition:165,frontMatter:{title:"Aktivit\xe4tsdiagramme",description:"",sidebar_position:165,tags:["uml","activity-diagrams"]},sidebar:"documentationSidebar",previous:{title:"Klassendiagramme",permalink:"/java-docs/pr-preview/pr-114/documentation/class-diagrams"},next:{title:"Vererbung",permalink:"/java-docs/pr-preview/pr-114/documentation/inheritance"}},d={},l=[];function u(e){const n={li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Aktivit\xe4tsdiagramme sind ein Diagrammtyp der UML und geh\xf6ren dort zum Bereich\nder Verhaltensdiagramme. Der Fokus von Aktivit\xe4tsdiagrammen liegt auf\nimperativen Verarbeitungsaspekten. Eine Aktivit\xe4t stellt einen gerichteten\nGraphen dar, der \xfcber Knoten (Aktionen, Datenknoten und Kontrollknoten) und\nKanten (Kontrollfl\xfcsse und Datenfl\xfcsse) verf\xfcgt:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aktionen sind elementare Bausteine f\xfcr beliebiges, benutzerdefiniertes\nVerhalten"}),"\n",(0,i.jsxs)(n.li,{children:["Kontrollknoten steuern den Kontroll- und Datenfluss in einer Aktivit\xe4t:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Startknoten: legen den Beginn der Aktivit\xe4t fest"}),"\n",(0,i.jsx)(n.li,{children:"Endknoten: legen das Ende der Aktivit\xe4t fest"}),"\n",(0,i.jsx)(n.li,{children:"Ablaufendknoten: legen das Ende eines Ablaufes fest"}),"\n",(0,i.jsx)(n.li,{children:"Verzweigungsknoten: erm\xf6glichen die Verzweigung von Abl\xe4ufen"}),"\n",(0,i.jsx)(n.li,{children:"Zusammenf\xfchrungsknoten: erm\xf6glichen die Zusammenf\xfchrung von Abl\xe4ufen"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Datenknoten sind Hilfsknoten, die als ein- oder ausgehende Parameter einer\nAktion verwendet werden k\xf6nnen"}),"\n",(0,i.jsx)(n.li,{children:"Kontroll- und Datenfl\xfcsse legen Abl\xe4ufe zwischen Vorg\xe4nger- und\nNachfolger-Knoten fest"}),"\n"]}),"\n",(0,i.jsx)(n.mermaid,{value:'stateDiagram-v2\n    state "Eingabe: 1. Zahl" as input1\n    state "Eingabe: 2. Zahl" as input2\n    state "Ausgabe: 1. Zahl eingeben" as output1\n    state "Ausgabe: 2. Zahl eingeben" as output2\n    state "R\xfcckgabe: 1. Zahl : 2. Zahl" as activity1\n    state if <<choice>>\n    [*] --\x3e output1\n    output1 --\x3e input1\n    input1 --\x3e output2\n    output2 --\x3e input2\n    input2 --\x3e if\n    if --\x3e output2 : 2. Zahl ist gleich 0\n    if --\x3e activity1: 2. Zahl ist ungleich 0\n    activity1 --\x3e [*]'})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(67294);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);