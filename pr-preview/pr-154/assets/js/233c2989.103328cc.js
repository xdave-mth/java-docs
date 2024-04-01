"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5382],{91575:(e,n,s)=>{s.d(n,{A:()=>l});var i=s(96540),r=s(74848);function l(e){let{children:n,initSlides:s,width:l=null,height:t=null}=e;return(0,i.useEffect)((()=>{s()})),(0,r.jsx)("div",{className:"reveal reveal-viewport",style:{width:l??"100vw",height:t??"100vh"},children:(0,r.jsx)("div",{className:"slides",children:n})})}},99845:(e,n,s)=>{s.d(n,{i:()=>i});const i=()=>{const e=s(38182),n=s(72186),i=s(13504),r=s(93558);new(s(89665))({plugins:[e,n,i,r]}).initialize({hash:!0})}},90332:(e,n,s)=>{s.r(n),s.d(n,{default:()=>t});var i=s(91575),r=s(99845),l=s(74848);function t(){return(0,l.jsxs)(i.A,{initSlides:r.i,children:[(0,l.jsx)("section",{children:(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Agenda"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Wiederholung"}),(0,l.jsx)("li",{className:"fragment",children:"Klausurbesprechung"}),(0,l.jsx)("li",{className:"fragment",children:"Fortgeschrittene Programmierung"})]})]})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Wiederholung"})}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Datentypen"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Primitive Datentypen"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"boolean"}),(0,l.jsxs)("li",{className:"fragment",children:["byte, short, ",(0,l.jsx)("b",{children:"int"}),", long"]}),(0,l.jsxs)("li",{className:"fragment",children:["float, ",(0,l.jsx)("b",{children:"double"})]}),(0,l.jsx)("li",{className:"fragment",children:"char"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Komplexe Datentypen"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"String"}),(0,l.jsx)("li",{className:"fragment",children:"jede Klasse"})]}),(0,l.jsx)("p",{className:"fragment",children:"Tipp: Primitive Datentypen haben keine Methoden"})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Methoden"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Calculator {\n\n  public static int add(int x, int y) {\n    return x + y;\n  }\n\n}\n"}})}),(0,l.jsx)("span",{className:"fragment fade-in-then-out",children:"R\xfcckgabetyp"}),(0,l.jsx)("span",{className:"fragment fade-in-then-out",children:"Bezeichner"}),(0,l.jsx)("span",{className:"fragment fade-in-then-out",children:"Parameter"}),(0,l.jsx)("span",{className:"fragment fade-in-then-out",children:"Methodenrumpf"})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Operatoren"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Arithmetische Operatoren"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    int a = 3;\n    int b = 2;\n    int addition = a + b; // 5;\n    int subtraktion = a - b; // 1;\n    int multiplikation = a * b; // 6;\n    int division = a / b; // 1, nicht 1.5! Warum?;\n    int restwert = a % b; // 1;\n  }\n//...\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Arithmetische Operatoren II"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    int a = 3;\n    System.out.println(a++); // Log: 3, Wert: 4\n    System.out.println(++a); // Log: 5, Wert: 5\n    System.out.println(--a); // Log: 4, Wert: 4\n    System.out.println(a--); // Log: 4, Wert: 3\n  }\n//...\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Vergleichsoperatoren"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    boolean result;\n    result = 3 == 2; // false \n    result = 3 != 2; // true \n    result = 3 &gt; 2; // true \n    result = 2 &gt;= 2; // true \n    result = 2 &lt; 2; // false \n    result = 2 &lt= 2; // true \n  }\n//...\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Logische Operatoren I - AND"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    boolean t = true;\n    boolean f = false;\n    boolean result;\n\n    result = t && f; // false \n    result = t && t; // true \n    result = f && t; // false \n    result = f && f; // false \n  }\n//...\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Logische Operatoren II - OR"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    boolean t = true;\n    boolean f = false;\n    boolean result;\n\n    result = f || t; // true \n    result = t || f; // true \n    result = f || f; // false \n    result = t || t; // true \n  }\n//...\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Logische Operatoren III - NOT"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    boolean t = true;\n    boolean f = false;\n    boolean result;\n\n    result = !f; // true \n    result = !t; // false \n  }\n//...\n"}})})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Kontrollstrukturen"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"if"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"//...\n  public static void main(String[] args) {\n    int age = 18;\n\n    if(age >= 18) {\n      // Ich krieg alles, was ich will\n    } else if(age >= 16) {\n      // Ich krieg Bier, Wein, Most &lt;3 und Sekt \n    } else  {\n      // Ich krieg Coca Zero\n    } \n  }\n//...\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"switch"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static void greet(String gender) {\n    switch(gender) {\n      case 'm':\n      case 'M':\n        // falls man ein Mann ist\n        break; \n      case 'F':\n        // falls man eine Frau ist\n        break; \n      default :\n        // falls man divers ist\n        break; \n    }\n  }\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"while-Schleife"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static boolean exists(String brand) {\n    String[] cars = { 'BMW', 'Audi', 'Benz' }; \n    boolean found = false; \n    int i = 0; \n    while(!found && i &lt; cars.length) {\n      String car = cars[i];\n      if(car.equals(brand)) {\n        found = true;\n      } else {\n        i++;\n      }\n    }\n    return found; \n  }\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"do-while-Schleife"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static boolean exists(String brand) {\n    String[] cars = { 'BMW', 'Audi', 'Benz' }; \n    boolean found = false; \n    int i = 0; \n    do {\n      String car = cars[i];\n      if(car.equals(brand)) {\n        found = true;\n      } else {\n        i++;\n      }\n    }\n    while(!found && i &lt; cars.length)\n    return found; \n  }\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"for-Schleife"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static boolean exists(String brand) {\n    String[] cars = { 'BMW', 'Audi', 'Benz' } \n    for (int i = 0; i &lt; cars.length; i++) {\n      String car = cars[i];\n      if(car.equals(brand)) {\n        return true;\n      }\n    }\n    return false; \n  }\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"for-each-Schleife"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static boolean exists(String brand) {\n    String[] cars = { 'BMW', 'Audi', 'Benz' } \n    for (String car : cars) {\n      if(car.equals(brand)) {\n        return true;\n      }\n    }\n    return false; \n  }\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"break und continue"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"break beendet die komplette Schleife"}),(0,l.jsx)("li",{className:"fragment",children:"continue \xfcberspringt den restlichen Code"})]})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Arrays"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Array"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static void example() {\n    String[] cars = { 'BMW', 'Audi', 'Benz' };\n    String car;\n    car = cars[0]; // lesen aus dem Array\n    cars[2] = 'Alfa'; // speichern in ein Array\n    String[] twoCars = new String[2]; // Array ohne Inhalt\n    int amountOfItems = twoCars.length;\n  }\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"ArrayList"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"  public static void example() {\n    ArrayList&lt;String&gt; cars = new ArrayList&lt;&gt;();\n    cars.add('BMW');\n    cars.add('Audi');\n    cars.add('Benz');\n    String car;\n    car = cars.get(0); // lesen aus der Liste\n    cars.set(2,'Alfa'); // speichern in der Liste\n    int amountOfItems = cars.size();\n    cars.remove(1); // l\xf6schen aus der Liste\n  }\n"}})})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Klassen und Objekte"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Klassen"}),(0,l.jsx)("span",{className:"fragment",children:"Eine Klasse beschreibt gleichartige Objekte durch"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Attribute"}),(0,l.jsx)("li",{className:"fragment",children:"Methoden"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Beispiel Klasse"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Human {\n  public String firstName;\n  public String lastName;\n \n  public String getFullName() {\n    return firstName + lastName;\n  }\n}"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Objekte"}),(0,l.jsx)("span",{className:"fragment",children:"Ein Objekt ist eine m\xf6gliche Auspr\xe4gung einer Klasse"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"konkreter Wert f\xfcr ein Attribut"}),(0,l.jsx)("li",{className:"fragment",children:"konkretes Verhalten einer Methode"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Beispiel Objekt"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'  Human steffen = new Human();\n  steffen.firstName = "Steffen";\n  steffen.lastName = "Merk";\n  String fullName = steffen.getFullName();\n'}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Konstruktor"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"beschreibt die Initialisierung eines Objektes"}),(0,l.jsx)("li",{className:"fragment",children:"Konstruktoren k\xf6nnen \xdcberladen werden"})]})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Car {\n  private String color;\n  private char engineType;\n\n  public Car(String color) {\n    this.color = color;\n    this.engineType = 'b';\n  }\n\n  public Car(String color, char engineType) {\n    this.color = color;\n    this.engineType = engineType;\n  }\n}\n"}})})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Konstruktor II"}),(0,l.jsx)("ul",{children:(0,l.jsx)("li",{className:"fragment",children:"Konstruktoren k\xf6nnen andere Konstruktoren verwenden"})})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java","data-line-numbers":"|5-7",dangerouslySetInnerHTML:{__html:"public class Car {\n  private String color;\n  private char engineType;\n\n  public Car(String color) {\n    this(color, 'b')\n  }\n\n  public Car(String color, char engineType) {\n    this.color = color;\n    this.engineType = engineType;\n  }\n}\n"}})})}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Vererbung"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Vererbung"}),(0,l.jsxs)("p",{children:["Durch ",(0,l.jsx)("b",{children:"Generalisierung"})," werden gemeinsame Attribute und Methoden von mehreren Klassen in eine weitere Klasse ausgelagert."]})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public String name;\n  public Dog(String name) {\n    this.name = name;\n  }\n  // more Dog specific methods\n}\npublic class Cat {\n  public String name;\n  public Cat(String name) {\n    this.name = name;\n  }\n  // more Cat specific methods\n}\n"}})})}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Animal {\n  public String name;\n  public Animal(String name) {\n    this.name = name;\n  }\n}\n"}})})}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog extends Animal {\n  public Dog(String name) {\n    super(name);\n  }\n}\n\npublic class Cat extends Animal {\n  public Cat(String name) {\n    super(name);\n  }\n}\n"}})})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Schl\xfcsselw\xf6rter zur Vererbung"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"extends"}),(0,l.jsx)("li",{className:"fragment",children:"super"})]})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Polymorphie"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Polymorphie"}),(0,l.jsx)("p",{className:"fragment",children:"Eine Referenzvariable, die vom Typ einer generalisierten Klasse ist, kann mehrere (poly) Formen annehmen (Unterklassen)."}),(0,l.jsx)("p",{className:"fragment",children:"Eine Referenzvariable vom Typ Animal kann eine Katze oder ein Hund sein."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Upcast"}),(0,l.jsx)("p",{className:"fragment",children:"Der Referenzvariable einer Oberklasse wird eine Referenzvariable einer Unterklasse zugewiesen."}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Animal animal01 = new Cat();\nAnimal animal02 = new Dog();\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("p",{children:"Ist eine Referenzvariable vom Typ einer generalisierten Klasse, k\xf6nnen nur die Methoden der generalisierten Klasse verwendet werden."}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Animal animal01 = new Dog();\nanimal01.name = 'Bello'; // funktioniert\nanimal01.bark(); // funktioniert nicht \n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Downcast"}),(0,l.jsx)("p",{className:"fragment",children:"Der Referenzvariable einer Oberklasse wird eine Referenzvariable einer Unterklasse zugewiesen."}),(0,l.jsx)("pre",{className:"fragment",children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Animal animal01 = new Dog();\nDog dog01 = (Dog) animal01;\ndog01.bark(); // funktioniert\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"instanceof operator"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Animal animal01 = new Dog();\nif (animal01 instanceof Dog) {\n   // hundespezifischer Quellcode\n   Dog bello = (Dog) animal01;\n   bello.bark();\n}"}})})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Modifier"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Public Modifier - Klasse"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  //...\n}\n"}})}),(0,l.jsx)("p",{children:"Klasse kann \xfcberall im Projekt verwendet werden."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Kein Modifier - Klasse"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"class Dog {\n  //...\n}\n"}})}),(0,l.jsx)("p",{children:"Klasse kann nur im selben Paket verwendet werden."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Abstract Modifier - Klasse"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public abstract class Dog {\n  //...\n}\n"}})}),(0,l.jsx)("p",{children:"Ein Objekt dieser Klasse kann nicht instanziiert werden."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Final Modifier - Klasse"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public final class Dog {\n  //...\n}\n"}})}),(0,l.jsx)("p",{children:"Von dieser Klasse kann nicht geerbt werden."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Public Modifier - Attribut"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public String name;\n  //...\n}\n"}})}),(0,l.jsx)("p",{children:"Das Attribut kann immer ge\xe4ndert werden."})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'Dog bello = new Dog();\nbello.name = "Steffen"; // funktioniert\n\npublic class MonsterDog extends Dog {\n //...\n public void setName(String name) {\n   this.name = name; // funktioniert\n }\n //...\n}\n'}})})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Private Modifier - Attribut"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  private String name;\n  //...\n  public void setName(String name) {\n    this.name = name; // funktioniert\n  }\n}\n"}})}),(0,l.jsx)("p",{children:"Das Attribut kann innerhalb der Klasse ge\xe4ndert werden."})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'Dog bello = new Dog();\nbello.name = "Steffen"; // funktioniert nicht\n\npublic class MonsterDog extends Dog {\n //...\n public void setName(String name) {\n   this.name = name; // funktioniert nicht\n }\n //...\n}\n'}})})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Protected Modifier - Attribut"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  protected String name;\n  //...\n  public void setName(String name) {\n    this.name = name; // funktioniert\n  }\n}\n"}})}),(0,l.jsx)("p",{children:"Das Attribut kann innerhalb der Klasse und von allen erbenden Klassen ge\xe4ndert werden."})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'Dog bello = new Dog();\nbello.name = "Steffen"; // funktioniert nicht\n\npublic class MonsterDog extends Dog {\n //...\n public void setName(String name) {\n   this.name = name; // funktioniert\n }\n //...\n}\n'}})})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Final Modifier - Attribut"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public final String name;\n  //...\n  public Dog(String name) {\n    this.name = name; // funktioniert\n  }\n\n  public void setName(String name) {\n    this.name = name; // funktioniert nicht\n  }\n}\n"}})}),(0,l.jsx)("p",{children:"Das Attribut kann nur im Konstruktor ge\xe4ndert werden."})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'Dog bello = new Dog("Marianna");\nbello.name = "Steffen"; // funktioniert nicht\n\npublic class MonsterDog extends Dog {\n //...\n public void setName(String name) {\n   this.name = name; // funktioniert nicht\n }\n //...\n}\n'}})})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Static Modifier - Attribut"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public static boolean hasHat = false;\n  //...\n}\n"}})}),(0,l.jsx)("p",{children:"Das Attribut geh\xf6rt zu der Klasse und nicht zu einem Objekt."})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Dog bello = new Dog();\nbello.hasHat = true; // funktioniert nicht\nDog.hasHat = true; // funktioniert\n\npublic class MonsterDog extends Dog {\n //...\n public void setHat(boolean hasHat) {\n   this.hasHat = hasHat; // funktioniert nicht\n   Dog.hasHat = hasHat; // funktioniert\n }\n //...\n}\n"}})})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Public Modifier - Methode"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public void bark() {\n    //...\n  }\n  //...\n}\n"}})}),(0,l.jsx)("p",{children:"Die Methode kann immer verwendet werden."})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Dog bello = new Dog();\nbello.bark(); // funktioniert\n\npublic class MonsterDog extends Dog {\n //...\n public void attack() {\n   this.bark(); // funktioniert\n }\n //...\n}\n"}})})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Private Modifier - Methode"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  private void bark() {\n    //...\n  }\n  //...\n}\n"}})}),(0,l.jsx)("p",{children:"Die Methode kann innerhalb der Klasse verwendet werden."})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Dog bello = new Dog();\nbello.bark(); // funktioniert nicht\n\npublic class MonsterDog extends Dog {\n //...\n public void attack() {\n   this.bark(); // funktioniert nicht\n }\n //...\n}\n"}})})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Protected Modifier - Methode"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  protected void bark() {\n    //...\n  }\n  //...\n}\n"}})}),(0,l.jsx)("p",{children:"Das Attribut kann innerhalb der Klasse und von allen erbenden Klassen verwendet werden."})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Dog bello = new Dog();\nbello.bark(); // funktioniert nicht\n\npublic class MonsterDog extends Dog {\n //...\n public void attack() {\n   this.bark(); // funktioniert\n }\n //...\n}\n"}})})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Final Modifier - Methode"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public final void bark() {\n    //...\n  }\n  //...\n}\n"}})}),(0,l.jsx)("p",{children:"Die Methode kann nicht \xfcberschrieben werden."})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class MonsterDog extends Dog {\n //...\n public void bark() { // funktioniert nicht \n   //...\n }\n //...\n}\n"}})})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Static Modifier - Methode"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Dog {\n  public static hasHat = true;\n  public static isCool = true;\n  public static boolean isCoolAndHasHat() {\n    return Dog.isCool && Dog.hasHat;\n  }\n  //...\n}\n"}})}),(0,l.jsx)("p",{children:"Die Methode geh\xf6rt zu der Klasse und nicht zu einem Objekt. Es kann nur auf statische Attribute zugegriffen werden."})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Dog bello = new Dog();\nbello.isCoolAndHasHat(); // funktioniert nicht\nDog.isCoolAndHasHat(); // funktioniert\n\npublic class MonsterDog extends Dog {\n //...\n public void attack() {\n   this.isCoolAndHasHat(); // funktioniert nicht\n   Dog.isCoolAndHasHat(); // funktioniert\n }\n //...\n}\n"}})})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Abstract Modifier - Methode"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public abstract class Animal {\n  //...\n  public abstract void makeSound();\n}\n"}})}),(0,l.jsx)("p",{children:"Die Methode muss von der erbenden Klasse implementiert werden. Abstrakte Methoden k\xf6nnen nur in abstrakten Klassen definiert werden."})]}),(0,l.jsx)("section",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class MonsterDog extends Dog {\n // funktioniert nicht, makeSound muss implementiert werden\n}\n"}})})}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Enumeration"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Enumeration"}),(0,l.jsx)("p",{children:"Eine Enumeration ist eine Klasse mit Attributen und Methoden. Sie definiert zus\xe4tzlich alle m\xf6glichen Auspr\xe4gungen dieser Klasse."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Enumeration implementieren"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'public enum Gender {\n MALE("Mann"),\n FEMALE("Frau"),\n DIVERS("Divers");\n \n public final String text;\n \n Gender(String text) {\n   this.text = text;\n }\n \n public boolean isBinary() {\n   return this == Gender.MALE || this == Gender.FEMALE;\n }\n}\n'}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Enumeration als Typ verwenden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Human {\n public final Gender gender;\n \n public Human(Gender gender) {\n   this.gender = gender;\n }\n public doSomethingBinaryRelated() {\n   if(this.gender.isBinary())\n   //...\n }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Enumeration als Wert setzen"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"Human steffen = new Human(Gender.MALE);\n"}})})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Interfaces"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Interfaces"}),(0,l.jsx)("p",{children:"Definieren Methoden unabh\xe4ngig von der Vererbungshierarchie."}),(0,l.jsx)("p",{className:"fragment",children:"Dient als Schnittstelle zwischen Ersteller und Verwender einer Funktionalit\xe4t."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Interface (Ersteller)"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{"data-line-numbers":"1-3|6|7,11",className:"java",dangerouslySetInnerHTML:{__html:"public interface Item {\n  public String getName(); \n}\n\npublic class ShoppingList {\n  ArrayList&lt;Item&gt; items = new ArrayList&lt;&gt;();\n  public void add(Item item) {\n    this.items.add(item);\n  }\n  public void print() {\n    for(Item item : items) {\n      System.out.println(item.getName();\n    }\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Interface (Verwender) I"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{"data-line-numbers":"1|10-12",className:"java",dangerouslySetInnerHTML:{__html:'public class Human implements Item {\n  public final String firstName;\n  public final String lastName;\n  \n  public Human(String firstName, String lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n  \n  public String getName() {\n    return firstName + " " + lastName;\n  }\n}\n'}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Interface (Verwender) II "}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'ShoppingList shoppingList = new ShoppingList();\nHuman steffen = new Human("Steffen", "Merk");\nshoppingList.add(steffen);\nshoppingList.print(); // "Steffen Merk"\n'}})})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Comparator"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Comparator"}),(0,l.jsx)("p",{className:"fragment",children:"Definiert wie eine Liste von Elementen sortiert wird."}),(0,l.jsx)("p",{className:"fragment",children:"Vergleicht immer zwei Elemente miteinander, bei dem angegeben wird, wo das erste Element im Vergleich zum zweiten Element positioniert wird (Zahlenstrahl)."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Comparator implementieren"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class AgeAscComparator implements Comparator&lt;Human&gt; {\n  \n  public int compare(Human h1, Human h2) {\n    if(h1.getAge() > h2.getAge()) {\n     return 1;\n    } else if (h1.getAge() &lt; h2.getAge()) {\n      return -1;\n    } else {\n      return 0;\n    } \n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Comparator verwenden"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"ArrayList&lt;Human&gt; developers = new ArrayList&lt;&gt;();\ndevelopers.add(new Human(28));\ndevelopers.add(new Human(24));\nCollections.sort(developers, new AgeAscComparator());\n"}})})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Exceptions"})}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Exceptions"}),(0,l.jsx)("p",{className:"fragment",children:"Sind Fehler, die w\xe4hrend der Ausf\xfchrung des Programms auftreten k\xf6nnen und dienen zur Kommunikation."}),(0,l.jsx)("p",{className:"fragment",children:"Fehler k\xf6nnen mitgeteilt (throws) und verarbeitet werden (catch)."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Exception implementieren"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{"data-line-numbers":"1-9|1|6",className:"java",dangerouslySetInnerHTML:{__html:"public class TooYoungException extends Exception {\n  \n  public final int yearsTillAllowed;\n  \n  public TooYoungException(int yearsTillAllowed) {\n    super();\n    this.yearsTillAllowed = yearsTillAllowed;\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Exception ausl\xf6sen"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{"data-line-numbers":"1-9|4|6",className:"java",dangerouslySetInnerHTML:{__html:"public class ShoppingList {\n  Human buyer;\n  //...\n  public addItem(Item item) throws TooYoungException {\n    if(item.isAlcohol() && this.buyer.getAge() &lt; 21) {\n      throw new TooYoungException(21 - buyer.getAge());\n    }\n  }\n}\n"}})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Exception behandeln"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{"data-line-numbers":"1-13|5-7|7-9|9-11",className:"java",dangerouslySetInnerHTML:{__html:'public class Main {\n  public static void main(String[] args) {\n    ShoppingList sl = new ShoppingList();\n    Beer corona = new Beer();\n    try {\n      sl.add(corona);\n    } catch (TooYoungException e) {\n      System.out.println("Du bist" + e.yearsTillAllowed + "zu jung");\n    } finally {\n      System.out.println("Einkauf beendet. (Immer)");\n    }\n  }\n}\n'}})})]}),(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Klassendiagramme (Doku)"})})]}),(0,l.jsx)("section",{children:(0,l.jsx)("section",{children:(0,l.jsx)("h2",{children:"Klausurbesprechung"})})}),(0,l.jsx)("section",{children:(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Fortgeschrittene Programmierung"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Generische Programmierung"}),(0,l.jsx)("li",{className:"fragment",children:"Funktionale Programmierung"}),(0,l.jsx)("li",{className:"fragment",children:"Algorithmen und Datenstrukturen"})]})]})}),(0,l.jsx)("section",{children:(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Rest of the day"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"fragment",children:"Wiederholung"}),(0,l.jsx)("li",{className:"fragment",children:"Entwicklungsumgebung einrichten"})]})]})})]})}}}]);