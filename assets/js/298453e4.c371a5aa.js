"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6165],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,g=u["".concat(o,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(g,s(s({ref:n},d),{},{components:t})):r.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2115:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={title:"UnitTests02",description:""},s=void 0,l={unversionedId:"exercises/unit-tests/unit-tests02",id:"exercises/unit-tests/unit-tests02",title:"UnitTests02",description:"",source:"@site/docs/exercises/unit-tests/unit-tests02.md",sourceDirName:"exercises/unit-tests",slug:"/exercises/unit-tests/unit-tests02",permalink:"/java-docs/exercises/unit-tests/unit-tests02",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/unit-tests/unit-tests02.md",tags:[],version:"current",frontMatter:{title:"UnitTests02",description:""},sidebar:"exercisesSidebar",previous:{title:"UnitTests01",permalink:"/java-docs/exercises/unit-tests/unit-tests01"},next:{title:"UnitTests03",permalink:"/java-docs/exercises/unit-tests/unit-tests03"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse Rental",id:"hinweis-zur-klasse-rental",level:2},{value:"Hinweise zur Klasse RentalTest",id:"hinweise-zur-klasse-rentaltest",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Erstelle die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"RentalTest")," und erweitere die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"Rental")," aus \xdcbungsaufgabe ",(0,i.kt)("a",{parentName:"p",href:"/java-docs/exercises/exceptions/exceptions01"},"Exceptions01")," anhand des abgebildeten Klassendiagramms."),(0,i.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,i.kt)("mermaid",{value:"classDiagram\n    Vehicle <|-- Car\n    Vehicle <|-- Truck\n    Vehicle o-- Engine\n    Rental o-- Vehicle\n    Partner <|.. Rental\n    TravelAgency o-- Partner\n    RentalTest o-- Rental\n\n    class Vehicle {\n        <<abstract>>\n        -make String\n        -model String\n        -engine Engine\n        #speed double\n        -numberOfVehicles int$\n        +Vehicle(make String, model String, engine Engine)\n        +getMake() String\n        +getModel() String\n        +getEngine() Engine\n        +getSpeed() double\n        +accelerate(value int) void\n        +brake(value int) void\n        +print()* void\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description String\n    }\n\n    class Car {\n        -seats int\n        +Car(make String, model String, engine Engine, seats int)\n        +getSeats() int\n        +doATurboBoost() void\n        +print() void\n    }\n\n    class Truck {\n        -cargo int\n        -isTransformed boolean\n        +Truck(make String, model String, engine Engine, cargo int)\n        +getCargo() int\n        +isTransformed() boolean\n        +transform() void\n        +print() void\n    }\n\n    class Rental {\n        -name String\n        -vehicles ArrayList~Vehicle~\n        +Rental(name String)\n        +addVehicle(vehicle Vehicle) void\n        +addAllVehicles(vehicles Vehicle...) void\n        +transformAllTrucks() void\n        +accelerateAllVehicles(value int) void\n        +getVehicles() ArrayList~Vehicle~\n        +print() void\n    }\n\n    class Partner {\n        <<interface>>\n        +print() void\n    }\n\n    class TravelAgency {\n        -name String\n        -partners ArrayList~Partner~\n        +TravelAgency(name String)\n        +addPartner(partner Partner) void\n        +print() void\n    }\n\n    class RentalTest {\n        -rental Rental\n        +setUp() void\n        +testTransformAllTrucks() void\n        +testAccelerateAllVehicles() void\n    }"}),(0,i.kt)("h2",{id:"hinweis-zur-klasse-rental"},"Hinweis zur Klasse Rental"),(0,i.kt)("p",null,"Die Methode ",(0,i.kt)("inlineCode",{parentName:"p"},"void accelerateAllVehicles(value: int)")," soll alle Fahrzeuge der Fahrzeugvermietung um den eingehenden Wert beschleunigen."),(0,i.kt)("h2",{id:"hinweise-zur-klasse-rentaltest"},"Hinweise zur Klasse RentalTest"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Lebenszyklus-Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void setUp()")," soll eine Fahrzeugvermietung samt dazugeh\xf6riger Fahrzeuge erzeugen"),(0,i.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testTransformAllTrucks()")," soll pr\xfcfen, ob nach Ausf\xfchren der Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void transformAllTrucks()")," der Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"Rental")," alle Lastwagen in Autobots umgewandelt werden und nach erneutem Ausf\xfchren wieder zur\xfcckverwandelt werden"),(0,i.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testAccelerateAllVehicles(int)")," soll pr\xfcfen, ob beim Ausf\xfchren der Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void accelerateAllVehicles(value: int)")," der Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"Rental")," mit einem negativen Wert die Ausnahme ",(0,i.kt)("inlineCode",{parentName:"li"},"InvalidValueException")," ausgel\xf6st wird")))}p.isMDXComponent=!0}}]);