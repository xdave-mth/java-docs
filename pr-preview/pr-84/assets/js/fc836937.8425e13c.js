"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3745],{84723:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var a=r(85893),s=r(11151),l=r(74866),t=r(85162);const c={title:"Operators02",description:""},i=void 0,d={id:"exercises/operators/operators02",title:"Operators02",description:"",source:"@site/docs/exercises/operators/operators02.mdx",sourceDirName:"exercises/operators",slug:"/exercises/operators/operators02",permalink:"/java-docs/pr-preview/pr-84/exercises/operators/operators02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/operators/operators02.mdx",tags:[],version:"current",frontMatter:{title:"Operators02",description:""},sidebar:"exercisesSidebar",previous:{title:"Operators01",permalink:"/java-docs/pr-preview/pr-84/exercises/operators/operators01"},next:{title:"Operators03",permalink:"/java-docs/pr-preview/pr-84/exercises/operators/operators03"}},o={},u=[{value:"Coding",id:"coding",level:2},{value:"L\xf6sung",id:"l\xf6sung",level:2}];function h(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?"}),"\n",(0,a.jsx)(n.h2,{id:"coding",children:"Coding"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'int a = 0;\nint b = 0;\nint c = 0;\nint d = 5;\nint e = 3;\nint f = 4;\nint g = 0;\nint h = 2;\n\na = 3 * ++b;\nc = 3 * a++;\n\nd *= 6 + ++e;\ne = --f - 5 - f--;\nf = f + d % (e * 2);\n\ng = (h-- + 2) * (1 + --h);\n\nSystem.out.println("a: " + a);\nSystem.out.println("b: " + b);\nSystem.out.println("c: " + c);\nSystem.out.println("d: " + d);\nSystem.out.println("e: " + e);\nSystem.out.println("f: " + f);\nSystem.out.println("g: " + g);\nSystem.out.println("h: " + h);\n'})}),"\n",(0,a.jsx)(n.h2,{id:"l\xf6sung",children:"L\xf6sung"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(t.Z,{value:"a",label:"a",default:!0,children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Erste Verwendung der Variable a."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"a = 3 * ++b; // b hat in dieser Zeile den Wert 0\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Berechnung"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"a = 3 * ++(0);\na = 3 * 1;\na = 3;\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Zweite Verwendung der Variable a."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"c = 3 * a++; // a hat in dieser Zeile den Wert 3\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Berechnung"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"a++\n(3)++\n4\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Konsolenausgabe"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"a: 4\n"})})]}),(0,a.jsxs)(t.Z,{value:"b",label:"b",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Erste Verwendung der Variable b."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"a = 3 * ++b; // b hat in dieser Zeile den Wert 0\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Berechnung"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"++b\n++(0)\n1\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Konsolenausgabe"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"b: 1\n"})})]}),(0,a.jsxs)(t.Z,{value:"c",label:"c",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Erste Verwendung der Variable c."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"c = 3 * a++; // a hat in dieser Zeile den Wert 3\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Berechnung"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"c = 3 * 3 // a wird erst nach dieser Zeile um 1 erh\xf6ht;\nc = 9;\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Konsolenausgabe"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"c: 9\n"})})]}),(0,a.jsxs)(t.Z,{value:"d",label:"d",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Erste Verwendung der Variable d."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"d *= 6 + ++e; // e hat in dieser Zeile den Wert 3, d den Wert 5\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Berechnung"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"d = d * (6 + ++(e));\nd = 5 * (6 + ++(3));\nd = 5 * (6 + 4);\nd = 5 * 10;\nd = 50;\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Konsolenausgabe"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"d: 50\n"})})]}),(0,a.jsxs)(t.Z,{value:"e",label:"e",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Erste Verwendung der Variable e."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"d *= 6 + ++e; // e hat in dieser Zeile den Wert 3\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Berechnung"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"++(3)\n4\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Zweite Verwendung der Variable e."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"e = --f - 5 - f--; // f hat in dieser Zeile den Wert 4\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Berechnung"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"e = --(4) - 5 - f--;\ne = 3 - 5 - f--; // f hat nun den Wert 3\ne = 3 - 5 - (3)--;\ne = 3 - 5 - 3; // f hat nun den Wert 2\ne = -5;\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Konsolenausgabe"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"e: -5\n"})})]}),(0,a.jsxs)(t.Z,{value:"f",label:"f",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Erste Verwendung der Variable f."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"e = --f - 5 - f--; // f hat in dieser Zeile den Wert 4\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Berechnung"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"--f\n--(4)\n3 // f hat nun den Wert 3\n\nf--\n(3)--\n2 // f hat nun den Wert 2\n\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Zweite Verwendung der Variable f."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"f = f + d % (e * 2); // d hat in dieser Zeile den Wert 50, e den Wert -5, f den Wert 2\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Berechnung"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"f = f + d % (e * 2);\nf = 2 + 50 % (-5 * 2);\nf = 2 + 50 % -10;\nf = 2 + 0;\nf = 2;\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Konsolenausgabe"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"f: 2\n"})})]}),(0,a.jsxs)(t.Z,{value:"g",label:"g",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Erste Verwendung der Variable g."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"g = (h-- + 2) * (1 + --h); // h hat in dieser Zeile den Wert 2\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Berechnung"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"g = (h-- + 2) * (1 + --h);\ng = ((2)-- + 2) * (1 + --h); // h hat nach dieser Zeile den Wert 1\ng = (2 + 2) * (1 + --h);\ng = (2 + 2) * (1 + --(1)); // h hat nach dieser Zeile den Wert 0\ng = (2 + 2) * (1 + 0);\ng = 4 * 1;\ng = 4;\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Konsolenausgabe"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"g: 4\n"})})]}),(0,a.jsxs)(t.Z,{value:"h",label:"h",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Erste Verwendung der Variable f."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"g = (h-- + 2) * (1 + --h); // h hat in dieser Zeile den Wert 2\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Berechnung"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"\nh--\n(2)--\n1 // h hat nun den Wert 1\n\n--h\n--(1)\n0 // h hat nun den Wert 0\n\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Konsolenausgabe"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"h: 0\n"})})]})]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>t});r(67294);var a=r(34334);const s={tabItem:"tabItem_Ymn6"};var l=r(85893);function t(e){let{children:n,hidden:r,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,t),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>w});var a=r(67294),s=r(34334),l=r(12466),t=r(16550),c=r(20469),i=r(91980),d=r(67392),o=r(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:s}}=e;return{value:n,label:r,attributes:a,default:s}}))}(r);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const s=(0,t.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,l=h(e),[t,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[d,u]=j({queryString:r,groupId:s}),[p,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,o.Nk)(r);return[s,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),b=(()=>{const e=d??p;return g({value:e,tabValues:l})?e:null})();(0,c.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,l]),tabValues:l}}var x=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(85893);function m(e){let{className:n,block:r,selectedValue:a,selectValue:t,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),o=e=>{const n=e.currentTarget,r=i.indexOf(n),s=c[r].value;s!==a&&(d(n),t(s))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:o,...l,className:(0,s.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function N(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(m,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,f.jsx)(N,{...e,children:u(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>t});var a=r(67294);const s={},l=a.createContext(s);function t(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);