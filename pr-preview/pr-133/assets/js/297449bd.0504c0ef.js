"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4358],{27309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var r=n(85893),i=n(11151),s=n(74866),l=n(85162);const a={title:"Git",description:"",sidebar_position:12,tags:["git"]},o=void 0,d={id:"documentation/git",title:"Git",description:"",source:"@site/docs/documentation/git.mdx",sourceDirName:"documentation",slug:"/documentation/git",permalink:"/java-docs/pr-preview/pr-133/documentation/git",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/git.mdx",tags:[{label:"git",permalink:"/java-docs/pr-preview/pr-133/tags/git"}],version:"current",sidebarPosition:12,frontMatter:{title:"Git",description:"",sidebar_position:12,tags:["git"]},sidebar:"documentationSidebar",previous:{title:"Programmieren",permalink:"/java-docs/pr-preview/pr-133/documentation/coding"},next:{title:"Die Programmiersprache Java",permalink:"/java-docs/pr-preview/pr-133/documentation/java"}},c={},u=[{value:"Git Workflows",id:"git-workflows",level:2},{value:"Git Befehle",id:"git-befehle",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Git stellt eine Software zur Verwaltung von Dateien mit integrierter\nVersionskontrolle dar, dessen Entwicklung unter Anderem von Linus Torvald (dem\nErfinder von Linux) initiiert wurde. Die Versionskontrolle von Git erm\xf6glicht\nden Zugriff auf \xe4ltere Entwicklungsst\xe4nde, ohne dabei den aktuellen Stand zu\nverlieren. Zudem unterst\xfctzt Git die Verwaltung von verteilten Dateien an\nverschiedenen Aufbewahrungsorten. Diese Aufbewahrungsorte werden als\n",(0,r.jsx)(t.em,{children:"Repositorys"})," bezeichnet. Man unterscheidet dabei zwischen lokalen Repositorys\nund remote Repositorys. Onlinedienste wie GitHub basieren auf Git und stellen\ndem Anwender Speicherplatz f\xfcr remote Repositorys zur Verf\xfcgung."]}),"\n",(0,r.jsx)(t.h2,{id:"git-workflows",children:"Git Workflows"}),"\n",(0,r.jsx)(t.p,{children:"Aufgrund der Flexibilit\xe4t von Git gibt es keine standardisierten Prozesse f\xfcr\ndas Arbeiten mit Git. Ein Git Workflow stellt eine Anleitung zur Verwendung von\nGit dar, die eine konsistente und produktive Arbeitsweise erm\xf6glichen soll. F\xfcr\neine effiziente und fehlerfreie Arbeitsweise sollten daher alle Mitgleider eines\nTeams die gleichen Git Workflows verwenden."}),"\n",(0,r.jsx)(t.mermaid,{value:"sequenceDiagram\n    participant Arbeitsbereich\n    participant Staging Area\n    participant Lokales Repository\n    participant Remote Repository\n\n    note over Arbeitsbereich,Remote Repository: Lokales Repository erstellen\n    Remote Repository ->> Arbeitsbereich: git clone\n    Lokales Repository ->> Arbeitsbereich: git init\n\n    note over Arbeitsbereich,Remote Repository: \xc4nderungen vornehmen\n    Arbeitsbereich ->> Staging Area: git add\n    activate Staging Area\n    Staging Area ->> Lokales Repository: git commit\n    activate Lokales Repository\n    Staging Area --\x3e Arbeitsbereich: git diff\n    Staging Area ->> Arbeitsbereich: git reset\n    deactivate Staging Area\n    Lokales Repository --\x3e Arbeitsbereich: git diff\n    Lokales Repository ->> Arbeitsbereich: git reset\n    deactivate Lokales Repository\n\n    note over Arbeitsbereich,Remote Repository: \xc4nderungen synchronisieren\n    Remote Repository ->> Lokales Repository: git fetch\n    activate Lokales Repository\n    Lokales Repository ->> Arbeitsbereich: git merge\n    deactivate Lokales Repository\n\n    Remote Repository ->> Arbeitsbereich: git pull\n    Lokales Repository ->> Remote Repository: git push"}),"\n",(0,r.jsx)(t.h2,{id:"git-befehle",children:"Git Befehle"}),"\n",(0,r.jsxs)(t.p,{children:["Git bietet einen Vielzahl an verschiedenen Kommandozeilen-Befehlen um mit Git zu\narbeiten. Eine ausf\xfchrliche Dokumentation der einzelnen Befehle samt der\ndazugeh\xf6rigen Optionen k\xf6nnen auf der offiziellen\n",(0,r.jsx)(t.a,{href:"https://git-scm.com/docs",children:"Git-Homepage"})," gefunden werden. Zudem kann mit dem\nBefehl ",(0,r.jsx)(t.code,{children:"git --help"})," direkt in der Kommandozeile eine Kurzversion der\nDokumentation ausgegeben werden."]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"a",label:"Git einrichten",default:!0,children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Git-Befehl"}),(0,r.jsx)(t.th,{children:"Beschreibung"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git config --global user.name"})}),(0,r.jsx)(t.td,{children:"Benutzername ausgeben"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'git config --global user.name "[Benutzername]"'})}),(0,r.jsx)(t.td,{children:"Benutzername festlegen"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git config --global user.email"})}),(0,r.jsx)(t.td,{children:"E-Mail-Adresse ausgeben"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'git config --global user.email "[E-Mail-Adresse]"'})}),(0,r.jsx)(t.td,{children:"E-Mail-Adresse festlegen"})]})]})]})}),(0,r.jsx)(l.Z,{value:"b",label:"Lokales Repository erstellen",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Git-Befehl"}),(0,r.jsx)(t.th,{children:"Beschreibung"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git clone [Remote Repository]"})}),(0,r.jsx)(t.td,{children:"Remote Repository klonen"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git init [Lokales Repository]"})}),(0,r.jsx)(t.td,{children:"Lokales Repository erstellen"})]})]})]})}),(0,r.jsx)(l.Z,{value:"c",label:"\xc4nderungen versionieren",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Git-Befehl"}),(0,r.jsx)(t.th,{children:"Beschreibung"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git status"})}),(0,r.jsx)(t.td,{children:"Neue und ge\xe4nderte Dateien ausgeben"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git diff"})}),(0,r.jsx)(t.td,{children:"Noch nicht indizierte \xc4nderungen ausgeben"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git add [Datei]"})}),(0,r.jsx)(t.td,{children:"Datei f\xfcr die Versionierung indizieren"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git diff --staged"})}),(0,r.jsx)(t.td,{children:"\xc4nderungen zwischen dem indizierten und dem aktuellen Stand ausgeben"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git reset [Datei]"})}),(0,r.jsx)(t.td,{children:"Datei vom Index nehmen"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'git commit -m "[Nachricht]"'})}),(0,r.jsx)(t.td,{children:"Alle indizierten Dateien versionieren"})]})]})]})}),(0,r.jsx)(l.Z,{value:"d",label:"\xc4nderungen gruppieren",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Git-Befehl"}),(0,r.jsx)(t.th,{children:"Beschreibung"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git branch"})}),(0,r.jsx)(t.td,{children:"Alle Branches ausgeben"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git branch [Branch]"})}),(0,r.jsx)(t.td,{children:"Branch erstellen"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git switch [Branch]"})}),(0,r.jsx)(t.td,{children:"Branch wechseln und Arbeitsbereich aktualisieren"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git merge [Branch]"})}),(0,r.jsx)(t.td,{children:"Branches zusammenf\xfchren"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git branch -d [Branch]"})}),(0,r.jsx)(t.td,{children:"Branch l\xf6schen"})]})]})]})}),(0,r.jsx)(l.Z,{value:"e",label:"\xc4nderungen synchronisieren",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Git-Befehl"}),(0,r.jsx)(t.th,{children:"Beschreibung"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git fetch [Remote Repository]"})}),(0,r.jsx)(t.td,{children:"Versionshistorie vom remote Repository laden"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git merge [Remote Repository]/[Remote Branch]"})}),(0,r.jsx)(t.td,{children:"Branches zusammenf\xfchren"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git pull"})}),(0,r.jsx)(t.td,{children:"git fetch + git merge"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"git push [Remote Repository] [Branch]"})}),(0,r.jsx)(t.td,{children:"Versionshistorie ins remote Repository schieben"})]})]})]})})]})]})}function g(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(90512);const i={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),i=n(90512),s=n(12466),l=n(16550),a=n(20469),o=n(91980),d=n(67392),c=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const i=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[d,u]=x({queryString:n,groupId:i}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),j=(()=>{const e=d??m;return g({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=n(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=n(85893);function f(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),i=a[n].value;i!==r&&(d(t),l(i))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,i.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=m(e);return(0,p.jsxs)("div",{className:(0,i.Z)("tabs-container",j.tabList),children:[(0,p.jsx)(f,{...e,...t}),(0,p.jsx)(v,{...e,...t})]})}function k(e){const t=(0,b.Z)();return(0,p.jsx)(y,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var r=n(67294);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);