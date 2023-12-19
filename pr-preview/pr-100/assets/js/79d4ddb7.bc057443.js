"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5923],{78493:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var n=r(85893),s=r(11151),t=r(85521);const i={title:"ClassDiagrams03",description:""},l=void 0,u={id:"exercises/class-diagrams/class-diagrams03",title:"ClassDiagrams03",description:"",source:"@site/docs/exercises/class-diagrams/class-diagrams03.mdx",sourceDirName:"exercises/class-diagrams",slug:"/exercises/class-diagrams/class-diagrams03",permalink:"/java-docs/pr-preview/pr-100/exercises/class-diagrams/class-diagrams03",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-diagrams/class-diagrams03.mdx",tags:[],version:"current",frontMatter:{title:"ClassDiagrams03",description:""},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams02",permalink:"/java-docs/pr-preview/pr-100/exercises/class-diagrams/class-diagrams02"},next:{title:"ClassDiagrams04",permalink:"/java-docs/pr-preview/pr-100/exercises/class-diagrams/class-diagrams04"}},c={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>Creature</em>",id:"hinweise-zur-klasse-creature",level:2},{value:"Hinweise zur Klasse <em>CreatureGame</em>",id:"hinweise-zur-klasse-creaturegame",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){const a={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Passe die Klasse ",(0,n.jsx)(a.code,{children:"Creature"})," aus \xdcbungsaufgabe ",(0,n.jsx)(a.a,{href:"../oo/oo06",children:"OO06"})," anhand des\nabgebildeten Klassendiagramms an und Erstelle die Klasse ",(0,n.jsx)(a.code,{children:"CreatureGame"})]}),"\n",(0,n.jsx)(a.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche einen Kampf zwischen zwei Kreaturen\nsimuliert"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,n.jsx)(a.mermaid,{value:"classDiagram\n    CreatureGame o-- Creature\n\n    class CreatureGame {\n        -creature1: Creature &#123final&#125\n        -creature2: Creature &#123final&#125\n        -numberOfRounds: int\n        +Game(creature1: Creature, creature2: Creature)\n        +simulateFight() void\n        -move(creature1: Creature, creature2: Creature) boolean\n        -toString() String\n    }\n\n    class Creature {\n        -name: String &#123final&#125\n        -attackValue: int &#123final&#125\n        -hitpoints: int\n        +Creature(name: String, attackValue: int, hitpoints: int)\n        +attackCreature(creature: Creature) boolean\n        +name() String\n        +attackValue() int\n        +getHitpoints() int\n        +setHitpoints(hitpoints: int) void\n        +toString() String\n    }"}),"\n",(0,n.jsxs)(a.h2,{id:"hinweise-zur-klasse-creature",children:["Hinweise zur Klasse ",(0,n.jsx)(a.em,{children:"Creature"})]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Passe die Methode ",(0,n.jsx)(a.code,{children:"boolean attack(creature: Creature)"})," so an, dass der\nR\xfcckgabewert ",(0,n.jsx)(a.code,{children:"true"})," ist, wenn die Lebenspunkte der angegriffenen Kreatur\nkleiner gleich Null sind, bzw. ",(0,n.jsx)(a.code,{children:"false"}),", wenn nicht"]}),"\n"]}),"\n",(0,n.jsxs)(a.h2,{id:"hinweise-zur-klasse-creaturegame",children:["Hinweise zur Klasse ",(0,n.jsx)(a.em,{children:"CreatureGame"})]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,n.jsxs)(a.li,{children:["Die Methode ",(0,n.jsx)(a.code,{children:"void simulateFight()"}),' soll die beiden Kreaturen sich so lange\ngegenseitig angreifen lassen, bis eine der Kreaturen "stirbt"']}),"\n",(0,n.jsxs)(a.li,{children:["Die Methode ",(0,n.jsx)(a.code,{children:"boolean move(creature1: Creature, creature2: Creature)"})," soll eine\nKreatur die andere angreifen lassen und den R\xfcckgabewert ",(0,n.jsx)(a.code,{children:"true"}),' liefern, wenn\ndie angegriffene Kreatur "stirbt", bzw. ',(0,n.jsx)(a.code,{children:"false"}),", wenn nicht"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:"Runde 1: Zombie (2 - 10), Vampir (4 - 6)\nZombie greift Vampir an und erzielt 2 Schaden\nVampir hat noch 4 Lebenspunkte\nVampir greift Zombie an und erzielt 4 Schaden\nZombie hat noch 6 Lebenspunkte\n\u2026\nRunde 3: Zombie (2 - 2), Vampir (4 - 2)\nZombie greift Vampir an und erzielt 2 Schaden\nVampir wurde vernichtet\n"})}),"\n",(0,n.jsx)(t.Z,{pullRequest:"38",branchSuffix:"class-diagrams/03"})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,a,r)=>{r.d(a,{Z:()=>i});r(67294);var n=r(90512);const s={tabItem:"tabItem_Ymn6"};var t=r(85893);function i(e){let{children:a,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r,children:a})}},74866:(e,a,r)=>{r.d(a,{Z:()=>k});var n=r(67294),s=r(90512),t=r(12466),i=r(16550),l=r(20469),u=r(91980),c=r(67392),o=r(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:r}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:r,attributes:n,default:s}}=e;return{value:a,label:r,attributes:n,default:s}}))}(r);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function m(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:r}=e;const s=(0,i.k6)(),t=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,u._X)(t),(0,n.useCallback)((e=>{if(!t)return;const a=new URLSearchParams(s.location.search);a.set(t,e),s.replace({...s.location,search:a.toString()})}),[t,s])]}function g(e){const{defaultValue:a,queryString:r=!1,groupId:s}=e,t=h(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:t}))),[c,d]=p({queryString:r,groupId:s}),[g,b]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,t]=(0,o.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:s}),f=(()=>{const e=c??g;return m({value:e,tabValues:t})?e:null})();(0,l.Z)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,t]),tabValues:t}}var b=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function v(e){let{className:a,block:r,selectedValue:n,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),o=e=>{const a=e.currentTarget,r=u.indexOf(a),s=l[r].value;s!==n&&(c(a),i(s))},d=e=>{let a=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;a=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;a=u[r]??u[u.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},a),children:l.map((e=>{let{value:a,label:r,attributes:t}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>u.push(e),onKeyDown:d,onClick:o,...t,className:(0,s.Z)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":n===a}),children:r??a},a)}))})}function j(e){let{lazy:a,children:r,selectedValue:s}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function w(e){const a=g(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...e,...a}),(0,x.jsx)(j,{...e,...a})]})}function k(e){const a=(0,b.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(a))}},85521:(e,a,r)=>{r.d(a,{Z:()=>u});r(67294);var n=r(74866),s=r(85162),t=r(39960),i=r(9286),l=r(85893);function u(e){let{pullRequest:a,branchSuffix:r}=e;return(0,l.jsxs)(n.Z,{children:[(0,l.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch exercises/${r}`}),(0,l.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,l.jsx)(i.Z,{language:"console",children:`git switch solutions/${r}`}),(0,l.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,l.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,l.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,l.jsxs)(t.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);