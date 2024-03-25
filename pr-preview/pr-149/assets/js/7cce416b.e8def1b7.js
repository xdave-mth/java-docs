"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7268],{98540:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(85893),s=r(11151),i=r(85521);const a={title:"Polymorphy01",description:""},l=void 0,o={id:"exercises/polymorphy/polymorphy01",title:"Polymorphy01",description:"",source:"@site/docs/exercises/polymorphy/polymorphy01.mdx",sourceDirName:"exercises/polymorphy",slug:"/exercises/polymorphy/polymorphy01",permalink:"/java-docs/pr-preview/pr-149/exercises/polymorphy/polymorphy01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/polymorphy/polymorphy01.mdx",tags:[],version:"current",frontMatter:{title:"Polymorphy01",description:""},sidebar:"exercisesSidebar",previous:{title:"Polymorphie",permalink:"/java-docs/pr-preview/pr-149/exercises/polymorphy/"},next:{title:"Polymorphy02",permalink:"/java-docs/pr-preview/pr-149/exercises/polymorphy/polymorphy02"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>Car</em>",id:"hinweise-zur-klasse-car",level:2},{value:"Hinweise zur Klasse <em>Truck</em>",id:"hinweise-zur-klasse-truck",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Passe die Klasse ",(0,t.jsx)(n.code,{children:"Vehicle"})," aus \xdcbungsaufgabe\n",(0,t.jsx)(n.a,{href:"../enumerations/enumerations01",children:"Enumerations01"})," anhand des abgebildeten\nKlassendiagramms an und erstelle die Klassen ",(0,t.jsx)(n.code,{children:"Car"})," und ",(0,t.jsx)(n.code,{children:"Truck"})]}),"\n",(0,t.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,t.jsx)(n.a,{href:"../enumerations/enumerations01",children:"Enumerations01"})," so an, dass keine Fahrzeuge,\nsondern Autos und Lastwagen erzeugt und ausgegeben werden"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,t.jsx)(n.mermaid,{value:"classDiagram\n    Vehicle <|-- Car : extends\n    Vehicle <|-- Truck : extends\n    Vehicle o-- Engine\n\n    class Vehicle {\n        -make: String &#123final&#125\n        -model: String &#123final&#125\n        -engine: Engine &#123final&#125\n        #speedInKmh: double\n        -numberOfVehicles: int$\n        +Vehicle(make: String, model: String, engine: Engine)\n        +getMake() String\n        +getModel() String\n        +getEngine() Engine\n        +getSpeedInKmh() double\n        +accelerate(valueInKmh: int) void\n        +brake(valueInKmh: int) void\n        +toString() String\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description: String &#123final&#125\n        Engine(description: String)\n        +getDescription() String\n    }\n\n    class Car {\n        -seats: int &#123final&#125\n        +Car(make: String, model: String, engine: Engine, seats: int)\n        +getSeats() int\n        +doATurboBoost() void\n        +toString() String\n    }\n\n    class Truck {\n        -cargo: int &#123final&#125\n        -isTransformed: boolean\n        +Truck(make: String, model: String, engine: Engine, cargo: int)\n        +getCargo() int\n        +isTransformed() boolean\n        +transform() void\n        +toString() String\n    }"}),"\n",(0,t.jsxs)(n.h2,{id:"hinweise-zur-klasse-car",children:["Hinweise zur Klasse ",(0,t.jsx)(n.em,{children:"Car"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"void doATurboBoost()"})," soll die Geschwindigkeit verdoppeln und die\nGeschwindigkeit in der Konsole ausgeben."]}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"String toString()"})," soll alle Attribute von Car ausgeben:\n",(0,t.jsx)(n.code,{children:"Opel Zafira Life (Diesel, 7 Sitzpl\xe4tze)"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"hinweise-zur-klasse-truck",children:["Hinweise zur Klasse ",(0,t.jsx)(n.em,{children:"Truck"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"void transform()"})," soll das Attribut isTransformed invertieren und\nden aktuellen Status in der Konsole ausgeben."]}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"String toString()"})," soll alle Attribute von Truck ausgeben:\n",(0,t.jsx)(n.code,{children:"MAN TGX (Diesel, 20t)"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Anzahl Fahrzeuge: 0\nAnzahl Fahrzeuge: 3\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\nPorsche 911 beschleunigt auf 50 km/h\nMAN TGX verwandelt sich in einen Autobot\nPorsche 911 macht einen TurboBoost und beschleunigt auf 100 km/h\nMAN TGX verwandelt sich in einen Lastwagen zur\xfcck\n"})}),"\n",(0,t.jsx)(i.Z,{pullRequest:"86",branchSuffix:"polymorphy/01"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>a});r(67294);var t=r(90512);const s={tabItem:"tabItem_Ymn6"};var i=r(85893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,a),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>k});var t=r(67294),s=r(90512),i=r(12466),a=r(16550),l=r(20469),o=r(91980),u=r(67392),c=r(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=h(e),[a,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[u,d]=m({queryString:r,groupId:s}),[g,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,c.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),f=(()=>{const e=u??g;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(85893);function x(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),s=l[r].value;s!==t&&(u(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,s.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function k(e){const n=(0,b.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},85521:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var t=r(74866),s=r(85162),i=r(33692),a=r(9286),l=r(85893);function o(e){let{pullRequest:n,branchSuffix:r}=e;return(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(a.Z,{language:"console",children:`git switch exercises/${r}`}),(0,l.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(a.Z,{language:"console",children:`git switch solutions/${r}`}),(0,l.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);