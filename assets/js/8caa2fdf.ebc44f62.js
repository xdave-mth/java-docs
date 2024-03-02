"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3085],{976:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=s(85893),i=s(11151),l=s(85521);const a={title:"ClassDiagrams04",description:""},t=void 0,o={id:"exercises/class-diagrams/class-diagrams04",title:"ClassDiagrams04",description:"",source:"@site/docs/exercises/class-diagrams/class-diagrams04.mdx",sourceDirName:"exercises/class-diagrams",slug:"/exercises/class-diagrams/class-diagrams04",permalink:"/java-docs/exercises/class-diagrams/class-diagrams04",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-diagrams/class-diagrams04.mdx",tags:[],version:"current",frontMatter:{title:"ClassDiagrams04",description:""},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams03",permalink:"/java-docs/exercises/class-diagrams/class-diagrams03"},next:{title:"ClassDiagrams05",permalink:"/java-docs/exercises/class-diagrams/class-diagrams05"}},c={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>Person</em>",id:"hinweis-zur-klasse-person",level:2},{value:"Hinweise zur Klasse <em>Employee</em>",id:"hinweise-zur-klasse-employee",level:2},{value:"Hinweise zur Klasse <em>Company</em>",id:"hinweise-zur-klasse-company",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function u(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,r.jsx)(n.code,{children:"Company"}),", ",(0,r.jsx)(n.code,{children:"Employee"})," und ",(0,r.jsx)(n.code,{children:"Person"})," anhand des\nabgebildeten Klassendiagramms"]}),"\n",(0,r.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Unternehmen mit mehreren\nMitarbeitern erzeugt und auf der Konsole ausgibt"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Company o-- Employee\n    Employee o-- Person\n\n    class Company {\n        -name: String &#123final&#125\n        -employees: ArrayList~Employee~ &#123final&#125\n        -numberOfEmployees: int\n        +Company(name: String)\n        +getName() String\n        +getEmployees() ArrayList~Employee~\n        +getNumberOfEmployees() int\n        +addEmployee(employee: Employee) void\n        +toString() String\n    }\n\n    class Person {\n        -name: String &#123final&#125\n        +Person(name: String)\n        +getName() String\n    }\n\n    class Employee {\n        -employeeId: int &#123final&#125\n        -person: Person &#123final&#125\n        -salaryInEuro: int\n        +Employee(employeeId: int, person: Person, salaryInEuro: int)\n        +getEmployeeId() int\n        +getName() String\n        +setSalaryInEuro(salaryInEuro: int) void\n        +getSalaryInEuro() int\n        +toString() String\n    }"}),"\n",(0,r.jsxs)(n.h2,{id:"hinweis-zur-klasse-person",children:["Hinweis zur Klasse ",(0,r.jsx)(n.em,{children:"Person"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.strong,{children:"getName"})," soll den Namen der Person zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-employee",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"Employee"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.strong,{children:"getEmployeeId"})," soll die Id des Mitarbeiters zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.strong,{children:"getName"})," soll den Namen des Mitarbeiters zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.strong,{children:"setSalaryInEuro"})," soll das Gehalt des Mitarbeiters festlegen."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.strong,{children:"getSalaryInEuro"})," soll das Gehalt des Mitarbeiters zur\xfcckgeben."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.strong,{children:"toString"})," soll alle Attribute des Objektes als String\nzur\xfcckgeben."]}),"\n",(0,r.jsxs)(n.p,{children:["Format: ",(0,r.jsx)(n.code,{children:"Mitarbeiternummer - Name - Gehalt"})]}),"\n",(0,r.jsxs)(n.p,{children:["Beispiel: ",(0,r.jsx)(n.code,{children:"4001 - Steffen - 40000\u20ac"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-company",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"Company"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.strong,{children:"getName"})," soll den Namen der Firma zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.strong,{children:"getEmployees"})," soll die Mitarbeiterliste zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.strong,{children:"getNumberOfEmployees"})," soll die Anzahl der Mitarbeiter\nzur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.strong,{children:"addEmployee"})," soll den eingehenden Mitarbeiter der\nMitarbeiterliste hinzuf\xfcgen"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.strong,{children:"toString"})," soll alle Attribute des Objektes und alle Mitarbeiter\nals String zur\xfcckgeben."]}),"\n",(0,r.jsx)(n.p,{children:"Format:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"Firmenname (Mitarbeiteranzahl)\nMitarbeiternummer - Name - Gehalt\n"})}),"\n",(0,r.jsx)(n.p,{children:"Beispiel:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"Softwareklitsche GmbH (3 Mitarbeiter)\n4001 - Steffen - 40000\u20ac\n4002 - Marianna - 120000\u20ac\n4003 - Mirco - 100000\u20ac\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Um in einem String einen Zeilenumbruch zu erzeugen muss ",(0,r.jsx)(n.code,{children:"\\n"})," verwendet werden.\nDer String ",(0,r.jsx)(n.code,{children:"Hello World"})," wird ohne Umbruch in einer Zeile dargestellt. Der\nString ",(0,r.jsx)(n.code,{children:"Hello\\nWorld"})," wird mit Umbruch in zwei Zeilen dargestellt."]})}),"\n",(0,r.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"Maier GmbH (5 Mitarbeiter)\n1 - Max Schmid - 50000\u20ac\n2 - Hans M\xfcller - 75000\u20ac\n3 - Lisa Meier - 40000\u20ac\n4 - Peter Schneider - 55000\u20ac\n5 - Miriam Albers - 90000\u20ac\n"})}),"\n",(0,r.jsx)(l.Z,{pullRequest:"39",branchSuffix:"class-diagrams/04"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,s)=>{s.d(n,{Z:()=>a});s(67294);var r=s(90512);const i={tabItem:"tabItem_Ymn6"};var l=s(85893);function a(e){let{children:n,hidden:s,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>k});var r=s(67294),i=s(90512),l=s(12466),a=s(16550),t=s(20469),o=s(91980),c=s(67392),d=s(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:i}}=e;return{value:n,label:s,attributes:r,default:i}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const i=(0,a.k6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,l=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,u]=p({queryString:s,groupId:i}),[g,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,d.Nk)(s);return[i,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:i}),x=(()=>{const e=c??g;return m({value:e,tabValues:l})?e:null})();(0,t.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var b=s(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(85893);function f(e){let{className:n,block:s,selectedValue:r,selectValue:a,tabValues:t}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),i=t[s].value;i!==r&&(c(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,i.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(f,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function k(e){const n=(0,b.Z)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},85521:(e,n,s)=>{s.d(n,{Z:()=>o});s(67294);var r=s(74866),i=s(85162),l=s(33692),a=s(9286),t=s(85893);function o(e){let{pullRequest:n,branchSuffix:s}=e;return(0,t.jsxs)(r.Z,{children:[(0,t.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(a.Z,{language:"console",children:`git switch exercises/${s}`}),(0,t.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(a.Z,{language:"console",children:`git switch solutions/${s}`}),(0,t.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);