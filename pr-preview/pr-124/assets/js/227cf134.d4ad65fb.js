"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9848],{29609:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=s(85893),r=s(11151),n=s(85521);const l={title:"Cases01",description:""},i=void 0,u={id:"exercises/cases/cases01",title:"Cases01",description:"",source:"@site/docs/exercises/cases/cases01.mdx",sourceDirName:"exercises/cases",slug:"/exercises/cases/cases01",permalink:"/java-docs/pr-preview/pr-124/exercises/cases/cases01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/cases/cases01.mdx",tags:[],version:"current",frontMatter:{title:"Cases01",description:""},sidebar:"exercisesSidebar",previous:{title:"Verzweigungen",permalink:"/java-docs/pr-preview/pr-124/exercises/cases/"},next:{title:"Cases02",permalink:"/java-docs/pr-preview/pr-124/exercises/cases/cases02"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche eine Ganzzahl von der Konsole einliest\nund auf der Konsole ausgibt, ob es sich um eine gerade oder ungerade Zahl\nhandelt."}),"\n",(0,a.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"Gib bitte eine ganze Zahl ein: 5\nErgebnis: Die eingegebene Zahl ist ungerade\n"})}),"\n",(0,a.jsx)(n.Z,{pullRequest:"7",branchSuffix:"cases/01"})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,t,s)=>{s.d(t,{Z:()=>l});s(67294);var a=s(90512);const r={tabItem:"tabItem_Ymn6"};var n=s(85893);function l(e){let{children:t,hidden:s,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:s,children:t})}},74866:(e,t,s)=>{s.d(t,{Z:()=>y});var a=s(67294),r=s(90512),n=s(12466),l=s(16550),i=s(20469),u=s(91980),o=s(67392),c=s(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:a,default:r}}=e;return{value:t,label:s,attributes:a,default:r}}))}(s);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:s}=e;const r=(0,l.k6)(),n=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,u._X)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,n=p(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[o,d]=b({queryString:s,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,c.Nk)(s);return[r,(0,a.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:r}),v=(()=>{const e=o??f;return h({value:e,tabValues:n})?e:null})();(0,i.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,n]),tabValues:n}}var g=s(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=s(85893);function x(e){let{className:t,block:s,selectedValue:a,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.o5)(),c=e=>{const t=e.currentTarget,s=u.indexOf(t),r=i[s].value;r!==a&&(o(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=u.indexOf(e.currentTarget)+1;t=u[s]??u[0];break}case"ArrowLeft":{const s=u.indexOf(e.currentTarget)-1;t=u[s]??u[u.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:n}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...n,className:(0,r.Z)("tabs__item",v.tabItem,n?.className,{"tabs__item--active":a===t}),children:s??t},t)}))})}function j(e){let{lazy:t,children:s,selectedValue:r}=e;const n=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,m.jsx)(x,{...e,...t}),(0,m.jsx)(j,{...e,...t})]})}function y(e){const t=(0,g.Z)();return(0,m.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,s)=>{s.d(t,{Z:()=>u});s(67294);var a=s(74866),r=s(85162),n=s(33692),l=s(9286),i=s(85893);function u(e){let{pullRequest:t,branchSuffix:s}=e;return(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${s}`}),(0,i.jsx)(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${s}`}),(0,i.jsx)(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(n.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);