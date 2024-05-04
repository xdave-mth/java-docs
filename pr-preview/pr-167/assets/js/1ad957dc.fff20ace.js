"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5215],{44487:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var i=t(74848),s=t(28453);const a={title:"Schnittstellen (Interfaces)",description:"",sidebar_position:210,tags:["interfaces"]},r=void 0,l={id:"documentation/interfaces",title:"Schnittstellen (Interfaces)",description:"",source:"@site/docs/documentation/interfaces.md",sourceDirName:"documentation",slug:"/documentation/interfaces",permalink:"/java-docs/pr-preview/pr-167/documentation/interfaces",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/interfaces.md",tags:[{label:"interfaces",permalink:"/java-docs/pr-preview/pr-167/tags/interfaces"}],version:"current",sidebarPosition:210,frontMatter:{title:"Schnittstellen (Interfaces)",description:"",sidebar_position:210,tags:["interfaces"]},sidebar:"documentationSidebar",previous:{title:"Abstrakte und finale Klassen und Methoden",permalink:"/java-docs/pr-preview/pr-167/documentation/abstract-and-final"},next:{title:"Listen",permalink:"/java-docs/pr-preview/pr-167/documentation/lists"}},c={},o=[{value:"Definition von Schnittstellen",id:"definition-von-schnittstellen",level:2},{value:"Implementieren von Schnittstellen",id:"implementieren-von-schnittstellen",level:2},{value:"Verwenden von Schnittstellen",id:"verwenden-von-schnittstellen",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Wird eine Klasse von mehreren Klassen abgeleitet, spricht man von\nMehrfachvererbung. Das Prinzip der Mehrfachvererbung wird von vielen\nProgrammiersprachen allerdings nicht (direkt) unterst\xfctzt. Der Hauptgrund hier\nsind m\xf6gliche Mehrdeutigkeiten. Erbt eine Klasse \xfcber mehrere m\xf6gliche Pfade von\neiner Basisklasse und werden dabei m\xf6glicherweise Methoden der Basisklasse\nunterschiedlich \xfcberschrieben, entstehen dadurch nicht eindeutige Varianten.\nAufgrund der Rautenform des Klassendiagramms wird dieses Szenario also\n",(0,i.jsx)(n.em,{children:"Diamantenproblem"})," bezeichnet."]}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    ClassA <|-- ClassB\n    ClassA <|-- ClassC\n    ClassB <|-- ClassD\n    ClassC <|-- ClassD\n\n    class ClassA {\n        +foo() void\n    }\n\n    class ClassB {\n        +foo() void\n    }\n\n    class ClassC {\n        +foo() void\n    }\n\n    class ClassD {\n\n    }"}),"\n",(0,i.jsx)(n.p,{children:"Zur L\xf6sung des Diamantenproblems werden Schnittstellen (Interfaces) verwendet.\nSchnittstellen sind im Prinzip abstrakte Klassen, die ausschlie\xdflich abstrakte\nMethoden besitzen. Durch Schnittstellen wird sichergestellt, dass Klassen\nbestimmte Methoden bereitstellen und dass verschiedene Klassen miteinander\nkommunizieren k\xf6nnen."}),"\n",(0,i.jsx)(n.h2,{id:"definition-von-schnittstellen",children:"Definition von Schnittstellen"}),"\n",(0,i.jsxs)(n.p,{children:["Die Definition einer Schnittstelle erfolgt analog zur Definition von Klassen.\nDas Schl\xfcsselwort f\xfcr Schnittstellen lautet ",(0,i.jsx)(n.code,{children:"interface"}),". Eine Schnittstelle kann\nnur \xf6ffentliche, abstrakte und \xf6ffentliche, statische Methoden beinhalten."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public interface Foo {\n\n  void bar();\n\n  void baz();\n\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsxs)(n.p,{children:["Die Angabe von ",(0,i.jsx)(n.code,{children:"abstract"})," und ",(0,i.jsx)(n.code,{children:"public"})," bei Methoden ist nicht erforderlich."]})}),"\n",(0,i.jsx)(n.h2,{id:"implementieren-von-schnittstellen",children:"Implementieren von Schnittstellen"}),"\n",(0,i.jsxs)(n.p,{children:["Schnittstellen werden mit Hilfe des Schl\xfcsselworts ",(0,i.jsx)(n.code,{children:"implements"})," von einer Klasse\nimplementiert. Durch die Implementierung der Schnittstelle verpflichtet sich die\nKlasse, alle Methoden der Schnittstelle zu implementieren."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Qux.java" showLineNumbers',children:'public class Qux implements Foo {\n\n  public void bar() {\n    System.out.println("bar");\n  }\n\n  public void baz() {\n    System.out.println("baz");\n  }\n\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"verwenden-von-schnittstellen",children:"Verwenden von Schnittstellen"}),"\n",(0,i.jsxs)(n.p,{children:["Schnittstellen k\xf6nnen ebenso wie Klassen als Datentypen verwendet werden. Die\nTypumwandlung von der implementierenden Klasse zur Schnittstelle bezeichnet man\nals ",(0,i.jsx)(n.em,{children:"Upcast"})," die R\xfcckumwandlung als ",(0,i.jsx)(n.em,{children:"Downcast"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Foo foo;\n    Qux qux = new Qux();\n    foo = qux; // Upcast\n  }\n\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);