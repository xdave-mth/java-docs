"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7200],{99297:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=i(85893),s=i(11151);const a={title:"Bibliothek",description:"",tags:["inheritance","polymorphy","exceptions","records","maps","optionals"]},t=void 0,o={id:"exam-exercises/exam-exercises-java2/library",title:"Bibliothek",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/library.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/library",permalink:"/java-docs/pr-preview/pr-135/exam-exercises/exam-exercises-java2/library",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/library.md",tags:[{label:"inheritance",permalink:"/java-docs/pr-preview/pr-135/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-135/tags/polymorphy"},{label:"exceptions",permalink:"/java-docs/pr-preview/pr-135/tags/exceptions"},{label:"records",permalink:"/java-docs/pr-preview/pr-135/tags/records"},{label:"maps",permalink:"/java-docs/pr-preview/pr-135/tags/maps"},{label:"optionals",permalink:"/java-docs/pr-preview/pr-135/tags/optionals"}],version:"current",frontMatter:{title:"Bibliothek",description:"",tags:["inheritance","polymorphy","exceptions","records","maps","optionals"]},sidebar:"examExercisesSidebar",previous:{title:"Lego-Baustein",permalink:"/java-docs/pr-preview/pr-135/exam-exercises/exam-exercises-java2/lego-brick"},next:{title:"Messdaten",permalink:"/java-docs/pr-preview/pr-135/exam-exercises/exam-exercises-java2/measurement-data"}},l={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>EBook</em>",id:"hinweis-zur-klasse-ebook",level:2},{value:"Hinweise zur Klasse <em>Library</em>",id:"hinweise-zur-klasse-library",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Library o-- Book\n    Library o-- Status\n    Book <|-- EBook\n    Book <|-- PaperBook\n    Book o-- Author\n    EBook o-- FileFormat\n\n    class Library {\n        <<record>>\n        name: String &#123final&#125\n        books: Map~Book, Status~ &#123final&#125\n        +addBook(book: Book) void\n        +getBookByTitle(title: String) Optional~Book~\n        +getPaperBooksByStatus(status: Status) List~PaperBook~\n    }\n\n    class Status {\n        <<enumeration>>\n        AVAILABLE = verf\xfcgbar\n        LENT = verliehen\n        -description: String &#123final&#125\n    }\n\n    class Book {\n        <<abstract>>\n        -id: UUID &#123final&#125\n        -author: Author &#123final&#125\n        -title: String &#123final&#125\n        +Book(author: Author, title: String)\n    }\n\n    class EBook {\n        -fileFormat: FileFormat &#123final&#125\n        -fileSizeInKb: int &#123final&#125\n        +EBook(author: Author, title: String, fileFormat: FileFormat, fileSizeInKb: int)\n    }\n\n    class PaperBook {\n        -pages: int &#123final&#125\n        +PaperBook(author: Author, title: String, pages: int)\n    }\n\n    class Author {\n        <<record>>\n        name: String\n        nationality: String\n    }\n\n    class FileFormat {\n        <<enumeration>>\n        AZW = Amazon Kindle\n        EPUB = Electronic Publication\n        LRF = Portable Reader File\n        -description: String &#123final&#125\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n",(0,r.jsxs)(n.li,{children:["Die statische Methode ",(0,r.jsx)(n.code,{children:"UUID randomUUID()"})," der Klasse ",(0,r.jsx)(n.code,{children:"UUID"})," gibt eine zuf\xe4llig\nerstellte UUID zur\xfcck"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweis-zur-klasse-ebook",children:["Hinweis zur Klasse ",(0,r.jsx)(n.em,{children:"EBook"})]}),"\n",(0,r.jsxs)(n.p,{children:["Der Konstruktor soll alle Attribute initialisieren. F\xfcr den Fall, dass die\neingehende Dateigr\xf6\xdfe kleiner gleich Null ist, soll die Ausnahme\n",(0,r.jsx)(n.code,{children:"WrongFileSizeException"})," ausgel\xf6st werden."]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-library",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"Library"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void addBook(book: Book)"})," soll der B\xfccherliste (",(0,r.jsx)(n.code,{children:"books"}),") das\neingehende Buch mit dem Status ",(0,r.jsx)(n.code,{children:"verf\xfcgbar"})," hinzuf\xfcgen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"Optional<Book> getBookByTitle(title: String)"})," soll das Buch zum\neingehenden Titel als Optional zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"List<PaperBook> getPaperBooksByStatus(status: Status)"})," soll alle\ngedruckten B\xfccher zum eingehenden Status zur\xfcckgeben"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>t});var r=i(67294);const s={},a=r.createContext(s);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);