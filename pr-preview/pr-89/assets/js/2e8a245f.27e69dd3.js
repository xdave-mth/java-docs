"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6101],{80125:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(85893),s=i(11151);const r={title:"Aufz\xe4hlungen (Enumerations)",description:"",sidebar_position:150,tags:["enumerations"]},a=void 0,o={id:"documentation/enumerations",title:"Aufz\xe4hlungen (Enumerations)",description:"",source:"@site/docs/documentation/enumerations.md",sourceDirName:"documentation",slug:"/documentation/enumerations",permalink:"/java-docs/pr-preview/pr-89/documentation/enumerations",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/enumerations.md",tags:[{label:"enumerations",permalink:"/java-docs/pr-preview/pr-89/tags/enumerations"}],version:"current",sidebarPosition:150,frontMatter:{title:"Aufz\xe4hlungen (Enumerations)",description:"",sidebar_position:150,tags:["enumerations"]},sidebar:"documentationSidebar",previous:{title:"Dateien und Verzeichnisse",permalink:"/java-docs/pr-preview/pr-89/documentation/java-api/files"},next:{title:"Darstellung von Klassen und Programmabl\xe4ufen",permalink:"/java-docs/pr-preview/pr-89/documentation/uml/"}},u={},l=[{value:"Implementieren von Aufz\xe4hlungen",id:"implementieren-von-aufz\xe4hlungen",level:2},{value:"Verwenden von Aufz\xe4hlungen",id:"verwenden-von-aufz\xe4hlungen",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Bei einer Aufz\xe4hlung (Enumeration) handelt es sich um eine spezielle Klasse, von\nder nur eine vorgegebene, endliche Anzahl an Instanzen existiert. Diese\nInstanzen werden als ",(0,t.jsx)(n.em,{children:"Aufz\xe4hlungskonstanten"})," bezeichnet. Technisch gesehen\nhandelt es sich bei Aufz\xe4hlungskonstanten um \xf6ffentliche, statische Konstanten\nvom Typ der Aufz\xe4hlung."]}),"\n",(0,t.jsx)(n.h2,{id:"implementieren-von-aufz\xe4hlungen",children:"Implementieren von Aufz\xe4hlungen"}),"\n",(0,t.jsxs)(n.p,{children:["Die Definition einer Aufz\xe4hlung erfolgt analog zur Definition von Klassen, das\nSchl\xfcsselwort hierf\xfcr lautet ",(0,t.jsx)(n.code,{children:"enum"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="WeekDay.java" showLineNumbers',children:'public enum WeekDay {\n\n  MONDAY("Montag", true), TUESDAY("Dienstag", true), WEDNESDAY("Mittwoch", true), THURSDAY(\n      "Donnerstag",\n      true), FRIDAY("Freitag", true), SATURDAY("Samstag", true), SUNDAY("Sonntag", false);\n\n  private String description;\n  private boolean isWorkingDay;\n\n  WeekDay(String description, boolean isWorkingDay) {\n    this.description = description;\n    this.isWorkingDay = isWorkingDay;\n  }\n\n  public String getDescription() {\n    return description;\n  }\n\n  public boolean getWorkingDay() {\n    return isWorkingDay;\n  }\n\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"verwenden-von-aufz\xe4hlungen",children:"Verwenden von Aufz\xe4hlungen"}),"\n",(0,t.jsx)(n.p,{children:"Aufz\xe4hlungen besitzen eine Reihe hilfreicher Methoden:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Die statische Methode ",(0,t.jsx)(n.code,{children:"T[] values()"})," gibt alle Aufz\xe4hlunskonstanten als Feld\nzur\xfcck"]}),"\n",(0,t.jsxs)(n.li,{children:["Die statische Methode ",(0,t.jsx)(n.code,{children:"T valueOf(name: String)"})," gibt zu einer eingehenden\nZeichenkette die dazugeh\xf6rige Aufz\xe4hlungskonstante zur\xfcck"]}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"int ordinal()"})," gibt die Ordnungszahl der Aufz\xe4hlungskonstanten\nzur\xfcck"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    for (WeekDay w : WeekDay.values()) {\n      System.out.println(w.ordinal());\n    }\n  }\n\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var t=i(67294);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);