"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6629],{61859:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=i(85893),t=i(11151);const o={title:"Konsolenanwendungen",description:"",sidebar_position:90,tags:["console-applications"]},a=void 0,r={id:"documentation/console-applications",title:"Konsolenanwendungen",description:"",source:"@site/docs/documentation/console-applications.md",sourceDirName:"documentation",slug:"/documentation/console-applications",permalink:"/java-docs/pr-preview/pr-123/documentation/console-applications",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/console-applications.md",tags:[{label:"console-applications",permalink:"/java-docs/pr-preview/pr-123/tags/console-applications"}],version:"current",sidebarPosition:90,frontMatter:{title:"Konsolenanwendungen",description:"",sidebar_position:90,tags:["console-applications"]},sidebar:"documentationSidebar",previous:{title:"Pseudozufallszahlen",permalink:"/java-docs/pr-preview/pr-123/documentation/pseudo-random-numbers"},next:{title:"Verzweigungen",permalink:"/java-docs/pr-preview/pr-123/documentation/cases"}},l={},c=[{value:"Konsoleneingaben",id:"konsoleneingaben",level:2},{value:"Konsolenausgaben",id:"konsolenausgaben",level:2}];function d(n){const e={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Konsolenanwendungen sind Programme ohne eine grafische Benutzeroberfl\xe4che d.h.\ndie Steuerung sowie die Eingabe und Ausgabe erfolgen ausschlie\xdflich \xfcber\ntextuelle Anweisungen."}),"\n",(0,s.jsx)(e.mermaid,{value:"flowchart\n    konsole[Konsole] -.->|System.in| klasse[Klasse]\n    klasse -.->|System.out| konsole"}),"\n",(0,s.jsx)(e.h2,{id:"konsoleneingaben",children:"Konsoleneingaben"}),"\n",(0,s.jsxs)(e.p,{children:["Die Klasse ",(0,s.jsx)(e.code,{children:"Scanner"})," im Paket ",(0,s.jsx)(e.code,{children:"java.util"})," stellt Methoden zur Verf\xfcgung, um\nEingaben von der Konsole einzulesen und in entsprechende Datentypen umzuwandeln."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    int i = scanner.nextInt();\n    System.out.println(i);\n  }\n\n}\n"})}),"\n",(0,s.jsx)(e.admonition,{title:"Hinweis",type:"note",children:(0,s.jsxs)(e.p,{children:["Dem Konstruktor muss der Standard-Eingabestrom ",(0,s.jsx)(e.code,{children:"System.in"})," als Wert mitgegeben\nwerden."]})}),"\n",(0,s.jsx)(e.h2,{id:"konsolenausgaben",children:"Konsolenausgaben"}),"\n",(0,s.jsxs)(e.p,{children:["Der Standard-Ausgabestrom ",(0,s.jsx)(e.code,{children:"System.out"})," bietet verschiedene Methoden, um\nInformationen auf der Konsole auszugeben:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Bei den print-Methoden wird die Information unver\xe4ndert und linksb\xfcndig\nausgegeben"}),"\n",(0,s.jsx)(e.li,{children:"Bei den println-Methoden wird die Information unver\xe4ndert und linksb\xfcndig\nausgegeben. Zus\xe4tzlich wird ein Zeilenumbruch ausgef\xfchrt"}),"\n",(0,s.jsxs)(e.li,{children:["Bei den printf-Methoden wird die Information formatiert ausgegeben. Die\nFormatierungsregeln sind nach dem Muster\n",(0,s.jsx)(e.em,{children:"[flags][width][.precision]conversion-character"})," aufgebaut"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    System.out.print("Winter is Coming");\n    System.out.println("Winter is Coming");\n    System.out.printf("%25S", "Winter is Coming");\n  }\n\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>r,a:()=>a});var s=i(67294);const t={},o=s.createContext(t);function a(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);