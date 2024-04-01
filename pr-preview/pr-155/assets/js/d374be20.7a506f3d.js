"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6304],{40699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(74848),s=n(28453),a=n(13979);const i={title:"Loops04",description:""},l=void 0,o={id:"exercises/loops/loops04",title:"Loops04",description:"",source:"@site/docs/exercises/loops/loops04.mdx",sourceDirName:"exercises/loops",slug:"/exercises/loops/loops04",permalink:"/java-docs/pr-preview/pr-155/exercises/loops/loops04",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/loops/loops04.mdx",tags:[],version:"current",frontMatter:{title:"Loops04",description:""},sidebar:"exercisesSidebar",previous:{title:"Loops03",permalink:"/java-docs/pr-preview/pr-155/exercises/loops/loops03"},next:{title:"Loops05",permalink:"/java-docs/pr-preview/pr-155/exercises/loops/loops05"}},u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche zwei Zeichenketten unter Missachtung\nder Gro\xdf- und Kleinschreibung zeichenweise auf Gleichheit \xfcberpr\xfcft."}),"\n",(0,r.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"Gib bitte die erste Zeichenkette ein: Hallo Welt\nGib bitte die zweite Zeichenkette ein: HALLO WELT\nErgebnis: Die eingegebenen Zeichenketten sind identisch\n"})}),"\n",(0,r.jsx)(t.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,r.jsxs)(t.p,{children:["Die statische Methode ",(0,r.jsx)(t.code,{children:"char toUpperCase(ch: char)"})," der Klasse ",(0,r.jsx)(t.code,{children:"Character"})," gibt\nden Gro\xdfbuchstaben des eingehenden Zeichens zur\xfcck."]}),"\n",(0,r.jsx)(a.A,{pullRequest:"17",branchSuffix:"loops/04"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(96540),s=n(34164),a=n(23104),i=n(56347),l=n(205),o=n(57485),u=n(31682),c=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=b({queryString:n,groupId:s}),[f,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),g=(()=>{const e=u??f;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==r&&(u(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,m.jsx)(x,{...e,...t}),(0,m.jsx)(j,{...e,...t})]})}function A(e){const t=(0,v.A)();return(0,m.jsx)(w,{...e,children:d(e.children)},String(t))}},13979:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(11470),s=n(19365),a=n(28774),i=n(21432),l=n(74848);function o(e){let{pullRequest:t,branchSuffix:n}=e;return(0,l.jsxs)(r.A,{children:[(0,l.jsxs)(s.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.A,{language:"console",children:`git switch exercises/${n}`}),(0,l.jsx)(a.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(s.A,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.A,{language:"console",children:`git switch solutions/${n}`}),(0,l.jsx)(a.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(s.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(a.A,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);