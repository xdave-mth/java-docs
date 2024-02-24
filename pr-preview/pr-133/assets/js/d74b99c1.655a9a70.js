"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9094],{21246:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=r(85893),i=r(11151),a=r(85521);const l={title:"Polymorphy02",description:""},s=void 0,o={id:"exercises/polymorphy/polymorphy02",title:"Polymorphy02",description:"",source:"@site/docs/exercises/polymorphy/polymorphy02.mdx",sourceDirName:"exercises/polymorphy",slug:"/exercises/polymorphy/polymorphy02",permalink:"/java-docs/pr-preview/pr-133/exercises/polymorphy/polymorphy02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/polymorphy/polymorphy02.mdx",tags:[],version:"current",frontMatter:{title:"Polymorphy02",description:""},sidebar:"exercisesSidebar",previous:{title:"Polymorphy01",permalink:"/java-docs/pr-preview/pr-133/exercises/polymorphy/polymorphy01"},next:{title:"Polymorphy03",permalink:"/java-docs/pr-preview/pr-133/exercises/polymorphy/polymorphy03"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>Rental</em>",id:"hinweise-zur-klasse-rental",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Erstelle die Klasse ",(0,t.jsx)(n.code,{children:"Rental"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,t.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,t.jsx)(n.a,{href:"polymorphy01",children:"Polymorphy01"})," so\nan, dass alle erzeugten Autos und Lastwagen in einer Fahrzeugvermietung\nabgelegt und alle Attribute der Fahrzeugvermietung ausgegeben werden"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,t.jsx)(n.mermaid,{value:"classDiagram\n    Vehicle <|-- Car : extends\n    Vehicle <|-- Truck : extends\n    Vehicle o-- Engine\n    Rental o-- Vehicle\n\n    class Vehicle {\n        -make: String &#123final&#125\n        -model: String &#123final&#125\n        -engine: Engine &#123final&#125\n        #speedInKmh: double\n        -numberOfVehicles: int$\n        +Vehicle(make: String, model: String, engine: Engine)\n        +getMake() String\n        +getModel() String\n        +getEngine() Engine\n        +getSpeedInKmh() double\n        +accelerate(valueInKmh: int) void\n        +brake(valueInKmh: int) void\n        +toString() String\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description: String &#123final&#125\n        Engine(description: String)\n        +getDescription() String\n    }\n\n    class Car {\n        -seats: int &#123final&#125\n        +Car(make: String, model: String, engine: Engine, seats: int)\n        +getSeats() int\n        +doATurboBoost() void\n        +toString() String\n    }\n\n    class Truck {\n        -cargo: int &#123final&#125\n        -isTransformed: boolean\n        +Truck(make: String, model: String, engine: Engine, cargo: int)\n        +getCargo() int\n        +isTransformed() boolean\n        +transform() void\n        +toString() String\n    }\n\n    class Rental {\n        -name: String &#123final&#125\n        -vehicles: ArrayList~Vehicle~ &#123final&#125\n        +Rental(name: String)\n        +getName() String\n        +getVehicles() ArrayList~Vehicle~\n        +addVehicle(vehicle: Vehicle) void\n        +addAllVehicles(vehicles: Vehicle...) void\n        +toString() String\n    }"}),"\n",(0,t.jsxs)(n.h2,{id:"hinweise-zur-klasse-rental",children:["Hinweise zur Klasse ",(0,t.jsx)(n.em,{children:"Rental"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"void addVehicle(vehicle: Vehicle)"})," soll der Fahrzeugvermietung\nein Fahrzeug hinzuf\xfcgen"]}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"void addAllVehicles(vehicles: Vehicle...)"})," soll der\nFahrzeugvermietung mehrere Fahrzeug hinzuf\xfcgen"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Fahrzeugvermietung M\xfcller\nUnsere Fahrzeuge:\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\n"})}),"\n",(0,t.jsx)(a.Z,{pullRequest:"87",branchSuffix:"polymorphy/02"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var t=r(90512);const i={tabItem:"tabItem_Ymn6"};var a=r(85893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>S});var t=r(67294),i=r(90512),a=r(12466),l=r(16550),s=r(20469),o=r(91980),u=r(67392),c=r(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const i=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,a=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[u,d]=g({queryString:r,groupId:i}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,c.Nk)(r);return[i,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:i}),f=(()=>{const e=u??m;return p({value:e,tabValues:a})?e:null})();(0,s.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(85893);function x(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),i=s[r].value;i!==t&&(u(n),l(i))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,i.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function j(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function S(e){const n=(0,b.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},85521:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var t=r(74866),i=r(85162),a=r(33692),l=r(9286),s=r(85893);function o(e){let{pullRequest:n,branchSuffix:r}=e;return(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(l.Z,{language:"console",children:`git switch exercises/${r}`}),(0,s.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(l.Z,{language:"console",children:`git switch solutions/${r}`}),(0,s.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);