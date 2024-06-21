const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('should return 4 when adding 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when adding 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when adding 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when adding 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Edge cases
  it('should return 0 when adding 0 and 0', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle negative numbers correctly', function() {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
  });

  it('should round up .5 correctly', function() {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });
});