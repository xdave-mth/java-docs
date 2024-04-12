"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7908],{90735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=t(74848),r=t(28453),i=t(13979);const l={title:"Exceptions02",description:""},a=void 0,o={id:"exercises/exceptions/exceptions02",title:"Exceptions02",description:"",source:"@site/docs/exercises/exceptions/exceptions02.mdx",sourceDirName:"exercises/exceptions",slug:"/exercises/exceptions/exceptions02",permalink:"/java-docs/exercises/exceptions/exceptions02",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/exceptions/exceptions02.mdx",tags:[],version:"current",frontMatter:{title:"Exceptions02",description:""},sidebar:"exercisesSidebar",previous:{title:"Exceptions01",permalink:"/java-docs/exercises/exceptions/exceptions01"},next:{title:"Exceptions03",permalink:"/java-docs/exercises/exceptions/exceptions03"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>BarrelOverflowException</em>",id:"hinweis-zur-klasse-barreloverflowexception",level:2},{value:"Hinweise zur Klasse <em>Barrel</em>",id:"hinweise-zur-klasse-barrel",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Erstelle die Ausnahmenklasse ",(0,s.jsx)(n.code,{children:"BarrelOverflowException"})," sowie die Klasse\n",(0,s.jsx)(n.code,{children:"Barrel"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,s.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche es dem Anwender erm\xf6glicht, ein Fass\nzu erzeugen und zu bef\xfcllen"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n\n    BarrelOverflowException <.. Barrel : throws\n\n    class Barrel {\n        -capacity: int\n        -fluidLevel: int\n        +Barrel(capacity: int)\n        +getCapacity() int\n        +getFluidLevel() int\n        +addFluid(value: int) void\n        +toString() String\n    }\n\n    class BarrelOverflowException {\n        <<exception>>\n        +BarrelOverflowException()\n    }"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-barreloverflowexception",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"BarrelOverflowException"})]}),"\n",(0,s.jsxs)(n.p,{children:["Der Konstruktor soll das Attribut ",(0,s.jsx)(n.code,{children:"detailMessage"})," initialisieren."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-barrel",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Barrel"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren. Jedes Fass soll dabei\nstandardm\xe4\xdfig leer sein"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"int getCapacity()"})," soll die Kapazit\xe4t des Fasses zur\xfcckgeben"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"int getFluidLevel()"})," soll die aktuelle F\xfcllmenge des Fasses\nzur\xfcckgeben"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addFluid(value: int)"})," soll den F\xfcllstand um den eingehenden\nBetrag erh\xf6hen. Ist der eingehende Betrag h\xf6her als die verf\xfcgbare\nRestkapazit\xe4t, soll der F\xfcllstand auf die maximale F\xfcllmenge gesetzt und\nanschlie\xdfend die Ausnahme ",(0,s.jsx)(n.code,{children:"BarrelOverflowException"})," ausgel\xf6st werden. Ist der\neingehende Betrag kleiner oder gleich gro\xdf wie die verf\xfcgbare Restkapazit\xe4t,\nsoll der F\xfcllstand um die eingehende Menge erh\xf6ht werden."]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"String toString()"})," soll alle Attribute in der Form ",(0,s.jsx)(n.em,{children:"Barrel\n[capacity=[maximale F\xfcllmenge]] [fluidlevel=[F\xfcllstand]]"})," zur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Gib bitte die Kapazit\xe4t des Fasses ein: 100\nGib bitte die Menge der hinzuzuf\xfcgenden Fl\xfcssigkeit ein: 30\nF\xfcllstand: 30\nGib bitte die Menge der hinzuzuf\xfcgenden Fl\xfcssigkeit ein: 50\nF\xfcllstand: 80\nGib bitte die Menge der hinzuzuf\xfcgenden Fl\xfcssigkeit ein: 40\nF\xfcllstand: 100\nDas war der Tropfen, der das Fass zum \xdcberlaufen gebracht hat\n"})}),"\n",(0,s.jsx)(i.A,{pullRequest:"50",branchSuffix:"exceptions/02"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var s=t(96540),r=t(34164),i=t(23104),l=t(56347),a=t(205),o=t(57485),u=t(31682),c=t(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[u,d]=x({queryString:t,groupId:r}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),m=(()=>{const e=u??b;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function v(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=a[t].value;r!==s&&(u(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function k(e){const n=(0,g.A)();return(0,f.jsx)(w,{...e,children:d(e.children)},String(n))}},13979:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(11470),r=t(19365),i=t(28774),l=t(21432),a=t(74848);function o(e){let{pullRequest:n,branchSuffix:t}=e;return(0,a.jsxs)(s.A,{children:[(0,a.jsxs)(r.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(l.A,{language:"console",children:`git switch exercises/${t}`}),(0,a.jsx)(i.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(r.A,{value:"solution",label:"Solution",children:[(0,a.jsx)(l.A,{language:"console",children:`git switch solutions/${t}`}),(0,a.jsx)(i.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(r.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(i.A,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);