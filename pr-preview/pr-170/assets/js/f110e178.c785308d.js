"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1352],{26824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(74848),i=t(28453),s=t(13979);const a={title:"Exceptions01",description:""},l=void 0,o={id:"exercises/exceptions/exceptions01",title:"Exceptions01",description:"",source:"@site/docs/exercises/exceptions/exceptions01.mdx",sourceDirName:"exercises/exceptions",slug:"/exercises/exceptions/exceptions01",permalink:"/java-docs/pr-preview/pr-170/exercises/exceptions/exceptions01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/exceptions/exceptions01.mdx",tags:[],version:"current",frontMatter:{title:"Exceptions01",description:""},sidebar:"exercisesSidebar",previous:{title:"Ausnahmen (Exceptions)",permalink:"/java-docs/pr-preview/pr-170/exercises/exceptions/"},next:{title:"Exceptions02",permalink:"/java-docs/pr-preview/pr-170/exercises/exceptions/exceptions02"}},c={},u=[{value:"Hinweise zur Klasse <em>Vehicle</em>",id:"hinweise-zur-klasse-vehicle",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Erstelle die Ausnahmenklasse ",(0,r.jsx)(n.code,{children:"InvalidValueException"})," anhand des abgebildeten\nKlassendiagramms"]}),"\n",(0,r.jsxs)(n.li,{children:["Passe die Klasse ",(0,r.jsx)(n.code,{children:"Vehicle"})," anhand der Hinweise an"]}),"\n",(0,r.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"../interfaces/interfaces01",children:"Interfaces01"})," so an, dass ein Auto mit einem\nung\xfcltigen Wert beschleunigt wird und in der Konsole ausgegeben wird, dass der\nWert gr\xf6\xdfer als 0 sein muss."]}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Vehicle <|-- Car : extends\n    Vehicle <|-- Truck : extends\n    Engine --o Vehicle\n    InvalidValueException <.. Vehicle : throws\n    Rental o-- Vehicle\n    Partner <|.. Rental : implements\n    TravelAgency o-- Partner\n\n    class Vehicle {\n        <<abstract>>\n        -make: String\n        -model: String\n        -engine: Engine\n        #speedInKmh: double\n        -numberOfVehicles: int$\n\n        +Vehicle(make: String, model: String, engine: Engine)\n        +getMake() String\n        +getModel() String\n        +getEngine() Engine\n        +getSpeedInKmh() double\n        +accelerate(valueInKmh: int) void &#123final&#125\n        +brake(valueInKmh: int) void &#123final&#125\n        +toString() String &#123abstract&#125\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description: String &#123final&#125\n        +getDescription() String\n    }\n\n    class Car {\n        <<final>>\n        -seats: int &#123final&#125\n        +Car(make: String, model: String, engine: Engine, seats: int)\n        +getSeats() int\n        +doATurboBoost() void\n        +toString() String\n    }\n\n    class Truck {\n        <<final>>\n        -cargo: int &#123final&#125\n        -isTransformed: boolean\n        +Truck(make: String, model: String, engine: Engine, cargo: int)\n        +getCargo() int\n        +isTransformed() boolean\n        +transform() void\n        +toString() String\n    }\n\n    class Rental {\n        -name: String &#123final&#125\n        -vehicles: ArrayList~Vehicle~ &#123final&#125\n        +Rental(name: String)\n        +getName() String\n        +getVehicles() ArrayList~Vehicle~\n        +addVehicle(vehicle: Vehicle) void\n        +addAllVehicles(vehicles: Vehicle...) void\n        +transformAllTrucks() void\n        +toString() String\n    }\n\n    class Partner {\n        <<interface>>\n        +toString() String\n    }\n\n    class TravelAgency {\n        -name: String\n        -partners: ArrayList~Partner~\n        +TravelAgency(name: String)\n        +addPartner(partner: Partner) void\n        +toString() String\n    }\n\n    class InvalidValueException {\n    \t<<exception>>\n    }"}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-vehicle",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"Vehicle"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void accelerate(valueInKmh: int)"})," soll den eingehenden Wert\n\xfcberpr\xfcfen. Ist der eingehende Wert kleiner als 0 soll die Ausnahme\n",(0,r.jsx)(n.code,{children:"InvalidValueException"})," ausgel\xf6st werden"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void brake(valueInKmh: int)"})," soll den eingehenden Wert\n\xfcberpr\xfcfen. Ist der eingehende Wert kleiner als 0 soll die Ausnahme\n",(0,r.jsx)(n.code,{children:"InvalidValueException"})," ausgel\xf6st werden"]}),"\n"]}),"\n",(0,r.jsx)(s.A,{pullRequest:"49",branchSuffix:"exceptions/01"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>V});var r=t(96540),i=t(34164),s=t(23104),a=t(56347),l=t(205),o=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=g({queryString:t,groupId:i}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,u.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),f=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==r&&(c(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function S(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function V(e){const n=(0,b.A)();return(0,x.jsx)(S,{...e,children:d(e.children)},String(n))}},13979:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(11470),i=t(19365),s=t(28774),a=t(21432),l=t(74848);function o(e){let{pullRequest:n,branchSuffix:t}=e;return(0,l.jsxs)(r.A,{children:[(0,l.jsxs)(i.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(a.A,{language:"console",children:`git switch exercises/${t}`}),(0,l.jsx)(s.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(i.A,{value:"solution",label:"Solution",children:[(0,l.jsx)(a.A,{language:"console",children:`git switch solutions/${t}`}),(0,l.jsx)(s.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(i.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(s.A,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);