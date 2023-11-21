"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2651],{31200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(85893),r=t(11151);const s={title:"Zeichenketten (Strings)",description:"",sidebar_position:50,tags:["java-api","strings"]},a=void 0,c={id:"documentation/strings",title:"Zeichenketten (Strings)",description:"",source:"@site/docs/documentation/strings.md",sourceDirName:"documentation",slug:"/documentation/strings",permalink:"/java-docs/pr-preview/pr-88/documentation/strings",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/strings.md",tags:[{label:"java-api",permalink:"/java-docs/pr-preview/pr-88/tags/java-api"},{label:"strings",permalink:"/java-docs/pr-preview/pr-88/tags/strings"}],version:"current",sidebarPosition:50,frontMatter:{title:"Zeichenketten (Strings)",description:"",sidebar_position:50,tags:["java-api","strings"]},sidebar:"documentationSidebar",previous:{title:"Datenobjekte",permalink:"/java-docs/pr-preview/pr-88/documentation/data-objects"},next:{title:"Operatoren",permalink:"/java-docs/pr-preview/pr-88/documentation/operators"}},d={},l=[{value:"Escape-Sequenzen",id:"escape-sequenzen",level:2},{value:"Textbl\xf6cke",id:"textbl\xf6cke",level:2}];function o(e){const n={code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Ketten von beliebigen Zeichen werden durch die Klasse ",(0,i.jsx)(n.code,{children:"String"})," realisiert. Diese\nstellt einige hilfreiche Methoden zur Verf\xfcgung, die bei der Analyse und der\nVerarbeitung von Zeichenketten Verwendung finden. Die Angabe einer Zeichenkette\nerfolgt \xfcber die Anf\xfchrungszeichen."]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart\n    subgraph text\n        a[Index: 0\\nWert: W] -.- b[Index: 1\\nWert: i]\n        b -.- c[Index: 2\\nWert: n]\n        c -.- d[Index: 3\\nWert: t]\n        d -.- e[Index: 4\\nWert: e]\n        e -.- f[Index: 5\\nWert: r]\n    end"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    String text = "Winter";\n    String text2 = "Coming";\n\n    String text3 = text + " is " + text2;\n\n    int length = text3.length();\n    char charAt1 = text3.charAt(0);\n    String upperCase = text3.toUpperCase();\n  }\n\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"escape-sequenzen",children:"Escape-Sequenzen"}),"\n",(0,i.jsx)(n.p,{children:"Steuer- und Sonderzeichen in Zeichenketten k\xf6nnen mit Hilfe einer Escape-Sequenz\nrealisiert werden."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Escape-Squenz"}),(0,i.jsx)(n.th,{children:"Beschreibung"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\\n"}),(0,i.jsx)(n.td,{children:"Zeilensprung"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\\t"}),(0,i.jsx)(n.td,{children:"Tabulatorsprung"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\\\\"}),(0,i.jsx)(n.td,{children:"Schr\xe4ger rechts"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:'\\"'}),(0,i.jsx)(n.td,{children:"Anf\xfchrungszeichen"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\\'"}),(0,i.jsx)(n.td,{children:"Hochkomma"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\\u0000 bis \\uFFFF"}),(0,i.jsx)(n.td,{children:"Unicode-Zeichen"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"textbl\xf6cke",children:"Textbl\xf6cke"}),"\n",(0,i.jsx)(n.p,{children:"Seit Java 15 erm\xf6glichen Textbl\xf6cke mehrzeilige Zeichenketten ohne umst\xe4ndliche\nUmwege."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    String text = """\n        <html>\n          <body>\n            <p>Winter is Coming</p>\n          </body>\n        </html>""";\n    System.out.println(text);\n  }\n\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var i=t(67294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);