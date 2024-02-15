"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8085],{14555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(85893),r=a(11151),s=a(85521);const i={title:"JavaAPI04",description:""},l=void 0,u={id:"exercises/java-api/java-api04",title:"JavaAPI04",description:"",source:"@site/docs/exercises/java-api/java-api04.mdx",sourceDirName:"exercises/java-api",slug:"/exercises/java-api/java-api04",permalink:"/java-docs/exercises/java-api/java-api04",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-api/java-api04.mdx",tags:[],version:"current",frontMatter:{title:"JavaAPI04",description:""},sidebar:"exercisesSidebar",previous:{title:"JavaAPI03",permalink:"/java-docs/exercises/java-api/java-api03"},next:{title:"Aufz\xe4hlungen (Enumerations)",permalink:"/java-docs/exercises/enumerations/"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche den vorzeichenfreien Dezimalwert einer\neingegebenen negativen short-Zahl (-1 bis -32.768) berechnet und ausgibt."}),"\n",(0,n.jsx)(t.admonition,{title:"Hinweis",type:"tip",children:(0,n.jsx)(t.p,{children:"Die Klasse Short hat eine statische Methode."})}),"\n",(0,n.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"Gib bitte einen Wert zwischen -1 und -32.768 ein: -2854\nErgebnis: Der vorzeichenfreie Dezimalwert betr\xe4gt 62682\n"})}),"\n",(0,n.jsx)(s.Z,{pullRequest:"33",branchSuffix:"java-api/04"})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>i});a(67294);var n=a(90512);const r={tabItem:"tabItem_Ymn6"};var s=a(85893);function i(e){let{children:t,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(67294),r=a(90512),s=a(12466),i=a(16550),l=a(20469),u=a(91980),o=a(67392),c=a(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,d]=b({queryString:a,groupId:r}),[v,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),m=(()=>{const e=o??v;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{m&&u(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=a(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function j(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),r=l[a].value;r!==n&&(o(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=v(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function y(e){const t=(0,f.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,a)=>{a.d(t,{Z:()=>u});a(67294);var n=a(74866),r=a(85162),s=a(33692),i=a(9286),l=a(85893);function u(e){let{pullRequest:t,branchSuffix:a}=e;return(0,l.jsxs)(n.Z,{children:[(0,l.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch exercises/${a}`}),(0,l.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch solutions/${a}`}),(0,l.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);