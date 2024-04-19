"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6476],{91575:(e,s,n)=>{n.d(s,{A:()=>t});var i=n(96540),r=n(74848);function t(e){let{children:s,initSlides:n,width:t=null,height:l=null}=e;return(0,i.useEffect)((()=>{n()})),(0,r.jsx)("div",{className:"reveal reveal-viewport",style:{width:t??"100vw",height:l??"100vh"},children:(0,r.jsx)("div",{className:"slides",children:s})})}},99845:(e,s,n)=>{n.d(s,{i:()=>i});const i=()=>{const e=n(38182),s=n(72186),i=n(13504),r=n(93558);new(n(89665))({plugins:[e,s,i,r]}).initialize({hash:!0})}},84830:(e,s,n)=>{n.d(s,{C:()=>r});n(96540);var i=n(74848);const r=()=>(0,i.jsx)("p",{style:{fontSize:"8px",position:"absolute",bottom:0,right:0},children:"*NKR"})},80521:(e,s,n)=>{n.r(s),n.d(s,{default:()=>h});var i=n(91575),r=n(84830),t=n(99845),l=n(28774),c=n(74848);function h(){return(0,c.jsxs)(i.A,{initSlides:t.i,children:[(0,c.jsx)("section",{children:(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Agenda"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"fragment",children:"Besprechung Aufgabe"}),(0,c.jsx)("li",{className:"fragment",children:"Einf\xfchrung Git"}),(0,c.jsx)("li",{className:"fragment",children:"Datentypen"}),(0,c.jsx)("li",{className:"fragment",children:"Datenobjekte"}),(0,c.jsx)("li",{className:"fragment",children:"Operationen mit Datentypen"}),(0,c.jsx)("li",{className:"fragment",children:"Zusammenfassung"})]})]})}),(0,c.jsxs)("section",{children:[(0,c.jsx)("section",{children:(0,c.jsx)("h2",{children:"Besprechung Aufgabe"})}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Hello World"}),(0,c.jsxs)("p",{className:"fragment",children:["Die Schl\xfcsselw\xf6rter ",(0,c.jsx)("strong",{children:"public"}),", ",(0,c.jsx)("strong",{children:"class"})," ","und ",(0,c.jsx)("strong",{children:"static"})," werden sp\xe4ter behandelt."]}),(0,c.jsxs)("div",{className:"fragment",children:[(0,c.jsx)("p",{children:"Aber warum braucht man:"}),(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"java",children:"public static void main(String[] args)"})})]}),(0,c.jsx)("aside",{className:"notes",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"main2 erstellen"}),(0,c.jsx)("li",{children:"main l\xf6schen"})]})})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Demo main-Methode"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"fragment",children:"main2 erstellen"}),(0,c.jsx)("li",{className:"fragment",children:"main l\xf6schen"})]})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)(l.A,{to:"/documentation/coding",children:"Programmausf\xfchrung"}),(0,c.jsx)(r.C,{})]})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("section",{children:(0,c.jsx)("h2",{children:"Einf\xfchrung Git"})}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"git switch"}),(0,c.jsx)("p",{children:"Wechseln zwischen Branches"}),(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"bash",dangerouslySetInnerHTML:{__html:"# Syntax: git switch &lt;branchname&gt;\ngit switch exercises/class-structure/01\ngit switch solutions/class-structure/01\n"}})}),(0,c.jsx)(r.C,{})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"git stash"}),(0,c.jsx)("p",{children:"aktuelle \xc4nderungen verstecken und wiederherstellen"}),(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"bash",dangerouslySetInnerHTML:{__html:'git stash # alles verstecken\ngit stash apply # das zuletzt versteckte wiederherstellen\ngit stash save "wip" # alles unter dem Namen "wip" verstecken\ngit stash list # alle stashes anzeigen\ngit stash apply 3 # stash 3 wiederherstellen\ngit stash apply stash^{/wip} # "wip" wiederherstellen\n'}})}),(0,c.jsx)(r.C,{})]}),(0,c.jsx)("section",{children:(0,c.jsx)("h2",{children:"Demo Git stash"})})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("section",{children:(0,c.jsx)("h2",{children:"Was sind Datentypen?"})}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Beispiel Registrierung"}),(0,c.jsx)("aside",{className:"notes",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Vorname, Nachname"}),(0,c.jsx)("li",{children:"Hausnummer, PLZ"}),(0,c.jsx)("li",{children:"AGB akzeptiert, Newsletter abonniert"}),(0,c.jsx)("li",{children:"Geburtsdatum"})]})})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Wahrheitswerte"}),(0,c.jsxs)("table",{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Datentyp"}),(0,c.jsx)("th",{children:"Gr\xf6\xdfe"}),(0,c.jsx)("th",{children:"Wertebereich"})]})}),(0,c.jsx)("tbody",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"boolean"}),(0,c.jsx)("td",{children:"1 Byte"}),(0,c.jsx)("td",{children:"true, false"})]})})]})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Ganzzahlen"}),(0,c.jsxs)("table",{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Datentyp"}),(0,c.jsx)("th",{children:"Gr\xf6\xdfe"}),(0,c.jsx)("th",{children:"Wertebereich"})]})}),(0,c.jsxs)("tbody",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"byte"}),(0,c.jsx)("td",{children:"1 Byte"}),(0,c.jsx)("td",{children:"-128 bis +127"})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"short"}),(0,c.jsx)("td",{children:"2 Byte"}),(0,c.jsx)("td",{children:"-32.768 bis +32.767"})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"int"}),(0,c.jsx)("td",{children:"4 Byte"}),(0,c.jsx)("td",{children:"-2.1 Mrd bis +2.1 Mrd"})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"long"}),(0,c.jsx)("td",{children:"8 Byte"}),(0,c.jsx)("td",{children:"-9.2 Trill bis + 9.2 Trill"})]})]})]})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Gleitkommazahlen"}),(0,c.jsxs)("table",{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Datentyp"}),(0,c.jsx)("th",{children:"Gr\xf6\xdfe"}),(0,c.jsx)("th",{children:"Wertebereich"})]})}),(0,c.jsxs)("tbody",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"float"}),(0,c.jsx)("td",{children:"4 Byte"}),(0,c.jsxs)("td",{children:["-3,4*10",(0,c.jsx)("sup",{children:"38"})," bis 3,4*10",(0,c.jsx)("sup",{children:"38"})]})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"double"}),(0,c.jsx)("td",{children:"8 Byte"}),(0,c.jsxs)("td",{children:["-1,7*10",(0,c.jsx)("sup",{children:"308"})," bis 1,7*10",(0,c.jsx)("sup",{children:"308"})]})]})]})]})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Zeichen"}),(0,c.jsxs)("table",{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Datentyp"}),(0,c.jsx)("th",{children:"Gr\xf6\xdfe"}),(0,c.jsx)("th",{children:"Wertebereich"})]})}),(0,c.jsxs)("tbody",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"char"}),(0,c.jsx)("td",{children:"2 Byte"}),(0,c.jsx)("td",{children:"\\u0000 bis \\uFFFF"})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"String"}),(0,c.jsx)("td",{children:"variable Gr\xf6\xdfe"}),(0,c.jsx)("td",{children:"jedes einzelne Zeichen wie bei char"})]})]})]})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Primitive und komplexe Datentypen"}),(0,c.jsx)("p",{className:"fragment",children:"Primitive Datentypen haben keine Methoden."}),(0,c.jsxs)("p",{className:"fragment",children:[(0,c.jsx)("strong",{children:"String"})," ist kein primitiver Datentyp"]})]})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("section",{children:(0,c.jsx)("h2",{children:"Was sind Datenobjekte?"})}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Eigenschaften"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"fragment",children:"Platzhalter, um Werte zwischenzuspeichern"}),(0,c.jsx)("li",{className:"fragment",children:"werden durch einen Bezeichner und Datentyp deklariert"}),(0,c.jsx)("li",{className:"fragment",children:"werden durch einen Wert initialisiert"})]})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Realisierung"}),(0,c.jsx)("pre",{className:"fragment",children:(0,c.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"String myName; // &rarr; Deklaration\n"}})}),(0,c.jsx)("pre",{className:"fragment",children:(0,c.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'myName = "Steffen"; // &rarr; Initialisierung\n'}})}),(0,c.jsx)("pre",{className:"fragment",children:(0,c.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'String myName = "Steffen"; // &rarr; Zusammenfassung\n'}})})]}),(0,c.jsx)("section",{children:(0,c.jsx)("h2",{children:"Demo Deklaration & Initialisierung"})})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("section",{children:(0,c.jsx)("h2",{children:"Operationen mit Datentypen"})}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"double in int konvertieren"}),(0,c.jsx)("p",{children:"Beim Konvertieren von double zu int wird immer abgerundet."})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Beispiel double in int"}),(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"double doubleNumber = 3.5;\nint intNumber = (int) doubleNumber;\nSystem.out.println(intNumber); // gibt 3 aus"}})})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Hilfsmethoden der Klasse String"}),(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'String name = "Steffen";\nchar buchstabe = name.charAt(2);\nSystem.out.println(buchstabe); // gibt "e" aus'}})})]})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{children:"Zusammenfassung"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"fragment",children:(0,c.jsx)(l.A,{to:"/documentation/class-structure#die-main-methode",children:"Die main Methode"})}),(0,c.jsx)("li",{className:"fragment",children:(0,c.jsx)(l.A,{to:"/documentation/data-types",children:"Datentypen"})}),(0,c.jsx)("li",{className:"fragment",children:(0,c.jsx)(l.A,{to:"/documentation/data-objects",children:"Datenobjekte"})})]})]})]})}}}]);