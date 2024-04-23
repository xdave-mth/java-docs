"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4167],{2300:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var r=i(74848),t=i(28453);const s={title:"Grafische Benutzeroberfl\xe4chen",description:"",sidebar_position:360,tags:["gui"]},d=void 0,a={id:"documentation/gui",title:"Grafische Benutzeroberfl\xe4chen",description:"",source:"@site/docs/documentation/gui.md",sourceDirName:"documentation",slug:"/documentation/gui",permalink:"/java-docs/documentation/gui",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/gui.md",tags:[{label:"gui",permalink:"/java-docs/tags/gui"}],version:"current",sidebarPosition:360,frontMatter:{title:"Grafische Benutzeroberfl\xe4chen",description:"",sidebar_position:360,tags:["gui"]},sidebar:"documentationSidebar",previous:{title:"Algorithmen",permalink:"/java-docs/documentation/algorithms"},next:{title:"JavaFX",permalink:"/java-docs/documentation/javafx"}},l={},o=[{value:"Aufbau grafischer Benutzeroberfl\xe4chen",id:"aufbau-grafischer-benutzeroberfl\xe4chen",level:2},{value:"Ereignisse (Events)",id:"ereignisse-events",level:2}];function c(e){const n={admonition:"admonition",em:"em",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Eine grafische Benutzeroberfl\xe4che oder auch ",(0,r.jsx)(n.em,{children:"GUI"})," (Graphical User Interface) hat\ndie Aufgabe, Programme mittels grafischer Bildschirmelemente bedienbar zu\nmachen. So erm\xf6glichen ",(0,r.jsx)(n.em,{children:"Controls"})," wie Eingabefelder, Drucktasten und\nAusgabefelder die Interaktion mit der Anwendung und ",(0,r.jsx)(n.em,{children:"Container"})," die\nstrukturierte Darstellung und Verwaltung anderer Bildschirmelemente. ",(0,r.jsx)(n.em,{children:"Dialoge"}),"\nwie Nachrichtendialoge und Dateiauswahl-Dialoge widerum stellen vordefinierte\nOberfl\xe4chen dar, mit deren Hilfe wiederkehrende Anwendungsf\xe4lle abgedeckt werden\nk\xf6nnen."]}),"\n",(0,r.jsx)(n.h2,{id:"aufbau-grafischer-benutzeroberfl\xe4chen",children:"Aufbau grafischer Benutzeroberfl\xe4chen"}),"\n",(0,r.jsxs)(n.p,{children:["Da es sich bei grafischen Benutzeroberfl\xe4chen um komplexe Anwendungen handelt,\nwerden diese in der Regel in verschiedene Bereiche wie Aufbau, Aussehen und\nVerhalten aufgeteilt (",(0,r.jsx)(n.em,{children:"Separation of Concerns"}),"). Als Beispiel sei hier der\nAufbau einer klassischen Webseite aufgef\xfchrt: HTML bestimmt den Aufbau, CSS das\nAussehen und JavaScript das Verhalten der Webseite."]}),"\n",(0,r.jsxs)(n.p,{children:["Das Entwurfmuster MVC (",(0,r.jsx)(n.em,{children:"Model-View-Controller"}),") stellt einen g\xe4ngigen Ansatz zur\nEntwicklung von grafischen Benutzeroberfl\xe4chen dar, bei dem die grafische\nBenutzeroberfl\xe4che in drei Bereiche unterteilt wird:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Das ",(0,r.jsx)(n.em,{children:"Model"})," ist f\xfcr die Datenhaltung und -verwaltung zust\xe4ndig"]}),"\n",(0,r.jsxs)(n.li,{children:["Die ",(0,r.jsx)(n.em,{children:"View"})," ist f\xfcr die Darstellung der Oberfl\xe4che zust\xe4ndig, welche wiederum\nin Aufbau und Aussehen unterteilt ist"]}),"\n",(0,r.jsxs)(n.li,{children:["Der ",(0,r.jsx)(n.em,{children:"Controller"})," \xfcbernimmt die Ereignisbehandlung und erm\xf6glicht so die\nBenutzerinteraktion"]}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n\n    Model --Notify--\x3e Controller\n    Controller --Update--\x3e Model\n    View --User Action--\x3e Controller\n    Controller --Update--\x3e View"}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Der Begriff MVC wird oft auch als Synonym f\xfcr MVC-\xe4hnliche Varianten wie z.B.\nMVP (",(0,r.jsx)(n.em,{children:"Model-View-Presenter"}),") oder MVVM (",(0,r.jsx)(n.em,{children:"Model-View-ViewModel"}),") verwendet."]})}),"\n",(0,r.jsx)(n.h2,{id:"ereignisse-events",children:"Ereignisse (Events)"}),"\n",(0,r.jsx)(n.p,{children:"Ereignisse (Events) sind Nachrichten, die \xfcber das System weitergeleitet werden.\nAuf grafischen Benutzeroberfl\xe4chen werden Ereignisse z.B. durch das Bet\xe4tigen\neiner Drucktaste ausgel\xf6st. Weitere typische Ergeignisse sind das Bet\xe4tigen\neiner Maustaste, Tastatureingaben oder das Vergr\xf6\xdfern bzw. Verkleinern eines\nFensters."}),"\n",(0,r.jsx)(n.p,{children:"Die Behandlung dieser Ereignisse wird durch das Delegationsmodell festgelegt:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Empf\xe4nger k\xf6nnen sich beim Sender f\xfcr ein Ereignis registrieren"}),"\n",(0,r.jsx)(n.li,{children:"Der Sender l\xf6st das Ereignis aus und \xfcbergibt das erzeugte Ereignis-Objekt an\nalle registrierten Empf\xe4nger"}),"\n",(0,r.jsx)(n.li,{children:"Die Empf\xe4nger nehmen das Ereignis-Objekt entgegen und haben dadurch die\nM\xf6glichkeit, auf das Ereignis zu reagieren"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Die Empf\xe4nger werden je nach Bibliothek bzw. Framework als ",(0,r.jsx)(n.em,{children:"Handler"})," oder\n",(0,r.jsx)(n.em,{children:"Listener"})," bezeichnet."]})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var r=i(96540);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);