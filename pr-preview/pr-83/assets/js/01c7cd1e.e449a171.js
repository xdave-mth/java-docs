"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8085],{14555:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=t(85893),n=t(11151),s=t(85521);const i={title:"JavaAPI04",description:""},l=void 0,u={id:"exercises/java-api/java-api04",title:"JavaAPI04",description:"",source:"@site/docs/exercises/java-api/java-api04.mdx",sourceDirName:"exercises/java-api",slug:"/exercises/java-api/java-api04",permalink:"/java-docs/pr-preview/pr-83/exercises/java-api/java-api04",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-api/java-api04.mdx",tags:[],version:"current",frontMatter:{title:"JavaAPI04",description:""},sidebar:"exercisesSidebar",previous:{title:"JavaAPI03",permalink:"/java-docs/pr-preview/pr-83/exercises/java-api/java-api03"},next:{title:"Aufz\xe4hlungen (Enumerations)",permalink:"/java-docs/pr-preview/pr-83/exercises/enumerations/"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const a={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche den vorzeichenfreien Dezimalwert einer\neingegebenen negativen short-Zahl (-1 bis -32.768) berechnet und ausgibt."}),"\n",(0,r.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-console",children:"Gib bitte einen Wert zwischen -1 und -32.768 ein: -2854\nErgebnis: Der vorzeichenfreie Dezimalwert betr\xe4gt 62682\n"})}),"\n",(0,r.jsx)(s.Z,{pullRequest:"33",branchSuffix:"java-api/04"})]})}function p(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,a,t)=>{t.d(a,{Z:()=>i});t(67294);var r=t(34334);const n={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){let{children:a,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,i),hidden:t,children:a})}},74866:(e,a,t)=>{t.d(a,{Z:()=>y});var r=t(67294),n=t(34334),s=t(12466),i=t(16550),l=t(20469),u=t(91980),o=t(67392),c=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}(t);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.k6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u._X)(s),(0,r.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(n.location.search);a.set(s,e),n.replace({...n.location,search:a.toString()})}),[s,n])]}function v(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,s=p(e),[i,u]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:s}))),[o,d]=b({queryString:t,groupId:n}),[v,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,s]=(0,c.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),m=(()=>{const e=o??v;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{m&&u(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function j(e){let{className:a,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),c=e=>{const a=e.currentTarget,t=u.indexOf(a),n=l[t].value;n!==r&&(o(a),i(n))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},a),children:l.map((e=>{let{value:a,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===a}),children:t??a},a)}))})}function x(e){let{lazy:a,children:t,selectedValue:n}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function w(e){const a=v(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(j,{...e,...a}),(0,g.jsx)(x,{...e,...a})]})}function y(e){const a=(0,f.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(a))}},85521:(e,a,t)=>{t.d(a,{Z:()=>u});t(67294);var r=t(74866),n=t(85162),s=t(39960),i=t(9286),l=t(85893);function u(e){let{pullRequest:a,branchSuffix:t}=e;return(0,l.jsxs)(r.Z,{children:[(0,l.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch exercises/${t}`}),(0,l.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch solutions/${t}`}),(0,l.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);