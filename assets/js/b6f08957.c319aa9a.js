"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9084],{55931:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=t(74848),i=t(28453),a=t(11470),l=t(19365);const s={title:"JavaFX",description:"",sidebar_position:370,tags:["gui","javafx"]},o=void 0,d={id:"documentation/javafx",title:"JavaFX",description:"",source:"@site/docs/documentation/javafx.mdx",sourceDirName:"documentation",slug:"/documentation/javafx",permalink:"/java-docs/documentation/javafx",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/javafx.mdx",tags:[{label:"gui",permalink:"/java-docs/tags/gui"},{label:"javafx",permalink:"/java-docs/tags/javafx"}],version:"current",sidebarPosition:370,frontMatter:{title:"JavaFX",description:"",sidebar_position:370,tags:["gui","javafx"]},sidebar:"documentationSidebar",previous:{title:"Grafische Benutzeroberfl\xe4chen",permalink:"/java-docs/documentation/gui"}},u={},c=[{value:"Aufbau und Lebenszyklus von JavaFX-Anwendungen",id:"aufbau-und-lebenszyklus-von-javafx-anwendungen",level:2},{value:"Definition von Szenen",id:"definition-von-szenen",level:2},{value:"Aufruf von Szenen",id:"aufruf-von-szenen",level:2},{value:"Implementierung von Ereignisbehandler-Klassen",id:"implementierung-von-ereignisbehandler-klassen",level:2},{value:"Implementierung von Model-Klassen",id:"implementierung-von-model-klassen",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Java stellt mit dem ",(0,r.jsx)(n.em,{children:"AWT"})," (Abstract Window Toolkit) und ",(0,r.jsx)(n.em,{children:"Swing"})," zwei\nBibliotheken zur Entwicklung grafischer Benutzeroberfl\xe4chen zur Verf\xfcgung. Swing\nbaut dabei auf dem \xe4lteren AWT auf und verwendet teilweise Klasse daraus. Der\nNachfolger von Swing hei\xdft JavaFX und stellt im Gegensatz zu AWT und Swing keine\nBibliothek, sondern ein Framework zur Entwicklung plattform\xfcbergreifender\ngrafischer Benutzeroberfl\xe4chen dar. Unter einem Framework versteht man ein\nProgrammierger\xfcst, welches die Architektur f\xfcr die Anwendung vorgibt und den\nKontrollfluss der Anwendung steuert. So werden die Funktionen einer Anwendung\nbeim Framework registriert, welches die Funktionen zu einem sp\xe4teren Zeitpunkt\naufruft, d.h. die Steuerung des Kontrollfluss obliegt nicht der Anwendung,\nsondern dem Framework. Diese Umkehr der Steuerung kann auch als Anwendung des\nHollywood-Prinzips (",(0,r.jsx)(n.em,{children:"Don\xb4t call us, we\xb4ll call you"}),") verstanden werden."]}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsx)(n.p,{children:"Bis Java 11 war JavaFX Bestandteil des JDK, seit Java 11 stellt es ein\neigenst\xe4ndiges SDK (Software Development Kit) dar."})}),"\n",(0,r.jsx)(n.h2,{id:"aufbau-und-lebenszyklus-von-javafx-anwendungen",children:"Aufbau und Lebenszyklus von JavaFX-Anwendungen"}),"\n",(0,r.jsxs)(n.p,{children:["JavaFX-Anwendungen bestehen aus einer oder mehreren B\xfchnen (Stages), die\nbeliebig vielen Szenen (Scenes) enthalten k\xf6nnen, wobei jede Szene wiederum\nbeliebig viele Bildschirmelemente (Nodes) enthalten kann. Jede JavaFX-Anwendung\nist eine Unterklasse der Klasse ",(0,r.jsx)(n.code,{children:"Application"}),". Diese stellt die verschiedenen\nLebenszyklus-Methoden der JavaFX-Anwendung bereit."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void launch(args: String[])"})," speichert die Aufrufparameter,\nerzeugt ein Objekt der eigenen Klasse und ruft die weiteren\nLebenszyklus-Methoden auf"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void init()"})," kann genutzt werden, um z.B. die Aufrufparameter\nauszulesen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void start(primaryStage: Stage)"})," bekommt eine B\xfchne \xfcbergeben und\nwird dazu verwendet, die B\xfchne zu gestalten und die erste Szene aufzurufen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void stop()"})," wird aufgerufen, bevor der Prozess gestoppt wird und\nkann genutzt werden, um Aufr\xe4umarbeiten durchzuf\xfchren"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"definition-von-szenen",children:"Definition von Szenen"}),"\n",(0,r.jsx)(n.p,{children:"Die Definition einer Szene (View) erfolgt deklarativ mit Hilfe von\nFXML-Dokumenten. FXML stellt eine auf XML-basierende Sprache dar und erm\xf6glicht\neine klare Trennung zwischen Layout und Code. XML (Extensible Markup Language)\nwiederum stellt eine Auszeichnungssprache zur Beschreibung strukturierter Daten\ndar."}),"\n",(0,r.jsx)(n.p,{children:"Mit Hilfe spezifischer JavaFX-Eigenschaften wird eine Verbindung zwischen der\nSzene und der Ereignisbehandler-Klasse hergestellt:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Bildschirmelementen k\xf6nnen \xfcber die Eigenschaft ",(0,r.jsx)(n.code,{children:"fx:id"})," IDs zugewiesen werden,\n\xfcber die die Ereignisbehandler-Klasse auf die jeweiligen Elemente zugreifen\nkann"]}),"\n",(0,r.jsxs)(n.li,{children:["Die verantwortliche Ereignisbehandler-Klasse wird \xfcber die Eigenschaft\n",(0,r.jsx)(n.code,{children:"fx:controller"})," festgelegt"]}),"\n",(0,r.jsxs)(n.li,{children:["Den zu behandelnden Ereignissen k\xf6nnen \xfcber entsprechende Eigenschaften wie\nz.B. ",(0,r.jsx)(n.code,{children:"onAction"})," bei Drucktasten Behandlermethoden der Ereignisbehandler-Klasse\nzugewiesen werden"]}),"\n"]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.A,{value:"a",label:"InputView",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="InputView.fxml" showLineNumbers',children:'<?xml version="1.0" encoding="UTF-8"?>\n\n<?import javafx.geometry.Insets?>\n<?import javafx.scene.control.Button?>\n<?import javafx.scene.control.TextField?>\n<?import javafx.scene.layout.VBox?>\n\n<VBox alignment="CENTER" spacing="5.0" xmlns:fx="http://javafx.com/fxml/1"\n    fx:controller="InputController">\n  <children>\n    <TextField fx:id="valueTextField" promptText="Wert" />\n    <Button text="Zur Ausgabe" onAction="#goToOutput"/>\n  </children>\n  <padding>\n    <Insets bottom="25.0" left="25.0" right="25.0" top="25.0" />\n  </padding>\n</VBox>\n'})})}),(0,r.jsx)(l.A,{value:"b",label:"OutputView",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="InputView.fxml" showLineNumbers',children:'<?xml version="1.0" encoding="UTF-8"?>\n\n<?import javafx.geometry.Insets?>\n<?import javafx.scene.control.Label?>\n<?import javafx.scene.layout.VBox?>\n\n<VBox alignment="CENTER" spacing="5.0" xmlns:fx="http://javafx.com/fxml/1"\n    fx:controller="OutputController">\n  <children>\n    <Label fx:id="valueLabel" />\n  </children>\n  <padding>\n    <Insets bottom="25.0" left="25.0" right="25.0" top="25.0" />\n  </padding>\n</VBox>\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"aufruf-von-szenen",children:"Aufruf von Szenen"}),"\n",(0,r.jsxs)(n.p,{children:["Die statische Methode ",(0,r.jsx)(n.code,{children:"Parent load(location: URL)"})," der Klasse ",(0,r.jsx)(n.code,{children:"FXMLLoader"}),"\n\xfcberf\xfchrt das angegebene FXML-Dokument in einen Szenegraphen und gibt den\ndazugeh\xf6rigen Wurzelknoten vom Typ ",(0,r.jsx)(n.code,{children:"Parent"})," zur\xfcck, mit dessen Hilfe\nanschlie\xdfend die Szene erstellt und angezeigt werden kann. Zus\xe4tzlich\ninstanziiert der FXML-Loader den Controller und ruft bei der Anzeige der Szene\ndie (optionale) Methode\n",(0,r.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," der entsprechenden\nEreignisbehandler-Klasse auf."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass extends Application {\n\n  public static void main(String[] args) {\n    launch(args);\n  }\n\n  @Override\n  public void start(Stage primaryStage) throws Exception {\n    Parent root = FXMLLoader.load(getClass().getResource("InputView.fxml"));\n    Scene scene = new Scene(root);\n    primaryStage.setTitle("JavaFX");\n    primaryStage.setScene(scene);\n    primaryStage.show();\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"implementierung-von-ereignisbehandler-klassen",children:"Implementierung von Ereignisbehandler-Klassen"}),"\n",(0,r.jsxs)(n.p,{children:["In den Ereignisbehandler-Klassen (Controller) werden die Behandlermethoden\nimplementiert. Diese m\xfcssen zwingend einen Parameter vom Typ des Ereignisses\nbesitzen (z.B. ",(0,r.jsx)(n.code,{children:"ActionEvent"}),"), mit dessen Hilfe auf das ausgel\xf6ste Ereignis\nzugegriffen werden kann. Das Verkn\xfcpfen von Attributen der\nEreignisbehandler-Klasse mit den Elementen des FXML-Dokuments erfolgt \xfcber die\nAnnotation ",(0,r.jsx)(n.code,{children:"@FXML"})," und der Namensgleichheit zwischen den Attributen der\nEreignisbehandler-Klasse sowie den festgelegten Ids der entsprechenden Elemente\ndes FXML-Dokuments."]}),"\n",(0,r.jsxs)(n.p,{children:["Der Wechsel von Szenen erfolgt \xfcber die Methode ",(0,r.jsx)(n.code,{children:"void setScene(value: Scene)"}),"\nder Klasse ",(0,r.jsx)(n.code,{children:"Window"}),". Die Methode ",(0,r.jsx)(n.code,{children:"Object getSource()"})," der Klasse ",(0,r.jsx)(n.code,{children:"ActionEvent"}),"\ngibt das Bildschirmelement zur\xfcck, welches das Ereignis ausgel\xf6st hat; die\nMethode ",(0,r.jsx)(n.code,{children:"Window getWindow()"})," der Klasse ",(0,r.jsx)(n.code,{children:"Scene"})," die B\xfchne, auf der die aktuelle\nSzene aufgef\xfchrt wird."]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.A,{value:"a",label:"InputController",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="InputController.java" showLineNumbers',children:'public class InputController implements Initializable {\n\n  @FXML\n  private TextField valueTextField;\n  private Model model;\n\n  @Override\n  public void initialize(URL location, ResourceBundle resources) {\n    model = Model.getInstance();\n  }\n\n  @FXML\n  public void goToOutput(ActionEvent actionEvent) throws IOException {\n    String value = valueTextField.getText();\n    model.setValue(value);\n\n    Parent root = FXMLLoader.load(getClass().getResource("OutputView.fxml"));\n    Scene scene = new Scene(root);\n    Node node = (Node) actionEvent.getSource();\n    Stage stage = (Stage) node.getScene().getWindow();\n    stage.setScene(scene);\n    stage.show();\n  }\n\n}\n'})})}),(0,r.jsx)(l.A,{value:"b",label:"OutputController",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="OutputController.java" showLineNumbers',children:"public class OutputController implements Initializable {\n\n  @FXML\n  private Label valueLabel;\n  private Model model;\n\n  @Override\n  public void initialize(URL location, ResourceBundle resources) {\n    model = Model.getInstance();\n\n    String value = model.getValue();\n    outputLabel.setText(value);\n  }\n\n}\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," der\nSchnittstelle ",(0,r.jsx)(n.code,{children:"Initializable"})," wird vom FXML-Loader vor Anzeige der dazugeh\xf6rigen\nSzene aufgerufen und erm\xf6glicht es, die Szene dynamisch anzupassen."]})}),"\n",(0,r.jsx)(n.h2,{id:"implementierung-von-model-klassen",children:"Implementierung von Model-Klassen"}),"\n",(0,r.jsxs)(n.p,{children:["Model-Klassen sind f\xfcr die zentrale Verwaltung der Daten zust\xe4ndig. Da die\nverschiedenen Klassen einer JavaFX-Anwendung nur lose miteiander gekoppelt sind,\nkann \xfcber das Entwurfsmuster ",(0,r.jsx)(n.em,{children:"Singleton"})," sichergestellt werden, dass zur\nModel-Klasse genau ein Objekt, das sogenannte Singleton, zur Laufzeit existiert."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Model.java" showLineNumbers',children:"public class Model {\n\n  private static Model instance;\n  private String value;\n\n  private Model() {}\n\n  public static Model getInstance() {\n    if (instance == null) {\n      instance = new Model();\n    }\n    return instance;\n  }\n\n  public String getValue() {\n    return value;\n  }\n\n  public void setValue(String value) {\n    this.value = value;\n  }\n\n}\n"})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var a=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>z});var r=t(96540),i=t(34164),a=t(23104),l=t(56347),s=t(205),o=t(57485),d=t(31682),u=t(89466);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[d,c]=m({queryString:t,groupId:i}),[v,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,u.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),f=(()=>{const e=d??v;return g({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),p(e)}),[c,p,a]),tabValues:a}}var p=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),i=s[t].value;i!==r&&(d(n),l(i))},c=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:c,onClick:u,...a,className:(0,i.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function z(e){const n=(0,p.A)();return(0,b.jsx)(w,{...e,children:c(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(96540);const i={},a=r.createContext(i);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);