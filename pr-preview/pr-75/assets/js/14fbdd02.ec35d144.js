"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6405],{76088:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=i(85893),r=i(11151);const s={title:"Stellenangebot",description:"",tags:["inheritance","polymorphy","exceptions","records","io-streams"]},t=void 0,l={id:"exam-exercises/exam-exercises-java2/job-offer",title:"Stellenangebot",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/job-offer.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/job-offer",permalink:"/java-docs/pr-preview/pr-75/exam-exercises/exam-exercises-java2/job-offer",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/job-offer.md",tags:[{label:"inheritance",permalink:"/java-docs/pr-preview/pr-75/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-75/tags/polymorphy"},{label:"exceptions",permalink:"/java-docs/pr-preview/pr-75/tags/exceptions"},{label:"records",permalink:"/java-docs/pr-preview/pr-75/tags/records"},{label:"io-streams",permalink:"/java-docs/pr-preview/pr-75/tags/io-streams"}],version:"current",frontMatter:{title:"Stellenangebot",description:"",tags:["inheritance","polymorphy","exceptions","records","io-streams"]},sidebar:"examExercisesSidebar",previous:{title:"Personalverwaltung",permalink:"/java-docs/pr-preview/pr-75/exam-exercises/exam-exercises-java2/human-resources"},next:{title:"Lego-Baustein",permalink:"/java-docs/pr-preview/pr-75/exam-exercises/exam-exercises-java2/lego-brick"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse Applicant",id:"hinweis-zur-klasse-applicant",level:2},{value:"Hinweis zur Klasse JobOffer",id:"hinweis-zur-klasse-joboffer",level:2},{value:"Hinweis zur Klasse JobOfferReader",id:"hinweis-zur-klasse-jobofferreader",level:2},{value:"Beispielhafter Aufbau der Stellenangebotsdatei",id:"beispielhafter-aufbau-der-stellenangebotsdatei",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n    Person <|-- Recruiter\n    Person <|-- Applicant\n    JobOffer o-- Recruiter\n    JobOffer o-- Applicant\n    Applicant o-- ApplicationDocument\n\n    class JobOffer {\n        <<record>>\n        -id int\n        -title String\n        -recruiter Recruiter\n        -applicants List~Applicant~\n        +addApplicant(applicant Applicant) void\n    }\n\n    class Person {\n        <<abstract>>\n        -name String\n        -birthdateTimeStamp long\n        +Person(name String, birthdateTimeStamp long)\n    }\n\n    class Applicant {\n        -applicantId int\n        -applicationDocuments List~ApplicationDocument~\n        +Applicant(name String, birthdateTimeStamp long, applicantId int)\n        +addApplicationDocument(applicationDocument ApplicationDocument) void\n    }\n\n    class Recruiter {\n        +Recruiter(name String, birthdateTimeStamp long)\n    }\n\n    class ApplicationDocument {\n        <<record>>\n        -description String\n        -type String\n        -document File\n    }\n\n    class JobOfferReader {\n        +getJobOffers(file File)$ List~JobOffer~\n    }"}),"\n",(0,a.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"hinweis-zur-klasse-applicant",children:"Hinweis zur Klasse Applicant"}),"\n",(0,a.jsxs)(n.p,{children:["Die Methode\n",(0,a.jsx)(n.code,{children:"void addApplicationDocument(applicationDocument: ApplicationDocument)"})," soll den\nBewerbungsunterlagen (",(0,a.jsx)(n.code,{children:"applicationDocuments"}),") das eingehende Dokument\nhinzuf\xfcgen."]}),"\n",(0,a.jsx)(n.h2,{id:"hinweis-zur-klasse-joboffer",children:"Hinweis zur Klasse JobOffer"}),"\n",(0,a.jsxs)(n.p,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void addApplicant(applicant: Applicant)"})," soll der Bewerberliste\n(",(0,a.jsx)(n.code,{children:"applicants"}),") den eingehenden Bewerber hinzuf\xfcgen."]}),"\n",(0,a.jsx)(n.h2,{id:"hinweis-zur-klasse-jobofferreader",children:"Hinweis zur Klasse JobOfferReader"}),"\n",(0,a.jsxs)(n.p,{children:["Die statische Methode ",(0,a.jsx)(n.code,{children:"List<JobOffer> getJobOffers(file: File)"})," soll die\nStellenangebote der eingehenden Datei zur\xfcckgeben. Die Ausnahme\n",(0,a.jsx)(n.code,{children:"FileNotFoundException"})," soll dabei weitergeleitet werden."]}),"\n",(0,a.jsx)(n.h2,{id:"beispielhafter-aufbau-der-stellenangebotsdatei",children:"Beispielhafter Aufbau der Stellenangebotsdatei"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"285;Senior Developer Java\n392;Associate Consultant SAP\n430;Expert Developer Java\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>t});var a=i(67294);const r={},s=a.createContext(r);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);