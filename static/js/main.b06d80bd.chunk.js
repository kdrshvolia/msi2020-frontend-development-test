(this["webpackJsonpmsi2020-frontend-development-test"]=this["webpackJsonpmsi2020-frontend-development-test"]||[]).push([[0],{17:function(e,n,t){e.exports=t.p+"static/media/static-logo.ded38f2d.svg"},18:function(e,n,t){e.exports=t.p+"static/media/link.0f10cee4.svg"},19:function(e,n,t){e.exports=t.p+"static/media/static-logo-fav.2ebc560c.svg"},21:function(e,n,t){e.exports=t.p+"static/media/favorites-cross-btn.889f54a4.svg"},22:function(e,n,t){e.exports=t.p+"static/media/favorites-burger-btn.ffa892cb.svg"},27:function(e,n,t){e.exports=t(38)},32:function(e,n,t){},33:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(11),o=t.n(i),c=(t(32),t(33),t(4)),s=t(5),l=t(7),u=t(24),d=t(25),f=t(12),p=t(13),h=t(26),g=t(23),b=function(e){return fetch(e,{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},v={random:"random",categories:"categories",search:"search"},x=t(1),m=t(2);function k(){var e=Object(x.a)(["\n  &:checked,\n  &:not(:checked) {\n    position: absolute;\n    left: -9999px;\n  }\n  &:checked + label,\n  &:not(:checked) + label {\n    position: relative;\n    padding-left: 28px;\n    cursor: pointer;\n    line-height: 20px;\n    display: inline-block;\n  }\n  &:not(:checked) + label:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 20px;\n    height: 20px;\n    border: 2px solid #ababab;\n    box-sizing: border-box;\n    border-radius: 100%;\n    background: #fff;\n  }\n\n  &:checked + label:before {\n    border: 2px solid #333333;\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 20px;\n    height: 20px;\n    box-sizing: border-box;\n    border-radius: 100%;\n    background: #fff;\n  }\n  &:checked + label:after,\n  &:not(:checked) + label:after {\n    content: '';\n    width: 10px;\n    height: 10px;\n    background: #333333;\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    border-radius: 100%;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n  }\n\n  &:not(:checked) + label:after {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  &:checked + label:after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n"]);return k=function(){return e},e}function C(){var e=Object(x.a)(["\n  padding: 10px 0;\n"]);return C=function(){return e},e}var y=m.b.div(C()),O=m.b.input(k()),j=function(e){var n=e.name,t=e.value,i=e.option,o=e.checked,c=e.handleChange,s=Object(a.useCallback)((function(){c(i)}),[i]);return r.a.createElement(y,null,r.a.createElement(O,{type:"radio",name:n,id:t,checked:o,onChange:s})," ",r.a.createElement("label",{htmlFor:t},t))};function E(){var e=Object(x.a)(["\n  cursor: pointer;\n  width: 152px;\n  height: 42px;\n  background: linear-gradient(92.01deg, #8ea7ff 0%, #7291ff 100%);\n  border-radius: 10px;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  color: #ffffff;\n  border: none;\n"]);return E=function(){return e},e}var w=m.b.button(E()),F=function(e){var n=e.text,t=e.onClick;return r.a.createElement("div",null,r.a.createElement(w,{type:"button",onClick:function(){t()}},n))};function S(){var e=Object(x.a)(["\n  display: flex;\n  max-width: 370px;\n  justify-content: space-between;\n"]);return S=function(){return e},e}var J=m.b.div(S());function T(){var e=Object(x.a)(["\n  background: ",";\n  color: ",";\n  display: flex;\n  height: 28px;\n  cursor: pointer;\n  border: 2px solid #f8f8f8;\n  box-sizing: border-box;\n  border-radius: 6px;\n  padding: 6px 15px;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 2px;\n  transition: 0.7s;\n"]);return T=function(){return e},e}var L=m.b.div(T(),(function(e){return e.isChosen?"#f8f8f8":"#FFFFFF"}),(function(e){return e.isChosen?"#333333":"#ababab"})),B=function(e){var n=e.id,t=e.onClick,i=e.children,o=e.isChosen,c=Object(a.useCallback)((function(){t(n)}),[n]);return r.a.createElement(L,{isChosen:o,onClick:c},i)},I=function(e){var n=e.categories,t=e.setCategory,a=e.chosenCategory;return r.a.createElement(J,null,0===n.length?null:n.map((function(e){return r.a.createElement(B,{onClick:t,isChosen:e===a,id:e},e.toUpperCase())})))};function z(){var e=Object(x.a)(["\n  width: 100%;\n  margin: 10px 0;\n  height: 42px;\n  border: 2px solid #333333;\n  box-sizing: border-box;\n  border-radius: 10px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 22px;\n  color: #ababab;\n  padding: 10px 15px;\n"]);return z=function(){return e},e}function M(){var e=Object(x.a)(["\n  max-width: 680px;\n"]);return M=function(){return e},e}var N=m.b.div(M()),D=m.b.input(z()),R=function(e){var n=e.placeholder,t=e.onChange,a=e.inputText;return r.a.createElement(N,null,r.a.createElement(D,{type:"text",placeholder:n,onChange:function(e){t(e.target.value)},value:a}))},Z=function(e){var n=e.setInputText,t=e.inputText,a=e.options,i=e.setType,o=e.getJoke,c=e.setCategory,s=e.chosenOption,l=e.chosenCategory,u=e.categories;return r.a.createElement("div",null,r.a.createElement(j,{name:"search-type",value:"Random",checked:s===a.random,option:a.random,handleChange:i}),r.a.createElement(j,{name:"search-type",value:"From categories",checked:s===a.categories,option:a.categories,handleChange:i}),s===a.categories?r.a.createElement(I,{categories:u,setCategory:c,chosenCategory:l}):null,r.a.createElement(j,{name:"search-type",value:"Search",checked:s===a.search,option:a.search,handleChange:i}),s===a.search?r.a.createElement(R,{placeholder:"Free text search...",onChange:n,inputText:t}):null,r.a.createElement(F,{text:"Get a joke",onClick:o}))};function q(){var e=Object(x.a)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 0 20px 0 0;\n"]);return q=function(){return e},e}function G(){var e=Object(x.a)(["\n  color: #8ea7ff;\n  & > a {\n    color: #8ea7ff;\n  }\n"]);return G=function(){return e},e}function W(){var e=Object(x.a)(["\n  font-size: 10px;\n  line-height: 14px;\n  width: 128px;\n  color: #ababab;\n"]);return W=function(){return e},e}function _(){var e=Object(x.a)(["\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 26px;\n  margin: 7% 0;\n"]);return _=function(){return e},e}function A(){var e=Object(x.a)(["\n  display: flex;\n  padding: 5%;\n  flex-direction: column;\n  width: 100%;\n  max-width: ",";\n  background: ",";\n  border-radius: 20px;\n  box-sizing: border-box;\n  padding: ",";\n  font-weight: normal;\n  align-items: top;\n  margin: 10px 0;\n  box-shadow: ",";\n"]);return A=function(){return e},e}function H(){var e=Object(x.a)(["\n  display: flex;\n"]);return H=function(){return e},e}function U(){var e=Object(x.a)(["\n  padding: 6px 20px;\n  box-sizing: border-box;\n  width: 107px;\n  background: #ffffff;\n  border-radius: 6px;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 14px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-align: center;\n"]);return U=function(){return e},e}function X(){var e=Object(x.a)(["\n  display: flex;\n  & > svg {\n    margin-left: auto;\n  }\n  padding: 10px 0;\n"]);return X=function(){return e},e}function $(){var e=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return $=function(){return e},e}var K=m.b.div($()),P=m.b.div(X()),Q=m.b.div(U()),V=m.b.div(H()),Y=m.b.div(A(),(function(e){return e.isInFavoritedList?"450px":"680px"}),(function(e){return e.isInFavoritedList?"#ffffff":"#f8f8f8"}),(function(e){return e.isInFavoritedList?"5%":"45px"}),(function(e){return e.isInFavoritedList?"0px 4px 6px rgba(0, 0, 0, 0.1)":"none"})),ee=m.b.p(_()),ne=m.b.div(W()),te=m.b.div(G()),ae=m.b.div(q()),re=function(e){var n=e.fill,t=e.width,a=e.height,i=e.viewBox,o=void 0===i?"0 0 20 17":i,c=e.path,s=e.onClick;return r.a.createElement("svg",{onClick:s,width:t,height:a,viewBox:o},r.a.createElement("path",{d:c,fill:n}))},ie=t(17),oe=t.n(ie),ce=t(18),se=t.n(ce),le=t(19),ue=t.n(le),de=function(e){var n=e.joke,t=e.toggleFav,a=e.isFavorited,i=e.isInFavoritedList,o=a?"M18.4134 1.66367C17.3781 0.590857 15.9575 0 14.413 0C13.2585 0 12.2012 0.348712 11.2704 1.03637C10.8008 1.38348 10.3752 1.80814 10 2.3038C9.62494 1.80829 9.19922 1.38348 8.7294 1.03637C7.79877 0.348712 6.74149 0 5.58701 0C4.04251 0 2.62177 0.590857 1.58646 1.66367C0.563507 2.72395 0 4.17244 0 5.74252C0 7.35852 0.630341 8.83778 1.98364 10.3979C3.19427 11.7935 4.93423 13.2102 6.94916 14.8507C7.63718 15.411 8.41705 16.046 9.22684 16.7224C9.44077 16.9015 9.71527 17 10 17C10.2846 17 10.5592 16.9015 10.7729 16.7227C11.5826 16.0461 12.363 15.4108 13.0513 14.8503C15.0659 13.2101 16.8059 11.7935 18.0165 10.3978C19.3698 8.83778 20 7.35852 20 5.74238C20 4.17244 19.4365 2.72395 18.4134 1.66367Z":"M10 17C9.71527 17 9.44077 16.9015 9.22684 16.7224C8.41888 16.0475 7.63992 15.4132 6.95267 14.8536L6.94916 14.8507C4.93423 13.2102 3.19427 11.7935 1.98364 10.3979C0.630341 8.83778 0 7.35852 0 5.74252C0 4.17244 0.563507 2.72395 1.58661 1.66367C2.62192 0.590857 4.04251 0 5.58716 0C6.74164 0 7.79892 0.348712 8.72955 1.03637C9.19922 1.38348 9.62494 1.80829 10 2.3038C10.3752 1.80829 10.8008 1.38348 11.2706 1.03637C12.2012 0.348712 13.2585 0 14.413 0C15.9575 0 17.3782 0.590857 18.4135 1.66367C19.4366 2.72395 20 4.17244 20 5.74252C20 7.35852 19.3698 8.83778 18.0165 10.3978C16.8059 11.7935 15.0661 13.2101 13.0515 14.8504C12.363 15.4108 11.5828 16.0461 10.773 16.7227C10.5592 16.9015 10.2846 17 10 17ZM5.58716 1.11932C4.37363 1.11932 3.25882 1.58203 2.44781 2.42232C1.62476 3.2753 1.17142 4.45439 1.17142 5.74252C1.17142 7.10165 1.70013 8.31719 2.88559 9.68375C4.03137 11.0047 5.73563 12.3923 7.70889 13.9989L7.71255 14.0018C8.4024 14.5635 9.18442 15.2003 9.99832 15.8802C10.8171 15.199 11.6003 14.5612 12.2916 13.9986C14.2647 12.392 15.9688 11.0047 17.1146 9.68375C18.2999 8.31719 18.8286 7.10165 18.8286 5.74252C18.8286 4.45439 18.3752 3.2753 17.5522 2.42232C16.7413 1.58203 15.6264 1.11932 14.413 1.11932C13.524 1.11932 12.7078 1.38931 11.9872 1.92171C11.3449 2.39637 10.8975 2.99642 10.6352 3.41627C10.5003 3.63217 10.2629 3.76105 10 3.76105C9.73709 3.76105 9.49966 3.63217 9.36478 3.41627C9.10263 2.99642 8.65524 2.39637 8.01285 1.92171C7.29218 1.38931 6.47598 1.11932 5.58716 1.11932Z";return r.a.createElement(Y,{isInFavoritedList:i},r.a.createElement(P,null,r.a.createElement(re,{onClick:function(){t(n.id)},width:"20",height:"17",path:o,fill:"#ff6767"})),r.a.createElement(V,null,r.a.createElement(ae,null,r.a.createElement("img",{src:i?ue.a:oe.a,alt:""})),r.a.createElement("div",null,r.a.createElement(te,null,"ID:\xa0",r.a.createElement("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},n.id),"\xa0",r.a.createElement("img",{src:se.a,alt:""})),r.a.createElement(ee,{className:"joke-text"},n.value))),r.a.createElement(K,null,r.a.createElement(ne,{className:"last-update"},"Last update: ",function(e,n){var t=Math.abs(n-e)/1e3,a=24*Math.floor(t/86400);return t-=86400*a,Math.floor(t/3600)%24+a}(Date.parse(n.updated_at),new Date)," hours ago."),0===n.categories.length?null:r.a.createElement(Q,{className:"category"},n.categories," ")))};function fe(){var e=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  \n"]);return fe=function(){return e},e}var pe=m.b.div(fe()),he=function(e){var n=e.jokesList,t=e.toggleFav,a=e.favoritedJokes,i=e.isFavoritedList;return r.a.createElement(pe,{isFavoritedList:i},n.map((function(e){var n=!a||!!a[e.id];return r.a.createElement(de,{joke:e,toggleFav:t,isFavorited:n,isInFavoritedList:i})})))},ge=function(e){var n=e.title,t=e.subtitle;return r.a.createElement("div",null,r.a.createElement("h1",null,n),r.a.createElement("h2",null,t))};function be(){var e=Object(x.a)(["\n  position: fixed;\n  background: rgba(0, 0, 0, 0.3);\n  height: 100%;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: ",";\n   @media (min-width: 992px) {\n    display: none;\n   }\n   \n   @media (max-width: 600px) {\n    display: none;\n   }\n  }\n"]);return be=function(){return e},e}function ve(){var e=Object(x.a)(["\n  @media (max-width: 992px) {\n    display: ",";\n    z-index: 2;\n  }\n"]);return ve=function(){return e},e}function xe(){var e=Object(x.a)(["\n  display: none;\n  @media (max-width: 992px) {\n    display: block;\n  }\n"]);return xe=function(){return e},e}function me(){var e=Object(x.a)(["\n  @media only screen and (min-width: 1200px) {\n    flex-basis: 60%;\n  }\n  @media only screen and (max-width: 1200px) {\n    flex-basis: 100%;\n  }\n  padding: 40px 7% 0;\n  position: relative;\n"]);return me=function(){return e},e}function ke(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: 40%;\n  background: #f8f8f8;\n  box-sizing: border-box;\n  padding: 40px;\n  @media (max-width: 992px) {\n    display: none;\n  }\n\n  &:last-of-type {\n    display: none;\n    background: #ffffff;\n    @media (max-width: 992px) {\n      background: ",";\n      padding: 80px 40px 40px;\n      box-sixing: border-box;\n      display: block;\n      position:  absolute;\n      transform: ","; \n      top: 0;\n      width: 60%;\n      left: 100%;\n      transition: transform 0.5s ease;\n    }\n    @media (max-width: 600px) {\n      width: 100%;\n    }\n"]);return ke=function(){return e},e}function Ce(){var e=Object(x.a)(["\n  display: flex;\n  max-width: 100%;\n  flex-direction: row;\n  justify-content: center;\n  align-items: stretch;\n  flex: 2;\n  overflow-y: auto;\n  overflow-x: hidden;\n  min-height: 100vh;\n  position: relative;\n"]);return Ce=function(){return e},e}var ye=m.b.div(Ce()),Oe=m.b.div(ke(),(function(e){return e.isSideBarOpened?"#f8f8f8":"#ffffff"}),(function(e){return e.isSideBarOpened?"translateX(-100%)":"none"})),je=m.b.div(me()),Ee=(m.b.div(xe()),m.b.div(ve(),(function(e){return e.isSideBarOpened?"flex":"none"}))),we=m.b.div(be(),(function(e){return e.isSideBarOpened?"block":"none"}));function Fe(){var e=Object(x.a)(["\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 28px;\n  margin: 0;\n"]);return Fe=function(){return e},e}var Se=m.b.h3(Fe()),Je=function(e){var n=e.text;return r.a.createElement(Se,null,n)},Te=t(20),Le=t.n(Te);function Be(){var e=Object(x.a)(["\n  width: 84px;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 28px;\n  color: #ababab;\n  margin: 0;\n"]);return Be=function(){return e},e}var Ie=m.b.h3(Be());Ie.propTypes={children:Le.a.string.isRequired};var ze=function(e){var n=e.children;return r.a.createElement(Ie,null,n)},Me=function(e){var n=e.favoritedJokes,t=e.toggleFav,a=e.isFavoritedList,i=e.isSideBarOpened;e.setOpened;return r.a.createElement("aside",null,r.a.createElement(Ee,{isSideBarOpened:i},0===Object.keys(n).length?null:r.a.createElement(he,{jokesList:Object.values(n),toggleFav:t,isFavoritedList:a})))};function Ne(){var e=Object(x.a)(["\n  cursor: pointer;\n  margin-right: 10px;\n"]);return Ne=function(){return e},e}function De(){var e=Object(x.a)(["\n  display: flex;\n  position: absolute;\n  right: 5%;\n  z-index: 20;\n  top: 40px;\n  @media (min-width: 992px) {\n    display: none;\n  }\n"]);return De=function(){return e},e}var Re=m.b.div(De()),Ze=m.b.div(Ne()),qe=t(21),Ge=t.n(qe),We=t(22),_e=t.n(We),Ae=function(e){var n=e.setInputText,t=e.inputText,a=e.options,i=e.setType,o=e.setCategory,c=e.chosenOption,s=e.chosenCategory,l=e.getJoke,u=e.categories,d=e.jokes,f=e.toggleFav,p=e.favoritedJokes,h=e.isSideBarOpened,g=e.setOpened;return r.a.createElement(ye,null,r.a.createElement(je,null,r.a.createElement(Je,{text:"MSI 2020"}),r.a.createElement(ge,{title:"Hey!",subtitle:"Let\u2019s try to find a joke for you:"}),r.a.createElement(Z,{setInputText:n,inputText:t,options:a,setType:i,chosenOption:c,chosenCategory:s,getJoke:l,categories:u,setCategory:o}),0===d.length?null:r.a.createElement(he,{jokesList:d,toggleFav:f,favoritedJokes:p,isFavoritedList:!1})),r.a.createElement(we,{isSideBarOpened:h}),r.a.createElement(Oe,null,r.a.createElement(ze,null,"Favourite"),r.a.createElement(Ee,null,0===Object.keys(p).length?null:r.a.createElement(he,{jokesList:Object.values(p),toggleFav:f,isFavoritedList:!0}))),r.a.createElement(Re,null," ",r.a.createElement(Ze,null,r.a.createElement("img",{className:"icon",src:h?Ge.a:_e.a,alt:"",onClick:function(){g()}})),r.a.createElement(ze,null,"Favourite")),r.a.createElement(Oe,{isSideBarOpened:h},r.a.createElement(Me,{favoritedJokes:p,toggleFav:f,isFavoritedList:!0,isSideBarOpened:h,setOpened:g})))};function He(){var e=Object(x.a)(["\n  body, html {\n   font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    color: #333333;\n    height: 100%;\n    font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));\n    overflow-x: hidden;\n  }\n"]);return He=function(){return e},e}var Ue=Object(m.a)(He());var Xe=function(){var e,n=(e=Ae,function(n){Object(h.a)(a,n);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={chosenOption:v.random,chosenCategory:"",jokes:[],favoritedJokes:JSON.parse(localStorage.getItem("favorites"))||{},categories:[],showCategories:4,inputText:"",isSideBarOpened:!1},e.toggleFav=function(n){var t=e.state,a=t.jokes,r=t.favoritedJokes,i=a.find((function(e){return e.id===n}));if(r[n]){r[n];var o=Object(u.a)(r,[n].map(d.a));e.setState({favoritedJokes:o},(function(){return localStorage.setItem("favorites",JSON.stringify(e.state.favoritedJokes))}))}else e.setState((function(e){return{favoritedJokes:Object(l.a)(Object(l.a)({},e.favoritedJokes),{},Object(s.a)({},n,i))}}),(function(){return localStorage.setItem("favorites",JSON.stringify(e.state.favoritedJokes))}))},e.setType=function(n){e.setState({chosenOption:n})},e.setCategory=function(n){e.setState({chosenCategory:n})},e.setInputText=function(n){e.setState({inputText:n})},e.setOpened=function(){var n=e.state.isSideBarOpened;e.setState({isSideBarOpened:!n})},e.getCategories=function(){var n=e.state,t=n.categories,a=n.showCategories;b("https://api.chucknorris.io/jokes/categories").then((function(n){e.setState({categories:[].concat(Object(c.a)(t),Object(c.a)(n.slice(0,a)))},(function(){return e.setState({chosenCategory:e.state.categories[0]})}))}))},e.getJoke=function(){var n=e.state,t=n.chosenOption,a=n.chosenCategory,r=n.jokes;if(t===v.categories)b("https://api.chucknorris.io/jokes/random?category=".concat(a)).then((function(n){e.setState({jokes:[].concat(Object(c.a)(r),[n])})}));else if(t===v.random)b("https://api.chucknorris.io/jokes/random").then((function(n){e.setState({jokes:[].concat(Object(c.a)(r),[n])})}));else if(t===v.search){var i=e.state.inputText;b("https://api.chucknorris.io/jokes/search?query=".concat(i)).then((function(n){e.setState({jokes:[].concat(Object(c.a)(r),Object(c.a)(n.result))})}))}},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getCategories()}},{key:"render",value:function(){var n=this.state,t=n.chosenOption,a=n.chosenCategory,i=n.categories,o=n.jokes,c=n.favoritedJokes,s=n.isSideBarOpened,l=n.inputText;return r.a.createElement(e,{toggleFav:this.toggleFav,inputText:l,setInputText:this.setInputText,options:v,setType:this.setType,setCategory:this.setCategory,chosenOption:t,chosenCategory:a,getJoke:this.getJoke,jokes:o,favoritedJokes:c,categories:i,isSideBarOpened:s,setOpened:this.setOpened})}}]),a}(r.a.Component));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ue,null),r.a.createElement(n,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.b06d80bd.chunk.js.map