var assert = require('assert');
var ApexClass = require('../../../../app/lib/models/ApexClass');
var ApexProperty = require('../../../../app/lib/models/ApexProperty');
var load = require('../../../staticLoader').load;

describe('ApexClass.js', function () {
  it('should have a default name of GeneratedApexClass', function () {
    var c = new ApexClass();
    assert.equal('GeneratedApexClass', c.getName());
  });

  describe('#constructor()', function () {
    it('should accept and set an optional name', function () {
      var name = 'MyClass';
      var c = new ApexClass(name);
      assert.equal(name, c.getName());
    });
  });

  describe('#addProperty()', function () {
    it('should add a property to the class', function () {
      var c = new ApexClass();
      c.addProperty(new ApexProperty());
      assert.equal(1, c.getProperties().length);
    });
  });

  describe('#toString()', function () {
    it('should print a simple class', function () {
      var apex = load('primitives.apex');

      var c = new ApexClass();
      c.addProperty(new ApexProperty(ApexProperty.String, 'myString'));
      c.addProperty(new ApexProperty(ApexProperty.Boolean, 'myBoolean'));
      c.addProperty(new ApexProperty(ApexProperty.Integer, 'myInteger'));
      c.addProperty(new ApexProperty(ApexProperty.Decimal, 'myDecimal'));

      assert.equal(apex, c.toString());
    });
  });
});