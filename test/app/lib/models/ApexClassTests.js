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

    it('should accept and set an option subclass', function () {
      var c = new ApexClass('MyClass', true);
      assert.equal(true, c.getIsSubclass());
    });
  });

  describe('#addProperty()', function () {
    it('should add a property to the class', function () {
      var c = new ApexClass();
      c.addProperty(new ApexProperty());
      assert.equal(1, c.getProperties().length);
    });
  });

  describe('#addClass()', function () {
    it('should add a class to the class list', function () {
      var c = new ApexClass();
      c.addClass(new ApexClass());
      assert.equal(1, c.getClasses().length);
    });
  });

  describe('#toString()', function () {
    it('should print a primitives class', function () {
      var apex = load('primitives.apex');

      var c = new ApexClass();
      c.addProperty(new ApexProperty(ApexProperty.String, 'myString'));
      c.addProperty(new ApexProperty(ApexProperty.Boolean, 'myBoolean'));
      c.addProperty(new ApexProperty(ApexProperty.Integer, 'myInteger'));
      c.addProperty(new ApexProperty(ApexProperty.Decimal, 'myDecimal'));

      assert.equal(apex, c.toString());
    });

    it('should print a class with a simple object', function () {
      var apex = load('simple-object.apex');

      var sub = new ApexClass('myObjectClass', true);
      sub.addProperty(new ApexProperty(ApexProperty.String, 'myString'));
      sub.addProperty(new ApexProperty(ApexProperty.Boolean, 'myBoolean'));
      sub.addProperty(new ApexProperty(ApexProperty.Integer, 'myInteger'));
      sub.addProperty(new ApexProperty(ApexProperty.Decimal, 'myDecimal'));

      var c = new ApexClass();
      c.addClass(sub);
      c.addProperty(new ApexProperty('myObjectClass', 'myObject'));

      assert.equal(apex, c.toString());
    });
  });
});