(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"99Un":function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",(function(){return T}));var i=n("ofXK"),o=n("tyNb"),s=n("30QQ"),l=n("fXoL");const c=["*"];let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Cb({type:t,selectors:[["app-simple-list"]],ngContentSelectors:c,decls:2,vars:0,consts:[[1,"simple-list"]],template:function(t,e){1&t&&(l.Xb(),l.Mb(0,"ul",0),l.Wb(1),l.Lb())},styles:[".simple-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}"]}),t})();function r(t,e){if(1&t&&(l.Mb(0,"h3"),l.gc(1),l.Lb(),l.Mb(2,"p"),l.Wb(3),l.Lb()),2&t){const t=l.Vb();l.zb(1),l.hc(t.title)}}function p(t,e){1&t&&l.Kb(0)}const b=function(){return{$implicit:!1}};function g(t,e){if(1&t&&(l.Mb(0,"a",4),l.ec(1,p,1,0,"ng-container",5),l.Lb()),2&t){const t=l.Vb(),e=l.bc(1);l.Yb("routerLink",t.linkToPage),l.zb(1),l.Yb("ngTemplateOutlet",e)("ngTemplateOutletContext",l.Zb(3,b))}}function m(t,e){1&t&&l.Kb(0)}function u(t,e){if(1&t&&(l.Mb(0,"div"),l.ec(1,m,1,0,"ng-container",5),l.Lb()),2&t){l.Vb();const t=l.bc(1);l.zb(1),l.Yb("ngTemplateOutlet",t)("ngTemplateOutletContext",l.Zb(2,b))}}const d=["*"];let f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Cb({type:t,selectors:[["app-simple-list-item"]],inputs:{title:"title",linkToPage:"linkToPage"},ngContentSelectors:d,decls:5,vars:2,consts:[["contentTemplate",""],[1,"simple-list-item"],["href","javascript:",3,"routerLink",4,"ngIf"],[4,"ngIf"],["href","javascript:",3,"routerLink"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(l.Xb(),l.ec(0,r,4,1,"ng-template",null,0,l.fc),l.Mb(2,"li",1),l.ec(3,g,2,4,"a",2),l.ec(4,u,2,3,"div",3),l.Lb()),2&t&&(l.zb(3),l.Yb("ngIf",e.linkToPage),l.zb(1),l.Yb("ngIf",!e.linkToPage))},directives:[i.j,o.a,i.l],styles:[".simple-list-item[_ngcontent-%COMP%]{background:#e7e7e7;border-left:3px solid #333;margin-bottom:2rem;padding:.5rem 0 .5rem 1.5rem}.simple-list-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem}.simple-list-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.simple-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.simple-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1543c6}.simple-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%]{color:#001247}"]}),t})();function h(t,e){if(1&t&&(l.Mb(0,"app-simple-list-item",2),l.gc(1),l.Lb()),2&t){const t=e.$implicit;l.Yb("title",t.index+": "+t.title)("linkToPage",t.linkToPage),l.zb(1),l.ic(" ",t.content," ")}}const P=[{path:"",component:s.a,children:[{path:"",component:(()=>{class t{constructor(){this.list=[{index:1,title:"Fix the Issues on this Page",linkToPage:null,content:"There are several problems with this page, find and fix the bugs."},{index:2,title:"Improve this Basic Design",linkToPage:null,content:"The design of this website is very plain, update the styles to make this site your own."},{index:2,title:"Complete the Taskboard Logic",linkToPage:"'/taskboard'",content:"Navigate to the taskboard page and complete the logic as described in this ticket."},{index:4,title:"Write a Notes Component",linkToPage:"/notes",content:"We need to be able to capture notes about this site. Write a new component that will allow us to capture and view notes."},{index:5,title:"Add Temperature to Header",linkToPage:"/weather",content:"Use the openweathermap.org api to show the latest weather information for New York, New York."}]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Cb({type:t,selectors:[["app-home"]],decls:7,vars:1,consts:[[1,"small-page"],[3,"title","linkToPage",4,"ngFor","ngForOf"],[3,"title","linkToPage"]],template:function(t,e){1&t&&(l.Mb(0,"div",0),l.Mb(1,"h1"),l.gc(2,"Safeguard Privacy Developor Test"),l.Lb(),l.Mb(3,"p"),l.gc(4,"Below are the tasks that need to be done to complete this developer test."),l.Lb(),l.Lb(),l.Mb(5,"app-simple-list"),l.ec(6,h,2,3,"app-simple-list-item",1),l.Lb()),2&t&&(l.zb(6),l.Yb("ngForOf",e.list))},directives:[a,i.i,f],styles:[""]}),t})()}]}];let k=(()=>{class t{}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(e){return new(e||t)},imports:[[o.b.forChild(P)],o.b]}),t})();var M=n("84Lg");let T=(()=>{class t{}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(e){return new(e||t)},imports:[[i.b,k,M.a]]}),t})()}}]);