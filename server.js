var express = require('express');
var mustache = require('mustache-express');
var bodyParser = require('body-parser');
var app = express();

var generator = require('./app/lib/apexGenerator');
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded());

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.set('view cache', false);

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/', function (req, res) {
  var json = req.body.string || JSON.stringify({});
  var result = { success: true };
  var apex;

  try {
    result.apex = generator.fromJSON(json);
  }
  catch (e) {
    result.success = false;
    result.message = e.toString();
  }

  console.log(result);

  res.render('result', result);
});

app.listen(port);