var assert = require('assert');
var ApexProperty = require('../../../../app/lib/models/ApexProperty');

describe('ApexProperty.js', function () {
  it('has static type constants defined', function () {
    assert.equal(true, ApexProperty.Boolean === 'Boolean');
    assert.equal(true, ApexProperty.String === 'String');
    assert.equal(true, ApexProperty.Integer === 'Integer');
    assert.equal(true, ApexProperty.Decimal === 'Decimal');
  });

  describe('#toString()', function () {
    it('should print property for given name and type', function () {
      var property = new ApexProperty(ApexProperty.Integer, 'foo');
      assert.equal('public Integer foo { get; set; }', property.toString());
    });
  });
});