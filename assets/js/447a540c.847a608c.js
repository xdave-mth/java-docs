"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6881],{41707:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=s(85893),n=s(11151),r=s(85521);const l={title:"Cases02",description:""},i=void 0,u={id:"exercises/cases/cases02",title:"Cases02",description:"",source:"@site/docs/exercises/cases/cases02.mdx",sourceDirName:"exercises/cases",slug:"/exercises/cases/cases02",permalink:"/java-docs/exercises/cases/cases02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/cases/cases02.mdx",tags:[],version:"current",frontMatter:{title:"Cases02",description:""},sidebar:"exercisesSidebar",previous:{title:"Cases01",permalink:"/java-docs/exercises/cases/cases01"},next:{title:"Cases03",permalink:"/java-docs/exercises/cases/cases03"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche die 4 Grundrechenoperationen\nbeherrscht."}),"\n",(0,a.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"Gib bitte den ersten Operanden ein: 3\nGib bitte den Operator ein: *\nGib bitte den zweiten Operanden ein: 4\nErgebnis: 3 * 4 = 12,00\n"})}),"\n",(0,a.jsx)(r.Z,{pullRequest:"8",branchSuffix:"cases/02"})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,t,s)=>{s.d(t,{Z:()=>l});s(67294);var a=s(34334);const n={tabItem:"tabItem_Ymn6"};var r=s(85893);function l(e){let{children:t,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,l),hidden:s,children:t})}},74866:(e,t,s)=>{s.d(t,{Z:()=>y});var a=s(67294),n=s(34334),r=s(12466),l=s(16550),i=s(20469),u=s(91980),o=s(67392),c=s(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:a,default:n}}=e;return{value:t,label:s,attributes:a,default:n}}))}(s);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:s}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,u._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,r=p(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[o,d]=b({queryString:s,groupId:n}),[f,m]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(s);return[n,(0,a.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:n}),v=(()=>{const e=o??f;return h({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=s(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(85893);function x(e){let{className:t,block:s,selectedValue:a,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),c=e=>{const t=e.currentTarget,s=u.indexOf(t),n=i[s].value;n!==a&&(o(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=u.indexOf(e.currentTarget)+1;t=u[s]??u[0];break}case"ArrowLeft":{const s=u.indexOf(e.currentTarget)-1;t=u[s]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...r,className:(0,n.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===t}),children:s??t},t)}))})}function j(e){let{lazy:t,children:s,selectedValue:n}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function y(e){const t=(0,m.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,s)=>{s.d(t,{Z:()=>u});s(67294);var a=s(74866),n=s(85162),r=s(39960),l=s(9286),i=s(85893);function u(e){let{pullRequest:t,branchSuffix:s}=e;return(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${s}`}),(0,i.jsx)(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${s}`}),(0,i.jsx)(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(r.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);