"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3135],{74420:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var a=i(85893),s=i(11151);const t={title:"Kommandozeile verwenden",description:"",sidebar_position:10},r=void 0,d={id:"additional-material/instructions/use-cli",title:"Kommandozeile verwenden",description:"",source:"@site/docs/additional-material/instructions/use-cli.md",sourceDirName:"additional-material/instructions",slug:"/additional-material/instructions/use-cli",permalink:"/java-docs/pr-preview/pr-75/additional-material/instructions/use-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/instructions/use-cli.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Kommandozeile verwenden",description:"",sidebar_position:10},sidebar:"additionalMaterialSidebar",previous:{title:"Anleitungen",permalink:"/java-docs/pr-preview/pr-75/additional-material/instructions/"},next:{title:"Eclipse einrichten",permalink:"/java-docs/pr-preview/pr-75/additional-material/instructions/setup-eclipse"}},o={},c=[];function l(e){const n={admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Zur Entwicklung von Java-Programmen wird neben dem ",(0,a.jsx)(n.em,{children:"Java Development Kit"})," (JDK)\nnur ein einfacher Texteditor ben\xf6tigt. Das Kompilieren und Ausf\xfchren der\nJava-Klassen erfolgt dann \xfcber die Kommandozeile. In Windows wird die\nKommandozeile als Eingabeaufforderung bezeichnet und kann \xfcber den Suchbegriff\n",(0,a.jsx)(n.code,{children:"CMD"})," gestartet werden."]}),"\n",(0,a.jsxs)(n.p,{children:["Um ein einfaches Hello-World-Programm in Java zu entwickeln, muss zun\xe4chst eine\nJava-Quellcode-Datei mit Hilfe eines Texteditors erstellt werden. Die\nJava-Quellcode-Datei muss dabei denselben Namen wie die Klasse besitzen und auf\n",(0,a.jsx)(n.code,{children:"java"})," enden."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'package demos;\n\npublic class MainClass {\n\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Damit die erstellte Java-Quellcode-Datei kompiliert werden kann, muss zun\xe4chst\nin der Kommandozeile in das entsprechende Projekt-Verzeichnis gewechselt werden."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:'C:\\Users>cd..\nC:\\>cd "Users\\Maier\\Projects\\Java\\src"\nC:\\Users\\Maier\\Projects\\Java\\src>\n'})}),"\n",(0,a.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,a.jsxs)(n.p,{children:["Mit dem Befehl ",(0,a.jsx)(n.code,{children:"cd <Pfad\\Verzeichnis>"})," kann zum angegebenen Verzeichnis\ngewechselt werden, mit dem Befehl ",(0,a.jsx)(n.code,{children:"cd.."})," zum \xfcbergeordneten Verzeichnis und mit\ndem Befehl ",(0,a.jsx)(n.code,{children:"<Laufwerksbuchstabe>:"})," zum angegebenen Laufwerk."]})}),"\n",(0,a.jsxs)(n.p,{children:["Das \xdcberf\xfchren der Java-Quellcode-Datei in eine Java-Bytecode-Datei erfolgt mit\nHilfe des Java-Kompilers. Hierzu muss der komplette Pfad zur Klasse inklusive\nder Dateiendung ",(0,a.jsx)(n.code,{children:"java"})," angegeben werden."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"C:\\Users\\Maier\\Projects\\Java\\src>javac demos/MainClass.java -d ../bin\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,a.jsxs)(n.p,{children:["Der optionale Zusatz ",(0,a.jsx)(n.code,{children:"-d"})," erm\xf6glicht die Angabe des Verzeichnisses f\xfcr die\nerstellten Bytecode-Dateien."]})}),"\n",(0,a.jsx)(n.p,{children:"Das Ausf\xfchren der erstellten Java-Bytecode-Datei erfolgt \xfcber die Java Virtual\nMachine. Auch beim Aus\xfchren muss der komplette Klassenpfad angegeben werden,\nallerdings ohne eine Dateiendung."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"C:\\Users\\Maier\\Projects\\Java\\src>cd..\nC:\\Users\\Maier\\Projects\\Java>cd bin\nC:\\Users\\Maier\\Projects\\Java\\bin>java demos.MainClass\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,a.jsxs)(n.p,{children:["Um eine Bytecode-Datei ausf\xfchren zu k\xf6nnen, ben\xf6tigt die dazugeh\xf6rige\nJava-Klasse die Methode ",(0,a.jsx)(n.code,{children:"void main(String[])"}),"."]})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>r});var a=i(67294);const s={},t=a.createContext(s);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);