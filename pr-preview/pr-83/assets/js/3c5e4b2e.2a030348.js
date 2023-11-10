"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2498],{22194:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=t(85893),s=t(11151);const r={title:"Feldbasierte Listen (ArrayLists)",description:"",sidebar_position:120,tags:[]},a=void 0,d={id:"documentation/array-lists",title:"Feldbasierte Listen (ArrayLists)",description:"",source:"@site/docs/documentation/array-lists.md",sourceDirName:"documentation",slug:"/documentation/array-lists",permalink:"/java-docs/pr-preview/pr-83/documentation/array-lists",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/array-lists.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{title:"Feldbasierte Listen (ArrayLists)",description:"",sidebar_position:120,tags:[]},sidebar:"documentationSidebar",previous:{title:"Felder (Arrays)",permalink:"/java-docs/pr-preview/pr-83/documentation/arrays"},next:{title:"Objektorientierte Programmierung",permalink:"/java-docs/pr-preview/pr-83/documentation/oo"}},l={},o=[];function c(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Das Arbeiten mit Feldern stellt einige Herausforderungen bereit:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Die L\xe4nge eines Feldes muss bereits bei der Initialisierung des Feldes\nangegeben werden und kann nicht mehr ver\xe4ndert werden"}),"\n",(0,i.jsx)(n.li,{children:"Beim Hinzuf\xfcgen eines Elements in ein volles Feld m\xfcssen alle Elemente des\nFeldes in ein neues, gr\xf6\xdferes Feld kopiert werden"}),"\n",(0,i.jsx)(n.li,{children:"Beim Einf\xfcgen oder L\xf6schen eines Elements m\xfcssen alle nachfolgenden Elemente\nverschoben werden"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Um das Arbeiten mit Feldern zu erleichtern, stellt die Java API die Klasse\n",(0,i.jsx)(n.code,{children:"ArrayList<E>"})," zur Verf\xfcgung. Diese stellt eine ver\xe4nderbare Liste dynamischer\nGr\xf6\xdfe auf Basis eines Feldes dar und bietet hilfreiche Methoden zum Hinzuf\xfcgen,\n\xc4ndern, L\xf6schen und Lesen von Listelementen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    List<String> list = new ArrayList<>();\n    list.add("Hans");\n    list.add("Peter");\n    list.add("Lisa");\n\n    System.out.println(list.size());\n    System.out.println(list.get(0));\n    list.set(0, "Max");\n    list.add("Heidi");\n    list.remove(0);\n  }\n\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var i=t(67294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);