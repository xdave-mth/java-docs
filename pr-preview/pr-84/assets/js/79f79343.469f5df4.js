"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4154],{50026:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=t(85893),n=t(11151),s=t(85521);const i={title:"Arrays03",description:""},l=void 0,u={id:"exercises/arrays/arrays03",title:"Arrays03",description:"",source:"@site/docs/exercises/arrays/arrays03.mdx",sourceDirName:"exercises/arrays",slug:"/exercises/arrays/arrays03",permalink:"/java-docs/pr-preview/pr-84/exercises/arrays/arrays03",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays03.mdx",tags:[],version:"current",frontMatter:{title:"Arrays03",description:""},sidebar:"exercisesSidebar",previous:{title:"Arrays02",permalink:"/java-docs/pr-preview/pr-84/exercises/arrays/arrays02"},next:{title:"Arrays04",permalink:"/java-docs/pr-preview/pr-84/exercises/arrays/arrays04"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweise",id:"hinweise",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse zum Berechnen von ISBN-Pr\xfcfziffern."}),"\n",(0,a.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-console",children:"Gib bitte eine ISBN ohne Pr\xfcfziffer ein: 978376572781\nErgebnis: Die Pr\xfcfziffer lautet 8\n"})}),"\n",(0,a.jsx)(r.h2,{id:"hinweise",children:"Hinweise"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Die Methode ",(0,a.jsx)(r.code,{children:"char charAt(index: int)"})," der Klasse ",(0,a.jsx)(r.code,{children:"String"})," gibt das Zeichen mit\ndem Index der eingehenden Zahl zur\xfcck"]}),"\n",(0,a.jsxs)(r.li,{children:["Die statische Methode ",(0,a.jsx)(r.code,{children:"int getNumericValue(ch: char)"})," der Klasse ",(0,a.jsx)(r.code,{children:"Character"}),"\ngibt den ganzzahligen Wert des eingehenden Zeichens zur\xfcck"]}),"\n",(0,a.jsx)(r.li,{children:"Eine ISBN besteht aus 13 Ziffern (die 13. Ziffer stellt die Pr\xfcfziffer dar)"}),"\n",(0,a.jsxs)(r.li,{children:["Die Formel f\xfcr die Berechnung der Pr\xfcfziffer findest Du unter anderem\n",(0,a.jsx)(r.a,{href:"https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer",children:"hier"})]}),"\n"]}),"\n",(0,a.jsx)(s.Z,{pullRequest:"20",branchSuffix:"arrays/03"})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>i});t(67294);var a=t(34334);const n={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){let{children:r,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,i),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>w});var a=t(67294),n=t(34334),s=t(12466),i=t(16550),l=t(20469),u=t(91980),o=t(67392),c=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,o.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const n=(0,i.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u._X)(s),(0,a.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})}),[s,n])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=h(e),[i,u]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:s}))),[o,d]=f({queryString:t,groupId:n}),[b,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,c.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),g=(()=>{const e=o??b;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{g&&u(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function x(e){let{className:r,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),c=e=>{const r=e.currentTarget,t=u.indexOf(r),n=l[t].value;n!==a&&(o(r),i(n))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:n}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function y(e){const r=b(e);return(0,v.jsxs)("div",{className:(0,n.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...r}),(0,v.jsx)(j,{...e,...r})]})}function w(e){const r=(0,m.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(r))}},85521:(e,r,t)=>{t.d(r,{Z:()=>u});t(67294);var a=t(74866),n=t(85162),s=t(39960),i=t(9286),l=t(85893);function u(e){let{pullRequest:r,branchSuffix:t}=e;return(0,l.jsxs)(a.Z,{children:[(0,l.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch exercises/${t}`}),(0,l.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch solutions/${t}`}),(0,l.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);