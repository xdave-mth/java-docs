"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5689],{12329:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=s(74848),a=s(28453);const i={title:"Smartphone-Shop",description:"",tags:["records","maps","optionals","java-stream-api"]},t=void 0,o={id:"exam-exercises/exam-exercises-java2/phone-store",title:"Smartphone-Shop",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/phone-store.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/phone-store",permalink:"/java-docs/pr-preview/pr-155/exam-exercises/exam-exercises-java2/phone-store",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/phone-store.md",tags:[{label:"records",permalink:"/java-docs/pr-preview/pr-155/tags/records"},{label:"maps",permalink:"/java-docs/pr-preview/pr-155/tags/maps"},{label:"optionals",permalink:"/java-docs/pr-preview/pr-155/tags/optionals"},{label:"java-stream-api",permalink:"/java-docs/pr-preview/pr-155/tags/java-stream-api"}],version:"current",frontMatter:{title:"Smartphone-Shop",description:"",tags:["records","maps","optionals","java-stream-api"]},sidebar:"examExercisesSidebar",previous:{title:"Messdaten",permalink:"/java-docs/pr-preview/pr-155/exam-exercises/exam-exercises-java2/measurement-data"},next:{title:"Planeten",permalink:"/java-docs/pr-preview/pr-155/exam-exercises/exam-exercises-java2/planets"}},c={},l=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>PhoneStore</em>",id:"hinweise-zur-klasse-phonestore",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Phone o-- ConnectionType\n    Phone o-- Brand\n    PhoneStore o-- Phone\n\n    class ConnectionType {\n        <<enumeration>>\n        USB_C = USB C, true\n        USB_MICRO = USB Micro, false\n        THUNDERBOLT = Thunderbolt, true\n        -description: String &#123final&#125\n        -isModern: boolean &#123final&#125\n    }\n\n    class Brand {\n        <<enumeration>>\n        SAMSUNG\n        APPLE\n        HUAWEI\n    }\n\n    class Phone {\n        <<record>>\n        description: String\n        brand: Brand\n        conncetionType: ConnectionType\n        numberOfCameras: int\n        batteryCapacityInMAh: int\n        cpuPowerInGHz: double\n        priceInEuro: double\n    }\n\n    class PhoneStore {\n        <<record>>\n        phones: List~Phone~\n        +query1() List~Phone~\n        +query2() OptionalDouble\n        +query3(maxPriceInEuro: double) List~Phone~\n        +query4() Map~Phone, String~\n        +query5() Map~ConnectionTyp&sbquo; List~Phone~~\n    }"}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-phonestore",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"PhoneStore"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"List<Phone> query1()"})," soll die drei leistungsst\xe4rksten\nSmartphones mit 3 Kameras der Marke Huawei absteigend nach dem Preis\nzur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"OptionalDouble query2()"})," soll die durchschnittliche Anzahl\nKameras aller Smartphones zur\xfcckgeben, die eine Akkukapazit\xe4t von 2500 mAh\noder mehr haben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"List<Phone> query3(maxPriceInEuro: double)"})," soll alle Smartphones\naufsteigend nach Preis zur\xfcckgeben, die den eingehenden H\xf6chstpreis nicht\n\xfcberschreiten, einen modernen Anschlusstyp haben und weniger als 2,4 GHz\nLeistung besitzen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"Map<Phone, String> query4()"})," soll jedes Smartphone mit der\nzusammengesetzten Zeichenkette aus Marke und Anschlusstyp zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"Map<ConnectionType, Phone> query4()"})," soll alle Smartphones\ngruppiert nach dem Anschlusstyp zur\xfcckgeben"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(96540);const a={},i=r.createContext(a);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);