"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6961],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>p});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(i),p=a,g=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return i?n.createElement(g,l(l({ref:t},c),{},{components:i})):n.createElement(g,l({ref:t},c))}));function p(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},4426:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(7462),a=(i(7294),i(3905));const r={title:"Videosammlung",description:"",tags:["inheritance","polymorphy","exceptions","records","io-streams"]},l=void 0,o={unversionedId:"additional-material/exam-exercises2/video-collection",id:"additional-material/exam-exercises2/video-collection",title:"Videosammlung",description:"",source:"@site/docs/additional-material/exam-exercises2/video-collection.md",sourceDirName:"additional-material/exam-exercises2",slug:"/additional-material/exam-exercises2/video-collection",permalink:"/java-docs/additional-material/exam-exercises2/video-collection",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/exam-exercises2/video-collection.md",tags:[{label:"inheritance",permalink:"/java-docs/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/tags/polymorphy"},{label:"exceptions",permalink:"/java-docs/tags/exceptions"},{label:"records",permalink:"/java-docs/tags/records"},{label:"io-streams",permalink:"/java-docs/tags/io-streams"}],version:"current",frontMatter:{title:"Videosammlung",description:"",tags:["inheritance","polymorphy","exceptions","records","io-streams"]},sidebar:"additionalMaterialSidebar",previous:{title:"Raumstation",permalink:"/java-docs/additional-material/exam-exercises2/space-station"},next:{title:"Slides",permalink:"/java-docs/additional-material/slides"}},s={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse VideoCollection",id:"hinweise-zur-klasse-videocollection",level:2},{value:"Beispielhafter Auszug aus einer Videodatei",id:"beispielhafter-auszug-aus-einer-videodatei",level:2}],c={toc:d};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse und/oder eine Testklasse."),(0,a.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/212251022-87846032-031a-462f-abf7-8ac35d97352e.png",alt:"image"})),(0,a.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,a.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden")),(0,a.kt)("h2",{id:"hinweise-zur-klasse-videocollection"},"Hinweise zur Klasse VideoCollection"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void addVideo(video: Video)")," soll der Videoliste (",(0,a.kt)("inlineCode",{parentName:"li"},"videos"),") das eingehende Video hinzuf\xfcgen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void importVideos(file: File)")," soll der Videoliste (",(0,a.kt)("inlineCode",{parentName:"li"},"videos"),") die Videos der eingehenden Datei hinzuf\xfcgen. Die Ausnahme ",(0,a.kt)("inlineCode",{parentName:"li"},"FileNotFoundException")," soll dabei weitergeleitet werden"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"Video getVideoByTitle(title: String)")," soll das Video zum eingehenden Titel zur\xfcckgeben. F\xfcr den Fall, dass kein Video gefunden wird, soll der Wert ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"\nzur\xfcckgegeben werden")),(0,a.kt)("h2",{id:"beispielhafter-auszug-aus-einer-videodatei"},"Beispielhafter Auszug aus einer Videodatei"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The Matrix;SCIFI;1999;VHS;false\nEvil Dead;HORROR;1981;BLURAY;25\n")))}m.isMDXComponent=!0}}]);