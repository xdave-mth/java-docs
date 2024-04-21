"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[365],{91575:(e,s,n)=>{n.d(s,{A:()=>l});var i=n(96540),r=n(74848);function l(e){let{children:s,initSlides:n,width:l=null,height:t=null}=e;return(0,i.useEffect)((()=>{n()})),(0,r.jsx)("div",{className:"reveal reveal-viewport",style:{width:l??"100vw",height:t??"100vh"},children:(0,r.jsx)("div",{className:"slides",children:s})})}},99845:(e,s,n)=>{n.d(s,{i:()=>i});const i=()=>{const e=n(38182),s=n(72186),i=n(13504),r=n(93558);new(n(89665))({plugins:[e,s,i,r]}).initialize({hash:!0})}},77469:(e,s,n)=>{n.r(s),n.d(s,{default:()=>c});var i=n(28774),r=n(91575),l=n(99845),t=n(74848);function c(){return(0,t.jsxs)(r.A,{initSlides:l.i,children:[(0,t.jsxs)("section",{children:[(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:"Sortieralgorithmen"})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Agenda"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Intro"}),(0,t.jsx)("li",{className:"fragment",children:"Selection Sort"}),(0,t.jsx)("li",{className:"fragment",children:"Bubble Sort"}),(0,t.jsx)("li",{className:"fragment",children:"Insertion Sort"}),(0,t.jsx)("li",{className:"fragment",children:"Quick Sort"}),(0,t.jsx)("li",{className:"fragment",children:"Merge Sort"})]})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:"Intro"})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Was ist Sortieren?"}),(0,t.jsx)("p",{className:"fragment",children:"Neuordnung eines gegebenen Arrays oder einer Liste von Elementen nach einem Vergleichsoperator f\xfcr die Elemente"}),(0,t.jsx)("p",{className:"fragment",children:"Alle Elemente werden entweder in aufsteigender oder in absteigender Reihenfolge neu angeordnet."})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Begriffe"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{tabIndex:0,"data-tooltip":"Ein In-place Sortieralgorithmus tausch Elemente innerhalb der Liste aus.",children:"In-place sorting"}),(0,t.jsx)("li",{tabIndex:0,"data-tooltip":"Der komplette Input wird im lokalen Speicher gehalten. Der Input kann nicht gr\xf6\xdfer sein als der lokale Speicher.",children:"Internal Sorting"}),(0,t.jsx)("li",{tabIndex:0,"data-tooltip":"Der komplette Input muss nicht im lokalen Speicher gehalten werden. Der Input kann gr\xf6\xdfer sein als der lokale Speicher.",children:"External Sorting"}),(0,t.jsx)("li",{tabIndex:0,"data-tooltip":"Falls zwei Elemente 'gleich' sind, wird die urspr\xfcngliche Reihenfolge beibehalten.",children:"Stable Sorting"}),(0,t.jsx)("li",{tabIndex:0,"data-tooltip":"Falls zwei Elemente 'gleich' sind, wird die urspr\xfcngliche Reihenfolge nicht beibehalten.",children:"Unstable Sorting"})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Stable und Unstable Sorting"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"\ud83c\udcc5 \ud83c\udcd5 \ud83c\udcb2 \ud83c\udcaa \u2192 Input"}),(0,t.jsx)("li",{className:"fragment",children:"\ud83c\udcb2 \ud83c\udcc5 \ud83c\udcd5 \ud83c\udcaa \u2192 Stabil"}),(0,t.jsx)("li",{className:"fragment",children:"\ud83c\udcb2 \ud83c\udcd5 \ud83c\udcc5 \ud83c\udcaa \u2192 Unstabil"})]}),(0,t.jsx)("p",{className:"foot-note fragment",children:"Ein stabiler Sortieralgorithmus ver\xe4ndert nicht die urspr\xfcngliche Reihenfolge der 5er-Karten"})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Anwendungen von Sortieralgorithmen"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{tabIndex:0,"data-tooltip":"Bin\xe4rsuche, Interpolationssuche etc.",children:"Suchalgorithmen"}),(0,t.jsx)("li",{tabIndex:0,"data-tooltip":"Abfragen, Indizes etc.",children:"Datenbankoptimierung"}),(0,t.jsx)("li",{tabIndex:0,"data-tooltip":"Muster, Trends etc.",children:"Datenanalyse"}),(0,t.jsx)("li",{tabIndex:0,"data-tooltip":"Scheduler, Arbeitsspeicherverwaltung etc.",children:"Betriebssysteme"})]})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:"Selection Sort"})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Funktionsweise"}),(0,t.jsx)("p",{children:"Beim Selection Sort wird wiederholt das kleinste Element aus dem unsortierten Teil der Liste ausgew\xe4hlt und in den sortierten Teil der Liste verschoben."}),(0,t.jsx)("p",{className:"foot-note fragment",children:"Beispiel: 69, 27, 11, 28, 2"})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Theoretisches Konzept"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Man setzt den Index auf Low"}),(0,t.jsx)("li",{className:"fragment",children:"Man durchsucht den restlichen Teil des Arrays nach dem kleinsten Element"}),(0,t.jsx)("li",{className:"fragment",children:"Man tauscht das kleinste Element mit dem Element am Index"}),(0,t.jsx)("li",{className:"fragment",children:"Index inkrementieren und wiederholen solange, bis alle Elemente sortiert sind."})]})]}),(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:(0,t.jsx)(i.A,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/sort/SelectionSort.java",children:"Demo - Selection Sort"})})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Performance"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Zeitkomplexit\xe4t: O(N\xb2)"}),(0,t.jsx)("li",{className:"fragment",children:"Speicherkomplexit\xe4t: O(1)"})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Zusammenfassung"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Einfach zu implementieren"}),(0,t.jsx)("li",{className:"fragment","data-tooltip":"Beispiel: \ud83c\udcb4 \ud83c\udcb5 \ud83c\udcb6 \ud83c\udcd4 \ud83c\udcb2 \u2192 \ud83c\udcb2 \ud83c\udcd4 \ud83c\udcb4 \ud83c\udcb5 \ud83c\udcb6  ",tabIndex:0,children:"Nicht stabil"})]})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:"Bubble Sort"})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Funktionsweise"}),(0,t.jsx)("p",{children:"Beim Bubble Sort wird wiederholt das gr\xf6\xdfte Element aus dem unsortierten Teil der Liste in den sortierten Teil der Liste verschoben."}),(0,t.jsx)("p",{className:"foot-note fragment",children:"Beispiel: 69, 27, 11, 28, 2"})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Theoretisches Konzept"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Man setzt den Index auf Low"}),(0,t.jsxs)("li",{className:"fragment",children:["Man durchl\xe4uft den unsortierten Teil des Arrays"," "]}),(0,t.jsx)("li",{className:"fragment",children:"Ist das aktuelle Element am Index gr\xf6\xdfer als das n\xe4chste Element, werden Sie getauscht."}),(0,t.jsx)("li",{className:"fragment",children:"High dekrementieren und wiederholen solange, bis alle Elemente sortiert sind."})]})]}),(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:(0,t.jsx)(i.A,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/sort/BubbleSort.java",children:"Demo - Bubble Sort"})})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Performance"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Zeitkomplexit\xe4t: O(N\xb2)"}),(0,t.jsx)("li",{className:"fragment",children:"Speicherkomplexit\xe4t: O(1)"})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Zusammenfassung"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Einfach zu implementieren"}),(0,t.jsx)("li",{className:"fragment","data-tooltip":"Beispiel: \ud83c\udcb4 \ud83c\udcb5 \ud83c\udcb6 \ud83c\udcd4 \ud83c\udcb2 \u2192 \ud83c\udcb2 \ud83c\udcb4 \ud83c\udcd4 \ud83c\udcb5 \ud83c\udcb6  ",tabIndex:0,children:"Stabil"})]})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:"Insertion Sort"})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Funktionsweise"}),(0,t.jsx)("p",{children:"Beim Insertion Sort wird wiederholt das n\xe4chste Element aus dem unsortierten Teil der Liste in die richtige Stelle des sortierten Teils der Liste verschoben."}),(0,t.jsx)("p",{className:"foot-note fragment",children:"Beispiel: 69, 27, 11, 28, 2"})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Theoretisches Konzept"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment","data-tooltip":"Das erste Element ist immer schon sortiert.",tabIndex:0,children:"Man setzt den sortedHighIndex auf Low + 1"}),(0,t.jsx)("li",{className:"fragment",children:"Man durchl\xe4uft den unsortierten Teil des Arrays"}),(0,t.jsx)("li",{className:"fragment",children:"Ist das aktuelle Element am Index kleiner als das vorherige Element, werden Sie getauscht."}),(0,t.jsx)("li",{className:"fragment",children:"sortedHigh dekrementieren und wiederholen solange, bis Element an der richtigen Stelle sortiert ist"})]})]}),(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:(0,t.jsx)(i.A,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/sort/InsertionSort.java",children:"Demo - Insertion Sort"})})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Performance"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Zeitkomplexit\xe4t: O(N\xb2)"}),(0,t.jsx)("li",{className:"fragment",children:"Speicherkomplexit\xe4t: O(1)"})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Zusammenfassung"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Einfach zu implementieren"}),(0,t.jsx)("li",{className:"fragment","data-tooltip":"Beispiel: \ud83c\udcb4 \ud83c\udcb5 \ud83c\udcb6 \ud83c\udcd4 \ud83c\udcb2 \u2192 \ud83c\udcb2 \ud83c\udcb4 \ud83c\udcd4 \ud83c\udcb5 \ud83c\udcb6  ",tabIndex:0,children:"Stabil"})]})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:"Quick Sort"})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Allgemein"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Divide and Conquer"}),(0,t.jsx)("li",{className:"fragment",children:"Rekursiv"})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Funktionsweise"}),(0,t.jsx)("p",{className:"fragment",children:"Beim Quick Sort wird wiederholt der Input am freiw\xe4hlbaren Pivotindex aufgeteilt. Jedes Element wird mit dem Pivotelement verglichen. Ist es kleiner als das Pivotelement wird es in den linken Teil verschoben, ansonsten in den rechten Teil."}),(0,t.jsx)("p",{className:"fragment",children:"Anschlie\xdfend wird zuerst der linke Teil danach der rechte Teil sortiert."}),(0,t.jsx)("p",{className:"foot-note fragment",children:"Beispiel: 10, 80, 30, 90, 40, 50, 70"})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Theoretisches Konzept"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Base Case: Nur noch 1 Element \xfcbrig \u2192 return;"}),(0,t.jsx)("li",{className:"fragment",children:"Pre Recurse: Aufteilen des Arrays in Links und Rechts"}),(0,t.jsx)("li",{className:"fragment",children:"Recurse: linke Seite anschlie\xdfend rechte Seite"})]})]}),(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:(0,t.jsx)(i.A,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/sort/QuickSort.java",children:"Demo - Quick Sort"})})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Performance"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Zeitkomplexit\xe4t: O(N\xb2)"}),(0,t.jsx)("li",{className:"fragment",children:"Speicherkomplexit\xe4t: O(1)"})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Zusammenfassung"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment","data-tooltip":"Bei Best und Average Case, meistens zwischen Average und Worst Case",tabIndex:0,children:"Effizient bei gro\xdfen Datenmengen O(N log N)"}),(0,t.jsx)("li",{className:"fragment","data-tooltip":"Beispiel: \ud83c\udcb4 \ud83c\udcb5 \ud83c\udcb6 \ud83c\udcd4 \ud83c\udcb2 \u2192 \ud83c\udcb2 \ud83c\udcb4 \ud83c\udcd4 \ud83c\udcb5 \ud83c\udcb6  ",tabIndex:0,children:"Nicht stabil"})]})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:"Merge Sort"})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Allgemein"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Divide and Conquer"}),(0,t.jsx)("li",{className:"fragment",children:"Rekursiv"})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Funktionsweise"}),(0,t.jsx)("p",{className:"fragment",children:"Beim Merge Sort wird wiederholt der Input in der Mitte aufgeteilt."}),(0,t.jsx)("p",{className:"fragment",children:"Anschlie\xdfend wird zuerst der linke Teil danach der rechte Teil sortiert."}),(0,t.jsx)("p",{className:"fragment",children:"Anschlie\xdfend werden der linke und der rechte Teil zusammengef\xfchrt."}),(0,t.jsx)("p",{className:"foot-note fragment",children:"Beispiel: 69, 27, 11, 28, 2"})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Theoretisches Konzept"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Base Case: Nur noch 1 Element \xfcbrig \u2192 return;"}),(0,t.jsx)("li",{className:"fragment",children:"Pre Recurse: Aufteilen des Arrays in Links und Rechts"}),(0,t.jsx)("li",{className:"fragment",children:"Recurse: linke Seite anschlie\xdfend rechte Seite"}),(0,t.jsx)("li",{className:"fragment",children:"Post Recurse: linke Seite und rechte Seite zusammenf\xfchren"})]})]}),(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:(0,t.jsx)(i.A,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/sort/MergeSort.java",children:"Demo - Merge Sort"})})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Performance"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Zeitkomplexit\xe4t: O(N log N)"}),(0,t.jsx)("li",{className:"fragment",children:"Speicherkomplexit\xe4t: O(N)"})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Zusammenfassung"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment","data-tooltip":"Immer \ud83d\ude80",tabIndex:0,children:"Effizient bei gro\xdfen Datenmengen O(N log N)"}),(0,t.jsx)("li",{className:"fragment","data-tooltip":"Beispiel: \ud83c\udcb4 \ud83c\udcb5 \ud83c\udcb6 \ud83c\udcd4 \ud83c\udcb2 \u2192 \ud83c\udcb2 \ud83c\udcb4 \ud83c\udcd4 \ud83c\udcb5 \ud83c\udcb6  ",tabIndex:0,children:"Stabil"}),(0,t.jsx)("li",{className:"fragment","data-tooltip":"Es wird immer tempor\xe4r ein Kopie der Subarrays erstellt",tabIndex:0,children:"Speicherbedarf is Hoch"}),(0,t.jsx)("li",{className:"fragment","data-tooltip":"Es wird immer eine Kopie erstellt und anschlie\xdfend \xfcberschrieben",tabIndex:0,children:"Kein In-Place Sort"})]})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("section",{children:(0,t.jsx)("h2",{children:"Vergleich Sortieralgorithmen"})}),(0,t.jsxs)("section",{children:[(0,t.jsxs)("table",{children:[(0,t.jsx)("th",{children:"Algorithmus"}),(0,t.jsx)("th",{children:"Best "}),(0,t.jsx)("th",{children:"Average "}),(0,t.jsx)("th",{children:"Worst "}),(0,t.jsxs)("tr",{className:"fragment",children:[(0,t.jsx)("td",{children:"Selection Sort"}),(0,t.jsx)("td",{children:"O(N\xb2)"}),(0,t.jsx)("td",{children:"O(N\xb2)"}),(0,t.jsx)("td",{children:"O(N\xb2)"})]}),(0,t.jsxs)("tr",{className:"fragment",children:[(0,t.jsx)("td",{children:"Bubble Sort"}),(0,t.jsx)("td",{children:"O(N)"}),(0,t.jsx)("td",{children:"O(N\xb2)"}),(0,t.jsx)("td",{children:"O(N\xb2)"})]}),(0,t.jsxs)("tr",{className:"fragment",children:[(0,t.jsx)("td",{children:"Insertion Sort"}),(0,t.jsx)("td",{children:"O(N)"}),(0,t.jsx)("td",{children:"O(N\xb2)"}),(0,t.jsx)("td",{children:"O(N\xb2)"})]}),(0,t.jsxs)("tr",{className:"fragment",children:[(0,t.jsx)("td",{children:"Quick Sort"}),(0,t.jsx)("td",{children:"O(N log N)"}),(0,t.jsx)("td",{children:"O(N log N)"}),(0,t.jsx)("td",{children:"O(N\xb2)"})]}),(0,t.jsxs)("tr",{className:"fragment",children:[(0,t.jsx)("td",{children:"Merge Sort"}),(0,t.jsx)("td",{children:"O(N log N)"}),(0,t.jsx)("td",{children:"O(N log N)"}),(0,t.jsx)("td",{children:"O(N log N)"})]})]}),(0,t.jsx)("p",{className:"fragment foot-note",children:"Merge Sort hat eine Speicherkomplexit\xe4t von O(N)"})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Rest of the day"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"fragment",children:"Demo Code verstehen, debuggen, implementieren (Optional)"}),(0,t.jsx)("li",{className:"fragment",children:"Sort mit eigenem Problem (Optional)"})]})]})]})}}}]);