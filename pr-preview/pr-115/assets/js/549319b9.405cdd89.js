"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1996],{13321:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var n=s(85893),r=s(11151),a=s(85521);const i={title:"Cases04",description:""},l=void 0,u={id:"exercises/cases/cases04",title:"Cases04",description:"",source:"@site/docs/exercises/cases/cases04.mdx",sourceDirName:"exercises/cases",slug:"/exercises/cases/cases04",permalink:"/java-docs/pr-preview/pr-115/exercises/cases/cases04",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/cases/cases04.mdx",tags:[],version:"current",frontMatter:{title:"Cases04",description:""},sidebar:"exercisesSidebar",previous:{title:"Cases03",permalink:"/java-docs/pr-preview/pr-115/exercises/cases/cases03"},next:{title:"Cases05",permalink:"/java-docs/pr-preview/pr-115/exercises/cases/cases05"}},c={},o=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweise",id:"hinweise",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche es zwei Spielern erm\xf6glicht, eine\nZufallszahl zwischen 1 und 100 zu erraten. Der Spieler, der mit seinem Tipp\nn\xe4her an der Zufallszahl liegt, gewinnt das Spiel."}),"\n",(0,n.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"Spieler 1, gib bitte Deinen Tipp ein: 34\nSpieler 2, gib bitte Deinen Tipp ein: 60\nZufallszahl: 39, Spieler 1 gewinnt\n"})}),"\n",(0,n.jsx)(t.h2,{id:"hinweise",children:"Hinweise"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Die Methode ",(0,n.jsx)(t.code,{children:"int nextInt(bound: int)"})," der Klasse ",(0,n.jsx)(t.code,{children:"Random"})," gibt eine\nZufallszahl zwischen 0 (inklusive) und der eingehenden Zahl (exklusive) zur\xfcck"]}),"\n",(0,n.jsxs)(t.li,{children:["Die statische Methode ",(0,n.jsx)(t.code,{children:"int abs(a: int)"})," der Klasse ",(0,n.jsx)(t.code,{children:"Math"})," gibt den Betrag der\neingehenden Zahl zur\xfcck"]}),"\n"]}),"\n",(0,n.jsx)(a.Z,{pullRequest:"10",branchSuffix:"cases/04"})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,t,s)=>{s.d(t,{Z:()=>i});s(67294);var n=s(90512);const r={tabItem:"tabItem_Ymn6"};var a=s(85893);function i(e){let{children:t,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:s,children:t})}},74866:(e,t,s)=>{s.d(t,{Z:()=>k});var n=s(67294),r=s(90512),a=s(12466),i=s(16550),l=s(20469),u=s(91980),c=s(67392),o=s(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:s}=e;const r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,u._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=p(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=b({queryString:s,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,o.Nk)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),v=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=s(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=s(85893);function x(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),o=e=>{const t=e.currentTarget,s=u.indexOf(t),r=l[s].value;r!==n&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=u.indexOf(e.currentTarget)+1;t=u[s]??u[0];break}case"ArrowLeft":{const s=u.indexOf(e.currentTarget)-1;t=u[s]??u[u.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:o,...a,className:(0,r.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function j(e){let{lazy:t,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,m.jsx)(x,{...e,...t}),(0,m.jsx)(j,{...e,...t})]})}function k(e){const t=(0,g.Z)();return(0,m.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,s)=>{s.d(t,{Z:()=>u});s(67294);var n=s(74866),r=s(85162),a=s(39960),i=s(9286),l=s(85893);function u(e){let{pullRequest:t,branchSuffix:s}=e;return(0,l.jsxs)(n.Z,{children:[(0,l.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch exercises/${s}`}),(0,l.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch solutions/${s}`}),(0,l.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);