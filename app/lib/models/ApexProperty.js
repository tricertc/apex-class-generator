/***
 * Apex Property
 * @param name
 * @param type
 * @constructor
 */
function ApexProperty(type, name) {
  this._name = name;
  this._type = type;
}

ApexProperty.Boolean = 'Boolean';
ApexProperty.Decimal = 'Decimal';
ApexProperty.Integer = 'Integer';
ApexProperty.String = 'String';

/***
 * Getter for name property
 * @returns {string}
 */
ApexProperty.prototype.getName = function () {
  return this._name;
};

/***
 * Getter for type property
 * @returns {string}
 */
ApexProperty.prototype.getType = function () {
  return this._type;
};

/***
 * Overridden toString() method
 * @returns {string}
 */
ApexProperty.prototype.toString = function () {
  return 'public ' + this._type + ' ' + this._name + ' { get; set; }';
};

module.exports = ApexProperty;