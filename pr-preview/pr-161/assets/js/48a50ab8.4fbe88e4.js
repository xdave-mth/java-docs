"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7594],{24522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(74848),s=r(28453),a=r(11470),l=r(19365);const i={title:"Cases05",description:""},c=void 0,o={id:"exercises/cases/cases05",title:"Cases05",description:"",source:"@site/docs/exercises/cases/cases05.mdx",sourceDirName:"exercises/cases",slug:"/exercises/cases/cases05",permalink:"/java-docs/pr-preview/pr-161/exercises/cases/cases05",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/cases/cases05.mdx",tags:[],version:"current",frontMatter:{title:"Cases05",description:""},sidebar:"exercisesSidebar",previous:{title:"Cases04",permalink:"/java-docs/pr-preview/pr-161/exercises/cases/cases04"},next:{title:"Cases06",permalink:"/java-docs/pr-preview/pr-161/exercises/cases/cases06"}},u={},d=[{value:"Coding",id:"coding",level:2}];function h(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?"}),"\n",(0,n.jsx)(t.h2,{id:"coding",children:"Coding"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'int a = 5;\nint b = 5;\nboolean c = true;\nboolean d = true;\nboolean e;\nint f = 5;\nint g = 3;\nint h = 2;\nint i = 4;\nint j = 0;\n\ne = c && (a > 2 ? (b == (a = a * 2)) : d);\nj += ((h < ((f - g == 3) ? 3 : 2)) && (i < 5)) ? 1 : 2;\n\nSystem.out.println("a: " + a);\nSystem.out.println("e: " + e);\nSystem.out.println("j: " + j);\n'})}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"a",label:"-",default:!0}),(0,n.jsx)(l.A,{value:"b",label:"a",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Zeile"}),(0,n.jsx)(t.th,{children:"Wert"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"a = 5"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"12"}),(0,n.jsx)(t.td,{children:"a = 5 * 2 = 10"})]})]})]})}),(0,n.jsx)(l.A,{value:"c",label:"e",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Zeile"}),(0,n.jsx)(t.th,{children:"Wert"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"12"}),(0,n.jsx)(t.td,{children:"e = true && (5 > 2 ? (5 == (5 * 2)) : true) = true && (5 == 10) = false"})]})})]})}),(0,n.jsx)(l.A,{value:"d",label:"j",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Zeile"}),(0,n.jsx)(t.th,{children:"Wert"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"j = 0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"13"}),(0,n.jsx)(t.td,{children:"j = 0 + ((2 < ((5 - 3 == 3) ? 3 : 2)) && (4 < 5)) ? 1 : 2 = 0 + ((2 < 2) && (4 < 5)) ? 1 : 2 = 0 + 2 = 2"})]})]})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),s=r(34164),a=r(23104),l=r(56347),i=r(205),c=r(57485),o=r(31682),u=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[o,d]=p({queryString:r,groupId:s}),[f,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),j=(()=>{const e=o??f;return b({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=i[r].value;s!==n&&(o(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,m.jsx)(v,{...e,...t}),(0,m.jsx)(g,{...e,...t})]})}function w(e){const t=(0,x.A)();return(0,m.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);