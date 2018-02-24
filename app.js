var express = require('express');

var app = express();


//view engine
app.set('view engine', 'ejs');

//telling app to look for routes
var routes = require('./routes');

//finding directory of static assets
var path = require('path');
app.use(express.static(path.join(__dirname, "public")));


//Routes

//Home
app.get('/', routes.home);

//movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);


//notFound
app.get('*', routes.notFound);

app.listen(3000, function(){
  console.log("The app is running on port 3000.");
});
