"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4853],{61247:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=a(85893),r=a(11151),s=a(74866),l=a(85162);const i={title:"Abstrakte und finale Klassen und Methoden",description:"",sidebar_position:200,tags:["abstract","final"]},o=void 0,c={id:"documentation/abstract-and-final",title:"Abstrakte und finale Klassen und Methoden",description:"",source:"@site/docs/documentation/abstract-and-final.mdx",sourceDirName:"documentation",slug:"/documentation/abstract-and-final",permalink:"/java-docs/pr-preview/pr-127/documentation/abstract-and-final",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/abstract-and-final.mdx",tags:[{label:"abstract",permalink:"/java-docs/pr-preview/pr-127/tags/abstract"},{label:"final",permalink:"/java-docs/pr-preview/pr-127/tags/final"}],version:"current",sidebarPosition:200,frontMatter:{title:"Abstrakte und finale Klassen und Methoden",description:"",sidebar_position:200,tags:["abstract","final"]},sidebar:"documentationSidebar",previous:{title:"Die Mutter aller Klassen",permalink:"/java-docs/pr-preview/pr-127/documentation/object"},next:{title:"Schnittstellen (Interfaces)",permalink:"/java-docs/pr-preview/pr-127/documentation/interfaces"}},u={},d=[{value:"Abstrakte Klassen",id:"abstrakte-klassen",level:2},{value:"Abstrakte Methoden",id:"abstrakte-methoden",level:2},{value:"Finale Klassen",id:"finale-klassen",level:2},{value:"Finale Methoden",id:"finale-methoden",level:2}];function b(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Mit Hilfe der Schl\xfcsselw\xf6rter ",(0,t.jsx)(n.code,{children:"abstract"})," und ",(0,t.jsx)(n.code,{children:"final"})," kann die Verwendung von\nKlassen vorgegeben bzw. eingesch\xe4nkt werden."]}),"\n",(0,t.jsx)(n.h2,{id:"abstrakte-klassen",children:"Abstrakte Klassen"}),"\n",(0,t.jsx)(n.p,{children:"Abstrakte Klassen k\xf6nnen nicht instanziiert werden."}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"a",label:"Abstrakte Klasse",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Person.java" showLineNumbers',children:"public abstract class Person { }\n"})})}),(0,t.jsx)(l.Z,{value:"b",label:"Startklasse",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Person person = new Person(); // Kompilierungsfehler\n  }\n\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"abstrakte-methoden",children:"Abstrakte Methoden"}),"\n",(0,t.jsx)(n.p,{children:"Abstrakte Methoden werden in abstrakten Klassen definiert, besitzen dort keinen\nMethodenrumpf und m\xfcssen in den abgeleiteten Klassen der abstrakten Klasse\n\xfcberschrieben werden."}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"a",label:"Abstrakte Klasse mit abstrakter Methode",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Person.java" showLineNumbers',children:"public abstract class Person {\n\n  public abstract print();\n\n}\n"})})}),(0,t.jsx)(l.Z,{value:"b",label:"Startklasse",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Student.java" showLineNumbers',children:"public class Student extends Person {\n\n  public print() { }\n\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"finale-klassen",children:"Finale Klassen"}),"\n",(0,t.jsx)(n.p,{children:"Finale Klassen k\xf6nnen nicht abgeleitet werden."}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"a",label:"Finale Klasse",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Person.java" showLineNumbers',children:"public final class Person { }\n"})})}),(0,t.jsx)(l.Z,{value:"b",label:"Unterklasse",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Student.java" showLineNumbers',children:"public class Student extends Person { } // Kompilierungsfehler\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"finale-methoden",children:"Finale Methoden"}),"\n",(0,t.jsx)(n.p,{children:"Finale Methoden k\xf6nnen nicht \xfcberschrieben werden."}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"a",label:"Oberklasse mit finaler Methode",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Person.java" showLineNumbers',children:"public class Person {\n\n  private String name;\n\n  public Person(String name) {\n    this.name = name;\n  }\n  public final name() {\n    return name;\n  }\n\n}\n"})})}),(0,t.jsx)(l.Z,{value:"b",label:"Unterklasse",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Student.java" showLineNumbers',children:"public class Student extends Person {\n\n  public name() { } // Kompilierungsfehler\n\n}\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>l});a(67294);var t=a(90512);const r={tabItem:"tabItem_Ymn6"};var s=a(85893);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>w});var t=a(67294),r=a(90512),s=a(12466),l=a(16550),i=a(20469),o=a(91980),c=a(67392),u=a(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=b(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=p({queryString:a,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),v=(()=>{const e=c??m;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(85893);function g(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,a=o.indexOf(n),r=i[a].value;r!==t&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function x(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(x,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,j.jsx)(k,{...e,children:d(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>l});var t=a(67294);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);