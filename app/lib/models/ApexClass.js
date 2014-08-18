var eol = require('os').EOL;

/***
 * Apex Class
 * @param {string} [name]
 * @param {boolean} [isSubclass]
 * @constructor
 */
function ApexClass(name, isSubclass) {
  this._name = name || 'GeneratedApexClass';
  this._isSubclass = !!isSubclass;
  this._properties = [];
  this._classes = [];
}

/***
 * Add an ApexProperty to the class
 * @param {ApexProperty} apexProperty
 */
ApexClass.prototype.addProperty = function (apexProperty) {
  this._properties.push(apexProperty);
};

/***
 * Add an ApexClass to the class list
 * @param {ApexClass} apexClass
 */
ApexClass.prototype.addClass = function (apexClass) {
  this._classes.push(apexClass);
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
 * Getter for classes array
 * @returns {Array}
 */
ApexClass.prototype.getClasses = function () {
  return this._classes;
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