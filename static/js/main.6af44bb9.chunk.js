(this["webpackJsonpreact-marafon"]=this["webpackJsonpreact-marafon"]||[]).push([[0],{102:function(e,t,a){e.exports={cover:"BackGroundBlock_cover__1zX8R"}},103:function(e,t,a){e.exports={btn:"Button_btn__zCqxc"}},104:function(e,t,a){e.exports=a.p+"static/media/footer.37234ecc.jpg"},113:function(e,t,a){e.exports={spin_wrap:"App_spin_wrap__1_pDV"}},122:function(e,t,a){e.exports=a(211)},134:function(e,t,a){e.exports=a.p+"static/media/background.898d65d0.jpg"},135:function(e,t,a){e.exports={root:"Home_root__J-m8p",AppLogo:"Home_AppLogo__11H3R",icon:"Home_icon__1wB5i","App-logo-spin":"Home_App-logo-spin__ps0EL"}},210:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),i=a(35),s=a(36),l=a(40),u=a(39),d=a(76),p=(a(127),a(129),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"dict.1.1.20200629T110424Z.820c51d0c3c6ce08.edfcf3c77862c014dce8158ae4581d8a842e9b30"}).REACT_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"dict.1.1.20200629T110424Z.820c51d0c3c6ce08.edfcf3c77862c014dce8158ae4581d8a842e9b30"}).REACT_FIREBASE_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"dict.1.1.20200629T110424Z.820c51d0c3c6ce08.edfcf3c77862c014dce8158ae4581d8a842e9b30"}).REACT_FIREBASE_API_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"dict.1.1.20200629T110424Z.820c51d0c3c6ce08.edfcf3c77862c014dce8158ae4581d8a842e9b30"}).REACT_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"dict.1.1.20200629T110424Z.820c51d0c3c6ce08.edfcf3c77862c014dce8158ae4581d8a842e9b30"}).REACT_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"dict.1.1.20200629T110424Z.820c51d0c3c6ce08.edfcf3c77862c014dce8158ae4581d8a842e9b30"}).REACT_FIREBASE_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"dict.1.1.20200629T110424Z.820c51d0c3c6ce08.edfcf3c77862c014dce8158ae4581d8a842e9b30"}).REACT_FIREBASE_APP_ID}),_=Object(s.a)((function e(){var t=this;Object(i.a)(this,e),this.setUserUid=function(e){return t.userUid=e},this.signWithEmail=function(e,a,n){t.auth.signInWithEmailAndPassword(e,a).catch((function(e){console.log(e),n(e.message)}))},this.registerWithEmail=function(e,a,n,r){a===n?t.auth.createUserWithEmailAndPassword(e,a).catch((function(e){return r(e.message)})):r("\u043f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442")},this.getUserCardsRef=function(){return t.database.ref("/cards/".concat(t.userUid))},d.a.initializeApp(p),this.auth=d.a.auth(),this.database=d.a.database(),this.userUid=null})),m=Object(n.createContext)(null),h=a(214),E=a(118),f=a(41),b=a.n(f),v=a(56),g=a(78),C=a(101),O=a(102),S=a.n(O),A=function(e){var t=e.children,a=e.backgroundImg,n=e.fullHeight,c=void 0!==n&&n,o={backgroundImage:"url(".concat(a,")")};return c&&(o.height="100vh"),r.a.createElement("div",{className:S.a.cover,style:o},t)},T=a(27),w=a(5),P=a.n(w),R=a(51),j=a.n(R),k=function(e){var t,a,n=e.children,c=e.white,o=e.opacity,i=e.uppercase,s=e.size,l=void 0===s?"xl":s;switch(l){case"xl":a=1;break;case"l":a=2;break;case"m":a=3;break;case"s":a=4;break;case"xs":a=5;break;default:a=1}return r.a.createElement("h".concat(a),{className:P()(j.a.header,j.a["size".concat(l.toUpperCase())],(t={},Object(T.a)(t,j.a.whiteColor,c),Object(T.a)(t,j.a.opacity,o),Object(T.a)(t,j.a.uppercase,i),t))},n)},I=a(82),y=a.n(I),D=function(e){var t=e.children,a=e.white;return r.a.createElement("p",{className:P()(y.a.paragraph,Object(T.a)({},y.a.whiteColor,a))},t)},x=a(83),F=a.n(x),N=function(e){var t=e.children;return r.a.createElement("div",{className:F.a.cover},r.a.createElement("div",{className:F.a.warp},t))},L=a(84),B=a.n(L),H=a(33),K=a.n(H),U=a(218),W=a(219),z=a(220),V=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={done:!1,isRemembered:!1},e.handleCardClick=function(){e.setState((function(e){var t=e.done;return e.isRemembered?{done:!1}:{done:!t}}))},e.handleIsRememberClick=function(){e.setState((function(e){var t=e.isRemembered;e.done;return t?{isRemembered:!t}:{done:!1,isRemembered:!t}}))},e.handleDeletedClick=function(){var t=e.props.id;e.props.onDeleted(t)},e.handleSpeech=function(){var t=e.props.id;e.props.onSpeech(t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.eng,n=t.rus,c=this.state.done,o=this.state.isRemembered;return r.a.createElement("div",{className:K.a.root},r.a.createElement("div",{className:P()(K.a.card,(e={},Object(T.a)(e,K.a.done,c),Object(T.a)(e,K.a.isRemembered,o),e)),onClick:this.handleCardClick},r.a.createElement("div",{className:K.a.cardInner},r.a.createElement("div",{className:K.a.cardFront},a),r.a.createElement("div",{className:K.a.cardBack},n))),r.a.createElement("div",{className:K.a.icon},r.a.createElement(U.a,{onClick:this.handleIsRememberClick})),r.a.createElement("div",{className:K.a.icon},r.a.createElement(W.a,{onClick:this.handleDeletedClick})),r.a.createElement("div",{className:K.a.icon},r.a.createElement(z.a,{onClick:this.handleSpeech})))}}]),a}(r.a.Component),Z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.wordArr,n=t.eng,c=t.rus;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:B.a.form,onSubmit:function(t){return e.props.onSubmit(t)}},r.a.createElement("input",{autoComplete:"off",placeholder:"enter english word",name:"eng",type:"text",onChange:function(t){return e.props.onChange(t)},value:n}),r.a.createElement("input",{autoComplete:"off",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u0441\u043b\u043e\u0432\u0430",name:"rus",type:"text",onChange:function(t){return e.props.onChange(t)},value:c}),r.a.createElement("button",null,"Add word")),r.a.createElement("div",{className:B.a.card_list},a.map((function(t){var a=t.eng,n=t.rus,c=t.id;return r.a.createElement(V,{onSpeech:e.props.onSpeech,onDeleted:e.props.onDeletedItem,id:c,key:c,eng:a,rus:n})}))))}}]),a}(n.Component),X="dict.1.1.20200629T110424Z.820c51d0c3c6ce08.edfcf3c77862c014dce8158ae4581d8a842e9b30",Y=function(){var e=Object(v.a)(b.a.mark((function e(t){var a,n,r,c=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:"en-ru",e.next=3,fetch("https://reactmarathon-api.netlify.app/api/translate?text=".concat(t,"&lang=").concat(a),{headers:{Authorization:X}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=a(77),G=a.n(q),J=function(e){var t=e.children,a=e.backgroundColor,n=void 0===a?"transparent":a,c=e.row,o=void 0!==c&&c,i={backgroundColor:n};return r.a.createElement("section",{className:P()(G.a.cover),style:i},r.a.createElement("div",{className:P()(G.a.warp,Object(T.a)({},G.a.row,o))},t))},M=a(103),Q=a.n(M),$=function(e){var t=e.children,a=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:a,className:Q.a.btn},t))},ee=a(104),te=a.n(ee),ae=(a(134),a(135),function(e){var t=Object(n.useState)([]),a=Object(g.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),s=Object(g.a)(i,2),l=s[0],u=s[1],d=Object(n.useState)(""),p=Object(g.a)(d,2),_=p[0],h=p[1],f=Object(n.useContext)(m),O=(f.database,f.auth),S=f.getUserCardsRef,T=("/cards/".concat(e.user.uid),Object(n.useRef)(!0)),w=Object(C.useSpeechSynthesis)(),P=w.speak,R=w.voices;Object(n.useEffect)((function(){S().on("value",(function(e){Array.isArray(e.val())?o(e.val()):e.val()&&o(Array.from(e.val()))}))}),[]),Object(n.useLayoutEffect)((function(){T.current?T.current=!1:S().set(c)}),[c]);var j=function(){var e=Object(v.a)(b.a.mark((function e(t){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(a=t===_?l:_)===l?"ru-en":"en-ru",t){e.next=7;break}return e.next=5,Y(a,n).then((function(e){if(!e.status)return console.log(e),e.translate;console.log("\u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}));case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(v.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={},_||l){e.next=6;break}console.log("\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e \u043f\u043e\u043b\u0435"),e.next=12;break;case 6:return e.next=8,j(_).then((function(e){return a.eng=e}));case 8:return e.next=10,j(l).then((function(e){return a.rus=e}));case 10:console.log(a),(l||a.rus)&&(_||a.eng)?(n={eng:_||a.eng,rus:l||a.rus,id:+new Date},o([].concat(Object(E.a)(c),[n])),u(""),h("")):console.log("\u043d\u0435 \u0441\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c =(");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{backgroundColor:"lightgrey"},r.a.createElement(k,{size:"s"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u043b\u043e\u0432"),r.a.createElement(D,null,"\u041d\u0430\u0436\u0438\u043c\u0430\u0439 \u043d\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0438 \u0443\u0437\u043d\u0430\u0432\u0430\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u043e\u0432\u044b\u0445 \u0441\u043b\u043e\u0432"),r.a.createElement(Z,{wordArr:c,onSpeech:function(e){var t=c.find((function(t){return t.id===e}));P({text:t.eng,voice:R[11]})},onDeletedItem:function(e){var t=c.filter((function(t){return t.id!==e}));o(t)},onSubmit:I,onChange:function(e){"rus"===e.target.getAttribute("name")&&u(e.target.value),"eng"===e.target.getAttribute("name")&&h(e.target.value)},eng:_,rus:l})),r.a.createElement(A,{backgroundImg:te.a},r.a.createElement(N,null,r.a.createElement(k,{opacity:!0,uppercase:!0,size:"s"},"english language"),r.a.createElement($,{onClick:function(){console.log("click"),O.signOut()}},"\u0412\u044b\u0439\u0442\u0438"))))}),ne=a(85),re=a(217),ce=a(215),oe=a(216),ie=a(116),se=a(59),le=a.n(se),ue=re.a.Content,de=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={reg:!1,appState:""},e.onError=function(t){e.setState(Object(ne.a)(Object(ne.a)({},e.state),{},{appState:t}))},e.toggleLogReg=function(){e.setState((function(e){return{reg:!e.reg,appState:""}}))},e.onFinishAuth=function(t){var a=t.email,n=t.password;(0,e.context.signWithEmail)(a,n,e.onError)},e.onFinishFailedAuth=function(e){console.log("Failed:",e)},e.onFinishReg=function(t){var a=t.email,n=t.password,r=t.passwordRepeat;(0,e.context.registerWithEmail)(a,n,r,e.onError)},e.onFinishFailedReg=function(e){console.log("Failed:",e)},e}return Object(s.a)(a,[{key:"renderFormAuth",value:function(){return r.a.createElement(ce.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:this.onFinishAuth,onFinishFailed:this.onFinishFailedAuth,autoComplete:"on"},r.a.createElement(ce.a.Item,{label:"email",name:"email",autoComplete:"on",rules:[{required:!0,message:"Please input your email!"}]},r.a.createElement(oe.a,null)),r.a.createElement(ce.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(oe.a.Password,{autoComplete:"off"})),r.a.createElement(ce.a.Item,{wrapperCol:{offset:8,span:16}},r.a.createElement(ie.a,{type:"primary",htmlType:"submit"},"\u0412\u043e\u0439\u0442\u0438")),this.state.appState?r.a.createElement("span",null,this.state.appState):null)}},{key:"renderFormReg",value:function(){return r.a.createElement(ce.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:this.onFinishReg,onFinishFailed:this.onFinishFailedReg,autoComplete:"off"},r.a.createElement(ce.a.Item,{label:"email",name:"email",rules:[{required:!0,message:"Please input your email!"}]},r.a.createElement(oe.a,null)),r.a.createElement(ce.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(oe.a.Password,null)),r.a.createElement(ce.a.Item,{label:"Repeat password",name:"passwordRepeat",rules:[{required:!0,message:"Please repeat your password!"}]},r.a.createElement(oe.a.Password,null)),r.a.createElement(ce.a.Item,{wrapperCol:{offset:8,span:16}},r.a.createElement(ie.a,{type:"primary",htmlType:"submit"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),this.state.appState?r.a.createElement("span",null,this.state.appState):null)}},{key:"render",value:function(){return r.a.createElement(re.a,null,r.a.createElement(ue,null,r.a.createElement("div",{className:le.a.root},r.a.createElement("div",{className:le.a.form_wrap},r.a.createElement("div",{className:le.a.switch},r.a.createElement(ie.a,{className:le.a.btn_switch,onClick:this.toggleLogReg},this.state.reg?"\u0412\u0445\u043e\u0434":"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),this.state.reg?this.renderFormReg():this.renderFormAuth()))))}}]),a}(n.Component);de.contextType=m;var pe=de,_e=(a(204),a(113)),me=a.n(_e),he=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.context);var t=this.context,a=t.auth,n=t.setUserUid;a.onAuthStateChanged((function(t){t?(n(t.uid),e.setState({user:t})):(n(null),e.setState({user:!1}))}))}},{key:"render",value:function(){var e=this.state.user;return null===e?r.a.createElement("div",{className:me.a.spin_wrap},r.a.createElement(h.a,{size:"large"})):r.a.createElement(r.a.Fragment,null,e?r.a.createElement(ae,{user:e}):r.a.createElement(pe,null))}}]),a}(n.Component);he.contextType=m;var Ee=he;a(210);o.a.render(r.a.createElement(m.Provider,{value:new _},r.a.createElement(Ee,null)),document.getElementById("root"))},33:function(e,t,a){e.exports={root:"Card_root__1Z0w8",card:"Card_card__3IkW-",done:"Card_done__2w0_A",cardInner:"Card_cardInner__3U02t",icon:"Card_icon__27vLo",cardFront:"Card_cardFront__3s-Th",cardBack:"Card_cardBack__17S8t",isRemembered:"Card_isRemembered__364gj"}},51:function(e,t,a){e.exports={header:"Header_header__wDcbh",sizeXL:"Header_sizeXL__2Xoym",sizeL:"Header_sizeL__2ndGu",sizeM:"Header_sizeM__ChjBO",sizeS:"Header_sizeS__2VuJX",sizeXS:"Header_sizeXS__2T9zH",whiteColor:"Header_whiteColor__3HEof",opacity:"Header_opacity__2QmBt",uppercase:"Header_uppercase__3XAPi"}},59:function(e,t,a){e.exports={root:"LoginPage_root__29meb",form_wrap:"LoginPage_form_wrap__1mIOR",switch:"LoginPage_switch__1IjZs",btn_switch:"LoginPage_btn_switch__3ywny"}},77:function(e,t,a){e.exports={cover:"SectionBlock_cover__1Iu-u",warp:"SectionBlock_warp__21wF8",row:"SectionBlock_row__pTkJ0"}},82:function(e,t,a){e.exports={paragraph:"Paragraph_paragraph__2oaLW",whiteColor:"Paragraph_whiteColor__310l_"}},83:function(e,t,a){e.exports={cover:"FooterBlock_cover__2UM54",warp:"FooterBlock_warp__esP8_"}},84:function(e,t,a){e.exports={card_list:"CardList_card_list__3-t-T",form:"CardList_form__Gystv"}}},[[122,1,2]]]);
//# sourceMappingURL=main.6af44bb9.chunk.js.map