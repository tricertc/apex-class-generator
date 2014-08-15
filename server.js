var express = require('express');
var mustache = require('mustache-express');
var app = express();

var generator = require('./app/lib/apexGenerator');
var port = process.env.PORT || 8080;

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.set('view cache', false);

app.get('/', function (req, res) {
  res.render('index', {

  });
});

app.listen(port);