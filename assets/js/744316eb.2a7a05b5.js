"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8485],{5162:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),r=a(6010);const s={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,u),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(7462),r=a(7294),s=a(6010),u=a(2466),l=a(6775),i=a(1980),o=a(7392),c=a(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function b(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=b(e),[u,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,o]=m({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),h=(()=>{const e=i??d;return p({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),f(e)}),[o,f,s]),tabValues:s}}var h=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),b=e=>{const t=e.currentTarget,a=c.indexOf(t),n=o[a].value;n!==l&&(d(t),i(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:u}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:b},u,{className:(0,s.Z)("tabs__item",g.tabItem,null==u?void 0:u.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return r.createElement(E,(0,n.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(4866),s=a(5162),u=a(9960),l=a(614);function i(e){let{pullRequest:t,branchSuffix:a}=e;return n.createElement(r.Z,null,n.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(l.Z,{language:"console"},`git switch exercises/${a}`),n.createElement(u.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(s.Z,{value:"solution",label:"Solution"},n.createElement(l.Z,{language:"console"},`git switch solutions/${a}`),n.createElement(u.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",n.createElement(u.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},8404:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),s=a(7833);const u={title:"Arrays05",description:""},l=void 0,i={unversionedId:"exercises/arrays/arrays05",id:"exercises/arrays/arrays05",title:"Arrays05",description:"",source:"@site/docs/exercises/arrays/arrays05.md",sourceDirName:"exercises/arrays",slug:"/exercises/arrays/arrays05",permalink:"/java-docs/exercises/arrays/arrays05",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays05.md",tags:[],version:"current",frontMatter:{title:"Arrays05",description:""},sidebar:"exercisesSidebar",previous:{title:"Arrays04",permalink:"/java-docs/exercises/arrays/arrays04"},next:{title:"Arrays06",permalink:"/java-docs/exercises/arrays/arrays06"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c},b="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche es erm\xf6glicht, Aufgaben hinzuzuf\xfcgen,\nzu l\xf6schen und auf der Konsole auszugeben."),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Optionen\n1: Aufgabe hinzuf\xfcgen\n2: Aufgabe l\xf6schen\n3: Aufgaben ausgeben\n4: Beenden\n\nWas m\xf6chtest Du tun?: 1\nGib bitte die Aufgabenbeschreibung ein: W\xe4sche waschen\nWas m\xf6chtest Du tun?: 1\nGib bitte die Aufgabenbeschreibung ein: Hausaufgaben machen\nWas m\xf6chtest Du tun?: 3\n\nAufgaben\n0: W\xe4sche waschen\n1: Hausaufgaben machen\n\nWas m\xf6chtest Du tun?: 2\nGib bitte ein, welche Aufgabe gel\xf6scht werden soll: 0\nWas m\xf6chtest Du tun?: 3\n\nAufgaben\n0: Hausaufgaben machen\n\nWas m\xf6chtest Du tun?: 4\n")),(0,r.kt)(s.Z,{pullRequest:"22",branchSuffix:"arrays/05",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);