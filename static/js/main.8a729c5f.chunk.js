(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{51:function(e,a,t){e.exports=t(61)},61:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(7),m=t.n(r),l=t(98),i=t(36),c=t(27),s=t(88),p=t(102),u=t(89),d=t(99),f=t(90),E=t(91),b=t(100),L=function(e){return o.a.createElement(b.a,{button:!0,component:c.b,to:e.href,title:e.title,onClick:e.onNavLinkClicked},e.children)},h=Object(s.a)((function(e){return Object(p.a)({root:{display:"flex"},drawer:{width:70,flexShrink:0},drawerPaper:{width:70,backgroundColor:e.palette.primary.dark},navbarItemRoot:{display:"flex",flexDirection:"column",alignItems:"center",width:"inherit"},icon:{color:e.palette.common.white},selectedIcon:{color:e.palette.secondary.light}})})),g=function(e){var a=e.navigationBarItems,t=e.onNavItemSlectionChanged,r=h(),m=Object(n.useState)(a[0]),l=Object(i.a)(m,2),c=l[0],s=l[1],p=Object(n.useCallback)((function(e){s(e),t&&t(e.tooltip)}),[s,t]);return o.a.createElement("div",null,o.a.createElement(u.a,null),o.a.createElement(d.a,{anchor:"left",className:r.drawer,classes:{paper:r.drawerPaper},variant:"permanent"},o.a.createElement(f.a,null,a&&a.map((function(e){return o.a.createElement(L,{href:e.link,key:e.id,title:e.tooltip,"data-testid":"item-".concat(e.id),onNavLinkClicked:function(){return p(e)}},(e.icon||e.fontAwesomeClassName)&&o.a.createElement("div",{className:r.navbarItemRoot},e.fontAwesomeClassName?o.a.createElement(E.a,{"data-testid":"item-fontawesome-icon-".concat(e.id),className:"\n                                                    ".concat(e.fontAwesomeClassName," \n                                                    ").concat(r.icon," \n                                                    ").concat(e.id===c.id&&r.selectedIcon,"\n                                                ")}):o.a.createElement(E.a,{"data-testid":"item-icon-".concat(e.id)},e.icon)),e.label&&o.a.createElement("span",{"data-testid":"item-label-".concat(e.id)},e.label))})))))},k=[{id:1,tooltip:"Profile",fontAwesomeClassName:"fas fa-user-tie",link:"/profile"},{id:2,tooltip:"Education",fontAwesomeClassName:"fa fa-user-graduate",link:"/education"},{id:3,tooltip:"Experience",fontAwesomeClassName:"fa fa-briefcase",link:"/experience"},{id:4,tooltip:"Skills",fontAwesomeClassName:"fa fa-tasks",link:"/skills"},{id:5,tooltip:"Blogs",fontAwesomeClassName:"fa fa-book",link:"/blogs"},{id:6,tooltip:"Social Media and Contact",fontAwesomeClassName:"fas fa-address-book",link:"/contact"}],v=t(6),C=function(){return o.a.createElement(o.a.Fragment,null,"Skills")},N=function(){return o.a.createElement(o.a.Fragment,null,"Contact")},w=t(92),x=t(93),j=t(94),O=t(101),A=t(95),I=Object(s.a)((function(e){return Object(p.a)({root:{maxWidth:250},msAvatar:{backgroundColor:e.palette.secondary.light},beAvatar:{backgroundColor:e.palette.error.light}})})),S=function(){var e=I();return o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,{container:!0,spacing:2},o.a.createElement(w.a,{item:!0,sm:1}),o.a.createElement(w.a,{item:!0,xs:12,sm:5},o.a.createElement(x.a,{className:e.root},o.a.createElement(j.a,{avatar:o.a.createElement(O.a,{className:e.msAvatar},"MS"),title:"Master of Science",subheader:"2010-2012"}),o.a.createElement(A.a,null,"Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom"))),o.a.createElement(w.a,{item:!0,xs:12,sm:5},o.a.createElement(x.a,{className:e.root},o.a.createElement(j.a,{avatar:o.a.createElement(O.a,{className:e.beAvatar},"BE"),title:"Bachelor of Engg.",subheader:"2010-2012"}),o.a.createElement(A.a,null,"Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom"))),o.a.createElement(w.a,{item:!0,sm:1})))},y=function(){return o.a.createElement(o.a.Fragment,null,"Experience")},B=function(){return o.a.createElement(o.a.Fragment,null,"Profile")},F=function(){return o.a.createElement(v.c,null,o.a.createElement(v.a,{path:"/skills",component:C}),o.a.createElement(v.a,{path:"/contact",component:N}),o.a.createElement(v.a,{path:"/education",component:S}),o.a.createElement(v.a,{path:"/experience",component:y}),o.a.createElement(v.a,{path:"/profile",component:B}),o.a.createElement(v.a,{path:"/blogs",component:y}),o.a.createElement(v.a,{path:"/",exact:!0,component:B}))},P=t(96),M=t(97),T=t(38),J=Object(s.a)((function(e){return Object(p.a)({appBar:{position:"absolute",left:70,backgroundColor:e.palette.common.white},header:{color:e.palette.primary.dark}})})),R=function(e){var a=J(),t=e.pageTitle;return o.a.createElement(P.a,{className:a.appBar},o.a.createElement(M.a,null,o.a.createElement(T.a,{variant:"h6",noWrap:!0,className:a.header},t)))},W=Object(s.a)((function(e){return Object(p.a)({root:{display:"flex"},appContainer:{flexGrow:1,paddingLeft:e.spacing(1)},mainContent:{paddingTop:e.spacing(10)}})})),D=function(){var e=W(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],m=t[1];return o.a.createElement(c.a,null,o.a.createElement("div",{className:e.root},o.a.createElement(g,{navigationBarItems:k,onNavItemSlectionChanged:function(e){return m(e)}}),o.a.createElement("div",{className:e.appContainer},o.a.createElement(R,{pageTitle:r}),o.a.createElement("div",{className:e.mainContent},o.a.createElement(F,null)))))},G=t(49),q=Object(G.a)(),z=function(){return o.a.createElement(l.a,{theme:q},o.a.createElement(D,null))};m.a.render(o.a.createElement(z,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.8a729c5f.chunk.js.map