"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6424],{85459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(85893),r=n(11151),a=n(85521);const i={title:"Exceptions01",description:""},l=void 0,o={id:"exercises/exceptions/exceptions01",title:"Exceptions01",description:"",source:"@site/docs/exercises/exceptions/exceptions01.mdx",sourceDirName:"exercises/exceptions",slug:"/exercises/exceptions/exceptions01",permalink:"/java-docs/pr-preview/pr-100/exercises/exceptions/exceptions01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/exceptions/exceptions01.mdx",tags:[],version:"current",frontMatter:{title:"Exceptions01",description:""},sidebar:"exercisesSidebar",previous:{title:"Ausnahmen (Exceptions)",permalink:"/java-docs/pr-preview/pr-100/exercises/exceptions/"},next:{title:"Exceptions02",permalink:"/java-docs/pr-preview/pr-100/exercises/exceptions/exceptions02"}},u={},c=[];function d(e){const t={a:"a",code:"code",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Erstelle die Ausnahmenklasse ",(0,s.jsx)(t.code,{children:"InvalidValueException"}),", passe die Methode\n",(0,s.jsx)(t.code,{children:"void accelerate(value: int)"})," so an, dass bei einem eingehenden Wert kleiner\ngleich Null die Ausnahme ",(0,s.jsx)(t.code,{children:"InvalidValueException"})," ausgel\xf6st wird und passe die\nMethode ",(0,s.jsx)(t.code,{children:"void brake(value: int)"})," so an, dass bei einem eingehenden Wert\nkleiner gleich Null die Ausnahme ",(0,s.jsx)(t.code,{children:"InvalidValueException"})," ausgel\xf6st wird"]}),"\n",(0,s.jsxs)(t.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,s.jsx)(t.a,{href:"../interfaces/interfaces01",children:"Interfaces01"})," so an, dass sie fehlerfrei\nausgef\xfchrt werden kann"]}),"\n"]}),"\n",(0,s.jsx)(a.Z,{pullRequest:"49",branchSuffix:"exceptions/01"})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var s=n(90512);const r={tabItem:"tabItem_Ymn6"};var a=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var s=n(67294),r=n(90512),a=n(12466),i=n(16550),l=n(20469),o=n(91980),u=n(67392),c=n(50012);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[u,d]=b({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),v=(()=>{const e=u??f;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(85893);function g(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==s&&(u(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,m.jsx)(g,{...e,...t}),(0,m.jsx)(j,{...e,...t})]})}function k(e){const t=(0,x.Z)();return(0,m.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var s=n(74866),r=n(85162),a=n(39960),i=n(9286),l=n(85893);function o(e){let{pullRequest:t,branchSuffix:n}=e;return(0,l.jsxs)(s.Z,{children:[(0,l.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch exercises/${n}`}),(0,l.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch solutions/${n}`}),(0,l.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);