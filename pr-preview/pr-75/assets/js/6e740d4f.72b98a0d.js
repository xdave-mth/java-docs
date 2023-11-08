"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[436],{97342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(85893),i=t(11151);const s={title:"Datums- und Zeitangaben",description:"",sidebar_position:20,tags:["java-api","dates-and-times"]},r=void 0,o={id:"documentation/java-api/dates-and-times",title:"Datums- und Zeitangaben",description:"",source:"@site/docs/documentation/java-api/dates-and-times.md",sourceDirName:"documentation/java-api",slug:"/documentation/java-api/dates-and-times",permalink:"/java-docs/pr-preview/pr-75/documentation/java-api/dates-and-times",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/java-api/dates-and-times.md",tags:[{label:"java-api",permalink:"/java-docs/pr-preview/pr-75/tags/java-api"},{label:"dates-and-times",permalink:"/java-docs/pr-preview/pr-75/tags/dates-and-times"}],version:"current",sidebarPosition:20,frontMatter:{title:"Datums- und Zeitangaben",description:"",sidebar_position:20,tags:["java-api","dates-and-times"]},sidebar:"documentationSidebar",previous:{title:"Wrapper-Klassen",permalink:"/java-docs/pr-preview/pr-75/documentation/java-api/wrappers"},next:{title:"Dateien und Verzeichnisse",permalink:"/java-docs/pr-preview/pr-75/documentation/java-api/files"}},d={},c=[];function l(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Die Klasse ",(0,a.jsx)(n.code,{children:"LocalDateTime"})," liefert alle relevanten Informationen zum fast\nweltweit verwendeten Kalendersystem ISO-8601 (gregorianischer Kalender)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    LocalDateTime now = LocalDateTime.now();\n\n    System.out.println("Jahr: " + now.getYear());\n    System.out.println("Monat: " + now.getMonth());\n    System.out.println("Tag: " + now.getDayOfMonth());\n  }\n\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Neben den print-Methoden des Standard-Ausgabestroms ",(0,a.jsx)(n.code,{children:"System.out"})," besitzt die\nKlasse ",(0,a.jsx)(n.code,{children:"System"})," auch die Methode ",(0,a.jsx)(n.code,{children:"long currentTimeMillis()"}),", die die Differenz\nin Millisekunden zwischen der aktuellen Systemzeit und dem Nullpunkt zur\xfcckgibt."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    long timeInMilliseconds = System.currentTimeMillis();\n    System.out.println(timeInMilliseconds);\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,a.jsx)(n.p,{children:"Der festgelegte Nullpunkt ist der 1. Januar 1970, 0 Uhr."})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(67294);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);