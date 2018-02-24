var express = require('express');

var app = express();

//Routes

//Home
app.get('/', function(req, res){
  res.send("this is the response from the server saying it got the request");
});

//Luke
app.get('/luke', function(req, res){
  res.send("this is a server response on the Luke page");
});

app.listen(3000, function(){
  console.log("The app is running on port 3000.");
});
