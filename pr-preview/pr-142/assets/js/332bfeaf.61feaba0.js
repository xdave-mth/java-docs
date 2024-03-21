"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6693],{46400:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var i=s(85893),r=s(11151);const a={title:"Einkaufsportal",description:"",tags:["interfaces","records","inner-classes","generics"]},l=void 0,t={id:"exam-exercises/exam-exercises-java2/shopping-portal",title:"Einkaufsportal",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/shopping-portal.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/shopping-portal",permalink:"/java-docs/pr-preview/pr-142/exam-exercises/exam-exercises-java2/shopping-portal",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/shopping-portal.md",tags:[{label:"interfaces",permalink:"/java-docs/pr-preview/pr-142/tags/interfaces"},{label:"records",permalink:"/java-docs/pr-preview/pr-142/tags/records"},{label:"inner-classes",permalink:"/java-docs/pr-preview/pr-142/tags/inner-classes"},{label:"generics",permalink:"/java-docs/pr-preview/pr-142/tags/generics"}],version:"current",frontMatter:{title:"Einkaufsportal",description:"",tags:["interfaces","records","inner-classes","generics"]},sidebar:"examExercisesSidebar",previous:{title:"Planeten",permalink:"/java-docs/pr-preview/pr-142/exam-exercises/exam-exercises-java2/planets"},next:{title:"Raumstation",permalink:"/java-docs/pr-preview/pr-142/exam-exercises/exam-exercises-java2/space-station"}},o={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Item</em>",id:"hinweis-zur-klasse-item",level:2},{value:"Hinweise zur Klasse <em>ShoppingCart</em>",id:"hinweise-zur-klasse-shoppingcart",level:2},{value:"Hinweise zur Klasse <em>ShoppingPortal</em>",id:"hinweise-zur-klasse-shoppingportal",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    Sellable <|.. Product\n    ShoppingPortal o-- ShoppingCart~T extends Sellable~\n    ShoppingCart *-- Item\n\n    class ShoppingCart~T extends Sellable~ {\n        -items: List~Item~ &#123final&#125\n        +ShoppingCart()\n        +addItem(sellable: T, amount: int) void\n        +removeItem(sellable: T) void\n        +getTotalInEuro() double\n    }\n\n    class Item {\n        -sellable: T &#123final&#125\n        -amount: int &#123final&#125\n        -Item(sellable: T, amount: int)\n        +getSubTotalInEuro() double\n    }\n\n    class Sellable {\n        <<interface>>\n        +priceInEuro() double\n    }\n\n    class Product {\n        <<record>>\n        description: String\n        priceInEuro: double\n    }\n\n    class ShoppingPortal {\n        <<record>>\n        user: String\n        shoppingCart: ShoppingCart~Product~\n        +addProductToShoppingCart(product: Product, amount: int) void\n        +removeProductFromShoppingCart(product: Product) void\n        +clearShoppingCart() void\n    }"}),"\n",(0,i.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,i.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweis-zur-klasse-item",children:["Hinweis zur Klasse ",(0,i.jsx)(n.em,{children:"Item"})]}),"\n",(0,i.jsxs)(n.p,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"double getSubTotalInEuro()"})," soll die Zwischensumme des\nWarenkorbeintrags als Produkt aus dem Produktpreis und der Anzahl zur\xfcckgeben."]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-shoppingcart",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"ShoppingCart"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void addItem(sellable: T, amount: int)"})," soll den Eintr\xe4gen des\nWarenkorbs (",(0,i.jsx)(n.code,{children:"items"}),") das eingehende verk\xe4ufliche Objekt und die eingehende\nAnzahl als Eintrag hinzuf\xfcgen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void removeItem(sellable: T)"})," soll das eingehende verk\xe4ufliche\nObjekt aus den Eintr\xe4gen des Warenkorbs (",(0,i.jsx)(n.code,{children:"items"}),") entfernen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"double getTotalInEuro()"})," soll die Gesamtsumme des Warenkorbs\nzur\xfcckgeben"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-shoppingportal",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"ShoppingPortal"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void addProductToShoppingCart(product: Product, amount: int)"}),"\nsoll dem Warenkorb (",(0,i.jsx)(n.code,{children:"shoppingCart"}),") das eingehende Produkt und die eingehende\nAnzahl als Eintrag hinzuf\xfcgen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void removeProductFromShoppingCart(product: Product)"})," soll das\neingehende Produkt aus dem Warenkorb (",(0,i.jsx)(n.code,{children:"shoppingCart"}),") entfernen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void clearShoppingCart()"})," soll alle Eintr\xe4ge des Warenkorbs\n(",(0,i.jsx)(n.code,{children:"shoppingCart"}),") entfernen"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>l});var i=s(67294);const r={},a=i.createContext(r);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);