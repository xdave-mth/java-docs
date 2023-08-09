"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return n?i.createElement(h,s(s({ref:t},d),{},{components:n})):i.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:r,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const o={title:"UnitTests04",description:""},s=void 0,a={unversionedId:"exercises/unit-tests/unit-tests04",id:"exercises/unit-tests/unit-tests04",title:"UnitTests04",description:"",source:"@site/docs/exercises/unit-tests/unit-tests04.md",sourceDirName:"exercises/unit-tests",slug:"/exercises/unit-tests/unit-tests04",permalink:"/java-docs/exercises/unit-tests/unit-tests04",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/unit-tests/unit-tests04.md",tags:[],version:"current",frontMatter:{title:"UnitTests04",description:""},sidebar:"exercisesSidebar",previous:{title:"UnitTests03",permalink:"/java-docs/exercises/unit-tests/unit-tests03"},next:{title:"Datenstr\xf6me (IO-Streams)",permalink:"/java-docs/exercises/io-streams/"}},l={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <code>BookCollectionTest</code>",id:"hinweise-zur-klasse-bookcollectiontest",level:2},{value:"Hinweis",id:"hinweis",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Erstelle die Klasse ",(0,r.kt)("inlineCode",{parentName:"p"},"BookCollectionTest")," anhand des abgebildeten Klassendiagramms."),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/jappuccini/java-docs/assets/47243617/734ab725-85e9-4e4e-a9aa-f9c3ddae056b",alt:"image"})),(0,r.kt)("h2",{id:"hinweise-zur-klasse-bookcollectiontest"},"Hinweise zur Klasse ",(0,r.kt)("inlineCode",{parentName:"h2"},"BookCollectionTest")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Lebenszyklus-Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void setUp()")," soll den Attributen der Testklasse passende Werte zuweisen"),(0,r.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,r.kt)("inlineCode",{parentName:"li"},"void testAddAuthor()")," soll pr\xfcfen, ob beim Ausf\xfchren der Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void addAuthor(author: Author)")," mit einem Autoren, der bereits in der B\xfcchersammlung vorhanden ist, die Ausnahme ",(0,r.kt)("inlineCode",{parentName:"li"},"DuplicateKeyException")," ausgel\xf6st wird"),(0,r.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,r.kt)("inlineCode",{parentName:"li"},"void testAddBook()")," soll pr\xfcfen, ob nach dem Ausf\xfchren der Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void addBook(author: Author, book: Book)")," der entsprechende Eintrag aktualisiert wurde"),(0,r.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,r.kt)("inlineCode",{parentName:"li"},"void testGetMostDiligentAuthor1()")," soll pr\xfcfen, ob beim Ausf\xfchren der Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional<Author> getMostDiligentAuthor()")," auf eine bef\xfcllte B\xfcchersammlung der Autor mit den meisten B\xfcchern in der B\xfcchersammlung als Optional zur\xfcckgegeben wird"),(0,r.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,r.kt)("inlineCode",{parentName:"li"},"void testGetMostDiligentAuthor2()")," soll pr\xfcfen, ob beim Ausf\xfchren der Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional<Author> getMostDiligentAuthor()")," auf eine leere B\xfcchersammlung ein leeres Optional zur\xfcckgegeben wird"),(0,r.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,r.kt)("inlineCode",{parentName:"li"},"void testGetBookByTitle()")," soll pr\xfcfen, ob beim Ausf\xfchren der Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional<Book> getBookByTitle(title: String)")," mit einem Buchtitel zu einem vorhandenen Buch das entsprechende Buch als Optional zur\xfcckgegeben wird und ob beim Ausf\xfchren der Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional<Book> getBookByTitle(title: String)")," mit einem Buchtitel zu einem nicht vorhandenen Buch ein leeres Optional zur\xfcckgegeben wird")),(0,r.kt)("h2",{id:"hinweis"},"Hinweis"),(0,r.kt)("p",null,"Verweden die Klasse ",(0,r.kt)("inlineCode",{parentName:"p"},"BookCollection")," aus \xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"p",href:"/java-docs/exercises/optionals/optionals01"},"Optionals01"),"."))}p.isMDXComponent=!0}}]);