"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5142],{18706:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(85893),o=n(11151);const a={title:"Videosammlung",description:"",tags:["inheritance","polymorphy","exceptions","records","optionals","io-streams"]},r=void 0,l={id:"exam-exercises/exam-exercises-java2/video-collection",title:"Videosammlung",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/video-collection.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/video-collection",permalink:"/java-docs/pr-preview/pr-83/exam-exercises/exam-exercises-java2/video-collection",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/video-collection.md",tags:[{label:"inheritance",permalink:"/java-docs/pr-preview/pr-83/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-83/tags/polymorphy"},{label:"exceptions",permalink:"/java-docs/pr-preview/pr-83/tags/exceptions"},{label:"records",permalink:"/java-docs/pr-preview/pr-83/tags/records"},{label:"optionals",permalink:"/java-docs/pr-preview/pr-83/tags/optionals"},{label:"io-streams",permalink:"/java-docs/pr-preview/pr-83/tags/io-streams"}],version:"current",frontMatter:{title:"Videosammlung",description:"",tags:["inheritance","polymorphy","exceptions","records","optionals","io-streams"]},sidebar:"examExercisesSidebar",previous:{title:"Team",permalink:"/java-docs/pr-preview/pr-83/exam-exercises/exam-exercises-java2/team"}},t={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>VideoCollection</em>",id:"hinweise-zur-klasse-videocollection",level:2},{value:"Beispielhafter Aufbau der Videodatei",id:"beispielhafter-aufbau-der-videodatei",level:2}];function c(e){const i={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,s.jsx)(i.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(i.mermaid,{value:"classDiagram\n    VideoCollection o-- Video\n    Video <|-- BluRay\n    Video <|-- VHS\n    Video o-- Movie\n    Movie o-- Genre\n\n    class VideoCollection {\n        <<record>>\n        videos: List~Video~\n        +addVideo(video: Video) void\n        +importVideos(file: File) void\n        +getVideoByMovieTitle(title: String) Optional~Video~\n    }\n\n    class Video {\n        <<abstract>>\n        -movie: Movie &#123final&#125\n        +Video(movie: Movie)\n    }\n\n    class VHS {\n        -isRewritable: boolean &#123final&#125\n        +VHS(movie: Movie, isRewritable: boolean)\n    }\n\n    class BluRay {\n        -capacityInGb: double &#123final&#125\n        +BluRay(movie: Movie, capacityInGb: double)\n    }\n\n    class Movie {\n        <<record>>\n        title: String\n        genre: Genre\n        publishingYear: short\n    }\n\n    class Genre {\n        <<enumeration>>\n        SCIFI = Science Fiction\n        HORROR = Horror\n        ACTION = Action\n        COMEDY = Kom\xf6die\n        -description: String &#123final&#125\n    }"}),"\n",(0,s.jsx)(i.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(i.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"hinweise-zur-klasse-videocollection",children:["Hinweise zur Klasse ",(0,s.jsx)(i.em,{children:"VideoCollection"})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Die Methode ",(0,s.jsx)(i.code,{children:"void addVideo(video: Video)"})," soll der Videoliste (",(0,s.jsx)(i.code,{children:"videos"}),") das\neingehende Video hinzuf\xfcgen"]}),"\n",(0,s.jsxs)(i.li,{children:["Die Methode ",(0,s.jsx)(i.code,{children:"void importVideos(file: File)"})," soll der Videoliste (",(0,s.jsx)(i.code,{children:"videos"}),") die\nVideos der eingehenden Datei hinzuf\xfcgen. Die Ausnahme ",(0,s.jsx)(i.code,{children:"FileNotFoundException"}),"\nsoll dabei weitergeleitet werden"]}),"\n",(0,s.jsxs)(i.li,{children:["Die Methode ",(0,s.jsx)(i.code,{children:"Optional<Video> getVideoByTitle(title: String)"})," soll das Video\nzum eingehenden Titel als Optional zur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"beispielhafter-aufbau-der-videodatei",children:"Beispielhafter Aufbau der Videodatei"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"The Matrix;SCIFI;1999;VHS;false\nEvil Dead;HORROR;1981;BLURAY;25\n"})})]})}function m(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>r});var s=n(67294);const o={},a=s.createContext(o);function r(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);