"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9774],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=o(t),c=i,p=g["".concat(u,".").concat(c)]||g[c]||m[c]||r;return t?a.createElement(p,l(l({ref:n},d),{},{components:t})):a.createElement(p,l({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=g;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=t(7462),i=(t(7294),t(3905));const r={title:"Klassendiagramme",description:"",sidebar_position:10,tags:["uml","class-diagrams"]},l=void 0,s={unversionedId:"documentation/uml/class-diagrams",id:"documentation/uml/class-diagrams",title:"Klassendiagramme",description:"",source:"@site/docs/documentation/uml/class-diagrams.md",sourceDirName:"documentation/uml",slug:"/documentation/uml/class-diagrams",permalink:"/java-docs/documentation/uml/class-diagrams",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/uml/class-diagrams.md",tags:[{label:"uml",permalink:"/java-docs/tags/uml"},{label:"class-diagrams",permalink:"/java-docs/tags/class-diagrams"}],version:"current",sidebarPosition:10,frontMatter:{title:"Klassendiagramme",description:"",sidebar_position:10,tags:["uml","class-diagrams"]},sidebar:"documentationSidebar",previous:{title:"Darstellung von Klassen und Programmabl\xe4ufen",permalink:"/java-docs/documentation/uml/"},next:{title:"Aktivit\xe4tsdiagramme",permalink:"/java-docs/documentation/uml/activity-diagrams"}},u={},o=[{value:"Darstellung von Klassen",id:"darstellung-von-klassen",level:2},{value:"Darstellung von generischen Klassen",id:"darstellung-von-generischen-klassen",level:2},{value:"Darstellung von Datenklassen",id:"darstellung-von-datenklassen",level:2},{value:"Darstellung von Schnittstellen",id:"darstellung-von-schnittstellen",level:2},{value:"Darstellung von Aufz\xe4hlungen",id:"darstellung-von-aufz\xe4hlungen",level:2},{value:"Darstellung von lokalen Klassen",id:"darstellung-von-lokalen-klassen",level:2},{value:"Darstellung von Ausnahmen",id:"darstellung-von-ausnahmen",level:2},{value:"Darstellung von Assoziationen",id:"darstellung-von-assoziationen",level:2},{value:"Darstellung von Vererbungs-und Realisierungs-Beziehungen",id:"darstellung-von-vererbungs-und-realisierungs-beziehungen",level:2},{value:"Darstellung von Multiplizit\xe4ten",id:"darstellung-von-multiplizit\xe4ten",level:2}],d={toc:o};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Klassendiagramme sind ein Diagrammtyp der UML und geh\xf6ren dort zum Bereich der Strukturdiagramme. Das Klassendiagramm dient zur leicht lesbaren Dokumentation des Aufbaus von Klassen und deren Beziehungen (Relationen). Klassendiagramme k\xf6nnen Informationen zu\nden Attributen, den Methoden und weiteren Klassen-Bestandteilen enthalten."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209165477-023f634a-4413-4907-baa6-7667305fd459.png",alt:"image"})),(0,i.kt)("h2",{id:"darstellung-von-klassen"},"Darstellung von Klassen"),(0,i.kt)("p",null,"Klassen werden im Klassendiagramm als Rechteck mit verschiedenen Bereichen (Klassenname, Attribute, Methoden und weitere Klassen-Bestandteile) dargestellt:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Der Klassenname wird zentriert, fett gedruckt und mit einem Gro\xdfbuchstaben beginnend dargestellt"),(0,i.kt)("li",{parentName:"ul"},"Attribute werden nach dem Muster ",(0,i.kt)("em",{parentName:"li"},"[Sichtbarkeit]")," ",(0,i.kt)("em",{parentName:"li"},"[Attributname]",": ","[Datentyp]"," = ","[Anfangswert]")," dargestellt"),(0,i.kt)("li",{parentName:"ul"},"Methoden nach dem Muster ",(0,i.kt)("em",{parentName:"li"},"[Sichtbarkeit]")," ",(0,i.kt)("em",{parentName:"li"},"[Methoden-Signatur]",": ","[Datentyp des R\xfcckgabewertes]")," dargestellt"),(0,i.kt)("li",{parentName:"ul"},"Statische Attribute und Methoden werden durch Unterstriche kenntlich gemacht"),(0,i.kt)("li",{parentName:"ul"},"Durch geschweifte Klammern k\xf6nnen Attribute, Methoden und Klassen um zus\xe4tzliche Merkmale erg\xe4nzt werden"),(0,i.kt)("li",{parentName:"ul"},"Die Sichtbarkeit von Attributen und Methoden wird durch (farbige) Symbole dargestellt:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Die Sichtbarkeit ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," wird durch das Symbol ",(0,i.kt)("strong",{parentName:"li"},"+")," bzw. die Farbe ",(0,i.kt)("strong",{parentName:"li"},"gr\xfcn")," dargestellt"),(0,i.kt)("li",{parentName:"ul"},"Die Sichtbarkeit ",(0,i.kt)("inlineCode",{parentName:"li"},"protected")," wird durch das Symbol ",(0,i.kt)("strong",{parentName:"li"},"#")," bzw. die Farbe ",(0,i.kt)("strong",{parentName:"li"},"gelb")," dargestellt"),(0,i.kt)("li",{parentName:"ul"},"Die Sichtbarkeit ",(0,i.kt)("inlineCode",{parentName:"li"},"packaged")," wird durch das Symbol ",(0,i.kt)("strong",{parentName:"li"},"~")," bzw. die Farbe ",(0,i.kt)("strong",{parentName:"li"},"blau")," dargestellt"),(0,i.kt)("li",{parentName:"ul"},"Die Sichtbarkeit ",(0,i.kt)("inlineCode",{parentName:"li"},"private")," wird durch das Symbol ",(0,i.kt)("strong",{parentName:"li"},"-")," bzw. die Farbe ",(0,i.kt)("strong",{parentName:"li"},"rot")," dargestellt")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209165572-788980f2-51cd-4d99-929c-2b9b93af54e7.png",alt:"image"})),(0,i.kt)("h2",{id:"darstellung-von-generischen-klassen"},"Darstellung von generischen Klassen"),(0,i.kt)("p",null,"Die formalen Typparameter einer generischen Klassen werden in einem zus\xe4tzlichen Rechteck dargestellt."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209165618-d695a34b-92fb-4f4f-bd7a-d65b2768c112.png",alt:"image"})),(0,i.kt)("h2",{id:"darstellung-von-datenklassen"},"Darstellung von Datenklassen"),(0,i.kt)("p",null,"Datenklassen werden im Klassendiagramm durch den Stereotypen ",(0,i.kt)("inlineCode",{parentName:"p"},"record")," kenntlich gemacht. Dieser impliziert, dass die Datenklasse einen entsprechenden Konstruktor, Getter zu allen Attributen sowie entsprechende Implementierungen f\xfcr die Object-Methoden besitzt."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209165706-16c0ca58-fc0c-4b6a-b073-e9e9df59e084.png",alt:"image"})),(0,i.kt)("h2",{id:"darstellung-von-schnittstellen"},"Darstellung von Schnittstellen"),(0,i.kt)("p",null,"Schnittstellen werden im Klassendiagramm durch den Stereotypen ",(0,i.kt)("inlineCode",{parentName:"p"},"interface")," kenntlich gemacht. Dieser impliziert, dass alle Methoden der Schnittstelle abstrakt sind."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209165629-da42b8c4-763c-4fe2-a9fb-06654fda81f7.png",alt:"image"})),(0,i.kt)("h2",{id:"darstellung-von-aufz\xe4hlungen"},"Darstellung von Aufz\xe4hlungen"),(0,i.kt)("p",null,"Aufz\xe4hlungen werden im Klassendiagramm durch den Stereotypen ",(0,i.kt)("inlineCode",{parentName:"p"},"enumeration")," kenntlich gemacht. Die Aufz\xe4hlungskonstanten werden in einem zus\xe4tzlichen Bereich aufgef\xfchrt. Der Stereotyp impliziert, dass die Aufz\xe4hlung einen privaten Konstruktor sowie ggbfs. passende Setter und Getter besitzt."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209165765-57054b0c-dc01-4270-99e6-436b8057ee16.png",alt:"image"})),(0,i.kt)("h2",{id:"darstellung-von-lokalen-klassen"},"Darstellung von lokalen Klassen"),(0,i.kt)("p",null,"Lokale Klassen werden mit einem Kreuz hin zur Top-Level-Klasse kenntlich gemacht."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209165818-5833caf7-a1de-48c7-b650-103cf5ea7925.png",alt:"image"})),(0,i.kt)("h2",{id:"darstellung-von-ausnahmen"},"Darstellung von Ausnahmen"),(0,i.kt)("p",null,"Ausnahmen werden im Klassendiagramm durch die Stereotypen ",(0,i.kt)("inlineCode",{parentName:"p"},"exception")," kenntlich gemacht. Die Beziehung zwischen einer Ausnahme und der ausl\xf6senden Klasse wird als gestrichelte Linie sowie einem offenen Pfeil hin zur Ausnhame dargestellt."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209165865-b441372d-4330-4607-bf70-718949b92b42.png",alt:"image"})),(0,i.kt)("h2",{id:"darstellung-von-assoziationen"},"Darstellung von Assoziationen"),(0,i.kt)("p",null,"Assoziationen stellen allgemeine Relationen zwischen zwei Klassen dar, bei der eine Klasse eine andere Klasse verwendet. Assoziationen k\xf6nnen in eine Richtung (unidirektional) und in beide Richtungen (bidirektional) vorliegen. "),(0,i.kt)("p",null,"Aggregationen und Kompositionen stellen spezielle Formen von Assoziationen dar, bei denen ein Objekt der einen Klasse Teil einer anderen Klasse ist. Im Gegensatz zu Aggregationen h\xe4ngen bei Kompositionen die Teile von der Existenz des Ganzen ab. Aggregationen\nwerden daher auch als ist-Teil-von-Relationen, Kompositionen als existenzabh\xe4ngige ist-Teil-von-Relationen bezeichnet."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209120430-c8ce835a-436b-49b6-ba1b-eeb4b5d05735.png",alt:"image"})),(0,i.kt)("p",null,"Assoziationen werden mit einem offenen Pfeil hin zur verwendeten Klasse dargestellt, Aggregationen mit einer nicht ausgef\xfcllten Raute hin zur besitzenden Klasse und Kompositionen mit einer ausgef\xfcllten Raute hin zur besitzenden Klasse."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209166000-d4f2a631-7502-4b7c-a0e9-f03e489c8e37.png",alt:"image"})),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Assoziationen k\xf6nnen gerichtet und ungerichtet dargestellt werden.")),(0,i.kt)("h2",{id:"darstellung-von-vererbungs-und-realisierungs-beziehungen"},"Darstellung von Vererbungs-und Realisierungs-Beziehungen"),(0,i.kt)("p",null,"Vererbungs-Beziehungen werden mit einem geschlossenen Pfeil hin zur Oberklasse sowie einer durchgezogenen Linie dargestellt, Realisierungs-Beziehungen mit einem geschlossenen Pfeil hin zur Schnittstelle sowie einer gestrichelten Linie."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209166051-5ef3514c-e2b6-4c1d-bc8f-ad533f913ae9.png",alt:"image"})),(0,i.kt)("h2",{id:"darstellung-von-multiplizit\xe4ten"},"Darstellung von Multiplizit\xe4ten"),(0,i.kt)("p",null,"Die Multiplizit\xe4t einer Beziehung legt fest, mit wie vielen Objekten der gegen\xfcberliegenden Klasse ein Objekt in Beziehung stehen kann. Die Multiplizit\xe4t wird als Intervall aus nicht-negativen ganzen Zahlen dargestellt und wird in der Form\n",(0,i.kt)("em",{parentName:"p"},"[untere Schranke]","..","[obere Schranke]")," angegeben. Besitzen beide Schranken den gleichen Wert, muss nur eine der beiden Schranken angegeben werden. Eine nach oben unbeschr\xe4nkte Schranke wird mit ",(0,i.kt)("strong",{parentName:"p"},"*")," angegeben."))}m.isMDXComponent=!0}}]);