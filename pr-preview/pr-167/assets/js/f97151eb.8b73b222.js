"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2203],{50766:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=a(74848),i=a(28453),n=a(13979);const r={title:"ActivityDiagrams01",description:""},l=void 0,o={id:"exercises/activity-diagrams/activity-diagrams01",title:"ActivityDiagrams01",description:"",source:"@site/docs/exercises/activity-diagrams/activity-diagrams01.mdx",sourceDirName:"exercises/activity-diagrams",slug:"/exercises/activity-diagrams/activity-diagrams01",permalink:"/java-docs/pr-preview/pr-167/exercises/activity-diagrams/activity-diagrams01",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/activity-diagrams/activity-diagrams01.mdx",tags:[],version:"current",frontMatter:{title:"ActivityDiagrams01",description:""},sidebar:"exercisesSidebar",previous:{title:"Aktivit\xe4tsdiagramme",permalink:"/java-docs/pr-preview/pr-167/exercises/activity-diagrams/"},next:{title:"Polymorphie",permalink:"/java-docs/pr-preview/pr-167/exercises/polymorphy/"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Aktivit\xe4tsdiagramm zur Methode <em>void main(args: String[])</em>",id:"aktivit\xe4tsdiagramm-zur-methode-void-mainargs-string",level:2},{value:"Aktivit\xe4tsdiagramm zur Methode <em>void play()</em>",id:"aktivit\xe4tsdiagramm-zur-methode-void-play",level:2},{value:"Aktivit\xe4tsdiagramm zur Methode <em>boolean move(name: String)</em>",id:"aktivit\xe4tsdiagramm-zur-methode-boolean-movename-string",level:2}];function d(e){const t={code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Erstelle die Klasse ",(0,s.jsx)(t.code,{children:"MainClass"})," anhand des abgebildeten Klassendiagramms sowie\nden abgebildeten Aktivit\xe4tsdiagrammen."]}),"\n",(0,s.jsx)(t.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(t.mermaid,{value:"classDiagram\n    class MainClass {\n        -scanner: Scanner$\n        -randomNumber: int$\n        +main(args: String[])$ void\n        +play()$ void\n        +move(name: String)$ boolean\n    }"}),"\n",(0,s.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-methode-void-mainargs-string",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,s.jsx)(t.em,{children:"void main(args: String[])"})]}),"\n",(0,s.jsx)(t.mermaid,{value:'stateDiagram-v2\n    state "Konsoleneingabe initialisieren" as state1\n    state "Zufallszahl erzeugen" as state2\n    state "Aktivit\xe4t \'Spielen\' ausf\xfchren" as state3\n\n    state "Ratespiel" as main {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e state3\n        state3 --\x3e [*]\n    }'}),"\n",(0,s.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-methode-void-play",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,s.jsx)(t.em,{children:"void play()"})]}),"\n",(0,s.jsx)(t.mermaid,{value:'stateDiagram-v2\n    state "Ausgabe: Spieler 1, Name eingeben" as state1\n    state "Eingabe: Name 1" as state2\n    state "Ausgabe: Spieler 2, Name eingeben" as state3\n    state "Eingabe: Name 2" as state4\n    state "Aktivit\xe4t \'Zug\' mit [Name 1] ausf\xfchren" as state5\n    state "Aktivit\xe4t \'Zug\' mit [Name 2] ausf\xfchren" as state6\n\n    state if1 <<choice>>\n    state if2 <<choice>>\n    state fork1 <<fork>>\n\n    state "Spielen" as play {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e state3\n        state3 --\x3e state4\n        state4 --\x3e state5\n        state5 --\x3e if1\n        if1 --\x3e fork1: sonst\n        if1 --\x3e state6: R\xfcckgabe = true\n        state6 --\x3e if2\n        if2 --\x3e state5: R\xfcckgabe = true\n        if2 --\x3e fork1: sonst\n        fork1 --\x3e [*]\n    }'}),"\n",(0,s.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-methode-boolean-movename-string",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,s.jsx)(t.em,{children:"boolean move(name: String)"})]}),"\n",(0,s.jsx)(t.mermaid,{value:'stateDiagram-v2\n    state "Ausgabe: [Name], Tipp eingeben" as state1\n    state "Eingabe: Tipp" as state2\n    state "Ausgabe: Richtig, das war die gesuchte Zahl" as state3\n    state "R\xfcckgabe: true" as state4\n    state "Ausgabe: Die gesuchte Zahl ist kleiner" as state5\n    state "Ausgabe: Die gesuchte Zahl ist gr\xf6\xdfer" as state6\n    state "R\xfcckgabe: false" as state7\n\n    state if1 <<choice>>\n    state fork1 <<fork>>\n    state fork2 <<fork>>\n\n    state "Zug" as move {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e if1\n        if1 --\x3e state3: sonst\n        if1 --\x3e state5: Tipp > Zufallszahl\n        if1 --\x3e state6: Tipp < Zufallszahl\n        state3 --\x3e state4\n        state4 --\x3e fork2\n        state5 --\x3e fork1\n        state6 --\x3e fork1\n        fork1 --\x3e state7\n        state7 --\x3e fork2\n        fork2 --\x3e [*]\n    }'}),"\n",(0,s.jsx)(n.A,{pullRequest:"35",branchSuffix:"activity-diagrams/01"})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var s=a(34164);const i={tabItem:"tabItem_Ymn6"};var n=a(74848);function r(e){let{children:t,hidden:a,className:r}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,r),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>y});var s=a(96540),i=a(34164),n=a(23104),r=a(56347),l=a(205),o=a(57485),u=a(31682),c=a(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:s,default:i}}=e;return{value:t,label:a,attributes:s,default:i}}))}(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:a}=e;const i=(0,r.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(i.location.search);t.set(n,e),i.replace({...i.location,search:t.toString()})}),[n,i])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,n=m(e),[r,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[u,d]=v({queryString:a,groupId:i}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,n]=(0,c.Dv)(a);return[i,(0,s.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:i}),f=(()=>{const e=u??p;return g({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),h(e)}),[d,h,n]),tabValues:n}}var h=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(74848);function x(e){let{className:t,block:a,selectedValue:s,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.a_)(),c=e=>{const t=e.currentTarget,a=o.indexOf(t),i=l[a].value;i!==s&&(u(t),r(i))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...n,className:(0,i.A)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":s===t}),children:a??t},t)}))})}function k(e){let{lazy:t,children:a,selectedValue:i}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(k,{...t,...e})]})}function y(e){const t=(0,h.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},13979:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var s=a(11470),i=a(19365),n=a(28774),r=a(21432),l=a(74848);function o(e){let{pullRequest:t,branchSuffix:a}=e;return(0,l.jsxs)(s.A,{children:[(0,l.jsxs)(i.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(r.A,{language:"console",children:`git switch exercises/${a}`}),(0,l.jsx)(n.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(i.A,{value:"solution",label:"Solution",children:[(0,l.jsx)(r.A,{language:"console",children:`git switch solutions/${a}`}),(0,l.jsx)(n.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(i.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(n.A,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);