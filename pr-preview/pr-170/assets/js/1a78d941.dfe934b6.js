"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8392],{96434:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(74848),n=a(28453),s=a(13979);const l={title:"DataObjects01",description:""},i=void 0,o={id:"exercises/data-objects/data-objects01",title:"DataObjects01",description:"",source:"@site/docs/exercises/data-objects/data-objects01.mdx",sourceDirName:"exercises/data-objects",slug:"/exercises/data-objects/data-objects01",permalink:"/java-docs/pr-preview/pr-170/exercises/data-objects/data-objects01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/data-objects/data-objects01.mdx",tags:[],version:"current",frontMatter:{title:"DataObjects01",description:""},sidebar:"exercisesSidebar",previous:{title:"Datenobjekte",permalink:"/java-docs/pr-preview/pr-170/exercises/data-objects/"},next:{title:"DataObjects02",permalink:"/java-docs/pr-preview/pr-170/exercises/data-objects/data-objects02"}},u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Erstelle eine ausf\xfchrbare Klasse, welche die drei Variablen ",(0,r.jsx)(t.code,{children:"name"})," (Datentyp\n",(0,r.jsx)(t.code,{children:"String"}),"), ",(0,r.jsx)(t.code,{children:"age"})," (Datentyp ",(0,r.jsx)(t.code,{children:"int"}),") und ",(0,r.jsx)(t.code,{children:"gender"})," (Datentyp ",(0,r.jsx)(t.code,{children:"char"}),") deklariert,\ninitialisiert und \xfcber die Konsole ausgibt."]}),"\n",(0,r.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"Name: Hans\nAlter: 25\nGeschlecht: m\n"})}),"\n",(0,r.jsx)(s.A,{pullRequest:"3",branchSuffix:"data-objects/01"})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var r=a(34164);const n={tabItem:"tabItem_Ymn6"};var s=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,l),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>A});var r=a(96540),n=a(34164),s=a(23104),l=a(56347),i=a(205),o=a(57485),u=a(31682),c=a(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:a,groupId:n}),[f,j]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),m=(()=>{const e=u??f;return b({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),j(e)}),[d,j,s]),tabValues:s}}var j=a(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function g(e){let{className:t,block:a,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=o.indexOf(t),n=i[a].value;n!==r&&(u(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function A(e){const t=(0,j.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},13979:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var r=a(11470),n=a(19365),s=a(28774),l=a(21432),i=a(74848);function o(e){let{pullRequest:t,branchSuffix:a}=e;return(0,i.jsxs)(r.A,{children:[(0,i.jsxs)(n.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.A,{language:"console",children:`git switch exercises/${a}`}),(0,i.jsx)(s.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(n.A,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.A,{language:"console",children:`git switch solutions/${a}`}),(0,i.jsx)(s.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(n.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(s.A,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);