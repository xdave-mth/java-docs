"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4840],{14431:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(74848),l=i(28453);const r={title:"JavaFX04",description:""},t=void 0,o={id:"exercises/javafx/javafx04",title:"JavaFX04",description:"",source:"@site/docs/exercises/javafx/javafx04.md",sourceDirName:"exercises/javafx",slug:"/exercises/javafx/javafx04",permalink:"/java-docs/exercises/javafx/javafx04",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/javafx/javafx04.md",tags:[],version:"current",frontMatter:{title:"JavaFX04",description:""},sidebar:"exercisesSidebar",previous:{title:"JavaFX03",permalink:"/java-docs/exercises/javafx/javafx03"},next:{title:"JavaFX05",permalink:"/java-docs/exercises/javafx/javafx05"}},a={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Szenegraph",id:"szenegraph",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>LED</em>",id:"hinweise-zur-klasse-led",level:2},{value:"Hinweis zur Klasse <em>Model</em>",id:"hinweis-zur-klasse-model",level:2},{value:"Hinweise zur Klasse <em>Controller</em>",id:"hinweise-zur-klasse-controller",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Erstelle eine JavaFX-Anwendung zum Ein- und Ausschalten einer farbigen LED\nanhand des abgebildeten Klassendiagramms sowie des abgebildeten Szenegraphs."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Initializable <|.. Controller : implements\n    Controller o-- Model\n    Model o-- LED\n\n    class LED {\n        -color: color\n        -isShining: boolean\n        +Light()\n        +getColor() Color\n        +isShining() boolean\n        +switchOn() void\n        +switchOff() void\n        +switchColor() void\n    }\n\n    class Model {\n        -instance: Model$\n        -led: LED\n        -Model()\n        +getInstance() Model$\n        +getLED() LED\n    }\n\n    class Controller {\n        -layer1: Circle &#123FXML&#125\n        -layer2: Circle &#123FXML&#125\n        -layer3: Circle &#123FXML&#125\n        -layer4: Circle &#123FXML&#125\n        -model: Model\n        +initialize(location: URL, resources: ResourceBundle) void\n        +switchOn(actionEvent: ActionEvent) void &#123FXML&#125\n        +switchOff(actionEvent: ActionEvent) void &#123FXML&#125\n        +switchColor(actionEvent: ActionEvent) void &#123FXML&#125\n    }\n\n    class Initializable {\n        <<interface>>\n        +initialize(location: URL, resources: ResourceBundle) void\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"szenegraph",children:"Szenegraph"}),"\n",(0,s.jsx)(n.mermaid,{value:"flowchart LR\n\tvbox[VBox\\nfx:controller=Pfad.Controller]\n\tgroup[Group]\n\tcircle1[Circle\\nfx:id=layer1\\nradius=25]\n\tcircle2[Circle\\nfx:id=layer2\\nradius=50]\n\tcircle3[Circle\\nfx:id=layer3\\nradius=75]\n\tcircle4[Circle\\nfx:id=layer4\\nradius=100]\n\thbox[HBox]\n\tbutton1[Button\\ntext=Einschalten\\nonAction=#switchOn]\n\tbutton2[Button\\ntext=Ausschalten\\nonAction=#switchOff]\n\tbutton3[Button\\ntext=Farbe wechseln\\nonAction=#switchColor]\n\n    vbox --\x3e group\n    vbox --\x3e hbox\n    group --\x3e circle1\n    group --\x3e circle2\n    group --\x3e circle3\n    group --\x3e circle4\n    hbox --\x3e button1\n    hbox --\x3e button2\n    hbox --\x3e button3"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Klasse ",(0,s.jsx)(n.code,{children:"AnimationTimer"})," repr\xe4sentiert einen Zeitmesser"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void start()"})," der Klasse ",(0,s.jsx)(n.code,{children:"AnimationTimer"})," startet den Zeitmesser"]}),"\n",(0,s.jsxs)(n.li,{children:["Der Konstruktor\n",(0,s.jsx)(n.code,{children:"Color(red: double, green: double, blue: double, opacity: double)"})," der Klasse\n",(0,s.jsx)(n.code,{children:"Color"})," erm\xf6glicht das Erzeugen einer (durchsichtigen) Farbe"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-led",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"LED"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll die LED auf die Farbe Rot setzen"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void switchOn()"})," soll das Attribut ",(0,s.jsx)(n.code,{children:"isShining"})," auf den Wert\n",(0,s.jsx)(n.em,{children:"true"})," setzen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void switchOff()"})," soll das Attribut ",(0,s.jsx)(n.code,{children:"isShining"})," auf den Wert\n",(0,s.jsx)(n.em,{children:"false"})," setzen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void switchColor()"})," soll die Farbe der LED von Rot auf Gr\xfcn bzw.\nvon Gr\xfcn auf Blau bzw. von Blau auf Rot wechseln"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-model",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"Model"})]}),"\n",(0,s.jsx)(n.p,{children:"Der Konstruktor soll die LED initialisieren"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-controller",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Controller"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," soll\ndas Model initialisieren und kontinuierlich pr\xfcfen, ob die LED leuchtet. F\xfcr\nden Fall, dass die LED leuchtet, sollen alle 4 Ebenen in der Farbe der LED mit\naufsteigender Durchsichtigkeit (0%, 25%, 50%, 75%) angezeigt werden und f\xfcr\nden Fall, dass die LED nicht leuchtet, soll aussschlie\xdflich die erste Ebene in\nder Farbe der LED angezeigt werden"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void switchOn(actionEvent: ActionEvent)"})," soll die LED einschalten"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void switchOff(actionEvent: ActionEvent)"})," soll die LED\nausschalten"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void switchColor(actionEvent: ActionEvent)"})," soll die Farbe der\nLED wechseln"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var s=i(96540);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);