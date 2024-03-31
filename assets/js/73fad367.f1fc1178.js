"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5540],{9455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var n=r(74848),s=r(28453),i=r(13979);const l={title:"OO06",description:""},a=void 0,c={id:"exercises/oo/oo06",title:"OO06",description:"",source:"@site/docs/exercises/oo/oo06.mdx",sourceDirName:"exercises/oo",slug:"/exercises/oo/oo06",permalink:"/java-docs/exercises/oo/oo06",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/oo/oo06.mdx",tags:[],version:"current",frontMatter:{title:"OO06",description:""},sidebar:"exercisesSidebar",previous:{title:"OO05",permalink:"/java-docs/exercises/oo/oo05"},next:{title:"OO07",permalink:"/java-docs/exercises/oo/oo07"}},d={},o=[{value:"Attribute der Klasse <em>Creature</em>",id:"attribute-der-klasse-creature",level:2},{value:"Methoden der Klasse <em>Creature</em>",id:"methoden-der-klasse-creature",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function u(e){const t={code:"code",em:"em",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Erstelle die Klasse ",(0,n.jsx)(t.code,{children:"Creature"})," mit Hilfe der abgebildeten Informationen"]}),"\n",(0,n.jsx)(t.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche zwei Kreaturen erzeugt, die sich\nmehrmals abwechselnd gegenseitig angreifen"}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"attribute-der-klasse-creature",children:["Attribute der Klasse ",(0,n.jsx)(t.em,{children:"Creature"})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribut"}),(0,n.jsx)(t.th,{children:"Datentyp"}),(0,n.jsx)(t.th,{children:"Sichtbarkeit"}),(0,n.jsx)(t.th,{children:"Ver\xe4nderlichkeit"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"name"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"String"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"private"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"unver\xe4nderlich"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"attackValue"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"int"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"private"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"unver\xe4nderlich"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"hitPoints"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"int"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"private"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"ver\xe4nderlich"})})]})]})]}),"\n",(0,n.jsxs)(t.h2,{id:"methoden-der-klasse-creature",children:["Methoden der Klasse ",(0,n.jsx)(t.em,{children:"Creature"})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Methode"}),(0,n.jsx)(t.th,{children:"R\xfcckgabewert"}),(0,n.jsx)(t.th,{children:"Sichtbarkeit"}),(0,n.jsx)(t.th,{children:"Beschreibung"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"Creature(name: String, attackValue: int, hitPoints: int)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"void"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"public"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"Setzen aller Attribute"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"getName()"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"String"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"public"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"R\xfcckgabe des Namens"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"getAttackValue()"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"int"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"public"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"R\xfcckgabe des Angriffswertes"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"getHitPoints()"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"int"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"public"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"R\xfcckgabe der Lebenspunkte"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"attackCreature(enemy: Creature)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"void"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"public"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"Reduktion der Lebenspunkte der angegriffenen Kreatur um den Angriffswert der angreifenden Kreatur"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"Zombie greift Vampir an und erzielt 2 Schaden\nVampir hat noch 4 Lebenspunkte\nVampir greift Zombie an und erzielt 4 Schaden\nZombie hat noch 6 Lebenspunkte\nZombie greift Vampir an und erzielt 2 Schaden\nVampir hat noch 2 Lebenspunkte\nVampir greift Zombie an und erzielt 4 Schaden\nZombie hat noch 2 Lebenspunkte\n"})}),"\n",(0,n.jsx)(i.A,{pullRequest:"28",branchSuffix:"oo/06"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(96540),s=r(34164),i=r(23104),l=r(56347),a=r(205),c=r(57485),d=r(31682),o=r(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=h(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[d,u]=j({queryString:r,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),p=(()=>{const e=d??m;return x({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{p&&c(p)}),[p]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=r(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),o=e=>{const t=e.currentTarget,r=c.indexOf(t),s=a[r].value;s!==n&&(d(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:o,...i,className:(0,s.A)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",p.tabList),children:[(0,f.jsx)(g,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function A(e){const t=(0,b.A)();return(0,f.jsx)(k,{...e,children:u(e.children)},String(t))}},13979:(e,t,r)=>{r.d(t,{A:()=>c});r(96540);var n=r(11470),s=r(19365),i=r(28774),l=r(21432),a=r(74848);function c(e){let{pullRequest:t,branchSuffix:r}=e;return(0,a.jsxs)(n.A,{children:[(0,a.jsxs)(s.A,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(l.A,{language:"console",children:`git switch exercises/${r}`}),(0,a.jsx)(i.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(s.A,{value:"solution",label:"Solution",children:[(0,a.jsx)(l.A,{language:"console",children:`git switch solutions/${r}`}),(0,a.jsx)(i.A,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(s.A,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(i.A,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);