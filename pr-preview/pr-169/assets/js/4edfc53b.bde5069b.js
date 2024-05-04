"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2379],{1286:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=s(74848),a=s(28453),t=s(13979);const l={title:"InnerClasses01",description:""},i=void 0,o={id:"exercises/inner-classes/inner-classes01",title:"InnerClasses01",description:"",source:"@site/docs/exercises/inner-classes/inner-classes01.mdx",sourceDirName:"exercises/inner-classes",slug:"/exercises/inner-classes/inner-classes01",permalink:"/java-docs/pr-preview/pr-169/exercises/inner-classes/inner-classes01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/inner-classes/inner-classes01.mdx",tags:[],version:"current",frontMatter:{title:"InnerClasses01",description:""},sidebar:"exercisesSidebar",previous:{title:"Innere Klassen (Inner Classes)",permalink:"/java-docs/pr-preview/pr-169/exercises/inner-classes/"},next:{title:"InnerClasses02",permalink:"/java-docs/pr-preview/pr-169/exercises/inner-classes/inner-classes02"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,r.jsx)(n.code,{children:"House"})," und ",(0,r.jsx)(n.code,{children:"Room"})," anhand des abgebildeten\nKlassendiagramms"]}),"\n",(0,r.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Haus mit mehreren R\xe4umen erzeugt\nund auf der Konsole ausgibt"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    House *-- Room\n\n    class House {\n        -rooms: List~Room~ &#123final&#125\n        +rooms() List~Room~\n        +addRoom(room: Room) void\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class Room {\n        -name: String &#123final&#125\n        +Room(name: String)\n        +name() String\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"Wohnzimmer\nEsszimmer\nSchlafzimmer\nK\xfcche\nWC\n"})}),"\n",(0,r.jsx)(t.A,{pullRequest:"54",branchSuffix:"inner-classes/01"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var r=s(34164);const a={tabItem:"tabItem_Ymn6"};var t=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>A});var r=s(96540),a=s(34164),t=s(23104),l=s(56347),i=s(205),o=s(57485),u=s(31682),c=s(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:a}}=e;return{value:n,label:s,attributes:r,default:a}}))}(s);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const a=(0,l.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(a.location.search);n.set(t,e),a.replace({...a.location,search:n.toString()})}),[t,a])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,t=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[u,d]=m({queryString:s,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,t]=(0,c.Dv)(s);return[a,(0,r.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:a}),g=(()=>{const e=u??b;return h({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,t]),tabValues:t}}var f=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(74848);function x(e){let{className:n,block:s,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,t.a_)(),c=e=>{const n=e.currentTarget,s=o.indexOf(n),a=i[s].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...t,className:(0,a.A)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function j(e){let{lazy:n,children:s,selectedValue:a}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function A(e){const n=(0,f.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},13979:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);var r=s(11470),a=s(19365),t=s(28774),l=s(21432),i=s(74848);function o(e){let{pullRequest:n,branchSuffix:s}=e;return(0,i.jsxs)(r.A,{children:[(0,i.jsxs)(a.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.A,{language:"console",children:`git switch exercises/${s}`}),(0,i.jsx)(t.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.A,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.A,{language:"console",children:`git switch solutions/${s}`}),(0,i.jsx)(t.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(t.A,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);