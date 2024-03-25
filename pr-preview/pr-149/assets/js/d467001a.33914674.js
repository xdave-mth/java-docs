"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9592],{16519:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=a(85893),n=a(11151),s=a(85521);const o={title:"Comparators02",description:""},i=void 0,l={id:"exercises/comparators/comparators02",title:"Comparators02",description:"",source:"@site/docs/exercises/comparators/comparators02.mdx",sourceDirName:"exercises/comparators",slug:"/exercises/comparators/comparators02",permalink:"/java-docs/pr-preview/pr-149/exercises/comparators/comparators02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/comparators/comparators02.mdx",tags:[],version:"current",frontMatter:{title:"Comparators02",description:""},sidebar:"exercisesSidebar",previous:{title:"Comparators01",permalink:"/java-docs/pr-preview/pr-149/exercises/comparators/comparators01"},next:{title:"Schl\xfcsseltransformationen (Hashing)",permalink:"/java-docs/pr-preview/pr-149/exercises/hashing/"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>CoordinateByDistanceToOriginComparator</em>",id:"hinweis-zur-klasse-coordinatebydistancetoorigincomparator",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Erstelle die Klasse ",(0,t.jsx)(r.code,{children:"CoordinateByDistanceToOriginComparator"})," anhand des\nabgebildeten Klassendiagramms"]}),"\n",(0,t.jsxs)(r.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,t.jsx)(r.a,{href:"comparators01",children:"Comparators01"}),"\nso an, dass die Koordinatenliste mit Hilfe der Klasse ",(0,t.jsx)(r.code,{children:"CoordinateComparator"}),"\nsortiert wird"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,t.jsx)(r.mermaid,{value:"classDiagram\n    Comparator~Coordinate~ <|.. CoordinateByDistanceToOriginPointComparator : implements\n\n    class CoordinateByDistanceToOriginPointComparator {\n        +compare(coordinate1: Coordinate, coordinate2: Coordinate) int\n    }\n\n    class Comparator~Coordinate~ {\n        <<interface>>\n        +compare(o1: Coordinate, o2: Coordinate) int\n    }"}),"\n",(0,t.jsxs)(r.h2,{id:"hinweis-zur-klasse-coordinatebydistancetoorigincomparator",children:["Hinweis zur Klasse ",(0,t.jsx)(r.em,{children:"CoordinateByDistanceToOriginComparator"})]}),"\n",(0,t.jsxs)(r.p,{children:["Die Methode ",(0,t.jsx)(r.strong,{children:"compare"})," soll zwei eingehende Koordinaten anhand ihrer jeweiligen\nDistanz zum Nullpunkt vergleichen. Ist die Distanz der ersten Koordinate zum\nNullpunkt kleiner als bzw. gr\xf6\xdfer als bzw. gleich die der zweiten Koordinate,\nsoll der Wert -1 bzw. 1 bzw. 0 zur\xfcckgegeben werden."]}),"\n",(0,t.jsx)(s.Z,{pullRequest:"48",branchSuffix:"comparators/02"})]})}function p(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},85162:(e,r,a)=>{a.d(r,{Z:()=>o});a(67294);var t=a(90512);const n={tabItem:"tabItem_Ymn6"};var s=a(85893);function o(e){let{children:r,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(n.tabItem,o),hidden:a,children:r})}},74866:(e,r,a)=>{a.d(r,{Z:()=>C});var t=a(67294),n=a(90512),s=a(12466),o=a(16550),i=a(20469),l=a(91980),u=a(67392),c=a(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:a}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:a,attributes:t,default:n}}=e;return{value:r,label:a,attributes:t,default:n}}))}(a);return function(e){const r=(0,u.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function m(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:a}=e;const n=(0,o.k6)(),s=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,l._X)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})}),[s,n])]}function b(e){const{defaultValue:r,queryString:a=!1,groupId:n}=e,s=p(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[u,d]=h({queryString:a,groupId:n}),[b,g]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,c.Nk)(a);return[n,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),f=(()=>{const e=u??b;return m({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function x(e){let{className:r,block:a,selectedValue:t,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const r=e.currentTarget,a=l.indexOf(r),n=i[a].value;n!==t&&(u(r),o(n))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;r=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;r=l[a]??l[l.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},r),children:i.map((e=>{let{value:r,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===r}),children:a??r},r)}))})}function j(e){let{lazy:r,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function w(e){const r=b(e);return(0,v.jsxs)("div",{className:(0,n.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...r}),(0,v.jsx)(j,{...e,...r})]})}function C(e){const r=(0,g.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(r))}},85521:(e,r,a)=>{a.d(r,{Z:()=>l});a(67294);var t=a(74866),n=a(85162),s=a(33692),o=a(9286),i=a(85893);function l(e){let{pullRequest:r,branchSuffix:a}=e;return(0,i.jsxs)(t.Z,{children:[(0,i.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(o.Z,{language:"console",children:`git switch exercises/${a}`}),(0,i.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(o.Z,{language:"console",children:`git switch solutions/${a}`}),(0,i.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);