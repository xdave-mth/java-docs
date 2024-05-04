"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1629],{6224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(74848),a=t(28453),s=t(13979);const i={title:"Interfaces01",description:""},l=void 0,c={id:"exercises/interfaces/interfaces01",title:"Interfaces01",description:"",source:"@site/docs/exercises/interfaces/interfaces01.mdx",sourceDirName:"exercises/interfaces",slug:"/exercises/interfaces/interfaces01",permalink:"/java-docs/pr-preview/pr-169/exercises/interfaces/interfaces01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/interfaces/interfaces01.mdx",tags:[],version:"current",frontMatter:{title:"Interfaces01",description:""},sidebar:"exercisesSidebar",previous:{title:"Schnittstellen (Interfaces)",permalink:"/java-docs/pr-preview/pr-169/exercises/interfaces/"},next:{title:"Komparatoren",permalink:"/java-docs/pr-preview/pr-169/exercises/comparators/"}},o={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>TravelAgency</em>",id:"hinweise-zur-klasse-travelagency",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Passe die Klasse ",(0,r.jsx)(n.code,{children:"Rental"})," aus \xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"../abstract-and-final/abstract-and-final01",children:"Abstract and Final 01"})," anhand des\nabgebildeten Klassendiagramms an und erstelle die Klasse ",(0,r.jsx)(n.code,{children:"TravelAgency"})," sowie\ndie Schnittstelle ",(0,r.jsx)(n.code,{children:"Partner"})]}),"\n",(0,r.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"../abstract-and-final/abstract-and-final01",children:"Abstract and Final 01"})," so an,\ndass ein Reiseb\xfcro erzeugt wird, dass diesem die Autovermietung hinzugef\xfcgt\nwird und dass alle Attribute des Reiseb\xfcros ausgegeben werden"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Vehicle <|-- Car : extends\n    Vehicle <|-- Truck : extends\n    Engine --o Vehicle\n    Rental o-- Vehicle\n    Partner <|.. Rental : implements\n    TravelAgency o-- Partner\n\n    class Vehicle {\n        <<abstract>>\n        -make: String\n        -model: String\n        -engine: Engine\n        #speedInKmh: double\n        -numberOfVehicles: int$\n\n        +Vehicle(make: String, model: String, engine: Engine)\n        +getMake() String\n        +getModel() String\n        +getEngine() Engine\n        +getSpeedInKmh() double\n        +accelerate(valueInKmh: int) void &#123final&#125\n        +brake(valueInKmh: int) void &#123final&#125\n        +toString() String &#123abstract&#125\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description: String &#123final&#125\n        +getDescription() String\n    }\n\n    class Car {\n        <<final>>\n        -seats: int &#123final&#125\n        +Car(make: String, model: String, engine: Engine, seats: int)\n        +getSeats() int\n        +doATurboBoost() void\n        +toString() String\n    }\n\n    class Truck {\n        <<final>>\n        -cargo: int &#123final&#125\n        -isTransformed: boolean\n        +Truck(make: String, model: String, engine: Engine, cargo: int)\n        +getCargo() int\n        +isTransformed() boolean\n        +transform() void\n        +toString() String\n    }\n\n    class Rental {\n        -name: String &#123final&#125\n        -vehicles: ArrayList~Vehicle~ &#123final&#125\n        +Rental(name: String)\n        +getName() String\n        +getVehicles() ArrayList~Vehicle~\n        +addVehicle(vehicle: Vehicle) void\n        +addAllVehicles(vehicles: Vehicle...) void\n        +transformAllTrucks() void\n        +toString() String\n    }\n\n    class Partner {\n        <<interface>>\n        +toString() String\n    }\n\n    class TravelAgency {\n        -name: String\n        -partners: ArrayList~Partner~\n        +TravelAgency(name: String)\n        +addPartner(partner: Partner) void\n        +toString() String\n    }"}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-travelagency",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"TravelAgency"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void addPartner(partner: Partner)"})," soll dem Reiseb\xfcro einen\nPartner hinzuf\xfcgen"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"Reiseb\xfcro Schmidt\nUnsere Partner:\nFahrzeugvermietung M\xfcller\nUnsere Fahrzeuge:\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\n"})}),"\n",(0,r.jsx)(s.A,{pullRequest:"46",branchSuffix:"interfaces/01"})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),l=t(205),c=t(57485),o=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=g(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,d]=f({queryString:t,groupId:a}),[m,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=o??m;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var p=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==r&&(o(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function S(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function A(e){const n=(0,p.A)();return(0,v.jsx)(S,{...e,children:d(e.children)},String(n))}},13979:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var r=t(11470),a=t(19365),s=t(28774),i=t(21432),l=t(74848);function c(e){let{pullRequest:n,branchSuffix:t}=e;return(0,l.jsxs)(r.A,{children:[(0,l.jsxs)(a.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.A,{language:"console",children:`git switch exercises/${t}`}),(0,l.jsx)(s.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(a.A,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.A,{language:"console",children:`git switch solutions/${t}`}),(0,l.jsx)(s.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(a.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(s.A,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);