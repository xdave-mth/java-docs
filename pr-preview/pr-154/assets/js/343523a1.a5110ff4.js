"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5713],{76149:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var s=i(74848),r=i(28453);const a={title:"W\xfcrfelspiel 4",description:"",tags:["console-applications","oo","enumerations","inheritance","polymorphy"]},l=void 0,t={id:"exam-exercises/exam-exercises-java1/dice-game-04",title:"W\xfcrfelspiel 4",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/dice-game-04.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/dice-game-04",permalink:"/java-docs/pr-preview/pr-154/exam-exercises/exam-exercises-java1/dice-game-04",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-game-04.md",tags:[{label:"console-applications",permalink:"/java-docs/pr-preview/pr-154/tags/console-applications"},{label:"oo",permalink:"/java-docs/pr-preview/pr-154/tags/oo"},{label:"enumerations",permalink:"/java-docs/pr-preview/pr-154/tags/enumerations"},{label:"inheritance",permalink:"/java-docs/pr-preview/pr-154/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-154/tags/polymorphy"}],version:"current",frontMatter:{title:"W\xfcrfelspiel 4",description:"",tags:["console-applications","oo","enumerations","inheritance","polymorphy"]},sidebar:"examExercisesSidebar",previous:{title:"W\xfcrfelspiel 3",permalink:"/java-docs/pr-preview/pr-154/exam-exercises/exam-exercises-java1/dice-game-03"},next:{title:"Rabattrechner",permalink:"/java-docs/pr-preview/pr-154/exam-exercises/exam-exercises-java1/discount-calculator"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>AmountDice</em>",id:"hinweis-zur-klasse-amountdice",level:2},{value:"Hinweis zur Klasse <em>FoodCategoryDice</em>",id:"hinweis-zur-klasse-foodcategorydice",level:2},{value:"Hinweis zur Klasse <em>Player</em>",id:"hinweis-zur-klasse-player",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    MainClass o-- Player\n    MainClass o-- AmountDice\n    MainClass o-- FoodCategoryDice\n\n    class MainClass {\n        -player1: Player$\n        -player2: Player$\n        -scanner: Scanner$\n        -amountDice: AmountDice$\n        -foodCategoryDice: FoodCategoryDice$\n        -rounds: int$\n        +main(args: String[]) void$\n    }\n\n    class Player {\n        -name: String &#123final&#125\n        -points: int\n        +Player(name: String)\n        +setPoints(points: int) void\n    }\n\n    class AmountDice {\n        +rollTheDice() int\n    }\n\n    class FoodCategoryDice {\n        +rollTheDice() FoodCategory\n    }\n\n    class FoodCategory {\n        BEVERAGES = Getr\xe4nke, 1\n        VEGETABLES = Gem\xfcse, 2\n        FRUITS = Obst, 2\n        GRAIN_PRODUCTS = Getreideprodukte, 3\n        POTATOES = Kartoffeln, 3\n        DAIRY_PRODUCTS = Milchprodukte, 4\n        MEAT = Fleisch, 4\n        FISH = Fisch, 4\n        EGGS = Eier, 4\n        FATS_AND_OILS = Fette und \xd6le, 5\n        SWEETS = S\xfc\xdfigkeiten, 6\n        -description: String &#123final&#125\n        -points: int &#123final&#125\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-amountdice",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"AmountDice"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"int rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit einen Wert zwischen 1 und 6 zur\xfcckgeben."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-foodcategorydice",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"FoodCategoryDice"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"FoodCategory rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit eine Lebensmittelkategorie zur\xfcckgeben."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-player",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"Player"})]}),"\n",(0,s.jsxs)(n.p,{children:["Der Konstruktor soll den Spielernamen (",(0,s.jsx)(n.code,{children:"name"}),") initialisieren."]}),"\n",(0,s.jsx)(n.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Zwei Spieler sollen abwechselnd solange zwei W\xfcrfel (einen\nLebensmittelkategorie-W\xfcrfel und einen Zahlenw\xfcrfel) werfen, bis einer der\nbeiden Spieler keine Punkte mehr hat"}),"\n",(0,s.jsx)(n.li,{children:"In jeder Runde verliert der Spieler mit dem schlechteren Wurfwert Punkte,\nwobei diesem Spieler die Differenz der beiden Wurfwerte abgezogen wird"}),"\n",(0,s.jsxs)(n.li,{children:["Der Wurfwert berechnet sich nach der Formel\n",(0,s.jsx)(n.code,{children:"Zahlenwert des Zahlenw\xfcrfels * Punktwert der gew\xfcrfelten Lebensmittelkategorie"})]}),"\n",(0,s.jsx)(n.li,{children:"Beide Spieler sollen zu Beginn des Spiels ihre Namen eingeben k\xf6nnen und\nsollen das Spiel mit 100 Punkte beginnen"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Spieler 1, gib bitte Deinen Namen ein: Hans\nSpieler 2, gib bitte Deinen Namen ein: Peter\n\nRunde 1\nHans hat 100 Punkte, Peter hat 100 Punkte\nHans w\xfcrfelt 1 x Eier (4 Punkte)\nPeter w\xfcrfelt 2 x S\xfc\xdfigkeiten (12 Punkte)\nHans werden 8 Punkte abgezogen\n...\nRunde 13\nHans hat 4 Punkte, Peter hat 30 Punkte\nHans w\xfcrfelt 1 x Obst (2 Punkte)\nPeter w\xfcrfelt 5 x Fleisch (20 Punkte)\nHans werden 18 Punkte abgezogen\n\nPeter hat gewonnen\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>t});var s=i(96540);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);