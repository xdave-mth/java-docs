"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7059],{7249:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=s(85893),a=s(11151),t=s(85521);const l={title:"ClassDiagrams01",description:""},i=void 0,u={id:"exercises/uml/class-diagrams01",title:"ClassDiagrams01",description:"",source:"@site/docs/exercises/uml/class-diagrams01.mdx",sourceDirName:"exercises/uml",slug:"/exercises/uml/class-diagrams01",permalink:"/java-docs/pr-preview/pr-89/exercises/uml/class-diagrams01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/uml/class-diagrams01.mdx",tags:[],version:"current",frontMatter:{title:"ClassDiagrams01",description:""},sidebar:"exercisesSidebar",previous:{title:"ActivityDiagrams01",permalink:"/java-docs/pr-preview/pr-89/exercises/uml/activity-diagrams01"},next:{title:"ClassDiagrams02",permalink:"/java-docs/pr-preview/pr-89/exercises/uml/class-diagrams02"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>Player</em>",id:"hinweis-zur-klasse-player",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Erstelle die Klasse ",(0,n.jsx)(r.code,{children:"Player"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,n.jsxs)(r.li,{children:["Erstelle eine ausf\xfchrbare Klasse, welche ein einfaches W\xfcrfelduell zwischen 2\nSpielern simuliert:","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"W\xfcrfelwert von Spieler 1 > W\xfcrfelwert von Spieler 2: Spieler 1 gewinnt"}),"\n",(0,n.jsx)(r.li,{children:"W\xfcrfelwert von Spieler 1 < W\xfcrfelwert von Spieler 2: Spieler 2 gewinnt"}),"\n",(0,n.jsx)(r.li,{children:"W\xfcrfelwert von Spieler 1 = W\xfcrfelwert von Spieler 2: Unentschieden"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,n.jsx)(r.mermaid,{value:"classDiagram\n\n    class Player {\n        -name: String &#123final&#125\n        -score: int\n        +Player(String: name)\n        +name() String\n        +getScore() int\n        +setScore(score: int) void\n    }"}),"\n",(0,n.jsxs)(r.h2,{id:"hinweis-zur-klasse-player",children:["Hinweis zur Klasse ",(0,n.jsx)(r.em,{children:"Player"})]}),"\n",(0,n.jsx)(r.p,{children:"Der Konstruktor soll den Namen initialisieren."}),"\n",(0,n.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-console",children:"Hans w\xfcrfelt eine 2\nLisa w\xfcrfelt eine 3\nLisa gewinnt\n"})}),"\n",(0,n.jsx)(r.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,n.jsxs)(r.p,{children:["Verwende die Klasse ",(0,n.jsx)(r.code,{children:"Dice"})," aus \xdcbungsaufgabe ",(0,n.jsx)(r.a,{href:"../oo/oo03",children:"OO03"})]}),"\n",(0,n.jsx)(t.Z,{pullRequest:"36",branchSuffix:"class-diagrams/01"})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,r,s)=>{s.d(r,{Z:()=>l});s(67294);var n=s(34334);const a={tabItem:"tabItem_Ymn6"};var t=s(85893);function l(e){let{children:r,hidden:s,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:s,children:r})}},74866:(e,r,s)=>{s.d(r,{Z:()=>y});var n=s(67294),a=s(34334),t=s(12466),l=s(16550),i=s(20469),u=s(91980),o=s(67392),c=s(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:s}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:s,attributes:n,default:a}}=e;return{value:r,label:s,attributes:n,default:a}}))}(s);return function(e){const r=(0,o.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function h(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:s}=e;const a=(0,l.k6)(),t=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,u._X)(t),(0,n.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(a.location.search);r.set(t,e),a.replace({...a.location,search:r.toString()})}),[t,a])]}function f(e){const{defaultValue:r,queryString:s=!1,groupId:a}=e,t=p(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:t}))),[o,d]=m({queryString:s,groupId:a}),[f,g]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,t]=(0,c.Nk)(s);return[a,(0,n.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:a}),b=(()=>{const e=o??f;return h({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,t]),tabValues:t}}var g=s(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(85893);function x(e){let{className:r,block:s,selectedValue:n,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),c=e=>{const r=e.currentTarget,s=u.indexOf(r),a=i[s].value;a!==n&&(o(r),l(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=u.indexOf(e.currentTarget)+1;r=u[s]??u[0];break}case"ArrowLeft":{const s=u.indexOf(e.currentTarget)-1;r=u[s]??u[u.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},r),children:i.map((e=>{let{value:r,label:s,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>u.push(e),onKeyDown:d,onClick:c,...t,className:(0,a.Z)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":n===r}),children:s??r},r)}))})}function j(e){let{lazy:r,children:s,selectedValue:a}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function w(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...r}),(0,v.jsx)(j,{...e,...r})]})}function y(e){const r=(0,g.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(r))}},85521:(e,r,s)=>{s.d(r,{Z:()=>u});s(67294);var n=s(74866),a=s(85162),t=s(39960),l=s(9286),i=s(85893);function u(e){let{pullRequest:r,branchSuffix:s}=e;return(0,i.jsxs)(n.Z,{children:[(0,i.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${s}`}),(0,i.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${s}`}),(0,i.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(t.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);