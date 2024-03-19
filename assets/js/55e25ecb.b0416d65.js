"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[840],{17154:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=a(85893),n=a(11151);const i={title:"Rabattrechner",description:"",tags:["activity-diagrams"]},r=void 0,c={id:"exam-exercises/exam-exercises-java1/discount-calculator",title:"Rabattrechner",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/discount-calculator.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/discount-calculator",permalink:"/java-docs/exam-exercises/exam-exercises-java1/discount-calculator",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/discount-calculator.md",tags:[{label:"activity-diagrams",permalink:"/java-docs/tags/activity-diagrams"}],version:"current",frontMatter:{title:"Rabattrechner",description:"",tags:["activity-diagrams"]},sidebar:"examExercisesSidebar",previous:{title:"W\xfcrfelspiel 4",permalink:"/java-docs/exam-exercises/exam-exercises-java1/dice-game-04"},next:{title:"Fast Food",permalink:"/java-docs/exam-exercises/exam-exercises-java1/fast-food"}},o={},u=[{value:"Aktivit\xe4tsdiagramm zur Klasse <em>DiscountCalculator</em>",id:"aktivit\xe4tsdiagramm-zur-klasse-discountcalculator",level:2}];function d(e){const t={code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Erstelle die ausf\xfchrbare Klasse ",(0,s.jsx)(t.code,{children:"DiscountCalculator"})," anhand des abgebildeten\nAktivit\xe4tsdiagramms."]}),"\n",(0,s.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-klasse-discountcalculator",children:["Aktivit\xe4tsdiagramm zur Klasse ",(0,s.jsx)(t.em,{children:"DiscountCalculator"})]}),"\n",(0,s.jsx)(t.mermaid,{value:'stateDiagram-v2\n    state "Ausgabe: Bitte Jahresumsatz in Euro eingeben" as state1\n    state "Eingabe: Jahresumsatz in Euro" as state2\n    state "Ausgabe: Bitte Rechnungsbetrag in Euro eingeben" as state3\n    state "Eingabe: Rechnungsbetrag in Euro" as state4\n    state "Rabatt in % = 0" as state5\n    state "Rabatt in % = 10" as state6\n    state "Rabatt in % = 20" as state7\n    state "Rabatt in Euro = Rechnungsbetrag in Euro * Rabatt in % / 100" as state8\n    state "Rabattierter Rechnungsbetrag in Euro = Rechnungsbetrag in Euro - Rabatt in Euro" as state9\n    state "Ausgabe: Rabattierter Rechnungsbetrag in Euro: [Rabattierter Rechnungsbetrag in Euro]" as state10\n    state "Ausgabe: Weitere Berechnung durchf\xfchren (Ja, Nein)?" as state11\n    state "Eingabe: Wiederholung" as state12\n\n    state if1 <<choice>>\n    state if2 <<choice>>\n    state fork1 <<fork>>\n\n    state "Rabattrechner" as main {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e state3\n        state3 --\x3e state4\n        state4 --\x3e if1\n        if1 --\x3e state5: sonst\n        if1 --\x3e state6: Jahresumsatz in Euro > 1.000 und <= 5.000\n        if1 --\x3e state7: Jahresumsatz in Euro > 5.000\n        state5 --\x3e fork1\n        state6 --\x3e fork1\n        state7 --\x3e fork1\n        fork1 --\x3e state8\n        state8 --\x3e state9\n        state9 --\x3e state10\n        state10 --\x3e state11\n        state11 --\x3e state12\n        state12 --\x3e if2\n        if2 --\x3e state1: Wiederholung = Ja\n        if2 --\x3e [*]: sonst\n    }'})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>r});var s=a(67294);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);