"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6810],{43195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(74848),i=t(28453);const r={title:"Wrapper-Klassen",description:"",sidebar_position:141,tags:["java-api","wrappers"]},s=void 0,o={id:"documentation/wrappers",title:"Wrapper-Klassen",description:"",source:"@site/docs/documentation/wrappers.md",sourceDirName:"documentation",slug:"/documentation/wrappers",permalink:"/java-docs/pr-preview/pr-154/documentation/wrappers",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/wrappers.md",tags:[{label:"java-api",permalink:"/java-docs/pr-preview/pr-154/tags/java-api"},{label:"wrappers",permalink:"/java-docs/pr-preview/pr-154/tags/wrappers"}],version:"current",sidebarPosition:141,frontMatter:{title:"Wrapper-Klassen",description:"",sidebar_position:141,tags:["java-api","wrappers"]},sidebar:"documentationSidebar",previous:{title:"Die Java API",permalink:"/java-docs/pr-preview/pr-154/documentation/java-api"},next:{title:"Datums- und Zeitangaben",permalink:"/java-docs/pr-preview/pr-154/documentation/dates-and-times"}},p={},c=[];function l(e){const n={admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Wrapper-Klassen (auch H\xfcllenklassen genannt) verpacken primitive Datentypen in\nvollwertigen Klassen und erweitern so die primitiven Datentypen um hilfreiche\nMethoden. Das Verpacken eines primitiven Datentyps bezeichnet man als ",(0,a.jsx)(n.em,{children:"Boxing"}),",\ndas Entpacken als ",(0,a.jsx)(n.em,{children:"Unboxing"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Integer i = Integer.valueOf(\"631\");\n    System.out.println(i);\n    Boolean b = Boolean.logicalXor(true, false);\n    System.out.println(b);\n    Character c = Character.toUpperCase('a');\n    System.out.println(c);\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,a.jsxs)(n.p,{children:["Wrapper-Klassen basieren auf dem Entwurfsmuster ",(0,a.jsx)(n.em,{children:"Adapter"}),", welches die\nKommunikation zwischen Klassen mit zueinander inkompatiblen Schnittstellen\nerm\xf6glicht."]})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);