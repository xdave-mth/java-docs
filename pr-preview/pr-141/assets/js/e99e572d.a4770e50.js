"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3891],{11342:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(85893),r=n(11151),t=n(74866),l=n(85162);const i={title:"(Dynamische) Polymorphie",description:"",sidebar_position:180,tags:["oo","polymorphy"]},u=void 0,c={id:"documentation/polymorphy",title:"(Dynamische) Polymorphie",description:"",source:"@site/docs/documentation/polymorphy.mdx",sourceDirName:"documentation",slug:"/documentation/polymorphy",permalink:"/java-docs/pr-preview/pr-141/documentation/polymorphy",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/polymorphy.mdx",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-141/tags/oo"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-141/tags/polymorphy"}],version:"current",sidebarPosition:180,frontMatter:{title:"(Dynamische) Polymorphie",description:"",sidebar_position:180,tags:["oo","polymorphy"]},sidebar:"documentationSidebar",previous:{title:"Vererbung",permalink:"/java-docs/pr-preview/pr-141/documentation/inheritance"},next:{title:"Die Mutter aller Klassen",permalink:"/java-docs/pr-preview/pr-141/documentation/object"}},o={},d=[{value:"Upcast",id:"upcast",level:2},{value:"Downcast",id:"downcast",level:2},{value:"Der instanceof-Operator",id:"der-instanceof-operator",level:2}];function p(e){const s={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["Unter (dynamischer) Polymorphie (griechisch f\xfcr Vielgestaltigkeit) versteht man,\ndass eine Referenzvariable zur Laufzeit durch Typumwandlung Referenzen auf\nObjekte unterschiedlicher Klassen besitzen kann und dass dadurch\nunterschiedliche Methodenimplementierungen aufgerufen werden k\xf6nnen. Man spricht\nin diesem Zusammenhang auch vom ",(0,a.jsx)(s.em,{children:"statischen Datentyp einer Referenzvariablen"}),"\n(der zur Designzeit festgelegt wird) und vom ",(0,a.jsx)(s.em,{children:"dynamischen Datentyp einer\nReferenzvariablen"})," (der zur Laufzeit zugewiesen wird). Der statische Typ legt\nfest, welche Methoden aufgerufen werden k\xf6nnen, der dynamische, welche\nMethodenimplementierung aufgerufen wird. Die Typumwandlung von der abgeleiteten\nUnterklasse zur Oberklasse bezeichnet man als ",(0,a.jsx)(s.em,{children:"Upcast"}),", die R\xfcckumwandlung als\n",(0,a.jsx)(s.em,{children:"Downcast"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"upcast",children:"Upcast"}),"\n",(0,a.jsx)(s.p,{children:"Beim Upcast wird die Objektreferenz der Unterklasse in eine Objektreferenz der\nOberklasse umgewandelt."}),"\n",(0,a.jsxs)(t.Z,{children:[(0,a.jsx)(l.Z,{value:"a",label:"Oberklasse",default:!0,children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="SuperClass.java" showLineNumbers',children:"public class SuperClass {\n}\n"})})}),(0,a.jsx)(l.Z,{value:"b",label:"Unterklasse",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="SubClass.java" showLineNumbers',children:"public class SubClass extends SuperClass {\n}\n"})})}),(0,a.jsx)(l.Z,{value:"c",label:"Startklasse",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    SuperClass superClass;\n    SubClass subClass = new SubClass();\n    superClass = subClass; // Upcast\n  }\n\n}\n"})})})]}),"\n",(0,a.jsx)(s.h2,{id:"downcast",children:"Downcast"}),"\n",(0,a.jsxs)(s.p,{children:["Beim Downcast wird die Objektreferenz der Oberklasse in eine Objektreferenz der\nUnterklasse umgewandelt. Im Gegensatz zum Upcast muss bei einem Downcast der Typ\nexplizit angegeben werden. Der Downcast einer nicht zuweisungskompatiblen\nReferenz f\xfchrt zu einer ",(0,a.jsx)(s.code,{children:"ClassCastException"}),"."]}),"\n",(0,a.jsxs)(t.Z,{children:[(0,a.jsx)(l.Z,{value:"a",label:"Oberklasse",default:!0,children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="SuperClass.java" showLineNumbers',children:"public class SuperClass {\n}\n"})})}),(0,a.jsx)(l.Z,{value:"b",label:"Unterklasse",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="SubClass.java" showLineNumbers',children:"public class SubClass extends SuperClass {\n}\n"})})}),(0,a.jsx)(l.Z,{value:"c",label:"Startklasse",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    SuperClass superClass;\n    SubClass subClass = new SubClass();\n    superClass = subClass; // Upcast\n    subClass = (SubClass) superClass; // Downcast\n  }\n\n}\n"})})})]}),"\n",(0,a.jsx)(s.h2,{id:"der-instanceof-operator",children:"Der instanceof-Operator"}),"\n",(0,a.jsxs)(s.p,{children:["Mit dem Operator ",(0,a.jsx)(s.code,{children:"instanceof"})," kann zur Laufzeit gepr\xfcft werden, ob eine\nObjektreferenz zuweisungskompatibel zu einer Klasse ist. Eine Objektreferenz ist\ndann zuweisungskompatibel zu einer Klasse, wenn die Klasse des referenzierten\nObjektes in einer Vererbungsbeziehung zur Klasse steht."]}),"\n",(0,a.jsxs)(t.Z,{children:[(0,a.jsx)(l.Z,{value:"a",label:"Oberklasse",default:!0,children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="SuperClass.java" showLineNumbers',children:"public class SuperClass {\n}\n"})})}),(0,a.jsx)(l.Z,{value:"b",label:"Unterklasse",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="SubClass.java" showLineNumbers',children:"public class SubClass extends SuperClass {\n}\n"})})}),(0,a.jsx)(l.Z,{value:"c",label:"Startklasse",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    SuperClass superClass;\n    SubClass subClass = new SubClass();\n    superClass = subClass; // Upcast\n    if (superClass instanceof SubClass) {\n      subClass = (SubClass) superClass; // Downcast\n    }\n  }\n\n}\n"})})})]}),"\n",(0,a.jsxs)(s.p,{children:["Seit Java 16 erm\xf6glicht der Mustervergleich bei ",(0,a.jsx)(s.code,{children:"instanceof"})," das Vermeiden\nnotwendiger Typumwandlungen und sorgt gleichzeitig f\xfcr eine sicherere\nProgrammierung."]}),"\n",(0,a.jsxs)(t.Z,{children:[(0,a.jsx)(l.Z,{value:"a",label:"Oberklasse",default:!0,children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="SuperClass.java" showLineNumbers',children:"public class SuperClass {\n}\n"})})}),(0,a.jsx)(l.Z,{value:"b",label:"Unterklasse",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="SubClass.java" showLineNumbers',children:"public class SubClass extends SuperClass {\n}\n"})})}),(0,a.jsx)(l.Z,{value:"c",label:"Startklasse",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    SuperClass superClass;\n    SubClass subClass = new SubClass();\n    superClass = subClass; // Upcast\n    if (superClass instanceof SubClass s) { // Downcast\n    }\n  }\n\n}\n"})})})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,s,n)=>{n.d(s,{Z:()=>l});n(67294);var a=n(90512);const r={tabItem:"tabItem_Ymn6"};var t=n(85893);function l(e){let{children:s,hidden:n,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:n,children:s})}},74866:(e,s,n)=>{n.d(s,{Z:()=>w});var a=n(67294),r=n(90512),t=n(12466),l=n(16550),i=n(20469),u=n(91980),c=n(67392),o=n(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:n}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:n,attributes:a,default:r}}=e;return{value:s,label:n,attributes:a,default:r}}))}(n);return function(e){const s=(0,c.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function h(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function b(e){let{queryString:s=!1,groupId:n}=e;const r=(0,l.k6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,u._X)(t),(0,a.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(r.location.search);s.set(t,e),r.replace({...r.location,search:s.toString()})}),[t,r])]}function m(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,t=p(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:t}))),[c,d]=b({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,t]=(0,o.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:r}),v=(()=>{const e=c??m;return h({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,t]),tabValues:t}}var g=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function j(e){let{className:s,block:n,selectedValue:a,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),o=e=>{const s=e.currentTarget,n=u.indexOf(s),r=i[n].value;r!==a&&(c(s),l(r))},d=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;s=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;s=u[n]??u[u.length-1];break}}s?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},s),children:i.map((e=>{let{value:s,label:n,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>u.push(e),onKeyDown:d,onClick:o,...t,className:(0,r.Z)("tabs__item",v.tabItem,t?.className,{"tabs__item--active":a===s}),children:n??s},s)}))})}function x(e){let{lazy:s,children:n,selectedValue:r}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function C(e){const s=m(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(j,{...e,...s}),(0,f.jsx)(x,{...e,...s})]})}function w(e){const s=(0,g.Z)();return(0,f.jsx)(C,{...e,children:d(e.children)},String(s))}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>l});var a=n(67294);const r={},t=a.createContext(r);function l(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);