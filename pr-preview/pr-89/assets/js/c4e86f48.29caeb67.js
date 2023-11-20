"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8162],{61388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var r=t(85893),a=t(11151),s=t(74866),l=t(85162);const c={title:"Cases05",description:""},o=void 0,u={id:"exercises/control-structures/cases05",title:"Cases05",description:"",source:"@site/docs/exercises/control-structures/cases05.mdx",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/cases05",permalink:"/java-docs/pr-preview/pr-89/exercises/control-structures/cases05",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/control-structures/cases05.mdx",tags:[],version:"current",frontMatter:{title:"Cases05",description:""},sidebar:"exercisesSidebar",previous:{title:"Cases04",permalink:"/java-docs/pr-preview/pr-89/exercises/control-structures/cases04"},next:{title:"Cases06",permalink:"/java-docs/pr-preview/pr-89/exercises/control-structures/cases06"}},i={},d=[{value:"Coding",id:"coding",level:2},{value:"L\xf6sung",id:"l\xf6sung",level:2}];function h(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?"}),"\n",(0,r.jsx)(n.h2,{id:"coding",children:"Coding"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'int a = 5;\nint b = 5;\nboolean c = true;\nboolean d = true;\nboolean e;\nint f = 5;\nint g = 3;\nint h = 2;\nint i = 4;\nint j = 0;\n\ne = c && (a > 2 ? (b == (a = a * 2)) : d);\nj += ((h < ((f - g == 3) ? 3 : 2)) && (i < 5)) ? 1 : 2;\n\nSystem.out.println("a: " + a);\nSystem.out.println("b: " + b);\nSystem.out.println("c: " + c);\nSystem.out.println("d: " + d);\nSystem.out.println("e: " + e);\nSystem.out.println("f: " + f);\nSystem.out.println("g: " + g);\nSystem.out.println("h: " + h);\nSystem.out.println("i: " + i);\nSystem.out.println("j: " + j);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"l\xf6sung",children:"L\xf6sung"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"a",label:"a",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"a: 10\n"})})}),(0,r.jsx)(l.Z,{value:"b",label:"b",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"b: 5\n"})})}),(0,r.jsx)(l.Z,{value:"c",label:"c",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"c: true\n"})})}),(0,r.jsx)(l.Z,{value:"d",label:"d",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"d: true\n"})})}),(0,r.jsx)(l.Z,{value:"e",label:"e",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"e: false\n"})})}),(0,r.jsx)(l.Z,{value:"f",label:"f",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"f: 5\n"})})}),(0,r.jsx)(l.Z,{value:"g",label:"g",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"g: 3\n"})})}),(0,r.jsx)(l.Z,{value:"h",label:"h",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"h: 2\n"})})}),(0,r.jsx)(l.Z,{value:"i",label:"i",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"i: 4\n"})})}),(0,r.jsx)(l.Z,{value:"j",label:"j",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"j: 2\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(34334);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(34334),s=t(12466),l=t(16550),c=t(20469),o=t(91980),u=t(67392),i=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=b({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,i.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=u??m;return p({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),i=e=>{const n=e.currentTarget,t=o.indexOf(n),a=c[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:i,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var r=t(67294);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);