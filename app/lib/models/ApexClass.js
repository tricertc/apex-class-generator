var eol = require('os').EOL;

/***
 * Apex Class
 * @param name
 * @constructor
 */
function ApexClass(name, isSubclass) {
  this._name = name || 'GeneratedApexClass';
  this._properties = [];
  this._isSubclass = !!isSubclass;
}

/***
 * Add an ApexProperty to the class
 * @param {ApexProperty} property
 */
ApexClass.prototype.addProperty = function (property) {
  this._properties.push(property);
};

/***
 * Getter for name
 * @returns {*|string}
 */
ApexClass.prototype.getName = function () {
  return this._name;
};

/***
 * Getter for properties array
 * @returns {Array}
 */
ApexClass.prototype.getProperties = function () {
  return this._properties;
};

/***
 * Getter for isSubclass flag
 * @returns {boolean|*}
 */
ApexClass.prototype.getIsSubclass = function () {
  return this._isSubclass;
};

/***
 * Overridden toString() method
 * @returns {string}
 */
ApexClass.prototype.toString = function () {
  var apex = 'public class ' + this._name + eol + '{' + eol;

  this._properties.forEach(function (p) {
    apex += '    ' + p.toString() + eol;
  });

  return apex + '}';
};

module.exports = ApexClass;