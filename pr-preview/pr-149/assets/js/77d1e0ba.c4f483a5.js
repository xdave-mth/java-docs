"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5647],{82541:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var s=n(85893),r=n(11151),t=n(85521);const i={title:"ClassDiagrams05",description:""},l=void 0,u={id:"exercises/class-diagrams/class-diagrams05",title:"ClassDiagrams05",description:"",source:"@site/docs/exercises/class-diagrams/class-diagrams05.mdx",sourceDirName:"exercises/class-diagrams",slug:"/exercises/class-diagrams/class-diagrams05",permalink:"/java-docs/pr-preview/pr-149/exercises/class-diagrams/class-diagrams05",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-diagrams/class-diagrams05.mdx",tags:[],version:"current",frontMatter:{title:"ClassDiagrams05",description:""},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams04",permalink:"/java-docs/pr-preview/pr-149/exercises/class-diagrams/class-diagrams04"},next:{title:"Aktivit\xe4tsdiagramme",permalink:"/java-docs/pr-preview/pr-149/exercises/activity-diagrams/"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>SkatCardDeck</em>",id:"hinweise-zur-klasse-skatcarddeck",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){const a={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Erstelle die Aufz\xe4hlungen ",(0,s.jsx)(a.code,{children:"SkatCardColor"})," und ",(0,s.jsx)(a.code,{children:"SkatCardValue"})," sowie die\nKlassen ",(0,s.jsx)(a.code,{children:"SkatCard"})," und ",(0,s.jsx)(a.code,{children:"SkatCardDeck"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,s.jsx)(a.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Skatblatt erzeugt, mischt und auf\nder Konsole ausgibt"}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(a.mermaid,{value:"classDiagram\n     SkatCard o-- SkatCardColor\n     SkatCard o-- SkatCardValue\n     SkatCardDeck o-- SkatCard\n\n    class SkatCardValue {\n        <<enumeration>>\n        SEVEN = Seven, 7\n        EIGHT = Eight, 8\n        NINE = Nine, 9\n        TEN = Ten, 10\n        JACK, Jack, 2\n        CHECKERS = Checkers, 3\n        KING = King, 4\n        ACE = Ace, 11\n        -description: String &#123final&#125\n        -value: int &#123final&#125\n        SkatCardValue(description: String, value: int)\n        +getDescription() String\n        +getValue() int\n    }\n\n    class SkatCardColor {\n        <<enumeration>>\n        DIAMONDS = Diamonds\n        HEARTS = Hearts\n        SPADE = Spade\n        CLUBS = Clubs\n        SkatCardColor(description: String)\n        -description: String &#123final&#125\n        +getDescription() String\n    }\n\n    class SkatCard {\n        -color: SkatCardColor &#123final&#125\n        -value: SkatCardValue &#123final&#125\n        +SkatCard(color: SkatCardColor, value: SkatCardValue)\n        +getColor() SkatCardColor\n        +getValue() SkatCardValue\n        +getCardDescription() String\n    }\n\n    class SkatCardDeck {\n        -skatCards: ArrayList~SkatCard~ &#123final&#125\n        +SkatCardDeck()\n        +getSkatCards() ArrayList~SkatCard~\n        +shuffleSkatCards() void\n    }"}),"\n",(0,s.jsxs)(a.h2,{id:"hinweise-zur-klasse-skatcarddeck",children:["Hinweise zur Klasse ",(0,s.jsx)(a.em,{children:"SkatCardDeck"})]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Der Konstruktor soll ein Skatblatt, bestehend aus 32 Karten, erzeugen"}),"\n",(0,s.jsxs)(a.li,{children:["Die Methode ",(0,s.jsx)(a.code,{children:"void shuffleSkatCards()"})," soll das Skatblatt mischen"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-console",children:"Kreuz K\xf6nig\nPik 10\nKreuz 9\nPik 9\nKreuz Bube\nPik Ass\nHerz Bube\nKaro Bube\nPik 8\nKaro Dame\n\u2026\n"})}),"\n",(0,s.jsx)(a.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,s.jsxs)(a.p,{children:["Die statische Methode ",(0,s.jsx)(a.code,{children:"T[] values()"})," einer Aufz\xe4hlung gibt alle\nAufz\xe4hlungskonstanten der Aufz\xe4hlung als Feld zur\xfcck."]}),"\n",(0,s.jsx)(t.Z,{pullRequest:"40",branchSuffix:"class-diagrams/05"})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>i});n(67294);var s=n(90512);const r={tabItem:"tabItem_Ymn6"};var t=n(85893);function i(e){let{children:a,hidden:n,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>j});var s=n(67294),r=n(90512),t=n(12466),i=n(16550),l=n(20469),u=n(91980),o=n(67392),c=n(50012);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:n}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:s,default:r}}=e;return{value:a,label:n,attributes:s,default:r}}))}(n);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const r=(0,i.k6)(),t=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,u._X)(t),(0,s.useCallback)((e=>{if(!t)return;const a=new URLSearchParams(r.location.search);a.set(t,e),r.replace({...r.location,search:a.toString()})}),[t,r])]}function g(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,t=h(e),[i,u]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:t}))),[o,d]=m({queryString:n,groupId:r}),[g,b]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,t]=(0,c.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:r}),f=(()=>{const e=o??g;return p({value:e,tabValues:t})?e:null})();(0,l.Z)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,t]),tabValues:t}}var b=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function k(e){let{className:a,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),c=e=>{const a=e.currentTarget,n=u.indexOf(a),r=l[n].value;r!==s&&(o(a),i(r))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;a=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;a=u[n]??u[u.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},a),children:l.map((e=>{let{value:a,label:n,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>u.push(e),onKeyDown:d,onClick:c,...t,className:(0,r.Z)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":s===a}),children:n??a},a)}))})}function x(e){let{lazy:a,children:n,selectedValue:r}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=t.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function S(e){const a=g(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(k,{...e,...a}),(0,v.jsx)(x,{...e,...a})]})}function j(e){const a=(0,b.Z)();return(0,v.jsx)(S,{...e,children:d(e.children)},String(a))}},85521:(e,a,n)=>{n.d(a,{Z:()=>u});n(67294);var s=n(74866),r=n(85162),t=n(33692),i=n(9286),l=n(85893);function u(e){let{pullRequest:a,branchSuffix:n}=e;return(0,l.jsxs)(s.Z,{children:[(0,l.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch exercises/${n}`}),(0,l.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch solutions/${n}`}),(0,l.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(t.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);