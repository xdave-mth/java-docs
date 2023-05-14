"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2977],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>g});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),d=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},c=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(r),g=n,u=p["".concat(s,".").concat(g)]||p[g]||m[g]||i;return r?t.createElement(u,l(l({ref:a},c),{},{components:r})):t.createElement(u,l({ref:a},c))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3385:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(7462),n=(r(7294),r(3905));const i={title:"Tiefgarage",description:"",tags:["oo","inheritance","polymorphy"]},l=void 0,o={unversionedId:"additional-material/exam-exercises1/parking-garage",id:"additional-material/exam-exercises1/parking-garage",title:"Tiefgarage",description:"",source:"@site/docs/additional-material/exam-exercises1/parking-garage.md",sourceDirName:"additional-material/exam-exercises1",slug:"/additional-material/exam-exercises1/parking-garage",permalink:"/java-docs/additional-material/exam-exercises1/parking-garage",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/exam-exercises1/parking-garage.md",tags:[{label:"oo",permalink:"/java-docs/tags/oo"},{label:"inheritance",permalink:"/java-docs/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/tags/polymorphy"}],version:"current",frontMatter:{title:"Tiefgarage",description:"",tags:["oo","inheritance","polymorphy"]},sidebar:"additionalMaterialSidebar",previous:{title:"Geschenkesack",permalink:"/java-docs/additional-material/exam-exercises1/gift-bag"},next:{title:"Geometrische Form",permalink:"/java-docs/additional-material/exam-exercises1/shape"}},s={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse ParkingGarage",id:"hinweise-zur-klasse-parkinggarage",level:2}],c={toc:d};function m(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse."),(0,n.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209169139-a04aaf76-269a-4216-8e9e-c9e0aa03d61e.png",alt:"image"})),(0,n.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,n.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden")),(0,n.kt)("h2",{id:"hinweise-zur-klasse-parkinggarage"},"Hinweise zur Klasse ParkingGarage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Die Methode ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean parkIn(car: Car, parkingSpotNumber: int)"),' soll das eingehende Fahrzeug auf dem Parkplatz mit der eingehenden Parkplatznummer "parken", falls dieser\nfrei ist. In diesem Fall soll der Wert ',(0,n.kt)("inlineCode",{parentName:"li"},"true")," zur\xfcckgegeben werden, andernfalls der Wert ",(0,n.kt)("inlineCode",{parentName:"li"},"false")),(0,n.kt)("li",{parentName:"ul"},"Die Methode ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean parkOut(car: Car)"),' soll das eingehende Auto "ausparken", falls dieses in der Tiefgarage steht. In diesem Fall soll der Wert ',(0,n.kt)("inlineCode",{parentName:"li"},"true")," zur\xfcckgegeben\nwerden, andernfalls der Wert ",(0,n.kt)("inlineCode",{parentName:"li"},"false")),(0,n.kt)("li",{parentName:"ul"},"Die Methode ",(0,n.kt)("inlineCode",{parentName:"li"},"int getNextFreeParkingSpotNumber()")," soll die Nummer des n\xe4chsten freien Parkplatzes zur\xfcckgeben")))}m.isMDXComponent=!0}}]);