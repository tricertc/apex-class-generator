var fs = require('fs');
var path = require('path');

exports.load = function (filename) {
  return fs.readFileSync(path.join(__dirname, 'static', filename), 'utf-8');
};