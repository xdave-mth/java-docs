"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8169],{94294:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var l=i(85893),s=i(11151);const r={title:"W\xfcrfelspiele",description:"",tags:["console-applications","oo","enumerations","inheritance","polymorphy"]},a=void 0,d={id:"exam-exercises/exam-exercises-java1/dice-games",title:"W\xfcrfelspiele",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/dice-games.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/dice-games",permalink:"/java-docs/pr-preview/pr-83/exam-exercises/exam-exercises-java1/dice-games",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games.md",tags:[{label:"console-applications",permalink:"/java-docs/pr-preview/pr-83/tags/console-applications"},{label:"oo",permalink:"/java-docs/pr-preview/pr-83/tags/oo"},{label:"enumerations",permalink:"/java-docs/pr-preview/pr-83/tags/enumerations"},{label:"inheritance",permalink:"/java-docs/pr-preview/pr-83/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-83/tags/polymorphy"}],version:"current",frontMatter:{title:"W\xfcrfelspiele",description:"",tags:["console-applications","oo","enumerations","inheritance","polymorphy"]},sidebar:"examExercisesSidebar",previous:{title:"Kreatur",permalink:"/java-docs/pr-preview/pr-83/exam-exercises/exam-exercises-java1/creature"},next:{title:"Fast Food",permalink:"/java-docs/pr-preview/pr-83/exam-exercises/exam-exercises-java1/fast-food"}},c={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>CardColorDice</em>",id:"hinweis-zur-klasse-cardcolordice",level:2},{value:"Hinweis zur Klasse <em>ValueDice</em>",id:"hinweis-zur-klasse-valuedice",level:2},{value:"Hinweis zur Klasse <em>ShadeSymbolDice</em>",id:"hinweis-zur-klasse-shadesymboldice",level:2},{value:"Hinweise zur Klasse <em>Player</em>",id:"hinweise-zur-klasse-player",level:2},{value:"Hinweise zum W\xfcrfelspiel 1",id:"hinweise-zum-w\xfcrfelspiel-1",level:2},{value:"Hinweise zum W\xfcrfelspiel 2",id:"hinweise-zum-w\xfcrfelspiel-2",level:2}];function t(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle f\xfcr jedes\nW\xfcrfelspiel eine ausf\xfchrbare Klasse."}),"\n",(0,l.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,l.jsx)(n.mermaid,{value:"classDiagram\n    Dice <|-- CardColorDice\n    Dice <|-- ValueDice\n    Dice <|-- ShapeSymbolDice\n    CardColorDice o-- CardColor\n    ShapeSymbolDice o-- ShapeSymbol\n\n    class Player {\n        -name: String &#123final&#125\n        -points: int\n        +Player(name: String, points: int)\n        +addPoints(points: int) void\n        +deductPoints(points: int) void\n    }\n\n    class Dice {\n        +rollTheDice() void\n    }\n\n    class CardColorDice {\n        -cardColor: CardColor &#123final&#125\n        +rollTheDice() void\n    }\n\n    class ValueDice {\n        -value: int\n        +rollTheDice() void\n    }\n\n    class ShapeSymbolDice {\n        -shapeSymbol: ShapeSymbol\n        +rollTheDice() void\n    }\n\n    class CardColor {\n        <<enumeration>>\n        CLUBS = Kreuz, 1\n        SPADE = Pik, 2\n        HEARTS = Herz, 3\n        DIAMONDS = Karo, 4\n        -description: String &#123final&#125\n        -priority: int &#123final&#125\n    }\n\n    class ShapeSymbol {\n        <<enumeration>>\n        CIRCLE = 0\n        SQUARE = 4\n        TRIANGLE = 3\n        -corners: int &#123final&#125\n    }"}),"\n",(0,l.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,l.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"hinweis-zur-klasse-cardcolordice",children:["Hinweis zur Klasse ",(0,l.jsx)(n.em,{children:"CardColorDice"})]}),"\n",(0,l.jsxs)(n.p,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"void rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit der Kartenfarbe (",(0,l.jsx)(n.code,{children:"cardColor"}),") einen Wert zuweisen"]}),"\n",(0,l.jsxs)(n.h2,{id:"hinweis-zur-klasse-valuedice",children:["Hinweis zur Klasse ",(0,l.jsx)(n.em,{children:"ValueDice"})]}),"\n",(0,l.jsxs)(n.p,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"void rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit dem Wert (",(0,l.jsx)(n.code,{children:"value"}),") eine Zahl zwischen 1 und 6 zuweisen"]}),"\n",(0,l.jsxs)(n.h2,{id:"hinweis-zur-klasse-shadesymboldice",children:["Hinweis zur Klasse ",(0,l.jsx)(n.em,{children:"ShadeSymbolDice"})]}),"\n",(0,l.jsxs)(n.p,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"void rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit dem Formensymbol (",(0,l.jsx)(n.code,{children:"shadeSymbol"}),") einen Wert zuweisen"]}),"\n",(0,l.jsxs)(n.h2,{id:"hinweise-zur-klasse-player",children:["Hinweise zur Klasse ",(0,l.jsx)(n.em,{children:"Player"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"void addPoints(points: int)"})," soll die Punkte des Spielers\n(",(0,l.jsx)(n.code,{children:"points"}),") um die eingehenden Punkte erh\xf6hen"]}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"void deductPoints(points: int)"})," soll die Punkte des Spielers\n(",(0,l.jsx)(n.code,{children:"points"}),") um die eingehenden Punkte reduzieren"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"hinweise-zum-w\xfcrfelspiel-1",children:"Hinweise zum W\xfcrfelspiel 1"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Anzahl Spieler: 1"}),"\n",(0,l.jsx)(n.li,{children:"W\xfcrfel: 5 Formenw\xfcrfel"}),"\n",(0,l.jsxs)(n.li,{children:["Ablauf:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Das Spiel soll aus mehreren Runden bestehen"}),"\n",(0,l.jsx)(n.li,{children:"Zu Beginn soll der Spieler seinen Namen eingeben"}),"\n",(0,l.jsx)(n.li,{children:"Zu Beginn einer jeden Runde sollen alle W\xfcrfel geworfen werden"}),"\n",(0,l.jsxs)(n.li,{children:["Nach jedem Wurf soll der Spieler eingeben, ob die Anzahl Ecken (",(0,l.jsx)(n.code,{children:"corners"}),")\naller W\xfcrfel h\xf6her als 12 ist oder nicht. Liegt der Spieler mit seiner\nEinsch\xe4tzung richtig, bekommt er einen Punkt"]}),"\n",(0,l.jsx)(n.li,{children:"Am Ende einer Runde soll der Spieler eingeben, ob er eine weitere Runde\nspielen m\xf6chte"}),"\n",(0,l.jsx)(n.li,{children:"Am Ende des Spiels soll die Anzahl der gespielten Runden sowie die Punktzahl\nausgegeben werden"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"hinweise-zum-w\xfcrfelspiel-2",children:"Hinweise zum W\xfcrfelspiel 2"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Anzahl Spieler: 2"}),"\n",(0,l.jsx)(n.li,{children:"W\xfcrfel: 1 Formenw\xfcrfel, 1 Zahlenw\xfcrfel"}),"\n",(0,l.jsxs)(n.li,{children:["Ablauf:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Beide Spieler sollen zu Beginn des Spiels ihre Namen eingeben"}),"\n",(0,l.jsx)(n.li,{children:"Beide Spieler sollen das Spiel mit 100 Punkte beginnen"}),"\n",(0,l.jsx)(n.li,{children:"Beide Spieler sollen abwechselnd solange zwei W\xfcrfel werfen, bis einer der\nbeiden Spieler keine Punkte mehr hat"}),"\n",(0,l.jsx)(n.li,{children:"In jeder Runde verliert der Spieler mit dem schlechteren Wurfwert Punkte\n(die Differenz der beiden Wurfwerte)"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Hinweis: Der Wurfwert berechnet sich nach der Formel ",(0,l.jsx)(n.em,{children:"Zahlenwert des\nZahlenw\xfcrfels * Anzahl Ecken des gew\xfcrfelten Formensymbols"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>a});var l=i(67294);const s={},r=l.createContext(s);function a(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);