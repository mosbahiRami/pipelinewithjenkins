// Exemple adapté de la mise en route d'Express : 
// http://expressjs.com/fr/starter/hello-world.html
var express = require('express');
var app = express();

// '/' est la route racine
app.get('/', function (req, res) {
  res.send('Bonjour Jenkins for rami mosbahi pipeline !');
});

app.listen(4000, function () {
  console.log("Application d'exemple écoutant sur le port 4000 !!gddsfddesdds!!!");
});
