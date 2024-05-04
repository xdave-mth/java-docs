"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1604],{99012:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var s=i(74848),a=i(28453);const l={title:"W\xfcrfelspiel 3",description:"",tags:["console-applications","oo","enumerations","inheritance","polymorphy"]},r=void 0,t={id:"exam-exercises/exam-exercises-java1/dice-game-03",title:"W\xfcrfelspiel 3",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/dice-game-03.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/dice-game-03",permalink:"/java-docs/pr-preview/pr-169/exam-exercises/exam-exercises-java1/dice-game-03",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-game-03.md",tags:[{label:"console-applications",permalink:"/java-docs/pr-preview/pr-169/tags/console-applications"},{label:"oo",permalink:"/java-docs/pr-preview/pr-169/tags/oo"},{label:"enumerations",permalink:"/java-docs/pr-preview/pr-169/tags/enumerations"},{label:"inheritance",permalink:"/java-docs/pr-preview/pr-169/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-169/tags/polymorphy"}],version:"current",frontMatter:{title:"W\xfcrfelspiel 3",description:"",tags:["console-applications","oo","enumerations","inheritance","polymorphy"]},sidebar:"examExercisesSidebar",previous:{title:"W\xfcrfelspiel 2",permalink:"/java-docs/pr-preview/pr-169/exam-exercises/exam-exercises-java1/dice-game-02"},next:{title:"W\xfcrfelspiel 4",permalink:"/java-docs/pr-preview/pr-169/exam-exercises/exam-exercises-java1/dice-game-04"}},c={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Dice</em>",id:"hinweis-zur-klasse-dice",level:2},{value:"Hinweis zur Klasse <em>Player</em>",id:"hinweis-zur-klasse-player",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function o(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    MainClass o-- Player\n    Player o-- Dice\n\n    class MainClass {\n        -player1: Player$\n        -player2: Player$\n        -scanner: Scanner$\n        +main(args: String[]) void$\n    }\n\n    class Player {\n        -name: String &#123final&#125\n        -dice: Dice &#123final&#125\n        -healthPoints: int\n        +Player(name: String)\n        +rollTheDice() int\n        +reduceHealthPoints(points: int) void\n    }\n\n    class Dice {\n        +rollTheDice() int\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-dice",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"Dice"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"int rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit einen Wert zwischen 1 und 6 zur\xfcckgeben."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-player",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"Player"})]}),"\n",(0,s.jsx)(n.p,{children:"Der Konstruktor soll alle Attribute initialisieren und die Lebenspunkte auf den\nWert 10 setzen."}),"\n",(0,s.jsx)(n.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Zu Beginn des Spiels sollen die Spieler ihre Namen eingeben k\xf6nnen"}),"\n",(0,s.jsx)(n.li,{children:"Beide Spieler sollen zu Beginn des Spiels 10 Lebenspunkte besitzen"}),"\n",(0,s.jsx)(n.li,{children:"Zu Beginn einer jeder Runde soll der aktuelle Punktestand ausgegeben werden"}),"\n",(0,s.jsx)(n.li,{children:"Anschlie\xdfend sollen beide Spieler ihre W\xfcrfel werfen"}),"\n",(0,s.jsx)(n.li,{children:"Der Spieler mit dem niedrigeren Wurfwert soll einen Lebenspunkt verlieren, bei\nGleichstand soll keiner der Spieler einen Lebenspunkt verlieren"}),"\n",(0,s.jsx)(n.li,{children:"Das Spiel soll Enden, sobald ein Spieler keine Lebenspunkte mehr besitzt"}),"\n",(0,s.jsx)(n.li,{children:"Am Ende soll der Gewinner des Spiels ausgegeben werden"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Spieler 1, gib bitte Deinen Namen ein: Hans\nSpieler 2, gib bitte Deinen Namen ein: Peter\n\nHans hat 10 Lebenspunkte\nPeter hat 10 Lebenspunkte\nHans w\xfcrfelt eine 6\nPeter w\xfcrfelt eine 6\n...\nHans hat 4 Lebenspunkte\nPeter hat 1 Lebenspunkte\nHans w\xfcrfelt eine 5\nPeter w\xfcrfelt eine 1\nPeter verliert einen Punkt\n\nHans gewinnt\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>t});var s=i(96540);const a={},l=s.createContext(a);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);