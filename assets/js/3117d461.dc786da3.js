"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8193],{5162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(7294),l=t(6010);const r="tabItem_Ymn6";function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>E});var n=t(7462),l=t(7294),r=t(6010),s=t(2466),i=t(6775),u=t(1980),o=t(7392),c=t(12);function d(e){return function(e){var a;return(null==(a=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:a.filter(Boolean))??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function p(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u._X)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=p(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[u,o]=h({queryString:t,groupId:n}),[d,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,c.Nk)(t);return[n,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),b=(()=>{const e=u??d;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),f(e)}),[o,f,r]),tabValues:r}}var b=t(2389);const g="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:a,block:t,selectedValue:i,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const a=e.currentTarget,t=c.indexOf(a),n=o[t].value;n!==i&&(d(a),u(n))},m=e=>{var a;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}null==(a=t)||a.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a)},o.map((e=>{let{value:a,label:t,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,r.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":i===a})}),t??a)})))}function k(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function w(e){const a=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g)},l.createElement(y,(0,n.Z)({},e,a)),l.createElement(k,(0,n.Z)({},e,a)))}function E(e){const a=(0,b.Z)();return l.createElement(w,(0,n.Z)({key:String(a)},e))}},7833:(e,a,t)=>{t.d(a,{Z:()=>u});var n=t(7294),l=t(4866),r=t(5162),s=t(9960),i=t(814);function u(e){let{pullRequest:a,branchSuffix:t}=e;return n.createElement(l.Z,null,n.createElement(r.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(i.Z,{language:"console"},`git switch exercises/${t}`),n.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(r.Z,{value:"solution",label:"Solution"},n.createElement(i.Z,{language:"console"},`git switch solutions/${t}`),n.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(r.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",n.createElement(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},620:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=t(7462),l=(t(7294),t(3905)),r=t(7833);const s={title:"Polymorphy04",description:""},i=void 0,u={unversionedId:"exercises/polymorphy/polymorphy04",id:"exercises/polymorphy/polymorphy04",title:"Polymorphy04",description:"",source:"@site/docs/exercises/polymorphy/polymorphy04.md",sourceDirName:"exercises/polymorphy",slug:"/exercises/polymorphy/polymorphy04",permalink:"/java-docs/exercises/polymorphy/polymorphy04",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/polymorphy/polymorphy04.md",tags:[],version:"current",frontMatter:{title:"Polymorphy04",description:""},sidebar:"exercisesSidebar",previous:{title:"Polymorphy03",permalink:"/java-docs/exercises/polymorphy/polymorphy03"},next:{title:"Abstrakte und finale Klassen und Methoden",permalink:"/java-docs/exercises/abstract-and-final/"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse HighValueDice",id:"hinweis-zur-klasse-highvaluedice",level:2},{value:"Hinweis zur Klasse LowValueDice",id:"hinweis-zur-klasse-lowvaluedice",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c};function p(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,l.kt)("inlineCode",{parentName:"li"},"Dice")," aus \xdcbungsaufgabe\n",(0,l.kt)("a",{parentName:"li",href:"/java-docs/exercises/uml/class-diagrams02"},"ClassDiagrams02")," anhand des abgebildeten\nKlassendiagramms an und erstelle die Klassen ",(0,l.kt)("inlineCode",{parentName:"li"},"HighValueDice")," und\n",(0,l.kt)("inlineCode",{parentName:"li"},"LowValueDice")),(0,l.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,l.kt)("inlineCode",{parentName:"li"},"Player")," aus \xdcbungsaufgabe\n",(0,l.kt)("a",{parentName:"li",href:"/java-docs/exercises/uml/class-diagrams02"},"ClassDiagrams02")," anhand des abgebildeten\nKlassendiagramms an"),(0,l.kt)("li",{parentName:"ul"},"Passe die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean move(player: Player)")," der Klasse ",(0,l.kt)("inlineCode",{parentName:"li"},"DiceGame")," aus\n\xdcbungsaufgabe ",(0,l.kt)("a",{parentName:"li",href:"/java-docs/exercises/uml/class-diagrams02"},"ClassDiagrams02")," so an, dass\njeder Spieler w\xe4hrend des Spiels einmal die M\xf6glichkeit hat, entweder nur\nmit 4-5-6-W\xfcrfeln oder 1-2-3-W\xfcrfeln zu w\xfcrfeln")),(0,l.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209156833-abc8b6ab-d9a2-4f45-96a8-b2df8fdf9c3a.png",alt:"image"})),(0,l.kt)("h2",{id:"hinweis-zur-klasse-highvaluedice"},"Hinweis zur Klasse HighValueDice"),(0,l.kt)("p",null,"Die Methode ",(0,l.kt)("inlineCode",{parentName:"p"},"void rollTheDice()"),' soll nur 4er, 5er und 6er "w\xfcrfeln".'),(0,l.kt)("h2",{id:"hinweis-zur-klasse-lowvaluedice"},"Hinweis zur Klasse LowValueDice"),(0,l.kt)("p",null,"Die Methode ",(0,l.kt)("inlineCode",{parentName:"p"},"void rollTheDice()"),' soll nur 1er, 2er und 3er "w\xfcrfeln".'),(0,l.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"Hans hat aktuell 0 Punkte\nHans, m\xf6chtest Du einmalig Spezialw\xfcrfel verwenden (true, false)?: true\nHans, welche Spezialw\xfcrfel m\xf6chtest Du verwenden (1=4-5-6-W\xfcrfel, 2=1-2-3-W\xfcrfel)?: 1\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nHans hat 12 Punkte\nHans hat insgesamt 12 Punkte\n\u2026\nLisa hat aktuell 46 Punkte\nLisa, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nLisa hat 12 Punkte\nLisa hat insgesamt 58 Punkte\nLisa hat verloren\nDer Sieger hei\xdft Hans und hat 49 Punkte\n")),(0,l.kt)(r.Z,{pullRequest:"44",branchSuffix:"polymorphy/04",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);