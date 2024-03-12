import{A as D,B as l,C as d,D as u,E as B,F as _,J as L,K as j,L as V,M as A,N as M,O as G,P as z,Q as J,R,S as K,T as $,U as H,V as q,W as Q,X as W,Y as X,c as U,e as h,f as T,g as E,i as F,ia as w,ka as Y,la as I,m as o,ma as S,na as k,oa as Z,pa as ee,r as C,ra as te,s as f,t as i,u as n,v,w as y,x as t,y as s,z as c}from"./chunk-2MXYXYMR.js";var ne=(()=>{let e=class e{constructor(){this.nameLower="daniel",this.nameUpper="DANIEL",this.fullName="dANiel MaNcHoLA",this.date=new Date}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=h({type:e,selectors:[["app-basics-page"]],decls:79,vars:44,consts:[["header","Pipes Basicos",1,"p-2"],[1,"grid","mt-3"],[1,"col-12","md:col-4"],["header","uppercase"],["header","lowecase"],["header","titlecase"],[1,"col-12","md:col-12"],["header","date"]],template:function(p,r){p&1&&(i(0,"p-panel",0)(1,"h1"),t(2,"Pipes B\xE1sicos"),n(),i(3,"p"),t(4,"Pipes incluidos en Angular"),n()(),i(5,"div",1)(6,"div",2)(7,"p-card",3),t(8),l(9,"uppercase"),n()(),i(10,"div",2)(11,"p-card",4),t(12),l(13,"lowercase"),n()(),i(14,"div",2)(15,"p-card",5),t(16),l(17,"titlecase"),n()(),i(18,"div",6)(19,"p-card",7)(20,"ol")(21,"li")(22,"strong"),t(23),l(24,"date"),n(),t(25," - "),i(26,"i"),t(27," date "),n()(),i(28,"li")(29,"strong"),t(30),l(31,"date"),n(),t(32," - "),i(33,"i"),t(34," date:'short' "),n()(),i(35,"li")(36,"strong"),t(37),l(38,"date"),n(),t(39," - "),i(40,"i"),t(41," date:'long' "),n()(),i(42,"li")(43,"strong"),t(44),l(45,"date"),n(),t(46," - "),i(47,"i"),t(48," date:'MMMM' "),n()(),i(49,"li")(50,"strong"),t(51),l(52,"date"),n(),t(53," - "),i(54,"i"),t(55," date:'MMMM dd, yy' "),n()()(),v(56,"hr"),i(57,"ol")(58,"li")(59,"strong"),t(60),l(61,"date"),n(),t(62," - "),i(63,"i"),t(64," date:'long':'GMT-6' "),n()(),i(65,"li")(66,"strong"),t(67),l(68,"date"),n(),t(69," - "),i(70,"i"),t(71," date:'long':'GMT-4' "),n()(),i(72,"li")(73,"strong"),t(74),l(75,"date"),n(),t(76," - "),i(77,"i"),t(78," date:'long':'':'es-CO' "),n()()()()()()),p&2&&(o(8),c(" ",d(9,11,r.nameUpper)," "),o(4),c(" ",d(13,13,r.nameLower)," "),o(4),c(" ",d(17,15,r.fullName)," "),o(7),c(" ",d(24,17,r.date)," "),o(7),c(" ",u(31,19,r.date,"short")," "),o(7),s(u(38,22,r.date,"long")),o(7),s(u(45,25,r.date,"MMMM")),o(7),s(u(52,28,r.date,"MMMM dd, yy")),o(9),s(B(61,31,r.date,"long","GMT-6")),o(7),s(B(68,35,r.date,"long","GMT-4")),o(7),s(_(75,39,r.date,"long","","es-CO")))},dependencies:[I,S,G,A,M,z]});let a=e;return a})();function ce(a,e){if(a&1&&(i(0,"li")(1,"b"),t(2),l(3,"titlecase"),n(),t(4),n()),a&2){let P=e.$implicit;o(2),c("",d(3,2,P.key),":"),o(2),c(" ",P.value," ")}}function ue(a,e){a&1&&(i(0,"pre"),t(1,"Resolviendo Observable"),n())}function fe(a,e){a&1&&(i(0,"pre"),t(1,"Resolviendo Promesa"),n())}var ae=(()=>{let e=class e{constructor(){this.name="Daniel",this.gender="Male",this.invitationMap={Male:"invitarlo",Female:"invitarla"},this.clientes=["Daniel","Fernanda","Laura","Jose","Guillermo","Luz","Nataly"],this.clientsMap={"=0":"no tenemos ning\xFAn cliente esperando.","=1":"tenemos un cliente esperando.","=2":"tenemos 2 clientes esperando.",other:"tenemos # clientes esperando."},this.person={name:"Daniel",age:"23",city:"Bogot\xE1"},this.observableTime=U(2e3),this.promiseValue=new Promise((m,p)=>{setTimeout(()=>{m("Tenemos informaci\xF3n en la promesa."),console.log("Tenemos informaci\xF3n en la promesa.")},3500)})}changeClient(){this.name="Melisa",this.gender="Female"}deleteClient(){this.clientes.pop()}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=h({type:e,selectors:[["app-uncommon-page"]],decls:65,vars:44,consts:[["header","Pipes No Comunes",1,"p-2"],[1,"grid","mt-3"],[1,"col-12","md:col-6"],["legend","i18nSelect Pipe",1,"mt-3",3,"toggleable"],["label","Cambiar persona",3,"click"],["legend","i18nPlural Pipe",1,"mt-3",3,"toggleable"],["label","Eliminar cliente",3,"click"],["legend","Slice Pipe",1,"mt-3",3,"toggleable"],["legend","JSON Pipe",1,"mt-3",3,"toggleable"],["legend","KeyValue Pipe",1,"mt-3",3,"toggleable"],[4,"ngFor","ngForOf"],["legend","Async Pipe",1,"mt-3",3,"toggleable"],[4,"ngIf"]],template:function(p,r){p&1&&(i(0,"p-panel",0)(1,"h1"),t(2,"Pipes No Comunes"),n()(),i(3,"div",1)(4,"div",2)(5,"p-fieldset",3)(6,"p"),t(7," Saludos "),i(8,"strong")(9,"u"),t(10),n()(),t(11,", me gustaria "),i(12,"strong")(13,"u"),t(14),l(15,"i18nSelect"),n()(),t(16," a nuestro evento. "),n(),i(17,"p-button",4),y("click",function(){return r.changeClient()}),n()()(),i(18,"div",2)(19,"p-fieldset",5)(20,"p"),t(21),l(22,"i18nPlural"),n(),i(23,"p-button",6),y("click",function(){return r.deleteClient()}),n()()(),i(24,"div",2)(25,"p-fieldset",7)(26,"b"),t(27,"Original"),n(),i(28,"pre"),t(29),n(),v(30,"hr"),i(31,"b"),t(32,"Slice:0:2"),n(),i(33,"pre"),t(34),l(35,"slice"),n(),v(36,"hr"),i(37,"b"),t(38,"Slice:1:3"),n(),i(39,"pre"),t(40),l(41,"slice"),n()()(),i(42,"div",2)(43,"p-fieldset",8)(44,"pre"),t(45),l(46,"json"),n()()(),i(47,"div",2)(48,"p-fieldset",9)(49,"ul"),C(50,ce,5,4,"li",10),l(51,"keyvalue"),n()()(),i(52,"div",2)(53,"p-fieldset",11),C(54,ue,2,0,"pre",12),l(55,"async"),i(56,"pre"),t(57),l(58,"async"),n(),v(59,"hr"),C(60,fe,2,0,"pre",12),l(61,"async"),i(62,"pre"),t(63),l(64,"async"),n()()()()),p&2&&(o(5),f("toggleable",!0),o(5),s(r.name),o(4),s(u(15,18,r.gender,r.invitationMap)),o(5),f("toggleable",!0),o(2),c("Actualmente ",u(22,21,r.clientes.length,r.clientsMap),""),o(4),f("toggleable",!0),o(4),s(r.clientes),o(5),s(B(35,24,r.clientes,0,2)),o(6),s(B(41,28,r.clientes,1,3)),o(3),f("toggleable",!0),o(2),s(d(46,32,r.person)),o(3),f("toggleable",!0),o(2),f("ngForOf",d(51,34,r.person)),o(3),f("toggleable",!0),o(),f("ngIf",!d(55,36,r.observableTime)),o(3),s(d(58,38,r.observableTime)),o(3),f("ngIf",!d(61,40,r.promiseValue)),o(3),s(d(64,42,r.promiseValue)))},dependencies:[L,j,k,Z,S,V,K,W,M,J,R,$]});let a=e;return a})();var re=(()=>{let e=class e{constructor(){this.totalSells=32322442423232e-4,this.percentage=.4856}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=h({type:e,selectors:[["app-numbers-page"]],decls:16,vars:13,consts:[["header","Pipes Numeros",1,"p-2"],[1,"grid","mt-3"],[1,"col-12","md:col-4"],["header","Ventas","subheader","del a\xF1o"],["header","Ventas Brutas","subheader","del a\xF1o"],["header","Ganancia Porcentual","subheader","del a\xF1o"]],template:function(p,r){p&1&&(i(0,"p-panel",0)(1,"h1"),t(2,"Pipes Numeros"),n()(),i(3,"div",1)(4,"div",2)(5,"p-card",3),t(6),l(7,"number"),n()(),i(8,"div",2)(9,"p-card",4),t(10),l(11,"currency"),n()(),i(12,"div",2)(13,"p-card",5),t(14),l(15,"percent"),n()()()),p&2&&(o(6),c(" ",u(7,3,r.totalSells,"1.2-2")," "),o(4),c(" ",_(11,6,r.totalSells+21032103310,"COP","symbol","1.4-4")," "),o(4),c(" ",d(15,11,r.percentage)," "))},dependencies:[I,S,H,q,Q]});let a=e;return a})();var b=function(a){return a[a.red=0]="red",a[a.black=1]="black",a[a.blue=2]="blue",a[a.green=3]="green",a}(b||{});var oe=(()=>{let e=class e{transform(m,p=!1){return p?m.toUpperCase():m.toLocaleLowerCase()}};e.\u0275fac=function(p){return new(p||e)},e.\u0275pipe=E({name:"toogleCase",type:e,pure:!0});let a=e;return a})();var pe=(()=>{let e=class e{transform(m){return m?"Si":"No"}};e.\u0275fac=function(p){return new(p||e)},e.\u0275pipe=E({name:"canFly",type:e,pure:!0});let a=e;return a})();var le=(()=>{let e=class e{transform(m,p){switch(p){case"name":return m.sort((r,g)=>r.name>g.name?1:-1);case"canFly":return m.sort((r,g)=>r.canFly>g.canFly?1:-1);case"color":return m.sort((r,g)=>r.color>g.color?1:-1);default:return m}}};e.\u0275fac=function(p){return new(p||e)},e.\u0275pipe=E({name:"sortBy",type:e,pure:!0});let a=e;return a})();function ye(a,e){a&1&&(i(0,"tr")(1,"th"),t(2,"Nombre"),n(),i(3,"th"),t(4,"\xBFPuede volar?"),n(),i(5,"th"),t(6,"Color"),n()())}function Se(a,e){if(a&1&&(i(0,"tr")(1,"td"),t(2),n(),i(3,"td"),t(4),l(5,"titlecase"),l(6,"canFly"),n(),i(7,"td"),t(8),n()()),a&2){let P=e.$implicit;o(2),s(P.name),o(2),s(d(5,3,d(6,5,P.canFly))),o(4),s(P.color)}}var xe=()=>({"min-width":"50rem"}),me=(()=>{let e=class e{constructor(){this.isUpperCase=!1,this.heroes=[{name:"Superman",canFly:!0,color:b.blue},{name:"Spiderman",canFly:!1,color:b.red},{name:"Batman",canFly:!1,color:b.black},{name:"Robin",canFly:!1,color:b.green},{name:"Linterna Verde",canFly:!0,color:b.green}],this.sortBy=""}toggleUpperCase(){this.isUpperCase=!this.isUpperCase}changeOrder(m){this.sortBy=m}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=h({type:e,selectors:[["app-order"]],decls:20,vars:10,consts:[["header","Pipes Personalizados",1,"p-2"],["header","ToogleUpperCase",1,"p-2"],[1,"flex","justify-content-center","flex-wrap"],["label","ToogleCase","icon","pi pi-arrow-circle-up",1,"mr-2",3,"click"],["header","Superh\xE9roes",1,"p-2"],[1,"flex","justify-content-end","flex-wrap"],["label","Por nombre","icon","pi pi-sort","styleClass","p-button-success",1,"mr-2",3,"click"],["label","Por volar","icon","pi pi-sort","styleClass","p-button-danger",1,"mr-2",3,"click"],["label","Por color","icon","pi pi-sort","styleClass","p-button-help",3,"click"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"]],template:function(p,r){p&1&&(i(0,"p-panel",0)(1,"h1"),t(2,"Pipes Personalizados"),n()(),i(3,"p-card",1)(4,"div",2)(5,"h1"),t(6),l(7,"toogleCase"),n()(),i(8,"div",2)(9,"p-button",3),y("click",function(){return r.toggleUpperCase()}),n()()(),i(10,"p-card",4)(11,"div",5)(12,"p-button",6),y("click",function(){return r.changeOrder("name")}),n(),i(13,"p-button",7),y("click",function(){return r.changeOrder("canFly")}),n(),i(14,"p-button",8),y("click",function(){return r.changeOrder("color")}),n()(),v(15,"hr"),i(16,"p-table",9),l(17,"sortBy"),C(18,ye,7,0,"ng-template",10)(19,Se,9,7,"ng-template",11),n()()),p&2&&(o(6),s(u(7,3,"Bienvenido",r.isUpperCase)),o(10),f("value",u(17,6,r.heroes,r.sortBy))("tableStyle",D(9,xe)))},dependencies:[k,Y,I,S,ee,M,oe,pe,le]});let a=e;return a})();var be=[{path:"",component:ne},{path:"numbers",component:re},{path:"uncommon",component:ae},{path:"custom",component:me},{path:"**",redirectTo:""}],se=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=T({type:e}),e.\u0275inj=F({imports:[w.forChild(be),w]});let a=e;return a})();var tt=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=T({type:e}),e.\u0275inj=F({imports:[X,se,te]});let a=e;return a})();export{tt as ProductsModule};