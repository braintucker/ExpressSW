//Home
exports.home =  function(req, res){
  res.render('home', {
    title: "Star Wars Movies",
    movies: ["1st", "2nd", "3rd", "4th", "5th", "6th"]
  });
};

//movie_single
exports.movie_single =  function(req, res){
  var episode_number = req.params.episode_number;
  res.send("this is the page for episode " + episode_number);
};


//notFound
exports.notFound =  function(req, res){
  res.send("this is not the page you are looking for...because it doesn't exist");
};
