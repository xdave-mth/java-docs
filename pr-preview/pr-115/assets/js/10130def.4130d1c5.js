"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5838],{48144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(85893),s=r(11151),l=r(85521);const a={title:"OO05",description:""},i=void 0,o={id:"exercises/oo/oo05",title:"OO05",description:"",source:"@site/docs/exercises/oo/oo05.mdx",sourceDirName:"exercises/oo",slug:"/exercises/oo/oo05",permalink:"/java-docs/pr-preview/pr-115/exercises/oo/oo05",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/oo/oo05.mdx",tags:[],version:"current",frontMatter:{title:"OO05",description:""},sidebar:"exercisesSidebar",previous:{title:"OO04",permalink:"/java-docs/pr-preview/pr-115/exercises/oo/oo04"},next:{title:"OO06",permalink:"/java-docs/pr-preview/pr-115/exercises/oo/oo06"}},u={},c=[{value:"Methoden der Klasse <em>DiceCup</em>",id:"methoden-der-klasse-dicecup",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Erstelle die Klasse ",(0,n.jsx)(t.code,{children:"DiceCup"})," mit Hilfe der abgebildeten Informationen"]}),"\n",(0,n.jsx)(t.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche einen W\xfcrfelbecher sowie 5 W\xfcrfel\nerzeugt. Es soll 5-mal mit dem W\xfcrfelbecher gew\xfcrfelt und f\xfcr jeden Wurf das\nErgebnis des Wurfes ausgegeben werden."}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"methoden-der-klasse-dicecup",children:["Methoden der Klasse ",(0,n.jsx)(t.em,{children:"DiceCup"})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Methode"}),(0,n.jsx)(t.th,{children:"R\xfcckgabewert"}),(0,n.jsx)(t.th,{children:"Sichtbarkeit"}),(0,n.jsx)(t.th,{children:"Beschreibung"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"rollTheDices(dices: Dice...)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"void"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"public"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"W\xfcrfeln mit allen W\xfcrfeln"})})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"ID - W\xfcrfelwert\nWurf 1\n1 - 5\n2 - 5\n3 - 2\n4 - 2\n5 - 4\nWurf 2\n1 - 1\n2 - 3\n3 - 1\n4 - 1\n5 - 4\n\u2026\n"})}),"\n",(0,n.jsx)(t.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,n.jsxs)(t.p,{children:["Verwende die Klasse ",(0,n.jsx)(t.code,{children:"Dice"})," aus \xdcbungsaufgabe ",(0,n.jsx)(t.a,{href:"oo03",children:"OO03"}),"."]}),"\n",(0,n.jsx)(l.Z,{pullRequest:"27",branchSuffix:"oo/05"})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>a});r(67294);var n=r(90512);const s={tabItem:"tabItem_Ymn6"};var l=r(85893);function a(e){let{children:t,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,a),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(67294),s=r(90512),l=r(12466),a=r(16550),i=r(20469),o=r(91980),u=r(67392),c=r(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,l=h(e),[a,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,d]=b({queryString:r,groupId:s}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,c.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),x=(()=>{const e=u??f;return p({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=r(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(85893);function v(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),s=i[r].value;s!==n&&(u(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,s.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function k(e){const t=(0,m.Z)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(t))}},85521:(e,t,r)=>{r.d(t,{Z:()=>o});r(67294);var n=r(74866),s=r(85162),l=r(39960),a=r(9286),i=r(85893);function o(e){let{pullRequest:t,branchSuffix:r}=e;return(0,i.jsxs)(n.Z,{children:[(0,i.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(a.Z,{language:"console",children:`git switch exercises/${r}`}),(0,i.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(a.Z,{language:"console",children:`git switch solutions/${r}`}),(0,i.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);