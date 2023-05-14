"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6029],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),l=a(6010);const n="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(7462),l=a(7294),n=a(6010),s=a(2466),o=a(6775),i=a(1980),u=a(7392),c=a(12);function p(e){return function(e){var t;return(null==(t=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:l}}=e;return{value:t,label:a,attributes:r,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(n),(0,l.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=d(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[i,u]=h({queryString:a,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,c.Nk)(a);return[r,(0,l.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),b=(()=>{const e=i??p;return m({value:e,tabValues:n})?e:null})();(0,l.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,n]),tabValues:n}}var b=a(2389);const f="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==o&&(p(t),i(r))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,n.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":o===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function E(e){const t=g(e);return l.createElement("div",{className:(0,n.Z)("tabs-container",f)},l.createElement(y,(0,r.Z)({},e,t)),l.createElement(k,(0,r.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return l.createElement(E,(0,r.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),l=a(4866),n=a(5162),s=a(9960),o=a(814);function i(e){let{pullRequest:t,branchSuffix:a}=e;return r.createElement(l.Z,null,r.createElement(n.Z,{value:"exercise",label:"Exercise",default:!0},r.createElement(o.Z,{language:"console"},`git switch exercises/${a}`),r.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(n.Z,{value:"solution",label:"Solution"},r.createElement(o.Z,{language:"console"},`git switch solutions/${a}`),r.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(n.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",r.createElement(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},6236:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=a(7462),l=(a(7294),a(3905)),n=a(7833);const s={title:"Polymorphy02",description:""},o=void 0,i={unversionedId:"exercises/polymorphy/polymorphy02",id:"exercises/polymorphy/polymorphy02",title:"Polymorphy02",description:"",source:"@site/docs/exercises/polymorphy/polymorphy02.md",sourceDirName:"exercises/polymorphy",slug:"/exercises/polymorphy/polymorphy02",permalink:"/java-docs/exercises/polymorphy/polymorphy02",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/polymorphy/polymorphy02.md",tags:[],version:"current",frontMatter:{title:"Polymorphy02",description:""},sidebar:"exercisesSidebar",previous:{title:"Polymorphy01",permalink:"/java-docs/exercises/polymorphy/polymorphy01"},next:{title:"Polymorphy03",permalink:"/java-docs/exercises/polymorphy/polymorphy03"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse Rental",id:"hinweise-zur-klasse-rental",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Erstelle die Klasse ",(0,l.kt)("inlineCode",{parentName:"li"},"Rental")," anhand des abgebildeten Klassendiagramms"),(0,l.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,l.kt)("a",{parentName:"li",href:"/java-docs/exercises/polymorphy/polymorphy01"},"Polymorphy01")," so an, dass alle erzeugten Autos und\nLastwagen in einer Fahrzeugvermietung abgelegt und alle Attribute der\nFahrzeugvermietung ausgegeben werden")),(0,l.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209156612-65f7d9a9-e5fd-415d-80b6-f7501e4bf1a4.png",alt:"image"})),(0,l.kt)("h2",{id:"hinweise-zur-klasse-rental"},"Hinweise zur Klasse Rental"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"void addVehicle(vehicle: Vehicle)")," soll der Fahrzeugvermietung ein\nFahrzeug hinzuf\xfcgen"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"void addAllVehicles(vehicles: Vehicle...)")," soll der Fahrzeugvermietung\nmehrere Fahrzeug hinzuf\xfcgen"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"void print()")," soll alle Attribute auf der Konsole ausgeben")),(0,l.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"Fahrzeugvermietung M\xfcller\nUnsere Fahrzeuge:\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\n")),(0,l.kt)(n.Z,{pullRequest:"42",branchSuffix:"polymorphy/02",mdxType:"Exercise"}))}d.isMDXComponent=!0}}]);