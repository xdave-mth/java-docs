"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9129],{85856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(85893),s=n(11151),a=n(85521);const l={title:"Loops03",description:""},i=void 0,o={id:"exercises/loops/loops03",title:"Loops03",description:"",source:"@site/docs/exercises/loops/loops03.mdx",sourceDirName:"exercises/loops",slug:"/exercises/loops/loops03",permalink:"/java-docs/pr-preview/pr-132/exercises/loops/loops03",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/loops/loops03.mdx",tags:[],version:"current",frontMatter:{title:"Loops03",description:""},sidebar:"exercisesSidebar",previous:{title:"Loops02",permalink:"/java-docs/pr-preview/pr-132/exercises/loops/loops02"},next:{title:"Loops04",permalink:"/java-docs/pr-preview/pr-132/exercises/loops/loops04"}},u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche eine eingegebene Zeichenkette auf\nH\xe4ufigkeit eines bestimmten Zeichens analysiert. Das Programm soll die absolute\nund relative H\xe4ufigkeit in Bezug auf die Gesamtl\xe4nge der Zeichenkette ausgeben."}),"\n",(0,r.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"Gib bitte eine Zeichenkette ein: Hallo Welt\nGib bitte das zu analysierende Zeichen ein: l\nAbsoluter Anteil: 3\nProzentualer Anteil: 30,00%\n"})}),"\n",(0,r.jsx)(t.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,r.jsxs)(t.p,{children:["Die Methode ",(0,r.jsx)(t.code,{children:"char charAt(index: int)"})," der Klasse ",(0,r.jsx)(t.code,{children:"String"})," gibt das Zeichen mit\ndem Index der eingehenden Zahl zur\xfcck."]}),"\n",(0,r.jsx)(a.Z,{pullRequest:"16",branchSuffix:"loops/03"})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(90512);const s={tabItem:"tabItem_Ymn6"};var a=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),s=n(90512),a=n(12466),l=n(16550),i=n(20469),o=n(91980),u=n(67392),c=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=b({queryString:n,groupId:s}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),g=(()=>{const e=u??f;return h({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),s=i[n].value;s!==r&&(u(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function k(e){const t=(0,m.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(74866),s=n(85162),a=n(33692),l=n(9286),i=n(85893);function o(e){let{pullRequest:t,branchSuffix:n}=e;return(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${n}`}),(0,i.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${n}`}),(0,i.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);