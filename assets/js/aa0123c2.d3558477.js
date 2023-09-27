"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6791],{5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(4334);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>E});var a=t(7462),r=t(7294),l=t(4334),i=t(2466),s=t(6775),u=t(1980),o=t(7392),c=t(12);function d(e){return function(e){var n;return(null==(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=m(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,o]=b({queryString:t,groupId:a}),[d,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),h=(()=>{const e=u??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),g(e)}),[o,g,l]),tabValues:l}}var h=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:s,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),a=o[t].value;a!==s&&(d(n),u(a))},p=e=>{var n;let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},o.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:p,onClick:m},i,{className:(0,l.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function C(e){const n=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function E(e){const n=(0,h.Z)();return r.createElement(C,(0,a.Z)({key:String(n)},e))}},7833:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(7294),r=t(4866),l=t(5162),i=t(9960),s=t(614);function u(e){let{pullRequest:n,branchSuffix:t}=e;return a.createElement(r.Z,null,a.createElement(l.Z,{value:"exercise",label:"Exercise",default:!0},a.createElement(s.Z,{language:"console"},`git switch exercises/${t}`),a.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(l.Z,{value:"solution",label:"Solution"},a.createElement(s.Z,{language:"console"},`git switch solutions/${t}`),a.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(l.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",a.createElement(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`},"PR#",n)))}},4901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),l=t(7833);const i={title:"Generics04",description:""},s=void 0,u={unversionedId:"exercises/generics/generics04",id:"exercises/generics/generics04",title:"Generics04",description:"",source:"@site/docs/exercises/generics/generics04.md",sourceDirName:"exercises/generics",slug:"/exercises/generics/generics04",permalink:"/java-docs/exercises/generics/generics04",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics04.md",tags:[],version:"current",frontMatter:{title:"Generics04",description:""},sidebar:"exercisesSidebar",previous:{title:"Generics03",permalink:"/java-docs/exercises/generics/generics03"},next:{title:"Assoziativspeicher (Maps)",permalink:"/java-docs/exercises/maps/"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse Tournament",id:"hinweise-zur-klasse-tournament",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erstelle die Klassen ",(0,r.kt)("inlineCode",{parentName:"li"},"Club")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"Tournament")," anhand des abgebildeten Klassendiagramms"),(0,r.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche ein Turnier mit mehreren Vereinen erzeugt und die Paarungen ausgibt")),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("mermaid",{value:"classDiagram\n    Tournament o-- Club\n    Tournament o-- Pair~T~\n\n    class Pair~T~ {\n        <<record>>\n        -partA T\n        -partB T\n    }\n\n    class Tournament {\n        <<record>>\n        -title String\n        -clubs List~Club~\n        -pairs List~Pair~Club~~\n        +addClub(club Club) void\n        +pairs() List~Pair~Club~~\n    }\n\n    class Club {\n        <<record>>\n        -name String\n        -marketValueInMillions int\n    }"}),(0,r.kt)("h2",{id:"hinweise-zur-klasse-tournament"},"Hinweise zur Klasse Tournament"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void addClub(club: Club)")," soll dem Turnier den eingehenden Verein hinzuf\xfcgen"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"List<Pair<Club>> pairs()")," soll aus den Vereinen des Turniers Paarungen f\xfcr Hin- und R\xfcckspiele bilden und zur\xfcckgeben")),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Pair[partA=Club[name=SC Freiburg, marketValueInMillions=165], partB=Club[name=Bayern Muenchen, marketValueInMillions=926]]\nPair[partA=Club[name=SC Freiburg, marketValueInMillions=165], partB=Club[name=Borussia Dortmund, marketValueInMillions=462]]\nPair[partA=Club[name=Bayern Muenchen, marketValueInMillions=926], partB=Club[name=SC Freiburg, marketValueInMillions=165]]\nPair[partA=Club[name=Bayern Muenchen, marketValueInMillions=926], partB=Club[name=Borussia Dortmund, marketValueInMillions=462]]\nPair[partA=Club[name=Borussia Dortmund, marketValueInMillions=462], partB=Club[name=SC Freiburg, marketValueInMillions=165]]\nPair[partA=Club[name=Borussia Dortmund, marketValueInMillions=462], partB=Club[name=Bayern Muenchen, marketValueInMillions=926]]\n")),(0,r.kt)(l.Z,{pullRequest:"65",branchSuffix:"generics/04",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);