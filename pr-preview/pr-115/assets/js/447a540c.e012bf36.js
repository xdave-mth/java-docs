"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6881],{41707:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=s(85893),a=s(11151),n=s(85521);const l={title:"Cases02",description:""},i=void 0,u={id:"exercises/cases/cases02",title:"Cases02",description:"",source:"@site/docs/exercises/cases/cases02.mdx",sourceDirName:"exercises/cases",slug:"/exercises/cases/cases02",permalink:"/java-docs/pr-preview/pr-115/exercises/cases/cases02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/cases/cases02.mdx",tags:[],version:"current",frontMatter:{title:"Cases02",description:""},sidebar:"exercisesSidebar",previous:{title:"Cases01",permalink:"/java-docs/pr-preview/pr-115/exercises/cases/cases01"},next:{title:"Cases03",permalink:"/java-docs/pr-preview/pr-115/exercises/cases/cases03"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche die 4 Grundrechenoperationen\nbeherrscht."}),"\n",(0,r.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"Gib bitte den ersten Operanden ein: 3\nGib bitte den Operator ein: *\nGib bitte den zweiten Operanden ein: 4\nErgebnis: 3 * 4 = 12,00\n"})}),"\n",(0,r.jsx)(n.Z,{pullRequest:"8",branchSuffix:"cases/02"})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,s)=>{s.d(t,{Z:()=>l});s(67294);var r=s(90512);const a={tabItem:"tabItem_Ymn6"};var n=s(85893);function l(e){let{children:t,hidden:s,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:s,children:t})}},74866:(e,t,s)=>{s.d(t,{Z:()=>y});var r=s(67294),a=s(90512),n=s(12466),l=s(16550),i=s(20469),u=s(91980),o=s(67392),c=s(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:a}}=e;return{value:t,label:s,attributes:r,default:a}}))}(s);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:s}=e;const a=(0,l.k6)(),n=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,u._X)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:a}=e,n=p(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[o,d]=b({queryString:s,groupId:a}),[f,v]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,c.Nk)(s);return[a,(0,r.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:a}),m=(()=>{const e=o??f;return h({value:e,tabValues:n})?e:null})();(0,i.Z)((()=>{m&&u(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)}),[d,v,n]),tabValues:n}}var v=s(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(85893);function x(e){let{className:t,block:s,selectedValue:r,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.o5)(),c=e=>{const t=e.currentTarget,s=u.indexOf(t),a=i[s].value;a!==r&&(o(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=u.indexOf(e.currentTarget)+1;t=u[s]??u[0];break}case"ArrowLeft":{const s=u.indexOf(e.currentTarget)-1;t=u[s]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...n,className:(0,a.Z)("tabs__item",m.tabItem,n?.className,{"tabs__item--active":r===t}),children:s??t},t)}))})}function j(e){let{lazy:t,children:s,selectedValue:a}=e;const n=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function y(e){const t=(0,v.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,s)=>{s.d(t,{Z:()=>u});s(67294);var r=s(74866),a=s(85162),n=s(39960),l=s(9286),i=s(85893);function u(e){let{pullRequest:t,branchSuffix:s}=e;return(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${s}`}),(0,i.jsx)(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${s}`}),(0,i.jsx)(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(n.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);