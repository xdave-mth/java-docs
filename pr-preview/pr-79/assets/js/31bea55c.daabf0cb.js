"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5668],{86134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(85893),s=r(11151),a=r(85521);const i={title:"Loops04",description:""},l=void 0,o={id:"exercises/control-structures/loops04",title:"Loops04",description:"",source:"@site/docs/exercises/control-structures/loops04.mdx",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/loops04",permalink:"/java-docs/pr-preview/pr-79/exercises/control-structures/loops04",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/control-structures/loops04.mdx",tags:[],version:"current",frontMatter:{title:"Loops04",description:""},sidebar:"exercisesSidebar",previous:{title:"Loops03",permalink:"/java-docs/pr-preview/pr-79/exercises/control-structures/loops03"},next:{title:"Loops05",permalink:"/java-docs/pr-preview/pr-79/exercises/control-structures/loops05"}},u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche zwei Zeichenketten unter Missachtung\nder Gro\xdf- und Kleinschreibung zeichenweise auf Gleichheit \xfcberpr\xfcft."}),"\n",(0,n.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"Gib bitte die erste Zeichenkette ein: Hallo Welt\nGib bitte die zweite Zeichenkette ein: HALLO WELT\nErgebnis: Die eingegebenen Zeichenketten sind identisch\n"})}),"\n",(0,n.jsx)(t.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,n.jsxs)(t.p,{children:["Die statische Methode ",(0,n.jsx)(t.code,{children:"char toUpperCase(ch: char)"})," der Klasse ",(0,n.jsx)(t.code,{children:"Character"})," gibt\nden Gro\xdfbuchstaben des eingehenden Zeichens zur\xfcck."]}),"\n",(0,n.jsx)(a.Z,{pullRequest:"17",branchSuffix:"loops/04"})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>i});r(67294);var n=r(34334);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(67294),s=r(34334),a=r(12466),i=r(16550),l=r(20469),o=r(91980),u=r(67392),c=r(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=p(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,d]=b({queryString:r,groupId:s}),[f,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),g=(()=>{const e=u??f;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(85893);function x(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),s=l[r].value;s!==n&&(u(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,m.jsx)(x,{...e,...t}),(0,m.jsx)(j,{...e,...t})]})}function k(e){const t=(0,v.Z)();return(0,m.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,r)=>{r.d(t,{Z:()=>o});r(67294);var n=r(74866),s=r(85162),a=r(39960),i=r(9286),l=r(85893);function o(e){let{pullRequest:t,branchSuffix:r}=e;return(0,l.jsxs)(n.Z,{children:[(0,l.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch exercises/${r}`}),(0,l.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch solutions/${r}`}),(0,l.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);