"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6264],{85551:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=t(74848),n=t(28453),s=t(13979);const l={title:"Arrays06",description:""},i=void 0,u={id:"exercises/arrays/arrays06",title:"Arrays06",description:"",source:"@site/docs/exercises/arrays/arrays06.mdx",sourceDirName:"exercises/arrays",slug:"/exercises/arrays/arrays06",permalink:"/java-docs/pr-preview/pr-154/exercises/arrays/arrays06",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays06.mdx",tags:[],version:"current",frontMatter:{title:"Arrays06",description:""},sidebar:"exercisesSidebar",previous:{title:"Arrays05",permalink:"/java-docs/pr-preview/pr-154/exercises/arrays/arrays05"},next:{title:"Arrays07",permalink:"/java-docs/pr-preview/pr-154/exercises/arrays/arrays07"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein gegebenes mehrdimensionales\nZahlenfeld analysiert."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",metastring:"showLineNumbers",children:"int[][] multiDimArray = {\n    { 5, 8, 2, 7 },\n    { 9, 6, 10, 8 },\n    { 10, 2, 7, 5 },\n    { 1, 9, 5, 4 } };\n"})}),"\n",(0,a.jsx)(r.p,{children:"Es soll jeweils der kleinste sowie der gr\xf6\xdfte Wert einer Reihe auf der Konsole\nausgegeben werden."}),"\n",(0,a.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-console",children:"MIN - MAX\n2 - 8\n6 - 10\n2 - 10\n1 - 9\n"})}),"\n",(0,a.jsx)(s.A,{pullRequest:"75",branchSuffix:"arrays/06"})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var a=t(34164);const n={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,l),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>w});var a=t(96540),n=t(34164),s=t(23104),l=t(56347),i=t(205),u=t(57485),o=t(31682),c=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function b(e){let{queryString:r=!1,groupId:t}=e;const n=(0,l.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})}),[s,n])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=p(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:s}))),[o,d]=b({queryString:t,groupId:n}),[f,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,c.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),g=(()=>{const e=o??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:r,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const r=e.currentTarget,t=u.indexOf(r),n=i[t].value;n!==a&&(o(r),l(n))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:n}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function y(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...r}),(0,v.jsx)(j,{...e,...r})]})}function w(e){const r=(0,m.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(r))}},13979:(e,r,t)=>{t.d(r,{A:()=>u});t(96540);var a=t(11470),n=t(19365),s=t(28774),l=t(21432),i=t(74848);function u(e){let{pullRequest:r,branchSuffix:t}=e;return(0,i.jsxs)(a.A,{children:[(0,i.jsxs)(n.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.A,{language:"console",children:`git switch exercises/${t}`}),(0,i.jsx)(s.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(n.A,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.A,{language:"console",children:`git switch solutions/${t}`}),(0,i.jsx)(s.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(n.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(s.A,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);