"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7402],{47098:(e,s,n)=>{n.d(s,{Z:()=>l});var r=n(67294),i=n(85893);function l(e){let{children:s,initSlides:n,width:l=null,height:a=null}=e;return(0,r.useEffect)((()=>{n()})),(0,i.jsx)("div",{className:"reveal reveal-viewport",style:{width:l??"100vw",height:a??"100vh"},children:(0,i.jsx)("div",{className:"slides",children:s})})}},63942:(e,s,n)=>{n.d(s,{O:()=>r});const r=()=>{const e=n(42199),s=n(87251),r=n(60977),i=n(12489);new(n(29197))({plugins:[e,s,r,i]}).initialize({hash:!0})}},89367:(e,s,n)=>{n.d(s,{K:()=>i});n(67294);var r=n(85893);const i=()=>(0,r.jsx)("p",{style:{fontSize:"8px",position:"absolute",bottom:0,right:0},children:"*NKR"})},4386:(e,s,n)=>{n.r(s),n.d(s,{default:()=>c});var r=n(47098),i=n(63942),l=n(89367),a=n(85893);function c(){return(0,a.jsxs)(r.Z,{initSlides:i.O,children:[(0,a.jsx)("section",{children:(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Agenda"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Wiederholung"}),(0,a.jsx)("li",{className:"fragment",children:"variable Argumentlisten"}),(0,a.jsx)("li",{className:"fragment",children:"Interface"}),(0,a.jsx)("li",{className:"fragment",children:"Komparator"}),(0,a.jsx)("li",{className:"fragment",children:"Zusammenfassung"})]})]})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Wiederholung"})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"abstract Modifier"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"abstrakte Klassen"}),(0,a.jsx)("li",{className:"fragment",children:"abstrakte Methoden"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"final Modifier"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"finale Klassen"}),(0,a.jsx)("li",{className:"fragment",children:"finale Methoden"})]})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Variable Argumentlisten*"}),(0,a.jsx)("p",{children:"werden als VarArgs bezeichnet"}),(0,a.jsx)(l.K,{})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"VarArgs"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"stehen am Ende der Parameterliste"}),(0,a.jsx)("li",{className:"fragment",children:"nur ein VarArgs Parameter je Methode"}),(0,a.jsx)("li",{className:"fragment",children:"VarArgs Parameter ist ein Array von einem Datentyp"}),(0,a.jsx)("li",{className:"fragment",children:"Argumente werden kommagetrennt definiert"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("p",{children:"Implementieren einer Methode mit VarArgs"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"java","data-line-numbers":"1-5|1|2-4",dangerouslySetInnerHTML:{__html:"public void addCars(Car... cars) {\n  for(Car car : cars) {\n    System.out.println(car.getBrand());\n  }\n}"}})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("p",{children:"Verwenden einer Methode mit VarArgs"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"java","data-line-numbers":"1-5|3-4",dangerouslySetInnerHTML:{__html:"public static void main(String[] args) {\n  //...\n  carManager.addCars(new Car(), new Car());\n  carManager.addCars(new Car());\n  //...\n}"}})})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Interfaces"})}),(0,a.jsx)("section",{children:(0,a.jsx)("p",{children:"Wie kann man Dogs und Cats in einer Liste speichern?"})}),(0,a.jsx)("section",{children:(0,a.jsx)("p",{children:"Wie kann man Baby, Child und Adult in einer Liste speichern?"})}),(0,a.jsx)("section",{children:(0,a.jsx)("p",{children:"Wie kann man Dogs, Cats, Baby, Child und Adult in einer Liste speichern?"})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("p",{children:"Limitierungen von abstrakten Klassen"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"komplexe Vererbungshierarchie"}),(0,a.jsx)("li",{className:"fragment",children:"keine Mehrfachvererbung"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Interfaces"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"definieren Methoden"}),(0,a.jsx)("li",{className:"fragment",children:"werden von Klassen implementiert"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Zweck von Interfaces"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Unabh\xe4ngig von Vererbung"}),(0,a.jsx)("li",{className:"fragment",children:"Verstecken von Implementierungsdetails"}),(0,a.jsx)("li",{className:"fragment",children:"Schnittstelle zwischen Ersteller und Verwender"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Ersteller des Warenkorbs"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Beschreibung anzeigen"}),(0,a.jsx)("li",{className:"fragment",children:"Einzelpreis ermitteln"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Realisierung des Warenkorbs"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Warenkorb Modul definiert Interface"}),(0,a.jsx)("li",{className:"fragment",children:"Artikel implementieren das Interface"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Demo Interface"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"ShoppingCart"}),(0,a.jsx)("li",{className:"fragment",children:"Dog und Cat implementieren Interface"}),(0,a.jsx)("li",{className:"fragment",children:"ToDo Liste"}),(0,a.jsx)("li",{className:"fragment",children:"Dog und Cat implementieren Interface"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"weitere Anwendungsgebiete*"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Dependency Injection"}),(0,a.jsx)("li",{className:"fragment",children:"Unit Tests"})]}),(0,a.jsx)("div",{children:(0,a.jsx)(l.K,{})})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Komparatoren"})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Zweck von Komparatoren"}),(0,a.jsx)("p",{children:"Sortieren von Listen"})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Funktionsweise"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Vergleichen von zwei Objekten"}),(0,a.jsx)("li",{className:"fragment",children:"erstes Element davor einordnen: -1"}),(0,a.jsx)("li",{className:"fragment",children:"erstes Element dahinter einordnen: 1"}),(0,a.jsx)("li",{className:"fragment",children:"erstes Element gleich einordnen: 0"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Welche Interfaces gibt es?"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Comparable"}),(0,a.jsx)("li",{className:"fragment",children:"Comparator"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Comparable"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"definiert die Standardsortierung"}),(0,a.jsx)("li",{className:"fragment",children:"Implementierung in der Datenklasse"}),(0,a.jsx)("li",{className:"fragment",children:"Bsp. Human nach Alter sortieren"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Comparator"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"definiert eine Sortierung"}),(0,a.jsx)("li",{className:"fragment",children:"Implementierung in eigener Klasse"}),(0,a.jsx)("li",{className:"fragment",children:"Bsp. AgeComparator, NameComparator"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Wie sortiert man eine Liste?"}),(0,a.jsx)("pre",{className:"fragment",children:(0,a.jsx)("code",{className:"java","data-line-numbers":"2|3|4",dangerouslySetInnerHTML:{__html:"// ...\nArrayList&lt;Human&gt; humans = new ArrayList&lt;&gt;();\nCollections.sort(humans);\nCollections.sort(humans, new AgeComparator());\n// ..."}})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Demo Komparatoren"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Human Comparable"}),(0,a.jsx)("li",{className:"fragment",children:"AgeComparator"})]})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Zusammenfassung"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"variable Argumentlisten"}),(0,a.jsx)("li",{className:"fragment",children:"Interfaces"}),(0,a.jsx)("li",{className:"fragment",children:"Komparatoren"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Rest of the day"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Interfaces 01"}),(0,a.jsx)("li",{className:"fragment",children:"Comparators 01 - 02"})]})]})]})]})}}}]);