"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5653],{37254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=a(85893),s=a(11151),n=a(85521);const l={title:"Lambdas04",description:""},i=void 0,u={id:"exercises/lambdas/lambdas04",title:"Lambdas04",description:"",source:"@site/docs/exercises/lambdas/lambdas04.mdx",sourceDirName:"exercises/lambdas",slug:"/exercises/lambdas/lambdas04",permalink:"/java-docs/pr-preview/pr-115/exercises/lambdas/lambdas04",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/lambdas/lambdas04.mdx",tags:[],version:"current",frontMatter:{title:"Lambdas04",description:""},sidebar:"exercisesSidebar",previous:{title:"Lambdas03",permalink:"/java-docs/pr-preview/pr-115/exercises/lambdas/lambdas03"},next:{title:"Lambdas05",permalink:"/java-docs/pr-preview/pr-115/exercises/lambdas/lambdas05"}},o={},c=[];function d(e){const t={code:"code",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"It\xb4s a Bug! Steffen der Schlingel hat gelogen und ist 17 Jahre alt. Das Alter\nwurde aber erst ge\xe4ndert, nachdem er schon der Liste mit den erwachsenden\nStudenten hinzugef\xfcgt wurde."}),"\n",(0,r.jsxs)(t.p,{children:["Passe die Methode ",(0,r.jsx)(t.code,{children:"void forEach(consumer: Consumer<Student>)"})," der gegebenen\nKlasse ",(0,r.jsx)(t.code,{children:"FilteredStudents"})," so an, dass vor dem Aufruf der Methode\n",(0,r.jsx)(t.code,{children:"void accept(t: T)"})," \xfcberpr\xfcft wird, ob der Student wirklich verarbeitet werden\ndarf."]}),"\n",(0,r.jsx)(n.Z,{pullRequest:"70",branchSuffix:"lambdas/04"})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var r=a(90512);const s={tabItem:"tabItem_Ymn6"};var n=a(85893);function l(e){let{children:t,hidden:a,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(67294),s=a(90512),n=a(12466),l=a(16550),i=a(20469),u=a(91980),o=a(67392),c=a(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:s}}=e;return{value:t,label:a,attributes:r,default:s}}))}(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const s=(0,l.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,n=p(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[o,d]=h({queryString:a,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,c.Nk)(a);return[s,(0,r.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:s}),v=(()=>{const e=o??m;return b({value:e,tabValues:n})?e:null})();(0,i.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,n]),tabValues:n}}var f=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function x(e){let{className:t,block:a,selectedValue:r,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),s=i[a].value;s!==r&&(o(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...n,className:(0,s.Z)("tabs__item",v.tabItem,n?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:s}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function y(e){const t=(0,f.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,a)=>{a.d(t,{Z:()=>u});a(67294);var r=a(74866),s=a(85162),n=a(39960),l=a(9286),i=a(85893);function u(e){let{pullRequest:t,branchSuffix:a}=e;return(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${a}`}),(0,i.jsx)(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${a}`}),(0,i.jsx)(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(n.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);