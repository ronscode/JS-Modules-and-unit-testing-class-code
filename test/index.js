// Import the library
const assert = require('chai').assert;
const should = require('chai').should;

// Get the file to test
const index = require('../index.js');

describe('index.js', () => {
  it('Adding 2 numbers works', () => {
    const result = index.addNumbers(3,4)
    assert.equal(result, 7)
  });

  it('Adding 2 numbers works in number', () => {
    const result = index.addNumbers(3,4)
    assert.typeOf(result, "number")
  });

  it('Adding 2 numbers works in number', () => {
    const result = index.subtractNumbers(10,4)
    assert.equal(result, 6)
  });

  it('There is a function called lowerUpper', () => {
    const result = index.lowerUpper("3", "3")
    assert.typeOf(result, "string")
  });

  it('Should be a number ', () => {
    const result = index.lowerUpper("3", "3")
    result.should.be.a('string');
  });

});