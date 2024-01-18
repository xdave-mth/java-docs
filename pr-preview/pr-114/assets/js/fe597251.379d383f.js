"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1297],{43591:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var t=r(85893),a=r(11151),o=r(74866),s=r(85162);const l={title:"Trees01",description:""},i=void 0,u={id:"exercises/trees/trees01",title:"Trees01",description:"",source:"@site/docs/exercises/trees/trees01.mdx",sourceDirName:"exercises/trees",slug:"/exercises/trees/trees01",permalink:"/java-docs/pr-preview/pr-114/exercises/trees/trees01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/trees/trees01.mdx",tags:[],version:"current",frontMatter:{title:"Trees01",description:""},sidebar:"exercisesSidebar",previous:{title:"B\xe4ume",permalink:"/java-docs/pr-preview/pr-114/exercises/trees/"},next:{title:"Ausnahmen (Exceptions)",permalink:"/java-docs/pr-preview/pr-114/exercises/exceptions/"}},d={},c=[{value:"Bin\xe4rbaum",id:"bin\xe4rbaum",level:2}];function f(e){const n={h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bestimme f\xfcr den abgebildeten Bin\xe4rbaum die H\xf6he"}),"\n",(0,t.jsx)(n.li,{children:"Bestimme f\xfcr jeden Knoten des abgebildeten Bin\xe4rbaums den Grad und die Tiefe"}),"\n",(0,t.jsx)(n.li,{children:"Traversiere den abgebildeten Bin\xe4rbaum unter Verwendung des Tiefendurchlaufs"}),"\n",(0,t.jsx)(n.li,{children:"Traversiere den abgebildeten Bin\xe4rbaum unter Verwendung des Breitendurchlaufs"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"bin\xe4rbaum",children:"Bin\xe4rbaum"}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart TD\n    node1 --\x3e node2\n    node1 --\x3e node3\n    node2 --\x3e node4\n    node2 --\x3e node5\n    node3 --\x3e node6\n    node3 --\x3e node7\n    node5 --\x3e node8\n    node5 --\x3e node9\n    node8 --\x3e node10\n\n    node1(44)\n    node2(29)\n    node3(65)\n    node4(17)\n    node5(37)\n    node6(50)\n    node7(66)\n    node8(35)\n    node9(40)\n    node10(30)"}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.Z,{value:"a",label:"-",default:!0}),(0,t.jsx)(s.Z,{value:"b",label:"H\xf6he",children:(0,t.jsx)(n.p,{children:"4"})}),(0,t.jsx)(s.Z,{value:"c",label:"Grad und Tiefe",children:(0,t.jsx)(n.mermaid,{value:"flowchart TD\n    node1 --\x3e node2\n    node1 --\x3e node3\n    node2 --\x3e node4\n    node2 --\x3e node5\n    node3 --\x3e node6\n    node3 --\x3e node7\n    node5 --\x3e node8\n    node5 --\x3e node9\n    node8 --\x3e node10\n\n    node1(44\\nGrad: 2, Tiefe: 0)\n    node2(29\\nGrad: 2, Tiefe: 1)\n    node3(65\\nGrad: 2, Tiefe: 1)\n    node4(17\\nGrad: 0, Tiefe: 2)\n    node5(37\\nGrad: 2, Tiefe: 2)\n    node6(50\\nGrad: 0, Tiefe: 2)\n    node7(66\\nGrad: 0, Tiefe: 2)\n    node8(35\\nGrad: 1, Tiefe: 3)\n    node9(40\\nGrad: 0, Tiefe: 3)\n    node10(30\\nGrad: 0, Tiefe: 4)"})}),(0,t.jsx)(s.Z,{value:"d",label:"Tiefendurchlauf",children:(0,t.jsx)(n.p,{children:"44, 29, 17, 37, 35, 30, 40, 65, 50, 66"})}),(0,t.jsx)(s.Z,{value:"e",label:"Breitendurchlauf",children:(0,t.jsx)(n.p,{children:"44, 29, 65, 17, 37, 50, 66, 35, 40, 30"})})]})]})}function b(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>s});r(67294);var t=r(90512);const a={tabItem:"tabItem_Ymn6"};var o=r(85893);function s(e){let{children:n,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,s),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(67294),a=r(90512),o=r(12466),s=r(16550),l=r(20469),i=r(91980),u=r(67392),d=r(50012);function c(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function b(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,o=f(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[u,c]=m({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),x=(()=>{const e=u??p;return b({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var h=r(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(85893);function g(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),a=l[r].value;a!==t&&(u(n),s(a))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:c,onClick:d,...o,className:(0,a.Z)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function T(e){const n=p(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function w(e){const n=(0,h.Z)();return(0,v.jsx)(T,{...e,children:c(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var t=r(67294);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);