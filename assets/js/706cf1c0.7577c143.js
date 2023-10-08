"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=i,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||r;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Git in Eclipse verwenden",description:"",sidebar_position:30},l=void 0,o={unversionedId:"additional-material/instructions/use-git",id:"additional-material/instructions/use-git",title:"Git in Eclipse verwenden",description:"",source:"@site/docs/additional-material/instructions/use-git.md",sourceDirName:"additional-material/instructions",slug:"/additional-material/instructions/use-git",permalink:"/java-docs/additional-material/instructions/use-git",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/instructions/use-git.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Git in Eclipse verwenden",description:"",sidebar_position:30},sidebar:"additionalMaterialSidebar",previous:{title:"Eclipse einrichten",permalink:"/java-docs/additional-material/instructions/setup-eclipse"},next:{title:"Daniel (Programmierung 1)",permalink:"/java-docs/additional-material/daniel-java1/"}},s={},p=[{value:"GitHub-Repository klonen und in Eclipse importieren",id:"github-repository-klonen-und-in-eclipse-importieren",level:2},{value:"Java-Projekt zu einem GitHub-Repository hinzuf\xfcgen",id:"java-projekt-zu-einem-github-repository-hinzuf\xfcgen",level:2},{value:"Git-Staging-View anzeigen lassen",id:"git-staging-view-anzeigen-lassen",level:2},{value:"\xc4nderungen eines lokalen Git-Repositories hochladen (Pushen)",id:"\xe4nderungen-eines-lokalen-git-repositories-hochladen-pushen",level:2},{value:"Lokales Git-Repository aktualisieren (Pullen)",id:"lokales-git-repository-aktualisieren-pullen",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"github-repository-klonen-und-in-eclipse-importieren"},"GitHub-Repository klonen und in Eclipse importieren"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In der Git-Perspektive Drucktaste ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Clone a Git repository"))," bet\xe4tigen"),(0,i.kt)("li",{parentName:"ul"},"URI eingeben (z.B. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/appenmaier/dhbw-java"},"https://github.com/appenmaier/dhbw-java"),") und Drucktaste\n",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Next >"))," bet\xe4tigen"),(0,i.kt)("li",{parentName:"ul"},"Drucktaste ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Next >"))," bet\xe4tigen"),(0,i.kt)("li",{parentName:"ul"},"Drucktaste ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Finish"))," bet\xe4tigen"),(0,i.kt)("li",{parentName:"ul"},"Importiertes Git-Repository aufklappen"),(0,i.kt)("li",{parentName:"ul"},"Im ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Working Tree"))," Rechtsklick auf den gew\xfcnschten Ordner ausf\xfchren"),(0,i.kt)("li",{parentName:"ul"},"Option ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Import Projects..."))," ausw\xe4hlen"),(0,i.kt)("li",{parentName:"ul"},"Drucktaste ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Finish"))," bet\xe4tigen")),(0,i.kt)("h2",{id:"java-projekt-zu-einem-github-repository-hinzuf\xfcgen"},"Java-Projekt zu einem GitHub-Repository hinzuf\xfcgen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In der Java-Perspektive Rechtsklick auf gew\xfcnschtes Java-Projekt ausf\xfchren"),(0,i.kt)("li",{parentName:"ul"},"Option ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Team \u2013 Share Project"))," ausw\xe4hlen"),(0,i.kt)("li",{parentName:"ul"},"Option ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Git"))," ausw\xe4hlen und Drucktaste ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Next >"))," bet\xe4tigen"),(0,i.kt)("li",{parentName:"ul"},"Gew\xfcnschtes Git-Repository ausw\xe4hlen und Drucktaste ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Finish"))," bet\xe4tigen")),(0,i.kt)("h2",{id:"git-staging-view-anzeigen-lassen"},"Git-Staging-View anzeigen lassen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Option ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Window \u2013 Show View \u2013 Other..."))," ausw\xe4hlen"),(0,i.kt)("li",{parentName:"ul"},"Option ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Git Staging"))," ausw\xe4hlen"),(0,i.kt)("li",{parentName:"ul"},"Drucktaste ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"OK"))," bet\xe4tigen")),(0,i.kt)("h2",{id:"\xe4nderungen-eines-lokalen-git-repositories-hochladen-pushen"},"\xc4nderungen eines lokalen Git-Repositories hochladen (Pushen)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In der View ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Git Staging"))," alle ge\xe4nderten Objekte markieren und Drucktaste\n",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Add selected files to the index"))," bet\xe4tigen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Commit Message"))," eingeben und Drucktaste ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Commit and push"))," bet\xe4tigen")),(0,i.kt)("h2",{id:"lokales-git-repository-aktualisieren-pullen"},"Lokales Git-Repository aktualisieren (Pullen)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In der Java-Perspektive Rechtsklick auf gew\xfcnschtes Java-Projekt ausf\xfchren"),(0,i.kt)("li",{parentName:"ul"},"Option ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Team \u2013 Pull"))," ausw\xe4hlen")))}c.isMDXComponent=!0}}]);