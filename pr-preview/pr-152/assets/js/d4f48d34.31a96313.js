"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5530],{57525:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var r=s(85893),i=s(11151);const o={title:"Tante-Emma-Laden",description:"",tags:["inheritance","polymorphy","interfaces","comparators","exceptions","records","maps"]},a=void 0,t={id:"exam-exercises/exam-exercises-java2/corner-shop",title:"Tante-Emma-Laden",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/corner-shop.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/corner-shop",permalink:"/java-docs/pr-preview/pr-152/exam-exercises/exam-exercises-java2/corner-shop",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/corner-shop.md",tags:[{label:"inheritance",permalink:"/java-docs/pr-preview/pr-152/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-152/tags/polymorphy"},{label:"interfaces",permalink:"/java-docs/pr-preview/pr-152/tags/interfaces"},{label:"comparators",permalink:"/java-docs/pr-preview/pr-152/tags/comparators"},{label:"exceptions",permalink:"/java-docs/pr-preview/pr-152/tags/exceptions"},{label:"records",permalink:"/java-docs/pr-preview/pr-152/tags/records"},{label:"maps",permalink:"/java-docs/pr-preview/pr-152/tags/maps"}],version:"current",frontMatter:{title:"Tante-Emma-Laden",description:"",tags:["inheritance","polymorphy","interfaces","comparators","exceptions","records","maps"]},sidebar:"examExercisesSidebar",previous:{title:"Programmierung 2",permalink:"/java-docs/pr-preview/pr-152/exam-exercises/exam-exercises-java2/"},next:{title:"W\xf6rterbuch",permalink:"/java-docs/pr-preview/pr-152/exam-exercises/exam-exercises-java2/dictionary"}},d={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Goods</em>",id:"hinweis-zur-klasse-goods",level:2},{value:"Hinweise zur Klasse <em>CornerShop</em>",id:"hinweise-zur-klasse-cornershop",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Product <|-- Goods\n    CornerShop o-- Goods\n    Comparable~Goods~ <|.. Goods\n    Goods o-- ClassOfGoods\n\n    class Product {\n        <<abstract>>\n        -description: String &#123final&#125\n        -price: double\n        -currency: String\n        +Product(description: String, price: double, currency: String)\n    }\n\n    class Goods {\n        -classOfGoods: ClassOfGoods &#123final&#125\n        -unit: String &#123final&#125\n        +Goods(description: String, price: double, currency: String, classOfGoods: ClassOfGoods, unit: String)\n        +compareTo(other: Goods) int\n    }\n\n    class Comparable~Goods~ {\n        <<interface>>\n        +compareTo(o: Goods) int\n    }\n\n    class CornerShop {\n        <<record>>\n        name: String\n        store: Map~Goods, Integer~\n        +getAmountByDescription(description: String) Optional~Integer~\n        +buyGoods(goods: Goods, amount: int) void\n        +sellGoods(goods: Goods, amount: int) void\n    }\n\n    class ClassOfGoods {\n        <<enumeration>>\n        BAKERY_PRODUCTS = Backwaren\n        DAIRY_PRODUCTS = Milchprodukte\n        FRUITS = Obst\n        VEGETABLES = Gem\xfcse\n        -description: String &#123final&#125\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweis-zur-klasse-goods",children:["Hinweis zur Klasse ",(0,r.jsx)(n.em,{children:"Goods"})]}),"\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"int compareTo(other: Goods)"})," soll so implementiert werden, dass\ndamit Waren aufsteigend nach ihrer Beschreibung sortiert werden k\xf6nnen."]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-cornershop",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"CornerShop"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"Optional<Integer> getAmountByDescription(description: String)"}),"\nsoll die Anzahl Waren zur eingehenden Warenbeschreibung als Optional\nzur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void buyGoods(goods: Goods, amount: int)"})," soll die eingehende\nWare im Lager (",(0,r.jsx)(n.code,{children:"store"}),") um die eingehende Anzahl erh\xf6hen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void sellGoods(goods: Goods, amount: int)"})," soll die eingehende\nWare im Lager (",(0,r.jsx)(n.code,{children:"store"}),") um die eingehende Anzahl reduzieren. F\xfcr den Fall,\ndass keine ausreichende Anzahl an Waren vorhanden ist, soll die Ausnahme\n",(0,r.jsx)(n.code,{children:"OutOfStockException"})," ausgel\xf6st werden"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>a});var r=s(67294);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);