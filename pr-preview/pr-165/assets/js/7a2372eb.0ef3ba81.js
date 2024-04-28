"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5527],{60862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(74848),s=n(28453),i=n(11470),a=n(19365);const l={title:"Listen",description:"",sidebar_position:215,tags:["collections","lists"]},o=void 0,u={id:"documentation/lists",title:"Listen",description:"",source:"@site/docs/documentation/lists.mdx",sourceDirName:"documentation",slug:"/documentation/lists",permalink:"/java-docs/pr-preview/pr-165/documentation/lists",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/lists.mdx",tags:[{label:"collections",permalink:"/java-docs/pr-preview/pr-165/tags/collections"},{label:"lists",permalink:"/java-docs/pr-preview/pr-165/tags/lists"}],version:"current",sidebarPosition:215,frontMatter:{title:"Listen",description:"",sidebar_position:215,tags:["collections","lists"]},sidebar:"documentationSidebar",previous:{title:"Schnittstellen (Interfaces)",permalink:"/java-docs/pr-preview/pr-165/documentation/interfaces"},next:{title:"Komparatoren",permalink:"/java-docs/pr-preview/pr-165/documentation/comparators"}},c={},d=[];function p(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Die Java API stellt unter Anderem die Schnittstelle ",(0,r.jsx)(t.code,{children:"List<E>"})," sowie die Klassen\n",(0,r.jsx)(t.code,{children:"ArrayList<E>"}),", ",(0,r.jsx)(t.code,{children:"LinkedList<E>"})," und ",(0,r.jsx)(t.code,{children:"Arrays"})," zur Verf\xfcgung, mit deren Hilfe\nListen realisiert werden. Unter einer Liste versteht man eine geordnete Folge\nvon Elementen, die auch doppelt enthalten sein k\xf6nnen. Der Zugriff auf die\nElemente erfolgt \xfcber den Index oder sequentiell."]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsxs)(a.A,{value:"a",label:"Unver\xe4nderbare Listen",default:!0,children:[(0,r.jsxs)(t.p,{children:["Die Schnittstelle ",(0,r.jsx)(t.code,{children:"List<E>"})," bietet verschiedene Fabrikmethoden zum Erzeugen\nunver\xe4nderbarer Listen. Unver\xe4nderbar bedeutet, dass weder die Liste selbst noch\nihre Elemente ge\xe4ndert werden k\xf6nnen."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    List<String> list = List.of("Hans", "Peter", "Lisa");\n\n    System.out.println(list.size());\n    System.out.println(list.get(0));\n    list.set(0, "Max"); // Laufzeitfehler\n    list.add("Heidi"); // Laufzeitfehler\n    list.remove(0); // Laufzeitfehler\n  }\n\n}\n'})}),(0,r.jsx)(t.admonition,{title:"Hinweis",type:"note",children:(0,r.jsx)(t.p,{children:"Fabrikmethoden sind Methoden, die Objekte erzeugen."})})]}),(0,r.jsxs)(a.A,{value:"b",label:"Ver\xe4nderbare Listen fixer Gr\xf6\xdfe",children:[(0,r.jsxs)(t.p,{children:["Die Klasse ",(0,r.jsx)(t.code,{children:"Arrays"})," stellt neben Methoden zum Sortieren und Durchsuchen von\nFeldern auch eine Methode zum Erzeugen ver\xe4nderbarer Listen fixer Gr\xf6\xdfe zur\nVerf\xfcgung."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    List<String> list = Arrays.asList("Hans", "Peter", "Lisa");\n\n    System.out.println(list.size());\n    System.out.println(list.get(0));\n    list.set(0, "Max");\n    list.add("Heidi"); // Laufzeitfehler\n    list.remove(0); // Laufzeitfehler\n  }\n\n}\n'})})]}),(0,r.jsxs)(a.A,{value:"c",label:"Ver\xe4nderbare Listen dynamischer Gr\xf6\xdfe",children:[(0,r.jsxs)(t.p,{children:["Die Klasse ",(0,r.jsx)(t.code,{children:"ArrayList<E>"})," stellt eine ver\xe4nderbare Liste dynamischer Gr\xf6\xdfe auf\nBasis eine Feldes dar, die Klasse ",(0,r.jsx)(t.code,{children:"LinkedList<E>"})," eine ver\xe4nderbare Liste\ndynamischer Gr\xf6\xdfe auf Basis doppelt verketteter Elemente."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    List<String> list = new ArrayList<>(); // = new LinkedList<>();\n    list.add("Hans");\n    list.add("Peter");\n    list.add("Lisa");\n\n    System.out.println(list.size());\n    System.out.println(list.get(0));\n    list.set(0, "Max");\n    list.add("Heidi");\n    list.remove(0);\n  }\n\n}\n'})}),(0,r.jsx)(t.admonition,{title:"Hinweis",type:"note",children:(0,r.jsx)(t.p,{children:"Eine feldbasierte Liste ist bei wahlfreiem Zugriff schneller als eine verkettete\nListe; eine verkettete Liste ist bei Anf\xfcge- und L\xf6schoperationen (insbesondere\nbei gro\xdfen Elementzahlen) schneller als eine feldbasierte Liste."})})]})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(34164),i=n(23104),a=n(56347),l=n(205),o=n(57485),u=n(31682),c=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=p(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,d]=h({queryString:n,groupId:s}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),v=(()=>{const e=u??b;return m({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==r&&(u(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,s.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function L(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function y(e){const t=(0,f.A)();return(0,g.jsx)(L,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);