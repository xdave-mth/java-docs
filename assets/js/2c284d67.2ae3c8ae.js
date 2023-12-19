"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5930],{69102:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=s(85893),t=s(11151),r=s(85521);const l={title:"InnerClasses02",description:""},i=void 0,o={id:"exercises/inner-classes/inner-classes02",title:"InnerClasses02",description:"",source:"@site/docs/exercises/inner-classes/inner-classes02.mdx",sourceDirName:"exercises/inner-classes",slug:"/exercises/inner-classes/inner-classes02",permalink:"/java-docs/exercises/inner-classes/inner-classes02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/inner-classes/inner-classes02.mdx",tags:[],version:"current",frontMatter:{title:"InnerClasses02",description:""},sidebar:"exercisesSidebar",previous:{title:"InnerClasses01",permalink:"/java-docs/exercises/inner-classes/inner-classes01"},next:{title:"InnerClasses03",permalink:"/java-docs/exercises/inner-classes/inner-classes03"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Passe die Klassen ",(0,a.jsx)(n.code,{children:"Company"})," und ",(0,a.jsx)(n.code,{children:"Employee"})," aus \xdcbungsaufgabe\n",(0,a.jsx)(n.a,{href:"../exceptions/exceptions03",children:"Exceptions03"})," anhand des abgebildeten\nKlassendiagramms an"]}),"\n",(0,a.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,a.jsx)(n.a,{href:"../exceptions/exceptions03",children:"Exceptions03"})," so an, dass sie fehlerfrei\nausgef\xfchrt werden kann"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n    Company *-- Employee\n    Employee o-- Person\n\n    class Company {\n        -name: String &#123final&#125\n        -employees: List~Employee~ &#123final&#125\n        -numberOfEmployees: int\n        +Company(name: String)\n        +name() String\n        +employees() List~Employee~\n        +getNumberOfEmployees() int\n        +addEmployee(employee: Employee) void\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class Person {\n        -name: String &#123final&#125\n        +Person(name: String)\n        +name() String\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class Employee {\n        -employeeId: int &#123final&#125\n        -person: Person &#123final&#125\n        -salaryInEuro: int\n        +Employee(employeeId: int, person: Person, salaryInEuro: int)\n        +employeeId() int\n        +name() String\n        +setSalaryInEuro(salaryInEuro: int) void\n        +getSalaryInEuro() int\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }"}),"\n",(0,a.jsx)(r.Z,{pullRequest:"55",branchSuffix:"inner-classes/02"})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,n,s)=>{s.d(n,{Z:()=>l});s(67294);var a=s(34334);const t={tabItem:"tabItem_Ymn6"};var r=s(85893);function l(e){let{children:n,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,l),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>E});var a=s(67294),t=s(34334),r=s(12466),l=s(16550),i=s(20469),o=s(91980),u=s(67392),c=s(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:t}}=e;return{value:n,label:s,attributes:a,default:t}}))}(s);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:s}=e;const t=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=p(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=h({queryString:s,groupId:t}),[b,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,c.Nk)(s);return[t,(0,a.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),g=(()=>{const e=u??b;return m({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=s(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=s(85893);function v(e){let{className:n,block:s,selectedValue:a,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),c=e=>{const n=e.currentTarget,s=o.indexOf(n),t=i[s].value;t!==a&&(u(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...r,className:(0,t.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function j(e){let{lazy:n,children:s,selectedValue:t}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,t.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function E(e){const n=(0,f.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},85521:(e,n,s)=>{s.d(n,{Z:()=>o});s(67294);var a=s(74866),t=s(85162),r=s(39960),l=s(9286),i=s(85893);function o(e){let{pullRequest:n,branchSuffix:s}=e;return(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(t.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${s}`}),(0,i.jsx)(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(t.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${s}`}),(0,i.jsx)(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(t.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(r.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);