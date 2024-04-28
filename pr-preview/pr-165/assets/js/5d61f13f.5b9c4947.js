"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7639],{91575:(e,n,i)=>{i.d(n,{A:()=>t});var s=i(96540),r=i(74848);function t(e){let{children:n,initSlides:i,width:t=null,height:l=null}=e;return(0,s.useEffect)((()=>{i()})),(0,r.jsx)("div",{className:"reveal reveal-viewport",style:{width:t??"100vw",height:l??"100vh"},children:(0,r.jsx)("div",{className:"slides",children:n})})}},99845:(e,n,i)=>{i.d(n,{i:()=>s});const s=()=>{const e=i(38182),n=i(72186),s=i(13504),r=i(93558);new(i(89665))({plugins:[e,n,s,r]}).initialize({hash:!0})}},70144:(e,n,i)=>{i.r(n),i.d(n,{default:()=>a});var s=i(28774),r=i(91575),t=i(99845),l=i(74848);function a(){return(0,l.jsxs)(r.A,{initSlides:t.i,children:[(0,l.jsx)("section",{children:(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Agenda"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Intro"}),(0,l.jsx)("li",{className:"fragment",children:"Problemfelder"}),(0,l.jsx)("li",{className:"fragment",children:"Erwartungen an DSA"}),(0,l.jsx)("li",{className:"fragment",children:"Landau-Notation"}),(0,l.jsx)("li",{className:"fragment",children:"Fallbeispiel Problem"})]})]})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Intro"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Was ist ein Algorithmus?"}),(0,l.jsx)("p",{className:"fragment",children:"systematische Vorgehensweise zur L\xf6sung eines Problems"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Charakteristika"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Das Verfahren muss in einem endlichen Text eindeutig beschreibbar sein.",children:"Finitheit"}),(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Jeder Schritt des Verfahrens muss tats\xe4chlich ausf\xfchrbar sein.",children:"Ausf\xfchrbarkeit"}),(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Das Verfahren darf zu jedem Zeitpunkt nur endlich viel Speicherplatz ben\xf6tigen. (Space Complexity)",children:"Dynamische Finitheit"}),(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Das Verfahren darf nur endlich viele Schritte ben\xf6tigen. (Time Complexity)",children:"Terminierung"}),(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Der Algorithmus muss bei denselben Voraussetzungen das gleiche Ergebnis liefern.",children:"Determiniertheit"}),(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Die n\xe4chste anzuwendende Regel im Verfahren ist zu jedem Zeitpunkt eindeutig definiert.",children:"Determinismus"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Was ist eine Datenstruktur?"}),(0,l.jsx)("p",{className:"fragment",children:"spezifische Anordung von Daten zur effizienten Verwaltung eines Problems"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Charakteristika"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Die Gr\xf6\xdfe wird zu Beginn einmalig festgelegt.",children:"statisch"}),(0,l.jsx)("li",{tabIndex:0,"data-tooltip":"Die Gr\xf6\xdfe ist ver\xe4nderbar.",children:"dynamisch"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Kann man Datenstrukturen und Algorithmen trennen?"}),(0,l.jsx)("p",{className:"fragment",children:"Nein nur die Kombination bringt etwas."}),(0,l.jsx)("p",{className:"fragment",children:"Was bringt ein Array ohne (\xfcber)schreiben und lesen?"}),(0,l.jsx)("p",{className:"fragment",children:"Was bringt eine for-Schleife ohne Array?"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Unsere Definition von DSA"}),(0,l.jsx)("p",{className:"fragment",children:"Ein Algorithmus (A) erzeugt, manipuliert und entfernt eine oder mehrere Datenstrukturen(DS) um ein spezifisches Problem effizient zu l\xf6sen."})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Problemfelder"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Prozessprobleme"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Suche"}),(0,l.jsx)("li",{className:"fragment",children:"Sortierung"}),(0,l.jsx)("li",{className:"fragment",children:"Verarbeitung"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Technische Probleme"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Zeitkomplexit\xe4t"}),(0,l.jsx)("li",{className:"fragment",children:"Speicherkomplexit\xe4t"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Optimum"}),(0,l.jsx)("p",{className:"fragment",children:"Das Optimum kann nur f\xfcr ein Problemfeld f\xfcr ein technisches Problem gefunden werden."}),(0,l.jsx)("p",{className:"fragment",children:"Es existiert kein Allgemeiner Algorithmus, der jedes Problem in der k\xfcrzesten Zeit mit der geringsten Speichermenge l\xf6st."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:(0,l.jsx)(s.A,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/intro",children:"Demo - Performance von Suche und Verarbeitung"})}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Erstellen einer HashMap & ArrayList"}),(0,l.jsx)("li",{className:"fragment",children:"Suchen in einer HashMap & ArrayList"}),(0,l.jsx)("li",{className:"fragment",children:"L\xf6schen in einer HashMap & ArrayList"})]})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Erwartungen an DSA"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Inhalte"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Grundlegende Praktikable Datenstrukturen"}),(0,l.jsx)("li",{className:"fragment",children:"Worst Case Szenario"}),(0,l.jsx)("li",{className:"fragment",children:"keine Beweise"}),(0,l.jsx)("li",{"data-tooltip":"IMHO!",tabIndex:0,className:"fragment",children:"kaum Coding (von euch, da Projektbericht)"}),(0,l.jsx)("li",{className:"fragment",children:"Einstieg in das Themengebiet"})]})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Landaunotation"}),(0,l.jsx)("p",{className:"foot-note",children:"wird auch Big-O Notation genannt"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Landaunotation (Big-O)"}),(0,l.jsx)("p",{className:"fragment",children:"wird verwendet um Algorithmen in Bezug auf Speicher- und Zeitanforderungen zu kategorisieren."}),(0,l.jsx)("p",{className:"fragment",children:"ist keine exakte Messung, sondern soll das Wachstum des Algorithmus generalisieren."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Warum brauchen Big-O?"}),(0,l.jsx)("p",{children:"Wenn wir wissen, welche St\xe4rken und Schw\xe4chen ein Algorithmus hat, k\xf6nnen wie den besten Algorithmus f\xfcr unser Problem nutzen."}),(0,l.jsx)("p",{className:"foot-note",children:"Ich benutz immer Big-O zum erkl\xe4ren"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Was ist Big-O?"}),(0,l.jsxs)("p",{children:["gibt an in welchem Verh\xe4ltnis ein Algorithmus abh\xe4ngig vom"," ",(0,l.jsx)("b",{children:"input"})," in Bezug auf Laufzeit und Speicher w\xe4chst"]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Beispiel f\xfcr Big-O"}),(0,l.jsx)("p",{children:"O(N)"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"10 Elemente entspricht 10 Zeiteinheiten"}),(0,l.jsx)("li",{className:"fragment",children:"20 Elemente entspricht 20 Zeiteinheiten"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Beispiel f\xfcr Big-O"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class BigO {\n  // O(N)\n  public static void method(int[] n) {\n    int sum = 0;\n    for(int i = 0; i &gt; n.length; i++) {\n      sum += n[i];\n    }\n    return sum;\n  }\n}\n"}})}),(0,l.jsx)("p",{className:"fragment",children:"Jahresgehalt eines Mitarbeiters"})]}),(0,l.jsx)("section",{"data-background-size":"contain","data-background-image":i(16103).A}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Beispiel f\xfcr Big-O"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class BigO {\n  // O(N&sup2;)\n  public static void method(int[] n) {\n    int sum = 0;\n    for(int i = 0; i &gt; n.length; i++) {\n      for(int j = 0; j &gt; n.length; j++) {\n        sum += n[j];\n      }\n    }\n    return sum;\n  }\n}\n"}})}),(0,l.jsx)("p",{className:"fragment",children:"Jahresgehalt jedes Mitarbeiters einer Abteilung"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Beispiel f\xfcr Big-O"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class BigO {\n  // O(N&sup3;)\n  public static void method(int[] n) {\n    int sum = 0;\n    for(int i = 0; i &gt; n.length; i++) {\n      for(int j = 0; j &gt; n.length; j++) {\n        for(int k = 0; k &gt; n.length; k++) {\n          sum += n[k];\n        }\n      }\n    }\n    return sum;\n  }\n}\n"}})}),(0,l.jsx)("p",{className:"fragment",children:"Jahresgehalt jedes Mitarbeiters jeder Abteilung"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Big-O von diesem Code?"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class BigO {\n  public static void method(int[] n) {\n    int sum = 0;\n    for(int i = 0; i &gt; n.length; i++) {\n      sum += n[i];\n    }\n    for(int i = 0; i &gt; n.length; i++) {\n      sum += n[i];\n    }\n    return sum;\n  }\n}\n"}})}),(0,l.jsx)("p",{className:"fragment",children:"praktisch: O(2N) \u2192 O(N)"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Warum O(N) anstatt O(2N)"}),(0,l.jsxs)("table",{children:[(0,l.jsx)("th",{children:"N"}),(0,l.jsx)("th",{children:"O(10N)"}),(0,l.jsx)("th",{children:"O(N\xb2)"}),(0,l.jsxs)("tr",{className:"fragment",children:[(0,l.jsx)("td",{children:"1"}),(0,l.jsx)("td",{children:"10"}),(0,l.jsx)("td",{children:"1"})]}),(0,l.jsxs)("tr",{className:"fragment",children:[(0,l.jsx)("td",{children:"5"}),(0,l.jsx)("td",{children:"50"}),(0,l.jsx)("td",{children:"25"})]}),(0,l.jsxs)("tr",{className:"fragment",children:[(0,l.jsx)("td",{children:"100"}),(0,l.jsx)("td",{children:"1000"}),(0,l.jsx)("td",{children:"10.000"})]}),(0,l.jsxs)("tr",{className:"fragment",children:[(0,l.jsx)("td",{children:"1000"}),(0,l.jsx)("td",{children:"10.000"}),(0,l.jsx)("td",{children:"1.000.000"})]}),(0,l.jsxs)("tr",{className:"fragment",children:[(0,l.jsx)("td",{children:"10.000"}),(0,l.jsx)("td",{children:"100.000"}),(0,l.jsx)("td",{children:"100.000.000"})]})]}),(0,l.jsx)("p",{className:"fragment",children:"Konstanten k\xf6nnen ignoriert werden."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Big-O von diesem Code?"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class BigO {\n  public static void method(int[] n) {\n    int sum = 0;\n    for(int i = 0; i &gt; n.length; i++) {\n      if(sum > 9876) {\n        return sum;\n      }\n      sum += n[i];\n    }\n    return sum;\n  }\n}\n"}})}),(0,l.jsx)("p",{className:"fragment",children:"O(N) \u2192 Worst-Case-Szenario"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Unsere Regeln"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Wachstum ist abh\xe4ngig vom Input"}),(0,l.jsx)("li",{children:"Konstanten werden ignoriert"}),(0,l.jsx)("li",{children:"Worst-Case ist unser default"})]})]})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Fallbeispiel Problem"})})]})}},16103:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/big-o-complexity-4503eb9ed207279ffce06d4edeebcd51.png"}}]);