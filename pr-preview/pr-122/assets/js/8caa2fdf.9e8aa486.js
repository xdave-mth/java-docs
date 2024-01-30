"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3085],{976:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>t,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=s(85893),r=s(11151),i=s(85521);const l={title:"ClassDiagrams04",description:""},t=void 0,o={id:"exercises/class-diagrams/class-diagrams04",title:"ClassDiagrams04",description:"",source:"@site/docs/exercises/class-diagrams/class-diagrams04.mdx",sourceDirName:"exercises/class-diagrams",slug:"/exercises/class-diagrams/class-diagrams04",permalink:"/java-docs/pr-preview/pr-122/exercises/class-diagrams/class-diagrams04",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-diagrams/class-diagrams04.mdx",tags:[],version:"current",frontMatter:{title:"ClassDiagrams04",description:""},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams03",permalink:"/java-docs/pr-preview/pr-122/exercises/class-diagrams/class-diagrams03"},next:{title:"ClassDiagrams05",permalink:"/java-docs/pr-preview/pr-122/exercises/class-diagrams/class-diagrams05"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>Person</em>",id:"hinweis-zur-klasse-person",level:2},{value:"Hinweise zur Klasse <em>Employee</em>",id:"hinweise-zur-klasse-employee",level:2},{value:"Hinweise zur Klasse <em>Company</em>",id:"hinweise-zur-klasse-company",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,a.jsx)(n.code,{children:"Company"}),", ",(0,a.jsx)(n.code,{children:"Employee"})," und ",(0,a.jsx)(n.code,{children:"Person"})," anhand des\nabgebildeten Klassendiagramms"]}),"\n",(0,a.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Unternehmen mit mehreren\nMitarbeitern erzeugt und auf der Konsole ausgibt"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n    Company o-- Employee\n    Employee o-- Person\n\n    class Company {\n        -name: String &#123final&#125\n        -employees: ArrayList~Employee~ &#123final&#125\n        -numberOfEmployees: int\n        +Company(name: String)\n        +name() String\n        +employees() ArrayList~Employee~\n        +getNumberOfEmployees() int\n        +addEmployee(employee: Employee) void\n        +toString() String\n    }\n\n    class Person {\n        -name: String &#123final&#125\n        +Person(name: String)\n        +name() String\n    }\n\n    class Employee {\n        -employeeId: int &#123final&#125\n        -person: Person &#123final&#125\n        -salaryInEuro: int\n        +Employee(employeeId: int, person: Person, salaryInEuro: int)\n        +employeeId() int\n        +name() String\n        +setSalaryInEuro(salaryInEuro: int) void\n        +getSalaryInEuro() int\n        +toString() String\n    }"}),"\n",(0,a.jsxs)(n.h2,{id:"hinweis-zur-klasse-person",children:["Hinweis zur Klasse ",(0,a.jsx)(n.em,{children:"Person"})]}),"\n",(0,a.jsx)(n.p,{children:"Der Konstruktor soll den Namen initialisieren."}),"\n",(0,a.jsxs)(n.h2,{id:"hinweise-zur-klasse-employee",children:["Hinweise zur Klasse ",(0,a.jsx)(n.em,{children:"Employee"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"String name()"})," soll den Namen des Mitarbeiters zur\xfcckgeben"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweise-zur-klasse-company",children:["Hinweise zur Klasse ",(0,a.jsx)(n.em,{children:"Company"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Der Konstruktor soll den Namen sowie die Mitarbeiterliste initialisieren"}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void addEmployee(employee: Employee)"})," soll der Mitarbeiterliste\neinen Mitarbeiter hinzuf\xfcgen"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"Maier GmbH (5 Mitarbeiter)\n1 - Max Schmid - 50000\u20ac\n2 - Hans M\xfcller - 75000\u20ac\n3 - Lisa Meier - 40000\u20ac\n4 - Peter Schneider - 55000\u20ac\n5 - Miriam Albers - 90000\u20ac\n"})}),"\n",(0,a.jsx)(i.Z,{pullRequest:"39",branchSuffix:"class-diagrams/04"})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,n,s)=>{s.d(n,{Z:()=>l});s(67294);var a=s(90512);const r={tabItem:"tabItem_Ymn6"};var i=s(85893);function l(e){let{children:n,hidden:s,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>w});var a=s(67294),r=s(90512),i=s(12466),l=s(16550),t=s(20469),o=s(91980),u=s(67392),c=s(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:r}}=e;return{value:n,label:s,attributes:a,default:r}}))}(s);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=m(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[u,d]=h({queryString:s,groupId:r}),[g,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Nk)(s);return[r,(0,a.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),f=(()=>{const e=u??g;return p({value:e,tabValues:i})?e:null})();(0,t.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=s(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=s(85893);function v(e){let{className:n,block:s,selectedValue:a,selectValue:l,tabValues:t}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const n=e.currentTarget,s=o.indexOf(n),r=t[s].value;r!==a&&(u(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function j(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},85521:(e,n,s)=>{s.d(n,{Z:()=>o});s(67294);var a=s(74866),r=s(85162),i=s(33692),l=s(9286),t=s(85893);function o(e){let{pullRequest:n,branchSuffix:s}=e;return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch exercises/${s}`}),(0,t.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch solutions/${s}`}),(0,t.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);