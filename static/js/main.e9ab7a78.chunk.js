(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(5),r=a.n(l),c=(a(19),a(11)),s=a(6),o=a(7),m=a(12),d=a(8),u=a(13),p=(a(20),a(21),a(22),function(e){var t=e.title,a=e.description,i=void 0===a?"":a,l=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:l,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},i,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))}),h=function(e){var t=e.movies,a=void 0===t?[]:t;return n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(p,Object.assign({key:e.imdbId},e))})))},v=a(1),g=a.n(v),b=a(2),f=a(3),w=a(9),E=a.n(w),M=(a(24),function(){var e=Object(b.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.omdbapi.com/?apikey=7246e96f&t=").concat(t));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=function(e){var t=e.addMovie,a=e.movies,l=Object(i.useState)(""),r=Object(f.a)(l,2),c=r[0],s=r[1],o=Object(i.useState)(null),m=Object(f.a)(o,2),d=m[0],u=m[1],h=Object(i.useState)(!1),v=Object(f.a)(h,2),w=v[0],N=v[1],j=function(){var e=Object(b.a)(g.a.mark((function e(){var t,a,i,n,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(c);case 2:t=e.sent,"https://www.imdb.com/title/",a=t.Title,i=t.Plot,n=t.Poster,l=t.imdbID,"True"===t.Response?(u({title:a,description:i,imgUrl:n,imdbId:l,imdbUrl:"https://www.imdb.com/title/"+l}),N(!1)):(u(null),N(!0));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=a.some((function(e){return e.title===(null===d||void 0===d?void 0:d.title)}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),j()}},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{onChange:function(e){var t=e.target.value;s(t)},value:c,type:"text",id:"movie-title",placeholder:"Enter a title to search",className:E()("input",{"is-danger":w})})),w?n.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title"):null,y?n.a.createElement("p",{className:"help is-danger"},"This movie is already in the list"):null),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-light",onClick:j},"Find a movie")),n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-primary",onClick:function(){d&&!y&&t(d),u(null),s(""),N(!1)}},"Add to the list")))),n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Preview"),d?n.a.createElement(p,d):null))},j=a(10),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={movies:j},a.addMovie=function(e){a.setState((function(t){return{movies:[].concat(Object(c.a)(t.movies),[e])}}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(h,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(N,{addMovie:this.addMovie,movies:e})))}}]),t}(i.Component);r.a.render(n.a.createElement(y,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.e9ab7a78.chunk.js.map