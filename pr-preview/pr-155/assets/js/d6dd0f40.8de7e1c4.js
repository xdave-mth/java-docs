"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8951],{61984:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=t(74848),r=t(28453),s=t(13979);const i={title:"JavaAPI03",description:""},l=void 0,u={id:"exercises/java-api/java-api03",title:"JavaAPI03",description:"",source:"@site/docs/exercises/java-api/java-api03.mdx",sourceDirName:"exercises/java-api",slug:"/exercises/java-api/java-api03",permalink:"/java-docs/pr-preview/pr-155/exercises/java-api/java-api03",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-api/java-api03.mdx",tags:[],version:"current",frontMatter:{title:"JavaAPI03",description:""},sidebar:"exercisesSidebar",previous:{title:"JavaAPI02",permalink:"/java-docs/pr-preview/pr-155/exercises/java-api/java-api02"},next:{title:"JavaAPI04",permalink:"/java-docs/pr-preview/pr-155/exercises/java-api/java-api04"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const a={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche den Wochentag sowie die Anzahl Tage bis\nWeihnachten eines eingegebenen Datums ermittelt und ausgibt."}),"\n",(0,n.jsx)(a.admonition,{title:"Hinweis",type:"tip",children:(0,n.jsx)(a.p,{children:"Die Klasse String kann einen Teil einer Zeichenkette mit einer Methode\nzur\xfcckgeben. Finde und Nutze!"})}),"\n",(0,n.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:"Gib bitte ein Datum ein (dd.mm.yyyy): 04.01.2016\nWochentag: MONDAY\nTage bis Weihnachten: 355\n"})}),"\n",(0,n.jsx)(s.A,{pullRequest:"32",branchSuffix:"java-api/03"})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,a,t)=>{t.d(a,{A:()=>i});t(96540);var n=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:a,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:t,children:a})}},11470:(e,a,t)=>{t.d(a,{A:()=>w});var n=t(96540),r=t(34164),s=t(23104),i=t(56347),l=t(205),u=t(57485),o=t(31682),c=t(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,o.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function v(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,s=p(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[o,d]=b({queryString:t,groupId:r}),[v,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,c.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),m=(()=>{const e=o??v;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{m&&u(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function j(e){let{className:a,block:t,selectedValue:n,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const a=e.currentTarget,t=u.indexOf(a),r=l[t].value;r!==n&&(o(a),i(r))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a),children:l.map((e=>{let{value:a,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function x(e){let{lazy:a,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function A(e){const a=v(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,g.jsx)(j,{...e,...a}),(0,g.jsx)(x,{...e,...a})]})}function w(e){const a=(0,f.A)();return(0,g.jsx)(A,{...e,children:d(e.children)},String(a))}},13979:(e,a,t)=>{t.d(a,{A:()=>u});t(96540);var n=t(11470),r=t(19365),s=t(28774),i=t(21432),l=t(74848);function u(e){let{pullRequest:a,branchSuffix:t}=e;return(0,l.jsxs)(n.A,{children:[(0,l.jsxs)(r.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.A,{language:"console",children:`git switch exercises/${t}`}),(0,l.jsx)(s.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.A,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.A,{language:"console",children:`git switch solutions/${t}`}),(0,l.jsx)(s.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(s.A,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);