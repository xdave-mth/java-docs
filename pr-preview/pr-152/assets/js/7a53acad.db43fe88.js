"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1963],{44849:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=o(85893),i=o(11151);const r={title:"B\xe4ume",description:"",sidebar_position:226,tags:["trees"]},d=void 0,a={id:"documentation/trees",title:"B\xe4ume",description:"",source:"@site/docs/documentation/trees.md",sourceDirName:"documentation",slug:"/documentation/trees",permalink:"/java-docs/pr-preview/pr-152/documentation/trees",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/trees.md",tags:[{label:"trees",permalink:"/java-docs/pr-preview/pr-152/tags/trees"}],version:"current",sidebarPosition:226,frontMatter:{title:"B\xe4ume",description:"",sidebar_position:226,tags:["trees"]},sidebar:"documentationSidebar",previous:{title:"Schl\xfcsseltransformationen (Hashing)",permalink:"/java-docs/pr-preview/pr-152/documentation/hashing"},next:{title:"Ausnahmen (Exceptions)",permalink:"/java-docs/pr-preview/pr-152/documentation/exceptions"}},s={},l=[{value:"Bin\xe4rb\xe4ume",id:"bin\xe4rb\xe4ume",level:2},{value:"Traversierung von B\xe4umen",id:"traversierung-von-b\xe4umen",level:2}];function u(e){const n={admonition:"admonition",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["B\xe4ume sind abstrakte Datenstrukturen zum Darstellen von hierarchischen\nStrukturen. Sie bestehen i.d.R. aus beliebig vielen Elementen (Knoten), sowie\nVerbindungen zwischen den Elementen (Kanten). Den Ursprungsknoten bezeichnet man\nals ",(0,t.jsx)(n.em,{children:"Wurzelknoten"}),", untergeordnete Knoten als ",(0,t.jsx)(n.em,{children:"Kindknoten"}),", \xfcbergeordnete Knoten\nals ",(0,t.jsx)(n.em,{children:"Elternknoten"})," und Kinder ohne weitere untergeordnete Knoten als\n",(0,t.jsx)(n.em,{children:"Blattknoten"}),". B\xe4ume sind im Prinzip Erweiterungen von Listen: in einer Liste\nhat ein Knoten maximal einen Nachfolger, in einem Baum kann ein Knoten mehrere\nNachfolger besitzen."]}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart\n    node1 --Kante---\x3e node2\n    node1 --Kante---\x3e node3\n    node3 --Kante---\x3e node4\n    node3 --Kante---\x3e node5\n\n    size[H\xf6he: 2]\n\n    node1(Wurzelknoten\\nTiefe: 0, Grad: 2)\n    node2(Blattknoten\\nTiefe: 1, Grad: 0)\n    node3(Kindknoten/Elternknoten\\nTiefe: 1, Grad: 2)\n    node4(Blattknoten\\nTiefe: 2, Grad: 0)\n    node5(Blattknoten\\nTiefe: 2, Grad: 0)"}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsx)(n.p,{children:"Unter der Tiefe eines Knotens versteht man die L\xe4nge des Pfades vom Knoten bis\nzum Wurzelknoten, unter der H\xf6he eines Baumes die maximale Tiefe eines seiner\nKnoten und unter dem Grad eines Knotens die Anzahl seiner Kindknoten."})}),"\n",(0,t.jsx)(n.h2,{id:"bin\xe4rb\xe4ume",children:"Bin\xe4rb\xe4ume"}),"\n",(0,t.jsxs)(n.p,{children:["Bei Bin\xe4rb\xe4umen darf jeder Knoten maximal zwei Nachfolger besitzen. Besitzen\nalle inneren Knoten eines Bin\xe4rbaumes den Grad 2, spricht man von einem ",(0,t.jsx)(n.em,{children:"vollen\nBin\xe4rbaum"}),", besitzen alle Bl\xe4tter eines vollen Bin\xe4rbaum die gleiche Tiefe,\nspricht man von einem ",(0,t.jsx)(n.em,{children:"vollst\xe4ndigen Bin\xe4rbaum"}),"."]}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart TD\n    node1 --\x3e node2\n    node1 --\x3e node3\n    node2 --\x3e node4\n    node2 --\x3e node5\n    node3 --\x3e node6\n    node3 --\x3e node7\n\n    subgraph vollst\xe4ndiger Bin\xe4rbaum\n        node1( )\n        node2( )\n        node3( )\n        node4( )\n        node5( )\n        node6( )\n        node7( )\n    end\n\n    node8 --\x3e node9\n    node8 --\x3e node10\n    node10 --\x3e node11\n    node10 --\x3e node12\n\n    subgraph voller Bin\xe4rbaum\n        node8( )\n        node9( )\n        node10( )\n        node11( )\n        node12( )\n    end\n\n    node13 --\x3e node14\n    node13 --\x3e node15\n    node15 --\x3e node16\n\n    subgraph Bin\xe4rbaum\n        node13( )\n        node14( )\n        node15( )\n        node16( )\n    end"}),"\n",(0,t.jsx)(n.h2,{id:"traversierung-von-b\xe4umen",children:"Traversierung von B\xe4umen"}),"\n",(0,t.jsx)(n.p,{children:"Unter der Traversierung eines Baumes versteht man das Durchlaufen aller Elemente\neines Baumes. Im Gegensatz zu Listen, wo es genau eine nat\xfcrliche Ordnung f\xfcr\nden Durchlauf der Elemente gibt (von vorne nach hinten), existieren bei B\xe4umen\nmehrere sinnvolle Reihenfolgen:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Beim Tiefendurchlauf wird ausgehend vom Wurzelknoten zun\xe4chst der linke\nTeilbaum mit Tiefendurchlauf besucht, anschlie\xdfend der rechte Teilbaum"}),"\n",(0,t.jsx)(n.li,{children:"Beim Breitendurchlauf werden die Knoten nach der Breite des Baumes geordnet\nbesucht"}),"\n"]}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart TD\n    node1 --\x3e node2\n    node1 --\x3e node3\n    node2 --\x3e node4\n    node2 --\x3e node5\n    node3 --\x3e node6\n    node3 --\x3e node7\n    node5 --\x3e node8\n    node5 --\x3e node9\n\n    node1(6)\n    node2(2)\n    node3(8)\n    node4(1)\n    node5(4)\n    node6(7)\n    node7(9)\n    node8(3)\n    node9(5)\n\n    depth[Tiefendurchlauf: 6, 2, 1, 4, 3, 5, 8, 7, 9\n    Breitendurchlauf: 6, 2, 8, 1, 4, 7, 9, 3, 5]"})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>d});var t=o(67294);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);