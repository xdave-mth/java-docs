"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2888],{6213:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=a(85893),i=a(11151);const r={title:"Wrapper-Klassen",description:"",sidebar_position:141,tags:["java-api","wrappers"]},s=void 0,o={id:"documentation/wrappers",title:"Wrapper-Klassen",description:"",source:"@site/docs/documentation/wrappers.md",sourceDirName:"documentation",slug:"/documentation/wrappers",permalink:"/java-docs/pr-preview/pr-103/documentation/wrappers",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/wrappers.md",tags:[{label:"java-api",permalink:"/java-docs/pr-preview/pr-103/tags/java-api"},{label:"wrappers",permalink:"/java-docs/pr-preview/pr-103/tags/wrappers"}],version:"current",sidebarPosition:141,frontMatter:{title:"Wrapper-Klassen",description:"",sidebar_position:141,tags:["java-api","wrappers"]},sidebar:"documentationSidebar",previous:{title:"Die Java API",permalink:"/java-docs/pr-preview/pr-103/documentation/java-api"},next:{title:"Datums- und Zeitangaben",permalink:"/java-docs/pr-preview/pr-103/documentation/dates-and-times"}},p={},c=[];function l(e){const n={admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Wrapper-Klassen (auch H\xfcllenklassen genannt) verpacken primitive Datentypen in\nvollwertigen Klassen und erweitern so die primitiven Datentypen um hilfreiche\nMethoden. Das Verpacken eines primitiven Datentyps bezeichnet man als ",(0,t.jsx)(n.em,{children:"Boxing"}),",\ndas Entpacken als ",(0,t.jsx)(n.em,{children:"Unboxing"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Integer i = Integer.valueOf(\"631\");\n    System.out.println(i);\n    Boolean b = Boolean.logicalXor(true, false);\n    System.out.println(b);\n    Character c = Character.toUpperCase('a');\n    System.out.println(c);\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsxs)(n.p,{children:["Wrapper-Klassen basieren auf dem Entwurfsmuster ",(0,t.jsx)(n.em,{children:"Adapter"}),", welches die\nKommunikation zwischen Klassen mit zueinander inkompatiblen Schnittstellen\nerm\xf6glicht."]})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var t=a(67294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);