"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1837],{99734:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=s(85893),a=s(11151);const r={title:"Geschenkesack",description:"",tags:["oo"]},t=void 0,c={id:"exam-exercises/exam-exercises-java1/gift-bag",title:"Geschenkesack",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/gift-bag.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/gift-bag",permalink:"/java-docs/pr-preview/pr-84/exam-exercises/exam-exercises-java1/gift-bag",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/gift-bag.md",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-84/tags/oo"}],version:"current",frontMatter:{title:"Geschenkesack",description:"",tags:["oo"]},sidebar:"examExercisesSidebar",previous:{title:"Fast Food",permalink:"/java-docs/pr-preview/pr-84/exam-exercises/exam-exercises-java1/fast-food"},next:{title:"Tiefgarage",permalink:"/java-docs/pr-preview/pr-84/exam-exercises/exam-exercises-java1/parking-garage"}},l={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>GiftBag</em>",id:"hinweise-zur-klasse-giftbag",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    GiftBag o-- Present\n    Present o-- Person\n\n    class GiftBag {\n        -presents: List~Present~ &#123final&#125\n        +GiftBag()\n        +addPresent(present: Present) void\n        +getMostExpensivePresent() Present\n    }\n\n    class Present {\n        -description: String &#123final&#125\n        -priceInEuro: double &#123final&#125\n        -sender: Person &#123final&#125\n        -recipient: Person &#123final&#125\n        +Present(description: String, priceInEuro: double, sender: Person, recipient: Person)\n    }\n\n    class Person {\n        -name: String &#123final&#125\n        -age: int &#123final&#125\n        -gender: char &#123final&#125\n        +Player(name: String, age: int, gender: char )\n    }"}),"\n",(0,i.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,i.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-giftbag",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"GiftBag"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void addPresent(present: present)"})," soll der Geschenkeliste\n(",(0,i.jsx)(n.code,{children:"presents"}),") das eingehende Geschenk hinzuf\xfcgen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"Present getMostExpensivePresent()"})," soll das teuerste Geschenk\nzur\xfcckgeben"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>t});var i=s(67294);const a={},r=i.createContext(a);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);