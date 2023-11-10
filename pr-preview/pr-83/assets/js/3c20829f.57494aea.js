"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9553],{34447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=n(85893),r=n(11151),a=n(85521);const i={title:"Lambdas02",description:""},l=void 0,d={id:"exercises/lambdas/lambdas02",title:"Lambdas02",description:"",source:"@site/docs/exercises/lambdas/lambdas02.mdx",sourceDirName:"exercises/lambdas",slug:"/exercises/lambdas/lambdas02",permalink:"/java-docs/pr-preview/pr-83/exercises/lambdas/lambdas02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/lambdas/lambdas02.mdx",tags:[],version:"current",frontMatter:{title:"Lambdas02",description:""},sidebar:"exercisesSidebar",previous:{title:"Lambdas01",permalink:"/java-docs/pr-preview/pr-83/exercises/lambdas/lambdas01"},next:{title:"Lambdas03",permalink:"/java-docs/pr-preview/pr-83/exercises/lambdas/lambdas03"}},u={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>FilteredStudents</em>",id:"hinweise-zur-klasse-filteredstudents",level:2}];function c(e){const t={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Gegeben sind die beiden Klassen ",(0,s.jsx)(t.code,{children:"FilteredAdultStudents"})," und\n",(0,s.jsx)(t.code,{children:"FilteredTeenStudents"}),". Beide sollen sicherstellen, dass nur bestimmte Objekte\nhinzugef\xfcgt werden k\xf6nnen. Die Klasse ",(0,s.jsx)(t.code,{children:"FilteredAdultStudents"})," erm\xf6glicht nur das\nHinzuf\xfcgen von Studenten, die mindesten 18 Jahre alt sind; die Klasse\n",(0,s.jsx)(t.code,{children:"FilteredTeenStudents"})," das Hinzuf\xfcgen von Studenten unter 18 Jahren. In der\nKlasse ",(0,s.jsx)(t.code,{children:"Exercise"})," wird ein erwachsener Student sowie ein jugendlicher Student\nerzeugt. Die Studenten werden den beiden FilteredStudents-Klassen hinzugef\xfcgt\nund anschlie\xdfend ausgegeben. Dieser Ansatz funktioniert zwar, ist allerdings\nnicht flexibel."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Erstelle die Klasse ",(0,s.jsx)(t.code,{children:"FilteredStudents"})," anhand des abgebildeten\nKlassendiagramms"]}),"\n",(0,s.jsxs)(t.li,{children:["L\xf6sche die Klassen ",(0,s.jsx)(t.code,{children:"FilteredTeenStudents"})," und ",(0,s.jsx)(t.code,{children:"FilteredAdultStudents"})]}),"\n",(0,s.jsxs)(t.li,{children:["Passe die Klasse ",(0,s.jsx)(t.code,{children:"Exercise"})," so an, dass nur noch die Klasse ",(0,s.jsx)(t.code,{children:"FilteredStudents"}),"\nverwendet wird und \xfcbergib dem Konstruktor das Pr\xe4dikat jeweils in Form eines\nLambda-Ausdrucks"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(t.mermaid,{value:"classDiagram\n    class FilteredStudents {\n        -students: List~Student~ &#123final&#125\n        -mandatoryFilter: Predicate~Student~ &#123final&#125\n        +FilteredStudents(mandatoryFilter: Predicate~Student~)\n        +students() List~Student~\n        +mandatoryFilter() Predicate~Student~\n        +add(student: Student) void\n        +printStudents() void\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }"}),"\n",(0,s.jsxs)(t.h2,{id:"hinweise-zur-klasse-filteredstudents",children:["Hinweise zur Klasse ",(0,s.jsx)(t.em,{children:"FilteredStudents"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,s.jsxs)(t.li,{children:["Die Methode ",(0,s.jsx)(t.code,{children:"void add(student: Student)"})," soll der Studentenliste den\neingehenden Studenten hinzuf\xfcgen. Vor dem Hinzuf\xfcgen soll mit Hilfe des\nFilters \xfcberpr\xfcft werden, ob der eingehende Student hinzugef\xfcgt werden soll"]}),"\n",(0,s.jsxs)(t.li,{children:["Methode ",(0,s.jsx)(t.code,{children:"void printStudent()"})," soll alle Studenten auf der Konsole ausgeben"]}),"\n"]}),"\n",(0,s.jsx)(a.Z,{pullRequest:"68",branchSuffix:"lambdas/02"})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var s=n(34334);const r={tabItem:"tabItem_Ymn6"};var a=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var s=n(67294),r=n(34334),a=n(12466),i=n(16550),l=n(20469),d=n(91980),u=n(67392),o=n(50012);function c(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[i,d]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[u,c]=m({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,o.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=u??p;return b({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{g&&d(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),c(e),f(e)}),[c,f,a]),tabValues:a}}var f=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),o=e=>{const t=e.currentTarget,n=d.indexOf(t),r=l[n].value;r!==s&&(u(t),i(r))},c=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>d.push(e),onKeyDown:c,onClick:o,...a,className:(0,r.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function S(e){const t=p(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function w(e){const t=(0,f.Z)();return(0,x.jsx)(S,{...e,children:c(e.children)},String(t))}},85521:(e,t,n)=>{n.d(t,{Z:()=>d});n(67294);var s=n(74866),r=n(85162),a=n(39960),i=n(9286),l=n(85893);function d(e){let{pullRequest:t,branchSuffix:n}=e;return(0,l.jsxs)(s.Z,{children:[(0,l.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch exercises/${n}`}),(0,l.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch solutions/${n}`}),(0,l.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);