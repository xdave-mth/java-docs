"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4522],{42540:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>u,toc:()=>o});var s=a(85893),r=a(11151),i=a(85521);const t={title:"ClassDiagrams02",description:""},l=void 0,u={id:"exercises/class-diagrams/class-diagrams02",title:"ClassDiagrams02",description:"",source:"@site/docs/exercises/class-diagrams/class-diagrams02.mdx",sourceDirName:"exercises/class-diagrams",slug:"/exercises/class-diagrams/class-diagrams02",permalink:"/java-docs/pr-preview/pr-133/exercises/class-diagrams/class-diagrams02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-diagrams/class-diagrams02.mdx",tags:[],version:"current",frontMatter:{title:"ClassDiagrams02",description:""},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams01",permalink:"/java-docs/pr-preview/pr-133/exercises/class-diagrams/class-diagrams01"},next:{title:"ClassDiagrams03",permalink:"/java-docs/pr-preview/pr-133/exercises/class-diagrams/class-diagrams03"}},c={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>Player</em>",id:"hinweis-zur-klasse-player",level:2},{value:"Hinweise zur Klasse <em>DiceGame</em>",id:"hinweise-zur-klasse-dicegame",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Passe die Klasse ",(0,s.jsx)(n.code,{children:"Player"})," aus \xdcbungsaufgabe\n",(0,s.jsx)(n.a,{href:"class-diagrams01",children:"ClassDiagrams01"})," anhand des abgebildeten Klassendiagramms\nan und erstelle die Klasse ",(0,s.jsx)(n.code,{children:"DiceGame"})]}),"\n",(0,s.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche beliebig vielen Spielern erm\xf6glicht,\nabwechselnd mit 3 W\xfcrfeln zu w\xfcrfeln. F\xfcr jedes gew\xfcrfelte Auge bekommt der\njeweilige Spieler einen Punkt. Ziel des Spieles ist es, so nah wie m\xf6glich an\n50 Punkte heranzukommen, ohne allerdings die 50 Punkte zu \xfcberschreiten"}),"\n",(0,s.jsx)(n.li,{children:"Ein Spieler kann entscheiden ob er w\xfcrfeln m\xf6chte oder nicht. Entscheidet sich\nein Spieler nicht mehr zu w\xfcrfeln, kann er in der gesamten Runde nicht mehr\nw\xfcrfeln."}),"\n",(0,s.jsx)(n.li,{children:"Wenn nur noch ein Spieler \xfcbrig bleibt, der nicht \xfcber 50 Punkte ist, hat\ndieser automatisch gewonnen."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    DiceGame o-- Dice\n    DiceGame o-- Player\n    DiceGame o-- DiceCup\n\n    class Player {\n        -name: String &#123final&#125\n        -score: int\n        -isActive: boolean\n        +Player(name: String)\n        +getName() String\n        +getScore() int\n        +setScore(int: score) void\n        +isActive() boolean\n        +setActive(isActive: boolean) void\n    }\n\n    class Dice {\n        -id: int &#123final&#125\n        -value: int\n        +Dice(id: int)\n        +getId() int\n        +getValue() int\n        +rollTheDice() void\n    }\n\n    class DiceCup {\n        +rollTheDices(dices: Dice...) void\n    }\n\n    class DiceGame {\n        -diceCup: DiceCup &#123final&#125\n        -dices: ArrayList~Dice~ &#123final&#125\n        -players: ArrayList~Player~ &#123final&#125\n        -scanner: Scanner &#123final&#125\n        -numberOfActivePlayers: int\n        +DiceGame(players: ArrayList~Player~)\n        +start() void\n        +move(player: Player) void\n    }"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-player",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"Player"})]}),"\n",(0,s.jsx)(n.p,{children:"Passe den Konstruktor so an, dass auch weiterhin alle Attribute initialisiert\nwerden."}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-dicegame",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"DiceGame"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void start()"})," soll die Spieler abwechselnd einen Spielzug machen\nlassen und am Ende den Sieger und den Verlierer des Spiels auf der Konsole\nausgeben"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void move(player: Player)"})," soll es dem Spieler erm\xf6glichen zu\nw\xfcrfeln, bzw. seinen Spielzug zu beenden"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Hans hat aktuell 0 Punkte\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nHans hat 8 Punkte\nHans hat insgesamt 8 Punkte\n\u2026\nHans hat aktuell 43 Punkte\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: false\nLisa hat aktuell 41 Punkte\nLisa, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nLisa hat 10 Punkte\nLisa hat insgesamt 51 Punkte\nLisa hat verloren\nDer Sieger hei\xdft Hans und hat 43 Punkte\n"})}),"\n",(0,s.jsx)(i.Z,{pullRequest:"37",branchSuffix:"class-diagrams/02"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>t});a(67294);var s=a(90512);const r={tabItem:"tabItem_Ymn6"};var i=a(85893);function t(e){let{children:n,hidden:a,className:t}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,t),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>k});var s=a(67294),r=a(90512),i=a(12466),t=a(16550),l=a(20469),u=a(91980),c=a(67392),o=a(50012);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:r}}=e;return{value:n,label:a,attributes:s,default:r}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,t.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,u._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,i=h(e),[t,u]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,d]=p({queryString:a,groupId:r}),[g,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Nk)(a);return[r,(0,s.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),f=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{f&&u(f)}),[f]);return{selectedValue:t,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function x(e){let{className:n,block:a,selectedValue:s,selectValue:t,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),o=e=>{const n=e.currentTarget,a=u.indexOf(n),r=l[a].value;r!==s&&(c(n),t(r))},d=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;n=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;n=u[a]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>u.push(e),onKeyDown:d,onClick:o,...i,className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function k(e){const n=(0,b.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},85521:(e,n,a)=>{a.d(n,{Z:()=>u});a(67294);var s=a(74866),r=a(85162),i=a(33692),t=a(9286),l=a(85893);function u(e){let{pullRequest:n,branchSuffix:a}=e;return(0,l.jsxs)(s.Z,{children:[(0,l.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(t.Z,{language:"console",children:`git switch exercises/${a}`}),(0,l.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(t.Z,{language:"console",children:`git switch solutions/${a}`}),(0,l.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);