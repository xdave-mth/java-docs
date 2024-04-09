"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9776],{51462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=r(74848),a=r(28453),n=r(13979);const l={title:"ClassStructure01",description:""},u=void 0,i={id:"exercises/class-structure/class-structure01",title:"ClassStructure01",description:"",source:"@site/docs/exercises/class-structure/class-structure01.mdx",sourceDirName:"exercises/class-structure",slug:"/exercises/class-structure/class-structure01",permalink:"/java-docs/pr-preview/pr-161/exercises/class-structure/class-structure01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-structure/class-structure01.mdx",tags:[],version:"current",frontMatter:{title:"ClassStructure01",description:""},sidebar:"exercisesSidebar",previous:{title:"Aufbau einer Java-Klasse",permalink:"/java-docs/pr-preview/pr-161/exercises/class-structure/"},next:{title:"Datenobjekte",permalink:"/java-docs/pr-preview/pr-161/exercises/data-objects/"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:'Erstelle eine ausf\xfchrbare Klasse, welche "Hello World" auf der Konsole ausgibt.'}),"\n",(0,s.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"Hello World\n"})}),"\n",(0,s.jsx)(n.A,{pullRequest:"2",branchSuffix:"class-structure/01"})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var s=r(34164);const a={tabItem:"tabItem_Ymn6"};var n=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>A});var s=r(96540),a=r(34164),n=r(23104),l=r(56347),u=r(205),i=r(57485),o=r(31682),c=r(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:a}}=e;return{value:t,label:r,attributes:s,default:a}}))}(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=p(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[o,d]=b({queryString:r,groupId:a}),[f,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,c.Dv)(r);return[a,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),m=(()=>{const e=o??f;return h({value:e,tabValues:n})?e:null})();(0,u.A)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,n]),tabValues:n}}var v=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function x(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=u[r].value;a!==s&&(o(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:u.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...n,className:(0,a.A)("tabs__item",m.tabItem,n?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function A(e){const t=(0,v.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},13979:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(11470),a=r(19365),n=r(28774),l=r(21432),u=r(74848);function i(e){let{pullRequest:t,branchSuffix:r}=e;return(0,u.jsxs)(s.A,{children:[(0,u.jsxs)(a.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,u.jsx)(l.A,{language:"console",children:`git switch exercises/${r}`}),(0,u.jsx)(n.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,u.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,u.jsxs)(a.A,{value:"solution",label:"Solution",children:[(0,u.jsx)(l.A,{language:"console",children:`git switch solutions/${r}`}),(0,u.jsx)(n.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,u.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,u.jsxs)(a.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,u.jsxs)(n.A,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);