"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1347],{75676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(85893),l=t(11151),r=t(85521);const s={title:"JavaStreamAPI02",description:""},i=void 0,o={id:"exercises/java-stream-api/java-stream-api02",title:"JavaStreamAPI02",description:"",source:"@site/docs/exercises/java-stream-api/java-stream-api02.mdx",sourceDirName:"exercises/java-stream-api",slug:"/exercises/java-stream-api/java-stream-api02",permalink:"/java-docs/pr-preview/pr-152/exercises/java-stream-api/java-stream-api02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-stream-api/java-stream-api02.mdx",tags:[],version:"current",frontMatter:{title:"JavaStreamAPI02",description:""},sidebar:"exercisesSidebar",previous:{title:"JavaStreamAPI01",permalink:"/java-docs/pr-preview/pr-152/exercises/java-stream-api/java-stream-api01"},next:{title:"Komponententests (Unit-Tests)",permalink:"/java-docs/pr-preview/pr-152/exercises/unit-tests/"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>FootballerQueries</em>",id:"hinweise-zur-klasse-footballerqueries",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,a.jsx)(n.code,{children:"FootballClub"}),", ",(0,a.jsx)(n.code,{children:"Position"}),", ",(0,a.jsx)(n.code,{children:"Footballer"})," und\n",(0,a.jsx)(n.code,{children:"FootballerQueries"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,a.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche alle erstellten Abfragen ausf\xfchrt und\ndie Ergebnisse auf der Konsole ausgibt"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n    Footballer o-- Position\n    Footballer o-- FootballClub\n    FootballerQueries o-- Footballer\n\n    class Position {\n        <<enumeration>>\n        GOALKEEPER\n        DEFENDER\n        MIDFIELDER\n        STRIKER\n    }\n\n    class Footballer {\n        <<record>>\n        name: String\n        position: Position\n        birthdate: LocalDate\n        sizeInCm: int\n        footballClub: FootballClub\n        numberOfGames: int\n        numberOfGoals: int\n    }\n\n    class FootballClub {\n        <<record>>\n        name: String\n        positionInAllTimeTable: int\n        pointsInAllTimeTable: int\n    }\n\n    class FootballerQueries {\n        <<record>>\n        footballers: List~Footballer~\n        +getTotalOfAllGoalsByMidfielders() int\n        +getNameOfVfLWolfsburgFootballerWithMostPlayedGames() Optional~Footballer~\n        +getNamesOfAllFootballClubs() List~FootballClub~\n        +isFootballerWithSizeInCmLT170AndNumberOfGoalsBT0() boolean\n        +getAllFootballersByBirthyear() Map~Integer&sbquo; List~Footballer~~\n        +getAverageNumberOfPointsFromAllBundesligaFootballClubs() OptionalDouble\n    }"}),"\n",(0,a.jsxs)(n.h2,{id:"hinweise-zur-klasse-footballerqueries",children:["Hinweise zur Klasse ",(0,a.jsx)(n.em,{children:"FootballerQueries"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Mannschaften, die nicht der ewigen Tabelle der Bundesliga vertreten sind,\nbesitzen sowohl f\xfcr die Position als auch die Punktzahl den Wert ",(0,a.jsx)(n.code,{children:"-1"})]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"int getTotalOfAllGoalsByMidfielders()"})," soll die Summe aller\ngeschossener Tore von Mittelfeldspielerinnen zur\xfcckgeben"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode\n",(0,a.jsx)(n.code,{children:"Optional<Footballer> getNameOfVfLWolfsburgFootballerWithMostPlayedGames()"}),"\nsoll den Namen der Spielerin vom VfL Wolfsburg mit den meisten Spielen\nzur\xfcckgeben"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"List<FootballClub> getNamesOfAllFootballClubs()"})," soll die Namen\naller Vereine zur\xfcckgeben"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"boolean isFootballerWithSizeInCmLT170AndNumbreOfGoalsBT0()"})," soll\ndie Antwort auf die Frage, ob es eine Spielerin gibt, die kleiner als 170cm\nist und mindestens ein Tor geschossen hat, zur\xfcckgeben"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"Map<Integer, List<Footballer>> getAllFootballersByBirthyear()"}),"\nsoll alle Spielerinnen gruppiert nach ihrem Geburtsjahr zur\xfcckgeben"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode\n",(0,a.jsx)(n.code,{children:"OptionalDouble getAverageNumberOfPointsFromAllBundesligaFootballClubs()"})," soll\ndie durchschnittliche Punktzahl aller Bundesligamannschaften in der Ewigen\nTabelle zur\xfcckgeben"]}),"\n"]}),"\n",(0,a.jsx)(r.Z,{pullRequest:"72",branchSuffix:"stream-api/02"})]})}function b(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(90512);const l={tabItem:"tabItem_Ymn6"};var r=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>F});var a=t(67294),l=t(90512),r=t(12466),s=t(16550),i=t(20469),o=t(91980),u=t(67392),c=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const l=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=b(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=m({queryString:t,groupId:l}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,c.Nk)(t);return[l,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),g=(()=>{const e=u??p;return h({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function j(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),l=i[t].value;l!==a&&(u(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...r,className:(0,l.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function w(e){const n=p(e);return(0,v.jsxs)("div",{className:(0,l.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(x,{...e,...n})]})}function F(e){const n=(0,f.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},85521:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(74866),l=t(85162),r=t(33692),s=t(9286),i=t(85893);function o(e){let{pullRequest:n,branchSuffix:t}=e;return(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(l.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(s.Z,{language:"console",children:`git switch exercises/${t}`}),(0,i.jsx)(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(l.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(s.Z,{language:"console",children:`git switch solutions/${t}`}),(0,i.jsx)(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(l.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(r.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);