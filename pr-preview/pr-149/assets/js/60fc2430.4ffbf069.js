"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7044],{10271:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=i(85893),r=i(11151);const a={title:"Pl\xe4tzchendose",description:"",tags:["oo","enumerations","inheritance","polymorphy","io-streams"]},t=void 0,o={id:"exam-exercises/exam-exercises-java1/cookie-jar",title:"Pl\xe4tzchendose",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/cookie-jar.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/cookie-jar",permalink:"/java-docs/pr-preview/pr-149/exam-exercises/exam-exercises-java1/cookie-jar",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/cookie-jar.md",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-149/tags/oo"},{label:"enumerations",permalink:"/java-docs/pr-preview/pr-149/tags/enumerations"},{label:"inheritance",permalink:"/java-docs/pr-preview/pr-149/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/pr-preview/pr-149/tags/polymorphy"},{label:"io-streams",permalink:"/java-docs/pr-preview/pr-149/tags/io-streams"}],version:"current",frontMatter:{title:"Pl\xe4tzchendose",description:"",tags:["oo","enumerations","inheritance","polymorphy","io-streams"]},sidebar:"examExercisesSidebar",previous:{title:"Quellcode",permalink:"/java-docs/pr-preview/pr-149/exam-exercises/exam-exercises-java1/code"},next:{title:"Kreatur",permalink:"/java-docs/pr-preview/pr-149/exam-exercises/exam-exercises-java1/creature"}},l={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Cookie</em>",id:"hinweis-zur-klasse-cookie",level:2},{value:"Hinweis zur Klasse <em>StuffedCookie</em>",id:"hinweis-zur-klasse-stuffedcookie",level:2},{value:"Hinweis zur Klasse <em>Recipe</em>",id:"hinweis-zur-klasse-recipe",level:2},{value:"Hinweise zur Klasse <em>CookieJar</em>",id:"hinweise-zur-klasse-cookiejar",level:2},{value:"Hinweis zur Klasse <em>IngredientsReader</em>",id:"hinweis-zur-klasse-ingredientsreader",level:2},{value:"Beispielhafter Aufbau der Zutatendatei",id:"beispielhafter-aufbau-der-zutatendatei",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    CookieJar o-- Cookie\n    Cookie <|-- StuffedCookie\n    Cookie o-- Recipe\n    StuffedCookie o-- Recipe\n    Recipe o-- Ingredient\n\n    class CookieJar {\n        -cookies: List~Cookie~ &#123final&#125\n        +CookieJar()\n        +addCookie(cookie: Cookie) void\n        +getStuffedCookie() StuffedCookie\n        +getCookieByName(name: String) Cookie\n    }\n\n    class Cookie {\n        -name: String &#123final&#125\n        -dough: Recipe &#123final&#125\n        +Cookie(name: String, dough: Recipe)\n        +getIngredients() List~Ingredient~\n    }\n\n    class StuffedCookie {\n        -jam: Recipe &#123final&#125\n        +StuffedCookie(name: String, dough: Recipe, jam: Recipe)\n        +getIngredients() List~Ingredient~\n    }\n\n    class Recipe {\n        -name: String &#123final&#125\n        -ingredients: List~Ingredient~ &#123final&#125\n        +Recipe(name: String)\n        +addIngredient(ingredient: Ingredient) void\n    }\n\n    class Ingredient {\n        -name: String &#123final&#125\n        +Ingredient(name: String)\n    }\n\n    class IngredientsReader {\n        +readIngredients(file: File) List~Ingredient~\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n",(0,s.jsx)(n.li,{}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-cookie",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"Cookie"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"List<Ingredient> getIngredients()"})," soll alle Zutaten des Teigs\nzur\xfcckgeben."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-stuffedcookie",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"StuffedCookie"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"List<Ingredient> getIngredients()"})," soll alle Zutaten des Teigs\nsowie der F\xfcllung zur\xfcckgeben."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-recipe",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"Recipe"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addIngredient(ingredient: Ingredient)"})," soll dem Rezept die\neingehende Zutat hinzuf\xfcgen."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-cookiejar",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"CookieJar"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addCookie(cookie: Cookie)"})," soll der Pl\xe4tzchendose das\neingehende Pl\xe4tzchen hinzuf\xfcgen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"StuffedCookie getStuffedCookie()"})," soll ein beliebiges gef\xfclltes\nPl\xe4tzchen der Pl\xe4tzchendose zur\xfcckgeben"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"Cookie getCookieByName(name: String)"})," soll ein Pl\xe4tzchen der\nPl\xe4tzchendose zum eingehenden Namen zur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-ingredientsreader",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"IngredientsReader"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"List<Ingredient> readIngredients()"})," soll alle Zutaten der\neingehenden Datei auslesen und zur\xfcckgeben."]}),"\n",(0,s.jsx)(n.h2,{id:"beispielhafter-aufbau-der-zutatendatei",children:"Beispielhafter Aufbau der Zutatendatei"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"200g Butter\n300g Mehl\n1 Prise Salz\n100g gemahlene Mandeln\n150g Zucker\n1 Pck. Vanillezucker\n2 Eier\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>t});var s=i(67294);const r={},a=s.createContext(r);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);