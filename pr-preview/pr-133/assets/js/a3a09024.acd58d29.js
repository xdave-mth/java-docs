"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7659],{36870:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var t=r(85893),a=r(11151),s=r(74866),i=r(85162);const l={title:"Vererbung",description:"",sidebar_position:170,tags:["oo","inhertiance"]},o=void 0,u={id:"documentation/inheritance",title:"Vererbung",description:"",source:"@site/docs/documentation/inheritance.mdx",sourceDirName:"documentation",slug:"/documentation/inheritance",permalink:"/java-docs/pr-preview/pr-133/documentation/inheritance",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/inheritance.mdx",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-133/tags/oo"},{label:"inhertiance",permalink:"/java-docs/pr-preview/pr-133/tags/inhertiance"}],version:"current",sidebarPosition:170,frontMatter:{title:"Vererbung",description:"",sidebar_position:170,tags:["oo","inhertiance"]},sidebar:"documentationSidebar",previous:{title:"Aktivit\xe4tsdiagramme",permalink:"/java-docs/pr-preview/pr-133/documentation/activity-diagrams"},next:{title:"(Dynamische) Polymorphie",permalink:"/java-docs/pr-preview/pr-133/documentation/polymorphy"}},c={},d=[{value:"Implementieren von Vererbung",id:"implementieren-von-vererbung",level:2},{value:"\xdcberschreiben von Methoden",id:"\xfcberschreiben-von-methoden",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Bei der Modellierung von Klassen stellt man h\xe4ufig fest, dass sich einige\nKlassen der Struktur und dem Verhalten nach \xe4hneln. In solchen F\xe4llen hat man\ndie M\xf6glichkeit, die gemeinsamen Strukturen und Verhaltensweisen aus den\nspeziellen Klassen zu extrahieren und in einer allgemeineren Klasse\nunterzubringen. Dies wird als ",(0,t.jsx)(n.em,{children:"Generalisierung"})," bezeichnet. Umgekehrt gibt es\noftmals auch Bedarf, eine bestehende Klasse um zus\xe4tzliche Attribute und/oder\nMethoden zu erweitern. Dies bezeichnet man als ",(0,t.jsx)(n.em,{children:"Spezialisierung"})," Die Beziehung\nzwischen einer speziellen Klasse und einer allgemeinen Klasse wird ",(0,t.jsx)(n.em,{children:"Vererbung"}),"\nbezeichnet. Die speziellen Klasse einer Vererbung werden als ",(0,t.jsx)(n.em,{children:"Unterklassen"})," (Sub\nClasses), die allgemeinen Klassen als ",(0,t.jsx)(n.em,{children:"Oberklassen"})," (Super Classes) bezeichnet."]}),"\n",(0,t.jsx)(n.h2,{id:"implementieren-von-vererbung",children:"Implementieren von Vererbung"}),"\n",(0,t.jsxs)(n.p,{children:["Die Vererbung wird mit dem Schl\xfcsselwort ",(0,t.jsx)(n.code,{children:"extends"})," realisiert. In der Oberklasse\nk\xf6nnen Attribute und Methoden mit dem Schl\xfcsselwort ",(0,t.jsx)(n.code,{children:"protected"})," als gesch\xfctzt\nfestlegt werden. Unterklassen k\xf6nnen auf alle \xf6ffentlichen und gesch\xfctzten\nAttribute und Methoden der Oberklasse zugreifen."]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"a",label:"Oberklasse",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="SuperClass.java" showLineNumbers',children:"public class SuperClass {\n\n  public String foo;\n  protected String bar;\n  private String baz;\n\n  public SuperClass(String foo, String bar, String baz) {\n    this.foo = foo;\n    this.bar = bar;\n    this.baz = baz;\n  }\n\n}\n"})})}),(0,t.jsx)(i.Z,{value:"b",label:"Unterklasse",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="SubClass.java" showLineNumbers',children:"public class SubClass extends SuperClass {\n\n  public SubClass(String foo, String bar, String baz) {\n    super(foo, bar, baz);\n  }\n\n  public void foobar() {\n    System.out.println(foo);\n    System.out.println(bar);\n    System.out.println(baz); // Kompilierungsfehler\n  }\n\n}\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,t.jsxs)(n.p,{children:["In den Konstruktoren der Unterklasse muss ein Konstruktor der Oberklasse mit\nHilfe von ",(0,t.jsx)(n.code,{children:"super"})," aufgerufen werden."]})}),"\n",(0,t.jsx)(n.h2,{id:"\xfcberschreiben-von-methoden",children:"\xdcberschreiben von Methoden"}),"\n",(0,t.jsxs)(n.p,{children:["Wird in einer Unterklasse eine Methode definiert, die der Signatur einer Methode\nder Oberklasse entspricht, wird die Methode der Oberklasse ",(0,t.jsx)(n.em,{children:"\xfcberschrieben"}),", d.h.\nvon der Unterklasse neu implementiert. Bei Bedarf kann die urspr\xfcngliche\nMethodenimplementierung der Oberklasse mit Hilfe der Objektreferenz ",(0,t.jsx)(n.code,{children:"super"}),"\naufgerufen werden."]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"a",label:"Oberklasse",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="SuperClass.java" showLineNumbers',children:'public class SuperClass {\n\n  public void foo() {\n    System.out.print("foo");\n  }\n\n}\n'})})}),(0,t.jsx)(i.Z,{value:"b",label:"Unterklasse",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="SubClass.java" showLineNumbers',children:'public class SubClass extends SuperClass {\n\n  @Override\n  public void foo() {\n    super.foo();\n    System.out.println("bar");\n  }\n\n}\n'})})})]}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsxs)(n.p,{children:["Die Annotation ",(0,t.jsx)(n.code,{children:"@Override"})," sorgt bei fehlerhaftem \xdcberschreiben der Methode f\xfcr\nentsprechende Kompilierungsfehler."]})})]})}function b(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(90512);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(67294),a=r(90512),s=r(12466),i=r(16550),l=r(20469),o=r(91980),u=r(67392),c=r(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function b(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,d]=p({queryString:r,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=u??m;return b({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function j(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(x,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var t=r(67294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);