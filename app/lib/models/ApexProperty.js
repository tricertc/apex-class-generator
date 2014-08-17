/***
 * Apex Property
 * @param name
 * @param type
 * @constructor
 */
function ApexProperty(type, name) {
  this.name = name;
  this.type = type;
}

ApexProperty.Boolean = 'Boolean';
ApexProperty.Decimal = 'Decimal';
ApexProperty.Integer = 'Integer';
ApexProperty.String = 'String';

/***
 * Overridden toString() method
 * @returns {string}
 */
ApexProperty.prototype.toString = function () {
  return 'public ' + this.type + ' ' + this.name + ' { get; set; }';
};

module.exports = ApexProperty;