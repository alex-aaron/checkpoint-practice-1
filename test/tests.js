const assert = require('assert');
const expect = require('chai').expect;
const describe = require('mocha').describe;
const app = require('../index.js');
const stdout = require("test-console").stdout;
const stderr = require("test-console").stderr;
const sinon = require('sinon');

// test data //
var todos = ['feed cat', 'do laundry', 'do dishes'];
var sampleObj = {
  organization: 'Operation Spark',
  city: 'New Orleans, LA',
  course: {
    name: 'Bootcamp',
    language: 'JavaScript'
  }
};
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
