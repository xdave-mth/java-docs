"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5267],{26218:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=r(74848),t=r(28453),a=r(13979);const l={title:"Maps01",description:""},i=void 0,o={id:"exercises/maps/maps01",title:"Maps01",description:"",source:"@site/docs/exercises/maps/maps01.mdx",sourceDirName:"exercises/maps",slug:"/exercises/maps/maps01",permalink:"/java-docs/pr-preview/pr-163/exercises/maps/maps01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/maps/maps01.mdx",tags:[],version:"current",frontMatter:{title:"Maps01",description:""},sidebar:"exercisesSidebar",previous:{title:"Assoziativspeicher (Maps)",permalink:"/java-docs/pr-preview/pr-163/exercises/maps/"},next:{title:"Maps02",permalink:"/java-docs/pr-preview/pr-163/exercises/maps/maps02"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>TelephoneBook</em>",id:"hinweise-zur-klasse-telephonebook",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,s.jsx)(n.code,{children:"Person"}),", ",(0,s.jsx)(n.code,{children:"TelephoneNumber"})," und ",(0,s.jsx)(n.code,{children:"TelephoneBook"})," anhand\ndes abgebildeten Klassendiagramms"]}),"\n",(0,s.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Telefonbuch mit mehreren\nEintr\xe4gen erzeugt und zu eingegebenen Namen die dazugeh\xf6rigen Telefonnummern\nauf der Konsole ausgibt"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    TelephoneBook o-- Person\n    TelephoneBook o-- TelephoneNumber\n\n    class Person {\n        <<record>>\n        name: String\n    }\n\n    class TelephoneNumber {\n        <<record>>\n        value: String\n    }\n\n    class TelephoneBook {\n        <<record>>\n        entries: Map~Person, TelephoneNumber~\n        +addEntry(person: Person, telephoneNumber: TelephoneNumber) void\n        +getTelephoneNumberByName(name: String) TelephoneNumber\n    }"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-telephonebook",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"TelephoneBook"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addEntry(person: Person, telephoneNumber: TelephoneNumber)"}),"\nsoll einen Eintrag im Telefonbuch anlegen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"TelephoneNumber getTelephoneNumberByName(name: String)"})," soll die\nTelefonnummer zum eingehenden Namen zur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsx)(a.A,{pullRequest:"59",branchSuffix:"maps/01"})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var s=r(34164);const t={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var s=r(96540),t=r(34164),a=r(23104),l=r(56347),i=r(205),o=r(57485),u=r(31682),c=r(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=p(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[u,d]=m({queryString:r,groupId:t}),[b,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,c.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),g=(()=>{const e=u??b;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function x(e){let{className:n,block:r,selectedValue:s,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),t=i[r].value;t!==s&&(u(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,t.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:t}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function T(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function w(e){const n=(0,f.A)();return(0,v.jsx)(T,{...e,children:d(e.children)},String(n))}},13979:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var s=r(11470),t=r(19365),a=r(28774),l=r(21432),i=r(74848);function o(e){let{pullRequest:n,branchSuffix:r}=e;return(0,i.jsxs)(s.A,{children:[(0,i.jsxs)(t.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.A,{language:"console",children:`git switch exercises/${r}`}),(0,i.jsx)(a.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(t.A,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.A,{language:"console",children:`git switch solutions/${r}`}),(0,i.jsx)(a.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(t.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(a.A,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);