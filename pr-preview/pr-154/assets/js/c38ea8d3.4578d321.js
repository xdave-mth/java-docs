"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[888],{94585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var r=t(74848),s=t(28453),i=t(11470),l=t(19365);const d={title:"Schl\xfcsseltransformationen (Hashing)",description:"",sidebar_position:225,tags:["hashing"]},a=void 0,c={id:"documentation/hashing",title:"Schl\xfcsseltransformationen (Hashing)",description:"",source:"@site/docs/documentation/hashing.mdx",sourceDirName:"documentation",slug:"/documentation/hashing",permalink:"/java-docs/pr-preview/pr-154/documentation/hashing",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/hashing.mdx",tags:[{label:"hashing",permalink:"/java-docs/pr-preview/pr-154/tags/hashing"}],version:"current",sidebarPosition:225,frontMatter:{title:"Schl\xfcsseltransformationen (Hashing)",description:"",sidebar_position:225,tags:["hashing"]},sidebar:"documentationSidebar",previous:{title:"Java Collections Framework",permalink:"/java-docs/pr-preview/pr-154/documentation/java-collections-framework"},next:{title:"B\xe4ume",permalink:"/java-docs/pr-preview/pr-154/documentation/trees"}},h={},o=[{value:"Hashtabellen",id:"hashtabellen",level:2},{value:"Hashfunktionen",id:"hashfunktionen",level:2},{value:"Kollisionen",id:"kollisionen",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Unter Schl\xfcsseltransformationen (Hashing) versteht man die Transformation einer\ngro\xdfen Datenmenge in eine kleinere. Die gr\xf6\xdfere Datenmenge wird dabei als\nSchl\xfcssel, die kleinere als Hashcode bezeichnet. Die Transformation erfolgt \xfcber\neine sogenannte Hashfunktion (auch Streuwertfunktion). Wichtig dabei ist, dass\nder Hashcode nur vom Zustand des Schl\xfcssels abh\xe4ngen darf."}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart\n    string1(Brot) --Hashing---\x3e hash1(407)\n    string2(Butter) --Hashing---\x3e hash2(630)\n    string3(Milch) --Hashing---\x3e hash3(493)\n    string4(Eier) --Hashing---\x3e hash4(389)"}),"\n",(0,r.jsx)(n.h2,{id:"hashtabellen",children:"Hashtabellen"}),"\n",(0,r.jsx)(n.p,{children:"Hashtabellen sind spezielle Datenstrukturen, die f\xfcr den schnellen Zugriff\nkonzipiert wurden. Mit Hilfe einer Hashfunktion wird der Index berechnet, an der\nein Schl\xfcssel gespeichert wird. Bei Hashtabellen soll durch das Hashing eine\ngleichm\xe4\xdfige Streuung der Eintr\xe4ge in der Tabelle erreicht werden. Aus diesem\nGrund werden Hashtabellen auch als Streuwerttabellen bezeichnet."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Index"}),(0,r.jsx)(n.th,{children:"Schl\xfcssel"}),(0,r.jsx)(n.th,{children:"Hashcode"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Butter"}),(0,r.jsx)(n.td,{children:"630"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Brot"}),(0,r.jsx)(n.td,{children:"407"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"Milch"}),(0,r.jsx)(n.td,{children:"493"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"Eier"}),(0,r.jsx)(n.td,{children:"389"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"hashfunktionen",children:"Hashfunktionen"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsxs)(l.A,{value:"a",label:"Divisionsrestmethode",default:!0,children:[(0,r.jsxs)(n.p,{children:["Die Divisionsrest-Methode stellt eine einfache und schnelle Hashfunktion dar.\nDie Berechnung des Index erfolgt dabei gem\xe4\xdf der Formel ",(0,r.jsx)(n.code,{children:"\u210e(\ud835\udc58) = \ud835\udc58 \ud835\udc5a\ud835\udc5c\ud835\udc51 \ud835\udc5a"}),"."]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Schl\xfcssel"}),(0,r.jsx)(n.th,{children:"Hashcode"}),(0,r.jsx)(n.th,{children:"Index"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Brot"}),(0,r.jsx)(n.td,{children:"407"}),(0,r.jsx)(n.td,{children:"407 \ud835\udc5a\ud835\udc5c\ud835\udc51 5 = 2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Butter"}),(0,r.jsx)(n.td,{children:"630"}),(0,r.jsx)(n.td,{children:"630 \ud835\udc5a\ud835\udc5c\ud835\udc51 5 = 0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Milch"}),(0,r.jsx)(n.td,{children:"493"}),(0,r.jsx)(n.td,{children:"493 \ud835\udc5a\ud835\udc5c\ud835\udc51 5 = 3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Eier"}),(0,r.jsx)(n.td,{children:"389"}),(0,r.jsx)(n.td,{children:"389 \ud835\udc5a\ud835\udc5c\ud835\udc51 5 = 4"})]})]})]}),(0,r.jsx)(n.admonition,{title:"Legende",type:"note",children:(0,r.jsx)(n.p,{children:"\u210e(\ud835\udc58) = Index, \ud835\udc58 = Hashcode, \ud835\udc5a\ud835\udc5c\ud835\udc51 = Modulo-Operation, \ud835\udc5a = Tabellengr\xf6\xdfe"})})]}),(0,r.jsxs)(l.A,{value:"b",label:"Multiplikative Methode",children:[(0,r.jsxs)(n.p,{children:["Die Multiplikative Methode stellt eine Hashfunktion dar, die man als\nVerallgemeinerung der Divisionsrest-Methode sehen kann. Die Berechnung des Index\nerfolgt dabei gem\xe4\xdf der Formel ",(0,r.jsx)(n.code,{children:"\u210e(\ud835\udc58) = \u230a\ud835\udc5a \u2217 (\ud835\udc58 \u2217 \ud835\udc34 \ud835\udc5a\ud835\udc5c\ud835\udc51 1)\u230b"}),"."]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Schl\xfcssel"}),(0,r.jsx)(n.th,{children:"Hashcode"}),(0,r.jsx)(n.th,{children:"Index"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Brot"}),(0,r.jsx)(n.td,{children:"407"}),(0,r.jsx)(n.td,{children:"\u230a5 \u2217 (407 \u2217 0,62 \ud835\udc5a\ud835\udc5c\ud835\udc51 1)\u230b = 1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Butter"}),(0,r.jsx)(n.td,{children:"630"}),(0,r.jsx)(n.td,{children:"\u230a5 \u2217 (630 \u2217 0,62 \ud835\udc5a\ud835\udc5c\ud835\udc51 1)\u230b = 3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Milch"}),(0,r.jsx)(n.td,{children:"493"}),(0,r.jsx)(n.td,{children:"\u230a5 \u2217 (493 \u2217 0,62 \ud835\udc5a\ud835\udc5c\ud835\udc51 1)\u230b = 3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Eier"}),(0,r.jsx)(n.td,{children:"389"}),(0,r.jsx)(n.td,{children:"\u230a5 \u2217 (389 \u2217 0,62 \ud835\udc5a\ud835\udc5c\ud835\udc51 1)\u230b = 0"})]})]})]}),(0,r.jsx)(n.admonition,{title:"Legende",type:"note",children:(0,r.jsx)(n.p,{children:"\u210e(\ud835\udc58) = Index, \ud835\udc5a = Tabellengr\xf6\xdfe, \ud835\udc58 = Hashcode, \ud835\udc34 = Konstante, \ud835\udc5a\ud835\udc5c\ud835\udc51 =\nModulo-Operation, \u230a \u230b = untere Gau\xdfklammer"})}),(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsx)(n.p,{children:"Als Wert f\xfcr die Konstante \ud835\udc34 wird gerne der Goldene Schnitt (~0,62) verwendet."})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"kollisionen",children:"Kollisionen"}),"\n",(0,r.jsx)(n.p,{children:"Werden zu unterschiedlichen Schl\xfcsseln dieselben Indizes ermittelt, entstehen\ndadurch sogenannte Kollisionen. Um Kollisionen bestm\xf6glichen zu vermeiden, muss\neine geeignete Tabellengr\xf6\xdfe sowie eine geeignete Hashfunktion gew\xe4hlt werden.\nZur Aufl\xf6sung von Kollisionen gibt es verschiedene M\xf6glichkeiten."}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsxs)(l.A,{value:"a",label:"Geschlossenes Hashing mit offener Adressierung",default:!0,children:[(0,r.jsx)(n.p,{children:"Beim geschlossenen Hashing mit offener Adressierung wird bei einer Kollision\n\xfcber unterschiedliche Verfahren eine freie Stelle in der Hashtabelle gesucht:\nBeim linearen Sondieren wird mit festen Intervallschritten nach einer freien\nStelle gesucht, beim quadratischen Sondieren wird der Intervallschritt nach\njedem erfolglosen Versuch quadriert und beim doppelten Hashing wird der\nIntervallschritt mit Hilfe einer zus\xe4tzlichen Hashfunktion berechnet."}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Index"}),(0,r.jsx)(n.th,{children:"Schl\xfcssel"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Eier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Brot"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"Butter"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"Milch"})]})]})]})]}),(0,r.jsxs)(l.A,{value:"b",label:"Offenes Hashing mit geschlossener Adressierung",children:[(0,r.jsx)(n.p,{children:"Beim offenen Hashing mit geschlossener Adressierung werden alle Schl\xfcssel mit\ndemselben Index in einem Beh\xe4lter (Bucket) gespeichert. Diese Beh\xe4lter werden\noft mit Hilfe linearer Listen realisiert. Bei der Suche nach einem Schl\xfcssel\nmuss also zun\xe4chst der richtige Beh\xe4lter ermittelt und anschlie\xdfend der Beh\xe4lter\ndurchsucht werden."}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Index"}),(0,r.jsx)(n.th,{children:"Schl\xfcssel"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Eier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Brot"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"Butter, Milch"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{})]})]})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),s=t(34164),i=t(23104),l=t(56347),d=t(205),a=t(57485),c=t(31682),h=t(89466);function o(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return o(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=u(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,o]=j({queryString:t,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,h.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),f=(()=>{const e=c??m;return x({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{f&&a(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),b(e)}),[o,b,i]),tabValues:i}}var b=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function p(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),h=e=>{const n=e.currentTarget,t=a.indexOf(n),s=d[t].value;s!==r&&(c(n),l(s))},o=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:d.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:o,onClick:h,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(p,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function k(e){const n=(0,b.A)();return(0,g.jsx)(w,{...e,children:o(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var r=t(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);