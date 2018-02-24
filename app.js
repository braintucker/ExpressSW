var express = require('express');

var app = express();


//view engine
app.set('view engine', 'ejs');


//Routes

//Home
app.get('/', function(req, res){
  res.render('home', {
    title: "Star Wars Movies"
  });
});

//movie_single
app.get('/star_wars_episode/:episode_number?', function(req, res){
  var episode_number = req.params.episode_number;
  res.send("this is the page for episode " + episode_number);
});


//notFound
app.get('*', function(req, res){
  res.send("this is not the page you are looking for...because it doesn't exist");
});

app.listen(3000, function(){
  console.log("The app is running on port 3000.");
});
