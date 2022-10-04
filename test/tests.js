const assert = require('assert');
const expect = require('chai').expect;
const describe = require('mocha').describe;
const app = require('../index.js');
const stdout = require("test-console").stdout;
const stderr = require("test-console").stderr;
const sinon = require('sinon');

// test data //
let todos = ['feed cat', 'do laundry', 'do dishes'];

let sampleObj = {
  organization: 'Operation Spark',
  city: 'New Orleans, LA',
  course: {
    name: 'Bootcamp',
    language: 'JavaScript'
  }
};

let sampleObj2 = {
  a: 1,
  b: 2,
};

let arr = ['a', 'b', 'c', 'd'];
// end test data //

describe('#createNumberedList', function(){
  it('should return a string', function(){
    assert.equal(typeof app.createNumberedList(todos), 'string');
  });
  it ('should return correct string of todos', function(){
    let result = `1. feed cat\n2. do laundry\n3. do dishes`;
    assert.equal(app.createNumberedList(todos), result);
  });
});

describe("#createStringFromObj", function(){
  it('should return a string', function(){
    assert.equal(typeof app.createStringFromObj(sampleObj), 'string');
  });
  it('should return a correct string based on the input object', function(){
    assert.equal(app.createStringFromObj(sampleObj), "I am learning JavaScript at Operation Spark's Bootcamp course in New Orleans, LA.");
  });
});

describe("#accessEvenIndexes", function(){
  it('should print only the items at the even indexes', function(){
    const inspect = stdout.inspect();
    app.accessEvenIndexes(arr);
    inspect.restore();
    assert.deepEqual(inspect.output, [
      'a\n',
      'c\n'
    ])
  });
});

describe("#OddIndexesInReverse", function(){
  it('should print only the items at the odd indexes in reverse', function(){
    const inspect = stdout.inspect();
    app.accessOddIndexesInReverse(arr);
    inspect.restore();
    assert.deepEqual(inspect.output, [
      'd\n',
      'b\n'
    ])
  });
});

describe("#makePropsNull", function(){
  it('should return an object', function(){
    assert.equal(typeof app.makePropsNull(sampleObj2), 'object');
    assert.equal(Array.isArray(app.makePropsNull(sampleObj2)), false);
  })
  it('should return an object where the value at each key is null', function(){
    assert.deepEqual(app.makePropsNull(sampleObj2), { a: null, b: null });
  });
});
