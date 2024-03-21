"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7696],{99445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(85893),a=t(11151),s=t(74866),i=t(85162);const l={title:"Datentypen",description:"",sidebar_position:30,tags:["data-types"]},d=void 0,c={id:"documentation/data-types",title:"Datentypen",description:"",source:"@site/docs/documentation/data-types.mdx",sourceDirName:"documentation",slug:"/documentation/data-types",permalink:"/java-docs/pr-preview/pr-142/documentation/data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/data-types.mdx",tags:[{label:"data-types",permalink:"/java-docs/pr-preview/pr-142/tags/data-types"}],version:"current",sidebarPosition:30,frontMatter:{title:"Datentypen",description:"",sidebar_position:30,tags:["data-types"]},sidebar:"documentationSidebar",previous:{title:"Aufbau einer Java-Klasse",permalink:"/java-docs/pr-preview/pr-142/documentation/class-structure"},next:{title:"Datenobjekte",permalink:"/java-docs/pr-preview/pr-142/documentation/data-objects"}},o={},u=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Datentypen legen neben der Gr\xf6\xdfe des Arbeitsspeichers, die ein Datenobjekt\nben\xf6tigt, auch die Art der Information fest, die im Datenobjekt gespeichert\nwerden kann."}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(i.Z,{value:"a",label:"Primitive Datentypen",default:!0,children:[(0,r.jsx)(n.p,{children:"Primitive Datentypen sind fest in der Programmiersprache verankert und k\xf6nnen\ndurch entsprechende Schl\xfcsselw\xf6rter angesprochen werden. Java kennt 8 solcher\nprimitiver Datentypen."}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Datentyp"}),(0,r.jsx)(n.th,{children:"Gr\xf6\xdfe"}),(0,r.jsx)(n.th,{children:"Wertbereich"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"true, false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"char"}),(0,r.jsx)(n.td,{children:"2 Byte"}),(0,r.jsx)(n.td,{children:"\\u0000 bis \\uFFFF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"byte"}),(0,r.jsx)(n.td,{children:"1 Byte"}),(0,r.jsx)(n.td,{children:"-128 bis +127"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"short"}),(0,r.jsx)(n.td,{children:"2 Byte"}),(0,r.jsx)(n.td,{children:"-32.768 bis +32.767"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"4 Byte"}),(0,r.jsx)(n.td,{children:"-2.147.483.648 bis +2.147.483.647"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"long"}),(0,r.jsx)(n.td,{children:"8 Byte"}),(0,r.jsx)(n.td,{children:"-9.233.372.036.854.775.808 bis +9.233.372.036.854.775.807"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"4 Byte"}),(0,r.jsx)(n.td,{children:"+/-1,4e-45 bis +/-3,4028235e+38"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"8 Byte"}),(0,r.jsx)(n.td,{children:"+/-4,9e-324 bis +/-1,7976931348623157e+308"})]})]})]})]}),(0,r.jsxs)(i.Z,{value:"b",label:"Strukturierte Datentypen",children:[(0,r.jsx)(n.p,{children:"Klassen werden auch als strukturierte Datentypen bezeichnet, da sie im Gegensatz\nzu primitiven Datentypen beliebig viele, unterschiedlich typisierte Attribute\nenthalten k\xf6nnen."}),(0,r.jsx)(n.mermaid,{value:"classDiagram\n  class Person {\n    -name: String\n    -age: int\n    -gender: char\n  }"}),(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Weitere Informationen zu strukturierten Datentypen finden sich im Kapitel\n",(0,r.jsx)(n.a,{href:"oo",children:"Objektorientierte Programmierung"}),"."]})})]}),(0,r.jsxs)(i.Z,{value:"c",label:"Generische Datentypen",children:[(0,r.jsxs)(n.p,{children:["Klassen, die \xfcber einen oder mehrere formale Typparameter verf\xfcgen, werden als\ngenerische Klassen bezeichnet. Generische Klassen k\xf6nnen mit verschiedenen\nDatentypen verwendet werden und erm\xf6glichen dadurch die Wiederverwendung von\nCode unter Beibehaltung statischer Typsicherheit. Unter Typsicherheit versteht\nman, dass Datentypen gem\xe4\xdf ihrer Definition verwendet werden und dabei keine\nTypverletzungen auftreten. Bei statisch typisierten Sprachen findet die\nTyppr\xfcfung bei der Kompilierung statt. Beispiele f\xfcr generische Klassen sind die\nKlasse ",(0,r.jsx)(n.code,{children:"ArrayList<E>"})," sowie die Klasse ",(0,r.jsx)(n.code,{children:"HashMap<K, V>"}),"."]}),(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Weitere Informationen zu generischen Datentypen finden sich im Kapitel\n",(0,r.jsx)(n.a,{href:"generics",children:"Generische Programmierung"}),"."]})})]}),(0,r.jsxs)(i.Z,{value:"d",label:"Abstrakte Datentypen",children:[(0,r.jsxs)(n.p,{children:["Abstrakte Datentypen sind Sammlungen von Daten samt den dazugeh\xf6rigen\nOperationen wie Einf\xfcgen, L\xf6schen etc. Beispiele f\xfcr abstrakte Datentypen sind\nListen (z.B. die Klassen ",(0,r.jsx)(n.code,{children:"ArrayList<E>"})," und ",(0,r.jsx)(n.code,{children:"LinkedList<E>"}),"), Mengen (z.B. die\nKlassen ",(0,r.jsx)(n.code,{children:"HashSet<E>"})," und ",(0,r.jsx)(n.code,{children:"TreeSet<E>"}),"), Warteschlangen (z.B. die Klassen\n",(0,r.jsx)(n.code,{children:"LinkedList<E>"})," und ",(0,r.jsx)(n.code,{children:"PriorityQueue<E>"}),") sowie Assoziativspeicher (z.B. die\nKlassen ",(0,r.jsx)(n.code,{children:"HashMap<K, V>"})," und ",(0,r.jsx)(n.code,{children:"TreeMap<K, V>"}),")."]}),(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Weitere Informationen zu abstrakten Datentypen finden sich in den Kapiteln\n",(0,r.jsx)(n.a,{href:"array-lists",children:"Feldbasierte Listen (ArrayLists)"}),", ",(0,r.jsx)(n.a,{href:"lists",children:"Listen"}),",\n",(0,r.jsx)(n.a,{href:"java-collections-framework",children:"Java Collections Framework"})," und\n",(0,r.jsx)(n.a,{href:"maps",children:"Assoziativspeicher (Maps)"}),"."]})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(90512);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(90512),s=t(12466),i=t(16550),l=t(20469),d=t(91980),c=t(67392),o=t(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,o.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),j=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{j&&d(j)}),[j]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),o=e=>{const n=e.currentTarget,t=d.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:o,...s,className:(0,a.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,x.jsx)(g,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(67294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);