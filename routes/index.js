var moviesJSON = require('../movies.json');





//Home
exports.home =  function(req, res){

  var movies = moviesJSON.movies;



  res.render('home', {
    title: "Star Wars Movies",
    movies: movies
  });
};

//movie_single
exports.movie_single =  function(req, res){
  //grabbing episode number from the req url that is created in app.js
  var episode_number = req.params.episode_number;
  var movies = moviesJSON.movies;

  if (episode_number >= 1 && episode_number <= 6) {
      var movie = movies[episode_number-1];
      var title = movie.title;

    res.render('movie_single', {
      title: title,
      movies: movies,
      movie: movie
    });
  } else {
    res.send("this is not the page you are looking for");
  }

};


//notFound
exports.notFound =  function(req, res){
  res.send("this is not the page you are looking for...because it doesn't exist");
};
