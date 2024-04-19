"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3432],{74514:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var s=r(74848),a=r(28453),t=r(13979);const l={title:"Generics03",description:""},i=void 0,u={id:"exercises/generics/generics03",title:"Generics03",description:"",source:"@site/docs/exercises/generics/generics03.mdx",sourceDirName:"exercises/generics",slug:"/exercises/generics/generics03",permalink:"/java-docs/pr-preview/pr-164/exercises/generics/generics03",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics03.mdx",tags:[],version:"current",frontMatter:{title:"Generics03",description:""},sidebar:"exercisesSidebar",previous:{title:"Generics02",permalink:"/java-docs/pr-preview/pr-164/exercises/generics/generics02"},next:{title:"Generics04",permalink:"/java-docs/pr-preview/pr-164/exercises/generics/generics04"}},c={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>SchoolClass</em>",id:"hinweise-zur-klasse-schoolclass",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,s.jsx)(n.code,{children:"Pair"}),", ",(0,s.jsx)(n.code,{children:"Pupil"})," und ",(0,s.jsx)(n.code,{children:"SchoolClass"})," anhand des abgebildeten\nKlassendiagramms"]}),"\n",(0,s.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche eine Schulklasse mit mehreren\nSch\xfclern erzeugt und die Sch\xfclerpaare ausgibt"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    SchoolClass o-- Pupil\n\n    class Pair~T~ {\n        <<record>>\n        partA: T\n        partB: T\n    }\n\n    class SchoolClass {\n        <<record>>\n        name: String\n        pupils: List~Pupil~\n        +addPupil(pupil: Pupil) void\n        +getPairs() List~Pair~Pupil~~\n    }\n\n    class Pupil {\n        <<record>>\n        name: String\n        gender: String\n    }"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-schoolclass",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"SchoolClass"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addPupil(pupil: Pupil)"})," soll der Schulklasse den eingehenden\nSch\xfcler hinzuf\xfcgen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"List<Pair<Pupil>> getPairs()"})," soll aus den Sch\xfclern der\nSchulklasse zuf\xe4llige Paare bilden und zur\xfcckgeben. Bei einer ungeraden Anzahl\nan Sch\xfclern soll der verbleibende Sch\xfcler mit dem Wert ",(0,s.jsx)(n.code,{children:"null"})," gepaart werden"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Sch\xfcler:\nFranziska\nFritz\nHans\nJennifer\nLisa\nMax\nPeter\n\nPaare:\nJennifer - Franziska\nFritz - Lisa\nMax - Hans\nPeter - null\n"})}),"\n",(0,s.jsx)(t.A,{pullRequest:"64",branchSuffix:"generics/03"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var s=r(34164);const a={tabItem:"tabItem_Ymn6"};var t=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>S});var s=r(96540),a=r(34164),t=r(23104),l=r(56347),i=r(205),u=r(57485),c=r(31682),o=r(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:a}}=e;return{value:n,label:r,attributes:s,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const a=(0,l.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(a.location.search);n.set(t,e),a.replace({...a.location,search:n.toString()})}),[t,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,t=h(e),[l,u]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[c,d]=g({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,t]=(0,o.Dv)(r);return[a,(0,s.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:a}),f=(()=>{const e=c??m;return p({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{f&&u(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,t]),tabValues:t}}var b=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function x(e){let{className:n,block:r,selectedValue:s,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),o=e=>{const n=e.currentTarget,r=u.indexOf(n),a=i[r].value;a!==s&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>u.push(e),onKeyDown:d,onClick:o,...t,className:(0,a.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function S(e){const n=(0,b.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},13979:(e,n,r)=>{r.d(n,{A:()=>u});r(96540);var s=r(11470),a=r(19365),t=r(28774),l=r(21432),i=r(74848);function u(e){let{pullRequest:n,branchSuffix:r}=e;return(0,i.jsxs)(s.A,{children:[(0,i.jsxs)(a.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.A,{language:"console",children:`git switch exercises/${r}`}),(0,i.jsx)(t.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.A,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.A,{language:"console",children:`git switch solutions/${r}`}),(0,i.jsx)(t.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(t.A,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);