(this["webpackJsonpcv-abasse"]=this["webpackJsonpcv-abasse"]||[]).push([[0],{106:function(e,t,s){"use strict";s.r(t);var i=s(0),a=s.n(i),n=s(8),c=s.n(n),l=(s(94),s(14)),r=s(15),o=s(17),h=s(16),d=(s.p,s(95),s(107)),p=s(150),j=s(151),b=s(140),x=s(5),u=s(152),m=s.p+"static/media/AbasseLogo.8ee32f20.png",O=s(1),w=Object(x.a)({root:{justifyContent:"center"}})(p.a),v=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).handleMenuChange=function(e){if(i.props.onMenuSelect(e.target.outerText),"Mes exp\xe9riences professionnel"==e.target.outerText){i.setState({heightHundredPercent:!0})}else{i.setState({heightHundredPercent:!1})}},i.state={heightHundredPercent:!1},i}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.isOnHeightHundredPercent&&window.screen.height<=720?"100%":"100vh";return Object(O.jsx)(b.a,{className:this.props.classes.root,maxWidth:"xs",children:Object(O.jsx)(d.a,{style:{height:e},className:this.props.classes.paper,children:Object(O.jsxs)(j.a,{className:this.props.classes.menu,children:[Object(O.jsx)("center",{children:Object(O.jsx)(u.a,{alt:"Abasse FIDALY",src:m,className:this.props.classes.avatar})}),Object(O.jsx)(w,{onClick:this.handleMenuChange,children:"Accueil"}),Object(O.jsx)(w,{onClick:this.handleMenuChange,children:"Mes comp\xe9tences"}),Object(O.jsx)(w,{onClick:this.handleMenuChange,children:"Mes exp\xe9riences professionnelles"}),Object(O.jsx)(w,{onClick:this.handleMenuChange,children:"Mes r\xe9alisations"})]})})})}}]),s}(a.a.Component),g=Object(x.a)({root:{margin:0,padding:0,width:"20vw"},paper:{backgroundColor:"#3240a8",color:"white"},avatar:{width:"10vw",height:"10vw",marginBottom:"7vh"},menu:{paddingTop:"25vh"}})(v),f=s(141),y=s(142),E=s(144),C=s(143),S=s(149),B=s(68),M=s.n(B),N=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).handleMenuChange=function(e){i.props.onMenuSelect(e.target.outerText)},i.handleMobileMenuClose=function(){i.setState({mobileMoreAnchorEl:null})},i.handleMobileMenuOpen=function(e){i.setState({mobileMoreAnchorEl:e.currentTarget})},i.updateComponentSize=function(){var e=window.innerWidth<980?"flex":"none",t=window.innerWidth>980?"flex":"none";i.setState({mobileMenuDisplay:e,largeScreenMenuDisplay:t})},i.state={mobileMoreAnchorEl:null,mobileMenuDisplay:"flex",largeScreenMenuDisplay:"flex"},i.responsiveValueWidth=825,i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.updateComponentSize(),window.addEventListener("resize",this.updateComponentSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateComponentSize)}},{key:"render",value:function(){var e=this.props.classes;return Object(O.jsxs)("div",{className:e.grow,children:[Object(O.jsx)(f.a,{position:"static",children:Object(O.jsxs)(y.a,{children:[Object(O.jsx)(C.a,{className:e.title,variant:"h6",noWrap:!0,children:"Abasse FIDALY"}),Object(O.jsx)("div",{className:e.grow}),Object(O.jsx)("div",{style:{display:this.state.mobileMenuDisplay},children:Object(O.jsx)(E.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu","aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit",children:Object(O.jsx)(M.a,{})})}),Object(O.jsxs)("div",{style:{display:this.state.largeScreenMenuDisplay},children:[Object(O.jsx)(p.a,{onClick:this.handleMenuChange,children:"Accueil"}),Object(O.jsx)(p.a,{onClick:this.handleMenuChange,children:"Mes comp\xe9tences"}),Object(O.jsx)(p.a,{onClick:this.handleMenuChange,children:"Mes exp\xe9riences professionnelles"}),Object(O.jsx)(p.a,{onClick:this.handleMenuChange,children:"Mes r\xe9alisations"})]})]})}),Object(O.jsxs)(S.a,{anchorEl:this.state.mobileMoreAnchorEl,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(this.state.mobileMoreAnchorEl),onClose:this.handleMobileMenuClose,children:[Object(O.jsx)(p.a,{onClick:this.handleMenuChange,children:"Accueil"}),Object(O.jsx)(p.a,{onClick:this.handleMenuChange,children:"Mes comp\xe9tences"}),Object(O.jsx)(p.a,{onClick:this.handleMenuChange,children:"Mes exp\xe9riences professionnelles"}),Object(O.jsx)(p.a,{onClick:this.handleMenuChange,children:"Mes r\xe9alisations"})]})]})}}]),s}(a.a.Component),W=Object(x.a)({grow:{flexGrow:1,width:"98vw"},sectionDesktop:{display:"flex"},sectionMobile:{display:"none"},title:{overflow:"visible"}})(N),T=s(24),k=s.n(T),A=s(146),L=s(69),z=s.n(L),P=s(153),J=s(145),H=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).updateComponentSize=function(){var e=i.state.widthBlocExp;window.innerWidth<1172||window.innerHeight<539?e="98vw":window.innerWidth>1172&&(e="80vw");var t=e,s=window.innerWidth<1513||window.innerHeight<554?"auto":"33vh";i.setState({widthBlocExp:e,widthBlocExpText:t,heightBloc:s})},i.state={widthBlocExp:"80vw",widthBlocExpText:"80vw",heightBloc:"33vh"},i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.updateComponentSize(),window.addEventListener("resize",this.updateComponentSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateComponentSize)}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(J.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(O.jsxs)(A.a,{container:!0,spacing:3,children:[Object(O.jsxs)(A.a,{item:!0,xs:12,className:this.props.classes.bloc,style:{height:this.state.heightBloc},children:[Object(O.jsx)(b.a,{className:this.props.classes.blocExp,style:{width:this.state.widthBlocExp},maxWidth:"false",children:Object(O.jsx)(f.a,{position:"static",children:Object(O.jsxs)(y.a,{variant:"dense",children:[Object(O.jsx)(E.a,{edge:"start",className:this.props.classes.menuButton,color:"inherit","aria-label":"menu",children:Object(O.jsx)(k.a,{})}),Object(O.jsx)(C.a,{variant:"h6",color:"inherit",children:"Octobre 2019 - aujourd'hui : D\xe9veloppeur Java fullstack \xe0 l'INSEE"})]})})}),Object(O.jsx)(b.a,{className:this.props.classes.blocExpText,style:{width:this.state.widthBlocExpText},maxWidth:"false",children:Object(O.jsx)("p",{children:"D\xe9veloppeur full stack au sein de l'INSEE, j'ai int\xe9gr\xe9 le domaine secr\xe9tariat g\xe9n\xe9ral et ai particip\xe9 au d\xe9veloppement et \xe0 la maintenance des applications du domaines.J'ai pu travailler et monter en comp\xe9tence sur les technologies Spring et notamment quelques frameworks Javascript tel que ReactJS et Jquery."})}),Object(O.jsxs)(b.a,{className:this.props.classes.techList,style:{width:this.state.widthBlocExpText},maxWidth:"false",children:[Object(O.jsx)(P.a,{label:"SpringBatch"}),Object(O.jsx)(P.a,{label:"SpringMVC"}),Object(O.jsx)(P.a,{label:"SpringRest"}),Object(O.jsx)(P.a,{label:"Spring Boot"}),Object(O.jsx)(P.a,{label:"Strust2"}),Object(O.jsx)(P.a,{label:"Jquery"}),Object(O.jsx)(P.a,{label:"ReactJS"}),Object(O.jsx)(P.a,{label:"Maven"}),Object(O.jsx)(P.a,{label:"Hibernate"}),Object(O.jsx)(P.a,{label:"PostGreSql"}),Object(O.jsx)(P.a,{label:"JEE"}),Object(O.jsx)(P.a,{label:"Travail d'\xe9quipe"}),Object(O.jsx)(P.a,{label:"Agilit\xe9"})]})]}),Object(O.jsxs)(A.a,{item:!0,xs:12,className:this.props.classes.bloc,style:{height:this.state.heightBloc},children:[Object(O.jsx)(b.a,{className:this.props.classes.blocExp,style:{width:this.state.widthBlocExp},maxWidth:"false",children:Object(O.jsx)(f.a,{position:"static",children:Object(O.jsxs)(y.a,{variant:"dense",children:[Object(O.jsx)(E.a,{edge:"start",className:this.props.classes.menuButton,color:"inherit","aria-label":"menu",children:Object(O.jsx)(z.a,{})}),Object(O.jsx)(C.a,{variant:"h6",color:"inherit",children:"Juillet 2019 - Octobre 2019 : Adjoint administratif \xe0 l'OFPRA"})]})})}),Object(O.jsx)(b.a,{className:this.props.classes.blocExpText,style:{width:this.state.widthBlocExpText},maxWidth:"false",children:Object(O.jsx)("p",{children:"En tant qu'adjoint administratif au sein de l'OFRPA j'avais pour mission de traiter les demandes et d\xe9cisions des demandeurs d'asiles. J'y ai pu am\xe9liorer mon organisation et enrichir mes capacit\xe9s de r\xe9daction."})}),Object(O.jsxs)(b.a,{className:this.props.classes.techList,style:{width:this.state.widthBlocExpText},maxWidth:"false",children:[Object(O.jsx)(P.a,{label:"Organisation"}),Object(O.jsx)(P.a,{label:"R\xe9daction"})]})]}),Object(O.jsxs)(A.a,{item:!0,xs:12,className:this.props.classes.bloc,style:{height:this.state.heightBloc},children:[Object(O.jsx)(b.a,{className:this.props.classes.blocExp,style:{width:this.state.widthBlocExp},maxWidth:"false",children:Object(O.jsx)(f.a,{position:"static",children:Object(O.jsxs)(y.a,{variant:"dense",children:[Object(O.jsx)(E.a,{edge:"start",className:this.props.classes.menuButton,color:"inherit","aria-label":"menu",children:Object(O.jsx)(k.a,{})}),Object(O.jsx)(C.a,{variant:"h6",color:"inherit",children:"Avril 2019 - Juillet 2019 : D\xe9veloppeur Java JEE \xe0 l'OPTAE"})]})})}),Object(O.jsx)(b.a,{className:this.props.classes.blocExpText,style:{width:this.state.widthBlocExpText},maxWidth:"false",children:Object(O.jsx)("p",{children:"Lors de ma premi\xe8re exp\xe9rience professionnelle dans le monde du d\xe9veloppement web \xe0 l'OPTAE en tant que d\xe9veloppeur web JEE,j'ai eu l'occasion de monter en comp\xe9tences sur des frameworks tels que Struts2,Maven, Hibernate. J'avais pour mission de coder une application JAVA from scratch, mais \xe9galement la maintenance d'une application dans laquelle j'ai pu monter en comp\xe9tences sur AngularJS."})}),Object(O.jsxs)(b.a,{className:this.props.classes.techList,style:{width:this.state.widthBlocExpText},maxWidth:"false",children:[Object(O.jsx)(P.a,{label:"Struts2"}),Object(O.jsx)(P.a,{label:"AngularJS"}),Object(O.jsx)(P.a,{label:"MySQL"}),Object(O.jsx)(P.a,{label:"JEE"}),Object(O.jsx)(P.a,{label:"D\xe9veloppement par couches"})]})]})]})})})}}]),s}(a.a.Component),R=Object(x.a)({bloc:{margin:0},blocExp:{paddingTop:"6px"},blocExpText:{paddingTop:0},menuButton:{marginRight:"2px"},techList:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:"5px"},marginTop:0}})(H),D=s(39),q=s.n(D),F=s(38),I=s.n(F),U=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).updateComponentSize=function(){var e=i.state.widthBlocExp;window.innerWidth<1172||window.innerHeight<539?e="98vw":window.innerWidth>1172&&(e="80vw");var t=e,s=window.innerWidth<1513||window.innerHeight<554?"auto":"33vh";i.setState({widthBlocExp:e,widthBlocExpText:t,heightBloc:s})},i.state={widthBlocExp:"80vw",widthBlocExpText:"80vw",heightBloc:"33vh"},i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.updateComponentSize(),window.addEventListener("resize",this.updateComponentSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateComponentSize)}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(J.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(O.jsxs)(A.a,{container:!0,spacing:3,children:[Object(O.jsxs)(A.a,{item:!0,xs:12,className:this.props.classes.bloc,style:{height:this.state.heightBloc},children:[Object(O.jsx)(b.a,{className:this.props.classes.blocExp,style:{width:this.state.widthBlocExp},maxWidth:"false",children:Object(O.jsx)(f.a,{position:"static",children:Object(O.jsxs)(y.a,{variant:"dense",children:[Object(O.jsx)(E.a,{edge:"start",className:this.props.classes.menuButton,color:"inherit","aria-label":"menu",children:Object(O.jsx)(k.a,{})}),Object(O.jsx)(C.a,{variant:"h6",color:"inherit",children:"Mon site web portfolio"}),Object(O.jsx)("div",{className:this.props.classes.emptySpace}),Object(O.jsx)(E.a,{href:"https://github.com/FidalyAbassePerso/mon-site-perso",edge:"start",color:"inherit","aria-label":"menu",children:Object(O.jsx)(I.a,{className:this.props.classes.downloadButton})}),Object(O.jsx)(E.a,{href:"https://fidalyabasseperso.github.io/mon-site-perso/",edge:"start",color:"inherit","aria-label":"menu",children:Object(O.jsx)(q.a,{})})]})})}),Object(O.jsx)(b.a,{className:this.props.classes.blocExpText,style:{width:this.state.widthBlocExpText},maxWidth:"false",children:Object(O.jsx)("p",{children:"R\xe9alisation de mon site web portfolio."})}),Object(O.jsxs)(b.a,{className:this.props.classes.techList,style:{width:this.state.widthBlocExpText},maxWidth:"false",children:[Object(O.jsx)(P.a,{label:"ReactJS"}),Object(O.jsx)(P.a,{label:"Javascript"}),Object(O.jsx)(P.a,{label:"Material-ui"})]})]}),Object(O.jsxs)(A.a,{item:!0,xs:12,className:this.props.classes.bloc,style:{height:this.state.heightBloc},children:[Object(O.jsx)(b.a,{className:this.props.classes.blocExp,style:{width:this.state.widthBlocExp},maxWidth:"false",children:Object(O.jsx)(f.a,{position:"static",children:Object(O.jsxs)(y.a,{variant:"dense",children:[Object(O.jsx)(E.a,{edge:"start",className:this.props.classes.menuButton,color:"inherit","aria-label":"menu",children:Object(O.jsx)(k.a,{})}),Object(O.jsx)(C.a,{variant:"h6",color:"inherit",children:"Site web dreamveloper"}),Object(O.jsx)("div",{className:this.props.classes.emptySpace}),Object(O.jsx)(E.a,{href:"https://github.com/FidalyAbassePerso/site-dreamveloper",edge:"start",color:"inherit","aria-label":"menu",children:Object(O.jsx)(I.a,{className:this.props.classes.downloadButton})}),Object(O.jsx)(E.a,{href:"https://dreamveloper-studio.com/",edge:"start",color:"inherit","aria-label":"menu",children:Object(O.jsx)(q.a,{})})]})})}),Object(O.jsx)(b.a,{className:this.props.classes.blocExpText,style:{width:this.state.widthBlocExpText},maxWidth:"false",children:Object(O.jsx)("p",{children:"R\xe9alisation du site web dreamveloper-studio.com."})}),Object(O.jsxs)(b.a,{className:this.props.classes.techList,style:{width:this.state.widthBlocExpText},maxWidth:"false",children:[Object(O.jsx)(P.a,{label:"HTML/CSS"}),Object(O.jsx)(P.a,{label:"Bootstrap"}),Object(O.jsx)(P.a,{label:"Javascript"})]})]}),Object(O.jsxs)(A.a,{item:!0,xs:12,className:this.props.classes.bloc,style:{height:this.state.heightBloc},children:[Object(O.jsx)(b.a,{className:this.props.classes.blocExp,style:{width:this.state.widthBlocExp},maxWidth:"false",children:Object(O.jsx)(f.a,{position:"static",children:Object(O.jsxs)(y.a,{variant:"dense",children:[Object(O.jsx)(E.a,{edge:"start",className:this.props.classes.menuButton,color:"inherit","aria-label":"menu",children:Object(O.jsx)(k.a,{})}),Object(O.jsx)(C.a,{variant:"h6",color:"inherit",children:"Site web bloopy & droopy"}),Object(O.jsx)("div",{className:this.props.classes.emptySpace}),Object(O.jsx)(E.a,{href:"https://github.com/FidalyAbassePerso/site-bloopy",edge:"start",color:"inherit","aria-label":"menu",children:Object(O.jsx)(I.a,{className:this.props.classes.downloadButton})}),Object(O.jsx)(E.a,{href:"https://dreamveloper-studio.com/Site%20Bloopy/index.html",edge:"start",color:"inherit","aria-label":"menu",children:Object(O.jsx)(q.a,{})})]})})}),Object(O.jsx)(b.a,{className:this.props.classes.blocExpText,style:{width:this.state.widthBlocExpText},maxWidth:"false",children:Object(O.jsx)("p",{children:"R\xe9alisation du site web bloopy and droopy."})}),Object(O.jsxs)(b.a,{className:this.props.classes.techList,style:{width:this.state.widthBlocExpText},maxWidth:"false",children:[Object(O.jsx)(P.a,{label:"HTML/CSS"}),Object(O.jsx)(P.a,{label:"Bootstrap"})]})]})]})})})}}]),s}(a.a.Component),G=Object(x.a)({bloc:{margin:0},blocExp:{paddingTop:"6px"},blocExpText:{paddingTop:0},menuButton:{marginRight:"2px"},techList:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:"5px"},paddingTop:"15px"},emptySpace:{flexGrow:1},downloadButton:{paddingRight:"17px"}})(U),V=s(58),Y=s(148),Q=(s.p,function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).updateComponentSize=function(){var e=i.state.widthBlocExp;(window.innerWidth<1172||window.innerHeight<539)&&(e="96vw"),window.innerWidth>1172&&(e="78vw"),i.setState({widthBlocExp:e})},i.state={widthBlocExp:window.innerWidth<1172||window.innerHeight<539?"96vw":"78vw"},i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateComponentSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateComponentSize)}},{key:"render",value:function(){var e;return Object(O.jsx)("div",{children:Object(O.jsx)(b.a,{className:this.props.classes.root,style:{width:this.state.widthBlocExp},maxWidth:"false",children:Object(O.jsx)(Y.a,{style:(e={width:this.state.widthBlocExp},Object(V.a)(e,"width",window.innerWidth<1172||window.innerHeight<539?"98.6vw":"80vw"),Object(V.a)(e,"height","100vh"),e),source:{uri:"https://www.ecv.fr/app/uploads/2019/09/christopher-gower-m_HRfLhgABo-unsplash.jpg"}})})})}}]),s}(a.a.Component)),_=Object(x.a)({root:{margin:0,padding:0},bloc:{margin:0},blocExpText:{paddingTop:0},image:{width:"80vw"}})(Q),K=s(147),X=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).updateComponentSize=function(){var e=i.state.widthBar,t=i.state.marginBar,s=i.state.labelWidth;window.innerWidth<1172||window.innerHeight<539?(e="88vw",s="98vw"):window.innerWidth>1172&&(e="70vw",s="80vw"),window.innerWidth<=355&&(t="8vw"),i.setState({widthBar:e,labelWidth:s,marginBar:t})},i.state={widthBar:window.innerWidth<1172||window.innerHeight<539?"88vw":"70vw",labelWidth:window.innerWidth<1172||window.innerHeight<539?"98vw":"80vw",marginBar:window.innerWidth<=355?"8vw":"6vw"},i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateComponentSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateComponentSize)}},{key:"render",value:function(){var e=this.state.labelWidth,t=this.state.marginBar;return Object(O.jsx)("div",{children:Object(O.jsx)(J.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(O.jsxs)(A.a,{container:!0,spacing:3,className:this.props.classes.root,children:[Object(O.jsxs)("div",{className:this.props.classes.bloc,children:[Object(O.jsx)(A.a,{item:!0,xs:12,children:Object(O.jsx)(C.a,{style:{width:e},children:"Technologies Spring (SpringMVC, SpringBatch, SpringRest, SpringBoot) "})}),Object(O.jsx)(A.a,{item:!0,xs:6,children:Object(O.jsx)(K.a,{className:this.props.classes.barProgress,style:{width:this.state.widthBar,marginLeft:t},variant:"determinate",value:70})})]}),Object(O.jsxs)("div",{className:this.props.classes.bloc,children:[Object(O.jsx)(A.a,{item:!0,xs:12,children:Object(O.jsx)(C.a,{style:{width:e},children:"Strusts2 "})}),Object(O.jsx)(A.a,{item:!0,xs:6,children:Object(O.jsx)(K.a,{className:this.props.classes.barProgress,style:{width:this.state.widthBar,marginLeft:t},variant:"determinate",value:70})})]}),Object(O.jsxs)("div",{className:this.props.classes.bloc,children:[Object(O.jsx)(A.a,{item:!0,xs:12,children:Object(O.jsx)(C.a,{style:{width:e},children:"ReactJs "})}),Object(O.jsx)(A.a,{item:!0,xs:6,children:Object(O.jsx)(K.a,{className:this.props.classes.barProgress,style:{width:this.state.widthBar,marginLeft:t},variant:"determinate",value:40})})]}),Object(O.jsxs)("div",{className:this.props.classes.bloc,children:[Object(O.jsx)(A.a,{item:!0,xs:12,children:Object(O.jsx)(C.a,{style:{width:e},children:"JQuery"})}),Object(O.jsx)(A.a,{item:!0,xs:6,children:Object(O.jsx)(K.a,{className:this.props.classes.barProgress,style:{width:this.state.widthBar,marginLeft:t},variant:"determinate",value:60})})]}),Object(O.jsxs)("div",{className:this.props.classes.bloc,children:[Object(O.jsx)(A.a,{item:!0,xs:12,children:Object(O.jsx)(C.a,{style:{width:e},children:"Maven"})}),Object(O.jsx)(A.a,{item:!0,xs:6,children:Object(O.jsx)(K.a,{className:this.props.classes.barProgress,style:{width:this.state.widthBar,marginLeft:t},variant:"determinate",value:60})})]}),Object(O.jsxs)("div",{className:this.props.classes.bloc,children:[Object(O.jsx)(A.a,{item:!0,xs:12,children:Object(O.jsx)(C.a,{style:{width:e},children:"Hibernate"})}),Object(O.jsx)(A.a,{item:!0,xs:6,children:Object(O.jsx)(K.a,{className:this.props.classes.barProgress,style:{width:this.state.widthBar,marginLeft:t},variant:"determinate",value:60})})]}),Object(O.jsxs)("div",{className:this.props.classes.bloc,children:[Object(O.jsx)(A.a,{item:!0,xs:12,children:Object(O.jsx)(C.a,{style:{width:e},children:"PostGreSql"})}),Object(O.jsx)(A.a,{item:!0,xs:6,children:Object(O.jsx)(K.a,{className:this.props.classes.barProgress,style:{width:this.state.widthBar,marginLeft:t},variant:"determinate",value:70})})]})]})})})}}]),s}(a.a.Component),Z=Object(x.a)({barProgress:{borderRadius:5,height:10},root:{paddingTop:"2vw"},bloc:{height:"14vh"}})(X),$=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).updateComponentSize=function(){i.setState({windowWidth:0})},i.handleMenuSelected=function(e){console.log(e),"Mes exp\xe9riences professionnelles"==e?i.setState({menuExperiencePro:!0,menuAcceuil:!1,menuRealisation:!1,menuCompetence:!1,menuContact:!1}):"Mes r\xe9alisations"==e?i.setState({menuExperiencePro:!1,menuAcceuil:!1,menuRealisation:!0,menuCompetence:!1,menuContact:!1}):"Contact"==e?i.setState({menuExperiencePro:!1,menuAcceuil:!1,menuRealisation:!1,menuCompetence:!1,menuContact:!0}):"Mes comp\xe9tences"==e?i.setState({menuExperiencePro:!1,menuAcceuil:!1,menuRealisation:!1,menuCompetence:!0,menuContact:!1}):i.setState({menuExperiencePro:!1,menuAcceuil:!0,menuRealisation:!1,menuCompetence:!1,menuContact:!1})},i.state={windowWidth:0,menuExperiencePro:!1,menuAcceuil:!0,menuRealisation:!1,menuCompetence:!1,menuContact:!1},document.title="Abasse FIDALY",i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateComponentSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateComponentSize)}},{key:"render",value:function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(A.a,{container:!0,children:[window.innerWidth<1172|window.innerHeight<539?Object(O.jsx)(W,{onMenuSelect:this.handleMenuSelected}):Object(O.jsx)(g,{isOnHeightHundredPercent:this.state.menuExperiencePro,onMenuSelect:this.handleMenuSelected}),this.state.menuAcceuil?Object(O.jsx)(A.a,{item:!0,xs:2,children:Object(O.jsx)(_,{})}):Object(O.jsx)("br",{}),this.state.menuExperiencePro?Object(O.jsx)(A.a,{item:!0,xs:2,children:Object(O.jsx)(R,{})}):Object(O.jsx)("br",{}),this.state.menuRealisation?Object(O.jsx)(A.a,{item:!0,xs:2,children:Object(O.jsx)(G,{})}):Object(O.jsx)("br",{}),this.state.menuCompetence?Object(O.jsx)(A.a,{item:!0,xs:2,children:Object(O.jsx)(Z,{})}):Object(O.jsx)("br",{})]})})}}]),s}(a.a.Component),ee=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,154)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),i(e),a(e),n(e),c(e)}))};c.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)($,{})}),document.getElementById("root")),ee()},94:function(e,t,s){},95:function(e,t,s){}},[[106,1,2]]]);
//# sourceMappingURL=main.9f043fa0.chunk.js.map