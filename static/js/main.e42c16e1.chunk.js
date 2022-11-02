(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){"use strict";i.r(t);var c=i(8),s=i.n(c),n=(i(17),i(18),i(1)),a=i.n(n),r=(i(19),i(20),i(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},l=i(2),d=a.a.createContext({movies:[],setMovies:function(){},query:"",setQuery:function(){},movie:null,setMovie:function(){},isMovieExist:!1,setIsMovieExist:function(){},isSearch:!1,setIsSearch:function(){}}),j=function(e){var t=e.children,i=Object(n.useState)([]),c=Object(l.a)(i,2),s=c[0],a=c[1],o=Object(n.useState)(""),j=Object(l.a)(o,2),m=j[0],u=j[1],b=Object(n.useState)(null),v=Object(l.a)(b,2),h=v[0],O=v[1],x=Object(n.useState)(!1),f=Object(l.a)(x,2),p=f[0],N=f[1],y=Object(n.useState)(!1),g=Object(l.a)(y,2),M=g[0],w=g[1],I=Object(n.useMemo)((function(){return{movies:s,setMovies:a,query:m,setQuery:u,movie:h,setMovie:O,isMovieExist:p,setIsMovieExist:N,isSearch:M,setIsSearch:w}}),[s,m,h,p,M]);return Object(r.jsx)(d.Provider,{value:I,children:t})},m=function(){var e=Object(n.useContext)(d).movies;return Object(r.jsx)("div",{className:"movies",children:e.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},u=i(11),b=i(9),v=i(6),h=i.n(v),O=i(10),x=i.n(O);function f(e){return fetch("".concat("https://www.omdbapi.com/?apikey=378681db","&t=").concat(e)).then((function(e){return e.json()})).catch((function(e){return{Response:"False",Error:e}}))}i(23);var p=i(7),N=i(12),y=["children"],g=function(e){var t=e.children,i=Object(N.a)(e,y);return Object(r.jsx)("button",Object(p.a)(Object(p.a)({},i),{},{children:t}))},M=function(){var e=Object(n.useContext)(d),t=e.movies,i=e.setMovies,c=e.query,s=e.setQuery,a=e.movie,l=e.setMovie,j=e.isMovieExist,m=e.setIsMovieExist,v=e.isSearch,O=e.setIsSearch,p=function(){var e=Object(b.a)(h.a.mark((function e(t){var i,c,s,n,a,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:i=e.sent,O(!1),Object.prototype.hasOwnProperty.call(i,"Poster")?(s=(c=i).Poster,n=c.Title,a=c.Plot,r=c.imdbID,o={title:n,description:a,imgUrl:"N/A"===s?"https://via.placeholder.com/360x270.png?text=no%20preview":s,imdbUrl:"https://www.imdb.com/title/".concat(r),imdbId:r},m(!1),l(o)):(m(!0),l(null));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var c;c=e,t.some((function(e){return e.imdbId===c.imdbId}))||i([].concat(Object(u.a)(t),[e])),l(null),s("")};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),O(!0),p(c)},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:c,onChange:function(e){var t=e.target.value;s(t),""!==t&&t===c||m(!1)}})}),j&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)(g,{"data-cy":"searchButton",type:"submit",className:x()("button","is-light",{"is-loading":v}),disabled:!c,children:"Find a movie"})}),a&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)(g,{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return N(a)},children:"Add to the list"})})]})]}),a&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(o,{movie:a})]})]})},w=function(){return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(m,{})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(M,{})})]})};s.a.render(Object(r.jsx)(j,{children:Object(r.jsx)(w,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e42c16e1.chunk.js.map