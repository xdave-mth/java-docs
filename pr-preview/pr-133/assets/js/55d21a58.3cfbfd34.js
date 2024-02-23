"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7486],{51003:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(85893),o=t(11151);const r={title:"Optionals",description:"",sidebar_position:290,tags:["optionals"]},s=void 0,a={id:"documentation/optionals",title:"Optionals",description:"",source:"@site/docs/documentation/optionals.md",sourceDirName:"documentation",slug:"/documentation/optionals",permalink:"/java-docs/pr-preview/pr-133/documentation/optionals",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/optionals.md",tags:[{label:"optionals",permalink:"/java-docs/pr-preview/pr-133/tags/optionals"}],version:"current",sidebarPosition:290,frontMatter:{title:"Optionals",description:"",sidebar_position:290,tags:["optionals"]},sidebar:"documentationSidebar",previous:{title:"Assoziativspeicher (Maps)",permalink:"/java-docs/pr-preview/pr-133/documentation/maps"},next:{title:"Die Java Stream API",permalink:"/java-docs/pr-preview/pr-133/documentation/java-stream-api"}},l={},c=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Der Umgang mit null-Werten stellt in vielen Programmiersprachen eine gro\xdfe\nHerausforderung dar. Zur Vermeidung von Laufzeitfehlern (",(0,i.jsx)(n.code,{children:"NullPointerException"}),")\nm\xfcsste vor jedem Methodenaufruf eigentlich \xfcberpr\xfcft werden, ob ein g\xfcltiger\nWert vorliegt oder nicht."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    String text = foo();\n    System.out.println(text.length()); // Laufzeitfehler\n  }\n\n  public static String foo() {\n    return null;\n  }\n\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Die Klasse ",(0,i.jsx)(n.code,{children:"Optional"})," erm\xf6glicht in Java eine komfortable M\xf6glichkeit, mit\nnull-Werten umzugehen. Das eigentliche Objekt wird dabei in einem Objekt der\nKlasse ",(0,i.jsx)(n.code,{children:"Optional"})," verpackt; der Zugriff auf das verpackte Objekt erfolgt \xfcber\nentsprechende Methoden. Dies stellt sicher, dass sich der Entwickler mit\nnull-Werten auseinander setzen muss."]}),"\n",(0,i.jsxs)(n.p,{children:["F\xfcr den Umgang mit null-Werten stellt die Klasse ",(0,i.jsx)(n.code,{children:"Optional"})," Methoden wie\n",(0,i.jsx)(n.code,{children:"T get()"}),", ",(0,i.jsx)(n.code,{children:"boolean isPresent()"})," und ",(0,i.jsx)(n.code,{children:"void ifPresent(consumer: Consumer<T>)"})," zur\nVerf\xfcgung. Zudem existieren Methoden wie ",(0,i.jsx)(n.code,{children:"void orElse(other: T)"}),", mit denen\nStandardwerte festgelegt werden k\xf6nnen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Optional<String> optionalText = foo();\n    optionalText.ifPresent(t -> System.out.println(t.length()));\n  }\n\n  public static Optional<String> foo() {\n    return Optional.ofNullable(null);\n  }\n\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);