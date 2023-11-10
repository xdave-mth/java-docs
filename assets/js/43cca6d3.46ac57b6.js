"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7094],{79740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var s=a(85893),r=a(11151),n=a(85521);const l={title:"Lambdas05",description:""},i=void 0,u={id:"exercises/lambdas/lambdas05",title:"Lambdas05",description:"",source:"@site/docs/exercises/lambdas/lambdas05.mdx",sourceDirName:"exercises/lambdas",slug:"/exercises/lambdas/lambdas05",permalink:"/java-docs/exercises/lambdas/lambdas05",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/lambdas/lambdas05.mdx",tags:[],version:"current",frontMatter:{title:"Lambdas05",description:""},sidebar:"exercisesSidebar",previous:{title:"Lambdas04",permalink:"/java-docs/exercises/lambdas/lambdas04"},next:{title:"Generische Programmierung",permalink:"/java-docs/exercises/generics/"}},o={},c=[];function d(e){const t={a:"a",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,s.jsx)(t.a,{href:"../inner-classes/inner-classes04",children:"InnerClasse04"})," so an, dass die\nKoordinatenliste mit Hilfe eines Lambda-Ausdruckes absteigend nach den X-Werten\nsortiert wird."]}),"\n",(0,s.jsx)(n.Z,{pullRequest:"74",branchSuffix:"lambdas/05"})]})}function b(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var s=a(34334);const r={tabItem:"tabItem_Ymn6"};var n=a(85893);function l(e){let{children:t,hidden:a,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,l),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var s=a(67294),r=a(34334),n=a(12466),l=a(16550),i=a(20469),u=a(91980),o=a(67392),c=a(50012);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:s,default:r}}=e;return{value:t,label:a,attributes:s,default:r}}))}(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=b(e),[l,u]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[o,d]=h({queryString:a,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,c.Nk)(a);return[r,(0,s.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),v=(()=>{const e=o??m;return p({value:e,tabValues:n})?e:null})();(0,i.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,n]),tabValues:n}}var f=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function x(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),r=i[a].value;r!==s&&(o(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...n,className:(0,r.Z)("tabs__item",v.tabItem,n?.className,{"tabs__item--active":s===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function y(e){const t=(0,f.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,a)=>{a.d(t,{Z:()=>u});a(67294);var s=a(74866),r=a(85162),n=a(39960),l=a(9286),i=a(85893);function u(e){let{pullRequest:t,branchSuffix:a}=e;return(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${a}`}),(0,i.jsx)(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${a}`}),(0,i.jsx)(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(n.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);