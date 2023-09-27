"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7705],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(4334);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>E});var r=a(7462),n=a(7294),o=a(4334),i=a(2466),l=a(6775),s=a(1980),u=a(7392),c=a(12);function d(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:a,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var g=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==l&&(d(t),s(r))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function E(e){const t=(0,g.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(4866),o=a(5162),i=a(9960),l=a(614);function s(e){let{pullRequest:t,branchSuffix:a}=e;return r.createElement(n.Z,null,r.createElement(o.Z,{value:"exercise",label:"Exercise",default:!0},r.createElement(l.Z,{language:"console"},`git switch exercises/${a}`),r.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(o.Z,{value:"solution",label:"Solution"},r.createElement(l.Z,{language:"console"},`git switch solutions/${a}`),r.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(o.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",r.createElement(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},9081:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),o=a(7833);const i={title:"Comparators01",description:""},l=void 0,s={unversionedId:"exercises/comparators/comparators01",id:"exercises/comparators/comparators01",title:"Comparators01",description:"",source:"@site/docs/exercises/comparators/comparators01.md",sourceDirName:"exercises/comparators",slug:"/exercises/comparators/comparators01",permalink:"/java-docs/exercises/comparators/comparators01",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/comparators/comparators01.md",tags:[],version:"current",frontMatter:{title:"Comparators01",description:""},sidebar:"exercisesSidebar",previous:{title:"Komparatoren",permalink:"/java-docs/exercises/comparators/"},next:{title:"Comparators02",permalink:"/java-docs/exercises/comparators/comparators02"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse Coordinate",id:"hinweise-zur-klasse-coordinate",level:2},{value:"Hinweis",id:"hinweis",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Erstelle die Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"Coordinate")," anhand des abgebildeten Klassendiagramms"),(0,n.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche eine Koordinatenliste mit mehreren\nKoordinaten erzeugt, diese sortiert und anschlie\xdfend auf der Konsole ausgibt")),(0,n.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,n.kt)("mermaid",{value:"classDiagram\n    Comparable~T~ <|.. Coordinate\n\n    class Coordinate {\n        -x int\n        -y int\n        +Coordinate(x int, y int)\n        +getX() int\n        +getY() int\n        +getDistanceToOriginPoint() double\n        +compareTo(other Coordinate) int\n    }\n\n    class Comparable~T~ {\n        +compareTo(t T) int\n    }"}),(0,n.kt)("h2",{id:"hinweise-zur-klasse-coordinate"},"Hinweise zur Klasse Coordinate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Die Methode ",(0,n.kt)("inlineCode",{parentName:"li"},"double getDistanceToOriginPoint()")," soll die Distanz der\nKoordinate zum Nullpunkt zur\xfcckgeben"),(0,n.kt)("li",{parentName:"ul"},"Die Methode ",(0,n.kt)("inlineCode",{parentName:"li"},"int compareTo(other: Coordinate)")," soll die Koordinate mit der\neingehenden Koordinate anhand ihrer jeweiligen Distanz zum Nullpunkt\nvergleichen. Ist die Distanz der Koordinate zum Nullpunkt kleiner als bzw.\ngr\xf6\xdfer als bzw. gleich die der eingehenden\nKoordinate, soll der Wert 1 bzw. -1 bzw. 0 zur\xfcckgegeben werden")),(0,n.kt)("h2",{id:"hinweis"},"Hinweis"),(0,n.kt)("p",null,"Die statische Methode ",(0,n.kt)("inlineCode",{parentName:"p"},"double hypot(x: double, y: double)")," der Klasse ",(0,n.kt)("inlineCode",{parentName:"p"},"Math"),"\nberechnet die Hypotenuse zum eingehenden X- und Y-Wert."),(0,n.kt)(o.Z,{pullRequest:"47",branchSuffix:"comparators/01",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);