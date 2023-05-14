"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6272],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(7462),n=a(7294),s=a(6010),l=a(2466),i=a(6775),u=a(1980),c=a(7392),o=a(12);function d(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,c]=g({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,o.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=u??d;return m({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,s]),tabValues:s}}var b=a(2389);const h="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=o.indexOf(t),r=c[a].value;r!==i&&(d(t),u(r))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;a=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;a=o[t]??o[o.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>o.push(e),onKeyDown:m,onClick:p},l,{className:(0,s.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function E(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=f(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",h)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(E,(0,r.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return n.createElement(x,(0,r.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7294),n=a(4866),s=a(5162),l=a(9960),i=a(814);function u(e){let{pullRequest:t,branchSuffix:a}=e;return r.createElement(n.Z,null,r.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},r.createElement(i.Z,{language:"console"},`git switch exercises/${a}`),r.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(s.Z,{value:"solution",label:"Solution"},r.createElement(i.Z,{language:"console"},`git switch solutions/${a}`),r.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",r.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},7692:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var r=a(7462),n=(a(7294),a(3905)),s=a(7833);const l={title:"Generics02",description:""},i=void 0,u={unversionedId:"exercises/generics/generics02",id:"exercises/generics/generics02",title:"Generics02",description:"",source:"@site/docs/exercises/generics/generics02.md",sourceDirName:"exercises/generics",slug:"/exercises/generics/generics02",permalink:"/java-docs/exercises/generics/generics02",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics02.md",tags:[],version:"current",frontMatter:{title:"Generics02",description:""},sidebar:"exercisesSidebar",previous:{title:"Generics01",permalink:"/java-docs/exercises/generics/generics01"},next:{title:"Assoziativspeicher (Maps)",permalink:"/java-docs/exercises/maps/"}},c={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}],d={toc:o};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"Crate")," aus \xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"generics01"},"Generics01")," anhand\ndes abgebildeten Klassendiagramms an"),(0,n.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"generics01"},"Generics01")," so\nan, dass sie fehlerfrei ausgef\xfchrt werden kann")),(0,n.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209158225-ed892113-94df-45ce-bb96-c6783f774004.png",alt:"image"})),(0,n.kt)(s.Z,{pullRequest:"53",branchSuffix:"generics/02",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);