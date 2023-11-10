"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5691],{57750:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(85893),s=n(11151),t=n(85521);const l={title:"ClassDiagrams05",description:""},i=void 0,u={id:"exercises/uml/class-diagrams05",title:"ClassDiagrams05",description:"",source:"@site/docs/exercises/uml/class-diagrams05.mdx",sourceDirName:"exercises/uml",slug:"/exercises/uml/class-diagrams05",permalink:"/java-docs/pr-preview/pr-83/exercises/uml/class-diagrams05",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/uml/class-diagrams05.mdx",tags:[],version:"current",frontMatter:{title:"ClassDiagrams05",description:""},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams04",permalink:"/java-docs/pr-preview/pr-83/exercises/uml/class-diagrams04"},next:{title:"Polymorphie",permalink:"/java-docs/pr-preview/pr-83/exercises/polymorphy/"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>SkatCardDeck</em>",id:"hinweise-zur-klasse-skatcarddeck",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){const a={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Erstelle die Aufz\xe4hlungen ",(0,r.jsx)(a.code,{children:"SkatCardColor"})," und ",(0,r.jsx)(a.code,{children:"SkatCardValue"})," sowie die\nKlassen ",(0,r.jsx)(a.code,{children:"SkatCard"})," und ",(0,r.jsx)(a.code,{children:"SkatCardDeck"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,r.jsx)(a.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Skatblatt erzeugt, mischt und auf\nder Konsole ausgibt"}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(a.mermaid,{value:"classDiagram\n     SkatCard o-- SkatCardColor\n     SkatCard o-- SkatCardValue\n     SkatCardDeck o-- SkatCard\n\n    class SkatCardValue {\n        <<enumeration>>\n        SEVEN = Seven, 7\n        EIGHT = Eight, 8\n        NINE = Nine, 9\n        TEN = Ten, 10\n        JACK, Jack, 2\n        CHECKERS = Checkers, 3\n        KING = King, 4\n        ACE = Ace, 11\n        -description: String &#123final&#125\n        -value: int &#123final&#125\n    }\n\n    class SkatCardColor {\n        <<enumeration>>\n        DIAMONDS = Diamonds\n        HEARTS = Hearts\n        SPADE = Spade\n        CLUBS = Clubs\n        -description: String &#123final&#125\n    }\n\n    class SkatCard {\n        -color: SkatCardColor &#123final&#125\n        -value: SkatCardValue &#123final&#125\n        +SkatCard(color: SkatCardColor, value: SkatCardValue)\n        +color() SkatCardColor\n        +value() SkatCardValue\n        +getCardDescription() String\n    }\n\n    class SkatCardDeck {\n        -skatCards: ArrayList~SkatCard~ &#123final&#125\n        +SkatCardDeck()\n        +skatCards() ArrayList~SkatCard~\n        +shuffleSkatCards() void\n    }"}),"\n",(0,r.jsxs)(a.h2,{id:"hinweise-zur-klasse-skatcarddeck",children:["Hinweise zur Klasse ",(0,r.jsx)(a.em,{children:"SkatCardDeck"})]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Der Konstruktor soll ein Skatblatt, bestehend aus 32 Karten, erzeugen"}),"\n",(0,r.jsxs)(a.li,{children:["Die Methode ",(0,r.jsx)(a.code,{children:"void shuffleSkatCards()"})," soll das Skatblatt mischen"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-console",children:"Kreuz K\xf6nig\nPik 10\nKreuz 9\nPik 9\nKreuz Bube\nPik Ass\nHerz Bube\nKaro Bube\nPik 8\nKaro Dame\n\u2026\n"})}),"\n",(0,r.jsx)(a.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,r.jsxs)(a.p,{children:["Die statische Methode ",(0,r.jsx)(a.code,{children:"T[] values()"})," einer Aufz\xe4hlung gibt alle\nAufz\xe4hlungskonstanten der Aufz\xe4hlung als Feld zur\xfcck."]}),"\n",(0,r.jsx)(t.Z,{pullRequest:"40",branchSuffix:"class-diagrams/05"})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>l});n(67294);var r=n(34334);const s={tabItem:"tabItem_Ymn6"};var t=n(85893);function l(e){let{children:a,hidden:n,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>S});var r=n(67294),s=n(34334),t=n(12466),l=n(16550),i=n(20469),u=n(91980),o=n(67392),c=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:n}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:r,default:s}}=e;return{value:a,label:n,attributes:r,default:s}}))}(n);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const s=(0,l.k6)(),t=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,u._X)(t),(0,r.useCallback)((e=>{if(!t)return;const a=new URLSearchParams(s.location.search);a.set(t,e),s.replace({...s.location,search:a.toString()})}),[t,s])]}function b(e){const{defaultValue:a,queryString:n=!1,groupId:s}=e,t=h(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:t}))),[o,d]=m({queryString:n,groupId:s}),[b,g]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,t]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:s}),f=(()=>{const e=o??b;return p({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{f&&u(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,t]),tabValues:t}}var g=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function k(e){let{className:a,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),c=e=>{const a=e.currentTarget,n=u.indexOf(a),s=i[n].value;s!==r&&(o(a),l(s))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;a=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;a=u[n]??u[u.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>u.push(e),onKeyDown:d,onClick:c,...t,className:(0,s.Z)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":r===a}),children:n??a},a)}))})}function x(e){let{lazy:a,children:n,selectedValue:s}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=t.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function j(e){const a=b(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(k,{...e,...a}),(0,v.jsx)(x,{...e,...a})]})}function S(e){const a=(0,g.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(a))}},85521:(e,a,n)=>{n.d(a,{Z:()=>u});n(67294);var r=n(74866),s=n(85162),t=n(39960),l=n(9286),i=n(85893);function u(e){let{pullRequest:a,branchSuffix:n}=e;return(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${n}`}),(0,i.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${n}`}),(0,i.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(t.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);