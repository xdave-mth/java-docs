"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6457],{37281:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var s=r(74848),t=r(28453),a=r(13979);const i={title:"Generics04",description:""},l=void 0,u={id:"exercises/generics/generics04",title:"Generics04",description:"",source:"@site/docs/exercises/generics/generics04.mdx",sourceDirName:"exercises/generics",slug:"/exercises/generics/generics04",permalink:"/java-docs/pr-preview/pr-161/exercises/generics/generics04",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics04.mdx",tags:[],version:"current",frontMatter:{title:"Generics04",description:""},sidebar:"exercisesSidebar",previous:{title:"Generics03",permalink:"/java-docs/pr-preview/pr-161/exercises/generics/generics03"},next:{title:"Assoziativspeicher (Maps)",permalink:"/java-docs/pr-preview/pr-161/exercises/maps/"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>Tournament</em>",id:"hinweise-zur-klasse-tournament",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,s.jsx)(n.code,{children:"Club"})," und ",(0,s.jsx)(n.code,{children:"Tournament"})," anhand des abgebildeten\nKlassendiagramms"]}),"\n",(0,s.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Turnier mit mehreren Vereinen\nerzeugt und die Paarungen ausgibt"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Tournament o-- Club\n    Tournament o-- Pair~Club~\n\n    class Pair~Club~ {\n        <<record>>\n        partA: T\n        partB: T\n    }\n\n    class Tournament {\n        <<record>>\n        title: String\n        clubs: List~Club~\n        pairs: List~Pair~Club~~\n        +addClub(club: Club) void\n        +pairs() List~Pair~Club~~\n    }\n\n    class Club {\n        <<record>>\n        name: String\n        marketValueInMillionEuros: int\n    }"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-tournament",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Tournament"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addClub(club: Club)"})," soll dem Turnier den eingehenden Verein\nhinzuf\xfcgen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"List<Pair<Club>> pairs()"})," soll aus den Vereinen des Turniers\nPaarungen f\xfcr Hin- und R\xfcckspiele bilden und zur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"SC Freiburg - Bayern Muenchen\nSC Freiburg - Borussia Dortmund\nBayern Muenchen - SC Freiburg\nBayern Muenchen - Borussia Dortmund\nBorussia Dortmund - SC Freiburg\nBorussia Dortmund - Bayern Muenchen\n"})}),"\n",(0,s.jsx)(a.A,{pullRequest:"65",branchSuffix:"generics/04"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var s=r(34164);const t={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>A});var s=r(96540),t=r(34164),a=r(23104),i=r(56347),l=r(205),u=r(57485),o=r(31682),c=r(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=h(e),[i,u]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[o,d]=b({queryString:r,groupId:t}),[m,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,c.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),f=(()=>{const e=o??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function x(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),c=e=>{const n=e.currentTarget,r=u.indexOf(n),t=l[r].value;t!==s&&(o(n),i(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,t.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:t}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function A(e){const n=(0,g.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},13979:(e,n,r)=>{r.d(n,{A:()=>u});r(96540);var s=r(11470),t=r(19365),a=r(28774),i=r(21432),l=r(74848);function u(e){let{pullRequest:n,branchSuffix:r}=e;return(0,l.jsxs)(s.A,{children:[(0,l.jsxs)(t.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.A,{language:"console",children:`git switch exercises/${r}`}),(0,l.jsx)(a.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(t.A,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.A,{language:"console",children:`git switch solutions/${r}`}),(0,l.jsx)(a.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(t.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(a.A,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);