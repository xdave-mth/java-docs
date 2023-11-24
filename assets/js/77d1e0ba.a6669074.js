"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5647],{82541:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=s(85893),r=s(11151),t=s(85521);const l={title:"ClassDiagrams05",description:""},i=void 0,u={id:"exercises/class-diagrams/class-diagrams05",title:"ClassDiagrams05",description:"",source:"@site/docs/exercises/class-diagrams/class-diagrams05.mdx",sourceDirName:"exercises/class-diagrams",slug:"/exercises/class-diagrams/class-diagrams05",permalink:"/java-docs/exercises/class-diagrams/class-diagrams05",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-diagrams/class-diagrams05.mdx",tags:[],version:"current",frontMatter:{title:"ClassDiagrams05",description:""},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams04",permalink:"/java-docs/exercises/class-diagrams/class-diagrams04"},next:{title:"Aktivit\xe4tsdiagramme",permalink:"/java-docs/exercises/activity-diagrams/"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>SkatCardDeck</em>",id:"hinweise-zur-klasse-skatcarddeck",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){const a={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Erstelle die Aufz\xe4hlungen ",(0,n.jsx)(a.code,{children:"SkatCardColor"})," und ",(0,n.jsx)(a.code,{children:"SkatCardValue"})," sowie die\nKlassen ",(0,n.jsx)(a.code,{children:"SkatCard"})," und ",(0,n.jsx)(a.code,{children:"SkatCardDeck"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,n.jsx)(a.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Skatblatt erzeugt, mischt und auf\nder Konsole ausgibt"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,n.jsx)(a.mermaid,{value:"classDiagram\n     SkatCard o-- SkatCardColor\n     SkatCard o-- SkatCardValue\n     SkatCardDeck o-- SkatCard\n\n    class SkatCardValue {\n        <<enumeration>>\n        SEVEN = Seven, 7\n        EIGHT = Eight, 8\n        NINE = Nine, 9\n        TEN = Ten, 10\n        JACK, Jack, 2\n        CHECKERS = Checkers, 3\n        KING = King, 4\n        ACE = Ace, 11\n        -description: String &#123final&#125\n        -value: int &#123final&#125\n    }\n\n    class SkatCardColor {\n        <<enumeration>>\n        DIAMONDS = Diamonds\n        HEARTS = Hearts\n        SPADE = Spade\n        CLUBS = Clubs\n        -description: String &#123final&#125\n    }\n\n    class SkatCard {\n        -color: SkatCardColor &#123final&#125\n        -value: SkatCardValue &#123final&#125\n        +SkatCard(color: SkatCardColor, value: SkatCardValue)\n        +color() SkatCardColor\n        +value() SkatCardValue\n        +getCardDescription() String\n    }\n\n    class SkatCardDeck {\n        -skatCards: ArrayList~SkatCard~ &#123final&#125\n        +SkatCardDeck()\n        +skatCards() ArrayList~SkatCard~\n        +shuffleSkatCards() void\n    }"}),"\n",(0,n.jsxs)(a.h2,{id:"hinweise-zur-klasse-skatcarddeck",children:["Hinweise zur Klasse ",(0,n.jsx)(a.em,{children:"SkatCardDeck"})]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Der Konstruktor soll ein Skatblatt, bestehend aus 32 Karten, erzeugen"}),"\n",(0,n.jsxs)(a.li,{children:["Die Methode ",(0,n.jsx)(a.code,{children:"void shuffleSkatCards()"})," soll das Skatblatt mischen"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:"Kreuz K\xf6nig\nPik 10\nKreuz 9\nPik 9\nKreuz Bube\nPik Ass\nHerz Bube\nKaro Bube\nPik 8\nKaro Dame\n\u2026\n"})}),"\n",(0,n.jsx)(a.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,n.jsxs)(a.p,{children:["Die statische Methode ",(0,n.jsx)(a.code,{children:"T[] values()"})," einer Aufz\xe4hlung gibt alle\nAufz\xe4hlungskonstanten der Aufz\xe4hlung als Feld zur\xfcck."]}),"\n",(0,n.jsx)(t.Z,{pullRequest:"40",branchSuffix:"class-diagrams/05"})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,a,s)=>{s.d(a,{Z:()=>l});s(67294);var n=s(34334);const r={tabItem:"tabItem_Ymn6"};var t=s(85893);function l(e){let{children:a,hidden:s,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:s,children:a})}},74866:(e,a,s)=>{s.d(a,{Z:()=>S});var n=s(67294),r=s(34334),t=s(12466),l=s(16550),i=s(20469),u=s(91980),o=s(67392),c=s(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:s}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:s,attributes:n,default:r}}=e;return{value:a,label:s,attributes:n,default:r}}))}(s);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,s])}function m(e){let{value:a,tabValues:s}=e;return s.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:s}=e;const r=(0,l.k6)(),t=function(e){let{queryString:a=!1,groupId:s}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:a,groupId:s});return[(0,u._X)(t),(0,n.useCallback)((e=>{if(!t)return;const a=new URLSearchParams(r.location.search);a.set(t,e),r.replace({...r.location,search:a.toString()})}),[t,r])]}function g(e){const{defaultValue:a,queryString:s=!1,groupId:r}=e,t=h(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:t}))),[o,d]=p({queryString:s,groupId:r}),[g,b]=function(e){let{groupId:a}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,t]=(0,c.Nk)(s);return[r,(0,n.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:r}),f=(()=>{const e=o??g;return m({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{f&&u(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,t]),tabValues:t}}var b=s(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(85893);function k(e){let{className:a,block:s,selectedValue:n,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),c=e=>{const a=e.currentTarget,s=u.indexOf(a),r=i[s].value;r!==n&&(o(a),l(r))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=u.indexOf(e.currentTarget)+1;a=u[s]??u[0];break}case"ArrowLeft":{const s=u.indexOf(e.currentTarget)-1;a=u[s]??u[u.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},a),children:i.map((e=>{let{value:a,label:s,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>u.push(e),onKeyDown:d,onClick:c,...t,className:(0,r.Z)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":n===a}),children:s??a},a)}))})}function x(e){let{lazy:a,children:s,selectedValue:r}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(a){const e=t.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function j(e){const a=g(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(k,{...e,...a}),(0,v.jsx)(x,{...e,...a})]})}function S(e){const a=(0,b.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(a))}},85521:(e,a,s)=>{s.d(a,{Z:()=>u});s(67294);var n=s(74866),r=s(85162),t=s(39960),l=s(9286),i=s(85893);function u(e){let{pullRequest:a,branchSuffix:s}=e;return(0,i.jsxs)(n.Z,{children:[(0,i.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${s}`}),(0,i.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${s}`}),(0,i.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(t.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);