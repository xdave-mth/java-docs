"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),k=o(n),p=l,c=k["".concat(s,".").concat(p)]||k[p]||m[p]||i;return n?a.createElement(c,r(r({ref:t},d),{},{components:n})):a.createElement(c,r({ref:t},d))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=k;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:l,r[1]=u;for(var o=2;o<i;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5419:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const i={},r="Einstieg Objektorientierung",u={type:"mdx",permalink:"/java-docs/slides/steffen/plan",source:"@site/src/pages/slides/steffen/plan.md",title:"Einstieg Objektorientierung",description:"Was sind Beispiele fuer Objekte",frontMatter:{}},s=[{value:"Was sind Beispiele fuer Objekte",id:"was-sind-beispiele-fuer-objekte",level:2},{value:"Studenten",id:"studenten",level:3},{value:"Autos",id:"autos",level:3},{value:"Was sind Klassen",id:"was-sind-klassen",level:2},{value:"Was sind Objekte?",id:"was-sind-objekte",level:2},{value:"Demo Objekte",id:"demo-objekte",level:2},{value:"Was sind modifier?",id:"was-sind-modifier",level:2},{value:"Demo make all attributes of car/student private",id:"demo-make-all-attributes-of-carstudent-private",level:2},{value:"Was ist ein Constructor ()",id:"was-ist-ein-constructor-",level:2},{value:"Was ist das schluesselwort static",id:"was-ist-das-schluesselwort-static",level:2},{value:"Darstellung von Klassen",id:"darstellung-von-klassen",level:2},{value:"Darstellung von Enumerations",id:"darstellung-von-enumerations",level:2},{value:"Darstellung von Ablaeufen",id:"darstellung-von-ablaeufen",level:2},{value:"Scope of variables",id:"scope-of-variables",level:2},{value:"Loops03 bug?",id:"loops03-bug",level:2}],o={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"einstieg-objektorientierung"},"Einstieg Objektorientierung"),(0,l.kt)("h2",{id:"was-sind-beispiele-fuer-objekte"},"Was sind Beispiele fuer Objekte"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Beispiele Sammeln z.B. Studenten, Auto")),(0,l.kt)("h3",{id:"studenten"},"Studenten"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Attribute: height, eyeColor, firstName, LastName, age"),(0,l.kt)("li",{parentName:"ul"},"Methoden: trinken, essen, laufen, schlafen, getFullName")),(0,l.kt)("h3",{id:"autos"},"Autos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Attribute: ps, farbe, maximalgeschwindigkeit, marke"),(0,l.kt)("li",{parentName:"ul"},"Methoden: anmachen, beschleunigen, bremsen")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Demo die Klassen Student und Car")),(0,l.kt)("h2",{id:"was-sind-klassen"},"Was sind Klassen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Beschreiben welche Attribute und Methoden JEDES Objekt hat. "),(0,l.kt)("li",{parentName:"ul"},"Attribute und Methoden sammeln fuer Studenten"),(0,l.kt)("li",{parentName:"ul"},"Attribute und Methoden sammeln fuer Autos")),(0,l.kt)("h2",{id:"was-sind-objekte"},"Was sind Objekte?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Objekte sind spezifische Auspraegungen von Klassen"),(0,l.kt)("li",{parentName:"ul"},"Mit spezifischen Auspraegungen sind Attribute gemeint"),(0,l.kt)("li",{parentName:"ul"},"Jedes Objekt hat zwar die gleichen Methodennamen, aber trotzdem ein anderes Verhalten")),(0,l.kt)("h2",{id:"demo-objekte"},"Demo Objekte"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Objekt erzeugen, attribut lesen, attribut schreiben"),(0,l.kt)("li",{parentName:"ul"},"Demo Steffen, Marianna und Mirco"),(0,l.kt)("li",{parentName:"ul"},"Demo Audi A3, Fiat 500, BMW 335i"),(0,l.kt)("li",{parentName:"ul"},"Demo unterschied Referenzvariable und variable"),(0,l.kt)("li",{parentName:"ul"},"Demo what is null?")),(0,l.kt)("h2",{id:"was-sind-modifier"},"Was sind modifier?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Es gibt public, private, protected(spaeter bei vererbung), package (vllt)"),(0,l.kt)("li",{parentName:"ul"},"Tabelle Daniel"),(0,l.kt)("li",{parentName:"ul"},"Warum public?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"zugriff von aussen um functionalitaet zu verwenden"))),(0,l.kt)("li",{parentName:"ul"},"Warum private?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Kommunikation an Verwender was ausfuehrbar ist und was nicht."),(0,l.kt)("li",{parentName:"ul"},"Organisation von Code"),(0,l.kt)("li",{parentName:"ul"},"Hide implementation details, protect against modification (Beispiel Auto)"),(0,l.kt)("li",{parentName:"ul"},"private by default"))),(0,l.kt)("li",{parentName:"ul"},"Warum package? NKR",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Brain Dead in Non Framework Entwicklung"))),(0,l.kt)("li",{parentName:"ul"},"Warum protected? (Erst mit Vererbung Sinnvoll)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Klassen, welche Oberklassen erweitern koennen die Methoden von der Oberklasse verwenden.")))),(0,l.kt)("h2",{id:"demo-make-all-attributes-of-carstudent-private"},"Demo make all attributes of car/student private"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"setter methode"),(0,l.kt)("li",{parentName:"ul"},"getter methode"),(0,l.kt)("li",{parentName:"ul"},"wtf is 'this'?"),(0,l.kt)("li",{parentName:"ul"},"uberladen von methoden.")),(0,l.kt)("p",null,"Aufgabe 01;"),(0,l.kt)("h2",{id:"was-ist-ein-constructor-"},"Was ist ein Constructor ()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"initialisierung des objects;"),(0,l.kt)("li",{parentName:"ul"},"wann wir der constructor ausgefuerht? --\x3e new"),(0,l.kt)("li",{parentName:"ul"},"wie kann ich den constructor erstellen?"),(0,l.kt)("li",{parentName:"ul"},"wie kann ich unterschiedliche constructoren erstellen?\nDemo new Human(fristName, lastName) ohne Setter")),(0,l.kt)("p",null,"Aufgabe 02\nbis\nAufgabe 06"),(0,l.kt)("h2",{id:"was-ist-das-schluesselwort-static"},"Was ist das schluesselwort static"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"static attribute --\x3e nur einmal pro klasse"),(0,l.kt)("li",{parentName:"ul"},"static methode --\x3e nur einmal pro Klasse"),(0,l.kt)("li",{parentName:"ul"},"zugriff auf attribute nur mit KlassName.Attribut"),(0,l.kt)("li",{parentName:"ul"},"in static method kann nur auf statische attribute der Klasse zugegriffen werden."),(0,l.kt)("li",{parentName:"ul"},"alles verstaendlich in public static void main"),(0,l.kt)("li",{parentName:"ul"},"Objektorientierung kompliziert bei nicht realen Objekten, z.B. Main, db connection")),(0,l.kt)("p",null,"Aufgabe 07"),(0,l.kt)("h1",{id:"java-api"},"Java API"),(0,l.kt)("p",null,"Wrapper Klassen Integer, Boolean etc. /Methoden NKR\nLocalDateTime /NKR\nFile /NKR"),(0,l.kt)("h1",{id:"enumerations"},"Enumerations"),(0,l.kt)("p",null,"Was sind Enumerations?\nAufzaehlungen fester Laenge.\nBeispiel Gender"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Demo selber enum erstellen und dannach enum Feature von Java verwenden. "),(0,l.kt)("li",{parentName:"ul"},"Enum beispiel mit getFullName() Zusatz BEFORE AFTER BETWEEN"),(0,l.kt)("li",{parentName:"ul"},"Auch dumme Enums moeglich")),(0,l.kt)("h1",{id:"klassendiagramm"},"Klassendiagramm"),(0,l.kt)("h2",{id:"darstellung-von-klassen"},"Darstellung von Klassen"),(0,l.kt)("h2",{id:"darstellung-von-enumerations"},"Darstellung von Enumerations"),(0,l.kt)("h1",{id:"activitaetsdiagramm"},"Activitaetsdiagramm"),(0,l.kt)("h2",{id:"darstellung-von-ablaeufen"},"Darstellung von Ablaeufen"),(0,l.kt)("p",null,"NKR"),(0,l.kt)("h1",{id:"vererbung"},"Vererbung"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"extends"),(0,l.kt)("li",{parentName:"ul"},"protected"),(0,l.kt)("li",{parentName:"ul"},"super"),(0,l.kt)("li",{parentName:"ul"},"override")),(0,l.kt)("h1",{id:"polymorphie"},"Polymorphie"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"upcast"),(0,l.kt)("li",{parentName:"ul"},"downcast")),(0,l.kt)("h1",{id:"abstrakte-klassen-und-methoden"},"Abstrakte Klassen und Methoden"),(0,l.kt)("p",null,"Was sind Abstrakte Klassen?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"keine Instanz davon"),(0,l.kt)("li",{parentName:"ul"},"muss abgeleited werden um instanziiert zu werden"),(0,l.kt)("li",{parentName:"ul"},"kann vorgefertigte Methoden und attribute enthalten\nWarum? Teilen von Funktionalitaet macht aber kein Sinn eine Instanz davon zu haben.\nBeispiel Animal")),(0,l.kt)("p",null,"Darstellung von Abstrakten Klassen"),(0,l.kt)("p",null,"Was sind Abstrakte Methoden?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"definiert methodenname, parameter und rueckgabetyp"),(0,l.kt)("li",{parentName:"ul"},"muss in abgeleiteter klasse implementiert werden\nWarum? erzwingen von zu implementierender Funktionalitaet.\nBeispiel Animal -> Lateininscher Name")),(0,l.kt)("h1",{id:"finale-klassen-und-methoden"},"Finale Klassen und Methoden"),(0,l.kt)("p",null,"Was sind Finale Klassen?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Klassen die nicht abgeleited werden koennen.\nWarum?"),(0,l.kt)("li",{parentName:"ul"},"neue Funktionalitaet in der Klasse nicht modifizierbar zu machen")),(0,l.kt)("p",null,"Was sind finale methoden?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Methoden die nicht ueberschrieben werden koennen\nWarum erzwingen, dass das Verhalten der Methode nicht modifiziert werden kann.")),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"interfaces"},"Interfaces"),(0,l.kt)("p",null,"Was sind Interfaces?\nreales Beispiel:\nUSB Typ C Interface\nmehrere Klassen implementieren dieses Interface"),(0,l.kt)("p",null,"  SamsungGalaxyS22\nHuaweiP20\nLadesteckerAnker\nLadesteckerNokia"),(0,l.kt)("p",null,"Reales Beispiel Warenkorb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Will den Preis per Unit"),(0,l.kt)("li",{parentName:"ul"},"Anzahl")),(0,l.kt)("p",null,"Warum abstract class nicht geeignet?"),(0,l.kt)("h1",{id:"komparatoren"},"Komparatoren"),(0,l.kt)("h1",{id:"exceptions"},"Exceptions"),(0,l.kt)("h2",{id:"scope-of-variables"},"Scope of variables"),(0,l.kt)("h2",{id:"loops03-bug"},"Loops03 bug?"),(0,l.kt)("h1",{id:"contributior"},"Contributior"),(0,l.kt)("p",null,"Goldfisch666\nNqin1\nGoldfisch Java API03"))}d.isMDXComponent=!0}}]);