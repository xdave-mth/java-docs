"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7298],{39302:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(85893),a=n(11151),t=n(85521);const l={title:"InnerClasses01",description:""},i=void 0,o={id:"exercises/inner-classes/inner-classes01",title:"InnerClasses01",description:"",source:"@site/docs/exercises/inner-classes/inner-classes01.mdx",sourceDirName:"exercises/inner-classes",slug:"/exercises/inner-classes/inner-classes01",permalink:"/java-docs/pr-preview/pr-81/exercises/inner-classes/inner-classes01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/inner-classes/inner-classes01.mdx",tags:[],version:"current",frontMatter:{title:"InnerClasses01",description:""},sidebar:"exercisesSidebar",previous:{title:"Innere Klassen (Inner Classes)",permalink:"/java-docs/pr-preview/pr-81/exercises/inner-classes/"},next:{title:"InnerClasses02",permalink:"/java-docs/pr-preview/pr-81/exercises/inner-classes/inner-classes02"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const s={code:"code",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Erstelle die Klassen ",(0,r.jsx)(s.code,{children:"House"})," und ",(0,r.jsx)(s.code,{children:"Room"})," anhand des abgebildeten\nKlassendiagramms"]}),"\n",(0,r.jsx)(s.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Haus mit mehreren R\xe4umen erzeugt\nund auf der Konsole ausgibt"}),"\n",(0,r.jsx)(s.li,{children:"Die Klasse Room soll hierbei eine Element Klasse sein."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(s.mermaid,{value:"classDiagram\n    House *-- Room\n\n    class House {\n        -rooms: List~Room~\n        +addRoom(room: Room) void\n        +printRooms() void\n    }\n\n    class Room {\n        -name: String\n        +Room(name: String)\n        +printRoom() void\n    }"}),"\n",(0,r.jsx)(s.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"Wohnzimmer\nEsszimmer\nSchlafzimmer\nK\xfcche\nWC\n"})}),"\n",(0,r.jsx)(t.Z,{pullRequest:"54",branchSuffix:"inner-classes/01"})]})}function p(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,s,n)=>{n.d(s,{Z:()=>l});n(67294);var r=n(34334);const a={tabItem:"tabItem_Ymn6"};var t=n(85893);function l(e){let{children:s,hidden:n,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:s})}},74866:(e,s,n)=>{n.d(s,{Z:()=>k});var r=n(67294),a=n(34334),t=n(12466),l=n(16550),i=n(20469),o=n(91980),u=n(67392),c=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:n}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:n,attributes:r,default:a}}=e;return{value:s,label:n,attributes:r,default:a}}))}(n);return function(e){const s=(0,u.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function m(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function h(e){let{queryString:s=!1,groupId:n}=e;const a=(0,l.k6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o._X)(t),(0,r.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(a.location.search);s.set(t,e),a.replace({...a.location,search:s.toString()})}),[t,a])]}function b(e){const{defaultValue:s,queryString:n=!1,groupId:a}=e,t=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!m({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:t}))),[u,d]=h({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[a,t]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:a}),v=(()=>{const e=u??b;return m({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,t]),tabValues:t}}var f=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function x(e){let{className:s,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,t.o5)(),c=e=>{const s=e.currentTarget,n=o.indexOf(s),a=i[n].value;a!==r&&(u(s),l(a))},d=e=>{let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},s),children:i.map((e=>{let{value:s,label:n,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>o.push(e),onKeyDown:d,onClick:c,...t,className:(0,a.Z)("tabs__item",v.tabItem,t?.className,{"tabs__item--active":r===s}),children:n??s},s)}))})}function j(e){let{lazy:s,children:n,selectedValue:a}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function w(e){const s=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...s}),(0,g.jsx)(j,{...e,...s})]})}function k(e){const s=(0,f.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(s))}},85521:(e,s,n)=>{n.d(s,{Z:()=>o});n(67294);var r=n(74866),a=n(85162),t=n(39960),l=n(9286),i=n(85893);function o(e){let{pullRequest:s,branchSuffix:n}=e;return(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${n}`}),(0,i.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${n}`}),(0,i.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(t.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${s}/files?diff=split`,children:["PR#",s]})]})]})}}}]);