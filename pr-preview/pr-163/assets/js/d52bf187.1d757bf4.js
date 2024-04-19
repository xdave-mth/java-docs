"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5238],{51202:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=a(74848),o=a(28453);const r={title:"Pseudozufallszahlen",description:"",sidebar_position:80,tags:["java-api","random"]},s=void 0,i={id:"documentation/pseudo-random-numbers",title:"Pseudozufallszahlen",description:"",source:"@site/docs/documentation/pseudo-random-numbers.md",sourceDirName:"documentation",slug:"/documentation/pseudo-random-numbers",permalink:"/java-docs/pr-preview/pr-163/documentation/pseudo-random-numbers",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/pseudo-random-numbers.md",tags:[{label:"java-api",permalink:"/java-docs/pr-preview/pr-163/tags/java-api"},{label:"random",permalink:"/java-docs/pr-preview/pr-163/tags/random"}],version:"current",sidebarPosition:80,frontMatter:{title:"Pseudozufallszahlen",description:"",sidebar_position:80,tags:["java-api","random"]},sidebar:"documentationSidebar",previous:{title:"Mathematische Berechnungen",permalink:"/java-docs/pr-preview/pr-163/documentation/calculations"},next:{title:"Konsolenanwendungen",permalink:"/java-docs/pr-preview/pr-163/documentation/console-applications"}},d={},c=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Die Klasse ",(0,t.jsx)(n.code,{children:"Random"})," erm\xf6glicht das Erzeugen von Pseudozufallszahlen.\nPseudozufallszahlen sind scheinbar zuf\xe4llige Zahlen, die aber auf Grund einer\nFormel berechnet werden."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Random random = new Random();\n    int randomNumber;\n\n    for (int i = 0; i < 100; i++) {\n      randomNumber = random.nextInt(100) + 1;\n      System.out.println(randomNumber);\n    }\n  }\n\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>i});var t=a(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);