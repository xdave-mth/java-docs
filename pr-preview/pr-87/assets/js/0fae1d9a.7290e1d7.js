"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4058],{6972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var s=r(85893),n=r(11151),a=r(85521);const l={title:"Cases02",description:""},i=void 0,u={id:"exercises/control-structures/cases02",title:"Cases02",description:"",source:"@site/docs/exercises/control-structures/cases02.mdx",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/cases02",permalink:"/java-docs/pr-preview/pr-87/exercises/control-structures/cases02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/control-structures/cases02.mdx",tags:[],version:"current",frontMatter:{title:"Cases02",description:""},sidebar:"exercisesSidebar",previous:{title:"Cases01",permalink:"/java-docs/pr-preview/pr-87/exercises/control-structures/cases01"},next:{title:"Cases03",permalink:"/java-docs/pr-preview/pr-87/exercises/control-structures/cases03"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche die 4 Grundrechenoperationen\nbeherrscht."}),"\n",(0,s.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"Gib bitte den ersten Operanden ein: 3\nGib bitte den Operator ein: *\nGib bitte den zweiten Operanden ein: 4\nErgebnis: 3 * 4 = 12,00\n"})}),"\n",(0,s.jsx)(a.Z,{pullRequest:"8",branchSuffix:"cases/02"})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>l});r(67294);var s=r(34334);const n={tabItem:"tabItem_Ymn6"};var a=r(85893);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(n.tabItem,l),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var s=r(67294),n=r(34334),a=r(12466),l=r(16550),i=r(20469),u=r(91980),o=r(67392),c=r(50012);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}(r);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=p(e),[l,u]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[o,d]=b({queryString:r,groupId:n}),[f,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Nk)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),m=(()=>{const e=o??f;return h({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{m&&u(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=r(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function x(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),n=i[r].value;n!==s&&(o(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,n.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function y(e){const t=(0,v.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,r)=>{r.d(t,{Z:()=>u});r(67294);var s=r(74866),n=r(85162),a=r(39960),l=r(9286),i=r(85893);function u(e){let{pullRequest:t,branchSuffix:r}=e;return(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${r}`}),(0,i.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${r}`}),(0,i.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);