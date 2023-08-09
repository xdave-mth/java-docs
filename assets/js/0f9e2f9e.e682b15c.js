"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,h=m["".concat(o,".").concat(p)]||m[p]||u[p]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={title:"Weihnachtsbaum",description:"",tags:["oo","inheritance","polymorphy"]},l=void 0,s={unversionedId:"additional-material/exam-exercises1/christmas-tree",id:"additional-material/exam-exercises1/christmas-tree",title:"Weihnachtsbaum",description:"",source:"@site/docs/additional-material/exam-exercises1/christmas-tree.md",sourceDirName:"additional-material/exam-exercises1",slug:"/additional-material/exam-exercises1/christmas-tree",permalink:"/java-docs/additional-material/exam-exercises1/christmas-tree",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/exam-exercises1/christmas-tree.md",tags:[{label:"oo",permalink:"/java-docs/tags/oo"},{label:"inheritance",permalink:"/java-docs/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/tags/polymorphy"}],version:"current",frontMatter:{title:"Weihnachtsbaum",description:"",tags:["oo","inheritance","polymorphy"]},sidebar:"additionalMaterialSidebar",previous:{title:"Kassensystem",permalink:"/java-docs/additional-material/exam-exercises1/cashier-system"},next:{title:"Pl\xe4tzchendose",permalink:"/java-docs/additional-material/exam-exercises1/cookie-jar"}},o={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse ChristmasTree",id:"hinweise-zur-klasse-christmastree",level:2},{value:"Hinweise zur Klasse Candle",id:"hinweise-zur-klasse-candle",level:2},{value:"Hinweise zur Klasse ElectricCandle",id:"hinweise-zur-klasse-electriccandle",level:2}],c={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse."),(0,a.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209168771-b4782665-b98f-4ed6-8e8d-59c5826a8c64.png",alt:"image"})),(0,a.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,a.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden")),(0,a.kt)("h2",{id:"hinweise-zur-klasse-christmastree"},"Hinweise zur Klasse ChristmasTree"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void addCandle(candle: Candle)")," soll der Kerzenliste (",(0,a.kt)("inlineCode",{parentName:"li"},"candles"),") die eingehende Kerze hinzuf\xfcgen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void lightChristmasTree()"),' soll alle Kerzen "entz\xfcnden"'),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"int getNumberOfElectricCandles()")," soll die Anzahl elektrischer Kerzen zur\xfcckgeben")),(0,a.kt)("h2",{id:"hinweise-zur-klasse-candle"},"Hinweise zur Klasse Candle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void lightACandle()"),' soll die Kerze "entz\xfcnden"'),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void turnOffACandle()"),' soll die Kerze "ausmachen"')),(0,a.kt)("h2",{id:"hinweise-zur-klasse-electriccandle"},"Hinweise zur Klasse ElectricCandle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Der Konstruktor soll die Energie (",(0,a.kt)("inlineCode",{parentName:"li"},"power"),") auf den Wert ",(0,a.kt)("em",{parentName:"li"},"100")," setzen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void lightACandle()"),' soll die elektrische Kerze "entz\xfcnden", wenn diese noch \xfcber Energie verf\xfcgt und die Energie um den Wert ',(0,a.kt)("em",{parentName:"li"},"10")," reduzieren"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void recharge()")," soll die Energie der elektrische Kerze wieder auf den Wert ",(0,a.kt)("em",{parentName:"li"},"100")," setzen")))}u.isMDXComponent=!0}}]);