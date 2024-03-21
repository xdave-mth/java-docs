"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8632],{8011:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=n(85893),s=n(11151);const r={title:"Git03",description:""},a=void 0,o={id:"exercises/git/git03",title:"Git03",description:"",source:"@site/docs/exercises/git/git03.mdx",sourceDirName:"exercises/git",slug:"/exercises/git/git03",permalink:"/java-docs/pr-preview/pr-142/exercises/git/git03",draft:!1,unlisted:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/git/git03.mdx",tags:[],version:"current",frontMatter:{title:"Git03",description:""},sidebar:"exercisesSidebar",previous:{title:"Git02",permalink:"/java-docs/pr-preview/pr-142/exercises/git/git02"},next:{title:"Git04",permalink:"/java-docs/pr-preview/pr-142/exercises/git/git04"}},c={},d=[{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function l(e){const i={code:"code",em:"em",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Starte die Kommandozeile (z.B. Windows PowerShell)"}),"\n",(0,t.jsxs)(i.li,{children:["F\xfchre den Befehl\n",(0,t.jsx)(i.code,{children:'git init "[Pfad/Der Name Deines ersten lokalen Repositorys]"'})," aus, um ein\nlokales Repository zu erstellen"]}),"\n",(0,t.jsxs)(i.li,{children:["F\xfchre den Befehl ",(0,t.jsx)(i.code,{children:'cd "[Pfad/Der Name Deines ersten lokalen Repositorys]"'})," aus,\num zum Arbeitsbereich Deines ersten lokalen Repositorys zu wechseln"]}),"\n",(0,t.jsxs)(i.li,{children:["F\xfchre den Befehl\n",(0,t.jsx)(i.code,{children:'git remote add origin "https://github.com/[Dein GitHub Benutzername]/[Der Name Deines remote Repositorys]"'}),"\naus, um eine Verbindung zwischen dem lokalen Repository und dem remote\nRepository herzustellen"]}),"\n",(0,t.jsxs)(i.li,{children:["F\xfchre den Befehl ",(0,t.jsx)(i.code,{children:"git pull origin main"})," aus, um den Arbeitsbereich zu\naktualisieren"]}),"\n",(0,t.jsxs)(i.li,{children:["F\xfchre den Befehl ",(0,t.jsx)(i.code,{children:"git switch main"})," aus, um zum Branch ",(0,t.jsx)(i.em,{children:"main"})," zu wechseln"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-console",children:"PS C:\\Users\\Schmid> git init \"C:/Users/Schmid/git/JavaA\"\nInitialized empty Git repository in C:/Users/Schmid/git/JavaA/.git/\nPS C:\\Users\\Schmid> cd \"C:/Users/Schmid/git/JavaA\"\nPS C:\\Users\\Schmid\\git\\JavaA> git remote add origin \"https://github.com/schmid/Java\"\nPS C:\\Users\\Schmid\\git\\JavaA> git pull origin main\nremote: Enumerating objects: 10, done.\nremote: Counting objects: 100% (10/10), done.\nremote: Compressing objects: 100% (6/6), done.\nremote: Total 10 (delta 2), reused 5 (delta 1), pack-reused 0\nUnpacking objects: 100% (10/10), 2.28 KiB | 44.00 KiB/s, done.\nFrom https://github.com/appenmaier/Java\n * branch            main       -> FETCH_HEAD\n * [new branch]      main       -> origin/main\nPS C:\\Users\\Schmid\\git\\JavaA> git switch main\nSwitched to a new branch 'main'\nbranch 'main' set up to track 'origin/main'.\nPS C:\\Users\\Schmid\\git\\JavaA>\n"})})]})}function m(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>a});var t=n(67294);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);