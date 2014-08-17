function ApexProperty(name, type) {
  this.name = name;
  this.type = type;
}

ApexProperty.Boolean = 'Boolean';
ApexProperty.Decimal = 'Decimal';
ApexProperty.Integer = 'Integer';
ApexProperty.String = 'String';

ApexProperty.prototype.toString = function () {
  return 'public ' + this.type + ' ' + this.name + ' { get; set; }';
};

module.exports = ApexProperty;