"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9762],{88286:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(85893),i=t(11151);const r={title:"Assoziativspeicher (Maps)",description:"",sidebar_position:280,tags:["maps"]},a=void 0,d={id:"documentation/maps",title:"Assoziativspeicher (Maps)",description:"",source:"@site/docs/documentation/maps.md",sourceDirName:"documentation",slug:"/documentation/maps",permalink:"/java-docs/pr-preview/pr-100/documentation/maps",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/maps.md",tags:[{label:"maps",permalink:"/java-docs/pr-preview/pr-100/tags/maps"}],version:"current",sidebarPosition:280,frontMatter:{title:"Assoziativspeicher (Maps)",description:"",sidebar_position:280,tags:["maps"]},sidebar:"documentationSidebar",previous:{title:"Generische Programmierung",permalink:"/java-docs/pr-preview/pr-100/documentation/generics"},next:{title:"Optionals",permalink:"/java-docs/pr-preview/pr-100/documentation/optionals"}},o={},l=[];function c(e){const n={code:"code",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Unter einem Assoziativspeicher (Map) versteht man eine Menge zusammengeh\xf6riger\nPaare von Objekten. Das erste Objekt stellt dabei den Schl\xfcssel (Key), das\nzweite Objekt den Wert (Value) dar. Jeder Schl\xfcssel kann dabei nur einmal in\neinem Assoziativspeicher vorhanden sein. Aufgrund dieses Aufbaus werden\nAssoziativspeicher auch als W\xf6rterb\xfccher bezeichnet."}),"\n",(0,s.jsx)(n.mermaid,{value:"flowchart LR\n    subgraph Noten\n        direction LR\n        hans(Hans) -.-> g1((2.3))\n        peter(Peter) -.-> g2((1.7))\n        lisa(Lisa) -.-> g3((1.8))\n        max(Max) -.-> g4((4.2))\n    end"}),"\n",(0,s.jsxs)(n.p,{children:["Um auf die Eintr\xe4ge, Schl\xfcssel und Werte eines Assoziativspeichers zugreifen\nk\xf6nnen, stellt die Schnittstelle ",(0,s.jsx)(n.code,{children:"Map"})," die Methoden\n",(0,s.jsx)(n.code,{children:"Set<Entry<K, V>> entrySet()"}),", ",(0,s.jsx)(n.code,{children:"Set<K> keySet()"})," und ",(0,s.jsx)(n.code,{children:"Collection<V> values()"}),"\nzur Verf\xfcgung."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n\n    Map<Integer, String> foos = new HashMap<>();\n    foos.put(834, "Hans");\n    foos.put(269, "Peter");\n    foos.put(771, "Lisa");\n\n    for (Entry<Integer, String> entry : foos.entrySet()) {\n      System.out.println(entry.getKey());\n      System.out.println(entry.getValue());\n    }\n\n    for (Integer i : foos.keySet()) {\n      System.out.println(i);\n    }\n\n    for (String s : foos.values()) {\n      System.out.println(s);\n    }\n\n  }\n\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Die Klasse ",(0,s.jsx)(n.code,{children:"HashMap<K, V>"})," implementiert den Assoziativspeicher in Form einer\nHashtabelle. F\xfcr den Einsatz einer Hashtabelle ist es zwingend erforderlich,\ndass die Klasse, die den Schl\xfcssel bildet, die Methoden ",(0,s.jsx)(n.code,{children:"int hashCode()"})," und\n",(0,s.jsx)(n.code,{children:"boolean equals(object: Object)"})," gem\xe4\xdf den entsprechenden\nDokumentationskommentaren \xfcberschrieben hat. Im Gegensatz zu einem Bin\xe4rbaum\nliegen die Paare in einer Hashtabelle unsortiert vor."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Index"}),(0,s.jsx)(n.th,{children:"Schl\xfcssel"}),(0,s.jsx)(n.th,{children:"Wert"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Hans"}),(0,s.jsx)(n.td,{children:"2.3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Peter"}),(0,s.jsx)(n.td,{children:"1.7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"13"}),(0,s.jsx)(n.td,{children:"Lisa"}),(0,s.jsx)(n.td,{children:"1.8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"14"}),(0,s.jsx)(n.td,{children:"Max"}),(0,s.jsx)(n.td,{children:"4.2"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Klasse ",(0,s.jsx)(n.code,{children:"TreeMap<K, V>"})," implementiert den Assoziativspeicher in Form eines\nBin\xe4rbaumes. Als Datenstruktur wird dabei ein balancierter Baum verwendet, d.h.\nspezielle Einf\xfcge- und L\xf6schoperationen stellen sicher, dass der Baum nicht zu\neiner linearen Liste entartet. Da die Paare in einem Bin\xe4rbaum sortiert\nvorliegen, ist es f\xfcr den Einsatz zwingend erforderlich, dass die Klasse, die\nden Schl\xfcssel bildet, die Schnittstelle ",(0,s.jsx)(n.code,{children:"Comparable<T>"})," implementiert hat.\nAlternativ kann dem Konstruktor der Klasse ",(0,s.jsx)(n.code,{children:"TreeMap<K, V>"})," ein Komparator f\xfcr\nden Schl\xfcssel mitgegeben werden."]}),"\n",(0,s.jsx)(n.mermaid,{value:"flowchart TD\n    max --\x3e lisa\n    lisa --\x3e hans\n    max --\x3e peter\n\n    hans(Hans) -.-> g1((2.3))\n    peter(Peter) -.-> g2((1.7))\n    lisa(Lisa) -.-> g3((1.8))\n    max(Max) -.-> g4((4.2))"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var s=t(67294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);