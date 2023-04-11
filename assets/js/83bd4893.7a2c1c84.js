"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6700],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const o={title:"Gestaltungsprinzipien (Design Principles)",description:"",sidebar_position:10,tags:[]},a=void 0,s={unversionedId:"documentation/design/design-principles",id:"documentation/design/design-principles",title:"Gestaltungsprinzipien (Design Principles)",description:"",source:"@site/docs/documentation/design/design-principles.md",sourceDirName:"documentation/design",slug:"/documentation/design/design-principles",permalink:"/java-docs/documentation/design/design-principles",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/design/design-principles.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Gestaltungsprinzipien (Design Principles)",description:"",sidebar_position:10,tags:[]},sidebar:"documentationSidebar",previous:{title:"Softwaregestaltung (Softwaredesign)",permalink:"/java-docs/documentation/design/"},next:{title:"Entwurfsmuster (Design Patterns)",permalink:"/java-docs/documentation/design/design-patterns"}},l={},p=[{value:"Die SOLID-Prinzipien",id:"die-solid-prinzipien",level:2},{value:"Separation of Concerns",id:"separation-of-concerns",level:2},{value:"Inversion of Control",id:"inversion-of-control",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Unter Gestaltungsprinzipien (Design Principles) versteht man Richtlinien, welche eine hohe Softwarequalit\xe4t sicherstellen sollen. Neben einfachen Gestaltungsprinzipen wie ",(0,i.kt)("em",{parentName:"p"},"DRY")," (Don\xb4t Repeat Yourself), ",(0,i.kt)("em",{parentName:"p"},"KISS")," (Keep It Simple, Stupid) und ",(0,i.kt)("em",{parentName:"p"},"YAGNI"),"\n(You Ain\xb4t Gonna Need It), sind in der objektorientierten Programmierung vor allem die SOLID-Prinzipen sowie die Prinzipien *",(0,i.kt)("em",{parentName:"p"},"Separation of Concerns")," und ",(0,i.kt)("em",{parentName:"p"},"Inversion of Control")," von Bedeutung."),(0,i.kt)("h2",{id:"die-solid-prinzipien"},"Die SOLID-Prinzipien"),(0,i.kt)("p",null,"Hinter dem Akronym SOLID verbergen sich 5 Gestaltungsprinzipien:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Single Responsibility Principle"),": jede Klasse sollte genau eine Verantwortung besitzen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Open Closed Principle"),": Software-Einheiten sollten offen f\xfcr Erweiterungen, aber geschlossen f\xfcr Modifikationen sein"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Liscov Substitution Principle"),": Objekte von Unterklassen sollten sich so Verhalten wie Objekte der dazugeh\xf6rigen Oberklasse"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Interface Segregation Principle"),": Klassen sollten nur Methoden implementieren m\xfcssen, die sie auch verwenden"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Dependency Inversion Principle"),": Abh\xe4ngigkeiten sollten immer von den konkreten zu den abstrakten Modulen verlaufen")),(0,i.kt)("p",null,"Das Akronym SOLID geht auf den Softwareentwickler Robert C. Martin zur\xfcck, der unter anderem auch an der Entwicklung des Agilen Manifests beteiligt war. Dieses wurde 2001 verfasst und umfasst die vier wesentlichen Leits\xe4tze der agilen Softwareentwicklung."),(0,i.kt)("h2",{id:"separation-of-concerns"},"Separation of Concerns"),(0,i.kt)("p",null,"Unter dem Begriff ",(0,i.kt)("em",{parentName:"p"},"Separation of Concerns")," versteht man in der Informatik das Gestaltungsprinzip, die verschiedenen Aufgaben einer Anwendung in verschiedene Bereiche aufzuteilen. Grafische Benutzeroberfl\xe4chen werden zum Beispiel in der Regel in die Bereiche\nAufbau, Aussehen und Verhalten aufgeteilt."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209138908-2809dfe5-38c6-4386-b319-e694ae1b9f31.png",alt:"image"})),(0,i.kt)("h2",{id:"inversion-of-control"},"Inversion of Control"),(0,i.kt)("p",null,"Der Begriff ",(0,i.kt)("em",{parentName:"p"},"Inversion of Control")," beschreibt die Arbeitsweise von Frameworks: Die Funktionen einer Anwendung werden beim Framework registriert, welches die Funktionen zu einem sp\xe4teren Zeitpunkt aufruft, d.h. die Steuerung des Kontrollfluss obliegt nicht der\nAnwendung, sondern dem Framework. Daher versteht man unter einem Framework ein Programmierger\xfcst, welches die Architektur f\xfcr die Anwendung vorgibt und den Kontrollfluss der Anwendung steuert."),(0,i.kt)("p",null,"Die Umkehr der Steuerung kann auch als Anwendung des Hollywood-Prinzips (",(0,i.kt)("em",{parentName:"p"},"Don\xb4t call us, we\xb4ll call you"),") verstanden werden."))}c.isMDXComponent=!0}}]);