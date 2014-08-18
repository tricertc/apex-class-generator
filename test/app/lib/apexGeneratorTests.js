var assert = require('assert');
var generator = require('../../../app/lib/apexGenerator');
var load = require('../../staticLoader').load;

describe('apexGenerator.js', function () {
  it('should have a fromJSON method', function () {
    assert.equal(true, !!generator.fromJSON, 'fromJSON() method missing');
  });

  describe('#fromJSON()', function () {
    it('should convert a simple JSON to Apex', function () {
      var json = load('primitives.json');
      var apex = load('primitives.apex');

      assert.equal(apex, generator.fromJSON(json));
    });

    it('should convert a simple, embedded object to Apex', function () {
      var json = load('simple-object.json');
      var apex = load('simple-object.apex');

      assert.equal(apex, generator.fromJSON(json));
    });
  });
});