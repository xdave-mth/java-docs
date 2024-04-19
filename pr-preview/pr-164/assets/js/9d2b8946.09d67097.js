"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2991],{14020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(74848),s=r(28453),a=r(13979);const l={title:"Cases03",description:""},i=void 0,u={id:"exercises/cases/cases03",title:"Cases03",description:"",source:"@site/docs/exercises/cases/cases03.mdx",sourceDirName:"exercises/cases",slug:"/exercises/cases/cases03",permalink:"/java-docs/pr-preview/pr-164/exercises/cases/cases03",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/cases/cases03.mdx",tags:[],version:"current",frontMatter:{title:"Cases03",description:""},sidebar:"exercisesSidebar",previous:{title:"Cases02",permalink:"/java-docs/pr-preview/pr-164/exercises/cases/cases02"},next:{title:"Cases04",permalink:"/java-docs/pr-preview/pr-164/exercises/cases/cases04"}},o={},c=[{value:"Regelwerk",id:"regelwerk",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche den Vornamen, den Nachnamen, das Alter\nsowie das Geschlecht einer Person einliest und je nach Fall eine andere\nBegr\xfc\xdfungsformel anzeigt."}),"\n",(0,n.jsx)(t.h2,{id:"regelwerk",children:"Regelwerk"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"Hallo Herr Nachname" f\xfcr M\xe4nner ab 18'}),"\n",(0,n.jsx)(t.li,{children:'"Hallo Frau Nachname" f\xfcr Frauen ab 18'}),"\n",(0,n.jsx)(t.li,{children:'"Hallo Vorname" f\xfcr Kinder, Jugendliche unter 18 und Diverse'}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"Gib bitte den Vornamen ein: Peter\nGib bitte den Nachnamen ein: M\xfcller\nGib bitte das Alter ein: 60\nGib bitte das Geschlecht ein (m, w, d): m\nHallo Herr M\xfcller\n"})}),"\n",(0,n.jsx)(a.A,{pullRequest:"9",branchSuffix:"cases/03"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(96540),s=r(34164),a=r(23104),l=r(56347),i=r(205),u=r(57485),o=r(31682),c=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=p(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[o,d]=b({queryString:r,groupId:s}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),v=(()=>{const e=o??f;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),s=i[r].value;s!==n&&(o(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function A(e){const t=(0,m.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},13979:(e,t,r)=>{r.d(t,{A:()=>u});r(96540);var n=r(11470),s=r(19365),a=r(28774),l=r(21432),i=r(74848);function u(e){let{pullRequest:t,branchSuffix:r}=e;return(0,i.jsxs)(n.A,{children:[(0,i.jsxs)(s.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.A,{language:"console",children:`git switch exercises/${r}`}),(0,i.jsx)(a.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.A,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.A,{language:"console",children:`git switch solutions/${r}`}),(0,i.jsx)(a.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(a.A,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);