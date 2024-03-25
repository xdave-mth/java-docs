"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7686],{56825:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=t(85893),s=t(11151),n=t(85521);const l={title:"Lambdas01",description:""},i=void 0,u={id:"exercises/lambdas/lambdas01",title:"Lambdas01",description:"",source:"@site/docs/exercises/lambdas/lambdas01.mdx",sourceDirName:"exercises/lambdas",slug:"/exercises/lambdas/lambdas01",permalink:"/java-docs/pr-preview/pr-151/exercises/lambdas/lambdas01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/lambdas/lambdas01.mdx",tags:[],version:"current",frontMatter:{title:"Lambdas01",description:""},sidebar:"exercisesSidebar",previous:{title:"Lambda-Ausdr\xfccke (Lambdas)",permalink:"/java-docs/pr-preview/pr-151/exercises/lambdas/"},next:{title:"Lambdas02",permalink:"/java-docs/pr-preview/pr-151/exercises/lambdas/lambdas02"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const a={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:["Erweitere die gegebene Klasse ",(0,r.jsx)(a.code,{children:"Exercise"})," wie folgt:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Verwende die forEach-Methode der Klasse ",(0,r.jsx)(a.code,{children:"ArrayList<E>"}),", um eine anonyme Klasse\nzu \xfcbergeben. Die anonyme Klasse soll alle Studenten die \xe4lter sind als 26 auf\nder Konsole ausgeben"]}),"\n",(0,r.jsxs)(a.li,{children:["Verwende die forEach-Methode der der Klasse ",(0,r.jsx)(a.code,{children:"ArrayList<E>"}),", um einen\nLambda-Ausdruck zu \xfcbergeben. Die Methode soll sich exakt so verhalten wie die\nzuvor implementierte anonyme Klasse"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-console",children:"Yannik ist 28 Jahre alt\nHanni ist 29 Jahre alt\nManu ist 30 Jahre alt\n"})}),"\n",(0,r.jsx)(n.Z,{pullRequest:"67",branchSuffix:"lambdas/01"})]})}function b(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,a,t)=>{t.d(a,{Z:()=>l});t(67294);var r=t(90512);const s={tabItem:"tabItem_Ymn6"};var n=t(85893);function l(e){let{children:a,hidden:t,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:a})}},74866:(e,a,t)=>{t.d(a,{Z:()=>y});var r=t(67294),s=t(90512),n=t(12466),l=t(16550),i=t(20469),u=t(91980),o=t(67392),c=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:s}}=e;return{value:a,label:t,attributes:r,default:s}}))}(t);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:t}=e;const s=(0,l.k6)(),n=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u._X)(n),(0,r.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(s.location.search);a.set(n,e),s.replace({...s.location,search:a.toString()})}),[n,s])]}function m(e){const{defaultValue:a,queryString:t=!1,groupId:s}=e,n=b(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:n}))),[o,d]=h({queryString:t,groupId:s}),[m,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,n]=(0,c.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:s}),v=(()=>{const e=o??m;return p({value:e,tabValues:n})?e:null})();(0,i.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,n]),tabValues:n}}var f=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function x(e){let{className:a,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.o5)(),c=e=>{const a=e.currentTarget,t=u.indexOf(a),s=i[t].value;s!==r&&(o(a),l(s))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},a),children:i.map((e=>{let{value:a,label:t,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>u.push(e),onKeyDown:d,onClick:c,...n,className:(0,s.Z)("tabs__item",v.tabItem,n?.className,{"tabs__item--active":r===a}),children:t??a},a)}))})}function j(e){let{lazy:a,children:t,selectedValue:s}=e;const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:n.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function w(e){const a=m(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...a}),(0,g.jsx)(j,{...e,...a})]})}function y(e){const a=(0,f.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(a))}},85521:(e,a,t)=>{t.d(a,{Z:()=>u});t(67294);var r=t(74866),s=t(85162),n=t(33692),l=t(9286),i=t(85893);function u(e){let{pullRequest:a,branchSuffix:t}=e;return(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${t}`}),(0,i.jsx)(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${t}`}),(0,i.jsx)(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(n.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);