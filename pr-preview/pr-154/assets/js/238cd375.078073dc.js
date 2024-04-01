"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1966],{67686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),i=t(11470),s=t(19365);const l={title:"Java Collections Framework",description:"",sidebar_position:224,tags:["collections","lists","sets","queues"]},o=void 0,c={id:"documentation/java-collections-framework",title:"Java Collections Framework",description:"",source:"@site/docs/documentation/java-collections-framework.mdx",sourceDirName:"documentation",slug:"/documentation/java-collections-framework",permalink:"/java-docs/pr-preview/pr-154/documentation/java-collections-framework",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/java-collections-framework.mdx",tags:[{label:"collections",permalink:"/java-docs/pr-preview/pr-154/tags/collections"},{label:"lists",permalink:"/java-docs/pr-preview/pr-154/tags/lists"},{label:"sets",permalink:"/java-docs/pr-preview/pr-154/tags/sets"},{label:"queues",permalink:"/java-docs/pr-preview/pr-154/tags/queues"}],version:"current",sidebarPosition:224,frontMatter:{title:"Java Collections Framework",description:"",sidebar_position:224,tags:["collections","lists","sets","queues"]},sidebar:"documentationSidebar",previous:{title:"Komparatoren",permalink:"/java-docs/pr-preview/pr-154/documentation/comparators"},next:{title:"Schl\xfcsseltransformationen (Hashing)",permalink:"/java-docs/pr-preview/pr-154/documentation/hashing"}},u={},d=[{value:"Iteratoren",id:"iteratoren",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Collections sind Beh\xe4lter, die beliebig viele Objekte aufnehmen k\xf6nnen. Der\nBeh\xe4lter \xfcbernimmt dabei die Verantwortung f\xfcr die Elemente. Collections werden\nauch als (Daten-)Sammlungen bezeichnet. Alle Collections-Schnittstellen und\nKlassen befinden sich im Paket ",(0,r.jsx)(n.code,{children:"java.util"}),". Die Grundformen der Datensammlungen\nsind die Schnittstellen ",(0,r.jsx)(n.code,{children:"List<E>"}),", ",(0,r.jsx)(n.code,{children:"Set<E>"})," und ",(0,r.jsx)(n.code,{children:"Queue<E>"}),". Zu allen\nSchnittstellen existieren konkrete Implementierungen sowie abstrakte Klassen,\ndie zum Erstellen eigener Collections-Klassen verwendet werden k\xf6nnen."]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsxs)(s.A,{value:"a",label:"Listen (Lists)",default:!0,children:[(0,r.jsx)(n.p,{children:"Unter einer Liste (List) versteht man eine geordnete Folge von Objekten. Listen\nk\xf6nnen doppelte Elemente enthalten. Der Zugriff auf die Elemente erfolgt \xfcber\nden Index oder sequentiell."}),(0,r.jsx)(n.mermaid,{value:"flowchart\n    subgraph names\n        name1(Lisa)\n        name2(Peter)\n        name3(Lisa)\n        name4(Hans)\n    end"}),(0,r.jsxs)(n.p,{children:["Konkrete Implementierungen der Schnittstelle ",(0,r.jsx)(n.code,{children:"List<E>"})," stellen die Klassen\n",(0,r.jsx)(n.code,{children:"ArrayList<E>"})," und ",(0,r.jsx)(n.code,{children:"LinkedList<E>"})," (siehe auch\n",(0,r.jsx)(n.a,{href:"array-lists",children:"Feldbasierte Listen"})," und ",(0,r.jsx)(n.a,{href:"lists",children:"Listen"}),") dar."]})]}),(0,r.jsxs)(s.A,{value:"b",label:"Mengen (Sets)",children:[(0,r.jsx)(n.p,{children:"Unter einer Menge (Set) versteht man eine Ansammlung von Elementen. Mengen\nk\xf6nnen keine doppelten Elemente beinhalten. Der Zugriff erfolgt \xfcber typische\nMengenoperationen."}),(0,r.jsx)(n.mermaid,{value:"flowchart LR\n    subgraph names\n        name1(Lisa)\n        name2(Peter)\n        name3(Hans)\n    end"}),(0,r.jsxs)(n.p,{children:["Konkrete Implementierungen der Schnittstelle ",(0,r.jsx)(n.code,{children:"Set<E>"})," stellen die Klassen\n",(0,r.jsx)(n.code,{children:"HashSet<E>"})," und ",(0,r.jsx)(n.code,{children:"TreeSet<E>"})," dar. Die Klasse ",(0,r.jsx)(n.code,{children:"HashSet<E>"})," implementiert die\nMenge dabei in Form einer Hashtabelle, die Klasse ",(0,r.jsx)(n.code,{children:"TreeSet<E>"})," in Form eines\nBin\xe4rbaumes."]})]}),(0,r.jsxs)(s.A,{value:"c",label:"Warteschlangen (Queues)",children:[(0,r.jsx)(n.p,{children:"Unter einer Warteschlange (Queue) versteht man eine Folge von Objekten, bei der\ndas Anf\xfcgen und L\xf6schen von Objekten nach dem FIFO-Prinzip (First In First Out)\nfunktioniert. Bei einer Warteschlange kann ein neues Objekt immer nur am Ende\nangef\xfcgt werden und nur das Objekt, das am Anfang der Warteschlange steht,\ngel\xf6scht werden. Warteschlangen k\xf6nnen doppelte Elemente enthalten."}),(0,r.jsx)(n.mermaid,{value:"flowchart LR\n    name1 --\x3e name2 --\x3e name3 --\x3e name4 --\x3e name5\n\n    name1(Lisa)\n    subgraph names\n        direction LR\n        name2(Peter)\n        name3(Lisa)\n        name4(Hans)\n    end\n    name5(Max)"}),(0,r.jsxs)(n.p,{children:["Konkrete Implementierungen der Schnittstelle ",(0,r.jsx)(n.code,{children:"Queue<E>"})," stellen die Klassen\n",(0,r.jsx)(n.code,{children:"PriorityQueue<E>"})," und ",(0,r.jsx)(n.code,{children:"LinkedList<E>"})," dar. Die Klasse ",(0,r.jsx)(n.code,{children:"PriorityQueue<E>"}),"\nimplementiert die Warteschlange als eine Vorrang-Warteschlange. Bei einer\nVorrang-Warteschlange werden die Elemente gem\xe4\xdf ihrer Wichtigkeit sortiert, das\nhei\xdft, sie funktioniert nicht nach dem FIFO-Prinzip."]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"iteratoren",children:"Iteratoren"}),"\n",(0,r.jsxs)(n.p,{children:["Ein Iterator erlaubt den sequentiellen Zugriff auf die Elemente einer\nDatensammlung. Iteratoren werden durch die Schnittstelle ",(0,r.jsx)(n.code,{children:"Iterator<E>"}),"\ndefiniert; diese bietet die Methoden ",(0,r.jsx)(n.code,{children:"boolean hasNext()"}),", ",(0,r.jsx)(n.code,{children:"E next()"})," und\n",(0,r.jsx)(n.code,{children:"void remove()"}),". Die von ",(0,r.jsx)(n.code,{children:"Iterator<E>"})," abgeleitete Schnittstelle\n",(0,r.jsx)(n.code,{children:"ListIterator<E>"})," bietet zus\xe4tzliche Methoden zum Ver\xe4ndern einer Liste."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n\n    List<String> names = List.of("Hans", "Peter", "Lisa");\n\n    Iterator<String> iterator = names.iterator();\n    while (iterator.hasNext()) {\n      String name = iterator.next();\n      System.out.println(name);\n    }\n\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Auch die bereits bekannte for-each-Schleife basiert auf Iteratoren. Die\nausf\xfchrliche Schreibeweise mit Iteratoren wird auch als erweiterte for-Schleife\nbezeichnet. Beim Kompilieren werden for-each-Schleifen um Iteratoren erg\xe4nzt."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n\n    List<String> names = List.of("Hans", "Peter", "Lisa");\n\n    for (Iterator<String> iterator = names.iterator(); iterator.hasNext();) {\n      String name = iterator.next();\n      System.out.println(name);\n    }\n\n    /* Kurzschreibweise */\n    for (String name: names) {\n      System.out.println(name);\n    }\n\n  }\n\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(34164),i=t(23104),s=t(56347),l=t(205),o=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=m(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=p({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),g=(()=>{const e=c??b;return h({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(x,{...e,...n})]})}function k(e){const n=(0,f.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);