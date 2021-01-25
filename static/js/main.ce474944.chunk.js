(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{24:function(e,t){e.exports={APIKey:"17ff08f8"}},45:function(e,t,c){},46:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c.n(s),i=c(19),r=c.n(i),o=(c(45),c(46),c(11)),l=(c(53),function(){return Object(n.jsx)("footer",{className:"webintern-footer",children:Object(n.jsx)("div",{className:"tt-copy",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-sm-6",children:Object(n.jsxs)("div",{className:"tt-copy-left",children:["Copyright \xa9 ",Object(n.jsx)("span",{className:"samuravi",children:"MamsON TV."})," All rights reserved."," "]})}),Object(n.jsx)("div",{className:"col-sm-6",children:Object(n.jsxs)("div",{className:"tt-copy-right",children:["Created by: ",Object(n.jsx)("span",{className:"mams0n",children:"Mams0n"})]})})]})})})})}),j=c.p+"static/media/logo.e66d0c38.png",d=(c(54),c(9)),b=c(10),m=c(13),h=c(12),u="SEARCH_MOVIE",O="FETCH_MOVIES",p="FETCH_MOVIE",v="LOADING",x=c(23),f=c.n(x),g=c(24),N=function(){return{type:v}},y=(c(73),function(e){Object(m.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(d.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onChange=function(t){e.props.searchMovie(t.target.value)},e.onSubmit=function(t){t.preventDefault(),e.props.fetchMovies(e.props.text),e.props.setLoading()},e}return Object(b.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"searchform-container",children:Object(n.jsxs)("form",{id:"searchForm",onSubmit:this.onSubmit,children:[Object(n.jsx)("input",{type:"text",className:"form-control",name:"searchText",placeholder:"Search Movies, TV Series ...",onChange:this.onChange}),Object(n.jsx)("i",{onClick:this.onSubmit,className:"fas fa-search search-icon",type:"submit"})]})})}}]),c}(s.Component)),w=Object(o.b)((function(e){return{text:e.movies.text}}),{searchMovie:function(e){return function(t){t({type:u,payload:e})}},fetchMovies:function(e){return function(t){f.a.get("https://www.omdbapi.com/?apikey=".concat(g.APIKey,"&s=").concat(e)).then((function(e){return t({type:O,payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:N})(y),M=c(16),k=(c(74),function(e){Object(m.a)(c,e);var t=Object(h.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e=this.props.movie;return Object(n.jsx)("div",{className:"col-md-3 mb-5 moviecard-container",children:Object(n.jsxs)("div",{className:"card card-body movie-card bg-dark text-center h-100",children:[Object(n.jsx)("img",{height:"315px",className:"w-100 mb-2 movie-poster",src:e.Poster,alt:"Movie Cover"}),Object(n.jsxs)("h5",{className:"text-light card-title",children:[e.Title," - ",e.Year]}),Object(n.jsxs)(M.b,{className:"btn btn-primary details-button",to:"/movie/"+e.imdbID,children:["Movie Details",Object(n.jsx)("i",{className:"fas fa-chevron-right"})]})]})})}}]),c}(s.Component)),C=function(e){Object(m.a)(c,e);var t=Object(h.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e,t=this.props.movies;return e="True"===t.Response?t.Search.map((function(e,t){return Object(n.jsx)(k,{movie:e},t)})):Object(n.jsx)(I,{}),Object(n.jsx)("div",{className:"row",children:e})}}]),c}(s.Component),S=Object(o.b)((function(e){return{movies:e.movies.movies}}))(C);var I=function(){return Object(n.jsx)("div",{className:"container",style:{width:"1px",height:"76.9vh"}})};var T=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{className:"navbar mb-5",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"navbar-header",children:Object(n.jsxs)("a",{className:"navbar-brand text-white text-lg brand-text",href:"/Movies-Series",children:[Object(n.jsx)("img",{width:"50px",src:j,alt:""}),Object(n.jsx)("span",{className:"navbar-brand-name",children:"MamsON TV"})]})}),Object(n.jsx)(w,{}),Object(n.jsxs)("ul",{className:"navbar-nav text-light d-inline-block",children:[Object(n.jsx)("li",{className:"nav-item d-inline-block mr-4",children:Object(n.jsx)("i",{className:"fab fa-imdb fa-5x",id:"imdb-logo"})}),Object(n.jsx)("li",{className:"nav-item d-inline-block mr-4",children:Object(n.jsx)("i",{className:"fab fa-react fa-5x",id:"react-logo"})})]})]})})})},D=c.p+"static/media/Spinner.3db3fdd8.gif";c(78);var A=function(){return Object(n.jsx)("div",{className:"sss",children:Object(n.jsx)("img",{src:D,style:{width:"200px",margin:"auto",display:"block"},className:"fp-loader",alt:"Loading..."})})},P=function(e){Object(m.a)(c,e);var t=Object(h.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e=this.props.loading;return Object(n.jsx)("div",{className:"container",children:e?Object(n.jsx)(A,{}):Object(n.jsx)(S,{})})}}]),c}(s.Component),R=Object(o.b)((function(e){return{loading:e.movies.loading}}))(P),L=c(3),E=c(15),F=c(38),V=c(39),B=c(14),G={text:"",movies:[],loading:!1,movie:[]},_=Object(E.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(B.a)(Object(B.a)({},e),{},{text:t.payload,loading:!1});case O:return Object(B.a)(Object(B.a)({},e),{},{movies:t.payload,loading:!1});case p:return Object(B.a)(Object(B.a)({},e),{},{movie:t.payload,loading:!1});case v:return Object(B.a)(Object(B.a)({},e),{},{loading:!0});default:return e}}}),H=[F.a],K=Object(E.createStore)(_,{},Object(V.composeWithDevTools)(E.applyMiddleware.apply(void 0,H))),W=(c(79),function(e){Object(m.a)(c,e);var t=Object(h.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading()}},{key:"render",value:function(){var e=this.props,t=e.loading,c=e.movie,s=Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-4 card card-body",children:Object(n.jsx)("img",{src:c.Poster,className:"thumbnail",alt:"Poster"})}),Object(n.jsxs)("div",{className:"col-md-8 movie-details",children:[Object(n.jsx)("h2",{className:"mb-4",children:c.Title}),Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Genre:"})," ",c.Genre]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Released:"})," ",c.Released]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Rated:"})," ",c.Rated]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"IMDB Rating:"})," ",c.imdbRating]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Director:"})," ",c.Director]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Writer:"})," ",c.Writer]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Actors:"})," ",c.Actors]})]})]})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"card card-body bg-dark my-5 text-light",children:Object(n.jsxs)("div",{className:"col-md-12",children:[Object(n.jsx)("h3",{children:"About "}),c.Plot,Object(n.jsx)("hr",{className:"hr"}),Object(n.jsx)("a",{href:"https://www.imdb.com/title/"+c.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:"View on IMDB"}),Object(n.jsx)(M.b,{to:"/",className:"btn btn-default text-light",children:"Go Back To Search"})]})})})]}),a=t?Object(n.jsx)(A,{}):s;return Object(n.jsx)("div",{children:a})}}]),c}(s.Component)),J=Object(o.b)((function(e){return{loading:e.movies.loading,movie:e.movies.movie}}),{fetchMovie:function(e){return function(t){f.a.get("https://www.omdbapi.com/?apikey=".concat(g.APIKey,"&i=").concat(e)).then((function(e){return t({type:p,payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:N})(W);var Y=function(){return Object(n.jsx)(o.a,{store:K,children:Object(n.jsx)(M.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(T,{}),Object(n.jsx)(L.a,{exact:!0,path:"/",component:R}),Object(n.jsx)(L.a,{exact:!0,path:"/movie/:id",component:J}),Object(n.jsx)(l,{})]})})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,81)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(Y,{})}),document.getElementById("root")),q()}},[[80,1,2]]]);
//# sourceMappingURL=main.ce474944.chunk.js.map