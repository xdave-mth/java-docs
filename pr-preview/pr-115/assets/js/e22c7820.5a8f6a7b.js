"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5630],{27418:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=a(85893),n=a(11151);const i={title:"Kartenausteiler",description:"",tags:["oo","enumerations","io-streams"]},l=void 0,d={id:"exam-exercises/exam-exercises-java1/cards-dealer",title:"Kartenausteiler",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/cards-dealer.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/cards-dealer",permalink:"/java-docs/pr-preview/pr-115/exam-exercises/exam-exercises-java1/cards-dealer",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/cards-dealer.md",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-115/tags/oo"},{label:"enumerations",permalink:"/java-docs/pr-preview/pr-115/tags/enumerations"},{label:"io-streams",permalink:"/java-docs/pr-preview/pr-115/tags/io-streams"}],version:"current",frontMatter:{title:"Kartenausteiler",description:"",tags:["oo","enumerations","io-streams"]},sidebar:"examExercisesSidebar",previous:{title:"Programmierung 1",permalink:"/java-docs/pr-preview/pr-115/exam-exercises/exam-exercises-java1/"},next:{title:"Kassensystem",permalink:"/java-docs/pr-preview/pr-115/exam-exercises/exam-exercises-java1/cashier-system"}},t={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>Player</em>",id:"hinweise-zur-klasse-player",level:2},{value:"Hinweis zur Klasse <em>CardsDealer</em>",id:"hinweis-zur-klasse-cardsdealer",level:2},{value:"Hinweis zur Klasse <em>CardsReader</em>",id:"hinweis-zur-klasse-cardsreader",level:2},{value:"Beispielhafter Aufbau der Kartendatei",id:"beispielhafter-aufbau-der-kartendatei",level:2}];function o(e){const r={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,s.jsx)(r.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(r.mermaid,{value:"classDiagram\n    CardDealer o-- Player\n    CardDealer o-- Card\n    Player o-- Card\n\n    class Player {\n        -cards: List~Card~ &#123final&#125\n        +Player(cards: List~Card~)\n        +addCard(card: Card) void\n        +getCardWithHighestValue() Card\n        +getCardsByColour(colour: String) List~Card~\n    }\n\n    class CardDealer {\n        -deck: List~Card~ &#123final&#125\n        -player1: Player &#123final&#125\n        -player2: Player &#123final&#125\n        +CardsDealer(deck: List~Card~, player1: Player, player2: Player )\n        +dealCards(amount: int) void\n    }\n\n    class Card {\n        -colour: String &#123final&#125\n        -value: int &#123final&#125\n        +Card(colour: String, value: int)\n    }\n\n    class CardsReader {\n        +getCards(file: File) List~Card~\n    }"}),"\n",(0,s.jsx)(r.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(r.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"hinweise-zur-klasse-player",children:["Hinweise zur Klasse ",(0,s.jsx)(r.em,{children:"Player"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Die Methode ",(0,s.jsx)(r.code,{children:"void addCard(card: Card)"})," soll dem Spieler die eingehende Karte\nhinzuf\xfcgen"]}),"\n",(0,s.jsxs)(r.li,{children:["Die Methode ",(0,s.jsx)(r.code,{children:"List<Card> getCardsByColour(colour: String)"})," soll alle Karten des\nSpielers zur eingehenden Farbe zur\xfcckgeben"]}),"\n",(0,s.jsxs)(r.li,{children:["Die Methode ",(0,s.jsx)(r.code,{children:"Card getCardWithHighestValue()"})," soll die Karte des Spielers mit\ndem h\xf6chsten Wert zur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"hinweis-zur-klasse-cardsdealer",children:["Hinweis zur Klasse ",(0,s.jsx)(r.em,{children:"CardsDealer"})]}),"\n",(0,s.jsxs)(r.p,{children:["Die Methode ",(0,s.jsx)(r.code,{children:"void dealCards(amount: int)"})," soll den beiden Spielern die\neingehende Anzahl an zuf\xe4lligen Karten des Decks austeilen"]}),"\n",(0,s.jsxs)(r.h2,{id:"hinweis-zur-klasse-cardsreader",children:["Hinweis zur Klasse ",(0,s.jsx)(r.em,{children:"CardsReader"})]}),"\n",(0,s.jsxs)(r.p,{children:["Die Methode ",(0,s.jsx)(r.code,{children:"List<Card> getCards(file: File)"})," soll alle Karten der eingehenden\nDatei zur\xfcckgeben."]}),"\n",(0,s.jsx)(r.h2,{id:"beispielhafter-aufbau-der-kartendatei",children:"Beispielhafter Aufbau der Kartendatei"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"Karo;1\nKaro;2\nKaro;3\nKaro;4\nKaro;5\nHerz;1\nHerz;2\nHerz;3\nHerz;4\nHerz;5\nPik;1\nPik;2\nPik;3\nPik;4\nPik;5\nKreuz;1\nKreuz;2\nKreuz;3\nKreuz;4\nKreuz;5\n"})})]})}function u(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,r,a)=>{a.d(r,{Z:()=>d,a:()=>l});var s=a(67294);const n={},i=s.createContext(n);function l(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);