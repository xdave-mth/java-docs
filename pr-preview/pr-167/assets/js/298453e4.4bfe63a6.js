"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5151],{8621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=t(74848),i=t(28453);const r={title:"UnitTests02",description:""},a=void 0,l={id:"exercises/unit-tests/unit-tests02",title:"UnitTests02",description:"",source:"@site/docs/exercises/unit-tests/unit-tests02.md",sourceDirName:"exercises/unit-tests",slug:"/exercises/unit-tests/unit-tests02",permalink:"/java-docs/pr-preview/pr-167/exercises/unit-tests/unit-tests02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/unit-tests/unit-tests02.md",tags:[],version:"current",frontMatter:{title:"UnitTests02",description:""},sidebar:"exercisesSidebar",previous:{title:"UnitTests01",permalink:"/java-docs/pr-preview/pr-167/exercises/unit-tests/unit-tests01"},next:{title:"UnitTests03",permalink:"/java-docs/pr-preview/pr-167/exercises/unit-tests/unit-tests03"}},c={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>Rental</em>",id:"hinweis-zur-klasse-rental",level:2},{value:"Hinweise zur Klasse <em>RentalTest</em>",id:"hinweise-zur-klasse-rentaltest",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Erstelle die JUnit5-Testklasse ",(0,s.jsx)(n.code,{children:"RentalTest"})," und erweitere die Klasse ",(0,s.jsx)(n.code,{children:"Rental"}),"\naus \xdcbungsaufgabe ",(0,s.jsx)(n.a,{href:"../exceptions/exceptions01",children:"Exceptions01"})," anhand des\nabgebildeten Klassendiagramms."]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Vehicle <|-- Car : extends\n    Vehicle <|-- Truck : extends\n    Engine --o Vehicle\n    Rental o-- Vehicle\n    Partner <|.. Rental : implements\n    TravelAgency o-- Partner\n    RentalTest o-- Rental\n\n    class Vehicle {\n        <<abstract>>\n        -make: String &#123final&#125\n        -model: String &#123final&#125\n        -engine: Engine &#123final&#125\n        #speedInKmh: double\n        -numberOfVehicles: int$\n        +Vehicle(make: String, model: String, engine: Engine)\n        +make() String\n        +model() String\n        +engine() Engine\n        +getSpeedInKmh() double\n        +accelerate(valueInKmh: int) void &#123final&#125\n        +brake(valueInKmh: int) void &#123final&#125\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description: String &#123final&#125\n    }\n\n    class Car {\n        <<final>>\n        -seats: int &#123final&#125\n        +Car(make: String, model: String, engine: Engine, seats: int)\n        +seats() int\n        +doATurboBoost() void\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class Truck {\n        <<final>>\n        -cargo: int &#123final&#125\n        -isTransformed: boolean\n        +Truck(make: String, model: String, engine: Engine, cargo: int)\n        +cargo() int\n        +isTransformed() boolean\n        +transform() void\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class Rental {\n        -name: String &#123final&#125\n        -vehicles: List~Vehicle~ &#123final&#125\n        +Rental(name: String)\n        +name() String\n        +vehicles() List~Vehicle~\n        +addVehicle(vehicle: Vehicle) void\n        +addAllVehicles(vehicles: Vehicle...) void\n        +transformAllTrucks() void\n        +accelerateAllVehicles(valueInKmh: int) void\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class Partner {\n        <<interface>>\n        +toString() String\n    }\n\n    class TravelAgency {\n        -name: String &#123final&#125\n        -partners: List~Partner~ &#123final&#125\n        +TravelAgency(name: String)\n        +name() String\n        +partners() List~Partner~\n        +addPartner(partner: Partner) void\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class RentalTest {\n        <<test>>\n        -rental: Rental\n        +setUp() void\n        +testTransformAllTrucks() void\n        +testAccelerateAllVehicles() void\n    }"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-rental",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"Rental"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void accelerateAllVehicles(valueInKmh: int)"})," soll alle Fahrzeuge\nder Fahrzeugvermietung um den eingehenden Wert beschleunigen."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-rentaltest",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"RentalTest"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Lebenszyklus-Methode ",(0,s.jsx)(n.code,{children:"void setUp()"})," soll eine Fahrzeugvermietung samt\ndazugeh\xf6riger Fahrzeuge erzeugen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Testmethode ",(0,s.jsx)(n.code,{children:"void testTransformAllTrucks()"})," soll pr\xfcfen, ob nach Ausf\xfchren\nder Methode ",(0,s.jsx)(n.code,{children:"void transformAllTrucks()"})," der Klasse ",(0,s.jsx)(n.code,{children:"Rental"})," alle Lastwagen in\nAutobots umgewandelt werden und nach erneutem Ausf\xfchren wieder\nzur\xfcckverwandelt werden"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Testmethode ",(0,s.jsx)(n.code,{children:"void testAccelerateAllVehicles()"})," soll pr\xfcfen, ob beim\nAusf\xfchren der Methode ",(0,s.jsx)(n.code,{children:"void accelerateAllVehicles(valueInKmh: int)"})," der Klasse\n",(0,s.jsx)(n.code,{children:"Rental"})," mit einem negativen Wert die Ausnahme ",(0,s.jsx)(n.code,{children:"InvalidValueException"}),"\nausgel\xf6st wird"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);