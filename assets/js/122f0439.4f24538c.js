"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5428],{47098:(e,n,s)=>{s.d(n,{Z:()=>a});var i=s(67294),l=s(85893);function a(e){let{children:n,initSlides:s,width:a=null,height:r=null}=e;return(0,i.useEffect)((()=>{s()})),(0,l.jsx)("div",{className:"reveal reveal-viewport",style:{width:a??"100vw",height:r??"100vh"},children:(0,l.jsx)("div",{className:"slides",children:n})})}},63942:(e,n,s)=>{s.d(n,{O:()=>i});const i=()=>{const e=s(42199),n=s(87251),i=s(60977),l=s(12489);new(s(29197))({plugins:[e,n,i,l]}).initialize({hash:!0})}},12590:(e,n,s)=>{s.r(n),s.d(n,{default:()=>r});var i=s(47098),l=s(63942),a=s(85893);function r(){return(0,a.jsxs)(i.Z,{initSlides:l.O,children:[(0,a.jsx)("section",{children:(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Agenda"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Records"}),(0,a.jsx)("li",{className:"fragment",children:"Optionals"})]})]})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Records"})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Records"}),(0,a.jsx)("p",{className:"fragment",children:"Ein Record ist eine Datenklasse, deren Attribute nicht ver\xe4ndert werden k\xf6nnen."}),(0,a.jsx)("p",{className:"fragment",children:"Eine Datenklasse hat somit finale Attribute und Getter."})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Beispiel Datenklasse Dog I"}),(0,a.jsx)("pre",{className:"fragment",children:(0,a.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n final String name;\n final int age;\n\n public Dog(String name, int age) {\n  this.name = name;\n  this.age = age;\n }\n\n public String getName() {\n  return name;\n }\n// ...\n"}})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Beispiel Datenklasse Dog II"}),(0,a.jsx)("pre",{className:"fragment",children:(0,a.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"// ...\n public int getAge() {\n  return age;\n }\n// weitere Methoden siehe Doku\n}\n"}})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Beispiel Record Dog"}),(0,a.jsx)("pre",{className:"fragment",children:(0,a.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public record Dog(String name, int age) {}\n"}})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Record"}),(0,a.jsx)("p",{className:"fragment",children:"Da ein Record von der Record-Klasse erbt, kann nicht von einer anderen Klasse geerbt werden."}),(0,a.jsx)("p",{className:"fragment",children:"Ein Record kann jedoch weitere Methoden haben und beliebig viele Schnittstellen implementieren."})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Record - Gratis Methoden"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Konstruktor"}),(0,a.jsx)("li",{className:"fragment",children:"Getter"}),(0,a.jsx)("li",{className:"fragment",children:"Equals"}),(0,a.jsx)("li",{className:"fragment",children:"hashCode"}),(0,a.jsx)("li",{className:"fragment",children:"toString"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Demo - Record vs Cat I"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Cat Klasse"}),(0,a.jsx)("li",{className:"fragment",children:"Dog Record"}),(0,a.jsx)("li",{className:"fragment",children:"toString"}),(0,a.jsx)("li",{className:"fragment",children:"equals - Vergleich 2 Katzen"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Was ist die Methode equals?"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Jede Klasse erbt implizit von der Klasse Object"}),(0,a.jsx)("li",{className:"fragment",children:"standardm\xe4\xdfig Referenzvergleich"}),(0,a.jsx)("li",{className:"fragment",children:"equals muss selber \xfcberschrieben werden"})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Demo - Record vs Cat II"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"equals - Cat"}),(0,a.jsx)("li",{className:"fragment",children:"height - Attribut"}),(0,a.jsx)("li",{className:"fragment",children:"isBig - Methode Record"})]})]}),(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Frag jetzt!"})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Optionals"})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Optional - Klasse"}),(0,a.jsx)("p",{className:"fragment",children:"Mit Hilfe der Optional Klasse kann man NullPointerExceptions einfach behandeln."}),(0,a.jsx)("p",{className:"fragment",children:"Was sind NullPointerExceptions?"})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Null Pointer Exception I"}),(0,a.jsx)("pre",{className:"fragment",children:(0,a.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n public String name;\n public Dog(String name) {\n  this.name = name;\n }\n}\n"}})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Null Pointer Exception II"}),(0,a.jsx)("pre",{className:"fragment",children:(0,a.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'public class Main {\n  public static void main(String[] args) {\n    Dog doggo = new Dog(null);\n    doggo.name.equals("Bello"); // funktioniert nicht\n }\n}\n'}})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Optional als L\xf6sung"}),(0,a.jsx)("pre",{className:"fragment",children:(0,a.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n public Optional&lt;String&gt; name;\n public Dog(String name) {\n  this.name = Optional.ofNullable(name);\n }\n}\n"}})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Optional - Wrapper um den echten Wert"}),(0,a.jsx)("p",{className:"fragment",children:"Die Optional Klasse verpackt den echten Wert hinter Methoden."}),(0,a.jsx)("p",{className:"fragment",children:"Mithilfe von Methoden kann \xfcberpr\xfcft werden, ob ein Wert Null ist oder nicht."}),(0,a.jsx)("p",{className:"fragment",children:"Mit Lambdafunktionen kann abh\xe4ngig von der Pr\xe4senz des Wertes unterschiedliche Logik ausgef\xfchrt werden."})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Optional - Methoden I"}),(0,a.jsx)("pre",{className:"fragment",children:(0,a.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'public class Main {\n  public static void main(String[] args) {\n    Optional&lt;String&gt; name = Name.createName();\n    if(name.isPresent()) {\n      System.out.println(name.get());\n    }\n    if(name.isEmpty()) {\n      System.out.println("No Name");\n    }\n }\n}\n'}})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Optional - Methoden II"}),(0,a.jsx)("pre",{className:"fragment",children:(0,a.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'public class Main {\n  public static void main(String[] args) {\n    Optional&lt;String&gt; name = Name.createName();\n    name.ifPresent((value) -> System.out.println(value));\n    name.ifPresentOrElse(\n      (value) -> System.out.println(value),\n      () -> System.out.println("No Name")\n    );\n  }\n}\n'}})})]}),(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Frag jetzt!"})}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Demo"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Human Middlename"}),(0,a.jsx)("li",{className:"fragment",children:"University Search Student"})]})]}),(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"Frag jetzt!"})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{children:"Rest of the Day"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"fragment",children:"Wiederholung Java I"}),(0,a.jsx)("li",{className:"fragment",children:"Innere Klassen"})]})]})]})}}}]);