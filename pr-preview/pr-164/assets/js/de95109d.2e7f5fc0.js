"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4672],{70299:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var s=a(74848),r=a(28453),l=a(13979);const i={title:"Polymorphy04",description:""},t=void 0,o={id:"exercises/polymorphy/polymorphy04",title:"Polymorphy04",description:"",source:"@site/docs/exercises/polymorphy/polymorphy04.mdx",sourceDirName:"exercises/polymorphy",slug:"/exercises/polymorphy/polymorphy04",permalink:"/java-docs/pr-preview/pr-164/exercises/polymorphy/polymorphy04",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/polymorphy/polymorphy04.mdx",tags:[],version:"current",frontMatter:{title:"Polymorphy04",description:""},sidebar:"exercisesSidebar",previous:{title:"Polymorphy03",permalink:"/java-docs/pr-preview/pr-164/exercises/polymorphy/polymorphy03"},next:{title:"Abstrakte und finale Klassen und Methoden",permalink:"/java-docs/pr-preview/pr-164/exercises/abstract-and-final/"}},c={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>HighValueDice</em>",id:"hinweis-zur-klasse-highvaluedice",level:2},{value:"Hinweis zur Klasse <em>LowValueDice</em>",id:"hinweis-zur-klasse-lowvaluedice",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Passe die Klasse ",(0,s.jsx)(n.code,{children:"Dice"})," aus \xdcbungsaufgabe\n",(0,s.jsx)(n.a,{href:"../class-diagrams/class-diagrams02",children:"ClassDiagrams02"})," anhand des abgebildeten\nKlassendiagramms an und erstelle die Klassen ",(0,s.jsx)(n.code,{children:"HighValueDice"})," und\n",(0,s.jsx)(n.code,{children:"LowValueDice"})]}),"\n",(0,s.jsxs)(n.li,{children:["Passe die Klasse ",(0,s.jsx)(n.code,{children:"Player"})," aus \xdcbungsaufgabe\n",(0,s.jsx)(n.a,{href:"../class-diagrams/class-diagrams02",children:"ClassDiagrams02"})," anhand des abgebildeten\nKlassendiagramms an"]}),"\n",(0,s.jsxs)(n.li,{children:["Passe die Methode ",(0,s.jsx)(n.code,{children:"boolean move(player: Player)"})," der Klasse ",(0,s.jsx)(n.code,{children:"DiceGame"})," aus\n\xdcbungsaufgabe ",(0,s.jsx)(n.a,{href:"../class-diagrams/class-diagrams02",children:"ClassDiagrams02"})," so an,\ndass jeder Spieler w\xe4hrend des Spiels einmal die M\xf6glichkeit hat, entweder nur\nmit 4-5-6-W\xfcrfeln oder 1-2-3-W\xfcrfeln zu w\xfcrfeln"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    DiceGame o-- Dice\n    DiceGame o-- Player\n    DiceCup --o DiceGame\n    Dice <|-- LowValueDice : extends\n    Dice <|-- HighValueDice : extends\n\n    class Player {\n        -name: String\n        -score: int\n        -isActive: boolean\n        -specialAvailable: boolean\n        +Player(name: String)\n        +getName() String\n        +getScore() int\n        +setScore(int: score) void\n        +isActive() boolean\n        +setActive(isActive: boolean) void\n        +getSpecialAvailable() boolean\n        +setSpecialAvailable(specialAvailable: boolean) void\n    }\n\n    class Dice {\n        -id: int\n        #value: int\n        +Dice(id int)\n        +getId() int\n        +getValue() int\n        +rollTheDice() void\n    }\n\n    class LowValueDice {\n        +LowValueDice(id: int)\n        +rollTheDice() void\n    }\n\n    class HighValueDice {\n        +HighValueDice(id: int)\n        +rollTheDice() void\n    }\n\n    class DiceCup {\n        +rollTheDices(dices: ArrayList~Dice~) void\n        +rollTheDices(dices: Dice[]) void\n    }\n\n    class DiceGame {\n        -diceCup: DiceCup\n        -dices: ArrayList~Dice~\n        -players: ArrayList~Player~\n        -scanner: Scanner\n        -numberOfActivePlayers: int\n        +DiceGame(players: ArrayList~Player~)\n        +start() void\n        -move(player: Player) void\n    }"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-highvaluedice",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"HighValueDice"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void rollTheDice()"}),' soll nur 4er, 5er und 6er "w\xfcrfeln".']}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-lowvaluedice",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"LowValueDice"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void rollTheDice()"}),' soll nur 1er, 2er und 3er "w\xfcrfeln".']}),"\n",(0,s.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Hans hat aktuell 0 Punkte\nHans, m\xf6chtest Du einmalig Spezialw\xfcrfel verwenden (true, false)?: true\nHans, welche Spezialw\xfcrfel m\xf6chtest Du verwenden (1=4-5-6-W\xfcrfel, 2=1-2-3-W\xfcrfel)?: 1\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nHans hat 12 Punkte\nHans hat insgesamt 12 Punkte\n\u2026\nLisa hat aktuell 46 Punkte\nLisa, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nLisa hat 12 Punkte\nLisa hat insgesamt 58 Punkte\nLisa hat verloren\nDer Sieger hei\xdft Hans und hat 49 Punkte\n"})}),"\n",(0,s.jsx)(l.A,{pullRequest:"44",branchSuffix:"polymorphy/04"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var s=a(34164);const r={tabItem:"tabItem_Ymn6"};var l=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>w});var s=a(96540),r=a(34164),l=a(23104),i=a(56347),t=a(205),o=a(57485),c=a(31682),u=a(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:r}}=e;return{value:n,label:a,attributes:s,default:r}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function b(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=h(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:a,groupId:r}),[b,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Dv)(a);return[r,(0,s.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),v=(()=>{const e=c??b;return p({value:e,tabValues:l})?e:null})();(0,t.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function x(e){let{className:n,block:a,selectedValue:s,selectValue:i,tabValues:t}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,a=o.indexOf(n),r=t[a].value;r!==s&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:t.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function y(e){let{lazy:n,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,f.jsx)(x,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(n))}},13979:(e,n,a)=>{a.d(n,{A:()=>o});a(96540);var s=a(11470),r=a(19365),l=a(28774),i=a(21432),t=a(74848);function o(e){let{pullRequest:n,branchSuffix:a}=e;return(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(r.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(i.A,{language:"console",children:`git switch exercises/${a}`}),(0,t.jsx)(l.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(r.A,{value:"solution",label:"Solution",children:[(0,t.jsx)(i.A,{language:"console",children:`git switch solutions/${a}`}),(0,t.jsx)(l.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(r.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(l.A,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);