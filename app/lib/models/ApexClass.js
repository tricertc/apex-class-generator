var eol = require('os').EOL;

/***
 * Apex Class
 * @param name
 * @constructor
 */
function ApexClass(name) {
  this.name = name || 'GeneratedApexClass';
  this.properties = [];
}

/***
 * Add an ApexProperty to the class
 * @param {ApexProperty} property
 */
ApexClass.prototype.addProperty = function (property) {
  this.properties.push(property);
};

/***
 * Overridden toString() method
 * @returns {string}
 */
ApexClass.prototype.toString = function () {
  var apex = 'public class ' + this.name + eol + '{' + eol;

  this.properties.forEach(function (p) {
    apex += '    ' + p.toString() + eol;
  });

  return apex + '}';
};

module.exports = ApexClass;