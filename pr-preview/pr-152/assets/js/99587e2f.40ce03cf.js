"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8106],{72052:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var t=i(74848),s=i(28453);const a={title:"Dateien und Verzeichnisse",description:"",sidebar_position:143,tags:["java-api","files"]},r=void 0,d={id:"documentation/files",title:"Dateien und Verzeichnisse",description:"",source:"@site/docs/documentation/files.md",sourceDirName:"documentation",slug:"/documentation/files",permalink:"/java-docs/pr-preview/pr-152/documentation/files",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/files.md",tags:[{label:"java-api",permalink:"/java-docs/pr-preview/pr-152/tags/java-api"},{label:"files",permalink:"/java-docs/pr-preview/pr-152/tags/files"}],version:"current",sidebarPosition:143,frontMatter:{title:"Dateien und Verzeichnisse",description:"",sidebar_position:143,tags:["java-api","files"]},sidebar:"documentationSidebar",previous:{title:"Datums- und Zeitangaben",permalink:"/java-docs/pr-preview/pr-152/documentation/dates-and-times"},next:{title:"Aufz\xe4hlungen (Enumerations)",permalink:"/java-docs/pr-preview/pr-152/documentation/enumerations"}},o={},c=[{value:"Lesen von Dateien mit Hilfe der Klasse <em>Scanner</em>",id:"lesen-von-dateien-mit-hilfe-der-klasse-scanner",level:2},{value:"Absolute und relative Pfadangaben",id:"absolute-und-relative-pfadangaben",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Die Klasse ",(0,t.jsx)(n.code,{children:"File"})," erm\xf6glicht die Arbeit mit Dateien und Verzeichnissen. Mit\nHilfe der Methode ",(0,t.jsx)(n.code,{children:"boolean exists()"})," kann beispielsweise gepr\xfcft werden, ob ein\nentsprechendes Verzeichnis bzw. eine entsprechende Datei existiert oder nicht.\nDie Klasse bietet zudem M ethoden zum Erstellen und L\xf6schen von Verzeichnissen\nbzw. Dateien. Zum Erzeugen eines File-Objekts wird entweder ein Pfad zu einem\nVerzeichnis bzw. zu einer Datei oder ein ",(0,t.jsx)(n.em,{children:"URI"})," (Unified Resource Identifier)\nben\xf6tigt."]}),"\n",(0,t.jsxs)(n.h2,{id:"lesen-von-dateien-mit-hilfe-der-klasse-scanner",children:["Lesen von Dateien mit Hilfe der Klasse ",(0,t.jsx)(n.em,{children:"Scanner"})]}),"\n",(0,t.jsxs)(n.p,{children:["Zum Lesen einer Datei k\xf6nnen entweder ",(0,t.jsx)(n.a,{href:"io-streams",children:"Datenstromklassen"})," oder die\nKlasse ",(0,t.jsx)(n.code,{children:"Scanner"})," verwendet werden."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) throws FileNotFoundException {\n    File file = new File("text.txt");\n    Scanner scanner = new Scanner(file);\n\n    while (scanner.hasNextLine()) {\n      String line = scanner.nextLine();\n      System.out.println(line);\n    }\n\n    scanner.close();\n  }\n\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsxs)(n.p,{children:["Nach der letzten Verwendung sollte die Methode ",(0,t.jsx)(n.code,{children:"void close()"})," der Klasse\n",(0,t.jsx)(n.code,{children:"Scanner"})," aufgerufen werden."]})}),"\n",(0,t.jsx)(n.h2,{id:"absolute-und-relative-pfadangaben",children:"Absolute und relative Pfadangaben"}),"\n",(0,t.jsx)(n.p,{children:"Beim Zugriff auf Verzeichnisse bzw. Dateien unterscheidet man zwischen absoluten\nund relativen Pfadangaben. Bei absoluten Pfadangaben wird der vollst\xe4ndige Pfad\nvon der Wurzel des jeweiligen Verzeichnissystems bis zum Ziel angegeben, bei\nrelativen der Weg von einem festgelegten Bezugspunkt bis zum Ziel."}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsxs)(n.p,{children:["Alle Klassen im Paket ",(0,t.jsx)(n.code,{children:"java.io"})," verwenden als Bezugspunkt das Arbeitsverzeichnis\ndes Benutzers (Systemeigenschaft ",(0,t.jsx)(n.code,{children:"user.dir"}),")."]})}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart LR\n    c[C:] --\x3e workspace\n    c --\x3e temp[Temp]\n    workspace[workspace] --\x3e project\n    temp --\x3e documentA[/DocumentA.txt/]\n    project[Project] --\x3e documents\n    documents[documents] --\x3e documentB[/DocumentB.txt/]"}),"\n",(0,t.jsxs)(n.p,{children:["Die Datei ",(0,t.jsx)(n.code,{children:"DocumentA.txt"})," kann entweder \xfcber den absoluten Pfad\n",(0,t.jsx)(n.code,{children:"C:\\Temp\\DocumentA.txt"})," oder \xfcber den relativen Pfad ",(0,t.jsx)(n.code,{children:"documents/DocumentA.txt"}),"\n(Bezugspunkt ist das Verzeichnis ",(0,t.jsx)(n.code,{children:"Project"}),"); die Datei ",(0,t.jsx)(n.code,{children:"DocumentB.txt"})," \xfcber den\nabsoluten Pfad ",(0,t.jsx)(n.code,{children:"C:\\workspace\\Project\\documents\\documentB.txt"})," oder \xfcber den\nrelativen Pfad ",(0,t.jsx)(n.code,{children:"../../Temp/documentA.txt"})," angesprochen werden."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);