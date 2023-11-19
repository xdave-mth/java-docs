"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7576],{91298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(85893),s=n(11151),l=n(85521);const i={title:"Generics01",description:""},a=void 0,o={id:"exercises/generics/generics01",title:"Generics01",description:"",source:"@site/docs/exercises/generics/generics01.mdx",sourceDirName:"exercises/generics",slug:"/exercises/generics/generics01",permalink:"/java-docs/pr-preview/pr-87/exercises/generics/generics01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics01.mdx",tags:[],version:"current",frontMatter:{title:"Generics01",description:""},sidebar:"exercisesSidebar",previous:{title:"Generische Programmierung",permalink:"/java-docs/pr-preview/pr-87/exercises/generics/"},next:{title:"Generics02",permalink:"/java-docs/pr-preview/pr-87/exercises/generics/generics02"}},c={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>BeerBottle</em>",id:"hinweis-zur-klasse-beerbottle",level:2},{value:"Hinweise zur Klasse <em>Crate</em>",id:"hinweise-zur-klasse-crate",level:2}];function d(e){const t={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Erstelle die Klassen ",(0,r.jsx)(t.code,{children:"Bottle"}),", ",(0,r.jsx)(t.code,{children:"BeerBottle"}),", ",(0,r.jsx)(t.code,{children:"WineBottle"})," und ",(0,r.jsx)(t.code,{children:"Crate"})," anhand\ndes abgebildeten Klassendiagramms"]}),"\n",(0,r.jsx)(t.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche eine Getr\xe4nkiste sowie mehrere\nFlaschen erzeugt und die Flaschen in die Getr\xe4nkekiste stellt"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(t.mermaid,{value:"classDiagram\n    Bottle <|-- BeerBottle\n    Bottle <|-- WineBottle\n    Crate o-- Bottle\n\n    class Crate {\n        -box1: Bottle\n        -box2: Bottle\n        -box3: Bottle\n        -box4: Bottle\n        -box5: Bottle\n        -box6: Bottle\n        +insertBottle(bottle: Bottle, box: int) void\n        +takeBottle(box: int) Bottle\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class Bottle {\n        <<abstract>>\n    }\n\n    class BeerBottle {\n        +chugALug() void\n    }\n\n    class WineBottle {\n\n    }"}),"\n",(0,r.jsxs)(t.h2,{id:"hinweis-zur-klasse-beerbottle",children:["Hinweis zur Klasse ",(0,r.jsx)(t.em,{children:"BeerBottle"})]}),"\n",(0,r.jsxs)(t.p,{children:["Die Methode ",(0,r.jsx)(t.code,{children:"void chugALug()"}),' soll den Text "Ex und Hopp" auf der Konsole\nausgeben.']}),"\n",(0,r.jsxs)(t.h2,{id:"hinweise-zur-klasse-crate",children:["Hinweise zur Klasse ",(0,r.jsx)(t.em,{children:"Crate"})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Die Methode ",(0,r.jsx)(t.code,{children:"void insertBottle(bottle: Bottle, box: int)"})," soll eine Flasche in\neine der 6 Getr\xe4nkef\xe4cher einf\xfcgen"]}),"\n",(0,r.jsxs)(t.li,{children:["Die Methode ",(0,r.jsx)(t.code,{children:"Bottle takeBottle(box: int)"})," soll die Flasche des entsprechenden\nGetr\xe4nkefachs zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsx)(l.Z,{pullRequest:"52",branchSuffix:"generics/01"})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(34334);const s={tabItem:"tabItem_Ymn6"};var l=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),s=n(34334),l=n(12466),i=n(16550),a=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,d]=b({queryString:n,groupId:s}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,u.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),x=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),s=a[n].value;s!==r&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,s.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(j,{...e,...t})]})}function k(e){const t=(0,g.Z)();return(0,f.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(74866),s=n(85162),l=n(39960),i=n(9286),a=n(85893);function o(e){let{pullRequest:t,branchSuffix:n}=e;return(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(i.Z,{language:"console",children:`git switch exercises/${n}`}),(0,a.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,a.jsx)(i.Z,{language:"console",children:`git switch solutions/${n}`}),(0,a.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);