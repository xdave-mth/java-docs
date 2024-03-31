"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1722],{74626:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=s(74848),r=s(28453),a=s(13979);const l={title:"Exceptions03",description:""},i=void 0,o={id:"exercises/exceptions/exceptions03",title:"Exceptions03",description:"",source:"@site/docs/exercises/exceptions/exceptions03.mdx",sourceDirName:"exercises/exceptions",slug:"/exercises/exceptions/exceptions03",permalink:"/java-docs/exercises/exceptions/exceptions03",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/exceptions/exceptions03.mdx",tags:[],version:"current",frontMatter:{title:"Exceptions03",description:""},sidebar:"exercisesSidebar",previous:{title:"Exceptions02",permalink:"/java-docs/exercises/exceptions/exceptions02"},next:{title:"Innere Klassen (Inner Classes)",permalink:"/java-docs/exercises/inner-classes/"}},c={},u=[{value:"Hinweise zur Klasse <em>Employee</em>",id:"hinweise-zur-klasse-employee",level:2}];function d(e){const n={a:"a",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,t.jsx)(n.strong,{children:"SalaryIncreaseTooHighException"})," und\n",(0,t.jsx)(n.strong,{children:"SalaryDecreaseException"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Passe die Klasse Employee an."}),"\n",(0,t.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,t.jsx)(n.a,{href:"../class-diagrams/class-diagrams04",children:"ClassDiagrams04"})," so an, dass ein oder\nmehrere Mitarbeiter eine Gehaltserh\xf6hung bekommen. Behandle alle m\xf6glichen\nAusnahmen und gebe passende Fehlermeldungen in der Konsole aus."]}),"\n"]}),"\n",(0,t.jsx)(n.mermaid,{value:"classDiagram\n    Company o-- Employee\n    Employee o-- Person\n    SalaryIncreaseTooHighException --|> Exception : extends\n    SalaryIncreaseTooHighException -- Employee\n    SalaryDecreaseException --|> Exception : extends\n    SalaryDecreaseException -- Employee\n\n    class Company {\n        -name: String &#123final&#125\n        -employees: ArrayList~Employee~ &#123final&#125\n        -numberOfEmployees: int\n        +Company(name: String)\n        +getName() String\n        +getEmployees() ArrayList~Employee~\n        +getNumberOfEmployees() int\n        +addEmployee(employee: Employee) void\n        +toString() String\n    }\n\n    class Person {\n        -name: String &#123final&#125\n        +Person(name: String)\n        +getName() String\n    }\n\n    class Employee {\n        -employeeId: int &#123final&#125\n        -person: Person &#123final&#125\n        -salaryInEuro: int\n        +Employee(employeeId: int, person: Person, salaryInEuro: int)\n        +getEmployeeId() int\n        +getName() String\n        +setSalaryInEuro(salaryInEuro: int) void\n        +getSalaryInEuro() int\n        +toString() String\n    }\n\n    class SalaryIncreaseTooHighException {\n    }\n    class SalaryDecreaseException {\n    }"}),"\n",(0,t.jsxs)(n.h2,{id:"hinweise-zur-klasse-employee",children:["Hinweise zur Klasse ",(0,t.jsx)(n.em,{children:"Employee"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Die Methode ",(0,t.jsx)(n.strong,{children:"setSalaryInEuro"})," soll das Gehalt eines Mitarbeiters festlegen."]}),"\n",(0,t.jsxs)(n.p,{children:["Ist das eingehende Gehalt mehr als 10% des bestehenden Gehalts, soll die\n",(0,t.jsx)(n.strong,{children:"SalaryIncreaseTooHighException"})," ausgel\xf6st werden."]}),"\n",(0,t.jsxs)(n.p,{children:["Ist das eingehende Gehalt weniger als das bestehende Gehalt, soll die\n",(0,t.jsx)(n.strong,{children:"SalaryDecreaseException"})," ausgel\xf6st werden."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.A,{pullRequest:"51",branchSuffix:"exceptions/03"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var a=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>E});var t=s(96540),r=s(34164),a=s(23104),l=s(56347),i=s(205),o=s(57485),c=s(31682),u=s(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=p(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:s,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),b=(()=>{const e=c??x;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function v(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,s=o.indexOf(n),r=i[s].value;r!==t&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function E(e){const n=(0,g.A)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(n))}},13979:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);var t=s(11470),r=s(19365),a=s(28774),l=s(21432),i=s(74848);function o(e){let{pullRequest:n,branchSuffix:s}=e;return(0,i.jsxs)(t.A,{children:[(0,i.jsxs)(r.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.A,{language:"console",children:`git switch exercises/${s}`}),(0,i.jsx)(a.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(r.A,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.A,{language:"console",children:`git switch solutions/${s}`}),(0,i.jsx)(a.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(r.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(a.A,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);