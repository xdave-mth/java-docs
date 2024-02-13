"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3635],{82375:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=a(85893),i=a(11151);const o={title:"Fast Food",description:"",tags:["oo","enumerations","inheritance","polymorphy"]},t=void 0,r={id:"exam-exercises/exam-exercises-java1/fast-food",title:"Fast Food",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/fast-food.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/fast-food",permalink:"/java-docs/pr-preview/pr-130/exam-exercises/exam-exercises-java1/fast-food",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/fast-food.md",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-130/tags/oo"},{label:"enumerations",permalink:"/java-docs/pr-preview/pr-130/tags/enumerations"},{label:"inheritance",permalink:"/java-docs/pr-preview/pr-130/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-130/tags/polymorphy"}],version:"current",frontMatter:{title:"Fast Food",description:"",tags:["oo","enumerations","inheritance","polymorphy"]},sidebar:"examExercisesSidebar",previous:{title:"W\xfcrfelspiele",permalink:"/java-docs/pr-preview/pr-130/exam-exercises/exam-exercises-java1/dice-games"},next:{title:"Geschenkesack",permalink:"/java-docs/pr-preview/pr-130/exam-exercises/exam-exercises-java1/gift-bag"}},d={},l=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>FastFood</em>",id:"hinweise-zur-klasse-fastfood",level:2},{value:"Hinweise zur Klasse <em>FastFoodShop</em>",id:"hinweise-zur-klasse-fastfoodshop",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Food o-- FoodCategory\n    Food <|-- FastFood\n    FastFood <|-- Burger\n    FastFoodShop o-- FastFood\n\n    class FoodCategory {\n        <<enumeration>>\n        BEVERAGES = Getr\xe4nke, 1\n        VEGETABLES = Gem\xfcse, 2\n        FRUITS = Obst, 2\n        GRAIN_PRODUCTS = Getreideprodukte, 3\n        POTATOES = Kartoffeln, 3\n        DAIRY_PRODUCTS = Milchprodukte, 4\n        MEAT = Fleisch, 4\n        FISH = Fisch, 4\n        EGGS = Eier, 4\n        FATS_AND_OILS = Fette und \xd6le, 5\n        SWEETS = S\xfc\xdfigkeiten, 6\n        -description: String &#123final&#125\n        -points: int &#123final&#125\n    }\n\n    class Food {\n        -name: String &#123final&#125\n        -foodCategory: FoodCategory &#123final&#125\n        -calorificValueInKcal: double &#123final&#125\n        +Food(name: String, foodCategory: FoodCategory, calorificValueInKcal: double)\n    }\n\n    class FastFood {\n        -isVegetarian: boolean &#123final&#125\n        -ratings: List~Integer~ &#123final&#125\n        +FastFood(name: String, foodCategory: FoodCategory, calorificValueInKcal: double, isVegetarian: boolean)\n        +addRating(rating: int) void\n        +getAverageRating() double\n    }\n\n    class Burger {\n        +Burger(name: String, calorificValueInKcal: double, isVegetarian: boolean)\n    }\n\n    class FastFoodShop {\n        -name: String &#123final&#125\n        -fastFood: List~FastFood~ &#123final&#125\n        +FastFoodShop(name: String)\n        +addFastFood(fastFood: FastFood) void\n        +rateFastFood(fastFood: FastFood, rating: int) void\n        +getBestRatedBurger() Burger\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-fastfood",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"FastFood"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addRating(rating: int)"})," soll den Bewertungen (",(0,s.jsx)(n.code,{children:"ratings"}),") die\neingehende Bewertung hinzuf\xfcgen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"double getAverageRating()"})," soll die durchschnittliche Bewertung\nzur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-fastfoodshop",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"FastFoodShop"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addFastFood(fastFood: FastFood)"})," soll das eingehende Fast\nFood zum Sortiment hinzuf\xfcgen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void rateFastFood(fastFood: FastFood, rating: int)"})," soll dem\neingehenden Fast Food die eingehende Bewertung hinzuf\xfcgen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"Burger getBestRatedBurger()"})," soll den Burger mit der h\xf6chsten\nBewertung zur\xfcckgeben"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>t});var s=a(67294);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);