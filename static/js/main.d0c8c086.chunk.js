(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(5),l=a.n(r),c=(a(19),a(11)),s=a(6),o=a(7),m=a(12),d=a(8),u=a(13),p=(a(20),a(21),a(22),function(e){var t=e.title,a=e.description,n=void 0===a?"":a,r=e.imgUrl,l=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:r,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},n,i.a.createElement("br",null),i.a.createElement("a",{href:l},"IMDB"))))}),h=function(e){var t=e.movies,a=void 0===t?[]:t;return i.a.createElement("div",{className:"movies"},a.map((function(e){return i.a.createElement(p,Object.assign({key:e.imdbId},e))})))},v=a(1),g=a.n(v),b=a(2),f=a(3),w=a(9),M=a.n(w),E=(a(24),function(){var e=Object(b.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.omdbapi.com/?apikey=7246e96f&t=").concat(t));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=function(e){var t=e.addMovie,a=Object(n.useState)(""),r=Object(f.a)(a,2),l=r[0],c=r[1],s=Object(n.useState)(null),o=Object(f.a)(s,2),m=o[0],d=o[1],u=Object(n.useState)(!1),h=Object(f.a)(u,2),v=h[0],w=h[1],N=function(){var e=Object(b.a)(g.a.mark((function e(){var t,a,n,i,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(l);case 2:t=e.sent,"https://www.imdb.com/title/",a=t.Title,n=t.Plot,i=t.Poster,r=t.imdbID,"True"===t.Response?(d({title:a,description:n,imgUrl:i,imdbId:r,imdbUrl:"https://www.imdb.com/title/"+r}),w(!1)):(d(null),w(!0));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),N()}},i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{onChange:function(e){var t=e.target.value;c(t)},value:l,type:"text",id:"movie-title",placeholder:"Enter a title to search",className:M()("input",{"is-danger":v})})),v?i.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title"):null),i.a.createElement("div",{className:"field is-grouped"},i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-light",onClick:N},"Find a movie")),i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-primary",onClick:function(){m&&t(m),d(null),c(""),w(!1)}},"Add to the list")))),i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"title"},"Preview"),m?i.a.createElement(p,m):null))},j=a(10),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={movies:j},a.addMovie=function(e){a.setState((function(t){return{movies:[].concat(Object(c.a)(t.movies),[e])}}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.movies;return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(h,{movies:e})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(N,{addMovie:this.addMovie})))}}]),t}(n.Component);l.a.render(i.a.createElement(y,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.d0c8c086.chunk.js.map